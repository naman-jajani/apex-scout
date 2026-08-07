#!/usr/bin/env python3
"""
APEX SCOUT — Data Generator
Transforms raw FBRef scraped data + Transfermarkt values into data.js
"""

import json
import os
import re
import sys
import math
import hashlib

# Add parent dir to path
sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
from fbref_scraper import (
    safe_float, safe_int, parse_age, parse_nationality,
    normalize_position, make_player_id, load_raw_data
)

# ── Market Value Estimation ───────────────────────────────────────
# Tier multipliers based on league prestige
LEAGUE_VALUE_TIER = {
    'Premier League': 1.4,
    'La Liga': 1.15,
    'Bundesliga': 1.1,
    'Serie A': 1.05,
    'Ligue 1': 0.95,
    'Primeira Liga': 0.7,
    'Brasileirão': 0.55,
    'Argentine Primera': 0.45,
}

POSITION_VALUE_MULT = {'FW': 1.3, 'MF': 1.1, 'DF': 0.9, 'GK': 0.7}

def estimate_market_value(player, league_name):
    """Estimate market value in EUR based on age, rating, position, league."""
    age = player.get('_age', 25)
    rating = player.get('_rating', 65)
    pos = player.get('_position', 'MF')
    apps = player.get('_apps', 0)

    # Base value from rating (exponential curve)
    if rating >= 90:
        base = 80_000_000
    elif rating >= 85:
        base = 45_000_000
    elif rating >= 80:
        base = 25_000_000
    elif rating >= 75:
        base = 12_000_000
    elif rating >= 70:
        base = 6_000_000
    elif rating >= 65:
        base = 3_000_000
    else:
        base = 1_000_000

    # Age factor: peak value at 25-27, drops after 30
    if age <= 20:
        age_mult = 1.3  # High potential premium
    elif age <= 23:
        age_mult = 1.5  # Young star premium
    elif age <= 27:
        age_mult = 1.2  # Peak years
    elif age <= 30:
        age_mult = 0.85
    elif age <= 33:
        age_mult = 0.5
    else:
        age_mult = 0.25

    league_mult = LEAGUE_VALUE_TIER.get(league_name, 0.8)
    pos_mult = POSITION_VALUE_MULT.get(pos, 1.0)

    # Minutes/experience factor
    exp_mult = min(1.0, apps / 20) if apps > 0 else 0.3

    value = base * age_mult * league_mult * pos_mult * exp_mult
    # Round to nearest 100k
    return int(round(value / 100_000) * 100_000)


# ── Attribute Calculators ─────────────────────────────────────────
def clamp(v, lo=30, hi=99):
    return max(lo, min(hi, int(round(v))))


def calc_gk_attributes(p):
    """Calculate composite attributes for goalkeepers."""
    save_pct = safe_float(p.get('keepers_gk_save_pct'))
    cs = safe_int(p.get('keepers_gk_clean_sheets'))
    ga90 = safe_float(p.get('keepers_gk_goals_against_per90'), 1.5)
    pass_acc = safe_float(p.get('passing_passes_pct'), 60)
    psxg_diff = safe_float(p.get('keepersadv_gk_psxg_net'))
    apps = safe_float(p.get('minutes_90s'), 1)

    defending = clamp(40 + save_pct * 0.6 + cs * 0.8 - ga90 * 3)
    passing = clamp(30 + pass_acc * 0.6)
    physicality = clamp(70 + psxg_diff * 2)
    tactical = clamp(55 + save_pct * 0.3 + cs * 0.4)
    workrate = clamp(60 + min(apps, 30) * 1.0)
    pace = clamp(45 + max(0, 60 - ga90 * 8))
    dribbling = clamp(35 + pass_acc * 0.2)

    return {
        'pace': pace, 'dribbling': dribbling, 'passing': passing,
        'defending': defending, 'physicality': physicality,
        'tactical': tactical, 'workrate': workrate
    }


def calc_outfield_attributes(p, pos):
    """Calculate composite attributes for outfield players."""
    # Extract raw stats
    goals90 = safe_float(p.get('goals_per90'))
    assists90 = safe_float(p.get('assists_per90'))
    xg90 = safe_float(p.get('xg_per90'))
    shots_ot90 = safe_float(p.get('shooting_shots_on_target_per90'))
    pass_acc = safe_float(p.get('passing_passes_pct'), 60)
    key_passes = safe_float(p.get('passing_assisted_shots'))
    prog_passes = safe_float(p.get('progressive_passes'))
    tackles_won = safe_float(p.get('defense_tackles_won'))
    interceptions = safe_float(p.get('defense_interceptions'))
    clearances = safe_float(p.get('defense_clearances'))
    blocks = safe_float(p.get('defense_blocks'))
    tkl_pct = safe_float(p.get('defense_challenge_tackles_pct'))
    dribbles_won = safe_float(p.get('possession_take_ons_won'))
    dribble_pct = safe_float(p.get('possession_take_ons_won_pct'))
    prog_carries = safe_float(p.get('progressive_carries'))
    touches_att = safe_float(p.get('possession_touches_att_pen_area'))
    apps = safe_float(p.get('minutes_90s'), 1)
    minutes = safe_int(p.get('minutes'), 0)
    ga = safe_int(p.get('goals_assists'), 0)

    # Normalize per 90 where needed
    if apps > 0:
        tackles_w90 = tackles_won / apps
        int90 = interceptions / apps
        clear90 = clearances / apps
        blocks90 = blocks / apps
        drib_w90 = dribbles_won / apps
        kp90 = key_passes / apps
        prog_p90 = prog_passes / apps
        prog_c90 = prog_carries / apps
        touches_att90 = touches_att / apps
    else:
        tackles_w90 = int90 = clear90 = blocks90 = drib_w90 = 0
        kp90 = prog_p90 = prog_c90 = touches_att90 = 0

    # PACE: based on progressive carries, dribble attempts, touches in attacking areas
    pace = clamp(50 + prog_c90 * 5 + drib_w90 * 3 + touches_att90 * 1.5)

    # DRIBBLING: dribble success, progressive carries
    dribbling = clamp(45 + drib_w90 * 6 + dribble_pct * 0.3 + prog_c90 * 2)

    # PASSING: pass accuracy, key passes, progressive passes
    passing = clamp(35 + pass_acc * 0.5 + kp90 * 8 + prog_p90 * 2)

    # DEFENDING: tackles, interceptions, clearances, blocks
    defending = clamp(30 + tackles_w90 * 8 + int90 * 10 + clear90 * 3 + blocks90 * 4 + tkl_pct * 0.2)

    # PHYSICALITY: minutes played (durability), tackles, clearances, aerial presence
    physicality = clamp(45 + min(minutes, 2500) / 80 + tackles_w90 * 3 + clear90 * 2)

    # TACTICAL: xG involvement, progressive actions, passing quality
    tactical = clamp(45 + (xg90 + safe_float(p.get('xg_assist_per90'))) * 15 + prog_p90 * 1.5 + prog_c90 * 1.5 + pass_acc * 0.2)

    # WORKRATE: minutes, apps, defensive actions
    workrate = clamp(45 + min(apps, 30) * 1.0 + tackles_w90 * 3 + int90 * 3)

    # Position-specific boosting
    if pos == 'FW':
        pace = clamp(pace + goals90 * 10 + shots_ot90 * 3)
        dribbling = clamp(dribbling + goals90 * 5)
    elif pos == 'DF':
        defending = clamp(defending + 5)
        physicality = clamp(physicality + 3)
    elif pos == 'MF':
        passing = clamp(passing + 3)
        tactical = clamp(tactical + 3)

    return {
        'pace': pace, 'dribbling': dribbling, 'passing': passing,
        'defending': defending, 'physicality': physicality,
        'tactical': tactical, 'workrate': workrate
    }


def calc_rating(attrs, pos, p):
    """Calculate overall rating (0-99) based on position-weighted attributes."""
    a = attrs
    apps = safe_float(p.get('minutes_90s'), 0)
    goals = safe_int(p.get('goals'), 0)
    assists = safe_int(p.get('assists'), 0)

    if pos == 'GK':
        base = (a['defending'] * 0.35 + a['physicality'] * 0.2 +
                a['passing'] * 0.15 + a['tactical'] * 0.15 + a['workrate'] * 0.15)
    elif pos == 'DF':
        base = (a['defending'] * 0.30 + a['physicality'] * 0.20 +
                a['tactical'] * 0.15 + a['passing'] * 0.15 +
                a['pace'] * 0.10 + a['workrate'] * 0.10)
    elif pos == 'FW':
        base = (a['pace'] * 0.20 + a['dribbling'] * 0.20 +
                a['passing'] * 0.10 + a['tactical'] * 0.15 +
                a['physicality'] * 0.10 + a['workrate'] * 0.10 +
                a['defending'] * 0.05)
        # Goal bonus for forwards
        if apps > 0:
            base += min(10, (goals / apps) * 15)
    else:  # MF
        base = (a['passing'] * 0.22 + a['tactical'] * 0.20 +
                a['dribbling'] * 0.15 + a['defending'] * 0.13 +
                a['workrate'] * 0.12 + a['physicality'] * 0.10 +
                a['pace'] * 0.08)

    # Experience bonus (small boost for consistent starters)
    if apps >= 25:
        base += 3
    elif apps >= 15:
        base += 2
    elif apps >= 5:
        base += 1

    return clamp(base, 40, 99)


def detect_role(pos, p):
    """Detect playing role from stats."""
    if pos == 'GK':
        pass_acc = safe_float(p.get('passing_passes_pct'), 60)
        return 'Sweeper Keeper' if pass_acc > 78 else 'Shot Stopper'
    elif pos == 'DF':
        tackles = safe_float(p.get('defense_tackles_won'), 0)
        prog_p = safe_float(p.get('progressive_passes'), 0)
        apps = safe_float(p.get('minutes_90s'), 1)
        assists = safe_int(p.get('assists'), 0)
        if assists / max(apps, 1) > 0.15 or prog_p / max(apps, 1) > 5:
            return 'Attacking Fullback'
        elif tackles / max(apps, 1) > 3:
            return 'Ball-Winning Defender'
        elif safe_float(p.get('passing_passes_pct'), 0) > 82:
            return 'Ball-Playing Centre Back'
        else:
            return 'Central Defender'
    elif pos == 'FW':
        goals = safe_int(p.get('goals'), 0)
        assists = safe_int(p.get('assists'), 0)
        dribbles = safe_float(p.get('possession_take_ons_won'), 0)
        apps = safe_float(p.get('minutes_90s'), 1)
        if goals / max(apps, 1) > 0.4:
            return 'Goal Poacher'
        elif assists / max(apps, 1) > 0.2 or dribbles / max(apps, 1) > 2:
            return 'Complete Winger / Striker'
        elif safe_float(p.get('possession_touches_att_pen_area'), 0) / max(apps, 1) > 5:
            return 'Target Forward'
        else:
            return 'Inside Forward'
    else:  # MF
        goals90 = safe_float(p.get('goals_per90'), 0)
        kp = safe_float(p.get('passing_assisted_shots'), 0)
        tackles = safe_float(p.get('defense_tackles_won'), 0)
        apps = safe_float(p.get('minutes_90s'), 1)
        if kp / max(apps, 1) > 1.5 or goals90 > 0.2:
            return 'Attacking Playmaker'
        elif tackles / max(apps, 1) > 3:
            return 'Defensive Midfielder'
        elif safe_float(p.get('progressive_passes'), 0) / max(apps, 1) > 5:
            return 'Deep-Lying Playmaker'
        else:
            return 'Box-to-Box Midfielder'


def generate_detailed_stats(p, pos):
    """Generate position-specific detailed stats dict."""
    apps = safe_float(p.get('minutes_90s'), 1)

    if pos == 'GK':
        return {
            'savePercentage': safe_float(p.get('keepers_gk_save_pct')),
            'cleanSheets': safe_int(p.get('keepers_gk_clean_sheets')),
            'goalsConceded': safe_int(p.get('keepers_gk_goals_against')),
            'psxgDifference': safe_float(p.get('keepersadv_gk_psxg_net')),
            'passingAccuracy': safe_float(p.get('passing_passes_pct')),
            'sweeperActionsPer90': 0,  # Not available from FBRef standard pages
            'averageDistanceOfSweeperActions': 0,
        }
    elif pos == 'DF':
        return {
            'tacklesWonPer90': safe_float(p.get('defense_tackles_won')) / max(apps, 1),
            'interceptionsPer90': safe_float(p.get('defense_interceptions')) / max(apps, 1),
            'clearancesPer90': safe_float(p.get('defense_clearances')) / max(apps, 1),
            'aerialDuelWinPercentage': safe_float(p.get('defense_challenge_tackles_pct')),
            'tackledDribblerRate': safe_float(p.get('defense_challenge_tackles_pct')),
            'passingAccuracy': safe_float(p.get('passing_passes_pct')),
            'progressivePassesPer90': safe_float(p.get('progressive_passes')) / max(apps, 1),
            'longPassesCompletedPer90': safe_float(p.get('passing_passes_completed_long')) / max(apps, 1),
            'goalsPer90': safe_float(p.get('goals_per90')),
            'shotsOnTargetPer90': safe_float(p.get('shooting_shots_on_target_per90')),
            'expectedGoals': safe_float(p.get('xg')),
            'shotConversionRate': safe_float(p.get('shooting_goals_per_shot')) * 100,
            'touchesInBoxPer90': safe_float(p.get('possession_touches_att_pen_area')) / max(apps, 1),
            'chancesCreated': safe_int(p.get('passing_assisted_shots')),
            'dribblesCompletedPer90': safe_float(p.get('possession_take_ons_won')) / max(apps, 1),
            'keyPassesPer90': safe_float(p.get('passing_assisted_shots')) / max(apps, 1),
        }
    elif pos == 'FW':
        return {
            'goalsPer90': safe_float(p.get('goals_per90')),
            'shotsOnTargetPer90': safe_float(p.get('shooting_shots_on_target_per90')),
            'expectedGoals': safe_float(p.get('xg')),
            'shotConversionRate': safe_float(p.get('shooting_goals_per_shot')) * 100,
            'touchesInBoxPer90': safe_float(p.get('possession_touches_att_pen_area')) / max(apps, 1),
            'chancesCreated': safe_int(p.get('passing_assisted_shots')),
            'dribblesCompletedPer90': safe_float(p.get('possession_take_ons_won')) / max(apps, 1),
            'keyPassesPer90': safe_float(p.get('passing_assisted_shots')) / max(apps, 1),
        }
    else:  # MF
        return {
            'goalsPer90': safe_float(p.get('goals_per90')),
            'shotsOnTargetPer90': safe_float(p.get('shooting_shots_on_target_per90')),
            'expectedGoals': safe_float(p.get('xg')),
            'shotConversionRate': safe_float(p.get('shooting_goals_per_shot')) * 100,
            'touchesInBoxPer90': safe_float(p.get('possession_touches_att_pen_area')) / max(apps, 1),
            'chancesCreated': safe_int(p.get('passing_assisted_shots')),
            'dribblesCompletedPer90': safe_float(p.get('possession_take_ons_won')) / max(apps, 1),
            'keyPassesPer90': safe_float(p.get('passing_assisted_shots')) / max(apps, 1),
            'passingAccuracy': safe_float(p.get('passing_passes_pct')),
            'progressivePassesPer90': safe_float(p.get('progressive_passes')) / max(apps, 1),
            'tacklesWonPer90': safe_float(p.get('defense_tackles_won')) / max(apps, 1),
            'interceptionsPer90': safe_float(p.get('defense_interceptions')) / max(apps, 1),
            'ballRecoveriesPer90': (safe_float(p.get('defense_tackles_won')) + safe_float(p.get('defense_interceptions'))) / max(apps, 1),
        }


def generate_league_benchmarks(p, pos, league_stats):
    """Generate league benchmark comparisons."""
    apps = safe_float(p.get('minutes_90s'), 1)
    benchmarks = []

    if pos == 'GK':
        metrics = [
            ('Save %', safe_float(p.get('keepers_gk_save_pct')), 'gk_save_pct'),
            ('Clean Sheets', safe_int(p.get('keepers_gk_clean_sheets')), 'gk_cs'),
            ('Passing Accuracy %', safe_float(p.get('passing_passes_pct')), 'pass_pct'),
        ]
    elif pos == 'DF':
        metrics = [
            ('Tackles Won p90', round(safe_float(p.get('defense_tackles_won')) / max(apps, 1), 2), 'tkl_w90'),
            ('Interceptions p90', round(safe_float(p.get('defense_interceptions')) / max(apps, 1), 2), 'int90'),
            ('Passing Accuracy %', safe_float(p.get('passing_passes_pct')), 'pass_pct'),
            ('Progressive Passes p90', round(safe_float(p.get('progressive_passes')) / max(apps, 1), 2), 'prog_p90'),
        ]
    elif pos == 'FW':
        metrics = [
            ('Goals per 90', safe_float(p.get('goals_per90')), 'g90'),
            ('xG', safe_float(p.get('xg')), 'xg'),
            ('Shot Conversion %', round(safe_float(p.get('shooting_goals_per_shot')) * 100, 1), 'conv'),
            ('Key Passes per 90', round(safe_float(p.get('passing_assisted_shots')) / max(apps, 1), 2), 'kp90'),
        ]
    else:
        metrics = [
            ('Key Passes per 90', round(safe_float(p.get('passing_assisted_shots')) / max(apps, 1), 2), 'kp90'),
            ('Progressive Passes p90', round(safe_float(p.get('progressive_passes')) / max(apps, 1), 2), 'prog_p90'),
            ('Chances Created', safe_int(p.get('passing_assisted_shots')), 'chances'),
            ('Passing Accuracy %', safe_float(p.get('passing_passes_pct')), 'pass_pct'),
        ]

    for label, val, key in metrics:
        avg = league_stats.get(f'{key}_avg', val * 0.6)
        elite = league_stats.get(f'{key}_elite', val * 1.2)
        benchmarks.append({
            'metric': label,
            'player': round(val, 2) if isinstance(val, float) else val,
            'avg': round(avg, 2) if isinstance(avg, float) else avg,
            'elite': round(elite, 2) if isinstance(elite, float) else elite,
        })
    return benchmarks


def generate_heatmap(pos):
    """Generate position-appropriate heatmap data."""
    if pos == 'GK':
        return [
            {'x': 50, 'y': 6, 'r': 35, 'v': 0.98},
            {'x': 50, 'y': 14, 'r': 28, 'v': 0.70},
            {'x': 45, 'y': 8, 'r': 22, 'v': 0.55},
            {'x': 55, 'y': 8, 'r': 22, 'v': 0.55},
        ]
    elif pos == 'DF':
        return [
            {'x': 45, 'y': 25, 'r': 30, 'v': 0.90},
            {'x': 55, 'y': 25, 'r': 30, 'v': 0.90},
            {'x': 50, 'y': 35, 'r': 25, 'v': 0.65},
            {'x': 50, 'y': 18, 'r': 22, 'v': 0.50},
        ]
    elif pos == 'FW':
        return [
            {'x': 50, 'y': 85, 'r': 30, 'v': 0.92},
            {'x': 40, 'y': 78, 'r': 25, 'v': 0.75},
            {'x': 60, 'y': 78, 'r': 25, 'v': 0.75},
            {'x': 50, 'y': 70, 'r': 20, 'v': 0.50},
        ]
    else:  # MF
        return [
            {'x': 50, 'y': 50, 'r': 30, 'v': 0.88},
            {'x': 40, 'y': 55, 'r': 25, 'v': 0.72},
            {'x': 60, 'y': 55, 'r': 25, 'v': 0.72},
            {'x': 50, 'y': 40, 'r': 22, 'v': 0.55},
            {'x': 50, 'y': 65, 'r': 20, 'v': 0.50},
        ]


def identify_strengths_weaknesses(attrs):
    """Identify top 3 strengths and top 2 weaknesses from attributes."""
    label_map = {
        'pace': 'Pace', 'dribbling': 'Dribbling', 'passing': 'Passing',
        'defending': 'Defending', 'physicality': 'Physicality',
        'tactical': 'Tactical IQ', 'workrate': 'Work Rate',
    }
    sorted_attrs = sorted(attrs.items(), key=lambda x: x[1], reverse=True)
    strengths = [label_map[k] for k, v in sorted_attrs[:3]]
    weaknesses = [label_map[k] for k, v in sorted_attrs[-2:]]
    return strengths, weaknesses


def compute_league_stats(players_raw, pos_filter=None):
    """Compute league-wide averages and elite thresholds for benchmarks."""
    # Simplified: return reasonable defaults
    return {
        'gk_save_pct_avg': 69.5, 'gk_save_pct_elite': 77.0,
        'gk_cs_avg': 4.5, 'gk_cs_elite': 10.0,
        'pass_pct_avg': 78.0, 'pass_pct_elite': 88.0,
        'tkl_w90_avg': 1.8, 'tkl_w90_elite': 3.5,
        'int90_avg': 0.8, 'int90_elite': 2.0,
        'prog_p90_avg': 2.8, 'prog_p90_elite': 6.2,
        'g90_avg': 0.15, 'g90_elite': 0.45,
        'xg_avg': 3.0, 'xg_elite': 12.0,
        'conv_avg': 10.0, 'conv_elite': 22.0,
        'kp90_avg': 0.9, 'kp90_elite': 2.2,
        'chances_avg': 16, 'chances_elite': 55,
    }


def generate_data_js(all_data, output_path, tm_values=None):
    """Generate the final data.js file from all scraped data."""
    all_players = []
    seen_ids = set()

    for league_name, players in all_data.items():
        league_stats = compute_league_stats(players)
        print(f"\nProcessing {league_name} ({len(players)} players)...")

        for (name, team), p in players.items():
            if not name or name == 'Player':
                continue

            # Skip players with too few minutes (< 90 mins total)
            minutes = safe_int(p.get('minutes'), 0)
            if minutes < 90:
                continue

            pos = normalize_position(p.get('position', ''))
            age = parse_age(p.get('age', ''))
            nation = parse_nationality(p.get('nationality', ''))
            apps = safe_int(p.get('games', 0))

            # Calculate attributes
            if pos == 'GK':
                attrs = calc_gk_attributes(p)
            else:
                attrs = calc_outfield_attributes(p, pos)

            # Store for rating calc
            p['_age'] = age
            p['_position'] = pos
            p['_apps'] = apps

            # Calculate rating
            rating = calc_rating(attrs, pos, p)
            p['_rating'] = rating

            # Generate ID
            player_id = make_player_id(name, team)
            # Handle duplicate IDs
            base_id = player_id
            counter = 2
            while player_id in seen_ids:
                player_id = f"{base_id}-{counter}"
                counter += 1
            seen_ids.add(player_id)

            # Detect role
            role = detect_role(pos, p)

            # Market value
            if tm_values and name in tm_values:
                value = tm_values[name]
            else:
                value = estimate_market_value(p, league_name)

            # Detailed stats
            detailed = generate_detailed_stats(p, pos)

            # Round all floats in detailed stats
            for k, v in detailed.items():
                if isinstance(v, float):
                    detailed[k] = round(v, 2)

            # Strengths/weaknesses
            strengths, weaknesses = identify_strengths_weaknesses(attrs)

            # League benchmarks
            benchmarks = generate_league_benchmarks(p, pos, league_stats)

            # Heatmap
            heatmap = generate_heatmap(pos)

            player_entry = {
                'id': player_id,
                'name': name,
                'age': age,
                'position': pos,
                'role': role,
                'club': team,
                'league': league_name,
                'nation': nation,
                'value': value,
                'rating': rating,
                'general': {
                    'apps': apps,
                    'mins': minutes,
                    'goals': safe_int(p.get('goals')),
                    'assists': safe_int(p.get('assists')),
                    'yellowCards': safe_int(p.get('cards_yellow')),
                    'redCards': safe_int(p.get('cards_red')),
                },
                'attributes': attrs,
                'detailedStats': detailed,
                'leagueBenchmarks': benchmarks,
                'heatmap': heatmap,
                'strengths': strengths,
                'weaknesses': weaknesses,
            }

            all_players.append(player_entry)

    # Sort by rating descending
    all_players.sort(key=lambda x: x['rating'], reverse=True)

    print(f"\n{'='*60}")
    print(f"  GENERATED {len(all_players)} PLAYERS")
    print(f"{'='*60}")

    # Stats
    positions = {}
    leagues = {}
    for p in all_players:
        positions[p['position']] = positions.get(p['position'], 0) + 1
        leagues[p['league']] = leagues.get(p['league'], 0) + 1

    print(f"  Positions: {positions}")
    print(f"  Leagues: {leagues}")

    # Write data.js
    js_content = "// Football Scout App - Player Database\n"
    js_content += f"// Auto-generated from FBRef data — {len(all_players)} players across {len(leagues)} leagues\n"
    js_content += "const PLAYER_DATABASE = "
    js_content += json.dumps(all_players, ensure_ascii=False, indent=2)
    js_content += ";\n"

    with open(output_path, 'w', encoding='utf-8') as f:
        f.write(js_content)

    file_size = os.path.getsize(output_path)
    print(f"  File size: {file_size / 1024 / 1024:.1f} MB")
    print(f"  Written to: {output_path}")

    return all_players


if __name__ == '__main__':
    script_dir = os.path.dirname(os.path.abspath(__file__))
    raw_path = os.path.join(script_dir, 'raw_fbref_data.json')
    output_path = os.path.join(script_dir, '..', 'data.js')

    if not os.path.exists(raw_path):
        print("ERROR: raw_fbref_data.json not found. Run fbref_scraper.py first.")
        sys.exit(1)

    print("Loading raw FBRef data...")
    all_data = load_raw_data(raw_path)
    total = sum(len(v) for v in all_data.values())
    print(f"Loaded {total} players from {len(all_data)} leagues.")

    # Generate data.js
    generate_data_js(all_data, output_path)
