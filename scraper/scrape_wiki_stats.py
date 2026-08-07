#!/usr/bin/env python3
"""
APEX SCOUT — Wikipedia Career Stats Scraper (v3)
Fetches REAL career statistics from Wikipedia for all players.
Uses direct page title lookup + search fallback with proper rate limiting.
"""

import json
import os
import re
import sys
import time
import requests
from bs4 import BeautifulSoup

SCRIPT_DIR = os.path.dirname(os.path.abspath(__file__))
DATA_JS_PATH = os.path.join(SCRIPT_DIR, '..', 'data.js')
OUTPUT_PATH = os.path.join(SCRIPT_DIR, 'wiki_stats.json')
PROGRESS_PATH = os.path.join(SCRIPT_DIR, 'wiki_progress.json')

WIKI_API = 'https://en.wikipedia.org/w/api.php'
REQUEST_DELAY = 1.5  # Wikipedia asks for polite crawling
MAX_RETRIES = 3

session = requests.Session()
session.headers.update({
    'User-Agent': 'ApexScout/1.0 (football-stats-educational; contact: naman@example.com)'
})


def load_players():
    with open(DATA_JS_PATH, 'r', encoding='utf-8') as f:
        content = f.read()
    start = content.find('const PLAYER_DATABASE = [')
    start += len('const PLAYER_DATABASE = ')
    end = content.find('\nfunction', start)
    json_str = content[start:end].strip() if end != -1 else content[start:].strip()
    if json_str.endswith(';'):
        json_str = json_str[:-1]
    return json.loads(json_str)


def api_get(params):
    """Wikipedia API request with retry and exponential backoff."""
    for attempt in range(MAX_RETRIES):
        try:
            r = session.get(WIKI_API, params=params, timeout=15)
            if r.status_code == 200:
                return r.json()
            elif r.status_code == 429:
                wait = REQUEST_DELAY * (2 ** attempt)
                time.sleep(wait)
            else:
                time.sleep(REQUEST_DELAY)
        except Exception:
            time.sleep(REQUEST_DELAY * (attempt + 1))
    return None


def wiki_search(name):
    """Find Wikipedia page for a player. Direct lookup first, then search."""
    # Strategy 1: Direct page title lookup (works for most players)
    data = api_get({'action': 'query', 'titles': name, 'format': 'json', 'redirects': '1'})
    time.sleep(REQUEST_DELAY)
    if data:
        pages = data.get('query', {}).get('pages', {})
        for pid, page in pages.items():
            if pid != '-1' and 'missing' not in page:
                return page.get('title', name)

    # Strategy 2: Search
    football_kw = ['football', 'soccer', 'midfielder', 'forward', 'defender',
                   'goalkeeper', 'winger', 'striker', 'club', 'league', 'born',
                   'la liga', 'premier', 'bundesliga', 'serie a', 'ligue 1',
                   'barcelona', 'madrid', 'arsenal', 'manchester', 'liverpool',
                   'bayern', 'juventus', 'inter', 'psg', 'chelsea']

    for term in [f'{name} footballer', name]:
        data = api_get({
            'action': 'query', 'list': 'search',
            'srsearch': term, 'srnamespace': '0',
            'srlimit': '5', 'format': 'json',
        })
        time.sleep(REQUEST_DELAY)
        if not data:
            continue

        results = data.get('query', {}).get('search', [])
        name_lower = name.lower()
        name_parts = name_lower.split()

        for result in results:
            tl = result['title'].lower()
            if all(p in tl for p in name_parts) and 'disambiguation' not in tl:
                return result['title']

        for result in results:
            tl = result['title'].lower()
            if (tl == name_lower or tl.startswith(name_lower)) and 'disambiguation' not in tl:
                return result['title']

        for result in results:
            tl = result['title'].lower()
            sn = result.get('snippet', '').lower()
            if name_parts[-1] in tl and any(k in sn for k in football_kw) and 'disambiguation' not in tl:
                return result['title']

    return None


def find_stats_section(page_title):
    """Find the 'Career statistics' section index."""
    data = api_get({
        'action': 'parse', 'page': page_title,
        'prop': 'sections', 'format': 'json',
    })
    time.sleep(REQUEST_DELAY)

    if not data:
        return None, 'API error'

    sections = data.get('parse', {}).get('sections', [])

    for s in sections:
        line = s['line'].lower()
        if 'career statistics' in line or 'career stats' in line:
            return s['index'], None

    for s in sections:
        line = s['line'].lower()
        if line == 'statistics' or line == 'club statistics':
            return s['index'], None

    for s in sections:
        if s['line'].lower() == 'club' and s.get('toclevel', 0) >= 2:
            return s['index'], None

    return None, 'No stats section'


def parse_number(text):
    text = re.sub(r'\[.*?\]', '', text.strip())
    if not text or text in ('—', '–', '-'):
        return 0
    m = re.search(r'(\d+)', text)
    return int(m.group(1)) if m else 0


def expand_table(table):
    """Expand rowspans and colspans into a 2D grid."""
    rows = table.find_all('tr')
    grid = []
    carry = {}

    for row in rows:
        cells = row.find_all(['th', 'td'])
        row_data = []
        ci = 0
        col = 0

        while col < 50:
            if col in carry:
                rem, val = carry[col]
                row_data.append(val)
                if rem <= 1:
                    del carry[col]
                else:
                    carry[col] = (rem - 1, val)
                col += 1
                continue

            if ci >= len(cells):
                break

            cell = cells[ci]
            text = cell.get_text(strip=True)
            cs = int(re.sub(r'[^0-9]', '', str(cell.get('colspan', 1))) or '1')
            rs = int(re.sub(r'[^0-9]', '', str(cell.get('rowspan', 1))) or '1')

            for c in range(cs):
                v = text if c == 0 else ''
                row_data.append(v)
                if rs > 1:
                    carry[col] = (rs - 1, v)
                col += 1

            ci += 1

        grid.append(row_data)

    return grid


def parse_club_table(table):
    """Parse Wikipedia club career stats table."""
    grid = expand_table(table)
    if len(grid) < 3:
        return []

    # Parse header to map column positions
    header_row = table.find_all('tr')[0]
    header_cells = header_row.find_all(['th', 'td'])

    comp_map = []
    for cell in header_cells:
        text = cell.get_text(strip=True).lower()
        cs = int(cell.get('colspan', 1))

        if text in ('club', 'season'):
            continue

        # Order matters: check specific before general
        if any(x in text for x in ['league cup', 'efl cup', 'carabao']):
            comp_map.append(('league_cup', cs))
        elif any(x in text for x in ['national cup', 'fa cup', 'copa del rey', 'dfb',
                                      'coppa', 'coupe', 'taça', 'copa do', 'copa arg']):
            comp_map.append(('national_cup', cs))
        elif any(x in text for x in ['europe', 'continental', 'champions', 'uefa']):
            comp_map.append(('continental', cs))
        elif any(x in text for x in ['league', 'division']) and 'cup' not in text:
            comp_map.append(('league', cs))
        elif 'total' in text:
            comp_map.append(('total', cs))
        elif 'other' in text or 'super' in text:
            comp_map.append(('other', cs))
        else:
            comp_map.append((re.sub(r'[\[\]()]', '', text).strip().replace(' ', '_'), cs))

    seasons = []
    for row in grid[2:]:
        if not row:
            continue
        combined = ' '.join(str(x) for x in row).lower()
        if 'career total' in combined or combined.startswith('total'):
            continue

        club = str(row[0]) if row else ''
        season = str(row[1]) if len(row) > 1 else ''
        season = re.sub(r'\[.*?\]', '', season).strip()

        if not re.match(r'^\d{4}', season):
            continue

        sd = {'season': season, 'club': club}
        col = 2

        for comp_name, cs in comp_map:
            if comp_name == 'league' and cs == 3:
                if col < len(row):
                    sd['division'] = str(row[col])
                col += 1
                if col + 1 < len(row):
                    sd['league_apps'] = parse_number(str(row[col]))
                    sd['league_goals'] = parse_number(str(row[col + 1]))
                col += 2
            elif cs == 2:
                if col + 1 < len(row):
                    sd[f'{comp_name}_apps'] = parse_number(str(row[col]))
                    sd[f'{comp_name}_goals'] = parse_number(str(row[col + 1]))
                col += 2
            else:
                col += cs

        seasons.append(sd)

    return seasons


def parse_intl_table(table):
    """Parse international career stats table."""
    grid = expand_table(table)
    results = []

    for row in grid[1:]:
        if not row:
            continue
        if 'total' in ' '.join(str(x) for x in row).lower():
            continue

        team, year, apps, goals = '', '', 0, 0
        if len(row) >= 4:
            team, year = str(row[0]), str(row[1])
            apps, goals = parse_number(str(row[2])), parse_number(str(row[3]))
        elif len(row) >= 3:
            year = str(row[0])
            apps, goals = parse_number(str(row[1])), parse_number(str(row[2]))

        year = re.sub(r'\[.*?\]', '', year).strip()
        if re.match(r'^\d{4}', year):
            results.append({'year': year, 'team': team, 'apps': apps, 'goals': goals})

    return results


def scrape_player_stats(name):
    """Scrape full career stats for a single player."""
    result = {'name': name, 'source': 'wikipedia'}

    page_title = wiki_search(name)
    if not page_title:
        result['error'] = 'Page not found'
        return result

    result['wiki_page'] = page_title

    stats_idx, err = find_stats_section(page_title)
    if not stats_idx:
        result['error'] = err or 'No stats section'
        return result

    data = api_get({
        'action': 'parse', 'page': page_title,
        'prop': 'text', 'section': stats_idx, 'format': 'json',
    })
    time.sleep(REQUEST_DELAY)

    if not data:
        result['error'] = 'Failed to fetch stats HTML'
        return result

    html = data.get('parse', {}).get('text', {}).get('*', '')
    soup = BeautifulSoup(html, 'html.parser')
    tables = soup.find_all('table')

    if not tables:
        result['error'] = 'No tables found'
        return result

    club_seasons = parse_club_table(tables[0])
    result['club_career'] = club_seasons

    if club_seasons:
        latest = club_seasons[-1]
        result['current_stats'] = {
            'season': latest.get('season', ''),
            'club': latest.get('club', ''),
            'division': latest.get('division', ''),
            'league_apps': latest.get('league_apps', 0),
            'league_goals': latest.get('league_goals', 0),
            'cup_apps': latest.get('national_cup_apps', 0),
            'cup_goals': latest.get('national_cup_goals', 0),
            'league_cup_apps': latest.get('league_cup_apps', 0),
            'league_cup_goals': latest.get('league_cup_goals', 0),
            'continental_apps': latest.get('continental_apps', 0),
            'continental_goals': latest.get('continental_goals', 0),
            'total_apps': latest.get('total_apps', 0),
            'total_goals': latest.get('total_goals', 0),
        }

    if len(tables) >= 2:
        result['international'] = parse_intl_table(tables[1])

    return result


def main():
    test_mode = '--test' in sys.argv
    resume_mode = '--resume' in sys.argv

    print("=" * 60)
    print("  Wikipedia Career Stats Scraper v3")
    print("=" * 60)

    players = load_players()
    print(f"Loaded {len(players)} players.")

    if test_mode:
        test_names = ["Erling Haaland", "Bukayo Saka", "Lamine Yamal",
                      "Florian Wirtz", "Jude Bellingham", "Pedri",
                      "Phil Foden", "Kylian Mbappé"]
        players = [p for p in players if p.get('name') in test_names]
        print(f"TEST MODE: {len(players)} players")

    # Load progress
    results = {}
    if os.path.exists(PROGRESS_PATH) and (resume_mode or not test_mode):
        try:
            with open(PROGRESS_PATH, 'r') as f:
                results = json.load(f)
            # Only keep successful results when resuming
            if resume_mode:
                results = {k: v for k, v in results.items() if not v.get('error')}
            print(f"Resuming from {len(results)} cached results.")
        except Exception:
            results = {}

    processed = 0
    successes = 0
    errors = 0

    for i, player in enumerate(players):
        name = player.get('name', '')
        if not name:
            continue
        if name in results and not test_mode:
            continue

        print(f"[{i+1}/{len(players)}] {name}...", end=' ', flush=True)

        try:
            stats = scrape_player_stats(name)
        except Exception as e:
            stats = {'name': name, 'error': f'Exception: {str(e)[:80]}'}
        results[name] = stats

        if stats.get('error'):
            print(f"✗ {stats['error']}")
            errors += 1
        else:
            cs = stats.get('current_stats', {})
            intl = stats.get('international', [])
            print(f"✓ {cs.get('season','')} "
                  f"L:{cs.get('league_apps',0)}a/{cs.get('league_goals',0)}g "
                  f"Cup:{cs.get('cup_apps',0)}a "
                  f"CL:{cs.get('continental_apps',0)}a/{cs.get('continental_goals',0)}g "
                  f"Tot:{cs.get('total_apps',0)}a/{cs.get('total_goals',0)}g "
                  f"Intl:{len(intl)}yr")
            successes += 1

        processed += 1

        # Save progress every 25 players
        if processed % 25 == 0 and not test_mode:
            with open(PROGRESS_PATH, 'w') as f:
                json.dump(results, f, ensure_ascii=False)
            print(f"  [SAVED] {len(results)} total ({successes} ok, {errors} err)")

    # Final save
    with open(OUTPUT_PATH, 'w') as f:
        json.dump(results, f, indent=2, ensure_ascii=False)
    if not test_mode:
        with open(PROGRESS_PATH, 'w') as f:
            json.dump(results, f, ensure_ascii=False)

    total_ok = sum(1 for v in results.values() if not v.get('error'))
    print(f"\n{'='*60}")
    print(f"  DONE: {total_ok} with stats, {len(results) - total_ok} failed")
    print(f"  Output: {OUTPUT_PATH}")
    print(f"{'='*60}")

    if test_mode:
        print("\n--- TEST RESULTS ---")
        for name, d in results.items():
            if d.get('error'):
                print(f"\n{name}: ✗ {d['error']}")
            else:
                cs = d.get('current_stats', {})
                print(f"\n{name} ({d.get('wiki_page','?')}):")
                print(f"  {cs.get('season','?')} @ {cs.get('club','?')}")
                print(f"  League: {cs.get('league_apps',0)}a, {cs.get('league_goals',0)}g")
                print(f"  Cup: {cs.get('cup_apps',0)}a, CL: {cs.get('continental_apps',0)}a")
                print(f"  Total: {cs.get('total_apps',0)}a, {cs.get('total_goals',0)}g")


if __name__ == "__main__":
    main()
