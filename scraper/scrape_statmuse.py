#!/usr/bin/env python3
"""APEX SCOUT — Statmuse Stats Scraper. Fetches real assists, xG, xA, ratings, tackles etc."""
import json, os, re, sys, time
import requests
from bs4 import BeautifulSoup

SCRIPT_DIR = os.path.dirname(os.path.abspath(__file__))
DATA_JS = os.path.join(SCRIPT_DIR, '..', 'data.js')
OUTPUT = os.path.join(SCRIPT_DIR, 'statmuse_stats.json')
PROGRESS = os.path.join(SCRIPT_DIR, 'statmuse_progress.json')

BASE = 'https://www.statmuse.com/fc/ask'
HDRS = {'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'}
DELAY = 1.2  # seconds between requests

session = requests.Session()
session.headers.update(HDRS)


def load_players():
    with open(DATA_JS, 'r', encoding='utf-8') as f:
        c = f.read()
    s = c.find('[{')
    e = c.find('\nfunction', s)
    j = c[s:e].strip().rstrip(';') if e != -1 else c[s:].strip().rstrip(';')
    return json.loads(j)


def slugify(name):
    """Convert player name to URL slug."""
    # Remove accents for URL compatibility
    replacements = {
        'á': 'a', 'é': 'e', 'í': 'i', 'ó': 'o', 'ú': 'u',
        'à': 'a', 'è': 'e', 'ì': 'i', 'ò': 'o', 'ù': 'u',
        'ä': 'a', 'ë': 'e', 'ï': 'i', 'ö': 'o', 'ü': 'u',
        'ã': 'a', 'õ': 'o', 'ñ': 'n', 'ç': 'c', 'ø': 'o',
        'å': 'a', 'ê': 'e', 'â': 'a', 'ô': 'o', 'û': 'u',
        'ß': 'ss', 'đ': 'd', 'ð': 'd', 'þ': 'th',
        'ı': 'i', 'ğ': 'g', 'ş': 's', 'ž': 'z', 'č': 'c',
        'ć': 'c', 'š': 's', 'ř': 'r', 'ě': 'e', 'ý': 'y',
        'ű': 'u', 'ő': 'o', 'ń': 'n', 'ł': 'l', 'ź': 'z',
        'ą': 'a', 'ę': 'e', 'ā': 'a', 'ī': 'i', 'ū': 'u',
    }
    slug = name.lower()
    for k, v in replacements.items():
        slug = slug.replace(k, v)
    slug = re.sub(r'[^a-z0-9\s-]', '', slug)
    slug = re.sub(r'\s+', '-', slug.strip())
    return slug


def parse_table(soup, idx=0):
    """Parse table at given index, return list of dicts."""
    tables = soup.find_all('table')
    if idx >= len(tables):
        return []
    t = tables[idx]
    hdrs = [th.get_text(strip=True) for th in t.find_all('th')]
    rows = []
    for tr in t.find_all('tr')[1:]:
        vals = [td.get_text(strip=True) for td in tr.find_all(['td', 'th'])]
        if vals and len(vals) >= len(hdrs):
            rows.append(dict(zip(hdrs, vals)))
    return rows


def safe_float(v):
    try:
        return float(str(v).replace(',', ''))
    except:
        return 0.0


def safe_int(v):
    try:
        return int(str(v).replace(',', ''))
    except:
        return 0


def scrape_player(name, position):
    """Scrape season stats + game log for a player."""
    result = {'name': name, 'source': 'statmuse'}
    slug = slugify(name)

    # 1. Season summary
    try:
        url = f'{BASE}/{slug}-stats-this-season'
        r = session.get(url, timeout=12)
        time.sleep(DELAY)
        if r.status_code != 200:
            result['error'] = f'HTTP {r.status_code}'
            return result

        soup = BeautifulSoup(r.text, 'html.parser')
        rows = parse_table(soup, 0)
        if not rows:
            result['error'] = 'No season table'
            return result

        row = rows[0]
        result['season'] = {
            'rating': safe_float(row.get('Rating', 0)),
            'matches': safe_int(row.get('M', 0)),
            'minutes': safe_int(row.get('MIN', 0)),
            'starts': safe_int(row.get('START', 0)),
            'goals': safe_int(row.get('G', 0)),
            'assists': safe_int(row.get('A', 0)),
            'goal_contributions': safe_int(row.get('G+A', 0)),
            'penalties': safe_int(row.get('PK', 0)),
            'free_kicks': safe_int(row.get('FK', 0)),
        }
    except Exception as e:
        result['error'] = f'Season: {str(e)[:60]}'
        return result

    # 2. Game log (for xG, xA, shots, cards)
    try:
        url2 = f'{BASE}/{slug}-game-log-this-season'
        r2 = session.get(url2, timeout=12)
        time.sleep(DELAY)

        if r2.status_code == 200:
            soup2 = BeautifulSoup(r2.text, 'html.parser')
            games = parse_table(soup2, 0)

            xg_total = sum(safe_float(g.get('xG', 0)) for g in games)
            xa_total = sum(safe_float(g.get('xA', 0)) for g in games)
            shots = sum(safe_int(g.get('SH', 0)) for g in games)
            sot = sum(safe_int(g.get('SOT', 0)) for g in games)
            yc = sum(safe_int(g.get('YC', 0)) for g in games)
            rc = sum(safe_int(g.get('RC', 0)) for g in games)
            fouls = sum(safe_int(g.get('FOUL', 0)) for g in games)
            touches = sum(safe_int(g.get('TCH', 0)) for g in games)
            touches_box = sum(safe_int(g.get('TCH-BOX', 0)) for g in games)
            offsides = sum(safe_int(g.get('OFF', 0)) for g in games)

            result['advanced'] = {
                'xG': round(xg_total, 2),
                'xA': round(xa_total, 2),
                'shots': shots,
                'shots_on_target': sot,
                'yellow_cards': yc,
                'red_cards': rc,
                'fouls': fouls,
                'touches': touches,
                'touches_box': touches_box,
                'offsides': offsides,
                'games_logged': len(games),
            }
    except Exception:
        pass  # Advanced stats are optional

    # 3. Defense stats (for DF and MF)
    if position in ('DF', 'MF'):
        try:
            url3 = f'{BASE}/{slug}-defense-stats-this-season'
            r3 = session.get(url3, timeout=12)
            time.sleep(DELAY)

            if r3.status_code == 200:
                soup3 = BeautifulSoup(r3.text, 'html.parser')
                drows = parse_table(soup3, 0)
                if drows:
                    dr = drows[0]
                    result['defense'] = {
                        'tackles': safe_int(dr.get('TKL', 0)),
                        'tackles_won': safe_int(dr.get('TKL-W', 0)),
                        'interceptions': safe_int(dr.get('INT', 0)),
                        'clearances': safe_int(dr.get('CLR', 0)),
                        'shot_blocks': safe_int(dr.get('SH-BLK', 0)),
                    }
        except Exception:
            pass

    return result


def main():
    test = '--test' in sys.argv
    resume = '--resume' in sys.argv

    print("=" * 50)
    print("  Statmuse Stats Scraper")
    print("=" * 50)

    players = load_players()
    print(f"Loaded {len(players)} players.")

    if test:
        test_names = ["Erling Haaland", "Bukayo Saka", "Lamine Yamal",
                      "Pedri", "William Saliba", "Florian Wirtz"]
        players = [p for p in players if p['name'] in test_names]
        print(f"TEST: {len(players)} players")

    # Load progress
    results = {}
    if os.path.exists(PROGRESS) and resume:
        try:
            with open(PROGRESS) as f:
                results = json.load(f)
            results = {k: v for k, v in results.items() if not v.get('error')}
            print(f"Resuming from {len(results)} cached.")
        except:
            results = {}

    ok = err = 0
    for i, p in enumerate(players):
        name = p['name']
        if name in results and not test:
            continue

        print(f"[{i+1}/{len(players)}] {name}...", end=' ', flush=True)
        try:
            stats = scrape_player(name, p.get('position', 'MF'))
        except Exception as e:
            stats = {'name': name, 'error': str(e)[:60]}
        results[name] = stats

        if stats.get('error'):
            print(f"✗ {stats['error']}")
            err += 1
        else:
            s = stats.get('season', {})
            a = stats.get('advanced', {})
            print(f"✓ {s.get('matches',0)}m {s.get('goals',0)}g {s.get('assists',0)}a "
                  f"xG={a.get('xG','-')} xA={a.get('xA','-')} rat={s.get('rating','-')}")
            ok += 1

        # Save every 25
        if (ok + err) % 25 == 0 and not test:
            with open(PROGRESS, 'w') as f:
                json.dump(results, f, ensure_ascii=False)
            print(f"  [SAVED] {len(results)} ({ok} ok, {err} err)")

    # Final save
    with open(OUTPUT, 'w') as f:
        json.dump(results, f, indent=2, ensure_ascii=False)
    if not test:
        with open(PROGRESS, 'w') as f:
            json.dump(results, f, ensure_ascii=False)

    total_ok = sum(1 for v in results.values() if not v.get('error'))
    print(f"\n{'='*50}")
    print(f"  DONE: {total_ok} ok, {len(results)-total_ok} failed")
    print(f"  Output: {OUTPUT}")
    print(f"{'='*50}")

    if test:
        for name, d in results.items():
            if d.get('error'):
                print(f"\n{name}: ✗ {d['error']}")
            else:
                s = d.get('season', {})
                a = d.get('advanced', {})
                df = d.get('defense', {})
                print(f"\n{name}:")
                print(f"  Season: {s.get('matches')}m {s.get('goals')}g {s.get('assists')}a Rating={s.get('rating')}")
                print(f"  Advanced: xG={a.get('xG')} xA={a.get('xA')} SH={a.get('shots')} SOT={a.get('shots_on_target')} YC={a.get('yellow_cards')} RC={a.get('red_cards')}")
                if df:
                    print(f"  Defense: TKL={df.get('tackles')} TKL-W={df.get('tackles_won')} INT={df.get('interceptions')} CLR={df.get('clearances')}")


if __name__ == "__main__":
    main()
