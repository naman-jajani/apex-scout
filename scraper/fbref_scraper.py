#!/usr/bin/env python3
"""
APEX SCOUT — FBRef Stats Scraper
Scrapes real player statistics from FBRef for 8 top-flight leagues.
Uses data-stat attributes for reliable column identification.
"""

import requests
import pandas as pd
from io import StringIO
from bs4 import BeautifulSoup
import time
import json
import os
import sys
import re

# ── Configuration ─────────────────────────────────────────────────
HEADERS = {
    'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'
}
REQUEST_DELAY = 5  # seconds between requests (FBRef rate limit)

LEAGUES = {
    'Premier League':    {'id': 9,  'slug': 'Premier-League-Stats'},
    'La Liga':           {'id': 12, 'slug': 'La-Liga-Stats'},
    'Bundesliga':        {'id': 20, 'slug': 'Bundesliga-Stats'},
    'Serie A':           {'id': 11, 'slug': 'Serie-A-Stats'},
    'Ligue 1':           {'id': 13, 'slug': 'Ligue-1-Stats'},
    'Primeira Liga':     {'id': 32, 'slug': 'Primeira-Liga-Stats'},
    'Brasileirão':       {'id': 24, 'slug': 'Serie-A-Stats'},
    'Argentine Primera': {'id': 21, 'slug': 'Primera-Division-Stats'},
}

# Stat pages to scrape per league
STAT_PAGES = {
    'standard':   {'path': 'stats',       'table_id': 'stats_standard'},
    'shooting':   {'path': 'shooting',    'table_id': 'stats_shooting'},
    'passing':    {'path': 'passing',     'table_id': 'stats_passing'},
    'defense':    {'path': 'defense',     'table_id': 'stats_defense'},
    'possession': {'path': 'possession',  'table_id': 'stats_possession'},
    'keepers':    {'path': 'keepers',     'table_id': 'stats_keeper'},
    'keepersadv': {'path': 'keepersadv',  'table_id': 'stats_keeper_adv'},
}

# Columns to extract from each stat page (using data-stat attribute names)
COLUMNS = {
    'standard': [
        'player', 'nationality', 'position', 'team', 'age', 'birth_year',
        'games', 'games_starts', 'minutes', 'minutes_90s',
        'goals', 'assists', 'goals_assists', 'goals_pens', 'pens_made',
        'cards_yellow', 'cards_red',
        'xg', 'npxg', 'xg_assist',
        'progressive_carries', 'progressive_passes',
        'goals_per90', 'assists_per90', 'xg_per90', 'xg_assist_per90',
    ],
    'shooting': [
        'player', 'team', 'shots', 'shots_on_target', 'shots_on_target_pct',
        'shots_per90', 'shots_on_target_per90',
        'goals_per_shot', 'goals_per_shot_on_target',
        'average_shot_distance', 'xg', 'npxg', 'npxg_per_shot', 'xg_net',
    ],
    'passing': [
        'player', 'team', 'passes_completed', 'passes', 'passes_pct',
        'passes_total_distance', 'passes_progressive_distance',
        'passes_completed_short', 'passes_pct_short',
        'passes_completed_medium', 'passes_pct_medium',
        'passes_completed_long', 'passes_long', 'passes_pct_long',
        'assists', 'xg_assist', 'pass_xa', 'assisted_shots',
        'passes_into_final_third', 'passes_into_penalty_area',
        'crosses_into_penalty_area', 'progressive_passes',
    ],
    'defense': [
        'player', 'team', 'minutes_90s',
        'tackles', 'tackles_won', 'tackles_def_3rd', 'tackles_mid_3rd', 'tackles_att_3rd',
        'challenge_tackles', 'challenges', 'challenge_tackles_pct', 'challenges_lost',
        'blocks', 'blocked_shots', 'blocked_passes',
        'interceptions', 'tackles_interceptions', 'clearances', 'errors',
    ],
    'possession': [
        'player', 'team',
        'touches', 'touches_def_pen_area', 'touches_def_3rd',
        'touches_mid_3rd', 'touches_att_3rd', 'touches_att_pen_area',
        'take_ons', 'take_ons_won', 'take_ons_won_pct',
        'take_ons_tackled', 'take_ons_tackled_pct',
        'carries', 'carries_distance', 'carries_progressive_distance',
        'progressive_carries', 'carries_into_final_third', 'carries_into_penalty_area',
        'miscontrols', 'dispossessed',
        'passes_received', 'progressive_passes_received',
    ],
    'keepers': [
        'player', 'team', 'minutes_90s',
        'gk_goals_against', 'gk_goals_against_per90',
        'gk_shots_on_target_against', 'gk_saves', 'gk_save_pct',
        'gk_wins', 'gk_ties', 'gk_losses',
        'gk_clean_sheets', 'gk_clean_sheets_pct',
        'gk_pens_att', 'gk_pens_allowed', 'gk_pens_saved', 'gk_pens_save_pct',
    ],
    'keepersadv': [
        'player', 'team',
        'gk_psxg', 'gk_psxg_net', 'gk_psxg_net_per90',
    ],
}


def build_url(league_id, stat_path, slug):
    return f"https://fbref.com/en/comps/{league_id}/{stat_path}/{slug}"


def scrape_fbref_table(url, table_id, wanted_cols=None):
    """
    Scrape a single table from FBRef.
    Uses data-stat attributes for column identification.
    Returns a list of dicts (one per player row).
    """
    print(f"    Fetching: {url}")
    resp = requests.get(url, headers=HEADERS, timeout=30)
    resp.raise_for_status()

    # Strip HTML comments so hidden tables become visible
    html = resp.text.replace('<!--', '').replace('-->', '')
    soup = BeautifulSoup(html, 'lxml')

    table = soup.find('table', id=table_id)
    if not table:
        print(f"    ⚠ Table '{table_id}' not found at {url}")
        return []

    tbody = table.find('tbody')
    if not tbody:
        print(f"    ⚠ No tbody in table '{table_id}'")
        return []

    rows = []
    for tr in tbody.find_all('tr'):
        # Skip spacer/header-repeat rows
        if tr.get('class') and 'thead' in tr.get('class', []):
            continue
        # Skip rows where the player cell repeats the header
        player_cell = tr.find(['th', 'td'], attrs={'data-stat': 'player'})
        if not player_cell or player_cell.text.strip() == 'Player':
            continue

        row = {}
        for cell in tr.find_all(['th', 'td']):
            stat_name = cell.get('data-stat')
            if stat_name and (wanted_cols is None or stat_name in wanted_cols):
                # Get the text content, stripping whitespace
                val = cell.text.strip()
                # For player name, also try to get the link for ID
                if stat_name == 'player':
                    link = cell.find('a')
                    if link and link.get('href'):
                        row['_player_href'] = link['href']
                row[stat_name] = val
        if row.get('player'):
            rows.append(row)

    print(f"    ✓ Got {len(rows)} rows from {table_id}")
    return rows


def safe_float(val, default=0.0):
    """Convert a string to float, handling empty/missing values."""
    if val is None or val == '' or val == 'N/A':
        return default
    try:
        return float(str(val).replace(',', ''))
    except (ValueError, TypeError):
        return default


def safe_int(val, default=0):
    """Convert a string to int, handling empty/missing values."""
    if val is None or val == '' or val == 'N/A':
        return default
    try:
        return int(float(str(val).replace(',', '')))
    except (ValueError, TypeError):
        return default


def parse_age(age_str):
    """Parse FBRef age format (e.g., '23-143' → 23)."""
    if not age_str:
        return 0
    try:
        return int(str(age_str).split('-')[0])
    except (ValueError, IndexError):
        return 0


def parse_nationality(nat_str):
    """Parse nationality — FBRef shows 'eng ENG' format or just country codes."""
    if not nat_str:
        return 'Unknown'
    # Take the last word which is usually the country code
    parts = nat_str.strip().split()
    return parts[-1] if parts else 'Unknown'


def normalize_position(pos_str):
    """Map FBRef position codes to our app's position categories."""
    if not pos_str:
        return 'MF'
    pos = pos_str.upper().strip()
    if 'GK' in pos:
        return 'GK'
    elif 'DF' in pos or 'CB' in pos or 'FB' in pos or 'WB' in pos:
        return 'DF'
    elif 'FW' in pos or 'ST' in pos or 'CF' in pos or 'LW' in pos or 'RW' in pos:
        return 'FW'
    else:
        return 'MF'


def make_player_id(name, club):
    """Generate a slug-style player ID."""
    raw = f"{name}"
    # Normalize unicode, lowercase, replace spaces/special chars with hyphens
    slug = re.sub(r'[^a-z0-9\s-]', '', raw.lower().strip())
    slug = re.sub(r'[\s]+', '-', slug)
    slug = re.sub(r'-+', '-', slug).strip('-')
    return slug or 'unknown'


def scrape_league(league_name, league_config):
    """Scrape all stat pages for a single league and merge data."""
    league_id = league_config['id']
    slug = league_config['slug']
    print(f"\n{'='*60}")
    print(f"  SCRAPING: {league_name}")
    print(f"{'='*60}")

    # Dict to hold merged player data, keyed by (player_name, team)
    players = {}

    for stat_name, stat_config in STAT_PAGES.items():
        url = build_url(league_id, stat_config['path'], slug)
        wanted = COLUMNS.get(stat_name)

        try:
            rows = scrape_fbref_table(url, stat_config['table_id'], wanted)
        except Exception as e:
            print(f"    ✗ Error scraping {stat_name}: {e}")
            rows = []

        for row in rows:
            key = (row.get('player', ''), row.get('team', ''))
            if key[0] == '' or key[0] == 'Player':
                continue
            if key not in players:
                players[key] = {}
            # Merge stats, prefixing with category to avoid collisions
            for k, v in row.items():
                if k in ('player', 'team', '_player_href'):
                    players[key][k] = v
                else:
                    # Use category prefix for non-standard pages
                    col_key = f"{stat_name}_{k}" if stat_name != 'standard' else k
                    players[key][col_key] = v

        time.sleep(REQUEST_DELAY)

    print(f"\n  Total unique players for {league_name}: {len(players)}")
    return players


def scrape_all_leagues():
    """Scrape all configured leagues. Returns {league_name: {player_key: data}}."""
    all_data = {}
    total_start = time.time()

    for league_name, config in LEAGUES.items():
        league_data = scrape_league(league_name, config)
        all_data[league_name] = league_data

    elapsed = time.time() - total_start
    total_players = sum(len(v) for v in all_data.values())
    print(f"\n{'='*60}")
    print(f"  SCRAPING COMPLETE")
    print(f"  Total players: {total_players}")
    print(f"  Time elapsed: {elapsed:.0f}s")
    print(f"{'='*60}")
    return all_data


def save_raw_data(all_data, output_path):
    """Save scraped data as JSON for debugging/caching."""
    # Convert tuple keys to string keys for JSON serialization
    serializable = {}
    for league, players in all_data.items():
        serializable[league] = {}
        for (name, team), data in players.items():
            key = f"{name}|||{team}"
            serializable[league][key] = data
    with open(output_path, 'w', encoding='utf-8') as f:
        json.dump(serializable, f, ensure_ascii=False, indent=2)
    print(f"  Raw data saved to {output_path}")


def load_raw_data(input_path):
    """Load previously scraped raw data from JSON."""
    with open(input_path, 'r', encoding='utf-8') as f:
        serializable = json.load(f)
    all_data = {}
    for league, players in serializable.items():
        all_data[league] = {}
        for key, data in players.items():
            parts = key.split('|||')
            name = parts[0]
            team = parts[1] if len(parts) > 1 else ''
            all_data[league][(name, team)] = data
    return all_data


if __name__ == '__main__':
    output_dir = os.path.dirname(os.path.abspath(__file__))
    raw_path = os.path.join(output_dir, 'raw_fbref_data.json')

    if '--load' in sys.argv and os.path.exists(raw_path):
        print("Loading cached raw data...")
        all_data = load_raw_data(raw_path)
    else:
        all_data = scrape_all_leagues()
        save_raw_data(all_data, raw_path)

    total = sum(len(v) for v in all_data.values())
    print(f"\nReady to generate data.js with {total} players.")
    for league, players in all_data.items():
        print(f"  {league}: {len(players)} players")
