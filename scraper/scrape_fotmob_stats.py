import json
import re
import os
import random
import time
import requests
from bs4 import BeautifulSoup

# ==========================================
# CONFIGURATION
# ==========================================
TEST_MODE = True  # Set to False to process all players
DATA_JS_PATH = "/Users/namanjajani/.gemini/antigravity/scratch/football-scout-app/data.js"
OUTPUT_DIR = "/Users/namanjajani/.gemini/antigravity/scratch/football-scout-app/scraper"
OUTPUT_FILE = os.path.join(OUTPUT_DIR, "fotmob_stats.json")

os.makedirs(OUTPUT_DIR, exist_ok=True)

HEADERS = {
    'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
    'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8',
    'Accept-Language': 'en-US,en;q=0.9',
}

# ==========================================
# HELPERS
# ==========================================
def extract_players_from_js():
    """Parse data.js to extract the PLAYER_DATABASE array."""
    with open(DATA_JS_PATH, "r", encoding="utf-8") as f:
        content = f.read()

    start = content.find('const PLAYER_DATABASE = [')
    if start == -1:
        return []
    start += len('const PLAYER_DATABASE = ')
    # Find where the array ends — before getPlayersFiltered or end of file
    end = content.find('\nfunction', start)
    json_str = content[start:end].strip() if end != -1 else content[start:].strip()
    if json_str.endswith(';'):
        json_str = json_str[:-1]
    return json.loads(json_str)


def make_slug(name):
    """Convert player name to URL slug: 'Bukayo Saka' → 'bukayo-saka'"""
    import unicodedata
    # Normalize unicode → ascii approximation
    name = unicodedata.normalize('NFKD', name).encode('ascii', 'ignore').decode('ascii')
    return re.sub(r'[^a-z0-9]+', '-', name.lower()).strip('-')


def fetch_next_data(session, url):
    """Fetch a Next.js page and extract JSON from __NEXT_DATA__."""
    try:
        r = session.get(url, headers=HEADERS, timeout=15)
        if r.status_code != 200:
            return None
        soup = BeautifulSoup(r.text, 'html.parser')
        nd = soup.find('script', id='__NEXT_DATA__')
        if nd:
            return json.loads(nd.string).get('props', {}).get('pageProps', {}).get('data', {})
    except Exception as e:
        print(f"  [ERR] fetch_next_data({url[:80]}): {e}")
    return None


def find_fotmob_id(session, name):
    """Find FotMob player ID by searching the FotMob search page."""
    slug = make_slug(name)
    
    # Method 1: Try the search page (__NEXT_DATA__)
    search_url = f"https://www.fotmob.com/search?term={requests.utils.quote(name)}"
    try:
        r = session.get(search_url, headers=HEADERS, timeout=10)
        if r.status_code == 200:
            soup = BeautifulSoup(r.text, 'html.parser')
            nd = soup.find('script', id='__NEXT_DATA__')
            if nd:
                search_data = json.loads(nd.string)
                pp = search_data.get('props', {}).get('pageProps', {})
                
                # Try different data structures FotMob might use
                results = pp.get('data', pp)
                
                # Look for players in various formats
                player_list = None
                if isinstance(results, dict):
                    player_list = results.get('squad', results.get('players', results.get('searchResults', [])))
                    if isinstance(player_list, dict):
                        player_list = player_list.get('players', player_list.get('results', []))
                
                if player_list and isinstance(player_list, list) and len(player_list) > 0:
                    return str(player_list[0].get('id', ''))
                    
                # Fallback: search through all data for a player-like object
                data_str = json.dumps(results)
                # Look for pattern "id":12345,"name":"Player Name"
                name_lower = name.lower()
                id_match = re.search(r'"id"\s*:\s*(\d+)\s*,\s*"name"\s*:\s*"([^"]+)"', data_str)
                if id_match:
                    return id_match.group(1)
    except Exception as e:
        print(f"  [WARN] Search page failed for {name}: {e}")
    
    # Method 2: Try constructing the URL directly and check if it resolves
    # FotMob URLs: /players/{id}/{slug} — but we don't know the ID
    # Try Google-style search via FotMob
    try:
        api_url = f"https://www.fotmob.com/api/searchData?term={requests.utils.quote(name)}"
        r = session.get(api_url, headers={**HEADERS, 'Accept': 'application/json'}, timeout=10)
        if r.status_code == 200:
            data = r.json()
            # Check various response shapes
            for key in ['squad', 'players', 'player']:
                if key in data and data[key]:
                    items = data[key] if isinstance(data[key], list) else [data[key]]
                    if items:
                        return str(items[0].get('id', ''))
    except Exception:
        pass
    
    return None


def parse_stat_value(val):
    """Convert a stat value to float/int."""
    if val is None:
        return None
    if isinstance(val, (int, float)):
        return val
    if isinstance(val, str):
        val = val.strip().replace(',', '')
        if '%' in val:
            try: return float(val.replace('%', ''))
            except: return None
        try: return float(val) if '.' in val else int(val)
        except: return None
    return None


def extract_stats_from_items(items):
    """Parse [{title:'Goals', statValue:'3', per90:0.75, percentileRank:93}, ...] into dict."""
    stats = {}
    for item in items:
        title = item.get('title', '')
        # Normalize title to snake_case key
        key = title.lower().replace(' ', '_').replace('(', '').replace(')', '')
        
        val = item.get('statValue') or item.get('value')
        val = parse_stat_value(val)
        if val is not None:
            stats[key] = val
        
        # Also capture per90 and percentile if available
        per90 = item.get('per90')
        if per90 is not None:
            stats[f'{key}_per90'] = round(per90, 3)
        prank = item.get('percentileRank')
        if prank is not None:
            stats[f'{key}_pct'] = round(prank, 1)
    
    return stats


def scrape_player(session, name, player_id=None):
    """Scrape full 2025/26 stats for a player from FotMob."""
    # Step 1: Find FotMob ID
    fotmob_id = player_id
    if not fotmob_id:
        fotmob_id = find_fotmob_id(session, name)
        time.sleep(random.uniform(1.5, 3))
    
    if not fotmob_id:
        return {"name": name, "fotmob_id": None, "error": "ID not found"}
    
    # Step 2: Fetch main page
    slug = make_slug(name)
    main_url = f"https://www.fotmob.com/players/{fotmob_id}/{slug}"
    data = fetch_next_data(session, main_url)
    time.sleep(random.uniform(1.5, 3))
    
    if not data:
        # Try without slug (FotMob redirects)
        main_url = f"https://www.fotmob.com/players/{fotmob_id}/overview"
        data = fetch_next_data(session, main_url)
        time.sleep(random.uniform(1, 2))
        if not data:
            return {"name": name, "fotmob_id": fotmob_id, "error": "Page not found"}
    
    result = {
        "name": data.get('name', name),
        "fotmob_id": fotmob_id,
        "competitions": {},
        "combined_25_26": {},
        "traits": {},
        "mainLeague": {}
    }
    
    # Extract traits (comparative stats)
    traits_data = data.get('traits', {})
    if isinstance(traits_data, dict) and 'items' in traits_data:
        for t in traits_data['items']:
            key = t.get('key', t.get('title', '')).lower().replace(' ', '_')
            val = t.get('value')
            if key and val is not None:
                result['traits'][key] = round(val, 2) if isinstance(val, float) else val
    
    # Extract main league summary stats
    ml = data.get('mainLeague', {})
    if ml:
        result['mainLeague'] = {
            'league': ml.get('leagueName', ''),
            'season': ml.get('season', ''),
        }
        for stat in ml.get('stats', []):
            key = stat.get('localizedTitleId', stat.get('title', '')).lower().replace(' ', '_')
            val = stat.get('value')
            if key and val is not None:
                result['mainLeague'][key] = val
    
    # Find 2025/26 season
    season_25_26 = None
    for season in data.get('statSeasons', []):
        sname = season.get('seasonName', '')
        if sname in ['2025/2026', '2025']:
            season_25_26 = season
            break
    
    if not season_25_26:
        # Try the first season (might be current)
        seasons = data.get('statSeasons', [])
        if seasons:
            season_25_26 = seasons[0]
    
    if not season_25_26:
        return result
    
    # Step 3: Fetch per-tournament stats
    tournaments = season_25_26.get('tournaments', [])
    for tourn in tournaments:
        comp_name = tourn.get('name', 'Unknown')
        entry_id = tourn.get('entryId')
        tournament_id = tourn.get('tournamentId')
        
        if not entry_id:
            continue
        
        print(f"    → {comp_name}...", end=' ', flush=True)
        comp_url = f"{main_url}?seasonEntry={entry_id}"
        comp_data = fetch_next_data(session, comp_url)
        time.sleep(random.uniform(1.5, 3))
        
        if not comp_data or 'firstSeasonStats' not in comp_data:
            print("skip")
            continue
        
        fss = comp_data['firstSeasonStats']
        comp_stats = {"tournament_id": tournament_id, "detailed": {}}
        
        # Top stat card (basic stats: goals, assists, rating, matches, etc.)
        tsc = fss.get('topStatCard', {})
        if isinstance(tsc, dict) and 'items' in tsc:
            top = extract_stats_from_items(tsc['items'])
            for k, v in top.items():
                if '_per90' not in k and '_pct' not in k:
                    comp_stats[k] = v
                else:
                    comp_stats['detailed'][k] = v
        
        # Stats sections (Shooting, Passing, Defense, etc.)
        ss = fss.get('statsSection', {})
        if isinstance(ss, dict) and 'items' in ss:
            for group in ss['items']:
                if isinstance(group, dict) and 'items' in group:
                    section_stats = extract_stats_from_items(group['items'])
                    for k, v in section_stats.items():
                        # Basic fields go to top level, detailed goes to sub-dict
                        if k in ('goals', 'assists', 'appearances', 'started', 'minutes', 
                                 'matches', 'rating', 'yellow_cards', 'red_cards',
                                 'minutes_played', 'matches_started', 'matches_played'):
                            comp_stats[k] = v
                        else:
                            comp_stats['detailed'][k] = v
        
        result['competitions'][comp_name] = comp_stats
        found_stats = {k: v for k, v in comp_stats.items() if k not in ('tournament_id', 'detailed')}
        print(f"✓ {found_stats}")
    
    # Step 4: Calculate combined 25/26 totals
    combined = {"appearances": 0, "goals": 0, "assists": 0, "minutes": 0,
                "yellow_cards": 0, "red_cards": 0, "started": 0}
    rating_sum, rating_count = 0, 0
    
    for comp in result['competitions'].values():
        for field in ('appearances', 'matches', 'matches_played'):
            v = comp.get(field, 0) or 0
            if v: combined['appearances'] += v; break
        combined['goals'] += comp.get('goals', 0) or 0
        combined['assists'] += comp.get('assists', 0) or 0
        for field in ('minutes', 'minutes_played'):
            v = comp.get(field, 0) or 0
            if v: combined['minutes'] += v; break
        combined['yellow_cards'] += comp.get('yellow_cards', 0) or 0
        combined['red_cards'] += comp.get('red_cards', 0) or 0
        for field in ('started', 'matches_started'):
            v = comp.get(field, 0) or 0
            if v: combined['started'] += v; break
        r = comp.get('rating')
        if r:
            rating_sum += r
            rating_count += 1
    
    if rating_count:
        combined['avg_rating'] = round(rating_sum / rating_count, 2)
    
    result['combined_25_26'] = combined
    return result


# ==========================================
# MAIN
# ==========================================
def main():
    print("=" * 60)
    print("  FotMob Stats Scraper — 2025/26 Season")
    print("=" * 60)
    
    players = extract_players_from_js()
    if not players:
        print("ERROR: Could not load players from data.js")
        return
    print(f"Loaded {len(players)} players from database.")
    
    if TEST_MODE:
        # Test with well-known players
        test_names = ["Bukayo Saka", "Lamine Yamal", "Florian Wirtz"]
        players = [p for p in players if p.get('name') in test_names]
        if not players:
            players = extract_players_from_js()[:3]
        print(f"TEST MODE: Processing {len(players)} players: {[p['name'] for p in players]}")
    
    # Load existing progress
    results = {}
    if os.path.exists(OUTPUT_FILE) and not TEST_MODE:
        try:
            with open(OUTPUT_FILE, 'r') as f:
                results = json.load(f)
            print(f"Resuming: {len(results)} players already done.")
        except:
            pass
    
    session = requests.Session()
    processed = 0
    errors = 0
    
    for i, player in enumerate(players):
        name = player.get('name', '')
        if not name:
            continue
        if name in results and not TEST_MODE:
            continue
        
        print(f"\n[{i+1}/{len(players)}] {name}")
        
        try:
            result = scrape_player(session, name)
            results[name] = result
            
            comps = result.get('competitions', {})
            if comps:
                print(f"  ✓ {len(comps)} competitions: {list(comps.keys())}")
            elif result.get('error'):
                print(f"  ✗ {result['error']}")
                errors += 1
            
            processed += 1
        except Exception as e:
            print(f"  ✗ Exception: {e}")
            results[name] = {"name": name, "error": str(e)}
            errors += 1
        
        # Save progress every 50 players
        if processed % 50 == 0 and processed > 0 and not TEST_MODE:
            with open(OUTPUT_FILE, 'w') as f:
                json.dump(results, f, indent=2)
            print(f"\n  [SAVED] {len(results)} players to {OUTPUT_FILE}")
    
    # Final save
    with open(OUTPUT_FILE, 'w') as f:
        json.dump(results, f, indent=2)
    
    print("\n" + "=" * 60)
    print(f"  COMPLETE: {processed} processed, {errors} errors")
    print(f"  Output: {OUTPUT_FILE}")
    print("=" * 60)
    
    if TEST_MODE:
        print("\n--- TEST RESULTS ---")
        for name, data in results.items():
            print(f"\n{name}:")
            if data.get('error'):
                print(f"  Error: {data['error']}")
            else:
                for comp, stats in data.get('competitions', {}).items():
                    basic = {k: v for k, v in stats.items() if k not in ('tournament_id', 'detailed')}
                    print(f"  {comp}: {basic}")
                print(f"  Combined: {data.get('combined_25_26', {})}")


if __name__ == "__main__":
    main()
