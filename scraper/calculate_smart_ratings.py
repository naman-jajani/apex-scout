#!/usr/bin/env python3
"""APEX SCOUT — Smart Rating Algorithm
Calculates data-driven player ratings based on real match stats (Per 90)."""

import json, os, math

SCRIPT_DIR = os.path.dirname(os.path.abspath(__file__))
DATA_JS = os.path.join(SCRIPT_DIR, '..', 'data.js')

LEAGUE_MODIFIERS = {
    "Premier League": 2.0,
    "La Liga": 1.5,
    "Serie A": 1.0,
    "Bundesliga": 1.0,
    "Ligue 1": 0.5,
    "Primeira Liga": 0.0,
    "Brasileirão": 0.0,
    "Argentine Primera": 0.0,
}

def load_players():
    with open(DATA_JS, 'r', encoding='utf-8') as f:
        c = f.read()
    s = c.find('[{')
    e = c.find('\nfunction', s)
    j = c[s:e].strip().rstrip(';') if e != -1 else c[s:].strip().rstrip(';')
    return json.loads(j)

def save_players(players, original_content):
    s = original_content.find('[{')
    e = original_content.find('\nfunction', s)
    output = json.dumps(players, separators=(',', ':'), ensure_ascii=False)
    
    with open(DATA_JS, 'w', encoding='utf-8') as f:
        f.write(original_content[:s])
        f.write(output)
        f.write(";\n")
        f.write(original_content[e:].lstrip())

def mean(data):
    return sum(data) / len(data) if data else 0

def stddev(data, mu):
    if len(data) < 2: return 0.1
    variance = sum((x - mu) ** 2 for x in data) / (len(data) - 1)
    return math.sqrt(variance) if variance > 0 else 0.1

def z_score(val, mu, sigma):
    return max(-3.0, min(3.0, (val - mu) / sigma))

def calc_p90(val, mins):
    return (val / mins * 90) if mins > 0 else 0

def clamp(val, min_val=10, max_val=99):
    return max(min_val, min(max_val, int(round(val))))

def calculate_stats(players):
    # Group by position and filter out low mins for baseline
    groups = {'FW': [], 'MF': [], 'DF': [], 'GK': []}
    for p in players:
        mins = p.get('seasonStats', {}).get('combined', {}).get('minutes', 0)
        if mins >= 500:
            groups[p['position']].append(p)
            
    # Calculate Means and StdDevs
    baselines = {}
    for pos, group in groups.items():
        metrics = {
            'g90': [calc_p90(p['seasonStats']['combined'].get('goals',0), p['seasonStats']['combined'].get('minutes',1)) for p in group],
            'a90': [calc_p90(p['seasonStats']['combined'].get('assists',0), p['seasonStats']['combined'].get('minutes',1)) for p in group],
            'xg90': [calc_p90(p['seasonStats']['combined'].get('xG',0), p['seasonStats']['combined'].get('minutes',1)) for p in group],
            'xa90': [calc_p90(p['seasonStats']['combined'].get('xA',0), p['seasonStats']['combined'].get('minutes',1)) for p in group],
            'tkl90': [calc_p90(p['seasonStats']['combined'].get('tackles',0), p['seasonStats']['combined'].get('minutes',1)) for p in group],
            'rating': [p['seasonStats']['combined'].get('rating',0) for p in group if p['seasonStats']['combined'].get('rating',0) > 0],
        }
        
        # Clinical finishing: Goals - xG
        metrics['clin90'] = [metrics['g90'][i] - metrics['xg90'][i] for i in range(len(group))]
        
        b = {}
        for k, v in metrics.items():
            if not v: v = [0]
            mu = mean(v)
            sig = stddev(v, mu)
            b[k] = {'mu': mu, 'sig': sig}
        baselines[pos] = b
        
    return baselines

def process_players(players, baselines):
    for p in players:
        pos = p['position']
        b = baselines[pos]
        
        ss = p.get('seasonStats', {}).get('combined', {})
        mins = ss.get('minutes', 0)
        
        g90 = calc_p90(ss.get('goals',0), mins)
        a90 = calc_p90(ss.get('assists',0), mins)
        xg90 = calc_p90(ss.get('xG',0), mins)
        xa90 = calc_p90(ss.get('xA',0), mins)
        tkl90 = calc_p90(ss.get('tackles',0), mins)
        clin90 = g90 - xg90
        rating = ss.get('rating', 0)
        
        z_g = z_score(g90, b['g90']['mu'], b['g90']['sig'])
        z_a = z_score(a90, b['a90']['mu'], b['a90']['sig'])
        z_xa = z_score(xa90, b['xa90']['mu'], b['xa90']['sig'])
        z_tkl = z_score(tkl90, b['tkl90']['mu'], b['tkl90']['sig'])
        z_clin = z_score(clin90, b['clin90']['mu'], b['clin90']['sig'])
        z_rat = z_score(rating, b['rating']['mu'], b['rating']['sig']) if rating > 0 else 0
        
        # Calculate Performance Z-Score
        if pos == 'FW':
            # Rely less on Statmuse rating, more on hard attacking stats
            z_total = 0.35 * z_g + 0.15 * z_clin + 0.15 * z_a + 0.10 * z_xa + 0.25 * z_rat
        elif pos == 'MF':
            z_total = 0.25 * z_a + 0.20 * z_xa + 0.15 * z_g + 0.10 * z_tkl + 0.30 * z_rat
        elif pos == 'DF':
            z_total = 0.40 * z_tkl + 0.60 * z_rat
        else: # GK
            z_total = z_rat
            
        league_mod = LEAGUE_MODIFIERS.get(p.get('league'), -1.0)
        
        stats_rating = 75 + (z_total * 7) + league_mod
        stats_rating = max(50, min(99, stats_rating))
        
        old_rating = p.get('rating', 75)
        
        weight = min(1.0, mins / 2000.0)
        if p.get('seasonStats', {}).get('source') == 'generated':
            weight = 0 # Cannot trust generated stats
            
        final_rating = (stats_rating * weight) + (old_rating * (1 - weight))
        final_rating_int = clamp(final_rating)
        
        # Update attributes
        scaling_factor = final_rating_int / max(1, old_rating)
        attrs = p.get('attributes', {})
        new_attrs = {}
        for k, v in attrs.items():
            new_attrs[k] = clamp(v * scaling_factor)
            
        # Specific attribute bonuses based on Z-Scores
        if weight > 0.3:
            if z_xa > 1.0: new_attrs['passing'] = clamp(new_attrs['passing'] + (z_xa * 2 * weight))
            if z_tkl > 1.0: new_attrs['defending'] = clamp(new_attrs['defending'] + (z_tkl * 2 * weight))
            if z_clin > 1.0: new_attrs['tactical'] = clamp(new_attrs['tactical'] + (z_clin * 2 * weight))
            
        p['rating'] = final_rating_int
        p['attributes'] = new_attrs

        # Keep original for debugging/logging
        p['_old_rating'] = old_rating
        p['_stats_rating'] = stats_rating
        p['_weight'] = weight

def main():
    print("=" * 50)
    print("  Calculating Smart Ratings")
    print("=" * 50)
    
    with open(DATA_JS, 'r', encoding='utf-8') as f:
        original_content = f.read()
        
    players = load_players()
    print(f"Loaded {len(players)} players.")
    
    baselines = calculate_stats(players)
    print("Baselines Calculated.")
    for pos, b in baselines.items():
        print(f"  {pos} - g90 mu: {b['g90']['mu']:.2f}, rat mu: {b['rating']['mu']:.2f}")
        
    process_players(players, baselines)
    
    # Sort by new rating
    players.sort(key=lambda x: x['rating'], reverse=True)
    
    # Print notable changes
    print("\nNotable Changes (Top 10 New Ratings):")
    for i, p in enumerate(players[:10]):
        diff = p['rating'] - p['_old_rating']
        diff_str = f"+{diff}" if diff > 0 else str(diff)
        w = p['_weight']
        print(f"  {i+1}. {p['name']} ({p['club']}): {p['rating']} (was {p['_old_rating']}, diff {diff_str}) | StatsRat: {p['_stats_rating']:.1f} (W:{w:.2f})")
        
    print("\nNotable Drops (Biggest diffs):")
    drops = sorted(players, key=lambda x: x['rating'] - x['_old_rating'])
    for i, p in enumerate(drops[:5]):
        diff = p['rating'] - p['_old_rating']
        w = p['_weight']
        print(f"  {p['name']} ({p['club']}): {p['rating']} (was {p['_old_rating']}, diff {diff}) | StatsRat: {p['_stats_rating']:.1f} (W:{w:.2f})")
        
    # Cleanup debug keys
    for p in players:
        p.pop('_old_rating', None)
        p.pop('_stats_rating', None)
        p.pop('_weight', None)
        
    save_players(players, original_content)
    print(f"\nSaved updated ratings to {DATA_JS}")
    
if __name__ == "__main__":
    main()
