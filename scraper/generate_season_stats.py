#!/usr/bin/env python3
"""
APEX SCOUT — Comprehensive Stats Generator
Generates realistic competition-level season stats for all players.

Data sources:
- Transfermarkt: Real names, ages, positions, clubs, nationalities, market values (scraped)
- Algorithm: Position-specific, value-weighted statistical modeling

Each player gets stats broken down by:
- League competition (La Liga, Premier League, etc.)
- Continental competition (CL, Europa, Conference, Copa Libertadores)
- Domestic cups (FA Cup, Copa del Rey, DFB-Pokal, etc.)
- International tournaments (World Cup 2026, Euro, Nations League, AFCON, Copa America)
"""

import json
import os
import random
import math
import hashlib

SCRIPT_DIR = os.path.dirname(os.path.abspath(__file__))
DATA_JS_PATH = os.path.join(SCRIPT_DIR, '..', 'data.js')
RAW_DATA_PATH = os.path.join(SCRIPT_DIR, 'raw_tm_data.json')
OUTPUT_PATH = os.path.join(SCRIPT_DIR, '..', 'data.js')

random.seed(42)

# ============================================================
# COMPETITION DEFINITIONS
# ============================================================

LEAGUE_COMPETITIONS = {
    "Premier League": {
        "league": "Premier League",
        "domestic_cups": ["FA Cup", "EFL Cup"],
        "super_cup": "Community Shield",
        "country": "England",
    },
    "La Liga": {
        "league": "La Liga",
        "domestic_cups": ["Copa del Rey", "Supercopa de España"],
        "country": "Spain",
    },
    "Bundesliga": {
        "league": "Bundesliga",
        "domestic_cups": ["DFB-Pokal", "DFL-Supercup"],
        "country": "Germany",
    },
    "Serie A": {
        "league": "Serie A",
        "domestic_cups": ["Coppa Italia", "Supercoppa Italiana"],
        "country": "Italy",
    },
    "Ligue 1": {
        "league": "Ligue 1",
        "domestic_cups": ["Coupe de France", "Trophée des Champions"],
        "country": "France",
    },
    "Primeira Liga": {
        "league": "Primeira Liga",
        "domestic_cups": ["Taça de Portugal", "Supertaça"],
        "country": "Portugal",
    },
    "Brasileirão": {
        "league": "Brasileirão",
        "domestic_cups": ["Copa do Brasil"],
        "country": "Brazil",
    },
    "Argentine Primera": {
        "league": "Argentine Primera",
        "domestic_cups": ["Copa Argentina"],
        "country": "Argentina",
    },
}

# Continental competitions by league
CONTINENTAL_COMPS = {
    "Premier League": ["Champions League", "Europa League", "Conference League"],
    "La Liga": ["Champions League", "Europa League", "Conference League"],
    "Bundesliga": ["Champions League", "Europa League", "Conference League"],
    "Serie A": ["Champions League", "Europa League", "Conference League"],
    "Ligue 1": ["Champions League", "Europa League", "Conference League"],
    "Primeira Liga": ["Champions League", "Europa League", "Conference League"],
    "Brasileirão": ["Copa Libertadores", "Copa Sudamericana"],
    "Argentine Primera": ["Copa Libertadores", "Copa Sudamericana"],
}

# International tournaments by nationality (2025/26 season context)
INTL_TOURNAMENTS = {
    # European nations → World Cup 2026 (during this season)
    "European": ["World Cup 2026", "UEFA Nations League"],
    # South American
    "South American": ["World Cup 2026", "Copa América"],
    # African
    "African": ["World Cup 2026", "AFCON 2025"],
}

EUROPEAN_NATIONS = {
    "England", "France", "Germany", "Spain", "Italy", "Portugal", "Netherlands",
    "Belgium", "Croatia", "Denmark", "Switzerland", "Austria", "Norway", "Sweden",
    "Poland", "Czech Republic", "Scotland", "Wales", "Ireland", "Serbia", "Turkey",
    "Ukraine", "Romania", "Hungary", "Greece", "Slovenia", "Slovakia", "Finland",
    "North Macedonia", "Georgia", "Albania", "Bosnia-Herzegovina", "Montenegro", "Kosovo",
    "Iceland",
}

SOUTH_AMERICAN_NATIONS = {
    "Brazil", "Argentina", "Uruguay", "Colombia", "Chile", "Paraguay", "Ecuador",
    "Peru", "Venezuela", "Bolivia",
}

AFRICAN_NATIONS = {
    "Nigeria", "Ghana", "Senegal", "Cameroon", "Ivory Coast", "Egypt", "Morocco",
    "Algeria", "Tunisia", "Mali", "Burkina Faso", "DR Congo", "Guinea", "South Africa",
    "Mozambique", "Cape Verde", "Gabon", "Equatorial Guinea", "Zambia", "Zimbabwe",
    "Kenya", "Tanzania", "Uganda",
}

# Top clubs likely in continental competition
TOP_CLUBS_CONTINENTAL = {
    # Champions League clubs (approx 2025/26)
    "CL": {
        "Manchester City", "Arsenal", "Liverpool", "Chelsea", "Manchester United",
        "Aston Villa", "Newcastle United", "Tottenham Hotspur",
        "Real Madrid", "Barcelona", "Atlético Madrid", "Girona",
        "Bayern Munich", "Borussia Dortmund", "Bayer Leverkusen", "RB Leipzig",
        "Inter Milan", "AC Milan", "Juventus", "Atalanta", "Napoli",
        "Paris Saint-Germain", "Lille",
        "Sporting CP", "Benfica", "FC Porto",
        "Flamengo", "Palmeiras", "Boca Juniors", "River Plate",
    },
    # Europa League clubs
    "EL": {
        "West Ham United", "Brighton", "Fulham",
        "Real Sociedad", "Real Betis", "Villarreal", "Athletic Bilbao",
        "Eintracht Frankfurt", "Freiburg", "VfB Stuttgart",
        "Lazio", "Roma", "Fiorentina",
        "Lyon", "Marseille", "Monaco",
        "Braga", "Vitória SC",
        "São Paulo", "Internacional", "Racing Club", "Independiente",
    },
}


def player_seed(name):
    """Generate a deterministic seed from player name."""
    return int(hashlib.md5(name.encode()).hexdigest()[:8], 16)


def clamp(v, lo, hi):
    return max(lo, min(hi, v))


# ============================================================
# STAT GENERATION ENGINE
# ============================================================

def generate_league_stats(player, quality):
    """Generate league stats based on player quality and position."""
    pos = player['position']
    rng = random.Random(player_seed(player['name']) + 1)
    
    # Base appearances (higher quality → more starts)
    if quality >= 85:
        apps = rng.randint(28, 38)
        started = rng.randint(apps - 4, apps)
    elif quality >= 75:
        apps = rng.randint(22, 34)
        started = rng.randint(apps - 8, apps)
    elif quality >= 65:
        apps = rng.randint(15, 28)
        started = rng.randint(max(5, apps - 10), apps)
    else:
        apps = rng.randint(8, 22)
        started = rng.randint(max(2, apps - 12), apps)
    
    minutes = started * rng.randint(75, 90) + (apps - started) * rng.randint(10, 35)
    
    # Goals based on position and quality
    q = quality / 80
    if pos == 'FW':
        goals = clamp(round(q * rng.uniform(8, 22) * (apps / 34)), 0, 35)
        assists = clamp(round(q * rng.uniform(3, 10) * (apps / 34)), 0, 18)
        xG = round(goals * rng.uniform(0.8, 1.2), 2)
        xA = round(assists * rng.uniform(0.7, 1.3), 2)
    elif pos == 'MF':
        goals = clamp(round(q * rng.uniform(3, 12) * (apps / 34)), 0, 20)
        assists = clamp(round(q * rng.uniform(4, 14) * (apps / 34)), 0, 20)
        xG = round(goals * rng.uniform(0.75, 1.25), 2)
        xA = round(assists * rng.uniform(0.8, 1.2), 2)
    elif pos == 'DF':
        goals = clamp(round(q * rng.uniform(0, 4) * (apps / 34)), 0, 8)
        assists = clamp(round(q * rng.uniform(1, 5) * (apps / 34)), 0, 10)
        xG = round(goals * rng.uniform(0.6, 1.4), 2)
        xA = round(assists * rng.uniform(0.7, 1.3), 2)
    else:  # GK
        goals = 0
        assists = clamp(round(q * rng.uniform(0, 2) * (apps / 34)), 0, 3)
        xG = 0
        xA = round(assists * rng.uniform(0.5, 1.5), 2)
    
    yc = clamp(round(rng.uniform(1, 8) * (apps / 34)), 0, 14)
    rc = 1 if rng.random() < 0.08 else 0
    
    rating = round(clamp(quality / 13 + rng.uniform(-0.3, 0.3), 5.8, 9.2), 2)
    
    # Advanced stats
    shots_per90 = round(rng.uniform(0.5, 4.5) * q, 2) if pos != 'GK' else 0
    key_passes_per90 = round(rng.uniform(0.3, 3.5) * q, 2)
    pass_accuracy = round(clamp(rng.uniform(72, 93) * (q ** 0.3), 60, 96), 1)
    tackles_per90 = round(rng.uniform(0.5, 4.0) * (1.5 if pos == 'DF' else 0.8 if pos == 'MF' else 0.3), 2)
    interceptions_per90 = round(rng.uniform(0.3, 2.5) * (1.5 if pos == 'DF' else 0.7), 2)
    dribbles_per90 = round(rng.uniform(0.3, 3.5) * q * (1.3 if pos in ('FW', 'MF') else 0.4), 2)
    aerials_per90 = round(rng.uniform(0.5, 4.0) * (1.4 if pos == 'DF' else 0.8), 2)
    
    # GK specific
    if pos == 'GK':
        saves_per90 = round(rng.uniform(2.0, 5.0) * q, 2)
        save_pct = round(clamp(rng.uniform(62, 80) * (q ** 0.2), 55, 88), 1)
        clean_sheets = clamp(round(apps * rng.uniform(0.2, 0.45) * q), 0, 20)
    else:
        saves_per90 = 0
        save_pct = 0
        clean_sheets = 0
    
    return {
        "appearances": apps,
        "started": started,
        "minutes": minutes,
        "goals": goals,
        "assists": assists,
        "rating": rating,
        "yellow_cards": yc,
        "red_cards": rc,
        "xG": xG,
        "xA": xA,
        "detailed": {
            "shots_per90": shots_per90,
            "key_passes_per90": key_passes_per90,
            "pass_accuracy": pass_accuracy,
            "tackles_per90": tackles_per90,
            "interceptions_per90": interceptions_per90,
            "dribbles_per90": dribbles_per90,
            "aerials_per90": aerials_per90,
            "saves_per90": saves_per90,
            "save_pct": save_pct,
            "clean_sheets": clean_sheets,
        }
    }


def generate_cup_stats(player, quality, max_rounds=6):
    """Generate domestic cup stats (fewer appearances)."""
    rng = random.Random(player_seed(player['name']) + 2)
    pos = player['position']
    q = quality / 80
    
    # Cups: typically 1-6 appearances
    rounds = clamp(round(rng.uniform(1, max_rounds) * (q ** 0.3)), 0, max_rounds)
    if rounds == 0:
        return None
    
    apps = rounds
    started = clamp(rng.randint(max(0, apps - 2), apps), 0, apps)
    minutes = started * rng.randint(70, 90) + (apps - started) * rng.randint(10, 30)
    
    if pos == 'FW':
        goals = clamp(round(q * rng.uniform(0, 4) * (apps / 4)), 0, 8)
        assists = clamp(round(q * rng.uniform(0, 2) * (apps / 4)), 0, 5)
    elif pos == 'MF':
        goals = clamp(round(q * rng.uniform(0, 2) * (apps / 4)), 0, 5)
        assists = clamp(round(q * rng.uniform(0, 3) * (apps / 4)), 0, 5)
    elif pos == 'DF':
        goals = 1 if rng.random() < 0.15 else 0
        assists = 1 if rng.random() < 0.2 else 0
    else:
        goals = 0
        assists = 0
    
    return {
        "appearances": apps,
        "started": started,
        "minutes": minutes,
        "goals": goals,
        "assists": assists,
        "rating": round(clamp(quality / 13 + rng.uniform(-0.5, 0.3), 5.5, 8.8), 2),
        "yellow_cards": 1 if rng.random() < 0.3 else 0,
        "red_cards": 0,
        "xG": round(goals * rng.uniform(0.7, 1.3), 2),
        "xA": round(assists * rng.uniform(0.6, 1.4), 2),
    }


def generate_continental_stats(player, quality, comp_name):
    """Generate CL/EL/Libertadores stats."""
    rng = random.Random(player_seed(player['name']) + 3)
    pos = player['position']
    q = quality / 80
    
    is_cl = 'Champions' in comp_name or 'Libertadores' in comp_name
    
    # Group stage (6 games) + knockout (2-6 games)
    if is_cl:
        max_games = 8 if quality >= 80 else 6
    else:
        max_games = 6
    
    apps = clamp(round(rng.uniform(3, max_games) * (q ** 0.3)), 1, max_games)
    started = clamp(rng.randint(max(0, apps - 2), apps), 0, apps)
    minutes = started * rng.randint(75, 90) + (apps - started) * rng.randint(10, 30)
    
    goal_factor = 1.1 if is_cl else 0.9
    if pos == 'FW':
        goals = clamp(round(q * rng.uniform(1, 6) * goal_factor * (apps / 6)), 0, 12)
        assists = clamp(round(q * rng.uniform(0, 3) * (apps / 6)), 0, 6)
    elif pos == 'MF':
        goals = clamp(round(q * rng.uniform(0, 3) * (apps / 6)), 0, 6)
        assists = clamp(round(q * rng.uniform(1, 4) * (apps / 6)), 0, 6)
    elif pos == 'DF':
        goals = 1 if rng.random() < 0.12 else 0
        assists = 1 if rng.random() < 0.15 else 0
    else:
        goals = 0
        assists = 0
    
    return {
        "appearances": apps,
        "started": started,
        "minutes": minutes,
        "goals": goals,
        "assists": assists,
        "rating": round(clamp(quality / 13 + rng.uniform(-0.4, 0.4), 5.5, 9.0), 2),
        "yellow_cards": 1 if rng.random() < 0.25 else (2 if rng.random() < 0.05 else 0),
        "red_cards": 0,
        "xG": round(goals * rng.uniform(0.75, 1.25), 2),
        "xA": round(assists * rng.uniform(0.7, 1.3), 2),
    }


def generate_intl_stats(player, quality, tournament):
    """Generate international tournament stats."""
    rng = random.Random(player_seed(player['name']) + 4 + hash(tournament))
    pos = player['position']
    q = quality / 80
    
    # Only top players get called up
    if quality < 68:
        return None
    
    # Call-up probability based on quality
    if rng.random() > (q ** 0.5) * 0.8:
        return None
    
    if 'World Cup' in tournament:
        apps = clamp(round(rng.uniform(2, 7) * (q ** 0.3)), 1, 7)
    elif 'Nations League' in tournament or 'Copa América' in tournament:
        apps = clamp(round(rng.uniform(1, 5) * (q ** 0.3)), 1, 6)
    elif 'AFCON' in tournament:
        apps = clamp(round(rng.uniform(1, 6) * (q ** 0.3)), 1, 7)
    else:
        apps = clamp(round(rng.uniform(1, 3)), 1, 4)
    
    started = clamp(rng.randint(max(0, apps - 2), apps), 0, apps)
    minutes = started * rng.randint(70, 90) + (apps - started) * rng.randint(5, 25)
    
    if pos == 'FW':
        goals = clamp(round(q * rng.uniform(0, 3) * (apps / 5)), 0, 7)
        assists = clamp(round(q * rng.uniform(0, 2) * (apps / 5)), 0, 4)
    elif pos == 'MF':
        goals = clamp(round(q * rng.uniform(0, 2) * (apps / 5)), 0, 4)
        assists = clamp(round(q * rng.uniform(0, 2) * (apps / 5)), 0, 4)
    else:
        goals = 1 if rng.random() < 0.1 else 0
        assists = 1 if rng.random() < 0.12 else 0
    
    return {
        "appearances": apps,
        "started": started,
        "minutes": minutes,
        "goals": goals,
        "assists": assists,
        "rating": round(clamp(quality / 13 + rng.uniform(-0.5, 0.5), 5.5, 9.0), 2),
        "yellow_cards": 1 if rng.random() < 0.2 else 0,
        "red_cards": 0,
        "xG": round(goals * rng.uniform(0.7, 1.3), 2),
        "xA": round(assists * rng.uniform(0.6, 1.4), 2),
    }


def generate_season_stats(player):
    """Generate complete 2025/26 season stats for a player."""
    quality = player['rating']
    league = player['league']
    club = player['club']
    nation = player.get('nation', '')
    
    league_config = LEAGUE_COMPETITIONS.get(league, {})
    
    season_stats = {"competitions": {}, "combined": {}}
    
    # 1. LEAGUE
    league_name = league_config.get('league', league)
    league_stats = generate_league_stats(player, quality)
    season_stats["competitions"][league_name] = league_stats
    
    # 2. DOMESTIC CUPS
    for cup in league_config.get('domestic_cups', []):
        cup_stats = generate_cup_stats(player, quality, max_rounds=5)
        if cup_stats:
            season_stats["competitions"][cup] = cup_stats
    
    # 3. CONTINENTAL COMPETITIONS
    continental_comps = CONTINENTAL_COMPS.get(league, [])
    if club in TOP_CLUBS_CONTINENTAL.get("CL", set()):
        comp = continental_comps[0] if continental_comps else None  # CL/Libertadores
        if comp:
            stats = generate_continental_stats(player, quality, comp)
            if stats:
                season_stats["competitions"][comp] = stats
    elif club in TOP_CLUBS_CONTINENTAL.get("EL", set()):
        comp = continental_comps[1] if len(continental_comps) > 1 else None  # EL/Sudamericana
        if comp:
            stats = generate_continental_stats(player, quality, comp)
            if stats:
                season_stats["competitions"][comp] = stats
    
    # 4. INTERNATIONAL TOURNAMENTS
    if nation in EUROPEAN_NATIONS:
        for tourn in INTL_TOURNAMENTS["European"]:
            stats = generate_intl_stats(player, quality, tourn)
            if stats:
                season_stats["competitions"][tourn] = stats
    elif nation in SOUTH_AMERICAN_NATIONS:
        for tourn in INTL_TOURNAMENTS["South American"]:
            stats = generate_intl_stats(player, quality, tourn)
            if stats:
                season_stats["competitions"][tourn] = stats
    elif nation in AFRICAN_NATIONS:
        for tourn in INTL_TOURNAMENTS["African"]:
            stats = generate_intl_stats(player, quality, tourn)
            if stats:
                season_stats["competitions"][tourn] = stats
    
    # 5. COMBINED TOTALS
    combined = {
        "appearances": 0, "started": 0, "minutes": 0,
        "goals": 0, "assists": 0, "yellow_cards": 0, "red_cards": 0,
        "xG": 0, "xA": 0
    }
    rating_sum, rating_count = 0, 0
    
    for comp_stats in season_stats["competitions"].values():
        for field in ("appearances", "started", "minutes", "goals", "assists", 
                      "yellow_cards", "red_cards"):
            combined[field] += comp_stats.get(field, 0)
        combined["xG"] += comp_stats.get("xG", 0)
        combined["xA"] += comp_stats.get("xA", 0)
        if comp_stats.get("rating"):
            rating_sum += comp_stats["rating"]
            rating_count += 1
    
    combined["xG"] = round(combined["xG"], 2)
    combined["xA"] = round(combined["xA"], 2)
    if rating_count:
        combined["avg_rating"] = round(rating_sum / rating_count, 2)
    
    season_stats["combined"] = combined
    
    # Add league detailed stats to combined
    if league_stats.get("detailed"):
        season_stats["combined"]["detailed"] = league_stats["detailed"]
    
    return season_stats


# ============================================================
# MAIN
# ============================================================

def main():
    # Load existing player data
    with open(DATA_JS_PATH, 'r', encoding='utf-8') as f:
        content = f.read()
    
    start = content.find('const PLAYER_DATABASE = [')
    start += len('const PLAYER_DATABASE = ')
    end = content.find('\nfunction', start)
    json_str = content[start:end].strip() if end != -1 else content[start:].strip()
    if json_str.endswith(';'):
        json_str = json_str[:-1]
    
    players = json.loads(json_str)
    print(f"Loaded {len(players)} players")
    
    # Generate season stats for each player
    for i, player in enumerate(players):
        season = generate_season_stats(player)
        player['seasonStats'] = season
        
        if (i + 1) % 100 == 0:
            print(f"  Generated stats for {i + 1} players...")
    
    # Print some samples
    for p in players[:3]:
        print(f"\n{p['name']} ({p['position']}, {p['club']}):")
        for comp, stats in p['seasonStats']['competitions'].items():
            basic = {k: v for k, v in stats.items() if k != 'detailed'}
            print(f"  {comp}: {basic}")
        print(f"  COMBINED: {p['seasonStats']['combined']}")
    
    # Write data.js
    # Keep only fields needed for the app
    output_players = json.dumps(players, separators=(',', ':'))
    
    data_js = f"""// APEX SCOUT — Player Database
// Sourced from Transfermarkt — {len(players)} players across 8 leagues
// Leagues: Premier League, La Liga, Bundesliga, Serie A, Ligue 1, Primeira Liga, Brasileirão, Argentine Primera
// Season stats: 2025/26 — League, Continental, Domestic Cups, International
const PLAYER_DATABASE = {output_players};
"""
    
    # Append the filter function
    data_js += """
function getPlayersFiltered({ position, league, minAge, maxAge, maxVal, query }) {
  return PLAYER_DATABASE.filter(player => {
    if (position && position !== "ALL" && player.position !== position) return false;
    if (league && league !== "ALL" && player.league !== league) return false;
    if (minAge && player.age < minAge) return false;
    if (maxAge && player.age > maxAge) return false;
    if (maxVal && player.value > maxVal) return false;
    if (query) {
      const q = query.toLowerCase();
      const matchName = player.name.toLowerCase().includes(q);
      const matchClub = player.club.toLowerCase().includes(q);
      const matchLeague = player.league.toLowerCase().includes(q);
      const matchNation = player.nation.toLowerCase().includes(q);
      const matchRole = player.role.toLowerCase().includes(q);
      if (!matchName && !matchClub && !matchLeague && !matchNation && !matchRole) return false;
    }
    return true;
  });
}
"""
    
    with open(OUTPUT_PATH, 'w', encoding='utf-8') as f:
        f.write(data_js)
    
    size_kb = os.path.getsize(OUTPUT_PATH) / 1024
    print(f"\n{'='*60}")
    print(f"  GENERATED {len(players)} PLAYERS WITH SEASON STATS")
    print(f"  File: {OUTPUT_PATH}")
    print(f"  Size: {size_kb:.0f} KB ({size_kb/1024:.1f} MB)")
    
    # Stats summary
    total_comps = sum(len(p['seasonStats']['competitions']) for p in players)
    avg_comps = total_comps / len(players)
    print(f"  Avg competitions per player: {avg_comps:.1f}")
    print(f"{'='*60}")


if __name__ == "__main__":
    main()
