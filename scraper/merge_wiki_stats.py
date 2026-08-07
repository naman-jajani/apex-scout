#!/usr/bin/env python3
"""
APEX SCOUT — Merge Wikipedia Stats into data.js
Reads wiki_stats.json and updates PLAYER_DATABASE with real career stats.
Falls back to algorithmic generation for players without Wikipedia data.
"""

import json
import os
import re
import hashlib
import random

SCRIPT_DIR = os.path.dirname(os.path.abspath(__file__))
DATA_JS_PATH = os.path.join(SCRIPT_DIR, '..', 'data.js')
WIKI_STATS_PATH = os.path.join(SCRIPT_DIR, 'wiki_stats.json')
OUTPUT_PATH = DATA_JS_PATH  # Overwrite data.js

# Competition name mapping for domestic cups
LEAGUE_CUPS = {
    "Premier League": {"national_cup": "FA Cup", "league_cup": "EFL Cup"},
    "La Liga": {"national_cup": "Copa del Rey"},
    "Bundesliga": {"national_cup": "DFB-Pokal"},
    "Serie A": {"national_cup": "Coppa Italia"},
    "Ligue 1": {"national_cup": "Coupe de France"},
    "Primeira Liga": {"national_cup": "Taça de Portugal"},
    "Brasileirão": {"national_cup": "Copa do Brasil"},
    "Argentine Primera": {"national_cup": "Copa Argentina"},
}

CONTINENTAL_NAMES = {
    "Premier League": "Champions League / Europa League",
    "La Liga": "Champions League / Europa League",
    "Bundesliga": "Champions League / Europa League",
    "Serie A": "Champions League / Europa League",
    "Ligue 1": "Champions League / Europa League",
    "Primeira Liga": "Champions League / Europa League",
    "Brasileirão": "Copa Libertadores / Copa Sudamericana",
    "Argentine Primera": "Copa Libertadores / Copa Sudamericana",
}


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


def load_wiki_stats():
    if not os.path.exists(WIKI_STATS_PATH):
        print(f"ERROR: {WIKI_STATS_PATH} not found. Run scrape_wiki_stats.py first.")
        return {}
    with open(WIKI_STATS_PATH, 'r', encoding='utf-8') as f:
        return json.load(f)


def get_latest_season(wiki_data):
    """Extract the latest season's stats from Wikipedia data."""
    club_career = wiki_data.get('club_career', [])
    if not club_career:
        return None
    
    # Get the most recent season
    latest = club_career[-1]
    
    # If the latest season is very early (e.g., before current season),
    # try the second-to-last
    season = latest.get('season', '')
    if not season:
        return None
    
    return latest


def build_season_stats_from_wiki(player, wiki_data):
    """Build seasonStats from Wikipedia data."""
    league = player.get('league', '')
    club = player.get('club', '')
    nation = player.get('nation', '')
    
    club_career = wiki_data.get('club_career', [])
    intl_data = wiki_data.get('international', [])
    
    if not club_career:
        return None
    
    # Get the best season: prefer 2025-26 over 2026-27 (which may be all zeros)
    latest = None
    fallback = None
    for season in reversed(club_career):
        s = season.get('season', '')
        total_apps = season.get('total_apps', 0) + season.get('league_apps', 0)
        if '2025' in s:
            latest = season
            break
        if ('2026' in s or '2024' in s) and total_apps > 0:
            fallback = season
        if '2026' in s and total_apps == 0 and not fallback:
            # 2026-27 just started, all zeros — skip
            continue
        if not latest and total_apps > 0:
            fallback = season
    
    if not latest:
        latest = fallback or club_career[-1]
    
    competitions = {}
    
    # 1. LEAGUE stats
    league_name = league if league else latest.get('division', 'League')
    league_apps = latest.get('league_apps', 0)
    league_goals = latest.get('league_goals', 0)
    total_apps = latest.get('total_apps', 0)
    total_goals = latest.get('total_goals', 0)
    
    # If league apps = 0 but total > 0, use total as league (table structure issue)
    if league_apps == 0 and total_apps > 0:
        league_apps = total_apps
        league_goals = total_goals
    
    competitions[league_name] = {
        "appearances": league_apps,
        "goals": league_goals,
        "assists": 0,  # Wikipedia doesn't have assists
        "minutes": league_apps * 78,  # Estimate
        "started": max(1, league_apps - 3),
        "rating": 0,
        "yellow_cards": 0,
        "red_cards": 0,
        "xG": 0,
        "xA": 0,
    }
    
    # 2. DOMESTIC CUPS
    cup_config = LEAGUE_CUPS.get(league, {})
    
    # National cup
    nat_cup_apps = latest.get('national_cup_apps', 0)
    nat_cup_goals = latest.get('national_cup_goals', 0)
    if nat_cup_apps > 0:
        cup_name = cup_config.get('national_cup', 'National Cup')
        competitions[cup_name] = {
            "appearances": nat_cup_apps,
            "goals": nat_cup_goals,
            "assists": 0,
            "minutes": nat_cup_apps * 80,
            "started": nat_cup_apps,
            "rating": 0,
            "yellow_cards": 0,
            "red_cards": 0,
            "xG": 0,
            "xA": 0,
        }
    
    # League cup
    lc_apps = latest.get('league_cup_apps', 0)
    lc_goals = latest.get('league_cup_goals', 0)
    if lc_apps > 0:
        cup_name = cup_config.get('league_cup', 'League Cup')
        competitions[cup_name] = {
            "appearances": lc_apps,
            "goals": lc_goals,
            "assists": 0,
            "minutes": lc_apps * 75,
            "started": lc_apps,
            "rating": 0,
            "yellow_cards": 0,
            "red_cards": 0,
            "xG": 0,
            "xA": 0,
        }
    
    # 3. CONTINENTAL
    cont_apps = latest.get('continental_apps', 0)
    cont_goals = latest.get('continental_goals', 0)
    if cont_apps > 0:
        cont_name = CONTINENTAL_NAMES.get(league, 'Continental')
        # Simplify name
        if 'Champions' in cont_name:
            cont_name = 'Champions League'
        elif 'Libertadores' in cont_name:
            cont_name = 'Copa Libertadores'
        else:
            cont_name = 'Continental'
        competitions[cont_name] = {
            "appearances": cont_apps,
            "goals": cont_goals,
            "assists": 0,
            "minutes": cont_apps * 82,
            "started": cont_apps,
            "rating": 0,
            "yellow_cards": 0,
            "red_cards": 0,
            "xG": 0,
            "xA": 0,
        }
    
    # 4. INTERNATIONAL (from intl table, use latest year)
    if intl_data:
        # Get 2025 or 2026 data
        for entry in reversed(intl_data):
            year = entry.get('year', '')
            if '2025' in year or '2026' in year:
                intl_apps = entry.get('apps', 0)
                intl_goals = entry.get('goals', 0)
                team = entry.get('team', nation)
                if intl_apps > 0:
                    competitions['International'] = {
                        "appearances": intl_apps,
                        "goals": intl_goals,
                        "assists": 0,
                        "minutes": intl_apps * 80,
                        "started": intl_apps,
                        "rating": 0,
                        "yellow_cards": 0,
                        "red_cards": 0,
                        "xG": 0,
                        "xA": 0,
                    }
                break
    
    # 5. OTHER
    other_apps = latest.get('other_apps', 0)
    other_goals = latest.get('other_goals', 0)
    if other_apps > 0:
        competitions['Other'] = {
            "appearances": other_apps,
            "goals": other_goals,
            "assists": 0,
            "minutes": other_apps * 75,
            "started": other_apps,
            "rating": 0,
            "yellow_cards": 0,
            "red_cards": 0,
            "xG": 0,
            "xA": 0,
        }
    
    # COMBINED
    combined = {
        "appearances": 0, "goals": 0, "assists": 0, "minutes": 0,
        "started": 0, "yellow_cards": 0, "red_cards": 0,
        "xG": 0, "xA": 0,
    }
    for comp_stats in competitions.values():
        for field in ("appearances", "goals", "assists", "minutes", "started",
                      "yellow_cards", "red_cards"):
            combined[field] += comp_stats.get(field, 0)
    
    return {
        "source": "wikipedia",
        "season": latest.get('season', '2025-26'),
        "competitions": competitions,
        "combined": combined,
    }


def generate_fallback_stats(player):
    """Generate algorithmic stats for players without Wikipedia data."""
    rng = random.Random(int(hashlib.md5(player['name'].encode()).hexdigest()[:8], 16))
    quality = player.get('rating', 70)
    pos = player.get('position', 'MF')
    league = player.get('league', '')
    q = quality / 80
    
    apps = rng.randint(max(5, round(20 * q)), min(38, round(38 * q)))
    
    if pos == 'FW':
        goals = max(0, round(q * rng.uniform(5, 18) * (apps / 34)))
    elif pos == 'MF':
        goals = max(0, round(q * rng.uniform(2, 10) * (apps / 34)))
    elif pos == 'DF':
        goals = max(0, round(q * rng.uniform(0, 3) * (apps / 34)))
    else:
        goals = 0
    
    competitions = {
        league or 'League': {
            "appearances": apps,
            "goals": goals,
            "assists": 0,
            "minutes": apps * rng.randint(70, 90),
            "started": max(1, apps - rng.randint(0, 5)),
            "rating": 0, "yellow_cards": 0, "red_cards": 0,
            "xG": 0, "xA": 0,
        }
    }
    
    combined = {
        "appearances": apps, "goals": goals, "assists": 0,
        "minutes": competitions[league or 'League']['minutes'],
        "started": competitions[league or 'League']['started'],
        "yellow_cards": 0, "red_cards": 0, "xG": 0, "xA": 0,
    }
    
    return {
        "source": "generated",
        "season": "2025-26",
        "competitions": competitions,
        "combined": combined,
    }


def main():
    print("=" * 60)
    print("  Merging Wikipedia Stats into data.js")
    print("=" * 60)
    
    players = load_players()
    wiki_stats = load_wiki_stats()
    
    print(f"Players: {len(players)}")
    print(f"Wiki stats: {len(wiki_stats)}")
    
    from_wiki = 0
    from_fallback = 0
    
    for player in players:
        name = player.get('name', '')
        wiki = wiki_stats.get(name, {})
        
        if wiki and not wiki.get('error') and wiki.get('club_career'):
            # Use Wikipedia data
            season_stats = build_season_stats_from_wiki(player, wiki)
            if season_stats:
                player['seasonStats'] = season_stats
                from_wiki += 1
                continue
        
        # Fallback to algorithmic
        player['seasonStats'] = generate_fallback_stats(player)
        from_fallback += 1
    
    print(f"\nFrom Wikipedia: {from_wiki}")
    print(f"From fallback: {from_fallback}")
    
    # Write data.js
    output = json.dumps(players, separators=(',', ':'), ensure_ascii=False)
    
    data_js = f"""// APEX SCOUT — Player Database
// {len(players)} players across 8 leagues
// Stats source: Wikipedia (career statistics) + Transfermarkt (market values)
// Season: 2025/26
const PLAYER_DATABASE = {output};
"""
    
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
    print(f"\nOutput: {OUTPUT_PATH}")
    print(f"Size: {size_kb:.0f} KB ({size_kb/1024:.1f} MB)")
    
    # Print samples
    for p in players[:3]:
        ss = p.get('seasonStats', {})
        src = ss.get('source', '?')
        comps = ss.get('competitions', {})
        combined = ss.get('combined', {})
        print(f"\n{p['name']} ({src}):")
        for comp, stats in comps.items():
            print(f"  {comp}: {stats.get('appearances',0)} apps, {stats.get('goals',0)} goals")
        print(f"  TOTAL: {combined.get('appearances',0)} apps, {combined.get('goals',0)} goals")
    
    print(f"\n{'='*60}")
    print(f"  DONE — {from_wiki} players with REAL Wikipedia stats")
    print(f"{'='*60}")


if __name__ == "__main__":
    main()
