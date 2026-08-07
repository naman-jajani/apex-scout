#!/usr/bin/env python3
"""
APEX SCOUT — Transfermarkt Scraper + Data Generator
Scrapes player data from Transfermarkt and generates data.js
"""

import requests
from bs4 import BeautifulSoup
import json
import os
import re
import time
import sys
import random
import math

# ── Configuration ─────────────────────────────────────────────────
HEADERS = {
    'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
    'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8',
    'Accept-Language': 'en-US,en;q=0.9',
    'Accept-Encoding': 'gzip, deflate, br',
    'Connection': 'keep-alive',
}

LEAGUES = {
    'Premier League':    {'id': 'GB1',  'slug': 'premier-league',      'pages': 4, 'tier': 1.4},
    'La Liga':           {'id': 'ES1',  'slug': 'laliga',              'pages': 4, 'tier': 1.15},
    'Bundesliga':        {'id': 'L1',   'slug': 'bundesliga',          'pages': 4, 'tier': 1.1},
    'Serie A':           {'id': 'IT1',  'slug': 'serie-a',             'pages': 4, 'tier': 1.05},
    'Ligue 1':           {'id': 'FR1',  'slug': 'ligue-1',             'pages': 4, 'tier': 0.95},
    'Primeira Liga':     {'id': 'PO1',  'slug': 'liga-portugal',       'pages': 4, 'tier': 0.7},
    'Brasileirão':       {'id': 'BRA1', 'slug': 'campeonato-brasileiro-serie-a', 'pages': 4, 'tier': 0.55},
    'Argentine Primera': {'id': 'AR1N', 'slug': 'liga-profesional-de-futbol',    'pages': 4, 'tier': 0.45},
}

REQUEST_DELAY_MIN = 3
REQUEST_DELAY_MAX = 6


# ── Transfermarkt Scraper ─────────────────────────────────────────
def parse_market_value(value_str):
    """Parse '€200.00m' or '€500Th.' to integer EUR."""
    if not value_str:
        return 0
    v = value_str.strip().replace('€', '').replace(',', '')
    if 'bn' in v.lower():
        return int(float(v.lower().replace('bn', '').strip()) * 1_000_000_000)
    elif 'm' in v.lower():
        return int(float(v.lower().replace('m', '').strip()) * 1_000_000)
    elif 'th.' in v.lower() or 'k' in v.lower():
        return int(float(v.lower().replace('th.', '').replace('k', '').strip()) * 1_000)
    else:
        try:
            return int(float(v))
        except:
            return 0


def normalize_position(tm_pos):
    """Map Transfermarkt position to app categories."""
    if not tm_pos:
        return 'MF', 'Unknown'
    pos = tm_pos.lower().strip()
    
    if 'goalkeeper' in pos or 'keeper' in pos:
        return 'GK', tm_pos
    elif any(x in pos for x in ['centre-back', 'center-back', 'centre back', 'central defender']):
        return 'DF', 'Centre Back'
    elif any(x in pos for x in ['left-back', 'right-back', 'left back', 'right back', 'full-back', 'fullback']):
        return 'DF', 'Fullback'
    elif any(x in pos for x in ['wing-back', 'wingback']):
        return 'DF', 'Wing-Back'
    elif any(x in pos for x in ['defensive midfield', 'holding midfield']):
        return 'MF', 'Defensive Midfielder'
    elif any(x in pos for x in ['central midfield', 'central mid']):
        return 'MF', 'Box-to-Box Midfielder'
    elif any(x in pos for x in ['attacking midfield', 'attacking mid', 'playmaker']):
        return 'MF', 'Attacking Playmaker'
    elif any(x in pos for x in ['left midfield', 'right midfield', 'wide midfield']):
        return 'MF', 'Wide Midfielder'
    elif any(x in pos for x in ['left winger', 'right winger', 'winger']):
        return 'FW', 'Winger'
    elif any(x in pos for x in ['centre-forward', 'center-forward', 'centre forward', 'striker']):
        return 'FW', 'Centre Forward'
    elif any(x in pos for x in ['second striker', 'shadow striker']):
        return 'FW', 'Second Striker'
    elif 'forward' in pos:
        return 'FW', 'Forward'
    elif 'midfield' in pos:
        return 'MF', 'Midfielder'
    elif 'defend' in pos or 'back' in pos:
        return 'DF', 'Defender'
    else:
        return 'MF', tm_pos


def parse_nationality(row):
    """Extract nationality from img alt tags."""
    nat_tds = row.find_all('td', class_='zentriert')
    for td in nat_tds:
        imgs = td.find_all('img')
        for img in imgs:
            alt = img.get('alt', '').strip()
            title = img.get('title', '').strip()
            # Skip club logos and player photos
            flag_classes = img.get('class', [])
            if 'flaggenrahmen' in flag_classes or 'flaggenrahmen_tiny' in flag_classes:
                return alt or title
            # Check parent for flag hint
            if alt and len(alt) < 30 and 'FC' not in alt and 'United' not in alt:
                parent_class = td.get('class', [])
                # Nationality is usually in the 5th td (index 5)
    return 'Unknown'


def scrape_league_page(league_name, config, page_num, session):
    """Scrape a single page of market values for a league."""
    league_id = config['id']
    slug = config['slug']
    url = f'https://www.transfermarkt.com/{slug}/marktwerte/wettbewerb/{league_id}/page/{page_num}'
    
    print(f"    Fetching page {page_num}: {url}")
    
    try:
        resp = session.get(url, headers=HEADERS, timeout=30)
        resp.raise_for_status()
    except Exception as e:
        print(f"    ✗ Error: {e}")
        return []
    
    soup = BeautifulSoup(resp.text, 'lxml')
    table = soup.find('table', class_='items')
    if not table:
        print(f"    ✗ No player table found")
        return []
    
    rows = table.find_all('tr', class_=['odd', 'even'])
    players = []
    
    for row in rows:
        tds = row.find_all('td')
        if len(tds) < 9:
            continue
        
        # Extract data from known column positions
        name = tds[3].text.strip() if tds[3].text.strip() else None
        if not name:
            continue
            
        tm_position = tds[4].text.strip()
        age = tds[6].text.strip()
        value_str = tds[8].text.strip()
        
        # Get club from img alt in column 7
        club_imgs = tds[7].find_all('img')
        club = club_imgs[0].get('alt', '').strip() if club_imgs else 'Unknown'
        
        # Get nationality from column 5
        nat_imgs = tds[5].find_all('img')
        nationality = nat_imgs[0].get('alt', '').strip() if nat_imgs else 'Unknown'
        
        # Parse values
        pos, role = normalize_position(tm_position)
        
        try:
            age_int = int(age)
        except:
            age_int = 25
        
        value = parse_market_value(value_str)
        
        player = {
            'name': name,
            'age': age_int,
            'position': pos,
            'tm_position': tm_position,
            'role': role,
            'club': club,
            'league': league_name,
            'nation': nationality,
            'value': value,
        }
        players.append(player)
    
    print(f"    ✓ Got {len(players)} players")
    return players


def scrape_all_leagues():
    """Scrape market values for all leagues."""
    session = requests.Session()
    all_players = []
    
    for league_name, config in LEAGUES.items():
        print(f"\n{'='*60}")
        print(f"  SCRAPING: {league_name}")
        print(f"{'='*60}")
        
        seen_names_this_league = set()
        league_players = []
        
        for page in range(1, config['pages'] + 1):
            page_players = scrape_league_page(league_name, config, page, session)
            
            for p in page_players:
                if p['name'] not in seen_names_this_league:
                    seen_names_this_league.add(p['name'])
                    league_players.append(p)
            
            delay = random.uniform(REQUEST_DELAY_MIN, REQUEST_DELAY_MAX)
            time.sleep(delay)
        
        print(f"  Total unique for {league_name}: {len(league_players)}")
        all_players.extend(league_players)
    
    print(f"\n{'='*60}")
    print(f"  SCRAPING COMPLETE: {len(all_players)} total players")
    print(f"{'='*60}")
    return all_players


# ── Data Generation ───────────────────────────────────────────────
def clamp(v, lo=30, hi=99):
    return max(lo, min(hi, int(round(v))))


def generate_attributes(pos, value, age, league_tier):
    """Generate realistic attributes based on position, value, age, and league tier."""
    # Base quality from market value (higher value = better player)
    if value >= 100_000_000:
        quality = random.uniform(88, 96)
    elif value >= 60_000_000:
        quality = random.uniform(82, 90)
    elif value >= 35_000_000:
        quality = random.uniform(76, 84)
    elif value >= 20_000_000:
        quality = random.uniform(72, 80)
    elif value >= 10_000_000:
        quality = random.uniform(66, 76)
    elif value >= 5_000_000:
        quality = random.uniform(60, 72)
    elif value >= 2_000_000:
        quality = random.uniform(55, 67)
    else:
        quality = random.uniform(48, 62)
    
    # League tier adjustment
    quality *= (0.85 + league_tier * 0.15)
    quality = min(quality, 97)
    
    # Young player potential boost (but not too much)
    if age <= 21:
        quality += random.uniform(0, 3)
    elif age >= 32:
        quality -= random.uniform(2, 5)
    
    # Position-specific attribute distribution
    spread = random.uniform(3, 8)  # Variation between attributes
    
    if pos == 'GK':
        return {
            'pace': clamp(quality - spread * 2.5 + random.uniform(-2, 2)),
            'dribbling': clamp(quality - spread * 2 + random.uniform(-2, 2)),
            'passing': clamp(quality - spread * 0.5 + random.uniform(-2, 3)),
            'defending': clamp(quality + spread * 0.8 + random.uniform(-2, 2)),
            'physicality': clamp(quality + spread * 0.3 + random.uniform(-2, 2)),
            'tactical': clamp(quality + random.uniform(-2, 2)),
            'workrate': clamp(quality - spread * 0.5 + random.uniform(-2, 2)),
        }
    elif pos == 'DF':
        return {
            'pace': clamp(quality - spread * 0.3 + random.uniform(-3, 3)),
            'dribbling': clamp(quality - spread * 0.8 + random.uniform(-3, 2)),
            'passing': clamp(quality - spread * 0.2 + random.uniform(-2, 3)),
            'defending': clamp(quality + spread * 0.8 + random.uniform(-2, 2)),
            'physicality': clamp(quality + spread * 0.5 + random.uniform(-2, 2)),
            'tactical': clamp(quality + spread * 0.3 + random.uniform(-2, 2)),
            'workrate': clamp(quality + spread * 0.2 + random.uniform(-2, 2)),
        }
    elif pos == 'FW':
        return {
            'pace': clamp(quality + spread * 0.6 + random.uniform(-2, 3)),
            'dribbling': clamp(quality + spread * 0.5 + random.uniform(-2, 3)),
            'passing': clamp(quality - spread * 0.3 + random.uniform(-3, 2)),
            'defending': clamp(quality - spread * 1.5 + random.uniform(-3, 2)),
            'physicality': clamp(quality - spread * 0.2 + random.uniform(-2, 2)),
            'tactical': clamp(quality + spread * 0.2 + random.uniform(-2, 2)),
            'workrate': clamp(quality - spread * 0.3 + random.uniform(-2, 2)),
        }
    else:  # MF
        return {
            'pace': clamp(quality - spread * 0.1 + random.uniform(-3, 3)),
            'dribbling': clamp(quality + spread * 0.3 + random.uniform(-2, 3)),
            'passing': clamp(quality + spread * 0.6 + random.uniform(-2, 3)),
            'defending': clamp(quality - spread * 0.3 + random.uniform(-3, 2)),
            'physicality': clamp(quality - spread * 0.2 + random.uniform(-2, 2)),
            'tactical': clamp(quality + spread * 0.4 + random.uniform(-2, 2)),
            'workrate': clamp(quality + spread * 0.2 + random.uniform(-2, 2)),
        }


def calc_rating(attrs, pos):
    """Calculate overall rating from attributes."""
    a = attrs
    if pos == 'GK':
        return clamp(a['defending'] * 0.35 + a['physicality'] * 0.2 +
                     a['passing'] * 0.15 + a['tactical'] * 0.15 + a['workrate'] * 0.15)
    elif pos == 'DF':
        return clamp(a['defending'] * 0.30 + a['physicality'] * 0.20 +
                     a['tactical'] * 0.15 + a['passing'] * 0.15 +
                     a['pace'] * 0.10 + a['workrate'] * 0.10)
    elif pos == 'FW':
        return clamp(a['pace'] * 0.20 + a['dribbling'] * 0.20 +
                     a['passing'] * 0.10 + a['tactical'] * 0.15 +
                     a['physicality'] * 0.15 + a['workrate'] * 0.10 +
                     a['defending'] * 0.10)
    else:
        return clamp(a['passing'] * 0.22 + a['tactical'] * 0.20 +
                     a['dribbling'] * 0.15 + a['defending'] * 0.13 +
                     a['workrate'] * 0.12 + a['physicality'] * 0.10 +
                     a['pace'] * 0.08)


def generate_detailed_stats(pos, rating, value):
    """Generate position-specific detailed stats scaled by rating."""
    q = rating / 80  # Quality factor

    if pos == 'GK':
        return {
            'savePercentage': round(60 + q * 12 + random.uniform(-3, 3), 1),
            'cleanSheets': max(0, int(q * 8 + random.uniform(-2, 4))),
            'goalsConceded': max(0, int(35 - q * 12 + random.uniform(-4, 4))),
            'psxgDifference': round((q - 1) * 4 + random.uniform(-1.5, 1.5), 2),
            'passingAccuracy': round(55 + q * 25 + random.uniform(-3, 3), 1),
            'sweeperActionsPer90': round(0.3 + q * 0.8 + random.uniform(-0.2, 0.3), 2),
            'averageDistanceOfSweeperActions': round(12 + q * 4 + random.uniform(-1, 2), 1),
        }
    elif pos == 'DF':
        return {
            'tacklesWonPer90': round(1.0 + q * 1.5 + random.uniform(-0.3, 0.4), 2),
            'interceptionsPer90': round(0.5 + q * 1.2 + random.uniform(-0.2, 0.3), 2),
            'clearancesPer90': round(1.5 + q * 2 + random.uniform(-0.5, 0.5), 2),
            'aerialDuelWinPercentage': round(45 + q * 20 + random.uniform(-5, 5), 1),
            'tackledDribblerRate': round(40 + q * 15 + random.uniform(-5, 5), 1),
            'passingAccuracy': round(70 + q * 15 + random.uniform(-3, 3), 1),
            'progressivePassesPer90': round(1.5 + q * 3 + random.uniform(-0.5, 0.5), 2),
            'longPassesCompletedPer90': round(1 + q * 2.5 + random.uniform(-0.3, 0.5), 2),
            'goalsPer90': round(max(0, 0.01 + q * 0.04 + random.uniform(-0.01, 0.02)), 2),
            'shotsOnTargetPer90': round(0.1 + q * 0.2 + random.uniform(-0.05, 0.1), 2),
            'expectedGoals': round(max(0, 0.5 + q * 1.5 + random.uniform(-0.5, 0.5)), 1),
            'shotConversionRate': round(5 + q * 8 + random.uniform(-3, 3), 1),
            'touchesInBoxPer90': round(0.3 + q * 0.8 + random.uniform(-0.2, 0.2), 2),
            'chancesCreated': max(0, int(2 + q * 6 + random.uniform(-2, 2))),
            'dribblesCompletedPer90': round(0.2 + q * 0.6 + random.uniform(-0.1, 0.2), 2),
            'keyPassesPer90': round(0.2 + q * 0.6 + random.uniform(-0.1, 0.2), 2),
        }
    elif pos == 'FW':
        return {
            'goalsPer90': round(max(0, 0.1 + q * 0.4 + random.uniform(-0.05, 0.1)), 2),
            'shotsOnTargetPer90': round(0.5 + q * 1.2 + random.uniform(-0.2, 0.3), 2),
            'expectedGoals': round(max(0, 2 + q * 10 + random.uniform(-2, 2)), 1),
            'shotConversionRate': round(8 + q * 12 + random.uniform(-3, 4), 1),
            'touchesInBoxPer90': round(2 + q * 4 + random.uniform(-0.5, 0.8), 2),
            'chancesCreated': max(0, int(8 + q * 25 + random.uniform(-4, 6))),
            'dribblesCompletedPer90': round(0.5 + q * 1.8 + random.uniform(-0.3, 0.4), 2),
            'keyPassesPer90': round(0.5 + q * 1.5 + random.uniform(-0.2, 0.3), 2),
        }
    else:  # MF
        return {
            'goalsPer90': round(max(0, 0.03 + q * 0.15 + random.uniform(-0.02, 0.05)), 2),
            'shotsOnTargetPer90': round(0.2 + q * 0.6 + random.uniform(-0.1, 0.2), 2),
            'expectedGoals': round(max(0, 1 + q * 5 + random.uniform(-1, 1.5)), 1),
            'shotConversionRate': round(6 + q * 10 + random.uniform(-3, 3), 1),
            'touchesInBoxPer90': round(0.8 + q * 2 + random.uniform(-0.3, 0.4), 2),
            'chancesCreated': max(0, int(8 + q * 30 + random.uniform(-5, 8))),
            'dribblesCompletedPer90': round(0.3 + q * 1.5 + random.uniform(-0.2, 0.3), 2),
            'keyPassesPer90': round(0.5 + q * 2 + random.uniform(-0.2, 0.4), 2),
            'passingAccuracy': round(72 + q * 15 + random.uniform(-3, 3), 1),
            'progressivePassesPer90': round(2 + q * 5 + random.uniform(-0.5, 0.8), 2),
            'tacklesWonPer90': round(0.5 + q * 1.5 + random.uniform(-0.2, 0.3), 2),
            'interceptionsPer90': round(0.3 + q * 1 + random.uniform(-0.1, 0.2), 2),
            'ballRecoveriesPer90': round(1.5 + q * 3 + random.uniform(-0.3, 0.5), 2),
        }


def generate_heatmap(pos):
    """Generate position-appropriate heatmap."""
    heatmaps = {
        'GK': [
            {'x': 50, 'y': 6, 'r': 35, 'v': 0.98},
            {'x': 50, 'y': 14, 'r': 28, 'v': 0.70},
            {'x': 45, 'y': 8, 'r': 22, 'v': 0.55},
            {'x': 55, 'y': 8, 'r': 22, 'v': 0.55},
        ],
        'DF': [
            {'x': 45, 'y': 25, 'r': 30, 'v': 0.90},
            {'x': 55, 'y': 25, 'r': 30, 'v': 0.90},
            {'x': 50, 'y': 35, 'r': 25, 'v': 0.65},
            {'x': 50, 'y': 18, 'r': 22, 'v': 0.50},
        ],
        'FW': [
            {'x': 50, 'y': 85, 'r': 30, 'v': 0.92},
            {'x': 40, 'y': 78, 'r': 25, 'v': 0.75},
            {'x': 60, 'y': 78, 'r': 25, 'v': 0.75},
            {'x': 50, 'y': 70, 'r': 20, 'v': 0.50},
        ],
        'MF': [
            {'x': 50, 'y': 50, 'r': 30, 'v': 0.88},
            {'x': 40, 'y': 55, 'r': 25, 'v': 0.72},
            {'x': 60, 'y': 55, 'r': 25, 'v': 0.72},
            {'x': 50, 'y': 40, 'r': 22, 'v': 0.55},
            {'x': 50, 'y': 65, 'r': 20, 'v': 0.50},
        ],
    }
    return heatmaps.get(pos, heatmaps['MF'])


def generate_league_benchmarks(pos, rating):
    """Generate league benchmark comparisons."""
    q = rating / 80
    if pos == 'GK':
        return [
            {'metric': 'Save %', 'player': round(60 + q * 12, 1), 'avg': 69.5, 'elite': 77.0},
            {'metric': 'Clean Sheets', 'player': max(0, int(q * 8)), 'avg': 4.5, 'elite': 10},
            {'metric': 'Passing Accuracy %', 'player': round(55 + q * 25, 1), 'avg': 78, 'elite': 88},
        ]
    elif pos == 'DF':
        return [
            {'metric': 'Tackles Won p90', 'player': round(1 + q * 1.5, 2), 'avg': 1.8, 'elite': 3.5},
            {'metric': 'Interceptions p90', 'player': round(0.5 + q * 1.2, 2), 'avg': 0.8, 'elite': 2.0},
            {'metric': 'Passing Accuracy %', 'player': round(70 + q * 15, 1), 'avg': 78, 'elite': 88},
            {'metric': 'Progressive Passes p90', 'player': round(1.5 + q * 3, 2), 'avg': 2.8, 'elite': 6.2},
        ]
    elif pos == 'FW':
        return [
            {'metric': 'Goals per 90', 'player': round(0.1 + q * 0.4, 2), 'avg': 0.15, 'elite': 0.45},
            {'metric': 'xG', 'player': round(2 + q * 10, 1), 'avg': 3.0, 'elite': 12.0},
            {'metric': 'Shot Conversion %', 'player': round(8 + q * 12, 1), 'avg': 10, 'elite': 22},
            {'metric': 'Key Passes per 90', 'player': round(0.5 + q * 1.5, 2), 'avg': 0.9, 'elite': 2.2},
        ]
    else:
        return [
            {'metric': 'Key Passes per 90', 'player': round(0.5 + q * 2, 2), 'avg': 0.9, 'elite': 2.2},
            {'metric': 'Progressive Passes p90', 'player': round(2 + q * 5, 2), 'avg': 2.8, 'elite': 6.2},
            {'metric': 'Chances Created', 'player': max(0, int(8 + q * 30)), 'avg': 16, 'elite': 55},
            {'metric': 'Passing Accuracy %', 'player': round(72 + q * 15, 1), 'avg': 78, 'elite': 88},
        ]


def make_player_id(name):
    """Generate a slug-style player ID."""
    slug = re.sub(r'[^a-z0-9\s-]', '', name.lower().strip())
    slug = re.sub(r'[\s]+', '-', slug)
    slug = re.sub(r'-+', '-', slug).strip('-')
    return slug or 'unknown'


def identify_strengths_weaknesses(attrs):
    """Identify top 3 strengths and top 2 weaknesses."""
    label_map = {
        'pace': 'Pace', 'dribbling': 'Dribbling', 'passing': 'Passing',
        'defending': 'Defending', 'physicality': 'Physicality',
        'tactical': 'Tactical IQ', 'workrate': 'Work Rate',
    }
    sorted_attrs = sorted(attrs.items(), key=lambda x: x[1], reverse=True)
    strengths = [label_map[k] for k, v in sorted_attrs[:3]]
    weaknesses = [label_map[k] for k, v in sorted_attrs[-2:]]
    return strengths, weaknesses


def generate_data_js(players, output_path):
    """Generate data.js from scraped player data."""
    random.seed(42)  # Reproducible stats
    
    all_entries = []
    seen_ids = set()
    
    for p in players:
        name = p['name']
        pos = p['position']
        age = p['age']
        value = p['value']
        league = p['league']
        league_tier = LEAGUES.get(league, {}).get('tier', 0.8)
        
        # Generate attributes
        attrs = generate_attributes(pos, value, age, league_tier)
        rating = calc_rating(attrs, pos)
        
        # Generate ID
        player_id = make_player_id(name)
        base_id = player_id
        counter = 2
        while player_id in seen_ids:
            player_id = f"{base_id}-{counter}"
            counter += 1
        seen_ids.add(player_id)
        
        # Detailed stats
        detailed = generate_detailed_stats(pos, rating, value)
        
        # Strengths/weaknesses
        strengths, weaknesses = identify_strengths_weaknesses(attrs)
        
        # Benchmarks
        benchmarks = generate_league_benchmarks(pos, rating)
        
        # Heatmap
        heatmap = generate_heatmap(pos)
        
        # Generate general stats
        max_apps = 38 if league in ['Premier League', 'Bundesliga'] else 34 if league == 'Bundesliga' else 38
        if value >= 30_000_000:
            apps = random.randint(20, max_apps)
        elif value >= 10_000_000:
            apps = random.randint(12, max_apps)
        else:
            apps = random.randint(5, max_apps - 5)
        
        mins = apps * random.randint(60, 90)
        
        if pos == 'FW':
            goals = max(0, int(apps * (rating / 100) * random.uniform(0.15, 0.5)))
            assists = max(0, int(apps * random.uniform(0.05, 0.2)))
        elif pos == 'MF':
            goals = max(0, int(apps * random.uniform(0.02, 0.15)))
            assists = max(0, int(apps * random.uniform(0.08, 0.25)))
        elif pos == 'DF':
            goals = max(0, int(apps * random.uniform(0, 0.06)))
            assists = max(0, int(apps * random.uniform(0.02, 0.1)))
        else:
            goals = 0
            assists = 0
        
        entry = {
            'id': player_id,
            'name': name,
            'age': age,
            'position': pos,
            'role': p['role'],
            'club': p['club'],
            'league': league,
            'nation': p['nation'],
            'value': value,
            'rating': rating,
            'general': {
                'apps': apps,
                'mins': mins,
                'goals': goals,
                'assists': assists,
                'yellowCards': random.randint(0, 8),
                'redCards': random.randint(0, 1),
            },
            'attributes': attrs,
            'detailedStats': detailed,
            'leagueBenchmarks': benchmarks,
            'heatmap': heatmap,
            'strengths': strengths,
            'weaknesses': weaknesses,
        }
        
        all_entries.append(entry)
    
    # Sort by rating descending
    all_entries.sort(key=lambda x: x['rating'], reverse=True)
    
    # Write data.js
    js_content = "// APEX SCOUT — Player Database\n"
    js_content += f"// Sourced from Transfermarkt — {len(all_entries)} players across {len(LEAGUES)} leagues\n"
    js_content += f"// Leagues: {', '.join(LEAGUES.keys())}\n"
    js_content += "const PLAYER_DATABASE = "
    js_content += json.dumps(all_entries, ensure_ascii=False, separators=(',', ':'))
    js_content += ";\n"
    
    with open(output_path, 'w', encoding='utf-8') as f:
        f.write(js_content)
    
    file_size = os.path.getsize(output_path)
    
    # Stats
    positions = {}
    leagues = {}
    for p in all_entries:
        positions[p['position']] = positions.get(p['position'], 0) + 1
        leagues[p['league']] = leagues.get(p['league'], 0) + 1
    
    print(f"\n{'='*60}")
    print(f"  GENERATED {len(all_entries)} PLAYERS")
    print(f"  File: {output_path}")
    print(f"  Size: {file_size / 1024:.0f} KB ({file_size / 1024 / 1024:.1f} MB)")
    print(f"  Positions: {positions}")
    print(f"  Leagues: {leagues}")
    print(f"{'='*60}")
    
    return all_entries


# ── Main ──────────────────────────────────────────────────────────
if __name__ == '__main__':
    script_dir = os.path.dirname(os.path.abspath(__file__))
    cache_path = os.path.join(script_dir, 'raw_tm_data.json')
    output_path = os.path.join(script_dir, '..', 'data.js')
    
    # Check for cached data
    if '--load' in sys.argv and os.path.exists(cache_path):
        print("Loading cached Transfermarkt data...")
        with open(cache_path, 'r', encoding='utf-8') as f:
            players = json.load(f)
        print(f"Loaded {len(players)} players from cache.")
    else:
        players = scrape_all_leagues()
        
        # Save cache
        with open(cache_path, 'w', encoding='utf-8') as f:
            json.dump(players, f, ensure_ascii=False, indent=2)
        print(f"Cached {len(players)} players to {cache_path}")
    
    # Generate data.js
    generate_data_js(players, output_path)
