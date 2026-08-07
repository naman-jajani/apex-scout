#!/usr/bin/env python3
import urllib.request
import json
import os
import math

API_URL = "https://fantasy.premierleague.com/api/bootstrap-static/"

def fetch_data():
    print("[INFO] Fetching live player database from Premier League API...")
    req = urllib.request.Request(
        API_URL, 
        headers={'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)'}
    )
    with urllib.request.urlopen(req) as response:
        return json.loads(response.read().decode())

def parse_elements(data):
    print("[INFO] Parsing teams and positions...")
    
    # Map team IDs to team names
    teams_map = {}
    for team in data.get("teams", []):
        teams_map[team["id"]] = {
            "name": team["name"],
            "short_name": team["short_name"]
        }
        
    # Map element types (positions)
    # 1: GK, 2: DF, 3: MF, 4: FW
    pos_map = {
        1: "GK",
        2: "DF",
        3: "MF",
        4: "FW"
    }
    
    pos_desc_map = {
        1: "Sweeper Keeper",
        2: "Defender / Fullback",
        3: "Midfielder / Playmaker",
        4: "Forward / Striker"
    }

    players = []
    elements = data.get("elements", [])
    
    print(f"[INFO] Ingesting {len(elements)} players...")
    
    for el in elements:
        # Filter out players with 0 minutes to keep database clean and high quality
        # But let's keep players with minutes > 90 or high points to ensure we have all active players
        mins = el.get("minutes", 0)
        if mins < 180: # Must have played at least 2 full matches worth of minutes
            continue
            
        first_name = el.get("first_name", "")
        second_name = el.get("second_name", "")
        full_name = f"{first_name} {second_name}".strip()
        
        team_id = el.get("team")
        team_info = teams_map.get(team_id, {"name": "Free Agent", "short_name": "FA"})
        
        pos_id = el.get("element_type")
        pos = pos_map.get(pos_id, "MF")
        role = pos_desc_map.get(pos_id, "Midfielder")
        
        # Scale valuation: now_cost is in 0.1M (e.g. 125 = 12.5M FPL price)
        # We multiply by 600,000 to get a realistic market value in Euros (e.g. €75M)
        fpl_cost = el.get("now_cost", 50)
        value = fpl_cost * 600000
        
        # Extract direct metrics
        goals = el.get("goals_scored", 0)
        assists = el.get("assists", 0)
        apps = el.get("starts", 0) or int(math.ceil(mins / 75.0))
        yellows = el.get("yellow_cards", 0)
        reds = el.get("red_cards", 0)
        
        # Threat/Creativity/Influence/ICT index
        threat = float(el.get("threat", 0))
        creativity = float(el.get("creativity", 0))
        influence = float(el.get("influence", 0))
        ict = float(el.get("ict_index", 0))
        
        # Advanced FPL stats
        xg = float(el.get("expected_goals", 0.0))
        xa = float(el.get("expected_assists", 0.0))
        saves = el.get("saves", 0)
        clean_sheets = el.get("clean_sheets", 0)
        
        # Derive Tactical Attributes (0-100) based on FPL metrics
        # Standard OVR rating
        pts = el.get("total_points", 0)
        rating = 70 + min(int(pts / 7), 23) # Maximum rating 93
        
        # Pace
        if pos == "FW":
            pace = min(max(70 + int(threat / 18), 65), 98)
        elif pos == "DF":
            pace = min(max(65 + int(threat / 25), 60), 93)
        else:
            pace = min(max(60 + int(threat / 20), 55), 92)
            
        # Dribbling
        dribbling = min(max(55 + int((creativity + threat) / 25), 55), 96)
        
        # Passing
        passing = min(max(60 + int(creativity / 15), 55), 97)
        if pos == "GK":
            passing = min(max(55 + int(influence / 20), 50), 90)
            
        # Defending
        if pos == "DF":
            defending = min(max(72 + int((influence + ict) / 20), 70), 94)
        elif pos == "MF":
            defending = min(max(50 + int(influence / 15), 45), 88)
        elif pos == "GK":
            defending = min(max(75 + int(influence / 20), 75), 93)
        else:
            defending = min(max(25 + int(influence / 40), 20), 55)
            
        # Physicality
        physicality = min(max(55 + int(influence / 15), 50), 94)
        
        # Tactical Awareness
        tactical = min(max(65 + int(ict / 4), 60), 95)
        
        # Work Rate
        workrate = min(max(60 + int(mins / 70), 55), 96)
        
        # Format detailed metrics
        goals_p90 = round((goals / mins) * 90, 2) if mins > 0 else 0
        key_passes_p90 = round((creativity / 20) / (mins / 90), 2) if mins > 90 else round(creativity / 100, 2)
        chances_created = int(creativity / 8)
        
        detailed = {
            "goalsPer90": goals_p90,
            "shotsOnTargetPer90": round(0.5 + (goals_p90 * 1.5), 1),
            "expectedGoals": round(xg, 1),
            "shotConversionRate": round(10.0 + min(goals * 1.2, 15.0), 1),
            "touchesInBoxPer90": round(2.0 + (threat / 200), 1) if pos == "FW" else round(0.5 + (threat / 300), 1),
            "chancesCreated": chances_created,
            "dribblesCompletedPer90": round(0.4 + (creativity / 300), 1),
            "keyPassesPer90": key_passes_p90
        }
        
        if pos == "GK":
            detailed = {
                "savePercentage": round(65.0 + min(saves / 5.0, 16.0), 1),
                "cleanSheets": clean_sheets,
                "goalsConceded": el.get("goals_conceded", 0),
                "psxgDifference": round(clean_sheets * 0.4, 1),
                "passingAccuracy": round(70.0 + min(influence / 20.0, 20.0), 1),
                "sweeperActionsPer90": round(0.4 + (ict / 100.0), 1),
                "averageDistanceOfSweeperActions": round(12.0 + (ict / 50.0), 1)
            }
        elif pos == "DF":
            detailed["tacklesWonPer90"] = round(1.0 + (influence / 300), 1)
            detailed["interceptionsPer90"] = round(0.8 + (ict / 300), 1)
            detailed["clearancesPer90"] = round(1.5 + (influence / 200), 1)
            detailed["aerialDuelWinPercentage"] = round(55.0 + min(influence / 20, 25.0), 1)
            detailed["tackledDribblerRate"] = round(50.0 + min(ict / 10.0, 30.0), 1)
            detailed["progressivePassesPer90"] = round(1.5 + (creativity / 200), 1)
            detailed["longPassesCompletedPer90"] = round(1.0 + (creativity / 300), 1)
            detailed["passingAccuracy"] = round(80.0 + min(creativity / 50, 14.0), 1)
        elif pos == "MF":
            detailed["passingAccuracy"] = round(82.0 + min(creativity / 60, 12.0), 1)
            detailed["progressivePassesPer90"] = round(2.0 + (creativity / 100), 1)
            detailed["tacklesWonPer90"] = round(0.8 + (influence / 300), 1)
            detailed["interceptionsPer90"] = round(0.5 + (ict / 400), 1)
            detailed["ballRecoveriesPer90"] = round(3.5 + (influence / 150), 1)
            
        # Compile benchmarks relative to FPL metrics
        benchmarks = []
        if pos == "GK":
            benchmarks = [
                {"metric": "Save %", "player": detailed["savePercentage"], "avg": 69.5, "elite": 77.0},
                {"metric": "Clean Sheets", "player": clean_sheets, "avg": 4.5, "elite": 10.0},
                {"metric": "Sweeper Actions p90", "player": detailed["sweeperActionsPer90"], "avg": 0.6, "elite": 1.2},
                {"metric": "Passing Accuracy %", "player": detailed["passingAccuracy"], "avg": 73.0, "elite": 82.0}
            ]
        elif pos == "FW":
            benchmarks = [
                {"metric": "Goals per 90", "player": goals_p90, "avg": 0.22, "elite": 0.65},
                {"metric": "Shot Conversion %", "player": detailed["shotConversionRate"], "avg": 10.5, "elite": 18.0},
                {"metric": "Touches in Box p90", "player": detailed["touchesInBoxPer90"], "avg": 2.5, "elite": 5.5},
                {"metric": "Expected Goals (xG)", "player": round(xg, 1), "avg": 4.5, "elite": 14.0}
            ]
        elif pos == "MF":
            benchmarks = [
                {"metric": "Key Passes per 90", "player": key_passes_p90, "avg": 0.9, "elite": 2.2},
                {"metric": "Progressive Passes p90", "player": detailed["progressivePassesPer90"], "avg": 2.8, "elite": 6.2},
                {"metric": "Chances Created", "player": chances_created, "avg": 16, "elite": 55},
                {"metric": "Passing Accuracy %", "player": detailed["passingAccuracy"], "avg": 79.5, "elite": 87.0}
            ]
        else: # DF
            benchmarks = [
                {"metric": "Passing Accuracy %", "player": detailed["passingAccuracy"], "avg": 82.0, "elite": 89.0},
                {"metric": "Clearances per 90", "player": detailed["clearancesPer90"], "avg": 2.6, "elite": 4.0},
                {"metric": "Aerial Duel Win %", "player": detailed["aerialDuelWinPercentage"], "avg": 54.5, "elite": 68.0},
                {"metric": "Tackles Won per 90", "player": detailed["tacklesWonPer90"], "avg": 1.1, "elite": 2.0}
            ]
            
        # Draw Heatmap coordinates based on positions
        heatmap = []
        if pos == "GK":
            heatmap = [
                {"x": 50, "y": 6, "r": 35, "v": 0.98},
                {"x": 50, "y": 14, "r": 28, "v": 0.7},
                {"x": 45, "y": 8, "r": 22, "v": 0.55},
                {"x": 55, "y": 8, "r": 22, "v": 0.55}
            ]
        elif pos == "DF":
            # Check if likely center back or full back. 
            # Threat and creativity are lower for central CBs.
            is_fb = creativity > 150.0 or threat > 100.0
            if is_fb:
                # Flank heatmap (splits left or right based on id modulo 2 for variance)
                side = 14 if el["id"] % 2 == 0 else 86
                heatmap = [
                    {"x": side, "y": 25, "r": 38, "v": 0.8},
                    {"x": side, "y": 45, "r": 40, "v": 0.85},
                    {"x": side, "y": 65, "r": 35, "v": 0.7},
                    {"x": side, "y": 12, "r": 30, "v": 0.6}
                ]
                role = "Attacking Fullback"
            else:
                heatmap = [
                    {"x": 50, "y": 20, "r": 45, "v": 0.9},
                    {"x": 42, "y": 18, "r": 32, "v": 0.8},
                    {"x": 58, "y": 18, "r": 32, "v": 0.8},
                    {"x": 50, "y": 10, "r": 28, "v": 0.6}
                ]
                role = "Central Defender"
        elif pos == "MF":
            # Creative midfielder vs defensive midfielder
            is_cam = creativity > 350.0 or goals > 4
            if is_cam:
                heatmap = [
                    {"x": 50, "y": 64, "r": 42, "v": 0.9},
                    {"x": 40, "y": 55, "r": 35, "v": 0.75},
                    {"x": 60, "y": 55, "r": 35, "v": 0.75},
                    {"x": 50, "y": 76, "r": 30, "v": 0.8}
                ]
                role = "Attacking Playmaker"
            else:
                heatmap = [
                    {"x": 50, "y": 42, "r: ": 45, "v": 0.9},
                    {"x": 44, "y": 35, "r": 38, "v": 0.8},
                    {"x": 56, "y": 35, "r": 38, "v": 0.8},
                    {"x": 50, "y": 55, "r": 35, "v": 0.75}
                ]
                role = "Box-to-Box Midfielder"
        else: # FW
            # Winger vs striker
            is_winger = creativity > 250.0
            if is_winger:
                side = 22 if el["id"] % 2 == 0 else 78
                heatmap = [
                    {"x": side, "y": 72, "r": 45, "v": 0.9},
                    {"x": side, "y": 58, "r": 38, "v": 0.75},
                    {"x": side + (6 if side == 22 else -6), "y": 82, "r": 35, "v": 0.8},
                    {"x": 50, "y": 84, "r": 30, "v": 0.65}
                ]
                role = "Inverted Winger"
            else:
                heatmap = [
                    {"x": 50, "y": 84, "r": 38, "v": 0.9},
                    {"x": 48, "y": 76, "r": 32, "v": 0.75},
                    {"x": 52, "y": 80, "r": 32, "v": 0.8},
                    {"x": 50, "y": 92, "r": 28, "v": 0.85}
                ]
                role = "Complete Winger / Striker"

        # Generate strengths/weaknesses
        strengths = []
        weaknesses = []
        attrs_list = [
            ("Pace", pace),
            ("Dribbling", dribbling),
            ("Passing", passing),
            ("Defending", defending),
            ("Physicality", physicality),
            ("Tactical awareness", tactical),
            ("Workrate", workrate)
        ]
        attrs_sorted = sorted(attrs_list, key=lambda x: x[1], reverse=True)
        
        strengths.append(attrs_sorted[0][0])
        strengths.append(attrs_sorted[1][0])
        
        # Add special strength
        if goals > 8: strengths.append("Clinical Finishing")
        elif assists > 6: strengths.append("Creative Vision")
        elif pos == "GK" and detailed["savePercentage"] > 75: strengths.append("Reflexes")
        elif pos == "DF" and detailed["aerialDuelWinPercentage"] > 68: strengths.append("Aerial Dominance")
        
        # Add weaknesses
        if pos == "FW" or (pos == "MF" and rating > 84 and defending < 55):
            weaknesses.append("Defensive Tracking Back")
        
        lowest_attr = attrs_sorted[-1][0]
        if lowest_attr not in weaknesses:
            weaknesses.append(lowest_attr)
        if len(weaknesses) < 2:
            weaknesses.append(attrs_sorted[-2][0])

        players.append({
            "id": f"{first_name.lower()}-{second_name.lower()}".replace(" ", "-"),
            "name": full_name,
            "age": 20 + (el["id"] % 15), # FPL doesn't have direct age in bootstrap, mock a realistic age distribution
            "position": pos,
            "role": role,
            "club": team_info["name"],
            "league": "Premier League",
            "nation": "England" if el["id"] % 3 == 0 else ("France" if el["id"] % 5 == 0 else ("Brazil" if el["id"] % 7 == 0 else "Spain")), # Mock nation distribution
            "value": value,
            "rating": rating,
            "general": {
                "apps": apps,
                "mins": mins,
                "goals": goals,
                "assists": assists,
                "yellowCards": yellows,
                "redCards": reds
            },
            "attributes": {
                "pace": pace,
                "dribbling": dribbling,
                "passing": passing,
                "defending": defending,
                "physicality": physicality,
                "tactical": tactical,
                "workrate": workrate
            },
            "detailedStats": detailed,
            "leagueBenchmarks": benchmarks,
            "heatmap": heatmap,
            "strengths": list(set(strengths))[:4],
            "weaknesses": list(set(weaknesses))[:3]
        })
        
    return players

def write_db_file(players):
    output_path = "/Users/namanjajani/.gemini/antigravity/scratch/football-scout-app/data.js"
    print(f"[INFO] Writing database to {output_path}...")
    
    js_content = f"// Football Scout App - Player Database\nconst PLAYER_DATABASE = {json.dumps(players, indent=2)};\n\n"
    js_content += """// Helper to search / filter players locally
function getPlayersFiltered({ position, minAge, maxAge, maxVal, query }) {
  return PLAYER_DATABASE.filter(player => {
    if (position && position !== "ALL" && player.position !== position) return false;
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
    with open(output_path, "w") as f:
        f.write(js_content)
    print(f"[SUCCESS] Wrote {len(players)} players into database.")

if __name__ == "__main__":
    try:
        raw_data = fetch_data()
        parsed_players = parse_elements(raw_data)
        write_db_file(parsed_players)
    except Exception as e:
        print(f"[ERROR] Sync failed: {e}")
        import traceback
        traceback.print_exc()
