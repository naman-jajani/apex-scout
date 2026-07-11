// Football Scout App - Player Database
const PLAYER_DATABASE = [
  {
    "id": "david-raya-mart\u00edn",
    "name": "David Raya Mart\u00edn",
    "age": 21,
    "position": "GK",
    "role": "Sweeper Keeper",
    "club": "Arsenal",
    "league": "Premier League",
    "nation": "Spain",
    "value": 37200000,
    "rating": 93,
    "general": {
      "apps": 37,
      "mins": 3330,
      "goals": 0,
      "assists": 0,
      "yellowCards": 1,
      "redCards": 0
    },
    "attributes": {
      "pace": 60,
      "dribbling": 56,
      "passing": 82,
      "defending": 93,
      "physicality": 91,
      "tactical": 79,
      "workrate": 96
    },
    "detailedStats": {
      "savePercentage": 77.0,
      "cleanSheets": 19,
      "goalsConceded": 26,
      "psxgDifference": 7.6,
      "passingAccuracy": 90.0,
      "sweeperActionsPer90": 1.0,
      "averageDistanceOfSweeperActions": 13.2
    },
    "leagueBenchmarks": [
      {
        "metric": "Save %",
        "player": 77.0,
        "avg": 69.5,
        "elite": 77.0
      },
      {
        "metric": "Clean Sheets",
        "player": 19,
        "avg": 4.5,
        "elite": 10.0
      },
      {
        "metric": "Sweeper Actions p90",
        "player": 1.0,
        "avg": 0.6,
        "elite": 1.2
      },
      {
        "metric": "Passing Accuracy %",
        "player": 90.0,
        "avg": 73.0,
        "elite": 82.0
      }
    ],
    "heatmap": [
      {
        "x": 50,
        "y": 6,
        "r": 35,
        "v": 0.98
      },
      {
        "x": 50,
        "y": 14,
        "r": 28,
        "v": 0.7
      },
      {
        "x": 45,
        "y": 8,
        "r": 22,
        "v": 0.55
      },
      {
        "x": 55,
        "y": 8,
        "r": 22,
        "v": 0.55
      }
    ],
    "strengths": [
      "Defending",
      "Workrate",
      "Reflexes"
    ],
    "weaknesses": [
      "Dribbling",
      "Pace"
    ]
  },
  {
    "id": "gabriel-dos-santos-magalh\u00e3es",
    "name": "Gabriel dos Santos Magalh\u00e3es",
    "age": 25,
    "position": "DF",
    "role": "Attacking Fullback",
    "club": "Arsenal",
    "league": "Premier League",
    "nation": "France",
    "value": 43800000,
    "rating": 93,
    "general": {
      "apps": 30,
      "mins": 2750,
      "goals": 3,
      "assists": 5,
      "yellowCards": 4,
      "redCards": 0
    },
    "attributes": {
      "pace": 76,
      "dribbling": 72,
      "passing": 68,
      "defending": 94,
      "physicality": 94,
      "tactical": 95,
      "workrate": 96
    },
    "detailedStats": {
      "goalsPer90": 0.1,
      "shotsOnTargetPer90": 0.7,
      "expectedGoals": 2.9,
      "shotConversionRate": 13.6,
      "touchesInBoxPer90": 1.5,
      "chancesCreated": 16,
      "dribblesCompletedPer90": 0.8,
      "keyPassesPer90": 0.21,
      "tacklesWonPer90": 3.7,
      "interceptionsPer90": 1.2,
      "clearancesPer90": 5.6,
      "aerialDuelWinPercentage": 80.0,
      "tackledDribblerRate": 62.5,
      "progressivePassesPer90": 2.1,
      "longPassesCompletedPer90": 1.4,
      "passingAccuracy": 82.6
    },
    "leagueBenchmarks": [
      {
        "metric": "Passing Accuracy %",
        "player": 82.6,
        "avg": 82.0,
        "elite": 89.0
      },
      {
        "metric": "Clearances per 90",
        "player": 5.6,
        "avg": 2.6,
        "elite": 4.0
      },
      {
        "metric": "Aerial Duel Win %",
        "player": 80.0,
        "avg": 54.5,
        "elite": 68.0
      },
      {
        "metric": "Tackles Won per 90",
        "player": 3.7,
        "avg": 1.1,
        "elite": 2.0
      }
    ],
    "heatmap": [
      {
        "x": 86,
        "y": 25,
        "r": 38,
        "v": 0.8
      },
      {
        "x": 86,
        "y": 45,
        "r": 40,
        "v": 0.85
      },
      {
        "x": 86,
        "y": 65,
        "r": 35,
        "v": 0.7
      },
      {
        "x": 86,
        "y": 12,
        "r": 30,
        "v": 0.6
      }
    ],
    "strengths": [
      "Workrate",
      "Tactical awareness",
      "Aerial Dominance"
    ],
    "weaknesses": [
      "Dribbling",
      "Passing"
    ]
  },
  {
    "id": "william-saliba",
    "name": "William Saliba",
    "age": 26,
    "position": "DF",
    "role": "Attacking Fullback",
    "club": "Arsenal",
    "league": "Premier League",
    "nation": "England",
    "value": 37800000,
    "rating": 89,
    "general": {
      "apps": 30,
      "mins": 2614,
      "goals": 1,
      "assists": 0,
      "yellowCards": 2,
      "redCards": 0
    },
    "attributes": {
      "pace": 68,
      "dribbling": 66,
      "passing": 73,
      "defending": 94,
      "physicality": 91,
      "tactical": 86,
      "workrate": 96
    },
    "detailedStats": {
      "goalsPer90": 0.03,
      "shotsOnTargetPer90": 0.5,
      "expectedGoals": 0.9,
      "shotConversionRate": 11.2,
      "touchesInBoxPer90": 0.8,
      "chancesCreated": 25,
      "dribblesCompletedPer90": 1.1,
      "keyPassesPer90": 0.35,
      "tacklesWonPer90": 2.8,
      "interceptionsPer90": 1.1,
      "clearancesPer90": 4.3,
      "aerialDuelWinPercentage": 80.0,
      "tackledDribblerRate": 58.4,
      "progressivePassesPer90": 2.5,
      "longPassesCompletedPer90": 1.7,
      "passingAccuracy": 84.0
    },
    "leagueBenchmarks": [
      {
        "metric": "Passing Accuracy %",
        "player": 84.0,
        "avg": 82.0,
        "elite": 89.0
      },
      {
        "metric": "Clearances per 90",
        "player": 4.3,
        "avg": 2.6,
        "elite": 4.0
      },
      {
        "metric": "Aerial Duel Win %",
        "player": 80.0,
        "avg": 54.5,
        "elite": 68.0
      },
      {
        "metric": "Tackles Won per 90",
        "player": 2.8,
        "avg": 1.1,
        "elite": 2.0
      }
    ],
    "heatmap": [
      {
        "x": 14,
        "y": 25,
        "r": 38,
        "v": 0.8
      },
      {
        "x": 14,
        "y": 45,
        "r": 40,
        "v": 0.85
      },
      {
        "x": 14,
        "y": 65,
        "r": 35,
        "v": 0.7
      },
      {
        "x": 14,
        "y": 12,
        "r": 30,
        "v": 0.6
      }
    ],
    "strengths": [
      "Defending",
      "Workrate",
      "Aerial Dominance"
    ],
    "weaknesses": [
      "Dribbling",
      "Pace"
    ]
  },
  {
    "id": "riccardo-calafiori",
    "name": "Riccardo Calafiori",
    "age": 27,
    "position": "DF",
    "role": "Attacking Fullback",
    "club": "Arsenal",
    "league": "Premier League",
    "nation": "Brazil",
    "value": 33600000,
    "rating": 85,
    "general": {
      "apps": 22,
      "mins": 1697,
      "goals": 1,
      "assists": 2,
      "yellowCards": 5,
      "redCards": 0
    },
    "attributes": {
      "pace": 77,
      "dribbling": 74,
      "passing": 72,
      "defending": 90,
      "physicality": 73,
      "tactical": 84,
      "workrate": 84
    },
    "detailedStats": {
      "goalsPer90": 0.05,
      "shotsOnTargetPer90": 0.6,
      "expectedGoals": 3.4,
      "shotConversionRate": 11.2,
      "touchesInBoxPer90": 1.5,
      "chancesCreated": 22,
      "dribblesCompletedPer90": 1.0,
      "keyPassesPer90": 0.48,
      "tacklesWonPer90": 1.9,
      "interceptionsPer90": 1.1,
      "clearancesPer90": 2.9,
      "aerialDuelWinPercentage": 69.2,
      "tackledDribblerRate": 57.8,
      "progressivePassesPer90": 2.4,
      "longPassesCompletedPer90": 1.6,
      "passingAccuracy": 83.6
    },
    "leagueBenchmarks": [
      {
        "metric": "Passing Accuracy %",
        "player": 83.6,
        "avg": 82.0,
        "elite": 89.0
      },
      {
        "metric": "Clearances per 90",
        "player": 2.9,
        "avg": 2.6,
        "elite": 4.0
      },
      {
        "metric": "Aerial Duel Win %",
        "player": 69.2,
        "avg": 54.5,
        "elite": 68.0
      },
      {
        "metric": "Tackles Won per 90",
        "player": 1.9,
        "avg": 1.1,
        "elite": 2.0
      }
    ],
    "heatmap": [
      {
        "x": 86,
        "y": 25,
        "r": 38,
        "v": 0.8
      },
      {
        "x": 86,
        "y": 45,
        "r": 40,
        "v": 0.85
      },
      {
        "x": 86,
        "y": 65,
        "r": 35,
        "v": 0.7
      },
      {
        "x": 86,
        "y": 12,
        "r": 30,
        "v": 0.6
      }
    ],
    "strengths": [
      "Defending",
      "Tactical awareness",
      "Aerial Dominance"
    ],
    "weaknesses": [
      "Passing",
      "Physicality"
    ]
  },
  {
    "id": "jurri\u00ebn-timber",
    "name": "Jurri\u00ebn Timber",
    "age": 28,
    "position": "DF",
    "role": "Attacking Fullback",
    "club": "Arsenal",
    "league": "Premier League",
    "nation": "Spain",
    "value": 36000000,
    "rating": 91,
    "general": {
      "apps": 28,
      "mins": 2452,
      "goals": 3,
      "assists": 6,
      "yellowCards": 5,
      "redCards": 0
    },
    "attributes": {
      "pace": 79,
      "dribbling": 85,
      "passing": 86,
      "defending": 94,
      "physicality": 88,
      "tactical": 95,
      "workrate": 95
    },
    "detailedStats": {
      "goalsPer90": 0.11,
      "shotsOnTargetPer90": 0.7,
      "expectedGoals": 4.7,
      "shotConversionRate": 13.6,
      "touchesInBoxPer90": 1.7,
      "chancesCreated": 50,
      "dribblesCompletedPer90": 1.7,
      "keyPassesPer90": 0.74,
      "tacklesWonPer90": 2.7,
      "interceptionsPer90": 1.2,
      "clearancesPer90": 4.0,
      "aerialDuelWinPercentage": 80.0,
      "tackledDribblerRate": 62.6,
      "progressivePassesPer90": 3.5,
      "longPassesCompletedPer90": 2.3,
      "passingAccuracy": 88.1
    },
    "leagueBenchmarks": [
      {
        "metric": "Passing Accuracy %",
        "player": 88.1,
        "avg": 82.0,
        "elite": 89.0
      },
      {
        "metric": "Clearances per 90",
        "player": 4.0,
        "avg": 2.6,
        "elite": 4.0
      },
      {
        "metric": "Aerial Duel Win %",
        "player": 80.0,
        "avg": 54.5,
        "elite": 68.0
      },
      {
        "metric": "Tackles Won per 90",
        "player": 2.7,
        "avg": 1.1,
        "elite": 2.0
      }
    ],
    "heatmap": [
      {
        "x": 14,
        "y": 25,
        "r": 38,
        "v": 0.8
      },
      {
        "x": 14,
        "y": 45,
        "r": 40,
        "v": 0.85
      },
      {
        "x": 14,
        "y": 65,
        "r": 35,
        "v": 0.7
      },
      {
        "x": 14,
        "y": 12,
        "r": 30,
        "v": 0.6
      }
    ],
    "strengths": [
      "Workrate",
      "Tactical awareness",
      "Aerial Dominance"
    ],
    "weaknesses": [
      "Dribbling",
      "Pace"
    ]
  },
  {
    "id": "myles-lewis-skelly",
    "name": "Myles Lewis-Skelly",
    "age": 30,
    "position": "DF",
    "role": "Central Defender",
    "club": "Arsenal",
    "league": "Premier League",
    "nation": "France",
    "value": 30000000,
    "rating": 74,
    "general": {
      "apps": 5,
      "mins": 697,
      "goals": 0,
      "assists": 0,
      "yellowCards": 3,
      "redCards": 0
    },
    "attributes": {
      "pace": 66,
      "dribbling": 59,
      "passing": 64,
      "defending": 76,
      "physicality": 59,
      "tactical": 69,
      "workrate": 69
    },
    "detailedStats": {
      "goalsPer90": 0.0,
      "shotsOnTargetPer90": 0.5,
      "expectedGoals": 0.1,
      "shotConversionRate": 10.0,
      "touchesInBoxPer90": 0.6,
      "chancesCreated": 9,
      "dribblesCompletedPer90": 0.6,
      "keyPassesPer90": 0.48,
      "tacklesWonPer90": 1.2,
      "interceptionsPer90": 0.9,
      "clearancesPer90": 1.9,
      "aerialDuelWinPercentage": 58.7,
      "tackledDribblerRate": 51.8,
      "progressivePassesPer90": 1.9,
      "longPassesCompletedPer90": 1.2,
      "passingAccuracy": 81.5
    },
    "leagueBenchmarks": [
      {
        "metric": "Passing Accuracy %",
        "player": 81.5,
        "avg": 82.0,
        "elite": 89.0
      },
      {
        "metric": "Clearances per 90",
        "player": 1.9,
        "avg": 2.6,
        "elite": 4.0
      },
      {
        "metric": "Aerial Duel Win %",
        "player": 58.7,
        "avg": 54.5,
        "elite": 68.0
      },
      {
        "metric": "Tackles Won per 90",
        "player": 1.2,
        "avg": 1.1,
        "elite": 2.0
      }
    ],
    "heatmap": [
      {
        "x": 50,
        "y": 20,
        "r": 45,
        "v": 0.9
      },
      {
        "x": 42,
        "y": 18,
        "r": 32,
        "v": 0.8
      },
      {
        "x": 58,
        "y": 18,
        "r": 32,
        "v": 0.8
      },
      {
        "x": 50,
        "y": 10,
        "r": 28,
        "v": 0.6
      }
    ],
    "strengths": [
      "Defending",
      "Tactical awareness"
    ],
    "weaknesses": [
      "Dribbling",
      "Physicality"
    ]
  },
  {
    "id": "benjamin-white",
    "name": "Benjamin White",
    "age": 31,
    "position": "DF",
    "role": "Central Defender",
    "club": "Arsenal",
    "league": "Premier League",
    "nation": "Spain",
    "value": 30600000,
    "rating": 76,
    "general": {
      "apps": 9,
      "mins": 699,
      "goals": 0,
      "assists": 1,
      "yellowCards": 0,
      "redCards": 0
    },
    "attributes": {
      "pace": 67,
      "dribbling": 62,
      "passing": 68,
      "defending": 81,
      "physicality": 65,
      "tactical": 73,
      "workrate": 69
    },
    "detailedStats": {
      "goalsPer90": 0.0,
      "shotsOnTargetPer90": 0.5,
      "expectedGoals": 0.5,
      "shotConversionRate": 10.0,
      "touchesInBoxPer90": 0.7,
      "chancesCreated": 16,
      "dribblesCompletedPer90": 0.8,
      "keyPassesPer90": 0.86,
      "tacklesWonPer90": 1.5,
      "interceptionsPer90": 0.9,
      "clearancesPer90": 2.3,
      "aerialDuelWinPercentage": 62.7,
      "tackledDribblerRate": 53.4,
      "progressivePassesPer90": 2.2,
      "longPassesCompletedPer90": 1.4,
      "passingAccuracy": 82.7
    },
    "leagueBenchmarks": [
      {
        "metric": "Passing Accuracy %",
        "player": 82.7,
        "avg": 82.0,
        "elite": 89.0
      },
      {
        "metric": "Clearances per 90",
        "player": 2.3,
        "avg": 2.6,
        "elite": 4.0
      },
      {
        "metric": "Aerial Duel Win %",
        "player": 62.7,
        "avg": 54.5,
        "elite": 68.0
      },
      {
        "metric": "Tackles Won per 90",
        "player": 1.5,
        "avg": 1.1,
        "elite": 2.0
      }
    ],
    "heatmap": [
      {
        "x": 50,
        "y": 20,
        "r": 45,
        "v": 0.9
      },
      {
        "x": 42,
        "y": 18,
        "r": 32,
        "v": 0.8
      },
      {
        "x": 58,
        "y": 18,
        "r": 32,
        "v": 0.8
      },
      {
        "x": 50,
        "y": 10,
        "r": 28,
        "v": 0.6
      }
    ],
    "strengths": [
      "Defending",
      "Tactical awareness"
    ],
    "weaknesses": [
      "Dribbling",
      "Physicality"
    ]
  },
  {
    "id": "bukayo-saka",
    "name": "Bukayo Saka",
    "age": 21,
    "position": "MF",
    "role": "Attacking Playmaker",
    "club": "Arsenal",
    "league": "Premier League",
    "nation": "Spain",
    "value": 60000000,
    "rating": 92,
    "general": {
      "apps": 25,
      "mins": 2218,
      "goals": 7,
      "assists": 10,
      "yellowCards": 2,
      "redCards": 0
    },
    "attributes": {
      "pace": 92,
      "dribbling": 96,
      "passing": 97,
      "defending": 88,
      "physicality": 94,
      "tactical": 95,
      "workrate": 91
    },
    "detailedStats": {
      "goalsPer90": 0.28,
      "shotsOnTargetPer90": 0.9,
      "expectedGoals": 7.6,
      "shotConversionRate": 18.4,
      "touchesInBoxPer90": 3.3,
      "chancesCreated": 105,
      "dribblesCompletedPer90": 3.2,
      "keyPassesPer90": 1.72,
      "passingAccuracy": 94.0,
      "progressivePassesPer90": 10.5,
      "tacklesWonPer90": 2.9,
      "interceptionsPer90": 1.1,
      "ballRecoveriesPer90": 7.7
    },
    "leagueBenchmarks": [
      {
        "metric": "Key Passes per 90",
        "player": 1.72,
        "avg": 0.9,
        "elite": 2.2
      },
      {
        "metric": "Progressive Passes p90",
        "player": 10.5,
        "avg": 2.8,
        "elite": 6.2
      },
      {
        "metric": "Chances Created",
        "player": 105,
        "avg": 16,
        "elite": 55
      },
      {
        "metric": "Passing Accuracy %",
        "player": 94.0,
        "avg": 79.5,
        "elite": 87.0
      }
    ],
    "heatmap": [
      {
        "x": 50,
        "y": 64,
        "r": 42,
        "v": 0.9
      },
      {
        "x": 40,
        "y": 55,
        "r": 35,
        "v": 0.75
      },
      {
        "x": 60,
        "y": 55,
        "r": 35,
        "v": 0.75
      },
      {
        "x": 50,
        "y": 76,
        "r": 30,
        "v": 0.8
      }
    ],
    "strengths": [
      "Dribbling",
      "Passing",
      "Creative Vision"
    ],
    "weaknesses": [
      "Defending",
      "Workrate"
    ]
  },
  {
    "id": "martin-\u00f8degaard",
    "name": "Martin \u00d8degaard",
    "age": 22,
    "position": "MF",
    "role": "Attacking Playmaker",
    "club": "Arsenal",
    "league": "Premier League",
    "nation": "Spain",
    "value": 46800000,
    "rating": 80,
    "general": {
      "apps": 16,
      "mins": 1363,
      "goals": 1,
      "assists": 7,
      "yellowCards": 0,
      "redCards": 0
    },
    "attributes": {
      "pace": 68,
      "dribbling": 84,
      "passing": 97,
      "defending": 70,
      "physicality": 75,
      "tactical": 91,
      "workrate": 79
    },
    "detailedStats": {
      "goalsPer90": 0.07,
      "shotsOnTargetPer90": 0.6,
      "expectedGoals": 1.2,
      "shotConversionRate": 11.2,
      "touchesInBoxPer90": 1.1,
      "chancesCreated": 70,
      "dribblesCompletedPer90": 2.3,
      "keyPassesPer90": 1.86,
      "passingAccuracy": 91.4,
      "progressivePassesPer90": 7.6,
      "tacklesWonPer90": 1.8,
      "interceptionsPer90": 0.8,
      "ballRecoveriesPer90": 5.6
    },
    "leagueBenchmarks": [
      {
        "metric": "Key Passes per 90",
        "player": 1.86,
        "avg": 0.9,
        "elite": 2.2
      },
      {
        "metric": "Progressive Passes p90",
        "player": 7.6,
        "avg": 2.8,
        "elite": 6.2
      },
      {
        "metric": "Chances Created",
        "player": 70,
        "avg": 16,
        "elite": 55
      },
      {
        "metric": "Passing Accuracy %",
        "player": 91.4,
        "avg": 79.5,
        "elite": 87.0
      }
    ],
    "heatmap": [
      {
        "x": 50,
        "y": 64,
        "r": 42,
        "v": 0.9
      },
      {
        "x": 40,
        "y": 55,
        "r": 35,
        "v": 0.75
      },
      {
        "x": 60,
        "y": 55,
        "r": 35,
        "v": 0.75
      },
      {
        "x": 50,
        "y": 76,
        "r": 30,
        "v": 0.8
      }
    ],
    "strengths": [
      "Creative Vision",
      "Passing",
      "Tactical awareness"
    ],
    "weaknesses": [
      "Defending",
      "Pace"
    ]
  },
  {
    "id": "noni-madueke",
    "name": "Noni Madueke",
    "age": 23,
    "position": "MF",
    "role": "Attacking Playmaker",
    "club": "Arsenal",
    "league": "Premier League",
    "nation": "England",
    "value": 40800000,
    "rating": 80,
    "general": {
      "apps": 16,
      "mins": 1205,
      "goals": 3,
      "assists": 1,
      "yellowCards": 0,
      "redCards": 0
    },
    "attributes": {
      "pace": 80,
      "dribbling": 85,
      "passing": 83,
      "defending": 67,
      "physicality": 72,
      "tactical": 90,
      "workrate": 77
    },
    "detailedStats": {
      "goalsPer90": 0.22,
      "shotsOnTargetPer90": 0.8,
      "expectedGoals": 1.2,
      "shotConversionRate": 13.6,
      "touchesInBoxPer90": 1.8,
      "chancesCreated": 44,
      "dribblesCompletedPer90": 1.6,
      "keyPassesPer90": 1.32,
      "passingAccuracy": 87.9,
      "progressivePassesPer90": 5.5,
      "tacklesWonPer90": 1.7,
      "interceptionsPer90": 0.8,
      "ballRecoveriesPer90": 5.2
    },
    "leagueBenchmarks": [
      {
        "metric": "Key Passes per 90",
        "player": 1.32,
        "avg": 0.9,
        "elite": 2.2
      },
      {
        "metric": "Progressive Passes p90",
        "player": 5.5,
        "avg": 2.8,
        "elite": 6.2
      },
      {
        "metric": "Chances Created",
        "player": 44,
        "avg": 16,
        "elite": 55
      },
      {
        "metric": "Passing Accuracy %",
        "player": 87.9,
        "avg": 79.5,
        "elite": 87.0
      }
    ],
    "heatmap": [
      {
        "x": 50,
        "y": 64,
        "r": 42,
        "v": 0.9
      },
      {
        "x": 40,
        "y": 55,
        "r": 35,
        "v": 0.75
      },
      {
        "x": 60,
        "y": 55,
        "r": 35,
        "v": 0.75
      },
      {
        "x": 50,
        "y": 76,
        "r": 30,
        "v": 0.8
      }
    ],
    "strengths": [
      "Dribbling",
      "Tactical awareness"
    ],
    "weaknesses": [
      "Defending",
      "Physicality"
    ]
  },
  {
    "id": "gabriel-martinelli-silva",
    "name": "Gabriel Martinelli Silva",
    "age": 24,
    "position": "MF",
    "role": "Box-to-Box Midfielder",
    "club": "Arsenal",
    "league": "Premier League",
    "nation": "Spain",
    "value": 40800000,
    "rating": 78,
    "general": {
      "apps": 11,
      "mins": 1065,
      "goals": 1,
      "assists": 5,
      "yellowCards": 3,
      "redCards": 0
    },
    "attributes": {
      "pace": 79,
      "dribbling": 78,
      "passing": 73,
      "defending": 63,
      "physicality": 68,
      "tactical": 84,
      "workrate": 75
    },
    "detailedStats": {
      "goalsPer90": 0.08,
      "shotsOnTargetPer90": 0.6,
      "expectedGoals": 4.1,
      "shotConversionRate": 11.2,
      "touchesInBoxPer90": 1.8,
      "chancesCreated": 25,
      "dribblesCompletedPer90": 1.1,
      "keyPassesPer90": 0.85,
      "passingAccuracy": 85.4,
      "progressivePassesPer90": 4.0,
      "tacklesWonPer90": 1.5,
      "interceptionsPer90": 0.7,
      "ballRecoveriesPer90": 4.9
    },
    "leagueBenchmarks": [
      {
        "metric": "Key Passes per 90",
        "player": 0.85,
        "avg": 0.9,
        "elite": 2.2
      },
      {
        "metric": "Progressive Passes p90",
        "player": 4.0,
        "avg": 2.8,
        "elite": 6.2
      },
      {
        "metric": "Chances Created",
        "player": 25,
        "avg": 16,
        "elite": 55
      },
      {
        "metric": "Passing Accuracy %",
        "player": 85.4,
        "avg": 79.5,
        "elite": 87.0
      }
    ],
    "heatmap": [
      {
        "x": 50,
        "y": 42,
        "r: ": 45,
        "v": 0.9
      },
      {
        "x": 44,
        "y": 35,
        "r": 38,
        "v": 0.8
      },
      {
        "x": 56,
        "y": 35,
        "r": 38,
        "v": 0.8
      },
      {
        "x": 50,
        "y": 55,
        "r": 35,
        "v": 0.75
      }
    ],
    "strengths": [
      "Tactical awareness",
      "Pace"
    ],
    "weaknesses": [
      "Defending",
      "Physicality"
    ]
  },
  {
    "id": "leandro-trossard",
    "name": "Leandro Trossard",
    "age": 25,
    "position": "MF",
    "role": "Attacking Playmaker",
    "club": "Arsenal",
    "league": "Premier League",
    "nation": "France",
    "value": 39600000,
    "rating": 87,
    "general": {
      "apps": 21,
      "mins": 1997,
      "goals": 6,
      "assists": 6,
      "yellowCards": 2,
      "redCards": 0
    },
    "attributes": {
      "pace": 87,
      "dribbling": 96,
      "passing": 96,
      "defending": 82,
      "physicality": 87,
      "tactical": 95,
      "workrate": 88
    },
    "detailedStats": {
      "goalsPer90": 0.27,
      "shotsOnTargetPer90": 0.9,
      "expectedGoals": 5.6,
      "shotConversionRate": 17.2,
      "touchesInBoxPer90": 2.3,
      "chancesCreated": 68,
      "dribblesCompletedPer90": 2.2,
      "keyPassesPer90": 1.23,
      "passingAccuracy": 91.1,
      "progressivePassesPer90": 7.5,
      "tacklesWonPer90": 2.4,
      "interceptionsPer90": 0.9,
      "ballRecoveriesPer90": 6.8
    },
    "leagueBenchmarks": [
      {
        "metric": "Key Passes per 90",
        "player": 1.23,
        "avg": 0.9,
        "elite": 2.2
      },
      {
        "metric": "Progressive Passes p90",
        "player": 7.5,
        "avg": 2.8,
        "elite": 6.2
      },
      {
        "metric": "Chances Created",
        "player": 68,
        "avg": 16,
        "elite": 55
      },
      {
        "metric": "Passing Accuracy %",
        "player": 91.1,
        "avg": 79.5,
        "elite": 87.0
      }
    ],
    "heatmap": [
      {
        "x": 50,
        "y": 64,
        "r": 42,
        "v": 0.9
      },
      {
        "x": 40,
        "y": 55,
        "r": 35,
        "v": 0.75
      },
      {
        "x": 60,
        "y": 55,
        "r": 35,
        "v": 0.75
      },
      {
        "x": 50,
        "y": 76,
        "r": 30,
        "v": 0.8
      }
    ],
    "strengths": [
      "Dribbling",
      "Passing"
    ],
    "weaknesses": [
      "Defending",
      "Physicality"
    ]
  },
  {
    "id": "declan-rice",
    "name": "Declan Rice",
    "age": 26,
    "position": "MF",
    "role": "Attacking Playmaker",
    "club": "Arsenal",
    "league": "Premier League",
    "nation": "England",
    "value": 43200000,
    "rating": 93,
    "general": {
      "apps": 35,
      "mins": 3093,
      "goals": 4,
      "assists": 9,
      "yellowCards": 3,
      "redCards": 0
    },
    "attributes": {
      "pace": 74,
      "dribbling": 96,
      "passing": 97,
      "defending": 88,
      "physicality": 94,
      "tactical": 95,
      "workrate": 96
    },
    "detailedStats": {
      "goalsPer90": 0.12,
      "shotsOnTargetPer90": 0.7,
      "expectedGoals": 3.1,
      "shotConversionRate": 14.8,
      "touchesInBoxPer90": 1.5,
      "chancesCreated": 128,
      "dribblesCompletedPer90": 3.8,
      "keyPassesPer90": 1.49,
      "passingAccuracy": 94.0,
      "progressivePassesPer90": 12.3,
      "tacklesWonPer90": 3.6,
      "interceptionsPer90": 1.0,
      "ballRecoveriesPer90": 9.0
    },
    "leagueBenchmarks": [
      {
        "metric": "Key Passes per 90",
        "player": 1.49,
        "avg": 0.9,
        "elite": 2.2
      },
      {
        "metric": "Progressive Passes p90",
        "player": 12.3,
        "avg": 2.8,
        "elite": 6.2
      },
      {
        "metric": "Chances Created",
        "player": 128,
        "avg": 16,
        "elite": 55
      },
      {
        "metric": "Passing Accuracy %",
        "player": 94.0,
        "avg": 79.5,
        "elite": 87.0
      }
    ],
    "heatmap": [
      {
        "x": 50,
        "y": 64,
        "r": 42,
        "v": 0.9
      },
      {
        "x": 40,
        "y": 55,
        "r": 35,
        "v": 0.75
      },
      {
        "x": 60,
        "y": 55,
        "r": 35,
        "v": 0.75
      },
      {
        "x": 50,
        "y": 76,
        "r": 30,
        "v": 0.8
      }
    ],
    "strengths": [
      "Dribbling",
      "Passing",
      "Creative Vision"
    ],
    "weaknesses": [
      "Defending",
      "Pace"
    ]
  },
  {
    "id": "mikel-merino-zaz\u00f3n",
    "name": "Mikel Merino Zaz\u00f3n",
    "age": 27,
    "position": "MF",
    "role": "Box-to-Box Midfielder",
    "club": "Arsenal",
    "league": "Premier League",
    "nation": "Spain",
    "value": 31800000,
    "rating": 79,
    "general": {
      "apps": 10,
      "mins": 1024,
      "goals": 4,
      "assists": 3,
      "yellowCards": 1,
      "redCards": 0
    },
    "attributes": {
      "pace": 72,
      "dribbling": 72,
      "passing": 72,
      "defending": 70,
      "physicality": 75,
      "tactical": 83,
      "workrate": 74
    },
    "detailedStats": {
      "goalsPer90": 0.35,
      "shotsOnTargetPer90": 1.0,
      "expectedGoals": 3.4,
      "shotConversionRate": 14.8,
      "touchesInBoxPer90": 1.3,
      "chancesCreated": 23,
      "dribblesCompletedPer90": 1.0,
      "keyPassesPer90": 0.84,
      "passingAccuracy": 85.2,
      "progressivePassesPer90": 3.9,
      "tacklesWonPer90": 1.8,
      "interceptionsPer90": 0.7,
      "ballRecoveriesPer90": 5.5
    },
    "leagueBenchmarks": [
      {
        "metric": "Key Passes per 90",
        "player": 0.84,
        "avg": 0.9,
        "elite": 2.2
      },
      {
        "metric": "Progressive Passes p90",
        "player": 3.9,
        "avg": 2.8,
        "elite": 6.2
      },
      {
        "metric": "Chances Created",
        "player": 23,
        "avg": 16,
        "elite": 55
      },
      {
        "metric": "Passing Accuracy %",
        "player": 85.2,
        "avg": 79.5,
        "elite": 87.0
      }
    ],
    "heatmap": [
      {
        "x": 50,
        "y": 42,
        "r: ": 45,
        "v": 0.9
      },
      {
        "x": 44,
        "y": 35,
        "r": 38,
        "v": 0.8
      },
      {
        "x": 56,
        "y": 35,
        "r": 38,
        "v": 0.8
      },
      {
        "x": 50,
        "y": 55,
        "r": 35,
        "v": 0.75
      }
    ],
    "strengths": [
      "Physicality",
      "Tactical awareness"
    ],
    "weaknesses": [
      "Passing",
      "Defending"
    ]
  },
  {
    "id": "mart\u00edn-zubimendi-ib\u00e1\u00f1ez",
    "name": "Mart\u00edn Zubimendi Ib\u00e1\u00f1ez",
    "age": 31,
    "position": "MF",
    "role": "Attacking Playmaker",
    "club": "Arsenal",
    "league": "Premier League",
    "nation": "Spain",
    "value": 29400000,
    "rating": 89,
    "general": {
      "apps": 34,
      "mins": 2991,
      "goals": 5,
      "assists": 1,
      "yellowCards": 4,
      "redCards": 0
    },
    "attributes": {
      "pace": 73,
      "dribbling": 81,
      "passing": 85,
      "defending": 88,
      "physicality": 94,
      "tactical": 95,
      "workrate": 96
    },
    "detailedStats": {
      "goalsPer90": 0.15,
      "shotsOnTargetPer90": 0.7,
      "expectedGoals": 2.8,
      "shotConversionRate": 16.0,
      "touchesInBoxPer90": 1.4,
      "chancesCreated": 48,
      "dribblesCompletedPer90": 1.7,
      "keyPassesPer90": 0.58,
      "passingAccuracy": 88.4,
      "progressivePassesPer90": 5.9,
      "tacklesWonPer90": 2.8,
      "interceptionsPer90": 0.8,
      "ballRecoveriesPer90": 7.5
    },
    "leagueBenchmarks": [
      {
        "metric": "Key Passes per 90",
        "player": 0.58,
        "avg": 0.9,
        "elite": 2.2
      },
      {
        "metric": "Progressive Passes p90",
        "player": 5.9,
        "avg": 2.8,
        "elite": 6.2
      },
      {
        "metric": "Chances Created",
        "player": 48,
        "avg": 16,
        "elite": 55
      },
      {
        "metric": "Passing Accuracy %",
        "player": 88.4,
        "avg": 79.5,
        "elite": 87.0
      }
    ],
    "heatmap": [
      {
        "x": 50,
        "y": 64,
        "r": 42,
        "v": 0.9
      },
      {
        "x": 40,
        "y": 55,
        "r": 35,
        "v": 0.75
      },
      {
        "x": 60,
        "y": 55,
        "r": 35,
        "v": 0.75
      },
      {
        "x": 50,
        "y": 76,
        "r": 30,
        "v": 0.8
      }
    ],
    "strengths": [
      "Workrate",
      "Tactical awareness"
    ],
    "weaknesses": [
      "Dribbling",
      "Pace"
    ]
  },
  {
    "id": "kai-havertz",
    "name": "Kai Havertz",
    "age": 20,
    "position": "FW",
    "role": "Complete Winger / Striker",
    "club": "Arsenal",
    "league": "Premier League",
    "nation": "England",
    "value": 43800000,
    "rating": 75,
    "general": {
      "apps": 7,
      "mins": 577,
      "goals": 2,
      "assists": 3,
      "yellowCards": 1,
      "redCards": 0
    },
    "attributes": {
      "pace": 81,
      "dribbling": 68,
      "passing": 68,
      "defending": 28,
      "physicality": 65,
      "tactical": 77,
      "workrate": 68
    },
    "detailedStats": {
      "goalsPer90": 0.31,
      "shotsOnTargetPer90": 1.0,
      "expectedGoals": 3.3,
      "shotConversionRate": 12.4,
      "touchesInBoxPer90": 3.0,
      "chancesCreated": 16,
      "dribblesCompletedPer90": 0.8,
      "keyPassesPer90": 1.05
    },
    "leagueBenchmarks": [
      {
        "metric": "Goals per 90",
        "player": 0.31,
        "avg": 0.22,
        "elite": 0.65
      },
      {
        "metric": "Shot Conversion %",
        "player": 12.4,
        "avg": 10.5,
        "elite": 18.0
      },
      {
        "metric": "Touches in Box p90",
        "player": 3.0,
        "avg": 2.5,
        "elite": 5.5
      },
      {
        "metric": "Expected Goals (xG)",
        "player": 3.3,
        "avg": 4.5,
        "elite": 14.0
      }
    ],
    "heatmap": [
      {
        "x": 50,
        "y": 84,
        "r": 38,
        "v": 0.9
      },
      {
        "x": 48,
        "y": 76,
        "r": 32,
        "v": 0.75
      },
      {
        "x": 52,
        "y": 80,
        "r": 32,
        "v": 0.8
      },
      {
        "x": 50,
        "y": 92,
        "r": 28,
        "v": 0.85
      }
    ],
    "strengths": [
      "Tactical awareness",
      "Pace"
    ],
    "weaknesses": [
      "Defending",
      "Defensive Tracking Back"
    ]
  },
  {
    "id": "gabriel-fernando-de-jesus",
    "name": "Gabriel Fernando de Jesus",
    "age": 21,
    "position": "FW",
    "role": "Complete Winger / Striker",
    "club": "Arsenal",
    "league": "Premier League",
    "nation": "Spain",
    "value": 38400000,
    "rating": 73,
    "general": {
      "apps": 3,
      "mins": 418,
      "goals": 3,
      "assists": 0,
      "yellowCards": 3,
      "redCards": 0
    },
    "attributes": {
      "pace": 85,
      "dribbling": 68,
      "passing": 63,
      "defending": 28,
      "physicality": 64,
      "tactical": 76,
      "workrate": 65
    },
    "detailedStats": {
      "goalsPer90": 0.65,
      "shotsOnTargetPer90": 1.5,
      "expectedGoals": 2.7,
      "shotConversionRate": 13.6,
      "touchesInBoxPer90": 3.4,
      "chancesCreated": 6,
      "dribblesCompletedPer90": 0.6,
      "keyPassesPer90": 0.58
    },
    "leagueBenchmarks": [
      {
        "metric": "Goals per 90",
        "player": 0.65,
        "avg": 0.22,
        "elite": 0.65
      },
      {
        "metric": "Shot Conversion %",
        "player": 13.6,
        "avg": 10.5,
        "elite": 18.0
      },
      {
        "metric": "Touches in Box p90",
        "player": 3.4,
        "avg": 2.5,
        "elite": 5.5
      },
      {
        "metric": "Expected Goals (xG)",
        "player": 2.7,
        "avg": 4.5,
        "elite": 14.0
      }
    ],
    "heatmap": [
      {
        "x": 50,
        "y": 84,
        "r": 38,
        "v": 0.9
      },
      {
        "x": 48,
        "y": 76,
        "r": 32,
        "v": 0.75
      },
      {
        "x": 52,
        "y": 80,
        "r": 32,
        "v": 0.8
      },
      {
        "x": 50,
        "y": 92,
        "r": 28,
        "v": 0.85
      }
    ],
    "strengths": [
      "Tactical awareness",
      "Pace"
    ],
    "weaknesses": [
      "Defending",
      "Defensive Tracking Back"
    ]
  },
  {
    "id": "eberechi-eze",
    "name": "Eberechi Eze",
    "age": 31,
    "position": "MF",
    "role": "Attacking Playmaker",
    "club": "Arsenal",
    "league": "Premier League",
    "nation": "Brazil",
    "value": 43800000,
    "rating": 86,
    "general": {
      "apps": 22,
      "mins": 1885,
      "goals": 7,
      "assists": 3,
      "yellowCards": 1,
      "redCards": 0
    },
    "attributes": {
      "pace": 82,
      "dribbling": 85,
      "passing": 80,
      "defending": 76,
      "physicality": 81,
      "tactical": 93,
      "workrate": 86
    },
    "detailedStats": {
      "goalsPer90": 0.33,
      "shotsOnTargetPer90": 1.0,
      "expectedGoals": 5.2,
      "shotConversionRate": 18.4,
      "touchesInBoxPer90": 2.0,
      "chancesCreated": 38,
      "dribblesCompletedPer90": 1.4,
      "keyPassesPer90": 0.73,
      "passingAccuracy": 87.1,
      "progressivePassesPer90": 5.1,
      "tacklesWonPer90": 2.1,
      "interceptionsPer90": 0.8,
      "ballRecoveriesPer90": 6.1
    },
    "leagueBenchmarks": [
      {
        "metric": "Key Passes per 90",
        "player": 0.73,
        "avg": 0.9,
        "elite": 2.2
      },
      {
        "metric": "Progressive Passes p90",
        "player": 5.1,
        "avg": 2.8,
        "elite": 6.2
      },
      {
        "metric": "Chances Created",
        "player": 38,
        "avg": 16,
        "elite": 55
      },
      {
        "metric": "Passing Accuracy %",
        "player": 87.1,
        "avg": 79.5,
        "elite": 87.0
      }
    ],
    "heatmap": [
      {
        "x": 50,
        "y": 64,
        "r": 42,
        "v": 0.9
      },
      {
        "x": 40,
        "y": 55,
        "r": 35,
        "v": 0.75
      },
      {
        "x": 60,
        "y": 55,
        "r": 35,
        "v": 0.75
      },
      {
        "x": 50,
        "y": 76,
        "r": 30,
        "v": 0.8
      }
    ],
    "strengths": [
      "Workrate",
      "Tactical awareness"
    ],
    "weaknesses": [
      "Passing",
      "Defending"
    ]
  },
  {
    "id": "cristhian-mosquera",
    "name": "Cristhian Mosquera",
    "age": 22,
    "position": "DF",
    "role": "Central Defender",
    "club": "Arsenal",
    "league": "Premier League",
    "nation": "Spain",
    "value": 31800000,
    "rating": 75,
    "general": {
      "apps": 9,
      "mins": 986,
      "goals": 0,
      "assists": 0,
      "yellowCards": 4,
      "redCards": 0
    },
    "attributes": {
      "pace": 65,
      "dribbling": 59,
      "passing": 65,
      "defending": 84,
      "physicality": 69,
      "tactical": 73,
      "workrate": 74
    },
    "detailedStats": {
      "goalsPer90": 0.0,
      "shotsOnTargetPer90": 0.5,
      "expectedGoals": 0.1,
      "shotConversionRate": 10.0,
      "touchesInBoxPer90": 0.6,
      "chancesCreated": 11,
      "dribblesCompletedPer90": 0.7,
      "keyPassesPer90": 0.4,
      "tacklesWonPer90": 1.7,
      "interceptionsPer90": 0.9,
      "clearancesPer90": 2.6,
      "aerialDuelWinPercentage": 66.0,
      "tackledDribblerRate": 53.3,
      "progressivePassesPer90": 1.9,
      "longPassesCompletedPer90": 1.3,
      "passingAccuracy": 81.8
    },
    "leagueBenchmarks": [
      {
        "metric": "Passing Accuracy %",
        "player": 81.8,
        "avg": 82.0,
        "elite": 89.0
      },
      {
        "metric": "Clearances per 90",
        "player": 2.6,
        "avg": 2.6,
        "elite": 4.0
      },
      {
        "metric": "Aerial Duel Win %",
        "player": 66.0,
        "avg": 54.5,
        "elite": 68.0
      },
      {
        "metric": "Tackles Won per 90",
        "player": 1.7,
        "avg": 1.1,
        "elite": 2.0
      }
    ],
    "heatmap": [
      {
        "x": 50,
        "y": 20,
        "r": 45,
        "v": 0.9
      },
      {
        "x": 42,
        "y": 18,
        "r": 32,
        "v": 0.8
      },
      {
        "x": 58,
        "y": 18,
        "r": 32,
        "v": 0.8
      },
      {
        "x": 50,
        "y": 10,
        "r": 28,
        "v": 0.6
      }
    ],
    "strengths": [
      "Defending",
      "Workrate"
    ],
    "weaknesses": [
      "Dribbling",
      "Passing"
    ]
  },
  {
    "id": "viktor-gy\u00f6keres",
    "name": "Viktor Gy\u00f6keres",
    "age": 26,
    "position": "FW",
    "role": "Inverted Winger",
    "club": "Arsenal",
    "league": "Premier League",
    "nation": "England",
    "value": 54600000,
    "rating": 88,
    "general": {
      "apps": 26,
      "mins": 2217,
      "goals": 14,
      "assists": 1,
      "yellowCards": 5,
      "redCards": 0
    },
    "attributes": {
      "pace": 98,
      "dribbling": 96,
      "passing": 78,
      "defending": 38,
      "physicality": 90,
      "tactical": 95,
      "workrate": 91
    },
    "detailedStats": {
      "goalsPer90": 0.57,
      "shotsOnTargetPer90": 1.4,
      "expectedGoals": 12.3,
      "shotConversionRate": 25.0,
      "touchesInBoxPer90": 5.9,
      "chancesCreated": 33,
      "dribblesCompletedPer90": 1.3,
      "keyPassesPer90": 0.55
    },
    "leagueBenchmarks": [
      {
        "metric": "Goals per 90",
        "player": 0.57,
        "avg": 0.22,
        "elite": 0.65
      },
      {
        "metric": "Shot Conversion %",
        "player": 25.0,
        "avg": 10.5,
        "elite": 18.0
      },
      {
        "metric": "Touches in Box p90",
        "player": 5.9,
        "avg": 2.5,
        "elite": 5.5
      },
      {
        "metric": "Expected Goals (xG)",
        "player": 12.3,
        "avg": 4.5,
        "elite": 14.0
      }
    ],
    "heatmap": [
      {
        "x": 22,
        "y": 72,
        "r": 45,
        "v": 0.9
      },
      {
        "x": 22,
        "y": 58,
        "r": 38,
        "v": 0.75
      },
      {
        "x": 28,
        "y": 82,
        "r": 35,
        "v": 0.8
      },
      {
        "x": 50,
        "y": 84,
        "r": 30,
        "v": 0.65
      }
    ],
    "strengths": [
      "Dribbling",
      "Clinical Finishing",
      "Pace"
    ],
    "weaknesses": [
      "Defending",
      "Defensive Tracking Back"
    ]
  },
  {
    "id": "piero-hincapi\u00e9",
    "name": "Piero Hincapi\u00e9",
    "age": 25,
    "position": "DF",
    "role": "Attacking Fullback",
    "club": "Arsenal",
    "league": "Premier League",
    "nation": "France",
    "value": 30600000,
    "rating": 82,
    "general": {
      "apps": 20,
      "mins": 1787,
      "goals": 1,
      "assists": 2,
      "yellowCards": 2,
      "redCards": 0
    },
    "attributes": {
      "pace": 67,
      "dribbling": 65,
      "passing": 72,
      "defending": 94,
      "physicality": 85,
      "tactical": 82,
      "workrate": 85
    },
    "detailedStats": {
      "goalsPer90": 0.05,
      "shotsOnTargetPer90": 0.6,
      "expectedGoals": 0.4,
      "shotConversionRate": 11.2,
      "touchesInBoxPer90": 0.7,
      "chancesCreated": 23,
      "dribblesCompletedPer90": 1.0,
      "keyPassesPer90": 0.47,
      "tacklesWonPer90": 2.5,
      "interceptionsPer90": 1.0,
      "clearancesPer90": 3.8,
      "aerialDuelWinPercentage": 77.7,
      "tackledDribblerRate": 57.1,
      "progressivePassesPer90": 2.4,
      "longPassesCompletedPer90": 1.6,
      "passingAccuracy": 83.7
    },
    "leagueBenchmarks": [
      {
        "metric": "Passing Accuracy %",
        "player": 83.7,
        "avg": 82.0,
        "elite": 89.0
      },
      {
        "metric": "Clearances per 90",
        "player": 3.8,
        "avg": 2.6,
        "elite": 4.0
      },
      {
        "metric": "Aerial Duel Win %",
        "player": 77.7,
        "avg": 54.5,
        "elite": 68.0
      },
      {
        "metric": "Tackles Won per 90",
        "player": 2.5,
        "avg": 1.1,
        "elite": 2.0
      }
    ],
    "heatmap": [
      {
        "x": 86,
        "y": 25,
        "r": 38,
        "v": 0.8
      },
      {
        "x": 86,
        "y": 45,
        "r": 40,
        "v": 0.85
      },
      {
        "x": 86,
        "y": 65,
        "r": 35,
        "v": 0.7
      },
      {
        "x": 86,
        "y": 12,
        "r": 30,
        "v": 0.6
      }
    ],
    "strengths": [
      "Defending",
      "Physicality",
      "Aerial Dominance"
    ],
    "weaknesses": [
      "Dribbling",
      "Pace"
    ]
  },
  {
    "id": "emiliano-mart\u00ednez-romero",
    "name": "Emiliano Mart\u00ednez Romero",
    "age": 22,
    "position": "GK",
    "role": "Sweeper Keeper",
    "club": "Aston Villa",
    "league": "Premier League",
    "nation": "Spain",
    "value": 30000000,
    "rating": 87,
    "general": {
      "apps": 32,
      "mins": 2835,
      "goals": 0,
      "assists": 1,
      "yellowCards": 2,
      "redCards": 0
    },
    "attributes": {
      "pace": 60,
      "dribbling": 55,
      "passing": 90,
      "defending": 93,
      "physicality": 94,
      "tactical": 84,
      "workrate": 96
    },
    "detailedStats": {
      "savePercentage": 81.0,
      "cleanSheets": 7,
      "goalsConceded": 39,
      "psxgDifference": 2.8,
      "passingAccuracy": 90.0,
      "sweeperActionsPer90": 1.2,
      "averageDistanceOfSweeperActions": 13.6
    },
    "leagueBenchmarks": [
      {
        "metric": "Save %",
        "player": 81.0,
        "avg": 69.5,
        "elite": 77.0
      },
      {
        "metric": "Clean Sheets",
        "player": 7,
        "avg": 4.5,
        "elite": 10.0
      },
      {
        "metric": "Sweeper Actions p90",
        "player": 1.2,
        "avg": 0.6,
        "elite": 1.2
      },
      {
        "metric": "Passing Accuracy %",
        "player": 90.0,
        "avg": 73.0,
        "elite": 82.0
      }
    ],
    "heatmap": [
      {
        "x": 50,
        "y": 6,
        "r": 35,
        "v": 0.98
      },
      {
        "x": 50,
        "y": 14,
        "r": 28,
        "v": 0.7
      },
      {
        "x": 45,
        "y": 8,
        "r": 22,
        "v": 0.55
      },
      {
        "x": 55,
        "y": 8,
        "r": 22,
        "v": 0.55
      }
    ],
    "strengths": [
      "Reflexes",
      "Workrate",
      "Physicality"
    ],
    "weaknesses": [
      "Dribbling",
      "Pace"
    ]
  },
  {
    "id": "marco-bizot",
    "name": "Marco Bizot",
    "age": 23,
    "position": "GK",
    "role": "Sweeper Keeper",
    "club": "Aston Villa",
    "league": "Premier League",
    "nation": "England",
    "value": 25200000,
    "rating": 72,
    "general": {
      "apps": 6,
      "mins": 585,
      "goals": 0,
      "assists": 0,
      "yellowCards": 2,
      "redCards": 0
    },
    "attributes": {
      "pace": 60,
      "dribbling": 55,
      "passing": 61,
      "defending": 81,
      "physicality": 64,
      "tactical": 68,
      "workrate": 68
    },
    "detailedStats": {
      "savePercentage": 68.8,
      "cleanSheets": 1,
      "goalsConceded": 10,
      "psxgDifference": 0.4,
      "passingAccuracy": 77.0,
      "sweeperActionsPer90": 0.5,
      "averageDistanceOfSweeperActions": 12.3
    },
    "leagueBenchmarks": [
      {
        "metric": "Save %",
        "player": 68.8,
        "avg": 69.5,
        "elite": 77.0
      },
      {
        "metric": "Clean Sheets",
        "player": 1,
        "avg": 4.5,
        "elite": 10.0
      },
      {
        "metric": "Sweeper Actions p90",
        "player": 0.5,
        "avg": 0.6,
        "elite": 1.2
      },
      {
        "metric": "Passing Accuracy %",
        "player": 77.0,
        "avg": 73.0,
        "elite": 82.0
      }
    ],
    "heatmap": [
      {
        "x": 50,
        "y": 6,
        "r": 35,
        "v": 0.98
      },
      {
        "x": 50,
        "y": 14,
        "r": 28,
        "v": 0.7
      },
      {
        "x": 45,
        "y": 8,
        "r": 22,
        "v": 0.55
      },
      {
        "x": 55,
        "y": 8,
        "r": 22,
        "v": 0.55
      }
    ],
    "strengths": [
      "Defending",
      "Tactical awareness"
    ],
    "weaknesses": [
      "Dribbling",
      "Pace"
    ]
  },
  {
    "id": "matty-cash",
    "name": "Matty Cash",
    "age": 26,
    "position": "DF",
    "role": "Attacking Fullback",
    "club": "Aston Villa",
    "league": "Premier League",
    "nation": "England",
    "value": 27600000,
    "rating": 86,
    "general": {
      "apps": 34,
      "mins": 3016,
      "goals": 3,
      "assists": 3,
      "yellowCards": 9,
      "redCards": 0
    },
    "attributes": {
      "pace": 73,
      "dribbling": 84,
      "passing": 94,
      "defending": 94,
      "physicality": 94,
      "tactical": 95,
      "workrate": 96
    },
    "detailedStats": {
      "goalsPer90": 0.09,
      "shotsOnTargetPer90": 0.6,
      "expectedGoals": 1.1,
      "shotConversionRate": 13.6,
      "touchesInBoxPer90": 1.2,
      "chancesCreated": 63,
      "dribblesCompletedPer90": 2.1,
      "keyPassesPer90": 0.76,
      "tacklesWonPer90": 3.1,
      "interceptionsPer90": 1.3,
      "clearancesPer90": 4.7,
      "aerialDuelWinPercentage": 80.0,
      "tackledDribblerRate": 63.8,
      "progressivePassesPer90": 4.1,
      "longPassesCompletedPer90": 2.7,
      "passingAccuracy": 90.2
    },
    "leagueBenchmarks": [
      {
        "metric": "Passing Accuracy %",
        "player": 90.2,
        "avg": 82.0,
        "elite": 89.0
      },
      {
        "metric": "Clearances per 90",
        "player": 4.7,
        "avg": 2.6,
        "elite": 4.0
      },
      {
        "metric": "Aerial Duel Win %",
        "player": 80.0,
        "avg": 54.5,
        "elite": 68.0
      },
      {
        "metric": "Tackles Won per 90",
        "player": 3.1,
        "avg": 1.1,
        "elite": 2.0
      }
    ],
    "heatmap": [
      {
        "x": 14,
        "y": 25,
        "r": 38,
        "v": 0.8
      },
      {
        "x": 14,
        "y": 45,
        "r": 40,
        "v": 0.85
      },
      {
        "x": 14,
        "y": 65,
        "r": 35,
        "v": 0.7
      },
      {
        "x": 14,
        "y": 12,
        "r": 30,
        "v": 0.6
      }
    ],
    "strengths": [
      "Workrate",
      "Tactical awareness",
      "Aerial Dominance"
    ],
    "weaknesses": [
      "Dribbling",
      "Pace"
    ]
  },
  {
    "id": "lucas-digne",
    "name": "Lucas Digne",
    "age": 27,
    "position": "DF",
    "role": "Attacking Fullback",
    "club": "Aston Villa",
    "league": "Premier League",
    "nation": "Spain",
    "value": 27000000,
    "rating": 83,
    "general": {
      "apps": 21,
      "mins": 1842,
      "goals": 0,
      "assists": 7,
      "yellowCards": 3,
      "redCards": 0
    },
    "attributes": {
      "pace": 70,
      "dribbling": 78,
      "passing": 90,
      "defending": 94,
      "physicality": 81,
      "tactical": 89,
      "workrate": 86
    },
    "detailedStats": {
      "goalsPer90": 0.0,
      "shotsOnTargetPer90": 0.5,
      "expectedGoals": 0.7,
      "shotConversionRate": 10.0,
      "touchesInBoxPer90": 0.9,
      "chancesCreated": 56,
      "dribblesCompletedPer90": 1.9,
      "keyPassesPer90": 1.11,
      "tacklesWonPer90": 2.3,
      "interceptionsPer90": 1.1,
      "clearancesPer90": 3.5,
      "aerialDuelWinPercentage": 75.0,
      "tackledDribblerRate": 59.9,
      "progressivePassesPer90": 3.8,
      "longPassesCompletedPer90": 2.5,
      "passingAccuracy": 89.1
    },
    "leagueBenchmarks": [
      {
        "metric": "Passing Accuracy %",
        "player": 89.1,
        "avg": 82.0,
        "elite": 89.0
      },
      {
        "metric": "Clearances per 90",
        "player": 3.5,
        "avg": 2.6,
        "elite": 4.0
      },
      {
        "metric": "Aerial Duel Win %",
        "player": 75.0,
        "avg": 54.5,
        "elite": 68.0
      },
      {
        "metric": "Tackles Won per 90",
        "player": 2.3,
        "avg": 1.1,
        "elite": 2.0
      }
    ],
    "heatmap": [
      {
        "x": 86,
        "y": 25,
        "r": 38,
        "v": 0.8
      },
      {
        "x": 86,
        "y": 45,
        "r": 40,
        "v": 0.85
      },
      {
        "x": 86,
        "y": 65,
        "r": 35,
        "v": 0.7
      },
      {
        "x": 86,
        "y": 12,
        "r": 30,
        "v": 0.6
      }
    ],
    "strengths": [
      "Passing",
      "Defending",
      "Creative Vision"
    ],
    "weaknesses": [
      "Dribbling",
      "Pace"
    ]
  },
  {
    "id": "ezri-konsa-ngoyo",
    "name": "Ezri Konsa Ngoyo",
    "age": 28,
    "position": "DF",
    "role": "Attacking Fullback",
    "club": "Aston Villa",
    "league": "Premier League",
    "nation": "Spain",
    "value": 26400000,
    "rating": 84,
    "general": {
      "apps": 34,
      "mins": 3035,
      "goals": 0,
      "assists": 1,
      "yellowCards": 0,
      "redCards": 1
    },
    "attributes": {
      "pace": 69,
      "dribbling": 64,
      "passing": 67,
      "defending": 94,
      "physicality": 94,
      "tactical": 86,
      "workrate": 96
    },
    "detailedStats": {
      "goalsPer90": 0.0,
      "shotsOnTargetPer90": 0.5,
      "expectedGoals": 1.3,
      "shotConversionRate": 10.0,
      "touchesInBoxPer90": 0.9,
      "chancesCreated": 13,
      "dribblesCompletedPer90": 0.8,
      "keyPassesPer90": 0.16,
      "tacklesWonPer90": 3.0,
      "interceptionsPer90": 1.1,
      "clearancesPer90": 4.5,
      "aerialDuelWinPercentage": 80.0,
      "tackledDribblerRate": 58.4,
      "progressivePassesPer90": 2.0,
      "longPassesCompletedPer90": 1.4,
      "passingAccuracy": 82.2
    },
    "leagueBenchmarks": [
      {
        "metric": "Passing Accuracy %",
        "player": 82.2,
        "avg": 82.0,
        "elite": 89.0
      },
      {
        "metric": "Clearances per 90",
        "player": 4.5,
        "avg": 2.6,
        "elite": 4.0
      },
      {
        "metric": "Aerial Duel Win %",
        "player": 80.0,
        "avg": 54.5,
        "elite": 68.0
      },
      {
        "metric": "Tackles Won per 90",
        "player": 3.0,
        "avg": 1.1,
        "elite": 2.0
      }
    ],
    "heatmap": [
      {
        "x": 14,
        "y": 25,
        "r": 38,
        "v": 0.8
      },
      {
        "x": 14,
        "y": 45,
        "r": 40,
        "v": 0.85
      },
      {
        "x": 14,
        "y": 65,
        "r": 35,
        "v": 0.7
      },
      {
        "x": 14,
        "y": 12,
        "r": 30,
        "v": 0.6
      }
    ],
    "strengths": [
      "Defending",
      "Workrate",
      "Aerial Dominance"
    ],
    "weaknesses": [
      "Dribbling",
      "Passing"
    ]
  },
  {
    "id": "ian-maatsen",
    "name": "Ian Maatsen",
    "age": 29,
    "position": "DF",
    "role": "Attacking Fullback",
    "club": "Aston Villa",
    "league": "Premier League",
    "nation": "England",
    "value": 25200000,
    "rating": 77,
    "general": {
      "apps": 17,
      "mins": 1590,
      "goals": 0,
      "assists": 1,
      "yellowCards": 2,
      "redCards": 0
    },
    "attributes": {
      "pace": 74,
      "dribbling": 79,
      "passing": 84,
      "defending": 93,
      "physicality": 77,
      "tactical": 88,
      "workrate": 82
    },
    "detailedStats": {
      "goalsPer90": 0.0,
      "shotsOnTargetPer90": 0.5,
      "expectedGoals": 1.3,
      "shotConversionRate": 10.0,
      "touchesInBoxPer90": 1.3,
      "chancesCreated": 46,
      "dribblesCompletedPer90": 1.6,
      "keyPassesPer90": 1.06,
      "tacklesWonPer90": 2.1,
      "interceptionsPer90": 1.1,
      "clearancesPer90": 3.2,
      "aerialDuelWinPercentage": 71.8,
      "tackledDribblerRate": 59.4,
      "progressivePassesPer90": 3.4,
      "longPassesCompletedPer90": 2.2,
      "passingAccuracy": 87.5
    },
    "leagueBenchmarks": [
      {
        "metric": "Passing Accuracy %",
        "player": 87.5,
        "avg": 82.0,
        "elite": 89.0
      },
      {
        "metric": "Clearances per 90",
        "player": 3.2,
        "avg": 2.6,
        "elite": 4.0
      },
      {
        "metric": "Aerial Duel Win %",
        "player": 71.8,
        "avg": 54.5,
        "elite": 68.0
      },
      {
        "metric": "Tackles Won per 90",
        "player": 2.1,
        "avg": 1.1,
        "elite": 2.0
      }
    ],
    "heatmap": [
      {
        "x": 86,
        "y": 25,
        "r": 38,
        "v": 0.8
      },
      {
        "x": 86,
        "y": 45,
        "r": 40,
        "v": 0.85
      },
      {
        "x": 86,
        "y": 65,
        "r": 35,
        "v": 0.7
      },
      {
        "x": 86,
        "y": 12,
        "r": 30,
        "v": 0.6
      }
    ],
    "strengths": [
      "Defending",
      "Tactical awareness",
      "Aerial Dominance"
    ],
    "weaknesses": [
      "Physicality",
      "Pace"
    ]
  },
  {
    "id": "tyrone-mings",
    "name": "Tyrone Mings",
    "age": 30,
    "position": "DF",
    "role": "Attacking Fullback",
    "club": "Aston Villa",
    "league": "Premier League",
    "nation": "France",
    "value": 25800000,
    "rating": 77,
    "general": {
      "apps": 15,
      "mins": 1322,
      "goals": 0,
      "assists": 1,
      "yellowCards": 1,
      "redCards": 0
    },
    "attributes": {
      "pace": 69,
      "dribbling": 62,
      "passing": 65,
      "defending": 88,
      "physicality": 73,
      "tactical": 76,
      "workrate": 78
    },
    "detailedStats": {
      "goalsPer90": 0.0,
      "shotsOnTargetPer90": 0.5,
      "expectedGoals": 1.3,
      "shotConversionRate": 10.0,
      "touchesInBoxPer90": 0.8,
      "chancesCreated": 10,
      "dribblesCompletedPer90": 0.7,
      "keyPassesPer90": 0.27,
      "tacklesWonPer90": 1.9,
      "interceptionsPer90": 1.0,
      "clearancesPer90": 2.9,
      "aerialDuelWinPercentage": 69.1,
      "tackledDribblerRate": 54.7,
      "progressivePassesPer90": 1.9,
      "longPassesCompletedPer90": 1.3,
      "passingAccuracy": 81.6
    },
    "leagueBenchmarks": [
      {
        "metric": "Passing Accuracy %",
        "player": 81.6,
        "avg": 82.0,
        "elite": 89.0
      },
      {
        "metric": "Clearances per 90",
        "player": 2.9,
        "avg": 2.6,
        "elite": 4.0
      },
      {
        "metric": "Aerial Duel Win %",
        "player": 69.1,
        "avg": 54.5,
        "elite": 68.0
      },
      {
        "metric": "Tackles Won per 90",
        "player": 1.9,
        "avg": 1.1,
        "elite": 2.0
      }
    ],
    "heatmap": [
      {
        "x": 14,
        "y": 25,
        "r": 38,
        "v": 0.8
      },
      {
        "x": 14,
        "y": 45,
        "r": 40,
        "v": 0.85
      },
      {
        "x": 14,
        "y": 65,
        "r": 35,
        "v": 0.7
      },
      {
        "x": 14,
        "y": 12,
        "r": 30,
        "v": 0.6
      }
    ],
    "strengths": [
      "Defending",
      "Workrate",
      "Aerial Dominance"
    ],
    "weaknesses": [
      "Dribbling",
      "Passing"
    ]
  },
  {
    "id": "pau-torres",
    "name": "Pau Torres",
    "age": 31,
    "position": "DF",
    "role": "Central Defender",
    "club": "Aston Villa",
    "league": "Premier League",
    "nation": "Spain",
    "value": 25800000,
    "rating": 79,
    "general": {
      "apps": 18,
      "mins": 1673,
      "goals": 0,
      "assists": 2,
      "yellowCards": 1,
      "redCards": 0
    },
    "attributes": {
      "pace": 68,
      "dribbling": 60,
      "passing": 63,
      "defending": 90,
      "physicality": 76,
      "tactical": 76,
      "workrate": 83
    },
    "detailedStats": {
      "goalsPer90": 0.0,
      "shotsOnTargetPer90": 0.5,
      "expectedGoals": 1.3,
      "shotConversionRate": 10.0,
      "touchesInBoxPer90": 0.8,
      "chancesCreated": 5,
      "dribblesCompletedPer90": 0.6,
      "keyPassesPer90": 0.13,
      "tacklesWonPer90": 2.1,
      "interceptionsPer90": 1.0,
      "clearancesPer90": 3.1,
      "aerialDuelWinPercentage": 71.1,
      "tackledDribblerRate": 54.5,
      "progressivePassesPer90": 1.7,
      "longPassesCompletedPer90": 1.2,
      "passingAccuracy": 80.9
    },
    "leagueBenchmarks": [
      {
        "metric": "Passing Accuracy %",
        "player": 80.9,
        "avg": 82.0,
        "elite": 89.0
      },
      {
        "metric": "Clearances per 90",
        "player": 3.1,
        "avg": 2.6,
        "elite": 4.0
      },
      {
        "metric": "Aerial Duel Win %",
        "player": 71.1,
        "avg": 54.5,
        "elite": 68.0
      },
      {
        "metric": "Tackles Won per 90",
        "player": 2.1,
        "avg": 1.1,
        "elite": 2.0
      }
    ],
    "heatmap": [
      {
        "x": 50,
        "y": 20,
        "r": 45,
        "v": 0.9
      },
      {
        "x": 42,
        "y": 18,
        "r": 32,
        "v": 0.8
      },
      {
        "x": 58,
        "y": 18,
        "r": 32,
        "v": 0.8
      },
      {
        "x": 50,
        "y": 10,
        "r": 28,
        "v": 0.6
      }
    ],
    "strengths": [
      "Defending",
      "Workrate",
      "Aerial Dominance"
    ],
    "weaknesses": [
      "Dribbling",
      "Passing"
    ]
  },
  {
    "id": "lamare-bogarde",
    "name": "Lamare Bogarde",
    "age": 34,
    "position": "DF",
    "role": "Central Defender",
    "club": "Aston Villa",
    "league": "Premier League",
    "nation": "Spain",
    "value": 24000000,
    "rating": 75,
    "general": {
      "apps": 11,
      "mins": 1042,
      "goals": 0,
      "assists": 0,
      "yellowCards": 5,
      "redCards": 0
    },
    "attributes": {
      "pace": 65,
      "dribbling": 57,
      "passing": 63,
      "defending": 79,
      "physicality": 63,
      "tactical": 70,
      "workrate": 74
    },
    "detailedStats": {
      "goalsPer90": 0.0,
      "shotsOnTargetPer90": 0.5,
      "expectedGoals": 0.0,
      "shotConversionRate": 10.0,
      "touchesInBoxPer90": 0.5,
      "chancesCreated": 7,
      "dribblesCompletedPer90": 0.6,
      "keyPassesPer90": 0.26,
      "tacklesWonPer90": 1.4,
      "interceptionsPer90": 0.9,
      "clearancesPer90": 2.2,
      "aerialDuelWinPercentage": 61.6,
      "tackledDribblerRate": 52.1,
      "progressivePassesPer90": 1.8,
      "longPassesCompletedPer90": 1.2,
      "passingAccuracy": 81.2
    },
    "leagueBenchmarks": [
      {
        "metric": "Passing Accuracy %",
        "player": 81.2,
        "avg": 82.0,
        "elite": 89.0
      },
      {
        "metric": "Clearances per 90",
        "player": 2.2,
        "avg": 2.6,
        "elite": 4.0
      },
      {
        "metric": "Aerial Duel Win %",
        "player": 61.6,
        "avg": 54.5,
        "elite": 68.0
      },
      {
        "metric": "Tackles Won per 90",
        "player": 1.4,
        "avg": 1.1,
        "elite": 2.0
      }
    ],
    "heatmap": [
      {
        "x": 50,
        "y": 20,
        "r": 45,
        "v": 0.9
      },
      {
        "x": 42,
        "y": 18,
        "r": 32,
        "v": 0.8
      },
      {
        "x": 58,
        "y": 18,
        "r": 32,
        "v": 0.8
      },
      {
        "x": 50,
        "y": 10,
        "r": 28,
        "v": 0.6
      }
    ],
    "strengths": [
      "Defending",
      "Workrate"
    ],
    "weaknesses": [
      "Dribbling",
      "Physicality"
    ]
  },
  {
    "id": "morgan-rogers",
    "name": "Morgan Rogers",
    "age": 22,
    "position": "MF",
    "role": "Attacking Playmaker",
    "club": "Aston Villa",
    "league": "Premier League",
    "nation": "Spain",
    "value": 43800000,
    "rating": 93,
    "general": {
      "apps": 37,
      "mins": 3280,
      "goals": 10,
      "assists": 8,
      "yellowCards": 7,
      "redCards": 0
    },
    "attributes": {
      "pace": 92,
      "dribbling": 96,
      "passing": 97,
      "defending": 88,
      "physicality": 94,
      "tactical": 95,
      "workrate": 96
    },
    "detailedStats": {
      "goalsPer90": 0.27,
      "shotsOnTargetPer90": 0.9,
      "expectedGoals": 6.8,
      "shotConversionRate": 22.0,
      "touchesInBoxPer90": 3.4,
      "chancesCreated": 88,
      "dribblesCompletedPer90": 2.8,
      "keyPassesPer90": 0.97,
      "passingAccuracy": 93.8,
      "progressivePassesPer90": 9.1,
      "tacklesWonPer90": 3.3,
      "interceptionsPer90": 1.1,
      "ballRecoveriesPer90": 8.5
    },
    "leagueBenchmarks": [
      {
        "metric": "Key Passes per 90",
        "player": 0.97,
        "avg": 0.9,
        "elite": 2.2
      },
      {
        "metric": "Progressive Passes p90",
        "player": 9.1,
        "avg": 2.8,
        "elite": 6.2
      },
      {
        "metric": "Chances Created",
        "player": 88,
        "avg": 16,
        "elite": 55
      },
      {
        "metric": "Passing Accuracy %",
        "player": 93.8,
        "avg": 79.5,
        "elite": 87.0
      }
    ],
    "heatmap": [
      {
        "x": 50,
        "y": 64,
        "r": 42,
        "v": 0.9
      },
      {
        "x": 40,
        "y": 55,
        "r": 35,
        "v": 0.75
      },
      {
        "x": 60,
        "y": 55,
        "r": 35,
        "v": 0.75
      },
      {
        "x": 50,
        "y": 76,
        "r": 30,
        "v": 0.8
      }
    ],
    "strengths": [
      "Dribbling",
      "Passing",
      "Clinical Finishing"
    ],
    "weaknesses": [
      "Defending",
      "Pace"
    ]
  },
  {
    "id": "youri-tielemans",
    "name": "Youri Tielemans",
    "age": 23,
    "position": "MF",
    "role": "Attacking Playmaker",
    "club": "Aston Villa",
    "league": "Premier League",
    "nation": "England",
    "value": 35400000,
    "rating": 79,
    "general": {
      "apps": 21,
      "mins": 1857,
      "goals": 0,
      "assists": 4,
      "yellowCards": 0,
      "redCards": 0
    },
    "attributes": {
      "pace": 69,
      "dribbling": 82,
      "passing": 94,
      "defending": 78,
      "physicality": 83,
      "tactical": 93,
      "workrate": 86
    },
    "detailedStats": {
      "goalsPer90": 0.0,
      "shotsOnTargetPer90": 0.5,
      "expectedGoals": 1.1,
      "shotConversionRate": 10.0,
      "touchesInBoxPer90": 1.1,
      "chancesCreated": 64,
      "dribblesCompletedPer90": 2.1,
      "keyPassesPer90": 1.24,
      "passingAccuracy": 90.6,
      "progressivePassesPer90": 7.1,
      "tacklesWonPer90": 2.2,
      "interceptionsPer90": 0.8,
      "ballRecoveriesPer90": 6.4
    },
    "leagueBenchmarks": [
      {
        "metric": "Key Passes per 90",
        "player": 1.24,
        "avg": 0.9,
        "elite": 2.2
      },
      {
        "metric": "Progressive Passes p90",
        "player": 7.1,
        "avg": 2.8,
        "elite": 6.2
      },
      {
        "metric": "Chances Created",
        "player": 64,
        "avg": 16,
        "elite": 55
      },
      {
        "metric": "Passing Accuracy %",
        "player": 90.6,
        "avg": 79.5,
        "elite": 87.0
      }
    ],
    "heatmap": [
      {
        "x": 50,
        "y": 64,
        "r": 42,
        "v": 0.9
      },
      {
        "x": 40,
        "y": 55,
        "r": 35,
        "v": 0.75
      },
      {
        "x": 60,
        "y": 55,
        "r": 35,
        "v": 0.75
      },
      {
        "x": 50,
        "y": 76,
        "r": 30,
        "v": 0.8
      }
    ],
    "strengths": [
      "Passing",
      "Tactical awareness"
    ],
    "weaknesses": [
      "Defending",
      "Pace"
    ]
  },
  {
    "id": "leon-bailey",
    "name": "Leon Bailey",
    "age": 24,
    "position": "MF",
    "role": "Box-to-Box Midfielder",
    "club": "Aston Villa",
    "league": "Premier League",
    "nation": "Brazil",
    "value": 33000000,
    "rating": 73,
    "general": {
      "apps": 3,
      "mins": 450,
      "goals": 0,
      "assists": 2,
      "yellowCards": 1,
      "redCards": 0
    },
    "attributes": {
      "pace": 63,
      "dribbling": 64,
      "passing": 70,
      "defending": 54,
      "physicality": 59,
      "tactical": 72,
      "workrate": 66
    },
    "detailedStats": {
      "goalsPer90": 0.0,
      "shotsOnTargetPer90": 0.5,
      "expectedGoals": 0.5,
      "shotConversionRate": 10.0,
      "touchesInBoxPer90": 0.7,
      "chancesCreated": 20,
      "dribblesCompletedPer90": 0.9,
      "keyPassesPer90": 1.6,
      "passingAccuracy": 84.7,
      "progressivePassesPer90": 3.6,
      "tacklesWonPer90": 1.0,
      "interceptionsPer90": 0.6,
      "ballRecoveriesPer90": 4.0
    },
    "leagueBenchmarks": [
      {
        "metric": "Key Passes per 90",
        "player": 1.6,
        "avg": 0.9,
        "elite": 2.2
      },
      {
        "metric": "Progressive Passes p90",
        "player": 3.6,
        "avg": 2.8,
        "elite": 6.2
      },
      {
        "metric": "Chances Created",
        "player": 20,
        "avg": 16,
        "elite": 55
      },
      {
        "metric": "Passing Accuracy %",
        "player": 84.7,
        "avg": 79.5,
        "elite": 87.0
      }
    ],
    "heatmap": [
      {
        "x": 50,
        "y": 42,
        "r: ": 45,
        "v": 0.9
      },
      {
        "x": 44,
        "y": 35,
        "r": 38,
        "v": 0.8
      },
      {
        "x": 56,
        "y": 35,
        "r": 38,
        "v": 0.8
      },
      {
        "x": 50,
        "y": 55,
        "r": 35,
        "v": 0.75
      }
    ],
    "strengths": [
      "Passing",
      "Tactical awareness"
    ],
    "weaknesses": [
      "Defending",
      "Physicality"
    ]
  },
  {
    "id": "emiliano-buend\u00eda-stati",
    "name": "Emiliano Buend\u00eda Stati",
    "age": 25,
    "position": "MF",
    "role": "Attacking Playmaker",
    "club": "Aston Villa",
    "league": "Premier League",
    "nation": "France",
    "value": 31800000,
    "rating": 84,
    "general": {
      "apps": 21,
      "mins": 1753,
      "goals": 6,
      "assists": 2,
      "yellowCards": 6,
      "redCards": 0
    },
    "attributes": {
      "pace": 79,
      "dribbling": 87,
      "passing": 86,
      "defending": 78,
      "physicality": 83,
      "tactical": 95,
      "workrate": 85
    },
    "detailedStats": {
      "goalsPer90": 0.31,
      "shotsOnTargetPer90": 1.0,
      "expectedGoals": 3.4,
      "shotConversionRate": 17.2,
      "touchesInBoxPer90": 1.8,
      "chancesCreated": 50,
      "dribblesCompletedPer90": 1.7,
      "keyPassesPer90": 1.03,
      "passingAccuracy": 88.7,
      "progressivePassesPer90": 6.0,
      "tacklesWonPer90": 2.2,
      "interceptionsPer90": 0.8,
      "ballRecoveriesPer90": 6.3
    },
    "leagueBenchmarks": [
      {
        "metric": "Key Passes per 90",
        "player": 1.03,
        "avg": 0.9,
        "elite": 2.2
      },
      {
        "metric": "Progressive Passes p90",
        "player": 6.0,
        "avg": 2.8,
        "elite": 6.2
      },
      {
        "metric": "Chances Created",
        "player": 50,
        "avg": 16,
        "elite": 55
      },
      {
        "metric": "Passing Accuracy %",
        "player": 88.7,
        "avg": 79.5,
        "elite": 87.0
      }
    ],
    "heatmap": [
      {
        "x": 50,
        "y": 64,
        "r": 42,
        "v": 0.9
      },
      {
        "x": 40,
        "y": 55,
        "r": 35,
        "v": 0.75
      },
      {
        "x": 60,
        "y": 55,
        "r": 35,
        "v": 0.75
      },
      {
        "x": 50,
        "y": 76,
        "r": 30,
        "v": 0.8
      }
    ],
    "strengths": [
      "Dribbling",
      "Tactical awareness"
    ],
    "weaknesses": [
      "Defending",
      "Pace"
    ]
  },
  {
    "id": "donyell-malen",
    "name": "Donyell Malen",
    "age": 28,
    "position": "MF",
    "role": "Box-to-Box Midfielder",
    "club": "Aston Villa",
    "league": "Premier League",
    "nation": "Spain",
    "value": 30600000,
    "rating": 77,
    "general": {
      "apps": 5,
      "mins": 640,
      "goals": 4,
      "assists": 2,
      "yellowCards": 0,
      "redCards": 0
    },
    "attributes": {
      "pace": 74,
      "dribbling": 70,
      "passing": 66,
      "defending": 62,
      "physicality": 67,
      "tactical": 79,
      "workrate": 69
    },
    "detailedStats": {
      "goalsPer90": 0.56,
      "shotsOnTargetPer90": 1.3,
      "expectedGoals": 4.0,
      "shotConversionRate": 14.8,
      "touchesInBoxPer90": 1.5,
      "chancesCreated": 12,
      "dribblesCompletedPer90": 0.7,
      "keyPassesPer90": 0.7,
      "passingAccuracy": 83.7,
      "progressivePassesPer90": 3.0,
      "tacklesWonPer90": 1.4,
      "interceptionsPer90": 0.6,
      "ballRecoveriesPer90": 4.7
    },
    "leagueBenchmarks": [
      {
        "metric": "Key Passes per 90",
        "player": 0.7,
        "avg": 0.9,
        "elite": 2.2
      },
      {
        "metric": "Progressive Passes p90",
        "player": 3.0,
        "avg": 2.8,
        "elite": 6.2
      },
      {
        "metric": "Chances Created",
        "player": 12,
        "avg": 16,
        "elite": 55
      },
      {
        "metric": "Passing Accuracy %",
        "player": 83.7,
        "avg": 79.5,
        "elite": 87.0
      }
    ],
    "heatmap": [
      {
        "x": 50,
        "y": 42,
        "r: ": 45,
        "v": 0.9
      },
      {
        "x": 44,
        "y": 35,
        "r": 38,
        "v": 0.8
      },
      {
        "x": 56,
        "y": 35,
        "r": 38,
        "v": 0.8
      },
      {
        "x": 50,
        "y": 55,
        "r": 35,
        "v": 0.75
      }
    ],
    "strengths": [
      "Tactical awareness",
      "Pace"
    ],
    "weaknesses": [
      "Passing",
      "Defending"
    ]
  },
  {
    "id": "john-mcginn",
    "name": "John McGinn",
    "age": 29,
    "position": "MF",
    "role": "Attacking Playmaker",
    "club": "Aston Villa",
    "league": "Premier League",
    "nation": "England",
    "value": 31800000,
    "rating": 84,
    "general": {
      "apps": 28,
      "mins": 2136,
      "goals": 5,
      "assists": 4,
      "yellowCards": 5,
      "redCards": 0
    },
    "attributes": {
      "pace": 75,
      "dribbling": 91,
      "passing": 97,
      "defending": 80,
      "physicality": 85,
      "tactical": 95,
      "workrate": 90
    },
    "detailedStats": {
      "goalsPer90": 0.21,
      "shotsOnTargetPer90": 0.8,
      "expectedGoals": 3.0,
      "shotConversionRate": 16.0,
      "touchesInBoxPer90": 1.5,
      "chancesCreated": 75,
      "dribblesCompletedPer90": 2.4,
      "keyPassesPer90": 1.28,
      "passingAccuracy": 92.1,
      "progressivePassesPer90": 8.1,
      "tacklesWonPer90": 2.3,
      "interceptionsPer90": 0.8,
      "ballRecoveriesPer90": 6.6
    },
    "leagueBenchmarks": [
      {
        "metric": "Key Passes per 90",
        "player": 1.28,
        "avg": 0.9,
        "elite": 2.2
      },
      {
        "metric": "Progressive Passes p90",
        "player": 8.1,
        "avg": 2.8,
        "elite": 6.2
      },
      {
        "metric": "Chances Created",
        "player": 75,
        "avg": 16,
        "elite": 55
      },
      {
        "metric": "Passing Accuracy %",
        "player": 92.1,
        "avg": 79.5,
        "elite": 87.0
      }
    ],
    "heatmap": [
      {
        "x": 50,
        "y": 64,
        "r": 42,
        "v": 0.9
      },
      {
        "x": 40,
        "y": 55,
        "r": 35,
        "v": 0.75
      },
      {
        "x": 60,
        "y": 55,
        "r": 35,
        "v": 0.75
      },
      {
        "x": 50,
        "y": 76,
        "r": 30,
        "v": 0.8
      }
    ],
    "strengths": [
      "Passing",
      "Tactical awareness"
    ],
    "weaknesses": [
      "Defending",
      "Pace"
    ]
  },
  {
    "id": "ross-barkley",
    "name": "Ross Barkley",
    "age": 30,
    "position": "MF",
    "role": "Box-to-Box Midfielder",
    "club": "Aston Villa",
    "league": "Premier League",
    "nation": "France",
    "value": 28800000,
    "rating": 78,
    "general": {
      "apps": 7,
      "mins": 844,
      "goals": 3,
      "assists": 2,
      "yellowCards": 1,
      "redCards": 0
    },
    "attributes": {
      "pace": 69,
      "dribbling": 69,
      "passing": 70,
      "defending": 65,
      "physicality": 70,
      "tactical": 79,
      "workrate": 72
    },
    "detailedStats": {
      "goalsPer90": 0.32,
      "shotsOnTargetPer90": 1.0,
      "expectedGoals": 1.6,
      "shotConversionRate": 13.6,
      "touchesInBoxPer90": 1.1,
      "chancesCreated": 20,
      "dribblesCompletedPer90": 0.9,
      "keyPassesPer90": 0.87,
      "passingAccuracy": 84.7,
      "progressivePassesPer90": 3.6,
      "tacklesWonPer90": 1.6,
      "interceptionsPer90": 0.6,
      "ballRecoveriesPer90": 5.0
    },
    "leagueBenchmarks": [
      {
        "metric": "Key Passes per 90",
        "player": 0.87,
        "avg": 0.9,
        "elite": 2.2
      },
      {
        "metric": "Progressive Passes p90",
        "player": 3.6,
        "avg": 2.8,
        "elite": 6.2
      },
      {
        "metric": "Chances Created",
        "player": 20,
        "avg": 16,
        "elite": 55
      },
      {
        "metric": "Passing Accuracy %",
        "player": 84.7,
        "avg": 79.5,
        "elite": 87.0
      }
    ],
    "heatmap": [
      {
        "x": 50,
        "y": 42,
        "r: ": 45,
        "v": 0.9
      },
      {
        "x": 44,
        "y": 35,
        "r": 38,
        "v": 0.8
      },
      {
        "x": 56,
        "y": 35,
        "r": 38,
        "v": 0.8
      },
      {
        "x": 50,
        "y": 55,
        "r": 35,
        "v": 0.75
      }
    ],
    "strengths": [
      "Workrate",
      "Tactical awareness"
    ],
    "weaknesses": [
      "Dribbling",
      "Defending"
    ]
  },
  {
    "id": "boubacar-kamara",
    "name": "Boubacar Kamara",
    "age": 33,
    "position": "MF",
    "role": "Box-to-Box Midfielder",
    "club": "Aston Villa",
    "league": "Premier League",
    "nation": "Spain",
    "value": 29400000,
    "rating": 78,
    "general": {
      "apps": 17,
      "mins": 1410,
      "goals": 1,
      "assists": 3,
      "yellowCards": 5,
      "redCards": 0
    },
    "attributes": {
      "pace": 63,
      "dribbling": 67,
      "passing": 76,
      "defending": 71,
      "physicality": 76,
      "tactical": 81,
      "workrate": 80
    },
    "detailedStats": {
      "goalsPer90": 0.06,
      "shotsOnTargetPer90": 0.6,
      "expectedGoals": 0.5,
      "shotConversionRate": 11.2,
      "touchesInBoxPer90": 0.8,
      "chancesCreated": 30,
      "dribblesCompletedPer90": 1.2,
      "keyPassesPer90": 0.77,
      "passingAccuracy": 86.0,
      "progressivePassesPer90": 4.4,
      "tacklesWonPer90": 1.9,
      "interceptionsPer90": 0.7,
      "ballRecoveriesPer90": 5.7
    },
    "leagueBenchmarks": [
      {
        "metric": "Key Passes per 90",
        "player": 0.77,
        "avg": 0.9,
        "elite": 2.2
      },
      {
        "metric": "Progressive Passes p90",
        "player": 4.4,
        "avg": 2.8,
        "elite": 6.2
      },
      {
        "metric": "Chances Created",
        "player": 30,
        "avg": 16,
        "elite": 55
      },
      {
        "metric": "Passing Accuracy %",
        "player": 86.0,
        "avg": 79.5,
        "elite": 87.0
      }
    ],
    "heatmap": [
      {
        "x": 50,
        "y": 42,
        "r: ": 45,
        "v": 0.9
      },
      {
        "x": 44,
        "y": 35,
        "r": 38,
        "v": 0.8
      },
      {
        "x": 56,
        "y": 35,
        "r": 38,
        "v": 0.8
      },
      {
        "x": 50,
        "y": 55,
        "r": 35,
        "v": 0.75
      }
    ],
    "strengths": [
      "Workrate",
      "Tactical awareness"
    ],
    "weaknesses": [
      "Dribbling",
      "Pace"
    ]
  },
  {
    "id": "amadou-onana",
    "name": "Amadou Onana",
    "age": 34,
    "position": "MF",
    "role": "Box-to-Box Midfielder",
    "club": "Aston Villa",
    "league": "Premier League",
    "nation": "Spain",
    "value": 28800000,
    "rating": 80,
    "general": {
      "apps": 21,
      "mins": 1755,
      "goals": 2,
      "assists": 0,
      "yellowCards": 3,
      "redCards": 0
    },
    "attributes": {
      "pace": 68,
      "dribbling": 68,
      "passing": 70,
      "defending": 77,
      "physicality": 82,
      "tactical": 83,
      "workrate": 85
    },
    "detailedStats": {
      "goalsPer90": 0.1,
      "shotsOnTargetPer90": 0.7,
      "expectedGoals": 1.7,
      "shotConversionRate": 12.4,
      "touchesInBoxPer90": 1.1,
      "chancesCreated": 19,
      "dribblesCompletedPer90": 0.9,
      "keyPassesPer90": 0.39,
      "passingAccuracy": 84.5,
      "progressivePassesPer90": 3.5,
      "tacklesWonPer90": 2.2,
      "interceptionsPer90": 0.7,
      "ballRecoveriesPer90": 6.3
    },
    "leagueBenchmarks": [
      {
        "metric": "Key Passes per 90",
        "player": 0.39,
        "avg": 0.9,
        "elite": 2.2
      },
      {
        "metric": "Progressive Passes p90",
        "player": 3.5,
        "avg": 2.8,
        "elite": 6.2
      },
      {
        "metric": "Chances Created",
        "player": 19,
        "avg": 16,
        "elite": 55
      },
      {
        "metric": "Passing Accuracy %",
        "player": 84.5,
        "avg": 79.5,
        "elite": 87.0
      }
    ],
    "heatmap": [
      {
        "x": 50,
        "y": 42,
        "r: ": 45,
        "v": 0.9
      },
      {
        "x": 44,
        "y": 35,
        "r": 38,
        "v": 0.8
      },
      {
        "x": 56,
        "y": 35,
        "r": 38,
        "v": 0.8
      },
      {
        "x": 50,
        "y": 55,
        "r": 35,
        "v": 0.75
      }
    ],
    "strengths": [
      "Workrate",
      "Tactical awareness"
    ],
    "weaknesses": [
      "Dribbling",
      "Pace"
    ]
  },
  {
    "id": "ollie-watkins",
    "name": "Ollie Watkins",
    "age": 24,
    "position": "FW",
    "role": "Inverted Winger",
    "club": "Aston Villa",
    "league": "Premier League",
    "nation": "Spain",
    "value": 52200000,
    "rating": 93,
    "general": {
      "apps": 33,
      "mins": 2833,
      "goals": 16,
      "assists": 4,
      "yellowCards": 4,
      "redCards": 0
    },
    "attributes": {
      "pace": 98,
      "dribbling": 96,
      "passing": 82,
      "defending": 43,
      "physicality": 94,
      "tactical": 95,
      "workrate": 96
    },
    "detailedStats": {
      "goalsPer90": 0.51,
      "shotsOnTargetPer90": 1.3,
      "expectedGoals": 15.4,
      "shotConversionRate": 25.0,
      "touchesInBoxPer90": 8.0,
      "chancesCreated": 41,
      "dribblesCompletedPer90": 1.5,
      "keyPassesPer90": 0.53
    },
    "leagueBenchmarks": [
      {
        "metric": "Goals per 90",
        "player": 0.51,
        "avg": 0.22,
        "elite": 0.65
      },
      {
        "metric": "Shot Conversion %",
        "player": 25.0,
        "avg": 10.5,
        "elite": 18.0
      },
      {
        "metric": "Touches in Box p90",
        "player": 8.0,
        "avg": 2.5,
        "elite": 5.5
      },
      {
        "metric": "Expected Goals (xG)",
        "player": 15.4,
        "avg": 4.5,
        "elite": 14.0
      }
    ],
    "heatmap": [
      {
        "x": 22,
        "y": 72,
        "r": 45,
        "v": 0.9
      },
      {
        "x": 22,
        "y": 58,
        "r": 38,
        "v": 0.75
      },
      {
        "x": 28,
        "y": 82,
        "r": 35,
        "v": 0.8
      },
      {
        "x": 50,
        "y": 84,
        "r": 30,
        "v": 0.65
      }
    ],
    "strengths": [
      "Dribbling",
      "Clinical Finishing",
      "Pace"
    ],
    "weaknesses": [
      "Defending",
      "Defensive Tracking Back"
    ]
  },
  {
    "id": "jadon-sancho",
    "name": "Jadon Sancho",
    "age": 26,
    "position": "MF",
    "role": "Box-to-Box Midfielder",
    "club": "Aston Villa",
    "league": "Premier League",
    "nation": "England",
    "value": 34800000,
    "rating": 75,
    "general": {
      "apps": 9,
      "mins": 863,
      "goals": 0,
      "assists": 2,
      "yellowCards": 0,
      "redCards": 0
    },
    "attributes": {
      "pace": 69,
      "dribbling": 74,
      "passing": 79,
      "defending": 58,
      "physicality": 63,
      "tactical": 80,
      "workrate": 72
    },
    "detailedStats": {
      "goalsPer90": 0.0,
      "shotsOnTargetPer90": 0.5,
      "expectedGoals": 0.6,
      "shotConversionRate": 10.0,
      "touchesInBoxPer90": 1.1,
      "chancesCreated": 36,
      "dribblesCompletedPer90": 1.4,
      "keyPassesPer90": 1.52,
      "passingAccuracy": 86.8,
      "progressivePassesPer90": 4.9,
      "tacklesWonPer90": 1.2,
      "interceptionsPer90": 0.7,
      "ballRecoveriesPer90": 4.4
    },
    "leagueBenchmarks": [
      {
        "metric": "Key Passes per 90",
        "player": 1.52,
        "avg": 0.9,
        "elite": 2.2
      },
      {
        "metric": "Progressive Passes p90",
        "player": 4.9,
        "avg": 2.8,
        "elite": 6.2
      },
      {
        "metric": "Chances Created",
        "player": 36,
        "avg": 16,
        "elite": 55
      },
      {
        "metric": "Passing Accuracy %",
        "player": 86.8,
        "avg": 79.5,
        "elite": 87.0
      }
    ],
    "heatmap": [
      {
        "x": 50,
        "y": 42,
        "r: ": 45,
        "v": 0.9
      },
      {
        "x": 44,
        "y": 35,
        "r": 38,
        "v": 0.8
      },
      {
        "x": 56,
        "y": 35,
        "r": 38,
        "v": 0.8
      },
      {
        "x": 50,
        "y": 55,
        "r": 35,
        "v": 0.75
      }
    ],
    "strengths": [
      "Passing",
      "Tactical awareness"
    ],
    "weaknesses": [
      "Defending",
      "Physicality"
    ]
  },
  {
    "id": "douglas-luiz-soares-de-paulo",
    "name": "Douglas Luiz Soares de Paulo",
    "age": 29,
    "position": "MF",
    "role": "Box-to-Box Midfielder",
    "club": "Aston Villa",
    "league": "Premier League",
    "nation": "England",
    "value": 29400000,
    "rating": 75,
    "general": {
      "apps": 12,
      "mins": 913,
      "goals": 1,
      "assists": 1,
      "yellowCards": 3,
      "redCards": 0
    },
    "attributes": {
      "pace": 64,
      "dribbling": 70,
      "passing": 79,
      "defending": 63,
      "physicality": 68,
      "tactical": 79,
      "workrate": 73
    },
    "detailedStats": {
      "goalsPer90": 0.1,
      "shotsOnTargetPer90": 0.7,
      "expectedGoals": 0.5,
      "shotConversionRate": 11.2,
      "touchesInBoxPer90": 0.8,
      "chancesCreated": 36,
      "dribblesCompletedPer90": 1.4,
      "keyPassesPer90": 1.45,
      "passingAccuracy": 86.9,
      "progressivePassesPer90": 4.9,
      "tacklesWonPer90": 1.5,
      "interceptionsPer90": 0.6,
      "ballRecoveriesPer90": 4.8
    },
    "leagueBenchmarks": [
      {
        "metric": "Key Passes per 90",
        "player": 1.45,
        "avg": 0.9,
        "elite": 2.2
      },
      {
        "metric": "Progressive Passes p90",
        "player": 4.9,
        "avg": 2.8,
        "elite": 6.2
      },
      {
        "metric": "Chances Created",
        "player": 36,
        "avg": 16,
        "elite": 55
      },
      {
        "metric": "Passing Accuracy %",
        "player": 86.9,
        "avg": 79.5,
        "elite": 87.0
      }
    ],
    "heatmap": [
      {
        "x": 50,
        "y": 42,
        "r: ": 45,
        "v": 0.9
      },
      {
        "x": 44,
        "y": 35,
        "r": 38,
        "v": 0.8
      },
      {
        "x": 56,
        "y": 35,
        "r": 38,
        "v": 0.8
      },
      {
        "x": 50,
        "y": 55,
        "r": 35,
        "v": 0.75
      }
    ],
    "strengths": [
      "Passing",
      "Tactical awareness"
    ],
    "weaknesses": [
      "Defending",
      "Pace"
    ]
  },
  {
    "id": "victor-lindel\u00f6f",
    "name": "Victor Lindel\u00f6f",
    "age": 34,
    "position": "DF",
    "role": "Central Defender",
    "club": "Aston Villa",
    "league": "Premier League",
    "nation": "Spain",
    "value": 27000000,
    "rating": 74,
    "general": {
      "apps": 11,
      "mins": 942,
      "goals": 0,
      "assists": 1,
      "yellowCards": 0,
      "redCards": 0
    },
    "attributes": {
      "pace": 65,
      "dribbling": 57,
      "passing": 62,
      "defending": 81,
      "physicality": 66,
      "tactical": 70,
      "workrate": 73
    },
    "detailedStats": {
      "goalsPer90": 0.0,
      "shotsOnTargetPer90": 0.5,
      "expectedGoals": 0.3,
      "shotConversionRate": 10.0,
      "touchesInBoxPer90": 0.6,
      "chancesCreated": 4,
      "dribblesCompletedPer90": 0.5,
      "keyPassesPer90": 0.17,
      "tacklesWonPer90": 1.6,
      "interceptionsPer90": 0.9,
      "clearancesPer90": 2.3,
      "aerialDuelWinPercentage": 63.4,
      "tackledDribblerRate": 52.3,
      "progressivePassesPer90": 1.7,
      "longPassesCompletedPer90": 1.1,
      "passingAccuracy": 80.7
    },
    "leagueBenchmarks": [
      {
        "metric": "Passing Accuracy %",
        "player": 80.7,
        "avg": 82.0,
        "elite": 89.0
      },
      {
        "metric": "Clearances per 90",
        "player": 2.3,
        "avg": 2.6,
        "elite": 4.0
      },
      {
        "metric": "Aerial Duel Win %",
        "player": 63.4,
        "avg": 54.5,
        "elite": 68.0
      },
      {
        "metric": "Tackles Won per 90",
        "player": 1.6,
        "avg": 1.1,
        "elite": 2.0
      }
    ],
    "heatmap": [
      {
        "x": 50,
        "y": 20,
        "r": 45,
        "v": 0.9
      },
      {
        "x": 42,
        "y": 18,
        "r": 32,
        "v": 0.8
      },
      {
        "x": 58,
        "y": 18,
        "r": 32,
        "v": 0.8
      },
      {
        "x": 50,
        "y": 10,
        "r": 28,
        "v": 0.6
      }
    ],
    "strengths": [
      "Defending",
      "Workrate"
    ],
    "weaknesses": [
      "Dribbling",
      "Passing"
    ]
  },
  {
    "id": "tammy-abraham",
    "name": "Tammy Abraham",
    "age": 33,
    "position": "FW",
    "role": "Complete Winger / Striker",
    "club": "Aston Villa",
    "league": "Premier League",
    "nation": "Spain",
    "value": 34200000,
    "rating": 73,
    "general": {
      "apps": 2,
      "mins": 278,
      "goals": 2,
      "assists": 0,
      "yellowCards": 0,
      "redCards": 0
    },
    "attributes": {
      "pace": 77,
      "dribbling": 62,
      "passing": 63,
      "defending": 27,
      "physicality": 60,
      "tactical": 71,
      "workrate": 63
    },
    "detailedStats": {
      "goalsPer90": 0.65,
      "shotsOnTargetPer90": 1.5,
      "expectedGoals": 2.0,
      "shotConversionRate": 12.4,
      "touchesInBoxPer90": 2.7,
      "chancesCreated": 6,
      "dribblesCompletedPer90": 0.6,
      "keyPassesPer90": 0.8
    },
    "leagueBenchmarks": [
      {
        "metric": "Goals per 90",
        "player": 0.65,
        "avg": 0.22,
        "elite": 0.65
      },
      {
        "metric": "Shot Conversion %",
        "player": 12.4,
        "avg": 10.5,
        "elite": 18.0
      },
      {
        "metric": "Touches in Box p90",
        "player": 2.7,
        "avg": 2.5,
        "elite": 5.5
      },
      {
        "metric": "Expected Goals (xG)",
        "player": 2.0,
        "avg": 4.5,
        "elite": 14.0
      }
    ],
    "heatmap": [
      {
        "x": 50,
        "y": 84,
        "r": 38,
        "v": 0.9
      },
      {
        "x": 48,
        "y": 76,
        "r": 32,
        "v": 0.75
      },
      {
        "x": 52,
        "y": 80,
        "r": 32,
        "v": 0.8
      },
      {
        "x": 50,
        "y": 92,
        "r": 28,
        "v": 0.85
      }
    ],
    "strengths": [
      "Tactical awareness",
      "Pace"
    ],
    "weaknesses": [
      "Defending",
      "Defensive Tracking Back"
    ]
  },
  {
    "id": "max-wei\u00df",
    "name": "Max Wei\u00df",
    "age": 23,
    "position": "GK",
    "role": "Sweeper Keeper",
    "club": "Burnley",
    "league": "Premier League",
    "nation": "England",
    "value": 25200000,
    "rating": 71,
    "general": {
      "apps": 3,
      "mins": 270,
      "goals": 0,
      "assists": 0,
      "yellowCards": 0,
      "redCards": 0
    },
    "attributes": {
      "pace": 60,
      "dribbling": 55,
      "passing": 58,
      "defending": 78,
      "physicality": 60,
      "tactical": 67,
      "workrate": 63
    },
    "detailedStats": {
      "savePercentage": 67.0,
      "cleanSheets": 0,
      "goalsConceded": 4,
      "psxgDifference": 0.0,
      "passingAccuracy": 73.8,
      "sweeperActionsPer90": 0.5,
      "averageDistanceOfSweeperActions": 12.2
    },
    "leagueBenchmarks": [
      {
        "metric": "Save %",
        "player": 67.0,
        "avg": 69.5,
        "elite": 77.0
      },
      {
        "metric": "Clean Sheets",
        "player": 0,
        "avg": 4.5,
        "elite": 10.0
      },
      {
        "metric": "Sweeper Actions p90",
        "player": 0.5,
        "avg": 0.6,
        "elite": 1.2
      },
      {
        "metric": "Passing Accuracy %",
        "player": 73.8,
        "avg": 73.0,
        "elite": 82.0
      }
    ],
    "heatmap": [
      {
        "x": 50,
        "y": 6,
        "r": 35,
        "v": 0.98
      },
      {
        "x": 50,
        "y": 14,
        "r": 28,
        "v": 0.7
      },
      {
        "x": 45,
        "y": 8,
        "r": 22,
        "v": 0.55
      },
      {
        "x": 55,
        "y": 8,
        "r": 22,
        "v": 0.55
      }
    ],
    "strengths": [
      "Defending",
      "Tactical awareness"
    ],
    "weaknesses": [
      "Dribbling",
      "Passing"
    ]
  },
  {
    "id": "kyle-walker",
    "name": "Kyle Walker",
    "age": 27,
    "position": "DF",
    "role": "Attacking Fullback",
    "club": "Burnley",
    "league": "Premier League",
    "nation": "Spain",
    "value": 26400000,
    "rating": 80,
    "general": {
      "apps": 35,
      "mins": 3095,
      "goals": 0,
      "assists": 2,
      "yellowCards": 9,
      "redCards": 0
    },
    "attributes": {
      "pace": 66,
      "dribbling": 65,
      "passing": 75,
      "defending": 94,
      "physicality": 88,
      "tactical": 84,
      "workrate": 96
    },
    "detailedStats": {
      "goalsPer90": 0.0,
      "shotsOnTargetPer90": 0.5,
      "expectedGoals": 0.1,
      "shotConversionRate": 10.0,
      "touchesInBoxPer90": 0.6,
      "chancesCreated": 29,
      "dribblesCompletedPer90": 1.2,
      "keyPassesPer90": 0.34,
      "tacklesWonPer90": 2.7,
      "interceptionsPer90": 1.1,
      "clearancesPer90": 4.0,
      "aerialDuelWinPercentage": 80.0,
      "tackledDribblerRate": 57.7,
      "progressivePassesPer90": 2.7,
      "longPassesCompletedPer90": 1.8,
      "passingAccuracy": 84.7
    },
    "leagueBenchmarks": [
      {
        "metric": "Passing Accuracy %",
        "player": 84.7,
        "avg": 82.0,
        "elite": 89.0
      },
      {
        "metric": "Clearances per 90",
        "player": 4.0,
        "avg": 2.6,
        "elite": 4.0
      },
      {
        "metric": "Aerial Duel Win %",
        "player": 80.0,
        "avg": 54.5,
        "elite": 68.0
      },
      {
        "metric": "Tackles Won per 90",
        "player": 2.7,
        "avg": 1.1,
        "elite": 2.0
      }
    ],
    "heatmap": [
      {
        "x": 86,
        "y": 25,
        "r": 38,
        "v": 0.8
      },
      {
        "x": 86,
        "y": 45,
        "r": 40,
        "v": 0.85
      },
      {
        "x": 86,
        "y": 65,
        "r": 35,
        "v": 0.7
      },
      {
        "x": 86,
        "y": 12,
        "r": 30,
        "v": 0.6
      }
    ],
    "strengths": [
      "Defending",
      "Workrate",
      "Aerial Dominance"
    ],
    "weaknesses": [
      "Dribbling",
      "Pace"
    ]
  },
  {
    "id": "hjalmar-ekdal",
    "name": "Hjalmar Ekdal",
    "age": 30,
    "position": "DF",
    "role": "Central Defender",
    "club": "Burnley",
    "league": "Premier League",
    "nation": "France",
    "value": 22800000,
    "rating": 77,
    "general": {
      "apps": 17,
      "mins": 1539,
      "goals": 0,
      "assists": 0,
      "yellowCards": 0,
      "redCards": 0
    },
    "attributes": {
      "pace": 68,
      "dribbling": 60,
      "passing": 63,
      "defending": 93,
      "physicality": 79,
      "tactical": 77,
      "workrate": 81
    },
    "detailedStats": {
      "goalsPer90": 0.0,
      "shotsOnTargetPer90": 0.5,
      "expectedGoals": 0.2,
      "shotConversionRate": 10.0,
      "touchesInBoxPer90": 0.8,
      "chancesCreated": 6,
      "dribblesCompletedPer90": 0.6,
      "keyPassesPer90": 0.16,
      "tacklesWonPer90": 2.2,
      "interceptionsPer90": 1.0,
      "clearancesPer90": 3.4,
      "aerialDuelWinPercentage": 73.6,
      "tackledDribblerRate": 55.2,
      "progressivePassesPer90": 1.8,
      "longPassesCompletedPer90": 1.2,
      "passingAccuracy": 81.1
    },
    "leagueBenchmarks": [
      {
        "metric": "Passing Accuracy %",
        "player": 81.1,
        "avg": 82.0,
        "elite": 89.0
      },
      {
        "metric": "Clearances per 90",
        "player": 3.4,
        "avg": 2.6,
        "elite": 4.0
      },
      {
        "metric": "Aerial Duel Win %",
        "player": 73.6,
        "avg": 54.5,
        "elite": 68.0
      },
      {
        "metric": "Tackles Won per 90",
        "player": 2.2,
        "avg": 1.1,
        "elite": 2.0
      }
    ],
    "heatmap": [
      {
        "x": 50,
        "y": 20,
        "r": 45,
        "v": 0.9
      },
      {
        "x": 42,
        "y": 18,
        "r": 32,
        "v": 0.8
      },
      {
        "x": 58,
        "y": 18,
        "r": 32,
        "v": 0.8
      },
      {
        "x": 50,
        "y": 10,
        "r": 28,
        "v": 0.6
      }
    ],
    "strengths": [
      "Defending",
      "Workrate",
      "Aerial Dominance"
    ],
    "weaknesses": [
      "Dribbling",
      "Passing"
    ]
  },
  {
    "id": "maxime-est\u00e8ve",
    "name": "Maxime Est\u00e8ve",
    "age": 31,
    "position": "DF",
    "role": "Central Defender",
    "club": "Burnley",
    "league": "Premier League",
    "nation": "Spain",
    "value": 22800000,
    "rating": 82,
    "general": {
      "apps": 34,
      "mins": 2933,
      "goals": 0,
      "assists": 0,
      "yellowCards": 1,
      "redCards": 0
    },
    "attributes": {
      "pace": 68,
      "dribbling": 62,
      "passing": 66,
      "defending": 94,
      "physicality": 94,
      "tactical": 88,
      "workrate": 96
    },
    "detailedStats": {
      "goalsPer90": 0.0,
      "shotsOnTargetPer90": 0.5,
      "expectedGoals": 0.7,
      "shotConversionRate": 10.0,
      "touchesInBoxPer90": 0.8,
      "chancesCreated": 11,
      "dribblesCompletedPer90": 0.7,
      "keyPassesPer90": 0.14,
      "tacklesWonPer90": 3.5,
      "interceptionsPer90": 1.1,
      "clearancesPer90": 5.2,
      "aerialDuelWinPercentage": 80.0,
      "tackledDribblerRate": 59.4,
      "progressivePassesPer90": 2.0,
      "longPassesCompletedPer90": 1.3,
      "passingAccuracy": 81.8
    },
    "leagueBenchmarks": [
      {
        "metric": "Passing Accuracy %",
        "player": 81.8,
        "avg": 82.0,
        "elite": 89.0
      },
      {
        "metric": "Clearances per 90",
        "player": 5.2,
        "avg": 2.6,
        "elite": 4.0
      },
      {
        "metric": "Aerial Duel Win %",
        "player": 80.0,
        "avg": 54.5,
        "elite": 68.0
      },
      {
        "metric": "Tackles Won per 90",
        "player": 3.5,
        "avg": 1.1,
        "elite": 2.0
      }
    ],
    "heatmap": [
      {
        "x": 50,
        "y": 20,
        "r": 45,
        "v": 0.9
      },
      {
        "x": 42,
        "y": 18,
        "r": 32,
        "v": 0.8
      },
      {
        "x": 58,
        "y": 18,
        "r": 32,
        "v": 0.8
      },
      {
        "x": 50,
        "y": 10,
        "r": 28,
        "v": 0.6
      }
    ],
    "strengths": [
      "Defending",
      "Workrate",
      "Aerial Dominance"
    ],
    "weaknesses": [
      "Dribbling",
      "Passing"
    ]
  },
  {
    "id": "quilindschy-hartman",
    "name": "Quilindschy Hartman",
    "age": 32,
    "position": "DF",
    "role": "Attacking Fullback",
    "club": "Burnley",
    "league": "Premier League",
    "nation": "England",
    "value": 24000000,
    "rating": 79,
    "general": {
      "apps": 21,
      "mins": 1825,
      "goals": 0,
      "assists": 6,
      "yellowCards": 1,
      "redCards": 0
    },
    "attributes": {
      "pace": 68,
      "dribbling": 69,
      "passing": 79,
      "defending": 94,
      "physicality": 83,
      "tactical": 84,
      "workrate": 86
    },
    "detailedStats": {
      "goalsPer90": 0.0,
      "shotsOnTargetPer90": 0.5,
      "expectedGoals": 0.3,
      "shotConversionRate": 10.0,
      "touchesInBoxPer90": 0.8,
      "chancesCreated": 36,
      "dribblesCompletedPer90": 1.4,
      "keyPassesPer90": 0.71,
      "tacklesWonPer90": 2.4,
      "interceptionsPer90": 1.1,
      "clearancesPer90": 3.6,
      "aerialDuelWinPercentage": 76.1,
      "tackledDribblerRate": 58.0,
      "progressivePassesPer90": 2.9,
      "longPassesCompletedPer90": 2.0,
      "passingAccuracy": 85.8
    },
    "leagueBenchmarks": [
      {
        "metric": "Passing Accuracy %",
        "player": 85.8,
        "avg": 82.0,
        "elite": 89.0
      },
      {
        "metric": "Clearances per 90",
        "player": 3.6,
        "avg": 2.6,
        "elite": 4.0
      },
      {
        "metric": "Aerial Duel Win %",
        "player": 76.1,
        "avg": 54.5,
        "elite": 68.0
      },
      {
        "metric": "Tackles Won per 90",
        "player": 2.4,
        "avg": 1.1,
        "elite": 2.0
      }
    ],
    "heatmap": [
      {
        "x": 14,
        "y": 25,
        "r": 38,
        "v": 0.8
      },
      {
        "x": 14,
        "y": 45,
        "r": 40,
        "v": 0.85
      },
      {
        "x": 14,
        "y": 65,
        "r": 35,
        "v": 0.7
      },
      {
        "x": 14,
        "y": 12,
        "r": 30,
        "v": 0.6
      }
    ],
    "strengths": [
      "Defending",
      "Workrate",
      "Aerial Dominance"
    ],
    "weaknesses": [
      "Dribbling",
      "Pace"
    ]
  },
  {
    "id": "bashir-humphreys",
    "name": "Bashir Humphreys",
    "age": 33,
    "position": "DF",
    "role": "Attacking Fullback",
    "club": "Burnley",
    "league": "Premier League",
    "nation": "Spain",
    "value": 23400000,
    "rating": 76,
    "general": {
      "apps": 17,
      "mins": 1574,
      "goals": 0,
      "assists": 2,
      "yellowCards": 6,
      "redCards": 0
    },
    "attributes": {
      "pace": 69,
      "dribbling": 64,
      "passing": 69,
      "defending": 94,
      "physicality": 80,
      "tactical": 80,
      "workrate": 82
    },
    "detailedStats": {
      "goalsPer90": 0.0,
      "shotsOnTargetPer90": 0.5,
      "expectedGoals": 0.4,
      "shotConversionRate": 10.0,
      "touchesInBoxPer90": 0.8,
      "chancesCreated": 16,
      "dribblesCompletedPer90": 0.9,
      "keyPassesPer90": 0.39,
      "tacklesWonPer90": 2.3,
      "interceptionsPer90": 1.0,
      "clearancesPer90": 3.4,
      "aerialDuelWinPercentage": 74.0,
      "tackledDribblerRate": 56.1,
      "progressivePassesPer90": 2.2,
      "longPassesCompletedPer90": 1.5,
      "passingAccuracy": 82.7
    },
    "leagueBenchmarks": [
      {
        "metric": "Passing Accuracy %",
        "player": 82.7,
        "avg": 82.0,
        "elite": 89.0
      },
      {
        "metric": "Clearances per 90",
        "player": 3.4,
        "avg": 2.6,
        "elite": 4.0
      },
      {
        "metric": "Aerial Duel Win %",
        "player": 74.0,
        "avg": 54.5,
        "elite": 68.0
      },
      {
        "metric": "Tackles Won per 90",
        "player": 2.3,
        "avg": 1.1,
        "elite": 2.0
      }
    ],
    "heatmap": [
      {
        "x": 86,
        "y": 25,
        "r": 38,
        "v": 0.8
      },
      {
        "x": 86,
        "y": 45,
        "r": 40,
        "v": 0.85
      },
      {
        "x": 86,
        "y": 65,
        "r": 35,
        "v": 0.7
      },
      {
        "x": 86,
        "y": 12,
        "r": 30,
        "v": 0.6
      }
    ],
    "strengths": [
      "Defending",
      "Workrate",
      "Aerial Dominance"
    ],
    "weaknesses": [
      "Dribbling",
      "Passing"
    ]
  },
  {
    "id": "lucas-pires-silva",
    "name": "Lucas Pires Silva",
    "age": 20,
    "position": "DF",
    "role": "Attacking Fullback",
    "club": "Burnley",
    "league": "Premier League",
    "nation": "England",
    "value": 22800000,
    "rating": 73,
    "general": {
      "apps": 15,
      "mins": 1405,
      "goals": 0,
      "assists": 0,
      "yellowCards": 1,
      "redCards": 1
    },
    "attributes": {
      "pace": 69,
      "dribbling": 71,
      "passing": 79,
      "defending": 87,
      "physicality": 71,
      "tactical": 81,
      "workrate": 80
    },
    "detailedStats": {
      "goalsPer90": 0.0,
      "shotsOnTargetPer90": 0.5,
      "expectedGoals": 0.6,
      "shotConversionRate": 10.0,
      "touchesInBoxPer90": 0.9,
      "chancesCreated": 36,
      "dribblesCompletedPer90": 1.4,
      "keyPassesPer90": 0.94,
      "tacklesWonPer90": 1.8,
      "interceptionsPer90": 1.0,
      "clearancesPer90": 2.7,
      "aerialDuelWinPercentage": 67.3,
      "tackledDribblerRate": 56.6,
      "progressivePassesPer90": 3.0,
      "longPassesCompletedPer90": 2.0,
      "passingAccuracy": 85.9
    },
    "leagueBenchmarks": [
      {
        "metric": "Passing Accuracy %",
        "player": 85.9,
        "avg": 82.0,
        "elite": 89.0
      },
      {
        "metric": "Clearances per 90",
        "player": 2.7,
        "avg": 2.6,
        "elite": 4.0
      },
      {
        "metric": "Aerial Duel Win %",
        "player": 67.3,
        "avg": 54.5,
        "elite": 68.0
      },
      {
        "metric": "Tackles Won per 90",
        "player": 1.8,
        "avg": 1.1,
        "elite": 2.0
      }
    ],
    "heatmap": [
      {
        "x": 86,
        "y": 25,
        "r": 38,
        "v": 0.8
      },
      {
        "x": 86,
        "y": 45,
        "r": 40,
        "v": 0.85
      },
      {
        "x": 86,
        "y": 65,
        "r": 35,
        "v": 0.7
      },
      {
        "x": 86,
        "y": 12,
        "r": 30,
        "v": 0.6
      }
    ],
    "strengths": [
      "Defending",
      "Tactical awareness"
    ],
    "weaknesses": [
      "Physicality",
      "Pace"
    ]
  },
  {
    "id": "axel-tuanzebe",
    "name": "Axel Tuanzebe",
    "age": 23,
    "position": "DF",
    "role": "Central Defender",
    "club": "Burnley",
    "league": "Premier League",
    "nation": "England",
    "value": 23400000,
    "rating": 74,
    "general": {
      "apps": 14,
      "mins": 1201,
      "goals": 1,
      "assists": 0,
      "yellowCards": 1,
      "redCards": 0
    },
    "attributes": {
      "pace": 67,
      "dribbling": 57,
      "passing": 60,
      "defending": 87,
      "physicality": 73,
      "tactical": 73,
      "workrate": 77
    },
    "detailedStats": {
      "goalsPer90": 0.07,
      "shotsOnTargetPer90": 0.6,
      "expectedGoals": 0.6,
      "shotConversionRate": 11.2,
      "touchesInBoxPer90": 0.7,
      "chancesCreated": 1,
      "dribblesCompletedPer90": 0.4,
      "keyPassesPer90": 0.04,
      "tacklesWonPer90": 1.9,
      "interceptionsPer90": 0.9,
      "clearancesPer90": 2.9,
      "aerialDuelWinPercentage": 68.8,
      "tackledDribblerRate": 53.4,
      "progressivePassesPer90": 1.6,
      "longPassesCompletedPer90": 1.0,
      "passingAccuracy": 80.2
    },
    "leagueBenchmarks": [
      {
        "metric": "Passing Accuracy %",
        "player": 80.2,
        "avg": 82.0,
        "elite": 89.0
      },
      {
        "metric": "Clearances per 90",
        "player": 2.9,
        "avg": 2.6,
        "elite": 4.0
      },
      {
        "metric": "Aerial Duel Win %",
        "player": 68.8,
        "avg": 54.5,
        "elite": 68.0
      },
      {
        "metric": "Tackles Won per 90",
        "player": 1.9,
        "avg": 1.1,
        "elite": 2.0
      }
    ],
    "heatmap": [
      {
        "x": 50,
        "y": 20,
        "r": 45,
        "v": 0.9
      },
      {
        "x": 42,
        "y": 18,
        "r": 32,
        "v": 0.8
      },
      {
        "x": 58,
        "y": 18,
        "r": 32,
        "v": 0.8
      },
      {
        "x": 50,
        "y": 10,
        "r": 28,
        "v": 0.6
      }
    ],
    "strengths": [
      "Defending",
      "Workrate",
      "Aerial Dominance"
    ],
    "weaknesses": [
      "Dribbling",
      "Passing"
    ]
  },
  {
    "id": "joe-worrall",
    "name": "Joe Worrall",
    "age": 24,
    "position": "DF",
    "role": "Central Defender",
    "club": "Burnley",
    "league": "Premier League",
    "nation": "Spain",
    "value": 22800000,
    "rating": 72,
    "general": {
      "apps": 5,
      "mins": 496,
      "goals": 0,
      "assists": 0,
      "yellowCards": 0,
      "redCards": 0
    },
    "attributes": {
      "pace": 65,
      "dribbling": 55,
      "passing": 60,
      "defending": 80,
      "physicality": 64,
      "tactical": 69,
      "workrate": 67
    },
    "detailedStats": {
      "goalsPer90": 0.0,
      "shotsOnTargetPer90": 0.5,
      "expectedGoals": 0.1,
      "shotConversionRate": 10.0,
      "touchesInBoxPer90": 0.6,
      "chancesCreated": 0,
      "dribblesCompletedPer90": 0.4,
      "keyPassesPer90": 0.01,
      "tacklesWonPer90": 1.5,
      "interceptionsPer90": 0.9,
      "clearancesPer90": 2.2,
      "aerialDuelWinPercentage": 62.4,
      "tackledDribblerRate": 51.7,
      "progressivePassesPer90": 1.5,
      "longPassesCompletedPer90": 1.0,
      "passingAccuracy": 80.0
    },
    "leagueBenchmarks": [
      {
        "metric": "Passing Accuracy %",
        "player": 80.0,
        "avg": 82.0,
        "elite": 89.0
      },
      {
        "metric": "Clearances per 90",
        "player": 2.2,
        "avg": 2.6,
        "elite": 4.0
      },
      {
        "metric": "Aerial Duel Win %",
        "player": 62.4,
        "avg": 54.5,
        "elite": 68.0
      },
      {
        "metric": "Tackles Won per 90",
        "player": 1.5,
        "avg": 1.1,
        "elite": 2.0
      }
    ],
    "heatmap": [
      {
        "x": 50,
        "y": 20,
        "r": 45,
        "v": 0.9
      },
      {
        "x": 42,
        "y": 18,
        "r": 32,
        "v": 0.8
      },
      {
        "x": 58,
        "y": 18,
        "r": 32,
        "v": 0.8
      },
      {
        "x": 50,
        "y": 10,
        "r": 28,
        "v": 0.6
      }
    ],
    "strengths": [
      "Defending",
      "Tactical awareness"
    ],
    "weaknesses": [
      "Dribbling",
      "Passing"
    ]
  },
  {
    "id": "jaidon-anthony",
    "name": "Jaidon Anthony",
    "age": 25,
    "position": "MF",
    "role": "Attacking Playmaker",
    "club": "Burnley",
    "league": "Premier League",
    "nation": "France",
    "value": 30000000,
    "rating": 88,
    "general": {
      "apps": 32,
      "mins": 2717,
      "goals": 8,
      "assists": 4,
      "yellowCards": 4,
      "redCards": 0
    },
    "attributes": {
      "pace": 90,
      "dribbling": 96,
      "passing": 96,
      "defending": 88,
      "physicality": 94,
      "tactical": 95,
      "workrate": 96
    },
    "detailedStats": {
      "goalsPer90": 0.26,
      "shotsOnTargetPer90": 0.9,
      "expectedGoals": 5.1,
      "shotConversionRate": 19.6,
      "touchesInBoxPer90": 2.6,
      "chancesCreated": 69,
      "dribblesCompletedPer90": 2.2,
      "keyPassesPer90": 0.91,
      "passingAccuracy": 91.2,
      "progressivePassesPer90": 7.5,
      "tacklesWonPer90": 2.8,
      "interceptionsPer90": 0.9,
      "ballRecoveriesPer90": 7.4
    },
    "leagueBenchmarks": [
      {
        "metric": "Key Passes per 90",
        "player": 0.91,
        "avg": 0.9,
        "elite": 2.2
      },
      {
        "metric": "Progressive Passes p90",
        "player": 7.5,
        "avg": 2.8,
        "elite": 6.2
      },
      {
        "metric": "Chances Created",
        "player": 69,
        "avg": 16,
        "elite": 55
      },
      {
        "metric": "Passing Accuracy %",
        "player": 91.2,
        "avg": 79.5,
        "elite": 87.0
      }
    ],
    "heatmap": [
      {
        "x": 50,
        "y": 64,
        "r": 42,
        "v": 0.9
      },
      {
        "x": 40,
        "y": 55,
        "r": 35,
        "v": 0.75
      },
      {
        "x": 60,
        "y": 55,
        "r": 35,
        "v": 0.75
      },
      {
        "x": 50,
        "y": 76,
        "r": 30,
        "v": 0.8
      }
    ],
    "strengths": [
      "Dribbling",
      "Passing"
    ],
    "weaknesses": [
      "Defending",
      "Pace"
    ]
  },
  {
    "id": "jacob-bruun-larsen",
    "name": "Jacob Bruun Larsen",
    "age": 27,
    "position": "MF",
    "role": "Box-to-Box Midfielder",
    "club": "Burnley",
    "league": "Premier League",
    "nation": "Spain",
    "value": 31200000,
    "rating": 75,
    "general": {
      "apps": 10,
      "mins": 1014,
      "goals": 0,
      "assists": 1,
      "yellowCards": 0,
      "redCards": 0
    },
    "attributes": {
      "pace": 67,
      "dribbling": 69,
      "passing": 74,
      "defending": 58,
      "physicality": 63,
      "tactical": 76,
      "workrate": 74
    },
    "detailedStats": {
      "goalsPer90": 0.0,
      "shotsOnTargetPer90": 0.5,
      "expectedGoals": 1.4,
      "shotConversionRate": 10.0,
      "touchesInBoxPer90": 1.0,
      "chancesCreated": 26,
      "dribblesCompletedPer90": 1.1,
      "keyPassesPer90": 0.94,
      "passingAccuracy": 85.5,
      "progressivePassesPer90": 4.1,
      "tacklesWonPer90": 1.2,
      "interceptionsPer90": 0.6,
      "ballRecoveriesPer90": 4.3
    },
    "leagueBenchmarks": [
      {
        "metric": "Key Passes per 90",
        "player": 0.94,
        "avg": 0.9,
        "elite": 2.2
      },
      {
        "metric": "Progressive Passes p90",
        "player": 4.1,
        "avg": 2.8,
        "elite": 6.2
      },
      {
        "metric": "Chances Created",
        "player": 26,
        "avg": 16,
        "elite": 55
      },
      {
        "metric": "Passing Accuracy %",
        "player": 85.5,
        "avg": 79.5,
        "elite": 87.0
      }
    ],
    "heatmap": [
      {
        "x": 50,
        "y": 42,
        "r: ": 45,
        "v": 0.9
      },
      {
        "x": 44,
        "y": 35,
        "r": 38,
        "v": 0.8
      },
      {
        "x": 56,
        "y": 35,
        "r": 38,
        "v": 0.8
      },
      {
        "x": 50,
        "y": 55,
        "r": 35,
        "v": 0.75
      }
    ],
    "strengths": [
      "Passing",
      "Tactical awareness"
    ],
    "weaknesses": [
      "Defending",
      "Physicality"
    ]
  },
  {
    "id": "josh-cullen",
    "name": "Josh Cullen",
    "age": 30,
    "position": "MF",
    "role": "Box-to-Box Midfielder",
    "club": "Burnley",
    "league": "Premier League",
    "nation": "France",
    "value": 29400000,
    "rating": 80,
    "general": {
      "apps": 18,
      "mins": 1513,
      "goals": 2,
      "assists": 2,
      "yellowCards": 2,
      "redCards": 0
    },
    "attributes": {
      "pace": 64,
      "dribbling": 67,
      "passing": 74,
      "defending": 72,
      "physicality": 77,
      "tactical": 81,
      "workrate": 81
    },
    "detailedStats": {
      "goalsPer90": 0.12,
      "shotsOnTargetPer90": 0.7,
      "expectedGoals": 0.9,
      "shotConversionRate": 12.4,
      "touchesInBoxPer90": 0.8,
      "chancesCreated": 27,
      "dribblesCompletedPer90": 1.1,
      "keyPassesPer90": 0.65,
      "passingAccuracy": 85.6,
      "progressivePassesPer90": 4.2,
      "tacklesWonPer90": 1.9,
      "interceptionsPer90": 0.7,
      "ballRecoveriesPer90": 5.8
    },
    "leagueBenchmarks": [
      {
        "metric": "Key Passes per 90",
        "player": 0.65,
        "avg": 0.9,
        "elite": 2.2
      },
      {
        "metric": "Progressive Passes p90",
        "player": 4.2,
        "avg": 2.8,
        "elite": 6.2
      },
      {
        "metric": "Chances Created",
        "player": 27,
        "avg": 16,
        "elite": 55
      },
      {
        "metric": "Passing Accuracy %",
        "player": 85.6,
        "avg": 79.5,
        "elite": 87.0
      }
    ],
    "heatmap": [
      {
        "x": 50,
        "y": 42,
        "r: ": 45,
        "v": 0.9
      },
      {
        "x": 44,
        "y": 35,
        "r": 38,
        "v": 0.8
      },
      {
        "x": 56,
        "y": 35,
        "r": 38,
        "v": 0.8
      },
      {
        "x": 50,
        "y": 55,
        "r": 35,
        "v": 0.75
      }
    ],
    "strengths": [
      "Workrate",
      "Tactical awareness"
    ],
    "weaknesses": [
      "Dribbling",
      "Pace"
    ]
  },
  {
    "id": "marcus-edwards",
    "name": "Marcus Edwards",
    "age": 31,
    "position": "MF",
    "role": "Box-to-Box Midfielder",
    "club": "Burnley",
    "league": "Premier League",
    "nation": "Spain",
    "value": 28200000,
    "rating": 77,
    "general": {
      "apps": 11,
      "mins": 1058,
      "goals": 1,
      "assists": 3,
      "yellowCards": 0,
      "redCards": 0
    },
    "attributes": {
      "pace": 71,
      "dribbling": 75,
      "passing": 78,
      "defending": 62,
      "physicality": 67,
      "tactical": 82,
      "workrate": 75
    },
    "detailedStats": {
      "goalsPer90": 0.09,
      "shotsOnTargetPer90": 0.6,
      "expectedGoals": 1.5,
      "shotConversionRate": 11.2,
      "touchesInBoxPer90": 1.3,
      "chancesCreated": 35,
      "dribblesCompletedPer90": 1.3,
      "keyPassesPer90": 1.21,
      "passingAccuracy": 86.7,
      "progressivePassesPer90": 4.8,
      "tacklesWonPer90": 1.4,
      "interceptionsPer90": 0.7,
      "ballRecoveriesPer90": 4.7
    },
    "leagueBenchmarks": [
      {
        "metric": "Key Passes per 90",
        "player": 1.21,
        "avg": 0.9,
        "elite": 2.2
      },
      {
        "metric": "Progressive Passes p90",
        "player": 4.8,
        "avg": 2.8,
        "elite": 6.2
      },
      {
        "metric": "Chances Created",
        "player": 35,
        "avg": 16,
        "elite": 55
      },
      {
        "metric": "Passing Accuracy %",
        "player": 86.7,
        "avg": 79.5,
        "elite": 87.0
      }
    ],
    "heatmap": [
      {
        "x": 50,
        "y": 42,
        "r: ": 45,
        "v": 0.9
      },
      {
        "x": 44,
        "y": 35,
        "r": 38,
        "v": 0.8
      },
      {
        "x": 56,
        "y": 35,
        "r": 38,
        "v": 0.8
      },
      {
        "x": 50,
        "y": 55,
        "r": 35,
        "v": 0.75
      }
    ],
    "strengths": [
      "Passing",
      "Tactical awareness"
    ],
    "weaknesses": [
      "Defending",
      "Physicality"
    ]
  },
  {
    "id": "hannibal-mejbri",
    "name": "Hannibal Mejbri",
    "age": 32,
    "position": "MF",
    "role": "Box-to-Box Midfielder",
    "club": "Burnley",
    "league": "Premier League",
    "nation": "England",
    "value": 28200000,
    "rating": 78,
    "general": {
      "apps": 15,
      "mins": 1219,
      "goals": 1,
      "assists": 5,
      "yellowCards": 10,
      "redCards": 0
    },
    "attributes": {
      "pace": 66,
      "dribbling": 73,
      "passing": 82,
      "defending": 66,
      "physicality": 71,
      "tactical": 82,
      "workrate": 77
    },
    "detailedStats": {
      "goalsPer90": 0.07,
      "shotsOnTargetPer90": 0.6,
      "expectedGoals": 0.9,
      "shotConversionRate": 11.2,
      "touchesInBoxPer90": 0.9,
      "chancesCreated": 41,
      "dribblesCompletedPer90": 1.5,
      "keyPassesPer90": 1.22,
      "passingAccuracy": 87.5,
      "progressivePassesPer90": 5.3,
      "tacklesWonPer90": 1.6,
      "interceptionsPer90": 0.7,
      "ballRecoveriesPer90": 5.2
    },
    "leagueBenchmarks": [
      {
        "metric": "Key Passes per 90",
        "player": 1.22,
        "avg": 0.9,
        "elite": 2.2
      },
      {
        "metric": "Progressive Passes p90",
        "player": 5.3,
        "avg": 2.8,
        "elite": 6.2
      },
      {
        "metric": "Chances Created",
        "player": 41,
        "avg": 16,
        "elite": 55
      },
      {
        "metric": "Passing Accuracy %",
        "player": 87.5,
        "avg": 79.5,
        "elite": 87.0
      }
    ],
    "heatmap": [
      {
        "x": 50,
        "y": 42,
        "r: ": 45,
        "v": 0.9
      },
      {
        "x": 44,
        "y": 35,
        "r": 38,
        "v": 0.8
      },
      {
        "x": 56,
        "y": 35,
        "r": 38,
        "v": 0.8
      },
      {
        "x": 50,
        "y": 55,
        "r": 35,
        "v": 0.75
      }
    ],
    "strengths": [
      "Passing",
      "Tactical awareness"
    ],
    "weaknesses": [
      "Defending",
      "Pace"
    ]
  },
  {
    "id": "josh-laurent",
    "name": "Josh Laurent",
    "age": 34,
    "position": "MF",
    "role": "Box-to-Box Midfielder",
    "club": "Burnley",
    "league": "Premier League",
    "nation": "Spain",
    "value": 28800000,
    "rating": 78,
    "general": {
      "apps": 18,
      "mins": 1752,
      "goals": 1,
      "assists": 0,
      "yellowCards": 6,
      "redCards": 1
    },
    "attributes": {
      "pace": 65,
      "dribbling": 66,
      "passing": 72,
      "defending": 69,
      "physicality": 74,
      "tactical": 79,
      "workrate": 85
    },
    "detailedStats": {
      "goalsPer90": 0.05,
      "shotsOnTargetPer90": 0.6,
      "expectedGoals": 0.9,
      "shotConversionRate": 11.2,
      "touchesInBoxPer90": 0.9,
      "chancesCreated": 23,
      "dribblesCompletedPer90": 1.0,
      "keyPassesPer90": 0.48,
      "passingAccuracy": 85.1,
      "progressivePassesPer90": 3.9,
      "tacklesWonPer90": 1.8,
      "interceptionsPer90": 0.6,
      "ballRecoveriesPer90": 5.5
    },
    "leagueBenchmarks": [
      {
        "metric": "Key Passes per 90",
        "player": 0.48,
        "avg": 0.9,
        "elite": 2.2
      },
      {
        "metric": "Progressive Passes p90",
        "player": 3.9,
        "avg": 2.8,
        "elite": 6.2
      },
      {
        "metric": "Chances Created",
        "player": 23,
        "avg": 16,
        "elite": 55
      },
      {
        "metric": "Passing Accuracy %",
        "player": 85.1,
        "avg": 79.5,
        "elite": 87.0
      }
    ],
    "heatmap": [
      {
        "x": 50,
        "y": 42,
        "r: ": 45,
        "v": 0.9
      },
      {
        "x": 44,
        "y": 35,
        "r": 38,
        "v": 0.8
      },
      {
        "x": 56,
        "y": 35,
        "r": 38,
        "v": 0.8
      },
      {
        "x": 50,
        "y": 55,
        "r": 35,
        "v": 0.75
      }
    ],
    "strengths": [
      "Workrate",
      "Tactical awareness"
    ],
    "weaknesses": [
      "Dribbling",
      "Pace"
    ]
  },
  {
    "id": "loum-tchaouna",
    "name": "Loum Tchaouna",
    "age": 20,
    "position": "MF",
    "role": "Box-to-Box Midfielder",
    "club": "Burnley",
    "league": "Premier League",
    "nation": "England",
    "value": 28800000,
    "rating": 78,
    "general": {
      "apps": 14,
      "mins": 1259,
      "goals": 2,
      "assists": 2,
      "yellowCards": 2,
      "redCards": 0
    },
    "attributes": {
      "pace": 68,
      "dribbling": 71,
      "passing": 75,
      "defending": 62,
      "physicality": 67,
      "tactical": 79,
      "workrate": 77
    },
    "detailedStats": {
      "goalsPer90": 0.14,
      "shotsOnTargetPer90": 0.7,
      "expectedGoals": 1.3,
      "shotConversionRate": 12.4,
      "touchesInBoxPer90": 1.1,
      "chancesCreated": 28,
      "dribblesCompletedPer90": 1.2,
      "keyPassesPer90": 0.83,
      "passingAccuracy": 85.9,
      "progressivePassesPer90": 4.3,
      "tacklesWonPer90": 1.4,
      "interceptionsPer90": 0.6,
      "ballRecoveriesPer90": 4.7
    },
    "leagueBenchmarks": [
      {
        "metric": "Key Passes per 90",
        "player": 0.83,
        "avg": 0.9,
        "elite": 2.2
      },
      {
        "metric": "Progressive Passes p90",
        "player": 4.3,
        "avg": 2.8,
        "elite": 6.2
      },
      {
        "metric": "Chances Created",
        "player": 28,
        "avg": 16,
        "elite": 55
      },
      {
        "metric": "Passing Accuracy %",
        "player": 85.9,
        "avg": 79.5,
        "elite": 87.0
      }
    ],
    "heatmap": [
      {
        "x": 50,
        "y": 42,
        "r: ": 45,
        "v": 0.9
      },
      {
        "x": 44,
        "y": 35,
        "r": 38,
        "v": 0.8
      },
      {
        "x": 56,
        "y": 35,
        "r": 38,
        "v": 0.8
      },
      {
        "x": 50,
        "y": 55,
        "r": 35,
        "v": 0.75
      }
    ],
    "strengths": [
      "Workrate",
      "Tactical awareness"
    ],
    "weaknesses": [
      "Defending",
      "Physicality"
    ]
  },
  {
    "id": "zian-flemming",
    "name": "Zian Flemming",
    "age": 25,
    "position": "FW",
    "role": "Complete Winger / Striker",
    "club": "Burnley",
    "league": "Premier League",
    "nation": "France",
    "value": 31800000,
    "rating": 84,
    "general": {
      "apps": 21,
      "mins": 1764,
      "goals": 11,
      "assists": 0,
      "yellowCards": 5,
      "redCards": 0
    },
    "attributes": {
      "pace": 98,
      "dribbling": 82,
      "passing": 70,
      "defending": 36,
      "physicality": 86,
      "tactical": 93,
      "workrate": 85
    },
    "detailedStats": {
      "goalsPer90": 0.56,
      "shotsOnTargetPer90": 1.3,
      "expectedGoals": 7.9,
      "shotConversionRate": 23.2,
      "touchesInBoxPer90": 4.7,
      "chancesCreated": 19,
      "dribblesCompletedPer90": 0.9,
      "keyPassesPer90": 0.41
    },
    "leagueBenchmarks": [
      {
        "metric": "Goals per 90",
        "player": 0.56,
        "avg": 0.22,
        "elite": 0.65
      },
      {
        "metric": "Shot Conversion %",
        "player": 23.2,
        "avg": 10.5,
        "elite": 18.0
      },
      {
        "metric": "Touches in Box p90",
        "player": 4.7,
        "avg": 2.5,
        "elite": 5.5
      },
      {
        "metric": "Expected Goals (xG)",
        "player": 7.9,
        "avg": 4.5,
        "elite": 14.0
      }
    ],
    "heatmap": [
      {
        "x": 50,
        "y": 84,
        "r": 38,
        "v": 0.9
      },
      {
        "x": 48,
        "y": 76,
        "r": 32,
        "v": 0.75
      },
      {
        "x": 52,
        "y": 80,
        "r": 32,
        "v": 0.8
      },
      {
        "x": 50,
        "y": 92,
        "r": 28,
        "v": 0.85
      }
    ],
    "strengths": [
      "Clinical Finishing",
      "Tactical awareness",
      "Pace"
    ],
    "weaknesses": [
      "Defending",
      "Defensive Tracking Back"
    ]
  },
  {
    "id": "lyle-foster",
    "name": "Lyle Foster",
    "age": 27,
    "position": "FW",
    "role": "Complete Winger / Striker",
    "club": "Burnley",
    "league": "Premier League",
    "nation": "Brazil",
    "value": 29400000,
    "rating": 78,
    "general": {
      "apps": 15,
      "mins": 1361,
      "goals": 3,
      "assists": 2,
      "yellowCards": 4,
      "redCards": 0
    },
    "attributes": {
      "pace": 84,
      "dribbling": 71,
      "passing": 69,
      "defending": 30,
      "physicality": 69,
      "tactical": 80,
      "workrate": 79
    },
    "detailedStats": {
      "goalsPer90": 0.2,
      "shotsOnTargetPer90": 0.8,
      "expectedGoals": 3.2,
      "shotConversionRate": 13.6,
      "touchesInBoxPer90": 3.3,
      "chancesCreated": 18,
      "dribblesCompletedPer90": 0.9,
      "keyPassesPer90": 0.49
    },
    "leagueBenchmarks": [
      {
        "metric": "Goals per 90",
        "player": 0.2,
        "avg": 0.22,
        "elite": 0.65
      },
      {
        "metric": "Shot Conversion %",
        "player": 13.6,
        "avg": 10.5,
        "elite": 18.0
      },
      {
        "metric": "Touches in Box p90",
        "player": 3.3,
        "avg": 2.5,
        "elite": 5.5
      },
      {
        "metric": "Expected Goals (xG)",
        "player": 3.2,
        "avg": 4.5,
        "elite": 14.0
      }
    ],
    "heatmap": [
      {
        "x": 50,
        "y": 84,
        "r": 38,
        "v": 0.9
      },
      {
        "x": 48,
        "y": 76,
        "r": 32,
        "v": 0.75
      },
      {
        "x": 52,
        "y": 80,
        "r": 32,
        "v": 0.8
      },
      {
        "x": 50,
        "y": 92,
        "r": 28,
        "v": 0.85
      }
    ],
    "strengths": [
      "Tactical awareness",
      "Pace"
    ],
    "weaknesses": [
      "Defending",
      "Defensive Tracking Back"
    ]
  },
  {
    "id": "martin-d\u00fabravka",
    "name": "Martin D\u00fabravka",
    "age": 25,
    "position": "GK",
    "role": "Sweeper Keeper",
    "club": "Burnley",
    "league": "Premier League",
    "nation": "France",
    "value": 24000000,
    "rating": 83,
    "general": {
      "apps": 35,
      "mins": 3150,
      "goals": 0,
      "assists": 0,
      "yellowCards": 1,
      "redCards": 0
    },
    "attributes": {
      "pace": 60,
      "dribbling": 55,
      "passing": 90,
      "defending": 93,
      "physicality": 94,
      "tactical": 89,
      "workrate": 96
    },
    "detailedStats": {
      "savePercentage": 81.0,
      "cleanSheets": 4,
      "goalsConceded": 71,
      "psxgDifference": 1.6,
      "passingAccuracy": 90.0,
      "sweeperActionsPer90": 1.4,
      "averageDistanceOfSweeperActions": 14.0
    },
    "leagueBenchmarks": [
      {
        "metric": "Save %",
        "player": 81.0,
        "avg": 69.5,
        "elite": 77.0
      },
      {
        "metric": "Clean Sheets",
        "player": 4,
        "avg": 4.5,
        "elite": 10.0
      },
      {
        "metric": "Sweeper Actions p90",
        "player": 1.4,
        "avg": 0.6,
        "elite": 1.2
      },
      {
        "metric": "Passing Accuracy %",
        "player": 90.0,
        "avg": 73.0,
        "elite": 82.0
      }
    ],
    "heatmap": [
      {
        "x": 50,
        "y": 6,
        "r": 35,
        "v": 0.98
      },
      {
        "x": 50,
        "y": 14,
        "r": 28,
        "v": 0.7
      },
      {
        "x": 45,
        "y": 8,
        "r": 22,
        "v": 0.55
      },
      {
        "x": 55,
        "y": 8,
        "r": 22,
        "v": 0.55
      }
    ],
    "strengths": [
      "Reflexes",
      "Workrate",
      "Physicality"
    ],
    "weaknesses": [
      "Dribbling",
      "Pace"
    ]
  },
  {
    "id": "james-ward-prowse",
    "name": "James Ward-Prowse",
    "age": 34,
    "position": "MF",
    "role": "Attacking Playmaker",
    "club": "Burnley",
    "league": "Premier League",
    "nation": "Spain",
    "value": 33600000,
    "rating": 75,
    "general": {
      "apps": 12,
      "mins": 1092,
      "goals": 0,
      "assists": 1,
      "yellowCards": 1,
      "redCards": 0
    },
    "attributes": {
      "pace": 61,
      "dribbling": 71,
      "passing": 85,
      "defending": 64,
      "physicality": 69,
      "tactical": 80,
      "workrate": 75
    },
    "detailedStats": {
      "goalsPer90": 0.0,
      "shotsOnTargetPer90": 0.5,
      "expectedGoals": 0.2,
      "shotConversionRate": 10.0,
      "touchesInBoxPer90": 0.6,
      "chancesCreated": 48,
      "dribblesCompletedPer90": 1.7,
      "keyPassesPer90": 1.58,
      "passingAccuracy": 88.4,
      "progressivePassesPer90": 5.8,
      "tacklesWonPer90": 1.5,
      "interceptionsPer90": 0.7,
      "ballRecoveriesPer90": 4.9
    },
    "leagueBenchmarks": [
      {
        "metric": "Key Passes per 90",
        "player": 1.58,
        "avg": 0.9,
        "elite": 2.2
      },
      {
        "metric": "Progressive Passes p90",
        "player": 5.8,
        "avg": 2.8,
        "elite": 6.2
      },
      {
        "metric": "Chances Created",
        "player": 48,
        "avg": 16,
        "elite": 55
      },
      {
        "metric": "Passing Accuracy %",
        "player": 88.4,
        "avg": 79.5,
        "elite": 87.0
      }
    ],
    "heatmap": [
      {
        "x": 50,
        "y": 64,
        "r": 42,
        "v": 0.9
      },
      {
        "x": 40,
        "y": 55,
        "r": 35,
        "v": 0.75
      },
      {
        "x": 60,
        "y": 55,
        "r": 35,
        "v": 0.75
      },
      {
        "x": 50,
        "y": 76,
        "r": 30,
        "v": 0.8
      }
    ],
    "strengths": [
      "Passing",
      "Tactical awareness"
    ],
    "weaknesses": [
      "Defending",
      "Pace"
    ]
  },
  {
    "id": "lesley-ugochukwu",
    "name": "Lesley Ugochukwu",
    "age": 21,
    "position": "MF",
    "role": "Box-to-Box Midfielder",
    "club": "Burnley",
    "league": "Premier League",
    "nation": "Spain",
    "value": 30000000,
    "rating": 83,
    "general": {
      "apps": 27,
      "mins": 2330,
      "goals": 3,
      "assists": 3,
      "yellowCards": 1,
      "redCards": 1
    },
    "attributes": {
      "pace": 70,
      "dribbling": 70,
      "passing": 72,
      "defending": 77,
      "physicality": 82,
      "tactical": 85,
      "workrate": 93
    },
    "detailedStats": {
      "goalsPer90": 0.12,
      "shotsOnTargetPer90": 0.7,
      "expectedGoals": 2.5,
      "shotConversionRate": 13.6,
      "touchesInBoxPer90": 1.2,
      "chancesCreated": 22,
      "dribblesCompletedPer90": 1.0,
      "keyPassesPer90": 0.35,
      "passingAccuracy": 85.0,
      "progressivePassesPer90": 3.8,
      "tacklesWonPer90": 2.2,
      "interceptionsPer90": 0.7,
      "ballRecoveriesPer90": 6.2
    },
    "leagueBenchmarks": [
      {
        "metric": "Key Passes per 90",
        "player": 0.35,
        "avg": 0.9,
        "elite": 2.2
      },
      {
        "metric": "Progressive Passes p90",
        "player": 3.8,
        "avg": 2.8,
        "elite": 6.2
      },
      {
        "metric": "Chances Created",
        "player": 22,
        "avg": 16,
        "elite": 55
      },
      {
        "metric": "Passing Accuracy %",
        "player": 85.0,
        "avg": 79.5,
        "elite": 87.0
      }
    ],
    "heatmap": [
      {
        "x": 50,
        "y": 42,
        "r: ": 45,
        "v": 0.9
      },
      {
        "x": 44,
        "y": 35,
        "r": 38,
        "v": 0.8
      },
      {
        "x": 56,
        "y": 35,
        "r": 38,
        "v": 0.8
      },
      {
        "x": 50,
        "y": 55,
        "r": 35,
        "v": 0.75
      }
    ],
    "strengths": [
      "Workrate",
      "Tactical awareness"
    ],
    "weaknesses": [
      "Dribbling",
      "Pace"
    ]
  },
  {
    "id": "armando-broja",
    "name": "Armando Broja",
    "age": 25,
    "position": "FW",
    "role": "Complete Winger / Striker",
    "club": "Burnley",
    "league": "Premier League",
    "nation": "France",
    "value": 31200000,
    "rating": 76,
    "general": {
      "apps": 8,
      "mins": 843,
      "goals": 1,
      "assists": 1,
      "yellowCards": 0,
      "redCards": 0
    },
    "attributes": {
      "pace": 81,
      "dribbling": 66,
      "passing": 65,
      "defending": 27,
      "physicality": 61,
      "tactical": 74,
      "workrate": 72
    },
    "detailedStats": {
      "goalsPer90": 0.11,
      "shotsOnTargetPer90": 0.7,
      "expectedGoals": 2.1,
      "shotConversionRate": 11.2,
      "touchesInBoxPer90": 3.0,
      "chancesCreated": 9,
      "dribblesCompletedPer90": 0.7,
      "keyPassesPer90": 0.42
    },
    "leagueBenchmarks": [
      {
        "metric": "Goals per 90",
        "player": 0.11,
        "avg": 0.22,
        "elite": 0.65
      },
      {
        "metric": "Shot Conversion %",
        "player": 11.2,
        "avg": 10.5,
        "elite": 18.0
      },
      {
        "metric": "Touches in Box p90",
        "player": 3.0,
        "avg": 2.5,
        "elite": 5.5
      },
      {
        "metric": "Expected Goals (xG)",
        "player": 2.1,
        "avg": 4.5,
        "elite": 14.0
      }
    ],
    "heatmap": [
      {
        "x": 50,
        "y": 84,
        "r": 38,
        "v": 0.9
      },
      {
        "x": 48,
        "y": 76,
        "r": 32,
        "v": 0.75
      },
      {
        "x": 52,
        "y": 80,
        "r": 32,
        "v": 0.8
      },
      {
        "x": 50,
        "y": 92,
        "r": 28,
        "v": 0.85
      }
    ],
    "strengths": [
      "Tactical awareness",
      "Pace"
    ],
    "weaknesses": [
      "Defending",
      "Defensive Tracking Back"
    ]
  },
  {
    "id": "florentino-ibrain-morris-lu\u00eds",
    "name": "Florentino Ibrain Morris Lu\u00eds",
    "age": 22,
    "position": "MF",
    "role": "Box-to-Box Midfielder",
    "club": "Burnley",
    "league": "Premier League",
    "nation": "Spain",
    "value": 30000000,
    "rating": 82,
    "general": {
      "apps": 25,
      "mins": 2100,
      "goals": 0,
      "assists": 2,
      "yellowCards": 6,
      "redCards": 0
    },
    "attributes": {
      "pace": 62,
      "dribbling": 66,
      "passing": 75,
      "defending": 78,
      "physicality": 83,
      "tactical": 82,
      "workrate": 90
    },
    "detailedStats": {
      "goalsPer90": 0.0,
      "shotsOnTargetPer90": 0.5,
      "expectedGoals": 0.6,
      "shotConversionRate": 10.0,
      "touchesInBoxPer90": 0.7,
      "chancesCreated": 29,
      "dribblesCompletedPer90": 1.2,
      "keyPassesPer90": 0.5,
      "passingAccuracy": 85.9,
      "progressivePassesPer90": 4.3,
      "tacklesWonPer90": 2.2,
      "interceptionsPer90": 0.7,
      "ballRecoveriesPer90": 6.3
    },
    "leagueBenchmarks": [
      {
        "metric": "Key Passes per 90",
        "player": 0.5,
        "avg": 0.9,
        "elite": 2.2
      },
      {
        "metric": "Progressive Passes p90",
        "player": 4.3,
        "avg": 2.8,
        "elite": 6.2
      },
      {
        "metric": "Chances Created",
        "player": 29,
        "avg": 16,
        "elite": 55
      },
      {
        "metric": "Passing Accuracy %",
        "player": 85.9,
        "avg": 79.5,
        "elite": 87.0
      }
    ],
    "heatmap": [
      {
        "x": 50,
        "y": 42,
        "r: ": 45,
        "v": 0.9
      },
      {
        "x": 44,
        "y": 35,
        "r": 38,
        "v": 0.8
      },
      {
        "x": 56,
        "y": 35,
        "r": 38,
        "v": 0.8
      },
      {
        "x": 50,
        "y": 55,
        "r": 35,
        "v": 0.75
      }
    ],
    "strengths": [
      "Workrate",
      "Physicality"
    ],
    "weaknesses": [
      "Dribbling",
      "Pace"
    ]
  },
  {
    "id": "\u0111or\u0111e-petrovi\u0107",
    "name": "\u0110or\u0111e Petrovi\u0107",
    "age": 27,
    "position": "GK",
    "role": "Sweeper Keeper",
    "club": "Bournemouth",
    "league": "Premier League",
    "nation": "Spain",
    "value": 27600000,
    "rating": 87,
    "general": {
      "apps": 38,
      "mins": 3420,
      "goals": 0,
      "assists": 0,
      "yellowCards": 3,
      "redCards": 0
    },
    "attributes": {
      "pace": 60,
      "dribbling": 55,
      "passing": 90,
      "defending": 93,
      "physicality": 94,
      "tactical": 85,
      "workrate": 96
    },
    "detailedStats": {
      "savePercentage": 81.0,
      "cleanSheets": 11,
      "goalsConceded": 54,
      "psxgDifference": 4.4,
      "passingAccuracy": 90.0,
      "sweeperActionsPer90": 1.2,
      "averageDistanceOfSweeperActions": 13.6
    },
    "leagueBenchmarks": [
      {
        "metric": "Save %",
        "player": 81.0,
        "avg": 69.5,
        "elite": 77.0
      },
      {
        "metric": "Clean Sheets",
        "player": 11,
        "avg": 4.5,
        "elite": 10.0
      },
      {
        "metric": "Sweeper Actions p90",
        "player": 1.2,
        "avg": 0.6,
        "elite": 1.2
      },
      {
        "metric": "Passing Accuracy %",
        "player": 90.0,
        "avg": 73.0,
        "elite": 82.0
      }
    ],
    "heatmap": [
      {
        "x": 50,
        "y": 6,
        "r": 35,
        "v": 0.98
      },
      {
        "x": 50,
        "y": 14,
        "r": 28,
        "v": 0.7
      },
      {
        "x": 45,
        "y": 8,
        "r": 22,
        "v": 0.55
      },
      {
        "x": 55,
        "y": 8,
        "r": 22,
        "v": 0.55
      }
    ],
    "strengths": [
      "Reflexes",
      "Workrate",
      "Physicality"
    ],
    "weaknesses": [
      "Dribbling",
      "Pace"
    ]
  },
  {
    "id": "marcos-senesi-bar\u00f3n",
    "name": "Marcos Senesi Bar\u00f3n",
    "age": 32,
    "position": "DF",
    "role": "Attacking Fullback",
    "club": "Bournemouth",
    "league": "Premier League",
    "nation": "England",
    "value": 31200000,
    "rating": 93,
    "general": {
      "apps": 37,
      "mins": 3288,
      "goals": 0,
      "assists": 6,
      "yellowCards": 8,
      "redCards": 0
    },
    "attributes": {
      "pace": 73,
      "dribbling": 77,
      "passing": 84,
      "defending": 94,
      "physicality": 94,
      "tactical": 95,
      "workrate": 96
    },
    "detailedStats": {
      "goalsPer90": 0.0,
      "shotsOnTargetPer90": 0.5,
      "expectedGoals": 1.5,
      "shotConversionRate": 10.0,
      "touchesInBoxPer90": 1.2,
      "chancesCreated": 45,
      "dribblesCompletedPer90": 1.6,
      "keyPassesPer90": 0.5,
      "tacklesWonPer90": 4.7,
      "interceptionsPer90": 1.4,
      "clearancesPer90": 7.1,
      "aerialDuelWinPercentage": 80.0,
      "tackledDribblerRate": 66.9,
      "progressivePassesPer90": 3.3,
      "longPassesCompletedPer90": 2.2,
      "passingAccuracy": 87.4
    },
    "leagueBenchmarks": [
      {
        "metric": "Passing Accuracy %",
        "player": 87.4,
        "avg": 82.0,
        "elite": 89.0
      },
      {
        "metric": "Clearances per 90",
        "player": 7.1,
        "avg": 2.6,
        "elite": 4.0
      },
      {
        "metric": "Aerial Duel Win %",
        "player": 80.0,
        "avg": 54.5,
        "elite": 68.0
      },
      {
        "metric": "Tackles Won per 90",
        "player": 4.7,
        "avg": 1.1,
        "elite": 2.0
      }
    ],
    "heatmap": [
      {
        "x": 14,
        "y": 25,
        "r": 38,
        "v": 0.8
      },
      {
        "x": 14,
        "y": 45,
        "r": 40,
        "v": 0.85
      },
      {
        "x": 14,
        "y": 65,
        "r": 35,
        "v": 0.7
      },
      {
        "x": 14,
        "y": 12,
        "r": 30,
        "v": 0.6
      }
    ],
    "strengths": [
      "Workrate",
      "Tactical awareness",
      "Aerial Dominance"
    ],
    "weaknesses": [
      "Dribbling",
      "Pace"
    ]
  },
  {
    "id": "adam-smith",
    "name": "Adam Smith",
    "age": 33,
    "position": "DF",
    "role": "Central Defender",
    "club": "Bournemouth",
    "league": "Premier League",
    "nation": "Spain",
    "value": 26400000,
    "rating": 78,
    "general": {
      "apps": 14,
      "mins": 1073,
      "goals": 0,
      "assists": 2,
      "yellowCards": 3,
      "redCards": 0
    },
    "attributes": {
      "pace": 65,
      "dribbling": 58,
      "passing": 65,
      "defending": 82,
      "physicality": 66,
      "tactical": 71,
      "workrate": 75
    },
    "detailedStats": {
      "goalsPer90": 0.0,
      "shotsOnTargetPer90": 0.5,
      "expectedGoals": 0.0,
      "shotConversionRate": 10.0,
      "touchesInBoxPer90": 0.6,
      "chancesCreated": 9,
      "dribblesCompletedPer90": 0.7,
      "keyPassesPer90": 0.32,
      "tacklesWonPer90": 1.6,
      "interceptionsPer90": 0.9,
      "clearancesPer90": 2.4,
      "aerialDuelWinPercentage": 63.8,
      "tackledDribblerRate": 52.7,
      "progressivePassesPer90": 1.9,
      "longPassesCompletedPer90": 1.3,
      "passingAccuracy": 81.5
    },
    "leagueBenchmarks": [
      {
        "metric": "Passing Accuracy %",
        "player": 81.5,
        "avg": 82.0,
        "elite": 89.0
      },
      {
        "metric": "Clearances per 90",
        "player": 2.4,
        "avg": 2.6,
        "elite": 4.0
      },
      {
        "metric": "Aerial Duel Win %",
        "player": 63.8,
        "avg": 54.5,
        "elite": 68.0
      },
      {
        "metric": "Tackles Won per 90",
        "player": 1.6,
        "avg": 1.1,
        "elite": 2.0
      }
    ],
    "heatmap": [
      {
        "x": 50,
        "y": 20,
        "r": 45,
        "v": 0.9
      },
      {
        "x": 42,
        "y": 18,
        "r": 32,
        "v": 0.8
      },
      {
        "x": 58,
        "y": 18,
        "r": 32,
        "v": 0.8
      },
      {
        "x": 50,
        "y": 10,
        "r": 28,
        "v": 0.6
      }
    ],
    "strengths": [
      "Defending",
      "Workrate"
    ],
    "weaknesses": [
      "Dribbling",
      "Passing"
    ]
  },
  {
    "id": "adrien-truffert",
    "name": "Adrien Truffert",
    "age": 34,
    "position": "DF",
    "role": "Attacking Fullback",
    "club": "Bournemouth",
    "league": "Premier League",
    "nation": "Spain",
    "value": 28800000,
    "rating": 93,
    "general": {
      "apps": 38,
      "mins": 3378,
      "goals": 1,
      "assists": 6,
      "yellowCards": 5,
      "redCards": 0
    },
    "attributes": {
      "pace": 72,
      "dribbling": 85,
      "passing": 97,
      "defending": 94,
      "physicality": 94,
      "tactical": 95,
      "workrate": 96
    },
    "detailedStats": {
      "goalsPer90": 0.03,
      "shotsOnTargetPer90": 0.5,
      "expectedGoals": 1.4,
      "shotConversionRate": 11.2,
      "touchesInBoxPer90": 1.1,
      "chancesCreated": 71,
      "dribblesCompletedPer90": 2.3,
      "keyPassesPer90": 0.76,
      "tacklesWonPer90": 3.9,
      "interceptionsPer90": 1.3,
      "clearancesPer90": 5.8,
      "aerialDuelWinPercentage": 80.0,
      "tackledDribblerRate": 66.3,
      "progressivePassesPer90": 4.4,
      "longPassesCompletedPer90": 2.9,
      "passingAccuracy": 91.5
    },
    "leagueBenchmarks": [
      {
        "metric": "Passing Accuracy %",
        "player": 91.5,
        "avg": 82.0,
        "elite": 89.0
      },
      {
        "metric": "Clearances per 90",
        "player": 5.8,
        "avg": 2.6,
        "elite": 4.0
      },
      {
        "metric": "Aerial Duel Win %",
        "player": 80.0,
        "avg": 54.5,
        "elite": 68.0
      },
      {
        "metric": "Tackles Won per 90",
        "player": 3.9,
        "avg": 1.1,
        "elite": 2.0
      }
    ],
    "heatmap": [
      {
        "x": 14,
        "y": 25,
        "r": 38,
        "v": 0.8
      },
      {
        "x": 14,
        "y": 45,
        "r": 40,
        "v": 0.85
      },
      {
        "x": 14,
        "y": 65,
        "r": 35,
        "v": 0.7
      },
      {
        "x": 14,
        "y": 12,
        "r": 30,
        "v": 0.6
      }
    ],
    "strengths": [
      "Passing",
      "Workrate",
      "Aerial Dominance"
    ],
    "weaknesses": [
      "Dribbling",
      "Pace"
    ]
  },
  {
    "id": "james-hill",
    "name": "James Hill",
    "age": 22,
    "position": "DF",
    "role": "Attacking Fullback",
    "club": "Bournemouth",
    "league": "Premier League",
    "nation": "Brazil",
    "value": 25200000,
    "rating": 85,
    "general": {
      "apps": 22,
      "mins": 2102,
      "goals": 0,
      "assists": 3,
      "yellowCards": 5,
      "redCards": 0
    },
    "attributes": {
      "pace": 69,
      "dribbling": 66,
      "passing": 70,
      "defending": 94,
      "physicality": 93,
      "tactical": 86,
      "workrate": 90
    },
    "detailedStats": {
      "goalsPer90": 0.0,
      "shotsOnTargetPer90": 0.5,
      "expectedGoals": 0.9,
      "shotConversionRate": 10.0,
      "touchesInBoxPer90": 0.9,
      "chancesCreated": 20,
      "dribblesCompletedPer90": 0.9,
      "keyPassesPer90": 0.35,
      "tacklesWonPer90": 2.9,
      "interceptionsPer90": 1.1,
      "clearancesPer90": 4.4,
      "aerialDuelWinPercentage": 80.0,
      "tackledDribblerRate": 58.6,
      "progressivePassesPer90": 2.3,
      "longPassesCompletedPer90": 1.5,
      "passingAccuracy": 83.2
    },
    "leagueBenchmarks": [
      {
        "metric": "Passing Accuracy %",
        "player": 83.2,
        "avg": 82.0,
        "elite": 89.0
      },
      {
        "metric": "Clearances per 90",
        "player": 4.4,
        "avg": 2.6,
        "elite": 4.0
      },
      {
        "metric": "Aerial Duel Win %",
        "player": 80.0,
        "avg": 54.5,
        "elite": 68.0
      },
      {
        "metric": "Tackles Won per 90",
        "player": 2.9,
        "avg": 1.1,
        "elite": 2.0
      }
    ],
    "heatmap": [
      {
        "x": 86,
        "y": 25,
        "r": 38,
        "v": 0.8
      },
      {
        "x": 86,
        "y": 45,
        "r": 40,
        "v": 0.85
      },
      {
        "x": 86,
        "y": 65,
        "r": 35,
        "v": 0.7
      },
      {
        "x": 86,
        "y": 12,
        "r": 30,
        "v": 0.6
      }
    ],
    "strengths": [
      "Defending",
      "Physicality",
      "Aerial Dominance"
    ],
    "weaknesses": [
      "Dribbling",
      "Pace"
    ]
  },
  {
    "id": "justin-kluivert",
    "name": "Justin Kluivert",
    "age": 26,
    "position": "MF",
    "role": "Box-to-Box Midfielder",
    "club": "Bournemouth",
    "league": "Premier League",
    "nation": "England",
    "value": 41400000,
    "rating": 75,
    "general": {
      "apps": 10,
      "mins": 945,
      "goals": 2,
      "assists": 0,
      "yellowCards": 5,
      "redCards": 0
    },
    "attributes": {
      "pace": 66,
      "dribbling": 72,
      "passing": 80,
      "defending": 59,
      "physicality": 64,
      "tactical": 79,
      "workrate": 73
    },
    "detailedStats": {
      "goalsPer90": 0.19,
      "shotsOnTargetPer90": 0.8,
      "expectedGoals": 2.3,
      "shotConversionRate": 12.4,
      "touchesInBoxPer90": 0.9,
      "chancesCreated": 38,
      "dribblesCompletedPer90": 1.4,
      "keyPassesPer90": 1.45,
      "passingAccuracy": 87.1,
      "progressivePassesPer90": 5.1,
      "tacklesWonPer90": 1.3,
      "interceptionsPer90": 0.6,
      "ballRecoveriesPer90": 4.5
    },
    "leagueBenchmarks": [
      {
        "metric": "Key Passes per 90",
        "player": 1.45,
        "avg": 0.9,
        "elite": 2.2
      },
      {
        "metric": "Progressive Passes p90",
        "player": 5.1,
        "avg": 2.8,
        "elite": 6.2
      },
      {
        "metric": "Chances Created",
        "player": 38,
        "avg": 16,
        "elite": 55
      },
      {
        "metric": "Passing Accuracy %",
        "player": 87.1,
        "avg": 79.5,
        "elite": 87.0
      }
    ],
    "heatmap": [
      {
        "x": 50,
        "y": 42,
        "r: ": 45,
        "v": 0.9
      },
      {
        "x": 44,
        "y": 35,
        "r": 38,
        "v": 0.8
      },
      {
        "x": 56,
        "y": 35,
        "r": 38,
        "v": 0.8
      },
      {
        "x": 50,
        "y": 55,
        "r": 35,
        "v": 0.75
      }
    ],
    "strengths": [
      "Passing",
      "Tactical awareness"
    ],
    "weaknesses": [
      "Defending",
      "Physicality"
    ]
  },
  {
    "id": "marcus-tavernier",
    "name": "Marcus Tavernier",
    "age": 29,
    "position": "MF",
    "role": "Attacking Playmaker",
    "club": "Bournemouth",
    "league": "Premier League",
    "nation": "England",
    "value": 31800000,
    "rating": 89,
    "general": {
      "apps": 31,
      "mins": 2732,
      "goals": 7,
      "assists": 4,
      "yellowCards": 6,
      "redCards": 0
    },
    "attributes": {
      "pace": 90,
      "dribbling": 96,
      "passing": 97,
      "defending": 88,
      "physicality": 94,
      "tactical": 95,
      "workrate": 96
    },
    "detailedStats": {
      "goalsPer90": 0.23,
      "shotsOnTargetPer90": 0.8,
      "expectedGoals": 9.1,
      "shotConversionRate": 18.4,
      "touchesInBoxPer90": 2.5,
      "chancesCreated": 102,
      "dribblesCompletedPer90": 3.1,
      "keyPassesPer90": 1.35,
      "passingAccuracy": 94.0,
      "progressivePassesPer90": 10.2,
      "tacklesWonPer90": 3.0,
      "interceptionsPer90": 1.0,
      "ballRecoveriesPer90": 7.9
    },
    "leagueBenchmarks": [
      {
        "metric": "Key Passes per 90",
        "player": 1.35,
        "avg": 0.9,
        "elite": 2.2
      },
      {
        "metric": "Progressive Passes p90",
        "player": 10.2,
        "avg": 2.8,
        "elite": 6.2
      },
      {
        "metric": "Chances Created",
        "player": 102,
        "avg": 16,
        "elite": 55
      },
      {
        "metric": "Passing Accuracy %",
        "player": 94.0,
        "avg": 79.5,
        "elite": 87.0
      }
    ],
    "heatmap": [
      {
        "x": 50,
        "y": 64,
        "r": 42,
        "v": 0.9
      },
      {
        "x": 40,
        "y": 55,
        "r": 35,
        "v": 0.75
      },
      {
        "x": 60,
        "y": 55,
        "r": 35,
        "v": 0.75
      },
      {
        "x": 50,
        "y": 76,
        "r": 30,
        "v": 0.8
      }
    ],
    "strengths": [
      "Dribbling",
      "Passing"
    ],
    "weaknesses": [
      "Defending",
      "Pace"
    ]
  },
  {
    "id": "tyler-adams",
    "name": "Tyler Adams",
    "age": 30,
    "position": "MF",
    "role": "Box-to-Box Midfielder",
    "club": "Bournemouth",
    "league": "Premier League",
    "nation": "France",
    "value": 29400000,
    "rating": 81,
    "general": {
      "apps": 21,
      "mins": 1769,
      "goals": 2,
      "assists": 2,
      "yellowCards": 8,
      "redCards": 0
    },
    "attributes": {
      "pace": 65,
      "dribbling": 65,
      "passing": 70,
      "defending": 75,
      "physicality": 80,
      "tactical": 81,
      "workrate": 85
    },
    "detailedStats": {
      "goalsPer90": 0.1,
      "shotsOnTargetPer90": 0.7,
      "expectedGoals": 0.6,
      "shotConversionRate": 12.4,
      "touchesInBoxPer90": 0.9,
      "chancesCreated": 19,
      "dribblesCompletedPer90": 0.9,
      "keyPassesPer90": 0.4,
      "passingAccuracy": 84.6,
      "progressivePassesPer90": 3.6,
      "tacklesWonPer90": 2.1,
      "interceptionsPer90": 0.7,
      "ballRecoveriesPer90": 6.1
    },
    "leagueBenchmarks": [
      {
        "metric": "Key Passes per 90",
        "player": 0.4,
        "avg": 0.9,
        "elite": 2.2
      },
      {
        "metric": "Progressive Passes p90",
        "player": 3.6,
        "avg": 2.8,
        "elite": 6.2
      },
      {
        "metric": "Chances Created",
        "player": 19,
        "avg": 16,
        "elite": 55
      },
      {
        "metric": "Passing Accuracy %",
        "player": 84.6,
        "avg": 79.5,
        "elite": 87.0
      }
    ],
    "heatmap": [
      {
        "x": 50,
        "y": 42,
        "r: ": 45,
        "v": 0.9
      },
      {
        "x": 44,
        "y": 35,
        "r": 38,
        "v": 0.8
      },
      {
        "x": 56,
        "y": 35,
        "r": 38,
        "v": 0.8
      },
      {
        "x": 50,
        "y": 55,
        "r": 35,
        "v": 0.75
      }
    ],
    "strengths": [
      "Workrate",
      "Tactical awareness"
    ],
    "weaknesses": [
      "Dribbling",
      "Pace"
    ]
  },
  {
    "id": "david-brooks",
    "name": "David Brooks",
    "age": 31,
    "position": "MF",
    "role": "Attacking Playmaker",
    "club": "Bournemouth",
    "league": "Premier League",
    "nation": "Spain",
    "value": 30000000,
    "rating": 78,
    "general": {
      "apps": 13,
      "mins": 1188,
      "goals": 1,
      "assists": 3,
      "yellowCards": 7,
      "redCards": 0
    },
    "attributes": {
      "pace": 81,
      "dribbling": 87,
      "passing": 85,
      "defending": 65,
      "physicality": 70,
      "tactical": 91,
      "workrate": 76
    },
    "detailedStats": {
      "goalsPer90": 0.08,
      "shotsOnTargetPer90": 0.6,
      "expectedGoals": 5.8,
      "shotConversionRate": 11.2,
      "touchesInBoxPer90": 1.9,
      "chancesCreated": 48,
      "dribblesCompletedPer90": 1.7,
      "keyPassesPer90": 1.46,
      "passingAccuracy": 88.4,
      "progressivePassesPer90": 5.8,
      "tacklesWonPer90": 1.6,
      "interceptionsPer90": 0.8,
      "ballRecoveriesPer90": 5.1
    },
    "leagueBenchmarks": [
      {
        "metric": "Key Passes per 90",
        "player": 1.46,
        "avg": 0.9,
        "elite": 2.2
      },
      {
        "metric": "Progressive Passes p90",
        "player": 5.8,
        "avg": 2.8,
        "elite": 6.2
      },
      {
        "metric": "Chances Created",
        "player": 48,
        "avg": 16,
        "elite": 55
      },
      {
        "metric": "Passing Accuracy %",
        "player": 88.4,
        "avg": 79.5,
        "elite": 87.0
      }
    ],
    "heatmap": [
      {
        "x": 50,
        "y": 64,
        "r": 42,
        "v": 0.9
      },
      {
        "x": 40,
        "y": 55,
        "r": 35,
        "v": 0.75
      },
      {
        "x": 60,
        "y": 55,
        "r": 35,
        "v": 0.75
      },
      {
        "x": 50,
        "y": 76,
        "r": 30,
        "v": 0.8
      }
    ],
    "strengths": [
      "Dribbling",
      "Tactical awareness"
    ],
    "weaknesses": [
      "Defending",
      "Physicality"
    ]
  },
  {
    "id": "ryan-christie",
    "name": "Ryan Christie",
    "age": 32,
    "position": "MF",
    "role": "Box-to-Box Midfielder",
    "club": "Bournemouth",
    "league": "Premier League",
    "nation": "England",
    "value": 29400000,
    "rating": 76,
    "general": {
      "apps": 9,
      "mins": 978,
      "goals": 2,
      "assists": 1,
      "yellowCards": 3,
      "redCards": 1
    },
    "attributes": {
      "pace": 71,
      "dribbling": 71,
      "passing": 73,
      "defending": 65,
      "physicality": 70,
      "tactical": 81,
      "workrate": 73
    },
    "detailedStats": {
      "goalsPer90": 0.18,
      "shotsOnTargetPer90": 0.8,
      "expectedGoals": 1.8,
      "shotConversionRate": 12.4,
      "touchesInBoxPer90": 1.2,
      "chancesCreated": 24,
      "dribblesCompletedPer90": 1.1,
      "keyPassesPer90": 0.91,
      "passingAccuracy": 85.3,
      "progressivePassesPer90": 4.0,
      "tacklesWonPer90": 1.6,
      "interceptionsPer90": 0.7,
      "ballRecoveriesPer90": 5.0
    },
    "leagueBenchmarks": [
      {
        "metric": "Key Passes per 90",
        "player": 0.91,
        "avg": 0.9,
        "elite": 2.2
      },
      {
        "metric": "Progressive Passes p90",
        "player": 4.0,
        "avg": 2.8,
        "elite": 6.2
      },
      {
        "metric": "Chances Created",
        "player": 24,
        "avg": 16,
        "elite": 55
      },
      {
        "metric": "Passing Accuracy %",
        "player": 85.3,
        "avg": 79.5,
        "elite": 87.0
      }
    ],
    "heatmap": [
      {
        "x": 50,
        "y": 42,
        "r: ": 45,
        "v": 0.9
      },
      {
        "x": 44,
        "y": 35,
        "r": 38,
        "v": 0.8
      },
      {
        "x": 56,
        "y": 35,
        "r": 38,
        "v": 0.8
      },
      {
        "x": 50,
        "y": 55,
        "r": 35,
        "v": 0.75
      }
    ],
    "strengths": [
      "Passing",
      "Tactical awareness"
    ],
    "weaknesses": [
      "Defending",
      "Physicality"
    ]
  },
  {
    "id": "lewis-cook",
    "name": "Lewis Cook",
    "age": 33,
    "position": "MF",
    "role": "Box-to-Box Midfielder",
    "club": "Bournemouth",
    "league": "Premier League",
    "nation": "Spain",
    "value": 29400000,
    "rating": 75,
    "general": {
      "apps": 8,
      "mins": 872,
      "goals": 0,
      "assists": 1,
      "yellowCards": 1,
      "redCards": 1
    },
    "attributes": {
      "pace": 60,
      "dribbling": 62,
      "passing": 72,
      "defending": 63,
      "physicality": 68,
      "tactical": 75,
      "workrate": 72
    },
    "detailedStats": {
      "goalsPer90": 0.0,
      "shotsOnTargetPer90": 0.5,
      "expectedGoals": 0.1,
      "shotConversionRate": 10.0,
      "touchesInBoxPer90": 0.5,
      "chancesCreated": 22,
      "dribblesCompletedPer90": 1.0,
      "keyPassesPer90": 0.95,
      "passingAccuracy": 85.1,
      "progressivePassesPer90": 3.8,
      "tacklesWonPer90": 1.5,
      "interceptionsPer90": 0.6,
      "ballRecoveriesPer90": 4.9
    },
    "leagueBenchmarks": [
      {
        "metric": "Key Passes per 90",
        "player": 0.95,
        "avg": 0.9,
        "elite": 2.2
      },
      {
        "metric": "Progressive Passes p90",
        "player": 3.8,
        "avg": 2.8,
        "elite": 6.2
      },
      {
        "metric": "Chances Created",
        "player": 22,
        "avg": 16,
        "elite": 55
      },
      {
        "metric": "Passing Accuracy %",
        "player": 85.1,
        "avg": 79.5,
        "elite": 87.0
      }
    ],
    "heatmap": [
      {
        "x": 50,
        "y": 42,
        "r: ": 45,
        "v": 0.9
      },
      {
        "x": 44,
        "y": 35,
        "r": 38,
        "v": 0.8
      },
      {
        "x": 56,
        "y": 35,
        "r": 38,
        "v": 0.8
      },
      {
        "x": 50,
        "y": 55,
        "r": 35,
        "v": 0.75
      }
    ],
    "strengths": [
      "Passing",
      "Tactical awareness"
    ],
    "weaknesses": [
      "Dribbling",
      "Pace"
    ]
  },
  {
    "id": "alex-scott",
    "name": "Alex Scott",
    "age": 20,
    "position": "MF",
    "role": "Attacking Playmaker",
    "club": "Bournemouth",
    "league": "Premier League",
    "nation": "England",
    "value": 29400000,
    "rating": 89,
    "general": {
      "apps": 34,
      "mins": 2848,
      "goals": 3,
      "assists": 2,
      "yellowCards": 5,
      "redCards": 0
    },
    "attributes": {
      "pace": 75,
      "dribbling": 86,
      "passing": 92,
      "defending": 88,
      "physicality": 94,
      "tactical": 95,
      "workrate": 96
    },
    "detailedStats": {
      "goalsPer90": 0.09,
      "shotsOnTargetPer90": 0.6,
      "expectedGoals": 3.8,
      "shotConversionRate": 13.6,
      "touchesInBoxPer90": 1.5,
      "chancesCreated": 60,
      "dribblesCompletedPer90": 2.0,
      "keyPassesPer90": 0.76,
      "passingAccuracy": 90.0,
      "progressivePassesPer90": 6.8,
      "tacklesWonPer90": 2.8,
      "interceptionsPer90": 0.8,
      "ballRecoveriesPer90": 7.5
    },
    "leagueBenchmarks": [
      {
        "metric": "Key Passes per 90",
        "player": 0.76,
        "avg": 0.9,
        "elite": 2.2
      },
      {
        "metric": "Progressive Passes p90",
        "player": 6.8,
        "avg": 2.8,
        "elite": 6.2
      },
      {
        "metric": "Chances Created",
        "player": 60,
        "avg": 16,
        "elite": 55
      },
      {
        "metric": "Passing Accuracy %",
        "player": 90.0,
        "avg": 79.5,
        "elite": 87.0
      }
    ],
    "heatmap": [
      {
        "x": 50,
        "y": 64,
        "r": 42,
        "v": 0.9
      },
      {
        "x": 40,
        "y": 55,
        "r": 35,
        "v": 0.75
      },
      {
        "x": 60,
        "y": 55,
        "r": 35,
        "v": 0.75
      },
      {
        "x": 50,
        "y": 76,
        "r": 30,
        "v": 0.8
      }
    ],
    "strengths": [
      "Workrate",
      "Tactical awareness"
    ],
    "weaknesses": [
      "Dribbling",
      "Pace"
    ]
  },
  {
    "id": "francisco-evanilson-de-lima-barbosa",
    "name": "Francisco Evanilson de Lima Barbosa",
    "age": 27,
    "position": "FW",
    "role": "Inverted Winger",
    "club": "Bournemouth",
    "league": "Premier League",
    "nation": "Spain",
    "value": 39600000,
    "rating": 86,
    "general": {
      "apps": 32,
      "mins": 2741,
      "goals": 6,
      "assists": 7,
      "yellowCards": 2,
      "redCards": 0
    },
    "attributes": {
      "pace": 98,
      "dribbling": 96,
      "passing": 86,
      "defending": 33,
      "physicality": 78,
      "tactical": 95,
      "workrate": 96
    },
    "detailedStats": {
      "goalsPer90": 0.2,
      "shotsOnTargetPer90": 0.8,
      "expectedGoals": 10.6,
      "shotConversionRate": 17.2,
      "touchesInBoxPer90": 6.0,
      "chancesCreated": 49,
      "dribblesCompletedPer90": 1.7,
      "keyPassesPer90": 0.65
    },
    "leagueBenchmarks": [
      {
        "metric": "Goals per 90",
        "player": 0.2,
        "avg": 0.22,
        "elite": 0.65
      },
      {
        "metric": "Shot Conversion %",
        "player": 17.2,
        "avg": 10.5,
        "elite": 18.0
      },
      {
        "metric": "Touches in Box p90",
        "player": 6.0,
        "avg": 2.5,
        "elite": 5.5
      },
      {
        "metric": "Expected Goals (xG)",
        "player": 10.6,
        "avg": 4.5,
        "elite": 14.0
      }
    ],
    "heatmap": [
      {
        "x": 78,
        "y": 72,
        "r": 45,
        "v": 0.9
      },
      {
        "x": 78,
        "y": 58,
        "r": 38,
        "v": 0.75
      },
      {
        "x": 72,
        "y": 82,
        "r": 35,
        "v": 0.8
      },
      {
        "x": 50,
        "y": 84,
        "r": 30,
        "v": 0.65
      }
    ],
    "strengths": [
      "Dribbling",
      "Creative Vision",
      "Pace"
    ],
    "weaknesses": [
      "Defending",
      "Defensive Tracking Back"
    ]
  },
  {
    "id": "enes-\u00fcnal",
    "name": "Enes \u00dcnal",
    "age": 28,
    "position": "FW",
    "role": "Complete Winger / Striker",
    "club": "Bournemouth",
    "league": "Premier League",
    "nation": "Brazil",
    "value": 32400000,
    "rating": 73,
    "general": {
      "apps": 3,
      "mins": 214,
      "goals": 1,
      "assists": 0,
      "yellowCards": 1,
      "redCards": 0
    },
    "attributes": {
      "pace": 75,
      "dribbling": 60,
      "passing": 61,
      "defending": 26,
      "physicality": 59,
      "tactical": 69,
      "workrate": 63
    },
    "detailedStats": {
      "goalsPer90": 0.42,
      "shotsOnTargetPer90": 1.1,
      "expectedGoals": 2.0,
      "shotConversionRate": 11.2,
      "touchesInBoxPer90": 2.5,
      "chancesCreated": 3,
      "dribblesCompletedPer90": 0.5,
      "keyPassesPer90": 0.53
    },
    "leagueBenchmarks": [
      {
        "metric": "Goals per 90",
        "player": 0.42,
        "avg": 0.22,
        "elite": 0.65
      },
      {
        "metric": "Shot Conversion %",
        "player": 11.2,
        "avg": 10.5,
        "elite": 18.0
      },
      {
        "metric": "Touches in Box p90",
        "player": 2.5,
        "avg": 2.5,
        "elite": 5.5
      },
      {
        "metric": "Expected Goals (xG)",
        "player": 2.0,
        "avg": 4.5,
        "elite": 14.0
      }
    ],
    "heatmap": [
      {
        "x": 50,
        "y": 84,
        "r": 38,
        "v": 0.9
      },
      {
        "x": 48,
        "y": 76,
        "r": 32,
        "v": 0.75
      },
      {
        "x": 52,
        "y": 80,
        "r": 32,
        "v": 0.8
      },
      {
        "x": 50,
        "y": 92,
        "r": 28,
        "v": 0.85
      }
    ],
    "strengths": [
      "Tactical awareness",
      "Pace"
    ],
    "weaknesses": [
      "Defending",
      "Defensive Tracking Back"
    ]
  },
  {
    "id": "junior-kroupi",
    "name": "Junior Kroupi",
    "age": 30,
    "position": "FW",
    "role": "Inverted Winger",
    "club": "Bournemouth",
    "league": "Premier League",
    "nation": "France",
    "value": 28200000,
    "rating": 86,
    "general": {
      "apps": 21,
      "mins": 1663,
      "goals": 13,
      "assists": 0,
      "yellowCards": 5,
      "redCards": 0
    },
    "attributes": {
      "pace": 98,
      "dribbling": 89,
      "passing": 80,
      "defending": 38,
      "physicality": 90,
      "tactical": 95,
      "workrate": 83
    },
    "detailedStats": {
      "goalsPer90": 0.7,
      "shotsOnTargetPer90": 1.5,
      "expectedGoals": 8.3,
      "shotConversionRate": 25.0,
      "touchesInBoxPer90": 4.8,
      "chancesCreated": 38,
      "dribblesCompletedPer90": 1.4,
      "keyPassesPer90": 0.83
    },
    "leagueBenchmarks": [
      {
        "metric": "Goals per 90",
        "player": 0.7,
        "avg": 0.22,
        "elite": 0.65
      },
      {
        "metric": "Shot Conversion %",
        "player": 25.0,
        "avg": 10.5,
        "elite": 18.0
      },
      {
        "metric": "Touches in Box p90",
        "player": 4.8,
        "avg": 2.5,
        "elite": 5.5
      },
      {
        "metric": "Expected Goals (xG)",
        "player": 8.3,
        "avg": 4.5,
        "elite": 14.0
      }
    ],
    "heatmap": [
      {
        "x": 22,
        "y": 72,
        "r": 45,
        "v": 0.9
      },
      {
        "x": 22,
        "y": 58,
        "r": 38,
        "v": 0.75
      },
      {
        "x": 28,
        "y": 82,
        "r": 35,
        "v": 0.8
      },
      {
        "x": 50,
        "y": 84,
        "r": 30,
        "v": 0.65
      }
    ],
    "strengths": [
      "Clinical Finishing",
      "Tactical awareness",
      "Pace"
    ],
    "weaknesses": [
      "Defending",
      "Defensive Tracking Back"
    ]
  },
  {
    "id": "bafod\u00e9-diakit\u00e9",
    "name": "Bafod\u00e9 Diakit\u00e9",
    "age": 30,
    "position": "DF",
    "role": "Central Defender",
    "club": "Bournemouth",
    "league": "Premier League",
    "nation": "France",
    "value": 24600000,
    "rating": 76,
    "general": {
      "apps": 15,
      "mins": 1275,
      "goals": 0,
      "assists": 0,
      "yellowCards": 1,
      "redCards": 0
    },
    "attributes": {
      "pace": 65,
      "dribbling": 58,
      "passing": 63,
      "defending": 87,
      "physicality": 72,
      "tactical": 73,
      "workrate": 78
    },
    "detailedStats": {
      "goalsPer90": 0.0,
      "shotsOnTargetPer90": 0.5,
      "expectedGoals": 0.0,
      "shotConversionRate": 10.0,
      "touchesInBoxPer90": 0.6,
      "chancesCreated": 6,
      "dribblesCompletedPer90": 0.6,
      "keyPassesPer90": 0.19,
      "tacklesWonPer90": 1.9,
      "interceptionsPer90": 0.9,
      "clearancesPer90": 2.8,
      "aerialDuelWinPercentage": 68.3,
      "tackledDribblerRate": 53.4,
      "progressivePassesPer90": 1.8,
      "longPassesCompletedPer90": 1.2,
      "passingAccuracy": 81.1
    },
    "leagueBenchmarks": [
      {
        "metric": "Passing Accuracy %",
        "player": 81.1,
        "avg": 82.0,
        "elite": 89.0
      },
      {
        "metric": "Clearances per 90",
        "player": 2.8,
        "avg": 2.6,
        "elite": 4.0
      },
      {
        "metric": "Aerial Duel Win %",
        "player": 68.3,
        "avg": 54.5,
        "elite": 68.0
      },
      {
        "metric": "Tackles Won per 90",
        "player": 1.9,
        "avg": 1.1,
        "elite": 2.0
      }
    ],
    "heatmap": [
      {
        "x": 50,
        "y": 20,
        "r": 45,
        "v": 0.9
      },
      {
        "x": 42,
        "y": 18,
        "r": 32,
        "v": 0.8
      },
      {
        "x": 58,
        "y": 18,
        "r": 32,
        "v": 0.8
      },
      {
        "x": 50,
        "y": 10,
        "r": 28,
        "v": 0.6
      }
    ],
    "strengths": [
      "Defending",
      "Workrate",
      "Aerial Dominance"
    ],
    "weaknesses": [
      "Dribbling",
      "Passing"
    ]
  },
  {
    "id": "amine-adli",
    "name": "Amine Adli",
    "age": 27,
    "position": "MF",
    "role": "Box-to-Box Midfielder",
    "club": "Bournemouth",
    "league": "Premier League",
    "nation": "Spain",
    "value": 32400000,
    "rating": 79,
    "general": {
      "apps": 10,
      "mins": 1074,
      "goals": 3,
      "assists": 2,
      "yellowCards": 2,
      "redCards": 0
    },
    "attributes": {
      "pace": 73,
      "dribbling": 74,
      "passing": 75,
      "defending": 68,
      "physicality": 73,
      "tactical": 84,
      "workrate": 75
    },
    "detailedStats": {
      "goalsPer90": 0.25,
      "shotsOnTargetPer90": 0.9,
      "expectedGoals": 2.6,
      "shotConversionRate": 13.6,
      "touchesInBoxPer90": 1.4,
      "chancesCreated": 29,
      "dribblesCompletedPer90": 1.2,
      "keyPassesPer90": 0.99,
      "passingAccuracy": 85.9,
      "progressivePassesPer90": 4.4,
      "tacklesWonPer90": 1.7,
      "interceptionsPer90": 0.7,
      "ballRecoveriesPer90": 5.3
    },
    "leagueBenchmarks": [
      {
        "metric": "Key Passes per 90",
        "player": 0.99,
        "avg": 0.9,
        "elite": 2.2
      },
      {
        "metric": "Progressive Passes p90",
        "player": 4.4,
        "avg": 2.8,
        "elite": 6.2
      },
      {
        "metric": "Chances Created",
        "player": 29,
        "avg": 16,
        "elite": 55
      },
      {
        "metric": "Passing Accuracy %",
        "player": 85.9,
        "avg": 79.5,
        "elite": 87.0
      }
    ],
    "heatmap": [
      {
        "x": 50,
        "y": 42,
        "r: ": 45,
        "v": 0.9
      },
      {
        "x": 44,
        "y": 35,
        "r": 38,
        "v": 0.8
      },
      {
        "x": 56,
        "y": 35,
        "r": 38,
        "v": 0.8
      },
      {
        "x": 50,
        "y": 55,
        "r": 35,
        "v": 0.75
      }
    ],
    "strengths": [
      "Passing",
      "Tactical awareness"
    ],
    "weaknesses": [
      "Defending",
      "Physicality"
    ]
  },
  {
    "id": "\u00e1lex-jim\u00e9nez-s\u00e1nchez",
    "name": "\u00c1lex Jim\u00e9nez S\u00e1nchez",
    "age": 28,
    "position": "DF",
    "role": "Attacking Fullback",
    "club": "Bournemouth",
    "league": "Premier League",
    "nation": "Spain",
    "value": 27000000,
    "rating": 80,
    "general": {
      "apps": 26,
      "mins": 2315,
      "goals": 1,
      "assists": 2,
      "yellowCards": 10,
      "redCards": 0
    },
    "attributes": {
      "pace": 72,
      "dribbling": 73,
      "passing": 77,
      "defending": 94,
      "physicality": 82,
      "tactical": 86,
      "workrate": 93
    },
    "detailedStats": {
      "goalsPer90": 0.04,
      "shotsOnTargetPer90": 0.6,
      "expectedGoals": 1.1,
      "shotConversionRate": 11.2,
      "touchesInBoxPer90": 1.1,
      "chancesCreated": 33,
      "dribblesCompletedPer90": 1.3,
      "keyPassesPer90": 0.52,
      "tacklesWonPer90": 2.4,
      "interceptionsPer90": 1.1,
      "clearancesPer90": 3.5,
      "aerialDuelWinPercentage": 75.3,
      "tackledDribblerRate": 58.6,
      "progressivePassesPer90": 2.8,
      "longPassesCompletedPer90": 1.9,
      "passingAccuracy": 85.4
    },
    "leagueBenchmarks": [
      {
        "metric": "Passing Accuracy %",
        "player": 85.4,
        "avg": 82.0,
        "elite": 89.0
      },
      {
        "metric": "Clearances per 90",
        "player": 3.5,
        "avg": 2.6,
        "elite": 4.0
      },
      {
        "metric": "Aerial Duel Win %",
        "player": 75.3,
        "avg": 54.5,
        "elite": 68.0
      },
      {
        "metric": "Tackles Won per 90",
        "player": 2.4,
        "avg": 1.1,
        "elite": 2.0
      }
    ],
    "heatmap": [
      {
        "x": 86,
        "y": 25,
        "r": 38,
        "v": 0.8
      },
      {
        "x": 86,
        "y": 45,
        "r": 40,
        "v": 0.85
      },
      {
        "x": 86,
        "y": 65,
        "r": 35,
        "v": 0.7
      },
      {
        "x": 86,
        "y": 12,
        "r": 30,
        "v": 0.6
      }
    ],
    "strengths": [
      "Defending",
      "Workrate",
      "Aerial Dominance"
    ],
    "weaknesses": [
      "Dribbling",
      "Pace"
    ]
  },
  {
    "id": "veljko-milosavljevic",
    "name": "Veljko Milosavljevic",
    "age": 21,
    "position": "DF",
    "role": "Central Defender",
    "club": "Bournemouth",
    "league": "Premier League",
    "nation": "Brazil",
    "value": 26400000,
    "rating": 72,
    "general": {
      "apps": 4,
      "mins": 367,
      "goals": 0,
      "assists": 0,
      "yellowCards": 0,
      "redCards": 0
    },
    "attributes": {
      "pace": 65,
      "dribbling": 55,
      "passing": 60,
      "defending": 77,
      "physicality": 61,
      "tactical": 68,
      "workrate": 65
    },
    "detailedStats": {
      "goalsPer90": 0.0,
      "shotsOnTargetPer90": 0.5,
      "expectedGoals": 0.1,
      "shotConversionRate": 10.0,
      "touchesInBoxPer90": 0.5,
      "chancesCreated": 1,
      "dribblesCompletedPer90": 0.4,
      "keyPassesPer90": 0.17,
      "tacklesWonPer90": 1.3,
      "interceptionsPer90": 0.8,
      "clearancesPer90": 2.0,
      "aerialDuelWinPercentage": 59.9,
      "tackledDribblerRate": 51.2,
      "progressivePassesPer90": 1.6,
      "longPassesCompletedPer90": 1.0,
      "passingAccuracy": 80.3
    },
    "leagueBenchmarks": [
      {
        "metric": "Passing Accuracy %",
        "player": 80.3,
        "avg": 82.0,
        "elite": 89.0
      },
      {
        "metric": "Clearances per 90",
        "player": 2.0,
        "avg": 2.6,
        "elite": 4.0
      },
      {
        "metric": "Aerial Duel Win %",
        "player": 59.9,
        "avg": 54.5,
        "elite": 68.0
      },
      {
        "metric": "Tackles Won per 90",
        "player": 1.3,
        "avg": 1.1,
        "elite": 2.0
      }
    ],
    "heatmap": [
      {
        "x": 50,
        "y": 20,
        "r": 45,
        "v": 0.9
      },
      {
        "x": 42,
        "y": 18,
        "r": 32,
        "v": 0.8
      },
      {
        "x": 58,
        "y": 18,
        "r": 32,
        "v": 0.8
      },
      {
        "x": 50,
        "y": 10,
        "r": 28,
        "v": 0.6
      }
    ],
    "strengths": [
      "Defending",
      "Tactical awareness"
    ],
    "weaknesses": [
      "Dribbling",
      "Passing"
    ]
  },
  {
    "id": "rayan-vitor-simpl\u00edcio-rocha",
    "name": "Rayan Vitor Simpl\u00edcio Rocha",
    "age": 32,
    "position": "MF",
    "role": "Attacking Playmaker",
    "club": "Bournemouth",
    "league": "Premier League",
    "nation": "England",
    "value": 32400000,
    "rating": 79,
    "general": {
      "apps": 13,
      "mins": 1110,
      "goals": 5,
      "assists": 2,
      "yellowCards": 1,
      "redCards": 0
    },
    "attributes": {
      "pace": 73,
      "dribbling": 73,
      "passing": 74,
      "defending": 68,
      "physicality": 73,
      "tactical": 83,
      "workrate": 75
    },
    "detailedStats": {
      "goalsPer90": 0.41,
      "shotsOnTargetPer90": 1.1,
      "expectedGoals": 2.7,
      "shotConversionRate": 16.0,
      "touchesInBoxPer90": 1.4,
      "chancesCreated": 26,
      "dribblesCompletedPer90": 1.1,
      "keyPassesPer90": 0.86,
      "passingAccuracy": 85.5,
      "progressivePassesPer90": 4.1,
      "tacklesWonPer90": 1.7,
      "interceptionsPer90": 0.7,
      "ballRecoveriesPer90": 5.4
    },
    "leagueBenchmarks": [
      {
        "metric": "Key Passes per 90",
        "player": 0.86,
        "avg": 0.9,
        "elite": 2.2
      },
      {
        "metric": "Progressive Passes p90",
        "player": 4.1,
        "avg": 2.8,
        "elite": 6.2
      },
      {
        "metric": "Chances Created",
        "player": 26,
        "avg": 16,
        "elite": 55
      },
      {
        "metric": "Passing Accuracy %",
        "player": 85.5,
        "avg": 79.5,
        "elite": 87.0
      }
    ],
    "heatmap": [
      {
        "x": 50,
        "y": 64,
        "r": 42,
        "v": 0.9
      },
      {
        "x": 40,
        "y": 55,
        "r": 35,
        "v": 0.75
      },
      {
        "x": 60,
        "y": 55,
        "r": 35,
        "v": 0.75
      },
      {
        "x": 50,
        "y": 76,
        "r": 30,
        "v": 0.8
      }
    ],
    "strengths": [
      "Workrate",
      "Tactical awareness"
    ],
    "weaknesses": [
      "Defending",
      "Physicality"
    ]
  },
  {
    "id": "dango-ouattara",
    "name": "Dango Ouattara",
    "age": 28,
    "position": "MF",
    "role": "Attacking Playmaker",
    "club": "Brentford",
    "league": "Premier League",
    "nation": "Spain",
    "value": 33600000,
    "rating": 89,
    "general": {
      "apps": 25,
      "mins": 2271,
      "goals": 7,
      "assists": 8,
      "yellowCards": 5,
      "redCards": 0
    },
    "attributes": {
      "pace": 92,
      "dribbling": 96,
      "passing": 88,
      "defending": 83,
      "physicality": 88,
      "tactical": 95,
      "workrate": 92
    },
    "detailedStats": {
      "goalsPer90": 0.28,
      "shotsOnTargetPer90": 0.9,
      "expectedGoals": 7.9,
      "shotConversionRate": 18.4,
      "touchesInBoxPer90": 2.8,
      "chancesCreated": 52,
      "dribblesCompletedPer90": 1.8,
      "keyPassesPer90": 0.84,
      "passingAccuracy": 89.0,
      "progressivePassesPer90": 6.2,
      "tacklesWonPer90": 2.5,
      "interceptionsPer90": 0.9,
      "ballRecoveriesPer90": 6.9
    },
    "leagueBenchmarks": [
      {
        "metric": "Key Passes per 90",
        "player": 0.84,
        "avg": 0.9,
        "elite": 2.2
      },
      {
        "metric": "Progressive Passes p90",
        "player": 6.2,
        "avg": 2.8,
        "elite": 6.2
      },
      {
        "metric": "Chances Created",
        "player": 52,
        "avg": 16,
        "elite": 55
      },
      {
        "metric": "Passing Accuracy %",
        "player": 89.0,
        "avg": 79.5,
        "elite": 87.0
      }
    ],
    "heatmap": [
      {
        "x": 50,
        "y": 64,
        "r": 42,
        "v": 0.9
      },
      {
        "x": 40,
        "y": 55,
        "r": 35,
        "v": 0.75
      },
      {
        "x": 60,
        "y": 55,
        "r": 35,
        "v": 0.75
      },
      {
        "x": 50,
        "y": 76,
        "r": 30,
        "v": 0.8
      }
    ],
    "strengths": [
      "Dribbling",
      "Creative Vision",
      "Tactical awareness"
    ],
    "weaknesses": [
      "Defending",
      "Physicality"
    ]
  },
  {
    "id": "caoimh\u00edn-kelleher",
    "name": "Caoimh\u00edn Kelleher",
    "age": 31,
    "position": "GK",
    "role": "Sweeper Keeper",
    "club": "Brentford",
    "league": "Premier League",
    "nation": "Spain",
    "value": 28800000,
    "rating": 90,
    "general": {
      "apps": 37,
      "mins": 3330,
      "goals": 0,
      "assists": 0,
      "yellowCards": 1,
      "redCards": 0
    },
    "attributes": {
      "pace": 60,
      "dribbling": 55,
      "passing": 90,
      "defending": 93,
      "physicality": 94,
      "tactical": 88,
      "workrate": 96
    },
    "detailedStats": {
      "savePercentage": 81.0,
      "cleanSheets": 10,
      "goalsConceded": 49,
      "psxgDifference": 4.0,
      "passingAccuracy": 90.0,
      "sweeperActionsPer90": 1.3,
      "averageDistanceOfSweeperActions": 13.9
    },
    "leagueBenchmarks": [
      {
        "metric": "Save %",
        "player": 81.0,
        "avg": 69.5,
        "elite": 77.0
      },
      {
        "metric": "Clean Sheets",
        "player": 10,
        "avg": 4.5,
        "elite": 10.0
      },
      {
        "metric": "Sweeper Actions p90",
        "player": 1.3,
        "avg": 0.6,
        "elite": 1.2
      },
      {
        "metric": "Passing Accuracy %",
        "player": 90.0,
        "avg": 73.0,
        "elite": 82.0
      }
    ],
    "heatmap": [
      {
        "x": 50,
        "y": 6,
        "r": 35,
        "v": 0.98
      },
      {
        "x": 50,
        "y": 14,
        "r": 28,
        "v": 0.7
      },
      {
        "x": 45,
        "y": 8,
        "r": 22,
        "v": 0.55
      },
      {
        "x": 55,
        "y": 8,
        "r": 22,
        "v": 0.55
      }
    ],
    "strengths": [
      "Reflexes",
      "Workrate",
      "Physicality"
    ],
    "weaknesses": [
      "Dribbling",
      "Pace"
    ]
  },
  {
    "id": "nathan-collins",
    "name": "Nathan Collins",
    "age": 21,
    "position": "DF",
    "role": "Attacking Fullback",
    "club": "Brentford",
    "league": "Premier League",
    "nation": "Spain",
    "value": 29400000,
    "rating": 88,
    "general": {
      "apps": 32,
      "mins": 2971,
      "goals": 1,
      "assists": 2,
      "yellowCards": 7,
      "redCards": 0
    },
    "attributes": {
      "pace": 78,
      "dribbling": 73,
      "passing": 69,
      "defending": 94,
      "physicality": 94,
      "tactical": 95,
      "workrate": 96
    },
    "detailedStats": {
      "goalsPer90": 0.03,
      "shotsOnTargetPer90": 0.5,
      "expectedGoals": 2.2,
      "shotConversionRate": 11.2,
      "touchesInBoxPer90": 1.6,
      "chancesCreated": 17,
      "dribblesCompletedPer90": 0.9,
      "keyPassesPer90": 0.22,
      "tacklesWonPer90": 3.8,
      "interceptionsPer90": 1.2,
      "clearancesPer90": 5.7,
      "aerialDuelWinPercentage": 80.0,
      "tackledDribblerRate": 63.2,
      "progressivePassesPer90": 2.2,
      "longPassesCompletedPer90": 1.5,
      "passingAccuracy": 82.9
    },
    "leagueBenchmarks": [
      {
        "metric": "Passing Accuracy %",
        "player": 82.9,
        "avg": 82.0,
        "elite": 89.0
      },
      {
        "metric": "Clearances per 90",
        "player": 5.7,
        "avg": 2.6,
        "elite": 4.0
      },
      {
        "metric": "Aerial Duel Win %",
        "player": 80.0,
        "avg": 54.5,
        "elite": 68.0
      },
      {
        "metric": "Tackles Won per 90",
        "player": 3.8,
        "avg": 1.1,
        "elite": 2.0
      }
    ],
    "heatmap": [
      {
        "x": 14,
        "y": 25,
        "r": 38,
        "v": 0.8
      },
      {
        "x": 14,
        "y": 45,
        "r": 40,
        "v": 0.85
      },
      {
        "x": 14,
        "y": 65,
        "r": 35,
        "v": 0.7
      },
      {
        "x": 14,
        "y": 12,
        "r": 30,
        "v": 0.6
      }
    ],
    "strengths": [
      "Workrate",
      "Tactical awareness",
      "Aerial Dominance"
    ],
    "weaknesses": [
      "Dribbling",
      "Passing"
    ]
  },
  {
    "id": "keane-lewis-potter",
    "name": "Keane Lewis-Potter",
    "age": 22,
    "position": "DF",
    "role": "Attacking Fullback",
    "club": "Brentford",
    "league": "Premier League",
    "nation": "Spain",
    "value": 28800000,
    "rating": 86,
    "general": {
      "apps": 22,
      "mins": 1960,
      "goals": 3,
      "assists": 4,
      "yellowCards": 1,
      "redCards": 0
    },
    "attributes": {
      "pace": 79,
      "dribbling": 82,
      "passing": 82,
      "defending": 94,
      "physicality": 80,
      "tactical": 91,
      "workrate": 88
    },
    "detailedStats": {
      "goalsPer90": 0.14,
      "shotsOnTargetPer90": 0.7,
      "expectedGoals": 3.0,
      "shotConversionRate": 13.6,
      "touchesInBoxPer90": 1.7,
      "chancesCreated": 41,
      "dribblesCompletedPer90": 1.5,
      "keyPassesPer90": 0.76,
      "tacklesWonPer90": 2.3,
      "interceptionsPer90": 1.2,
      "clearancesPer90": 3.4,
      "aerialDuelWinPercentage": 73.9,
      "tackledDribblerRate": 60.6,
      "progressivePassesPer90": 3.2,
      "longPassesCompletedPer90": 2.1,
      "passingAccuracy": 86.6
    },
    "leagueBenchmarks": [
      {
        "metric": "Passing Accuracy %",
        "player": 86.6,
        "avg": 82.0,
        "elite": 89.0
      },
      {
        "metric": "Clearances per 90",
        "player": 3.4,
        "avg": 2.6,
        "elite": 4.0
      },
      {
        "metric": "Aerial Duel Win %",
        "player": 73.9,
        "avg": 54.5,
        "elite": 68.0
      },
      {
        "metric": "Tackles Won per 90",
        "player": 2.3,
        "avg": 1.1,
        "elite": 2.0
      }
    ],
    "heatmap": [
      {
        "x": 86,
        "y": 25,
        "r": 38,
        "v": 0.8
      },
      {
        "x": 86,
        "y": 45,
        "r": 40,
        "v": 0.85
      },
      {
        "x": 86,
        "y": 65,
        "r": 35,
        "v": 0.7
      },
      {
        "x": 86,
        "y": 12,
        "r": 30,
        "v": 0.6
      }
    ],
    "strengths": [
      "Defending",
      "Tactical awareness",
      "Aerial Dominance"
    ],
    "weaknesses": [
      "Physicality",
      "Pace"
    ]
  },
  {
    "id": "kristoffer-ajer",
    "name": "Kristoffer Ajer",
    "age": 23,
    "position": "DF",
    "role": "Attacking Fullback",
    "club": "Brentford",
    "league": "Premier League",
    "nation": "England",
    "value": 26400000,
    "rating": 80,
    "general": {
      "apps": 20,
      "mins": 1805,
      "goals": 0,
      "assists": 2,
      "yellowCards": 4,
      "redCards": 0
    },
    "attributes": {
      "pace": 71,
      "dribbling": 63,
      "passing": 63,
      "defending": 94,
      "physicality": 81,
      "tactical": 80,
      "workrate": 85
    },
    "detailedStats": {
      "goalsPer90": 0.0,
      "shotsOnTargetPer90": 0.5,
      "expectedGoals": 0.7,
      "shotConversionRate": 10.0,
      "touchesInBoxPer90": 1.1,
      "chancesCreated": 7,
      "dribblesCompletedPer90": 0.6,
      "keyPassesPer90": 0.15,
      "tacklesWonPer90": 2.3,
      "interceptionsPer90": 1.0,
      "clearancesPer90": 3.5,
      "aerialDuelWinPercentage": 75.1,
      "tackledDribblerRate": 56.3,
      "progressivePassesPer90": 1.8,
      "longPassesCompletedPer90": 1.2,
      "passingAccuracy": 81.2
    },
    "leagueBenchmarks": [
      {
        "metric": "Passing Accuracy %",
        "player": 81.2,
        "avg": 82.0,
        "elite": 89.0
      },
      {
        "metric": "Clearances per 90",
        "player": 3.5,
        "avg": 2.6,
        "elite": 4.0
      },
      {
        "metric": "Aerial Duel Win %",
        "player": 75.1,
        "avg": 54.5,
        "elite": 68.0
      },
      {
        "metric": "Tackles Won per 90",
        "player": 2.3,
        "avg": 1.1,
        "elite": 2.0
      }
    ],
    "heatmap": [
      {
        "x": 14,
        "y": 25,
        "r": 38,
        "v": 0.8
      },
      {
        "x": 14,
        "y": 45,
        "r": 40,
        "v": 0.85
      },
      {
        "x": 14,
        "y": 65,
        "r": 35,
        "v": 0.7
      },
      {
        "x": 14,
        "y": 12,
        "r": 30,
        "v": 0.6
      }
    ],
    "strengths": [
      "Defending",
      "Workrate",
      "Aerial Dominance"
    ],
    "weaknesses": [
      "Dribbling",
      "Passing"
    ]
  },
  {
    "id": "rico-henry",
    "name": "Rico Henry",
    "age": 24,
    "position": "DF",
    "role": "Central Defender",
    "club": "Brentford",
    "league": "Premier League",
    "nation": "Spain",
    "value": 25800000,
    "rating": 77,
    "general": {
      "apps": 14,
      "mins": 1322,
      "goals": 0,
      "assists": 2,
      "yellowCards": 2,
      "redCards": 0
    },
    "attributes": {
      "pace": 66,
      "dribbling": 59,
      "passing": 65,
      "defending": 80,
      "physicality": 65,
      "tactical": 71,
      "workrate": 78
    },
    "detailedStats": {
      "goalsPer90": 0.0,
      "shotsOnTargetPer90": 0.5,
      "expectedGoals": 0.2,
      "shotConversionRate": 10.0,
      "touchesInBoxPer90": 0.6,
      "chancesCreated": 10,
      "dribblesCompletedPer90": 0.7,
      "keyPassesPer90": 0.28,
      "tacklesWonPer90": 1.5,
      "interceptionsPer90": 0.9,
      "clearancesPer90": 2.3,
      "aerialDuelWinPercentage": 62.6,
      "tackledDribblerRate": 52.7,
      "progressivePassesPer90": 1.9,
      "longPassesCompletedPer90": 1.3,
      "passingAccuracy": 81.6
    },
    "leagueBenchmarks": [
      {
        "metric": "Passing Accuracy %",
        "player": 81.6,
        "avg": 82.0,
        "elite": 89.0
      },
      {
        "metric": "Clearances per 90",
        "player": 2.3,
        "avg": 2.6,
        "elite": 4.0
      },
      {
        "metric": "Aerial Duel Win %",
        "player": 62.6,
        "avg": 54.5,
        "elite": 68.0
      },
      {
        "metric": "Tackles Won per 90",
        "player": 1.5,
        "avg": 1.1,
        "elite": 2.0
      }
    ],
    "heatmap": [
      {
        "x": 50,
        "y": 20,
        "r": 45,
        "v": 0.9
      },
      {
        "x": 42,
        "y": 18,
        "r": 32,
        "v": 0.8
      },
      {
        "x": 58,
        "y": 18,
        "r": 32,
        "v": 0.8
      },
      {
        "x": 50,
        "y": 10,
        "r": 28,
        "v": 0.6
      }
    ],
    "strengths": [
      "Defending",
      "Workrate"
    ],
    "weaknesses": [
      "Dribbling",
      "Physicality"
    ]
  },
  {
    "id": "michael-kayode",
    "name": "Michael Kayode",
    "age": 25,
    "position": "DF",
    "role": "Attacking Fullback",
    "club": "Brentford",
    "league": "Premier League",
    "nation": "France",
    "value": 27600000,
    "rating": 86,
    "general": {
      "apps": 37,
      "mins": 3258,
      "goals": 1,
      "assists": 2,
      "yellowCards": 8,
      "redCards": 0
    },
    "attributes": {
      "pace": 70,
      "dribbling": 79,
      "passing": 91,
      "defending": 94,
      "physicality": 94,
      "tactical": 95,
      "workrate": 96
    },
    "detailedStats": {
      "goalsPer90": 0.03,
      "shotsOnTargetPer90": 0.5,
      "expectedGoals": 1.3,
      "shotConversionRate": 11.2,
      "touchesInBoxPer90": 0.9,
      "chancesCreated": 58,
      "dribblesCompletedPer90": 2.0,
      "keyPassesPer90": 0.65,
      "tacklesWonPer90": 3.0,
      "interceptionsPer90": 1.2,
      "clearancesPer90": 4.6,
      "aerialDuelWinPercentage": 80.0,
      "tackledDribblerRate": 62.2,
      "progressivePassesPer90": 3.9,
      "longPassesCompletedPer90": 2.6,
      "passingAccuracy": 89.4
    },
    "leagueBenchmarks": [
      {
        "metric": "Passing Accuracy %",
        "player": 89.4,
        "avg": 82.0,
        "elite": 89.0
      },
      {
        "metric": "Clearances per 90",
        "player": 4.6,
        "avg": 2.6,
        "elite": 4.0
      },
      {
        "metric": "Aerial Duel Win %",
        "player": 80.0,
        "avg": 54.5,
        "elite": 68.0
      },
      {
        "metric": "Tackles Won per 90",
        "player": 3.0,
        "avg": 1.1,
        "elite": 2.0
      }
    ],
    "heatmap": [
      {
        "x": 14,
        "y": 25,
        "r": 38,
        "v": 0.8
      },
      {
        "x": 14,
        "y": 45,
        "r": 40,
        "v": 0.85
      },
      {
        "x": 14,
        "y": 65,
        "r": 35,
        "v": 0.7
      },
      {
        "x": 14,
        "y": 12,
        "r": 30,
        "v": 0.6
      }
    ],
    "strengths": [
      "Workrate",
      "Tactical awareness",
      "Aerial Dominance"
    ],
    "weaknesses": [
      "Dribbling",
      "Pace"
    ]
  },
  {
    "id": "ethan-pinnock",
    "name": "Ethan Pinnock",
    "age": 26,
    "position": "DF",
    "role": "Central Defender",
    "club": "Brentford",
    "league": "Premier League",
    "nation": "England",
    "value": 25200000,
    "rating": 72,
    "general": {
      "apps": 4,
      "mins": 318,
      "goals": 0,
      "assists": 0,
      "yellowCards": 1,
      "redCards": 0
    },
    "attributes": {
      "pace": 66,
      "dribbling": 56,
      "passing": 60,
      "defending": 77,
      "physicality": 60,
      "tactical": 68,
      "workrate": 64
    },
    "detailedStats": {
      "goalsPer90": 0.0,
      "shotsOnTargetPer90": 0.5,
      "expectedGoals": 0.0,
      "shotConversionRate": 10.0,
      "touchesInBoxPer90": 0.6,
      "chancesCreated": 0,
      "dribblesCompletedPer90": 0.4,
      "keyPassesPer90": 0.02,
      "tacklesWonPer90": 1.3,
      "interceptionsPer90": 0.8,
      "clearancesPer90": 1.9,
      "aerialDuelWinPercentage": 59.4,
      "tackledDribblerRate": 51.2,
      "progressivePassesPer90": 1.5,
      "longPassesCompletedPer90": 1.0,
      "passingAccuracy": 80.0
    },
    "leagueBenchmarks": [
      {
        "metric": "Passing Accuracy %",
        "player": 80.0,
        "avg": 82.0,
        "elite": 89.0
      },
      {
        "metric": "Clearances per 90",
        "player": 1.9,
        "avg": 2.6,
        "elite": 4.0
      },
      {
        "metric": "Aerial Duel Win %",
        "player": 59.4,
        "avg": 54.5,
        "elite": 68.0
      },
      {
        "metric": "Tackles Won per 90",
        "player": 1.3,
        "avg": 1.1,
        "elite": 2.0
      }
    ],
    "heatmap": [
      {
        "x": 50,
        "y": 20,
        "r": 45,
        "v": 0.9
      },
      {
        "x": 42,
        "y": 18,
        "r": 32,
        "v": 0.8
      },
      {
        "x": 58,
        "y": 18,
        "r": 32,
        "v": 0.8
      },
      {
        "x": 50,
        "y": 10,
        "r": 28,
        "v": 0.6
      }
    ],
    "strengths": [
      "Defending",
      "Tactical awareness"
    ],
    "weaknesses": [
      "Dribbling",
      "Physicality"
    ]
  },
  {
    "id": "sepp-van-den-berg",
    "name": "Sepp van den Berg",
    "age": 28,
    "position": "DF",
    "role": "Attacking Fullback",
    "club": "Brentford",
    "league": "Premier League",
    "nation": "Spain",
    "value": 26400000,
    "rating": 86,
    "general": {
      "apps": 30,
      "mins": 2761,
      "goals": 0,
      "assists": 3,
      "yellowCards": 2,
      "redCards": 0
    },
    "attributes": {
      "pace": 77,
      "dribbling": 71,
      "passing": 66,
      "defending": 94,
      "physicality": 94,
      "tactical": 91,
      "workrate": 96
    },
    "detailedStats": {
      "goalsPer90": 0.0,
      "shotsOnTargetPer90": 0.5,
      "expectedGoals": 3.4,
      "shotConversionRate": 10.0,
      "touchesInBoxPer90": 1.5,
      "chancesCreated": 12,
      "dribblesCompletedPer90": 0.7,
      "keyPassesPer90": 0.16,
      "tacklesWonPer90": 3.2,
      "interceptionsPer90": 1.2,
      "clearancesPer90": 4.8,
      "aerialDuelWinPercentage": 80.0,
      "tackledDribblerRate": 60.6,
      "progressivePassesPer90": 2.0,
      "longPassesCompletedPer90": 1.3,
      "passingAccuracy": 82.0
    },
    "leagueBenchmarks": [
      {
        "metric": "Passing Accuracy %",
        "player": 82.0,
        "avg": 82.0,
        "elite": 89.0
      },
      {
        "metric": "Clearances per 90",
        "player": 4.8,
        "avg": 2.6,
        "elite": 4.0
      },
      {
        "metric": "Aerial Duel Win %",
        "player": 80.0,
        "avg": 54.5,
        "elite": 68.0
      },
      {
        "metric": "Tackles Won per 90",
        "player": 3.2,
        "avg": 1.1,
        "elite": 2.0
      }
    ],
    "heatmap": [
      {
        "x": 86,
        "y": 25,
        "r": 38,
        "v": 0.8
      },
      {
        "x": 86,
        "y": 45,
        "r": 40,
        "v": 0.85
      },
      {
        "x": 86,
        "y": 65,
        "r": 35,
        "v": 0.7
      },
      {
        "x": 86,
        "y": 12,
        "r": 30,
        "v": 0.6
      }
    ],
    "strengths": [
      "Defending",
      "Workrate",
      "Aerial Dominance"
    ],
    "weaknesses": [
      "Dribbling",
      "Passing"
    ]
  },
  {
    "id": "aaron-hickey",
    "name": "Aaron Hickey",
    "age": 31,
    "position": "DF",
    "role": "Central Defender",
    "club": "Brentford",
    "league": "Premier League",
    "nation": "Spain",
    "value": 24000000,
    "rating": 75,
    "general": {
      "apps": 8,
      "mins": 679,
      "goals": 0,
      "assists": 0,
      "yellowCards": 1,
      "redCards": 0
    },
    "attributes": {
      "pace": 66,
      "dribbling": 57,
      "passing": 61,
      "defending": 77,
      "physicality": 61,
      "tactical": 69,
      "workrate": 69
    },
    "detailedStats": {
      "goalsPer90": 0.0,
      "shotsOnTargetPer90": 0.5,
      "expectedGoals": 0.4,
      "shotConversionRate": 10.0,
      "touchesInBoxPer90": 0.6,
      "chancesCreated": 2,
      "dribblesCompletedPer90": 0.5,
      "keyPassesPer90": 0.11,
      "tacklesWonPer90": 1.3,
      "interceptionsPer90": 0.9,
      "clearancesPer90": 2.0,
      "aerialDuelWinPercentage": 60.1,
      "tackledDribblerRate": 51.6,
      "progressivePassesPer90": 1.6,
      "longPassesCompletedPer90": 1.1,
      "passingAccuracy": 80.3
    },
    "leagueBenchmarks": [
      {
        "metric": "Passing Accuracy %",
        "player": 80.3,
        "avg": 82.0,
        "elite": 89.0
      },
      {
        "metric": "Clearances per 90",
        "player": 2.0,
        "avg": 2.6,
        "elite": 4.0
      },
      {
        "metric": "Aerial Duel Win %",
        "player": 60.1,
        "avg": 54.5,
        "elite": 68.0
      },
      {
        "metric": "Tackles Won per 90",
        "player": 1.3,
        "avg": 1.1,
        "elite": 2.0
      }
    ],
    "heatmap": [
      {
        "x": 50,
        "y": 20,
        "r": 45,
        "v": 0.9
      },
      {
        "x": 42,
        "y": 18,
        "r": 32,
        "v": 0.8
      },
      {
        "x": 58,
        "y": 18,
        "r": 32,
        "v": 0.8
      },
      {
        "x": 50,
        "y": 10,
        "r": 28,
        "v": 0.6
      }
    ],
    "strengths": [
      "Defending",
      "Tactical awareness"
    ],
    "weaknesses": [
      "Dribbling",
      "Physicality"
    ]
  },
  {
    "id": "kevin-schade",
    "name": "Kevin Schade",
    "age": 20,
    "position": "MF",
    "role": "Attacking Playmaker",
    "club": "Brentford",
    "league": "Premier League",
    "nation": "England",
    "value": 40800000,
    "rating": 87,
    "general": {
      "apps": 32,
      "mins": 2744,
      "goals": 8,
      "assists": 5,
      "yellowCards": 6,
      "redCards": 1
    },
    "attributes": {
      "pace": 92,
      "dribbling": 96,
      "passing": 85,
      "defending": 85,
      "physicality": 90,
      "tactical": 95,
      "workrate": 96
    },
    "detailedStats": {
      "goalsPer90": 0.26,
      "shotsOnTargetPer90": 0.9,
      "expectedGoals": 12.1,
      "shotConversionRate": 19.6,
      "touchesInBoxPer90": 3.2,
      "chancesCreated": 47,
      "dribblesCompletedPer90": 1.7,
      "keyPassesPer90": 0.62,
      "passingAccuracy": 88.3,
      "progressivePassesPer90": 5.8,
      "tacklesWonPer90": 2.6,
      "interceptionsPer90": 0.9,
      "ballRecoveriesPer90": 7.1
    },
    "leagueBenchmarks": [
      {
        "metric": "Key Passes per 90",
        "player": 0.62,
        "avg": 0.9,
        "elite": 2.2
      },
      {
        "metric": "Progressive Passes p90",
        "player": 5.8,
        "avg": 2.8,
        "elite": 6.2
      },
      {
        "metric": "Chances Created",
        "player": 47,
        "avg": 16,
        "elite": 55
      },
      {
        "metric": "Passing Accuracy %",
        "player": 88.3,
        "avg": 79.5,
        "elite": 87.0
      }
    ],
    "heatmap": [
      {
        "x": 50,
        "y": 64,
        "r": 42,
        "v": 0.9
      },
      {
        "x": 40,
        "y": 55,
        "r": 35,
        "v": 0.75
      },
      {
        "x": 60,
        "y": 55,
        "r": 35,
        "v": 0.75
      },
      {
        "x": 50,
        "y": 76,
        "r": 30,
        "v": 0.8
      }
    ],
    "strengths": [
      "Dribbling",
      "Workrate"
    ],
    "weaknesses": [
      "Passing",
      "Defending"
    ]
  },
  {
    "id": "mikkel-damsgaard",
    "name": "Mikkel Damsgaard",
    "age": 21,
    "position": "MF",
    "role": "Attacking Playmaker",
    "club": "Brentford",
    "league": "Premier League",
    "nation": "Spain",
    "value": 33600000,
    "rating": 86,
    "general": {
      "apps": 24,
      "mins": 2046,
      "goals": 4,
      "assists": 4,
      "yellowCards": 0,
      "redCards": 0
    },
    "attributes": {
      "pace": 76,
      "dribbling": 95,
      "passing": 97,
      "defending": 85,
      "physicality": 90,
      "tactical": 95,
      "workrate": 89
    },
    "detailedStats": {
      "goalsPer90": 0.18,
      "shotsOnTargetPer90": 0.8,
      "expectedGoals": 2.6,
      "shotConversionRate": 14.8,
      "touchesInBoxPer90": 1.6,
      "chancesCreated": 86,
      "dribblesCompletedPer90": 2.7,
      "keyPassesPer90": 1.52,
      "passingAccuracy": 93.5,
      "progressivePassesPer90": 8.9,
      "tacklesWonPer90": 2.6,
      "interceptionsPer90": 0.9,
      "ballRecoveriesPer90": 7.0
    },
    "leagueBenchmarks": [
      {
        "metric": "Key Passes per 90",
        "player": 1.52,
        "avg": 0.9,
        "elite": 2.2
      },
      {
        "metric": "Progressive Passes p90",
        "player": 8.9,
        "avg": 2.8,
        "elite": 6.2
      },
      {
        "metric": "Chances Created",
        "player": 86,
        "avg": 16,
        "elite": 55
      },
      {
        "metric": "Passing Accuracy %",
        "player": 93.5,
        "avg": 79.5,
        "elite": 87.0
      }
    ],
    "heatmap": [
      {
        "x": 50,
        "y": 64,
        "r": 42,
        "v": 0.9
      },
      {
        "x": 40,
        "y": 55,
        "r": 35,
        "v": 0.75
      },
      {
        "x": 60,
        "y": 55,
        "r": 35,
        "v": 0.75
      },
      {
        "x": 50,
        "y": 76,
        "r": 30,
        "v": 0.8
      }
    ],
    "strengths": [
      "Dribbling",
      "Passing"
    ],
    "weaknesses": [
      "Defending",
      "Pace"
    ]
  },
  {
    "id": "jordan-henderson",
    "name": "Jordan Henderson",
    "age": 24,
    "position": "MF",
    "role": "Attacking Playmaker",
    "club": "Brentford",
    "league": "Premier League",
    "nation": "Spain",
    "value": 30000000,
    "rating": 80,
    "general": {
      "apps": 22,
      "mins": 1911,
      "goals": 1,
      "assists": 3,
      "yellowCards": 6,
      "redCards": 0
    },
    "attributes": {
      "pace": 62,
      "dribbling": 71,
      "passing": 83,
      "defending": 72,
      "physicality": 77,
      "tactical": 83,
      "workrate": 87
    },
    "detailedStats": {
      "goalsPer90": 0.05,
      "shotsOnTargetPer90": 0.6,
      "expectedGoals": 0.3,
      "shotConversionRate": 11.2,
      "touchesInBoxPer90": 0.7,
      "chancesCreated": 44,
      "dribblesCompletedPer90": 1.6,
      "keyPassesPer90": 0.84,
      "passingAccuracy": 88.0,
      "progressivePassesPer90": 5.6,
      "tacklesWonPer90": 1.9,
      "interceptionsPer90": 0.7,
      "ballRecoveriesPer90": 5.7
    },
    "leagueBenchmarks": [
      {
        "metric": "Key Passes per 90",
        "player": 0.84,
        "avg": 0.9,
        "elite": 2.2
      },
      {
        "metric": "Progressive Passes p90",
        "player": 5.6,
        "avg": 2.8,
        "elite": 6.2
      },
      {
        "metric": "Chances Created",
        "player": 44,
        "avg": 16,
        "elite": 55
      },
      {
        "metric": "Passing Accuracy %",
        "player": 88.0,
        "avg": 79.5,
        "elite": 87.0
      }
    ],
    "heatmap": [
      {
        "x": 50,
        "y": 64,
        "r": 42,
        "v": 0.9
      },
      {
        "x": 40,
        "y": 55,
        "r": 35,
        "v": 0.75
      },
      {
        "x": 60,
        "y": 55,
        "r": 35,
        "v": 0.75
      },
      {
        "x": 50,
        "y": 76,
        "r": 30,
        "v": 0.8
      }
    ],
    "strengths": [
      "Passing",
      "Workrate"
    ],
    "weaknesses": [
      "Dribbling",
      "Pace"
    ]
  },
  {
    "id": "vitaly-janelt",
    "name": "Vitaly Janelt",
    "age": 25,
    "position": "MF",
    "role": "Attacking Playmaker",
    "club": "Brentford",
    "league": "Premier League",
    "nation": "France",
    "value": 29400000,
    "rating": 80,
    "general": {
      "apps": 15,
      "mins": 1434,
      "goals": 1,
      "assists": 4,
      "yellowCards": 8,
      "redCards": 0
    },
    "attributes": {
      "pace": 64,
      "dribbling": 72,
      "passing": 83,
      "defending": 73,
      "physicality": 78,
      "tactical": 84,
      "workrate": 80
    },
    "detailedStats": {
      "goalsPer90": 0.06,
      "shotsOnTargetPer90": 0.6,
      "expectedGoals": 0.8,
      "shotConversionRate": 11.2,
      "touchesInBoxPer90": 0.8,
      "chancesCreated": 43,
      "dribblesCompletedPer90": 1.6,
      "keyPassesPer90": 1.1,
      "passingAccuracy": 87.9,
      "progressivePassesPer90": 5.5,
      "tacklesWonPer90": 2.0,
      "interceptionsPer90": 0.7,
      "ballRecoveriesPer90": 5.8
    },
    "leagueBenchmarks": [
      {
        "metric": "Key Passes per 90",
        "player": 1.1,
        "avg": 0.9,
        "elite": 2.2
      },
      {
        "metric": "Progressive Passes p90",
        "player": 5.5,
        "avg": 2.8,
        "elite": 6.2
      },
      {
        "metric": "Chances Created",
        "player": 43,
        "avg": 16,
        "elite": 55
      },
      {
        "metric": "Passing Accuracy %",
        "player": 87.9,
        "avg": 79.5,
        "elite": 87.0
      }
    ],
    "heatmap": [
      {
        "x": 50,
        "y": 64,
        "r": 42,
        "v": 0.9
      },
      {
        "x": 40,
        "y": 55,
        "r": 35,
        "v": 0.75
      },
      {
        "x": 60,
        "y": 55,
        "r": 35,
        "v": 0.75
      },
      {
        "x": 50,
        "y": 76,
        "r": 30,
        "v": 0.8
      }
    ],
    "strengths": [
      "Passing",
      "Tactical awareness"
    ],
    "weaknesses": [
      "Dribbling",
      "Pace"
    ]
  },
  {
    "id": "mathias-jensen",
    "name": "Mathias Jensen",
    "age": 26,
    "position": "MF",
    "role": "Attacking Playmaker",
    "club": "Brentford",
    "league": "Premier League",
    "nation": "England",
    "value": 29400000,
    "rating": 84,
    "general": {
      "apps": 26,
      "mins": 2239,
      "goals": 3,
      "assists": 2,
      "yellowCards": 3,
      "redCards": 0
    },
    "attributes": {
      "pace": 70,
      "dribbling": 88,
      "passing": 97,
      "defending": 79,
      "physicality": 84,
      "tactical": 95,
      "workrate": 91
    },
    "detailedStats": {
      "goalsPer90": 0.12,
      "shotsOnTargetPer90": 0.7,
      "expectedGoals": 2.2,
      "shotConversionRate": 13.6,
      "touchesInBoxPer90": 1.2,
      "chancesCreated": 79,
      "dribblesCompletedPer90": 2.5,
      "keyPassesPer90": 1.27,
      "passingAccuracy": 92.5,
      "progressivePassesPer90": 8.3,
      "tacklesWonPer90": 2.3,
      "interceptionsPer90": 0.8,
      "ballRecoveriesPer90": 6.4
    },
    "leagueBenchmarks": [
      {
        "metric": "Key Passes per 90",
        "player": 1.27,
        "avg": 0.9,
        "elite": 2.2
      },
      {
        "metric": "Progressive Passes p90",
        "player": 8.3,
        "avg": 2.8,
        "elite": 6.2
      },
      {
        "metric": "Chances Created",
        "player": 79,
        "avg": 16,
        "elite": 55
      },
      {
        "metric": "Passing Accuracy %",
        "player": 92.5,
        "avg": 79.5,
        "elite": 87.0
      }
    ],
    "heatmap": [
      {
        "x": 50,
        "y": 64,
        "r": 42,
        "v": 0.9
      },
      {
        "x": 40,
        "y": 55,
        "r": 35,
        "v": 0.75
      },
      {
        "x": 60,
        "y": 55,
        "r": 35,
        "v": 0.75
      },
      {
        "x": 50,
        "y": 76,
        "r": 30,
        "v": 0.8
      }
    ],
    "strengths": [
      "Passing",
      "Tactical awareness"
    ],
    "weaknesses": [
      "Defending",
      "Pace"
    ]
  },
  {
    "id": "yehor-yarmoliuk",
    "name": "Yehor Yarmoliuk",
    "age": 29,
    "position": "MF",
    "role": "Box-to-Box Midfielder",
    "club": "Brentford",
    "league": "Premier League",
    "nation": "England",
    "value": 30000000,
    "rating": 84,
    "general": {
      "apps": 30,
      "mins": 2652,
      "goals": 1,
      "assists": 3,
      "yellowCards": 7,
      "redCards": 0
    },
    "attributes": {
      "pace": 65,
      "dribbling": 70,
      "passing": 78,
      "defending": 79,
      "physicality": 84,
      "tactical": 85,
      "workrate": 96
    },
    "detailedStats": {
      "goalsPer90": 0.03,
      "shotsOnTargetPer90": 0.5,
      "expectedGoals": 1.2,
      "shotConversionRate": 11.2,
      "touchesInBoxPer90": 0.9,
      "chancesCreated": 34,
      "dribblesCompletedPer90": 1.3,
      "keyPassesPer90": 0.46,
      "passingAccuracy": 86.5,
      "progressivePassesPer90": 4.7,
      "tacklesWonPer90": 2.3,
      "interceptionsPer90": 0.7,
      "ballRecoveriesPer90": 6.5
    },
    "leagueBenchmarks": [
      {
        "metric": "Key Passes per 90",
        "player": 0.46,
        "avg": 0.9,
        "elite": 2.2
      },
      {
        "metric": "Progressive Passes p90",
        "player": 4.7,
        "avg": 2.8,
        "elite": 6.2
      },
      {
        "metric": "Chances Created",
        "player": 34,
        "avg": 16,
        "elite": 55
      },
      {
        "metric": "Passing Accuracy %",
        "player": 86.5,
        "avg": 79.5,
        "elite": 87.0
      }
    ],
    "heatmap": [
      {
        "x": 50,
        "y": 42,
        "r: ": 45,
        "v": 0.9
      },
      {
        "x": 44,
        "y": 35,
        "r": 38,
        "v": 0.8
      },
      {
        "x": 56,
        "y": 35,
        "r": 38,
        "v": 0.8
      },
      {
        "x": 50,
        "y": 55,
        "r": 35,
        "v": 0.75
      }
    ],
    "strengths": [
      "Workrate",
      "Tactical awareness"
    ],
    "weaknesses": [
      "Dribbling",
      "Pace"
    ]
  },
  {
    "id": "igor-thiago-nascimento-rodrigues",
    "name": "Igor Thiago Nascimento Rodrigues",
    "age": 21,
    "position": "FW",
    "role": "Inverted Winger",
    "club": "Brentford",
    "league": "Premier League",
    "nation": "Spain",
    "value": 43200000,
    "rating": 93,
    "general": {
      "apps": 37,
      "mins": 3282,
      "goals": 22,
      "assists": 1,
      "yellowCards": 7,
      "redCards": 0
    },
    "attributes": {
      "pace": 98,
      "dribbling": 96,
      "passing": 85,
      "defending": 50,
      "physicality": 94,
      "tactical": 95,
      "workrate": 96
    },
    "detailedStats": {
      "goalsPer90": 0.6,
      "shotsOnTargetPer90": 1.4,
      "expectedGoals": 20.6,
      "shotConversionRate": 25.0,
      "touchesInBoxPer90": 7.8,
      "chancesCreated": 47,
      "dribblesCompletedPer90": 1.7,
      "keyPassesPer90": 0.52
    },
    "leagueBenchmarks": [
      {
        "metric": "Goals per 90",
        "player": 0.6,
        "avg": 0.22,
        "elite": 0.65
      },
      {
        "metric": "Shot Conversion %",
        "player": 25.0,
        "avg": 10.5,
        "elite": 18.0
      },
      {
        "metric": "Touches in Box p90",
        "player": 7.8,
        "avg": 2.5,
        "elite": 5.5
      },
      {
        "metric": "Expected Goals (xG)",
        "player": 20.6,
        "avg": 4.5,
        "elite": 14.0
      }
    ],
    "heatmap": [
      {
        "x": 22,
        "y": 72,
        "r": 45,
        "v": 0.9
      },
      {
        "x": 22,
        "y": 58,
        "r": 38,
        "v": 0.75
      },
      {
        "x": 28,
        "y": 82,
        "r": 35,
        "v": 0.8
      },
      {
        "x": 50,
        "y": 84,
        "r": 30,
        "v": 0.65
      }
    ],
    "strengths": [
      "Dribbling",
      "Clinical Finishing",
      "Pace"
    ],
    "weaknesses": [
      "Defending",
      "Defensive Tracking Back"
    ]
  },
  {
    "id": "bart-verbruggen",
    "name": "Bart Verbruggen",
    "age": 24,
    "position": "GK",
    "role": "Sweeper Keeper",
    "club": "Brighton",
    "league": "Premier League",
    "nation": "Spain",
    "value": 27600000,
    "rating": 88,
    "general": {
      "apps": 38,
      "mins": 3420,
      "goals": 0,
      "assists": 0,
      "yellowCards": 3,
      "redCards": 0
    },
    "attributes": {
      "pace": 60,
      "dribbling": 55,
      "passing": 90,
      "defending": 93,
      "physicality": 94,
      "tactical": 88,
      "workrate": 96
    },
    "detailedStats": {
      "savePercentage": 81.0,
      "cleanSheets": 10,
      "goalsConceded": 46,
      "psxgDifference": 4.0,
      "passingAccuracy": 90.0,
      "sweeperActionsPer90": 1.3,
      "averageDistanceOfSweeperActions": 13.9
    },
    "leagueBenchmarks": [
      {
        "metric": "Save %",
        "player": 81.0,
        "avg": 69.5,
        "elite": 77.0
      },
      {
        "metric": "Clean Sheets",
        "player": 10,
        "avg": 4.5,
        "elite": 10.0
      },
      {
        "metric": "Sweeper Actions p90",
        "player": 1.3,
        "avg": 0.6,
        "elite": 1.2
      },
      {
        "metric": "Passing Accuracy %",
        "player": 90.0,
        "avg": 73.0,
        "elite": 82.0
      }
    ],
    "heatmap": [
      {
        "x": 50,
        "y": 6,
        "r": 35,
        "v": 0.98
      },
      {
        "x": 50,
        "y": 14,
        "r": 28,
        "v": 0.7
      },
      {
        "x": 45,
        "y": 8,
        "r": 22,
        "v": 0.55
      },
      {
        "x": 55,
        "y": 8,
        "r": 22,
        "v": 0.55
      }
    ],
    "strengths": [
      "Reflexes",
      "Workrate",
      "Physicality"
    ],
    "weaknesses": [
      "Dribbling",
      "Pace"
    ]
  },
  {
    "id": "olivier-boscagli",
    "name": "Olivier Boscagli",
    "age": 28,
    "position": "DF",
    "role": "Central Defender",
    "club": "Brighton",
    "league": "Premier League",
    "nation": "Spain",
    "value": 25200000,
    "rating": 75,
    "general": {
      "apps": 9,
      "mins": 799,
      "goals": 0,
      "assists": 1,
      "yellowCards": 2,
      "redCards": 0
    },
    "attributes": {
      "pace": 65,
      "dribbling": 58,
      "passing": 65,
      "defending": 84,
      "physicality": 69,
      "tactical": 72,
      "workrate": 71
    },
    "detailedStats": {
      "goalsPer90": 0.0,
      "shotsOnTargetPer90": 0.5,
      "expectedGoals": 0.1,
      "shotConversionRate": 10.0,
      "touchesInBoxPer90": 0.5,
      "chancesCreated": 10,
      "dribblesCompletedPer90": 0.7,
      "keyPassesPer90": 0.46,
      "tacklesWonPer90": 1.7,
      "interceptionsPer90": 0.9,
      "clearancesPer90": 2.6,
      "aerialDuelWinPercentage": 65.8,
      "tackledDribblerRate": 53.1,
      "progressivePassesPer90": 1.9,
      "longPassesCompletedPer90": 1.3,
      "passingAccuracy": 81.6
    },
    "leagueBenchmarks": [
      {
        "metric": "Passing Accuracy %",
        "player": 81.6,
        "avg": 82.0,
        "elite": 89.0
      },
      {
        "metric": "Clearances per 90",
        "player": 2.6,
        "avg": 2.6,
        "elite": 4.0
      },
      {
        "metric": "Aerial Duel Win %",
        "player": 65.8,
        "avg": 54.5,
        "elite": 68.0
      },
      {
        "metric": "Tackles Won per 90",
        "player": 1.7,
        "avg": 1.1,
        "elite": 2.0
      }
    ],
    "heatmap": [
      {
        "x": 50,
        "y": 20,
        "r": 45,
        "v": 0.9
      },
      {
        "x": 42,
        "y": 18,
        "r": 32,
        "v": 0.8
      },
      {
        "x": 58,
        "y": 18,
        "r": 32,
        "v": 0.8
      },
      {
        "x": 50,
        "y": 10,
        "r": 28,
        "v": 0.6
      }
    ],
    "strengths": [
      "Defending",
      "Tactical awareness"
    ],
    "weaknesses": [
      "Dribbling",
      "Passing"
    ]
  },
  {
    "id": "diego-coppola",
    "name": "Diego Coppola",
    "age": 29,
    "position": "DF",
    "role": "Central Defender",
    "club": "Brighton",
    "league": "Premier League",
    "nation": "England",
    "value": 25200000,
    "rating": 71,
    "general": {
      "apps": 2,
      "mins": 193,
      "goals": 0,
      "assists": 0,
      "yellowCards": 2,
      "redCards": 0
    },
    "attributes": {
      "pace": 65,
      "dribbling": 55,
      "passing": 60,
      "defending": 74,
      "physicality": 57,
      "tactical": 66,
      "workrate": 62
    },
    "detailedStats": {
      "goalsPer90": 0.0,
      "shotsOnTargetPer90": 0.5,
      "expectedGoals": 0.0,
      "shotConversionRate": 10.0,
      "touchesInBoxPer90": 0.5,
      "chancesCreated": 0,
      "dribblesCompletedPer90": 0.4,
      "keyPassesPer90": 0.09,
      "tacklesWonPer90": 1.1,
      "interceptionsPer90": 0.8,
      "clearancesPer90": 1.7,
      "aerialDuelWinPercentage": 57.1,
      "tackledDribblerRate": 50.5,
      "progressivePassesPer90": 1.5,
      "longPassesCompletedPer90": 1.0,
      "passingAccuracy": 80.1
    },
    "leagueBenchmarks": [
      {
        "metric": "Passing Accuracy %",
        "player": 80.1,
        "avg": 82.0,
        "elite": 89.0
      },
      {
        "metric": "Clearances per 90",
        "player": 1.7,
        "avg": 2.6,
        "elite": 4.0
      },
      {
        "metric": "Aerial Duel Win %",
        "player": 57.1,
        "avg": 54.5,
        "elite": 68.0
      },
      {
        "metric": "Tackles Won per 90",
        "player": 1.1,
        "avg": 1.1,
        "elite": 2.0
      }
    ],
    "heatmap": [
      {
        "x": 50,
        "y": 20,
        "r": 45,
        "v": 0.9
      },
      {
        "x": 42,
        "y": 18,
        "r": 32,
        "v": 0.8
      },
      {
        "x": 58,
        "y": 18,
        "r": 32,
        "v": 0.8
      },
      {
        "x": 50,
        "y": 10,
        "r": 28,
        "v": 0.6
      }
    ],
    "strengths": [
      "Defending",
      "Tactical awareness"
    ],
    "weaknesses": [
      "Dribbling",
      "Physicality"
    ]
  },
  {
    "id": "maxim-de-cuyper",
    "name": "Maxim De Cuyper",
    "age": 30,
    "position": "DF",
    "role": "Attacking Fullback",
    "club": "Brighton",
    "league": "Premier League",
    "nation": "France",
    "value": 25800000,
    "rating": 82,
    "general": {
      "apps": 17,
      "mins": 1404,
      "goals": 2,
      "assists": 3,
      "yellowCards": 2,
      "redCards": 0
    },
    "attributes": {
      "pace": 71,
      "dribbling": 81,
      "passing": 94,
      "defending": 93,
      "physicality": 76,
      "tactical": 89,
      "workrate": 80
    },
    "detailedStats": {
      "goalsPer90": 0.13,
      "shotsOnTargetPer90": 0.7,
      "expectedGoals": 1.7,
      "shotConversionRate": 12.4,
      "touchesInBoxPer90": 1.0,
      "chancesCreated": 64,
      "dribblesCompletedPer90": 2.1,
      "keyPassesPer90": 1.66,
      "tacklesWonPer90": 2.1,
      "interceptionsPer90": 1.1,
      "clearancesPer90": 3.1,
      "aerialDuelWinPercentage": 71.4,
      "tackledDribblerRate": 60.0,
      "progressivePassesPer90": 4.1,
      "longPassesCompletedPer90": 2.7,
      "passingAccuracy": 90.3
    },
    "leagueBenchmarks": [
      {
        "metric": "Passing Accuracy %",
        "player": 90.3,
        "avg": 82.0,
        "elite": 89.0
      },
      {
        "metric": "Clearances per 90",
        "player": 3.1,
        "avg": 2.6,
        "elite": 4.0
      },
      {
        "metric": "Aerial Duel Win %",
        "player": 71.4,
        "avg": 54.5,
        "elite": 68.0
      },
      {
        "metric": "Tackles Won per 90",
        "player": 2.1,
        "avg": 1.1,
        "elite": 2.0
      }
    ],
    "heatmap": [
      {
        "x": 86,
        "y": 25,
        "r": 38,
        "v": 0.8
      },
      {
        "x": 86,
        "y": 45,
        "r": 40,
        "v": 0.85
      },
      {
        "x": 86,
        "y": 65,
        "r": 35,
        "v": 0.7
      },
      {
        "x": 86,
        "y": 12,
        "r": 30,
        "v": 0.6
      }
    ],
    "strengths": [
      "Passing",
      "Aerial Dominance",
      "Defending"
    ],
    "weaknesses": [
      "Physicality",
      "Pace"
    ]
  },
  {
    "id": "lewis-dunk",
    "name": "Lewis Dunk",
    "age": 31,
    "position": "DF",
    "role": "Attacking Fullback",
    "club": "Brighton",
    "league": "Premier League",
    "nation": "Spain",
    "value": 27000000,
    "rating": 84,
    "general": {
      "apps": 31,
      "mins": 2837,
      "goals": 1,
      "assists": 1,
      "yellowCards": 10,
      "redCards": 0
    },
    "attributes": {
      "pace": 73,
      "dribbling": 68,
      "passing": 68,
      "defending": 94,
      "physicality": 94,
      "tactical": 89,
      "workrate": 96
    },
    "detailedStats": {
      "goalsPer90": 0.03,
      "shotsOnTargetPer90": 0.5,
      "expectedGoals": 1.8,
      "shotConversionRate": 11.2,
      "touchesInBoxPer90": 1.2,
      "chancesCreated": 15,
      "dribblesCompletedPer90": 0.8,
      "keyPassesPer90": 0.2,
      "tacklesWonPer90": 3.2,
      "interceptionsPer90": 1.1,
      "clearancesPer90": 4.7,
      "aerialDuelWinPercentage": 80.0,
      "tackledDribblerRate": 59.9,
      "progressivePassesPer90": 2.1,
      "longPassesCompletedPer90": 1.4,
      "passingAccuracy": 82.5
    },
    "leagueBenchmarks": [
      {
        "metric": "Passing Accuracy %",
        "player": 82.5,
        "avg": 82.0,
        "elite": 89.0
      },
      {
        "metric": "Clearances per 90",
        "player": 4.7,
        "avg": 2.6,
        "elite": 4.0
      },
      {
        "metric": "Aerial Duel Win %",
        "player": 80.0,
        "avg": 54.5,
        "elite": 68.0
      },
      {
        "metric": "Tackles Won per 90",
        "player": 3.2,
        "avg": 1.1,
        "elite": 2.0
      }
    ],
    "heatmap": [
      {
        "x": 14,
        "y": 25,
        "r": 38,
        "v": 0.8
      },
      {
        "x": 14,
        "y": 45,
        "r": 40,
        "v": 0.85
      },
      {
        "x": 14,
        "y": 65,
        "r": 35,
        "v": 0.7
      },
      {
        "x": 14,
        "y": 12,
        "r": 30,
        "v": 0.6
      }
    ],
    "strengths": [
      "Defending",
      "Workrate",
      "Aerial Dominance"
    ],
    "weaknesses": [
      "Dribbling",
      "Passing"
    ]
  },
  {
    "id": "ferdi-kad\u0131o\u011flu",
    "name": "Ferdi Kad\u0131o\u011flu",
    "age": 33,
    "position": "DF",
    "role": "Attacking Fullback",
    "club": "Brighton",
    "league": "Premier League",
    "nation": "Spain",
    "value": 27000000,
    "rating": 86,
    "general": {
      "apps": 34,
      "mins": 3130,
      "goals": 1,
      "assists": 2,
      "yellowCards": 6,
      "redCards": 0
    },
    "attributes": {
      "pace": 76,
      "dribbling": 84,
      "passing": 89,
      "defending": 94,
      "physicality": 88,
      "tactical": 95,
      "workrate": 96
    },
    "detailedStats": {
      "goalsPer90": 0.03,
      "shotsOnTargetPer90": 0.5,
      "expectedGoals": 2.1,
      "shotConversionRate": 11.2,
      "touchesInBoxPer90": 1.4,
      "chancesCreated": 55,
      "dribblesCompletedPer90": 1.9,
      "keyPassesPer90": 0.64,
      "tacklesWonPer90": 2.7,
      "interceptionsPer90": 1.2,
      "clearancesPer90": 4.0,
      "aerialDuelWinPercentage": 80.0,
      "tackledDribblerRate": 62.4,
      "progressivePassesPer90": 3.7,
      "longPassesCompletedPer90": 2.5,
      "passingAccuracy": 88.9
    },
    "leagueBenchmarks": [
      {
        "metric": "Passing Accuracy %",
        "player": 88.9,
        "avg": 82.0,
        "elite": 89.0
      },
      {
        "metric": "Clearances per 90",
        "player": 4.0,
        "avg": 2.6,
        "elite": 4.0
      },
      {
        "metric": "Aerial Duel Win %",
        "player": 80.0,
        "avg": 54.5,
        "elite": 68.0
      },
      {
        "metric": "Tackles Won per 90",
        "player": 2.7,
        "avg": 1.1,
        "elite": 2.0
      }
    ],
    "heatmap": [
      {
        "x": 14,
        "y": 25,
        "r": 38,
        "v": 0.8
      },
      {
        "x": 14,
        "y": 45,
        "r": 40,
        "v": 0.85
      },
      {
        "x": 14,
        "y": 65,
        "r": 35,
        "v": 0.7
      },
      {
        "x": 14,
        "y": 12,
        "r": 30,
        "v": 0.6
      }
    ],
    "strengths": [
      "Workrate",
      "Tactical awareness",
      "Aerial Dominance"
    ],
    "weaknesses": [
      "Dribbling",
      "Pace"
    ]
  },
  {
    "id": "jan-paul-van-hecke",
    "name": "Jan Paul van Hecke",
    "age": 21,
    "position": "DF",
    "role": "Attacking Fullback",
    "club": "Brighton",
    "league": "Premier League",
    "nation": "Spain",
    "value": 28200000,
    "rating": 91,
    "general": {
      "apps": 36,
      "mins": 3210,
      "goals": 3,
      "assists": 3,
      "yellowCards": 9,
      "redCards": 0
    },
    "attributes": {
      "pace": 76,
      "dribbling": 76,
      "passing": 76,
      "defending": 94,
      "physicality": 94,
      "tactical": 95,
      "workrate": 96
    },
    "detailedStats": {
      "goalsPer90": 0.08,
      "shotsOnTargetPer90": 0.6,
      "expectedGoals": 3.3,
      "shotConversionRate": 13.6,
      "touchesInBoxPer90": 1.5,
      "chancesCreated": 30,
      "dribblesCompletedPer90": 1.2,
      "keyPassesPer90": 0.34,
      "tacklesWonPer90": 4.3,
      "interceptionsPer90": 1.3,
      "clearancesPer90": 6.4,
      "aerialDuelWinPercentage": 80.0,
      "tackledDribblerRate": 65.2,
      "progressivePassesPer90": 2.7,
      "longPassesCompletedPer90": 1.8,
      "passingAccuracy": 84.8
    },
    "leagueBenchmarks": [
      {
        "metric": "Passing Accuracy %",
        "player": 84.8,
        "avg": 82.0,
        "elite": 89.0
      },
      {
        "metric": "Clearances per 90",
        "player": 6.4,
        "avg": 2.6,
        "elite": 4.0
      },
      {
        "metric": "Aerial Duel Win %",
        "player": 80.0,
        "avg": 54.5,
        "elite": 68.0
      },
      {
        "metric": "Tackles Won per 90",
        "player": 4.3,
        "avg": 1.1,
        "elite": 2.0
      }
    ],
    "heatmap": [
      {
        "x": 86,
        "y": 25,
        "r": 38,
        "v": 0.8
      },
      {
        "x": 86,
        "y": 45,
        "r": 40,
        "v": 0.85
      },
      {
        "x": 86,
        "y": 65,
        "r": 35,
        "v": 0.7
      },
      {
        "x": 86,
        "y": 12,
        "r": 30,
        "v": 0.6
      }
    ],
    "strengths": [
      "Workrate",
      "Tactical awareness",
      "Aerial Dominance"
    ],
    "weaknesses": [
      "Dribbling",
      "Passing"
    ]
  },
  {
    "id": "jo\u00ebl-veltman",
    "name": "Jo\u00ebl Veltman",
    "age": 22,
    "position": "DF",
    "role": "Central Defender",
    "club": "Brighton",
    "league": "Premier League",
    "nation": "Spain",
    "value": 25800000,
    "rating": 76,
    "general": {
      "apps": 9,
      "mins": 1047,
      "goals": 1,
      "assists": 0,
      "yellowCards": 5,
      "redCards": 0
    },
    "attributes": {
      "pace": 67,
      "dribbling": 60,
      "passing": 65,
      "defending": 86,
      "physicality": 71,
      "tactical": 74,
      "workrate": 74
    },
    "detailedStats": {
      "goalsPer90": 0.09,
      "shotsOnTargetPer90": 0.6,
      "expectedGoals": 1.1,
      "shotConversionRate": 11.2,
      "touchesInBoxPer90": 0.7,
      "chancesCreated": 10,
      "dribblesCompletedPer90": 0.7,
      "keyPassesPer90": 0.35,
      "tacklesWonPer90": 1.8,
      "interceptionsPer90": 0.9,
      "clearancesPer90": 2.7,
      "aerialDuelWinPercentage": 67.3,
      "tackledDribblerRate": 54.0,
      "progressivePassesPer90": 1.9,
      "longPassesCompletedPer90": 1.3,
      "passingAccuracy": 81.6
    },
    "leagueBenchmarks": [
      {
        "metric": "Passing Accuracy %",
        "player": 81.6,
        "avg": 82.0,
        "elite": 89.0
      },
      {
        "metric": "Clearances per 90",
        "player": 2.7,
        "avg": 2.6,
        "elite": 4.0
      },
      {
        "metric": "Aerial Duel Win %",
        "player": 67.3,
        "avg": 54.5,
        "elite": 68.0
      },
      {
        "metric": "Tackles Won per 90",
        "player": 1.8,
        "avg": 1.1,
        "elite": 2.0
      }
    ],
    "heatmap": [
      {
        "x": 50,
        "y": 20,
        "r": 45,
        "v": 0.9
      },
      {
        "x": 42,
        "y": 18,
        "r": 32,
        "v": 0.8
      },
      {
        "x": 58,
        "y": 18,
        "r": 32,
        "v": 0.8
      },
      {
        "x": 50,
        "y": 10,
        "r": 28,
        "v": 0.6
      }
    ],
    "strengths": [
      "Defending",
      "Tactical awareness"
    ],
    "weaknesses": [
      "Dribbling",
      "Passing"
    ]
  },
  {
    "id": "mitoma-kaoru",
    "name": "Mitoma Kaoru",
    "age": 27,
    "position": "MF",
    "role": "Attacking Playmaker",
    "club": "Brighton",
    "league": "Premier League",
    "nation": "Spain",
    "value": 36600000,
    "rating": 78,
    "general": {
      "apps": 19,
      "mins": 1714,
      "goals": 3,
      "assists": 1,
      "yellowCards": 5,
      "redCards": 0
    },
    "attributes": {
      "pace": 80,
      "dribbling": 88,
      "passing": 88,
      "defending": 69,
      "physicality": 74,
      "tactical": 93,
      "workrate": 84
    },
    "detailedStats": {
      "goalsPer90": 0.16,
      "shotsOnTargetPer90": 0.7,
      "expectedGoals": 4.0,
      "shotConversionRate": 13.6,
      "touchesInBoxPer90": 1.9,
      "chancesCreated": 52,
      "dribblesCompletedPer90": 1.8,
      "keyPassesPer90": 1.11,
      "passingAccuracy": 89.0,
      "progressivePassesPer90": 6.2,
      "tacklesWonPer90": 1.8,
      "interceptionsPer90": 0.8,
      "ballRecoveriesPer90": 5.4
    },
    "leagueBenchmarks": [
      {
        "metric": "Key Passes per 90",
        "player": 1.11,
        "avg": 0.9,
        "elite": 2.2
      },
      {
        "metric": "Progressive Passes p90",
        "player": 6.2,
        "avg": 2.8,
        "elite": 6.2
      },
      {
        "metric": "Chances Created",
        "player": 52,
        "avg": 16,
        "elite": 55
      },
      {
        "metric": "Passing Accuracy %",
        "player": 89.0,
        "avg": 79.5,
        "elite": 87.0
      }
    ],
    "heatmap": [
      {
        "x": 50,
        "y": 64,
        "r": 42,
        "v": 0.9
      },
      {
        "x": 40,
        "y": 55,
        "r": 35,
        "v": 0.75
      },
      {
        "x": 60,
        "y": 55,
        "r": 35,
        "v": 0.75
      },
      {
        "x": 50,
        "y": 76,
        "r": 30,
        "v": 0.8
      }
    ],
    "strengths": [
      "Dribbling",
      "Tactical awareness"
    ],
    "weaknesses": [
      "Defending",
      "Physicality"
    ]
  },
  {
    "id": "georginio-rutter",
    "name": "Georginio Rutter",
    "age": 28,
    "position": "MF",
    "role": "Box-to-Box Midfielder",
    "club": "Brighton",
    "league": "Premier League",
    "nation": "Spain",
    "value": 33600000,
    "rating": 82,
    "general": {
      "apps": 20,
      "mins": 1776,
      "goals": 3,
      "assists": 5,
      "yellowCards": 2,
      "redCards": 0
    },
    "attributes": {
      "pace": 82,
      "dribbling": 86,
      "passing": 83,
      "defending": 72,
      "physicality": 77,
      "tactical": 93,
      "workrate": 85
    },
    "detailedStats": {
      "goalsPer90": 0.15,
      "shotsOnTargetPer90": 0.7,
      "expectedGoals": 2.9,
      "shotConversionRate": 13.6,
      "touchesInBoxPer90": 2.0,
      "chancesCreated": 43,
      "dribblesCompletedPer90": 1.6,
      "keyPassesPer90": 0.89,
      "passingAccuracy": 87.8,
      "progressivePassesPer90": 5.5,
      "tacklesWonPer90": 1.9,
      "interceptionsPer90": 0.8,
      "ballRecoveriesPer90": 5.8
    },
    "leagueBenchmarks": [
      {
        "metric": "Key Passes per 90",
        "player": 0.89,
        "avg": 0.9,
        "elite": 2.2
      },
      {
        "metric": "Progressive Passes p90",
        "player": 5.5,
        "avg": 2.8,
        "elite": 6.2
      },
      {
        "metric": "Chances Created",
        "player": 43,
        "avg": 16,
        "elite": 55
      },
      {
        "metric": "Passing Accuracy %",
        "player": 87.8,
        "avg": 79.5,
        "elite": 87.0
      }
    ],
    "heatmap": [
      {
        "x": 50,
        "y": 42,
        "r: ": 45,
        "v": 0.9
      },
      {
        "x": 44,
        "y": 35,
        "r": 38,
        "v": 0.8
      },
      {
        "x": 56,
        "y": 35,
        "r": 38,
        "v": 0.8
      },
      {
        "x": 50,
        "y": 55,
        "r": 35,
        "v": 0.75
      }
    ],
    "strengths": [
      "Dribbling",
      "Tactical awareness"
    ],
    "weaknesses": [
      "Defending",
      "Physicality"
    ]
  },
  {
    "id": "yankuba-minteh",
    "name": "Yankuba Minteh",
    "age": 30,
    "position": "MF",
    "role": "Attacking Playmaker",
    "club": "Brighton",
    "league": "Premier League",
    "nation": "France",
    "value": 33000000,
    "rating": 86,
    "general": {
      "apps": 26,
      "mins": 2389,
      "goals": 3,
      "assists": 8,
      "yellowCards": 3,
      "redCards": 0
    },
    "attributes": {
      "pace": 90,
      "dribbling": 96,
      "passing": 97,
      "defending": 82,
      "physicality": 87,
      "tactical": 95,
      "workrate": 94
    },
    "detailedStats": {
      "goalsPer90": 0.11,
      "shotsOnTargetPer90": 0.7,
      "expectedGoals": 3.8,
      "shotConversionRate": 13.6,
      "touchesInBoxPer90": 2.6,
      "chancesCreated": 86,
      "dribblesCompletedPer90": 2.7,
      "keyPassesPer90": 1.3,
      "passingAccuracy": 93.5,
      "progressivePassesPer90": 8.9,
      "tacklesWonPer90": 2.4,
      "interceptionsPer90": 1.0,
      "ballRecoveriesPer90": 6.8
    },
    "leagueBenchmarks": [
      {
        "metric": "Key Passes per 90",
        "player": 1.3,
        "avg": 0.9,
        "elite": 2.2
      },
      {
        "metric": "Progressive Passes p90",
        "player": 8.9,
        "avg": 2.8,
        "elite": 6.2
      },
      {
        "metric": "Chances Created",
        "player": 86,
        "avg": 16,
        "elite": 55
      },
      {
        "metric": "Passing Accuracy %",
        "player": 93.5,
        "avg": 79.5,
        "elite": 87.0
      }
    ],
    "heatmap": [
      {
        "x": 50,
        "y": 64,
        "r": 42,
        "v": 0.9
      },
      {
        "x": 40,
        "y": 55,
        "r": 35,
        "v": 0.75
      },
      {
        "x": 60,
        "y": 55,
        "r": 35,
        "v": 0.75
      },
      {
        "x": 50,
        "y": 76,
        "r": 30,
        "v": 0.8
      }
    ],
    "strengths": [
      "Dribbling",
      "Passing",
      "Creative Vision"
    ],
    "weaknesses": [
      "Defending",
      "Physicality"
    ]
  },
  {
    "id": "brajan-gruda",
    "name": "Brajan Gruda",
    "age": 32,
    "position": "MF",
    "role": "Box-to-Box Midfielder",
    "club": "Brighton",
    "league": "Premier League",
    "nation": "England",
    "value": 32400000,
    "rating": 75,
    "general": {
      "apps": 8,
      "mins": 708,
      "goals": 1,
      "assists": 1,
      "yellowCards": 2,
      "redCards": 0
    },
    "attributes": {
      "pace": 67,
      "dribbling": 69,
      "passing": 74,
      "defending": 58,
      "physicality": 63,
      "tactical": 77,
      "workrate": 70
    },
    "detailedStats": {
      "goalsPer90": 0.13,
      "shotsOnTargetPer90": 0.7,
      "expectedGoals": 1.9,
      "shotConversionRate": 11.2,
      "touchesInBoxPer90": 1.0,
      "chancesCreated": 27,
      "dribblesCompletedPer90": 1.1,
      "keyPassesPer90": 1.38,
      "passingAccuracy": 85.6,
      "progressivePassesPer90": 4.2,
      "tacklesWonPer90": 1.2,
      "interceptionsPer90": 0.6,
      "ballRecoveriesPer90": 4.4
    },
    "leagueBenchmarks": [
      {
        "metric": "Key Passes per 90",
        "player": 1.38,
        "avg": 0.9,
        "elite": 2.2
      },
      {
        "metric": "Progressive Passes p90",
        "player": 4.2,
        "avg": 2.8,
        "elite": 6.2
      },
      {
        "metric": "Chances Created",
        "player": 27,
        "avg": 16,
        "elite": 55
      },
      {
        "metric": "Passing Accuracy %",
        "player": 85.6,
        "avg": 79.5,
        "elite": 87.0
      }
    ],
    "heatmap": [
      {
        "x": 50,
        "y": 42,
        "r: ": 45,
        "v": 0.9
      },
      {
        "x": 44,
        "y": 35,
        "r": 38,
        "v": 0.8
      },
      {
        "x": 56,
        "y": 35,
        "r": 38,
        "v": 0.8
      },
      {
        "x": 50,
        "y": 55,
        "r": 35,
        "v": 0.75
      }
    ],
    "strengths": [
      "Passing",
      "Tactical awareness"
    ],
    "weaknesses": [
      "Defending",
      "Physicality"
    ]
  },
  {
    "id": "jack-hinshelwood",
    "name": "Jack Hinshelwood",
    "age": 33,
    "position": "MF",
    "role": "Box-to-Box Midfielder",
    "club": "Brighton",
    "league": "Premier League",
    "nation": "Spain",
    "value": 31200000,
    "rating": 83,
    "general": {
      "apps": 20,
      "mins": 1736,
      "goals": 4,
      "assists": 5,
      "yellowCards": 0,
      "redCards": 0
    },
    "attributes": {
      "pace": 80,
      "dribbling": 80,
      "passing": 75,
      "defending": 70,
      "physicality": 75,
      "tactical": 88,
      "workrate": 84
    },
    "detailedStats": {
      "goalsPer90": 0.21,
      "shotsOnTargetPer90": 0.8,
      "expectedGoals": 4.9,
      "shotConversionRate": 14.8,
      "touchesInBoxPer90": 1.9,
      "chancesCreated": 28,
      "dribblesCompletedPer90": 1.2,
      "keyPassesPer90": 0.59,
      "passingAccuracy": 85.8,
      "progressivePassesPer90": 4.3,
      "tacklesWonPer90": 1.8,
      "interceptionsPer90": 0.7,
      "ballRecoveriesPer90": 5.6
    },
    "leagueBenchmarks": [
      {
        "metric": "Key Passes per 90",
        "player": 0.59,
        "avg": 0.9,
        "elite": 2.2
      },
      {
        "metric": "Progressive Passes p90",
        "player": 4.3,
        "avg": 2.8,
        "elite": 6.2
      },
      {
        "metric": "Chances Created",
        "player": 28,
        "avg": 16,
        "elite": 55
      },
      {
        "metric": "Passing Accuracy %",
        "player": 85.8,
        "avg": 79.5,
        "elite": 87.0
      }
    ],
    "heatmap": [
      {
        "x": 50,
        "y": 42,
        "r: ": 45,
        "v": 0.9
      },
      {
        "x": 44,
        "y": 35,
        "r": 38,
        "v": 0.8
      },
      {
        "x": 56,
        "y": 35,
        "r": 38,
        "v": 0.8
      },
      {
        "x": 50,
        "y": 55,
        "r": 35,
        "v": 0.75
      }
    ],
    "strengths": [
      "Workrate",
      "Tactical awareness"
    ],
    "weaknesses": [
      "Defending",
      "Physicality"
    ]
  },
  {
    "id": "matt-o'riley",
    "name": "Matt O'Riley",
    "age": 34,
    "position": "MF",
    "role": "Box-to-Box Midfielder",
    "club": "Brighton",
    "league": "Premier League",
    "nation": "Spain",
    "value": 33000000,
    "rating": 72,
    "general": {
      "apps": 2,
      "mins": 202,
      "goals": 1,
      "assists": 0,
      "yellowCards": 0,
      "redCards": 0
    },
    "attributes": {
      "pace": 63,
      "dribbling": 60,
      "passing": 64,
      "defending": 54,
      "physicality": 59,
      "tactical": 69,
      "workrate": 62
    },
    "detailedStats": {
      "goalsPer90": 0.45,
      "shotsOnTargetPer90": 1.2,
      "expectedGoals": 1.2,
      "shotConversionRate": 11.2,
      "touchesInBoxPer90": 0.7,
      "chancesCreated": 8,
      "dribblesCompletedPer90": 0.6,
      "keyPassesPer90": 1.51,
      "passingAccuracy": 83.1,
      "progressivePassesPer90": 2.7,
      "tacklesWonPer90": 1.0,
      "interceptionsPer90": 0.5,
      "ballRecoveriesPer90": 3.9
    },
    "leagueBenchmarks": [
      {
        "metric": "Key Passes per 90",
        "player": 1.51,
        "avg": 0.9,
        "elite": 2.2
      },
      {
        "metric": "Progressive Passes p90",
        "player": 2.7,
        "avg": 2.8,
        "elite": 6.2
      },
      {
        "metric": "Chances Created",
        "player": 8,
        "avg": 16,
        "elite": 55
      },
      {
        "metric": "Passing Accuracy %",
        "player": 83.1,
        "avg": 79.5,
        "elite": 87.0
      }
    ],
    "heatmap": [
      {
        "x": 50,
        "y": 42,
        "r: ": 45,
        "v": 0.9
      },
      {
        "x": 44,
        "y": 35,
        "r": 38,
        "v": 0.8
      },
      {
        "x": 56,
        "y": 35,
        "r": 38,
        "v": 0.8
      },
      {
        "x": 50,
        "y": 55,
        "r": 35,
        "v": 0.75
      }
    ],
    "strengths": [
      "Passing",
      "Tactical awareness"
    ],
    "weaknesses": [
      "Defending",
      "Physicality"
    ]
  },
  {
    "id": "yasin-ayari",
    "name": "Yasin Ayari",
    "age": 21,
    "position": "MF",
    "role": "Box-to-Box Midfielder",
    "club": "Brighton",
    "league": "Premier League",
    "nation": "Spain",
    "value": 28800000,
    "rating": 84,
    "general": {
      "apps": 20,
      "mins": 1921,
      "goals": 3,
      "assists": 4,
      "yellowCards": 1,
      "redCards": 0
    },
    "attributes": {
      "pace": 71,
      "dribbling": 74,
      "passing": 76,
      "defending": 73,
      "physicality": 78,
      "tactical": 86,
      "workrate": 87
    },
    "detailedStats": {
      "goalsPer90": 0.14,
      "shotsOnTargetPer90": 0.7,
      "expectedGoals": 2.7,
      "shotConversionRate": 13.6,
      "touchesInBoxPer90": 1.3,
      "chancesCreated": 31,
      "dribblesCompletedPer90": 1.2,
      "keyPassesPer90": 0.59,
      "passingAccuracy": 86.2,
      "progressivePassesPer90": 4.5,
      "tacklesWonPer90": 2.0,
      "interceptionsPer90": 0.7,
      "ballRecoveriesPer90": 5.9
    },
    "leagueBenchmarks": [
      {
        "metric": "Key Passes per 90",
        "player": 0.59,
        "avg": 0.9,
        "elite": 2.2
      },
      {
        "metric": "Progressive Passes p90",
        "player": 4.5,
        "avg": 2.8,
        "elite": 6.2
      },
      {
        "metric": "Chances Created",
        "player": 31,
        "avg": 16,
        "elite": 55
      },
      {
        "metric": "Passing Accuracy %",
        "player": 86.2,
        "avg": 79.5,
        "elite": 87.0
      }
    ],
    "heatmap": [
      {
        "x": 50,
        "y": 42,
        "r: ": 45,
        "v": 0.9
      },
      {
        "x": 44,
        "y": 35,
        "r": 38,
        "v": 0.8
      },
      {
        "x": 56,
        "y": 35,
        "r": 38,
        "v": 0.8
      },
      {
        "x": 50,
        "y": 55,
        "r": 35,
        "v": 0.75
      }
    ],
    "strengths": [
      "Workrate",
      "Tactical awareness"
    ],
    "weaknesses": [
      "Defending",
      "Pace"
    ]
  },
  {
    "id": "carlos-baleba",
    "name": "Carlos Baleba",
    "age": 22,
    "position": "MF",
    "role": "Box-to-Box Midfielder",
    "club": "Brighton",
    "league": "Premier League",
    "nation": "Spain",
    "value": 27000000,
    "rating": 78,
    "general": {
      "apps": 23,
      "mins": 1646,
      "goals": 0,
      "assists": 0,
      "yellowCards": 5,
      "redCards": 0
    },
    "attributes": {
      "pace": 62,
      "dribbling": 63,
      "passing": 70,
      "defending": 61,
      "physicality": 66,
      "tactical": 74,
      "workrate": 83
    },
    "detailedStats": {
      "goalsPer90": 0.0,
      "shotsOnTargetPer90": 0.5,
      "expectedGoals": 0.8,
      "shotConversionRate": 10.0,
      "touchesInBoxPer90": 0.6,
      "chancesCreated": 19,
      "dribblesCompletedPer90": 0.9,
      "keyPassesPer90": 0.43,
      "passingAccuracy": 84.6,
      "progressivePassesPer90": 3.6,
      "tacklesWonPer90": 1.4,
      "interceptionsPer90": 0.6,
      "ballRecoveriesPer90": 4.6
    },
    "leagueBenchmarks": [
      {
        "metric": "Key Passes per 90",
        "player": 0.43,
        "avg": 0.9,
        "elite": 2.2
      },
      {
        "metric": "Progressive Passes p90",
        "player": 3.6,
        "avg": 2.8,
        "elite": 6.2
      },
      {
        "metric": "Chances Created",
        "player": 19,
        "avg": 16,
        "elite": 55
      },
      {
        "metric": "Passing Accuracy %",
        "player": 84.6,
        "avg": 79.5,
        "elite": 87.0
      }
    ],
    "heatmap": [
      {
        "x": 50,
        "y": 42,
        "r: ": 45,
        "v": 0.9
      },
      {
        "x": 44,
        "y": 35,
        "r": 38,
        "v": 0.8
      },
      {
        "x": 56,
        "y": 35,
        "r": 38,
        "v": 0.8
      },
      {
        "x": 50,
        "y": 55,
        "r": 35,
        "v": 0.75
      }
    ],
    "strengths": [
      "Workrate",
      "Tactical awareness"
    ],
    "weaknesses": [
      "Defending",
      "Pace"
    ]
  },
  {
    "id": "diego-g\u00f3mez-amarilla",
    "name": "Diego G\u00f3mez Amarilla",
    "age": 24,
    "position": "MF",
    "role": "Attacking Playmaker",
    "club": "Brighton",
    "league": "Premier League",
    "nation": "Spain",
    "value": 29400000,
    "rating": 83,
    "general": {
      "apps": 26,
      "mins": 2117,
      "goals": 5,
      "assists": 1,
      "yellowCards": 9,
      "redCards": 0
    },
    "attributes": {
      "pace": 81,
      "dribbling": 85,
      "passing": 81,
      "defending": 79,
      "physicality": 84,
      "tactical": 94,
      "workrate": 90
    },
    "detailedStats": {
      "goalsPer90": 0.21,
      "shotsOnTargetPer90": 0.8,
      "expectedGoals": 6.2,
      "shotConversionRate": 16.0,
      "touchesInBoxPer90": 1.9,
      "chancesCreated": 39,
      "dribblesCompletedPer90": 1.5,
      "keyPassesPer90": 0.68,
      "passingAccuracy": 87.3,
      "progressivePassesPer90": 5.2,
      "tacklesWonPer90": 2.3,
      "interceptionsPer90": 0.8,
      "ballRecoveriesPer90": 6.4
    },
    "leagueBenchmarks": [
      {
        "metric": "Key Passes per 90",
        "player": 0.68,
        "avg": 0.9,
        "elite": 2.2
      },
      {
        "metric": "Progressive Passes p90",
        "player": 5.2,
        "avg": 2.8,
        "elite": 6.2
      },
      {
        "metric": "Chances Created",
        "player": 39,
        "avg": 16,
        "elite": 55
      },
      {
        "metric": "Passing Accuracy %",
        "player": 87.3,
        "avg": 79.5,
        "elite": 87.0
      }
    ],
    "heatmap": [
      {
        "x": 50,
        "y": 64,
        "r": 42,
        "v": 0.9
      },
      {
        "x": 40,
        "y": 55,
        "r": 35,
        "v": 0.75
      },
      {
        "x": 60,
        "y": 55,
        "r": 35,
        "v": 0.75
      },
      {
        "x": 50,
        "y": 76,
        "r": 30,
        "v": 0.8
      }
    ],
    "strengths": [
      "Workrate",
      "Tactical awareness"
    ],
    "weaknesses": [
      "Passing",
      "Defending"
    ]
  },
  {
    "id": "james-milner",
    "name": "James Milner",
    "age": 25,
    "position": "MF",
    "role": "Box-to-Box Midfielder",
    "club": "Brighton",
    "league": "Premier League",
    "nation": "France",
    "value": 29400000,
    "rating": 75,
    "general": {
      "apps": 7,
      "mins": 772,
      "goals": 1,
      "assists": 1,
      "yellowCards": 2,
      "redCards": 0
    },
    "attributes": {
      "pace": 62,
      "dribbling": 63,
      "passing": 70,
      "defending": 59,
      "physicality": 64,
      "tactical": 73,
      "workrate": 71
    },
    "detailedStats": {
      "goalsPer90": 0.12,
      "shotsOnTargetPer90": 0.7,
      "expectedGoals": 1.0,
      "shotConversionRate": 11.2,
      "touchesInBoxPer90": 0.7,
      "chancesCreated": 18,
      "dribblesCompletedPer90": 0.9,
      "keyPassesPer90": 0.88,
      "passingAccuracy": 84.5,
      "progressivePassesPer90": 3.5,
      "tacklesWonPer90": 1.3,
      "interceptionsPer90": 0.6,
      "ballRecoveriesPer90": 4.4
    },
    "leagueBenchmarks": [
      {
        "metric": "Key Passes per 90",
        "player": 0.88,
        "avg": 0.9,
        "elite": 2.2
      },
      {
        "metric": "Progressive Passes p90",
        "player": 3.5,
        "avg": 2.8,
        "elite": 6.2
      },
      {
        "metric": "Chances Created",
        "player": 18,
        "avg": 16,
        "elite": 55
      },
      {
        "metric": "Passing Accuracy %",
        "player": 84.5,
        "avg": 79.5,
        "elite": 87.0
      }
    ],
    "heatmap": [
      {
        "x": 50,
        "y": 42,
        "r: ": 45,
        "v": 0.9
      },
      {
        "x": 44,
        "y": 35,
        "r": 38,
        "v": 0.8
      },
      {
        "x": 56,
        "y": 35,
        "r": 38,
        "v": 0.8
      },
      {
        "x": 50,
        "y": 55,
        "r": 35,
        "v": 0.75
      }
    ],
    "strengths": [
      "Workrate",
      "Tactical awareness"
    ],
    "weaknesses": [
      "Defending",
      "Pace"
    ]
  },
  {
    "id": "mats-wieffer",
    "name": "Mats Wieffer",
    "age": 28,
    "position": "MF",
    "role": "Box-to-Box Midfielder",
    "club": "Brighton",
    "league": "Premier League",
    "nation": "Spain",
    "value": 28800000,
    "rating": 83,
    "general": {
      "apps": 23,
      "mins": 1901,
      "goals": 2,
      "assists": 4,
      "yellowCards": 8,
      "redCards": 0
    },
    "attributes": {
      "pace": 70,
      "dribbling": 75,
      "passing": 79,
      "defending": 81,
      "physicality": 86,
      "tactical": 89,
      "workrate": 87
    },
    "detailedStats": {
      "goalsPer90": 0.09,
      "shotsOnTargetPer90": 0.6,
      "expectedGoals": 1.9,
      "shotConversionRate": 12.4,
      "touchesInBoxPer90": 1.2,
      "chancesCreated": 36,
      "dribblesCompletedPer90": 1.4,
      "keyPassesPer90": 0.69,
      "passingAccuracy": 86.9,
      "progressivePassesPer90": 4.9,
      "tacklesWonPer90": 2.4,
      "interceptionsPer90": 0.7,
      "ballRecoveriesPer90": 6.7
    },
    "leagueBenchmarks": [
      {
        "metric": "Key Passes per 90",
        "player": 0.69,
        "avg": 0.9,
        "elite": 2.2
      },
      {
        "metric": "Progressive Passes p90",
        "player": 4.9,
        "avg": 2.8,
        "elite": 6.2
      },
      {
        "metric": "Chances Created",
        "player": 36,
        "avg": 16,
        "elite": 55
      },
      {
        "metric": "Passing Accuracy %",
        "player": 86.9,
        "avg": 79.5,
        "elite": 87.0
      }
    ],
    "heatmap": [
      {
        "x": 50,
        "y": 42,
        "r: ": 45,
        "v": 0.9
      },
      {
        "x": 44,
        "y": 35,
        "r": 38,
        "v": 0.8
      },
      {
        "x": 56,
        "y": 35,
        "r": 38,
        "v": 0.8
      },
      {
        "x": 50,
        "y": 55,
        "r": 35,
        "v": 0.75
      }
    ],
    "strengths": [
      "Workrate",
      "Tactical awareness"
    ],
    "weaknesses": [
      "Dribbling",
      "Pace"
    ]
  },
  {
    "id": "danny-welbeck",
    "name": "Danny Welbeck",
    "age": 33,
    "position": "FW",
    "role": "Inverted Winger",
    "club": "Brighton",
    "league": "Premier League",
    "nation": "Spain",
    "value": 37800000,
    "rating": 88,
    "general": {
      "apps": 26,
      "mins": 2249,
      "goals": 13,
      "assists": 1,
      "yellowCards": 5,
      "redCards": 0
    },
    "attributes": {
      "pace": 98,
      "dribbling": 96,
      "passing": 80,
      "defending": 39,
      "physicality": 93,
      "tactical": 95,
      "workrate": 92
    },
    "detailedStats": {
      "goalsPer90": 0.52,
      "shotsOnTargetPer90": 1.3,
      "expectedGoals": 12.4,
      "shotConversionRate": 25.0,
      "touchesInBoxPer90": 6.0,
      "chancesCreated": 38,
      "dribblesCompletedPer90": 1.4,
      "keyPassesPer90": 0.62
    },
    "leagueBenchmarks": [
      {
        "metric": "Goals per 90",
        "player": 0.52,
        "avg": 0.22,
        "elite": 0.65
      },
      {
        "metric": "Shot Conversion %",
        "player": 25.0,
        "avg": 10.5,
        "elite": 18.0
      },
      {
        "metric": "Touches in Box p90",
        "player": 6.0,
        "avg": 2.5,
        "elite": 5.5
      },
      {
        "metric": "Expected Goals (xG)",
        "player": 12.4,
        "avg": 4.5,
        "elite": 14.0
      }
    ],
    "heatmap": [
      {
        "x": 22,
        "y": 72,
        "r": 45,
        "v": 0.9
      },
      {
        "x": 22,
        "y": 58,
        "r": 38,
        "v": 0.75
      },
      {
        "x": 28,
        "y": 82,
        "r": 35,
        "v": 0.8
      },
      {
        "x": 50,
        "y": 84,
        "r": 30,
        "v": 0.65
      }
    ],
    "strengths": [
      "Dribbling",
      "Clinical Finishing",
      "Pace"
    ],
    "weaknesses": [
      "Defending",
      "Defensive Tracking Back"
    ]
  },
  {
    "id": "charalampos-kostoulas",
    "name": "Charalampos Kostoulas",
    "age": 21,
    "position": "FW",
    "role": "Complete Winger / Striker",
    "club": "Brighton",
    "league": "Premier League",
    "nation": "Spain",
    "value": 28800000,
    "rating": 75,
    "general": {
      "apps": 2,
      "mins": 351,
      "goals": 2,
      "assists": 1,
      "yellowCards": 2,
      "redCards": 0
    },
    "attributes": {
      "pace": 84,
      "dribbling": 70,
      "passing": 68,
      "defending": 28,
      "physicality": 64,
      "tactical": 78,
      "workrate": 65
    },
    "detailedStats": {
      "goalsPer90": 0.51,
      "shotsOnTargetPer90": 1.3,
      "expectedGoals": 2.1,
      "shotConversionRate": 12.4,
      "touchesInBoxPer90": 3.3,
      "chancesCreated": 15,
      "dribblesCompletedPer90": 0.8,
      "keyPassesPer90": 1.62
    },
    "leagueBenchmarks": [
      {
        "metric": "Goals per 90",
        "player": 0.51,
        "avg": 0.22,
        "elite": 0.65
      },
      {
        "metric": "Shot Conversion %",
        "player": 12.4,
        "avg": 10.5,
        "elite": 18.0
      },
      {
        "metric": "Touches in Box p90",
        "player": 3.3,
        "avg": 2.5,
        "elite": 5.5
      },
      {
        "metric": "Expected Goals (xG)",
        "player": 2.1,
        "avg": 4.5,
        "elite": 14.0
      }
    ],
    "heatmap": [
      {
        "x": 50,
        "y": 84,
        "r": 38,
        "v": 0.9
      },
      {
        "x": 48,
        "y": 76,
        "r": 32,
        "v": 0.75
      },
      {
        "x": 52,
        "y": 80,
        "r": 32,
        "v": 0.8
      },
      {
        "x": 50,
        "y": 92,
        "r": 28,
        "v": 0.85
      }
    ],
    "strengths": [
      "Tactical awareness",
      "Pace"
    ],
    "weaknesses": [
      "Defending",
      "Defensive Tracking Back"
    ]
  },
  {
    "id": "pascal-gro\u00df",
    "name": "Pascal Gro\u00df",
    "age": 23,
    "position": "MF",
    "role": "Attacking Playmaker",
    "club": "Brighton",
    "league": "Premier League",
    "nation": "England",
    "value": 33600000,
    "rating": 81,
    "general": {
      "apps": 18,
      "mins": 1636,
      "goals": 1,
      "assists": 6,
      "yellowCards": 2,
      "redCards": 0
    },
    "attributes": {
      "pace": 71,
      "dribbling": 90,
      "passing": 97,
      "defending": 76,
      "physicality": 81,
      "tactical": 95,
      "workrate": 83
    },
    "detailedStats": {
      "goalsPer90": 0.06,
      "shotsOnTargetPer90": 0.6,
      "expectedGoals": 1.4,
      "shotConversionRate": 11.2,
      "touchesInBoxPer90": 1.2,
      "chancesCreated": 83,
      "dribblesCompletedPer90": 2.6,
      "keyPassesPer90": 1.84,
      "passingAccuracy": 93.1,
      "progressivePassesPer90": 8.7,
      "tacklesWonPer90": 2.1,
      "interceptionsPer90": 0.8,
      "ballRecoveriesPer90": 6.1
    },
    "leagueBenchmarks": [
      {
        "metric": "Key Passes per 90",
        "player": 1.84,
        "avg": 0.9,
        "elite": 2.2
      },
      {
        "metric": "Progressive Passes p90",
        "player": 8.7,
        "avg": 2.8,
        "elite": 6.2
      },
      {
        "metric": "Chances Created",
        "player": 83,
        "avg": 16,
        "elite": 55
      },
      {
        "metric": "Passing Accuracy %",
        "player": 93.1,
        "avg": 79.5,
        "elite": 87.0
      }
    ],
    "heatmap": [
      {
        "x": 50,
        "y": 64,
        "r": 42,
        "v": 0.9
      },
      {
        "x": 40,
        "y": 55,
        "r": 35,
        "v": 0.75
      },
      {
        "x": 60,
        "y": 55,
        "r": 35,
        "v": 0.75
      },
      {
        "x": 50,
        "y": 76,
        "r": 30,
        "v": 0.8
      }
    ],
    "strengths": [
      "Passing",
      "Tactical awareness"
    ],
    "weaknesses": [
      "Defending",
      "Pace"
    ]
  },
  {
    "id": "robert-lynch-s\u00e1nchez",
    "name": "Robert Lynch S\u00e1nchez",
    "age": 30,
    "position": "GK",
    "role": "Sweeper Keeper",
    "club": "Chelsea",
    "league": "Premier League",
    "nation": "France",
    "value": 28800000,
    "rating": 86,
    "general": {
      "apps": 35,
      "mins": 3040,
      "goals": 0,
      "assists": 1,
      "yellowCards": 3,
      "redCards": 1
    },
    "attributes": {
      "pace": 60,
      "dribbling": 57,
      "passing": 90,
      "defending": 93,
      "physicality": 94,
      "tactical": 86,
      "workrate": 96
    },
    "detailedStats": {
      "savePercentage": 81.0,
      "cleanSheets": 9,
      "goalsConceded": 49,
      "psxgDifference": 3.6,
      "passingAccuracy": 90.0,
      "sweeperActionsPer90": 1.3,
      "averageDistanceOfSweeperActions": 13.7
    },
    "leagueBenchmarks": [
      {
        "metric": "Save %",
        "player": 81.0,
        "avg": 69.5,
        "elite": 77.0
      },
      {
        "metric": "Clean Sheets",
        "player": 9,
        "avg": 4.5,
        "elite": 10.0
      },
      {
        "metric": "Sweeper Actions p90",
        "player": 1.3,
        "avg": 0.6,
        "elite": 1.2
      },
      {
        "metric": "Passing Accuracy %",
        "player": 90.0,
        "avg": 73.0,
        "elite": 82.0
      }
    ],
    "heatmap": [
      {
        "x": 50,
        "y": 6,
        "r": 35,
        "v": 0.98
      },
      {
        "x": 50,
        "y": 14,
        "r": 28,
        "v": 0.7
      },
      {
        "x": 45,
        "y": 8,
        "r": 22,
        "v": 0.55
      },
      {
        "x": 55,
        "y": 8,
        "r": 22,
        "v": 0.55
      }
    ],
    "strengths": [
      "Reflexes",
      "Workrate",
      "Physicality"
    ],
    "weaknesses": [
      "Dribbling",
      "Pace"
    ]
  },
  {
    "id": "filip-j\u00f6rgensen",
    "name": "Filip J\u00f6rgensen",
    "age": 31,
    "position": "GK",
    "role": "Sweeper Keeper",
    "club": "Chelsea",
    "league": "Premier League",
    "nation": "Spain",
    "value": 25800000,
    "rating": 71,
    "general": {
      "apps": 3,
      "mins": 378,
      "goals": 0,
      "assists": 0,
      "yellowCards": 0,
      "redCards": 0
    },
    "attributes": {
      "pace": 60,
      "dribbling": 55,
      "passing": 58,
      "defending": 78,
      "physicality": 60,
      "tactical": 66,
      "workrate": 65
    },
    "detailedStats": {
      "savePercentage": 66.6,
      "cleanSheets": 0,
      "goalsConceded": 5,
      "psxgDifference": 0.0,
      "passingAccuracy": 74.0,
      "sweeperActionsPer90": 0.5,
      "averageDistanceOfSweeperActions": 12.2
    },
    "leagueBenchmarks": [
      {
        "metric": "Save %",
        "player": 66.6,
        "avg": 69.5,
        "elite": 77.0
      },
      {
        "metric": "Clean Sheets",
        "player": 0,
        "avg": 4.5,
        "elite": 10.0
      },
      {
        "metric": "Sweeper Actions p90",
        "player": 0.5,
        "avg": 0.6,
        "elite": 1.2
      },
      {
        "metric": "Passing Accuracy %",
        "player": 74.0,
        "avg": 73.0,
        "elite": 82.0
      }
    ],
    "heatmap": [
      {
        "x": 50,
        "y": 6,
        "r": 35,
        "v": 0.98
      },
      {
        "x": 50,
        "y": 14,
        "r": 28,
        "v": 0.7
      },
      {
        "x": 45,
        "y": 8,
        "r": 22,
        "v": 0.55
      },
      {
        "x": 55,
        "y": 8,
        "r": 22,
        "v": 0.55
      }
    ],
    "strengths": [
      "Defending",
      "Tactical awareness"
    ],
    "weaknesses": [
      "Dribbling",
      "Passing"
    ]
  },
  {
    "id": "marc-cucurella-saseta",
    "name": "Marc Cucurella Saseta",
    "age": 34,
    "position": "DF",
    "role": "Attacking Fullback",
    "club": "Chelsea",
    "league": "Premier League",
    "nation": "Brazil",
    "value": 36600000,
    "rating": 84,
    "general": {
      "apps": 31,
      "mins": 2706,
      "goals": 1,
      "assists": 4,
      "yellowCards": 8,
      "redCards": 1
    },
    "attributes": {
      "pace": 77,
      "dribbling": 90,
      "passing": 97,
      "defending": 94,
      "physicality": 92,
      "tactical": 95,
      "workrate": 96
    },
    "detailedStats": {
      "goalsPer90": 0.03,
      "shotsOnTargetPer90": 0.5,
      "expectedGoals": 2.3,
      "shotConversionRate": 11.2,
      "touchesInBoxPer90": 1.5,
      "chancesCreated": 72,
      "dribblesCompletedPer90": 2.3,
      "keyPassesPer90": 0.96,
      "tacklesWonPer90": 2.9,
      "interceptionsPer90": 1.3,
      "clearancesPer90": 4.3,
      "aerialDuelWinPercentage": 80.0,
      "tackledDribblerRate": 64.5,
      "progressivePassesPer90": 4.4,
      "longPassesCompletedPer90": 2.9,
      "passingAccuracy": 91.6
    },
    "leagueBenchmarks": [
      {
        "metric": "Passing Accuracy %",
        "player": 91.6,
        "avg": 82.0,
        "elite": 89.0
      },
      {
        "metric": "Clearances per 90",
        "player": 4.3,
        "avg": 2.6,
        "elite": 4.0
      },
      {
        "metric": "Aerial Duel Win %",
        "player": 80.0,
        "avg": 54.5,
        "elite": 68.0
      },
      {
        "metric": "Tackles Won per 90",
        "player": 2.9,
        "avg": 1.1,
        "elite": 2.0
      }
    ],
    "heatmap": [
      {
        "x": 14,
        "y": 25,
        "r": 38,
        "v": 0.8
      },
      {
        "x": 14,
        "y": 45,
        "r": 40,
        "v": 0.85
      },
      {
        "x": 14,
        "y": 65,
        "r": 35,
        "v": 0.7
      },
      {
        "x": 14,
        "y": 12,
        "r": 30,
        "v": 0.6
      }
    ],
    "strengths": [
      "Passing",
      "Workrate",
      "Aerial Dominance"
    ],
    "weaknesses": [
      "Dribbling",
      "Pace"
    ]
  },
  {
    "id": "reece-james",
    "name": "Reece James",
    "age": 20,
    "position": "DF",
    "role": "Attacking Fullback",
    "club": "Chelsea",
    "league": "Premier League",
    "nation": "England",
    "value": 33600000,
    "rating": 86,
    "general": {
      "apps": 20,
      "mins": 1957,
      "goals": 2,
      "assists": 6,
      "yellowCards": 4,
      "redCards": 0
    },
    "attributes": {
      "pace": 69,
      "dribbling": 78,
      "passing": 92,
      "defending": 94,
      "physicality": 85,
      "tactical": 91,
      "workrate": 87
    },
    "detailedStats": {
      "goalsPer90": 0.09,
      "shotsOnTargetPer90": 0.6,
      "expectedGoals": 1.0,
      "shotConversionRate": 12.4,
      "touchesInBoxPer90": 0.9,
      "chancesCreated": 60,
      "dribblesCompletedPer90": 2.0,
      "keyPassesPer90": 1.11,
      "tacklesWonPer90": 2.5,
      "interceptionsPer90": 1.2,
      "clearancesPer90": 3.8,
      "aerialDuelWinPercentage": 78.0,
      "tackledDribblerRate": 60.6,
      "progressivePassesPer90": 3.9,
      "longPassesCompletedPer90": 2.6,
      "passingAccuracy": 89.7
    },
    "leagueBenchmarks": [
      {
        "metric": "Passing Accuracy %",
        "player": 89.7,
        "avg": 82.0,
        "elite": 89.0
      },
      {
        "metric": "Clearances per 90",
        "player": 3.8,
        "avg": 2.6,
        "elite": 4.0
      },
      {
        "metric": "Aerial Duel Win %",
        "player": 78.0,
        "avg": 54.5,
        "elite": 68.0
      },
      {
        "metric": "Tackles Won per 90",
        "player": 2.5,
        "avg": 1.1,
        "elite": 2.0
      }
    ],
    "heatmap": [
      {
        "x": 86,
        "y": 25,
        "r": 38,
        "v": 0.8
      },
      {
        "x": 86,
        "y": 45,
        "r": 40,
        "v": 0.85
      },
      {
        "x": 86,
        "y": 65,
        "r": 35,
        "v": 0.7
      },
      {
        "x": 86,
        "y": 12,
        "r": 30,
        "v": 0.6
      }
    ],
    "strengths": [
      "Passing",
      "Defending",
      "Aerial Dominance"
    ],
    "weaknesses": [
      "Dribbling",
      "Pace"
    ]
  },
  {
    "id": "trevoh-chalobah",
    "name": "Trevoh Chalobah",
    "age": 21,
    "position": "DF",
    "role": "Attacking Fullback",
    "club": "Chelsea",
    "league": "Premier League",
    "nation": "Spain",
    "value": 32400000,
    "rating": 89,
    "general": {
      "apps": 31,
      "mins": 2780,
      "goals": 3,
      "assists": 1,
      "yellowCards": 3,
      "redCards": 1
    },
    "attributes": {
      "pace": 71,
      "dribbling": 65,
      "passing": 67,
      "defending": 94,
      "physicality": 94,
      "tactical": 89,
      "workrate": 96
    },
    "detailedStats": {
      "goalsPer90": 0.1,
      "shotsOnTargetPer90": 0.7,
      "expectedGoals": 1.4,
      "shotConversionRate": 13.6,
      "touchesInBoxPer90": 1.0,
      "chancesCreated": 13,
      "dribblesCompletedPer90": 0.8,
      "keyPassesPer90": 0.18,
      "tacklesWonPer90": 3.4,
      "interceptionsPer90": 1.1,
      "clearancesPer90": 5.1,
      "aerialDuelWinPercentage": 80.0,
      "tackledDribblerRate": 59.9,
      "progressivePassesPer90": 2.1,
      "longPassesCompletedPer90": 1.4,
      "passingAccuracy": 82.2
    },
    "leagueBenchmarks": [
      {
        "metric": "Passing Accuracy %",
        "player": 82.2,
        "avg": 82.0,
        "elite": 89.0
      },
      {
        "metric": "Clearances per 90",
        "player": 5.1,
        "avg": 2.6,
        "elite": 4.0
      },
      {
        "metric": "Aerial Duel Win %",
        "player": 80.0,
        "avg": 54.5,
        "elite": 68.0
      },
      {
        "metric": "Tackles Won per 90",
        "player": 3.4,
        "avg": 1.1,
        "elite": 2.0
      }
    ],
    "heatmap": [
      {
        "x": 14,
        "y": 25,
        "r": 38,
        "v": 0.8
      },
      {
        "x": 14,
        "y": 45,
        "r": 40,
        "v": 0.85
      },
      {
        "x": 14,
        "y": 65,
        "r": 35,
        "v": 0.7
      },
      {
        "x": 14,
        "y": 12,
        "r": 30,
        "v": 0.6
      }
    ],
    "strengths": [
      "Defending",
      "Workrate",
      "Aerial Dominance"
    ],
    "weaknesses": [
      "Dribbling",
      "Passing"
    ]
  },
  {
    "id": "levi-samuels-colwill",
    "name": "Levi Samuels Colwill",
    "age": 22,
    "position": "DF",
    "role": "Central Defender",
    "club": "Chelsea",
    "league": "Premier League",
    "nation": "Spain",
    "value": 28200000,
    "rating": 71,
    "general": {
      "apps": 2,
      "mins": 225,
      "goals": 0,
      "assists": 0,
      "yellowCards": 0,
      "redCards": 0
    },
    "attributes": {
      "pace": 65,
      "dribbling": 55,
      "passing": 60,
      "defending": 75,
      "physicality": 59,
      "tactical": 67,
      "workrate": 63
    },
    "detailedStats": {
      "goalsPer90": 0.0,
      "shotsOnTargetPer90": 0.5,
      "expectedGoals": 0.0,
      "shotConversionRate": 10.0,
      "touchesInBoxPer90": 0.5,
      "chancesCreated": 0,
      "dribblesCompletedPer90": 0.4,
      "keyPassesPer90": 0.15,
      "tacklesWonPer90": 1.2,
      "interceptionsPer90": 0.8,
      "clearancesPer90": 1.8,
      "aerialDuelWinPercentage": 58.3,
      "tackledDribblerRate": 50.8,
      "progressivePassesPer90": 1.5,
      "longPassesCompletedPer90": 1.0,
      "passingAccuracy": 80.2
    },
    "leagueBenchmarks": [
      {
        "metric": "Passing Accuracy %",
        "player": 80.2,
        "avg": 82.0,
        "elite": 89.0
      },
      {
        "metric": "Clearances per 90",
        "player": 1.8,
        "avg": 2.6,
        "elite": 4.0
      },
      {
        "metric": "Aerial Duel Win %",
        "player": 58.3,
        "avg": 54.5,
        "elite": 68.0
      },
      {
        "metric": "Tackles Won per 90",
        "player": 1.2,
        "avg": 1.1,
        "elite": 2.0
      }
    ],
    "heatmap": [
      {
        "x": 50,
        "y": 20,
        "r": 45,
        "v": 0.9
      },
      {
        "x": 42,
        "y": 18,
        "r": 32,
        "v": 0.8
      },
      {
        "x": 58,
        "y": 18,
        "r": 32,
        "v": 0.8
      },
      {
        "x": 50,
        "y": 10,
        "r": 28,
        "v": 0.6
      }
    ],
    "strengths": [
      "Defending",
      "Tactical awareness"
    ],
    "weaknesses": [
      "Dribbling",
      "Physicality"
    ]
  },
  {
    "id": "malo-gusto",
    "name": "Malo Gusto",
    "age": 23,
    "position": "DF",
    "role": "Attacking Fullback",
    "club": "Chelsea",
    "league": "Premier League",
    "nation": "England",
    "value": 28800000,
    "rating": 83,
    "general": {
      "apps": 26,
      "mins": 2255,
      "goals": 2,
      "assists": 3,
      "yellowCards": 3,
      "redCards": 1
    },
    "attributes": {
      "pace": 73,
      "dribbling": 81,
      "passing": 89,
      "defending": 94,
      "physicality": 84,
      "tactical": 92,
      "workrate": 92
    },
    "detailedStats": {
      "goalsPer90": 0.08,
      "shotsOnTargetPer90": 0.6,
      "expectedGoals": 1.6,
      "shotConversionRate": 12.4,
      "touchesInBoxPer90": 1.2,
      "chancesCreated": 56,
      "dribblesCompletedPer90": 1.9,
      "keyPassesPer90": 0.9,
      "tacklesWonPer90": 2.5,
      "interceptionsPer90": 1.2,
      "clearancesPer90": 3.7,
      "aerialDuelWinPercentage": 77.2,
      "tackledDribblerRate": 61.0,
      "progressivePassesPer90": 3.7,
      "longPassesCompletedPer90": 2.5,
      "passingAccuracy": 89.0
    },
    "leagueBenchmarks": [
      {
        "metric": "Passing Accuracy %",
        "player": 89.0,
        "avg": 82.0,
        "elite": 89.0
      },
      {
        "metric": "Clearances per 90",
        "player": 3.7,
        "avg": 2.6,
        "elite": 4.0
      },
      {
        "metric": "Aerial Duel Win %",
        "player": 77.2,
        "avg": 54.5,
        "elite": 68.0
      },
      {
        "metric": "Tackles Won per 90",
        "player": 2.5,
        "avg": 1.1,
        "elite": 2.0
      }
    ],
    "heatmap": [
      {
        "x": 14,
        "y": 25,
        "r": 38,
        "v": 0.8
      },
      {
        "x": 14,
        "y": 45,
        "r": 40,
        "v": 0.85
      },
      {
        "x": 14,
        "y": 65,
        "r": 35,
        "v": 0.7
      },
      {
        "x": 14,
        "y": 12,
        "r": 30,
        "v": 0.6
      }
    ],
    "strengths": [
      "Defending",
      "Tactical awareness",
      "Aerial Dominance"
    ],
    "weaknesses": [
      "Dribbling",
      "Pace"
    ]
  },
  {
    "id": "beno\u00eet-badiashile-mukinayi",
    "name": "Beno\u00eet Badiashile Mukinayi",
    "age": 24,
    "position": "DF",
    "role": "Central Defender",
    "club": "Chelsea",
    "league": "Premier League",
    "nation": "Spain",
    "value": 26400000,
    "rating": 71,
    "general": {
      "apps": 6,
      "mins": 470,
      "goals": 0,
      "assists": 0,
      "yellowCards": 2,
      "redCards": 0
    },
    "attributes": {
      "pace": 65,
      "dribbling": 55,
      "passing": 60,
      "defending": 77,
      "physicality": 61,
      "tactical": 67,
      "workrate": 66
    },
    "detailedStats": {
      "goalsPer90": 0.0,
      "shotsOnTargetPer90": 0.5,
      "expectedGoals": 0.0,
      "shotConversionRate": 10.0,
      "touchesInBoxPer90": 0.5,
      "chancesCreated": 0,
      "dribblesCompletedPer90": 0.4,
      "keyPassesPer90": 0.08,
      "tacklesWonPer90": 1.3,
      "interceptionsPer90": 0.8,
      "clearancesPer90": 2.0,
      "aerialDuelWinPercentage": 60.1,
      "tackledDribblerRate": 51.1,
      "progressivePassesPer90": 1.5,
      "longPassesCompletedPer90": 1.0,
      "passingAccuracy": 80.2
    },
    "leagueBenchmarks": [
      {
        "metric": "Passing Accuracy %",
        "player": 80.2,
        "avg": 82.0,
        "elite": 89.0
      },
      {
        "metric": "Clearances per 90",
        "player": 2.0,
        "avg": 2.6,
        "elite": 4.0
      },
      {
        "metric": "Aerial Duel Win %",
        "player": 60.1,
        "avg": 54.5,
        "elite": 68.0
      },
      {
        "metric": "Tackles Won per 90",
        "player": 1.3,
        "avg": 1.1,
        "elite": 2.0
      }
    ],
    "heatmap": [
      {
        "x": 50,
        "y": 20,
        "r": 45,
        "v": 0.9
      },
      {
        "x": 42,
        "y": 18,
        "r": 32,
        "v": 0.8
      },
      {
        "x": 58,
        "y": 18,
        "r": 32,
        "v": 0.8
      },
      {
        "x": 50,
        "y": 10,
        "r": 28,
        "v": 0.6
      }
    ],
    "strengths": [
      "Defending",
      "Tactical awareness"
    ],
    "weaknesses": [
      "Dribbling",
      "Passing"
    ]
  },
  {
    "id": "wesley-fofana",
    "name": "Wesley Fofana",
    "age": 25,
    "position": "DF",
    "role": "Central Defender",
    "club": "Chelsea",
    "league": "Premier League",
    "nation": "France",
    "value": 26400000,
    "rating": 79,
    "general": {
      "apps": 20,
      "mins": 1718,
      "goals": 0,
      "assists": 2,
      "yellowCards": 5,
      "redCards": 2
    },
    "attributes": {
      "pace": 67,
      "dribbling": 60,
      "passing": 64,
      "defending": 94,
      "physicality": 85,
      "tactical": 80,
      "workrate": 84
    },
    "detailedStats": {
      "goalsPer90": 0.0,
      "shotsOnTargetPer90": 0.5,
      "expectedGoals": 0.7,
      "shotConversionRate": 10.0,
      "touchesInBoxPer90": 0.7,
      "chancesCreated": 8,
      "dribblesCompletedPer90": 0.6,
      "keyPassesPer90": 0.17,
      "tacklesWonPer90": 2.5,
      "interceptionsPer90": 1.0,
      "clearancesPer90": 3.8,
      "aerialDuelWinPercentage": 78.2,
      "tackledDribblerRate": 56.0,
      "progressivePassesPer90": 1.8,
      "longPassesCompletedPer90": 1.2,
      "passingAccuracy": 81.3
    },
    "leagueBenchmarks": [
      {
        "metric": "Passing Accuracy %",
        "player": 81.3,
        "avg": 82.0,
        "elite": 89.0
      },
      {
        "metric": "Clearances per 90",
        "player": 3.8,
        "avg": 2.6,
        "elite": 4.0
      },
      {
        "metric": "Aerial Duel Win %",
        "player": 78.2,
        "avg": 54.5,
        "elite": 68.0
      },
      {
        "metric": "Tackles Won per 90",
        "player": 2.5,
        "avg": 1.1,
        "elite": 2.0
      }
    ],
    "heatmap": [
      {
        "x": 50,
        "y": 20,
        "r": 45,
        "v": 0.9
      },
      {
        "x": 42,
        "y": 18,
        "r": 32,
        "v": 0.8
      },
      {
        "x": 58,
        "y": 18,
        "r": 32,
        "v": 0.8
      },
      {
        "x": 50,
        "y": 10,
        "r": 28,
        "v": 0.6
      }
    ],
    "strengths": [
      "Defending",
      "Physicality",
      "Aerial Dominance"
    ],
    "weaknesses": [
      "Dribbling",
      "Passing"
    ]
  },
  {
    "id": "tosin-adarabioyo",
    "name": "Tosin Adarabioyo",
    "age": 27,
    "position": "DF",
    "role": "Central Defender",
    "club": "Chelsea",
    "league": "Premier League",
    "nation": "Spain",
    "value": 24000000,
    "rating": 74,
    "general": {
      "apps": 8,
      "mins": 788,
      "goals": 0,
      "assists": 0,
      "yellowCards": 2,
      "redCards": 0
    },
    "attributes": {
      "pace": 65,
      "dribbling": 57,
      "passing": 62,
      "defending": 85,
      "physicality": 71,
      "tactical": 72,
      "workrate": 71
    },
    "detailedStats": {
      "goalsPer90": 0.0,
      "shotsOnTargetPer90": 0.5,
      "expectedGoals": 0.1,
      "shotConversionRate": 10.0,
      "touchesInBoxPer90": 0.6,
      "chancesCreated": 4,
      "dribblesCompletedPer90": 0.5,
      "keyPassesPer90": 0.19,
      "tacklesWonPer90": 1.8,
      "interceptionsPer90": 0.9,
      "clearancesPer90": 2.7,
      "aerialDuelWinPercentage": 67.0,
      "tackledDribblerRate": 52.9,
      "progressivePassesPer90": 1.7,
      "longPassesCompletedPer90": 1.1,
      "passingAccuracy": 80.7
    },
    "leagueBenchmarks": [
      {
        "metric": "Passing Accuracy %",
        "player": 80.7,
        "avg": 82.0,
        "elite": 89.0
      },
      {
        "metric": "Clearances per 90",
        "player": 2.7,
        "avg": 2.6,
        "elite": 4.0
      },
      {
        "metric": "Aerial Duel Win %",
        "player": 67.0,
        "avg": 54.5,
        "elite": 68.0
      },
      {
        "metric": "Tackles Won per 90",
        "player": 1.8,
        "avg": 1.1,
        "elite": 2.0
      }
    ],
    "heatmap": [
      {
        "x": 50,
        "y": 20,
        "r": 45,
        "v": 0.9
      },
      {
        "x": 42,
        "y": 18,
        "r": 32,
        "v": 0.8
      },
      {
        "x": 58,
        "y": 18,
        "r": 32,
        "v": 0.8
      },
      {
        "x": 50,
        "y": 10,
        "r": 28,
        "v": 0.6
      }
    ],
    "strengths": [
      "Defending",
      "Tactical awareness"
    ],
    "weaknesses": [
      "Dribbling",
      "Passing"
    ]
  },
  {
    "id": "josh-acheampong",
    "name": "Josh Acheampong",
    "age": 28,
    "position": "DF",
    "role": "Central Defender",
    "club": "Chelsea",
    "league": "Premier League",
    "nation": "Spain",
    "value": 22200000,
    "rating": 75,
    "general": {
      "apps": 8,
      "mins": 657,
      "goals": 1,
      "assists": 0,
      "yellowCards": 1,
      "redCards": 0
    },
    "attributes": {
      "pace": 67,
      "dribbling": 59,
      "passing": 62,
      "defending": 79,
      "physicality": 63,
      "tactical": 71,
      "workrate": 69
    },
    "detailedStats": {
      "goalsPer90": 0.14,
      "shotsOnTargetPer90": 0.7,
      "expectedGoals": 0.6,
      "shotConversionRate": 11.2,
      "touchesInBoxPer90": 0.7,
      "chancesCreated": 5,
      "dribblesCompletedPer90": 0.5,
      "keyPassesPer90": 0.28,
      "tacklesWonPer90": 1.4,
      "interceptionsPer90": 0.9,
      "clearancesPer90": 2.2,
      "aerialDuelWinPercentage": 61.6,
      "tackledDribblerRate": 52.4,
      "progressivePassesPer90": 1.7,
      "longPassesCompletedPer90": 1.1,
      "passingAccuracy": 80.8
    },
    "leagueBenchmarks": [
      {
        "metric": "Passing Accuracy %",
        "player": 80.8,
        "avg": 82.0,
        "elite": 89.0
      },
      {
        "metric": "Clearances per 90",
        "player": 2.2,
        "avg": 2.6,
        "elite": 4.0
      },
      {
        "metric": "Aerial Duel Win %",
        "player": 61.6,
        "avg": 54.5,
        "elite": 68.0
      },
      {
        "metric": "Tackles Won per 90",
        "player": 1.4,
        "avg": 1.1,
        "elite": 2.0
      }
    ],
    "heatmap": [
      {
        "x": 50,
        "y": 20,
        "r": 45,
        "v": 0.9
      },
      {
        "x": 42,
        "y": 18,
        "r": 32,
        "v": 0.8
      },
      {
        "x": 58,
        "y": 18,
        "r": 32,
        "v": 0.8
      },
      {
        "x": 50,
        "y": 10,
        "r": 28,
        "v": 0.6
      }
    ],
    "strengths": [
      "Defending",
      "Tactical awareness"
    ],
    "weaknesses": [
      "Dribbling",
      "Passing"
    ]
  },
  {
    "id": "cole-palmer",
    "name": "Cole Palmer",
    "age": 30,
    "position": "MF",
    "role": "Attacking Playmaker",
    "club": "Chelsea",
    "league": "Premier League",
    "nation": "France",
    "value": 61800000,
    "rating": 86,
    "general": {
      "apps": 24,
      "mins": 1954,
      "goals": 10,
      "assists": 2,
      "yellowCards": 5,
      "redCards": 0
    },
    "attributes": {
      "pace": 87,
      "dribbling": 92,
      "passing": 86,
      "defending": 85,
      "physicality": 90,
      "tactical": 95,
      "workrate": 87
    },
    "detailedStats": {
      "goalsPer90": 0.46,
      "shotsOnTargetPer90": 1.2,
      "expectedGoals": 10.6,
      "shotConversionRate": 22.0,
      "touchesInBoxPer90": 2.3,
      "chancesCreated": 49,
      "dribblesCompletedPer90": 1.7,
      "keyPassesPer90": 0.91,
      "passingAccuracy": 88.6,
      "progressivePassesPer90": 5.9,
      "tacklesWonPer90": 2.6,
      "interceptionsPer90": 0.9,
      "ballRecoveriesPer90": 7.1
    },
    "leagueBenchmarks": [
      {
        "metric": "Key Passes per 90",
        "player": 0.91,
        "avg": 0.9,
        "elite": 2.2
      },
      {
        "metric": "Progressive Passes p90",
        "player": 5.9,
        "avg": 2.8,
        "elite": 6.2
      },
      {
        "metric": "Chances Created",
        "player": 49,
        "avg": 16,
        "elite": 55
      },
      {
        "metric": "Passing Accuracy %",
        "player": 88.6,
        "avg": 79.5,
        "elite": 87.0
      }
    ],
    "heatmap": [
      {
        "x": 50,
        "y": 64,
        "r": 42,
        "v": 0.9
      },
      {
        "x": 40,
        "y": 55,
        "r": 35,
        "v": 0.75
      },
      {
        "x": 60,
        "y": 55,
        "r": 35,
        "v": 0.75
      },
      {
        "x": 50,
        "y": 76,
        "r": 30,
        "v": 0.8
      }
    ],
    "strengths": [
      "Dribbling",
      "Clinical Finishing",
      "Tactical awareness"
    ],
    "weaknesses": [
      "Passing",
      "Defending"
    ]
  },
  {
    "id": "pedro-lomba-neto",
    "name": "Pedro Lomba Neto",
    "age": 31,
    "position": "MF",
    "role": "Attacking Playmaker",
    "club": "Chelsea",
    "league": "Premier League",
    "nation": "Spain",
    "value": 42000000,
    "rating": 87,
    "general": {
      "apps": 30,
      "mins": 2629,
      "goals": 5,
      "assists": 7,
      "yellowCards": 2,
      "redCards": 1
    },
    "attributes": {
      "pace": 85,
      "dribbling": 96,
      "passing": 97,
      "defending": 84,
      "physicality": 89,
      "tactical": 95,
      "workrate": 96
    },
    "detailedStats": {
      "goalsPer90": 0.17,
      "shotsOnTargetPer90": 0.8,
      "expectedGoals": 4.6,
      "shotConversionRate": 16.0,
      "touchesInBoxPer90": 2.2,
      "chancesCreated": 104,
      "dribblesCompletedPer90": 3.2,
      "keyPassesPer90": 1.43,
      "passingAccuracy": 94.0,
      "progressivePassesPer90": 10.4,
      "tacklesWonPer90": 2.5,
      "interceptionsPer90": 1.0,
      "ballRecoveriesPer90": 7.0
    },
    "leagueBenchmarks": [
      {
        "metric": "Key Passes per 90",
        "player": 1.43,
        "avg": 0.9,
        "elite": 2.2
      },
      {
        "metric": "Progressive Passes p90",
        "player": 10.4,
        "avg": 2.8,
        "elite": 6.2
      },
      {
        "metric": "Chances Created",
        "player": 104,
        "avg": 16,
        "elite": 55
      },
      {
        "metric": "Passing Accuracy %",
        "player": 94.0,
        "avg": 79.5,
        "elite": 87.0
      }
    ],
    "heatmap": [
      {
        "x": 50,
        "y": 64,
        "r": 42,
        "v": 0.9
      },
      {
        "x": 40,
        "y": 55,
        "r": 35,
        "v": 0.75
      },
      {
        "x": 60,
        "y": 55,
        "r": 35,
        "v": 0.75
      },
      {
        "x": 50,
        "y": 76,
        "r": 30,
        "v": 0.8
      }
    ],
    "strengths": [
      "Dribbling",
      "Passing",
      "Creative Vision"
    ],
    "weaknesses": [
      "Defending",
      "Pace"
    ]
  },
  {
    "id": "enzo-fern\u00e1ndez",
    "name": "Enzo Fern\u00e1ndez",
    "age": 32,
    "position": "MF",
    "role": "Attacking Playmaker",
    "club": "Chelsea",
    "league": "Premier League",
    "nation": "England",
    "value": 39000000,
    "rating": 92,
    "general": {
      "apps": 35,
      "mins": 3114,
      "goals": 10,
      "assists": 5,
      "yellowCards": 10,
      "redCards": 0
    },
    "attributes": {
      "pace": 92,
      "dribbling": 96,
      "passing": 97,
      "defending": 88,
      "physicality": 94,
      "tactical": 95,
      "workrate": 96
    },
    "detailedStats": {
      "goalsPer90": 0.29,
      "shotsOnTargetPer90": 0.9,
      "expectedGoals": 11.3,
      "shotConversionRate": 22.0,
      "touchesInBoxPer90": 3.0,
      "chancesCreated": 132,
      "dribblesCompletedPer90": 3.9,
      "keyPassesPer90": 1.54,
      "passingAccuracy": 94.0,
      "progressivePassesPer90": 12.6,
      "tacklesWonPer90": 3.6,
      "interceptionsPer90": 1.2,
      "ballRecoveriesPer90": 9.1
    },
    "leagueBenchmarks": [
      {
        "metric": "Key Passes per 90",
        "player": 1.54,
        "avg": 0.9,
        "elite": 2.2
      },
      {
        "metric": "Progressive Passes p90",
        "player": 12.6,
        "avg": 2.8,
        "elite": 6.2
      },
      {
        "metric": "Chances Created",
        "player": 132,
        "avg": 16,
        "elite": 55
      },
      {
        "metric": "Passing Accuracy %",
        "player": 94.0,
        "avg": 79.5,
        "elite": 87.0
      }
    ],
    "heatmap": [
      {
        "x": 50,
        "y": 64,
        "r": 42,
        "v": 0.9
      },
      {
        "x": 40,
        "y": 55,
        "r": 35,
        "v": 0.75
      },
      {
        "x": 60,
        "y": 55,
        "r": 35,
        "v": 0.75
      },
      {
        "x": 50,
        "y": 76,
        "r": 30,
        "v": 0.8
      }
    ],
    "strengths": [
      "Dribbling",
      "Passing",
      "Clinical Finishing"
    ],
    "weaknesses": [
      "Defending",
      "Pace"
    ]
  },
  {
    "id": "est\u00eav\u00e3o-almeida-de-oliveira-gon\u00e7alves",
    "name": "Est\u00eav\u00e3o Almeida de Oliveira Gon\u00e7alves",
    "age": 33,
    "position": "MF",
    "role": "Box-to-Box Midfielder",
    "club": "Chelsea",
    "league": "Premier League",
    "nation": "Brazil",
    "value": 38400000,
    "rating": 78,
    "general": {
      "apps": 12,
      "mins": 839,
      "goals": 2,
      "assists": 5,
      "yellowCards": 4,
      "redCards": 0
    },
    "attributes": {
      "pace": 75,
      "dribbling": 76,
      "passing": 75,
      "defending": 62,
      "physicality": 67,
      "tactical": 83,
      "workrate": 71
    },
    "detailedStats": {
      "goalsPer90": 0.21,
      "shotsOnTargetPer90": 0.8,
      "expectedGoals": 2.9,
      "shotConversionRate": 12.4,
      "touchesInBoxPer90": 1.5,
      "chancesCreated": 28,
      "dribblesCompletedPer90": 1.2,
      "keyPassesPer90": 1.24,
      "passingAccuracy": 85.8,
      "progressivePassesPer90": 4.3,
      "tacklesWonPer90": 1.4,
      "interceptionsPer90": 0.7,
      "ballRecoveriesPer90": 4.7
    },
    "leagueBenchmarks": [
      {
        "metric": "Key Passes per 90",
        "player": 1.24,
        "avg": 0.9,
        "elite": 2.2
      },
      {
        "metric": "Progressive Passes p90",
        "player": 4.3,
        "avg": 2.8,
        "elite": 6.2
      },
      {
        "metric": "Chances Created",
        "player": 28,
        "avg": 16,
        "elite": 55
      },
      {
        "metric": "Passing Accuracy %",
        "player": 85.8,
        "avg": 79.5,
        "elite": 87.0
      }
    ],
    "heatmap": [
      {
        "x": 50,
        "y": 42,
        "r: ": 45,
        "v": 0.9
      },
      {
        "x": 44,
        "y": 35,
        "r": 38,
        "v": 0.8
      },
      {
        "x": 56,
        "y": 35,
        "r": 38,
        "v": 0.8
      },
      {
        "x": 50,
        "y": 55,
        "r": 35,
        "v": 0.75
      }
    ],
    "strengths": [
      "Dribbling",
      "Tactical awareness"
    ],
    "weaknesses": [
      "Defending",
      "Physicality"
    ]
  },
  {
    "id": "jamie-bynoe-gittens",
    "name": "Jamie Bynoe-Gittens",
    "age": 34,
    "position": "MF",
    "role": "Box-to-Box Midfielder",
    "club": "Chelsea",
    "league": "Premier League",
    "nation": "Spain",
    "value": 36000000,
    "rating": 73,
    "general": {
      "apps": 5,
      "mins": 486,
      "goals": 0,
      "assists": 2,
      "yellowCards": 0,
      "redCards": 0
    },
    "attributes": {
      "pace": 64,
      "dribbling": 63,
      "passing": 68,
      "defending": 56,
      "physicality": 61,
      "tactical": 72,
      "workrate": 66
    },
    "detailedStats": {
      "goalsPer90": 0.0,
      "shotsOnTargetPer90": 0.5,
      "expectedGoals": 0.8,
      "shotConversionRate": 10.0,
      "touchesInBoxPer90": 0.8,
      "chancesCreated": 16,
      "dribblesCompletedPer90": 0.8,
      "keyPassesPer90": 1.21,
      "passingAccuracy": 84.2,
      "progressivePassesPer90": 3.3,
      "tacklesWonPer90": 1.1,
      "interceptionsPer90": 0.6,
      "ballRecoveriesPer90": 4.1
    },
    "leagueBenchmarks": [
      {
        "metric": "Key Passes per 90",
        "player": 1.21,
        "avg": 0.9,
        "elite": 2.2
      },
      {
        "metric": "Progressive Passes p90",
        "player": 3.3,
        "avg": 2.8,
        "elite": 6.2
      },
      {
        "metric": "Chances Created",
        "player": 16,
        "avg": 16,
        "elite": 55
      },
      {
        "metric": "Passing Accuracy %",
        "player": 84.2,
        "avg": 79.5,
        "elite": 87.0
      }
    ],
    "heatmap": [
      {
        "x": 50,
        "y": 42,
        "r: ": 45,
        "v": 0.9
      },
      {
        "x": 44,
        "y": 35,
        "r": 38,
        "v": 0.8
      },
      {
        "x": 56,
        "y": 35,
        "r": 38,
        "v": 0.8
      },
      {
        "x": 50,
        "y": 55,
        "r": 35,
        "v": 0.75
      }
    ],
    "strengths": [
      "Passing",
      "Tactical awareness"
    ],
    "weaknesses": [
      "Defending",
      "Physicality"
    ]
  },
  {
    "id": "mois\u00e9s-caicedo-corozo",
    "name": "Mois\u00e9s Caicedo Corozo",
    "age": 21,
    "position": "MF",
    "role": "Attacking Playmaker",
    "club": "Chelsea",
    "league": "Premier League",
    "nation": "Spain",
    "value": 34200000,
    "rating": 85,
    "general": {
      "apps": 32,
      "mins": 2796,
      "goals": 3,
      "assists": 1,
      "yellowCards": 11,
      "redCards": 1
    },
    "attributes": {
      "pace": 66,
      "dribbling": 76,
      "passing": 86,
      "defending": 87,
      "physicality": 92,
      "tactical": 92,
      "workrate": 96
    },
    "detailedStats": {
      "goalsPer90": 0.1,
      "shotsOnTargetPer90": 0.7,
      "expectedGoals": 1.4,
      "shotConversionRate": 13.6,
      "touchesInBoxPer90": 0.9,
      "chancesCreated": 50,
      "dribblesCompletedPer90": 1.7,
      "keyPassesPer90": 0.65,
      "passingAccuracy": 88.7,
      "progressivePassesPer90": 6.0,
      "tacklesWonPer90": 2.7,
      "interceptionsPer90": 0.8,
      "ballRecoveriesPer90": 7.2
    },
    "leagueBenchmarks": [
      {
        "metric": "Key Passes per 90",
        "player": 0.65,
        "avg": 0.9,
        "elite": 2.2
      },
      {
        "metric": "Progressive Passes p90",
        "player": 6.0,
        "avg": 2.8,
        "elite": 6.2
      },
      {
        "metric": "Chances Created",
        "player": 50,
        "avg": 16,
        "elite": 55
      },
      {
        "metric": "Passing Accuracy %",
        "player": 88.7,
        "avg": 79.5,
        "elite": 87.0
      }
    ],
    "heatmap": [
      {
        "x": 50,
        "y": 64,
        "r": 42,
        "v": 0.9
      },
      {
        "x": 40,
        "y": 55,
        "r": 35,
        "v": 0.75
      },
      {
        "x": 60,
        "y": 55,
        "r": 35,
        "v": 0.75
      },
      {
        "x": 50,
        "y": 76,
        "r": 30,
        "v": 0.8
      }
    ],
    "strengths": [
      "Workrate",
      "Physicality"
    ],
    "weaknesses": [
      "Dribbling",
      "Pace"
    ]
  },
  {
    "id": "rom\u00e9o-lavia",
    "name": "Rom\u00e9o Lavia",
    "age": 24,
    "position": "MF",
    "role": "Box-to-Box Midfielder",
    "club": "Chelsea",
    "league": "Premier League",
    "nation": "Spain",
    "value": 29400000,
    "rating": 71,
    "general": {
      "apps": 4,
      "mins": 374,
      "goals": 0,
      "assists": 0,
      "yellowCards": 0,
      "redCards": 0
    },
    "attributes": {
      "pace": 60,
      "dribbling": 57,
      "passing": 63,
      "defending": 52,
      "physicality": 57,
      "tactical": 67,
      "workrate": 65
    },
    "detailedStats": {
      "goalsPer90": 0.0,
      "shotsOnTargetPer90": 0.5,
      "expectedGoals": 0.2,
      "shotConversionRate": 10.0,
      "touchesInBoxPer90": 0.5,
      "chancesCreated": 5,
      "dribblesCompletedPer90": 0.6,
      "keyPassesPer90": 0.56,
      "passingAccuracy": 82.8,
      "progressivePassesPer90": 2.5,
      "tacklesWonPer90": 0.9,
      "interceptionsPer90": 0.5,
      "ballRecoveriesPer90": 3.7
    },
    "leagueBenchmarks": [
      {
        "metric": "Key Passes per 90",
        "player": 0.56,
        "avg": 0.9,
        "elite": 2.2
      },
      {
        "metric": "Progressive Passes p90",
        "player": 2.5,
        "avg": 2.8,
        "elite": 6.2
      },
      {
        "metric": "Chances Created",
        "player": 5,
        "avg": 16,
        "elite": 55
      },
      {
        "metric": "Passing Accuracy %",
        "player": 82.8,
        "avg": 79.5,
        "elite": 87.0
      }
    ],
    "heatmap": [
      {
        "x": 50,
        "y": 42,
        "r: ": 45,
        "v": 0.9
      },
      {
        "x": 44,
        "y": 35,
        "r": 38,
        "v": 0.8
      },
      {
        "x": 56,
        "y": 35,
        "r": 38,
        "v": 0.8
      },
      {
        "x": 50,
        "y": 55,
        "r": 35,
        "v": 0.75
      }
    ],
    "strengths": [
      "Workrate",
      "Tactical awareness"
    ],
    "weaknesses": [
      "Defending",
      "Physicality"
    ]
  },
  {
    "id": "andrey-nascimento-dos-santos",
    "name": "Andrey Nascimento dos Santos",
    "age": 26,
    "position": "MF",
    "role": "Box-to-Box Midfielder",
    "club": "Chelsea",
    "league": "Premier League",
    "nation": "England",
    "value": 26400000,
    "rating": 76,
    "general": {
      "apps": 13,
      "mins": 1247,
      "goals": 1,
      "assists": 0,
      "yellowCards": 4,
      "redCards": 0
    },
    "attributes": {
      "pace": 64,
      "dribbling": 64,
      "passing": 70,
      "defending": 65,
      "physicality": 70,
      "tactical": 76,
      "workrate": 77
    },
    "detailedStats": {
      "goalsPer90": 0.07,
      "shotsOnTargetPer90": 0.6,
      "expectedGoals": 2.0,
      "shotConversionRate": 11.2,
      "touchesInBoxPer90": 0.8,
      "chancesCreated": 19,
      "dribblesCompletedPer90": 0.9,
      "keyPassesPer90": 0.56,
      "passingAccuracy": 84.6,
      "progressivePassesPer90": 3.5,
      "tacklesWonPer90": 1.6,
      "interceptionsPer90": 0.6,
      "ballRecoveriesPer90": 5.0
    },
    "leagueBenchmarks": [
      {
        "metric": "Key Passes per 90",
        "player": 0.56,
        "avg": 0.9,
        "elite": 2.2
      },
      {
        "metric": "Progressive Passes p90",
        "player": 3.5,
        "avg": 2.8,
        "elite": 6.2
      },
      {
        "metric": "Chances Created",
        "player": 19,
        "avg": 16,
        "elite": 55
      },
      {
        "metric": "Passing Accuracy %",
        "player": 84.6,
        "avg": 79.5,
        "elite": 87.0
      }
    ],
    "heatmap": [
      {
        "x": 50,
        "y": 42,
        "r: ": 45,
        "v": 0.9
      },
      {
        "x": 44,
        "y": 35,
        "r": 38,
        "v": 0.8
      },
      {
        "x": 56,
        "y": 35,
        "r": 38,
        "v": 0.8
      },
      {
        "x": 50,
        "y": 55,
        "r": 35,
        "v": 0.75
      }
    ],
    "strengths": [
      "Workrate",
      "Tactical awareness"
    ],
    "weaknesses": [
      "Dribbling",
      "Pace"
    ]
  },
  {
    "id": "jo\u00e3o-pedro-junqueira-de-jesus",
    "name": "Jo\u00e3o Pedro Junqueira de Jesus",
    "age": 29,
    "position": "FW",
    "role": "Inverted Winger",
    "club": "Chelsea",
    "league": "Premier League",
    "nation": "England",
    "value": 44400000,
    "rating": 93,
    "general": {
      "apps": 31,
      "mins": 2658,
      "goals": 15,
      "assists": 9,
      "yellowCards": 5,
      "redCards": 0
    },
    "attributes": {
      "pace": 98,
      "dribbling": 96,
      "passing": 90,
      "defending": 43,
      "physicality": 94,
      "tactical": 95,
      "workrate": 96
    },
    "detailedStats": {
      "goalsPer90": 0.51,
      "shotsOnTargetPer90": 1.3,
      "expectedGoals": 14.9,
      "shotConversionRate": 25.0,
      "touchesInBoxPer90": 6.5,
      "chancesCreated": 57,
      "dribblesCompletedPer90": 1.9,
      "keyPassesPer90": 0.77
    },
    "leagueBenchmarks": [
      {
        "metric": "Goals per 90",
        "player": 0.51,
        "avg": 0.22,
        "elite": 0.65
      },
      {
        "metric": "Shot Conversion %",
        "player": 25.0,
        "avg": 10.5,
        "elite": 18.0
      },
      {
        "metric": "Touches in Box p90",
        "player": 6.5,
        "avg": 2.5,
        "elite": 5.5
      },
      {
        "metric": "Expected Goals (xG)",
        "player": 14.9,
        "avg": 4.5,
        "elite": 14.0
      }
    ],
    "heatmap": [
      {
        "x": 78,
        "y": 72,
        "r": 45,
        "v": 0.9
      },
      {
        "x": 78,
        "y": 58,
        "r": 38,
        "v": 0.75
      },
      {
        "x": 72,
        "y": 82,
        "r": 35,
        "v": 0.8
      },
      {
        "x": 50,
        "y": 84,
        "r": 30,
        "v": 0.65
      }
    ],
    "strengths": [
      "Dribbling",
      "Clinical Finishing",
      "Pace"
    ],
    "weaknesses": [
      "Defending",
      "Defensive Tracking Back"
    ]
  },
  {
    "id": "liam-delap",
    "name": "Liam Delap",
    "age": 30,
    "position": "FW",
    "role": "Complete Winger / Striker",
    "club": "Chelsea",
    "league": "Premier League",
    "nation": "France",
    "value": 37200000,
    "rating": 76,
    "general": {
      "apps": 12,
      "mins": 1092,
      "goals": 1,
      "assists": 2,
      "yellowCards": 4,
      "redCards": 0
    },
    "attributes": {
      "pace": 89,
      "dribbling": 71,
      "passing": 64,
      "defending": 26,
      "physicality": 59,
      "tactical": 76,
      "workrate": 75
    },
    "detailedStats": {
      "goalsPer90": 0.08,
      "shotsOnTargetPer90": 0.6,
      "expectedGoals": 4.5,
      "shotConversionRate": 11.2,
      "touchesInBoxPer90": 3.7,
      "chancesCreated": 9,
      "dribblesCompletedPer90": 0.6,
      "keyPassesPer90": 0.3
    },
    "leagueBenchmarks": [
      {
        "metric": "Goals per 90",
        "player": 0.08,
        "avg": 0.22,
        "elite": 0.65
      },
      {
        "metric": "Shot Conversion %",
        "player": 11.2,
        "avg": 10.5,
        "elite": 18.0
      },
      {
        "metric": "Touches in Box p90",
        "player": 3.7,
        "avg": 2.5,
        "elite": 5.5
      },
      {
        "metric": "Expected Goals (xG)",
        "player": 4.5,
        "avg": 4.5,
        "elite": 14.0
      }
    ],
    "heatmap": [
      {
        "x": 50,
        "y": 84,
        "r": 38,
        "v": 0.9
      },
      {
        "x": 48,
        "y": 76,
        "r": 32,
        "v": 0.75
      },
      {
        "x": 52,
        "y": 80,
        "r": 32,
        "v": 0.8
      },
      {
        "x": 50,
        "y": 92,
        "r": 28,
        "v": 0.85
      }
    ],
    "strengths": [
      "Tactical awareness",
      "Pace"
    ],
    "weaknesses": [
      "Defending",
      "Defensive Tracking Back"
    ]
  },
  {
    "id": "marc-guiu-paz",
    "name": "Marc Guiu Paz",
    "age": 32,
    "position": "FW",
    "role": "Complete Winger / Striker",
    "club": "Chelsea",
    "league": "Premier League",
    "nation": "England",
    "value": 24000000,
    "rating": 71,
    "general": {
      "apps": 1,
      "mins": 265,
      "goals": 0,
      "assists": 1,
      "yellowCards": 1,
      "redCards": 0
    },
    "attributes": {
      "pace": 74,
      "dribbling": 60,
      "passing": 62,
      "defending": 25,
      "physicality": 56,
      "tactical": 68,
      "workrate": 63
    },
    "detailedStats": {
      "goalsPer90": 0.0,
      "shotsOnTargetPer90": 0.5,
      "expectedGoals": 1.5,
      "shotConversionRate": 10.0,
      "touchesInBoxPer90": 2.4,
      "chancesCreated": 5,
      "dribblesCompletedPer90": 0.5,
      "keyPassesPer90": 0.68
    },
    "leagueBenchmarks": [
      {
        "metric": "Goals per 90",
        "player": 0.0,
        "avg": 0.22,
        "elite": 0.65
      },
      {
        "metric": "Shot Conversion %",
        "player": 10.0,
        "avg": 10.5,
        "elite": 18.0
      },
      {
        "metric": "Touches in Box p90",
        "player": 2.4,
        "avg": 2.5,
        "elite": 5.5
      },
      {
        "metric": "Expected Goals (xG)",
        "player": 1.5,
        "avg": 4.5,
        "elite": 14.0
      }
    ],
    "heatmap": [
      {
        "x": 50,
        "y": 84,
        "r": 38,
        "v": 0.9
      },
      {
        "x": 48,
        "y": 76,
        "r": 32,
        "v": 0.75
      },
      {
        "x": 52,
        "y": 80,
        "r": 32,
        "v": 0.8
      },
      {
        "x": 50,
        "y": 92,
        "r": 28,
        "v": 0.85
      }
    ],
    "strengths": [
      "Tactical awareness",
      "Pace"
    ],
    "weaknesses": [
      "Defending",
      "Defensive Tracking Back"
    ]
  },
  {
    "id": "alejandro-garnacho-ferreyra",
    "name": "Alejandro Garnacho Ferreyra",
    "age": 23,
    "position": "MF",
    "role": "Attacking Playmaker",
    "club": "Chelsea",
    "league": "Premier League",
    "nation": "England",
    "value": 38400000,
    "rating": 78,
    "general": {
      "apps": 14,
      "mins": 1261,
      "goals": 1,
      "assists": 4,
      "yellowCards": 2,
      "redCards": 0
    },
    "attributes": {
      "pace": 79,
      "dribbling": 87,
      "passing": 87,
      "defending": 64,
      "physicality": 69,
      "tactical": 90,
      "workrate": 78
    },
    "detailedStats": {
      "goalsPer90": 0.07,
      "shotsOnTargetPer90": 0.6,
      "expectedGoals": 3.4,
      "shotConversionRate": 11.2,
      "touchesInBoxPer90": 1.8,
      "chancesCreated": 50,
      "dribblesCompletedPer90": 1.8,
      "keyPassesPer90": 1.45,
      "passingAccuracy": 88.8,
      "progressivePassesPer90": 6.1,
      "tacklesWonPer90": 1.5,
      "interceptionsPer90": 0.8,
      "ballRecoveriesPer90": 4.9
    },
    "leagueBenchmarks": [
      {
        "metric": "Key Passes per 90",
        "player": 1.45,
        "avg": 0.9,
        "elite": 2.2
      },
      {
        "metric": "Progressive Passes p90",
        "player": 6.1,
        "avg": 2.8,
        "elite": 6.2
      },
      {
        "metric": "Chances Created",
        "player": 50,
        "avg": 16,
        "elite": 55
      },
      {
        "metric": "Passing Accuracy %",
        "player": 88.8,
        "avg": 79.5,
        "elite": 87.0
      }
    ],
    "heatmap": [
      {
        "x": 50,
        "y": 64,
        "r": 42,
        "v": 0.9
      },
      {
        "x": 40,
        "y": 55,
        "r": 35,
        "v": 0.75
      },
      {
        "x": 60,
        "y": 55,
        "r": 35,
        "v": 0.75
      },
      {
        "x": 50,
        "y": 76,
        "r": 30,
        "v": 0.8
      }
    ],
    "strengths": [
      "Dribbling",
      "Tactical awareness"
    ],
    "weaknesses": [
      "Defending",
      "Physicality"
    ]
  },
  {
    "id": "jorrel-hato",
    "name": "Jorrel Hato",
    "age": 32,
    "position": "DF",
    "role": "Central Defender",
    "club": "Chelsea",
    "league": "Premier League",
    "nation": "England",
    "value": 27600000,
    "rating": 72,
    "general": {
      "apps": 12,
      "mins": 1139,
      "goals": 0,
      "assists": 0,
      "yellowCards": 7,
      "redCards": 0
    },
    "attributes": {
      "pace": 66,
      "dribbling": 61,
      "passing": 67,
      "defending": 85,
      "physicality": 70,
      "tactical": 74,
      "workrate": 76
    },
    "detailedStats": {
      "goalsPer90": 0.0,
      "shotsOnTargetPer90": 0.5,
      "expectedGoals": 0.3,
      "shotConversionRate": 10.0,
      "touchesInBoxPer90": 0.6,
      "chancesCreated": 14,
      "dribblesCompletedPer90": 0.8,
      "keyPassesPer90": 0.45,
      "tacklesWonPer90": 1.8,
      "interceptionsPer90": 0.9,
      "clearancesPer90": 2.7,
      "aerialDuelWinPercentage": 66.7,
      "tackledDribblerRate": 53.8,
      "progressivePassesPer90": 2.1,
      "longPassesCompletedPer90": 1.4,
      "passingAccuracy": 82.3
    },
    "leagueBenchmarks": [
      {
        "metric": "Passing Accuracy %",
        "player": 82.3,
        "avg": 82.0,
        "elite": 89.0
      },
      {
        "metric": "Clearances per 90",
        "player": 2.7,
        "avg": 2.6,
        "elite": 4.0
      },
      {
        "metric": "Aerial Duel Win %",
        "player": 66.7,
        "avg": 54.5,
        "elite": 68.0
      },
      {
        "metric": "Tackles Won per 90",
        "player": 1.8,
        "avg": 1.1,
        "elite": 2.0
      }
    ],
    "heatmap": [
      {
        "x": 50,
        "y": 20,
        "r": 45,
        "v": 0.9
      },
      {
        "x": 42,
        "y": 18,
        "r": 32,
        "v": 0.8
      },
      {
        "x": 58,
        "y": 18,
        "r": 32,
        "v": 0.8
      },
      {
        "x": 50,
        "y": 10,
        "r": 28,
        "v": 0.6
      }
    ],
    "strengths": [
      "Defending",
      "Workrate"
    ],
    "weaknesses": [
      "Dribbling",
      "Pace"
    ]
  },
  {
    "id": "dean-henderson",
    "name": "Dean Henderson",
    "age": 33,
    "position": "GK",
    "role": "Sweeper Keeper",
    "club": "Crystal Palace",
    "league": "Premier League",
    "nation": "Spain",
    "value": 30600000,
    "rating": 88,
    "general": {
      "apps": 37,
      "mins": 3330,
      "goals": 0,
      "assists": 0,
      "yellowCards": 5,
      "redCards": 0
    },
    "attributes": {
      "pace": 60,
      "dribbling": 55,
      "passing": 90,
      "defending": 93,
      "physicality": 94,
      "tactical": 86,
      "workrate": 96
    },
    "detailedStats": {
      "savePercentage": 81.0,
      "cleanSheets": 11,
      "goalsConceded": 51,
      "psxgDifference": 4.4,
      "passingAccuracy": 90.0,
      "sweeperActionsPer90": 1.2,
      "averageDistanceOfSweeperActions": 13.7
    },
    "leagueBenchmarks": [
      {
        "metric": "Save %",
        "player": 81.0,
        "avg": 69.5,
        "elite": 77.0
      },
      {
        "metric": "Clean Sheets",
        "player": 11,
        "avg": 4.5,
        "elite": 10.0
      },
      {
        "metric": "Sweeper Actions p90",
        "player": 1.2,
        "avg": 0.6,
        "elite": 1.2
      },
      {
        "metric": "Passing Accuracy %",
        "player": 90.0,
        "avg": 73.0,
        "elite": 82.0
      }
    ],
    "heatmap": [
      {
        "x": 50,
        "y": 6,
        "r": 35,
        "v": 0.98
      },
      {
        "x": 50,
        "y": 14,
        "r": 28,
        "v": 0.7
      },
      {
        "x": 45,
        "y": 8,
        "r": 22,
        "v": 0.55
      },
      {
        "x": 55,
        "y": 8,
        "r": 22,
        "v": 0.55
      }
    ],
    "strengths": [
      "Reflexes",
      "Workrate",
      "Physicality"
    ],
    "weaknesses": [
      "Dribbling",
      "Pace"
    ]
  },
  {
    "id": "daniel-mu\u00f1oz-mej\u00eda",
    "name": "Daniel Mu\u00f1oz Mej\u00eda",
    "age": 21,
    "position": "DF",
    "role": "Attacking Fullback",
    "club": "Crystal Palace",
    "league": "Premier League",
    "nation": "Spain",
    "value": 35400000,
    "rating": 89,
    "general": {
      "apps": 29,
      "mins": 2400,
      "goals": 4,
      "assists": 4,
      "yellowCards": 7,
      "redCards": 0
    },
    "attributes": {
      "pace": 81,
      "dribbling": 87,
      "passing": 86,
      "defending": 94,
      "physicality": 94,
      "tactical": 95,
      "workrate": 94
    },
    "detailedStats": {
      "goalsPer90": 0.15,
      "shotsOnTargetPer90": 0.7,
      "expectedGoals": 2.5,
      "shotConversionRate": 14.8,
      "touchesInBoxPer90": 1.8,
      "chancesCreated": 49,
      "dribblesCompletedPer90": 1.7,
      "keyPassesPer90": 0.74,
      "tacklesWonPer90": 3.0,
      "interceptionsPer90": 1.3,
      "clearancesPer90": 4.5,
      "aerialDuelWinPercentage": 80.0,
      "tackledDribblerRate": 64.0,
      "progressivePassesPer90": 3.5,
      "longPassesCompletedPer90": 2.3,
      "passingAccuracy": 87.9
    },
    "leagueBenchmarks": [
      {
        "metric": "Passing Accuracy %",
        "player": 87.9,
        "avg": 82.0,
        "elite": 89.0
      },
      {
        "metric": "Clearances per 90",
        "player": 4.5,
        "avg": 2.6,
        "elite": 4.0
      },
      {
        "metric": "Aerial Duel Win %",
        "player": 80.0,
        "avg": 54.5,
        "elite": 68.0
      },
      {
        "metric": "Tackles Won per 90",
        "player": 3.0,
        "avg": 1.1,
        "elite": 2.0
      }
    ],
    "heatmap": [
      {
        "x": 14,
        "y": 25,
        "r": 38,
        "v": 0.8
      },
      {
        "x": 14,
        "y": 45,
        "r": 40,
        "v": 0.85
      },
      {
        "x": 14,
        "y": 65,
        "r": 35,
        "v": 0.7
      },
      {
        "x": 14,
        "y": 12,
        "r": 30,
        "v": 0.6
      }
    ],
    "strengths": [
      "Defending",
      "Tactical awareness",
      "Aerial Dominance"
    ],
    "weaknesses": [
      "Passing",
      "Pace"
    ]
  },
  {
    "id": "maxence-lacroix",
    "name": "Maxence Lacroix",
    "age": 22,
    "position": "DF",
    "role": "Attacking Fullback",
    "club": "Crystal Palace",
    "league": "Premier League",
    "nation": "Spain",
    "value": 31200000,
    "rating": 92,
    "general": {
      "apps": 35,
      "mins": 3085,
      "goals": 1,
      "assists": 2,
      "yellowCards": 4,
      "redCards": 1
    },
    "attributes": {
      "pace": 77,
      "dribbling": 71,
      "passing": 67,
      "defending": 94,
      "physicality": 94,
      "tactical": 95,
      "workrate": 96
    },
    "detailedStats": {
      "goalsPer90": 0.03,
      "shotsOnTargetPer90": 0.5,
      "expectedGoals": 2.5,
      "shotConversionRate": 11.2,
      "touchesInBoxPer90": 1.6,
      "chancesCreated": 13,
      "dribblesCompletedPer90": 0.8,
      "keyPassesPer90": 0.16,
      "tacklesWonPer90": 3.7,
      "interceptionsPer90": 1.2,
      "clearancesPer90": 5.6,
      "aerialDuelWinPercentage": 80.0,
      "tackledDribblerRate": 62.4,
      "progressivePassesPer90": 2.0,
      "longPassesCompletedPer90": 1.4,
      "passingAccuracy": 82.1
    },
    "leagueBenchmarks": [
      {
        "metric": "Passing Accuracy %",
        "player": 82.1,
        "avg": 82.0,
        "elite": 89.0
      },
      {
        "metric": "Clearances per 90",
        "player": 5.6,
        "avg": 2.6,
        "elite": 4.0
      },
      {
        "metric": "Aerial Duel Win %",
        "player": 80.0,
        "avg": 54.5,
        "elite": 68.0
      },
      {
        "metric": "Tackles Won per 90",
        "player": 3.7,
        "avg": 1.1,
        "elite": 2.0
      }
    ],
    "heatmap": [
      {
        "x": 86,
        "y": 25,
        "r": 38,
        "v": 0.8
      },
      {
        "x": 86,
        "y": 45,
        "r": 40,
        "v": 0.85
      },
      {
        "x": 86,
        "y": 65,
        "r": 35,
        "v": 0.7
      },
      {
        "x": 86,
        "y": 12,
        "r": 30,
        "v": 0.6
      }
    ],
    "strengths": [
      "Workrate",
      "Tactical awareness",
      "Aerial Dominance"
    ],
    "weaknesses": [
      "Dribbling",
      "Passing"
    ]
  },
  {
    "id": "tyrick-mitchell",
    "name": "Tyrick Mitchell",
    "age": 23,
    "position": "DF",
    "role": "Attacking Fullback",
    "club": "Crystal Palace",
    "league": "Premier League",
    "nation": "England",
    "value": 30000000,
    "rating": 89,
    "general": {
      "apps": 36,
      "mins": 3253,
      "goals": 1,
      "assists": 3,
      "yellowCards": 6,
      "redCards": 0
    },
    "attributes": {
      "pace": 74,
      "dribbling": 83,
      "passing": 91,
      "defending": 94,
      "physicality": 94,
      "tactical": 95,
      "workrate": 96
    },
    "detailedStats": {
      "goalsPer90": 0.03,
      "shotsOnTargetPer90": 0.5,
      "expectedGoals": 1.6,
      "shotConversionRate": 11.2,
      "touchesInBoxPer90": 1.3,
      "chancesCreated": 58,
      "dribblesCompletedPer90": 2.0,
      "keyPassesPer90": 0.65,
      "tacklesWonPer90": 3.2,
      "interceptionsPer90": 1.3,
      "clearancesPer90": 4.7,
      "aerialDuelWinPercentage": 80.0,
      "tackledDribblerRate": 63.6,
      "progressivePassesPer90": 3.8,
      "longPassesCompletedPer90": 2.6,
      "passingAccuracy": 89.3
    },
    "leagueBenchmarks": [
      {
        "metric": "Passing Accuracy %",
        "player": 89.3,
        "avg": 82.0,
        "elite": 89.0
      },
      {
        "metric": "Clearances per 90",
        "player": 4.7,
        "avg": 2.6,
        "elite": 4.0
      },
      {
        "metric": "Aerial Duel Win %",
        "player": 80.0,
        "avg": 54.5,
        "elite": 68.0
      },
      {
        "metric": "Tackles Won per 90",
        "player": 3.2,
        "avg": 1.1,
        "elite": 2.0
      }
    ],
    "heatmap": [
      {
        "x": 14,
        "y": 25,
        "r": 38,
        "v": 0.8
      },
      {
        "x": 14,
        "y": 45,
        "r": 40,
        "v": 0.85
      },
      {
        "x": 14,
        "y": 65,
        "r": 35,
        "v": 0.7
      },
      {
        "x": 14,
        "y": 12,
        "r": 30,
        "v": 0.6
      }
    ],
    "strengths": [
      "Workrate",
      "Tactical awareness",
      "Aerial Dominance"
    ],
    "weaknesses": [
      "Dribbling",
      "Pace"
    ]
  },
  {
    "id": "chris-richards",
    "name": "Chris Richards",
    "age": 26,
    "position": "DF",
    "role": "Attacking Fullback",
    "club": "Crystal Palace",
    "league": "Premier League",
    "nation": "England",
    "value": 26400000,
    "rating": 88,
    "general": {
      "apps": 31,
      "mins": 2825,
      "goals": 1,
      "assists": 0,
      "yellowCards": 4,
      "redCards": 0
    },
    "attributes": {
      "pace": 72,
      "dribbling": 68,
      "passing": 70,
      "defending": 94,
      "physicality": 94,
      "tactical": 91,
      "workrate": 96
    },
    "detailedStats": {
      "goalsPer90": 0.03,
      "shotsOnTargetPer90": 0.5,
      "expectedGoals": 2.4,
      "shotConversionRate": 11.2,
      "touchesInBoxPer90": 1.1,
      "chancesCreated": 19,
      "dribblesCompletedPer90": 0.9,
      "keyPassesPer90": 0.25,
      "tacklesWonPer90": 3.4,
      "interceptionsPer90": 1.2,
      "clearancesPer90": 5.1,
      "aerialDuelWinPercentage": 80.0,
      "tackledDribblerRate": 60.8,
      "progressivePassesPer90": 2.3,
      "longPassesCompletedPer90": 1.5,
      "passingAccuracy": 83.2
    },
    "leagueBenchmarks": [
      {
        "metric": "Passing Accuracy %",
        "player": 83.2,
        "avg": 82.0,
        "elite": 89.0
      },
      {
        "metric": "Clearances per 90",
        "player": 5.1,
        "avg": 2.6,
        "elite": 4.0
      },
      {
        "metric": "Aerial Duel Win %",
        "player": 80.0,
        "avg": 54.5,
        "elite": 68.0
      },
      {
        "metric": "Tackles Won per 90",
        "player": 3.4,
        "avg": 1.1,
        "elite": 2.0
      }
    ],
    "heatmap": [
      {
        "x": 86,
        "y": 25,
        "r": 38,
        "v": 0.8
      },
      {
        "x": 86,
        "y": 45,
        "r": 40,
        "v": 0.85
      },
      {
        "x": 86,
        "y": 65,
        "r": 35,
        "v": 0.7
      },
      {
        "x": 86,
        "y": 12,
        "r": 30,
        "v": 0.6
      }
    ],
    "strengths": [
      "Defending",
      "Workrate",
      "Aerial Dominance"
    ],
    "weaknesses": [
      "Dribbling",
      "Passing"
    ]
  },
  {
    "id": "chadi-riad-dnanou",
    "name": "Chadi Riad Dnanou",
    "age": 27,
    "position": "DF",
    "role": "Central Defender",
    "club": "Crystal Palace",
    "league": "Premier League",
    "nation": "Spain",
    "value": 24000000,
    "rating": 72,
    "general": {
      "apps": 6,
      "mins": 550,
      "goals": 0,
      "assists": 1,
      "yellowCards": 2,
      "redCards": 0
    },
    "attributes": {
      "pace": 66,
      "dribbling": 57,
      "passing": 61,
      "defending": 78,
      "physicality": 62,
      "tactical": 69,
      "workrate": 67
    },
    "detailedStats": {
      "goalsPer90": 0.0,
      "shotsOnTargetPer90": 0.5,
      "expectedGoals": 0.3,
      "shotConversionRate": 10.0,
      "touchesInBoxPer90": 0.6,
      "chancesCreated": 2,
      "dribblesCompletedPer90": 0.5,
      "keyPassesPer90": 0.2,
      "tacklesWonPer90": 1.4,
      "interceptionsPer90": 0.9,
      "clearancesPer90": 2.1,
      "aerialDuelWinPercentage": 60.9,
      "tackledDribblerRate": 51.8,
      "progressivePassesPer90": 1.6,
      "longPassesCompletedPer90": 1.1,
      "passingAccuracy": 80.5
    },
    "leagueBenchmarks": [
      {
        "metric": "Passing Accuracy %",
        "player": 80.5,
        "avg": 82.0,
        "elite": 89.0
      },
      {
        "metric": "Clearances per 90",
        "player": 2.1,
        "avg": 2.6,
        "elite": 4.0
      },
      {
        "metric": "Aerial Duel Win %",
        "player": 60.9,
        "avg": 54.5,
        "elite": 68.0
      },
      {
        "metric": "Tackles Won per 90",
        "player": 1.4,
        "avg": 1.1,
        "elite": 2.0
      }
    ],
    "heatmap": [
      {
        "x": 50,
        "y": 20,
        "r": 45,
        "v": 0.9
      },
      {
        "x": 42,
        "y": 18,
        "r": 32,
        "v": 0.8
      },
      {
        "x": 58,
        "y": 18,
        "r": 32,
        "v": 0.8
      },
      {
        "x": 50,
        "y": 10,
        "r": 28,
        "v": 0.6
      }
    ],
    "strengths": [
      "Defending",
      "Tactical awareness"
    ],
    "weaknesses": [
      "Dribbling",
      "Passing"
    ]
  },
  {
    "id": "nathaniel-clyne",
    "name": "Nathaniel Clyne",
    "age": 28,
    "position": "DF",
    "role": "Central Defender",
    "club": "Crystal Palace",
    "league": "Premier League",
    "nation": "Spain",
    "value": 22800000,
    "rating": 72,
    "general": {
      "apps": 7,
      "mins": 592,
      "goals": 0,
      "assists": 1,
      "yellowCards": 1,
      "redCards": 0
    },
    "attributes": {
      "pace": 66,
      "dribbling": 58,
      "passing": 63,
      "defending": 78,
      "physicality": 62,
      "tactical": 69,
      "workrate": 68
    },
    "detailedStats": {
      "goalsPer90": 0.0,
      "shotsOnTargetPer90": 0.5,
      "expectedGoals": 0.4,
      "shotConversionRate": 10.0,
      "touchesInBoxPer90": 0.6,
      "chancesCreated": 6,
      "dribblesCompletedPer90": 0.6,
      "keyPassesPer90": 0.42,
      "tacklesWonPer90": 1.4,
      "interceptionsPer90": 0.9,
      "clearancesPer90": 2.0,
      "aerialDuelWinPercentage": 60.3,
      "tackledDribblerRate": 51.9,
      "progressivePassesPer90": 1.8,
      "longPassesCompletedPer90": 1.2,
      "passingAccuracy": 81.1
    },
    "leagueBenchmarks": [
      {
        "metric": "Passing Accuracy %",
        "player": 81.1,
        "avg": 82.0,
        "elite": 89.0
      },
      {
        "metric": "Clearances per 90",
        "player": 2.0,
        "avg": 2.6,
        "elite": 4.0
      },
      {
        "metric": "Aerial Duel Win %",
        "player": 60.3,
        "avg": 54.5,
        "elite": 68.0
      },
      {
        "metric": "Tackles Won per 90",
        "player": 1.4,
        "avg": 1.1,
        "elite": 2.0
      }
    ],
    "heatmap": [
      {
        "x": 50,
        "y": 20,
        "r": 45,
        "v": 0.9
      },
      {
        "x": 42,
        "y": 18,
        "r": 32,
        "v": 0.8
      },
      {
        "x": 58,
        "y": 18,
        "r": 32,
        "v": 0.8
      },
      {
        "x": 50,
        "y": 10,
        "r": 28,
        "v": 0.6
      }
    ],
    "strengths": [
      "Defending",
      "Tactical awareness"
    ],
    "weaknesses": [
      "Dribbling",
      "Physicality"
    ]
  },
  {
    "id": "isma\u00efla-sarr",
    "name": "Isma\u00efla Sarr",
    "age": 32,
    "position": "MF",
    "role": "Attacking Playmaker",
    "club": "Crystal Palace",
    "league": "Premier League",
    "nation": "England",
    "value": 38400000,
    "rating": 86,
    "general": {
      "apps": 24,
      "mins": 2173,
      "goals": 9,
      "assists": 2,
      "yellowCards": 2,
      "redCards": 0
    },
    "attributes": {
      "pace": 90,
      "dribbling": 89,
      "passing": 77,
      "defending": 81,
      "physicality": 86,
      "tactical": 95,
      "workrate": 91
    },
    "detailedStats": {
      "goalsPer90": 0.37,
      "shotsOnTargetPer90": 1.1,
      "expectedGoals": 10.9,
      "shotConversionRate": 20.8,
      "touchesInBoxPer90": 2.5,
      "chancesCreated": 33,
      "dribblesCompletedPer90": 1.3,
      "keyPassesPer90": 0.56,
      "passingAccuracy": 86.5,
      "progressivePassesPer90": 4.7,
      "tacklesWonPer90": 2.4,
      "interceptionsPer90": 0.8,
      "ballRecoveriesPer90": 6.7
    },
    "leagueBenchmarks": [
      {
        "metric": "Key Passes per 90",
        "player": 0.56,
        "avg": 0.9,
        "elite": 2.2
      },
      {
        "metric": "Progressive Passes p90",
        "player": 4.7,
        "avg": 2.8,
        "elite": 6.2
      },
      {
        "metric": "Chances Created",
        "player": 33,
        "avg": 16,
        "elite": 55
      },
      {
        "metric": "Passing Accuracy %",
        "player": 86.5,
        "avg": 79.5,
        "elite": 87.0
      }
    ],
    "heatmap": [
      {
        "x": 50,
        "y": 64,
        "r": 42,
        "v": 0.9
      },
      {
        "x": 40,
        "y": 55,
        "r": 35,
        "v": 0.75
      },
      {
        "x": 60,
        "y": 55,
        "r": 35,
        "v": 0.75
      },
      {
        "x": 50,
        "y": 76,
        "r": 30,
        "v": 0.8
      }
    ],
    "strengths": [
      "Workrate",
      "Clinical Finishing",
      "Tactical awareness"
    ],
    "weaknesses": [
      "Passing",
      "Defending"
    ]
  },
  {
    "id": "will-hughes",
    "name": "Will Hughes",
    "age": 20,
    "position": "MF",
    "role": "Box-to-Box Midfielder",
    "club": "Crystal Palace",
    "league": "Premier League",
    "nation": "England",
    "value": 28200000,
    "rating": 76,
    "general": {
      "apps": 19,
      "mins": 1560,
      "goals": 0,
      "assists": 1,
      "yellowCards": 7,
      "redCards": 0
    },
    "attributes": {
      "pace": 64,
      "dribbling": 71,
      "passing": 81,
      "defending": 63,
      "physicality": 68,
      "tactical": 80,
      "workrate": 82
    },
    "detailedStats": {
      "goalsPer90": 0.0,
      "shotsOnTargetPer90": 0.5,
      "expectedGoals": 1.1,
      "shotConversionRate": 10.0,
      "touchesInBoxPer90": 0.8,
      "chancesCreated": 40,
      "dribblesCompletedPer90": 1.5,
      "keyPassesPer90": 0.93,
      "passingAccuracy": 87.4,
      "progressivePassesPer90": 5.2,
      "tacklesWonPer90": 1.5,
      "interceptionsPer90": 0.7,
      "ballRecoveriesPer90": 4.8
    },
    "leagueBenchmarks": [
      {
        "metric": "Key Passes per 90",
        "player": 0.93,
        "avg": 0.9,
        "elite": 2.2
      },
      {
        "metric": "Progressive Passes p90",
        "player": 5.2,
        "avg": 2.8,
        "elite": 6.2
      },
      {
        "metric": "Chances Created",
        "player": 40,
        "avg": 16,
        "elite": 55
      },
      {
        "metric": "Passing Accuracy %",
        "player": 87.4,
        "avg": 79.5,
        "elite": 87.0
      }
    ],
    "heatmap": [
      {
        "x": 50,
        "y": 42,
        "r: ": 45,
        "v": 0.9
      },
      {
        "x": 44,
        "y": 35,
        "r": 38,
        "v": 0.8
      },
      {
        "x": 56,
        "y": 35,
        "r": 38,
        "v": 0.8
      },
      {
        "x": 50,
        "y": 55,
        "r": 35,
        "v": 0.75
      }
    ],
    "strengths": [
      "Passing",
      "Workrate"
    ],
    "weaknesses": [
      "Defending",
      "Pace"
    ]
  },
  {
    "id": "daichi-kamada",
    "name": "Daichi Kamada",
    "age": 21,
    "position": "MF",
    "role": "Attacking Playmaker",
    "club": "Crystal Palace",
    "league": "Premier League",
    "nation": "Spain",
    "value": 30000000,
    "rating": 79,
    "general": {
      "apps": 22,
      "mins": 1899,
      "goals": 0,
      "assists": 2,
      "yellowCards": 3,
      "redCards": 0
    },
    "attributes": {
      "pace": 67,
      "dribbling": 75,
      "passing": 83,
      "defending": 65,
      "physicality": 70,
      "tactical": 83,
      "workrate": 87
    },
    "detailedStats": {
      "goalsPer90": 0.0,
      "shotsOnTargetPer90": 0.5,
      "expectedGoals": 1.6,
      "shotConversionRate": 10.0,
      "touchesInBoxPer90": 1.0,
      "chancesCreated": 43,
      "dribblesCompletedPer90": 1.6,
      "keyPassesPer90": 0.83,
      "passingAccuracy": 87.8,
      "progressivePassesPer90": 5.5,
      "tacklesWonPer90": 1.6,
      "interceptionsPer90": 0.7,
      "ballRecoveriesPer90": 5.1
    },
    "leagueBenchmarks": [
      {
        "metric": "Key Passes per 90",
        "player": 0.83,
        "avg": 0.9,
        "elite": 2.2
      },
      {
        "metric": "Progressive Passes p90",
        "player": 5.5,
        "avg": 2.8,
        "elite": 6.2
      },
      {
        "metric": "Chances Created",
        "player": 43,
        "avg": 16,
        "elite": 55
      },
      {
        "metric": "Passing Accuracy %",
        "player": 87.8,
        "avg": 79.5,
        "elite": 87.0
      }
    ],
    "heatmap": [
      {
        "x": 50,
        "y": 64,
        "r": 42,
        "v": 0.9
      },
      {
        "x": 40,
        "y": 55,
        "r": 35,
        "v": 0.75
      },
      {
        "x": 60,
        "y": 55,
        "r": 35,
        "v": 0.75
      },
      {
        "x": 50,
        "y": 76,
        "r": 30,
        "v": 0.8
      }
    ],
    "strengths": [
      "Passing",
      "Workrate"
    ],
    "weaknesses": [
      "Defending",
      "Pace"
    ]
  },
  {
    "id": "jefferson-lerma-sol\u00eds",
    "name": "Jefferson Lerma Sol\u00eds",
    "age": 22,
    "position": "MF",
    "role": "Box-to-Box Midfielder",
    "club": "Crystal Palace",
    "league": "Premier League",
    "nation": "Spain",
    "value": 29400000,
    "rating": 79,
    "general": {
      "apps": 18,
      "mins": 1722,
      "goals": 0,
      "assists": 5,
      "yellowCards": 7,
      "redCards": 0
    },
    "attributes": {
      "pace": 71,
      "dribbling": 72,
      "passing": 73,
      "defending": 69,
      "physicality": 74,
      "tactical": 83,
      "workrate": 84
    },
    "detailedStats": {
      "goalsPer90": 0.0,
      "shotsOnTargetPer90": 0.5,
      "expectedGoals": 1.8,
      "shotConversionRate": 10.0,
      "touchesInBoxPer90": 1.3,
      "chancesCreated": 25,
      "dribblesCompletedPer90": 1.1,
      "keyPassesPer90": 0.54,
      "passingAccuracy": 85.5,
      "progressivePassesPer90": 4.1,
      "tacklesWonPer90": 1.8,
      "interceptionsPer90": 0.7,
      "ballRecoveriesPer90": 5.4
    },
    "leagueBenchmarks": [
      {
        "metric": "Key Passes per 90",
        "player": 0.54,
        "avg": 0.9,
        "elite": 2.2
      },
      {
        "metric": "Progressive Passes p90",
        "player": 4.1,
        "avg": 2.8,
        "elite": 6.2
      },
      {
        "metric": "Chances Created",
        "player": 25,
        "avg": 16,
        "elite": 55
      },
      {
        "metric": "Passing Accuracy %",
        "player": 85.5,
        "avg": 79.5,
        "elite": 87.0
      }
    ],
    "heatmap": [
      {
        "x": 50,
        "y": 42,
        "r: ": 45,
        "v": 0.9
      },
      {
        "x": 44,
        "y": 35,
        "r": 38,
        "v": 0.8
      },
      {
        "x": 56,
        "y": 35,
        "r": 38,
        "v": 0.8
      },
      {
        "x": 50,
        "y": 55,
        "r": 35,
        "v": 0.75
      }
    ],
    "strengths": [
      "Workrate",
      "Tactical awareness"
    ],
    "weaknesses": [
      "Defending",
      "Pace"
    ]
  },
  {
    "id": "adam-wharton",
    "name": "Adam Wharton",
    "age": 23,
    "position": "MF",
    "role": "Attacking Playmaker",
    "club": "Crystal Palace",
    "league": "Premier League",
    "nation": "England",
    "value": 30000000,
    "rating": 86,
    "general": {
      "apps": 29,
      "mins": 2552,
      "goals": 1,
      "assists": 6,
      "yellowCards": 4,
      "redCards": 1
    },
    "attributes": {
      "pace": 69,
      "dribbling": 91,
      "passing": 97,
      "defending": 82,
      "physicality": 87,
      "tactical": 95,
      "workrate": 96
    },
    "detailedStats": {
      "goalsPer90": 0.04,
      "shotsOnTargetPer90": 0.6,
      "expectedGoals": 1.5,
      "shotConversionRate": 11.2,
      "touchesInBoxPer90": 1.1,
      "chancesCreated": 90,
      "dribblesCompletedPer90": 2.8,
      "keyPassesPer90": 1.27,
      "passingAccuracy": 94.0,
      "progressivePassesPer90": 9.2,
      "tacklesWonPer90": 2.4,
      "interceptionsPer90": 0.8,
      "ballRecoveriesPer90": 6.8
    },
    "leagueBenchmarks": [
      {
        "metric": "Key Passes per 90",
        "player": 1.27,
        "avg": 0.9,
        "elite": 2.2
      },
      {
        "metric": "Progressive Passes p90",
        "player": 9.2,
        "avg": 2.8,
        "elite": 6.2
      },
      {
        "metric": "Chances Created",
        "player": 90,
        "avg": 16,
        "elite": 55
      },
      {
        "metric": "Passing Accuracy %",
        "player": 94.0,
        "avg": 79.5,
        "elite": 87.0
      }
    ],
    "heatmap": [
      {
        "x": 50,
        "y": 64,
        "r": 42,
        "v": 0.9
      },
      {
        "x": 40,
        "y": 55,
        "r": 35,
        "v": 0.75
      },
      {
        "x": 60,
        "y": 55,
        "r": 35,
        "v": 0.75
      },
      {
        "x": 50,
        "y": 76,
        "r": 30,
        "v": 0.8
      }
    ],
    "strengths": [
      "Passing",
      "Workrate"
    ],
    "weaknesses": [
      "Defending",
      "Pace"
    ]
  },
  {
    "id": "justin-devenny",
    "name": "Justin Devenny",
    "age": 26,
    "position": "MF",
    "role": "Box-to-Box Midfielder",
    "club": "Crystal Palace",
    "league": "Premier League",
    "nation": "England",
    "value": 25800000,
    "rating": 75,
    "general": {
      "apps": 7,
      "mins": 785,
      "goals": 1,
      "assists": 0,
      "yellowCards": 0,
      "redCards": 0
    },
    "attributes": {
      "pace": 68,
      "dribbling": 65,
      "passing": 66,
      "defending": 57,
      "physicality": 62,
      "tactical": 74,
      "workrate": 71
    },
    "detailedStats": {
      "goalsPer90": 0.11,
      "shotsOnTargetPer90": 0.7,
      "expectedGoals": 2.4,
      "shotConversionRate": 11.2,
      "touchesInBoxPer90": 1.1,
      "chancesCreated": 12,
      "dribblesCompletedPer90": 0.7,
      "keyPassesPer90": 0.58,
      "passingAccuracy": 83.7,
      "progressivePassesPer90": 3.0,
      "tacklesWonPer90": 1.2,
      "interceptionsPer90": 0.6,
      "ballRecoveriesPer90": 4.3
    },
    "leagueBenchmarks": [
      {
        "metric": "Key Passes per 90",
        "player": 0.58,
        "avg": 0.9,
        "elite": 2.2
      },
      {
        "metric": "Progressive Passes p90",
        "player": 3.0,
        "avg": 2.8,
        "elite": 6.2
      },
      {
        "metric": "Chances Created",
        "player": 12,
        "avg": 16,
        "elite": 55
      },
      {
        "metric": "Passing Accuracy %",
        "player": 83.7,
        "avg": 79.5,
        "elite": 87.0
      }
    ],
    "heatmap": [
      {
        "x": 50,
        "y": 42,
        "r: ": 45,
        "v": 0.9
      },
      {
        "x": 44,
        "y": 35,
        "r": 38,
        "v": 0.8
      },
      {
        "x": 56,
        "y": 35,
        "r": 38,
        "v": 0.8
      },
      {
        "x": 50,
        "y": 55,
        "r": 35,
        "v": 0.75
      }
    ],
    "strengths": [
      "Workrate",
      "Tactical awareness"
    ],
    "weaknesses": [
      "Defending",
      "Physicality"
    ]
  },
  {
    "id": "jean-philippe-mateta",
    "name": "Jean-Philippe Mateta",
    "age": 33,
    "position": "FW",
    "role": "Complete Winger / Striker",
    "club": "Crystal Palace",
    "league": "Premier League",
    "nation": "Spain",
    "value": 45600000,
    "rating": 86,
    "general": {
      "apps": 25,
      "mins": 2210,
      "goals": 12,
      "assists": 0,
      "yellowCards": 2,
      "redCards": 0
    },
    "attributes": {
      "pace": 98,
      "dribbling": 92,
      "passing": 70,
      "defending": 39,
      "physicality": 92,
      "tactical": 95,
      "workrate": 91
    },
    "detailedStats": {
      "goalsPer90": 0.49,
      "shotsOnTargetPer90": 1.2,
      "expectedGoals": 14.4,
      "shotConversionRate": 24.4,
      "touchesInBoxPer90": 5.9,
      "chancesCreated": 20,
      "dribblesCompletedPer90": 0.9,
      "keyPassesPer90": 0.33
    },
    "leagueBenchmarks": [
      {
        "metric": "Goals per 90",
        "player": 0.49,
        "avg": 0.22,
        "elite": 0.65
      },
      {
        "metric": "Shot Conversion %",
        "player": 24.4,
        "avg": 10.5,
        "elite": 18.0
      },
      {
        "metric": "Touches in Box p90",
        "player": 5.9,
        "avg": 2.5,
        "elite": 5.5
      },
      {
        "metric": "Expected Goals (xG)",
        "player": 14.4,
        "avg": 4.5,
        "elite": 14.0
      }
    ],
    "heatmap": [
      {
        "x": 50,
        "y": 84,
        "r": 38,
        "v": 0.9
      },
      {
        "x": 48,
        "y": 76,
        "r": 32,
        "v": 0.75
      },
      {
        "x": 52,
        "y": 80,
        "r": 32,
        "v": 0.8
      },
      {
        "x": 50,
        "y": 92,
        "r": 28,
        "v": 0.85
      }
    ],
    "strengths": [
      "Clinical Finishing",
      "Tactical awareness",
      "Pace"
    ],
    "weaknesses": [
      "Defending",
      "Defensive Tracking Back"
    ]
  },
  {
    "id": "eddie-nketiah",
    "name": "Eddie Nketiah",
    "age": 34,
    "position": "FW",
    "role": "Complete Winger / Striker",
    "club": "Crystal Palace",
    "league": "Premier League",
    "nation": "Spain",
    "value": 32400000,
    "rating": 73,
    "general": {
      "apps": 2,
      "mins": 414,
      "goals": 2,
      "assists": 0,
      "yellowCards": 2,
      "redCards": 0
    },
    "attributes": {
      "pace": 79,
      "dribbling": 65,
      "passing": 65,
      "defending": 28,
      "physicality": 63,
      "tactical": 74,
      "workrate": 65
    },
    "detailedStats": {
      "goalsPer90": 0.43,
      "shotsOnTargetPer90": 1.1,
      "expectedGoals": 1.8,
      "shotConversionRate": 12.4,
      "touchesInBoxPer90": 2.9,
      "chancesCreated": 10,
      "dribblesCompletedPer90": 0.7,
      "keyPassesPer90": 0.92
    },
    "leagueBenchmarks": [
      {
        "metric": "Goals per 90",
        "player": 0.43,
        "avg": 0.22,
        "elite": 0.65
      },
      {
        "metric": "Shot Conversion %",
        "player": 12.4,
        "avg": 10.5,
        "elite": 18.0
      },
      {
        "metric": "Touches in Box p90",
        "player": 2.9,
        "avg": 2.5,
        "elite": 5.5
      },
      {
        "metric": "Expected Goals (xG)",
        "player": 1.8,
        "avg": 4.5,
        "elite": 14.0
      }
    ],
    "heatmap": [
      {
        "x": 50,
        "y": 84,
        "r": 38,
        "v": 0.9
      },
      {
        "x": 48,
        "y": 76,
        "r": 32,
        "v": 0.75
      },
      {
        "x": 52,
        "y": 80,
        "r": 32,
        "v": 0.8
      },
      {
        "x": 50,
        "y": 92,
        "r": 28,
        "v": 0.85
      }
    ],
    "strengths": [
      "Tactical awareness",
      "Pace"
    ],
    "weaknesses": [
      "Defending",
      "Defensive Tracking Back"
    ]
  },
  {
    "id": "brennan-johnson",
    "name": "Brennan Johnson",
    "age": 30,
    "position": "MF",
    "role": "Box-to-Box Midfielder",
    "club": "Crystal Palace",
    "league": "Premier League",
    "nation": "France",
    "value": 39000000,
    "rating": 79,
    "general": {
      "apps": 19,
      "mins": 1710,
      "goals": 2,
      "assists": 1,
      "yellowCards": 6,
      "redCards": 0
    },
    "attributes": {
      "pace": 71,
      "dribbling": 76,
      "passing": 80,
      "defending": 64,
      "physicality": 69,
      "tactical": 83,
      "workrate": 84
    },
    "detailedStats": {
      "goalsPer90": 0.11,
      "shotsOnTargetPer90": 0.7,
      "expectedGoals": 2.5,
      "shotConversionRate": 12.4,
      "touchesInBoxPer90": 1.3,
      "chancesCreated": 38,
      "dribblesCompletedPer90": 1.4,
      "keyPassesPer90": 0.82,
      "passingAccuracy": 87.2,
      "progressivePassesPer90": 5.1,
      "tacklesWonPer90": 1.5,
      "interceptionsPer90": 0.7,
      "ballRecoveriesPer90": 5.0
    },
    "leagueBenchmarks": [
      {
        "metric": "Key Passes per 90",
        "player": 0.82,
        "avg": 0.9,
        "elite": 2.2
      },
      {
        "metric": "Progressive Passes p90",
        "player": 5.1,
        "avg": 2.8,
        "elite": 6.2
      },
      {
        "metric": "Chances Created",
        "player": 38,
        "avg": 16,
        "elite": 55
      },
      {
        "metric": "Passing Accuracy %",
        "player": 87.2,
        "avg": 79.5,
        "elite": 87.0
      }
    ],
    "heatmap": [
      {
        "x": 50,
        "y": 42,
        "r: ": 45,
        "v": 0.9
      },
      {
        "x": 44,
        "y": 35,
        "r": 38,
        "v": 0.8
      },
      {
        "x": 56,
        "y": 35,
        "r": 38,
        "v": 0.8
      },
      {
        "x": 50,
        "y": 55,
        "r": 35,
        "v": 0.75
      }
    ],
    "strengths": [
      "Workrate",
      "Tactical awareness"
    ],
    "weaknesses": [
      "Defending",
      "Physicality"
    ]
  },
  {
    "id": "j\u00f8rgen-strand-larsen",
    "name": "J\u00f8rgen Strand Larsen",
    "age": 29,
    "position": "FW",
    "role": "Complete Winger / Striker",
    "club": "Crystal Palace",
    "league": "Premier League",
    "nation": "England",
    "value": 34800000,
    "rating": 80,
    "general": {
      "apps": 26,
      "mins": 2301,
      "goals": 4,
      "assists": 1,
      "yellowCards": 4,
      "redCards": 0
    },
    "attributes": {
      "pace": 96,
      "dribbling": 81,
      "passing": 73,
      "defending": 31,
      "physicality": 72,
      "tactical": 87,
      "workrate": 92
    },
    "detailedStats": {
      "goalsPer90": 0.16,
      "shotsOnTargetPer90": 0.7,
      "expectedGoals": 5.3,
      "shotConversionRate": 14.8,
      "touchesInBoxPer90": 4.3,
      "chancesCreated": 25,
      "dribblesCompletedPer90": 1.1,
      "keyPassesPer90": 0.4
    },
    "leagueBenchmarks": [
      {
        "metric": "Goals per 90",
        "player": 0.16,
        "avg": 0.22,
        "elite": 0.65
      },
      {
        "metric": "Shot Conversion %",
        "player": 14.8,
        "avg": 10.5,
        "elite": 18.0
      },
      {
        "metric": "Touches in Box p90",
        "player": 4.3,
        "avg": 2.5,
        "elite": 5.5
      },
      {
        "metric": "Expected Goals (xG)",
        "player": 5.3,
        "avg": 4.5,
        "elite": 14.0
      }
    ],
    "heatmap": [
      {
        "x": 50,
        "y": 84,
        "r": 38,
        "v": 0.9
      },
      {
        "x": 48,
        "y": 76,
        "r": 32,
        "v": 0.75
      },
      {
        "x": 52,
        "y": 80,
        "r": 32,
        "v": 0.8
      },
      {
        "x": 50,
        "y": 92,
        "r": 28,
        "v": 0.85
      }
    ],
    "strengths": [
      "Workrate",
      "Pace"
    ],
    "weaknesses": [
      "Defending",
      "Defensive Tracking Back"
    ]
  },
  {
    "id": "evann-guessand",
    "name": "Evann Guessand",
    "age": 22,
    "position": "MF",
    "role": "Box-to-Box Midfielder",
    "club": "Crystal Palace",
    "league": "Premier League",
    "nation": "Spain",
    "value": 37200000,
    "rating": 76,
    "general": {
      "apps": 9,
      "mins": 909,
      "goals": 1,
      "assists": 3,
      "yellowCards": 0,
      "redCards": 0
    },
    "attributes": {
      "pace": 69,
      "dribbling": 65,
      "passing": 65,
      "defending": 60,
      "physicality": 65,
      "tactical": 75,
      "workrate": 72
    },
    "detailedStats": {
      "goalsPer90": 0.1,
      "shotsOnTargetPer90": 0.7,
      "expectedGoals": 1.6,
      "shotConversionRate": 11.2,
      "touchesInBoxPer90": 1.1,
      "chancesCreated": 9,
      "dribblesCompletedPer90": 0.7,
      "keyPassesPer90": 0.38,
      "passingAccuracy": 83.3,
      "progressivePassesPer90": 2.8,
      "tacklesWonPer90": 1.3,
      "interceptionsPer90": 0.6,
      "ballRecoveriesPer90": 4.6
    },
    "leagueBenchmarks": [
      {
        "metric": "Key Passes per 90",
        "player": 0.38,
        "avg": 0.9,
        "elite": 2.2
      },
      {
        "metric": "Progressive Passes p90",
        "player": 2.8,
        "avg": 2.8,
        "elite": 6.2
      },
      {
        "metric": "Chances Created",
        "player": 9,
        "avg": 16,
        "elite": 55
      },
      {
        "metric": "Passing Accuracy %",
        "player": 83.3,
        "avg": 79.5,
        "elite": 87.0
      }
    ],
    "heatmap": [
      {
        "x": 50,
        "y": 42,
        "r: ": 45,
        "v": 0.9
      },
      {
        "x": 44,
        "y": 35,
        "r": 38,
        "v": 0.8
      },
      {
        "x": 56,
        "y": 35,
        "r": 38,
        "v": 0.8
      },
      {
        "x": 50,
        "y": 55,
        "r": 35,
        "v": 0.75
      }
    ],
    "strengths": [
      "Workrate",
      "Tactical awareness"
    ],
    "weaknesses": [
      "Defending",
      "Physicality"
    ]
  },
  {
    "id": "y\u00e9remy-pino-santos",
    "name": "Y\u00e9remy Pino Santos",
    "age": 27,
    "position": "MF",
    "role": "Attacking Playmaker",
    "club": "Crystal Palace",
    "league": "Premier League",
    "nation": "Spain",
    "value": 34800000,
    "rating": 81,
    "general": {
      "apps": 26,
      "mins": 2074,
      "goals": 2,
      "assists": 2,
      "yellowCards": 4,
      "redCards": 0
    },
    "attributes": {
      "pace": 78,
      "dribbling": 96,
      "passing": 97,
      "defending": 71,
      "physicality": 76,
      "tactical": 95,
      "workrate": 89
    },
    "detailedStats": {
      "goalsPer90": 0.09,
      "shotsOnTargetPer90": 0.6,
      "expectedGoals": 4.5,
      "shotConversionRate": 12.4,
      "touchesInBoxPer90": 1.7,
      "chancesCreated": 89,
      "dribblesCompletedPer90": 2.8,
      "keyPassesPer90": 1.56,
      "passingAccuracy": 94.0,
      "progressivePassesPer90": 9.2,
      "tacklesWonPer90": 1.9,
      "interceptionsPer90": 0.9,
      "ballRecoveriesPer90": 5.7
    },
    "leagueBenchmarks": [
      {
        "metric": "Key Passes per 90",
        "player": 1.56,
        "avg": 0.9,
        "elite": 2.2
      },
      {
        "metric": "Progressive Passes p90",
        "player": 9.2,
        "avg": 2.8,
        "elite": 6.2
      },
      {
        "metric": "Chances Created",
        "player": 89,
        "avg": 16,
        "elite": 55
      },
      {
        "metric": "Passing Accuracy %",
        "player": 94.0,
        "avg": 79.5,
        "elite": 87.0
      }
    ],
    "heatmap": [
      {
        "x": 50,
        "y": 64,
        "r": 42,
        "v": 0.9
      },
      {
        "x": 40,
        "y": 55,
        "r": 35,
        "v": 0.75
      },
      {
        "x": 60,
        "y": 55,
        "r": 35,
        "v": 0.75
      },
      {
        "x": 50,
        "y": 76,
        "r": 30,
        "v": 0.8
      }
    ],
    "strengths": [
      "Dribbling",
      "Passing"
    ],
    "weaknesses": [
      "Defending",
      "Physicality"
    ]
  },
  {
    "id": "jaydee-canvot",
    "name": "Jaydee Canvot",
    "age": 23,
    "position": "DF",
    "role": "Central Defender",
    "club": "Crystal Palace",
    "league": "Premier League",
    "nation": "England",
    "value": 27000000,
    "rating": 80,
    "general": {
      "apps": 14,
      "mins": 1331,
      "goals": 0,
      "assists": 0,
      "yellowCards": 3,
      "redCards": 0
    },
    "attributes": {
      "pace": 67,
      "dribbling": 59,
      "passing": 64,
      "defending": 92,
      "physicality": 79,
      "tactical": 77,
      "workrate": 79
    },
    "detailedStats": {
      "goalsPer90": 0.0,
      "shotsOnTargetPer90": 0.5,
      "expectedGoals": 1.5,
      "shotConversionRate": 10.0,
      "touchesInBoxPer90": 0.7,
      "chancesCreated": 7,
      "dribblesCompletedPer90": 0.6,
      "keyPassesPer90": 0.22,
      "tacklesWonPer90": 2.2,
      "interceptionsPer90": 1.0,
      "clearancesPer90": 3.3,
      "aerialDuelWinPercentage": 73.1,
      "tackledDribblerRate": 54.8,
      "progressivePassesPer90": 1.8,
      "longPassesCompletedPer90": 1.2,
      "passingAccuracy": 81.3
    },
    "leagueBenchmarks": [
      {
        "metric": "Passing Accuracy %",
        "player": 81.3,
        "avg": 82.0,
        "elite": 89.0
      },
      {
        "metric": "Clearances per 90",
        "player": 3.3,
        "avg": 2.6,
        "elite": 4.0
      },
      {
        "metric": "Aerial Duel Win %",
        "player": 73.1,
        "avg": 54.5,
        "elite": 68.0
      },
      {
        "metric": "Tackles Won per 90",
        "player": 2.2,
        "avg": 1.1,
        "elite": 2.0
      }
    ],
    "heatmap": [
      {
        "x": 50,
        "y": 20,
        "r": 45,
        "v": 0.9
      },
      {
        "x": 42,
        "y": 18,
        "r": 32,
        "v": 0.8
      },
      {
        "x": 58,
        "y": 18,
        "r": 32,
        "v": 0.8
      },
      {
        "x": 50,
        "y": 10,
        "r": 28,
        "v": 0.6
      }
    ],
    "strengths": [
      "Defending",
      "Physicality",
      "Aerial Dominance"
    ],
    "weaknesses": [
      "Dribbling",
      "Passing"
    ]
  },
  {
    "id": "kiernan-dewsbury-hall",
    "name": "Kiernan Dewsbury-Hall",
    "age": 22,
    "position": "MF",
    "role": "Attacking Playmaker",
    "club": "Everton",
    "league": "Premier League",
    "nation": "Spain",
    "value": 31800000,
    "rating": 91,
    "general": {
      "apps": 30,
      "mins": 2629,
      "goals": 8,
      "assists": 7,
      "yellowCards": 6,
      "redCards": 0
    },
    "attributes": {
      "pace": 81,
      "dribbling": 96,
      "passing": 97,
      "defending": 88,
      "physicality": 94,
      "tactical": 95,
      "workrate": 96
    },
    "detailedStats": {
      "goalsPer90": 0.27,
      "shotsOnTargetPer90": 0.9,
      "expectedGoals": 4.3,
      "shotConversionRate": 19.6,
      "touchesInBoxPer90": 2.0,
      "chancesCreated": 75,
      "dribblesCompletedPer90": 2.4,
      "keyPassesPer90": 1.03,
      "passingAccuracy": 92.0,
      "progressivePassesPer90": 8.0,
      "tacklesWonPer90": 2.9,
      "interceptionsPer90": 0.9,
      "ballRecoveriesPer90": 7.6
    },
    "leagueBenchmarks": [
      {
        "metric": "Key Passes per 90",
        "player": 1.03,
        "avg": 0.9,
        "elite": 2.2
      },
      {
        "metric": "Progressive Passes p90",
        "player": 8.0,
        "avg": 2.8,
        "elite": 6.2
      },
      {
        "metric": "Chances Created",
        "player": 75,
        "avg": 16,
        "elite": 55
      },
      {
        "metric": "Passing Accuracy %",
        "player": 92.0,
        "avg": 79.5,
        "elite": 87.0
      }
    ],
    "heatmap": [
      {
        "x": 50,
        "y": 64,
        "r": 42,
        "v": 0.9
      },
      {
        "x": 40,
        "y": 55,
        "r": 35,
        "v": 0.75
      },
      {
        "x": 60,
        "y": 55,
        "r": 35,
        "v": 0.75
      },
      {
        "x": 50,
        "y": 76,
        "r": 30,
        "v": 0.8
      }
    ],
    "strengths": [
      "Dribbling",
      "Passing",
      "Creative Vision"
    ],
    "weaknesses": [
      "Defending",
      "Pace"
    ]
  },
  {
    "id": "tyrique-george",
    "name": "Tyrique George",
    "age": 23,
    "position": "MF",
    "role": "Box-to-Box Midfielder",
    "club": "Everton",
    "league": "Premier League",
    "nation": "England",
    "value": 28800000,
    "rating": 72,
    "general": {
      "apps": 1,
      "mins": 351,
      "goals": 0,
      "assists": 0,
      "yellowCards": 2,
      "redCards": 0
    },
    "attributes": {
      "pace": 66,
      "dribbling": 62,
      "passing": 64,
      "defending": 52,
      "physicality": 57,
      "tactical": 70,
      "workrate": 65
    },
    "detailedStats": {
      "goalsPer90": 0.0,
      "shotsOnTargetPer90": 0.5,
      "expectedGoals": 0.6,
      "shotConversionRate": 10.0,
      "touchesInBoxPer90": 0.9,
      "chancesCreated": 8,
      "dribblesCompletedPer90": 0.6,
      "keyPassesPer90": 0.85,
      "passingAccuracy": 83.1,
      "progressivePassesPer90": 2.7,
      "tacklesWonPer90": 0.9,
      "interceptionsPer90": 0.6,
      "ballRecoveriesPer90": 3.8
    },
    "leagueBenchmarks": [
      {
        "metric": "Key Passes per 90",
        "player": 0.85,
        "avg": 0.9,
        "elite": 2.2
      },
      {
        "metric": "Progressive Passes p90",
        "player": 2.7,
        "avg": 2.8,
        "elite": 6.2
      },
      {
        "metric": "Chances Created",
        "player": 8,
        "avg": 16,
        "elite": 55
      },
      {
        "metric": "Passing Accuracy %",
        "player": 83.1,
        "avg": 79.5,
        "elite": 87.0
      }
    ],
    "heatmap": [
      {
        "x": 50,
        "y": 42,
        "r: ": 45,
        "v": 0.9
      },
      {
        "x": 44,
        "y": 35,
        "r": 38,
        "v": 0.8
      },
      {
        "x": 56,
        "y": 35,
        "r": 38,
        "v": 0.8
      },
      {
        "x": 50,
        "y": 55,
        "r": 35,
        "v": 0.75
      }
    ],
    "strengths": [
      "Tactical awareness",
      "Pace"
    ],
    "weaknesses": [
      "Defending",
      "Physicality"
    ]
  },
  {
    "id": "jordan-pickford",
    "name": "Jordan Pickford",
    "age": 22,
    "position": "GK",
    "role": "Sweeper Keeper",
    "club": "Everton",
    "league": "Premier League",
    "nation": "Brazil",
    "value": 33600000,
    "rating": 89,
    "general": {
      "apps": 38,
      "mins": 3420,
      "goals": 0,
      "assists": 0,
      "yellowCards": 4,
      "redCards": 0
    },
    "attributes": {
      "pace": 60,
      "dribbling": 55,
      "passing": 90,
      "defending": 93,
      "physicality": 94,
      "tactical": 87,
      "workrate": 96
    },
    "detailedStats": {
      "savePercentage": 81.0,
      "cleanSheets": 11,
      "goalsConceded": 50,
      "psxgDifference": 4.4,
      "passingAccuracy": 90.0,
      "sweeperActionsPer90": 1.3,
      "averageDistanceOfSweeperActions": 13.8
    },
    "leagueBenchmarks": [
      {
        "metric": "Save %",
        "player": 81.0,
        "avg": 69.5,
        "elite": 77.0
      },
      {
        "metric": "Clean Sheets",
        "player": 11,
        "avg": 4.5,
        "elite": 10.0
      },
      {
        "metric": "Sweeper Actions p90",
        "player": 1.3,
        "avg": 0.6,
        "elite": 1.2
      },
      {
        "metric": "Passing Accuracy %",
        "player": 90.0,
        "avg": 73.0,
        "elite": 82.0
      }
    ],
    "heatmap": [
      {
        "x": 50,
        "y": 6,
        "r": 35,
        "v": 0.98
      },
      {
        "x": 50,
        "y": 14,
        "r": 28,
        "v": 0.7
      },
      {
        "x": 45,
        "y": 8,
        "r": 22,
        "v": 0.55
      },
      {
        "x": 55,
        "y": 8,
        "r": 22,
        "v": 0.55
      }
    ],
    "strengths": [
      "Reflexes",
      "Workrate",
      "Physicality"
    ],
    "weaknesses": [
      "Dribbling",
      "Pace"
    ]
  },
  {
    "id": "jarrad-branthwaite",
    "name": "Jarrad Branthwaite",
    "age": 25,
    "position": "DF",
    "role": "Central Defender",
    "club": "Everton",
    "league": "Premier League",
    "nation": "France",
    "value": 31800000,
    "rating": 74,
    "general": {
      "apps": 7,
      "mins": 678,
      "goals": 1,
      "assists": 1,
      "yellowCards": 1,
      "redCards": 0
    },
    "attributes": {
      "pace": 68,
      "dribbling": 59,
      "passing": 62,
      "defending": 82,
      "physicality": 66,
      "tactical": 72,
      "workrate": 69
    },
    "detailedStats": {
      "goalsPer90": 0.13,
      "shotsOnTargetPer90": 0.7,
      "expectedGoals": 0.3,
      "shotConversionRate": 11.2,
      "touchesInBoxPer90": 0.8,
      "chancesCreated": 5,
      "dribblesCompletedPer90": 0.5,
      "keyPassesPer90": 0.28,
      "tacklesWonPer90": 1.6,
      "interceptionsPer90": 0.9,
      "clearancesPer90": 2.4,
      "aerialDuelWinPercentage": 63.8,
      "tackledDribblerRate": 52.9,
      "progressivePassesPer90": 1.7,
      "longPassesCompletedPer90": 1.1,
      "passingAccuracy": 80.9
    },
    "leagueBenchmarks": [
      {
        "metric": "Passing Accuracy %",
        "player": 80.9,
        "avg": 82.0,
        "elite": 89.0
      },
      {
        "metric": "Clearances per 90",
        "player": 2.4,
        "avg": 2.6,
        "elite": 4.0
      },
      {
        "metric": "Aerial Duel Win %",
        "player": 63.8,
        "avg": 54.5,
        "elite": 68.0
      },
      {
        "metric": "Tackles Won per 90",
        "player": 1.6,
        "avg": 1.1,
        "elite": 2.0
      }
    ],
    "heatmap": [
      {
        "x": 50,
        "y": 20,
        "r": 45,
        "v": 0.9
      },
      {
        "x": 42,
        "y": 18,
        "r": 32,
        "v": 0.8
      },
      {
        "x": 58,
        "y": 18,
        "r": 32,
        "v": 0.8
      },
      {
        "x": 50,
        "y": 10,
        "r": 28,
        "v": 0.6
      }
    ],
    "strengths": [
      "Defending",
      "Tactical awareness"
    ],
    "weaknesses": [
      "Dribbling",
      "Passing"
    ]
  },
  {
    "id": "james-tarkowski",
    "name": "James Tarkowski",
    "age": 26,
    "position": "DF",
    "role": "Attacking Fullback",
    "club": "Everton",
    "league": "Premier League",
    "nation": "England",
    "value": 34800000,
    "rating": 93,
    "general": {
      "apps": 37,
      "mins": 3330,
      "goals": 2,
      "assists": 3,
      "yellowCards": 8,
      "redCards": 0
    },
    "attributes": {
      "pace": 81,
      "dribbling": 81,
      "passing": 75,
      "defending": 94,
      "physicality": 94,
      "tactical": 95,
      "workrate": 96
    },
    "detailedStats": {
      "goalsPer90": 0.05,
      "shotsOnTargetPer90": 0.6,
      "expectedGoals": 2.5,
      "shotConversionRate": 12.4,
      "touchesInBoxPer90": 1.9,
      "chancesCreated": 29,
      "dribblesCompletedPer90": 1.2,
      "keyPassesPer90": 0.32,
      "tacklesWonPer90": 4.3,
      "interceptionsPer90": 1.4,
      "clearancesPer90": 6.5,
      "aerialDuelWinPercentage": 80.0,
      "tackledDribblerRate": 66.6,
      "progressivePassesPer90": 2.7,
      "longPassesCompletedPer90": 1.8,
      "passingAccuracy": 84.7
    },
    "leagueBenchmarks": [
      {
        "metric": "Passing Accuracy %",
        "player": 84.7,
        "avg": 82.0,
        "elite": 89.0
      },
      {
        "metric": "Clearances per 90",
        "player": 6.5,
        "avg": 2.6,
        "elite": 4.0
      },
      {
        "metric": "Aerial Duel Win %",
        "player": 80.0,
        "avg": 54.5,
        "elite": 68.0
      },
      {
        "metric": "Tackles Won per 90",
        "player": 4.3,
        "avg": 1.1,
        "elite": 2.0
      }
    ],
    "heatmap": [
      {
        "x": 86,
        "y": 25,
        "r": 38,
        "v": 0.8
      },
      {
        "x": 86,
        "y": 45,
        "r": 40,
        "v": 0.85
      },
      {
        "x": 86,
        "y": 65,
        "r": 35,
        "v": 0.7
      },
      {
        "x": 86,
        "y": 12,
        "r": 30,
        "v": 0.6
      }
    ],
    "strengths": [
      "Workrate",
      "Tactical awareness",
      "Aerial Dominance"
    ],
    "weaknesses": [
      "Dribbling",
      "Passing"
    ]
  },
  {
    "id": "vitalii-mykolenko",
    "name": "Vitalii Mykolenko",
    "age": 27,
    "position": "DF",
    "role": "Attacking Fullback",
    "club": "Everton",
    "league": "Premier League",
    "nation": "Spain",
    "value": 29400000,
    "rating": 83,
    "general": {
      "apps": 33,
      "mins": 2959,
      "goals": 0,
      "assists": 1,
      "yellowCards": 6,
      "redCards": 0
    },
    "attributes": {
      "pace": 67,
      "dribbling": 73,
      "passing": 86,
      "defending": 94,
      "physicality": 92,
      "tactical": 90,
      "workrate": 96
    },
    "detailedStats": {
      "goalsPer90": 0.0,
      "shotsOnTargetPer90": 0.5,
      "expectedGoals": 0.3,
      "shotConversionRate": 10.0,
      "touchesInBoxPer90": 0.7,
      "chancesCreated": 49,
      "dribblesCompletedPer90": 1.7,
      "keyPassesPer90": 0.6,
      "tacklesWonPer90": 2.9,
      "interceptionsPer90": 1.1,
      "clearancesPer90": 4.3,
      "aerialDuelWinPercentage": 80.0,
      "tackledDribblerRate": 60.2,
      "progressivePassesPer90": 3.5,
      "longPassesCompletedPer90": 2.3,
      "passingAccuracy": 87.9
    },
    "leagueBenchmarks": [
      {
        "metric": "Passing Accuracy %",
        "player": 87.9,
        "avg": 82.0,
        "elite": 89.0
      },
      {
        "metric": "Clearances per 90",
        "player": 4.3,
        "avg": 2.6,
        "elite": 4.0
      },
      {
        "metric": "Aerial Duel Win %",
        "player": 80.0,
        "avg": 54.5,
        "elite": 68.0
      },
      {
        "metric": "Tackles Won per 90",
        "player": 2.9,
        "avg": 1.1,
        "elite": 2.0
      }
    ],
    "heatmap": [
      {
        "x": 14,
        "y": 25,
        "r": 38,
        "v": 0.8
      },
      {
        "x": 14,
        "y": 45,
        "r": 40,
        "v": 0.85
      },
      {
        "x": 14,
        "y": 65,
        "r": 35,
        "v": 0.7
      },
      {
        "x": 14,
        "y": 12,
        "r": 30,
        "v": 0.6
      }
    ],
    "strengths": [
      "Defending",
      "Workrate",
      "Aerial Dominance"
    ],
    "weaknesses": [
      "Dribbling",
      "Pace"
    ]
  },
  {
    "id": "jake-o'brien",
    "name": "Jake O'Brien",
    "age": 28,
    "position": "DF",
    "role": "Attacking Fullback",
    "club": "Everton",
    "league": "Premier League",
    "nation": "Spain",
    "value": 29400000,
    "rating": 86,
    "general": {
      "apps": 35,
      "mins": 3118,
      "goals": 1,
      "assists": 3,
      "yellowCards": 6,
      "redCards": 1
    },
    "attributes": {
      "pace": 73,
      "dribbling": 74,
      "passing": 78,
      "defending": 94,
      "physicality": 93,
      "tactical": 91,
      "workrate": 96
    },
    "detailedStats": {
      "goalsPer90": 0.03,
      "shotsOnTargetPer90": 0.5,
      "expectedGoals": 1.7,
      "shotConversionRate": 11.2,
      "touchesInBoxPer90": 1.2,
      "chancesCreated": 35,
      "dribblesCompletedPer90": 1.3,
      "keyPassesPer90": 0.41,
      "tacklesWonPer90": 2.9,
      "interceptionsPer90": 1.2,
      "clearancesPer90": 4.4,
      "aerialDuelWinPercentage": 80.0,
      "tackledDribblerRate": 60.8,
      "progressivePassesPer90": 2.9,
      "longPassesCompletedPer90": 1.9,
      "passingAccuracy": 85.7
    },
    "leagueBenchmarks": [
      {
        "metric": "Passing Accuracy %",
        "player": 85.7,
        "avg": 82.0,
        "elite": 89.0
      },
      {
        "metric": "Clearances per 90",
        "player": 4.4,
        "avg": 2.6,
        "elite": 4.0
      },
      {
        "metric": "Aerial Duel Win %",
        "player": 80.0,
        "avg": 54.5,
        "elite": 68.0
      },
      {
        "metric": "Tackles Won per 90",
        "player": 2.9,
        "avg": 1.1,
        "elite": 2.0
      }
    ],
    "heatmap": [
      {
        "x": 86,
        "y": 25,
        "r": 38,
        "v": 0.8
      },
      {
        "x": 86,
        "y": 45,
        "r": 40,
        "v": 0.85
      },
      {
        "x": 86,
        "y": 65,
        "r": 35,
        "v": 0.7
      },
      {
        "x": 86,
        "y": 12,
        "r": 30,
        "v": 0.6
      }
    ],
    "strengths": [
      "Defending",
      "Workrate",
      "Aerial Dominance"
    ],
    "weaknesses": [
      "Dribbling",
      "Pace"
    ]
  },
  {
    "id": "michael-keane",
    "name": "Michael Keane",
    "age": 30,
    "position": "DF",
    "role": "Attacking Fullback",
    "club": "Everton",
    "league": "Premier League",
    "nation": "France",
    "value": 27000000,
    "rating": 88,
    "general": {
      "apps": 29,
      "mins": 2588,
      "goals": 3,
      "assists": 1,
      "yellowCards": 1,
      "redCards": 1
    },
    "attributes": {
      "pace": 76,
      "dribbling": 68,
      "passing": 63,
      "defending": 94,
      "physicality": 94,
      "tactical": 92,
      "workrate": 96
    },
    "detailedStats": {
      "goalsPer90": 0.1,
      "shotsOnTargetPer90": 0.7,
      "expectedGoals": 2.3,
      "shotConversionRate": 13.6,
      "touchesInBoxPer90": 1.5,
      "chancesCreated": 5,
      "dribblesCompletedPer90": 0.6,
      "keyPassesPer90": 0.08,
      "tacklesWonPer90": 3.6,
      "interceptionsPer90": 1.2,
      "clearancesPer90": 5.4,
      "aerialDuelWinPercentage": 80.0,
      "tackledDribblerRate": 61.2,
      "progressivePassesPer90": 1.7,
      "longPassesCompletedPer90": 1.2,
      "passingAccuracy": 80.9
    },
    "leagueBenchmarks": [
      {
        "metric": "Passing Accuracy %",
        "player": 80.9,
        "avg": 82.0,
        "elite": 89.0
      },
      {
        "metric": "Clearances per 90",
        "player": 5.4,
        "avg": 2.6,
        "elite": 4.0
      },
      {
        "metric": "Aerial Duel Win %",
        "player": 80.0,
        "avg": 54.5,
        "elite": 68.0
      },
      {
        "metric": "Tackles Won per 90",
        "player": 3.6,
        "avg": 1.1,
        "elite": 2.0
      }
    ],
    "heatmap": [
      {
        "x": 86,
        "y": 25,
        "r": 38,
        "v": 0.8
      },
      {
        "x": 86,
        "y": 45,
        "r": 40,
        "v": 0.85
      },
      {
        "x": 86,
        "y": 65,
        "r": 35,
        "v": 0.7
      },
      {
        "x": 86,
        "y": 12,
        "r": 30,
        "v": 0.6
      }
    ],
    "strengths": [
      "Defending",
      "Workrate",
      "Aerial Dominance"
    ],
    "weaknesses": [
      "Dribbling",
      "Passing"
    ]
  },
  {
    "id": "nathan-patterson",
    "name": "Nathan Patterson",
    "age": 31,
    "position": "DF",
    "role": "Central Defender",
    "club": "Everton",
    "league": "Premier League",
    "nation": "Spain",
    "value": 26400000,
    "rating": 73,
    "general": {
      "apps": 3,
      "mins": 238,
      "goals": 0,
      "assists": 0,
      "yellowCards": 0,
      "redCards": 0
    },
    "attributes": {
      "pace": 65,
      "dribbling": 55,
      "passing": 60,
      "defending": 75,
      "physicality": 59,
      "tactical": 67,
      "workrate": 63
    },
    "detailedStats": {
      "goalsPer90": 0.0,
      "shotsOnTargetPer90": 0.5,
      "expectedGoals": 0.0,
      "shotConversionRate": 10.0,
      "touchesInBoxPer90": 0.6,
      "chancesCreated": 0,
      "dribblesCompletedPer90": 0.4,
      "keyPassesPer90": 0.12,
      "tacklesWonPer90": 1.2,
      "interceptionsPer90": 0.8,
      "clearancesPer90": 1.8,
      "aerialDuelWinPercentage": 58.3,
      "tackledDribblerRate": 50.9,
      "progressivePassesPer90": 1.5,
      "longPassesCompletedPer90": 1.0,
      "passingAccuracy": 80.1
    },
    "leagueBenchmarks": [
      {
        "metric": "Passing Accuracy %",
        "player": 80.1,
        "avg": 82.0,
        "elite": 89.0
      },
      {
        "metric": "Clearances per 90",
        "player": 1.8,
        "avg": 2.6,
        "elite": 4.0
      },
      {
        "metric": "Aerial Duel Win %",
        "player": 58.3,
        "avg": 54.5,
        "elite": 68.0
      },
      {
        "metric": "Tackles Won per 90",
        "player": 1.2,
        "avg": 1.1,
        "elite": 2.0
      }
    ],
    "heatmap": [
      {
        "x": 50,
        "y": 20,
        "r": 45,
        "v": 0.9
      },
      {
        "x": 42,
        "y": 18,
        "r": 32,
        "v": 0.8
      },
      {
        "x": 58,
        "y": 18,
        "r": 32,
        "v": 0.8
      },
      {
        "x": 50,
        "y": 10,
        "r": 28,
        "v": 0.6
      }
    ],
    "strengths": [
      "Defending",
      "Tactical awareness"
    ],
    "weaknesses": [
      "Dribbling",
      "Physicality"
    ]
  },
  {
    "id": "iliman-ndiaye",
    "name": "Iliman Ndiaye",
    "age": 34,
    "position": "MF",
    "role": "Attacking Playmaker",
    "club": "Everton",
    "league": "Premier League",
    "nation": "Spain",
    "value": 37800000,
    "rating": 88,
    "general": {
      "apps": 32,
      "mins": 2781,
      "goals": 6,
      "assists": 3,
      "yellowCards": 2,
      "redCards": 0
    },
    "attributes": {
      "pace": 88,
      "dribbling": 96,
      "passing": 91,
      "defending": 88,
      "physicality": 94,
      "tactical": 95,
      "workrate": 96
    },
    "detailedStats": {
      "goalsPer90": 0.19,
      "shotsOnTargetPer90": 0.8,
      "expectedGoals": 6.7,
      "shotConversionRate": 17.2,
      "touchesInBoxPer90": 2.4,
      "chancesCreated": 59,
      "dribblesCompletedPer90": 2.0,
      "keyPassesPer90": 0.78,
      "passingAccuracy": 90.0,
      "progressivePassesPer90": 6.8,
      "tacklesWonPer90": 2.8,
      "interceptionsPer90": 0.9,
      "ballRecoveriesPer90": 7.5
    },
    "leagueBenchmarks": [
      {
        "metric": "Key Passes per 90",
        "player": 0.78,
        "avg": 0.9,
        "elite": 2.2
      },
      {
        "metric": "Progressive Passes p90",
        "player": 6.8,
        "avg": 2.8,
        "elite": 6.2
      },
      {
        "metric": "Chances Created",
        "player": 59,
        "avg": 16,
        "elite": 55
      },
      {
        "metric": "Passing Accuracy %",
        "player": 90.0,
        "avg": 79.5,
        "elite": 87.0
      }
    ],
    "heatmap": [
      {
        "x": 50,
        "y": 64,
        "r": 42,
        "v": 0.9
      },
      {
        "x": 40,
        "y": 55,
        "r": 35,
        "v": 0.75
      },
      {
        "x": 60,
        "y": 55,
        "r": 35,
        "v": 0.75
      },
      {
        "x": 50,
        "y": 76,
        "r": 30,
        "v": 0.8
      }
    ],
    "strengths": [
      "Dribbling",
      "Workrate"
    ],
    "weaknesses": [
      "Defending",
      "Pace"
    ]
  },
  {
    "id": "dwight-mcneil",
    "name": "Dwight McNeil",
    "age": 20,
    "position": "MF",
    "role": "Box-to-Box Midfielder",
    "club": "Everton",
    "league": "Premier League",
    "nation": "England",
    "value": 33000000,
    "rating": 77,
    "general": {
      "apps": 14,
      "mins": 1161,
      "goals": 0,
      "assists": 3,
      "yellowCards": 1,
      "redCards": 0
    },
    "attributes": {
      "pace": 66,
      "dribbling": 70,
      "passing": 76,
      "defending": 59,
      "physicality": 64,
      "tactical": 78,
      "workrate": 76
    },
    "detailedStats": {
      "goalsPer90": 0.0,
      "shotsOnTargetPer90": 0.5,
      "expectedGoals": 1.4,
      "shotConversionRate": 10.0,
      "touchesInBoxPer90": 1.0,
      "chancesCreated": 30,
      "dribblesCompletedPer90": 1.2,
      "keyPassesPer90": 0.94,
      "passingAccuracy": 86.0,
      "progressivePassesPer90": 4.4,
      "tacklesWonPer90": 1.3,
      "interceptionsPer90": 0.6,
      "ballRecoveriesPer90": 4.4
    },
    "leagueBenchmarks": [
      {
        "metric": "Key Passes per 90",
        "player": 0.94,
        "avg": 0.9,
        "elite": 2.2
      },
      {
        "metric": "Progressive Passes p90",
        "player": 4.4,
        "avg": 2.8,
        "elite": 6.2
      },
      {
        "metric": "Chances Created",
        "player": 30,
        "avg": 16,
        "elite": 55
      },
      {
        "metric": "Passing Accuracy %",
        "player": 86.0,
        "avg": 79.5,
        "elite": 87.0
      }
    ],
    "heatmap": [
      {
        "x": 50,
        "y": 42,
        "r: ": 45,
        "v": 0.9
      },
      {
        "x": 44,
        "y": 35,
        "r": 38,
        "v": 0.8
      },
      {
        "x": 56,
        "y": 35,
        "r": 38,
        "v": 0.8
      },
      {
        "x": 50,
        "y": 55,
        "r": 35,
        "v": 0.75
      }
    ],
    "strengths": [
      "Passing",
      "Tactical awareness"
    ],
    "weaknesses": [
      "Defending",
      "Physicality"
    ]
  },
  {
    "id": "carlos-alcaraz-dur\u00e1n",
    "name": "Carlos Alcaraz Dur\u00e1n",
    "age": 21,
    "position": "MF",
    "role": "Box-to-Box Midfielder",
    "club": "Everton",
    "league": "Premier League",
    "nation": "Brazil",
    "value": 31200000,
    "rating": 74,
    "general": {
      "apps": 6,
      "mins": 679,
      "goals": 0,
      "assists": 1,
      "yellowCards": 4,
      "redCards": 0
    },
    "attributes": {
      "pace": 68,
      "dribbling": 67,
      "passing": 70,
      "defending": 56,
      "physicality": 61,
      "tactical": 75,
      "workrate": 69
    },
    "detailedStats": {
      "goalsPer90": 0.0,
      "shotsOnTargetPer90": 0.5,
      "expectedGoals": 1.2,
      "shotConversionRate": 10.0,
      "touchesInBoxPer90": 1.0,
      "chancesCreated": 20,
      "dribblesCompletedPer90": 0.9,
      "keyPassesPer90": 1.07,
      "passingAccuracy": 84.7,
      "progressivePassesPer90": 3.6,
      "tacklesWonPer90": 1.1,
      "interceptionsPer90": 0.6,
      "ballRecoveriesPer90": 4.1
    },
    "leagueBenchmarks": [
      {
        "metric": "Key Passes per 90",
        "player": 1.07,
        "avg": 0.9,
        "elite": 2.2
      },
      {
        "metric": "Progressive Passes p90",
        "player": 3.6,
        "avg": 2.8,
        "elite": 6.2
      },
      {
        "metric": "Chances Created",
        "player": 20,
        "avg": 16,
        "elite": 55
      },
      {
        "metric": "Passing Accuracy %",
        "player": 84.7,
        "avg": 79.5,
        "elite": 87.0
      }
    ],
    "heatmap": [
      {
        "x": 50,
        "y": 42,
        "r: ": 45,
        "v": 0.9
      },
      {
        "x": 44,
        "y": 35,
        "r": 38,
        "v": 0.8
      },
      {
        "x": 56,
        "y": 35,
        "r": 38,
        "v": 0.8
      },
      {
        "x": 50,
        "y": 55,
        "r": 35,
        "v": 0.75
      }
    ],
    "strengths": [
      "Passing",
      "Tactical awareness"
    ],
    "weaknesses": [
      "Defending",
      "Physicality"
    ]
  },
  {
    "id": "idrissa-gana-gueye",
    "name": "Idrissa Gana Gueye",
    "age": 22,
    "position": "MF",
    "role": "Box-to-Box Midfielder",
    "club": "Everton",
    "league": "Premier League",
    "nation": "Spain",
    "value": 32400000,
    "rating": 81,
    "general": {
      "apps": 25,
      "mins": 2094,
      "goals": 2,
      "assists": 3,
      "yellowCards": 1,
      "redCards": 1
    },
    "attributes": {
      "pace": 70,
      "dribbling": 73,
      "passing": 77,
      "defending": 75,
      "physicality": 80,
      "tactical": 86,
      "workrate": 89
    },
    "detailedStats": {
      "goalsPer90": 0.09,
      "shotsOnTargetPer90": 0.6,
      "expectedGoals": 2.0,
      "shotConversionRate": 12.4,
      "touchesInBoxPer90": 1.2,
      "chancesCreated": 32,
      "dribblesCompletedPer90": 1.3,
      "keyPassesPer90": 0.56,
      "passingAccuracy": 86.3,
      "progressivePassesPer90": 4.6,
      "tacklesWonPer90": 2.1,
      "interceptionsPer90": 0.7,
      "ballRecoveriesPer90": 6.1
    },
    "leagueBenchmarks": [
      {
        "metric": "Key Passes per 90",
        "player": 0.56,
        "avg": 0.9,
        "elite": 2.2
      },
      {
        "metric": "Progressive Passes p90",
        "player": 4.6,
        "avg": 2.8,
        "elite": 6.2
      },
      {
        "metric": "Chances Created",
        "player": 32,
        "avg": 16,
        "elite": 55
      },
      {
        "metric": "Passing Accuracy %",
        "player": 86.3,
        "avg": 79.5,
        "elite": 87.0
      }
    ],
    "heatmap": [
      {
        "x": 50,
        "y": 42,
        "r: ": 45,
        "v": 0.9
      },
      {
        "x": 44,
        "y": 35,
        "r": 38,
        "v": 0.8
      },
      {
        "x": 56,
        "y": 35,
        "r": 38,
        "v": 0.8
      },
      {
        "x": 50,
        "y": 55,
        "r": 35,
        "v": 0.75
      }
    ],
    "strengths": [
      "Workrate",
      "Tactical awareness"
    ],
    "weaknesses": [
      "Dribbling",
      "Pace"
    ]
  },
  {
    "id": "james-garner",
    "name": "James Garner",
    "age": 23,
    "position": "MF",
    "role": "Attacking Playmaker",
    "club": "Everton",
    "league": "Premier League",
    "nation": "England",
    "value": 31200000,
    "rating": 92,
    "general": {
      "apps": 38,
      "mins": 3413,
      "goals": 2,
      "assists": 7,
      "yellowCards": 12,
      "redCards": 0
    },
    "attributes": {
      "pace": 71,
      "dribbling": 96,
      "passing": 97,
      "defending": 88,
      "physicality": 94,
      "tactical": 95,
      "workrate": 96
    },
    "detailedStats": {
      "goalsPer90": 0.05,
      "shotsOnTargetPer90": 0.6,
      "expectedGoals": 2.1,
      "shotConversionRate": 12.4,
      "touchesInBoxPer90": 1.3,
      "chancesCreated": 119,
      "dribblesCompletedPer90": 3.6,
      "keyPassesPer90": 1.26,
      "passingAccuracy": 94.0,
      "progressivePassesPer90": 11.6,
      "tacklesWonPer90": 3.8,
      "interceptionsPer90": 1.0,
      "ballRecoveriesPer90": 9.4
    },
    "leagueBenchmarks": [
      {
        "metric": "Key Passes per 90",
        "player": 1.26,
        "avg": 0.9,
        "elite": 2.2
      },
      {
        "metric": "Progressive Passes p90",
        "player": 11.6,
        "avg": 2.8,
        "elite": 6.2
      },
      {
        "metric": "Chances Created",
        "player": 119,
        "avg": 16,
        "elite": 55
      },
      {
        "metric": "Passing Accuracy %",
        "player": 94.0,
        "avg": 79.5,
        "elite": 87.0
      }
    ],
    "heatmap": [
      {
        "x": 50,
        "y": 64,
        "r": 42,
        "v": 0.9
      },
      {
        "x": 40,
        "y": 55,
        "r": 35,
        "v": 0.75
      },
      {
        "x": 60,
        "y": 55,
        "r": 35,
        "v": 0.75
      },
      {
        "x": 50,
        "y": 76,
        "r": 30,
        "v": 0.8
      }
    ],
    "strengths": [
      "Dribbling",
      "Passing",
      "Creative Vision"
    ],
    "weaknesses": [
      "Defending",
      "Pace"
    ]
  },
  {
    "id": "tim-iroegbunam",
    "name": "Tim Iroegbunam",
    "age": 24,
    "position": "MF",
    "role": "Box-to-Box Midfielder",
    "club": "Everton",
    "league": "Premier League",
    "nation": "Spain",
    "value": 28800000,
    "rating": 79,
    "general": {
      "apps": 17,
      "mins": 1477,
      "goals": 0,
      "assists": 3,
      "yellowCards": 9,
      "redCards": 0
    },
    "attributes": {
      "pace": 64,
      "dribbling": 63,
      "passing": 68,
      "defending": 67,
      "physicality": 72,
      "tactical": 76,
      "workrate": 81
    },
    "detailedStats": {
      "goalsPer90": 0.0,
      "shotsOnTargetPer90": 0.5,
      "expectedGoals": 0.5,
      "shotConversionRate": 10.0,
      "touchesInBoxPer90": 0.8,
      "chancesCreated": 15,
      "dribblesCompletedPer90": 0.8,
      "keyPassesPer90": 0.38,
      "passingAccuracy": 84.1,
      "progressivePassesPer90": 3.3,
      "tacklesWonPer90": 1.6,
      "interceptionsPer90": 0.6,
      "ballRecoveriesPer90": 5.2
    },
    "leagueBenchmarks": [
      {
        "metric": "Key Passes per 90",
        "player": 0.38,
        "avg": 0.9,
        "elite": 2.2
      },
      {
        "metric": "Progressive Passes p90",
        "player": 3.3,
        "avg": 2.8,
        "elite": 6.2
      },
      {
        "metric": "Chances Created",
        "player": 15,
        "avg": 16,
        "elite": 55
      },
      {
        "metric": "Passing Accuracy %",
        "player": 84.1,
        "avg": 79.5,
        "elite": 87.0
      }
    ],
    "heatmap": [
      {
        "x": 50,
        "y": 42,
        "r: ": 45,
        "v": 0.9
      },
      {
        "x": 44,
        "y": 35,
        "r": 38,
        "v": 0.8
      },
      {
        "x": 56,
        "y": 35,
        "r": 38,
        "v": 0.8
      },
      {
        "x": 50,
        "y": 55,
        "r": 35,
        "v": 0.75
      }
    ],
    "strengths": [
      "Workrate",
      "Tactical awareness"
    ],
    "weaknesses": [
      "Dribbling",
      "Pace"
    ]
  },
  {
    "id": "harrison-armstrong",
    "name": "Harrison Armstrong",
    "age": 25,
    "position": "MF",
    "role": "Box-to-Box Midfielder",
    "club": "Everton",
    "league": "Premier League",
    "nation": "France",
    "value": 27000000,
    "rating": 73,
    "general": {
      "apps": 6,
      "mins": 524,
      "goals": 0,
      "assists": 0,
      "yellowCards": 0,
      "redCards": 0
    },
    "attributes": {
      "pace": 63,
      "dribbling": 60,
      "passing": 64,
      "defending": 54,
      "physicality": 59,
      "tactical": 70,
      "workrate": 67
    },
    "detailedStats": {
      "goalsPer90": 0.0,
      "shotsOnTargetPer90": 0.5,
      "expectedGoals": 0.8,
      "shotConversionRate": 10.0,
      "touchesInBoxPer90": 0.8,
      "chancesCreated": 8,
      "dribblesCompletedPer90": 0.6,
      "keyPassesPer90": 0.6,
      "passingAccuracy": 83.2,
      "progressivePassesPer90": 2.7,
      "tacklesWonPer90": 1.0,
      "interceptionsPer90": 0.6,
      "ballRecoveriesPer90": 3.9
    },
    "leagueBenchmarks": [
      {
        "metric": "Key Passes per 90",
        "player": 0.6,
        "avg": 0.9,
        "elite": 2.2
      },
      {
        "metric": "Progressive Passes p90",
        "player": 2.7,
        "avg": 2.8,
        "elite": 6.2
      },
      {
        "metric": "Chances Created",
        "player": 8,
        "avg": 16,
        "elite": 55
      },
      {
        "metric": "Passing Accuracy %",
        "player": 83.2,
        "avg": 79.5,
        "elite": 87.0
      }
    ],
    "heatmap": [
      {
        "x": 50,
        "y": 42,
        "r: ": 45,
        "v": 0.9
      },
      {
        "x": 44,
        "y": 35,
        "r": 38,
        "v": 0.8
      },
      {
        "x": 56,
        "y": 35,
        "r": 38,
        "v": 0.8
      },
      {
        "x": 50,
        "y": 55,
        "r": 35,
        "v": 0.75
      }
    ],
    "strengths": [
      "Workrate",
      "Tactical awareness"
    ],
    "weaknesses": [
      "Defending",
      "Physicality"
    ]
  },
  {
    "id": "thierno-barry",
    "name": "Thierno Barry",
    "age": 30,
    "position": "FW",
    "role": "Complete Winger / Striker",
    "club": "Everton",
    "league": "Premier League",
    "nation": "France",
    "value": 34200000,
    "rating": 83,
    "general": {
      "apps": 21,
      "mins": 1898,
      "goals": 8,
      "assists": 0,
      "yellowCards": 3,
      "redCards": 0
    },
    "attributes": {
      "pace": 97,
      "dribbling": 83,
      "passing": 73,
      "defending": 33,
      "physicality": 77,
      "tactical": 90,
      "workrate": 87
    },
    "detailedStats": {
      "goalsPer90": 0.38,
      "shotsOnTargetPer90": 1.1,
      "expectedGoals": 8.2,
      "shotConversionRate": 19.6,
      "touchesInBoxPer90": 4.5,
      "chancesCreated": 25,
      "dribblesCompletedPer90": 1.1,
      "keyPassesPer90": 0.49
    },
    "leagueBenchmarks": [
      {
        "metric": "Goals per 90",
        "player": 0.38,
        "avg": 0.22,
        "elite": 0.65
      },
      {
        "metric": "Shot Conversion %",
        "player": 19.6,
        "avg": 10.5,
        "elite": 18.0
      },
      {
        "metric": "Touches in Box p90",
        "player": 4.5,
        "avg": 2.5,
        "elite": 5.5
      },
      {
        "metric": "Expected Goals (xG)",
        "player": 8.2,
        "avg": 4.5,
        "elite": 14.0
      }
    ],
    "heatmap": [
      {
        "x": 50,
        "y": 84,
        "r": 38,
        "v": 0.9
      },
      {
        "x": 48,
        "y": 76,
        "r": 32,
        "v": 0.75
      },
      {
        "x": 52,
        "y": 80,
        "r": 32,
        "v": 0.8
      },
      {
        "x": 50,
        "y": 92,
        "r": 28,
        "v": 0.85
      }
    ],
    "strengths": [
      "Tactical awareness",
      "Pace"
    ],
    "weaknesses": [
      "Defending",
      "Defensive Tracking Back"
    ]
  },
  {
    "id": "norberto-bercique-gomes-betuncal",
    "name": "Norberto Bercique Gomes Betuncal",
    "age": 31,
    "position": "FW",
    "role": "Complete Winger / Striker",
    "club": "Everton",
    "league": "Premier League",
    "nation": "Spain",
    "value": 30600000,
    "rating": 84,
    "general": {
      "apps": 17,
      "mins": 1551,
      "goals": 9,
      "assists": 1,
      "yellowCards": 3,
      "redCards": 0
    },
    "attributes": {
      "pace": 98,
      "dribbling": 87,
      "passing": 70,
      "defending": 36,
      "physicality": 84,
      "tactical": 95,
      "workrate": 82
    },
    "detailedStats": {
      "goalsPer90": 0.52,
      "shotsOnTargetPer90": 1.3,
      "expectedGoals": 8.9,
      "shotConversionRate": 20.8,
      "touchesInBoxPer90": 5.3,
      "chancesCreated": 19,
      "dribblesCompletedPer90": 0.9,
      "keyPassesPer90": 0.46
    },
    "leagueBenchmarks": [
      {
        "metric": "Goals per 90",
        "player": 0.52,
        "avg": 0.22,
        "elite": 0.65
      },
      {
        "metric": "Shot Conversion %",
        "player": 20.8,
        "avg": 10.5,
        "elite": 18.0
      },
      {
        "metric": "Touches in Box p90",
        "player": 5.3,
        "avg": 2.5,
        "elite": 5.5
      },
      {
        "metric": "Expected Goals (xG)",
        "player": 8.9,
        "avg": 4.5,
        "elite": 14.0
      }
    ],
    "heatmap": [
      {
        "x": 50,
        "y": 84,
        "r": 38,
        "v": 0.9
      },
      {
        "x": 48,
        "y": 76,
        "r": 32,
        "v": 0.75
      },
      {
        "x": 52,
        "y": 80,
        "r": 32,
        "v": 0.8
      },
      {
        "x": 50,
        "y": 92,
        "r": 28,
        "v": 0.85
      }
    ],
    "strengths": [
      "Clinical Finishing",
      "Tactical awareness",
      "Pace"
    ],
    "weaknesses": [
      "Defending",
      "Defensive Tracking Back"
    ]
  },
  {
    "id": "jack-grealish",
    "name": "Jack Grealish",
    "age": 34,
    "position": "MF",
    "role": "Attacking Playmaker",
    "club": "Everton",
    "league": "Premier League",
    "nation": "Spain",
    "value": 37800000,
    "rating": 81,
    "general": {
      "apps": 18,
      "mins": 1627,
      "goals": 2,
      "assists": 6,
      "yellowCards": 3,
      "redCards": 1
    },
    "attributes": {
      "pace": 79,
      "dribbling": 91,
      "passing": 94,
      "defending": 74,
      "physicality": 79,
      "tactical": 95,
      "workrate": 83
    },
    "detailedStats": {
      "goalsPer90": 0.11,
      "shotsOnTargetPer90": 0.7,
      "expectedGoals": 2.0,
      "shotConversionRate": 12.4,
      "touchesInBoxPer90": 1.8,
      "chancesCreated": 65,
      "dribblesCompletedPer90": 2.1,
      "keyPassesPer90": 1.44,
      "passingAccuracy": 90.7,
      "progressivePassesPer90": 7.2,
      "tacklesWonPer90": 2.0,
      "interceptionsPer90": 0.8,
      "ballRecoveriesPer90": 6.0
    },
    "leagueBenchmarks": [
      {
        "metric": "Key Passes per 90",
        "player": 1.44,
        "avg": 0.9,
        "elite": 2.2
      },
      {
        "metric": "Progressive Passes p90",
        "player": 7.2,
        "avg": 2.8,
        "elite": 6.2
      },
      {
        "metric": "Chances Created",
        "player": 65,
        "avg": 16,
        "elite": 55
      },
      {
        "metric": "Passing Accuracy %",
        "player": 90.7,
        "avg": 79.5,
        "elite": 87.0
      }
    ],
    "heatmap": [
      {
        "x": 50,
        "y": 64,
        "r": 42,
        "v": 0.9
      },
      {
        "x": 40,
        "y": 55,
        "r": 35,
        "v": 0.75
      },
      {
        "x": 60,
        "y": 55,
        "r": 35,
        "v": 0.75
      },
      {
        "x": 50,
        "y": 76,
        "r": 30,
        "v": 0.8
      }
    ],
    "strengths": [
      "Passing",
      "Tactical awareness"
    ],
    "weaknesses": [
      "Defending",
      "Physicality"
    ]
  },
  {
    "id": "tyler-dibling",
    "name": "Tyler Dibling",
    "age": 22,
    "position": "MF",
    "role": "Box-to-Box Midfielder",
    "club": "Everton",
    "league": "Premier League",
    "nation": "Brazil",
    "value": 31800000,
    "rating": 72,
    "general": {
      "apps": 4,
      "mins": 349,
      "goals": 0,
      "assists": 0,
      "yellowCards": 2,
      "redCards": 0
    },
    "attributes": {
      "pace": 61,
      "dribbling": 58,
      "passing": 64,
      "defending": 53,
      "physicality": 58,
      "tactical": 68,
      "workrate": 64
    },
    "detailedStats": {
      "goalsPer90": 0.0,
      "shotsOnTargetPer90": 0.5,
      "expectedGoals": 0.2,
      "shotConversionRate": 10.0,
      "touchesInBoxPer90": 0.6,
      "chancesCreated": 7,
      "dribblesCompletedPer90": 0.6,
      "keyPassesPer90": 0.79,
      "passingAccuracy": 83.0,
      "progressivePassesPer90": 2.6,
      "tacklesWonPer90": 1.0,
      "interceptionsPer90": 0.5,
      "ballRecoveriesPer90": 3.8
    },
    "leagueBenchmarks": [
      {
        "metric": "Key Passes per 90",
        "player": 0.79,
        "avg": 0.9,
        "elite": 2.2
      },
      {
        "metric": "Progressive Passes p90",
        "player": 2.6,
        "avg": 2.8,
        "elite": 6.2
      },
      {
        "metric": "Chances Created",
        "player": 7,
        "avg": 16,
        "elite": 55
      },
      {
        "metric": "Passing Accuracy %",
        "player": 83.0,
        "avg": 79.5,
        "elite": 87.0
      }
    ],
    "heatmap": [
      {
        "x": 50,
        "y": 42,
        "r: ": 45,
        "v": 0.9
      },
      {
        "x": 44,
        "y": 35,
        "r": 38,
        "v": 0.8
      },
      {
        "x": 56,
        "y": 35,
        "r": 38,
        "v": 0.8
      },
      {
        "x": 50,
        "y": 55,
        "r": 35,
        "v": 0.75
      }
    ],
    "strengths": [
      "Passing",
      "Tactical awareness"
    ],
    "weaknesses": [
      "Defending",
      "Physicality"
    ]
  },
  {
    "id": "merlin-r\u00f6hl",
    "name": "Merlin R\u00f6hl",
    "age": 28,
    "position": "MF",
    "role": "Box-to-Box Midfielder",
    "club": "Everton",
    "league": "Premier League",
    "nation": "Brazil",
    "value": 30000000,
    "rating": 75,
    "general": {
      "apps": 6,
      "mins": 675,
      "goals": 1,
      "assists": 1,
      "yellowCards": 0,
      "redCards": 0
    },
    "attributes": {
      "pace": 63,
      "dribbling": 60,
      "passing": 65,
      "defending": 57,
      "physicality": 62,
      "tactical": 71,
      "workrate": 69
    },
    "detailedStats": {
      "goalsPer90": 0.13,
      "shotsOnTargetPer90": 0.7,
      "expectedGoals": 0.7,
      "shotConversionRate": 11.2,
      "touchesInBoxPer90": 0.7,
      "chancesCreated": 10,
      "dribblesCompletedPer90": 0.7,
      "keyPassesPer90": 0.58,
      "passingAccuracy": 83.5,
      "progressivePassesPer90": 2.9,
      "tacklesWonPer90": 1.2,
      "interceptionsPer90": 0.6,
      "ballRecoveriesPer90": 4.3
    },
    "leagueBenchmarks": [
      {
        "metric": "Key Passes per 90",
        "player": 0.58,
        "avg": 0.9,
        "elite": 2.2
      },
      {
        "metric": "Progressive Passes p90",
        "player": 2.9,
        "avg": 2.8,
        "elite": 6.2
      },
      {
        "metric": "Chances Created",
        "player": 10,
        "avg": 16,
        "elite": 55
      },
      {
        "metric": "Passing Accuracy %",
        "player": 83.5,
        "avg": 79.5,
        "elite": 87.0
      }
    ],
    "heatmap": [
      {
        "x": 50,
        "y": 42,
        "r: ": 45,
        "v": 0.9
      },
      {
        "x": 44,
        "y": 35,
        "r": 38,
        "v": 0.8
      },
      {
        "x": 56,
        "y": 35,
        "r": 38,
        "v": 0.8
      },
      {
        "x": 50,
        "y": 55,
        "r": 35,
        "v": 0.75
      }
    ],
    "strengths": [
      "Workrate",
      "Tactical awareness"
    ],
    "weaknesses": [
      "Dribbling",
      "Defending"
    ]
  },
  {
    "id": "bernd-leno",
    "name": "Bernd Leno",
    "age": 34,
    "position": "GK",
    "role": "Sweeper Keeper",
    "club": "Fulham",
    "league": "Premier League",
    "nation": "Spain",
    "value": 30000000,
    "rating": 87,
    "general": {
      "apps": 38,
      "mins": 3420,
      "goals": 0,
      "assists": 0,
      "yellowCards": 3,
      "redCards": 0
    },
    "attributes": {
      "pace": 60,
      "dribbling": 55,
      "passing": 90,
      "defending": 93,
      "physicality": 94,
      "tactical": 85,
      "workrate": 96
    },
    "detailedStats": {
      "savePercentage": 81.0,
      "cleanSheets": 9,
      "goalsConceded": 51,
      "psxgDifference": 3.6,
      "passingAccuracy": 90.0,
      "sweeperActionsPer90": 1.2,
      "averageDistanceOfSweeperActions": 13.6
    },
    "leagueBenchmarks": [
      {
        "metric": "Save %",
        "player": 81.0,
        "avg": 69.5,
        "elite": 77.0
      },
      {
        "metric": "Clean Sheets",
        "player": 9,
        "avg": 4.5,
        "elite": 10.0
      },
      {
        "metric": "Sweeper Actions p90",
        "player": 1.2,
        "avg": 0.6,
        "elite": 1.2
      },
      {
        "metric": "Passing Accuracy %",
        "player": 90.0,
        "avg": 73.0,
        "elite": 82.0
      }
    ],
    "heatmap": [
      {
        "x": 50,
        "y": 6,
        "r": 35,
        "v": 0.98
      },
      {
        "x": 50,
        "y": 14,
        "r": 28,
        "v": 0.7
      },
      {
        "x": 45,
        "y": 8,
        "r": 22,
        "v": 0.55
      },
      {
        "x": 55,
        "y": 8,
        "r": 22,
        "v": 0.55
      }
    ],
    "strengths": [
      "Reflexes",
      "Workrate",
      "Physicality"
    ],
    "weaknesses": [
      "Dribbling",
      "Pace"
    ]
  },
  {
    "id": "antonee-robinson",
    "name": "Antonee Robinson",
    "age": 21,
    "position": "DF",
    "role": "Attacking Fullback",
    "club": "Fulham",
    "league": "Premier League",
    "nation": "Spain",
    "value": 29400000,
    "rating": 79,
    "general": {
      "apps": 17,
      "mins": 1487,
      "goals": 1,
      "assists": 0,
      "yellowCards": 5,
      "redCards": 0
    },
    "attributes": {
      "pace": 68,
      "dribbling": 71,
      "passing": 82,
      "defending": 94,
      "physicality": 80,
      "tactical": 84,
      "workrate": 81
    },
    "detailedStats": {
      "goalsPer90": 0.06,
      "shotsOnTargetPer90": 0.6,
      "expectedGoals": 1.1,
      "shotConversionRate": 11.2,
      "touchesInBoxPer90": 0.8,
      "chancesCreated": 41,
      "dribblesCompletedPer90": 1.5,
      "keyPassesPer90": 1.01,
      "tacklesWonPer90": 2.2,
      "interceptionsPer90": 1.1,
      "clearancesPer90": 3.4,
      "aerialDuelWinPercentage": 73.8,
      "tackledDribblerRate": 57.9,
      "progressivePassesPer90": 3.2,
      "longPassesCompletedPer90": 2.1,
      "passingAccuracy": 86.7
    },
    "leagueBenchmarks": [
      {
        "metric": "Passing Accuracy %",
        "player": 86.7,
        "avg": 82.0,
        "elite": 89.0
      },
      {
        "metric": "Clearances per 90",
        "player": 3.4,
        "avg": 2.6,
        "elite": 4.0
      },
      {
        "metric": "Aerial Duel Win %",
        "player": 73.8,
        "avg": 54.5,
        "elite": 68.0
      },
      {
        "metric": "Tackles Won per 90",
        "player": 2.2,
        "avg": 1.1,
        "elite": 2.0
      }
    ],
    "heatmap": [
      {
        "x": 14,
        "y": 25,
        "r": 38,
        "v": 0.8
      },
      {
        "x": 14,
        "y": 45,
        "r": 40,
        "v": 0.85
      },
      {
        "x": 14,
        "y": 65,
        "r": 35,
        "v": 0.7
      },
      {
        "x": 14,
        "y": 12,
        "r": 30,
        "v": 0.6
      }
    ],
    "strengths": [
      "Defending",
      "Tactical awareness",
      "Aerial Dominance"
    ],
    "weaknesses": [
      "Dribbling",
      "Pace"
    ]
  },
  {
    "id": "joachim-andersen",
    "name": "Joachim Andersen",
    "age": 22,
    "position": "DF",
    "role": "Attacking Fullback",
    "club": "Fulham",
    "league": "Premier League",
    "nation": "Spain",
    "value": 26400000,
    "rating": 87,
    "general": {
      "apps": 33,
      "mins": 2882,
      "goals": 0,
      "assists": 1,
      "yellowCards": 7,
      "redCards": 1
    },
    "attributes": {
      "pace": 70,
      "dribbling": 66,
      "passing": 68,
      "defending": 94,
      "physicality": 94,
      "tactical": 91,
      "workrate": 96
    },
    "detailedStats": {
      "goalsPer90": 0.0,
      "shotsOnTargetPer90": 0.5,
      "expectedGoals": 1.4,
      "shotConversionRate": 10.0,
      "touchesInBoxPer90": 1.0,
      "chancesCreated": 16,
      "dribblesCompletedPer90": 0.8,
      "keyPassesPer90": 0.2,
      "tacklesWonPer90": 3.6,
      "interceptionsPer90": 1.2,
      "clearancesPer90": 5.5,
      "aerialDuelWinPercentage": 80.0,
      "tackledDribblerRate": 60.7,
      "progressivePassesPer90": 2.2,
      "longPassesCompletedPer90": 1.4,
      "passingAccuracy": 82.6
    },
    "leagueBenchmarks": [
      {
        "metric": "Passing Accuracy %",
        "player": 82.6,
        "avg": 82.0,
        "elite": 89.0
      },
      {
        "metric": "Clearances per 90",
        "player": 5.5,
        "avg": 2.6,
        "elite": 4.0
      },
      {
        "metric": "Aerial Duel Win %",
        "player": 80.0,
        "avg": 54.5,
        "elite": 68.0
      },
      {
        "metric": "Tackles Won per 90",
        "player": 3.6,
        "avg": 1.1,
        "elite": 2.0
      }
    ],
    "heatmap": [
      {
        "x": 86,
        "y": 25,
        "r": 38,
        "v": 0.8
      },
      {
        "x": 86,
        "y": 45,
        "r": 40,
        "v": 0.85
      },
      {
        "x": 86,
        "y": 65,
        "r": 35,
        "v": 0.7
      },
      {
        "x": 86,
        "y": 12,
        "r": 30,
        "v": 0.6
      }
    ],
    "strengths": [
      "Defending",
      "Workrate",
      "Aerial Dominance"
    ],
    "weaknesses": [
      "Dribbling",
      "Passing"
    ]
  },
  {
    "id": "calvin-bassey",
    "name": "Calvin Bassey",
    "age": 23,
    "position": "DF",
    "role": "Attacking Fullback",
    "club": "Fulham",
    "league": "Premier League",
    "nation": "England",
    "value": 26400000,
    "rating": 84,
    "general": {
      "apps": 28,
      "mins": 2532,
      "goals": 1,
      "assists": 1,
      "yellowCards": 5,
      "redCards": 0
    },
    "attributes": {
      "pace": 69,
      "dribbling": 65,
      "passing": 70,
      "defending": 94,
      "physicality": 93,
      "tactical": 86,
      "workrate": 96
    },
    "detailedStats": {
      "goalsPer90": 0.04,
      "shotsOnTargetPer90": 0.6,
      "expectedGoals": 1.7,
      "shotConversionRate": 11.2,
      "touchesInBoxPer90": 0.9,
      "chancesCreated": 19,
      "dribblesCompletedPer90": 0.9,
      "keyPassesPer90": 0.27,
      "tacklesWonPer90": 2.9,
      "interceptionsPer90": 1.1,
      "clearancesPer90": 4.4,
      "aerialDuelWinPercentage": 80.0,
      "tackledDribblerRate": 58.5,
      "progressivePassesPer90": 2.3,
      "longPassesCompletedPer90": 1.5,
      "passingAccuracy": 83.0
    },
    "leagueBenchmarks": [
      {
        "metric": "Passing Accuracy %",
        "player": 83.0,
        "avg": 82.0,
        "elite": 89.0
      },
      {
        "metric": "Clearances per 90",
        "player": 4.4,
        "avg": 2.6,
        "elite": 4.0
      },
      {
        "metric": "Aerial Duel Win %",
        "player": 80.0,
        "avg": 54.5,
        "elite": 68.0
      },
      {
        "metric": "Tackles Won per 90",
        "player": 2.9,
        "avg": 1.1,
        "elite": 2.0
      }
    ],
    "heatmap": [
      {
        "x": 14,
        "y": 25,
        "r": 38,
        "v": 0.8
      },
      {
        "x": 14,
        "y": 45,
        "r": 40,
        "v": 0.85
      },
      {
        "x": 14,
        "y": 65,
        "r": 35,
        "v": 0.7
      },
      {
        "x": 14,
        "y": 12,
        "r": 30,
        "v": 0.6
      }
    ],
    "strengths": [
      "Defending",
      "Workrate",
      "Aerial Dominance"
    ],
    "weaknesses": [
      "Dribbling",
      "Pace"
    ]
  },
  {
    "id": "timothy-castagne",
    "name": "Timothy Castagne",
    "age": 24,
    "position": "DF",
    "role": "Attacking Fullback",
    "club": "Fulham",
    "league": "Premier League",
    "nation": "Spain",
    "value": 25800000,
    "rating": 78,
    "general": {
      "apps": 20,
      "mins": 1838,
      "goals": 0,
      "assists": 2,
      "yellowCards": 4,
      "redCards": 0
    },
    "attributes": {
      "pace": 72,
      "dribbling": 74,
      "passing": 79,
      "defending": 94,
      "physicality": 79,
      "tactical": 86,
      "workrate": 86
    },
    "detailedStats": {
      "goalsPer90": 0.0,
      "shotsOnTargetPer90": 0.5,
      "expectedGoals": 1.5,
      "shotConversionRate": 10.0,
      "touchesInBoxPer90": 1.1,
      "chancesCreated": 36,
      "dribblesCompletedPer90": 1.4,
      "keyPassesPer90": 0.72,
      "tacklesWonPer90": 2.2,
      "interceptionsPer90": 1.1,
      "clearancesPer90": 3.4,
      "aerialDuelWinPercentage": 73.7,
      "tackledDribblerRate": 58.6,
      "progressivePassesPer90": 3.0,
      "longPassesCompletedPer90": 2.0,
      "passingAccuracy": 85.8
    },
    "leagueBenchmarks": [
      {
        "metric": "Passing Accuracy %",
        "player": 85.8,
        "avg": 82.0,
        "elite": 89.0
      },
      {
        "metric": "Clearances per 90",
        "player": 3.4,
        "avg": 2.6,
        "elite": 4.0
      },
      {
        "metric": "Aerial Duel Win %",
        "player": 73.7,
        "avg": 54.5,
        "elite": 68.0
      },
      {
        "metric": "Tackles Won per 90",
        "player": 2.2,
        "avg": 1.1,
        "elite": 2.0
      }
    ],
    "heatmap": [
      {
        "x": 86,
        "y": 25,
        "r": 38,
        "v": 0.8
      },
      {
        "x": 86,
        "y": 45,
        "r": 40,
        "v": 0.85
      },
      {
        "x": 86,
        "y": 65,
        "r": 35,
        "v": 0.7
      },
      {
        "x": 86,
        "y": 12,
        "r": 30,
        "v": 0.6
      }
    ],
    "strengths": [
      "Defending",
      "Tactical awareness",
      "Aerial Dominance"
    ],
    "weaknesses": [
      "Dribbling",
      "Pace"
    ]
  },
  {
    "id": "issa-diop",
    "name": "Issa Diop",
    "age": 25,
    "position": "DF",
    "role": "Central Defender",
    "club": "Fulham",
    "league": "Premier League",
    "nation": "France",
    "value": 25800000,
    "rating": 74,
    "general": {
      "apps": 8,
      "mins": 812,
      "goals": 1,
      "assists": 0,
      "yellowCards": 2,
      "redCards": 0
    },
    "attributes": {
      "pace": 66,
      "dribbling": 56,
      "passing": 60,
      "defending": 82,
      "physicality": 67,
      "tactical": 70,
      "workrate": 71
    },
    "detailedStats": {
      "goalsPer90": 0.11,
      "shotsOnTargetPer90": 0.7,
      "expectedGoals": 0.8,
      "shotConversionRate": 11.2,
      "touchesInBoxPer90": 0.6,
      "chancesCreated": 1,
      "dribblesCompletedPer90": 0.4,
      "keyPassesPer90": 0.04,
      "tacklesWonPer90": 1.6,
      "interceptionsPer90": 0.9,
      "clearancesPer90": 2.5,
      "aerialDuelWinPercentage": 64.5,
      "tackledDribblerRate": 52.3,
      "progressivePassesPer90": 1.5,
      "longPassesCompletedPer90": 1.0,
      "passingAccuracy": 80.2
    },
    "leagueBenchmarks": [
      {
        "metric": "Passing Accuracy %",
        "player": 80.2,
        "avg": 82.0,
        "elite": 89.0
      },
      {
        "metric": "Clearances per 90",
        "player": 2.5,
        "avg": 2.6,
        "elite": 4.0
      },
      {
        "metric": "Aerial Duel Win %",
        "player": 64.5,
        "avg": 54.5,
        "elite": 68.0
      },
      {
        "metric": "Tackles Won per 90",
        "player": 1.6,
        "avg": 1.1,
        "elite": 2.0
      }
    ],
    "heatmap": [
      {
        "x": 50,
        "y": 20,
        "r": 45,
        "v": 0.9
      },
      {
        "x": 42,
        "y": 18,
        "r": 32,
        "v": 0.8
      },
      {
        "x": 58,
        "y": 18,
        "r": 32,
        "v": 0.8
      },
      {
        "x": 50,
        "y": 10,
        "r": 28,
        "v": 0.6
      }
    ],
    "strengths": [
      "Defending",
      "Workrate"
    ],
    "weaknesses": [
      "Dribbling",
      "Passing"
    ]
  },
  {
    "id": "jorge-cuenca-barreno",
    "name": "Jorge Cuenca Barreno",
    "age": 26,
    "position": "DF",
    "role": "Central Defender",
    "club": "Fulham",
    "league": "Premier League",
    "nation": "England",
    "value": 25800000,
    "rating": 75,
    "general": {
      "apps": 11,
      "mins": 935,
      "goals": 0,
      "assists": 0,
      "yellowCards": 6,
      "redCards": 0
    },
    "attributes": {
      "pace": 65,
      "dribbling": 57,
      "passing": 63,
      "defending": 86,
      "physicality": 71,
      "tactical": 72,
      "workrate": 73
    },
    "detailedStats": {
      "goalsPer90": 0.0,
      "shotsOnTargetPer90": 0.5,
      "expectedGoals": 0.1,
      "shotConversionRate": 10.0,
      "touchesInBoxPer90": 0.5,
      "chancesCreated": 5,
      "dribblesCompletedPer90": 0.6,
      "keyPassesPer90": 0.23,
      "tacklesWonPer90": 1.8,
      "interceptionsPer90": 0.9,
      "clearancesPer90": 2.7,
      "aerialDuelWinPercentage": 67.5,
      "tackledDribblerRate": 53.1,
      "progressivePassesPer90": 1.7,
      "longPassesCompletedPer90": 1.2,
      "passingAccuracy": 80.9
    },
    "leagueBenchmarks": [
      {
        "metric": "Passing Accuracy %",
        "player": 80.9,
        "avg": 82.0,
        "elite": 89.0
      },
      {
        "metric": "Clearances per 90",
        "player": 2.7,
        "avg": 2.6,
        "elite": 4.0
      },
      {
        "metric": "Aerial Duel Win %",
        "player": 67.5,
        "avg": 54.5,
        "elite": 68.0
      },
      {
        "metric": "Tackles Won per 90",
        "player": 1.8,
        "avg": 1.1,
        "elite": 2.0
      }
    ],
    "heatmap": [
      {
        "x": 50,
        "y": 20,
        "r": 45,
        "v": 0.9
      },
      {
        "x": 42,
        "y": 18,
        "r": 32,
        "v": 0.8
      },
      {
        "x": 58,
        "y": 18,
        "r": 32,
        "v": 0.8
      },
      {
        "x": 50,
        "y": 10,
        "r": 28,
        "v": 0.6
      }
    ],
    "strengths": [
      "Defending",
      "Workrate"
    ],
    "weaknesses": [
      "Dribbling",
      "Passing"
    ]
  },
  {
    "id": "kenny-tete",
    "name": "Kenny Tete",
    "age": 27,
    "position": "DF",
    "role": "Attacking Fullback",
    "club": "Fulham",
    "league": "Premier League",
    "nation": "Brazil",
    "value": 27000000,
    "rating": 81,
    "general": {
      "apps": 21,
      "mins": 1791,
      "goals": 1,
      "assists": 0,
      "yellowCards": 2,
      "redCards": 0
    },
    "attributes": {
      "pace": 69,
      "dribbling": 67,
      "passing": 74,
      "defending": 94,
      "physicality": 82,
      "tactical": 83,
      "workrate": 85
    },
    "detailedStats": {
      "goalsPer90": 0.05,
      "shotsOnTargetPer90": 0.6,
      "expectedGoals": 0.9,
      "shotConversionRate": 11.2,
      "touchesInBoxPer90": 0.9,
      "chancesCreated": 26,
      "dribblesCompletedPer90": 1.1,
      "keyPassesPer90": 0.54,
      "tacklesWonPer90": 2.4,
      "interceptionsPer90": 1.0,
      "clearancesPer90": 3.6,
      "aerialDuelWinPercentage": 75.8,
      "tackledDribblerRate": 57.4,
      "progressivePassesPer90": 2.6,
      "longPassesCompletedPer90": 1.7,
      "passingAccuracy": 84.3
    },
    "leagueBenchmarks": [
      {
        "metric": "Passing Accuracy %",
        "player": 84.3,
        "avg": 82.0,
        "elite": 89.0
      },
      {
        "metric": "Clearances per 90",
        "player": 3.6,
        "avg": 2.6,
        "elite": 4.0
      },
      {
        "metric": "Aerial Duel Win %",
        "player": 75.8,
        "avg": 54.5,
        "elite": 68.0
      },
      {
        "metric": "Tackles Won per 90",
        "player": 2.4,
        "avg": 1.1,
        "elite": 2.0
      }
    ],
    "heatmap": [
      {
        "x": 14,
        "y": 25,
        "r": 38,
        "v": 0.8
      },
      {
        "x": 14,
        "y": 45,
        "r": 40,
        "v": 0.85
      },
      {
        "x": 14,
        "y": 65,
        "r": 35,
        "v": 0.7
      },
      {
        "x": 14,
        "y": 12,
        "r": 30,
        "v": 0.6
      }
    ],
    "strengths": [
      "Defending",
      "Workrate",
      "Aerial Dominance"
    ],
    "weaknesses": [
      "Dribbling",
      "Pace"
    ]
  },
  {
    "id": "alex-iwobi",
    "name": "Alex Iwobi",
    "age": 29,
    "position": "MF",
    "role": "Attacking Playmaker",
    "club": "Fulham",
    "league": "Premier League",
    "nation": "England",
    "value": 36600000,
    "rating": 84,
    "general": {
      "apps": 29,
      "mins": 2420,
      "goals": 4,
      "assists": 3,
      "yellowCards": 3,
      "redCards": 0
    },
    "attributes": {
      "pace": 77,
      "dribbling": 96,
      "passing": 97,
      "defending": 84,
      "physicality": 89,
      "tactical": 95,
      "workrate": 94
    },
    "detailedStats": {
      "goalsPer90": 0.15,
      "shotsOnTargetPer90": 0.7,
      "expectedGoals": 1.9,
      "shotConversionRate": 14.8,
      "touchesInBoxPer90": 1.6,
      "chancesCreated": 92,
      "dribblesCompletedPer90": 2.9,
      "keyPassesPer90": 1.37,
      "passingAccuracy": 94.0,
      "progressivePassesPer90": 9.4,
      "tacklesWonPer90": 2.5,
      "interceptionsPer90": 0.9,
      "ballRecoveriesPer90": 6.9
    },
    "leagueBenchmarks": [
      {
        "metric": "Key Passes per 90",
        "player": 1.37,
        "avg": 0.9,
        "elite": 2.2
      },
      {
        "metric": "Progressive Passes p90",
        "player": 9.4,
        "avg": 2.8,
        "elite": 6.2
      },
      {
        "metric": "Chances Created",
        "player": 92,
        "avg": 16,
        "elite": 55
      },
      {
        "metric": "Passing Accuracy %",
        "player": 94.0,
        "avg": 79.5,
        "elite": 87.0
      }
    ],
    "heatmap": [
      {
        "x": 50,
        "y": 64,
        "r": 42,
        "v": 0.9
      },
      {
        "x": 40,
        "y": 55,
        "r": 35,
        "v": 0.75
      },
      {
        "x": 60,
        "y": 55,
        "r": 35,
        "v": 0.75
      },
      {
        "x": 50,
        "y": 76,
        "r": 30,
        "v": 0.8
      }
    ],
    "strengths": [
      "Dribbling",
      "Passing"
    ],
    "weaknesses": [
      "Defending",
      "Pace"
    ]
  },
  {
    "id": "emile-smith-rowe",
    "name": "Emile Smith Rowe",
    "age": 30,
    "position": "MF",
    "role": "Box-to-Box Midfielder",
    "club": "Fulham",
    "league": "Premier League",
    "nation": "France",
    "value": 33600000,
    "rating": 81,
    "general": {
      "apps": 22,
      "mins": 1909,
      "goals": 3,
      "assists": 1,
      "yellowCards": 1,
      "redCards": 0
    },
    "attributes": {
      "pace": 80,
      "dribbling": 84,
      "passing": 82,
      "defending": 69,
      "physicality": 74,
      "tactical": 90,
      "workrate": 87
    },
    "detailedStats": {
      "goalsPer90": 0.14,
      "shotsOnTargetPer90": 0.7,
      "expectedGoals": 4.7,
      "shotConversionRate": 13.6,
      "touchesInBoxPer90": 1.8,
      "chancesCreated": 41,
      "dribblesCompletedPer90": 1.5,
      "keyPassesPer90": 0.78,
      "passingAccuracy": 87.5,
      "progressivePassesPer90": 5.3,
      "tacklesWonPer90": 1.8,
      "interceptionsPer90": 0.8,
      "ballRecoveriesPer90": 5.4
    },
    "leagueBenchmarks": [
      {
        "metric": "Key Passes per 90",
        "player": 0.78,
        "avg": 0.9,
        "elite": 2.2
      },
      {
        "metric": "Progressive Passes p90",
        "player": 5.3,
        "avg": 2.8,
        "elite": 6.2
      },
      {
        "metric": "Chances Created",
        "player": 41,
        "avg": 16,
        "elite": 55
      },
      {
        "metric": "Passing Accuracy %",
        "player": 87.5,
        "avg": 79.5,
        "elite": 87.0
      }
    ],
    "heatmap": [
      {
        "x": 50,
        "y": 42,
        "r: ": 45,
        "v": 0.9
      },
      {
        "x": 44,
        "y": 35,
        "r": 38,
        "v": 0.8
      },
      {
        "x": 56,
        "y": 35,
        "r": 38,
        "v": 0.8
      },
      {
        "x": 50,
        "y": 55,
        "r": 35,
        "v": 0.75
      }
    ],
    "strengths": [
      "Workrate",
      "Tactical awareness"
    ],
    "weaknesses": [
      "Defending",
      "Physicality"
    ]
  },
  {
    "id": "ryan-sessegnon",
    "name": "Ryan Sessegnon",
    "age": 33,
    "position": "MF",
    "role": "Box-to-Box Midfielder",
    "club": "Fulham",
    "league": "Premier League",
    "nation": "Spain",
    "value": 32400000,
    "rating": 83,
    "general": {
      "apps": 20,
      "mins": 1816,
      "goals": 3,
      "assists": 3,
      "yellowCards": 0,
      "redCards": 0
    },
    "attributes": {
      "pace": 71,
      "dribbling": 73,
      "passing": 75,
      "defending": 77,
      "physicality": 82,
      "tactical": 86,
      "workrate": 85
    },
    "detailedStats": {
      "goalsPer90": 0.15,
      "shotsOnTargetPer90": 0.7,
      "expectedGoals": 1.6,
      "shotConversionRate": 13.6,
      "touchesInBoxPer90": 1.3,
      "chancesCreated": 28,
      "dribblesCompletedPer90": 1.1,
      "keyPassesPer90": 0.56,
      "passingAccuracy": 85.8,
      "progressivePassesPer90": 4.2,
      "tacklesWonPer90": 2.2,
      "interceptionsPer90": 0.7,
      "ballRecoveriesPer90": 6.3
    },
    "leagueBenchmarks": [
      {
        "metric": "Key Passes per 90",
        "player": 0.56,
        "avg": 0.9,
        "elite": 2.2
      },
      {
        "metric": "Progressive Passes p90",
        "player": 4.2,
        "avg": 2.8,
        "elite": 6.2
      },
      {
        "metric": "Chances Created",
        "player": 28,
        "avg": 16,
        "elite": 55
      },
      {
        "metric": "Passing Accuracy %",
        "player": 85.8,
        "avg": 79.5,
        "elite": 87.0
      }
    ],
    "heatmap": [
      {
        "x": 50,
        "y": 42,
        "r: ": 45,
        "v": 0.9
      },
      {
        "x": 44,
        "y": 35,
        "r": 38,
        "v": 0.8
      },
      {
        "x": 56,
        "y": 35,
        "r": 38,
        "v": 0.8
      },
      {
        "x": 50,
        "y": 55,
        "r": 35,
        "v": 0.75
      }
    ],
    "strengths": [
      "Workrate",
      "Tactical awareness"
    ],
    "weaknesses": [
      "Dribbling",
      "Pace"
    ]
  },
  {
    "id": "harry-wilson",
    "name": "Harry Wilson",
    "age": 34,
    "position": "MF",
    "role": "Attacking Playmaker",
    "club": "Fulham",
    "league": "Premier League",
    "nation": "Brazil",
    "value": 34800000,
    "rating": 93,
    "general": {
      "apps": 32,
      "mins": 2674,
      "goals": 10,
      "assists": 9,
      "yellowCards": 7,
      "redCards": 0
    },
    "attributes": {
      "pace": 90,
      "dribbling": 96,
      "passing": 97,
      "defending": 88,
      "physicality": 94,
      "tactical": 95,
      "workrate": 96
    },
    "detailedStats": {
      "goalsPer90": 0.34,
      "shotsOnTargetPer90": 1.0,
      "expectedGoals": 5.9,
      "shotConversionRate": 22.0,
      "touchesInBoxPer90": 2.5,
      "chancesCreated": 82,
      "dribblesCompletedPer90": 2.6,
      "keyPassesPer90": 1.11,
      "passingAccuracy": 93.0,
      "progressivePassesPer90": 8.6,
      "tacklesWonPer90": 3.2,
      "interceptionsPer90": 1.0,
      "ballRecoveriesPer90": 8.2
    },
    "leagueBenchmarks": [
      {
        "metric": "Key Passes per 90",
        "player": 1.11,
        "avg": 0.9,
        "elite": 2.2
      },
      {
        "metric": "Progressive Passes p90",
        "player": 8.6,
        "avg": 2.8,
        "elite": 6.2
      },
      {
        "metric": "Chances Created",
        "player": 82,
        "avg": 16,
        "elite": 55
      },
      {
        "metric": "Passing Accuracy %",
        "player": 93.0,
        "avg": 79.5,
        "elite": 87.0
      }
    ],
    "heatmap": [
      {
        "x": 50,
        "y": 64,
        "r": 42,
        "v": 0.9
      },
      {
        "x": 40,
        "y": 55,
        "r": 35,
        "v": 0.75
      },
      {
        "x": 60,
        "y": 55,
        "r": 35,
        "v": 0.75
      },
      {
        "x": 50,
        "y": 76,
        "r": 30,
        "v": 0.8
      }
    ],
    "strengths": [
      "Dribbling",
      "Passing",
      "Clinical Finishing"
    ],
    "weaknesses": [
      "Defending",
      "Pace"
    ]
  },
  {
    "id": "sander-berge",
    "name": "Sander Berge",
    "age": 20,
    "position": "MF",
    "role": "Attacking Playmaker",
    "club": "Fulham",
    "league": "Premier League",
    "nation": "England",
    "value": 29400000,
    "rating": 83,
    "general": {
      "apps": 34,
      "mins": 2904,
      "goals": 0,
      "assists": 3,
      "yellowCards": 5,
      "redCards": 0
    },
    "attributes": {
      "pace": 65,
      "dribbling": 73,
      "passing": 84,
      "defending": 79,
      "physicality": 84,
      "tactical": 87,
      "workrate": 96
    },
    "detailedStats": {
      "goalsPer90": 0.0,
      "shotsOnTargetPer90": 0.5,
      "expectedGoals": 1.5,
      "shotConversionRate": 10.0,
      "touchesInBoxPer90": 0.8,
      "chancesCreated": 45,
      "dribblesCompletedPer90": 1.6,
      "keyPassesPer90": 0.57,
      "passingAccuracy": 88.1,
      "progressivePassesPer90": 5.7,
      "tacklesWonPer90": 2.3,
      "interceptionsPer90": 0.7,
      "ballRecoveriesPer90": 6.4
    },
    "leagueBenchmarks": [
      {
        "metric": "Key Passes per 90",
        "player": 0.57,
        "avg": 0.9,
        "elite": 2.2
      },
      {
        "metric": "Progressive Passes p90",
        "player": 5.7,
        "avg": 2.8,
        "elite": 6.2
      },
      {
        "metric": "Chances Created",
        "player": 45,
        "avg": 16,
        "elite": 55
      },
      {
        "metric": "Passing Accuracy %",
        "player": 88.1,
        "avg": 79.5,
        "elite": 87.0
      }
    ],
    "heatmap": [
      {
        "x": 50,
        "y": 64,
        "r": 42,
        "v": 0.9
      },
      {
        "x": 40,
        "y": 55,
        "r": 35,
        "v": 0.75
      },
      {
        "x": 60,
        "y": 55,
        "r": 35,
        "v": 0.75
      },
      {
        "x": 50,
        "y": 76,
        "r": 30,
        "v": 0.8
      }
    ],
    "strengths": [
      "Workrate",
      "Tactical awareness"
    ],
    "weaknesses": [
      "Dribbling",
      "Pace"
    ]
  },
  {
    "id": "tom-cairney",
    "name": "Tom Cairney",
    "age": 21,
    "position": "MF",
    "role": "Box-to-Box Midfielder",
    "club": "Fulham",
    "league": "Premier League",
    "nation": "Spain",
    "value": 28800000,
    "rating": 75,
    "general": {
      "apps": 6,
      "mins": 756,
      "goals": 2,
      "assists": 0,
      "yellowCards": 3,
      "redCards": 0
    },
    "attributes": {
      "pace": 63,
      "dribbling": 65,
      "passing": 73,
      "defending": 60,
      "physicality": 65,
      "tactical": 75,
      "workrate": 70
    },
    "detailedStats": {
      "goalsPer90": 0.24,
      "shotsOnTargetPer90": 0.9,
      "expectedGoals": 1.2,
      "shotConversionRate": 12.4,
      "touchesInBoxPer90": 0.7,
      "chancesCreated": 24,
      "dribblesCompletedPer90": 1.1,
      "keyPassesPer90": 1.16,
      "passingAccuracy": 85.3,
      "progressivePassesPer90": 4.0,
      "tacklesWonPer90": 1.3,
      "interceptionsPer90": 0.6,
      "ballRecoveriesPer90": 4.5
    },
    "leagueBenchmarks": [
      {
        "metric": "Key Passes per 90",
        "player": 1.16,
        "avg": 0.9,
        "elite": 2.2
      },
      {
        "metric": "Progressive Passes p90",
        "player": 4.0,
        "avg": 2.8,
        "elite": 6.2
      },
      {
        "metric": "Chances Created",
        "player": 24,
        "avg": 16,
        "elite": 55
      },
      {
        "metric": "Passing Accuracy %",
        "player": 85.3,
        "avg": 79.5,
        "elite": 87.0
      }
    ],
    "heatmap": [
      {
        "x": 50,
        "y": 42,
        "r: ": 45,
        "v": 0.9
      },
      {
        "x": 44,
        "y": 35,
        "r": 38,
        "v": 0.8
      },
      {
        "x": 56,
        "y": 35,
        "r": 38,
        "v": 0.8
      },
      {
        "x": 50,
        "y": 55,
        "r": 35,
        "v": 0.75
      }
    ],
    "strengths": [
      "Passing",
      "Tactical awareness"
    ],
    "weaknesses": [
      "Defending",
      "Pace"
    ]
  },
  {
    "id": "sa\u0161a-luki\u0107",
    "name": "Sa\u0161a Luki\u0107",
    "age": 22,
    "position": "MF",
    "role": "Attacking Playmaker",
    "club": "Fulham",
    "league": "Premier League",
    "nation": "Spain",
    "value": 29400000,
    "rating": 79,
    "general": {
      "apps": 20,
      "mins": 1730,
      "goals": 1,
      "assists": 4,
      "yellowCards": 9,
      "redCards": 0
    },
    "attributes": {
      "pace": 68,
      "dribbling": 79,
      "passing": 89,
      "defending": 71,
      "physicality": 76,
      "tactical": 88,
      "workrate": 84
    },
    "detailedStats": {
      "goalsPer90": 0.05,
      "shotsOnTargetPer90": 0.6,
      "expectedGoals": 2.2,
      "shotConversionRate": 11.2,
      "touchesInBoxPer90": 1.1,
      "chancesCreated": 55,
      "dribblesCompletedPer90": 1.9,
      "keyPassesPer90": 1.15,
      "passingAccuracy": 89.4,
      "progressivePassesPer90": 6.4,
      "tacklesWonPer90": 1.9,
      "interceptionsPer90": 0.7,
      "ballRecoveriesPer90": 5.6
    },
    "leagueBenchmarks": [
      {
        "metric": "Key Passes per 90",
        "player": 1.15,
        "avg": 0.9,
        "elite": 2.2
      },
      {
        "metric": "Progressive Passes p90",
        "player": 6.4,
        "avg": 2.8,
        "elite": 6.2
      },
      {
        "metric": "Chances Created",
        "player": 55,
        "avg": 16,
        "elite": 55
      },
      {
        "metric": "Passing Accuracy %",
        "player": 89.4,
        "avg": 79.5,
        "elite": 87.0
      }
    ],
    "heatmap": [
      {
        "x": 50,
        "y": 64,
        "r": 42,
        "v": 0.9
      },
      {
        "x": 40,
        "y": 55,
        "r": 35,
        "v": 0.75
      },
      {
        "x": 60,
        "y": 55,
        "r": 35,
        "v": 0.75
      },
      {
        "x": 50,
        "y": 76,
        "r": 30,
        "v": 0.8
      }
    ],
    "strengths": [
      "Passing",
      "Tactical awareness"
    ],
    "weaknesses": [
      "Defending",
      "Pace"
    ]
  },
  {
    "id": "josh-king",
    "name": "Josh King",
    "age": 25,
    "position": "MF",
    "role": "Box-to-Box Midfielder",
    "club": "Fulham",
    "league": "Premier League",
    "nation": "France",
    "value": 26400000,
    "rating": 79,
    "general": {
      "apps": 15,
      "mins": 1290,
      "goals": 1,
      "assists": 3,
      "yellowCards": 4,
      "redCards": 0
    },
    "attributes": {
      "pace": 76,
      "dribbling": 76,
      "passing": 73,
      "defending": 63,
      "physicality": 68,
      "tactical": 83,
      "workrate": 78
    },
    "detailedStats": {
      "goalsPer90": 0.07,
      "shotsOnTargetPer90": 0.6,
      "expectedGoals": 2.5,
      "shotConversionRate": 11.2,
      "touchesInBoxPer90": 1.6,
      "chancesCreated": 24,
      "dribblesCompletedPer90": 1.1,
      "keyPassesPer90": 0.69,
      "passingAccuracy": 85.3,
      "progressivePassesPer90": 4.0,
      "tacklesWonPer90": 1.5,
      "interceptionsPer90": 0.7,
      "ballRecoveriesPer90": 4.9
    },
    "leagueBenchmarks": [
      {
        "metric": "Key Passes per 90",
        "player": 0.69,
        "avg": 0.9,
        "elite": 2.2
      },
      {
        "metric": "Progressive Passes p90",
        "player": 4.0,
        "avg": 2.8,
        "elite": 6.2
      },
      {
        "metric": "Chances Created",
        "player": 24,
        "avg": 16,
        "elite": 55
      },
      {
        "metric": "Passing Accuracy %",
        "player": 85.3,
        "avg": 79.5,
        "elite": 87.0
      }
    ],
    "heatmap": [
      {
        "x": 50,
        "y": 42,
        "r: ": 45,
        "v": 0.9
      },
      {
        "x": 44,
        "y": 35,
        "r": 38,
        "v": 0.8
      },
      {
        "x": 56,
        "y": 35,
        "r": 38,
        "v": 0.8
      },
      {
        "x": 50,
        "y": 55,
        "r": 35,
        "v": 0.75
      }
    ],
    "strengths": [
      "Workrate",
      "Tactical awareness"
    ],
    "weaknesses": [
      "Defending",
      "Physicality"
    ]
  },
  {
    "id": "ra\u00fal-jim\u00e9nez-rodr\u00edguez",
    "name": "Ra\u00fal Jim\u00e9nez Rodr\u00edguez",
    "age": 27,
    "position": "FW",
    "role": "Inverted Winger",
    "club": "Fulham",
    "league": "Premier League",
    "nation": "Spain",
    "value": 35400000,
    "rating": 86,
    "general": {
      "apps": 27,
      "mins": 2183,
      "goals": 9,
      "assists": 5,
      "yellowCards": 5,
      "redCards": 0
    },
    "attributes": {
      "pace": 98,
      "dribbling": 96,
      "passing": 82,
      "defending": 36,
      "physicality": 86,
      "tactical": 95,
      "workrate": 91
    },
    "detailedStats": {
      "goalsPer90": 0.37,
      "shotsOnTargetPer90": 1.1,
      "expectedGoals": 11.6,
      "shotConversionRate": 20.8,
      "touchesInBoxPer90": 5.6,
      "chancesCreated": 41,
      "dribblesCompletedPer90": 1.5,
      "keyPassesPer90": 0.68
    },
    "leagueBenchmarks": [
      {
        "metric": "Goals per 90",
        "player": 0.37,
        "avg": 0.22,
        "elite": 0.65
      },
      {
        "metric": "Shot Conversion %",
        "player": 20.8,
        "avg": 10.5,
        "elite": 18.0
      },
      {
        "metric": "Touches in Box p90",
        "player": 5.6,
        "avg": 2.5,
        "elite": 5.5
      },
      {
        "metric": "Expected Goals (xG)",
        "player": 11.6,
        "avg": 4.5,
        "elite": 14.0
      }
    ],
    "heatmap": [
      {
        "x": 78,
        "y": 72,
        "r": 45,
        "v": 0.9
      },
      {
        "x": 78,
        "y": 58,
        "r": 38,
        "v": 0.75
      },
      {
        "x": 72,
        "y": 82,
        "r": 35,
        "v": 0.8
      },
      {
        "x": 50,
        "y": 84,
        "r": 30,
        "v": 0.65
      }
    ],
    "strengths": [
      "Dribbling",
      "Clinical Finishing",
      "Pace"
    ],
    "weaknesses": [
      "Defending",
      "Defensive Tracking Back"
    ]
  },
  {
    "id": "rodrigo-muniz-carvalho",
    "name": "Rodrigo Muniz Carvalho",
    "age": 28,
    "position": "FW",
    "role": "Complete Winger / Striker",
    "club": "Fulham",
    "league": "Premier League",
    "nation": "Spain",
    "value": 31800000,
    "rating": 75,
    "general": {
      "apps": 10,
      "mins": 987,
      "goals": 1,
      "assists": 1,
      "yellowCards": 2,
      "redCards": 0
    },
    "attributes": {
      "pace": 85,
      "dribbling": 70,
      "passing": 66,
      "defending": 27,
      "physicality": 62,
      "tactical": 76,
      "workrate": 74
    },
    "detailedStats": {
      "goalsPer90": 0.09,
      "shotsOnTargetPer90": 0.6,
      "expectedGoals": 3.3,
      "shotConversionRate": 11.2,
      "touchesInBoxPer90": 3.4,
      "chancesCreated": 11,
      "dribblesCompletedPer90": 0.7,
      "keyPassesPer90": 0.42
    },
    "leagueBenchmarks": [
      {
        "metric": "Goals per 90",
        "player": 0.09,
        "avg": 0.22,
        "elite": 0.65
      },
      {
        "metric": "Shot Conversion %",
        "player": 11.2,
        "avg": 10.5,
        "elite": 18.0
      },
      {
        "metric": "Touches in Box p90",
        "player": 3.4,
        "avg": 2.5,
        "elite": 5.5
      },
      {
        "metric": "Expected Goals (xG)",
        "player": 3.3,
        "avg": 4.5,
        "elite": 14.0
      }
    ],
    "heatmap": [
      {
        "x": 50,
        "y": 84,
        "r": 38,
        "v": 0.9
      },
      {
        "x": 48,
        "y": 76,
        "r": 32,
        "v": 0.75
      },
      {
        "x": 52,
        "y": 80,
        "r": 32,
        "v": 0.8
      },
      {
        "x": 50,
        "y": 92,
        "r": 28,
        "v": 0.85
      }
    ],
    "strengths": [
      "Tactical awareness",
      "Pace"
    ],
    "weaknesses": [
      "Defending",
      "Defensive Tracking Back"
    ]
  },
  {
    "id": "oscar-bobb",
    "name": "Oscar Bobb",
    "age": 24,
    "position": "MF",
    "role": "Box-to-Box Midfielder",
    "club": "Fulham",
    "league": "Premier League",
    "nation": "Spain",
    "value": 30600000,
    "rating": 76,
    "general": {
      "apps": 11,
      "mins": 1030,
      "goals": 0,
      "assists": 2,
      "yellowCards": 1,
      "redCards": 0
    },
    "attributes": {
      "pace": 70,
      "dribbling": 75,
      "passing": 81,
      "defending": 59,
      "physicality": 64,
      "tactical": 81,
      "workrate": 74
    },
    "detailedStats": {
      "goalsPer90": 0.0,
      "shotsOnTargetPer90": 0.5,
      "expectedGoals": 1.5,
      "shotConversionRate": 10.0,
      "touchesInBoxPer90": 1.2,
      "chancesCreated": 39,
      "dribblesCompletedPer90": 1.5,
      "keyPassesPer90": 1.38,
      "passingAccuracy": 87.3,
      "progressivePassesPer90": 5.2,
      "tacklesWonPer90": 1.3,
      "interceptionsPer90": 0.7,
      "ballRecoveriesPer90": 4.4
    },
    "leagueBenchmarks": [
      {
        "metric": "Key Passes per 90",
        "player": 1.38,
        "avg": 0.9,
        "elite": 2.2
      },
      {
        "metric": "Progressive Passes p90",
        "player": 5.2,
        "avg": 2.8,
        "elite": 6.2
      },
      {
        "metric": "Chances Created",
        "player": 39,
        "avg": 16,
        "elite": 55
      },
      {
        "metric": "Passing Accuracy %",
        "player": 87.3,
        "avg": 79.5,
        "elite": 87.0
      }
    ],
    "heatmap": [
      {
        "x": 50,
        "y": 42,
        "r: ": 45,
        "v": 0.9
      },
      {
        "x": 44,
        "y": 35,
        "r": 38,
        "v": 0.8
      },
      {
        "x": 56,
        "y": 35,
        "r": 38,
        "v": 0.8
      },
      {
        "x": 50,
        "y": 55,
        "r": 35,
        "v": 0.75
      }
    ],
    "strengths": [
      "Passing",
      "Tactical awareness"
    ],
    "weaknesses": [
      "Defending",
      "Physicality"
    ]
  },
  {
    "id": "samuel-chukwueze",
    "name": "Samuel Chukwueze",
    "age": 27,
    "position": "MF",
    "role": "Box-to-Box Midfielder",
    "club": "Fulham",
    "league": "Premier League",
    "nation": "Spain",
    "value": 31800000,
    "rating": 78,
    "general": {
      "apps": 10,
      "mins": 1067,
      "goals": 3,
      "assists": 4,
      "yellowCards": 0,
      "redCards": 0
    },
    "attributes": {
      "pace": 72,
      "dribbling": 78,
      "passing": 83,
      "defending": 68,
      "physicality": 73,
      "tactical": 86,
      "workrate": 75
    },
    "detailedStats": {
      "goalsPer90": 0.25,
      "shotsOnTargetPer90": 0.9,
      "expectedGoals": 2.1,
      "shotConversionRate": 13.6,
      "touchesInBoxPer90": 1.3,
      "chancesCreated": 43,
      "dribblesCompletedPer90": 1.6,
      "keyPassesPer90": 1.46,
      "passingAccuracy": 87.8,
      "progressivePassesPer90": 5.5,
      "tacklesWonPer90": 1.7,
      "interceptionsPer90": 0.7,
      "ballRecoveriesPer90": 5.3
    },
    "leagueBenchmarks": [
      {
        "metric": "Key Passes per 90",
        "player": 1.46,
        "avg": 0.9,
        "elite": 2.2
      },
      {
        "metric": "Progressive Passes p90",
        "player": 5.5,
        "avg": 2.8,
        "elite": 6.2
      },
      {
        "metric": "Chances Created",
        "player": 43,
        "avg": 16,
        "elite": 55
      },
      {
        "metric": "Passing Accuracy %",
        "player": 87.8,
        "avg": 79.5,
        "elite": 87.0
      }
    ],
    "heatmap": [
      {
        "x": 50,
        "y": 42,
        "r: ": 45,
        "v": 0.9
      },
      {
        "x": 44,
        "y": 35,
        "r": 38,
        "v": 0.8
      },
      {
        "x": 56,
        "y": 35,
        "r": 38,
        "v": 0.8
      },
      {
        "x": 50,
        "y": 55,
        "r": 35,
        "v": 0.75
      }
    ],
    "strengths": [
      "Passing",
      "Tactical awareness"
    ],
    "weaknesses": [
      "Defending",
      "Pace"
    ]
  },
  {
    "id": "kevin-santos-lopes-de-macedo",
    "name": "Kevin Santos Lopes de Macedo",
    "age": 31,
    "position": "MF",
    "role": "Box-to-Box Midfielder",
    "club": "Fulham",
    "league": "Premier League",
    "nation": "Spain",
    "value": 34200000,
    "rating": 77,
    "general": {
      "apps": 9,
      "mins": 1030,
      "goals": 1,
      "assists": 3,
      "yellowCards": 1,
      "redCards": 0
    },
    "attributes": {
      "pace": 72,
      "dribbling": 74,
      "passing": 76,
      "defending": 64,
      "physicality": 69,
      "tactical": 82,
      "workrate": 74
    },
    "detailedStats": {
      "goalsPer90": 0.09,
      "shotsOnTargetPer90": 0.6,
      "expectedGoals": 1.2,
      "shotConversionRate": 11.2,
      "touchesInBoxPer90": 1.3,
      "chancesCreated": 30,
      "dribblesCompletedPer90": 1.2,
      "keyPassesPer90": 1.08,
      "passingAccuracy": 86.1,
      "progressivePassesPer90": 4.5,
      "tacklesWonPer90": 1.5,
      "interceptionsPer90": 0.7,
      "ballRecoveriesPer90": 4.9
    },
    "leagueBenchmarks": [
      {
        "metric": "Key Passes per 90",
        "player": 1.08,
        "avg": 0.9,
        "elite": 2.2
      },
      {
        "metric": "Progressive Passes p90",
        "player": 4.5,
        "avg": 2.8,
        "elite": 6.2
      },
      {
        "metric": "Chances Created",
        "player": 30,
        "avg": 16,
        "elite": 55
      },
      {
        "metric": "Passing Accuracy %",
        "player": 86.1,
        "avg": 79.5,
        "elite": 87.0
      }
    ],
    "heatmap": [
      {
        "x": 50,
        "y": 42,
        "r: ": 45,
        "v": 0.9
      },
      {
        "x": 44,
        "y": 35,
        "r": 38,
        "v": 0.8
      },
      {
        "x": 56,
        "y": 35,
        "r": 38,
        "v": 0.8
      },
      {
        "x": 50,
        "y": 55,
        "r": 35,
        "v": 0.75
      }
    ],
    "strengths": [
      "Passing",
      "Tactical awareness"
    ],
    "weaknesses": [
      "Defending",
      "Physicality"
    ]
  },
  {
    "id": "karl-darlow",
    "name": "Karl Darlow",
    "age": 31,
    "position": "GK",
    "role": "Sweeper Keeper",
    "club": "Leeds",
    "league": "Premier League",
    "nation": "Spain",
    "value": 24000000,
    "rating": 80,
    "general": {
      "apps": 22,
      "mins": 1980,
      "goals": 0,
      "assists": 0,
      "yellowCards": 1,
      "redCards": 0
    },
    "attributes": {
      "pace": 60,
      "dribbling": 55,
      "passing": 81,
      "defending": 93,
      "physicality": 90,
      "tactical": 78,
      "workrate": 88
    },
    "detailedStats": {
      "savePercentage": 77.6,
      "cleanSheets": 5,
      "goalsConceded": 27,
      "psxgDifference": 2.0,
      "passingAccuracy": 90.0,
      "sweeperActionsPer90": 0.9,
      "averageDistanceOfSweeperActions": 13.1
    },
    "leagueBenchmarks": [
      {
        "metric": "Save %",
        "player": 77.6,
        "avg": 69.5,
        "elite": 77.0
      },
      {
        "metric": "Clean Sheets",
        "player": 5,
        "avg": 4.5,
        "elite": 10.0
      },
      {
        "metric": "Sweeper Actions p90",
        "player": 0.9,
        "avg": 0.6,
        "elite": 1.2
      },
      {
        "metric": "Passing Accuracy %",
        "player": 90.0,
        "avg": 73.0,
        "elite": 82.0
      }
    ],
    "heatmap": [
      {
        "x": 50,
        "y": 6,
        "r": 35,
        "v": 0.98
      },
      {
        "x": 50,
        "y": 14,
        "r": 28,
        "v": 0.7
      },
      {
        "x": 45,
        "y": 8,
        "r": 22,
        "v": 0.55
      },
      {
        "x": 55,
        "y": 8,
        "r": 22,
        "v": 0.55
      }
    ],
    "strengths": [
      "Defending",
      "Reflexes",
      "Physicality"
    ],
    "weaknesses": [
      "Dribbling",
      "Pace"
    ]
  },
  {
    "id": "jayden-bogle",
    "name": "Jayden Bogle",
    "age": 32,
    "position": "DF",
    "role": "Attacking Fullback",
    "club": "Leeds",
    "league": "Premier League",
    "nation": "England",
    "value": 26400000,
    "rating": 83,
    "general": {
      "apps": 32,
      "mins": 2795,
      "goals": 1,
      "assists": 5,
      "yellowCards": 6,
      "redCards": 0
    },
    "attributes": {
      "pace": 73,
      "dribbling": 77,
      "passing": 83,
      "defending": 94,
      "physicality": 84,
      "tactical": 90,
      "workrate": 96
    },
    "detailedStats": {
      "goalsPer90": 0.03,
      "shotsOnTargetPer90": 0.5,
      "expectedGoals": 2.1,
      "shotConversionRate": 11.2,
      "touchesInBoxPer90": 1.2,
      "chancesCreated": 43,
      "dribblesCompletedPer90": 1.6,
      "keyPassesPer90": 0.56,
      "tacklesWonPer90": 2.5,
      "interceptionsPer90": 1.1,
      "clearancesPer90": 3.7,
      "aerialDuelWinPercentage": 76.8,
      "tackledDribblerRate": 60.0,
      "progressivePassesPer90": 3.2,
      "longPassesCompletedPer90": 2.2,
      "passingAccuracy": 86.9
    },
    "leagueBenchmarks": [
      {
        "metric": "Passing Accuracy %",
        "player": 86.9,
        "avg": 82.0,
        "elite": 89.0
      },
      {
        "metric": "Clearances per 90",
        "player": 3.7,
        "avg": 2.6,
        "elite": 4.0
      },
      {
        "metric": "Aerial Duel Win %",
        "player": 76.8,
        "avg": 54.5,
        "elite": 68.0
      },
      {
        "metric": "Tackles Won per 90",
        "player": 2.5,
        "avg": 1.1,
        "elite": 2.0
      }
    ],
    "heatmap": [
      {
        "x": 14,
        "y": 25,
        "r": 38,
        "v": 0.8
      },
      {
        "x": 14,
        "y": 45,
        "r": 40,
        "v": 0.85
      },
      {
        "x": 14,
        "y": 65,
        "r": 35,
        "v": 0.7
      },
      {
        "x": 14,
        "y": 12,
        "r": 30,
        "v": 0.6
      }
    ],
    "strengths": [
      "Defending",
      "Workrate",
      "Aerial Dominance"
    ],
    "weaknesses": [
      "Dribbling",
      "Pace"
    ]
  },
  {
    "id": "pascal-struijk",
    "name": "Pascal Struijk",
    "age": 33,
    "position": "DF",
    "role": "Attacking Fullback",
    "club": "Leeds",
    "league": "Premier League",
    "nation": "Brazil",
    "value": 25200000,
    "rating": 85,
    "general": {
      "apps": 33,
      "mins": 2935,
      "goals": 0,
      "assists": 1,
      "yellowCards": 5,
      "redCards": 0
    },
    "attributes": {
      "pace": 75,
      "dribbling": 72,
      "passing": 70,
      "defending": 94,
      "physicality": 94,
      "tactical": 93,
      "workrate": 96
    },
    "detailedStats": {
      "goalsPer90": 0.0,
      "shotsOnTargetPer90": 0.5,
      "expectedGoals": 3.1,
      "shotConversionRate": 10.0,
      "touchesInBoxPer90": 1.4,
      "chancesCreated": 20,
      "dribblesCompletedPer90": 0.9,
      "keyPassesPer90": 0.25,
      "tacklesWonPer90": 3.3,
      "interceptionsPer90": 1.2,
      "clearancesPer90": 5.0,
      "aerialDuelWinPercentage": 80.0,
      "tackledDribblerRate": 61.3,
      "progressivePassesPer90": 2.3,
      "longPassesCompletedPer90": 1.5,
      "passingAccuracy": 83.2
    },
    "leagueBenchmarks": [
      {
        "metric": "Passing Accuracy %",
        "player": 83.2,
        "avg": 82.0,
        "elite": 89.0
      },
      {
        "metric": "Clearances per 90",
        "player": 5.0,
        "avg": 2.6,
        "elite": 4.0
      },
      {
        "metric": "Aerial Duel Win %",
        "player": 80.0,
        "avg": 54.5,
        "elite": 68.0
      },
      {
        "metric": "Tackles Won per 90",
        "player": 3.3,
        "avg": 1.1,
        "elite": 2.0
      }
    ],
    "heatmap": [
      {
        "x": 86,
        "y": 25,
        "r": 38,
        "v": 0.8
      },
      {
        "x": 86,
        "y": 45,
        "r": 40,
        "v": 0.85
      },
      {
        "x": 86,
        "y": 65,
        "r": 35,
        "v": 0.7
      },
      {
        "x": 86,
        "y": 12,
        "r": 30,
        "v": 0.6
      }
    ],
    "strengths": [
      "Defending",
      "Workrate",
      "Aerial Dominance"
    ],
    "weaknesses": [
      "Dribbling",
      "Passing"
    ]
  },
  {
    "id": "jaka-bijol",
    "name": "Jaka Bijol",
    "age": 34,
    "position": "DF",
    "role": "Attacking Fullback",
    "club": "Leeds",
    "league": "Premier League",
    "nation": "Spain",
    "value": 23400000,
    "rating": 84,
    "general": {
      "apps": 21,
      "mins": 1888,
      "goals": 1,
      "assists": 3,
      "yellowCards": 4,
      "redCards": 0
    },
    "attributes": {
      "pace": 74,
      "dribbling": 68,
      "passing": 65,
      "defending": 94,
      "physicality": 90,
      "tactical": 86,
      "workrate": 86
    },
    "detailedStats": {
      "goalsPer90": 0.05,
      "shotsOnTargetPer90": 0.6,
      "expectedGoals": 0.9,
      "shotConversionRate": 11.2,
      "touchesInBoxPer90": 1.3,
      "chancesCreated": 10,
      "dribblesCompletedPer90": 0.7,
      "keyPassesPer90": 0.2,
      "tacklesWonPer90": 2.8,
      "interceptionsPer90": 1.1,
      "clearancesPer90": 4.2,
      "aerialDuelWinPercentage": 80.0,
      "tackledDribblerRate": 58.6,
      "progressivePassesPer90": 1.9,
      "longPassesCompletedPer90": 1.3,
      "passingAccuracy": 81.7
    },
    "leagueBenchmarks": [
      {
        "metric": "Passing Accuracy %",
        "player": 81.7,
        "avg": 82.0,
        "elite": 89.0
      },
      {
        "metric": "Clearances per 90",
        "player": 4.2,
        "avg": 2.6,
        "elite": 4.0
      },
      {
        "metric": "Aerial Duel Win %",
        "player": 80.0,
        "avg": 54.5,
        "elite": 68.0
      },
      {
        "metric": "Tackles Won per 90",
        "player": 2.8,
        "avg": 1.1,
        "elite": 2.0
      }
    ],
    "heatmap": [
      {
        "x": 14,
        "y": 25,
        "r": 38,
        "v": 0.8
      },
      {
        "x": 14,
        "y": 45,
        "r": 40,
        "v": 0.85
      },
      {
        "x": 14,
        "y": 65,
        "r": 35,
        "v": 0.7
      },
      {
        "x": 14,
        "y": 12,
        "r": 30,
        "v": 0.6
      }
    ],
    "strengths": [
      "Defending",
      "Physicality",
      "Aerial Dominance"
    ],
    "weaknesses": [
      "Dribbling",
      "Passing"
    ]
  },
  {
    "id": "sebastiaan-bornauw",
    "name": "Sebastiaan Bornauw",
    "age": 20,
    "position": "DF",
    "role": "Central Defender",
    "club": "Leeds",
    "league": "Premier League",
    "nation": "England",
    "value": 22800000,
    "rating": 73,
    "general": {
      "apps": 5,
      "mins": 429,
      "goals": 0,
      "assists": 0,
      "yellowCards": 1,
      "redCards": 0
    },
    "attributes": {
      "pace": 65,
      "dribbling": 56,
      "passing": 60,
      "defending": 77,
      "physicality": 61,
      "tactical": 68,
      "workrate": 66
    },
    "detailedStats": {
      "goalsPer90": 0.0,
      "shotsOnTargetPer90": 0.5,
      "expectedGoals": 0.2,
      "shotConversionRate": 10.0,
      "touchesInBoxPer90": 0.6,
      "chancesCreated": 0,
      "dribblesCompletedPer90": 0.4,
      "keyPassesPer90": 0.07,
      "tacklesWonPer90": 1.3,
      "interceptionsPer90": 0.8,
      "clearancesPer90": 2.0,
      "aerialDuelWinPercentage": 59.9,
      "tackledDribblerRate": 51.2,
      "progressivePassesPer90": 1.5,
      "longPassesCompletedPer90": 1.0,
      "passingAccuracy": 80.1
    },
    "leagueBenchmarks": [
      {
        "metric": "Passing Accuracy %",
        "player": 80.1,
        "avg": 82.0,
        "elite": 89.0
      },
      {
        "metric": "Clearances per 90",
        "player": 2.0,
        "avg": 2.6,
        "elite": 4.0
      },
      {
        "metric": "Aerial Duel Win %",
        "player": 59.9,
        "avg": 54.5,
        "elite": 68.0
      },
      {
        "metric": "Tackles Won per 90",
        "player": 1.3,
        "avg": 1.1,
        "elite": 2.0
      }
    ],
    "heatmap": [
      {
        "x": 50,
        "y": 20,
        "r": 45,
        "v": 0.9
      },
      {
        "x": 42,
        "y": 18,
        "r": 32,
        "v": 0.8
      },
      {
        "x": 58,
        "y": 18,
        "r": 32,
        "v": 0.8
      },
      {
        "x": 50,
        "y": 10,
        "r": 28,
        "v": 0.6
      }
    ],
    "strengths": [
      "Defending",
      "Tactical awareness"
    ],
    "weaknesses": [
      "Dribbling",
      "Passing"
    ]
  },
  {
    "id": "gabriel-gudmundsson",
    "name": "Gabriel Gudmundsson",
    "age": 22,
    "position": "DF",
    "role": "Attacking Fullback",
    "club": "Leeds",
    "league": "Premier League",
    "nation": "Spain",
    "value": 22800000,
    "rating": 79,
    "general": {
      "apps": 31,
      "mins": 2637,
      "goals": 0,
      "assists": 0,
      "yellowCards": 4,
      "redCards": 1
    },
    "attributes": {
      "pace": 71,
      "dribbling": 75,
      "passing": 84,
      "defending": 94,
      "physicality": 84,
      "tactical": 89,
      "workrate": 96
    },
    "detailedStats": {
      "goalsPer90": 0.0,
      "shotsOnTargetPer90": 0.5,
      "expectedGoals": 1.1,
      "shotConversionRate": 10.0,
      "touchesInBoxPer90": 1.0,
      "chancesCreated": 45,
      "dribblesCompletedPer90": 1.6,
      "keyPassesPer90": 0.62,
      "tacklesWonPer90": 2.5,
      "interceptionsPer90": 1.1,
      "clearancesPer90": 3.7,
      "aerialDuelWinPercentage": 77.1,
      "tackledDribblerRate": 59.6,
      "progressivePassesPer90": 3.3,
      "longPassesCompletedPer90": 2.2,
      "passingAccuracy": 87.3
    },
    "leagueBenchmarks": [
      {
        "metric": "Passing Accuracy %",
        "player": 87.3,
        "avg": 82.0,
        "elite": 89.0
      },
      {
        "metric": "Clearances per 90",
        "player": 3.7,
        "avg": 2.6,
        "elite": 4.0
      },
      {
        "metric": "Aerial Duel Win %",
        "player": 77.1,
        "avg": 54.5,
        "elite": 68.0
      },
      {
        "metric": "Tackles Won per 90",
        "player": 2.5,
        "avg": 1.1,
        "elite": 2.0
      }
    ],
    "heatmap": [
      {
        "x": 86,
        "y": 25,
        "r": 38,
        "v": 0.8
      },
      {
        "x": 86,
        "y": 45,
        "r": 40,
        "v": 0.85
      },
      {
        "x": 86,
        "y": 65,
        "r": 35,
        "v": 0.7
      },
      {
        "x": 86,
        "y": 12,
        "r": 30,
        "v": 0.6
      }
    ],
    "strengths": [
      "Defending",
      "Workrate",
      "Aerial Dominance"
    ],
    "weaknesses": [
      "Dribbling",
      "Pace"
    ]
  },
  {
    "id": "joe-rodon",
    "name": "Joe Rodon",
    "age": 23,
    "position": "DF",
    "role": "Attacking Fullback",
    "club": "Leeds",
    "league": "Premier League",
    "nation": "England",
    "value": 23400000,
    "rating": 85,
    "general": {
      "apps": 33,
      "mins": 2952,
      "goals": 2,
      "assists": 0,
      "yellowCards": 3,
      "redCards": 0
    },
    "attributes": {
      "pace": 74,
      "dribbling": 70,
      "passing": 69,
      "defending": 94,
      "physicality": 94,
      "tactical": 92,
      "workrate": 96
    },
    "detailedStats": {
      "goalsPer90": 0.06,
      "shotsOnTargetPer90": 0.6,
      "expectedGoals": 1.4,
      "shotConversionRate": 12.4,
      "touchesInBoxPer90": 1.3,
      "chancesCreated": 17,
      "dribblesCompletedPer90": 0.9,
      "keyPassesPer90": 0.21,
      "tacklesWonPer90": 3.4,
      "interceptionsPer90": 1.2,
      "clearancesPer90": 5.0,
      "aerialDuelWinPercentage": 80.0,
      "tackledDribblerRate": 60.9,
      "progressivePassesPer90": 2.2,
      "longPassesCompletedPer90": 1.5,
      "passingAccuracy": 82.7
    },
    "leagueBenchmarks": [
      {
        "metric": "Passing Accuracy %",
        "player": 82.7,
        "avg": 82.0,
        "elite": 89.0
      },
      {
        "metric": "Clearances per 90",
        "player": 5.0,
        "avg": 2.6,
        "elite": 4.0
      },
      {
        "metric": "Aerial Duel Win %",
        "player": 80.0,
        "avg": 54.5,
        "elite": 68.0
      },
      {
        "metric": "Tackles Won per 90",
        "player": 3.4,
        "avg": 1.1,
        "elite": 2.0
      }
    ],
    "heatmap": [
      {
        "x": 14,
        "y": 25,
        "r": 38,
        "v": 0.8
      },
      {
        "x": 14,
        "y": 45,
        "r": 40,
        "v": 0.85
      },
      {
        "x": 14,
        "y": 65,
        "r": 35,
        "v": 0.7
      },
      {
        "x": 14,
        "y": 12,
        "r": 30,
        "v": 0.6
      }
    ],
    "strengths": [
      "Defending",
      "Workrate",
      "Aerial Dominance"
    ],
    "weaknesses": [
      "Dribbling",
      "Passing"
    ]
  },
  {
    "id": "brenden-aaronson",
    "name": "Brenden Aaronson",
    "age": 25,
    "position": "MF",
    "role": "Attacking Playmaker",
    "club": "Leeds",
    "league": "Premier League",
    "nation": "France",
    "value": 32400000,
    "rating": 88,
    "general": {
      "apps": 30,
      "mins": 2449,
      "goals": 4,
      "assists": 8,
      "yellowCards": 3,
      "redCards": 0
    },
    "attributes": {
      "pace": 84,
      "dribbling": 94,
      "passing": 92,
      "defending": 82,
      "physicality": 87,
      "tactical": 95,
      "workrate": 94
    },
    "detailedStats": {
      "goalsPer90": 0.15,
      "shotsOnTargetPer90": 0.7,
      "expectedGoals": 4.5,
      "shotConversionRate": 14.8,
      "touchesInBoxPer90": 2.2,
      "chancesCreated": 60,
      "dribblesCompletedPer90": 2.0,
      "keyPassesPer90": 0.89,
      "passingAccuracy": 90.1,
      "progressivePassesPer90": 6.9,
      "tacklesWonPer90": 2.4,
      "interceptionsPer90": 0.9,
      "ballRecoveriesPer90": 6.7
    },
    "leagueBenchmarks": [
      {
        "metric": "Key Passes per 90",
        "player": 0.89,
        "avg": 0.9,
        "elite": 2.2
      },
      {
        "metric": "Progressive Passes p90",
        "player": 6.9,
        "avg": 2.8,
        "elite": 6.2
      },
      {
        "metric": "Chances Created",
        "player": 60,
        "avg": 16,
        "elite": 55
      },
      {
        "metric": "Passing Accuracy %",
        "player": 90.1,
        "avg": 79.5,
        "elite": 87.0
      }
    ],
    "heatmap": [
      {
        "x": 50,
        "y": 64,
        "r": 42,
        "v": 0.9
      },
      {
        "x": 40,
        "y": 55,
        "r": 35,
        "v": 0.75
      },
      {
        "x": 60,
        "y": 55,
        "r": 35,
        "v": 0.75
      },
      {
        "x": 50,
        "y": 76,
        "r": 30,
        "v": 0.8
      }
    ],
    "strengths": [
      "Dribbling",
      "Creative Vision",
      "Tactical awareness"
    ],
    "weaknesses": [
      "Defending",
      "Pace"
    ]
  },
  {
    "id": "wilfried-gnonto",
    "name": "Wilfried Gnonto",
    "age": 26,
    "position": "MF",
    "role": "Box-to-Box Midfielder",
    "club": "Leeds",
    "league": "Premier League",
    "nation": "England",
    "value": 30600000,
    "rating": 74,
    "general": {
      "apps": 4,
      "mins": 521,
      "goals": 0,
      "assists": 3,
      "yellowCards": 3,
      "redCards": 0
    },
    "attributes": {
      "pace": 63,
      "dribbling": 62,
      "passing": 68,
      "defending": 55,
      "physicality": 60,
      "tactical": 71,
      "workrate": 67
    },
    "detailedStats": {
      "goalsPer90": 0.0,
      "shotsOnTargetPer90": 0.5,
      "expectedGoals": 0.4,
      "shotConversionRate": 10.0,
      "touchesInBoxPer90": 0.7,
      "chancesCreated": 16,
      "dribblesCompletedPer90": 0.8,
      "keyPassesPer90": 1.12,
      "passingAccuracy": 84.2,
      "progressivePassesPer90": 3.3,
      "tacklesWonPer90": 1.1,
      "interceptionsPer90": 0.6,
      "ballRecoveriesPer90": 4.1
    },
    "leagueBenchmarks": [
      {
        "metric": "Key Passes per 90",
        "player": 1.12,
        "avg": 0.9,
        "elite": 2.2
      },
      {
        "metric": "Progressive Passes p90",
        "player": 3.3,
        "avg": 2.8,
        "elite": 6.2
      },
      {
        "metric": "Chances Created",
        "player": 16,
        "avg": 16,
        "elite": 55
      },
      {
        "metric": "Passing Accuracy %",
        "player": 84.2,
        "avg": 79.5,
        "elite": 87.0
      }
    ],
    "heatmap": [
      {
        "x": 50,
        "y": 42,
        "r: ": 45,
        "v": 0.9
      },
      {
        "x": 44,
        "y": 35,
        "r": 38,
        "v": 0.8
      },
      {
        "x": 56,
        "y": 35,
        "r": 38,
        "v": 0.8
      },
      {
        "x": 50,
        "y": 55,
        "r": 35,
        "v": 0.75
      }
    ],
    "strengths": [
      "Passing",
      "Tactical awareness"
    ],
    "weaknesses": [
      "Defending",
      "Physicality"
    ]
  },
  {
    "id": "jack-harrison",
    "name": "Jack Harrison",
    "age": 27,
    "position": "MF",
    "role": "Box-to-Box Midfielder",
    "club": "Leeds",
    "league": "Premier League",
    "nation": "Spain",
    "value": 30600000,
    "rating": 71,
    "general": {
      "apps": 1,
      "mins": 262,
      "goals": 0,
      "assists": 0,
      "yellowCards": 0,
      "redCards": 0
    },
    "attributes": {
      "pace": 61,
      "dribbling": 58,
      "passing": 63,
      "defending": 52,
      "physicality": 57,
      "tactical": 67,
      "workrate": 63
    },
    "detailedStats": {
      "goalsPer90": 0.0,
      "shotsOnTargetPer90": 0.5,
      "expectedGoals": 0.3,
      "shotConversionRate": 10.0,
      "touchesInBoxPer90": 0.6,
      "chancesCreated": 6,
      "dribblesCompletedPer90": 0.6,
      "keyPassesPer90": 0.85,
      "passingAccuracy": 82.8,
      "progressivePassesPer90": 2.5,
      "tacklesWonPer90": 0.9,
      "interceptionsPer90": 0.5,
      "ballRecoveriesPer90": 3.7
    },
    "leagueBenchmarks": [
      {
        "metric": "Key Passes per 90",
        "player": 0.85,
        "avg": 0.9,
        "elite": 2.2
      },
      {
        "metric": "Progressive Passes p90",
        "player": 2.5,
        "avg": 2.8,
        "elite": 6.2
      },
      {
        "metric": "Chances Created",
        "player": 6,
        "avg": 16,
        "elite": 55
      },
      {
        "metric": "Passing Accuracy %",
        "player": 82.8,
        "avg": 79.5,
        "elite": 87.0
      }
    ],
    "heatmap": [
      {
        "x": 50,
        "y": 42,
        "r: ": 45,
        "v": 0.9
      },
      {
        "x": 44,
        "y": 35,
        "r": 38,
        "v": 0.8
      },
      {
        "x": 56,
        "y": 35,
        "r": 38,
        "v": 0.8
      },
      {
        "x": 50,
        "y": 55,
        "r": 35,
        "v": 0.75
      }
    ],
    "strengths": [
      "Passing",
      "Tactical awareness"
    ],
    "weaknesses": [
      "Defending",
      "Physicality"
    ]
  },
  {
    "id": "daniel-james",
    "name": "Daniel James",
    "age": 28,
    "position": "MF",
    "role": "Box-to-Box Midfielder",
    "club": "Leeds",
    "league": "Premier League",
    "nation": "Spain",
    "value": 31200000,
    "rating": 73,
    "general": {
      "apps": 6,
      "mins": 547,
      "goals": 0,
      "assists": 0,
      "yellowCards": 0,
      "redCards": 0
    },
    "attributes": {
      "pace": 66,
      "dribbling": 65,
      "passing": 68,
      "defending": 54,
      "physicality": 59,
      "tactical": 73,
      "workrate": 67
    },
    "detailedStats": {
      "goalsPer90": 0.0,
      "shotsOnTargetPer90": 0.5,
      "expectedGoals": 0.9,
      "shotConversionRate": 10.0,
      "touchesInBoxPer90": 0.9,
      "chancesCreated": 16,
      "dribblesCompletedPer90": 0.8,
      "keyPassesPer90": 1.09,
      "passingAccuracy": 84.2,
      "progressivePassesPer90": 3.3,
      "tacklesWonPer90": 1.0,
      "interceptionsPer90": 0.6,
      "ballRecoveriesPer90": 4.0
    },
    "leagueBenchmarks": [
      {
        "metric": "Key Passes per 90",
        "player": 1.09,
        "avg": 0.9,
        "elite": 2.2
      },
      {
        "metric": "Progressive Passes p90",
        "player": 3.3,
        "avg": 2.8,
        "elite": 6.2
      },
      {
        "metric": "Chances Created",
        "player": 16,
        "avg": 16,
        "elite": 55
      },
      {
        "metric": "Passing Accuracy %",
        "player": 84.2,
        "avg": 79.5,
        "elite": 87.0
      }
    ],
    "heatmap": [
      {
        "x": 50,
        "y": 42,
        "r: ": 45,
        "v": 0.9
      },
      {
        "x": 44,
        "y": 35,
        "r": 38,
        "v": 0.8
      },
      {
        "x": 56,
        "y": 35,
        "r": 38,
        "v": 0.8
      },
      {
        "x": 50,
        "y": 55,
        "r": 35,
        "v": 0.75
      }
    ],
    "strengths": [
      "Passing",
      "Tactical awareness"
    ],
    "weaknesses": [
      "Defending",
      "Physicality"
    ]
  },
  {
    "id": "ethan-ampadu",
    "name": "Ethan Ampadu",
    "age": 29,
    "position": "MF",
    "role": "Attacking Playmaker",
    "club": "Leeds",
    "league": "Premier League",
    "nation": "England",
    "value": 29400000,
    "rating": 89,
    "general": {
      "apps": 35,
      "mins": 3119,
      "goals": 1,
      "assists": 4,
      "yellowCards": 10,
      "redCards": 0
    },
    "attributes": {
      "pace": 68,
      "dribbling": 77,
      "passing": 85,
      "defending": 88,
      "physicality": 94,
      "tactical": 93,
      "workrate": 96
    },
    "detailedStats": {
      "goalsPer90": 0.03,
      "shotsOnTargetPer90": 0.5,
      "expectedGoals": 2.5,
      "shotConversionRate": 11.2,
      "touchesInBoxPer90": 1.1,
      "chancesCreated": 48,
      "dribblesCompletedPer90": 1.7,
      "keyPassesPer90": 0.56,
      "passingAccuracy": 88.4,
      "progressivePassesPer90": 5.8,
      "tacklesWonPer90": 2.8,
      "interceptionsPer90": 0.8,
      "ballRecoveriesPer90": 7.4
    },
    "leagueBenchmarks": [
      {
        "metric": "Key Passes per 90",
        "player": 0.56,
        "avg": 0.9,
        "elite": 2.2
      },
      {
        "metric": "Progressive Passes p90",
        "player": 5.8,
        "avg": 2.8,
        "elite": 6.2
      },
      {
        "metric": "Chances Created",
        "player": 48,
        "avg": 16,
        "elite": 55
      },
      {
        "metric": "Passing Accuracy %",
        "player": 88.4,
        "avg": 79.5,
        "elite": 87.0
      }
    ],
    "heatmap": [
      {
        "x": 50,
        "y": 64,
        "r": 42,
        "v": 0.9
      },
      {
        "x": 40,
        "y": 55,
        "r": 35,
        "v": 0.75
      },
      {
        "x": 60,
        "y": 55,
        "r": 35,
        "v": 0.75
      },
      {
        "x": 50,
        "y": 76,
        "r": 30,
        "v": 0.8
      }
    ],
    "strengths": [
      "Workrate",
      "Physicality"
    ],
    "weaknesses": [
      "Dribbling",
      "Pace"
    ]
  },
  {
    "id": "ilia-gruev",
    "name": "Ilia Gruev",
    "age": 31,
    "position": "MF",
    "role": "Box-to-Box Midfielder",
    "club": "Leeds",
    "league": "Premier League",
    "nation": "Spain",
    "value": 28200000,
    "rating": 78,
    "general": {
      "apps": 15,
      "mins": 1318,
      "goals": 0,
      "assists": 4,
      "yellowCards": 3,
      "redCards": 0
    },
    "attributes": {
      "pace": 63,
      "dribbling": 64,
      "passing": 71,
      "defending": 63,
      "physicality": 68,
      "tactical": 75,
      "workrate": 78
    },
    "detailedStats": {
      "goalsPer90": 0.0,
      "shotsOnTargetPer90": 0.5,
      "expectedGoals": 0.5,
      "shotConversionRate": 10.0,
      "touchesInBoxPer90": 0.7,
      "chancesCreated": 21,
      "dribblesCompletedPer90": 1.0,
      "keyPassesPer90": 0.58,
      "passingAccuracy": 84.8,
      "progressivePassesPer90": 3.7,
      "tacklesWonPer90": 1.5,
      "interceptionsPer90": 0.6,
      "ballRecoveriesPer90": 4.8
    },
    "leagueBenchmarks": [
      {
        "metric": "Key Passes per 90",
        "player": 0.58,
        "avg": 0.9,
        "elite": 2.2
      },
      {
        "metric": "Progressive Passes p90",
        "player": 3.7,
        "avg": 2.8,
        "elite": 6.2
      },
      {
        "metric": "Chances Created",
        "player": 21,
        "avg": 16,
        "elite": 55
      },
      {
        "metric": "Passing Accuracy %",
        "player": 84.8,
        "avg": 79.5,
        "elite": 87.0
      }
    ],
    "heatmap": [
      {
        "x": 50,
        "y": 42,
        "r: ": 45,
        "v": 0.9
      },
      {
        "x": 44,
        "y": 35,
        "r": 38,
        "v": 0.8
      },
      {
        "x": 56,
        "y": 35,
        "r": 38,
        "v": 0.8
      },
      {
        "x": 50,
        "y": 55,
        "r": 35,
        "v": 0.75
      }
    ],
    "strengths": [
      "Workrate",
      "Tactical awareness"
    ],
    "weaknesses": [
      "Defending",
      "Pace"
    ]
  },
  {
    "id": "tanaka-ao",
    "name": "Tanaka Ao",
    "age": 33,
    "position": "MF",
    "role": "Box-to-Box Midfielder",
    "club": "Leeds",
    "league": "Premier League",
    "nation": "Spain",
    "value": 28800000,
    "rating": 79,
    "general": {
      "apps": 14,
      "mins": 1307,
      "goals": 2,
      "assists": 1,
      "yellowCards": 1,
      "redCards": 0
    },
    "attributes": {
      "pace": 65,
      "dribbling": 71,
      "passing": 80,
      "defending": 64,
      "physicality": 69,
      "tactical": 80,
      "workrate": 78
    },
    "detailedStats": {
      "goalsPer90": 0.14,
      "shotsOnTargetPer90": 0.7,
      "expectedGoals": 1.4,
      "shotConversionRate": 12.4,
      "touchesInBoxPer90": 0.8,
      "chancesCreated": 38,
      "dribblesCompletedPer90": 1.4,
      "keyPassesPer90": 1.06,
      "passingAccuracy": 87.1,
      "progressivePassesPer90": 5.1,
      "tacklesWonPer90": 1.5,
      "interceptionsPer90": 0.7,
      "ballRecoveriesPer90": 5.0
    },
    "leagueBenchmarks": [
      {
        "metric": "Key Passes per 90",
        "player": 1.06,
        "avg": 0.9,
        "elite": 2.2
      },
      {
        "metric": "Progressive Passes p90",
        "player": 5.1,
        "avg": 2.8,
        "elite": 6.2
      },
      {
        "metric": "Chances Created",
        "player": 38,
        "avg": 16,
        "elite": 55
      },
      {
        "metric": "Passing Accuracy %",
        "player": 87.1,
        "avg": 79.5,
        "elite": 87.0
      }
    ],
    "heatmap": [
      {
        "x": 50,
        "y": 42,
        "r: ": 45,
        "v": 0.9
      },
      {
        "x": 44,
        "y": 35,
        "r": 38,
        "v": 0.8
      },
      {
        "x": 56,
        "y": 35,
        "r": 38,
        "v": 0.8
      },
      {
        "x": 50,
        "y": 55,
        "r": 35,
        "v": 0.75
      }
    ],
    "strengths": [
      "Passing",
      "Tactical awareness"
    ],
    "weaknesses": [
      "Defending",
      "Pace"
    ]
  },
  {
    "id": "jo\u00ebl-piroe",
    "name": "Jo\u00ebl Piroe",
    "age": 22,
    "position": "FW",
    "role": "Complete Winger / Striker",
    "club": "Leeds",
    "league": "Premier League",
    "nation": "Spain",
    "value": 29400000,
    "rating": 72,
    "general": {
      "apps": 2,
      "mins": 244,
      "goals": 0,
      "assists": 0,
      "yellowCards": 0,
      "redCards": 0
    },
    "attributes": {
      "pace": 76,
      "dribbling": 61,
      "passing": 62,
      "defending": 25,
      "physicality": 55,
      "tactical": 69,
      "workrate": 63
    },
    "detailedStats": {
      "goalsPer90": 0.0,
      "shotsOnTargetPer90": 0.5,
      "expectedGoals": 0.9,
      "shotConversionRate": 10.0,
      "touchesInBoxPer90": 2.6,
      "chancesCreated": 4,
      "dribblesCompletedPer90": 0.5,
      "keyPassesPer90": 0.7
    },
    "leagueBenchmarks": [
      {
        "metric": "Goals per 90",
        "player": 0.0,
        "avg": 0.22,
        "elite": 0.65
      },
      {
        "metric": "Shot Conversion %",
        "player": 10.0,
        "avg": 10.5,
        "elite": 18.0
      },
      {
        "metric": "Touches in Box p90",
        "player": 2.6,
        "avg": 2.5,
        "elite": 5.5
      },
      {
        "metric": "Expected Goals (xG)",
        "player": 0.9,
        "avg": 4.5,
        "elite": 14.0
      }
    ],
    "heatmap": [
      {
        "x": 50,
        "y": 84,
        "r": 38,
        "v": 0.9
      },
      {
        "x": 48,
        "y": 76,
        "r": 32,
        "v": 0.75
      },
      {
        "x": 52,
        "y": 80,
        "r": 32,
        "v": 0.8
      },
      {
        "x": 50,
        "y": 92,
        "r": 28,
        "v": 0.85
      }
    ],
    "strengths": [
      "Tactical awareness",
      "Pace"
    ],
    "weaknesses": [
      "Defending",
      "Defensive Tracking Back"
    ]
  },
  {
    "id": "lukas-nmecha",
    "name": "Lukas Nmecha",
    "age": 25,
    "position": "FW",
    "role": "Complete Winger / Striker",
    "club": "Leeds",
    "league": "Premier League",
    "nation": "France",
    "value": 30000000,
    "rating": 80,
    "general": {
      "apps": 10,
      "mins": 1065,
      "goals": 6,
      "assists": 1,
      "yellowCards": 0,
      "redCards": 0
    },
    "attributes": {
      "pace": 94,
      "dribbling": 78,
      "passing": 70,
      "defending": 32,
      "physicality": 74,
      "tactical": 86,
      "workrate": 75
    },
    "detailedStats": {
      "goalsPer90": 0.51,
      "shotsOnTargetPer90": 1.3,
      "expectedGoals": 7.2,
      "shotConversionRate": 17.2,
      "touchesInBoxPer90": 4.2,
      "chancesCreated": 19,
      "dribblesCompletedPer90": 0.9,
      "keyPassesPer90": 0.65
    },
    "leagueBenchmarks": [
      {
        "metric": "Goals per 90",
        "player": 0.51,
        "avg": 0.22,
        "elite": 0.65
      },
      {
        "metric": "Shot Conversion %",
        "player": 17.2,
        "avg": 10.5,
        "elite": 18.0
      },
      {
        "metric": "Touches in Box p90",
        "player": 4.2,
        "avg": 2.5,
        "elite": 5.5
      },
      {
        "metric": "Expected Goals (xG)",
        "player": 7.2,
        "avg": 4.5,
        "elite": 14.0
      }
    ],
    "heatmap": [
      {
        "x": 50,
        "y": 84,
        "r": 38,
        "v": 0.9
      },
      {
        "x": 48,
        "y": 76,
        "r": 32,
        "v": 0.75
      },
      {
        "x": 52,
        "y": 80,
        "r": 32,
        "v": 0.8
      },
      {
        "x": 50,
        "y": 92,
        "r": 28,
        "v": 0.85
      }
    ],
    "strengths": [
      "Tactical awareness",
      "Pace"
    ],
    "weaknesses": [
      "Defending",
      "Defensive Tracking Back"
    ]
  },
  {
    "id": "sean-longstaff",
    "name": "Sean Longstaff",
    "age": 33,
    "position": "MF",
    "role": "Attacking Playmaker",
    "club": "Leeds",
    "league": "Premier League",
    "nation": "Spain",
    "value": 28800000,
    "rating": 78,
    "general": {
      "apps": 10,
      "mins": 1003,
      "goals": 2,
      "assists": 2,
      "yellowCards": 2,
      "redCards": 0
    },
    "attributes": {
      "pace": 65,
      "dribbling": 75,
      "passing": 86,
      "defending": 69,
      "physicality": 74,
      "tactical": 85,
      "workrate": 74
    },
    "detailedStats": {
      "goalsPer90": 0.18,
      "shotsOnTargetPer90": 0.8,
      "expectedGoals": 1.2,
      "shotConversionRate": 12.4,
      "touchesInBoxPer90": 0.9,
      "chancesCreated": 50,
      "dribblesCompletedPer90": 1.7,
      "keyPassesPer90": 1.81,
      "passingAccuracy": 88.7,
      "progressivePassesPer90": 6.0,
      "tacklesWonPer90": 1.8,
      "interceptionsPer90": 0.7,
      "ballRecoveriesPer90": 5.4
    },
    "leagueBenchmarks": [
      {
        "metric": "Key Passes per 90",
        "player": 1.81,
        "avg": 0.9,
        "elite": 2.2
      },
      {
        "metric": "Progressive Passes p90",
        "player": 6.0,
        "avg": 2.8,
        "elite": 6.2
      },
      {
        "metric": "Chances Created",
        "player": 50,
        "avg": 16,
        "elite": 55
      },
      {
        "metric": "Passing Accuracy %",
        "player": 88.7,
        "avg": 79.5,
        "elite": 87.0
      }
    ],
    "heatmap": [
      {
        "x": 50,
        "y": 64,
        "r": 42,
        "v": 0.9
      },
      {
        "x": 40,
        "y": 55,
        "r": 35,
        "v": 0.75
      },
      {
        "x": 60,
        "y": 55,
        "r": 35,
        "v": 0.75
      },
      {
        "x": 50,
        "y": 76,
        "r": 30,
        "v": 0.8
      }
    ],
    "strengths": [
      "Passing",
      "Tactical awareness"
    ],
    "weaknesses": [
      "Defending",
      "Pace"
    ]
  },
  {
    "id": "anton-stach",
    "name": "Anton Stach",
    "age": 20,
    "position": "MF",
    "role": "Attacking Playmaker",
    "club": "Leeds",
    "league": "Premier League",
    "nation": "England",
    "value": 28800000,
    "rating": 89,
    "general": {
      "apps": 28,
      "mins": 2369,
      "goals": 5,
      "assists": 6,
      "yellowCards": 3,
      "redCards": 0
    },
    "attributes": {
      "pace": 75,
      "dribbling": 96,
      "passing": 97,
      "defending": 88,
      "physicality": 94,
      "tactical": 95,
      "workrate": 93
    },
    "detailedStats": {
      "goalsPer90": 0.19,
      "shotsOnTargetPer90": 0.8,
      "expectedGoals": 2.9,
      "shotConversionRate": 16.0,
      "touchesInBoxPer90": 1.6,
      "chancesCreated": 115,
      "dribblesCompletedPer90": 3.5,
      "keyPassesPer90": 1.75,
      "passingAccuracy": 94.0,
      "progressivePassesPer90": 11.2,
      "tacklesWonPer90": 3.0,
      "interceptionsPer90": 1.0,
      "ballRecoveriesPer90": 7.8
    },
    "leagueBenchmarks": [
      {
        "metric": "Key Passes per 90",
        "player": 1.75,
        "avg": 0.9,
        "elite": 2.2
      },
      {
        "metric": "Progressive Passes p90",
        "player": 11.2,
        "avg": 2.8,
        "elite": 6.2
      },
      {
        "metric": "Chances Created",
        "player": 115,
        "avg": 16,
        "elite": 55
      },
      {
        "metric": "Passing Accuracy %",
        "player": 94.0,
        "avg": 79.5,
        "elite": 87.0
      }
    ],
    "heatmap": [
      {
        "x": 50,
        "y": 64,
        "r": 42,
        "v": 0.9
      },
      {
        "x": 40,
        "y": 55,
        "r": 35,
        "v": 0.75
      },
      {
        "x": 60,
        "y": 55,
        "r": 35,
        "v": 0.75
      },
      {
        "x": 50,
        "y": 76,
        "r": 30,
        "v": 0.8
      }
    ],
    "strengths": [
      "Dribbling",
      "Passing"
    ],
    "weaknesses": [
      "Defending",
      "Pace"
    ]
  },
  {
    "id": "lucas-estella-perri",
    "name": "Lucas Estella Perri",
    "age": 25,
    "position": "GK",
    "role": "Sweeper Keeper",
    "club": "Leeds",
    "league": "Premier League",
    "nation": "France",
    "value": 26400000,
    "rating": 76,
    "general": {
      "apps": 16,
      "mins": 1440,
      "goals": 0,
      "assists": 0,
      "yellowCards": 2,
      "redCards": 0
    },
    "attributes": {
      "pace": 60,
      "dribbling": 55,
      "passing": 71,
      "defending": 91,
      "physicality": 76,
      "tactical": 73,
      "workrate": 80
    },
    "detailedStats": {
      "savePercentage": 72.6,
      "cleanSheets": 3,
      "goalsConceded": 29,
      "psxgDifference": 1.2,
      "passingAccuracy": 86.1,
      "sweeperActionsPer90": 0.7,
      "averageDistanceOfSweeperActions": 12.6
    },
    "leagueBenchmarks": [
      {
        "metric": "Save %",
        "player": 72.6,
        "avg": 69.5,
        "elite": 77.0
      },
      {
        "metric": "Clean Sheets",
        "player": 3,
        "avg": 4.5,
        "elite": 10.0
      },
      {
        "metric": "Sweeper Actions p90",
        "player": 0.7,
        "avg": 0.6,
        "elite": 1.2
      },
      {
        "metric": "Passing Accuracy %",
        "player": 86.1,
        "avg": 73.0,
        "elite": 82.0
      }
    ],
    "heatmap": [
      {
        "x": 50,
        "y": 6,
        "r": 35,
        "v": 0.98
      },
      {
        "x": 50,
        "y": 14,
        "r": 28,
        "v": 0.7
      },
      {
        "x": 45,
        "y": 8,
        "r": 22,
        "v": 0.55
      },
      {
        "x": 55,
        "y": 8,
        "r": 22,
        "v": 0.55
      }
    ],
    "strengths": [
      "Defending",
      "Workrate"
    ],
    "weaknesses": [
      "Dribbling",
      "Pace"
    ]
  },
  {
    "id": "dominic-calvert-lewin",
    "name": "Dominic Calvert-Lewin",
    "age": 21,
    "position": "FW",
    "role": "Inverted Winger",
    "club": "Leeds",
    "league": "Premier League",
    "nation": "Spain",
    "value": 34800000,
    "rating": 90,
    "general": {
      "apps": 30,
      "mins": 2721,
      "goals": 14,
      "assists": 2,
      "yellowCards": 3,
      "redCards": 0
    },
    "attributes": {
      "pace": 98,
      "dribbling": 96,
      "passing": 80,
      "defending": 40,
      "physicality": 94,
      "tactical": 95,
      "workrate": 96
    },
    "detailedStats": {
      "goalsPer90": 0.46,
      "shotsOnTargetPer90": 1.2,
      "expectedGoals": 15.6,
      "shotConversionRate": 25.0,
      "touchesInBoxPer90": 7.1,
      "chancesCreated": 38,
      "dribblesCompletedPer90": 1.4,
      "keyPassesPer90": 0.51
    },
    "leagueBenchmarks": [
      {
        "metric": "Goals per 90",
        "player": 0.46,
        "avg": 0.22,
        "elite": 0.65
      },
      {
        "metric": "Shot Conversion %",
        "player": 25.0,
        "avg": 10.5,
        "elite": 18.0
      },
      {
        "metric": "Touches in Box p90",
        "player": 7.1,
        "avg": 2.5,
        "elite": 5.5
      },
      {
        "metric": "Expected Goals (xG)",
        "player": 15.6,
        "avg": 4.5,
        "elite": 14.0
      }
    ],
    "heatmap": [
      {
        "x": 78,
        "y": 72,
        "r": 45,
        "v": 0.9
      },
      {
        "x": 78,
        "y": 58,
        "r": 38,
        "v": 0.75
      },
      {
        "x": 72,
        "y": 82,
        "r": 35,
        "v": 0.8
      },
      {
        "x": 50,
        "y": 84,
        "r": 30,
        "v": 0.65
      }
    ],
    "strengths": [
      "Dribbling",
      "Clinical Finishing",
      "Pace"
    ],
    "weaknesses": [
      "Defending",
      "Defensive Tracking Back"
    ]
  },
  {
    "id": "noah-okafor",
    "name": "Noah Okafor",
    "age": 28,
    "position": "MF",
    "role": "Attacking Playmaker",
    "club": "Leeds",
    "league": "Premier League",
    "nation": "Spain",
    "value": 33000000,
    "rating": 85,
    "general": {
      "apps": 19,
      "mins": 1553,
      "goals": 8,
      "assists": 3,
      "yellowCards": 3,
      "redCards": 0
    },
    "attributes": {
      "pace": 81,
      "dribbling": 83,
      "passing": 78,
      "defending": 79,
      "physicality": 84,
      "tactical": 93,
      "workrate": 82
    },
    "detailedStats": {
      "goalsPer90": 0.46,
      "shotsOnTargetPer90": 1.2,
      "expectedGoals": 5.2,
      "shotConversionRate": 19.6,
      "touchesInBoxPer90": 1.9,
      "chancesCreated": 34,
      "dribblesCompletedPer90": 1.3,
      "keyPassesPer90": 0.8,
      "passingAccuracy": 86.6,
      "progressivePassesPer90": 4.8,
      "tacklesWonPer90": 2.3,
      "interceptionsPer90": 0.8,
      "ballRecoveriesPer90": 6.4
    },
    "leagueBenchmarks": [
      {
        "metric": "Key Passes per 90",
        "player": 0.8,
        "avg": 0.9,
        "elite": 2.2
      },
      {
        "metric": "Progressive Passes p90",
        "player": 4.8,
        "avg": 2.8,
        "elite": 6.2
      },
      {
        "metric": "Chances Created",
        "player": 34,
        "avg": 16,
        "elite": 55
      },
      {
        "metric": "Passing Accuracy %",
        "player": 86.6,
        "avg": 79.5,
        "elite": 87.0
      }
    ],
    "heatmap": [
      {
        "x": 50,
        "y": 64,
        "r": 42,
        "v": 0.9
      },
      {
        "x": 40,
        "y": 55,
        "r": 35,
        "v": 0.75
      },
      {
        "x": 60,
        "y": 55,
        "r": 35,
        "v": 0.75
      },
      {
        "x": 50,
        "y": 76,
        "r": 30,
        "v": 0.8
      }
    ],
    "strengths": [
      "Physicality",
      "Tactical awareness"
    ],
    "weaknesses": [
      "Passing",
      "Defending"
    ]
  },
  {
    "id": "james-justin",
    "name": "James Justin",
    "age": 21,
    "position": "DF",
    "role": "Attacking Fullback",
    "club": "Leeds",
    "league": "Premier League",
    "nation": "Spain",
    "value": 24000000,
    "rating": 83,
    "general": {
      "apps": 21,
      "mins": 1893,
      "goals": 2,
      "assists": 1,
      "yellowCards": 4,
      "redCards": 0
    },
    "attributes": {
      "pace": 73,
      "dribbling": 71,
      "passing": 72,
      "defending": 94,
      "physicality": 86,
      "tactical": 87,
      "workrate": 87
    },
    "detailedStats": {
      "goalsPer90": 0.1,
      "shotsOnTargetPer90": 0.7,
      "expectedGoals": 1.8,
      "shotConversionRate": 12.4,
      "touchesInBoxPer90": 1.2,
      "chancesCreated": 23,
      "dribblesCompletedPer90": 1.0,
      "keyPassesPer90": 0.45,
      "tacklesWonPer90": 2.6,
      "interceptionsPer90": 1.1,
      "clearancesPer90": 3.8,
      "aerialDuelWinPercentage": 78.5,
      "tackledDribblerRate": 58.8,
      "progressivePassesPer90": 2.5,
      "longPassesCompletedPer90": 1.6,
      "passingAccuracy": 83.8
    },
    "leagueBenchmarks": [
      {
        "metric": "Passing Accuracy %",
        "player": 83.8,
        "avg": 82.0,
        "elite": 89.0
      },
      {
        "metric": "Clearances per 90",
        "player": 3.8,
        "avg": 2.6,
        "elite": 4.0
      },
      {
        "metric": "Aerial Duel Win %",
        "player": 78.5,
        "avg": 54.5,
        "elite": 68.0
      },
      {
        "metric": "Tackles Won per 90",
        "player": 2.6,
        "avg": 1.1,
        "elite": 2.0
      }
    ],
    "heatmap": [
      {
        "x": 14,
        "y": 25,
        "r": 38,
        "v": 0.8
      },
      {
        "x": 14,
        "y": 45,
        "r": 40,
        "v": 0.85
      },
      {
        "x": 14,
        "y": 65,
        "r": 35,
        "v": 0.7
      },
      {
        "x": 14,
        "y": 12,
        "r": 30,
        "v": 0.6
      }
    ],
    "strengths": [
      "Defending",
      "Tactical awareness",
      "Aerial Dominance"
    ],
    "weaknesses": [
      "Dribbling",
      "Passing"
    ]
  },
  {
    "id": "alisson-becker",
    "name": "Alisson Becker",
    "age": 26,
    "position": "GK",
    "role": "Sweeper Keeper",
    "club": "Liverpool",
    "league": "Premier League",
    "nation": "England",
    "value": 32400000,
    "rating": 83,
    "general": {
      "apps": 26,
      "mins": 2340,
      "goals": 0,
      "assists": 0,
      "yellowCards": 1,
      "redCards": 0
    },
    "attributes": {
      "pace": 60,
      "dribbling": 55,
      "passing": 78,
      "defending": 93,
      "physicality": 86,
      "tactical": 76,
      "workrate": 93
    },
    "detailedStats": {
      "savePercentage": 76.4,
      "cleanSheets": 8,
      "goalsConceded": 31,
      "psxgDifference": 3.2,
      "passingAccuracy": 90.0,
      "sweeperActionsPer90": 0.9,
      "averageDistanceOfSweeperActions": 13.0
    },
    "leagueBenchmarks": [
      {
        "metric": "Save %",
        "player": 76.4,
        "avg": 69.5,
        "elite": 77.0
      },
      {
        "metric": "Clean Sheets",
        "player": 8,
        "avg": 4.5,
        "elite": 10.0
      },
      {
        "metric": "Sweeper Actions p90",
        "player": 0.9,
        "avg": 0.6,
        "elite": 1.2
      },
      {
        "metric": "Passing Accuracy %",
        "player": 90.0,
        "avg": 73.0,
        "elite": 82.0
      }
    ],
    "heatmap": [
      {
        "x": 50,
        "y": 6,
        "r": 35,
        "v": 0.98
      },
      {
        "x": 50,
        "y": 14,
        "r": 28,
        "v": 0.7
      },
      {
        "x": 45,
        "y": 8,
        "r": 22,
        "v": 0.55
      },
      {
        "x": 55,
        "y": 8,
        "r": 22,
        "v": 0.55
      }
    ],
    "strengths": [
      "Defending",
      "Workrate",
      "Reflexes"
    ],
    "weaknesses": [
      "Dribbling",
      "Pace"
    ]
  },
  {
    "id": "giorgi-mamardashvili",
    "name": "Giorgi Mamardashvili",
    "age": 27,
    "position": "GK",
    "role": "Sweeper Keeper",
    "club": "Liverpool",
    "league": "Premier League",
    "nation": "Spain",
    "value": 24600000,
    "rating": 74,
    "general": {
      "apps": 10,
      "mins": 867,
      "goals": 0,
      "assists": 0,
      "yellowCards": 0,
      "redCards": 0
    },
    "attributes": {
      "pace": 60,
      "dribbling": 55,
      "passing": 68,
      "defending": 88,
      "physicality": 73,
      "tactical": 71,
      "workrate": 72
    },
    "detailedStats": {
      "savePercentage": 71.8,
      "cleanSheets": 2,
      "goalsConceded": 18,
      "psxgDifference": 0.8,
      "passingAccuracy": 83.8,
      "sweeperActionsPer90": 0.7,
      "averageDistanceOfSweeperActions": 12.6
    },
    "leagueBenchmarks": [
      {
        "metric": "Save %",
        "player": 71.8,
        "avg": 69.5,
        "elite": 77.0
      },
      {
        "metric": "Clean Sheets",
        "player": 2,
        "avg": 4.5,
        "elite": 10.0
      },
      {
        "metric": "Sweeper Actions p90",
        "player": 0.7,
        "avg": 0.6,
        "elite": 1.2
      },
      {
        "metric": "Passing Accuracy %",
        "player": 83.8,
        "avg": 73.0,
        "elite": 82.0
      }
    ],
    "heatmap": [
      {
        "x": 50,
        "y": 6,
        "r": 35,
        "v": 0.98
      },
      {
        "x": 50,
        "y": 14,
        "r": 28,
        "v": 0.7
      },
      {
        "x": 45,
        "y": 8,
        "r": 22,
        "v": 0.55
      },
      {
        "x": 55,
        "y": 8,
        "r": 22,
        "v": 0.55
      }
    ],
    "strengths": [
      "Defending",
      "Physicality"
    ],
    "weaknesses": [
      "Dribbling",
      "Pace"
    ]
  },
  {
    "id": "freddie-woodman",
    "name": "Freddie Woodman",
    "age": 29,
    "position": "GK",
    "role": "Sweeper Keeper",
    "club": "Liverpool",
    "league": "Premier League",
    "nation": "England",
    "value": 23400000,
    "rating": 70,
    "general": {
      "apps": 2,
      "mins": 212,
      "goals": 0,
      "assists": 0,
      "yellowCards": 0,
      "redCards": 0
    },
    "attributes": {
      "pace": 60,
      "dribbling": 55,
      "passing": 59,
      "defending": 79,
      "physicality": 60,
      "tactical": 67,
      "workrate": 63
    },
    "detailedStats": {
      "savePercentage": 66.8,
      "cleanSheets": 0,
      "goalsConceded": 4,
      "psxgDifference": 0.0,
      "passingAccuracy": 74.2,
      "sweeperActionsPer90": 0.5,
      "averageDistanceOfSweeperActions": 12.2
    },
    "leagueBenchmarks": [
      {
        "metric": "Save %",
        "player": 66.8,
        "avg": 69.5,
        "elite": 77.0
      },
      {
        "metric": "Clean Sheets",
        "player": 0,
        "avg": 4.5,
        "elite": 10.0
      },
      {
        "metric": "Sweeper Actions p90",
        "player": 0.5,
        "avg": 0.6,
        "elite": 1.2
      },
      {
        "metric": "Passing Accuracy %",
        "player": 74.2,
        "avg": 73.0,
        "elite": 82.0
      }
    ],
    "heatmap": [
      {
        "x": 50,
        "y": 6,
        "r": 35,
        "v": 0.98
      },
      {
        "x": 50,
        "y": 14,
        "r": 28,
        "v": 0.7
      },
      {
        "x": 45,
        "y": 8,
        "r": 22,
        "v": 0.55
      },
      {
        "x": 55,
        "y": 8,
        "r": 22,
        "v": 0.55
      }
    ],
    "strengths": [
      "Defending",
      "Tactical awareness"
    ],
    "weaknesses": [
      "Dribbling",
      "Passing"
    ]
  },
  {
    "id": "jeremie-frimpong",
    "name": "Jeremie Frimpong",
    "age": 30,
    "position": "DF",
    "role": "Attacking Fullback",
    "club": "Liverpool",
    "league": "Premier League",
    "nation": "France",
    "value": 34200000,
    "rating": 79,
    "general": {
      "apps": 12,
      "mins": 1032,
      "goals": 0,
      "assists": 5,
      "yellowCards": 1,
      "redCards": 0
    },
    "attributes": {
      "pace": 72,
      "dribbling": 72,
      "passing": 76,
      "defending": 81,
      "physicality": 63,
      "tactical": 79,
      "workrate": 74
    },
    "detailedStats": {
      "goalsPer90": 0.0,
      "shotsOnTargetPer90": 0.5,
      "expectedGoals": 0.5,
      "shotConversionRate": 10.0,
      "touchesInBoxPer90": 1.1,
      "chancesCreated": 30,
      "dribblesCompletedPer90": 1.2,
      "keyPassesPer90": 1.07,
      "tacklesWonPer90": 1.4,
      "interceptionsPer90": 1.0,
      "clearancesPer90": 2.2,
      "aerialDuelWinPercentage": 61.7,
      "tackledDribblerRate": 55.6,
      "progressivePassesPer90": 2.7,
      "longPassesCompletedPer90": 1.8,
      "passingAccuracy": 84.9
    },
    "leagueBenchmarks": [
      {
        "metric": "Passing Accuracy %",
        "player": 84.9,
        "avg": 82.0,
        "elite": 89.0
      },
      {
        "metric": "Clearances per 90",
        "player": 2.2,
        "avg": 2.6,
        "elite": 4.0
      },
      {
        "metric": "Aerial Duel Win %",
        "player": 61.7,
        "avg": 54.5,
        "elite": 68.0
      },
      {
        "metric": "Tackles Won per 90",
        "player": 1.4,
        "avg": 1.1,
        "elite": 2.0
      }
    ],
    "heatmap": [
      {
        "x": 14,
        "y": 25,
        "r": 38,
        "v": 0.8
      },
      {
        "x": 14,
        "y": 45,
        "r": 40,
        "v": 0.85
      },
      {
        "x": 14,
        "y": 65,
        "r": 35,
        "v": 0.7
      },
      {
        "x": 14,
        "y": 12,
        "r": 30,
        "v": 0.6
      }
    ],
    "strengths": [
      "Defending",
      "Tactical awareness"
    ],
    "weaknesses": [
      "Dribbling",
      "Physicality"
    ]
  },
  {
    "id": "milos-kerkez",
    "name": "Milos Kerkez",
    "age": 31,
    "position": "DF",
    "role": "Attacking Fullback",
    "club": "Liverpool",
    "league": "Premier League",
    "nation": "Brazil",
    "value": 33600000,
    "rating": 82,
    "general": {
      "apps": 27,
      "mins": 2251,
      "goals": 2,
      "assists": 1,
      "yellowCards": 4,
      "redCards": 0
    },
    "attributes": {
      "pace": 70,
      "dribbling": 77,
      "passing": 87,
      "defending": 94,
      "physicality": 83,
      "tactical": 89,
      "workrate": 92
    },
    "detailedStats": {
      "goalsPer90": 0.08,
      "shotsOnTargetPer90": 0.6,
      "expectedGoals": 1.5,
      "shotConversionRate": 12.4,
      "touchesInBoxPer90": 1.0,
      "chancesCreated": 51,
      "dribblesCompletedPer90": 1.8,
      "keyPassesPer90": 0.83,
      "tacklesWonPer90": 2.4,
      "interceptionsPer90": 1.1,
      "clearancesPer90": 3.7,
      "aerialDuelWinPercentage": 76.7,
      "tackledDribblerRate": 59.9,
      "progressivePassesPer90": 3.6,
      "longPassesCompletedPer90": 2.4,
      "passingAccuracy": 88.3
    },
    "leagueBenchmarks": [
      {
        "metric": "Passing Accuracy %",
        "player": 88.3,
        "avg": 82.0,
        "elite": 89.0
      },
      {
        "metric": "Clearances per 90",
        "player": 3.7,
        "avg": 2.6,
        "elite": 4.0
      },
      {
        "metric": "Aerial Duel Win %",
        "player": 76.7,
        "avg": 54.5,
        "elite": 68.0
      },
      {
        "metric": "Tackles Won per 90",
        "player": 2.4,
        "avg": 1.1,
        "elite": 2.0
      }
    ],
    "heatmap": [
      {
        "x": 86,
        "y": 25,
        "r": 38,
        "v": 0.8
      },
      {
        "x": 86,
        "y": 45,
        "r": 40,
        "v": 0.85
      },
      {
        "x": 86,
        "y": 65,
        "r": 35,
        "v": 0.7
      },
      {
        "x": 86,
        "y": 12,
        "r": 30,
        "v": 0.6
      }
    ],
    "strengths": [
      "Defending",
      "Workrate",
      "Aerial Dominance"
    ],
    "weaknesses": [
      "Dribbling",
      "Pace"
    ]
  },
  {
    "id": "andrew-robertson",
    "name": "Andrew Robertson",
    "age": 32,
    "position": "DF",
    "role": "Attacking Fullback",
    "club": "Liverpool",
    "league": "Premier League",
    "nation": "England",
    "value": 34200000,
    "rating": 77,
    "general": {
      "apps": 11,
      "mins": 1165,
      "goals": 1,
      "assists": 0,
      "yellowCards": 0,
      "redCards": 0
    },
    "attributes": {
      "pace": 69,
      "dribbling": 72,
      "passing": 81,
      "defending": 87,
      "physicality": 70,
      "tactical": 82,
      "workrate": 76
    },
    "detailedStats": {
      "goalsPer90": 0.08,
      "shotsOnTargetPer90": 0.6,
      "expectedGoals": 1.1,
      "shotConversionRate": 11.2,
      "touchesInBoxPer90": 0.9,
      "chancesCreated": 39,
      "dribblesCompletedPer90": 1.5,
      "keyPassesPer90": 1.23,
      "tacklesWonPer90": 1.8,
      "interceptionsPer90": 1.0,
      "clearancesPer90": 2.7,
      "aerialDuelWinPercentage": 67.0,
      "tackledDribblerRate": 56.8,
      "progressivePassesPer90": 3.1,
      "longPassesCompletedPer90": 2.1,
      "passingAccuracy": 86.4
    },
    "leagueBenchmarks": [
      {
        "metric": "Passing Accuracy %",
        "player": 86.4,
        "avg": 82.0,
        "elite": 89.0
      },
      {
        "metric": "Clearances per 90",
        "player": 2.7,
        "avg": 2.6,
        "elite": 4.0
      },
      {
        "metric": "Aerial Duel Win %",
        "player": 67.0,
        "avg": 54.5,
        "elite": 68.0
      },
      {
        "metric": "Tackles Won per 90",
        "player": 1.8,
        "avg": 1.1,
        "elite": 2.0
      }
    ],
    "heatmap": [
      {
        "x": 14,
        "y": 25,
        "r": 38,
        "v": 0.8
      },
      {
        "x": 14,
        "y": 45,
        "r": 40,
        "v": 0.85
      },
      {
        "x": 14,
        "y": 65,
        "r": 35,
        "v": 0.7
      },
      {
        "x": 14,
        "y": 12,
        "r": 30,
        "v": 0.6
      }
    ],
    "strengths": [
      "Defending",
      "Tactical awareness"
    ],
    "weaknesses": [
      "Physicality",
      "Pace"
    ]
  },
  {
    "id": "virgil-van-dijk",
    "name": "Virgil van Dijk",
    "age": 33,
    "position": "DF",
    "role": "Attacking Fullback",
    "club": "Liverpool",
    "league": "Premier League",
    "nation": "Spain",
    "value": 36600000,
    "rating": 93,
    "general": {
      "apps": 38,
      "mins": 3420,
      "goals": 6,
      "assists": 1,
      "yellowCards": 4,
      "redCards": 0
    },
    "attributes": {
      "pace": 84,
      "dribbling": 83,
      "passing": 74,
      "defending": 94,
      "physicality": 94,
      "tactical": 95,
      "workrate": 96
    },
    "detailedStats": {
      "goalsPer90": 0.16,
      "shotsOnTargetPer90": 0.7,
      "expectedGoals": 3.8,
      "shotConversionRate": 17.2,
      "touchesInBoxPer90": 2.1,
      "chancesCreated": 26,
      "dribblesCompletedPer90": 1.1,
      "keyPassesPer90": 0.28,
      "tacklesWonPer90": 4.9,
      "interceptionsPer90": 1.4,
      "clearancesPer90": 7.3,
      "aerialDuelWinPercentage": 80.0,
      "tackledDribblerRate": 68.8,
      "progressivePassesPer90": 2.6,
      "longPassesCompletedPer90": 1.7,
      "passingAccuracy": 84.3
    },
    "leagueBenchmarks": [
      {
        "metric": "Passing Accuracy %",
        "player": 84.3,
        "avg": 82.0,
        "elite": 89.0
      },
      {
        "metric": "Clearances per 90",
        "player": 7.3,
        "avg": 2.6,
        "elite": 4.0
      },
      {
        "metric": "Aerial Duel Win %",
        "player": 80.0,
        "avg": 54.5,
        "elite": 68.0
      },
      {
        "metric": "Tackles Won per 90",
        "player": 4.9,
        "avg": 1.1,
        "elite": 2.0
      }
    ],
    "heatmap": [
      {
        "x": 86,
        "y": 25,
        "r": 38,
        "v": 0.8
      },
      {
        "x": 86,
        "y": 45,
        "r": 40,
        "v": 0.85
      },
      {
        "x": 86,
        "y": 65,
        "r": 35,
        "v": 0.7
      },
      {
        "x": 86,
        "y": 12,
        "r": 30,
        "v": 0.6
      }
    ],
    "strengths": [
      "Workrate",
      "Tactical awareness",
      "Aerial Dominance"
    ],
    "weaknesses": [
      "Dribbling",
      "Passing"
    ]
  },
  {
    "id": "ibrahima-konat\u00e9",
    "name": "Ibrahima Konat\u00e9",
    "age": 34,
    "position": "DF",
    "role": "Attacking Fullback",
    "club": "Liverpool",
    "league": "Premier League",
    "nation": "Spain",
    "value": 32400000,
    "rating": 88,
    "general": {
      "apps": 36,
      "mins": 3090,
      "goals": 1,
      "assists": 0,
      "yellowCards": 7,
      "redCards": 0
    },
    "attributes": {
      "pace": 69,
      "dribbling": 66,
      "passing": 70,
      "defending": 94,
      "physicality": 94,
      "tactical": 91,
      "workrate": 96
    },
    "detailedStats": {
      "goalsPer90": 0.03,
      "shotsOnTargetPer90": 0.5,
      "expectedGoals": 1.2,
      "shotConversionRate": 11.2,
      "touchesInBoxPer90": 0.9,
      "chancesCreated": 20,
      "dribblesCompletedPer90": 0.9,
      "keyPassesPer90": 0.23,
      "tacklesWonPer90": 3.6,
      "interceptionsPer90": 1.2,
      "clearancesPer90": 5.4,
      "aerialDuelWinPercentage": 80.0,
      "tackledDribblerRate": 60.6,
      "progressivePassesPer90": 2.3,
      "longPassesCompletedPer90": 1.5,
      "passingAccuracy": 83.2
    },
    "leagueBenchmarks": [
      {
        "metric": "Passing Accuracy %",
        "player": 83.2,
        "avg": 82.0,
        "elite": 89.0
      },
      {
        "metric": "Clearances per 90",
        "player": 5.4,
        "avg": 2.6,
        "elite": 4.0
      },
      {
        "metric": "Aerial Duel Win %",
        "player": 80.0,
        "avg": 54.5,
        "elite": 68.0
      },
      {
        "metric": "Tackles Won per 90",
        "player": 3.6,
        "avg": 1.1,
        "elite": 2.0
      }
    ],
    "heatmap": [
      {
        "x": 14,
        "y": 25,
        "r": 38,
        "v": 0.8
      },
      {
        "x": 14,
        "y": 45,
        "r": 40,
        "v": 0.85
      },
      {
        "x": 14,
        "y": 65,
        "r": 35,
        "v": 0.7
      },
      {
        "x": 14,
        "y": 12,
        "r": 30,
        "v": 0.6
      }
    ],
    "strengths": [
      "Defending",
      "Workrate",
      "Aerial Dominance"
    ],
    "weaknesses": [
      "Dribbling",
      "Pace"
    ]
  },
  {
    "id": "conor-bradley",
    "name": "Conor Bradley",
    "age": 20,
    "position": "DF",
    "role": "Central Defender",
    "club": "Liverpool",
    "league": "Premier League",
    "nation": "England",
    "value": 29400000,
    "rating": 76,
    "general": {
      "apps": 12,
      "mins": 928,
      "goals": 0,
      "assists": 2,
      "yellowCards": 5,
      "redCards": 0
    },
    "attributes": {
      "pace": 67,
      "dribbling": 61,
      "passing": 67,
      "defending": 81,
      "physicality": 65,
      "tactical": 73,
      "workrate": 73
    },
    "detailedStats": {
      "goalsPer90": 0.0,
      "shotsOnTargetPer90": 0.5,
      "expectedGoals": 0.2,
      "shotConversionRate": 10.0,
      "touchesInBoxPer90": 0.7,
      "chancesCreated": 13,
      "dribblesCompletedPer90": 0.8,
      "keyPassesPer90": 0.51,
      "tacklesWonPer90": 1.5,
      "interceptionsPer90": 0.9,
      "clearancesPer90": 2.3,
      "aerialDuelWinPercentage": 62.9,
      "tackledDribblerRate": 53.2,
      "progressivePassesPer90": 2.0,
      "longPassesCompletedPer90": 1.4,
      "passingAccuracy": 82.1
    },
    "leagueBenchmarks": [
      {
        "metric": "Passing Accuracy %",
        "player": 82.1,
        "avg": 82.0,
        "elite": 89.0
      },
      {
        "metric": "Clearances per 90",
        "player": 2.3,
        "avg": 2.6,
        "elite": 4.0
      },
      {
        "metric": "Aerial Duel Win %",
        "player": 62.9,
        "avg": 54.5,
        "elite": 68.0
      },
      {
        "metric": "Tackles Won per 90",
        "player": 1.5,
        "avg": 1.1,
        "elite": 2.0
      }
    ],
    "heatmap": [
      {
        "x": 50,
        "y": 20,
        "r": 45,
        "v": 0.9
      },
      {
        "x": 42,
        "y": 18,
        "r": 32,
        "v": 0.8
      },
      {
        "x": 58,
        "y": 18,
        "r": 32,
        "v": 0.8
      },
      {
        "x": 50,
        "y": 10,
        "r": 28,
        "v": 0.6
      }
    ],
    "strengths": [
      "Defending",
      "Tactical awareness"
    ],
    "weaknesses": [
      "Dribbling",
      "Physicality"
    ]
  },
  {
    "id": "joe-gomez",
    "name": "Joe Gomez",
    "age": 21,
    "position": "DF",
    "role": "Central Defender",
    "club": "Liverpool",
    "league": "Premier League",
    "nation": "Spain",
    "value": 29400000,
    "rating": 74,
    "general": {
      "apps": 7,
      "mins": 594,
      "goals": 0,
      "assists": 2,
      "yellowCards": 4,
      "redCards": 0
    },
    "attributes": {
      "pace": 66,
      "dribbling": 59,
      "passing": 65,
      "defending": 79,
      "physicality": 63,
      "tactical": 70,
      "workrate": 68
    },
    "detailedStats": {
      "goalsPer90": 0.0,
      "shotsOnTargetPer90": 0.5,
      "expectedGoals": 0.3,
      "shotConversionRate": 10.0,
      "touchesInBoxPer90": 0.6,
      "chancesCreated": 9,
      "dribblesCompletedPer90": 0.7,
      "keyPassesPer90": 0.59,
      "tacklesWonPer90": 1.4,
      "interceptionsPer90": 0.9,
      "clearancesPer90": 2.1,
      "aerialDuelWinPercentage": 61.1,
      "tackledDribblerRate": 52.3,
      "progressivePassesPer90": 1.9,
      "longPassesCompletedPer90": 1.3,
      "passingAccuracy": 81.6
    },
    "leagueBenchmarks": [
      {
        "metric": "Passing Accuracy %",
        "player": 81.6,
        "avg": 82.0,
        "elite": 89.0
      },
      {
        "metric": "Clearances per 90",
        "player": 2.1,
        "avg": 2.6,
        "elite": 4.0
      },
      {
        "metric": "Aerial Duel Win %",
        "player": 61.1,
        "avg": 54.5,
        "elite": 68.0
      },
      {
        "metric": "Tackles Won per 90",
        "player": 1.4,
        "avg": 1.1,
        "elite": 2.0
      }
    ],
    "heatmap": [
      {
        "x": 50,
        "y": 20,
        "r": 45,
        "v": 0.9
      },
      {
        "x": 42,
        "y": 18,
        "r": 32,
        "v": 0.8
      },
      {
        "x": 58,
        "y": 18,
        "r": 32,
        "v": 0.8
      },
      {
        "x": 50,
        "y": 10,
        "r": 28,
        "v": 0.6
      }
    ],
    "strengths": [
      "Defending",
      "Tactical awareness"
    ],
    "weaknesses": [
      "Dribbling",
      "Physicality"
    ]
  },
  {
    "id": "mohamed-salah",
    "name": "Mohamed Salah",
    "age": 26,
    "position": "MF",
    "role": "Attacking Playmaker",
    "club": "Liverpool",
    "league": "Premier League",
    "nation": "England",
    "value": 84000000,
    "rating": 87,
    "general": {
      "apps": 23,
      "mins": 2144,
      "goals": 7,
      "assists": 7,
      "yellowCards": 1,
      "redCards": 0
    },
    "attributes": {
      "pace": 92,
      "dribbling": 96,
      "passing": 97,
      "defending": 84,
      "physicality": 89,
      "tactical": 95,
      "workrate": 90
    },
    "detailedStats": {
      "goalsPer90": 0.29,
      "shotsOnTargetPer90": 0.9,
      "expectedGoals": 8.2,
      "shotConversionRate": 18.4,
      "touchesInBoxPer90": 3.2,
      "chancesCreated": 92,
      "dribblesCompletedPer90": 2.9,
      "keyPassesPer90": 1.55,
      "passingAccuracy": 94.0,
      "progressivePassesPer90": 9.4,
      "tacklesWonPer90": 2.5,
      "interceptionsPer90": 1.0,
      "ballRecoveriesPer90": 7.0
    },
    "leagueBenchmarks": [
      {
        "metric": "Key Passes per 90",
        "player": 1.55,
        "avg": 0.9,
        "elite": 2.2
      },
      {
        "metric": "Progressive Passes p90",
        "player": 9.4,
        "avg": 2.8,
        "elite": 6.2
      },
      {
        "metric": "Chances Created",
        "player": 92,
        "avg": 16,
        "elite": 55
      },
      {
        "metric": "Passing Accuracy %",
        "player": 94.0,
        "avg": 79.5,
        "elite": 87.0
      }
    ],
    "heatmap": [
      {
        "x": 50,
        "y": 64,
        "r": 42,
        "v": 0.9
      },
      {
        "x": 40,
        "y": 55,
        "r": 35,
        "v": 0.75
      },
      {
        "x": 60,
        "y": 55,
        "r": 35,
        "v": 0.75
      },
      {
        "x": 50,
        "y": 76,
        "r": 30,
        "v": 0.8
      }
    ],
    "strengths": [
      "Dribbling",
      "Passing",
      "Creative Vision"
    ],
    "weaknesses": [
      "Defending",
      "Physicality"
    ]
  },
  {
    "id": "florian-wirtz",
    "name": "Florian Wirtz",
    "age": 27,
    "position": "MF",
    "role": "Attacking Playmaker",
    "club": "Liverpool",
    "league": "Premier League",
    "nation": "Spain",
    "value": 49800000,
    "rating": 87,
    "general": {
      "apps": 27,
      "mins": 2374,
      "goals": 5,
      "assists": 4,
      "yellowCards": 1,
      "redCards": 0
    },
    "attributes": {
      "pace": 92,
      "dribbling": 96,
      "passing": 97,
      "defending": 85,
      "physicality": 90,
      "tactical": 95,
      "workrate": 93
    },
    "detailedStats": {
      "goalsPer90": 0.19,
      "shotsOnTargetPer90": 0.8,
      "expectedGoals": 6.8,
      "shotConversionRate": 16.0,
      "touchesInBoxPer90": 2.7,
      "chancesCreated": 113,
      "dribblesCompletedPer90": 3.4,
      "keyPassesPer90": 1.72,
      "passingAccuracy": 94.0,
      "progressivePassesPer90": 11.1,
      "tacklesWonPer90": 2.6,
      "interceptionsPer90": 1.0,
      "ballRecoveriesPer90": 7.0
    },
    "leagueBenchmarks": [
      {
        "metric": "Key Passes per 90",
        "player": 1.72,
        "avg": 0.9,
        "elite": 2.2
      },
      {
        "metric": "Progressive Passes p90",
        "player": 11.1,
        "avg": 2.8,
        "elite": 6.2
      },
      {
        "metric": "Chances Created",
        "player": 113,
        "avg": 16,
        "elite": 55
      },
      {
        "metric": "Passing Accuracy %",
        "player": 94.0,
        "avg": 79.5,
        "elite": 87.0
      }
    ],
    "heatmap": [
      {
        "x": 50,
        "y": 64,
        "r": 42,
        "v": 0.9
      },
      {
        "x": 40,
        "y": 55,
        "r": 35,
        "v": 0.75
      },
      {
        "x": 60,
        "y": 55,
        "r": 35,
        "v": 0.75
      },
      {
        "x": 50,
        "y": 76,
        "r": 30,
        "v": 0.8
      }
    ],
    "strengths": [
      "Dribbling",
      "Passing"
    ],
    "weaknesses": [
      "Defending",
      "Physicality"
    ]
  },
  {
    "id": "cody-gakpo",
    "name": "Cody Gakpo",
    "age": 29,
    "position": "MF",
    "role": "Attacking Playmaker",
    "club": "Liverpool",
    "league": "Premier League",
    "nation": "England",
    "value": 43800000,
    "rating": 88,
    "general": {
      "apps": 32,
      "mins": 2736,
      "goals": 7,
      "assists": 5,
      "yellowCards": 3,
      "redCards": 0
    },
    "attributes": {
      "pace": 92,
      "dribbling": 96,
      "passing": 97,
      "defending": 86,
      "physicality": 91,
      "tactical": 95,
      "workrate": 96
    },
    "detailedStats": {
      "goalsPer90": 0.23,
      "shotsOnTargetPer90": 0.8,
      "expectedGoals": 8.3,
      "shotConversionRate": 18.4,
      "touchesInBoxPer90": 3.3,
      "chancesCreated": 89,
      "dribblesCompletedPer90": 2.8,
      "keyPassesPer90": 1.18,
      "passingAccuracy": 93.9,
      "progressivePassesPer90": 9.1,
      "tacklesWonPer90": 2.6,
      "interceptionsPer90": 1.0,
      "ballRecoveriesPer90": 7.1
    },
    "leagueBenchmarks": [
      {
        "metric": "Key Passes per 90",
        "player": 1.18,
        "avg": 0.9,
        "elite": 2.2
      },
      {
        "metric": "Progressive Passes p90",
        "player": 9.1,
        "avg": 2.8,
        "elite": 6.2
      },
      {
        "metric": "Chances Created",
        "player": 89,
        "avg": 16,
        "elite": 55
      },
      {
        "metric": "Passing Accuracy %",
        "player": 93.9,
        "avg": 79.5,
        "elite": 87.0
      }
    ],
    "heatmap": [
      {
        "x": 50,
        "y": 64,
        "r": 42,
        "v": 0.9
      },
      {
        "x": 40,
        "y": 55,
        "r": 35,
        "v": 0.75
      },
      {
        "x": 60,
        "y": 55,
        "r": 35,
        "v": 0.75
      },
      {
        "x": 50,
        "y": 76,
        "r": 30,
        "v": 0.8
      }
    ],
    "strengths": [
      "Dribbling",
      "Passing"
    ],
    "weaknesses": [
      "Defending",
      "Physicality"
    ]
  },
  {
    "id": "federico-chiesa",
    "name": "Federico Chiesa",
    "age": 30,
    "position": "MF",
    "role": "Box-to-Box Midfielder",
    "club": "Liverpool",
    "league": "Premier League",
    "nation": "France",
    "value": 37800000,
    "rating": 75,
    "general": {
      "apps": 1,
      "mins": 317,
      "goals": 2,
      "assists": 1,
      "yellowCards": 3,
      "redCards": 0
    },
    "attributes": {
      "pace": 69,
      "dribbling": 64,
      "passing": 63,
      "defending": 58,
      "physicality": 63,
      "tactical": 73,
      "workrate": 64
    },
    "detailedStats": {
      "goalsPer90": 0.57,
      "shotsOnTargetPer90": 1.4,
      "expectedGoals": 1.4,
      "shotConversionRate": 12.4,
      "touchesInBoxPer90": 1.1,
      "chancesCreated": 5,
      "dribblesCompletedPer90": 0.6,
      "keyPassesPer90": 0.67,
      "passingAccuracy": 82.8,
      "progressivePassesPer90": 2.5,
      "tacklesWonPer90": 1.2,
      "interceptionsPer90": 0.6,
      "ballRecoveriesPer90": 4.3
    },
    "leagueBenchmarks": [
      {
        "metric": "Key Passes per 90",
        "player": 0.67,
        "avg": 0.9,
        "elite": 2.2
      },
      {
        "metric": "Progressive Passes p90",
        "player": 2.5,
        "avg": 2.8,
        "elite": 6.2
      },
      {
        "metric": "Chances Created",
        "player": 5,
        "avg": 16,
        "elite": 55
      },
      {
        "metric": "Passing Accuracy %",
        "player": 82.8,
        "avg": 79.5,
        "elite": 87.0
      }
    ],
    "heatmap": [
      {
        "x": 50,
        "y": 42,
        "r: ": 45,
        "v": 0.9
      },
      {
        "x": 44,
        "y": 35,
        "r": 38,
        "v": 0.8
      },
      {
        "x": 56,
        "y": 35,
        "r": 38,
        "v": 0.8
      },
      {
        "x": 50,
        "y": 55,
        "r": 35,
        "v": 0.75
      }
    ],
    "strengths": [
      "Tactical awareness",
      "Pace"
    ],
    "weaknesses": [
      "Defending",
      "Physicality"
    ]
  },
  {
    "id": "alexis-mac-allister",
    "name": "Alexis Mac Allister",
    "age": 31,
    "position": "MF",
    "role": "Attacking Playmaker",
    "club": "Liverpool",
    "league": "Premier League",
    "nation": "Spain",
    "value": 36600000,
    "rating": 85,
    "general": {
      "apps": 31,
      "mins": 2654,
      "goals": 2,
      "assists": 5,
      "yellowCards": 7,
      "redCards": 0
    },
    "attributes": {
      "pace": 78,
      "dribbling": 92,
      "passing": 97,
      "defending": 81,
      "physicality": 86,
      "tactical": 95,
      "workrate": 96
    },
    "detailedStats": {
      "goalsPer90": 0.07,
      "shotsOnTargetPer90": 0.6,
      "expectedGoals": 3.9,
      "shotConversionRate": 12.4,
      "touchesInBoxPer90": 1.7,
      "chancesCreated": 70,
      "dribblesCompletedPer90": 2.3,
      "keyPassesPer90": 0.95,
      "passingAccuracy": 91.4,
      "progressivePassesPer90": 7.6,
      "tacklesWonPer90": 2.4,
      "interceptionsPer90": 0.8,
      "ballRecoveriesPer90": 6.7
    },
    "leagueBenchmarks": [
      {
        "metric": "Key Passes per 90",
        "player": 0.95,
        "avg": 0.9,
        "elite": 2.2
      },
      {
        "metric": "Progressive Passes p90",
        "player": 7.6,
        "avg": 2.8,
        "elite": 6.2
      },
      {
        "metric": "Chances Created",
        "player": 70,
        "avg": 16,
        "elite": 55
      },
      {
        "metric": "Passing Accuracy %",
        "player": 91.4,
        "avg": 79.5,
        "elite": 87.0
      }
    ],
    "heatmap": [
      {
        "x": 50,
        "y": 64,
        "r": 42,
        "v": 0.9
      },
      {
        "x": 40,
        "y": 55,
        "r": 35,
        "v": 0.75
      },
      {
        "x": 60,
        "y": 55,
        "r": 35,
        "v": 0.75
      },
      {
        "x": 50,
        "y": 76,
        "r": 30,
        "v": 0.8
      }
    ],
    "strengths": [
      "Passing",
      "Workrate"
    ],
    "weaknesses": [
      "Defending",
      "Pace"
    ]
  },
  {
    "id": "dominik-szoboszlai",
    "name": "Dominik Szoboszlai",
    "age": 32,
    "position": "MF",
    "role": "Attacking Playmaker",
    "club": "Liverpool",
    "league": "Premier League",
    "nation": "England",
    "value": 42600000,
    "rating": 92,
    "general": {
      "apps": 36,
      "mins": 3232,
      "goals": 6,
      "assists": 7,
      "yellowCards": 8,
      "redCards": 1
    },
    "attributes": {
      "pace": 80,
      "dribbling": 96,
      "passing": 97,
      "defending": 88,
      "physicality": 94,
      "tactical": 95,
      "workrate": 96
    },
    "detailedStats": {
      "goalsPer90": 0.17,
      "shotsOnTargetPer90": 0.8,
      "expectedGoals": 4.8,
      "shotConversionRate": 17.2,
      "touchesInBoxPer90": 1.9,
      "chancesCreated": 165,
      "dribblesCompletedPer90": 4.8,
      "keyPassesPer90": 1.84,
      "passingAccuracy": 94.0,
      "progressivePassesPer90": 15.2,
      "tacklesWonPer90": 3.7,
      "interceptionsPer90": 1.2,
      "ballRecoveriesPer90": 9.3
    },
    "leagueBenchmarks": [
      {
        "metric": "Key Passes per 90",
        "player": 1.84,
        "avg": 0.9,
        "elite": 2.2
      },
      {
        "metric": "Progressive Passes p90",
        "player": 15.2,
        "avg": 2.8,
        "elite": 6.2
      },
      {
        "metric": "Chances Created",
        "player": 165,
        "avg": 16,
        "elite": 55
      },
      {
        "metric": "Passing Accuracy %",
        "player": 94.0,
        "avg": 79.5,
        "elite": 87.0
      }
    ],
    "heatmap": [
      {
        "x": 50,
        "y": 64,
        "r": 42,
        "v": 0.9
      },
      {
        "x": 40,
        "y": 55,
        "r": 35,
        "v": 0.75
      },
      {
        "x": 60,
        "y": 55,
        "r": 35,
        "v": 0.75
      },
      {
        "x": 50,
        "y": 76,
        "r": 30,
        "v": 0.8
      }
    ],
    "strengths": [
      "Dribbling",
      "Passing",
      "Creative Vision"
    ],
    "weaknesses": [
      "Defending",
      "Pace"
    ]
  },
  {
    "id": "curtis-jones",
    "name": "Curtis Jones",
    "age": 33,
    "position": "MF",
    "role": "Attacking Playmaker",
    "club": "Liverpool",
    "league": "Premier League",
    "nation": "Spain",
    "value": 32400000,
    "rating": 81,
    "general": {
      "apps": 18,
      "mins": 1923,
      "goals": 1,
      "assists": 3,
      "yellowCards": 2,
      "redCards": 0
    },
    "attributes": {
      "pace": 71,
      "dribbling": 80,
      "passing": 87,
      "defending": 77,
      "physicality": 82,
      "tactical": 91,
      "workrate": 87
    },
    "detailedStats": {
      "goalsPer90": 0.05,
      "shotsOnTargetPer90": 0.6,
      "expectedGoals": 2.2,
      "shotConversionRate": 11.2,
      "touchesInBoxPer90": 1.3,
      "chancesCreated": 51,
      "dribblesCompletedPer90": 1.8,
      "keyPassesPer90": 0.96,
      "passingAccuracy": 88.9,
      "progressivePassesPer90": 6.1,
      "tacklesWonPer90": 2.2,
      "interceptionsPer90": 0.8,
      "ballRecoveriesPer90": 6.2
    },
    "leagueBenchmarks": [
      {
        "metric": "Key Passes per 90",
        "player": 0.96,
        "avg": 0.9,
        "elite": 2.2
      },
      {
        "metric": "Progressive Passes p90",
        "player": 6.1,
        "avg": 2.8,
        "elite": 6.2
      },
      {
        "metric": "Chances Created",
        "player": 51,
        "avg": 16,
        "elite": 55
      },
      {
        "metric": "Passing Accuracy %",
        "player": 88.9,
        "avg": 79.5,
        "elite": 87.0
      }
    ],
    "heatmap": [
      {
        "x": 50,
        "y": 64,
        "r": 42,
        "v": 0.9
      },
      {
        "x": 40,
        "y": 55,
        "r": 35,
        "v": 0.75
      },
      {
        "x": 60,
        "y": 55,
        "r": 35,
        "v": 0.75
      },
      {
        "x": 50,
        "y": 76,
        "r": 30,
        "v": 0.8
      }
    ],
    "strengths": [
      "Passing",
      "Tactical awareness"
    ],
    "weaknesses": [
      "Defending",
      "Pace"
    ]
  },
  {
    "id": "ryan-gravenberch",
    "name": "Ryan Gravenberch",
    "age": 20,
    "position": "MF",
    "role": "Attacking Playmaker",
    "club": "Liverpool",
    "league": "Premier League",
    "nation": "England",
    "value": 32400000,
    "rating": 90,
    "general": {
      "apps": 34,
      "mins": 2991,
      "goals": 5,
      "assists": 5,
      "yellowCards": 5,
      "redCards": 0
    },
    "attributes": {
      "pace": 71,
      "dribbling": 83,
      "passing": 93,
      "defending": 88,
      "physicality": 94,
      "tactical": 95,
      "workrate": 96
    },
    "detailedStats": {
      "goalsPer90": 0.15,
      "shotsOnTargetPer90": 0.7,
      "expectedGoals": 1.9,
      "shotConversionRate": 16.0,
      "touchesInBoxPer90": 1.2,
      "chancesCreated": 62,
      "dribblesCompletedPer90": 2.1,
      "keyPassesPer90": 0.75,
      "passingAccuracy": 90.3,
      "progressivePassesPer90": 7.0,
      "tacklesWonPer90": 3.1,
      "interceptionsPer90": 0.9,
      "ballRecoveriesPer90": 8.1
    },
    "leagueBenchmarks": [
      {
        "metric": "Key Passes per 90",
        "player": 0.75,
        "avg": 0.9,
        "elite": 2.2
      },
      {
        "metric": "Progressive Passes p90",
        "player": 7.0,
        "avg": 2.8,
        "elite": 6.2
      },
      {
        "metric": "Chances Created",
        "player": 62,
        "avg": 16,
        "elite": 55
      },
      {
        "metric": "Passing Accuracy %",
        "player": 90.3,
        "avg": 79.5,
        "elite": 87.0
      }
    ],
    "heatmap": [
      {
        "x": 50,
        "y": 64,
        "r": 42,
        "v": 0.9
      },
      {
        "x": 40,
        "y": 55,
        "r": 35,
        "v": 0.75
      },
      {
        "x": 60,
        "y": 55,
        "r": 35,
        "v": 0.75
      },
      {
        "x": 50,
        "y": 76,
        "r": 30,
        "v": 0.8
      }
    ],
    "strengths": [
      "Workrate",
      "Tactical awareness"
    ],
    "weaknesses": [
      "Dribbling",
      "Pace"
    ]
  },
  {
    "id": "alexander-isak",
    "name": "Alexander Isak",
    "age": 24,
    "position": "FW",
    "role": "Complete Winger / Striker",
    "club": "Liverpool",
    "league": "Premier League",
    "nation": "Spain",
    "value": 61800000,
    "rating": 75,
    "general": {
      "apps": 8,
      "mins": 694,
      "goals": 3,
      "assists": 1,
      "yellowCards": 0,
      "redCards": 0
    },
    "attributes": {
      "pace": 80,
      "dribbling": 64,
      "passing": 62,
      "defending": 28,
      "physicality": 64,
      "tactical": 74,
      "workrate": 69
    },
    "detailedStats": {
      "goalsPer90": 0.39,
      "shotsOnTargetPer90": 1.1,
      "expectedGoals": 2.6,
      "shotConversionRate": 13.6,
      "touchesInBoxPer90": 3.0,
      "chancesCreated": 4,
      "dribblesCompletedPer90": 0.5,
      "keyPassesPer90": 0.25
    },
    "leagueBenchmarks": [
      {
        "metric": "Goals per 90",
        "player": 0.39,
        "avg": 0.22,
        "elite": 0.65
      },
      {
        "metric": "Shot Conversion %",
        "player": 13.6,
        "avg": 10.5,
        "elite": 18.0
      },
      {
        "metric": "Touches in Box p90",
        "player": 3.0,
        "avg": 2.5,
        "elite": 5.5
      },
      {
        "metric": "Expected Goals (xG)",
        "player": 2.6,
        "avg": 4.5,
        "elite": 14.0
      }
    ],
    "heatmap": [
      {
        "x": 50,
        "y": 84,
        "r": 38,
        "v": 0.9
      },
      {
        "x": 48,
        "y": 76,
        "r": 32,
        "v": 0.75
      },
      {
        "x": 52,
        "y": 80,
        "r": 32,
        "v": 0.8
      },
      {
        "x": 50,
        "y": 92,
        "r": 28,
        "v": 0.85
      }
    ],
    "strengths": [
      "Tactical awareness",
      "Pace"
    ],
    "weaknesses": [
      "Defending",
      "Defensive Tracking Back"
    ]
  },
  {
    "id": "hugo-ekitik\u00e9",
    "name": "Hugo Ekitik\u00e9",
    "age": 21,
    "position": "FW",
    "role": "Inverted Winger",
    "club": "Liverpool",
    "league": "Premier League",
    "nation": "Spain",
    "value": 54000000,
    "rating": 87,
    "general": {
      "apps": 21,
      "mins": 1797,
      "goals": 11,
      "assists": 4,
      "yellowCards": 0,
      "redCards": 0
    },
    "attributes": {
      "pace": 98,
      "dribbling": 96,
      "passing": 80,
      "defending": 38,
      "physicality": 90,
      "tactical": 95,
      "workrate": 85
    },
    "detailedStats": {
      "goalsPer90": 0.55,
      "shotsOnTargetPer90": 1.3,
      "expectedGoals": 10.1,
      "shotConversionRate": 23.2,
      "touchesInBoxPer90": 5.7,
      "chancesCreated": 38,
      "dribblesCompletedPer90": 1.4,
      "keyPassesPer90": 0.77
    },
    "leagueBenchmarks": [
      {
        "metric": "Goals per 90",
        "player": 0.55,
        "avg": 0.22,
        "elite": 0.65
      },
      {
        "metric": "Shot Conversion %",
        "player": 23.2,
        "avg": 10.5,
        "elite": 18.0
      },
      {
        "metric": "Touches in Box p90",
        "player": 5.7,
        "avg": 2.5,
        "elite": 5.5
      },
      {
        "metric": "Expected Goals (xG)",
        "player": 10.1,
        "avg": 4.5,
        "elite": 14.0
      }
    ],
    "heatmap": [
      {
        "x": 78,
        "y": 72,
        "r": 45,
        "v": 0.9
      },
      {
        "x": 78,
        "y": 58,
        "r": 38,
        "v": 0.75
      },
      {
        "x": 72,
        "y": 82,
        "r": 35,
        "v": 0.8
      },
      {
        "x": 50,
        "y": 84,
        "r": 30,
        "v": 0.65
      }
    ],
    "strengths": [
      "Dribbling",
      "Clinical Finishing",
      "Pace"
    ],
    "weaknesses": [
      "Defending",
      "Defensive Tracking Back"
    ]
  },
  {
    "id": "rio-ngumoha",
    "name": "Rio Ngumoha",
    "age": 31,
    "position": "MF",
    "role": "Box-to-Box Midfielder",
    "club": "Liverpool",
    "league": "Premier League",
    "nation": "Brazil",
    "value": 25800000,
    "rating": 76,
    "general": {
      "apps": 5,
      "mins": 547,
      "goals": 2,
      "assists": 1,
      "yellowCards": 0,
      "redCards": 0
    },
    "attributes": {
      "pace": 70,
      "dribbling": 72,
      "passing": 74,
      "defending": 61,
      "physicality": 66,
      "tactical": 80,
      "workrate": 67
    },
    "detailedStats": {
      "goalsPer90": 0.33,
      "shotsOnTargetPer90": 1.0,
      "expectedGoals": 1.3,
      "shotConversionRate": 12.4,
      "touchesInBoxPer90": 1.2,
      "chancesCreated": 27,
      "dribblesCompletedPer90": 1.1,
      "keyPassesPer90": 1.83,
      "passingAccuracy": 85.7,
      "progressivePassesPer90": 4.2,
      "tacklesWonPer90": 1.4,
      "interceptionsPer90": 0.7,
      "ballRecoveriesPer90": 4.7
    },
    "leagueBenchmarks": [
      {
        "metric": "Key Passes per 90",
        "player": 1.83,
        "avg": 0.9,
        "elite": 2.2
      },
      {
        "metric": "Progressive Passes p90",
        "player": 4.2,
        "avg": 2.8,
        "elite": 6.2
      },
      {
        "metric": "Chances Created",
        "player": 27,
        "avg": 16,
        "elite": 55
      },
      {
        "metric": "Passing Accuracy %",
        "player": 85.7,
        "avg": 79.5,
        "elite": 87.0
      }
    ],
    "heatmap": [
      {
        "x": 50,
        "y": 42,
        "r: ": 45,
        "v": 0.9
      },
      {
        "x": 44,
        "y": 35,
        "r": 38,
        "v": 0.8
      },
      {
        "x": 56,
        "y": 35,
        "r": 38,
        "v": 0.8
      },
      {
        "x": 50,
        "y": 55,
        "r": 35,
        "v": 0.75
      }
    ],
    "strengths": [
      "Passing",
      "Tactical awareness"
    ],
    "weaknesses": [
      "Defending",
      "Physicality"
    ]
  },
  {
    "id": "antoine-semenyo",
    "name": "Antoine Semenyo",
    "age": 27,
    "position": "MF",
    "role": "Attacking Playmaker",
    "club": "Man City",
    "league": "Premier League",
    "nation": "Spain",
    "value": 48000000,
    "rating": 93,
    "general": {
      "apps": 37,
      "mins": 3200,
      "goals": 17,
      "assists": 6,
      "yellowCards": 7,
      "redCards": 0
    },
    "attributes": {
      "pace": 92,
      "dribbling": 96,
      "passing": 97,
      "defending": 88,
      "physicality": 94,
      "tactical": 95,
      "workrate": 96
    },
    "detailedStats": {
      "goalsPer90": 0.48,
      "shotsOnTargetPer90": 1.2,
      "expectedGoals": 11.1,
      "shotConversionRate": 25.0,
      "touchesInBoxPer90": 4.0,
      "chancesCreated": 75,
      "dribblesCompletedPer90": 2.4,
      "keyPassesPer90": 0.85,
      "passingAccuracy": 92.1,
      "progressivePassesPer90": 8.1,
      "tacklesWonPer90": 3.9,
      "interceptionsPer90": 1.1,
      "ballRecoveriesPer90": 9.7
    },
    "leagueBenchmarks": [
      {
        "metric": "Key Passes per 90",
        "player": 0.85,
        "avg": 0.9,
        "elite": 2.2
      },
      {
        "metric": "Progressive Passes p90",
        "player": 8.1,
        "avg": 2.8,
        "elite": 6.2
      },
      {
        "metric": "Chances Created",
        "player": 75,
        "avg": 16,
        "elite": 55
      },
      {
        "metric": "Passing Accuracy %",
        "player": 92.1,
        "avg": 79.5,
        "elite": 87.0
      }
    ],
    "heatmap": [
      {
        "x": 50,
        "y": 64,
        "r": 42,
        "v": 0.9
      },
      {
        "x": 40,
        "y": 55,
        "r": 35,
        "v": 0.75
      },
      {
        "x": 60,
        "y": 55,
        "r": 35,
        "v": 0.75
      },
      {
        "x": 50,
        "y": 76,
        "r": 30,
        "v": 0.8
      }
    ],
    "strengths": [
      "Dribbling",
      "Passing",
      "Clinical Finishing"
    ],
    "weaknesses": [
      "Defending",
      "Pace"
    ]
  },
  {
    "id": "james-trafford",
    "name": "James Trafford",
    "age": 22,
    "position": "GK",
    "role": "Sweeper Keeper",
    "club": "Man City",
    "league": "Premier League",
    "nation": "Brazil",
    "value": 27000000,
    "rating": 71,
    "general": {
      "apps": 4,
      "mins": 360,
      "goals": 0,
      "assists": 0,
      "yellowCards": 0,
      "redCards": 0
    },
    "attributes": {
      "pace": 60,
      "dribbling": 55,
      "passing": 60,
      "defending": 80,
      "physicality": 62,
      "tactical": 67,
      "workrate": 65
    },
    "detailedStats": {
      "savePercentage": 67.8,
      "cleanSheets": 1,
      "goalsConceded": 6,
      "psxgDifference": 0.4,
      "passingAccuracy": 75.9,
      "sweeperActionsPer90": 0.5,
      "averageDistanceOfSweeperActions": 12.2
    },
    "leagueBenchmarks": [
      {
        "metric": "Save %",
        "player": 67.8,
        "avg": 69.5,
        "elite": 77.0
      },
      {
        "metric": "Clean Sheets",
        "player": 1,
        "avg": 4.5,
        "elite": 10.0
      },
      {
        "metric": "Sweeper Actions p90",
        "player": 0.5,
        "avg": 0.6,
        "elite": 1.2
      },
      {
        "metric": "Passing Accuracy %",
        "player": 75.9,
        "avg": 73.0,
        "elite": 82.0
      }
    ],
    "heatmap": [
      {
        "x": 50,
        "y": 6,
        "r": 35,
        "v": 0.98
      },
      {
        "x": 50,
        "y": 14,
        "r": 28,
        "v": 0.7
      },
      {
        "x": 45,
        "y": 8,
        "r": 22,
        "v": 0.55
      },
      {
        "x": 55,
        "y": 8,
        "r": 22,
        "v": 0.55
      }
    ],
    "strengths": [
      "Defending",
      "Tactical awareness"
    ],
    "weaknesses": [
      "Dribbling",
      "Passing"
    ]
  },
  {
    "id": "marc-gu\u00e9hi",
    "name": "Marc Gu\u00e9hi",
    "age": 25,
    "position": "DF",
    "role": "Attacking Fullback",
    "club": "Man City",
    "league": "Premier League",
    "nation": "France",
    "value": 30600000,
    "rating": 93,
    "general": {
      "apps": 35,
      "mins": 3150,
      "goals": 3,
      "assists": 5,
      "yellowCards": 6,
      "redCards": 0
    },
    "attributes": {
      "pace": 81,
      "dribbling": 83,
      "passing": 80,
      "defending": 94,
      "physicality": 94,
      "tactical": 95,
      "workrate": 96
    },
    "detailedStats": {
      "goalsPer90": 0.09,
      "shotsOnTargetPer90": 0.6,
      "expectedGoals": 4.0,
      "shotConversionRate": 13.6,
      "touchesInBoxPer90": 1.8,
      "chancesCreated": 38,
      "dribblesCompletedPer90": 1.4,
      "keyPassesPer90": 0.44,
      "tacklesWonPer90": 4.0,
      "interceptionsPer90": 1.3,
      "clearancesPer90": 6.0,
      "aerialDuelWinPercentage": 80.0,
      "tackledDribblerRate": 66.1,
      "progressivePassesPer90": 3.0,
      "longPassesCompletedPer90": 2.0,
      "passingAccuracy": 86.1
    },
    "leagueBenchmarks": [
      {
        "metric": "Passing Accuracy %",
        "player": 86.1,
        "avg": 82.0,
        "elite": 89.0
      },
      {
        "metric": "Clearances per 90",
        "player": 6.0,
        "avg": 2.6,
        "elite": 4.0
      },
      {
        "metric": "Aerial Duel Win %",
        "player": 80.0,
        "avg": 54.5,
        "elite": 68.0
      },
      {
        "metric": "Tackles Won per 90",
        "player": 4.0,
        "avg": 1.1,
        "elite": 2.0
      }
    ],
    "heatmap": [
      {
        "x": 14,
        "y": 25,
        "r": 38,
        "v": 0.8
      },
      {
        "x": 14,
        "y": 45,
        "r": 40,
        "v": 0.85
      },
      {
        "x": 14,
        "y": 65,
        "r": 35,
        "v": 0.7
      },
      {
        "x": 14,
        "y": 12,
        "r": 30,
        "v": 0.6
      }
    ],
    "strengths": [
      "Workrate",
      "Tactical awareness",
      "Aerial Dominance"
    ],
    "weaknesses": [
      "Passing",
      "Pace"
    ]
  },
  {
    "id": "rayan-a\u00eft-nouri",
    "name": "Rayan A\u00eft-Nouri",
    "age": 32,
    "position": "DF",
    "role": "Attacking Fullback",
    "club": "Man City",
    "league": "Premier League",
    "nation": "England",
    "value": 34200000,
    "rating": 78,
    "general": {
      "apps": 12,
      "mins": 971,
      "goals": 0,
      "assists": 2,
      "yellowCards": 2,
      "redCards": 0
    },
    "attributes": {
      "pace": 68,
      "dribbling": 67,
      "passing": 74,
      "defending": 84,
      "physicality": 68,
      "tactical": 77,
      "workrate": 73
    },
    "detailedStats": {
      "goalsPer90": 0.0,
      "shotsOnTargetPer90": 0.5,
      "expectedGoals": 0.5,
      "shotConversionRate": 10.0,
      "touchesInBoxPer90": 0.8,
      "chancesCreated": 27,
      "dribblesCompletedPer90": 1.1,
      "keyPassesPer90": 1.0,
      "tacklesWonPer90": 1.7,
      "interceptionsPer90": 1.0,
      "clearancesPer90": 2.5,
      "aerialDuelWinPercentage": 64.8,
      "tackledDribblerRate": 55.0,
      "progressivePassesPer90": 2.6,
      "longPassesCompletedPer90": 1.7,
      "passingAccuracy": 84.3
    },
    "leagueBenchmarks": [
      {
        "metric": "Passing Accuracy %",
        "player": 84.3,
        "avg": 82.0,
        "elite": 89.0
      },
      {
        "metric": "Clearances per 90",
        "player": 2.5,
        "avg": 2.6,
        "elite": 4.0
      },
      {
        "metric": "Aerial Duel Win %",
        "player": 64.8,
        "avg": 54.5,
        "elite": 68.0
      },
      {
        "metric": "Tackles Won per 90",
        "player": 1.7,
        "avg": 1.1,
        "elite": 2.0
      }
    ],
    "heatmap": [
      {
        "x": 14,
        "y": 25,
        "r": 38,
        "v": 0.8
      },
      {
        "x": 14,
        "y": 45,
        "r": 40,
        "v": 0.85
      },
      {
        "x": 14,
        "y": 65,
        "r": 35,
        "v": 0.7
      },
      {
        "x": 14,
        "y": 12,
        "r": 30,
        "v": 0.6
      }
    ],
    "strengths": [
      "Defending",
      "Tactical awareness"
    ],
    "weaknesses": [
      "Dribbling",
      "Physicality"
    ]
  },
  {
    "id": "jo\u0161ko-gvardiol",
    "name": "Jo\u0161ko Gvardiol",
    "age": 33,
    "position": "DF",
    "role": "Attacking Fullback",
    "club": "Man City",
    "league": "Premier League",
    "nation": "Spain",
    "value": 34800000,
    "rating": 81,
    "general": {
      "apps": 16,
      "mins": 1370,
      "goals": 2,
      "assists": 2,
      "yellowCards": 2,
      "redCards": 0
    },
    "attributes": {
      "pace": 73,
      "dribbling": 68,
      "passing": 67,
      "defending": 93,
      "physicality": 79,
      "tactical": 82,
      "workrate": 79
    },
    "detailedStats": {
      "goalsPer90": 0.13,
      "shotsOnTargetPer90": 0.7,
      "expectedGoals": 2.2,
      "shotConversionRate": 12.4,
      "touchesInBoxPer90": 1.2,
      "chancesCreated": 13,
      "dribblesCompletedPer90": 0.8,
      "keyPassesPer90": 0.36,
      "tacklesWonPer90": 2.2,
      "interceptionsPer90": 1.0,
      "clearancesPer90": 3.3,
      "aerialDuelWinPercentage": 73.5,
      "tackledDribblerRate": 57.0,
      "progressivePassesPer90": 2.0,
      "longPassesCompletedPer90": 1.4,
      "passingAccuracy": 82.2
    },
    "leagueBenchmarks": [
      {
        "metric": "Passing Accuracy %",
        "player": 82.2,
        "avg": 82.0,
        "elite": 89.0
      },
      {
        "metric": "Clearances per 90",
        "player": 3.3,
        "avg": 2.6,
        "elite": 4.0
      },
      {
        "metric": "Aerial Duel Win %",
        "player": 73.5,
        "avg": 54.5,
        "elite": 68.0
      },
      {
        "metric": "Tackles Won per 90",
        "player": 2.2,
        "avg": 1.1,
        "elite": 2.0
      }
    ],
    "heatmap": [
      {
        "x": 86,
        "y": 25,
        "r": 38,
        "v": 0.8
      },
      {
        "x": 86,
        "y": 45,
        "r": 40,
        "v": 0.85
      },
      {
        "x": 86,
        "y": 65,
        "r": 35,
        "v": 0.7
      },
      {
        "x": 86,
        "y": 12,
        "r": 30,
        "v": 0.6
      }
    ],
    "strengths": [
      "Defending",
      "Tactical awareness",
      "Aerial Dominance"
    ],
    "weaknesses": [
      "Dribbling",
      "Passing"
    ]
  },
  {
    "id": "nathan-ak\u00e9",
    "name": "Nathan Ak\u00e9",
    "age": 20,
    "position": "DF",
    "role": "Central Defender",
    "club": "Man City",
    "league": "Premier League",
    "nation": "England",
    "value": 31200000,
    "rating": 75,
    "general": {
      "apps": 6,
      "mins": 686,
      "goals": 0,
      "assists": 0,
      "yellowCards": 1,
      "redCards": 0
    },
    "attributes": {
      "pace": 68,
      "dribbling": 62,
      "passing": 67,
      "defending": 80,
      "physicality": 63,
      "tactical": 73,
      "workrate": 69
    },
    "detailedStats": {
      "goalsPer90": 0.0,
      "shotsOnTargetPer90": 0.5,
      "expectedGoals": 0.7,
      "shotConversionRate": 10.0,
      "touchesInBoxPer90": 0.8,
      "chancesCreated": 13,
      "dribblesCompletedPer90": 0.8,
      "keyPassesPer90": 0.73,
      "tacklesWonPer90": 1.4,
      "interceptionsPer90": 0.9,
      "clearancesPer90": 2.2,
      "aerialDuelWinPercentage": 61.6,
      "tackledDribblerRate": 53.2,
      "progressivePassesPer90": 2.1,
      "longPassesCompletedPer90": 1.4,
      "passingAccuracy": 82.2
    },
    "leagueBenchmarks": [
      {
        "metric": "Passing Accuracy %",
        "player": 82.2,
        "avg": 82.0,
        "elite": 89.0
      },
      {
        "metric": "Clearances per 90",
        "player": 2.2,
        "avg": 2.6,
        "elite": 4.0
      },
      {
        "metric": "Aerial Duel Win %",
        "player": 61.6,
        "avg": 54.5,
        "elite": 68.0
      },
      {
        "metric": "Tackles Won per 90",
        "player": 1.4,
        "avg": 1.1,
        "elite": 2.0
      }
    ],
    "heatmap": [
      {
        "x": 50,
        "y": 20,
        "r": 45,
        "v": 0.9
      },
      {
        "x": 42,
        "y": 18,
        "r": 32,
        "v": 0.8
      },
      {
        "x": 58,
        "y": 18,
        "r": 32,
        "v": 0.8
      },
      {
        "x": 50,
        "y": 10,
        "r": 28,
        "v": 0.6
      }
    ],
    "strengths": [
      "Defending",
      "Tactical awareness"
    ],
    "weaknesses": [
      "Dribbling",
      "Physicality"
    ]
  },
  {
    "id": "abdukodir-khusanov",
    "name": "Abdukodir Khusanov",
    "age": 21,
    "position": "DF",
    "role": "Central Defender",
    "club": "Man City",
    "league": "Premier League",
    "nation": "Brazil",
    "value": 32400000,
    "rating": 79,
    "general": {
      "apps": 15,
      "mins": 1427,
      "goals": 0,
      "assists": 0,
      "yellowCards": 2,
      "redCards": 0
    },
    "attributes": {
      "pace": 66,
      "dribbling": 60,
      "passing": 67,
      "defending": 89,
      "physicality": 74,
      "tactical": 75,
      "workrate": 80
    },
    "detailedStats": {
      "goalsPer90": 0.0,
      "shotsOnTargetPer90": 0.5,
      "expectedGoals": 0.7,
      "shotConversionRate": 10.0,
      "touchesInBoxPer90": 0.6,
      "chancesCreated": 14,
      "dribblesCompletedPer90": 0.8,
      "keyPassesPer90": 0.35,
      "tacklesWonPer90": 2.0,
      "interceptionsPer90": 0.9,
      "clearancesPer90": 3.0,
      "aerialDuelWinPercentage": 70.0,
      "tackledDribblerRate": 54.4,
      "progressivePassesPer90": 2.1,
      "longPassesCompletedPer90": 1.4,
      "passingAccuracy": 82.2
    },
    "leagueBenchmarks": [
      {
        "metric": "Passing Accuracy %",
        "player": 82.2,
        "avg": 82.0,
        "elite": 89.0
      },
      {
        "metric": "Clearances per 90",
        "player": 3.0,
        "avg": 2.6,
        "elite": 4.0
      },
      {
        "metric": "Aerial Duel Win %",
        "player": 70.0,
        "avg": 54.5,
        "elite": 68.0
      },
      {
        "metric": "Tackles Won per 90",
        "player": 2.0,
        "avg": 1.1,
        "elite": 2.0
      }
    ],
    "heatmap": [
      {
        "x": 50,
        "y": 20,
        "r": 45,
        "v": 0.9
      },
      {
        "x": 42,
        "y": 18,
        "r": 32,
        "v": 0.8
      },
      {
        "x": 58,
        "y": 18,
        "r": 32,
        "v": 0.8
      },
      {
        "x": 50,
        "y": 10,
        "r": 28,
        "v": 0.6
      }
    ],
    "strengths": [
      "Defending",
      "Workrate",
      "Aerial Dominance"
    ],
    "weaknesses": [
      "Dribbling",
      "Pace"
    ]
  },
  {
    "id": "matheus-nunes",
    "name": "Matheus Nunes",
    "age": 22,
    "position": "DF",
    "role": "Attacking Fullback",
    "club": "Man City",
    "league": "Premier League",
    "nation": "Spain",
    "value": 31800000,
    "rating": 92,
    "general": {
      "apps": 32,
      "mins": 2861,
      "goals": 1,
      "assists": 8,
      "yellowCards": 5,
      "redCards": 0
    },
    "attributes": {
      "pace": 70,
      "dribbling": 82,
      "passing": 96,
      "defending": 94,
      "physicality": 94,
      "tactical": 95,
      "workrate": 96
    },
    "detailedStats": {
      "goalsPer90": 0.03,
      "shotsOnTargetPer90": 0.5,
      "expectedGoals": 0.3,
      "shotConversionRate": 11.2,
      "touchesInBoxPer90": 0.9,
      "chancesCreated": 68,
      "dribblesCompletedPer90": 2.2,
      "keyPassesPer90": 0.86,
      "tacklesWonPer90": 3.3,
      "interceptionsPer90": 1.3,
      "clearancesPer90": 5.0,
      "aerialDuelWinPercentage": 80.0,
      "tackledDribblerRate": 63.8,
      "progressivePassesPer90": 4.2,
      "longPassesCompletedPer90": 2.8,
      "passingAccuracy": 90.9
    },
    "leagueBenchmarks": [
      {
        "metric": "Passing Accuracy %",
        "player": 90.9,
        "avg": 82.0,
        "elite": 89.0
      },
      {
        "metric": "Clearances per 90",
        "player": 5.0,
        "avg": 2.6,
        "elite": 4.0
      },
      {
        "metric": "Aerial Duel Win %",
        "player": 80.0,
        "avg": 54.5,
        "elite": 68.0
      },
      {
        "metric": "Tackles Won per 90",
        "player": 3.3,
        "avg": 1.1,
        "elite": 2.0
      }
    ],
    "heatmap": [
      {
        "x": 86,
        "y": 25,
        "r": 38,
        "v": 0.8
      },
      {
        "x": 86,
        "y": 45,
        "r": 40,
        "v": 0.85
      },
      {
        "x": 86,
        "y": 65,
        "r": 35,
        "v": 0.7
      },
      {
        "x": 86,
        "y": 12,
        "r": 30,
        "v": 0.6
      }
    ],
    "strengths": [
      "Creative Vision",
      "Passing",
      "Workrate"
    ],
    "weaknesses": [
      "Dribbling",
      "Pace"
    ]
  },
  {
    "id": "r\u00faben-dos-santos-gato-alves-dias",
    "name": "R\u00faben dos Santos Gato Alves Dias",
    "age": 23,
    "position": "DF",
    "role": "Attacking Fullback",
    "club": "Man City",
    "league": "Premier League",
    "nation": "England",
    "value": 33000000,
    "rating": 86,
    "general": {
      "apps": 24,
      "mins": 2139,
      "goals": 2,
      "assists": 0,
      "yellowCards": 3,
      "redCards": 0
    },
    "attributes": {
      "pace": 68,
      "dribbling": 64,
      "passing": 70,
      "defending": 94,
      "physicality": 92,
      "tactical": 85,
      "workrate": 90
    },
    "detailedStats": {
      "goalsPer90": 0.08,
      "shotsOnTargetPer90": 0.6,
      "expectedGoals": 0.6,
      "shotConversionRate": 12.4,
      "touchesInBoxPer90": 0.8,
      "chancesCreated": 19,
      "dribblesCompletedPer90": 0.9,
      "keyPassesPer90": 0.32,
      "tacklesWonPer90": 2.9,
      "interceptionsPer90": 1.1,
      "clearancesPer90": 4.3,
      "aerialDuelWinPercentage": 80.0,
      "tackledDribblerRate": 58.1,
      "progressivePassesPer90": 2.3,
      "longPassesCompletedPer90": 1.5,
      "passingAccuracy": 83.0
    },
    "leagueBenchmarks": [
      {
        "metric": "Passing Accuracy %",
        "player": 83.0,
        "avg": 82.0,
        "elite": 89.0
      },
      {
        "metric": "Clearances per 90",
        "player": 4.3,
        "avg": 2.6,
        "elite": 4.0
      },
      {
        "metric": "Aerial Duel Win %",
        "player": 80.0,
        "avg": 54.5,
        "elite": 68.0
      },
      {
        "metric": "Tackles Won per 90",
        "player": 2.9,
        "avg": 1.1,
        "elite": 2.0
      }
    ],
    "heatmap": [
      {
        "x": 14,
        "y": 25,
        "r": 38,
        "v": 0.8
      },
      {
        "x": 14,
        "y": 45,
        "r": 40,
        "v": 0.85
      },
      {
        "x": 14,
        "y": 65,
        "r": 35,
        "v": 0.7
      },
      {
        "x": 14,
        "y": 12,
        "r": 30,
        "v": 0.6
      }
    ],
    "strengths": [
      "Defending",
      "Physicality",
      "Aerial Dominance"
    ],
    "weaknesses": [
      "Dribbling",
      "Pace"
    ]
  },
  {
    "id": "john-stones",
    "name": "John Stones",
    "age": 24,
    "position": "DF",
    "role": "Central Defender",
    "club": "Man City",
    "league": "Premier League",
    "nation": "Spain",
    "value": 32400000,
    "rating": 72,
    "general": {
      "apps": 5,
      "mins": 436,
      "goals": 0,
      "assists": 0,
      "yellowCards": 0,
      "redCards": 0
    },
    "attributes": {
      "pace": 65,
      "dribbling": 56,
      "passing": 61,
      "defending": 77,
      "physicality": 61,
      "tactical": 68,
      "workrate": 66
    },
    "detailedStats": {
      "goalsPer90": 0.0,
      "shotsOnTargetPer90": 0.5,
      "expectedGoals": 0.0,
      "shotConversionRate": 10.0,
      "touchesInBoxPer90": 0.5,
      "chancesCreated": 3,
      "dribblesCompletedPer90": 0.5,
      "keyPassesPer90": 0.25,
      "tacklesWonPer90": 1.3,
      "interceptionsPer90": 0.8,
      "clearancesPer90": 2.0,
      "aerialDuelWinPercentage": 60.1,
      "tackledDribblerRate": 51.3,
      "progressivePassesPer90": 1.6,
      "longPassesCompletedPer90": 1.1,
      "passingAccuracy": 80.5
    },
    "leagueBenchmarks": [
      {
        "metric": "Passing Accuracy %",
        "player": 80.5,
        "avg": 82.0,
        "elite": 89.0
      },
      {
        "metric": "Clearances per 90",
        "player": 2.0,
        "avg": 2.6,
        "elite": 4.0
      },
      {
        "metric": "Aerial Duel Win %",
        "player": 60.1,
        "avg": 54.5,
        "elite": 68.0
      },
      {
        "metric": "Tackles Won per 90",
        "player": 1.3,
        "avg": 1.1,
        "elite": 2.0
      }
    ],
    "heatmap": [
      {
        "x": 50,
        "y": 20,
        "r": 45,
        "v": 0.9
      },
      {
        "x": 42,
        "y": 18,
        "r": 32,
        "v": 0.8
      },
      {
        "x": 58,
        "y": 18,
        "r": 32,
        "v": 0.8
      },
      {
        "x": 50,
        "y": 10,
        "r": 28,
        "v": 0.6
      }
    ],
    "strengths": [
      "Defending",
      "Tactical awareness"
    ],
    "weaknesses": [
      "Dribbling",
      "Physicality"
    ]
  },
  {
    "id": "rico-lewis",
    "name": "Rico Lewis",
    "age": 25,
    "position": "DF",
    "role": "Central Defender",
    "club": "Man City",
    "league": "Premier League",
    "nation": "France",
    "value": 27600000,
    "rating": 72,
    "general": {
      "apps": 4,
      "mins": 401,
      "goals": 0,
      "assists": 1,
      "yellowCards": 2,
      "redCards": 0
    },
    "attributes": {
      "pace": 67,
      "dribbling": 61,
      "passing": 67,
      "defending": 76,
      "physicality": 59,
      "tactical": 70,
      "workrate": 65
    },
    "detailedStats": {
      "goalsPer90": 0.0,
      "shotsOnTargetPer90": 0.5,
      "expectedGoals": 0.2,
      "shotConversionRate": 10.0,
      "touchesInBoxPer90": 0.7,
      "chancesCreated": 14,
      "dribblesCompletedPer90": 0.8,
      "keyPassesPer90": 1.26,
      "tacklesWonPer90": 1.2,
      "interceptionsPer90": 0.9,
      "clearancesPer90": 1.9,
      "aerialDuelWinPercentage": 58.5,
      "tackledDribblerRate": 52.4,
      "progressivePassesPer90": 2.1,
      "longPassesCompletedPer90": 1.4,
      "passingAccuracy": 82.2
    },
    "leagueBenchmarks": [
      {
        "metric": "Passing Accuracy %",
        "player": 82.2,
        "avg": 82.0,
        "elite": 89.0
      },
      {
        "metric": "Clearances per 90",
        "player": 1.9,
        "avg": 2.6,
        "elite": 4.0
      },
      {
        "metric": "Aerial Duel Win %",
        "player": 58.5,
        "avg": 54.5,
        "elite": 68.0
      },
      {
        "metric": "Tackles Won per 90",
        "player": 1.2,
        "avg": 1.1,
        "elite": 2.0
      }
    ],
    "heatmap": [
      {
        "x": 50,
        "y": 20,
        "r": 45,
        "v": 0.9
      },
      {
        "x": 42,
        "y": 18,
        "r": 32,
        "v": 0.8
      },
      {
        "x": 58,
        "y": 18,
        "r": 32,
        "v": 0.8
      },
      {
        "x": 50,
        "y": 10,
        "r": 28,
        "v": 0.6
      }
    ],
    "strengths": [
      "Defending",
      "Tactical awareness"
    ],
    "weaknesses": [
      "Dribbling",
      "Physicality"
    ]
  },
  {
    "id": "nico-o'reilly",
    "name": "Nico O'Reilly",
    "age": 26,
    "position": "DF",
    "role": "Attacking Fullback",
    "club": "Man City",
    "league": "Premier League",
    "nation": "England",
    "value": 31800000,
    "rating": 92,
    "general": {
      "apps": 29,
      "mins": 2643,
      "goals": 5,
      "assists": 4,
      "yellowCards": 5,
      "redCards": 0
    },
    "attributes": {
      "pace": 87,
      "dribbling": 94,
      "passing": 87,
      "defending": 94,
      "physicality": 94,
      "tactical": 95,
      "workrate": 96
    },
    "detailedStats": {
      "goalsPer90": 0.17,
      "shotsOnTargetPer90": 0.8,
      "expectedGoals": 6.1,
      "shotConversionRate": 16.0,
      "touchesInBoxPer90": 2.4,
      "chancesCreated": 51,
      "dribblesCompletedPer90": 1.8,
      "keyPassesPer90": 0.7,
      "tacklesWonPer90": 3.2,
      "interceptionsPer90": 1.3,
      "clearancesPer90": 4.8,
      "aerialDuelWinPercentage": 80.0,
      "tackledDribblerRate": 66.4,
      "progressivePassesPer90": 3.6,
      "longPassesCompletedPer90": 2.4,
      "passingAccuracy": 88.3
    },
    "leagueBenchmarks": [
      {
        "metric": "Passing Accuracy %",
        "player": 88.3,
        "avg": 82.0,
        "elite": 89.0
      },
      {
        "metric": "Clearances per 90",
        "player": 4.8,
        "avg": 2.6,
        "elite": 4.0
      },
      {
        "metric": "Aerial Duel Win %",
        "player": 80.0,
        "avg": 54.5,
        "elite": 68.0
      },
      {
        "metric": "Tackles Won per 90",
        "player": 3.2,
        "avg": 1.1,
        "elite": 2.0
      }
    ],
    "heatmap": [
      {
        "x": 86,
        "y": 25,
        "r": 38,
        "v": 0.8
      },
      {
        "x": 86,
        "y": 45,
        "r": 40,
        "v": 0.85
      },
      {
        "x": 86,
        "y": 65,
        "r": 35,
        "v": 0.7
      },
      {
        "x": 86,
        "y": 12,
        "r": 30,
        "v": 0.6
      }
    ],
    "strengths": [
      "Workrate",
      "Tactical awareness",
      "Aerial Dominance"
    ],
    "weaknesses": [
      "Passing",
      "Pace"
    ]
  },
  {
    "id": "omar-marmoush",
    "name": "Omar Marmoush",
    "age": 28,
    "position": "MF",
    "role": "Box-to-Box Midfielder",
    "club": "Man City",
    "league": "Premier League",
    "nation": "Brazil",
    "value": 49800000,
    "rating": 78,
    "general": {
      "apps": 8,
      "mins": 691,
      "goals": 3,
      "assists": 3,
      "yellowCards": 3,
      "redCards": 0
    },
    "attributes": {
      "pace": 74,
      "dribbling": 72,
      "passing": 70,
      "defending": 63,
      "physicality": 68,
      "tactical": 81,
      "workrate": 69
    },
    "detailedStats": {
      "goalsPer90": 0.39,
      "shotsOnTargetPer90": 1.1,
      "expectedGoals": 2.8,
      "shotConversionRate": 13.6,
      "touchesInBoxPer90": 1.4,
      "chancesCreated": 19,
      "dribblesCompletedPer90": 0.9,
      "keyPassesPer90": 1.04,
      "passingAccuracy": 84.7,
      "progressivePassesPer90": 3.6,
      "tacklesWonPer90": 1.5,
      "interceptionsPer90": 0.7,
      "ballRecoveriesPer90": 4.9
    },
    "leagueBenchmarks": [
      {
        "metric": "Key Passes per 90",
        "player": 1.04,
        "avg": 0.9,
        "elite": 2.2
      },
      {
        "metric": "Progressive Passes p90",
        "player": 3.6,
        "avg": 2.8,
        "elite": 6.2
      },
      {
        "metric": "Chances Created",
        "player": 19,
        "avg": 16,
        "elite": 55
      },
      {
        "metric": "Passing Accuracy %",
        "player": 84.7,
        "avg": 79.5,
        "elite": 87.0
      }
    ],
    "heatmap": [
      {
        "x": 50,
        "y": 42,
        "r: ": 45,
        "v": 0.9
      },
      {
        "x": 44,
        "y": 35,
        "r": 38,
        "v": 0.8
      },
      {
        "x": 56,
        "y": 35,
        "r": 38,
        "v": 0.8
      },
      {
        "x": 50,
        "y": 55,
        "r": 35,
        "v": 0.75
      }
    ],
    "strengths": [
      "Tactical awareness",
      "Pace"
    ],
    "weaknesses": [
      "Defending",
      "Physicality"
    ]
  },
  {
    "id": "phil-foden",
    "name": "Phil Foden",
    "age": 29,
    "position": "MF",
    "role": "Attacking Playmaker",
    "club": "Man City",
    "league": "Premier League",
    "nation": "England",
    "value": 48000000,
    "rating": 88,
    "general": {
      "apps": 23,
      "mins": 2078,
      "goals": 7,
      "assists": 5,
      "yellowCards": 4,
      "redCards": 0
    },
    "attributes": {
      "pace": 86,
      "dribbling": 96,
      "passing": 97,
      "defending": 88,
      "physicality": 93,
      "tactical": 95,
      "workrate": 89
    },
    "detailedStats": {
      "goalsPer90": 0.3,
      "shotsOnTargetPer90": 0.9,
      "expectedGoals": 6.0,
      "shotConversionRate": 18.4,
      "touchesInBoxPer90": 2.2,
      "chancesCreated": 114,
      "dribblesCompletedPer90": 3.5,
      "keyPassesPer90": 1.99,
      "passingAccuracy": 94.0,
      "progressivePassesPer90": 11.2,
      "tacklesWonPer90": 2.7,
      "interceptionsPer90": 1.0,
      "ballRecoveriesPer90": 7.4
    },
    "leagueBenchmarks": [
      {
        "metric": "Key Passes per 90",
        "player": 1.99,
        "avg": 0.9,
        "elite": 2.2
      },
      {
        "metric": "Progressive Passes p90",
        "player": 11.2,
        "avg": 2.8,
        "elite": 6.2
      },
      {
        "metric": "Chances Created",
        "player": 114,
        "avg": 16,
        "elite": 55
      },
      {
        "metric": "Passing Accuracy %",
        "player": 94.0,
        "avg": 79.5,
        "elite": 87.0
      }
    ],
    "heatmap": [
      {
        "x": 50,
        "y": 64,
        "r": 42,
        "v": 0.9
      },
      {
        "x": 40,
        "y": 55,
        "r": 35,
        "v": 0.75
      },
      {
        "x": 60,
        "y": 55,
        "r": 35,
        "v": 0.75
      },
      {
        "x": 50,
        "y": 76,
        "r": 30,
        "v": 0.8
      }
    ],
    "strengths": [
      "Dribbling",
      "Passing"
    ],
    "weaknesses": [
      "Defending",
      "Pace"
    ]
  },
  {
    "id": "s\u00e1vio-moreira-de-oliveira",
    "name": "S\u00e1vio Moreira de Oliveira",
    "age": 30,
    "position": "MF",
    "role": "Box-to-Box Midfielder",
    "club": "Man City",
    "league": "Premier League",
    "nation": "France",
    "value": 41400000,
    "rating": 76,
    "general": {
      "apps": 7,
      "mins": 817,
      "goals": 1,
      "assists": 2,
      "yellowCards": 2,
      "redCards": 0
    },
    "attributes": {
      "pace": 76,
      "dribbling": 75,
      "passing": 73,
      "defending": 59,
      "physicality": 64,
      "tactical": 81,
      "workrate": 71
    },
    "detailedStats": {
      "goalsPer90": 0.11,
      "shotsOnTargetPer90": 0.7,
      "expectedGoals": 2.5,
      "shotConversionRate": 11.2,
      "touchesInBoxPer90": 1.6,
      "chancesCreated": 24,
      "dribblesCompletedPer90": 1.1,
      "keyPassesPer90": 1.09,
      "passingAccuracy": 85.3,
      "progressivePassesPer90": 4.0,
      "tacklesWonPer90": 1.3,
      "interceptionsPer90": 0.7,
      "ballRecoveriesPer90": 4.4
    },
    "leagueBenchmarks": [
      {
        "metric": "Key Passes per 90",
        "player": 1.09,
        "avg": 0.9,
        "elite": 2.2
      },
      {
        "metric": "Progressive Passes p90",
        "player": 4.0,
        "avg": 2.8,
        "elite": 6.2
      },
      {
        "metric": "Chances Created",
        "player": 24,
        "avg": 16,
        "elite": 55
      },
      {
        "metric": "Passing Accuracy %",
        "player": 85.3,
        "avg": 79.5,
        "elite": 87.0
      }
    ],
    "heatmap": [
      {
        "x": 50,
        "y": 42,
        "r: ": 45,
        "v": 0.9
      },
      {
        "x": 44,
        "y": 35,
        "r": 38,
        "v": 0.8
      },
      {
        "x": 56,
        "y": 35,
        "r": 38,
        "v": 0.8
      },
      {
        "x": 50,
        "y": 55,
        "r": 35,
        "v": 0.75
      }
    ],
    "strengths": [
      "Tactical awareness",
      "Pace"
    ],
    "weaknesses": [
      "Defending",
      "Physicality"
    ]
  },
  {
    "id": "bernardo-mota-veiga-de-carvalho-e-silva",
    "name": "Bernardo Mota Veiga de Carvalho e Silva",
    "age": 31,
    "position": "MF",
    "role": "Attacking Playmaker",
    "club": "Man City",
    "league": "Premier League",
    "nation": "Spain",
    "value": 37200000,
    "rating": 84,
    "general": {
      "apps": 34,
      "mins": 2869,
      "goals": 2,
      "assists": 4,
      "yellowCards": 10,
      "redCards": 0
    },
    "attributes": {
      "pace": 77,
      "dribbling": 96,
      "passing": 97,
      "defending": 84,
      "physicality": 89,
      "tactical": 95,
      "workrate": 96
    },
    "detailedStats": {
      "goalsPer90": 0.06,
      "shotsOnTargetPer90": 0.6,
      "expectedGoals": 2.7,
      "shotConversionRate": 12.4,
      "touchesInBoxPer90": 1.7,
      "chancesCreated": 101,
      "dribblesCompletedPer90": 3.1,
      "keyPassesPer90": 1.27,
      "passingAccuracy": 94.0,
      "progressivePassesPer90": 10.1,
      "tacklesWonPer90": 2.5,
      "interceptionsPer90": 0.9,
      "ballRecoveriesPer90": 6.9
    },
    "leagueBenchmarks": [
      {
        "metric": "Key Passes per 90",
        "player": 1.27,
        "avg": 0.9,
        "elite": 2.2
      },
      {
        "metric": "Progressive Passes p90",
        "player": 10.1,
        "avg": 2.8,
        "elite": 6.2
      },
      {
        "metric": "Chances Created",
        "player": 101,
        "avg": 16,
        "elite": 55
      },
      {
        "metric": "Passing Accuracy %",
        "player": 94.0,
        "avg": 79.5,
        "elite": 87.0
      }
    ],
    "heatmap": [
      {
        "x": 50,
        "y": 64,
        "r": 42,
        "v": 0.9
      },
      {
        "x": 40,
        "y": 55,
        "r": 35,
        "v": 0.75
      },
      {
        "x": 60,
        "y": 55,
        "r": 35,
        "v": 0.75
      },
      {
        "x": 50,
        "y": 76,
        "r": 30,
        "v": 0.8
      }
    ],
    "strengths": [
      "Dribbling",
      "Passing"
    ],
    "weaknesses": [
      "Defending",
      "Pace"
    ]
  },
  {
    "id": "rayan-cherki",
    "name": "Rayan Cherki",
    "age": 32,
    "position": "MF",
    "role": "Attacking Playmaker",
    "club": "Man City",
    "league": "Premier League",
    "nation": "England",
    "value": 39000000,
    "rating": 89,
    "general": {
      "apps": 19,
      "mins": 1772,
      "goals": 4,
      "assists": 13,
      "yellowCards": 1,
      "redCards": 0
    },
    "attributes": {
      "pace": 88,
      "dribbling": 96,
      "passing": 97,
      "defending": 88,
      "physicality": 94,
      "tactical": 95,
      "workrate": 85
    },
    "detailedStats": {
      "goalsPer90": 0.2,
      "shotsOnTargetPer90": 0.8,
      "expectedGoals": 4.3,
      "shotConversionRate": 14.8,
      "touchesInBoxPer90": 2.4,
      "chancesCreated": 124,
      "dribblesCompletedPer90": 3.7,
      "keyPassesPer90": 2.53,
      "passingAccuracy": 94.0,
      "progressivePassesPer90": 12.0,
      "tacklesWonPer90": 2.8,
      "interceptionsPer90": 1.0,
      "ballRecoveriesPer90": 7.5
    },
    "leagueBenchmarks": [
      {
        "metric": "Key Passes per 90",
        "player": 2.53,
        "avg": 0.9,
        "elite": 2.2
      },
      {
        "metric": "Progressive Passes p90",
        "player": 12.0,
        "avg": 2.8,
        "elite": 6.2
      },
      {
        "metric": "Chances Created",
        "player": 124,
        "avg": 16,
        "elite": 55
      },
      {
        "metric": "Passing Accuracy %",
        "player": 94.0,
        "avg": 79.5,
        "elite": 87.0
      }
    ],
    "heatmap": [
      {
        "x": 50,
        "y": 64,
        "r": 42,
        "v": 0.9
      },
      {
        "x": 40,
        "y": 55,
        "r": 35,
        "v": 0.75
      },
      {
        "x": 60,
        "y": 55,
        "r": 35,
        "v": 0.75
      },
      {
        "x": 50,
        "y": 76,
        "r": 30,
        "v": 0.8
      }
    ],
    "strengths": [
      "Dribbling",
      "Passing",
      "Creative Vision"
    ],
    "weaknesses": [
      "Defending",
      "Workrate"
    ]
  },
  {
    "id": "j\u00e9r\u00e9my-doku",
    "name": "J\u00e9r\u00e9my Doku",
    "age": 33,
    "position": "MF",
    "role": "Attacking Playmaker",
    "club": "Man City",
    "league": "Premier League",
    "nation": "Spain",
    "value": 39000000,
    "rating": 87,
    "general": {
      "apps": 19,
      "mins": 1773,
      "goals": 5,
      "assists": 8,
      "yellowCards": 0,
      "redCards": 0
    },
    "attributes": {
      "pace": 92,
      "dribbling": 96,
      "passing": 97,
      "defending": 86,
      "physicality": 91,
      "tactical": 95,
      "workrate": 85
    },
    "detailedStats": {
      "goalsPer90": 0.25,
      "shotsOnTargetPer90": 0.9,
      "expectedGoals": 2.9,
      "shotConversionRate": 16.0,
      "touchesInBoxPer90": 2.6,
      "chancesCreated": 105,
      "dribblesCompletedPer90": 3.2,
      "keyPassesPer90": 2.14,
      "passingAccuracy": 94.0,
      "progressivePassesPer90": 10.4,
      "tacklesWonPer90": 2.6,
      "interceptionsPer90": 1.0,
      "ballRecoveriesPer90": 7.1
    },
    "leagueBenchmarks": [
      {
        "metric": "Key Passes per 90",
        "player": 2.14,
        "avg": 0.9,
        "elite": 2.2
      },
      {
        "metric": "Progressive Passes p90",
        "player": 10.4,
        "avg": 2.8,
        "elite": 6.2
      },
      {
        "metric": "Chances Created",
        "player": 105,
        "avg": 16,
        "elite": 55
      },
      {
        "metric": "Passing Accuracy %",
        "player": 94.0,
        "avg": 79.5,
        "elite": 87.0
      }
    ],
    "heatmap": [
      {
        "x": 50,
        "y": 64,
        "r": 42,
        "v": 0.9
      },
      {
        "x": 40,
        "y": 55,
        "r": 35,
        "v": 0.75
      },
      {
        "x": 60,
        "y": 55,
        "r": 35,
        "v": 0.75
      },
      {
        "x": 50,
        "y": 76,
        "r": 30,
        "v": 0.8
      }
    ],
    "strengths": [
      "Dribbling",
      "Passing",
      "Creative Vision"
    ],
    "weaknesses": [
      "Defending",
      "Workrate"
    ]
  },
  {
    "id": "rodrigo-'rodri'-hernandez-cascante",
    "name": "Rodrigo 'Rodri' Hernandez Cascante",
    "age": 21,
    "position": "MF",
    "role": "Attacking Playmaker",
    "club": "Man City",
    "league": "Premier League",
    "nation": "Spain",
    "value": 37800000,
    "rating": 79,
    "general": {
      "apps": 17,
      "mins": 1510,
      "goals": 1,
      "assists": 1,
      "yellowCards": 3,
      "redCards": 0
    },
    "attributes": {
      "pace": 66,
      "dribbling": 76,
      "passing": 88,
      "defending": 73,
      "physicality": 78,
      "tactical": 87,
      "workrate": 81
    },
    "detailedStats": {
      "goalsPer90": 0.06,
      "shotsOnTargetPer90": 0.6,
      "expectedGoals": 1.1,
      "shotConversionRate": 11.2,
      "touchesInBoxPer90": 0.9,
      "chancesCreated": 52,
      "dribblesCompletedPer90": 1.8,
      "keyPassesPer90": 1.26,
      "passingAccuracy": 89.0,
      "progressivePassesPer90": 6.2,
      "tacklesWonPer90": 2.0,
      "interceptionsPer90": 0.7,
      "ballRecoveriesPer90": 5.9
    },
    "leagueBenchmarks": [
      {
        "metric": "Key Passes per 90",
        "player": 1.26,
        "avg": 0.9,
        "elite": 2.2
      },
      {
        "metric": "Progressive Passes p90",
        "player": 6.2,
        "avg": 2.8,
        "elite": 6.2
      },
      {
        "metric": "Chances Created",
        "player": 52,
        "avg": 16,
        "elite": 55
      },
      {
        "metric": "Passing Accuracy %",
        "player": 89.0,
        "avg": 79.5,
        "elite": 87.0
      }
    ],
    "heatmap": [
      {
        "x": 50,
        "y": 64,
        "r": 42,
        "v": 0.9
      },
      {
        "x": 40,
        "y": 55,
        "r": 35,
        "v": 0.75
      },
      {
        "x": 60,
        "y": 55,
        "r": 35,
        "v": 0.75
      },
      {
        "x": 50,
        "y": 76,
        "r": 30,
        "v": 0.8
      }
    ],
    "strengths": [
      "Passing",
      "Tactical awareness"
    ],
    "weaknesses": [
      "Defending",
      "Pace"
    ]
  },
  {
    "id": "nico-gonz\u00e1lez-iglesias",
    "name": "Nico Gonz\u00e1lez Iglesias",
    "age": 23,
    "position": "MF",
    "role": "Box-to-Box Midfielder",
    "club": "Man City",
    "league": "Premier League",
    "nation": "England",
    "value": 35400000,
    "rating": 79,
    "general": {
      "apps": 17,
      "mins": 1561,
      "goals": 1,
      "assists": 0,
      "yellowCards": 6,
      "redCards": 0
    },
    "attributes": {
      "pace": 63,
      "dribbling": 67,
      "passing": 75,
      "defending": 70,
      "physicality": 75,
      "tactical": 80,
      "workrate": 82
    },
    "detailedStats": {
      "goalsPer90": 0.06,
      "shotsOnTargetPer90": 0.6,
      "expectedGoals": 0.7,
      "shotConversionRate": 11.2,
      "touchesInBoxPer90": 0.7,
      "chancesCreated": 29,
      "dribblesCompletedPer90": 1.2,
      "keyPassesPer90": 0.67,
      "passingAccuracy": 85.9,
      "progressivePassesPer90": 4.3,
      "tacklesWonPer90": 1.8,
      "interceptionsPer90": 0.7,
      "ballRecoveriesPer90": 5.6
    },
    "leagueBenchmarks": [
      {
        "metric": "Key Passes per 90",
        "player": 0.67,
        "avg": 0.9,
        "elite": 2.2
      },
      {
        "metric": "Progressive Passes p90",
        "player": 4.3,
        "avg": 2.8,
        "elite": 6.2
      },
      {
        "metric": "Chances Created",
        "player": 29,
        "avg": 16,
        "elite": 55
      },
      {
        "metric": "Passing Accuracy %",
        "player": 85.9,
        "avg": 79.5,
        "elite": 87.0
      }
    ],
    "heatmap": [
      {
        "x": 50,
        "y": 42,
        "r: ": 45,
        "v": 0.9
      },
      {
        "x": 44,
        "y": 35,
        "r": 38,
        "v": 0.8
      },
      {
        "x": 56,
        "y": 35,
        "r": 38,
        "v": 0.8
      },
      {
        "x": 50,
        "y": 55,
        "r": 35,
        "v": 0.75
      }
    ],
    "strengths": [
      "Workrate",
      "Tactical awareness"
    ],
    "weaknesses": [
      "Dribbling",
      "Pace"
    ]
  },
  {
    "id": "tijjani-reijnders",
    "name": "Tijjani Reijnders",
    "age": 27,
    "position": "MF",
    "role": "Attacking Playmaker",
    "club": "Man City",
    "league": "Premier League",
    "nation": "Brazil",
    "value": 30000000,
    "rating": 83,
    "general": {
      "apps": 19,
      "mins": 1623,
      "goals": 5,
      "assists": 3,
      "yellowCards": 2,
      "redCards": 0
    },
    "attributes": {
      "pace": 81,
      "dribbling": 86,
      "passing": 83,
      "defending": 72,
      "physicality": 77,
      "tactical": 92,
      "workrate": 83
    },
    "detailedStats": {
      "goalsPer90": 0.28,
      "shotsOnTargetPer90": 0.9,
      "expectedGoals": 4.6,
      "shotConversionRate": 16.0,
      "touchesInBoxPer90": 1.9,
      "chancesCreated": 43,
      "dribblesCompletedPer90": 1.6,
      "keyPassesPer90": 0.96,
      "passingAccuracy": 87.8,
      "progressivePassesPer90": 5.5,
      "tacklesWonPer90": 1.9,
      "interceptionsPer90": 0.8,
      "ballRecoveriesPer90": 5.8
    },
    "leagueBenchmarks": [
      {
        "metric": "Key Passes per 90",
        "player": 0.96,
        "avg": 0.9,
        "elite": 2.2
      },
      {
        "metric": "Progressive Passes p90",
        "player": 5.5,
        "avg": 2.8,
        "elite": 6.2
      },
      {
        "metric": "Chances Created",
        "player": 43,
        "avg": 16,
        "elite": 55
      },
      {
        "metric": "Passing Accuracy %",
        "player": 87.8,
        "avg": 79.5,
        "elite": 87.0
      }
    ],
    "heatmap": [
      {
        "x": 50,
        "y": 64,
        "r": 42,
        "v": 0.9
      },
      {
        "x": 40,
        "y": 55,
        "r": 35,
        "v": 0.75
      },
      {
        "x": 60,
        "y": 55,
        "r": 35,
        "v": 0.75
      },
      {
        "x": 50,
        "y": 76,
        "r": 30,
        "v": 0.8
      }
    ],
    "strengths": [
      "Dribbling",
      "Tactical awareness"
    ],
    "weaknesses": [
      "Defending",
      "Physicality"
    ]
  },
  {
    "id": "erling-haaland",
    "name": "Erling Haaland",
    "age": 30,
    "position": "FW",
    "role": "Inverted Winger",
    "club": "Man City",
    "league": "Premier League",
    "nation": "France",
    "value": 88200000,
    "rating": 93,
    "general": {
      "apps": 34,
      "mins": 2953,
      "goals": 27,
      "assists": 8,
      "yellowCards": 2,
      "redCards": 0
    },
    "attributes": {
      "pace": 98,
      "dribbling": 96,
      "passing": 81,
      "defending": 54,
      "physicality": 94,
      "tactical": 95,
      "workrate": 96
    },
    "detailedStats": {
      "goalsPer90": 0.82,
      "shotsOnTargetPer90": 1.7,
      "expectedGoals": 25.5,
      "shotConversionRate": 25.0,
      "touchesInBoxPer90": 9.6,
      "chancesCreated": 40,
      "dribblesCompletedPer90": 1.5,
      "keyPassesPer90": 0.49
    },
    "leagueBenchmarks": [
      {
        "metric": "Goals per 90",
        "player": 0.82,
        "avg": 0.22,
        "elite": 0.65
      },
      {
        "metric": "Shot Conversion %",
        "player": 25.0,
        "avg": 10.5,
        "elite": 18.0
      },
      {
        "metric": "Touches in Box p90",
        "player": 9.6,
        "avg": 2.5,
        "elite": 5.5
      },
      {
        "metric": "Expected Goals (xG)",
        "player": 25.5,
        "avg": 4.5,
        "elite": 14.0
      }
    ],
    "heatmap": [
      {
        "x": 22,
        "y": 72,
        "r": 45,
        "v": 0.9
      },
      {
        "x": 22,
        "y": 58,
        "r": 38,
        "v": 0.75
      },
      {
        "x": 28,
        "y": 82,
        "r": 35,
        "v": 0.8
      },
      {
        "x": 50,
        "y": 84,
        "r": 30,
        "v": 0.65
      }
    ],
    "strengths": [
      "Dribbling",
      "Clinical Finishing",
      "Pace"
    ],
    "weaknesses": [
      "Defending",
      "Defensive Tracking Back"
    ]
  },
  {
    "id": "gianluigi-donnarumma",
    "name": "Gianluigi Donnarumma",
    "age": 21,
    "position": "GK",
    "role": "Sweeper Keeper",
    "club": "Man City",
    "league": "Premier League",
    "nation": "Spain",
    "value": 33600000,
    "rating": 89,
    "general": {
      "apps": 34,
      "mins": 3060,
      "goals": 0,
      "assists": 0,
      "yellowCards": 8,
      "redCards": 0
    },
    "attributes": {
      "pace": 60,
      "dribbling": 55,
      "passing": 88,
      "defending": 93,
      "physicality": 94,
      "tactical": 82,
      "workrate": 96
    },
    "detailedStats": {
      "savePercentage": 80.6,
      "cleanSheets": 15,
      "goalsConceded": 29,
      "psxgDifference": 6.0,
      "passingAccuracy": 90.0,
      "sweeperActionsPer90": 1.1,
      "averageDistanceOfSweeperActions": 13.4
    },
    "leagueBenchmarks": [
      {
        "metric": "Save %",
        "player": 80.6,
        "avg": 69.5,
        "elite": 77.0
      },
      {
        "metric": "Clean Sheets",
        "player": 15,
        "avg": 4.5,
        "elite": 10.0
      },
      {
        "metric": "Sweeper Actions p90",
        "player": 1.1,
        "avg": 0.6,
        "elite": 1.2
      },
      {
        "metric": "Passing Accuracy %",
        "player": 90.0,
        "avg": 73.0,
        "elite": 82.0
      }
    ],
    "heatmap": [
      {
        "x": 50,
        "y": 6,
        "r": 35,
        "v": 0.98
      },
      {
        "x": 50,
        "y": 14,
        "r": 28,
        "v": 0.7
      },
      {
        "x": 45,
        "y": 8,
        "r": 22,
        "v": 0.55
      },
      {
        "x": 55,
        "y": 8,
        "r": 22,
        "v": 0.55
      }
    ],
    "strengths": [
      "Reflexes",
      "Workrate",
      "Physicality"
    ],
    "weaknesses": [
      "Dribbling",
      "Pace"
    ]
  },
  {
    "id": "bryan-mbeumo",
    "name": "Bryan Mbeumo",
    "age": 34,
    "position": "MF",
    "role": "Attacking Playmaker",
    "club": "Man Utd",
    "league": "Premier League",
    "nation": "Brazil",
    "value": 49800000,
    "rating": 91,
    "general": {
      "apps": 31,
      "mins": 2611,
      "goals": 11,
      "assists": 3,
      "yellowCards": 4,
      "redCards": 0
    },
    "attributes": {
      "pace": 92,
      "dribbling": 96,
      "passing": 97,
      "defending": 88,
      "physicality": 94,
      "tactical": 95,
      "workrate": 96
    },
    "detailedStats": {
      "goalsPer90": 0.38,
      "shotsOnTargetPer90": 1.1,
      "expectedGoals": 12.0,
      "shotConversionRate": 23.2,
      "touchesInBoxPer90": 3.4,
      "chancesCreated": 100,
      "dribblesCompletedPer90": 3.1,
      "keyPassesPer90": 1.38,
      "passingAccuracy": 94.0,
      "progressivePassesPer90": 10.0,
      "tacklesWonPer90": 2.9,
      "interceptionsPer90": 1.1,
      "ballRecoveriesPer90": 7.7
    },
    "leagueBenchmarks": [
      {
        "metric": "Key Passes per 90",
        "player": 1.38,
        "avg": 0.9,
        "elite": 2.2
      },
      {
        "metric": "Progressive Passes p90",
        "player": 10.0,
        "avg": 2.8,
        "elite": 6.2
      },
      {
        "metric": "Chances Created",
        "player": 100,
        "avg": 16,
        "elite": 55
      },
      {
        "metric": "Passing Accuracy %",
        "player": 94.0,
        "avg": 79.5,
        "elite": 87.0
      }
    ],
    "heatmap": [
      {
        "x": 50,
        "y": 64,
        "r": 42,
        "v": 0.9
      },
      {
        "x": 40,
        "y": 55,
        "r": 35,
        "v": 0.75
      },
      {
        "x": 60,
        "y": 55,
        "r": 35,
        "v": 0.75
      },
      {
        "x": 50,
        "y": 76,
        "r": 30,
        "v": 0.8
      }
    ],
    "strengths": [
      "Dribbling",
      "Passing",
      "Clinical Finishing"
    ],
    "weaknesses": [
      "Defending",
      "Pace"
    ]
  },
  {
    "id": "altay-bay\u0131nd\u0131r",
    "name": "Altay Bay\u0131nd\u0131r",
    "age": 31,
    "position": "GK",
    "role": "Sweeper Keeper",
    "club": "Man Utd",
    "league": "Premier League",
    "nation": "Spain",
    "value": 28200000,
    "rating": 71,
    "general": {
      "apps": 6,
      "mins": 540,
      "goals": 0,
      "assists": 0,
      "yellowCards": 0,
      "redCards": 0
    },
    "attributes": {
      "pace": 60,
      "dribbling": 55,
      "passing": 60,
      "defending": 80,
      "physicality": 62,
      "tactical": 68,
      "workrate": 67
    },
    "detailedStats": {
      "savePercentage": 67.6,
      "cleanSheets": 0,
      "goalsConceded": 11,
      "psxgDifference": 0.0,
      "passingAccuracy": 75.9,
      "sweeperActionsPer90": 0.5,
      "averageDistanceOfSweeperActions": 12.3
    },
    "leagueBenchmarks": [
      {
        "metric": "Save %",
        "player": 67.6,
        "avg": 69.5,
        "elite": 77.0
      },
      {
        "metric": "Clean Sheets",
        "player": 0,
        "avg": 4.5,
        "elite": 10.0
      },
      {
        "metric": "Sweeper Actions p90",
        "player": 0.5,
        "avg": 0.6,
        "elite": 1.2
      },
      {
        "metric": "Passing Accuracy %",
        "player": 75.9,
        "avg": 73.0,
        "elite": 82.0
      }
    ],
    "heatmap": [
      {
        "x": 50,
        "y": 6,
        "r": 35,
        "v": 0.98
      },
      {
        "x": 50,
        "y": 14,
        "r": 28,
        "v": 0.7
      },
      {
        "x": 45,
        "y": 8,
        "r": 22,
        "v": 0.55
      },
      {
        "x": 55,
        "y": 8,
        "r": 22,
        "v": 0.55
      }
    ],
    "strengths": [
      "Defending",
      "Tactical awareness"
    ],
    "weaknesses": [
      "Dribbling",
      "Passing"
    ]
  },
  {
    "id": "matthijs-de-ligt",
    "name": "Matthijs de Ligt",
    "age": 21,
    "position": "DF",
    "role": "Attacking Fullback",
    "club": "Man Utd",
    "league": "Premier League",
    "nation": "Spain",
    "value": 29400000,
    "rating": 76,
    "general": {
      "apps": 13,
      "mins": 1170,
      "goals": 1,
      "assists": 0,
      "yellowCards": 0,
      "redCards": 0
    },
    "attributes": {
      "pace": 69,
      "dribbling": 62,
      "passing": 64,
      "defending": 88,
      "physicality": 73,
      "tactical": 76,
      "workrate": 76
    },
    "detailedStats": {
      "goalsPer90": 0.08,
      "shotsOnTargetPer90": 0.6,
      "expectedGoals": 1.4,
      "shotConversionRate": 11.2,
      "touchesInBoxPer90": 0.9,
      "chancesCreated": 7,
      "dribblesCompletedPer90": 0.6,
      "keyPassesPer90": 0.23,
      "tacklesWonPer90": 1.9,
      "interceptionsPer90": 1.0,
      "clearancesPer90": 2.9,
      "aerialDuelWinPercentage": 68.8,
      "tackledDribblerRate": 54.6,
      "progressivePassesPer90": 1.8,
      "longPassesCompletedPer90": 1.2,
      "passingAccuracy": 81.2
    },
    "leagueBenchmarks": [
      {
        "metric": "Passing Accuracy %",
        "player": 81.2,
        "avg": 82.0,
        "elite": 89.0
      },
      {
        "metric": "Clearances per 90",
        "player": 2.9,
        "avg": 2.6,
        "elite": 4.0
      },
      {
        "metric": "Aerial Duel Win %",
        "player": 68.8,
        "avg": 54.5,
        "elite": 68.0
      },
      {
        "metric": "Tackles Won per 90",
        "player": 1.9,
        "avg": 1.1,
        "elite": 2.0
      }
    ],
    "heatmap": [
      {
        "x": 14,
        "y": 25,
        "r": 38,
        "v": 0.8
      },
      {
        "x": 14,
        "y": 45,
        "r": 40,
        "v": 0.85
      },
      {
        "x": 14,
        "y": 65,
        "r": 35,
        "v": 0.7
      },
      {
        "x": 14,
        "y": 12,
        "r": 30,
        "v": 0.6
      }
    ],
    "strengths": [
      "Defending",
      "Tactical awareness",
      "Aerial Dominance"
    ],
    "weaknesses": [
      "Dribbling",
      "Passing"
    ]
  },
  {
    "id": "lisandro-mart\u00ednez",
    "name": "Lisandro Mart\u00ednez",
    "age": 22,
    "position": "DF",
    "role": "Central Defender",
    "club": "Man Utd",
    "league": "Premier League",
    "nation": "Spain",
    "value": 28800000,
    "rating": 77,
    "general": {
      "apps": 13,
      "mins": 1229,
      "goals": 0,
      "assists": 0,
      "yellowCards": 0,
      "redCards": 1
    },
    "attributes": {
      "pace": 65,
      "dribbling": 59,
      "passing": 66,
      "defending": 89,
      "physicality": 75,
      "tactical": 75,
      "workrate": 77
    },
    "detailedStats": {
      "goalsPer90": 0.0,
      "shotsOnTargetPer90": 0.5,
      "expectedGoals": 0.1,
      "shotConversionRate": 10.0,
      "touchesInBoxPer90": 0.6,
      "chancesCreated": 11,
      "dribblesCompletedPer90": 0.7,
      "keyPassesPer90": 0.35,
      "tacklesWonPer90": 2.0,
      "interceptionsPer90": 0.9,
      "clearancesPer90": 3.0,
      "aerialDuelWinPercentage": 70.1,
      "tackledDribblerRate": 54.2,
      "progressivePassesPer90": 2.0,
      "longPassesCompletedPer90": 1.3,
      "passingAccuracy": 81.9
    },
    "leagueBenchmarks": [
      {
        "metric": "Passing Accuracy %",
        "player": 81.9,
        "avg": 82.0,
        "elite": 89.0
      },
      {
        "metric": "Clearances per 90",
        "player": 3.0,
        "avg": 2.6,
        "elite": 4.0
      },
      {
        "metric": "Aerial Duel Win %",
        "player": 70.1,
        "avg": 54.5,
        "elite": 68.0
      },
      {
        "metric": "Tackles Won per 90",
        "player": 2.0,
        "avg": 1.1,
        "elite": 2.0
      }
    ],
    "heatmap": [
      {
        "x": 50,
        "y": 20,
        "r": 45,
        "v": 0.9
      },
      {
        "x": 42,
        "y": 18,
        "r": 32,
        "v": 0.8
      },
      {
        "x": 58,
        "y": 18,
        "r": 32,
        "v": 0.8
      },
      {
        "x": 50,
        "y": 10,
        "r": 28,
        "v": 0.6
      }
    ],
    "strengths": [
      "Defending",
      "Workrate",
      "Aerial Dominance"
    ],
    "weaknesses": [
      "Dribbling",
      "Pace"
    ]
  },
  {
    "id": "noussair-mazraoui",
    "name": "Noussair Mazraoui",
    "age": 23,
    "position": "DF",
    "role": "Central Defender",
    "club": "Man Utd",
    "league": "Premier League",
    "nation": "England",
    "value": 29400000,
    "rating": 77,
    "general": {
      "apps": 11,
      "mins": 977,
      "goals": 0,
      "assists": 0,
      "yellowCards": 3,
      "redCards": 0
    },
    "attributes": {
      "pace": 66,
      "dribbling": 61,
      "passing": 68,
      "defending": 84,
      "physicality": 68,
      "tactical": 74,
      "workrate": 73
    },
    "detailedStats": {
      "goalsPer90": 0.0,
      "shotsOnTargetPer90": 0.5,
      "expectedGoals": 0.2,
      "shotConversionRate": 10.0,
      "touchesInBoxPer90": 0.6,
      "chancesCreated": 15,
      "dribblesCompletedPer90": 0.8,
      "keyPassesPer90": 0.56,
      "tacklesWonPer90": 1.7,
      "interceptionsPer90": 0.9,
      "clearancesPer90": 2.5,
      "aerialDuelWinPercentage": 65.5,
      "tackledDribblerRate": 53.7,
      "progressivePassesPer90": 2.1,
      "longPassesCompletedPer90": 1.4,
      "passingAccuracy": 82.4
    },
    "leagueBenchmarks": [
      {
        "metric": "Passing Accuracy %",
        "player": 82.4,
        "avg": 82.0,
        "elite": 89.0
      },
      {
        "metric": "Clearances per 90",
        "player": 2.5,
        "avg": 2.6,
        "elite": 4.0
      },
      {
        "metric": "Aerial Duel Win %",
        "player": 65.5,
        "avg": 54.5,
        "elite": 68.0
      },
      {
        "metric": "Tackles Won per 90",
        "player": 1.7,
        "avg": 1.1,
        "elite": 2.0
      }
    ],
    "heatmap": [
      {
        "x": 50,
        "y": 20,
        "r": 45,
        "v": 0.9
      },
      {
        "x": 42,
        "y": 18,
        "r": 32,
        "v": 0.8
      },
      {
        "x": 58,
        "y": 18,
        "r": 32,
        "v": 0.8
      },
      {
        "x": 50,
        "y": 10,
        "r": 28,
        "v": 0.6
      }
    ],
    "strengths": [
      "Defending",
      "Tactical awareness"
    ],
    "weaknesses": [
      "Dribbling",
      "Pace"
    ]
  },
  {
    "id": "diogo-dalot-teixeira",
    "name": "Diogo Dalot Teixeira",
    "age": 25,
    "position": "DF",
    "role": "Attacking Fullback",
    "club": "Man Utd",
    "league": "Premier League",
    "nation": "France",
    "value": 27000000,
    "rating": 85,
    "general": {
      "apps": 29,
      "mins": 2609,
      "goals": 1,
      "assists": 6,
      "yellowCards": 5,
      "redCards": 0
    },
    "attributes": {
      "pace": 73,
      "dribbling": 81,
      "passing": 90,
      "defending": 94,
      "physicality": 90,
      "tactical": 94,
      "workrate": 96
    },
    "detailedStats": {
      "goalsPer90": 0.03,
      "shotsOnTargetPer90": 0.5,
      "expectedGoals": 1.9,
      "shotConversionRate": 11.2,
      "touchesInBoxPer90": 1.2,
      "chancesCreated": 57,
      "dribblesCompletedPer90": 1.9,
      "keyPassesPer90": 0.79,
      "tacklesWonPer90": 2.8,
      "interceptionsPer90": 1.2,
      "clearancesPer90": 4.2,
      "aerialDuelWinPercentage": 80.0,
      "tackledDribblerRate": 62.0,
      "progressivePassesPer90": 3.8,
      "longPassesCompletedPer90": 2.5,
      "passingAccuracy": 89.2
    },
    "leagueBenchmarks": [
      {
        "metric": "Passing Accuracy %",
        "player": 89.2,
        "avg": 82.0,
        "elite": 89.0
      },
      {
        "metric": "Clearances per 90",
        "player": 4.2,
        "avg": 2.6,
        "elite": 4.0
      },
      {
        "metric": "Aerial Duel Win %",
        "player": 80.0,
        "avg": 54.5,
        "elite": 68.0
      },
      {
        "metric": "Tackles Won per 90",
        "player": 2.8,
        "avg": 1.1,
        "elite": 2.0
      }
    ],
    "heatmap": [
      {
        "x": 14,
        "y": 25,
        "r": 38,
        "v": 0.8
      },
      {
        "x": 14,
        "y": 45,
        "r": 40,
        "v": 0.85
      },
      {
        "x": 14,
        "y": 65,
        "r": 35,
        "v": 0.7
      },
      {
        "x": 14,
        "y": 12,
        "r": 30,
        "v": 0.6
      }
    ],
    "strengths": [
      "Defending",
      "Workrate",
      "Aerial Dominance"
    ],
    "weaknesses": [
      "Dribbling",
      "Pace"
    ]
  },
  {
    "id": "patrick-dorgu",
    "name": "Patrick Dorgu",
    "age": 26,
    "position": "DF",
    "role": "Attacking Fullback",
    "club": "Man Utd",
    "league": "Premier League",
    "nation": "England",
    "value": 24600000,
    "rating": 83,
    "general": {
      "apps": 15,
      "mins": 1440,
      "goals": 4,
      "assists": 4,
      "yellowCards": 5,
      "redCards": 0
    },
    "attributes": {
      "pace": 78,
      "dribbling": 84,
      "passing": 86,
      "defending": 94,
      "physicality": 86,
      "tactical": 95,
      "workrate": 80
    },
    "detailedStats": {
      "goalsPer90": 0.25,
      "shotsOnTargetPer90": 0.9,
      "expectedGoals": 2.4,
      "shotConversionRate": 14.8,
      "touchesInBoxPer90": 1.6,
      "chancesCreated": 49,
      "dribblesCompletedPer90": 1.7,
      "keyPassesPer90": 1.23,
      "tacklesWonPer90": 2.6,
      "interceptionsPer90": 1.2,
      "clearancesPer90": 3.8,
      "aerialDuelWinPercentage": 78.5,
      "tackledDribblerRate": 62.0,
      "progressivePassesPer90": 3.5,
      "longPassesCompletedPer90": 2.3,
      "passingAccuracy": 87.9
    },
    "leagueBenchmarks": [
      {
        "metric": "Passing Accuracy %",
        "player": 87.9,
        "avg": 82.0,
        "elite": 89.0
      },
      {
        "metric": "Clearances per 90",
        "player": 3.8,
        "avg": 2.6,
        "elite": 4.0
      },
      {
        "metric": "Aerial Duel Win %",
        "player": 78.5,
        "avg": 54.5,
        "elite": 68.0
      },
      {
        "metric": "Tackles Won per 90",
        "player": 2.6,
        "avg": 1.1,
        "elite": 2.0
      }
    ],
    "heatmap": [
      {
        "x": 86,
        "y": 25,
        "r": 38,
        "v": 0.8
      },
      {
        "x": 86,
        "y": 45,
        "r": 40,
        "v": 0.85
      },
      {
        "x": 86,
        "y": 65,
        "r": 35,
        "v": 0.7
      },
      {
        "x": 86,
        "y": 12,
        "r": 30,
        "v": 0.6
      }
    ],
    "strengths": [
      "Defending",
      "Tactical awareness",
      "Aerial Dominance"
    ],
    "weaknesses": [
      "Workrate",
      "Pace"
    ]
  },
  {
    "id": "harry-maguire",
    "name": "Harry Maguire",
    "age": 27,
    "position": "DF",
    "role": "Attacking Fullback",
    "club": "Man Utd",
    "league": "Premier League",
    "nation": "Spain",
    "value": 26400000,
    "rating": 82,
    "general": {
      "apps": 19,
      "mins": 1649,
      "goals": 1,
      "assists": 2,
      "yellowCards": 3,
      "redCards": 1
    },
    "attributes": {
      "pace": 72,
      "dribbling": 64,
      "passing": 64,
      "defending": 94,
      "physicality": 80,
      "tactical": 80,
      "workrate": 83
    },
    "detailedStats": {
      "goalsPer90": 0.05,
      "shotsOnTargetPer90": 0.6,
      "expectedGoals": 1.1,
      "shotConversionRate": 11.2,
      "touchesInBoxPer90": 1.1,
      "chancesCreated": 7,
      "dribblesCompletedPer90": 0.6,
      "keyPassesPer90": 0.17,
      "tacklesWonPer90": 2.3,
      "interceptionsPer90": 1.0,
      "clearancesPer90": 3.4,
      "aerialDuelWinPercentage": 74.1,
      "tackledDribblerRate": 56.3,
      "progressivePassesPer90": 1.8,
      "longPassesCompletedPer90": 1.2,
      "passingAccuracy": 81.2
    },
    "leagueBenchmarks": [
      {
        "metric": "Passing Accuracy %",
        "player": 81.2,
        "avg": 82.0,
        "elite": 89.0
      },
      {
        "metric": "Clearances per 90",
        "player": 3.4,
        "avg": 2.6,
        "elite": 4.0
      },
      {
        "metric": "Aerial Duel Win %",
        "player": 74.1,
        "avg": 54.5,
        "elite": 68.0
      },
      {
        "metric": "Tackles Won per 90",
        "player": 2.3,
        "avg": 1.1,
        "elite": 2.0
      }
    ],
    "heatmap": [
      {
        "x": 14,
        "y": 25,
        "r": 38,
        "v": 0.8
      },
      {
        "x": 14,
        "y": 45,
        "r": 40,
        "v": 0.85
      },
      {
        "x": 14,
        "y": 65,
        "r": 35,
        "v": 0.7
      },
      {
        "x": 14,
        "y": 12,
        "r": 30,
        "v": 0.6
      }
    ],
    "strengths": [
      "Defending",
      "Workrate",
      "Aerial Dominance"
    ],
    "weaknesses": [
      "Dribbling",
      "Passing"
    ]
  },
  {
    "id": "luke-shaw",
    "name": "Luke Shaw",
    "age": 28,
    "position": "DF",
    "role": "Attacking Fullback",
    "club": "Man Utd",
    "league": "Premier League",
    "nation": "Spain",
    "value": 27000000,
    "rating": 86,
    "general": {
      "apps": 38,
      "mins": 3220,
      "goals": 1,
      "assists": 1,
      "yellowCards": 9,
      "redCards": 0
    },
    "attributes": {
      "pace": 68,
      "dribbling": 71,
      "passing": 80,
      "defending": 94,
      "physicality": 92,
      "tactical": 89,
      "workrate": 96
    },
    "detailedStats": {
      "goalsPer90": 0.03,
      "shotsOnTargetPer90": 0.5,
      "expectedGoals": 0.7,
      "shotConversionRate": 11.2,
      "touchesInBoxPer90": 0.8,
      "chancesCreated": 39,
      "dribblesCompletedPer90": 1.4,
      "keyPassesPer90": 0.44,
      "tacklesWonPer90": 2.9,
      "interceptionsPer90": 1.1,
      "clearancesPer90": 4.3,
      "aerialDuelWinPercentage": 80.0,
      "tackledDribblerRate": 59.7,
      "progressivePassesPer90": 3.1,
      "longPassesCompletedPer90": 2.0,
      "passingAccuracy": 86.3
    },
    "leagueBenchmarks": [
      {
        "metric": "Passing Accuracy %",
        "player": 86.3,
        "avg": 82.0,
        "elite": 89.0
      },
      {
        "metric": "Clearances per 90",
        "player": 4.3,
        "avg": 2.6,
        "elite": 4.0
      },
      {
        "metric": "Aerial Duel Win %",
        "player": 80.0,
        "avg": 54.5,
        "elite": 68.0
      },
      {
        "metric": "Tackles Won per 90",
        "player": 2.9,
        "avg": 1.1,
        "elite": 2.0
      }
    ],
    "heatmap": [
      {
        "x": 86,
        "y": 25,
        "r": 38,
        "v": 0.8
      },
      {
        "x": 86,
        "y": 45,
        "r": 40,
        "v": 0.85
      },
      {
        "x": 86,
        "y": 65,
        "r": 35,
        "v": 0.7
      },
      {
        "x": 86,
        "y": 12,
        "r": 30,
        "v": 0.6
      }
    ],
    "strengths": [
      "Defending",
      "Workrate",
      "Aerial Dominance"
    ],
    "weaknesses": [
      "Dribbling",
      "Pace"
    ]
  },
  {
    "id": "leny-yoro",
    "name": "Leny Yoro",
    "age": 29,
    "position": "DF",
    "role": "Attacking Fullback",
    "club": "Man Utd",
    "league": "Premier League",
    "nation": "England",
    "value": 24600000,
    "rating": 78,
    "general": {
      "apps": 18,
      "mins": 1730,
      "goals": 0,
      "assists": 1,
      "yellowCards": 1,
      "redCards": 0
    },
    "attributes": {
      "pace": 69,
      "dribbling": 63,
      "passing": 65,
      "defending": 91,
      "physicality": 76,
      "tactical": 78,
      "workrate": 84
    },
    "detailedStats": {
      "goalsPer90": 0.0,
      "shotsOnTargetPer90": 0.5,
      "expectedGoals": 1.3,
      "shotConversionRate": 10.0,
      "touchesInBoxPer90": 0.9,
      "chancesCreated": 10,
      "dribblesCompletedPer90": 0.7,
      "keyPassesPer90": 0.22,
      "tacklesWonPer90": 2.1,
      "interceptionsPer90": 1.0,
      "clearancesPer90": 3.1,
      "aerialDuelWinPercentage": 71.3,
      "tackledDribblerRate": 55.3,
      "progressivePassesPer90": 1.9,
      "longPassesCompletedPer90": 1.3,
      "passingAccuracy": 81.7
    },
    "leagueBenchmarks": [
      {
        "metric": "Passing Accuracy %",
        "player": 81.7,
        "avg": 82.0,
        "elite": 89.0
      },
      {
        "metric": "Clearances per 90",
        "player": 3.1,
        "avg": 2.6,
        "elite": 4.0
      },
      {
        "metric": "Aerial Duel Win %",
        "player": 71.3,
        "avg": 54.5,
        "elite": 68.0
      },
      {
        "metric": "Tackles Won per 90",
        "player": 2.1,
        "avg": 1.1,
        "elite": 2.0
      }
    ],
    "heatmap": [
      {
        "x": 14,
        "y": 25,
        "r": 38,
        "v": 0.8
      },
      {
        "x": 14,
        "y": 45,
        "r": 40,
        "v": 0.85
      },
      {
        "x": 14,
        "y": 65,
        "r": 35,
        "v": 0.7
      },
      {
        "x": 14,
        "y": 12,
        "r": 30,
        "v": 0.6
      }
    ],
    "strengths": [
      "Defending",
      "Workrate",
      "Aerial Dominance"
    ],
    "weaknesses": [
      "Dribbling",
      "Passing"
    ]
  },
  {
    "id": "ayden-heaven",
    "name": "Ayden Heaven",
    "age": 32,
    "position": "DF",
    "role": "Central Defender",
    "club": "Man Utd",
    "league": "Premier League",
    "nation": "England",
    "value": 22200000,
    "rating": 76,
    "general": {
      "apps": 11,
      "mins": 920,
      "goals": 0,
      "assists": 1,
      "yellowCards": 2,
      "redCards": 0
    },
    "attributes": {
      "pace": 66,
      "dribbling": 57,
      "passing": 62,
      "defending": 85,
      "physicality": 70,
      "tactical": 72,
      "workrate": 73
    },
    "detailedStats": {
      "goalsPer90": 0.0,
      "shotsOnTargetPer90": 0.5,
      "expectedGoals": 0.3,
      "shotConversionRate": 10.0,
      "touchesInBoxPer90": 0.6,
      "chancesCreated": 4,
      "dribblesCompletedPer90": 0.5,
      "keyPassesPer90": 0.16,
      "tacklesWonPer90": 1.8,
      "interceptionsPer90": 0.9,
      "clearancesPer90": 2.7,
      "aerialDuelWinPercentage": 66.7,
      "tackledDribblerRate": 52.9,
      "progressivePassesPer90": 1.7,
      "longPassesCompletedPer90": 1.1,
      "passingAccuracy": 80.6
    },
    "leagueBenchmarks": [
      {
        "metric": "Passing Accuracy %",
        "player": 80.6,
        "avg": 82.0,
        "elite": 89.0
      },
      {
        "metric": "Clearances per 90",
        "player": 2.7,
        "avg": 2.6,
        "elite": 4.0
      },
      {
        "metric": "Aerial Duel Win %",
        "player": 66.7,
        "avg": 54.5,
        "elite": 68.0
      },
      {
        "metric": "Tackles Won per 90",
        "player": 1.8,
        "avg": 1.1,
        "elite": 2.0
      }
    ],
    "heatmap": [
      {
        "x": 50,
        "y": 20,
        "r": 45,
        "v": 0.9
      },
      {
        "x": 42,
        "y": 18,
        "r": 32,
        "v": 0.8
      },
      {
        "x": 58,
        "y": 18,
        "r": 32,
        "v": 0.8
      },
      {
        "x": 50,
        "y": 10,
        "r": 28,
        "v": 0.6
      }
    ],
    "strengths": [
      "Defending",
      "Workrate"
    ],
    "weaknesses": [
      "Dribbling",
      "Passing"
    ]
  },
  {
    "id": "bruno-borges-fernandes",
    "name": "Bruno Borges Fernandes",
    "age": 34,
    "position": "MF",
    "role": "Attacking Playmaker",
    "club": "Man Utd",
    "league": "Premier League",
    "nation": "Spain",
    "value": 62400000,
    "rating": 93,
    "general": {
      "apps": 35,
      "mins": 3065,
      "goals": 9,
      "assists": 24,
      "yellowCards": 5,
      "redCards": 0
    },
    "attributes": {
      "pace": 90,
      "dribbling": 96,
      "passing": 97,
      "defending": 88,
      "physicality": 94,
      "tactical": 95,
      "workrate": 96
    },
    "detailedStats": {
      "goalsPer90": 0.26,
      "shotsOnTargetPer90": 0.9,
      "expectedGoals": 10.8,
      "shotConversionRate": 20.8,
      "touchesInBoxPer90": 2.5,
      "chancesCreated": 242,
      "dribblesCompletedPer90": 6.9,
      "keyPassesPer90": 2.85,
      "passingAccuracy": 94.0,
      "progressivePassesPer90": 21.4,
      "tacklesWonPer90": 5.0,
      "interceptionsPer90": 1.5,
      "ballRecoveriesPer90": 11.9
    },
    "leagueBenchmarks": [
      {
        "metric": "Key Passes per 90",
        "player": 2.85,
        "avg": 0.9,
        "elite": 2.2
      },
      {
        "metric": "Progressive Passes p90",
        "player": 21.4,
        "avg": 2.8,
        "elite": 6.2
      },
      {
        "metric": "Chances Created",
        "player": 242,
        "avg": 16,
        "elite": 55
      },
      {
        "metric": "Passing Accuracy %",
        "player": 94.0,
        "avg": 79.5,
        "elite": 87.0
      }
    ],
    "heatmap": [
      {
        "x": 50,
        "y": 64,
        "r": 42,
        "v": 0.9
      },
      {
        "x": 40,
        "y": 55,
        "r": 35,
        "v": 0.75
      },
      {
        "x": 60,
        "y": 55,
        "r": 35,
        "v": 0.75
      },
      {
        "x": 50,
        "y": 76,
        "r": 30,
        "v": 0.8
      }
    ],
    "strengths": [
      "Dribbling",
      "Passing",
      "Clinical Finishing"
    ],
    "weaknesses": [
      "Defending",
      "Pace"
    ]
  },
  {
    "id": "matheus-santos-carneiro-da-cunha",
    "name": "Matheus Santos Carneiro da Cunha",
    "age": 20,
    "position": "MF",
    "role": "Attacking Playmaker",
    "club": "Man Utd",
    "league": "Premier League",
    "nation": "England",
    "value": 48600000,
    "rating": 90,
    "general": {
      "apps": 29,
      "mins": 2493,
      "goals": 10,
      "assists": 4,
      "yellowCards": 4,
      "redCards": 0
    },
    "attributes": {
      "pace": 92,
      "dribbling": 96,
      "passing": 96,
      "defending": 88,
      "physicality": 94,
      "tactical": 95,
      "workrate": 95
    },
    "detailedStats": {
      "goalsPer90": 0.36,
      "shotsOnTargetPer90": 1.0,
      "expectedGoals": 6.9,
      "shotConversionRate": 22.0,
      "touchesInBoxPer90": 3.2,
      "chancesCreated": 68,
      "dribblesCompletedPer90": 2.2,
      "keyPassesPer90": 0.98,
      "passingAccuracy": 91.1,
      "progressivePassesPer90": 7.5,
      "tacklesWonPer90": 3.1,
      "interceptionsPer90": 1.0,
      "ballRecoveriesPer90": 8.0
    },
    "leagueBenchmarks": [
      {
        "metric": "Key Passes per 90",
        "player": 0.98,
        "avg": 0.9,
        "elite": 2.2
      },
      {
        "metric": "Progressive Passes p90",
        "player": 7.5,
        "avg": 2.8,
        "elite": 6.2
      },
      {
        "metric": "Chances Created",
        "player": 68,
        "avg": 16,
        "elite": 55
      },
      {
        "metric": "Passing Accuracy %",
        "player": 91.1,
        "avg": 79.5,
        "elite": 87.0
      }
    ],
    "heatmap": [
      {
        "x": 50,
        "y": 64,
        "r": 42,
        "v": 0.9
      },
      {
        "x": 40,
        "y": 55,
        "r": 35,
        "v": 0.75
      },
      {
        "x": 60,
        "y": 55,
        "r": 35,
        "v": 0.75
      },
      {
        "x": 50,
        "y": 76,
        "r": 30,
        "v": 0.8
      }
    ],
    "strengths": [
      "Dribbling",
      "Passing",
      "Clinical Finishing"
    ],
    "weaknesses": [
      "Defending",
      "Pace"
    ]
  },
  {
    "id": "amad-diallo",
    "name": "Amad Diallo",
    "age": 22,
    "position": "MF",
    "role": "Attacking Playmaker",
    "club": "Man Utd",
    "league": "Premier League",
    "nation": "Spain",
    "value": 37200000,
    "rating": 83,
    "general": {
      "apps": 27,
      "mins": 2339,
      "goals": 2,
      "assists": 5,
      "yellowCards": 2,
      "redCards": 0
    },
    "attributes": {
      "pace": 90,
      "dribbling": 96,
      "passing": 97,
      "defending": 79,
      "physicality": 84,
      "tactical": 95,
      "workrate": 93
    },
    "detailedStats": {
      "goalsPer90": 0.08,
      "shotsOnTargetPer90": 0.6,
      "expectedGoals": 5.5,
      "shotConversionRate": 12.4,
      "touchesInBoxPer90": 2.5,
      "chancesCreated": 74,
      "dribblesCompletedPer90": 2.4,
      "keyPassesPer90": 1.15,
      "passingAccuracy": 91.9,
      "progressivePassesPer90": 8.0,
      "tacklesWonPer90": 2.3,
      "interceptionsPer90": 0.9,
      "ballRecoveriesPer90": 6.4
    },
    "leagueBenchmarks": [
      {
        "metric": "Key Passes per 90",
        "player": 1.15,
        "avg": 0.9,
        "elite": 2.2
      },
      {
        "metric": "Progressive Passes p90",
        "player": 8.0,
        "avg": 2.8,
        "elite": 6.2
      },
      {
        "metric": "Chances Created",
        "player": 74,
        "avg": 16,
        "elite": 55
      },
      {
        "metric": "Passing Accuracy %",
        "player": 91.9,
        "avg": 79.5,
        "elite": 87.0
      }
    ],
    "heatmap": [
      {
        "x": 50,
        "y": 64,
        "r": 42,
        "v": 0.9
      },
      {
        "x": 40,
        "y": 55,
        "r": 35,
        "v": 0.75
      },
      {
        "x": 60,
        "y": 55,
        "r": 35,
        "v": 0.75
      },
      {
        "x": 50,
        "y": 76,
        "r": 30,
        "v": 0.8
      }
    ],
    "strengths": [
      "Dribbling",
      "Passing"
    ],
    "weaknesses": [
      "Defending",
      "Physicality"
    ]
  },
  {
    "id": "mason-mount",
    "name": "Mason Mount",
    "age": 25,
    "position": "MF",
    "role": "Box-to-Box Midfielder",
    "club": "Man Utd",
    "league": "Premier League",
    "nation": "France",
    "value": 35400000,
    "rating": 78,
    "general": {
      "apps": 12,
      "mins": 1010,
      "goals": 3,
      "assists": 0,
      "yellowCards": 2,
      "redCards": 0
    },
    "attributes": {
      "pace": 68,
      "dribbling": 70,
      "passing": 74,
      "defending": 63,
      "physicality": 68,
      "tactical": 79,
      "workrate": 74
    },
    "detailedStats": {
      "goalsPer90": 0.27,
      "shotsOnTargetPer90": 0.9,
      "expectedGoals": 1.6,
      "shotConversionRate": 13.6,
      "touchesInBoxPer90": 1.1,
      "chancesCreated": 26,
      "dribblesCompletedPer90": 1.1,
      "keyPassesPer90": 0.95,
      "passingAccuracy": 85.6,
      "progressivePassesPer90": 4.1,
      "tacklesWonPer90": 1.5,
      "interceptionsPer90": 0.6,
      "ballRecoveriesPer90": 4.8
    },
    "leagueBenchmarks": [
      {
        "metric": "Key Passes per 90",
        "player": 0.95,
        "avg": 0.9,
        "elite": 2.2
      },
      {
        "metric": "Progressive Passes p90",
        "player": 4.1,
        "avg": 2.8,
        "elite": 6.2
      },
      {
        "metric": "Chances Created",
        "player": 26,
        "avg": 16,
        "elite": 55
      },
      {
        "metric": "Passing Accuracy %",
        "player": 85.6,
        "avg": 79.5,
        "elite": 87.0
      }
    ],
    "heatmap": [
      {
        "x": 50,
        "y": 42,
        "r: ": 45,
        "v": 0.9
      },
      {
        "x": 44,
        "y": 35,
        "r": 38,
        "v": 0.8
      },
      {
        "x": 56,
        "y": 35,
        "r": 38,
        "v": 0.8
      },
      {
        "x": 50,
        "y": 55,
        "r": 35,
        "v": 0.75
      }
    ],
    "strengths": [
      "Passing",
      "Tactical awareness"
    ],
    "weaknesses": [
      "Defending",
      "Physicality"
    ]
  },
  {
    "id": "carlos-henrique-casimiro",
    "name": "Carlos Henrique Casimiro",
    "age": 27,
    "position": "MF",
    "role": "Attacking Playmaker",
    "club": "Man Utd",
    "league": "Premier League",
    "nation": "Spain",
    "value": 34800000,
    "rating": 93,
    "general": {
      "apps": 33,
      "mins": 2575,
      "goals": 9,
      "assists": 4,
      "yellowCards": 9,
      "redCards": 1
    },
    "attributes": {
      "pace": 89,
      "dribbling": 96,
      "passing": 95,
      "defending": 88,
      "physicality": 94,
      "tactical": 95,
      "workrate": 96
    },
    "detailedStats": {
      "goalsPer90": 0.31,
      "shotsOnTargetPer90": 1.0,
      "expectedGoals": 5.4,
      "shotConversionRate": 20.8,
      "touchesInBoxPer90": 2.5,
      "chancesCreated": 67,
      "dribblesCompletedPer90": 2.2,
      "keyPassesPer90": 0.94,
      "passingAccuracy": 90.9,
      "progressivePassesPer90": 7.4,
      "tacklesWonPer90": 3.8,
      "interceptionsPer90": 1.0,
      "ballRecoveriesPer90": 9.5
    },
    "leagueBenchmarks": [
      {
        "metric": "Key Passes per 90",
        "player": 0.94,
        "avg": 0.9,
        "elite": 2.2
      },
      {
        "metric": "Progressive Passes p90",
        "player": 7.4,
        "avg": 2.8,
        "elite": 6.2
      },
      {
        "metric": "Chances Created",
        "player": 67,
        "avg": 16,
        "elite": 55
      },
      {
        "metric": "Passing Accuracy %",
        "player": 90.9,
        "avg": 79.5,
        "elite": 87.0
      }
    ],
    "heatmap": [
      {
        "x": 50,
        "y": 64,
        "r": 42,
        "v": 0.9
      },
      {
        "x": 40,
        "y": 55,
        "r": 35,
        "v": 0.75
      },
      {
        "x": 60,
        "y": 55,
        "r": 35,
        "v": 0.75
      },
      {
        "x": 50,
        "y": 76,
        "r": 30,
        "v": 0.8
      }
    ],
    "strengths": [
      "Dribbling",
      "Workrate",
      "Clinical Finishing"
    ],
    "weaknesses": [
      "Defending",
      "Pace"
    ]
  },
  {
    "id": "kobbie-mainoo",
    "name": "Kobbie Mainoo",
    "age": 28,
    "position": "MF",
    "role": "Attacking Playmaker",
    "club": "Man Utd",
    "league": "Premier League",
    "nation": "Spain",
    "value": 28200000,
    "rating": 80,
    "general": {
      "apps": 16,
      "mins": 1653,
      "goals": 1,
      "assists": 2,
      "yellowCards": 2,
      "redCards": 0
    },
    "attributes": {
      "pace": 64,
      "dribbling": 73,
      "passing": 84,
      "defending": 74,
      "physicality": 79,
      "tactical": 85,
      "workrate": 83
    },
    "detailedStats": {
      "goalsPer90": 0.05,
      "shotsOnTargetPer90": 0.6,
      "expectedGoals": 0.5,
      "shotConversionRate": 11.2,
      "touchesInBoxPer90": 0.8,
      "chancesCreated": 45,
      "dribblesCompletedPer90": 1.6,
      "keyPassesPer90": 0.98,
      "passingAccuracy": 88.0,
      "progressivePassesPer90": 5.6,
      "tacklesWonPer90": 2.0,
      "interceptionsPer90": 0.7,
      "ballRecoveriesPer90": 5.9
    },
    "leagueBenchmarks": [
      {
        "metric": "Key Passes per 90",
        "player": 0.98,
        "avg": 0.9,
        "elite": 2.2
      },
      {
        "metric": "Progressive Passes p90",
        "player": 5.6,
        "avg": 2.8,
        "elite": 6.2
      },
      {
        "metric": "Chances Created",
        "player": 45,
        "avg": 16,
        "elite": 55
      },
      {
        "metric": "Passing Accuracy %",
        "player": 88.0,
        "avg": 79.5,
        "elite": 87.0
      }
    ],
    "heatmap": [
      {
        "x": 50,
        "y": 64,
        "r": 42,
        "v": 0.9
      },
      {
        "x": 40,
        "y": 55,
        "r": 35,
        "v": 0.75
      },
      {
        "x": 60,
        "y": 55,
        "r": 35,
        "v": 0.75
      },
      {
        "x": 50,
        "y": 76,
        "r": 30,
        "v": 0.8
      }
    ],
    "strengths": [
      "Passing",
      "Tactical awareness"
    ],
    "weaknesses": [
      "Dribbling",
      "Pace"
    ]
  },
  {
    "id": "manuel-ugarte-ribeiro",
    "name": "Manuel Ugarte Ribeiro",
    "age": 29,
    "position": "MF",
    "role": "Box-to-Box Midfielder",
    "club": "Man Utd",
    "league": "Premier League",
    "nation": "England",
    "value": 28200000,
    "rating": 75,
    "general": {
      "apps": 8,
      "mins": 876,
      "goals": 0,
      "assists": 0,
      "yellowCards": 1,
      "redCards": 0
    },
    "attributes": {
      "pace": 62,
      "dribbling": 60,
      "passing": 65,
      "defending": 61,
      "physicality": 66,
      "tactical": 72,
      "workrate": 72
    },
    "detailedStats": {
      "goalsPer90": 0.0,
      "shotsOnTargetPer90": 0.5,
      "expectedGoals": 0.7,
      "shotConversionRate": 10.0,
      "touchesInBoxPer90": 0.7,
      "chancesCreated": 10,
      "dribblesCompletedPer90": 0.7,
      "keyPassesPer90": 0.43,
      "passingAccuracy": 83.4,
      "progressivePassesPer90": 2.8,
      "tacklesWonPer90": 1.4,
      "interceptionsPer90": 0.6,
      "ballRecoveriesPer90": 4.6
    },
    "leagueBenchmarks": [
      {
        "metric": "Key Passes per 90",
        "player": 0.43,
        "avg": 0.9,
        "elite": 2.2
      },
      {
        "metric": "Progressive Passes p90",
        "player": 2.8,
        "avg": 2.8,
        "elite": 6.2
      },
      {
        "metric": "Chances Created",
        "player": 10,
        "avg": 16,
        "elite": 55
      },
      {
        "metric": "Passing Accuracy %",
        "player": 83.4,
        "avg": 79.5,
        "elite": 87.0
      }
    ],
    "heatmap": [
      {
        "x": 50,
        "y": 42,
        "r: ": 45,
        "v": 0.9
      },
      {
        "x": 44,
        "y": 35,
        "r": 38,
        "v": 0.8
      },
      {
        "x": 56,
        "y": 35,
        "r": 38,
        "v": 0.8
      },
      {
        "x": 50,
        "y": 55,
        "r": 35,
        "v": 0.75
      }
    ],
    "strengths": [
      "Workrate",
      "Tactical awareness"
    ],
    "weaknesses": [
      "Dribbling",
      "Defending"
    ]
  },
  {
    "id": "joshua-zirkzee",
    "name": "Joshua Zirkzee",
    "age": 21,
    "position": "FW",
    "role": "Complete Winger / Striker",
    "club": "Man Utd",
    "league": "Premier League",
    "nation": "Spain",
    "value": 34800000,
    "rating": 76,
    "general": {
      "apps": 5,
      "mins": 607,
      "goals": 2,
      "assists": 1,
      "yellowCards": 3,
      "redCards": 0
    },
    "attributes": {
      "pace": 83,
      "dribbling": 71,
      "passing": 71,
      "defending": 29,
      "physicality": 65,
      "tactical": 79,
      "workrate": 68
    },
    "detailedStats": {
      "goalsPer90": 0.3,
      "shotsOnTargetPer90": 0.9,
      "expectedGoals": 2.7,
      "shotConversionRate": 12.4,
      "touchesInBoxPer90": 3.2,
      "chancesCreated": 22,
      "dribblesCompletedPer90": 1.0,
      "keyPassesPer90": 1.32
    },
    "leagueBenchmarks": [
      {
        "metric": "Goals per 90",
        "player": 0.3,
        "avg": 0.22,
        "elite": 0.65
      },
      {
        "metric": "Shot Conversion %",
        "player": 12.4,
        "avg": 10.5,
        "elite": 18.0
      },
      {
        "metric": "Touches in Box p90",
        "player": 3.2,
        "avg": 2.5,
        "elite": 5.5
      },
      {
        "metric": "Expected Goals (xG)",
        "player": 2.7,
        "avg": 4.5,
        "elite": 14.0
      }
    ],
    "heatmap": [
      {
        "x": 50,
        "y": 84,
        "r": 38,
        "v": 0.9
      },
      {
        "x": 48,
        "y": 76,
        "r": 32,
        "v": 0.75
      },
      {
        "x": 52,
        "y": 80,
        "r": 32,
        "v": 0.8
      },
      {
        "x": 50,
        "y": 92,
        "r": 28,
        "v": 0.85
      }
    ],
    "strengths": [
      "Tactical awareness",
      "Pace"
    ],
    "weaknesses": [
      "Defending",
      "Defensive Tracking Back"
    ]
  },
  {
    "id": "benjamin-sesko",
    "name": "Benjamin Sesko",
    "age": 26,
    "position": "FW",
    "role": "Complete Winger / Striker",
    "club": "Man Utd",
    "league": "Premier League",
    "nation": "England",
    "value": 43200000,
    "rating": 85,
    "general": {
      "apps": 17,
      "mins": 1630,
      "goals": 11,
      "assists": 2,
      "yellowCards": 2,
      "redCards": 0
    },
    "attributes": {
      "pace": 98,
      "dribbling": 93,
      "passing": 70,
      "defending": 37,
      "physicality": 87,
      "tactical": 95,
      "workrate": 83
    },
    "detailedStats": {
      "goalsPer90": 0.61,
      "shotsOnTargetPer90": 1.4,
      "expectedGoals": 9.2,
      "shotConversionRate": 23.2,
      "touchesInBoxPer90": 6.0,
      "chancesCreated": 19,
      "dribblesCompletedPer90": 0.9,
      "keyPassesPer90": 0.43
    },
    "leagueBenchmarks": [
      {
        "metric": "Goals per 90",
        "player": 0.61,
        "avg": 0.22,
        "elite": 0.65
      },
      {
        "metric": "Shot Conversion %",
        "player": 23.2,
        "avg": 10.5,
        "elite": 18.0
      },
      {
        "metric": "Touches in Box p90",
        "player": 6.0,
        "avg": 2.5,
        "elite": 5.5
      },
      {
        "metric": "Expected Goals (xG)",
        "player": 9.2,
        "avg": 4.5,
        "elite": 14.0
      }
    ],
    "heatmap": [
      {
        "x": 50,
        "y": 84,
        "r": 38,
        "v": 0.9
      },
      {
        "x": 48,
        "y": 76,
        "r": 32,
        "v": 0.75
      },
      {
        "x": 52,
        "y": 80,
        "r": 32,
        "v": 0.8
      },
      {
        "x": 50,
        "y": 92,
        "r": 28,
        "v": 0.85
      }
    ],
    "strengths": [
      "Clinical Finishing",
      "Tactical awareness",
      "Pace"
    ],
    "weaknesses": [
      "Defending",
      "Defensive Tracking Back"
    ]
  },
  {
    "id": "senne-lammens",
    "name": "Senne Lammens",
    "age": 33,
    "position": "GK",
    "role": "Sweeper Keeper",
    "club": "Man Utd",
    "league": "Premier League",
    "nation": "Spain",
    "value": 30600000,
    "rating": 85,
    "general": {
      "apps": 32,
      "mins": 2880,
      "goals": 0,
      "assists": 0,
      "yellowCards": 0,
      "redCards": 0
    },
    "attributes": {
      "pace": 60,
      "dribbling": 55,
      "passing": 86,
      "defending": 93,
      "physicality": 94,
      "tactical": 80,
      "workrate": 96
    },
    "detailedStats": {
      "savePercentage": 80.8,
      "cleanSheets": 8,
      "goalsConceded": 39,
      "psxgDifference": 3.2,
      "passingAccuracy": 90.0,
      "sweeperActionsPer90": 1.0,
      "averageDistanceOfSweeperActions": 13.3
    },
    "leagueBenchmarks": [
      {
        "metric": "Save %",
        "player": 80.8,
        "avg": 69.5,
        "elite": 77.0
      },
      {
        "metric": "Clean Sheets",
        "player": 8,
        "avg": 4.5,
        "elite": 10.0
      },
      {
        "metric": "Sweeper Actions p90",
        "player": 1.0,
        "avg": 0.6,
        "elite": 1.2
      },
      {
        "metric": "Passing Accuracy %",
        "player": 90.0,
        "avg": 73.0,
        "elite": 82.0
      }
    ],
    "heatmap": [
      {
        "x": 50,
        "y": 6,
        "r": 35,
        "v": 0.98
      },
      {
        "x": 50,
        "y": 14,
        "r": 28,
        "v": 0.7
      },
      {
        "x": 45,
        "y": 8,
        "r": 22,
        "v": 0.55
      },
      {
        "x": 55,
        "y": 8,
        "r": 22,
        "v": 0.55
      }
    ],
    "strengths": [
      "Reflexes",
      "Workrate",
      "Physicality"
    ],
    "weaknesses": [
      "Dribbling",
      "Pace"
    ]
  },
  {
    "id": "jacob-ramsey",
    "name": "Jacob Ramsey",
    "age": 27,
    "position": "MF",
    "role": "Box-to-Box Midfielder",
    "club": "Newcastle",
    "league": "Premier League",
    "nation": "Spain",
    "value": 31800000,
    "rating": 78,
    "general": {
      "apps": 15,
      "mins": 1441,
      "goals": 2,
      "assists": 3,
      "yellowCards": 3,
      "redCards": 1
    },
    "attributes": {
      "pace": 68,
      "dribbling": 74,
      "passing": 82,
      "defending": 70,
      "physicality": 75,
      "tactical": 84,
      "workrate": 80
    },
    "detailedStats": {
      "goalsPer90": 0.12,
      "shotsOnTargetPer90": 0.7,
      "expectedGoals": 1.2,
      "shotConversionRate": 12.4,
      "touchesInBoxPer90": 1.1,
      "chancesCreated": 41,
      "dribblesCompletedPer90": 1.5,
      "keyPassesPer90": 1.03,
      "passingAccuracy": 87.5,
      "progressivePassesPer90": 5.3,
      "tacklesWonPer90": 1.8,
      "interceptionsPer90": 0.7,
      "ballRecoveriesPer90": 5.5
    },
    "leagueBenchmarks": [
      {
        "metric": "Key Passes per 90",
        "player": 1.03,
        "avg": 0.9,
        "elite": 2.2
      },
      {
        "metric": "Progressive Passes p90",
        "player": 5.3,
        "avg": 2.8,
        "elite": 6.2
      },
      {
        "metric": "Chances Created",
        "player": 41,
        "avg": 16,
        "elite": 55
      },
      {
        "metric": "Passing Accuracy %",
        "player": 87.5,
        "avg": 79.5,
        "elite": 87.0
      }
    ],
    "heatmap": [
      {
        "x": 50,
        "y": 42,
        "r: ": 45,
        "v": 0.9
      },
      {
        "x": 44,
        "y": 35,
        "r": 38,
        "v": 0.8
      },
      {
        "x": 56,
        "y": 35,
        "r": 38,
        "v": 0.8
      },
      {
        "x": 50,
        "y": 55,
        "r": 35,
        "v": 0.75
      }
    ],
    "strengths": [
      "Passing",
      "Tactical awareness"
    ],
    "weaknesses": [
      "Defending",
      "Pace"
    ]
  },
  {
    "id": "yoane-wissa",
    "name": "Yoane Wissa",
    "age": 20,
    "position": "FW",
    "role": "Complete Winger / Striker",
    "club": "Newcastle",
    "league": "Premier League",
    "nation": "England",
    "value": 43800000,
    "rating": 73,
    "general": {
      "apps": 4,
      "mins": 517,
      "goals": 1,
      "assists": 1,
      "yellowCards": 3,
      "redCards": 0
    },
    "attributes": {
      "pace": 79,
      "dribbling": 63,
      "passing": 63,
      "defending": 26,
      "physicality": 58,
      "tactical": 71,
      "workrate": 67
    },
    "detailedStats": {
      "goalsPer90": 0.17,
      "shotsOnTargetPer90": 0.8,
      "expectedGoals": 3.1,
      "shotConversionRate": 11.2,
      "touchesInBoxPer90": 2.8,
      "chancesCreated": 5,
      "dribblesCompletedPer90": 0.6,
      "keyPassesPer90": 0.41
    },
    "leagueBenchmarks": [
      {
        "metric": "Goals per 90",
        "player": 0.17,
        "avg": 0.22,
        "elite": 0.65
      },
      {
        "metric": "Shot Conversion %",
        "player": 11.2,
        "avg": 10.5,
        "elite": 18.0
      },
      {
        "metric": "Touches in Box p90",
        "player": 2.8,
        "avg": 2.5,
        "elite": 5.5
      },
      {
        "metric": "Expected Goals (xG)",
        "player": 3.1,
        "avg": 4.5,
        "elite": 14.0
      }
    ],
    "heatmap": [
      {
        "x": 50,
        "y": 84,
        "r": 38,
        "v": 0.9
      },
      {
        "x": 48,
        "y": 76,
        "r": 32,
        "v": 0.75
      },
      {
        "x": 52,
        "y": 80,
        "r": 32,
        "v": 0.8
      },
      {
        "x": 50,
        "y": 92,
        "r": 28,
        "v": 0.85
      }
    ],
    "strengths": [
      "Tactical awareness",
      "Pace"
    ],
    "weaknesses": [
      "Defending",
      "Defensive Tracking Back"
    ]
  },
  {
    "id": "nick-pope",
    "name": "Nick Pope",
    "age": 24,
    "position": "GK",
    "role": "Sweeper Keeper",
    "club": "Newcastle",
    "league": "Premier League",
    "nation": "Brazil",
    "value": 30000000,
    "rating": 83,
    "general": {
      "apps": 27,
      "mins": 2416,
      "goals": 0,
      "assists": 1,
      "yellowCards": 2,
      "redCards": 0
    },
    "attributes": {
      "pace": 61,
      "dribbling": 56,
      "passing": 88,
      "defending": 93,
      "physicality": 94,
      "tactical": 82,
      "workrate": 94
    },
    "detailedStats": {
      "savePercentage": 81.0,
      "cleanSheets": 7,
      "goalsConceded": 38,
      "psxgDifference": 2.8,
      "passingAccuracy": 90.0,
      "sweeperActionsPer90": 1.1,
      "averageDistanceOfSweeperActions": 13.4
    },
    "leagueBenchmarks": [
      {
        "metric": "Save %",
        "player": 81.0,
        "avg": 69.5,
        "elite": 77.0
      },
      {
        "metric": "Clean Sheets",
        "player": 7,
        "avg": 4.5,
        "elite": 10.0
      },
      {
        "metric": "Sweeper Actions p90",
        "player": 1.1,
        "avg": 0.6,
        "elite": 1.2
      },
      {
        "metric": "Passing Accuracy %",
        "player": 90.0,
        "avg": 73.0,
        "elite": 82.0
      }
    ],
    "heatmap": [
      {
        "x": 50,
        "y": 6,
        "r": 35,
        "v": 0.98
      },
      {
        "x": 50,
        "y": 14,
        "r": 28,
        "v": 0.7
      },
      {
        "x": 45,
        "y": 8,
        "r": 22,
        "v": 0.55
      },
      {
        "x": 55,
        "y": 8,
        "r": 22,
        "v": 0.55
      }
    ],
    "strengths": [
      "Reflexes",
      "Workrate",
      "Physicality"
    ],
    "weaknesses": [
      "Dribbling",
      "Pace"
    ]
  },
  {
    "id": "lewis-hall",
    "name": "Lewis Hall",
    "age": 28,
    "position": "DF",
    "role": "Attacking Fullback",
    "club": "Newcastle",
    "league": "Premier League",
    "nation": "Spain",
    "value": 31800000,
    "rating": 81,
    "general": {
      "apps": 24,
      "mins": 2176,
      "goals": 1,
      "assists": 2,
      "yellowCards": 4,
      "redCards": 0
    },
    "attributes": {
      "pace": 72,
      "dribbling": 80,
      "passing": 88,
      "defending": 94,
      "physicality": 91,
      "tactical": 94,
      "workrate": 91
    },
    "detailedStats": {
      "goalsPer90": 0.04,
      "shotsOnTargetPer90": 0.6,
      "expectedGoals": 1.0,
      "shotConversionRate": 11.2,
      "touchesInBoxPer90": 1.2,
      "chancesCreated": 54,
      "dribblesCompletedPer90": 1.8,
      "keyPassesPer90": 0.9,
      "tacklesWonPer90": 2.8,
      "interceptionsPer90": 1.2,
      "clearancesPer90": 4.3,
      "aerialDuelWinPercentage": 80.0,
      "tackledDribblerRate": 61.8,
      "progressivePassesPer90": 3.7,
      "longPassesCompletedPer90": 2.4,
      "passingAccuracy": 88.7
    },
    "leagueBenchmarks": [
      {
        "metric": "Passing Accuracy %",
        "player": 88.7,
        "avg": 82.0,
        "elite": 89.0
      },
      {
        "metric": "Clearances per 90",
        "player": 4.3,
        "avg": 2.6,
        "elite": 4.0
      },
      {
        "metric": "Aerial Duel Win %",
        "player": 80.0,
        "avg": 54.5,
        "elite": 68.0
      },
      {
        "metric": "Tackles Won per 90",
        "player": 2.8,
        "avg": 1.1,
        "elite": 2.0
      }
    ],
    "heatmap": [
      {
        "x": 86,
        "y": 25,
        "r": 38,
        "v": 0.8
      },
      {
        "x": 86,
        "y": 45,
        "r": 40,
        "v": 0.85
      },
      {
        "x": 86,
        "y": 65,
        "r": 35,
        "v": 0.7
      },
      {
        "x": 86,
        "y": 12,
        "r": 30,
        "v": 0.6
      }
    ],
    "strengths": [
      "Defending",
      "Tactical awareness",
      "Aerial Dominance"
    ],
    "weaknesses": [
      "Dribbling",
      "Pace"
    ]
  },
  {
    "id": "fabian-sch\u00e4r",
    "name": "Fabian Sch\u00e4r",
    "age": 29,
    "position": "DF",
    "role": "Attacking Fullback",
    "club": "Newcastle",
    "league": "Premier League",
    "nation": "England",
    "value": 31200000,
    "rating": 77,
    "general": {
      "apps": 11,
      "mins": 1089,
      "goals": 0,
      "assists": 0,
      "yellowCards": 1,
      "redCards": 0
    },
    "attributes": {
      "pace": 69,
      "dribbling": 61,
      "passing": 64,
      "defending": 88,
      "physicality": 74,
      "tactical": 76,
      "workrate": 75
    },
    "detailedStats": {
      "goalsPer90": 0.0,
      "shotsOnTargetPer90": 0.5,
      "expectedGoals": 1.0,
      "shotConversionRate": 10.0,
      "touchesInBoxPer90": 0.9,
      "chancesCreated": 7,
      "dribblesCompletedPer90": 0.6,
      "keyPassesPer90": 0.26,
      "tacklesWonPer90": 2.0,
      "interceptionsPer90": 1.0,
      "clearancesPer90": 3.0,
      "aerialDuelWinPercentage": 69.6,
      "tackledDribblerRate": 54.6,
      "progressivePassesPer90": 1.8,
      "longPassesCompletedPer90": 1.2,
      "passingAccuracy": 81.3
    },
    "leagueBenchmarks": [
      {
        "metric": "Passing Accuracy %",
        "player": 81.3,
        "avg": 82.0,
        "elite": 89.0
      },
      {
        "metric": "Clearances per 90",
        "player": 3.0,
        "avg": 2.6,
        "elite": 4.0
      },
      {
        "metric": "Aerial Duel Win %",
        "player": 69.6,
        "avg": 54.5,
        "elite": 68.0
      },
      {
        "metric": "Tackles Won per 90",
        "player": 2.0,
        "avg": 1.1,
        "elite": 2.0
      }
    ],
    "heatmap": [
      {
        "x": 14,
        "y": 25,
        "r": 38,
        "v": 0.8
      },
      {
        "x": 14,
        "y": 45,
        "r": 40,
        "v": 0.85
      },
      {
        "x": 14,
        "y": 65,
        "r": 35,
        "v": 0.7
      },
      {
        "x": 14,
        "y": 12,
        "r": 30,
        "v": 0.6
      }
    ],
    "strengths": [
      "Defending",
      "Tactical awareness",
      "Aerial Dominance"
    ],
    "weaknesses": [
      "Dribbling",
      "Passing"
    ]
  },
  {
    "id": "sven-botman",
    "name": "Sven Botman",
    "age": 30,
    "position": "DF",
    "role": "Attacking Fullback",
    "club": "Newcastle",
    "league": "Premier League",
    "nation": "France",
    "value": 29400000,
    "rating": 82,
    "general": {
      "apps": 21,
      "mins": 1834,
      "goals": 1,
      "assists": 1,
      "yellowCards": 2,
      "redCards": 0
    },
    "attributes": {
      "pace": 72,
      "dribbling": 66,
      "passing": 65,
      "defending": 94,
      "physicality": 94,
      "tactical": 86,
      "workrate": 86
    },
    "detailedStats": {
      "goalsPer90": 0.05,
      "shotsOnTargetPer90": 0.6,
      "expectedGoals": 1.7,
      "shotConversionRate": 11.2,
      "touchesInBoxPer90": 1.1,
      "chancesCreated": 10,
      "dribblesCompletedPer90": 0.7,
      "keyPassesPer90": 0.21,
      "tacklesWonPer90": 3.0,
      "interceptionsPer90": 1.1,
      "clearancesPer90": 4.5,
      "aerialDuelWinPercentage": 80.0,
      "tackledDribblerRate": 58.7,
      "progressivePassesPer90": 1.9,
      "longPassesCompletedPer90": 1.3,
      "passingAccuracy": 81.7
    },
    "leagueBenchmarks": [
      {
        "metric": "Passing Accuracy %",
        "player": 81.7,
        "avg": 82.0,
        "elite": 89.0
      },
      {
        "metric": "Clearances per 90",
        "player": 4.5,
        "avg": 2.6,
        "elite": 4.0
      },
      {
        "metric": "Aerial Duel Win %",
        "player": 80.0,
        "avg": 54.5,
        "elite": 68.0
      },
      {
        "metric": "Tackles Won per 90",
        "player": 3.0,
        "avg": 1.1,
        "elite": 2.0
      }
    ],
    "heatmap": [
      {
        "x": 86,
        "y": 25,
        "r": 38,
        "v": 0.8
      },
      {
        "x": 86,
        "y": 45,
        "r": 40,
        "v": 0.85
      },
      {
        "x": 86,
        "y": 65,
        "r": 35,
        "v": 0.7
      },
      {
        "x": 86,
        "y": 12,
        "r": 30,
        "v": 0.6
      }
    ],
    "strengths": [
      "Defending",
      "Physicality",
      "Aerial Dominance"
    ],
    "weaknesses": [
      "Dribbling",
      "Passing"
    ]
  },
  {
    "id": "dan-burn",
    "name": "Dan Burn",
    "age": 31,
    "position": "DF",
    "role": "Attacking Fullback",
    "club": "Newcastle",
    "league": "Premier League",
    "nation": "Brazil",
    "value": 30000000,
    "rating": 83,
    "general": {
      "apps": 25,
      "mins": 2195,
      "goals": 1,
      "assists": 3,
      "yellowCards": 9,
      "redCards": 1
    },
    "attributes": {
      "pace": 72,
      "dribbling": 66,
      "passing": 67,
      "defending": 94,
      "physicality": 90,
      "tactical": 85,
      "workrate": 91
    },
    "detailedStats": {
      "goalsPer90": 0.04,
      "shotsOnTargetPer90": 0.6,
      "expectedGoals": 1.1,
      "shotConversionRate": 11.2,
      "touchesInBoxPer90": 1.1,
      "chancesCreated": 13,
      "dribblesCompletedPer90": 0.8,
      "keyPassesPer90": 0.22,
      "tacklesWonPer90": 2.8,
      "interceptionsPer90": 1.1,
      "clearancesPer90": 4.1,
      "aerialDuelWinPercentage": 80.0,
      "tackledDribblerRate": 58.2,
      "progressivePassesPer90": 2.0,
      "longPassesCompletedPer90": 1.4,
      "passingAccuracy": 82.1
    },
    "leagueBenchmarks": [
      {
        "metric": "Passing Accuracy %",
        "player": 82.1,
        "avg": 82.0,
        "elite": 89.0
      },
      {
        "metric": "Clearances per 90",
        "player": 4.1,
        "avg": 2.6,
        "elite": 4.0
      },
      {
        "metric": "Aerial Duel Win %",
        "player": 80.0,
        "avg": 54.5,
        "elite": 68.0
      },
      {
        "metric": "Tackles Won per 90",
        "player": 2.8,
        "avg": 1.1,
        "elite": 2.0
      }
    ],
    "heatmap": [
      {
        "x": 14,
        "y": 25,
        "r": 38,
        "v": 0.8
      },
      {
        "x": 14,
        "y": 45,
        "r": 40,
        "v": 0.85
      },
      {
        "x": 14,
        "y": 65,
        "r": 35,
        "v": 0.7
      },
      {
        "x": 14,
        "y": 12,
        "r": 30,
        "v": 0.6
      }
    ],
    "strengths": [
      "Defending",
      "Workrate",
      "Aerial Dominance"
    ],
    "weaknesses": [
      "Dribbling",
      "Passing"
    ]
  },
  {
    "id": "tino-livramento",
    "name": "Tino Livramento",
    "age": 32,
    "position": "DF",
    "role": "Attacking Fullback",
    "club": "Newcastle",
    "league": "Premier League",
    "nation": "England",
    "value": 29400000,
    "rating": 78,
    "general": {
      "apps": 14,
      "mins": 1326,
      "goals": 0,
      "assists": 1,
      "yellowCards": 1,
      "redCards": 0
    },
    "attributes": {
      "pace": 66,
      "dribbling": 64,
      "passing": 73,
      "defending": 85,
      "physicality": 69,
      "tactical": 76,
      "workrate": 78
    },
    "detailedStats": {
      "goalsPer90": 0.0,
      "shotsOnTargetPer90": 0.5,
      "expectedGoals": 0.1,
      "shotConversionRate": 10.0,
      "touchesInBoxPer90": 0.6,
      "chancesCreated": 24,
      "dribblesCompletedPer90": 1.1,
      "keyPassesPer90": 0.68,
      "tacklesWonPer90": 1.7,
      "interceptionsPer90": 1.0,
      "clearancesPer90": 2.6,
      "aerialDuelWinPercentage": 66.0,
      "tackledDribblerRate": 54.6,
      "progressivePassesPer90": 2.5,
      "longPassesCompletedPer90": 1.7,
      "passingAccuracy": 84.0
    },
    "leagueBenchmarks": [
      {
        "metric": "Passing Accuracy %",
        "player": 84.0,
        "avg": 82.0,
        "elite": 89.0
      },
      {
        "metric": "Clearances per 90",
        "player": 2.6,
        "avg": 2.6,
        "elite": 4.0
      },
      {
        "metric": "Aerial Duel Win %",
        "player": 66.0,
        "avg": 54.5,
        "elite": 68.0
      },
      {
        "metric": "Tackles Won per 90",
        "player": 1.7,
        "avg": 1.1,
        "elite": 2.0
      }
    ],
    "heatmap": [
      {
        "x": 86,
        "y": 25,
        "r": 38,
        "v": 0.8
      },
      {
        "x": 86,
        "y": 45,
        "r": 40,
        "v": 0.85
      },
      {
        "x": 86,
        "y": 65,
        "r": 35,
        "v": 0.7
      },
      {
        "x": 86,
        "y": 12,
        "r": 30,
        "v": 0.6
      }
    ],
    "strengths": [
      "Defending",
      "Workrate"
    ],
    "weaknesses": [
      "Dribbling",
      "Pace"
    ]
  },
  {
    "id": "kieran-trippier",
    "name": "Kieran Trippier",
    "age": 33,
    "position": "DF",
    "role": "Attacking Fullback",
    "club": "Newcastle",
    "league": "Premier League",
    "nation": "Spain",
    "value": 29400000,
    "rating": 77,
    "general": {
      "apps": 18,
      "mins": 1586,
      "goals": 0,
      "assists": 1,
      "yellowCards": 3,
      "redCards": 0
    },
    "attributes": {
      "pace": 65,
      "dribbling": 75,
      "passing": 92,
      "defending": 90,
      "physicality": 74,
      "tactical": 84,
      "workrate": 82
    },
    "detailedStats": {
      "goalsPer90": 0.0,
      "shotsOnTargetPer90": 0.5,
      "expectedGoals": 0.1,
      "shotConversionRate": 10.0,
      "touchesInBoxPer90": 0.5,
      "chancesCreated": 61,
      "dribblesCompletedPer90": 2.0,
      "keyPassesPer90": 1.39,
      "tacklesWonPer90": 2.0,
      "interceptionsPer90": 1.1,
      "clearancesPer90": 2.9,
      "aerialDuelWinPercentage": 69.4,
      "tackledDribblerRate": 57.9,
      "progressivePassesPer90": 3.9,
      "longPassesCompletedPer90": 2.6,
      "passingAccuracy": 89.8
    },
    "leagueBenchmarks": [
      {
        "metric": "Passing Accuracy %",
        "player": 89.8,
        "avg": 82.0,
        "elite": 89.0
      },
      {
        "metric": "Clearances per 90",
        "player": 2.9,
        "avg": 2.6,
        "elite": 4.0
      },
      {
        "metric": "Aerial Duel Win %",
        "player": 69.4,
        "avg": 54.5,
        "elite": 68.0
      },
      {
        "metric": "Tackles Won per 90",
        "player": 2.0,
        "avg": 1.1,
        "elite": 2.0
      }
    ],
    "heatmap": [
      {
        "x": 14,
        "y": 25,
        "r": 38,
        "v": 0.8
      },
      {
        "x": 14,
        "y": 45,
        "r": 40,
        "v": 0.85
      },
      {
        "x": 14,
        "y": 65,
        "r": 35,
        "v": 0.7
      },
      {
        "x": 14,
        "y": 12,
        "r": 30,
        "v": 0.6
      }
    ],
    "strengths": [
      "Passing",
      "Aerial Dominance",
      "Defending"
    ],
    "weaknesses": [
      "Physicality",
      "Pace"
    ]
  },
  {
    "id": "anthony-gordon",
    "name": "Anthony Gordon",
    "age": 25,
    "position": "MF",
    "role": "Attacking Playmaker",
    "club": "Newcastle",
    "league": "Premier League",
    "nation": "France",
    "value": 43200000,
    "rating": 84,
    "general": {
      "apps": 24,
      "mins": 1798,
      "goals": 6,
      "assists": 4,
      "yellowCards": 3,
      "redCards": 1
    },
    "attributes": {
      "pace": 85,
      "dribbling": 91,
      "passing": 86,
      "defending": 76,
      "physicality": 81,
      "tactical": 95,
      "workrate": 85
    },
    "detailedStats": {
      "goalsPer90": 0.3,
      "shotsOnTargetPer90": 0.9,
      "expectedGoals": 8.8,
      "shotConversionRate": 17.2,
      "touchesInBoxPer90": 2.2,
      "chancesCreated": 50,
      "dribblesCompletedPer90": 1.7,
      "keyPassesPer90": 1.01,
      "passingAccuracy": 88.7,
      "progressivePassesPer90": 6.0,
      "tacklesWonPer90": 2.1,
      "interceptionsPer90": 0.8,
      "ballRecoveriesPer90": 6.1
    },
    "leagueBenchmarks": [
      {
        "metric": "Key Passes per 90",
        "player": 1.01,
        "avg": 0.9,
        "elite": 2.2
      },
      {
        "metric": "Progressive Passes p90",
        "player": 6.0,
        "avg": 2.8,
        "elite": 6.2
      },
      {
        "metric": "Chances Created",
        "player": 50,
        "avg": 16,
        "elite": 55
      },
      {
        "metric": "Passing Accuracy %",
        "player": 88.7,
        "avg": 79.5,
        "elite": 87.0
      }
    ],
    "heatmap": [
      {
        "x": 50,
        "y": 64,
        "r": 42,
        "v": 0.9
      },
      {
        "x": 40,
        "y": 55,
        "r": 35,
        "v": 0.75
      },
      {
        "x": 60,
        "y": 55,
        "r": 35,
        "v": 0.75
      },
      {
        "x": 50,
        "y": 76,
        "r": 30,
        "v": 0.8
      }
    ],
    "strengths": [
      "Dribbling",
      "Tactical awareness"
    ],
    "weaknesses": [
      "Defending",
      "Physicality"
    ]
  },
  {
    "id": "anthony-elanga",
    "name": "Anthony Elanga",
    "age": 26,
    "position": "MF",
    "role": "Box-to-Box Midfielder",
    "club": "Newcastle",
    "league": "Premier League",
    "nation": "England",
    "value": 39000000,
    "rating": 76,
    "general": {
      "apps": 14,
      "mins": 1302,
      "goals": 0,
      "assists": 1,
      "yellowCards": 0,
      "redCards": 0
    },
    "attributes": {
      "pace": 69,
      "dribbling": 73,
      "passing": 77,
      "defending": 58,
      "physicality": 63,
      "tactical": 79,
      "workrate": 78
    },
    "detailedStats": {
      "goalsPer90": 0.0,
      "shotsOnTargetPer90": 0.5,
      "expectedGoals": 1.6,
      "shotConversionRate": 10.0,
      "touchesInBoxPer90": 1.1,
      "chancesCreated": 33,
      "dribblesCompletedPer90": 1.3,
      "keyPassesPer90": 0.92,
      "passingAccuracy": 86.4,
      "progressivePassesPer90": 4.7,
      "tacklesWonPer90": 1.2,
      "interceptionsPer90": 0.6,
      "ballRecoveriesPer90": 4.4
    },
    "leagueBenchmarks": [
      {
        "metric": "Key Passes per 90",
        "player": 0.92,
        "avg": 0.9,
        "elite": 2.2
      },
      {
        "metric": "Progressive Passes p90",
        "player": 4.7,
        "avg": 2.8,
        "elite": 6.2
      },
      {
        "metric": "Chances Created",
        "player": 33,
        "avg": 16,
        "elite": 55
      },
      {
        "metric": "Passing Accuracy %",
        "player": 86.4,
        "avg": 79.5,
        "elite": 87.0
      }
    ],
    "heatmap": [
      {
        "x": 50,
        "y": 42,
        "r: ": 45,
        "v": 0.9
      },
      {
        "x": 44,
        "y": 35,
        "r": 38,
        "v": 0.8
      },
      {
        "x": 56,
        "y": 35,
        "r": 38,
        "v": 0.8
      },
      {
        "x": 50,
        "y": 55,
        "r": 35,
        "v": 0.75
      }
    ],
    "strengths": [
      "Workrate",
      "Tactical awareness"
    ],
    "weaknesses": [
      "Defending",
      "Physicality"
    ]
  },
  {
    "id": "harvey-barnes",
    "name": "Harvey Barnes",
    "age": 27,
    "position": "MF",
    "role": "Attacking Playmaker",
    "club": "Newcastle",
    "league": "Premier League",
    "nation": "Spain",
    "value": 36600000,
    "rating": 85,
    "general": {
      "apps": 19,
      "mins": 1951,
      "goals": 7,
      "assists": 1,
      "yellowCards": 1,
      "redCards": 0
    },
    "attributes": {
      "pace": 92,
      "dribbling": 96,
      "passing": 85,
      "defending": 76,
      "physicality": 81,
      "tactical": 95,
      "workrate": 87
    },
    "detailedStats": {
      "goalsPer90": 0.32,
      "shotsOnTargetPer90": 1.0,
      "expectedGoals": 6.8,
      "shotConversionRate": 18.4,
      "touchesInBoxPer90": 2.8,
      "chancesCreated": 48,
      "dribblesCompletedPer90": 1.7,
      "keyPassesPer90": 0.89,
      "passingAccuracy": 88.5,
      "progressivePassesPer90": 5.9,
      "tacklesWonPer90": 2.1,
      "interceptionsPer90": 0.9,
      "ballRecoveriesPer90": 6.2
    },
    "leagueBenchmarks": [
      {
        "metric": "Key Passes per 90",
        "player": 0.89,
        "avg": 0.9,
        "elite": 2.2
      },
      {
        "metric": "Progressive Passes p90",
        "player": 5.9,
        "avg": 2.8,
        "elite": 6.2
      },
      {
        "metric": "Chances Created",
        "player": 48,
        "avg": 16,
        "elite": 55
      },
      {
        "metric": "Passing Accuracy %",
        "player": 88.5,
        "avg": 79.5,
        "elite": 87.0
      }
    ],
    "heatmap": [
      {
        "x": 50,
        "y": 64,
        "r": 42,
        "v": 0.9
      },
      {
        "x": 40,
        "y": 55,
        "r": 35,
        "v": 0.75
      },
      {
        "x": 60,
        "y": 55,
        "r": 35,
        "v": 0.75
      },
      {
        "x": 50,
        "y": 76,
        "r": 30,
        "v": 0.8
      }
    ],
    "strengths": [
      "Dribbling",
      "Tactical awareness"
    ],
    "weaknesses": [
      "Defending",
      "Physicality"
    ]
  },
  {
    "id": "bruno-guimar\u00e3es-rodriguez-moura",
    "name": "Bruno Guimar\u00e3es Rodriguez Moura",
    "age": 28,
    "position": "MF",
    "role": "Attacking Playmaker",
    "club": "Newcastle",
    "league": "Premier League",
    "nation": "Spain",
    "value": 41400000,
    "rating": 92,
    "general": {
      "apps": 27,
      "mins": 2456,
      "goals": 9,
      "assists": 7,
      "yellowCards": 6,
      "redCards": 0
    },
    "attributes": {
      "pace": 84,
      "dribbling": 96,
      "passing": 97,
      "defending": 88,
      "physicality": 94,
      "tactical": 95,
      "workrate": 95
    },
    "detailedStats": {
      "goalsPer90": 0.33,
      "shotsOnTargetPer90": 1.0,
      "expectedGoals": 5.6,
      "shotConversionRate": 20.8,
      "touchesInBoxPer90": 2.1,
      "chancesCreated": 94,
      "dribblesCompletedPer90": 2.9,
      "keyPassesPer90": 1.39,
      "passingAccuracy": 94.0,
      "progressivePassesPer90": 9.6,
      "tacklesWonPer90": 3.4,
      "interceptionsPer90": 1.0,
      "ballRecoveriesPer90": 8.7
    },
    "leagueBenchmarks": [
      {
        "metric": "Key Passes per 90",
        "player": 1.39,
        "avg": 0.9,
        "elite": 2.2
      },
      {
        "metric": "Progressive Passes p90",
        "player": 9.6,
        "avg": 2.8,
        "elite": 6.2
      },
      {
        "metric": "Chances Created",
        "player": 94,
        "avg": 16,
        "elite": 55
      },
      {
        "metric": "Passing Accuracy %",
        "player": 94.0,
        "avg": 79.5,
        "elite": 87.0
      }
    ],
    "heatmap": [
      {
        "x": 50,
        "y": 64,
        "r": 42,
        "v": 0.9
      },
      {
        "x": 40,
        "y": 55,
        "r": 35,
        "v": 0.75
      },
      {
        "x": 60,
        "y": 55,
        "r": 35,
        "v": 0.75
      },
      {
        "x": 50,
        "y": 76,
        "r": 30,
        "v": 0.8
      }
    ],
    "strengths": [
      "Dribbling",
      "Passing",
      "Clinical Finishing"
    ],
    "weaknesses": [
      "Defending",
      "Pace"
    ]
  },
  {
    "id": "jacob-murphy",
    "name": "Jacob Murphy",
    "age": 29,
    "position": "MF",
    "role": "Attacking Playmaker",
    "club": "Newcastle",
    "league": "Premier League",
    "nation": "England",
    "value": 35400000,
    "rating": 81,
    "general": {
      "apps": 19,
      "mins": 1606,
      "goals": 3,
      "assists": 2,
      "yellowCards": 2,
      "redCards": 0
    },
    "attributes": {
      "pace": 77,
      "dribbling": 84,
      "passing": 86,
      "defending": 72,
      "physicality": 77,
      "tactical": 91,
      "workrate": 82
    },
    "detailedStats": {
      "goalsPer90": 0.17,
      "shotsOnTargetPer90": 0.8,
      "expectedGoals": 3.1,
      "shotConversionRate": 13.6,
      "touchesInBoxPer90": 1.7,
      "chancesCreated": 49,
      "dribblesCompletedPer90": 1.7,
      "keyPassesPer90": 1.1,
      "passingAccuracy": 88.6,
      "progressivePassesPer90": 5.9,
      "tacklesWonPer90": 1.9,
      "interceptionsPer90": 0.8,
      "ballRecoveriesPer90": 5.7
    },
    "leagueBenchmarks": [
      {
        "metric": "Key Passes per 90",
        "player": 1.1,
        "avg": 0.9,
        "elite": 2.2
      },
      {
        "metric": "Progressive Passes p90",
        "player": 5.9,
        "avg": 2.8,
        "elite": 6.2
      },
      {
        "metric": "Chances Created",
        "player": 49,
        "avg": 16,
        "elite": 55
      },
      {
        "metric": "Passing Accuracy %",
        "player": 88.6,
        "avg": 79.5,
        "elite": 87.0
      }
    ],
    "heatmap": [
      {
        "x": 50,
        "y": 64,
        "r": 42,
        "v": 0.9
      },
      {
        "x": 40,
        "y": 55,
        "r": 35,
        "v": 0.75
      },
      {
        "x": 60,
        "y": 55,
        "r": 35,
        "v": 0.75
      },
      {
        "x": 50,
        "y": 76,
        "r": 30,
        "v": 0.8
      }
    ],
    "strengths": [
      "Passing",
      "Tactical awareness"
    ],
    "weaknesses": [
      "Defending",
      "Physicality"
    ]
  },
  {
    "id": "joelinton-c\u00e1ssio-apolin\u00e1rio-de-lira",
    "name": "Joelinton C\u00e1ssio Apolin\u00e1rio de Lira",
    "age": 30,
    "position": "MF",
    "role": "Box-to-Box Midfielder",
    "club": "Newcastle",
    "league": "Premier League",
    "nation": "France",
    "value": 35400000,
    "rating": 80,
    "general": {
      "apps": 23,
      "mins": 1950,
      "goals": 2,
      "assists": 1,
      "yellowCards": 10,
      "redCards": 0
    },
    "attributes": {
      "pace": 76,
      "dribbling": 80,
      "passing": 79,
      "defending": 71,
      "physicality": 76,
      "tactical": 88,
      "workrate": 87
    },
    "detailedStats": {
      "goalsPer90": 0.09,
      "shotsOnTargetPer90": 0.6,
      "expectedGoals": 2.4,
      "shotConversionRate": 12.4,
      "touchesInBoxPer90": 1.6,
      "chancesCreated": 37,
      "dribblesCompletedPer90": 1.4,
      "keyPassesPer90": 0.68,
      "passingAccuracy": 86.9,
      "progressivePassesPer90": 5.0,
      "tacklesWonPer90": 1.9,
      "interceptionsPer90": 0.7,
      "ballRecoveriesPer90": 5.7
    },
    "leagueBenchmarks": [
      {
        "metric": "Key Passes per 90",
        "player": 0.68,
        "avg": 0.9,
        "elite": 2.2
      },
      {
        "metric": "Progressive Passes p90",
        "player": 5.0,
        "avg": 2.8,
        "elite": 6.2
      },
      {
        "metric": "Chances Created",
        "player": 37,
        "avg": 16,
        "elite": 55
      },
      {
        "metric": "Passing Accuracy %",
        "player": 86.9,
        "avg": 79.5,
        "elite": 87.0
      }
    ],
    "heatmap": [
      {
        "x": 50,
        "y": 42,
        "r: ": 45,
        "v": 0.9
      },
      {
        "x": 44,
        "y": 35,
        "r": 38,
        "v": 0.8
      },
      {
        "x": 56,
        "y": 35,
        "r": 38,
        "v": 0.8
      },
      {
        "x": 50,
        "y": 55,
        "r": 35,
        "v": 0.75
      }
    ],
    "strengths": [
      "Workrate",
      "Tactical awareness"
    ],
    "weaknesses": [
      "Defending",
      "Physicality"
    ]
  },
  {
    "id": "sandro-tonali",
    "name": "Sandro Tonali",
    "age": 31,
    "position": "MF",
    "role": "Attacking Playmaker",
    "club": "Newcastle",
    "league": "Premier League",
    "nation": "Spain",
    "value": 31800000,
    "rating": 81,
    "general": {
      "apps": 31,
      "mins": 2534,
      "goals": 0,
      "assists": 2,
      "yellowCards": 4,
      "redCards": 0
    },
    "attributes": {
      "pace": 69,
      "dribbling": 84,
      "passing": 95,
      "defending": 76,
      "physicality": 81,
      "tactical": 93,
      "workrate": 96
    },
    "detailedStats": {
      "goalsPer90": 0.0,
      "shotsOnTargetPer90": 0.5,
      "expectedGoals": 1.8,
      "shotConversionRate": 10.0,
      "touchesInBoxPer90": 1.2,
      "chancesCreated": 66,
      "dribblesCompletedPer90": 2.2,
      "keyPassesPer90": 0.95,
      "passingAccuracy": 90.9,
      "progressivePassesPer90": 7.3,
      "tacklesWonPer90": 2.1,
      "interceptionsPer90": 0.8,
      "ballRecoveriesPer90": 6.2
    },
    "leagueBenchmarks": [
      {
        "metric": "Key Passes per 90",
        "player": 0.95,
        "avg": 0.9,
        "elite": 2.2
      },
      {
        "metric": "Progressive Passes p90",
        "player": 7.3,
        "avg": 2.8,
        "elite": 6.2
      },
      {
        "metric": "Chances Created",
        "player": 66,
        "avg": 16,
        "elite": 55
      },
      {
        "metric": "Passing Accuracy %",
        "player": 90.9,
        "avg": 79.5,
        "elite": 87.0
      }
    ],
    "heatmap": [
      {
        "x": 50,
        "y": 64,
        "r": 42,
        "v": 0.9
      },
      {
        "x": 40,
        "y": 55,
        "r": 35,
        "v": 0.75
      },
      {
        "x": 60,
        "y": 55,
        "r": 35,
        "v": 0.75
      },
      {
        "x": 50,
        "y": 76,
        "r": 30,
        "v": 0.8
      }
    ],
    "strengths": [
      "Passing",
      "Workrate"
    ],
    "weaknesses": [
      "Defending",
      "Pace"
    ]
  },
  {
    "id": "joe-willock",
    "name": "Joe Willock",
    "age": 34,
    "position": "MF",
    "role": "Box-to-Box Midfielder",
    "club": "Newcastle",
    "league": "Premier League",
    "nation": "Spain",
    "value": 30000000,
    "rating": 75,
    "general": {
      "apps": 10,
      "mins": 972,
      "goals": 0,
      "assists": 2,
      "yellowCards": 3,
      "redCards": 0
    },
    "attributes": {
      "pace": 70,
      "dribbling": 71,
      "passing": 73,
      "defending": 59,
      "physicality": 64,
      "tactical": 78,
      "workrate": 73
    },
    "detailedStats": {
      "goalsPer90": 0.0,
      "shotsOnTargetPer90": 0.5,
      "expectedGoals": 1.3,
      "shotConversionRate": 10.0,
      "touchesInBoxPer90": 1.2,
      "chancesCreated": 25,
      "dribblesCompletedPer90": 1.1,
      "keyPassesPer90": 0.95,
      "passingAccuracy": 85.4,
      "progressivePassesPer90": 4.1,
      "tacklesWonPer90": 1.3,
      "interceptionsPer90": 0.6,
      "ballRecoveriesPer90": 4.5
    },
    "leagueBenchmarks": [
      {
        "metric": "Key Passes per 90",
        "player": 0.95,
        "avg": 0.9,
        "elite": 2.2
      },
      {
        "metric": "Progressive Passes p90",
        "player": 4.1,
        "avg": 2.8,
        "elite": 6.2
      },
      {
        "metric": "Chances Created",
        "player": 25,
        "avg": 16,
        "elite": 55
      },
      {
        "metric": "Passing Accuracy %",
        "player": 85.4,
        "avg": 79.5,
        "elite": 87.0
      }
    ],
    "heatmap": [
      {
        "x": 50,
        "y": 42,
        "r: ": 45,
        "v": 0.9
      },
      {
        "x": 44,
        "y": 35,
        "r": 38,
        "v": 0.8
      },
      {
        "x": 56,
        "y": 35,
        "r": 38,
        "v": 0.8
      },
      {
        "x": 50,
        "y": 55,
        "r": 35,
        "v": 0.75
      }
    ],
    "strengths": [
      "Passing",
      "Tactical awareness"
    ],
    "weaknesses": [
      "Defending",
      "Physicality"
    ]
  },
  {
    "id": "lewis-miley",
    "name": "Lewis Miley",
    "age": 22,
    "position": "MF",
    "role": "Box-to-Box Midfielder",
    "club": "Newcastle",
    "league": "Premier League",
    "nation": "Brazil",
    "value": 26400000,
    "rating": 80,
    "general": {
      "apps": 15,
      "mins": 1493,
      "goals": 1,
      "assists": 4,
      "yellowCards": 0,
      "redCards": 0
    },
    "attributes": {
      "pace": 66,
      "dribbling": 70,
      "passing": 76,
      "defending": 72,
      "physicality": 77,
      "tactical": 83,
      "workrate": 81
    },
    "detailedStats": {
      "goalsPer90": 0.06,
      "shotsOnTargetPer90": 0.6,
      "expectedGoals": 1.4,
      "shotConversionRate": 11.2,
      "touchesInBoxPer90": 1.0,
      "chancesCreated": 31,
      "dribblesCompletedPer90": 1.2,
      "keyPassesPer90": 0.76,
      "passingAccuracy": 86.2,
      "progressivePassesPer90": 4.5,
      "tacklesWonPer90": 1.9,
      "interceptionsPer90": 0.7,
      "ballRecoveriesPer90": 5.8
    },
    "leagueBenchmarks": [
      {
        "metric": "Key Passes per 90",
        "player": 0.76,
        "avg": 0.9,
        "elite": 2.2
      },
      {
        "metric": "Progressive Passes p90",
        "player": 4.5,
        "avg": 2.8,
        "elite": 6.2
      },
      {
        "metric": "Chances Created",
        "player": 31,
        "avg": 16,
        "elite": 55
      },
      {
        "metric": "Passing Accuracy %",
        "player": 86.2,
        "avg": 79.5,
        "elite": 87.0
      }
    ],
    "heatmap": [
      {
        "x": 50,
        "y": 42,
        "r: ": 45,
        "v": 0.9
      },
      {
        "x": 44,
        "y": 35,
        "r": 38,
        "v": 0.8
      },
      {
        "x": 56,
        "y": 35,
        "r": 38,
        "v": 0.8
      },
      {
        "x": 50,
        "y": 55,
        "r": 35,
        "v": 0.75
      }
    ],
    "strengths": [
      "Workrate",
      "Tactical awareness"
    ],
    "weaknesses": [
      "Dribbling",
      "Pace"
    ]
  },
  {
    "id": "william-osula",
    "name": "William Osula",
    "age": 25,
    "position": "FW",
    "role": "Complete Winger / Striker",
    "club": "Newcastle",
    "league": "Premier League",
    "nation": "France",
    "value": 33000000,
    "rating": 80,
    "general": {
      "apps": 8,
      "mins": 805,
      "goals": 7,
      "assists": 1,
      "yellowCards": 0,
      "redCards": 0
    },
    "attributes": {
      "pace": 85,
      "dribbling": 69,
      "passing": 65,
      "defending": 31,
      "physicality": 72,
      "tactical": 80,
      "workrate": 71
    },
    "detailedStats": {
      "goalsPer90": 0.78,
      "shotsOnTargetPer90": 1.7,
      "expectedGoals": 4.3,
      "shotConversionRate": 18.4,
      "touchesInBoxPer90": 3.4,
      "chancesCreated": 10,
      "dribblesCompletedPer90": 0.7,
      "keyPassesPer90": 0.46
    },
    "leagueBenchmarks": [
      {
        "metric": "Goals per 90",
        "player": 0.78,
        "avg": 0.22,
        "elite": 0.65
      },
      {
        "metric": "Shot Conversion %",
        "player": 18.4,
        "avg": 10.5,
        "elite": 18.0
      },
      {
        "metric": "Touches in Box p90",
        "player": 3.4,
        "avg": 2.5,
        "elite": 5.5
      },
      {
        "metric": "Expected Goals (xG)",
        "player": 4.3,
        "avg": 4.5,
        "elite": 14.0
      }
    ],
    "heatmap": [
      {
        "x": 50,
        "y": 84,
        "r": 38,
        "v": 0.9
      },
      {
        "x": 48,
        "y": 76,
        "r": 32,
        "v": 0.75
      },
      {
        "x": 52,
        "y": 80,
        "r": 32,
        "v": 0.8
      },
      {
        "x": 50,
        "y": 92,
        "r": 28,
        "v": 0.85
      }
    ],
    "strengths": [
      "Tactical awareness",
      "Pace"
    ],
    "weaknesses": [
      "Defending",
      "Defensive Tracking Back"
    ]
  },
  {
    "id": "aaron-ramsdale",
    "name": "Aaron Ramsdale",
    "age": 34,
    "position": "GK",
    "role": "Sweeper Keeper",
    "club": "Newcastle",
    "league": "Premier League",
    "nation": "Spain",
    "value": 28800000,
    "rating": 73,
    "general": {
      "apps": 11,
      "mins": 1003,
      "goals": 0,
      "assists": 0,
      "yellowCards": 2,
      "redCards": 0
    },
    "attributes": {
      "pace": 60,
      "dribbling": 55,
      "passing": 65,
      "defending": 85,
      "physicality": 69,
      "tactical": 70,
      "workrate": 74
    },
    "detailedStats": {
      "savePercentage": 70.0,
      "cleanSheets": 1,
      "goalsConceded": 17,
      "psxgDifference": 0.4,
      "passingAccuracy": 80.6,
      "sweeperActionsPer90": 0.6,
      "averageDistanceOfSweeperActions": 12.4
    },
    "leagueBenchmarks": [
      {
        "metric": "Save %",
        "player": 70.0,
        "avg": 69.5,
        "elite": 77.0
      },
      {
        "metric": "Clean Sheets",
        "player": 1,
        "avg": 4.5,
        "elite": 10.0
      },
      {
        "metric": "Sweeper Actions p90",
        "player": 0.6,
        "avg": 0.6,
        "elite": 1.2
      },
      {
        "metric": "Passing Accuracy %",
        "player": 80.6,
        "avg": 73.0,
        "elite": 82.0
      }
    ],
    "heatmap": [
      {
        "x": 50,
        "y": 6,
        "r": 35,
        "v": 0.98
      },
      {
        "x": 50,
        "y": 14,
        "r": 28,
        "v": 0.7
      },
      {
        "x": 45,
        "y": 8,
        "r": 22,
        "v": 0.55
      },
      {
        "x": 55,
        "y": 8,
        "r": 22,
        "v": 0.55
      }
    ],
    "strengths": [
      "Defending",
      "Workrate"
    ],
    "weaknesses": [
      "Dribbling",
      "Pace"
    ]
  },
  {
    "id": "malick-thiaw",
    "name": "Malick Thiaw",
    "age": 29,
    "position": "DF",
    "role": "Attacking Fullback",
    "club": "Newcastle",
    "league": "Premier League",
    "nation": "England",
    "value": 29400000,
    "rating": 88,
    "general": {
      "apps": 33,
      "mins": 2963,
      "goals": 4,
      "assists": 0,
      "yellowCards": 4,
      "redCards": 0
    },
    "attributes": {
      "pace": 81,
      "dribbling": 75,
      "passing": 67,
      "defending": 94,
      "physicality": 94,
      "tactical": 95,
      "workrate": 96
    },
    "detailedStats": {
      "goalsPer90": 0.12,
      "shotsOnTargetPer90": 0.7,
      "expectedGoals": 4.8,
      "shotConversionRate": 14.8,
      "touchesInBoxPer90": 1.9,
      "chancesCreated": 14,
      "dribblesCompletedPer90": 0.8,
      "keyPassesPer90": 0.17,
      "tacklesWonPer90": 3.9,
      "interceptionsPer90": 1.3,
      "clearancesPer90": 5.8,
      "aerialDuelWinPercentage": 80.0,
      "tackledDribblerRate": 63.9,
      "progressivePassesPer90": 2.1,
      "longPassesCompletedPer90": 1.4,
      "passingAccuracy": 82.3
    },
    "leagueBenchmarks": [
      {
        "metric": "Passing Accuracy %",
        "player": 82.3,
        "avg": 82.0,
        "elite": 89.0
      },
      {
        "metric": "Clearances per 90",
        "player": 5.8,
        "avg": 2.6,
        "elite": 4.0
      },
      {
        "metric": "Aerial Duel Win %",
        "player": 80.0,
        "avg": 54.5,
        "elite": 68.0
      },
      {
        "metric": "Tackles Won per 90",
        "player": 3.9,
        "avg": 1.1,
        "elite": 2.0
      }
    ],
    "heatmap": [
      {
        "x": 14,
        "y": 25,
        "r": 38,
        "v": 0.8
      },
      {
        "x": 14,
        "y": 45,
        "r": 40,
        "v": 0.85
      },
      {
        "x": 14,
        "y": 65,
        "r": 35,
        "v": 0.7
      },
      {
        "x": 14,
        "y": 12,
        "r": 30,
        "v": 0.6
      }
    ],
    "strengths": [
      "Workrate",
      "Tactical awareness",
      "Aerial Dominance"
    ],
    "weaknesses": [
      "Dribbling",
      "Passing"
    ]
  },
  {
    "id": "nick-woltemade",
    "name": "Nick Woltemade",
    "age": 29,
    "position": "FW",
    "role": "Inverted Winger",
    "club": "Newcastle",
    "league": "Premier League",
    "nation": "England",
    "value": 40200000,
    "rating": 85,
    "general": {
      "apps": 24,
      "mins": 1896,
      "goals": 8,
      "assists": 4,
      "yellowCards": 0,
      "redCards": 0
    },
    "attributes": {
      "pace": 93,
      "dribbling": 84,
      "passing": 80,
      "defending": 36,
      "physicality": 84,
      "tactical": 94,
      "workrate": 87
    },
    "detailedStats": {
      "goalsPer90": 0.38,
      "shotsOnTargetPer90": 1.1,
      "expectedGoals": 6.6,
      "shotConversionRate": 19.6,
      "touchesInBoxPer90": 4.1,
      "chancesCreated": 39,
      "dribblesCompletedPer90": 1.4,
      "keyPassesPer90": 0.75
    },
    "leagueBenchmarks": [
      {
        "metric": "Goals per 90",
        "player": 0.38,
        "avg": 0.22,
        "elite": 0.65
      },
      {
        "metric": "Shot Conversion %",
        "player": 19.6,
        "avg": 10.5,
        "elite": 18.0
      },
      {
        "metric": "Touches in Box p90",
        "player": 4.1,
        "avg": 2.5,
        "elite": 5.5
      },
      {
        "metric": "Expected Goals (xG)",
        "player": 6.6,
        "avg": 4.5,
        "elite": 14.0
      }
    ],
    "heatmap": [
      {
        "x": 22,
        "y": 72,
        "r": 45,
        "v": 0.9
      },
      {
        "x": 22,
        "y": 58,
        "r": 38,
        "v": 0.75
      },
      {
        "x": 28,
        "y": 82,
        "r": 35,
        "v": 0.8
      },
      {
        "x": 50,
        "y": 84,
        "r": 30,
        "v": 0.65
      }
    ],
    "strengths": [
      "Tactical awareness",
      "Pace"
    ],
    "weaknesses": [
      "Defending",
      "Defensive Tracking Back"
    ]
  },
  {
    "id": "oleksandr-zinchenko",
    "name": "Oleksandr Zinchenko",
    "age": 32,
    "position": "DF",
    "role": "Central Defender",
    "club": "Nott'm Forest",
    "league": "Premier League",
    "nation": "England",
    "value": 29400000,
    "rating": 71,
    "general": {
      "apps": 4,
      "mins": 352,
      "goals": 0,
      "assists": 0,
      "yellowCards": 0,
      "redCards": 0
    },
    "attributes": {
      "pace": 65,
      "dribbling": 59,
      "passing": 65,
      "defending": 76,
      "physicality": 60,
      "tactical": 69,
      "workrate": 65
    },
    "detailedStats": {
      "goalsPer90": 0.0,
      "shotsOnTargetPer90": 0.5,
      "expectedGoals": 0.1,
      "shotConversionRate": 10.0,
      "touchesInBoxPer90": 0.6,
      "chancesCreated": 10,
      "dribblesCompletedPer90": 0.7,
      "keyPassesPer90": 1.07,
      "tacklesWonPer90": 1.3,
      "interceptionsPer90": 0.9,
      "clearancesPer90": 1.9,
      "aerialDuelWinPercentage": 59.0,
      "tackledDribblerRate": 51.9,
      "progressivePassesPer90": 1.9,
      "longPassesCompletedPer90": 1.3,
      "passingAccuracy": 81.7
    },
    "leagueBenchmarks": [
      {
        "metric": "Passing Accuracy %",
        "player": 81.7,
        "avg": 82.0,
        "elite": 89.0
      },
      {
        "metric": "Clearances per 90",
        "player": 1.9,
        "avg": 2.6,
        "elite": 4.0
      },
      {
        "metric": "Aerial Duel Win %",
        "player": 59.0,
        "avg": 54.5,
        "elite": 68.0
      },
      {
        "metric": "Tackles Won per 90",
        "player": 1.3,
        "avg": 1.1,
        "elite": 2.0
      }
    ],
    "heatmap": [
      {
        "x": 50,
        "y": 20,
        "r": 45,
        "v": 0.9
      },
      {
        "x": 42,
        "y": 18,
        "r": 32,
        "v": 0.8
      },
      {
        "x": 58,
        "y": 18,
        "r": 32,
        "v": 0.8
      },
      {
        "x": 50,
        "y": 10,
        "r": 28,
        "v": 0.6
      }
    ],
    "strengths": [
      "Defending",
      "Tactical awareness"
    ],
    "weaknesses": [
      "Dribbling",
      "Physicality"
    ]
  },
  {
    "id": "stefan-ortega-moreno",
    "name": "Stefan Ortega Moreno",
    "age": 30,
    "position": "GK",
    "role": "Sweeper Keeper",
    "club": "Nott'm Forest",
    "league": "Premier League",
    "nation": "France",
    "value": 28200000,
    "rating": 71,
    "general": {
      "apps": 3,
      "mins": 270,
      "goals": 0,
      "assists": 0,
      "yellowCards": 0,
      "redCards": 0
    },
    "attributes": {
      "pace": 60,
      "dribbling": 55,
      "passing": 58,
      "defending": 78,
      "physicality": 59,
      "tactical": 66,
      "workrate": 63
    },
    "detailedStats": {
      "savePercentage": 66.6,
      "cleanSheets": 1,
      "goalsConceded": 4,
      "psxgDifference": 0.4,
      "passingAccuracy": 73.4,
      "sweeperActionsPer90": 0.5,
      "averageDistanceOfSweeperActions": 12.1
    },
    "leagueBenchmarks": [
      {
        "metric": "Save %",
        "player": 66.6,
        "avg": 69.5,
        "elite": 77.0
      },
      {
        "metric": "Clean Sheets",
        "player": 1,
        "avg": 4.5,
        "elite": 10.0
      },
      {
        "metric": "Sweeper Actions p90",
        "player": 0.5,
        "avg": 0.6,
        "elite": 1.2
      },
      {
        "metric": "Passing Accuracy %",
        "player": 73.4,
        "avg": 73.0,
        "elite": 82.0
      }
    ],
    "heatmap": [
      {
        "x": 50,
        "y": 6,
        "r": 35,
        "v": 0.98
      },
      {
        "x": 50,
        "y": 14,
        "r": 28,
        "v": 0.7
      },
      {
        "x": 45,
        "y": 8,
        "r": 22,
        "v": 0.55
      },
      {
        "x": 55,
        "y": 8,
        "r": 22,
        "v": 0.55
      }
    ],
    "strengths": [
      "Defending",
      "Tactical awareness"
    ],
    "weaknesses": [
      "Dribbling",
      "Passing"
    ]
  },
  {
    "id": "james-mcatee",
    "name": "James McAtee",
    "age": 26,
    "position": "MF",
    "role": "Box-to-Box Midfielder",
    "club": "Nott'm Forest",
    "league": "Premier League",
    "nation": "England",
    "value": 30000000,
    "rating": 72,
    "general": {
      "apps": 2,
      "mins": 288,
      "goals": 0,
      "assists": 1,
      "yellowCards": 1,
      "redCards": 0
    },
    "attributes": {
      "pace": 61,
      "dribbling": 59,
      "passing": 65,
      "defending": 53,
      "physicality": 58,
      "tactical": 69,
      "workrate": 64
    },
    "detailedStats": {
      "goalsPer90": 0.0,
      "shotsOnTargetPer90": 0.5,
      "expectedGoals": 0.2,
      "shotConversionRate": 10.0,
      "touchesInBoxPer90": 0.6,
      "chancesCreated": 10,
      "dribblesCompletedPer90": 0.7,
      "keyPassesPer90": 1.28,
      "passingAccuracy": 83.4,
      "progressivePassesPer90": 2.8,
      "tacklesWonPer90": 1.0,
      "interceptionsPer90": 0.5,
      "ballRecoveriesPer90": 3.8
    },
    "leagueBenchmarks": [
      {
        "metric": "Key Passes per 90",
        "player": 1.28,
        "avg": 0.9,
        "elite": 2.2
      },
      {
        "metric": "Progressive Passes p90",
        "player": 2.8,
        "avg": 2.8,
        "elite": 6.2
      },
      {
        "metric": "Chances Created",
        "player": 10,
        "avg": 16,
        "elite": 55
      },
      {
        "metric": "Passing Accuracy %",
        "player": 83.4,
        "avg": 79.5,
        "elite": 87.0
      }
    ],
    "heatmap": [
      {
        "x": 50,
        "y": 42,
        "r: ": 45,
        "v": 0.9
      },
      {
        "x": 44,
        "y": 35,
        "r": 38,
        "v": 0.8
      },
      {
        "x": 56,
        "y": 35,
        "r": 38,
        "v": 0.8
      },
      {
        "x": 50,
        "y": 55,
        "r": 35,
        "v": 0.75
      }
    ],
    "strengths": [
      "Passing",
      "Tactical awareness"
    ],
    "weaknesses": [
      "Defending",
      "Physicality"
    ]
  },
  {
    "id": "matz-sels",
    "name": "Matz Sels",
    "age": 27,
    "position": "GK",
    "role": "Sweeper Keeper",
    "club": "Nott'm Forest",
    "league": "Premier League",
    "nation": "Spain",
    "value": 27600000,
    "rating": 85,
    "general": {
      "apps": 30,
      "mins": 2667,
      "goals": 0,
      "assists": 0,
      "yellowCards": 2,
      "redCards": 0
    },
    "attributes": {
      "pace": 60,
      "dribbling": 55,
      "passing": 90,
      "defending": 93,
      "physicality": 94,
      "tactical": 83,
      "workrate": 96
    },
    "detailedStats": {
      "savePercentage": 81.0,
      "cleanSheets": 7,
      "goalsConceded": 39,
      "psxgDifference": 2.8,
      "passingAccuracy": 90.0,
      "sweeperActionsPer90": 1.1,
      "averageDistanceOfSweeperActions": 13.5
    },
    "leagueBenchmarks": [
      {
        "metric": "Save %",
        "player": 81.0,
        "avg": 69.5,
        "elite": 77.0
      },
      {
        "metric": "Clean Sheets",
        "player": 7,
        "avg": 4.5,
        "elite": 10.0
      },
      {
        "metric": "Sweeper Actions p90",
        "player": 1.1,
        "avg": 0.6,
        "elite": 1.2
      },
      {
        "metric": "Passing Accuracy %",
        "player": 90.0,
        "avg": 73.0,
        "elite": 82.0
      }
    ],
    "heatmap": [
      {
        "x": 50,
        "y": 6,
        "r": 35,
        "v": 0.98
      },
      {
        "x": 50,
        "y": 14,
        "r": 28,
        "v": 0.7
      },
      {
        "x": 45,
        "y": 8,
        "r": 22,
        "v": 0.55
      },
      {
        "x": 55,
        "y": 8,
        "r": 22,
        "v": 0.55
      }
    ],
    "strengths": [
      "Reflexes",
      "Workrate",
      "Physicality"
    ],
    "weaknesses": [
      "Dribbling",
      "Pace"
    ]
  },
  {
    "id": "nikola-milenkovi\u0107",
    "name": "Nikola Milenkovi\u0107",
    "age": 30,
    "position": "DF",
    "role": "Attacking Fullback",
    "club": "Nott'm Forest",
    "league": "Premier League",
    "nation": "France",
    "value": 30600000,
    "rating": 87,
    "general": {
      "apps": 37,
      "mins": 3375,
      "goals": 0,
      "assists": 1,
      "yellowCards": 6,
      "redCards": 0
    },
    "attributes": {
      "pace": 69,
      "dribbling": 62,
      "passing": 64,
      "defending": 94,
      "physicality": 94,
      "tactical": 86,
      "workrate": 96
    },
    "detailedStats": {
      "goalsPer90": 0.0,
      "shotsOnTargetPer90": 0.5,
      "expectedGoals": 0.8,
      "shotConversionRate": 10.0,
      "touchesInBoxPer90": 0.9,
      "chancesCreated": 8,
      "dribblesCompletedPer90": 0.6,
      "keyPassesPer90": 0.09,
      "tacklesWonPer90": 3.3,
      "interceptionsPer90": 1.1,
      "clearancesPer90": 4.9,
      "aerialDuelWinPercentage": 80.0,
      "tackledDribblerRate": 58.7,
      "progressivePassesPer90": 1.8,
      "longPassesCompletedPer90": 1.2,
      "passingAccuracy": 81.3
    },
    "leagueBenchmarks": [
      {
        "metric": "Passing Accuracy %",
        "player": 81.3,
        "avg": 82.0,
        "elite": 89.0
      },
      {
        "metric": "Clearances per 90",
        "player": 4.9,
        "avg": 2.6,
        "elite": 4.0
      },
      {
        "metric": "Aerial Duel Win %",
        "player": 80.0,
        "avg": 54.5,
        "elite": 68.0
      },
      {
        "metric": "Tackles Won per 90",
        "player": 3.3,
        "avg": 1.1,
        "elite": 2.0
      }
    ],
    "heatmap": [
      {
        "x": 86,
        "y": 25,
        "r": 38,
        "v": 0.8
      },
      {
        "x": 86,
        "y": 45,
        "r": 40,
        "v": 0.85
      },
      {
        "x": 86,
        "y": 65,
        "r": 35,
        "v": 0.7
      },
      {
        "x": 86,
        "y": 12,
        "r": 30,
        "v": 0.6
      }
    ],
    "strengths": [
      "Defending",
      "Workrate",
      "Aerial Dominance"
    ],
    "weaknesses": [
      "Dribbling",
      "Passing"
    ]
  },
  {
    "id": "murillo-costa-dos-santos",
    "name": "Murillo Costa dos Santos",
    "age": 31,
    "position": "DF",
    "role": "Central Defender",
    "club": "Nott'm Forest",
    "league": "Premier League",
    "nation": "Spain",
    "value": 31200000,
    "rating": 81,
    "general": {
      "apps": 25,
      "mins": 2130,
      "goals": 1,
      "assists": 0,
      "yellowCards": 5,
      "redCards": 0
    },
    "attributes": {
      "pace": 68,
      "dribbling": 62,
      "passing": 67,
      "defending": 94,
      "physicality": 91,
      "tactical": 83,
      "workrate": 90
    },
    "detailedStats": {
      "goalsPer90": 0.04,
      "shotsOnTargetPer90": 0.6,
      "expectedGoals": 0.7,
      "shotConversionRate": 11.2,
      "touchesInBoxPer90": 0.8,
      "chancesCreated": 14,
      "dribblesCompletedPer90": 0.8,
      "keyPassesPer90": 0.24,
      "tacklesWonPer90": 2.8,
      "interceptionsPer90": 1.0,
      "clearancesPer90": 4.2,
      "aerialDuelWinPercentage": 80.0,
      "tackledDribblerRate": 57.4,
      "progressivePassesPer90": 2.1,
      "longPassesCompletedPer90": 1.4,
      "passingAccuracy": 82.3
    },
    "leagueBenchmarks": [
      {
        "metric": "Passing Accuracy %",
        "player": 82.3,
        "avg": 82.0,
        "elite": 89.0
      },
      {
        "metric": "Clearances per 90",
        "player": 4.2,
        "avg": 2.6,
        "elite": 4.0
      },
      {
        "metric": "Aerial Duel Win %",
        "player": 80.0,
        "avg": 54.5,
        "elite": 68.0
      },
      {
        "metric": "Tackles Won per 90",
        "player": 2.8,
        "avg": 1.1,
        "elite": 2.0
      }
    ],
    "heatmap": [
      {
        "x": 50,
        "y": 20,
        "r": 45,
        "v": 0.9
      },
      {
        "x": 42,
        "y": 18,
        "r": 32,
        "v": 0.8
      },
      {
        "x": 58,
        "y": 18,
        "r": 32,
        "v": 0.8
      },
      {
        "x": 50,
        "y": 10,
        "r": 28,
        "v": 0.6
      }
    ],
    "strengths": [
      "Defending",
      "Physicality",
      "Aerial Dominance"
    ],
    "weaknesses": [
      "Dribbling",
      "Passing"
    ]
  },
  {
    "id": "ola-aina",
    "name": "Ola Aina",
    "age": 32,
    "position": "DF",
    "role": "Attacking Fullback",
    "club": "Nott'm Forest",
    "league": "Premier League",
    "nation": "England",
    "value": 28200000,
    "rating": 79,
    "general": {
      "apps": 18,
      "mins": 1587,
      "goals": 0,
      "assists": 2,
      "yellowCards": 3,
      "redCards": 0
    },
    "attributes": {
      "pace": 67,
      "dribbling": 63,
      "passing": 70,
      "defending": 88,
      "physicality": 74,
      "tactical": 77,
      "workrate": 82
    },
    "detailedStats": {
      "goalsPer90": 0.0,
      "shotsOnTargetPer90": 0.5,
      "expectedGoals": 0.4,
      "shotConversionRate": 10.0,
      "touchesInBoxPer90": 0.7,
      "chancesCreated": 20,
      "dribblesCompletedPer90": 0.9,
      "keyPassesPer90": 0.45,
      "tacklesWonPer90": 2.0,
      "interceptionsPer90": 1.0,
      "clearancesPer90": 2.9,
      "aerialDuelWinPercentage": 69.3,
      "tackledDribblerRate": 55.0,
      "progressivePassesPer90": 2.3,
      "longPassesCompletedPer90": 1.5,
      "passingAccuracy": 83.2
    },
    "leagueBenchmarks": [
      {
        "metric": "Passing Accuracy %",
        "player": 83.2,
        "avg": 82.0,
        "elite": 89.0
      },
      {
        "metric": "Clearances per 90",
        "player": 2.9,
        "avg": 2.6,
        "elite": 4.0
      },
      {
        "metric": "Aerial Duel Win %",
        "player": 69.3,
        "avg": 54.5,
        "elite": 68.0
      },
      {
        "metric": "Tackles Won per 90",
        "player": 2.0,
        "avg": 1.1,
        "elite": 2.0
      }
    ],
    "heatmap": [
      {
        "x": 86,
        "y": 25,
        "r": 38,
        "v": 0.8
      },
      {
        "x": 86,
        "y": 45,
        "r": 40,
        "v": 0.85
      },
      {
        "x": 86,
        "y": 65,
        "r": 35,
        "v": 0.7
      },
      {
        "x": 86,
        "y": 12,
        "r": 30,
        "v": 0.6
      }
    ],
    "strengths": [
      "Defending",
      "Workrate",
      "Aerial Dominance"
    ],
    "weaknesses": [
      "Dribbling",
      "Pace"
    ]
  },
  {
    "id": "neco-williams",
    "name": "Neco Williams",
    "age": 33,
    "position": "DF",
    "role": "Attacking Fullback",
    "club": "Nott'm Forest",
    "league": "Premier League",
    "nation": "Spain",
    "value": 28800000,
    "rating": 88,
    "general": {
      "apps": 36,
      "mins": 3203,
      "goals": 2,
      "assists": 3,
      "yellowCards": 6,
      "redCards": 1
    },
    "attributes": {
      "pace": 80,
      "dribbling": 93,
      "passing": 97,
      "defending": 94,
      "physicality": 94,
      "tactical": 95,
      "workrate": 96
    },
    "detailedStats": {
      "goalsPer90": 0.06,
      "shotsOnTargetPer90": 0.6,
      "expectedGoals": 2.0,
      "shotConversionRate": 12.4,
      "touchesInBoxPer90": 1.8,
      "chancesCreated": 71,
      "dribblesCompletedPer90": 2.3,
      "keyPassesPer90": 0.8,
      "tacklesWonPer90": 3.7,
      "interceptionsPer90": 1.4,
      "clearancesPer90": 5.5,
      "aerialDuelWinPercentage": 80.0,
      "tackledDribblerRate": 67.6,
      "progressivePassesPer90": 4.4,
      "longPassesCompletedPer90": 2.9,
      "passingAccuracy": 91.4
    },
    "leagueBenchmarks": [
      {
        "metric": "Passing Accuracy %",
        "player": 91.4,
        "avg": 82.0,
        "elite": 89.0
      },
      {
        "metric": "Clearances per 90",
        "player": 5.5,
        "avg": 2.6,
        "elite": 4.0
      },
      {
        "metric": "Aerial Duel Win %",
        "player": 80.0,
        "avg": 54.5,
        "elite": 68.0
      },
      {
        "metric": "Tackles Won per 90",
        "player": 3.7,
        "avg": 1.1,
        "elite": 2.0
      }
    ],
    "heatmap": [
      {
        "x": 14,
        "y": 25,
        "r": 38,
        "v": 0.8
      },
      {
        "x": 14,
        "y": 45,
        "r": 40,
        "v": 0.85
      },
      {
        "x": 14,
        "y": 65,
        "r": 35,
        "v": 0.7
      },
      {
        "x": 14,
        "y": 12,
        "r": 30,
        "v": 0.6
      }
    ],
    "strengths": [
      "Passing",
      "Workrate",
      "Aerial Dominance"
    ],
    "weaknesses": [
      "Dribbling",
      "Pace"
    ]
  },
  {
    "id": "jair-paula-da-cunha-filho",
    "name": "Jair Paula da Cunha Filho",
    "age": 20,
    "position": "DF",
    "role": "Central Defender",
    "club": "Nott'm Forest",
    "league": "Premier League",
    "nation": "England",
    "value": 25200000,
    "rating": 71,
    "general": {
      "apps": 6,
      "mins": 514,
      "goals": 0,
      "assists": 0,
      "yellowCards": 0,
      "redCards": 0
    },
    "attributes": {
      "pace": 66,
      "dribbling": 56,
      "passing": 61,
      "defending": 77,
      "physicality": 61,
      "tactical": 68,
      "workrate": 67
    },
    "detailedStats": {
      "goalsPer90": 0.0,
      "shotsOnTargetPer90": 0.5,
      "expectedGoals": 0.3,
      "shotConversionRate": 10.0,
      "touchesInBoxPer90": 0.6,
      "chancesCreated": 1,
      "dribblesCompletedPer90": 0.5,
      "keyPassesPer90": 0.13,
      "tacklesWonPer90": 1.3,
      "interceptionsPer90": 0.8,
      "clearancesPer90": 2.0,
      "aerialDuelWinPercentage": 59.9,
      "tackledDribblerRate": 51.4,
      "progressivePassesPer90": 1.6,
      "longPassesCompletedPer90": 1.1,
      "passingAccuracy": 80.3
    },
    "leagueBenchmarks": [
      {
        "metric": "Passing Accuracy %",
        "player": 80.3,
        "avg": 82.0,
        "elite": 89.0
      },
      {
        "metric": "Clearances per 90",
        "player": 2.0,
        "avg": 2.6,
        "elite": 4.0
      },
      {
        "metric": "Aerial Duel Win %",
        "player": 59.9,
        "avg": 54.5,
        "elite": 68.0
      },
      {
        "metric": "Tackles Won per 90",
        "player": 1.3,
        "avg": 1.1,
        "elite": 2.0
      }
    ],
    "heatmap": [
      {
        "x": 50,
        "y": 20,
        "r": 45,
        "v": 0.9
      },
      {
        "x": 42,
        "y": 18,
        "r": 32,
        "v": 0.8
      },
      {
        "x": 58,
        "y": 18,
        "r": 32,
        "v": 0.8
      },
      {
        "x": 50,
        "y": 10,
        "r": 28,
        "v": 0.6
      }
    ],
    "strengths": [
      "Defending",
      "Tactical awareness"
    ],
    "weaknesses": [
      "Dribbling",
      "Physicality"
    ]
  },
  {
    "id": "felipe-rodrigues-da-silva",
    "name": "Felipe Rodrigues da Silva",
    "age": 21,
    "position": "DF",
    "role": "Central Defender",
    "club": "Nott'm Forest",
    "league": "Premier League",
    "nation": "Brazil",
    "value": 25800000,
    "rating": 77,
    "general": {
      "apps": 14,
      "mins": 1340,
      "goals": 1,
      "assists": 0,
      "yellowCards": 5,
      "redCards": 0
    },
    "attributes": {
      "pace": 68,
      "dribbling": 60,
      "passing": 62,
      "defending": 93,
      "physicality": 79,
      "tactical": 77,
      "workrate": 79
    },
    "detailedStats": {
      "goalsPer90": 0.07,
      "shotsOnTargetPer90": 0.6,
      "expectedGoals": 1.3,
      "shotConversionRate": 11.2,
      "touchesInBoxPer90": 0.8,
      "chancesCreated": 4,
      "dribblesCompletedPer90": 0.5,
      "keyPassesPer90": 0.13,
      "tacklesWonPer90": 2.2,
      "interceptionsPer90": 1.0,
      "clearancesPer90": 3.4,
      "aerialDuelWinPercentage": 73.6,
      "tackledDribblerRate": 55.0,
      "progressivePassesPer90": 1.7,
      "longPassesCompletedPer90": 1.1,
      "passingAccuracy": 80.8
    },
    "leagueBenchmarks": [
      {
        "metric": "Passing Accuracy %",
        "player": 80.8,
        "avg": 82.0,
        "elite": 89.0
      },
      {
        "metric": "Clearances per 90",
        "player": 3.4,
        "avg": 2.6,
        "elite": 4.0
      },
      {
        "metric": "Aerial Duel Win %",
        "player": 73.6,
        "avg": 54.5,
        "elite": 68.0
      },
      {
        "metric": "Tackles Won per 90",
        "player": 2.2,
        "avg": 1.1,
        "elite": 2.0
      }
    ],
    "heatmap": [
      {
        "x": 50,
        "y": 20,
        "r": 45,
        "v": 0.9
      },
      {
        "x": 42,
        "y": 18,
        "r": 32,
        "v": 0.8
      },
      {
        "x": 58,
        "y": 18,
        "r": 32,
        "v": 0.8
      },
      {
        "x": 50,
        "y": 10,
        "r": 28,
        "v": 0.6
      }
    ],
    "strengths": [
      "Defending",
      "Physicality",
      "Aerial Dominance"
    ],
    "weaknesses": [
      "Dribbling",
      "Passing"
    ]
  },
  {
    "id": "morgan-gibbs-white",
    "name": "Morgan Gibbs-White",
    "age": 25,
    "position": "MF",
    "role": "Attacking Playmaker",
    "club": "Nott'm Forest",
    "league": "Premier League",
    "nation": "France",
    "value": 45600000,
    "rating": 93,
    "general": {
      "apps": 35,
      "mins": 3101,
      "goals": 15,
      "assists": 4,
      "yellowCards": 1,
      "redCards": 0
    },
    "attributes": {
      "pace": 92,
      "dribbling": 96,
      "passing": 97,
      "defending": 88,
      "physicality": 94,
      "tactical": 95,
      "workrate": 96
    },
    "detailedStats": {
      "goalsPer90": 0.44,
      "shotsOnTargetPer90": 1.2,
      "expectedGoals": 10.8,
      "shotConversionRate": 25.0,
      "touchesInBoxPer90": 3.3,
      "chancesCreated": 93,
      "dribblesCompletedPer90": 2.9,
      "keyPassesPer90": 1.09,
      "passingAccuracy": 94.0,
      "progressivePassesPer90": 9.5,
      "tacklesWonPer90": 3.6,
      "interceptionsPer90": 1.1,
      "ballRecoveriesPer90": 9.1
    },
    "leagueBenchmarks": [
      {
        "metric": "Key Passes per 90",
        "player": 1.09,
        "avg": 0.9,
        "elite": 2.2
      },
      {
        "metric": "Progressive Passes p90",
        "player": 9.5,
        "avg": 2.8,
        "elite": 6.2
      },
      {
        "metric": "Chances Created",
        "player": 93,
        "avg": 16,
        "elite": 55
      },
      {
        "metric": "Passing Accuracy %",
        "player": 94.0,
        "avg": 79.5,
        "elite": 87.0
      }
    ],
    "heatmap": [
      {
        "x": 50,
        "y": 64,
        "r": 42,
        "v": 0.9
      },
      {
        "x": 40,
        "y": 55,
        "r": 35,
        "v": 0.75
      },
      {
        "x": 60,
        "y": 55,
        "r": 35,
        "v": 0.75
      },
      {
        "x": 50,
        "y": 76,
        "r": 30,
        "v": 0.8
      }
    ],
    "strengths": [
      "Dribbling",
      "Passing",
      "Clinical Finishing"
    ],
    "weaknesses": [
      "Defending",
      "Pace"
    ]
  },
  {
    "id": "callum-hudson-odoi",
    "name": "Callum Hudson-Odoi",
    "age": 26,
    "position": "MF",
    "role": "Attacking Playmaker",
    "club": "Nott'm Forest",
    "league": "Premier League",
    "nation": "England",
    "value": 34200000,
    "rating": 82,
    "general": {
      "apps": 21,
      "mins": 1838,
      "goals": 3,
      "assists": 4,
      "yellowCards": 0,
      "redCards": 0
    },
    "attributes": {
      "pace": 76,
      "dribbling": 92,
      "passing": 97,
      "defending": 74,
      "physicality": 79,
      "tactical": 95,
      "workrate": 86
    },
    "detailedStats": {
      "goalsPer90": 0.15,
      "shotsOnTargetPer90": 0.7,
      "expectedGoals": 2.8,
      "shotConversionRate": 13.6,
      "touchesInBoxPer90": 1.6,
      "chancesCreated": 76,
      "dribblesCompletedPer90": 2.4,
      "keyPassesPer90": 1.5,
      "passingAccuracy": 92.2,
      "progressivePassesPer90": 8.1,
      "tacklesWonPer90": 2.0,
      "interceptionsPer90": 0.8,
      "ballRecoveriesPer90": 5.9
    },
    "leagueBenchmarks": [
      {
        "metric": "Key Passes per 90",
        "player": 1.5,
        "avg": 0.9,
        "elite": 2.2
      },
      {
        "metric": "Progressive Passes p90",
        "player": 8.1,
        "avg": 2.8,
        "elite": 6.2
      },
      {
        "metric": "Chances Created",
        "player": 76,
        "avg": 16,
        "elite": 55
      },
      {
        "metric": "Passing Accuracy %",
        "player": 92.2,
        "avg": 79.5,
        "elite": 87.0
      }
    ],
    "heatmap": [
      {
        "x": 50,
        "y": 64,
        "r": 42,
        "v": 0.9
      },
      {
        "x": 40,
        "y": 55,
        "r": 35,
        "v": 0.75
      },
      {
        "x": 60,
        "y": 55,
        "r": 35,
        "v": 0.75
      },
      {
        "x": 50,
        "y": 76,
        "r": 30,
        "v": 0.8
      }
    ],
    "strengths": [
      "Passing",
      "Tactical awareness"
    ],
    "weaknesses": [
      "Defending",
      "Pace"
    ]
  },
  {
    "id": "elliot-anderson",
    "name": "Elliot Anderson",
    "age": 27,
    "position": "MF",
    "role": "Attacking Playmaker",
    "club": "Nott'm Forest",
    "league": "Premier League",
    "nation": "Spain",
    "value": 34200000,
    "rating": 93,
    "general": {
      "apps": 37,
      "mins": 3332,
      "goals": 4,
      "assists": 5,
      "yellowCards": 8,
      "redCards": 0
    },
    "attributes": {
      "pace": 75,
      "dribbling": 96,
      "passing": 97,
      "defending": 88,
      "physicality": 94,
      "tactical": 95,
      "workrate": 96
    },
    "detailedStats": {
      "goalsPer90": 0.11,
      "shotsOnTargetPer90": 0.7,
      "expectedGoals": 2.9,
      "shotConversionRate": 14.8,
      "touchesInBoxPer90": 1.5,
      "chancesCreated": 120,
      "dribblesCompletedPer90": 3.6,
      "keyPassesPer90": 1.3,
      "passingAccuracy": 94.0,
      "progressivePassesPer90": 11.6,
      "tacklesWonPer90": 3.9,
      "interceptionsPer90": 1.0,
      "ballRecoveriesPer90": 9.6
    },
    "leagueBenchmarks": [
      {
        "metric": "Key Passes per 90",
        "player": 1.3,
        "avg": 0.9,
        "elite": 2.2
      },
      {
        "metric": "Progressive Passes p90",
        "player": 11.6,
        "avg": 2.8,
        "elite": 6.2
      },
      {
        "metric": "Chances Created",
        "player": 120,
        "avg": 16,
        "elite": 55
      },
      {
        "metric": "Passing Accuracy %",
        "player": 94.0,
        "avg": 79.5,
        "elite": 87.0
      }
    ],
    "heatmap": [
      {
        "x": 50,
        "y": 64,
        "r": 42,
        "v": 0.9
      },
      {
        "x": 40,
        "y": 55,
        "r": 35,
        "v": 0.75
      },
      {
        "x": 60,
        "y": 55,
        "r": 35,
        "v": 0.75
      },
      {
        "x": 50,
        "y": 76,
        "r": 30,
        "v": 0.8
      }
    ],
    "strengths": [
      "Dribbling",
      "Passing"
    ],
    "weaknesses": [
      "Defending",
      "Pace"
    ]
  },
  {
    "id": "nicol\u00e1s-dom\u00ednguez",
    "name": "Nicol\u00e1s Dom\u00ednguez",
    "age": 29,
    "position": "MF",
    "role": "Box-to-Box Midfielder",
    "club": "Nott'm Forest",
    "league": "Premier League",
    "nation": "England",
    "value": 30000000,
    "rating": 76,
    "general": {
      "apps": 17,
      "mins": 1168,
      "goals": 1,
      "assists": 1,
      "yellowCards": 3,
      "redCards": 0
    },
    "attributes": {
      "pace": 66,
      "dribbling": 68,
      "passing": 72,
      "defending": 67,
      "physicality": 72,
      "tactical": 79,
      "workrate": 76
    },
    "detailedStats": {
      "goalsPer90": 0.08,
      "shotsOnTargetPer90": 0.6,
      "expectedGoals": 1.5,
      "shotConversionRate": 11.2,
      "touchesInBoxPer90": 1.0,
      "chancesCreated": 24,
      "dribblesCompletedPer90": 1.0,
      "keyPassesPer90": 0.75,
      "passingAccuracy": 85.2,
      "progressivePassesPer90": 3.9,
      "tacklesWonPer90": 1.7,
      "interceptionsPer90": 0.6,
      "ballRecoveriesPer90": 5.3
    },
    "leagueBenchmarks": [
      {
        "metric": "Key Passes per 90",
        "player": 0.75,
        "avg": 0.9,
        "elite": 2.2
      },
      {
        "metric": "Progressive Passes p90",
        "player": 3.9,
        "avg": 2.8,
        "elite": 6.2
      },
      {
        "metric": "Chances Created",
        "player": 24,
        "avg": 16,
        "elite": 55
      },
      {
        "metric": "Passing Accuracy %",
        "player": 85.2,
        "avg": 79.5,
        "elite": 87.0
      }
    ],
    "heatmap": [
      {
        "x": 50,
        "y": 42,
        "r: ": 45,
        "v": 0.9
      },
      {
        "x": 44,
        "y": 35,
        "r": 38,
        "v": 0.8
      },
      {
        "x": 56,
        "y": 35,
        "r": 38,
        "v": 0.8
      },
      {
        "x": 50,
        "y": 55,
        "r": 35,
        "v": 0.75
      }
    ],
    "strengths": [
      "Workrate",
      "Tactical awareness"
    ],
    "weaknesses": [
      "Defending",
      "Pace"
    ]
  },
  {
    "id": "ibrahim-sangar\u00e9",
    "name": "Ibrahim Sangar\u00e9",
    "age": 31,
    "position": "MF",
    "role": "Box-to-Box Midfielder",
    "club": "Nott'm Forest",
    "league": "Premier League",
    "nation": "Spain",
    "value": 29400000,
    "rating": 82,
    "general": {
      "apps": 25,
      "mins": 2073,
      "goals": 2,
      "assists": 2,
      "yellowCards": 5,
      "redCards": 0
    },
    "attributes": {
      "pace": 66,
      "dribbling": 68,
      "passing": 73,
      "defending": 78,
      "physicality": 83,
      "tactical": 84,
      "workrate": 89
    },
    "detailedStats": {
      "goalsPer90": 0.09,
      "shotsOnTargetPer90": 0.6,
      "expectedGoals": 1.2,
      "shotConversionRate": 12.4,
      "touchesInBoxPer90": 0.9,
      "chancesCreated": 25,
      "dribblesCompletedPer90": 1.1,
      "keyPassesPer90": 0.45,
      "passingAccuracy": 85.4,
      "progressivePassesPer90": 4.1,
      "tacklesWonPer90": 2.2,
      "interceptionsPer90": 0.7,
      "ballRecoveriesPer90": 6.4
    },
    "leagueBenchmarks": [
      {
        "metric": "Key Passes per 90",
        "player": 0.45,
        "avg": 0.9,
        "elite": 2.2
      },
      {
        "metric": "Progressive Passes p90",
        "player": 4.1,
        "avg": 2.8,
        "elite": 6.2
      },
      {
        "metric": "Chances Created",
        "player": 25,
        "avg": 16,
        "elite": 55
      },
      {
        "metric": "Passing Accuracy %",
        "player": 85.4,
        "avg": 79.5,
        "elite": 87.0
      }
    ],
    "heatmap": [
      {
        "x": 50,
        "y": 42,
        "r: ": 45,
        "v": 0.9
      },
      {
        "x": 44,
        "y": 35,
        "r": 38,
        "v": 0.8
      },
      {
        "x": 56,
        "y": 35,
        "r": 38,
        "v": 0.8
      },
      {
        "x": 50,
        "y": 55,
        "r": 35,
        "v": 0.75
      }
    ],
    "strengths": [
      "Workrate",
      "Tactical awareness"
    ],
    "weaknesses": [
      "Dribbling",
      "Pace"
    ]
  },
  {
    "id": "ryan-yates",
    "name": "Ryan Yates",
    "age": 32,
    "position": "MF",
    "role": "Box-to-Box Midfielder",
    "club": "Nott'm Forest",
    "league": "Premier League",
    "nation": "England",
    "value": 28200000,
    "rating": 74,
    "general": {
      "apps": 2,
      "mins": 602,
      "goals": 0,
      "assists": 2,
      "yellowCards": 3,
      "redCards": 0
    },
    "attributes": {
      "pace": 62,
      "dribbling": 60,
      "passing": 65,
      "defending": 59,
      "physicality": 64,
      "tactical": 71,
      "workrate": 68
    },
    "detailedStats": {
      "goalsPer90": 0.0,
      "shotsOnTargetPer90": 0.5,
      "expectedGoals": 0.5,
      "shotConversionRate": 10.0,
      "touchesInBoxPer90": 0.7,
      "chancesCreated": 9,
      "dribblesCompletedPer90": 0.7,
      "keyPassesPer90": 0.6,
      "passingAccuracy": 83.3,
      "progressivePassesPer90": 2.8,
      "tacklesWonPer90": 1.3,
      "interceptionsPer90": 0.6,
      "ballRecoveriesPer90": 4.4
    },
    "leagueBenchmarks": [
      {
        "metric": "Key Passes per 90",
        "player": 0.6,
        "avg": 0.9,
        "elite": 2.2
      },
      {
        "metric": "Progressive Passes p90",
        "player": 2.8,
        "avg": 2.8,
        "elite": 6.2
      },
      {
        "metric": "Chances Created",
        "player": 9,
        "avg": 16,
        "elite": 55
      },
      {
        "metric": "Passing Accuracy %",
        "player": 83.3,
        "avg": 79.5,
        "elite": 87.0
      }
    ],
    "heatmap": [
      {
        "x": 50,
        "y": 42,
        "r: ": 45,
        "v": 0.9
      },
      {
        "x": 44,
        "y": 35,
        "r": 38,
        "v": 0.8
      },
      {
        "x": 56,
        "y": 35,
        "r": 38,
        "v": 0.8
      },
      {
        "x": 50,
        "y": 55,
        "r": 35,
        "v": 0.75
      }
    ],
    "strengths": [
      "Workrate",
      "Tactical awareness"
    ],
    "weaknesses": [
      "Dribbling",
      "Defending"
    ]
  },
  {
    "id": "chris-wood",
    "name": "Chris Wood",
    "age": 20,
    "position": "FW",
    "role": "Complete Winger / Striker",
    "club": "Nott'm Forest",
    "league": "Premier League",
    "nation": "England",
    "value": 42600000,
    "rating": 75,
    "general": {
      "apps": 11,
      "mins": 896,
      "goals": 3,
      "assists": 0,
      "yellowCards": 0,
      "redCards": 0
    },
    "attributes": {
      "pace": 84,
      "dribbling": 69,
      "passing": 65,
      "defending": 28,
      "physicality": 64,
      "tactical": 77,
      "workrate": 72
    },
    "detailedStats": {
      "goalsPer90": 0.3,
      "shotsOnTargetPer90": 0.9,
      "expectedGoals": 4.3,
      "shotConversionRate": 13.6,
      "touchesInBoxPer90": 3.3,
      "chancesCreated": 11,
      "dribblesCompletedPer90": 0.7,
      "keyPassesPer90": 0.44
    },
    "leagueBenchmarks": [
      {
        "metric": "Goals per 90",
        "player": 0.3,
        "avg": 0.22,
        "elite": 0.65
      },
      {
        "metric": "Shot Conversion %",
        "player": 13.6,
        "avg": 10.5,
        "elite": 18.0
      },
      {
        "metric": "Touches in Box p90",
        "player": 3.3,
        "avg": 2.5,
        "elite": 5.5
      },
      {
        "metric": "Expected Goals (xG)",
        "player": 4.3,
        "avg": 4.5,
        "elite": 14.0
      }
    ],
    "heatmap": [
      {
        "x": 50,
        "y": 84,
        "r": 38,
        "v": 0.9
      },
      {
        "x": 48,
        "y": 76,
        "r": 32,
        "v": 0.75
      },
      {
        "x": 52,
        "y": 80,
        "r": 32,
        "v": 0.8
      },
      {
        "x": 50,
        "y": 92,
        "r": 28,
        "v": 0.85
      }
    ],
    "strengths": [
      "Tactical awareness",
      "Pace"
    ],
    "weaknesses": [
      "Defending",
      "Defensive Tracking Back"
    ]
  },
  {
    "id": "igor-jesus-maciel-da-cruz",
    "name": "Igor Jesus Maciel da Cruz",
    "age": 21,
    "position": "FW",
    "role": "Complete Winger / Striker",
    "club": "Nott'm Forest",
    "league": "Premier League",
    "nation": "Spain",
    "value": 35400000,
    "rating": 86,
    "general": {
      "apps": 28,
      "mins": 2293,
      "goals": 6,
      "assists": 6,
      "yellowCards": 2,
      "redCards": 0
    },
    "attributes": {
      "pace": 98,
      "dribbling": 93,
      "passing": 76,
      "defending": 35,
      "physicality": 83,
      "tactical": 95,
      "workrate": 92
    },
    "detailedStats": {
      "goalsPer90": 0.24,
      "shotsOnTargetPer90": 0.9,
      "expectedGoals": 6.5,
      "shotConversionRate": 17.2,
      "touchesInBoxPer90": 5.6,
      "chancesCreated": 30,
      "dribblesCompletedPer90": 1.2,
      "keyPassesPer90": 0.47
    },
    "leagueBenchmarks": [
      {
        "metric": "Goals per 90",
        "player": 0.24,
        "avg": 0.22,
        "elite": 0.65
      },
      {
        "metric": "Shot Conversion %",
        "player": 17.2,
        "avg": 10.5,
        "elite": 18.0
      },
      {
        "metric": "Touches in Box p90",
        "player": 5.6,
        "avg": 2.5,
        "elite": 5.5
      },
      {
        "metric": "Expected Goals (xG)",
        "player": 6.5,
        "avg": 4.5,
        "elite": 14.0
      }
    ],
    "heatmap": [
      {
        "x": 50,
        "y": 84,
        "r": 38,
        "v": 0.9
      },
      {
        "x": 48,
        "y": 76,
        "r": 32,
        "v": 0.75
      },
      {
        "x": 52,
        "y": 80,
        "r": 32,
        "v": 0.8
      },
      {
        "x": 50,
        "y": 92,
        "r": 28,
        "v": 0.85
      }
    ],
    "strengths": [
      "Tactical awareness",
      "Pace"
    ],
    "weaknesses": [
      "Defending",
      "Defensive Tracking Back"
    ]
  },
  {
    "id": "taiwo-awoniyi",
    "name": "Taiwo Awoniyi",
    "age": 22,
    "position": "FW",
    "role": "Complete Winger / Striker",
    "club": "Nott'm Forest",
    "league": "Premier League",
    "nation": "Spain",
    "value": 31200000,
    "rating": 76,
    "general": {
      "apps": 3,
      "mins": 480,
      "goals": 4,
      "assists": 2,
      "yellowCards": 2,
      "redCards": 0
    },
    "attributes": {
      "pace": 83,
      "dribbling": 67,
      "passing": 65,
      "defending": 29,
      "physicality": 66,
      "tactical": 77,
      "workrate": 66
    },
    "detailedStats": {
      "goalsPer90": 0.75,
      "shotsOnTargetPer90": 1.6,
      "expectedGoals": 3.7,
      "shotConversionRate": 14.8,
      "touchesInBoxPer90": 3.2,
      "chancesCreated": 9,
      "dribblesCompletedPer90": 0.7,
      "keyPassesPer90": 0.74
    },
    "leagueBenchmarks": [
      {
        "metric": "Goals per 90",
        "player": 0.75,
        "avg": 0.22,
        "elite": 0.65
      },
      {
        "metric": "Shot Conversion %",
        "player": 14.8,
        "avg": 10.5,
        "elite": 18.0
      },
      {
        "metric": "Touches in Box p90",
        "player": 3.2,
        "avg": 2.5,
        "elite": 5.5
      },
      {
        "metric": "Expected Goals (xG)",
        "player": 3.7,
        "avg": 4.5,
        "elite": 14.0
      }
    ],
    "heatmap": [
      {
        "x": 50,
        "y": 84,
        "r": 38,
        "v": 0.9
      },
      {
        "x": 48,
        "y": 76,
        "r": 32,
        "v": 0.75
      },
      {
        "x": 52,
        "y": 80,
        "r": 32,
        "v": 0.8
      },
      {
        "x": 50,
        "y": 92,
        "r": 28,
        "v": 0.85
      }
    ],
    "strengths": [
      "Tactical awareness",
      "Pace"
    ],
    "weaknesses": [
      "Defending",
      "Defensive Tracking Back"
    ]
  },
  {
    "id": "dan-ndoye",
    "name": "Dan Ndoye",
    "age": 29,
    "position": "MF",
    "role": "Box-to-Box Midfielder",
    "club": "Nott'm Forest",
    "league": "Premier League",
    "nation": "England",
    "value": 33000000,
    "rating": 77,
    "general": {
      "apps": 14,
      "mins": 1167,
      "goals": 1,
      "assists": 2,
      "yellowCards": 1,
      "redCards": 0
    },
    "attributes": {
      "pace": 69,
      "dribbling": 70,
      "passing": 74,
      "defending": 61,
      "physicality": 66,
      "tactical": 79,
      "workrate": 76
    },
    "detailedStats": {
      "goalsPer90": 0.08,
      "shotsOnTargetPer90": 0.6,
      "expectedGoals": 1.1,
      "shotConversionRate": 11.2,
      "touchesInBoxPer90": 1.1,
      "chancesCreated": 27,
      "dribblesCompletedPer90": 1.1,
      "keyPassesPer90": 0.84,
      "passingAccuracy": 85.6,
      "progressivePassesPer90": 4.2,
      "tacklesWonPer90": 1.4,
      "interceptionsPer90": 0.6,
      "ballRecoveriesPer90": 4.6
    },
    "leagueBenchmarks": [
      {
        "metric": "Key Passes per 90",
        "player": 0.84,
        "avg": 0.9,
        "elite": 2.2
      },
      {
        "metric": "Progressive Passes p90",
        "player": 4.2,
        "avg": 2.8,
        "elite": 6.2
      },
      {
        "metric": "Chances Created",
        "player": 27,
        "avg": 16,
        "elite": 55
      },
      {
        "metric": "Passing Accuracy %",
        "player": 85.6,
        "avg": 79.5,
        "elite": 87.0
      }
    ],
    "heatmap": [
      {
        "x": 50,
        "y": 42,
        "r: ": 45,
        "v": 0.9
      },
      {
        "x": 44,
        "y": 35,
        "r": 38,
        "v": 0.8
      },
      {
        "x": 56,
        "y": 35,
        "r": 38,
        "v": 0.8
      },
      {
        "x": 50,
        "y": 55,
        "r": 35,
        "v": 0.75
      }
    ],
    "strengths": [
      "Workrate",
      "Tactical awareness"
    ],
    "weaknesses": [
      "Defending",
      "Physicality"
    ]
  },
  {
    "id": "omari-hutchinson",
    "name": "Omari Hutchinson",
    "age": 23,
    "position": "MF",
    "role": "Attacking Playmaker",
    "club": "Nott'm Forest",
    "league": "Premier League",
    "nation": "England",
    "value": 32400000,
    "rating": 81,
    "general": {
      "apps": 17,
      "mins": 1676,
      "goals": 1,
      "assists": 7,
      "yellowCards": 1,
      "redCards": 0
    },
    "attributes": {
      "pace": 77,
      "dribbling": 90,
      "passing": 95,
      "defending": 72,
      "physicality": 77,
      "tactical": 95,
      "workrate": 83
    },
    "detailedStats": {
      "goalsPer90": 0.05,
      "shotsOnTargetPer90": 0.6,
      "expectedGoals": 2.0,
      "shotConversionRate": 11.2,
      "touchesInBoxPer90": 1.7,
      "chancesCreated": 65,
      "dribblesCompletedPer90": 2.2,
      "keyPassesPer90": 1.42,
      "passingAccuracy": 90.8,
      "progressivePassesPer90": 7.3,
      "tacklesWonPer90": 1.9,
      "interceptionsPer90": 0.8,
      "ballRecoveriesPer90": 5.7
    },
    "leagueBenchmarks": [
      {
        "metric": "Key Passes per 90",
        "player": 1.42,
        "avg": 0.9,
        "elite": 2.2
      },
      {
        "metric": "Progressive Passes p90",
        "player": 7.3,
        "avg": 2.8,
        "elite": 6.2
      },
      {
        "metric": "Chances Created",
        "player": 65,
        "avg": 16,
        "elite": 55
      },
      {
        "metric": "Passing Accuracy %",
        "player": 90.8,
        "avg": 79.5,
        "elite": 87.0
      }
    ],
    "heatmap": [
      {
        "x": 50,
        "y": 64,
        "r": 42,
        "v": 0.9
      },
      {
        "x": 40,
        "y": 55,
        "r": 35,
        "v": 0.75
      },
      {
        "x": 60,
        "y": 55,
        "r": 35,
        "v": 0.75
      },
      {
        "x": 50,
        "y": 76,
        "r": 30,
        "v": 0.8
      }
    ],
    "strengths": [
      "Creative Vision",
      "Passing",
      "Tactical awareness"
    ],
    "weaknesses": [
      "Defending",
      "Physicality"
    ]
  },
  {
    "id": "john-victor-maciel-furtado",
    "name": "John Victor Maciel Furtado",
    "age": 30,
    "position": "GK",
    "role": "Sweeper Keeper",
    "club": "Nott'm Forest",
    "league": "Premier League",
    "nation": "France",
    "value": 24000000,
    "rating": 71,
    "general": {
      "apps": 5,
      "mins": 437,
      "goals": 0,
      "assists": 0,
      "yellowCards": 1,
      "redCards": 0
    },
    "attributes": {
      "pace": 60,
      "dribbling": 55,
      "passing": 57,
      "defending": 77,
      "physicality": 58,
      "tactical": 66,
      "workrate": 66
    },
    "detailedStats": {
      "savePercentage": 66.2,
      "cleanSheets": 1,
      "goalsConceded": 8,
      "psxgDifference": 0.4,
      "passingAccuracy": 72.8,
      "sweeperActionsPer90": 0.5,
      "averageDistanceOfSweeperActions": 12.1
    },
    "leagueBenchmarks": [
      {
        "metric": "Save %",
        "player": 66.2,
        "avg": 69.5,
        "elite": 77.0
      },
      {
        "metric": "Clean Sheets",
        "player": 1,
        "avg": 4.5,
        "elite": 10.0
      },
      {
        "metric": "Sweeper Actions p90",
        "player": 0.5,
        "avg": 0.6,
        "elite": 1.2
      },
      {
        "metric": "Passing Accuracy %",
        "player": 72.8,
        "avg": 73.0,
        "elite": 82.0
      }
    ],
    "heatmap": [
      {
        "x": 50,
        "y": 6,
        "r": 35,
        "v": 0.98
      },
      {
        "x": 50,
        "y": 14,
        "r": 28,
        "v": 0.7
      },
      {
        "x": 45,
        "y": 8,
        "r": 22,
        "v": 0.55
      },
      {
        "x": 55,
        "y": 8,
        "r": 22,
        "v": 0.55
      }
    ],
    "strengths": [
      "Defending",
      "Tactical awareness"
    ],
    "weaknesses": [
      "Dribbling",
      "Passing"
    ]
  },
  {
    "id": "nicol\u00f2-savona",
    "name": "Nicol\u00f2 Savona",
    "age": 31,
    "position": "DF",
    "role": "Central Defender",
    "club": "Nott'm Forest",
    "league": "Premier League",
    "nation": "Spain",
    "value": 27000000,
    "rating": 75,
    "general": {
      "apps": 11,
      "mins": 1025,
      "goals": 2,
      "assists": 0,
      "yellowCards": 2,
      "redCards": 0
    },
    "attributes": {
      "pace": 68,
      "dribbling": 63,
      "passing": 68,
      "defending": 85,
      "physicality": 69,
      "tactical": 75,
      "workrate": 74
    },
    "detailedStats": {
      "goalsPer90": 0.18,
      "shotsOnTargetPer90": 0.8,
      "expectedGoals": 1.3,
      "shotConversionRate": 12.4,
      "touchesInBoxPer90": 0.8,
      "chancesCreated": 15,
      "dribblesCompletedPer90": 0.8,
      "keyPassesPer90": 0.54,
      "tacklesWonPer90": 1.7,
      "interceptionsPer90": 0.9,
      "clearancesPer90": 2.6,
      "aerialDuelWinPercentage": 65.8,
      "tackledDribblerRate": 54.4,
      "progressivePassesPer90": 2.1,
      "longPassesCompletedPer90": 1.4,
      "passingAccuracy": 82.5
    },
    "leagueBenchmarks": [
      {
        "metric": "Passing Accuracy %",
        "player": 82.5,
        "avg": 82.0,
        "elite": 89.0
      },
      {
        "metric": "Clearances per 90",
        "player": 2.6,
        "avg": 2.6,
        "elite": 4.0
      },
      {
        "metric": "Aerial Duel Win %",
        "player": 65.8,
        "avg": 54.5,
        "elite": 68.0
      },
      {
        "metric": "Tackles Won per 90",
        "player": 1.7,
        "avg": 1.1,
        "elite": 2.0
      }
    ],
    "heatmap": [
      {
        "x": 50,
        "y": 20,
        "r": 45,
        "v": 0.9
      },
      {
        "x": 42,
        "y": 18,
        "r": 32,
        "v": 0.8
      },
      {
        "x": 58,
        "y": 18,
        "r": 32,
        "v": 0.8
      },
      {
        "x": 50,
        "y": 10,
        "r": 28,
        "v": 0.6
      }
    ],
    "strengths": [
      "Defending",
      "Tactical awareness"
    ],
    "weaknesses": [
      "Dribbling",
      "Passing"
    ]
  },
  {
    "id": "dilane-bakwa",
    "name": "Dilane Bakwa",
    "age": 34,
    "position": "MF",
    "role": "Box-to-Box Midfielder",
    "club": "Nott'm Forest",
    "league": "Premier League",
    "nation": "Spain",
    "value": 35400000,
    "rating": 73,
    "general": {
      "apps": 6,
      "mins": 549,
      "goals": 0,
      "assists": 2,
      "yellowCards": 1,
      "redCards": 0
    },
    "attributes": {
      "pace": 64,
      "dribbling": 65,
      "passing": 71,
      "defending": 55,
      "physicality": 60,
      "tactical": 73,
      "workrate": 67
    },
    "detailedStats": {
      "goalsPer90": 0.0,
      "shotsOnTargetPer90": 0.5,
      "expectedGoals": 0.5,
      "shotConversionRate": 10.0,
      "touchesInBoxPer90": 0.8,
      "chancesCreated": 22,
      "dribblesCompletedPer90": 1.0,
      "keyPassesPer90": 1.47,
      "passingAccuracy": 85.0,
      "progressivePassesPer90": 3.8,
      "tacklesWonPer90": 1.1,
      "interceptionsPer90": 0.6,
      "ballRecoveriesPer90": 4.1
    },
    "leagueBenchmarks": [
      {
        "metric": "Key Passes per 90",
        "player": 1.47,
        "avg": 0.9,
        "elite": 2.2
      },
      {
        "metric": "Progressive Passes p90",
        "player": 3.8,
        "avg": 2.8,
        "elite": 6.2
      },
      {
        "metric": "Chances Created",
        "player": 22,
        "avg": 16,
        "elite": 55
      },
      {
        "metric": "Passing Accuracy %",
        "player": 85.0,
        "avg": 79.5,
        "elite": 87.0
      }
    ],
    "heatmap": [
      {
        "x": 50,
        "y": 42,
        "r: ": 45,
        "v": 0.9
      },
      {
        "x": 44,
        "y": 35,
        "r": 38,
        "v": 0.8
      },
      {
        "x": 56,
        "y": 35,
        "r": 38,
        "v": 0.8
      },
      {
        "x": 50,
        "y": 55,
        "r": 35,
        "v": 0.75
      }
    ],
    "strengths": [
      "Passing",
      "Tactical awareness"
    ],
    "weaknesses": [
      "Defending",
      "Physicality"
    ]
  },
  {
    "id": "luca-netz",
    "name": "Luca Netz",
    "age": 24,
    "position": "DF",
    "role": "Central Defender",
    "club": "Nott'm Forest",
    "league": "Premier League",
    "nation": "Spain",
    "value": 27000000,
    "rating": 71,
    "general": {
      "apps": 3,
      "mins": 353,
      "goals": 0,
      "assists": 0,
      "yellowCards": 0,
      "redCards": 0
    },
    "attributes": {
      "pace": 65,
      "dribbling": 56,
      "passing": 62,
      "defending": 75,
      "physicality": 59,
      "tactical": 67,
      "workrate": 65
    },
    "detailedStats": {
      "goalsPer90": 0.0,
      "shotsOnTargetPer90": 0.5,
      "expectedGoals": 0.0,
      "shotConversionRate": 10.0,
      "touchesInBoxPer90": 0.5,
      "chancesCreated": 3,
      "dribblesCompletedPer90": 0.5,
      "keyPassesPer90": 0.38,
      "tacklesWonPer90": 1.2,
      "interceptionsPer90": 0.8,
      "clearancesPer90": 1.8,
      "aerialDuelWinPercentage": 58.2,
      "tackledDribblerRate": 51.0,
      "progressivePassesPer90": 1.7,
      "longPassesCompletedPer90": 1.1,
      "passingAccuracy": 80.6
    },
    "leagueBenchmarks": [
      {
        "metric": "Passing Accuracy %",
        "player": 80.6,
        "avg": 82.0,
        "elite": 89.0
      },
      {
        "metric": "Clearances per 90",
        "player": 1.8,
        "avg": 2.6,
        "elite": 4.0
      },
      {
        "metric": "Aerial Duel Win %",
        "player": 58.2,
        "avg": 54.5,
        "elite": 68.0
      },
      {
        "metric": "Tackles Won per 90",
        "player": 1.2,
        "avg": 1.1,
        "elite": 2.0
      }
    ],
    "heatmap": [
      {
        "x": 50,
        "y": 20,
        "r": 45,
        "v": 0.9
      },
      {
        "x": 42,
        "y": 18,
        "r": 32,
        "v": 0.8
      },
      {
        "x": 58,
        "y": 18,
        "r": 32,
        "v": 0.8
      },
      {
        "x": 50,
        "y": 10,
        "r": 28,
        "v": 0.6
      }
    ],
    "strengths": [
      "Defending",
      "Tactical awareness"
    ],
    "weaknesses": [
      "Dribbling",
      "Physicality"
    ]
  },
  {
    "id": "daniel-ballard",
    "name": "Daniel Ballard",
    "age": 26,
    "position": "DF",
    "role": "Attacking Fullback",
    "club": "Sunderland",
    "league": "Premier League",
    "nation": "England",
    "value": 27600000,
    "rating": 86,
    "general": {
      "apps": 24,
      "mins": 2144,
      "goals": 2,
      "assists": 2,
      "yellowCards": 4,
      "redCards": 1
    },
    "attributes": {
      "pace": 79,
      "dribbling": 77,
      "passing": 72,
      "defending": 94,
      "physicality": 94,
      "tactical": 95,
      "workrate": 90
    },
    "detailedStats": {
      "goalsPer90": 0.08,
      "shotsOnTargetPer90": 0.6,
      "expectedGoals": 2.5,
      "shotConversionRate": 12.4,
      "touchesInBoxPer90": 1.7,
      "chancesCreated": 22,
      "dribblesCompletedPer90": 1.0,
      "keyPassesPer90": 0.38,
      "tacklesWonPer90": 3.2,
      "interceptionsPer90": 1.2,
      "clearancesPer90": 4.8,
      "aerialDuelWinPercentage": 80.0,
      "tackledDribblerRate": 62.1,
      "progressivePassesPer90": 2.4,
      "longPassesCompletedPer90": 1.6,
      "passingAccuracy": 83.6
    },
    "leagueBenchmarks": [
      {
        "metric": "Passing Accuracy %",
        "player": 83.6,
        "avg": 82.0,
        "elite": 89.0
      },
      {
        "metric": "Clearances per 90",
        "player": 4.8,
        "avg": 2.6,
        "elite": 4.0
      },
      {
        "metric": "Aerial Duel Win %",
        "player": 80.0,
        "avg": 54.5,
        "elite": 68.0
      },
      {
        "metric": "Tackles Won per 90",
        "player": 3.2,
        "avg": 1.1,
        "elite": 2.0
      }
    ],
    "heatmap": [
      {
        "x": 86,
        "y": 25,
        "r": 38,
        "v": 0.8
      },
      {
        "x": 86,
        "y": 45,
        "r": 40,
        "v": 0.85
      },
      {
        "x": 86,
        "y": 65,
        "r": 35,
        "v": 0.7
      },
      {
        "x": 86,
        "y": 12,
        "r": 30,
        "v": 0.6
      }
    ],
    "strengths": [
      "Defending",
      "Tactical awareness",
      "Aerial Dominance"
    ],
    "weaknesses": [
      "Dribbling",
      "Passing"
    ]
  },
  {
    "id": "trai-hume",
    "name": "Trai Hume",
    "age": 27,
    "position": "DF",
    "role": "Attacking Fullback",
    "club": "Sunderland",
    "league": "Premier League",
    "nation": "Brazil",
    "value": 27000000,
    "rating": 85,
    "general": {
      "apps": 34,
      "mins": 3032,
      "goals": 2,
      "assists": 1,
      "yellowCards": 9,
      "redCards": 0
    },
    "attributes": {
      "pace": 74,
      "dribbling": 81,
      "passing": 88,
      "defending": 94,
      "physicality": 91,
      "tactical": 95,
      "workrate": 96
    },
    "detailedStats": {
      "goalsPer90": 0.06,
      "shotsOnTargetPer90": 0.6,
      "expectedGoals": 2.3,
      "shotConversionRate": 12.4,
      "touchesInBoxPer90": 1.3,
      "chancesCreated": 52,
      "dribblesCompletedPer90": 1.8,
      "keyPassesPer90": 0.63,
      "tacklesWonPer90": 2.8,
      "interceptionsPer90": 1.2,
      "clearancesPer90": 4.2,
      "aerialDuelWinPercentage": 80.0,
      "tackledDribblerRate": 62.1,
      "progressivePassesPer90": 3.6,
      "longPassesCompletedPer90": 2.4,
      "passingAccuracy": 88.4
    },
    "leagueBenchmarks": [
      {
        "metric": "Passing Accuracy %",
        "player": 88.4,
        "avg": 82.0,
        "elite": 89.0
      },
      {
        "metric": "Clearances per 90",
        "player": 4.2,
        "avg": 2.6,
        "elite": 4.0
      },
      {
        "metric": "Aerial Duel Win %",
        "player": 80.0,
        "avg": 54.5,
        "elite": 68.0
      },
      {
        "metric": "Tackles Won per 90",
        "player": 2.8,
        "avg": 1.1,
        "elite": 2.0
      }
    ],
    "heatmap": [
      {
        "x": 14,
        "y": 25,
        "r": 38,
        "v": 0.8
      },
      {
        "x": 14,
        "y": 45,
        "r": 40,
        "v": 0.85
      },
      {
        "x": 14,
        "y": 65,
        "r": 35,
        "v": 0.7
      },
      {
        "x": 14,
        "y": 12,
        "r": 30,
        "v": 0.6
      }
    ],
    "strengths": [
      "Workrate",
      "Tactical awareness",
      "Aerial Dominance"
    ],
    "weaknesses": [
      "Dribbling",
      "Pace"
    ]
  },
  {
    "id": "dennis-cirkin",
    "name": "Dennis Cirkin",
    "age": 30,
    "position": "DF",
    "role": "Central Defender",
    "club": "Sunderland",
    "league": "Premier League",
    "nation": "France",
    "value": 24000000,
    "rating": 72,
    "general": {
      "apps": 3,
      "mins": 319,
      "goals": 0,
      "assists": 0,
      "yellowCards": 2,
      "redCards": 0
    },
    "attributes": {
      "pace": 65,
      "dribbling": 55,
      "passing": 60,
      "defending": 75,
      "physicality": 58,
      "tactical": 66,
      "workrate": 64
    },
    "detailedStats": {
      "goalsPer90": 0.0,
      "shotsOnTargetPer90": 0.5,
      "expectedGoals": 0.1,
      "shotConversionRate": 10.0,
      "touchesInBoxPer90": 0.5,
      "chancesCreated": 1,
      "dribblesCompletedPer90": 0.4,
      "keyPassesPer90": 0.14,
      "tacklesWonPer90": 1.2,
      "interceptionsPer90": 0.8,
      "clearancesPer90": 1.8,
      "aerialDuelWinPercentage": 58.0,
      "tackledDribblerRate": 50.8,
      "progressivePassesPer90": 1.5,
      "longPassesCompletedPer90": 1.0,
      "passingAccuracy": 80.2
    },
    "leagueBenchmarks": [
      {
        "metric": "Passing Accuracy %",
        "player": 80.2,
        "avg": 82.0,
        "elite": 89.0
      },
      {
        "metric": "Clearances per 90",
        "player": 1.8,
        "avg": 2.6,
        "elite": 4.0
      },
      {
        "metric": "Aerial Duel Win %",
        "player": 58.0,
        "avg": 54.5,
        "elite": 68.0
      },
      {
        "metric": "Tackles Won per 90",
        "player": 1.2,
        "avg": 1.1,
        "elite": 2.0
      }
    ],
    "heatmap": [
      {
        "x": 50,
        "y": 20,
        "r": 45,
        "v": 0.9
      },
      {
        "x": 42,
        "y": 18,
        "r": 32,
        "v": 0.8
      },
      {
        "x": 58,
        "y": 18,
        "r": 32,
        "v": 0.8
      },
      {
        "x": 50,
        "y": 10,
        "r": 28,
        "v": 0.6
      }
    ],
    "strengths": [
      "Defending",
      "Tactical awareness"
    ],
    "weaknesses": [
      "Dribbling",
      "Physicality"
    ]
  },
  {
    "id": "luke-o'nien",
    "name": "Luke O'Nien",
    "age": 34,
    "position": "DF",
    "role": "Central Defender",
    "club": "Sunderland",
    "league": "Premier League",
    "nation": "Brazil",
    "value": 24000000,
    "rating": 73,
    "general": {
      "apps": 5,
      "mins": 565,
      "goals": 0,
      "assists": 1,
      "yellowCards": 1,
      "redCards": 1
    },
    "attributes": {
      "pace": 66,
      "dribbling": 57,
      "passing": 61,
      "defending": 78,
      "physicality": 61,
      "tactical": 69,
      "workrate": 68
    },
    "detailedStats": {
      "goalsPer90": 0.0,
      "shotsOnTargetPer90": 0.5,
      "expectedGoals": 0.1,
      "shotConversionRate": 10.0,
      "touchesInBoxPer90": 0.6,
      "chancesCreated": 3,
      "dribblesCompletedPer90": 0.5,
      "keyPassesPer90": 0.22,
      "tacklesWonPer90": 1.3,
      "interceptionsPer90": 0.9,
      "clearancesPer90": 2.0,
      "aerialDuelWinPercentage": 60.1,
      "tackledDribblerRate": 51.7,
      "progressivePassesPer90": 1.6,
      "longPassesCompletedPer90": 1.1,
      "passingAccuracy": 80.6
    },
    "leagueBenchmarks": [
      {
        "metric": "Passing Accuracy %",
        "player": 80.6,
        "avg": 82.0,
        "elite": 89.0
      },
      {
        "metric": "Clearances per 90",
        "player": 2.0,
        "avg": 2.6,
        "elite": 4.0
      },
      {
        "metric": "Aerial Duel Win %",
        "player": 60.1,
        "avg": 54.5,
        "elite": 68.0
      },
      {
        "metric": "Tackles Won per 90",
        "player": 1.3,
        "avg": 1.1,
        "elite": 2.0
      }
    ],
    "heatmap": [
      {
        "x": 50,
        "y": 20,
        "r": 45,
        "v": 0.9
      },
      {
        "x": 42,
        "y": 18,
        "r": 32,
        "v": 0.8
      },
      {
        "x": 58,
        "y": 18,
        "r": 32,
        "v": 0.8
      },
      {
        "x": 50,
        "y": 10,
        "r": 28,
        "v": 0.6
      }
    ],
    "strengths": [
      "Defending",
      "Tactical awareness"
    ],
    "weaknesses": [
      "Dribbling",
      "Physicality"
    ]
  },
  {
    "id": "reinildo-mandava",
    "name": "Reinildo Mandava",
    "age": 21,
    "position": "DF",
    "role": "Central Defender",
    "club": "Sunderland",
    "league": "Premier League",
    "nation": "Spain",
    "value": 22800000,
    "rating": 80,
    "general": {
      "apps": 23,
      "mins": 1966,
      "goals": 0,
      "assists": 2,
      "yellowCards": 7,
      "redCards": 1
    },
    "attributes": {
      "pace": 66,
      "dribbling": 61,
      "passing": 68,
      "defending": 93,
      "physicality": 80,
      "tactical": 78,
      "workrate": 88
    },
    "detailedStats": {
      "goalsPer90": 0.0,
      "shotsOnTargetPer90": 0.5,
      "expectedGoals": 0.1,
      "shotConversionRate": 10.0,
      "touchesInBoxPer90": 0.6,
      "chancesCreated": 16,
      "dribblesCompletedPer90": 0.8,
      "keyPassesPer90": 0.3,
      "tacklesWonPer90": 2.3,
      "interceptionsPer90": 1.0,
      "clearancesPer90": 3.4,
      "aerialDuelWinPercentage": 73.8,
      "tackledDribblerRate": 55.5,
      "progressivePassesPer90": 2.2,
      "longPassesCompletedPer90": 1.4,
      "passingAccuracy": 82.6
    },
    "leagueBenchmarks": [
      {
        "metric": "Passing Accuracy %",
        "player": 82.6,
        "avg": 82.0,
        "elite": 89.0
      },
      {
        "metric": "Clearances per 90",
        "player": 3.4,
        "avg": 2.6,
        "elite": 4.0
      },
      {
        "metric": "Aerial Duel Win %",
        "player": 73.8,
        "avg": 54.5,
        "elite": 68.0
      },
      {
        "metric": "Tackles Won per 90",
        "player": 2.3,
        "avg": 1.1,
        "elite": 2.0
      }
    ],
    "heatmap": [
      {
        "x": 50,
        "y": 20,
        "r": 45,
        "v": 0.9
      },
      {
        "x": 42,
        "y": 18,
        "r": 32,
        "v": 0.8
      },
      {
        "x": 58,
        "y": 18,
        "r": 32,
        "v": 0.8
      },
      {
        "x": 50,
        "y": 10,
        "r": 28,
        "v": 0.6
      }
    ],
    "strengths": [
      "Defending",
      "Workrate",
      "Aerial Dominance"
    ],
    "weaknesses": [
      "Dribbling",
      "Pace"
    ]
  },
  {
    "id": "simon-adingra",
    "name": "Simon Adingra",
    "age": 23,
    "position": "MF",
    "role": "Box-to-Box Midfielder",
    "club": "Sunderland",
    "league": "Premier League",
    "nation": "England",
    "value": 29400000,
    "rating": 74,
    "general": {
      "apps": 9,
      "mins": 649,
      "goals": 1,
      "assists": 1,
      "yellowCards": 2,
      "redCards": 0
    },
    "attributes": {
      "pace": 63,
      "dribbling": 62,
      "passing": 67,
      "defending": 55,
      "physicality": 60,
      "tactical": 71,
      "workrate": 69
    },
    "detailedStats": {
      "goalsPer90": 0.14,
      "shotsOnTargetPer90": 0.7,
      "expectedGoals": 0.3,
      "shotConversionRate": 11.2,
      "touchesInBoxPer90": 0.8,
      "chancesCreated": 14,
      "dribblesCompletedPer90": 0.8,
      "keyPassesPer90": 0.81,
      "passingAccuracy": 83.9,
      "progressivePassesPer90": 3.2,
      "tacklesWonPer90": 1.1,
      "interceptionsPer90": 0.6,
      "ballRecoveriesPer90": 4.0
    },
    "leagueBenchmarks": [
      {
        "metric": "Key Passes per 90",
        "player": 0.81,
        "avg": 0.9,
        "elite": 2.2
      },
      {
        "metric": "Progressive Passes p90",
        "player": 3.2,
        "avg": 2.8,
        "elite": 6.2
      },
      {
        "metric": "Chances Created",
        "player": 14,
        "avg": 16,
        "elite": 55
      },
      {
        "metric": "Passing Accuracy %",
        "player": 83.9,
        "avg": 79.5,
        "elite": 87.0
      }
    ],
    "heatmap": [
      {
        "x": 50,
        "y": 42,
        "r: ": 45,
        "v": 0.9
      },
      {
        "x": 44,
        "y": 35,
        "r": 38,
        "v": 0.8
      },
      {
        "x": 56,
        "y": 35,
        "r": 38,
        "v": 0.8
      },
      {
        "x": 50,
        "y": 55,
        "r": 35,
        "v": 0.75
      }
    ],
    "strengths": [
      "Workrate",
      "Tactical awareness"
    ],
    "weaknesses": [
      "Defending",
      "Physicality"
    ]
  },
  {
    "id": "habib-diarra",
    "name": "Habib Diarra",
    "age": 24,
    "position": "MF",
    "role": "Box-to-Box Midfielder",
    "club": "Sunderland",
    "league": "Premier League",
    "nation": "Spain",
    "value": 31800000,
    "rating": 79,
    "general": {
      "apps": 15,
      "mins": 1403,
      "goals": 2,
      "assists": 6,
      "yellowCards": 6,
      "redCards": 0
    },
    "attributes": {
      "pace": 71,
      "dribbling": 70,
      "passing": 70,
      "defending": 61,
      "physicality": 66,
      "tactical": 78,
      "workrate": 80
    },
    "detailedStats": {
      "goalsPer90": 0.13,
      "shotsOnTargetPer90": 0.7,
      "expectedGoals": 3.3,
      "shotConversionRate": 12.4,
      "touchesInBoxPer90": 1.3,
      "chancesCreated": 19,
      "dribblesCompletedPer90": 0.9,
      "keyPassesPer90": 0.49,
      "passingAccuracy": 84.6,
      "progressivePassesPer90": 3.5,
      "tacklesWonPer90": 1.4,
      "interceptionsPer90": 0.6,
      "ballRecoveriesPer90": 4.6
    },
    "leagueBenchmarks": [
      {
        "metric": "Key Passes per 90",
        "player": 0.49,
        "avg": 0.9,
        "elite": 2.2
      },
      {
        "metric": "Progressive Passes p90",
        "player": 3.5,
        "avg": 2.8,
        "elite": 6.2
      },
      {
        "metric": "Chances Created",
        "player": 19,
        "avg": 16,
        "elite": 55
      },
      {
        "metric": "Passing Accuracy %",
        "player": 84.6,
        "avg": 79.5,
        "elite": 87.0
      }
    ],
    "heatmap": [
      {
        "x": 50,
        "y": 42,
        "r: ": 45,
        "v": 0.9
      },
      {
        "x": 44,
        "y": 35,
        "r": 38,
        "v": 0.8
      },
      {
        "x": 56,
        "y": 35,
        "r": 38,
        "v": 0.8
      },
      {
        "x": 50,
        "y": 55,
        "r": 35,
        "v": 0.75
      }
    ],
    "strengths": [
      "Workrate",
      "Tactical awareness"
    ],
    "weaknesses": [
      "Defending",
      "Physicality"
    ]
  },
  {
    "id": "enzo-le-f\u00e9e",
    "name": "Enzo Le F\u00e9e",
    "age": 27,
    "position": "MF",
    "role": "Attacking Playmaker",
    "club": "Sunderland",
    "league": "Premier League",
    "nation": "Spain",
    "value": 28800000,
    "rating": 91,
    "general": {
      "apps": 33,
      "mins": 2930,
      "goals": 5,
      "assists": 6,
      "yellowCards": 5,
      "redCards": 0
    },
    "attributes": {
      "pace": 76,
      "dribbling": 96,
      "passing": 97,
      "defending": 88,
      "physicality": 94,
      "tactical": 95,
      "workrate": 96
    },
    "detailedStats": {
      "goalsPer90": 0.15,
      "shotsOnTargetPer90": 0.7,
      "expectedGoals": 5.2,
      "shotConversionRate": 16.0,
      "touchesInBoxPer90": 1.6,
      "chancesCreated": 102,
      "dribblesCompletedPer90": 3.1,
      "keyPassesPer90": 1.25,
      "passingAccuracy": 94.0,
      "progressivePassesPer90": 10.2,
      "tacklesWonPer90": 3.2,
      "interceptionsPer90": 1.0,
      "ballRecoveriesPer90": 8.3
    },
    "leagueBenchmarks": [
      {
        "metric": "Key Passes per 90",
        "player": 1.25,
        "avg": 0.9,
        "elite": 2.2
      },
      {
        "metric": "Progressive Passes p90",
        "player": 10.2,
        "avg": 2.8,
        "elite": 6.2
      },
      {
        "metric": "Chances Created",
        "player": 102,
        "avg": 16,
        "elite": 55
      },
      {
        "metric": "Passing Accuracy %",
        "player": 94.0,
        "avg": 79.5,
        "elite": 87.0
      }
    ],
    "heatmap": [
      {
        "x": 50,
        "y": 64,
        "r": 42,
        "v": 0.9
      },
      {
        "x": 40,
        "y": 55,
        "r": 35,
        "v": 0.75
      },
      {
        "x": 60,
        "y": 55,
        "r": 35,
        "v": 0.75
      },
      {
        "x": 50,
        "y": 76,
        "r": 30,
        "v": 0.8
      }
    ],
    "strengths": [
      "Dribbling",
      "Passing"
    ],
    "weaknesses": [
      "Defending",
      "Pace"
    ]
  },
  {
    "id": "romaine-mundle",
    "name": "Romaine Mundle",
    "age": 28,
    "position": "MF",
    "role": "Box-to-Box Midfielder",
    "club": "Sunderland",
    "league": "Premier League",
    "nation": "Spain",
    "value": 29400000,
    "rating": 72,
    "general": {
      "apps": 2,
      "mins": 399,
      "goals": 0,
      "assists": 0,
      "yellowCards": 1,
      "redCards": 0
    },
    "attributes": {
      "pace": 63,
      "dribbling": 59,
      "passing": 62,
      "defending": 51,
      "physicality": 56,
      "tactical": 68,
      "workrate": 65
    },
    "detailedStats": {
      "goalsPer90": 0.0,
      "shotsOnTargetPer90": 0.5,
      "expectedGoals": 0.9,
      "shotConversionRate": 10.0,
      "touchesInBoxPer90": 0.7,
      "chancesCreated": 4,
      "dribblesCompletedPer90": 0.5,
      "keyPassesPer90": 0.38,
      "passingAccuracy": 82.6,
      "progressivePassesPer90": 2.3,
      "tacklesWonPer90": 0.9,
      "interceptionsPer90": 0.5,
      "ballRecoveriesPer90": 3.7
    },
    "leagueBenchmarks": [
      {
        "metric": "Key Passes per 90",
        "player": 0.38,
        "avg": 0.9,
        "elite": 2.2
      },
      {
        "metric": "Progressive Passes p90",
        "player": 2.3,
        "avg": 2.8,
        "elite": 6.2
      },
      {
        "metric": "Chances Created",
        "player": 4,
        "avg": 16,
        "elite": 55
      },
      {
        "metric": "Passing Accuracy %",
        "player": 82.6,
        "avg": 79.5,
        "elite": 87.0
      }
    ],
    "heatmap": [
      {
        "x": 50,
        "y": 42,
        "r: ": 45,
        "v": 0.9
      },
      {
        "x": 44,
        "y": 35,
        "r": 38,
        "v": 0.8
      },
      {
        "x": 56,
        "y": 35,
        "r": 38,
        "v": 0.8
      },
      {
        "x": 50,
        "y": 55,
        "r": 35,
        "v": 0.75
      }
    ],
    "strengths": [
      "Workrate",
      "Tactical awareness"
    ],
    "weaknesses": [
      "Defending",
      "Physicality"
    ]
  },
  {
    "id": "chris-rigg",
    "name": "Chris Rigg",
    "age": 31,
    "position": "MF",
    "role": "Box-to-Box Midfielder",
    "club": "Sunderland",
    "league": "Premier League",
    "nation": "Spain",
    "value": 28200000,
    "rating": 75,
    "general": {
      "apps": 11,
      "mins": 758,
      "goals": 1,
      "assists": 1,
      "yellowCards": 1,
      "redCards": 0
    },
    "attributes": {
      "pace": 65,
      "dribbling": 64,
      "passing": 69,
      "defending": 57,
      "physicality": 62,
      "tactical": 74,
      "workrate": 70
    },
    "detailedStats": {
      "goalsPer90": 0.12,
      "shotsOnTargetPer90": 0.7,
      "expectedGoals": 0.9,
      "shotConversionRate": 11.2,
      "touchesInBoxPer90": 0.8,
      "chancesCreated": 17,
      "dribblesCompletedPer90": 0.9,
      "keyPassesPer90": 0.85,
      "passingAccuracy": 84.4,
      "progressivePassesPer90": 3.4,
      "tacklesWonPer90": 1.2,
      "interceptionsPer90": 0.6,
      "ballRecoveriesPer90": 4.3
    },
    "leagueBenchmarks": [
      {
        "metric": "Key Passes per 90",
        "player": 0.85,
        "avg": 0.9,
        "elite": 2.2
      },
      {
        "metric": "Progressive Passes p90",
        "player": 3.4,
        "avg": 2.8,
        "elite": 6.2
      },
      {
        "metric": "Chances Created",
        "player": 17,
        "avg": 16,
        "elite": 55
      },
      {
        "metric": "Passing Accuracy %",
        "player": 84.4,
        "avg": 79.5,
        "elite": 87.0
      }
    ],
    "heatmap": [
      {
        "x": 50,
        "y": 42,
        "r: ": 45,
        "v": 0.9
      },
      {
        "x": 44,
        "y": 35,
        "r": 38,
        "v": 0.8
      },
      {
        "x": 56,
        "y": 35,
        "r": 38,
        "v": 0.8
      },
      {
        "x": 50,
        "y": 55,
        "r": 35,
        "v": 0.75
      }
    ],
    "strengths": [
      "Workrate",
      "Tactical awareness"
    ],
    "weaknesses": [
      "Defending",
      "Physicality"
    ]
  },
  {
    "id": "noah-sadiki",
    "name": "Noah Sadiki",
    "age": 32,
    "position": "MF",
    "role": "Box-to-Box Midfielder",
    "club": "Sunderland",
    "league": "Premier League",
    "nation": "England",
    "value": 29400000,
    "rating": 81,
    "general": {
      "apps": 33,
      "mins": 2891,
      "goals": 0,
      "assists": 2,
      "yellowCards": 9,
      "redCards": 0
    },
    "attributes": {
      "pace": 68,
      "dribbling": 74,
      "passing": 82,
      "defending": 73,
      "physicality": 78,
      "tactical": 86,
      "workrate": 96
    },
    "detailedStats": {
      "goalsPer90": 0.0,
      "shotsOnTargetPer90": 0.5,
      "expectedGoals": 1.4,
      "shotConversionRate": 10.0,
      "touchesInBoxPer90": 1.0,
      "chancesCreated": 41,
      "dribblesCompletedPer90": 1.5,
      "keyPassesPer90": 0.52,
      "passingAccuracy": 87.6,
      "progressivePassesPer90": 5.3,
      "tacklesWonPer90": 2.0,
      "interceptionsPer90": 0.7,
      "ballRecoveriesPer90": 5.8
    },
    "leagueBenchmarks": [
      {
        "metric": "Key Passes per 90",
        "player": 0.52,
        "avg": 0.9,
        "elite": 2.2
      },
      {
        "metric": "Progressive Passes p90",
        "player": 5.3,
        "avg": 2.8,
        "elite": 6.2
      },
      {
        "metric": "Chances Created",
        "player": 41,
        "avg": 16,
        "elite": 55
      },
      {
        "metric": "Passing Accuracy %",
        "player": 87.6,
        "avg": 79.5,
        "elite": 87.0
      }
    ],
    "heatmap": [
      {
        "x": 50,
        "y": 42,
        "r: ": 45,
        "v": 0.9
      },
      {
        "x": 44,
        "y": 35,
        "r": 38,
        "v": 0.8
      },
      {
        "x": 56,
        "y": 35,
        "r": 38,
        "v": 0.8
      },
      {
        "x": 50,
        "y": 55,
        "r": 35,
        "v": 0.75
      }
    ],
    "strengths": [
      "Workrate",
      "Tactical awareness"
    ],
    "weaknesses": [
      "Defending",
      "Pace"
    ]
  },
  {
    "id": "chemsdine-talbi",
    "name": "Chemsdine Talbi",
    "age": 33,
    "position": "MF",
    "role": "Box-to-Box Midfielder",
    "club": "Sunderland",
    "league": "Premier League",
    "nation": "Brazil",
    "value": 29400000,
    "rating": 81,
    "general": {
      "apps": 16,
      "mins": 1553,
      "goals": 4,
      "assists": 2,
      "yellowCards": 0,
      "redCards": 0
    },
    "attributes": {
      "pace": 72,
      "dribbling": 73,
      "passing": 74,
      "defending": 65,
      "physicality": 70,
      "tactical": 82,
      "workrate": 82
    },
    "detailedStats": {
      "goalsPer90": 0.23,
      "shotsOnTargetPer90": 0.8,
      "expectedGoals": 2.1,
      "shotConversionRate": 14.8,
      "touchesInBoxPer90": 1.3,
      "chancesCreated": 26,
      "dribblesCompletedPer90": 1.1,
      "keyPassesPer90": 0.61,
      "passingAccuracy": 85.5,
      "progressivePassesPer90": 4.1,
      "tacklesWonPer90": 1.6,
      "interceptionsPer90": 0.7,
      "ballRecoveriesPer90": 5.1
    },
    "leagueBenchmarks": [
      {
        "metric": "Key Passes per 90",
        "player": 0.61,
        "avg": 0.9,
        "elite": 2.2
      },
      {
        "metric": "Progressive Passes p90",
        "player": 4.1,
        "avg": 2.8,
        "elite": 6.2
      },
      {
        "metric": "Chances Created",
        "player": 26,
        "avg": 16,
        "elite": 55
      },
      {
        "metric": "Passing Accuracy %",
        "player": 85.5,
        "avg": 79.5,
        "elite": 87.0
      }
    ],
    "heatmap": [
      {
        "x": 50,
        "y": 42,
        "r: ": 45,
        "v": 0.9
      },
      {
        "x": 44,
        "y": 35,
        "r": 38,
        "v": 0.8
      },
      {
        "x": 56,
        "y": 35,
        "r": 38,
        "v": 0.8
      },
      {
        "x": 50,
        "y": 55,
        "r": 35,
        "v": 0.75
      }
    ],
    "strengths": [
      "Workrate",
      "Tactical awareness"
    ],
    "weaknesses": [
      "Defending",
      "Physicality"
    ]
  },
  {
    "id": "wilson-isidor",
    "name": "Wilson Isidor",
    "age": 25,
    "position": "FW",
    "role": "Complete Winger / Striker",
    "club": "Sunderland",
    "league": "Premier League",
    "nation": "France",
    "value": 30000000,
    "rating": 80,
    "general": {
      "apps": 11,
      "mins": 1148,
      "goals": 6,
      "assists": 1,
      "yellowCards": 1,
      "redCards": 0
    },
    "attributes": {
      "pace": 94,
      "dribbling": 73,
      "passing": 62,
      "defending": 31,
      "physicality": 71,
      "tactical": 82,
      "workrate": 76
    },
    "detailedStats": {
      "goalsPer90": 0.47,
      "shotsOnTargetPer90": 1.2,
      "expectedGoals": 4.7,
      "shotConversionRate": 17.2,
      "touchesInBoxPer90": 4.2,
      "chancesCreated": 3,
      "dribblesCompletedPer90": 0.5,
      "keyPassesPer90": 0.12
    },
    "leagueBenchmarks": [
      {
        "metric": "Goals per 90",
        "player": 0.47,
        "avg": 0.22,
        "elite": 0.65
      },
      {
        "metric": "Shot Conversion %",
        "player": 17.2,
        "avg": 10.5,
        "elite": 18.0
      },
      {
        "metric": "Touches in Box p90",
        "player": 4.2,
        "avg": 2.5,
        "elite": 5.5
      },
      {
        "metric": "Expected Goals (xG)",
        "player": 4.7,
        "avg": 4.5,
        "elite": 14.0
      }
    ],
    "heatmap": [
      {
        "x": 50,
        "y": 84,
        "r": 38,
        "v": 0.9
      },
      {
        "x": 48,
        "y": 76,
        "r": 32,
        "v": 0.75
      },
      {
        "x": 52,
        "y": 80,
        "r": 32,
        "v": 0.8
      },
      {
        "x": 50,
        "y": 92,
        "r": 28,
        "v": 0.85
      }
    ],
    "strengths": [
      "Tactical awareness",
      "Pace"
    ],
    "weaknesses": [
      "Defending",
      "Defensive Tracking Back"
    ]
  },
  {
    "id": "eliezer-mayenda-dossou",
    "name": "Eliezer Mayenda Dossou",
    "age": 26,
    "position": "FW",
    "role": "Complete Winger / Striker",
    "club": "Sunderland",
    "league": "Premier League",
    "nation": "England",
    "value": 30600000,
    "rating": 75,
    "general": {
      "apps": 8,
      "mins": 751,
      "goals": 2,
      "assists": 0,
      "yellowCards": 0,
      "redCards": 0
    },
    "attributes": {
      "pace": 80,
      "dribbling": 64,
      "passing": 63,
      "defending": 27,
      "physicality": 62,
      "tactical": 73,
      "workrate": 70
    },
    "detailedStats": {
      "goalsPer90": 0.24,
      "shotsOnTargetPer90": 0.9,
      "expectedGoals": 2.1,
      "shotConversionRate": 12.4,
      "touchesInBoxPer90": 2.9,
      "chancesCreated": 6,
      "dribblesCompletedPer90": 0.6,
      "keyPassesPer90": 0.32
    },
    "leagueBenchmarks": [
      {
        "metric": "Goals per 90",
        "player": 0.24,
        "avg": 0.22,
        "elite": 0.65
      },
      {
        "metric": "Shot Conversion %",
        "player": 12.4,
        "avg": 10.5,
        "elite": 18.0
      },
      {
        "metric": "Touches in Box p90",
        "player": 2.9,
        "avg": 2.5,
        "elite": 5.5
      },
      {
        "metric": "Expected Goals (xG)",
        "player": 2.1,
        "avg": 4.5,
        "elite": 14.0
      }
    ],
    "heatmap": [
      {
        "x": 50,
        "y": 84,
        "r": 38,
        "v": 0.9
      },
      {
        "x": 48,
        "y": 76,
        "r": 32,
        "v": 0.75
      },
      {
        "x": 52,
        "y": 80,
        "r": 32,
        "v": 0.8
      },
      {
        "x": 50,
        "y": 92,
        "r": 28,
        "v": 0.85
      }
    ],
    "strengths": [
      "Tactical awareness",
      "Pace"
    ],
    "weaknesses": [
      "Defending",
      "Defensive Tracking Back"
    ]
  },
  {
    "id": "granit-xhaka",
    "name": "Granit Xhaka",
    "age": 28,
    "position": "MF",
    "role": "Attacking Playmaker",
    "club": "Sunderland",
    "league": "Premier League",
    "nation": "Spain",
    "value": 30600000,
    "rating": 87,
    "general": {
      "apps": 32,
      "mins": 2901,
      "goals": 1,
      "assists": 6,
      "yellowCards": 8,
      "redCards": 0
    },
    "attributes": {
      "pace": 65,
      "dribbling": 82,
      "passing": 97,
      "defending": 88,
      "physicality": 94,
      "tactical": 95,
      "workrate": 96
    },
    "detailedStats": {
      "goalsPer90": 0.03,
      "shotsOnTargetPer90": 0.5,
      "expectedGoals": 1.0,
      "shotConversionRate": 11.2,
      "touchesInBoxPer90": 0.8,
      "chancesCreated": 74,
      "dribblesCompletedPer90": 2.4,
      "keyPassesPer90": 0.92,
      "passingAccuracy": 91.9,
      "progressivePassesPer90": 8.0,
      "tacklesWonPer90": 3.1,
      "interceptionsPer90": 0.8,
      "ballRecoveriesPer90": 8.1
    },
    "leagueBenchmarks": [
      {
        "metric": "Key Passes per 90",
        "player": 0.92,
        "avg": 0.9,
        "elite": 2.2
      },
      {
        "metric": "Progressive Passes p90",
        "player": 8.0,
        "avg": 2.8,
        "elite": 6.2
      },
      {
        "metric": "Chances Created",
        "player": 74,
        "avg": 16,
        "elite": 55
      },
      {
        "metric": "Passing Accuracy %",
        "player": 91.9,
        "avg": 79.5,
        "elite": 87.0
      }
    ],
    "heatmap": [
      {
        "x": 50,
        "y": 64,
        "r": 42,
        "v": 0.9
      },
      {
        "x": 40,
        "y": 55,
        "r": 35,
        "v": 0.75
      },
      {
        "x": 60,
        "y": 55,
        "r": 35,
        "v": 0.75
      },
      {
        "x": 50,
        "y": 76,
        "r": 30,
        "v": 0.8
      }
    ],
    "strengths": [
      "Passing",
      "Workrate"
    ],
    "weaknesses": [
      "Dribbling",
      "Pace"
    ]
  },
  {
    "id": "robin-roefs",
    "name": "Robin Roefs",
    "age": 30,
    "position": "GK",
    "role": "Sweeper Keeper",
    "club": "Sunderland",
    "league": "Premier League",
    "nation": "France",
    "value": 28800000,
    "rating": 89,
    "general": {
      "apps": 35,
      "mins": 3150,
      "goals": 0,
      "assists": 0,
      "yellowCards": 4,
      "redCards": 0
    },
    "attributes": {
      "pace": 60,
      "dribbling": 57,
      "passing": 90,
      "defending": 93,
      "physicality": 94,
      "tactical": 88,
      "workrate": 96
    },
    "detailedStats": {
      "savePercentage": 81.0,
      "cleanSheets": 10,
      "goalsConceded": 46,
      "psxgDifference": 4.0,
      "passingAccuracy": 90.0,
      "sweeperActionsPer90": 1.3,
      "averageDistanceOfSweeperActions": 13.9
    },
    "leagueBenchmarks": [
      {
        "metric": "Save %",
        "player": 81.0,
        "avg": 69.5,
        "elite": 77.0
      },
      {
        "metric": "Clean Sheets",
        "player": 10,
        "avg": 4.5,
        "elite": 10.0
      },
      {
        "metric": "Sweeper Actions p90",
        "player": 1.3,
        "avg": 0.6,
        "elite": 1.2
      },
      {
        "metric": "Passing Accuracy %",
        "player": 90.0,
        "avg": 73.0,
        "elite": 82.0
      }
    ],
    "heatmap": [
      {
        "x": 50,
        "y": 6,
        "r": 35,
        "v": 0.98
      },
      {
        "x": 50,
        "y": 14,
        "r": 28,
        "v": 0.7
      },
      {
        "x": 45,
        "y": 8,
        "r": 22,
        "v": 0.55
      },
      {
        "x": 55,
        "y": 8,
        "r": 22,
        "v": 0.55
      }
    ],
    "strengths": [
      "Reflexes",
      "Workrate",
      "Physicality"
    ],
    "weaknesses": [
      "Dribbling",
      "Pace"
    ]
  },
  {
    "id": "omar-alderete",
    "name": "Omar Alderete",
    "age": 28,
    "position": "DF",
    "role": "Attacking Fullback",
    "club": "Sunderland",
    "league": "Premier League",
    "nation": "Spain",
    "value": 24600000,
    "rating": 87,
    "general": {
      "apps": 32,
      "mins": 2797,
      "goals": 1,
      "assists": 1,
      "yellowCards": 6,
      "redCards": 0
    },
    "attributes": {
      "pace": 76,
      "dribbling": 71,
      "passing": 69,
      "defending": 94,
      "physicality": 94,
      "tactical": 94,
      "workrate": 96
    },
    "detailedStats": {
      "goalsPer90": 0.03,
      "shotsOnTargetPer90": 0.5,
      "expectedGoals": 1.6,
      "shotConversionRate": 11.2,
      "touchesInBoxPer90": 1.4,
      "chancesCreated": 17,
      "dribblesCompletedPer90": 0.9,
      "keyPassesPer90": 0.22,
      "tacklesWonPer90": 3.5,
      "interceptionsPer90": 1.2,
      "clearancesPer90": 5.2,
      "aerialDuelWinPercentage": 80.0,
      "tackledDribblerRate": 61.7,
      "progressivePassesPer90": 2.2,
      "longPassesCompletedPer90": 1.5,
      "passingAccuracy": 82.8
    },
    "leagueBenchmarks": [
      {
        "metric": "Passing Accuracy %",
        "player": 82.8,
        "avg": 82.0,
        "elite": 89.0
      },
      {
        "metric": "Clearances per 90",
        "player": 5.2,
        "avg": 2.6,
        "elite": 4.0
      },
      {
        "metric": "Aerial Duel Win %",
        "player": 80.0,
        "avg": 54.5,
        "elite": 68.0
      },
      {
        "metric": "Tackles Won per 90",
        "player": 3.5,
        "avg": 1.1,
        "elite": 2.0
      }
    ],
    "heatmap": [
      {
        "x": 86,
        "y": 25,
        "r": 38,
        "v": 0.8
      },
      {
        "x": 86,
        "y": 45,
        "r": 40,
        "v": 0.85
      },
      {
        "x": 86,
        "y": 65,
        "r": 35,
        "v": 0.7
      },
      {
        "x": 86,
        "y": 12,
        "r": 30,
        "v": 0.6
      }
    ],
    "strengths": [
      "Defending",
      "Workrate",
      "Aerial Dominance"
    ],
    "weaknesses": [
      "Dribbling",
      "Passing"
    ]
  },
  {
    "id": "nordi-mukiele",
    "name": "Nordi Mukiele",
    "age": 24,
    "position": "DF",
    "role": "Attacking Fullback",
    "club": "Sunderland",
    "league": "Premier League",
    "nation": "Spain",
    "value": 27600000,
    "rating": 91,
    "general": {
      "apps": 32,
      "mins": 2784,
      "goals": 3,
      "assists": 5,
      "yellowCards": 5,
      "redCards": 0
    },
    "attributes": {
      "pace": 74,
      "dribbling": 78,
      "passing": 83,
      "defending": 94,
      "physicality": 94,
      "tactical": 95,
      "workrate": 96
    },
    "detailedStats": {
      "goalsPer90": 0.1,
      "shotsOnTargetPer90": 0.7,
      "expectedGoals": 1.6,
      "shotConversionRate": 13.6,
      "touchesInBoxPer90": 1.3,
      "chancesCreated": 44,
      "dribblesCompletedPer90": 1.6,
      "keyPassesPer90": 0.57,
      "tacklesWonPer90": 3.4,
      "interceptionsPer90": 1.2,
      "clearancesPer90": 5.2,
      "aerialDuelWinPercentage": 80.0,
      "tackledDribblerRate": 63.3,
      "progressivePassesPer90": 3.3,
      "longPassesCompletedPer90": 2.2,
      "passingAccuracy": 87.1
    },
    "leagueBenchmarks": [
      {
        "metric": "Passing Accuracy %",
        "player": 87.1,
        "avg": 82.0,
        "elite": 89.0
      },
      {
        "metric": "Clearances per 90",
        "player": 5.2,
        "avg": 2.6,
        "elite": 4.0
      },
      {
        "metric": "Aerial Duel Win %",
        "player": 80.0,
        "avg": 54.5,
        "elite": 68.0
      },
      {
        "metric": "Tackles Won per 90",
        "player": 3.4,
        "avg": 1.1,
        "elite": 2.0
      }
    ],
    "heatmap": [
      {
        "x": 14,
        "y": 25,
        "r": 38,
        "v": 0.8
      },
      {
        "x": 14,
        "y": 45,
        "r": 40,
        "v": 0.85
      },
      {
        "x": 14,
        "y": 65,
        "r": 35,
        "v": 0.7
      },
      {
        "x": 14,
        "y": 12,
        "r": 30,
        "v": 0.6
      }
    ],
    "strengths": [
      "Workrate",
      "Tactical awareness",
      "Aerial Dominance"
    ],
    "weaknesses": [
      "Dribbling",
      "Pace"
    ]
  },
  {
    "id": "lutsharel-geertruida",
    "name": "Lutsharel Geertruida",
    "age": 24,
    "position": "DF",
    "role": "Attacking Fullback",
    "club": "Sunderland",
    "league": "Premier League",
    "nation": "Spain",
    "value": 27000000,
    "rating": 77,
    "general": {
      "apps": 17,
      "mins": 1681,
      "goals": 0,
      "assists": 0,
      "yellowCards": 2,
      "redCards": 0
    },
    "attributes": {
      "pace": 69,
      "dribbling": 64,
      "passing": 69,
      "defending": 88,
      "physicality": 73,
      "tactical": 77,
      "workrate": 84
    },
    "detailedStats": {
      "goalsPer90": 0.0,
      "shotsOnTargetPer90": 0.5,
      "expectedGoals": 0.8,
      "shotConversionRate": 10.0,
      "touchesInBoxPer90": 0.8,
      "chancesCreated": 16,
      "dribblesCompletedPer90": 0.9,
      "keyPassesPer90": 0.36,
      "tacklesWonPer90": 1.9,
      "interceptionsPer90": 1.0,
      "clearancesPer90": 2.9,
      "aerialDuelWinPercentage": 68.7,
      "tackledDribblerRate": 55.1,
      "progressivePassesPer90": 2.2,
      "longPassesCompletedPer90": 1.5,
      "passingAccuracy": 82.7
    },
    "leagueBenchmarks": [
      {
        "metric": "Passing Accuracy %",
        "player": 82.7,
        "avg": 82.0,
        "elite": 89.0
      },
      {
        "metric": "Clearances per 90",
        "player": 2.9,
        "avg": 2.6,
        "elite": 4.0
      },
      {
        "metric": "Aerial Duel Win %",
        "player": 68.7,
        "avg": 54.5,
        "elite": 68.0
      },
      {
        "metric": "Tackles Won per 90",
        "player": 1.9,
        "avg": 1.1,
        "elite": 2.0
      }
    ],
    "heatmap": [
      {
        "x": 14,
        "y": 25,
        "r": 38,
        "v": 0.8
      },
      {
        "x": 14,
        "y": 45,
        "r": 40,
        "v": 0.85
      },
      {
        "x": 14,
        "y": 65,
        "r": 35,
        "v": 0.7
      },
      {
        "x": 14,
        "y": 12,
        "r": 30,
        "v": 0.6
      }
    ],
    "strengths": [
      "Defending",
      "Workrate",
      "Aerial Dominance"
    ],
    "weaknesses": [
      "Dribbling",
      "Passing"
    ]
  },
  {
    "id": "brian-brobbey",
    "name": "Brian Brobbey",
    "age": 30,
    "position": "FW",
    "role": "Complete Winger / Striker",
    "club": "Sunderland",
    "league": "Premier League",
    "nation": "France",
    "value": 31800000,
    "rating": 83,
    "general": {
      "apps": 22,
      "mins": 1920,
      "goals": 7,
      "assists": 2,
      "yellowCards": 6,
      "redCards": 0
    },
    "attributes": {
      "pace": 98,
      "dribbling": 85,
      "passing": 73,
      "defending": 33,
      "physicality": 77,
      "tactical": 91,
      "workrate": 87
    },
    "detailedStats": {
      "goalsPer90": 0.33,
      "shotsOnTargetPer90": 1.0,
      "expectedGoals": 6.0,
      "shotConversionRate": 18.4,
      "touchesInBoxPer90": 4.8,
      "chancesCreated": 25,
      "dribblesCompletedPer90": 1.1,
      "keyPassesPer90": 0.47
    },
    "leagueBenchmarks": [
      {
        "metric": "Goals per 90",
        "player": 0.33,
        "avg": 0.22,
        "elite": 0.65
      },
      {
        "metric": "Shot Conversion %",
        "player": 18.4,
        "avg": 10.5,
        "elite": 18.0
      },
      {
        "metric": "Touches in Box p90",
        "player": 4.8,
        "avg": 2.5,
        "elite": 5.5
      },
      {
        "metric": "Expected Goals (xG)",
        "player": 6.0,
        "avg": 4.5,
        "elite": 14.0
      }
    ],
    "heatmap": [
      {
        "x": 50,
        "y": 84,
        "r": 38,
        "v": 0.9
      },
      {
        "x": 48,
        "y": 76,
        "r": 32,
        "v": 0.75
      },
      {
        "x": 52,
        "y": 80,
        "r": 32,
        "v": 0.8
      },
      {
        "x": 50,
        "y": 92,
        "r": 28,
        "v": 0.85
      }
    ],
    "strengths": [
      "Tactical awareness",
      "Pace"
    ],
    "weaknesses": [
      "Defending",
      "Defensive Tracking Back"
    ]
  },
  {
    "id": "bertrand-traor\u00e9",
    "name": "Bertrand Traor\u00e9",
    "age": 20,
    "position": "MF",
    "role": "Box-to-Box Midfielder",
    "club": "Sunderland",
    "league": "Premier League",
    "nation": "England",
    "value": 33000000,
    "rating": 74,
    "general": {
      "apps": 9,
      "mins": 634,
      "goals": 1,
      "assists": 1,
      "yellowCards": 1,
      "redCards": 0
    },
    "attributes": {
      "pace": 66,
      "dribbling": 64,
      "passing": 67,
      "defending": 57,
      "physicality": 62,
      "tactical": 73,
      "workrate": 69
    },
    "detailedStats": {
      "goalsPer90": 0.14,
      "shotsOnTargetPer90": 0.7,
      "expectedGoals": 0.5,
      "shotConversionRate": 11.2,
      "touchesInBoxPer90": 0.9,
      "chancesCreated": 13,
      "dribblesCompletedPer90": 0.8,
      "keyPassesPer90": 0.77,
      "passingAccuracy": 83.8,
      "progressivePassesPer90": 3.1,
      "tacklesWonPer90": 1.2,
      "interceptionsPer90": 0.6,
      "ballRecoveriesPer90": 4.3
    },
    "leagueBenchmarks": [
      {
        "metric": "Key Passes per 90",
        "player": 0.77,
        "avg": 0.9,
        "elite": 2.2
      },
      {
        "metric": "Progressive Passes p90",
        "player": 3.1,
        "avg": 2.8,
        "elite": 6.2
      },
      {
        "metric": "Chances Created",
        "player": 13,
        "avg": 16,
        "elite": 55
      },
      {
        "metric": "Passing Accuracy %",
        "player": 83.8,
        "avg": 79.5,
        "elite": 87.0
      }
    ],
    "heatmap": [
      {
        "x": 50,
        "y": 42,
        "r: ": 45,
        "v": 0.9
      },
      {
        "x": 44,
        "y": 35,
        "r": 38,
        "v": 0.8
      },
      {
        "x": 56,
        "y": 35,
        "r": 38,
        "v": 0.8
      },
      {
        "x": 50,
        "y": 55,
        "r": 35,
        "v": 0.75
      }
    ],
    "strengths": [
      "Workrate",
      "Tactical awareness"
    ],
    "weaknesses": [
      "Defending",
      "Physicality"
    ]
  },
  {
    "id": "melker-ellborg",
    "name": "Melker Ellborg",
    "age": 22,
    "position": "GK",
    "role": "Sweeper Keeper",
    "club": "Sunderland",
    "league": "Premier League",
    "nation": "Brazil",
    "value": 24000000,
    "rating": 72,
    "general": {
      "apps": 3,
      "mins": 270,
      "goals": 0,
      "assists": 0,
      "yellowCards": 0,
      "redCards": 0
    },
    "attributes": {
      "pace": 60,
      "dribbling": 55,
      "passing": 58,
      "defending": 78,
      "physicality": 59,
      "tactical": 66,
      "workrate": 63
    },
    "detailedStats": {
      "savePercentage": 67.0,
      "cleanSheets": 1,
      "goalsConceded": 2,
      "psxgDifference": 0.4,
      "passingAccuracy": 73.7,
      "sweeperActionsPer90": 0.5,
      "averageDistanceOfSweeperActions": 12.1
    },
    "leagueBenchmarks": [
      {
        "metric": "Save %",
        "player": 67.0,
        "avg": 69.5,
        "elite": 77.0
      },
      {
        "metric": "Clean Sheets",
        "player": 1,
        "avg": 4.5,
        "elite": 10.0
      },
      {
        "metric": "Sweeper Actions p90",
        "player": 0.5,
        "avg": 0.6,
        "elite": 1.2
      },
      {
        "metric": "Passing Accuracy %",
        "player": 73.7,
        "avg": 73.0,
        "elite": 82.0
      }
    ],
    "heatmap": [
      {
        "x": 50,
        "y": 6,
        "r": 35,
        "v": 0.98
      },
      {
        "x": 50,
        "y": 14,
        "r": 28,
        "v": 0.7
      },
      {
        "x": 45,
        "y": 8,
        "r": 22,
        "v": 0.55
      },
      {
        "x": 55,
        "y": 8,
        "r": 22,
        "v": 0.55
      }
    ],
    "strengths": [
      "Defending",
      "Tactical awareness"
    ],
    "weaknesses": [
      "Dribbling",
      "Passing"
    ]
  },
  {
    "id": "nilson-angulo",
    "name": "Nilson Angulo",
    "age": 23,
    "position": "MF",
    "role": "Box-to-Box Midfielder",
    "club": "Sunderland",
    "league": "Premier League",
    "nation": "England",
    "value": 30000000,
    "rating": 71,
    "general": {
      "apps": 5,
      "mins": 401,
      "goals": 0,
      "assists": 0,
      "yellowCards": 1,
      "redCards": 0
    },
    "attributes": {
      "pace": 64,
      "dribbling": 60,
      "passing": 62,
      "defending": 53,
      "physicality": 58,
      "tactical": 69,
      "workrate": 65
    },
    "detailedStats": {
      "goalsPer90": 0.0,
      "shotsOnTargetPer90": 0.5,
      "expectedGoals": 0.8,
      "shotConversionRate": 10.0,
      "touchesInBoxPer90": 0.8,
      "chancesCreated": 5,
      "dribblesCompletedPer90": 0.5,
      "keyPassesPer90": 0.5,
      "passingAccuracy": 82.7,
      "progressivePassesPer90": 2.4,
      "tacklesWonPer90": 1.0,
      "interceptionsPer90": 0.5,
      "ballRecoveriesPer90": 3.8
    },
    "leagueBenchmarks": [
      {
        "metric": "Key Passes per 90",
        "player": 0.5,
        "avg": 0.9,
        "elite": 2.2
      },
      {
        "metric": "Progressive Passes p90",
        "player": 2.4,
        "avg": 2.8,
        "elite": 6.2
      },
      {
        "metric": "Chances Created",
        "player": 5,
        "avg": 16,
        "elite": 55
      },
      {
        "metric": "Passing Accuracy %",
        "player": 82.7,
        "avg": 79.5,
        "elite": 87.0
      }
    ],
    "heatmap": [
      {
        "x": 50,
        "y": 42,
        "r: ": 45,
        "v": 0.9
      },
      {
        "x": 44,
        "y": 35,
        "r": 38,
        "v": 0.8
      },
      {
        "x": 56,
        "y": 35,
        "r": 38,
        "v": 0.8
      },
      {
        "x": 50,
        "y": 55,
        "r": 35,
        "v": 0.75
      }
    ],
    "strengths": [
      "Workrate",
      "Tactical awareness"
    ],
    "weaknesses": [
      "Defending",
      "Physicality"
    ]
  },
  {
    "id": "guglielmo-vicario",
    "name": "Guglielmo Vicario",
    "age": 30,
    "position": "GK",
    "role": "Sweeper Keeper",
    "club": "Spurs",
    "league": "Premier League",
    "nation": "France",
    "value": 28200000,
    "rating": 82,
    "general": {
      "apps": 31,
      "mins": 2790,
      "goals": 0,
      "assists": 0,
      "yellowCards": 1,
      "redCards": 0
    },
    "attributes": {
      "pace": 60,
      "dribbling": 55,
      "passing": 90,
      "defending": 93,
      "physicality": 94,
      "tactical": 83,
      "workrate": 96
    },
    "detailedStats": {
      "savePercentage": 81.0,
      "cleanSheets": 7,
      "goalsConceded": 50,
      "psxgDifference": 2.8,
      "passingAccuracy": 90.0,
      "sweeperActionsPer90": 1.1,
      "averageDistanceOfSweeperActions": 13.4
    },
    "leagueBenchmarks": [
      {
        "metric": "Save %",
        "player": 81.0,
        "avg": 69.5,
        "elite": 77.0
      },
      {
        "metric": "Clean Sheets",
        "player": 7,
        "avg": 4.5,
        "elite": 10.0
      },
      {
        "metric": "Sweeper Actions p90",
        "player": 1.1,
        "avg": 0.6,
        "elite": 1.2
      },
      {
        "metric": "Passing Accuracy %",
        "player": 90.0,
        "avg": 73.0,
        "elite": 82.0
      }
    ],
    "heatmap": [
      {
        "x": 50,
        "y": 6,
        "r": 35,
        "v": 0.98
      },
      {
        "x": 50,
        "y": 14,
        "r": 28,
        "v": 0.7
      },
      {
        "x": 45,
        "y": 8,
        "r": 22,
        "v": 0.55
      },
      {
        "x": 55,
        "y": 8,
        "r": 22,
        "v": 0.55
      }
    ],
    "strengths": [
      "Reflexes",
      "Workrate",
      "Physicality"
    ],
    "weaknesses": [
      "Dribbling",
      "Pace"
    ]
  },
  {
    "id": "anton\u00edn-kinsk\u00fd",
    "name": "Anton\u00edn Kinsk\u00fd",
    "age": 32,
    "position": "GK",
    "role": "Sweeper Keeper",
    "club": "Spurs",
    "league": "Premier League",
    "nation": "England",
    "value": 23400000,
    "rating": 72,
    "general": {
      "apps": 7,
      "mins": 630,
      "goals": 0,
      "assists": 0,
      "yellowCards": 1,
      "redCards": 0
    },
    "attributes": {
      "pace": 60,
      "dribbling": 55,
      "passing": 60,
      "defending": 80,
      "physicality": 61,
      "tactical": 67,
      "workrate": 69
    },
    "detailedStats": {
      "savePercentage": 67.0,
      "cleanSheets": 2,
      "goalsConceded": 7,
      "psxgDifference": 0.8,
      "passingAccuracy": 75.1,
      "sweeperActionsPer90": 0.5,
      "averageDistanceOfSweeperActions": 12.2
    },
    "leagueBenchmarks": [
      {
        "metric": "Save %",
        "player": 67.0,
        "avg": 69.5,
        "elite": 77.0
      },
      {
        "metric": "Clean Sheets",
        "player": 2,
        "avg": 4.5,
        "elite": 10.0
      },
      {
        "metric": "Sweeper Actions p90",
        "player": 0.5,
        "avg": 0.6,
        "elite": 1.2
      },
      {
        "metric": "Passing Accuracy %",
        "player": 75.1,
        "avg": 73.0,
        "elite": 82.0
      }
    ],
    "heatmap": [
      {
        "x": 50,
        "y": 6,
        "r": 35,
        "v": 0.98
      },
      {
        "x": 50,
        "y": 14,
        "r": 28,
        "v": 0.7
      },
      {
        "x": 45,
        "y": 8,
        "r": 22,
        "v": 0.55
      },
      {
        "x": 55,
        "y": 8,
        "r": 22,
        "v": 0.55
      }
    ],
    "strengths": [
      "Defending",
      "Workrate"
    ],
    "weaknesses": [
      "Dribbling",
      "Passing"
    ]
  },
  {
    "id": "pedro-porro-sauceda",
    "name": "Pedro Porro Sauceda",
    "age": 33,
    "position": "DF",
    "role": "Attacking Fullback",
    "club": "Spurs",
    "league": "Premier League",
    "nation": "Spain",
    "value": 31200000,
    "rating": 86,
    "general": {
      "apps": 32,
      "mins": 2793,
      "goals": 1,
      "assists": 3,
      "yellowCards": 10,
      "redCards": 0
    },
    "attributes": {
      "pace": 73,
      "dribbling": 96,
      "passing": 97,
      "defending": 94,
      "physicality": 94,
      "tactical": 95,
      "workrate": 96
    },
    "detailedStats": {
      "goalsPer90": 0.03,
      "shotsOnTargetPer90": 0.5,
      "expectedGoals": 1.1,
      "shotConversionRate": 11.2,
      "touchesInBoxPer90": 1.2,
      "chancesCreated": 110,
      "dribblesCompletedPer90": 3.3,
      "keyPassesPer90": 1.42,
      "tacklesWonPer90": 3.3,
      "interceptionsPer90": 1.4,
      "clearancesPer90": 5.0,
      "aerialDuelWinPercentage": 80.0,
      "tackledDribblerRate": 67.8,
      "progressivePassesPer90": 5.9,
      "longPassesCompletedPer90": 3.9,
      "passingAccuracy": 94.0
    },
    "leagueBenchmarks": [
      {
        "metric": "Passing Accuracy %",
        "player": 94.0,
        "avg": 82.0,
        "elite": 89.0
      },
      {
        "metric": "Clearances per 90",
        "player": 5.0,
        "avg": 2.6,
        "elite": 4.0
      },
      {
        "metric": "Aerial Duel Win %",
        "player": 80.0,
        "avg": 54.5,
        "elite": 68.0
      },
      {
        "metric": "Tackles Won per 90",
        "player": 3.3,
        "avg": 1.1,
        "elite": 2.0
      }
    ],
    "heatmap": [
      {
        "x": 14,
        "y": 25,
        "r": 38,
        "v": 0.8
      },
      {
        "x": 14,
        "y": 45,
        "r": 40,
        "v": 0.85
      },
      {
        "x": 14,
        "y": 65,
        "r": 35,
        "v": 0.7
      },
      {
        "x": 14,
        "y": 12,
        "r": 30,
        "v": 0.6
      }
    ],
    "strengths": [
      "Dribbling",
      "Passing",
      "Aerial Dominance"
    ],
    "weaknesses": [
      "Physicality",
      "Pace"
    ]
  },
  {
    "id": "cristian-romero",
    "name": "Cristian Romero",
    "age": 34,
    "position": "DF",
    "role": "Attacking Fullback",
    "club": "Spurs",
    "league": "Premier League",
    "nation": "Spain",
    "value": 30000000,
    "rating": 83,
    "general": {
      "apps": 22,
      "mins": 1869,
      "goals": 4,
      "assists": 1,
      "yellowCards": 9,
      "redCards": 2
    },
    "attributes": {
      "pace": 73,
      "dribbling": 69,
      "passing": 68,
      "defending": 94,
      "physicality": 93,
      "tactical": 88,
      "workrate": 86
    },
    "detailedStats": {
      "goalsPer90": 0.19,
      "shotsOnTargetPer90": 0.8,
      "expectedGoals": 1.4,
      "shotConversionRate": 14.8,
      "touchesInBoxPer90": 1.2,
      "chancesCreated": 16,
      "dribblesCompletedPer90": 0.8,
      "keyPassesPer90": 0.32,
      "tacklesWonPer90": 2.9,
      "interceptionsPer90": 1.1,
      "clearancesPer90": 4.4,
      "aerialDuelWinPercentage": 80.0,
      "tackledDribblerRate": 59.3,
      "progressivePassesPer90": 2.2,
      "longPassesCompletedPer90": 1.4,
      "passingAccuracy": 82.7
    },
    "leagueBenchmarks": [
      {
        "metric": "Passing Accuracy %",
        "player": 82.7,
        "avg": 82.0,
        "elite": 89.0
      },
      {
        "metric": "Clearances per 90",
        "player": 4.4,
        "avg": 2.6,
        "elite": 4.0
      },
      {
        "metric": "Aerial Duel Win %",
        "player": 80.0,
        "avg": 54.5,
        "elite": 68.0
      },
      {
        "metric": "Tackles Won per 90",
        "player": 2.9,
        "avg": 1.1,
        "elite": 2.0
      }
    ],
    "heatmap": [
      {
        "x": 86,
        "y": 25,
        "r": 38,
        "v": 0.8
      },
      {
        "x": 86,
        "y": 45,
        "r": 40,
        "v": 0.85
      },
      {
        "x": 86,
        "y": 65,
        "r": 35,
        "v": 0.7
      },
      {
        "x": 86,
        "y": 12,
        "r": 30,
        "v": 0.6
      }
    ],
    "strengths": [
      "Defending",
      "Physicality",
      "Aerial Dominance"
    ],
    "weaknesses": [
      "Dribbling",
      "Passing"
    ]
  },
  {
    "id": "kevin-danso",
    "name": "Kevin Danso",
    "age": 20,
    "position": "DF",
    "role": "Central Defender",
    "club": "Spurs",
    "league": "Premier League",
    "nation": "England",
    "value": 25200000,
    "rating": 79,
    "general": {
      "apps": 17,
      "mins": 1489,
      "goals": 0,
      "assists": 0,
      "yellowCards": 8,
      "redCards": 0
    },
    "attributes": {
      "pace": 68,
      "dribbling": 60,
      "passing": 63,
      "defending": 94,
      "physicality": 82,
      "tactical": 78,
      "workrate": 81
    },
    "detailedStats": {
      "goalsPer90": 0.0,
      "shotsOnTargetPer90": 0.5,
      "expectedGoals": 0.6,
      "shotConversionRate": 10.0,
      "touchesInBoxPer90": 0.8,
      "chancesCreated": 6,
      "dribblesCompletedPer90": 0.6,
      "keyPassesPer90": 0.15,
      "tacklesWonPer90": 2.4,
      "interceptionsPer90": 1.0,
      "clearancesPer90": 3.5,
      "aerialDuelWinPercentage": 75.3,
      "tackledDribblerRate": 55.5,
      "progressivePassesPer90": 1.7,
      "longPassesCompletedPer90": 1.2,
      "passingAccuracy": 81.0
    },
    "leagueBenchmarks": [
      {
        "metric": "Passing Accuracy %",
        "player": 81.0,
        "avg": 82.0,
        "elite": 89.0
      },
      {
        "metric": "Clearances per 90",
        "player": 3.5,
        "avg": 2.6,
        "elite": 4.0
      },
      {
        "metric": "Aerial Duel Win %",
        "player": 75.3,
        "avg": 54.5,
        "elite": 68.0
      },
      {
        "metric": "Tackles Won per 90",
        "player": 2.4,
        "avg": 1.1,
        "elite": 2.0
      }
    ],
    "heatmap": [
      {
        "x": 50,
        "y": 20,
        "r": 45,
        "v": 0.9
      },
      {
        "x": 42,
        "y": 18,
        "r": 32,
        "v": 0.8
      },
      {
        "x": 58,
        "y": 18,
        "r": 32,
        "v": 0.8
      },
      {
        "x": 50,
        "y": 10,
        "r": 28,
        "v": 0.6
      }
    ],
    "strengths": [
      "Defending",
      "Physicality",
      "Aerial Dominance"
    ],
    "weaknesses": [
      "Dribbling",
      "Passing"
    ]
  },
  {
    "id": "radu-dr\u0103gu\u0219in",
    "name": "Radu Dr\u0103gu\u0219in",
    "age": 22,
    "position": "DF",
    "role": "Central Defender",
    "club": "Spurs",
    "league": "Premier League",
    "nation": "Spain",
    "value": 27000000,
    "rating": 72,
    "general": {
      "apps": 5,
      "mins": 515,
      "goals": 0,
      "assists": 0,
      "yellowCards": 0,
      "redCards": 0
    },
    "attributes": {
      "pace": 66,
      "dribbling": 56,
      "passing": 60,
      "defending": 79,
      "physicality": 63,
      "tactical": 69,
      "workrate": 67
    },
    "detailedStats": {
      "goalsPer90": 0.0,
      "shotsOnTargetPer90": 0.5,
      "expectedGoals": 0.3,
      "shotConversionRate": 10.0,
      "touchesInBoxPer90": 0.6,
      "chancesCreated": 0,
      "dribblesCompletedPer90": 0.4,
      "keyPassesPer90": 0.03,
      "tacklesWonPer90": 1.4,
      "interceptionsPer90": 0.9,
      "clearancesPer90": 2.2,
      "aerialDuelWinPercentage": 61.5,
      "tackledDribblerRate": 51.6,
      "progressivePassesPer90": 1.5,
      "longPassesCompletedPer90": 1.0,
      "passingAccuracy": 80.1
    },
    "leagueBenchmarks": [
      {
        "metric": "Passing Accuracy %",
        "player": 80.1,
        "avg": 82.0,
        "elite": 89.0
      },
      {
        "metric": "Clearances per 90",
        "player": 2.2,
        "avg": 2.6,
        "elite": 4.0
      },
      {
        "metric": "Aerial Duel Win %",
        "player": 61.5,
        "avg": 54.5,
        "elite": 68.0
      },
      {
        "metric": "Tackles Won per 90",
        "player": 1.4,
        "avg": 1.1,
        "elite": 2.0
      }
    ],
    "heatmap": [
      {
        "x": 50,
        "y": 20,
        "r": 45,
        "v": 0.9
      },
      {
        "x": 42,
        "y": 18,
        "r": 32,
        "v": 0.8
      },
      {
        "x": 58,
        "y": 18,
        "r": 32,
        "v": 0.8
      },
      {
        "x": 50,
        "y": 10,
        "r": 28,
        "v": 0.6
      }
    ],
    "strengths": [
      "Defending",
      "Tactical awareness"
    ],
    "weaknesses": [
      "Dribbling",
      "Passing"
    ]
  },
  {
    "id": "djed-spence",
    "name": "Djed Spence",
    "age": 23,
    "position": "DF",
    "role": "Attacking Fullback",
    "club": "Spurs",
    "league": "Premier League",
    "nation": "England",
    "value": 24600000,
    "rating": 81,
    "general": {
      "apps": 23,
      "mins": 2049,
      "goals": 0,
      "assists": 0,
      "yellowCards": 4,
      "redCards": 0
    },
    "attributes": {
      "pace": 73,
      "dribbling": 71,
      "passing": 73,
      "defending": 90,
      "physicality": 74,
      "tactical": 82,
      "workrate": 89
    },
    "detailedStats": {
      "goalsPer90": 0.0,
      "shotsOnTargetPer90": 0.5,
      "expectedGoals": 0.9,
      "shotConversionRate": 10.0,
      "touchesInBoxPer90": 1.2,
      "chancesCreated": 26,
      "dribblesCompletedPer90": 1.1,
      "keyPassesPer90": 0.46,
      "tacklesWonPer90": 2.0,
      "interceptionsPer90": 1.0,
      "clearancesPer90": 3.0,
      "aerialDuelWinPercentage": 69.5,
      "tackledDribblerRate": 57.0,
      "progressivePassesPer90": 2.5,
      "longPassesCompletedPer90": 1.7,
      "passingAccuracy": 84.2
    },
    "leagueBenchmarks": [
      {
        "metric": "Passing Accuracy %",
        "player": 84.2,
        "avg": 82.0,
        "elite": 89.0
      },
      {
        "metric": "Clearances per 90",
        "player": 3.0,
        "avg": 2.6,
        "elite": 4.0
      },
      {
        "metric": "Aerial Duel Win %",
        "player": 69.5,
        "avg": 54.5,
        "elite": 68.0
      },
      {
        "metric": "Tackles Won per 90",
        "player": 2.0,
        "avg": 1.1,
        "elite": 2.0
      }
    ],
    "heatmap": [
      {
        "x": 86,
        "y": 25,
        "r": 38,
        "v": 0.8
      },
      {
        "x": 86,
        "y": 45,
        "r": 40,
        "v": 0.85
      },
      {
        "x": 86,
        "y": 65,
        "r": 35,
        "v": 0.7
      },
      {
        "x": 86,
        "y": 12,
        "r": 30,
        "v": 0.6
      }
    ],
    "strengths": [
      "Defending",
      "Workrate",
      "Aerial Dominance"
    ],
    "weaknesses": [
      "Dribbling",
      "Passing"
    ]
  },
  {
    "id": "destiny-udogie",
    "name": "Destiny Udogie",
    "age": 24,
    "position": "DF",
    "role": "Attacking Fullback",
    "club": "Spurs",
    "league": "Premier League",
    "nation": "Brazil",
    "value": 25800000,
    "rating": 74,
    "general": {
      "apps": 14,
      "mins": 1335,
      "goals": 0,
      "assists": 1,
      "yellowCards": 4,
      "redCards": 0
    },
    "attributes": {
      "pace": 69,
      "dribbling": 66,
      "passing": 72,
      "defending": 84,
      "physicality": 68,
      "tactical": 77,
      "workrate": 79
    },
    "detailedStats": {
      "goalsPer90": 0.0,
      "shotsOnTargetPer90": 0.5,
      "expectedGoals": 0.2,
      "shotConversionRate": 10.0,
      "touchesInBoxPer90": 0.8,
      "chancesCreated": 23,
      "dribblesCompletedPer90": 1.0,
      "keyPassesPer90": 0.63,
      "tacklesWonPer90": 1.7,
      "interceptionsPer90": 1.0,
      "clearancesPer90": 2.5,
      "aerialDuelWinPercentage": 65.4,
      "tackledDribblerRate": 55.0,
      "progressivePassesPer90": 2.4,
      "longPassesCompletedPer90": 1.6,
      "passingAccuracy": 83.7
    },
    "leagueBenchmarks": [
      {
        "metric": "Passing Accuracy %",
        "player": 83.7,
        "avg": 82.0,
        "elite": 89.0
      },
      {
        "metric": "Clearances per 90",
        "player": 2.5,
        "avg": 2.6,
        "elite": 4.0
      },
      {
        "metric": "Aerial Duel Win %",
        "player": 65.4,
        "avg": 54.5,
        "elite": 68.0
      },
      {
        "metric": "Tackles Won per 90",
        "player": 1.7,
        "avg": 1.1,
        "elite": 2.0
      }
    ],
    "heatmap": [
      {
        "x": 14,
        "y": 25,
        "r": 38,
        "v": 0.8
      },
      {
        "x": 14,
        "y": 45,
        "r": 40,
        "v": 0.85
      },
      {
        "x": 14,
        "y": 65,
        "r": 35,
        "v": 0.7
      },
      {
        "x": 14,
        "y": 12,
        "r": 30,
        "v": 0.6
      }
    ],
    "strengths": [
      "Defending",
      "Workrate"
    ],
    "weaknesses": [
      "Dribbling",
      "Physicality"
    ]
  },
  {
    "id": "micky-van-de-ven",
    "name": "Micky van de Ven",
    "age": 25,
    "position": "DF",
    "role": "Attacking Fullback",
    "club": "Spurs",
    "league": "Premier League",
    "nation": "France",
    "value": 26400000,
    "rating": 86,
    "general": {
      "apps": 35,
      "mins": 3041,
      "goals": 4,
      "assists": 1,
      "yellowCards": 9,
      "redCards": 1
    },
    "attributes": {
      "pace": 73,
      "dribbling": 67,
      "passing": 66,
      "defending": 94,
      "physicality": 94,
      "tactical": 89,
      "workrate": 96
    },
    "detailedStats": {
      "goalsPer90": 0.12,
      "shotsOnTargetPer90": 0.7,
      "expectedGoals": 2.8,
      "shotConversionRate": 14.8,
      "touchesInBoxPer90": 1.2,
      "chancesCreated": 11,
      "dribblesCompletedPer90": 0.7,
      "keyPassesPer90": 0.14,
      "tacklesWonPer90": 3.3,
      "interceptionsPer90": 1.1,
      "clearancesPer90": 4.9,
      "aerialDuelWinPercentage": 80.0,
      "tackledDribblerRate": 60.0,
      "progressivePassesPer90": 2.0,
      "longPassesCompletedPer90": 1.3,
      "passingAccuracy": 81.9
    },
    "leagueBenchmarks": [
      {
        "metric": "Passing Accuracy %",
        "player": 81.9,
        "avg": 82.0,
        "elite": 89.0
      },
      {
        "metric": "Clearances per 90",
        "player": 4.9,
        "avg": 2.6,
        "elite": 4.0
      },
      {
        "metric": "Aerial Duel Win %",
        "player": 80.0,
        "avg": 54.5,
        "elite": 68.0
      },
      {
        "metric": "Tackles Won per 90",
        "player": 3.3,
        "avg": 1.1,
        "elite": 2.0
      }
    ],
    "heatmap": [
      {
        "x": 86,
        "y": 25,
        "r": 38,
        "v": 0.8
      },
      {
        "x": 86,
        "y": 45,
        "r": 40,
        "v": 0.85
      },
      {
        "x": 86,
        "y": 65,
        "r": 35,
        "v": 0.7
      },
      {
        "x": 86,
        "y": 12,
        "r": 30,
        "v": 0.6
      }
    ],
    "strengths": [
      "Defending",
      "Workrate",
      "Aerial Dominance"
    ],
    "weaknesses": [
      "Dribbling",
      "Passing"
    ]
  },
  {
    "id": "mohammed-kudus",
    "name": "Mohammed Kudus",
    "age": 32,
    "position": "MF",
    "role": "Attacking Playmaker",
    "club": "Spurs",
    "league": "Premier League",
    "nation": "England",
    "value": 38400000,
    "rating": 80,
    "general": {
      "apps": 19,
      "mins": 1535,
      "goals": 2,
      "assists": 6,
      "yellowCards": 3,
      "redCards": 0
    },
    "attributes": {
      "pace": 75,
      "dribbling": 83,
      "passing": 87,
      "defending": 72,
      "physicality": 77,
      "tactical": 91,
      "workrate": 81
    },
    "detailedStats": {
      "goalsPer90": 0.12,
      "shotsOnTargetPer90": 0.7,
      "expectedGoals": 1.9,
      "shotConversionRate": 12.4,
      "touchesInBoxPer90": 1.5,
      "chancesCreated": 51,
      "dribblesCompletedPer90": 1.8,
      "keyPassesPer90": 1.21,
      "passingAccuracy": 88.9,
      "progressivePassesPer90": 6.1,
      "tacklesWonPer90": 1.9,
      "interceptionsPer90": 0.8,
      "ballRecoveriesPer90": 5.7
    },
    "leagueBenchmarks": [
      {
        "metric": "Key Passes per 90",
        "player": 1.21,
        "avg": 0.9,
        "elite": 2.2
      },
      {
        "metric": "Progressive Passes p90",
        "player": 6.1,
        "avg": 2.8,
        "elite": 6.2
      },
      {
        "metric": "Chances Created",
        "player": 51,
        "avg": 16,
        "elite": 55
      },
      {
        "metric": "Passing Accuracy %",
        "player": 88.9,
        "avg": 79.5,
        "elite": 87.0
      }
    ],
    "heatmap": [
      {
        "x": 50,
        "y": 64,
        "r": 42,
        "v": 0.9
      },
      {
        "x": 40,
        "y": 55,
        "r": 35,
        "v": 0.75
      },
      {
        "x": 60,
        "y": 55,
        "r": 35,
        "v": 0.75
      },
      {
        "x": 50,
        "y": 76,
        "r": 30,
        "v": 0.8
      }
    ],
    "strengths": [
      "Passing",
      "Tactical awareness"
    ],
    "weaknesses": [
      "Defending",
      "Pace"
    ]
  },
  {
    "id": "mathys-tel",
    "name": "Mathys Tel",
    "age": 34,
    "position": "MF",
    "role": "Attacking Playmaker",
    "club": "Spurs",
    "league": "Premier League",
    "nation": "Spain",
    "value": 37200000,
    "rating": 81,
    "general": {
      "apps": 13,
      "mins": 1334,
      "goals": 4,
      "assists": 2,
      "yellowCards": 1,
      "redCards": 0
    },
    "attributes": {
      "pace": 75,
      "dribbling": 85,
      "passing": 90,
      "defending": 70,
      "physicality": 75,
      "tactical": 91,
      "workrate": 79
    },
    "detailedStats": {
      "goalsPer90": 0.27,
      "shotsOnTargetPer90": 0.9,
      "expectedGoals": 2.5,
      "shotConversionRate": 14.8,
      "touchesInBoxPer90": 1.5,
      "chancesCreated": 57,
      "dribblesCompletedPer90": 1.9,
      "keyPassesPer90": 1.54,
      "passingAccuracy": 89.6,
      "progressivePassesPer90": 6.6,
      "tacklesWonPer90": 1.8,
      "interceptionsPer90": 0.8,
      "ballRecoveriesPer90": 5.5
    },
    "leagueBenchmarks": [
      {
        "metric": "Key Passes per 90",
        "player": 1.54,
        "avg": 0.9,
        "elite": 2.2
      },
      {
        "metric": "Progressive Passes p90",
        "player": 6.6,
        "avg": 2.8,
        "elite": 6.2
      },
      {
        "metric": "Chances Created",
        "player": 57,
        "avg": 16,
        "elite": 55
      },
      {
        "metric": "Passing Accuracy %",
        "player": 89.6,
        "avg": 79.5,
        "elite": 87.0
      }
    ],
    "heatmap": [
      {
        "x": 50,
        "y": 64,
        "r": 42,
        "v": 0.9
      },
      {
        "x": 40,
        "y": 55,
        "r": 35,
        "v": 0.75
      },
      {
        "x": 60,
        "y": 55,
        "r": 35,
        "v": 0.75
      },
      {
        "x": 50,
        "y": 76,
        "r": 30,
        "v": 0.8
      }
    ],
    "strengths": [
      "Passing",
      "Tactical awareness"
    ],
    "weaknesses": [
      "Defending",
      "Physicality"
    ]
  },
  {
    "id": "rodrigo-bentancur",
    "name": "Rodrigo Bentancur",
    "age": 20,
    "position": "MF",
    "role": "Box-to-Box Midfielder",
    "club": "Spurs",
    "league": "Premier League",
    "nation": "England",
    "value": 31200000,
    "rating": 82,
    "general": {
      "apps": 23,
      "mins": 1880,
      "goals": 1,
      "assists": 1,
      "yellowCards": 7,
      "redCards": 0
    },
    "attributes": {
      "pace": 66,
      "dribbling": 67,
      "passing": 73,
      "defending": 73,
      "physicality": 78,
      "tactical": 81,
      "workrate": 86
    },
    "detailedStats": {
      "goalsPer90": 0.05,
      "shotsOnTargetPer90": 0.6,
      "expectedGoals": 0.7,
      "shotConversionRate": 11.2,
      "touchesInBoxPer90": 0.9,
      "chancesCreated": 24,
      "dribblesCompletedPer90": 1.1,
      "keyPassesPer90": 0.47,
      "passingAccuracy": 85.3,
      "progressivePassesPer90": 4.0,
      "tacklesWonPer90": 2.0,
      "interceptionsPer90": 0.7,
      "ballRecoveriesPer90": 5.8
    },
    "leagueBenchmarks": [
      {
        "metric": "Key Passes per 90",
        "player": 0.47,
        "avg": 0.9,
        "elite": 2.2
      },
      {
        "metric": "Progressive Passes p90",
        "player": 4.0,
        "avg": 2.8,
        "elite": 6.2
      },
      {
        "metric": "Chances Created",
        "player": 24,
        "avg": 16,
        "elite": 55
      },
      {
        "metric": "Passing Accuracy %",
        "player": 85.3,
        "avg": 79.5,
        "elite": 87.0
      }
    ],
    "heatmap": [
      {
        "x": 50,
        "y": 42,
        "r: ": 45,
        "v": 0.9
      },
      {
        "x": 44,
        "y": 35,
        "r": 38,
        "v": 0.8
      },
      {
        "x": 56,
        "y": 35,
        "r": 38,
        "v": 0.8
      },
      {
        "x": 50,
        "y": 55,
        "r": 35,
        "v": 0.75
      }
    ],
    "strengths": [
      "Workrate",
      "Tactical awareness"
    ],
    "weaknesses": [
      "Dribbling",
      "Pace"
    ]
  },
  {
    "id": "lucas-bergvall",
    "name": "Lucas Bergvall",
    "age": 21,
    "position": "MF",
    "role": "Box-to-Box Midfielder",
    "club": "Spurs",
    "league": "Premier League",
    "nation": "Spain",
    "value": 31200000,
    "rating": 77,
    "general": {
      "apps": 11,
      "mins": 955,
      "goals": 1,
      "assists": 3,
      "yellowCards": 2,
      "redCards": 0
    },
    "attributes": {
      "pace": 67,
      "dribbling": 65,
      "passing": 67,
      "defending": 60,
      "physicality": 65,
      "tactical": 75,
      "workrate": 73
    },
    "detailedStats": {
      "goalsPer90": 0.09,
      "shotsOnTargetPer90": 0.6,
      "expectedGoals": 1.2,
      "shotConversionRate": 11.2,
      "touchesInBoxPer90": 1.0,
      "chancesCreated": 13,
      "dribblesCompletedPer90": 0.8,
      "keyPassesPer90": 0.5,
      "passingAccuracy": 83.8,
      "progressivePassesPer90": 3.1,
      "tacklesWonPer90": 1.3,
      "interceptionsPer90": 0.6,
      "ballRecoveriesPer90": 4.6
    },
    "leagueBenchmarks": [
      {
        "metric": "Key Passes per 90",
        "player": 0.5,
        "avg": 0.9,
        "elite": 2.2
      },
      {
        "metric": "Progressive Passes p90",
        "player": 3.1,
        "avg": 2.8,
        "elite": 6.2
      },
      {
        "metric": "Chances Created",
        "player": 13,
        "avg": 16,
        "elite": 55
      },
      {
        "metric": "Passing Accuracy %",
        "player": 83.8,
        "avg": 79.5,
        "elite": 87.0
      }
    ],
    "heatmap": [
      {
        "x": 50,
        "y": 42,
        "r: ": 45,
        "v": 0.9
      },
      {
        "x": 44,
        "y": 35,
        "r": 38,
        "v": 0.8
      },
      {
        "x": 56,
        "y": 35,
        "r": 38,
        "v": 0.8
      },
      {
        "x": 50,
        "y": 55,
        "r": 35,
        "v": 0.75
      }
    ],
    "strengths": [
      "Workrate",
      "Tactical awareness"
    ],
    "weaknesses": [
      "Defending",
      "Physicality"
    ]
  },
  {
    "id": "yves-bissouma",
    "name": "Yves Bissouma",
    "age": 22,
    "position": "MF",
    "role": "Box-to-Box Midfielder",
    "club": "Spurs",
    "league": "Premier League",
    "nation": "Spain",
    "value": 31200000,
    "rating": 72,
    "general": {
      "apps": 7,
      "mins": 600,
      "goals": 0,
      "assists": 0,
      "yellowCards": 4,
      "redCards": 0
    },
    "attributes": {
      "pace": 61,
      "dribbling": 56,
      "passing": 61,
      "defending": 55,
      "physicality": 60,
      "tactical": 68,
      "workrate": 68
    },
    "detailedStats": {
      "goalsPer90": 0.0,
      "shotsOnTargetPer90": 0.5,
      "expectedGoals": 0.4,
      "shotConversionRate": 10.0,
      "touchesInBoxPer90": 0.6,
      "chancesCreated": 3,
      "dribblesCompletedPer90": 0.5,
      "keyPassesPer90": 0.19,
      "passingAccuracy": 82.4,
      "progressivePassesPer90": 2.3,
      "tacklesWonPer90": 1.1,
      "interceptionsPer90": 0.5,
      "ballRecoveriesPer90": 4.1
    },
    "leagueBenchmarks": [
      {
        "metric": "Key Passes per 90",
        "player": 0.19,
        "avg": 0.9,
        "elite": 2.2
      },
      {
        "metric": "Progressive Passes p90",
        "player": 2.3,
        "avg": 2.8,
        "elite": 6.2
      },
      {
        "metric": "Chances Created",
        "player": 3,
        "avg": 16,
        "elite": 55
      },
      {
        "metric": "Passing Accuracy %",
        "player": 82.4,
        "avg": 79.5,
        "elite": 87.0
      }
    ],
    "heatmap": [
      {
        "x": 50,
        "y": 42,
        "r: ": 45,
        "v": 0.9
      },
      {
        "x": 44,
        "y": 35,
        "r": 38,
        "v": 0.8
      },
      {
        "x": 56,
        "y": 35,
        "r": 38,
        "v": 0.8
      },
      {
        "x": 50,
        "y": 55,
        "r": 35,
        "v": 0.75
      }
    ],
    "strengths": [
      "Workrate",
      "Tactical awareness"
    ],
    "weaknesses": [
      "Dribbling",
      "Defending"
    ]
  },
  {
    "id": "wilson-odobert",
    "name": "Wilson Odobert",
    "age": 23,
    "position": "MF",
    "role": "Box-to-Box Midfielder",
    "club": "Spurs",
    "league": "Premier League",
    "nation": "England",
    "value": 31800000,
    "rating": 76,
    "general": {
      "apps": 10,
      "mins": 972,
      "goals": 0,
      "assists": 2,
      "yellowCards": 0,
      "redCards": 0
    },
    "attributes": {
      "pace": 71,
      "dribbling": 75,
      "passing": 78,
      "defending": 60,
      "physicality": 65,
      "tactical": 81,
      "workrate": 73
    },
    "detailedStats": {
      "goalsPer90": 0.0,
      "shotsOnTargetPer90": 0.5,
      "expectedGoals": 1.9,
      "shotConversionRate": 10.0,
      "touchesInBoxPer90": 1.3,
      "chancesCreated": 35,
      "dribblesCompletedPer90": 1.3,
      "keyPassesPer90": 1.32,
      "passingAccuracy": 86.7,
      "progressivePassesPer90": 4.8,
      "tacklesWonPer90": 1.3,
      "interceptionsPer90": 0.7,
      "ballRecoveriesPer90": 4.6
    },
    "leagueBenchmarks": [
      {
        "metric": "Key Passes per 90",
        "player": 1.32,
        "avg": 0.9,
        "elite": 2.2
      },
      {
        "metric": "Progressive Passes p90",
        "player": 4.8,
        "avg": 2.8,
        "elite": 6.2
      },
      {
        "metric": "Chances Created",
        "player": 35,
        "avg": 16,
        "elite": 55
      },
      {
        "metric": "Passing Accuracy %",
        "player": 86.7,
        "avg": 79.5,
        "elite": 87.0
      }
    ],
    "heatmap": [
      {
        "x": 50,
        "y": 42,
        "r: ": 45,
        "v": 0.9
      },
      {
        "x": 44,
        "y": 35,
        "r": 38,
        "v": 0.8
      },
      {
        "x": 56,
        "y": 35,
        "r": 38,
        "v": 0.8
      },
      {
        "x": 50,
        "y": 55,
        "r": 35,
        "v": 0.75
      }
    ],
    "strengths": [
      "Passing",
      "Tactical awareness"
    ],
    "weaknesses": [
      "Defending",
      "Physicality"
    ]
  },
  {
    "id": "archie-gray",
    "name": "Archie Gray",
    "age": 26,
    "position": "MF",
    "role": "Box-to-Box Midfielder",
    "club": "Spurs",
    "league": "Premier League",
    "nation": "England",
    "value": 28800000,
    "rating": 78,
    "general": {
      "apps": 18,
      "mins": 1471,
      "goals": 2,
      "assists": 2,
      "yellowCards": 5,
      "redCards": 0
    },
    "attributes": {
      "pace": 67,
      "dribbling": 66,
      "passing": 69,
      "defending": 67,
      "physicality": 72,
      "tactical": 78,
      "workrate": 81
    },
    "detailedStats": {
      "goalsPer90": 0.12,
      "shotsOnTargetPer90": 0.7,
      "expectedGoals": 1.5,
      "shotConversionRate": 12.4,
      "touchesInBoxPer90": 1.0,
      "chancesCreated": 17,
      "dribblesCompletedPer90": 0.9,
      "keyPassesPer90": 0.42,
      "passingAccuracy": 84.3,
      "progressivePassesPer90": 3.4,
      "tacklesWonPer90": 1.7,
      "interceptionsPer90": 0.6,
      "ballRecoveriesPer90": 5.2
    },
    "leagueBenchmarks": [
      {
        "metric": "Key Passes per 90",
        "player": 0.42,
        "avg": 0.9,
        "elite": 2.2
      },
      {
        "metric": "Progressive Passes p90",
        "player": 3.4,
        "avg": 2.8,
        "elite": 6.2
      },
      {
        "metric": "Chances Created",
        "player": 17,
        "avg": 16,
        "elite": 55
      },
      {
        "metric": "Passing Accuracy %",
        "player": 84.3,
        "avg": 79.5,
        "elite": 87.0
      }
    ],
    "heatmap": [
      {
        "x": 50,
        "y": 42,
        "r: ": 45,
        "v": 0.9
      },
      {
        "x": 44,
        "y": 35,
        "r": 38,
        "v": 0.8
      },
      {
        "x": 56,
        "y": 35,
        "r": 38,
        "v": 0.8
      },
      {
        "x": 50,
        "y": 55,
        "r": 35,
        "v": 0.75
      }
    ],
    "strengths": [
      "Workrate",
      "Tactical awareness"
    ],
    "weaknesses": [
      "Dribbling",
      "Defending"
    ]
  },
  {
    "id": "pape-matar-sarr",
    "name": "Pape Matar Sarr",
    "age": 28,
    "position": "MF",
    "role": "Box-to-Box Midfielder",
    "club": "Spurs",
    "league": "Premier League",
    "nation": "Spain",
    "value": 27000000,
    "rating": 80,
    "general": {
      "apps": 13,
      "mins": 1388,
      "goals": 2,
      "assists": 4,
      "yellowCards": 3,
      "redCards": 0
    },
    "attributes": {
      "pace": 67,
      "dribbling": 68,
      "passing": 72,
      "defending": 72,
      "physicality": 77,
      "tactical": 82,
      "workrate": 79
    },
    "detailedStats": {
      "goalsPer90": 0.13,
      "shotsOnTargetPer90": 0.7,
      "expectedGoals": 1.6,
      "shotConversionRate": 12.4,
      "touchesInBoxPer90": 1.0,
      "chancesCreated": 23,
      "dribblesCompletedPer90": 1.0,
      "keyPassesPer90": 0.61,
      "passingAccuracy": 85.1,
      "progressivePassesPer90": 3.9,
      "tacklesWonPer90": 1.9,
      "interceptionsPer90": 0.7,
      "ballRecoveriesPer90": 5.7
    },
    "leagueBenchmarks": [
      {
        "metric": "Key Passes per 90",
        "player": 0.61,
        "avg": 0.9,
        "elite": 2.2
      },
      {
        "metric": "Progressive Passes p90",
        "player": 3.9,
        "avg": 2.8,
        "elite": 6.2
      },
      {
        "metric": "Chances Created",
        "player": 23,
        "avg": 16,
        "elite": 55
      },
      {
        "metric": "Passing Accuracy %",
        "player": 85.1,
        "avg": 79.5,
        "elite": 87.0
      }
    ],
    "heatmap": [
      {
        "x": 50,
        "y": 42,
        "r: ": 45,
        "v": 0.9
      },
      {
        "x": 44,
        "y": 35,
        "r": 38,
        "v": 0.8
      },
      {
        "x": 56,
        "y": 35,
        "r": 38,
        "v": 0.8
      },
      {
        "x": 50,
        "y": 55,
        "r": 35,
        "v": 0.75
      }
    ],
    "strengths": [
      "Workrate",
      "Tactical awareness"
    ],
    "weaknesses": [
      "Dribbling",
      "Pace"
    ]
  },
  {
    "id": "dominic-solanke-mitchell",
    "name": "Dominic Solanke-Mitchell",
    "age": 31,
    "position": "FW",
    "role": "Complete Winger / Striker",
    "club": "Spurs",
    "league": "Premier League",
    "nation": "Spain",
    "value": 42600000,
    "rating": 75,
    "general": {
      "apps": 11,
      "mins": 997,
      "goals": 3,
      "assists": 0,
      "yellowCards": 1,
      "redCards": 0
    },
    "attributes": {
      "pace": 88,
      "dribbling": 71,
      "passing": 65,
      "defending": 30,
      "physicality": 68,
      "tactical": 80,
      "workrate": 74
    },
    "detailedStats": {
      "goalsPer90": 0.27,
      "shotsOnTargetPer90": 0.9,
      "expectedGoals": 3.0,
      "shotConversionRate": 13.6,
      "touchesInBoxPer90": 3.7,
      "chancesCreated": 10,
      "dribblesCompletedPer90": 0.7,
      "keyPassesPer90": 0.38
    },
    "leagueBenchmarks": [
      {
        "metric": "Goals per 90",
        "player": 0.27,
        "avg": 0.22,
        "elite": 0.65
      },
      {
        "metric": "Shot Conversion %",
        "player": 13.6,
        "avg": 10.5,
        "elite": 18.0
      },
      {
        "metric": "Touches in Box p90",
        "player": 3.7,
        "avg": 2.5,
        "elite": 5.5
      },
      {
        "metric": "Expected Goals (xG)",
        "player": 3.0,
        "avg": 4.5,
        "elite": 14.0
      }
    ],
    "heatmap": [
      {
        "x": 50,
        "y": 84,
        "r": 38,
        "v": 0.9
      },
      {
        "x": 48,
        "y": 76,
        "r": 32,
        "v": 0.75
      },
      {
        "x": 52,
        "y": 80,
        "r": 32,
        "v": 0.8
      },
      {
        "x": 50,
        "y": 92,
        "r": 28,
        "v": 0.85
      }
    ],
    "strengths": [
      "Tactical awareness",
      "Pace"
    ],
    "weaknesses": [
      "Defending",
      "Defensive Tracking Back"
    ]
  },
  {
    "id": "richarlison-de-andrade",
    "name": "Richarlison de Andrade",
    "age": 32,
    "position": "FW",
    "role": "Complete Winger / Striker",
    "club": "Spurs",
    "league": "Premier League",
    "nation": "England",
    "value": 39000000,
    "rating": 87,
    "general": {
      "apps": 20,
      "mins": 1954,
      "goals": 11,
      "assists": 4,
      "yellowCards": 5,
      "redCards": 0
    },
    "attributes": {
      "pace": 98,
      "dribbling": 96,
      "passing": 75,
      "defending": 40,
      "physicality": 94,
      "tactical": 95,
      "workrate": 87
    },
    "detailedStats": {
      "goalsPer90": 0.51,
      "shotsOnTargetPer90": 1.3,
      "expectedGoals": 8.6,
      "shotConversionRate": 23.2,
      "touchesInBoxPer90": 6.1,
      "chancesCreated": 29,
      "dribblesCompletedPer90": 1.2,
      "keyPassesPer90": 0.55
    },
    "leagueBenchmarks": [
      {
        "metric": "Goals per 90",
        "player": 0.51,
        "avg": 0.22,
        "elite": 0.65
      },
      {
        "metric": "Shot Conversion %",
        "player": 23.2,
        "avg": 10.5,
        "elite": 18.0
      },
      {
        "metric": "Touches in Box p90",
        "player": 6.1,
        "avg": 2.5,
        "elite": 5.5
      },
      {
        "metric": "Expected Goals (xG)",
        "player": 8.6,
        "avg": 4.5,
        "elite": 14.0
      }
    ],
    "heatmap": [
      {
        "x": 50,
        "y": 84,
        "r": 38,
        "v": 0.9
      },
      {
        "x": 48,
        "y": 76,
        "r": 32,
        "v": 0.75
      },
      {
        "x": 52,
        "y": 80,
        "r": 32,
        "v": 0.8
      },
      {
        "x": 50,
        "y": 92,
        "r": 28,
        "v": 0.85
      }
    ],
    "strengths": [
      "Dribbling",
      "Clinical Finishing",
      "Pace"
    ],
    "weaknesses": [
      "Defending",
      "Defensive Tracking Back"
    ]
  },
  {
    "id": "jo\u00e3o-maria-lobo-alves-palhares-costa-palhinha-gon\u00e7alves",
    "name": "Jo\u00e3o Maria Lobo Alves Palhares Costa Palhinha Gon\u00e7alves",
    "age": 33,
    "position": "MF",
    "role": "Attacking Playmaker",
    "club": "Spurs",
    "league": "Premier League",
    "nation": "Spain",
    "value": 33000000,
    "rating": 88,
    "general": {
      "apps": 23,
      "mins": 2192,
      "goals": 5,
      "assists": 3,
      "yellowCards": 8,
      "redCards": 0
    },
    "attributes": {
      "pace": 74,
      "dribbling": 72,
      "passing": 69,
      "defending": 88,
      "physicality": 94,
      "tactical": 92,
      "workrate": 91
    },
    "detailedStats": {
      "goalsPer90": 0.21,
      "shotsOnTargetPer90": 0.8,
      "expectedGoals": 2.7,
      "shotConversionRate": 16.0,
      "touchesInBoxPer90": 1.5,
      "chancesCreated": 18,
      "dribblesCompletedPer90": 0.9,
      "keyPassesPer90": 0.3,
      "passingAccuracy": 84.5,
      "progressivePassesPer90": 3.5,
      "tacklesWonPer90": 2.9,
      "interceptionsPer90": 0.8,
      "ballRecoveriesPer90": 7.8
    },
    "leagueBenchmarks": [
      {
        "metric": "Key Passes per 90",
        "player": 0.3,
        "avg": 0.9,
        "elite": 2.2
      },
      {
        "metric": "Progressive Passes p90",
        "player": 3.5,
        "avg": 2.8,
        "elite": 6.2
      },
      {
        "metric": "Chances Created",
        "player": 18,
        "avg": 16,
        "elite": 55
      },
      {
        "metric": "Passing Accuracy %",
        "player": 84.5,
        "avg": 79.5,
        "elite": 87.0
      }
    ],
    "heatmap": [
      {
        "x": 50,
        "y": 64,
        "r": 42,
        "v": 0.9
      },
      {
        "x": 40,
        "y": 55,
        "r": 35,
        "v": 0.75
      },
      {
        "x": 60,
        "y": 55,
        "r": 35,
        "v": 0.75
      },
      {
        "x": 50,
        "y": 76,
        "r": 30,
        "v": 0.8
      }
    ],
    "strengths": [
      "Tactical awareness",
      "Physicality"
    ],
    "weaknesses": [
      "Dribbling",
      "Passing"
    ]
  },
  {
    "id": "xavi-simons",
    "name": "Xavi Simons",
    "age": 32,
    "position": "MF",
    "role": "Attacking Playmaker",
    "club": "Spurs",
    "league": "Premier League",
    "nation": "England",
    "value": 37800000,
    "rating": 81,
    "general": {
      "apps": 19,
      "mins": 1747,
      "goals": 2,
      "assists": 5,
      "yellowCards": 5,
      "redCards": 1
    },
    "attributes": {
      "pace": 72,
      "dribbling": 86,
      "passing": 95,
      "defending": 73,
      "physicality": 78,
      "tactical": 93,
      "workrate": 84
    },
    "detailedStats": {
      "goalsPer90": 0.1,
      "shotsOnTargetPer90": 0.7,
      "expectedGoals": 3.1,
      "shotConversionRate": 12.4,
      "touchesInBoxPer90": 1.4,
      "chancesCreated": 66,
      "dribblesCompletedPer90": 2.2,
      "keyPassesPer90": 1.37,
      "passingAccuracy": 90.9,
      "progressivePassesPer90": 7.3,
      "tacklesWonPer90": 2.0,
      "interceptionsPer90": 0.8,
      "ballRecoveriesPer90": 5.8
    },
    "leagueBenchmarks": [
      {
        "metric": "Key Passes per 90",
        "player": 1.37,
        "avg": 0.9,
        "elite": 2.2
      },
      {
        "metric": "Progressive Passes p90",
        "player": 7.3,
        "avg": 2.8,
        "elite": 6.2
      },
      {
        "metric": "Chances Created",
        "player": 66,
        "avg": 16,
        "elite": 55
      },
      {
        "metric": "Passing Accuracy %",
        "player": 90.9,
        "avg": 79.5,
        "elite": 87.0
      }
    ],
    "heatmap": [
      {
        "x": 50,
        "y": 64,
        "r": 42,
        "v": 0.9
      },
      {
        "x": 40,
        "y": 55,
        "r": 35,
        "v": 0.75
      },
      {
        "x": 60,
        "y": 55,
        "r": 35,
        "v": 0.75
      },
      {
        "x": 50,
        "y": 76,
        "r": 30,
        "v": 0.8
      }
    ],
    "strengths": [
      "Passing",
      "Tactical awareness"
    ],
    "weaknesses": [
      "Defending",
      "Pace"
    ]
  },
  {
    "id": "randal-kolo-muani",
    "name": "Randal Kolo Muani",
    "age": 26,
    "position": "FW",
    "role": "Inverted Winger",
    "club": "Spurs",
    "league": "Premier League",
    "nation": "England",
    "value": 41400000,
    "rating": 77,
    "general": {
      "apps": 21,
      "mins": 1655,
      "goals": 1,
      "assists": 1,
      "yellowCards": 3,
      "redCards": 0
    },
    "attributes": {
      "pace": 85,
      "dribbling": 77,
      "passing": 77,
      "defending": 29,
      "physicality": 66,
      "tactical": 82,
      "workrate": 83
    },
    "detailedStats": {
      "goalsPer90": 0.05,
      "shotsOnTargetPer90": 0.6,
      "expectedGoals": 2.1,
      "shotConversionRate": 11.2,
      "touchesInBoxPer90": 3.4,
      "chancesCreated": 33,
      "dribblesCompletedPer90": 1.3,
      "keyPassesPer90": 0.73
    },
    "leagueBenchmarks": [
      {
        "metric": "Goals per 90",
        "player": 0.05,
        "avg": 0.22,
        "elite": 0.65
      },
      {
        "metric": "Shot Conversion %",
        "player": 11.2,
        "avg": 10.5,
        "elite": 18.0
      },
      {
        "metric": "Touches in Box p90",
        "player": 3.4,
        "avg": 2.5,
        "elite": 5.5
      },
      {
        "metric": "Expected Goals (xG)",
        "player": 2.1,
        "avg": 4.5,
        "elite": 14.0
      }
    ],
    "heatmap": [
      {
        "x": 22,
        "y": 72,
        "r": 45,
        "v": 0.9
      },
      {
        "x": 22,
        "y": 58,
        "r": 38,
        "v": 0.75
      },
      {
        "x": 28,
        "y": 82,
        "r": 35,
        "v": 0.8
      },
      {
        "x": 50,
        "y": 84,
        "r": 30,
        "v": 0.65
      }
    ],
    "strengths": [
      "Workrate",
      "Pace"
    ],
    "weaknesses": [
      "Defending",
      "Defensive Tracking Back"
    ]
  },
  {
    "id": "conor-gallagher",
    "name": "Conor Gallagher",
    "age": 21,
    "position": "MF",
    "role": "Box-to-Box Midfielder",
    "club": "Spurs",
    "league": "Premier League",
    "nation": "Spain",
    "value": 30000000,
    "rating": 76,
    "general": {
      "apps": 14,
      "mins": 1183,
      "goals": 1,
      "assists": 1,
      "yellowCards": 2,
      "redCards": 0
    },
    "attributes": {
      "pace": 67,
      "dribbling": 69,
      "passing": 73,
      "defending": 62,
      "physicality": 67,
      "tactical": 78,
      "workrate": 76
    },
    "detailedStats": {
      "goalsPer90": 0.08,
      "shotsOnTargetPer90": 0.6,
      "expectedGoals": 1.2,
      "shotConversionRate": 11.2,
      "touchesInBoxPer90": 1.0,
      "chancesCreated": 25,
      "dribblesCompletedPer90": 1.1,
      "keyPassesPer90": 0.78,
      "passingAccuracy": 85.4,
      "progressivePassesPer90": 4.1,
      "tacklesWonPer90": 1.4,
      "interceptionsPer90": 0.6,
      "ballRecoveriesPer90": 4.8
    },
    "leagueBenchmarks": [
      {
        "metric": "Key Passes per 90",
        "player": 0.78,
        "avg": 0.9,
        "elite": 2.2
      },
      {
        "metric": "Progressive Passes p90",
        "player": 4.1,
        "avg": 2.8,
        "elite": 6.2
      },
      {
        "metric": "Chances Created",
        "player": 25,
        "avg": 16,
        "elite": 55
      },
      {
        "metric": "Passing Accuracy %",
        "player": 85.4,
        "avg": 79.5,
        "elite": 87.0
      }
    ],
    "heatmap": [
      {
        "x": 50,
        "y": 42,
        "r: ": 45,
        "v": 0.9
      },
      {
        "x": 44,
        "y": 35,
        "r": 38,
        "v": 0.8
      },
      {
        "x": 56,
        "y": 35,
        "r": 38,
        "v": 0.8
      },
      {
        "x": 50,
        "y": 55,
        "r": 35,
        "v": 0.75
      }
    ],
    "strengths": [
      "Workrate",
      "Tactical awareness"
    ],
    "weaknesses": [
      "Defending",
      "Physicality"
    ]
  },
  {
    "id": "adama-traor\u00e9-diarra",
    "name": "Adama Traor\u00e9 Diarra",
    "age": 31,
    "position": "MF",
    "role": "Box-to-Box Midfielder",
    "club": "West Ham",
    "league": "Premier League",
    "nation": "Spain",
    "value": 30600000,
    "rating": 73,
    "general": {
      "apps": 1,
      "mins": 376,
      "goals": 0,
      "assists": 0,
      "yellowCards": 1,
      "redCards": 0
    },
    "attributes": {
      "pace": 63,
      "dribbling": 60,
      "passing": 64,
      "defending": 52,
      "physicality": 57,
      "tactical": 69,
      "workrate": 65
    },
    "detailedStats": {
      "goalsPer90": 0.0,
      "shotsOnTargetPer90": 0.5,
      "expectedGoals": 0.7,
      "shotConversionRate": 10.0,
      "touchesInBoxPer90": 0.7,
      "chancesCreated": 9,
      "dribblesCompletedPer90": 0.6,
      "keyPassesPer90": 0.88,
      "passingAccuracy": 83.2,
      "progressivePassesPer90": 2.7,
      "tacklesWonPer90": 0.9,
      "interceptionsPer90": 0.5,
      "ballRecoveriesPer90": 3.7
    },
    "leagueBenchmarks": [
      {
        "metric": "Key Passes per 90",
        "player": 0.88,
        "avg": 0.9,
        "elite": 2.2
      },
      {
        "metric": "Progressive Passes p90",
        "player": 2.7,
        "avg": 2.8,
        "elite": 6.2
      },
      {
        "metric": "Chances Created",
        "player": 9,
        "avg": 16,
        "elite": 55
      },
      {
        "metric": "Passing Accuracy %",
        "player": 83.2,
        "avg": 79.5,
        "elite": 87.0
      }
    ],
    "heatmap": [
      {
        "x": 50,
        "y": 42,
        "r: ": 45,
        "v": 0.9
      },
      {
        "x": 44,
        "y": 35,
        "r": 38,
        "v": 0.8
      },
      {
        "x": 56,
        "y": 35,
        "r": 38,
        "v": 0.8
      },
      {
        "x": 50,
        "y": 55,
        "r": 35,
        "v": 0.75
      }
    ],
    "strengths": [
      "Workrate",
      "Tactical awareness"
    ],
    "weaknesses": [
      "Defending",
      "Physicality"
    ]
  },
  {
    "id": "alphonse-areola",
    "name": "Alphonse Areola",
    "age": 20,
    "position": "GK",
    "role": "Sweeper Keeper",
    "club": "West Ham",
    "league": "Premier League",
    "nation": "England",
    "value": 25200000,
    "rating": 77,
    "general": {
      "apps": 20,
      "mins": 1800,
      "goals": 0,
      "assists": 1,
      "yellowCards": 0,
      "redCards": 0
    },
    "attributes": {
      "pace": 60,
      "dribbling": 55,
      "passing": 83,
      "defending": 93,
      "physicality": 93,
      "tactical": 79,
      "workrate": 85
    },
    "detailedStats": {
      "savePercentage": 80.4,
      "cleanSheets": 0,
      "goalsConceded": 37,
      "psxgDifference": 0.0,
      "passingAccuracy": 90.0,
      "sweeperActionsPer90": 1.0,
      "averageDistanceOfSweeperActions": 13.2
    },
    "leagueBenchmarks": [
      {
        "metric": "Save %",
        "player": 80.4,
        "avg": 69.5,
        "elite": 77.0
      },
      {
        "metric": "Clean Sheets",
        "player": 0,
        "avg": 4.5,
        "elite": 10.0
      },
      {
        "metric": "Sweeper Actions p90",
        "player": 1.0,
        "avg": 0.6,
        "elite": 1.2
      },
      {
        "metric": "Passing Accuracy %",
        "player": 90.0,
        "avg": 73.0,
        "elite": 82.0
      }
    ],
    "heatmap": [
      {
        "x": 50,
        "y": 6,
        "r": 35,
        "v": 0.98
      },
      {
        "x": 50,
        "y": 14,
        "r": 28,
        "v": 0.7
      },
      {
        "x": 45,
        "y": 8,
        "r": 22,
        "v": 0.55
      },
      {
        "x": 55,
        "y": 8,
        "r": 22,
        "v": 0.55
      }
    ],
    "strengths": [
      "Defending",
      "Reflexes",
      "Physicality"
    ],
    "weaknesses": [
      "Dribbling",
      "Pace"
    ]
  },
  {
    "id": "el-hadji-malick-diouf",
    "name": "El Hadji Malick Diouf",
    "age": 23,
    "position": "DF",
    "role": "Attacking Fullback",
    "club": "West Ham",
    "league": "Premier League",
    "nation": "England",
    "value": 24600000,
    "rating": 84,
    "general": {
      "apps": 30,
      "mins": 2706,
      "goals": 0,
      "assists": 6,
      "yellowCards": 6,
      "redCards": 0
    },
    "attributes": {
      "pace": 70,
      "dribbling": 79,
      "passing": 92,
      "defending": 94,
      "physicality": 93,
      "tactical": 94,
      "workrate": 96
    },
    "detailedStats": {
      "goalsPer90": 0.0,
      "shotsOnTargetPer90": 0.5,
      "expectedGoals": 0.6,
      "shotConversionRate": 10.0,
      "touchesInBoxPer90": 0.9,
      "chancesCreated": 60,
      "dribblesCompletedPer90": 2.0,
      "keyPassesPer90": 0.8,
      "tacklesWonPer90": 2.9,
      "interceptionsPer90": 1.2,
      "clearancesPer90": 4.4,
      "aerialDuelWinPercentage": 80.0,
      "tackledDribblerRate": 62.0,
      "progressivePassesPer90": 3.9,
      "longPassesCompletedPer90": 2.6,
      "passingAccuracy": 89.6
    },
    "leagueBenchmarks": [
      {
        "metric": "Passing Accuracy %",
        "player": 89.6,
        "avg": 82.0,
        "elite": 89.0
      },
      {
        "metric": "Clearances per 90",
        "player": 4.4,
        "avg": 2.6,
        "elite": 4.0
      },
      {
        "metric": "Aerial Duel Win %",
        "player": 80.0,
        "avg": 54.5,
        "elite": 68.0
      },
      {
        "metric": "Tackles Won per 90",
        "player": 2.9,
        "avg": 1.1,
        "elite": 2.0
      }
    ],
    "heatmap": [
      {
        "x": 86,
        "y": 25,
        "r": 38,
        "v": 0.8
      },
      {
        "x": 86,
        "y": 45,
        "r": 40,
        "v": 0.85
      },
      {
        "x": 86,
        "y": 65,
        "r": 35,
        "v": 0.7
      },
      {
        "x": 86,
        "y": 12,
        "r": 30,
        "v": 0.6
      }
    ],
    "strengths": [
      "Defending",
      "Workrate",
      "Aerial Dominance"
    ],
    "weaknesses": [
      "Dribbling",
      "Pace"
    ]
  },
  {
    "id": "maximilian-kilman",
    "name": "Maximilian Kilman",
    "age": 25,
    "position": "DF",
    "role": "Central Defender",
    "club": "West Ham",
    "league": "Premier League",
    "nation": "France",
    "value": 24000000,
    "rating": 75,
    "general": {
      "apps": 17,
      "mins": 1559,
      "goals": 0,
      "assists": 0,
      "yellowCards": 4,
      "redCards": 0
    },
    "attributes": {
      "pace": 67,
      "dribbling": 59,
      "passing": 63,
      "defending": 94,
      "physicality": 81,
      "tactical": 77,
      "workrate": 82
    },
    "detailedStats": {
      "goalsPer90": 0.0,
      "shotsOnTargetPer90": 0.5,
      "expectedGoals": 0.6,
      "shotConversionRate": 10.0,
      "touchesInBoxPer90": 0.7,
      "chancesCreated": 6,
      "dribblesCompletedPer90": 0.6,
      "keyPassesPer90": 0.16,
      "tacklesWonPer90": 2.3,
      "interceptionsPer90": 1.0,
      "clearancesPer90": 3.5,
      "aerialDuelWinPercentage": 74.6,
      "tackledDribblerRate": 55.1,
      "progressivePassesPer90": 1.8,
      "longPassesCompletedPer90": 1.2,
      "passingAccuracy": 81.1
    },
    "leagueBenchmarks": [
      {
        "metric": "Passing Accuracy %",
        "player": 81.1,
        "avg": 82.0,
        "elite": 89.0
      },
      {
        "metric": "Clearances per 90",
        "player": 3.5,
        "avg": 2.6,
        "elite": 4.0
      },
      {
        "metric": "Aerial Duel Win %",
        "player": 74.6,
        "avg": 54.5,
        "elite": 68.0
      },
      {
        "metric": "Tackles Won per 90",
        "player": 2.3,
        "avg": 1.1,
        "elite": 2.0
      }
    ],
    "heatmap": [
      {
        "x": 50,
        "y": 20,
        "r": 45,
        "v": 0.9
      },
      {
        "x": 42,
        "y": 18,
        "r": 32,
        "v": 0.8
      },
      {
        "x": 58,
        "y": 18,
        "r": 32,
        "v": 0.8
      },
      {
        "x": 50,
        "y": 10,
        "r": 28,
        "v": 0.6
      }
    ],
    "strengths": [
      "Defending",
      "Workrate",
      "Aerial Dominance"
    ],
    "weaknesses": [
      "Dribbling",
      "Passing"
    ]
  },
  {
    "id": "konstantinos-mavropanos",
    "name": "Konstantinos Mavropanos",
    "age": 26,
    "position": "DF",
    "role": "Attacking Fullback",
    "club": "West Ham",
    "league": "Premier League",
    "nation": "England",
    "value": 27000000,
    "rating": 87,
    "general": {
      "apps": 27,
      "mins": 2532,
      "goals": 3,
      "assists": 0,
      "yellowCards": 2,
      "redCards": 0
    },
    "attributes": {
      "pace": 76,
      "dribbling": 69,
      "passing": 64,
      "defending": 94,
      "physicality": 94,
      "tactical": 93,
      "workrate": 96
    },
    "detailedStats": {
      "goalsPer90": 0.11,
      "shotsOnTargetPer90": 0.7,
      "expectedGoals": 2.5,
      "shotConversionRate": 13.6,
      "touchesInBoxPer90": 1.5,
      "chancesCreated": 8,
      "dribblesCompletedPer90": 0.6,
      "keyPassesPer90": 0.12,
      "tacklesWonPer90": 3.6,
      "interceptionsPer90": 1.2,
      "clearancesPer90": 5.4,
      "aerialDuelWinPercentage": 80.0,
      "tackledDribblerRate": 61.4,
      "progressivePassesPer90": 1.8,
      "longPassesCompletedPer90": 1.2,
      "passingAccuracy": 81.3
    },
    "leagueBenchmarks": [
      {
        "metric": "Passing Accuracy %",
        "player": 81.3,
        "avg": 82.0,
        "elite": 89.0
      },
      {
        "metric": "Clearances per 90",
        "player": 5.4,
        "avg": 2.6,
        "elite": 4.0
      },
      {
        "metric": "Aerial Duel Win %",
        "player": 80.0,
        "avg": 54.5,
        "elite": 68.0
      },
      {
        "metric": "Tackles Won per 90",
        "player": 3.6,
        "avg": 1.1,
        "elite": 2.0
      }
    ],
    "heatmap": [
      {
        "x": 14,
        "y": 25,
        "r": 38,
        "v": 0.8
      },
      {
        "x": 14,
        "y": 45,
        "r": 40,
        "v": 0.85
      },
      {
        "x": 14,
        "y": 65,
        "r": 35,
        "v": 0.7
      },
      {
        "x": 14,
        "y": 12,
        "r": 30,
        "v": 0.6
      }
    ],
    "strengths": [
      "Defending",
      "Workrate",
      "Aerial Dominance"
    ],
    "weaknesses": [
      "Dribbling",
      "Passing"
    ]
  },
  {
    "id": "nayef-aguerd",
    "name": "Nayef Aguerd",
    "age": 27,
    "position": "DF",
    "role": "Central Defender",
    "club": "West Ham",
    "league": "Premier League",
    "nation": "Spain",
    "value": 26400000,
    "rating": 70,
    "general": {
      "apps": 2,
      "mins": 180,
      "goals": 0,
      "assists": 0,
      "yellowCards": 0,
      "redCards": 0
    },
    "attributes": {
      "pace": 65,
      "dribbling": 55,
      "passing": 60,
      "defending": 74,
      "physicality": 57,
      "tactical": 66,
      "workrate": 62
    },
    "detailedStats": {
      "goalsPer90": 0.0,
      "shotsOnTargetPer90": 0.5,
      "expectedGoals": 0.1,
      "shotConversionRate": 10.0,
      "touchesInBoxPer90": 0.5,
      "chancesCreated": 0,
      "dribblesCompletedPer90": 0.4,
      "keyPassesPer90": 0.1,
      "tacklesWonPer90": 1.1,
      "interceptionsPer90": 0.8,
      "clearancesPer90": 1.7,
      "aerialDuelWinPercentage": 57.0,
      "tackledDribblerRate": 50.5,
      "progressivePassesPer90": 1.5,
      "longPassesCompletedPer90": 1.0,
      "passingAccuracy": 80.1
    },
    "leagueBenchmarks": [
      {
        "metric": "Passing Accuracy %",
        "player": 80.1,
        "avg": 82.0,
        "elite": 89.0
      },
      {
        "metric": "Clearances per 90",
        "player": 1.7,
        "avg": 2.6,
        "elite": 4.0
      },
      {
        "metric": "Aerial Duel Win %",
        "player": 57.0,
        "avg": 54.5,
        "elite": 68.0
      },
      {
        "metric": "Tackles Won per 90",
        "player": 1.1,
        "avg": 1.1,
        "elite": 2.0
      }
    ],
    "heatmap": [
      {
        "x": 50,
        "y": 20,
        "r": 45,
        "v": 0.9
      },
      {
        "x": 42,
        "y": 18,
        "r": 32,
        "v": 0.8
      },
      {
        "x": 58,
        "y": 18,
        "r": 32,
        "v": 0.8
      },
      {
        "x": 50,
        "y": 10,
        "r": 28,
        "v": 0.6
      }
    ],
    "strengths": [
      "Defending",
      "Tactical awareness"
    ],
    "weaknesses": [
      "Dribbling",
      "Physicality"
    ]
  },
  {
    "id": "ollie-scarles",
    "name": "Ollie Scarles",
    "age": 28,
    "position": "DF",
    "role": "Central Defender",
    "club": "West Ham",
    "league": "Premier League",
    "nation": "Spain",
    "value": 25800000,
    "rating": 73,
    "general": {
      "apps": 9,
      "mins": 656,
      "goals": 0,
      "assists": 1,
      "yellowCards": 2,
      "redCards": 0
    },
    "attributes": {
      "pace": 65,
      "dribbling": 59,
      "passing": 65,
      "defending": 80,
      "physicality": 64,
      "tactical": 71,
      "workrate": 69
    },
    "detailedStats": {
      "goalsPer90": 0.0,
      "shotsOnTargetPer90": 0.5,
      "expectedGoals": 0.2,
      "shotConversionRate": 10.0,
      "touchesInBoxPer90": 0.6,
      "chancesCreated": 10,
      "dribblesCompletedPer90": 0.7,
      "keyPassesPer90": 0.56,
      "tacklesWonPer90": 1.5,
      "interceptionsPer90": 0.9,
      "clearancesPer90": 2.2,
      "aerialDuelWinPercentage": 62.1,
      "tackledDribblerRate": 52.5,
      "progressivePassesPer90": 1.9,
      "longPassesCompletedPer90": 1.3,
      "passingAccuracy": 81.6
    },
    "leagueBenchmarks": [
      {
        "metric": "Passing Accuracy %",
        "player": 81.6,
        "avg": 82.0,
        "elite": 89.0
      },
      {
        "metric": "Clearances per 90",
        "player": 2.2,
        "avg": 2.6,
        "elite": 4.0
      },
      {
        "metric": "Aerial Duel Win %",
        "player": 62.1,
        "avg": 54.5,
        "elite": 68.0
      },
      {
        "metric": "Tackles Won per 90",
        "player": 1.5,
        "avg": 1.1,
        "elite": 2.0
      }
    ],
    "heatmap": [
      {
        "x": 50,
        "y": 20,
        "r": 45,
        "v": 0.9
      },
      {
        "x": 42,
        "y": 18,
        "r": 32,
        "v": 0.8
      },
      {
        "x": 58,
        "y": 18,
        "r": 32,
        "v": 0.8
      },
      {
        "x": 50,
        "y": 10,
        "r": 28,
        "v": 0.6
      }
    ],
    "strengths": [
      "Defending",
      "Tactical awareness"
    ],
    "weaknesses": [
      "Dribbling",
      "Physicality"
    ]
  },
  {
    "id": "jean-clair-todibo",
    "name": "Jean-Clair Todibo",
    "age": 29,
    "position": "DF",
    "role": "Central Defender",
    "club": "West Ham",
    "league": "Premier League",
    "nation": "England",
    "value": 25800000,
    "rating": 76,
    "general": {
      "apps": 22,
      "mins": 1817,
      "goals": 0,
      "assists": 1,
      "yellowCards": 5,
      "redCards": 1
    },
    "attributes": {
      "pace": 66,
      "dribbling": 58,
      "passing": 64,
      "defending": 93,
      "physicality": 80,
      "tactical": 76,
      "workrate": 85
    },
    "detailedStats": {
      "goalsPer90": 0.0,
      "shotsOnTargetPer90": 0.5,
      "expectedGoals": 0.2,
      "shotConversionRate": 10.0,
      "touchesInBoxPer90": 0.6,
      "chancesCreated": 8,
      "dribblesCompletedPer90": 0.6,
      "keyPassesPer90": 0.16,
      "tacklesWonPer90": 2.3,
      "interceptionsPer90": 1.0,
      "clearancesPer90": 3.4,
      "aerialDuelWinPercentage": 74.2,
      "tackledDribblerRate": 54.8,
      "progressivePassesPer90": 1.8,
      "longPassesCompletedPer90": 1.2,
      "passingAccuracy": 81.3
    },
    "leagueBenchmarks": [
      {
        "metric": "Passing Accuracy %",
        "player": 81.3,
        "avg": 82.0,
        "elite": 89.0
      },
      {
        "metric": "Clearances per 90",
        "player": 3.4,
        "avg": 2.6,
        "elite": 4.0
      },
      {
        "metric": "Aerial Duel Win %",
        "player": 74.2,
        "avg": 54.5,
        "elite": 68.0
      },
      {
        "metric": "Tackles Won per 90",
        "player": 2.3,
        "avg": 1.1,
        "elite": 2.0
      }
    ],
    "heatmap": [
      {
        "x": 50,
        "y": 20,
        "r": 45,
        "v": 0.9
      },
      {
        "x": 42,
        "y": 18,
        "r": 32,
        "v": 0.8
      },
      {
        "x": 58,
        "y": 18,
        "r": 32,
        "v": 0.8
      },
      {
        "x": 50,
        "y": 10,
        "r": 28,
        "v": 0.6
      }
    ],
    "strengths": [
      "Defending",
      "Workrate",
      "Aerial Dominance"
    ],
    "weaknesses": [
      "Dribbling",
      "Passing"
    ]
  },
  {
    "id": "aaron-wan-bissaka",
    "name": "Aaron Wan-Bissaka",
    "age": 30,
    "position": "DF",
    "role": "Attacking Fullback",
    "club": "West Ham",
    "league": "Premier League",
    "nation": "France",
    "value": 24600000,
    "rating": 79,
    "general": {
      "apps": 23,
      "mins": 2080,
      "goals": 0,
      "assists": 3,
      "yellowCards": 4,
      "redCards": 0
    },
    "attributes": {
      "pace": 66,
      "dribbling": 68,
      "passing": 80,
      "defending": 94,
      "physicality": 83,
      "tactical": 84,
      "workrate": 89
    },
    "detailedStats": {
      "goalsPer90": 0.0,
      "shotsOnTargetPer90": 0.5,
      "expectedGoals": 0.0,
      "shotConversionRate": 10.0,
      "touchesInBoxPer90": 0.6,
      "chancesCreated": 38,
      "dribblesCompletedPer90": 1.4,
      "keyPassesPer90": 0.66,
      "tacklesWonPer90": 2.4,
      "interceptionsPer90": 1.1,
      "clearancesPer90": 3.7,
      "aerialDuelWinPercentage": 76.6,
      "tackledDribblerRate": 57.7,
      "progressivePassesPer90": 3.0,
      "longPassesCompletedPer90": 2.0,
      "passingAccuracy": 86.1
    },
    "leagueBenchmarks": [
      {
        "metric": "Passing Accuracy %",
        "player": 86.1,
        "avg": 82.0,
        "elite": 89.0
      },
      {
        "metric": "Clearances per 90",
        "player": 3.7,
        "avg": 2.6,
        "elite": 4.0
      },
      {
        "metric": "Aerial Duel Win %",
        "player": 76.6,
        "avg": 54.5,
        "elite": 68.0
      },
      {
        "metric": "Tackles Won per 90",
        "player": 2.4,
        "avg": 1.1,
        "elite": 2.0
      }
    ],
    "heatmap": [
      {
        "x": 14,
        "y": 25,
        "r": 38,
        "v": 0.8
      },
      {
        "x": 14,
        "y": 45,
        "r": 40,
        "v": 0.85
      },
      {
        "x": 14,
        "y": 65,
        "r": 35,
        "v": 0.7
      },
      {
        "x": 14,
        "y": 12,
        "r": 30,
        "v": 0.6
      }
    ],
    "strengths": [
      "Defending",
      "Workrate",
      "Aerial Dominance"
    ],
    "weaknesses": [
      "Dribbling",
      "Pace"
    ]
  },
  {
    "id": "lucas-tolentino-coelho-de-lima",
    "name": "Lucas Tolentino Coelho de Lima",
    "age": 32,
    "position": "MF",
    "role": "Attacking Playmaker",
    "club": "West Ham",
    "league": "Premier League",
    "nation": "England",
    "value": 35400000,
    "rating": 79,
    "general": {
      "apps": 18,
      "mins": 1513,
      "goals": 4,
      "assists": 2,
      "yellowCards": 5,
      "redCards": 1
    },
    "attributes": {
      "pace": 69,
      "dribbling": 78,
      "passing": 86,
      "defending": 74,
      "physicality": 79,
      "tactical": 88,
      "workrate": 81
    },
    "detailedStats": {
      "goalsPer90": 0.24,
      "shotsOnTargetPer90": 0.9,
      "expectedGoals": 2.9,
      "shotConversionRate": 14.8,
      "touchesInBoxPer90": 1.1,
      "chancesCreated": 49,
      "dribblesCompletedPer90": 1.7,
      "keyPassesPer90": 1.18,
      "passingAccuracy": 88.6,
      "progressivePassesPer90": 6.0,
      "tacklesWonPer90": 2.0,
      "interceptionsPer90": 0.7,
      "ballRecoveriesPer90": 6.0
    },
    "leagueBenchmarks": [
      {
        "metric": "Key Passes per 90",
        "player": 1.18,
        "avg": 0.9,
        "elite": 2.2
      },
      {
        "metric": "Progressive Passes p90",
        "player": 6.0,
        "avg": 2.8,
        "elite": 6.2
      },
      {
        "metric": "Chances Created",
        "player": 49,
        "avg": 16,
        "elite": 55
      },
      {
        "metric": "Passing Accuracy %",
        "player": 88.6,
        "avg": 79.5,
        "elite": 87.0
      }
    ],
    "heatmap": [
      {
        "x": 50,
        "y": 64,
        "r": 42,
        "v": 0.9
      },
      {
        "x": 40,
        "y": 55,
        "r": 35,
        "v": 0.75
      },
      {
        "x": 60,
        "y": 55,
        "r": 35,
        "v": 0.75
      },
      {
        "x": 50,
        "y": 76,
        "r": 30,
        "v": 0.8
      }
    ],
    "strengths": [
      "Passing",
      "Tactical awareness"
    ],
    "weaknesses": [
      "Defending",
      "Pace"
    ]
  },
  {
    "id": "tom\u00e1\u0161-sou\u010dek",
    "name": "Tom\u00e1\u0161 Sou\u010dek",
    "age": 33,
    "position": "MF",
    "role": "Attacking Playmaker",
    "club": "West Ham",
    "league": "Premier League",
    "nation": "Spain",
    "value": 34200000,
    "rating": 84,
    "general": {
      "apps": 24,
      "mins": 2190,
      "goals": 5,
      "assists": 2,
      "yellowCards": 3,
      "redCards": 1
    },
    "attributes": {
      "pace": 84,
      "dribbling": 81,
      "passing": 72,
      "defending": 85,
      "physicality": 90,
      "tactical": 95,
      "workrate": 91
    },
    "detailedStats": {
      "goalsPer90": 0.21,
      "shotsOnTargetPer90": 0.8,
      "expectedGoals": 5.7,
      "shotConversionRate": 16.0,
      "touchesInBoxPer90": 2.1,
      "chancesCreated": 23,
      "dribblesCompletedPer90": 1.0,
      "keyPassesPer90": 0.39,
      "passingAccuracy": 85.2,
      "progressivePassesPer90": 3.9,
      "tacklesWonPer90": 2.6,
      "interceptionsPer90": 0.8,
      "ballRecoveriesPer90": 7.0
    },
    "leagueBenchmarks": [
      {
        "metric": "Key Passes per 90",
        "player": 0.39,
        "avg": 0.9,
        "elite": 2.2
      },
      {
        "metric": "Progressive Passes p90",
        "player": 3.9,
        "avg": 2.8,
        "elite": 6.2
      },
      {
        "metric": "Chances Created",
        "player": 23,
        "avg": 16,
        "elite": 55
      },
      {
        "metric": "Passing Accuracy %",
        "player": 85.2,
        "avg": 79.5,
        "elite": 87.0
      }
    ],
    "heatmap": [
      {
        "x": 50,
        "y": 64,
        "r": 42,
        "v": 0.9
      },
      {
        "x": 40,
        "y": 55,
        "r": 35,
        "v": 0.75
      },
      {
        "x": 60,
        "y": 55,
        "r": 35,
        "v": 0.75
      },
      {
        "x": 50,
        "y": 76,
        "r": 30,
        "v": 0.8
      }
    ],
    "strengths": [
      "Workrate",
      "Tactical awareness"
    ],
    "weaknesses": [
      "Dribbling",
      "Passing"
    ]
  },
  {
    "id": "crysencio-summerville",
    "name": "Crysencio Summerville",
    "age": 20,
    "position": "MF",
    "role": "Attacking Playmaker",
    "club": "West Ham",
    "league": "Premier League",
    "nation": "England",
    "value": 32400000,
    "rating": 85,
    "general": {
      "apps": 29,
      "mins": 2470,
      "goals": 5,
      "assists": 4,
      "yellowCards": 6,
      "redCards": 0
    },
    "attributes": {
      "pace": 87,
      "dribbling": 95,
      "passing": 90,
      "defending": 79,
      "physicality": 84,
      "tactical": 95,
      "workrate": 95
    },
    "detailedStats": {
      "goalsPer90": 0.18,
      "shotsOnTargetPer90": 0.8,
      "expectedGoals": 5.4,
      "shotConversionRate": 16.0,
      "touchesInBoxPer90": 2.3,
      "chancesCreated": 57,
      "dribblesCompletedPer90": 1.9,
      "keyPassesPer90": 0.84,
      "passingAccuracy": 89.7,
      "progressivePassesPer90": 6.6,
      "tacklesWonPer90": 2.3,
      "interceptionsPer90": 0.9,
      "ballRecoveriesPer90": 6.5
    },
    "leagueBenchmarks": [
      {
        "metric": "Key Passes per 90",
        "player": 0.84,
        "avg": 0.9,
        "elite": 2.2
      },
      {
        "metric": "Progressive Passes p90",
        "player": 6.6,
        "avg": 2.8,
        "elite": 6.2
      },
      {
        "metric": "Chances Created",
        "player": 57,
        "avg": 16,
        "elite": 55
      },
      {
        "metric": "Passing Accuracy %",
        "player": 89.7,
        "avg": 79.5,
        "elite": 87.0
      }
    ],
    "heatmap": [
      {
        "x": 50,
        "y": 64,
        "r": 42,
        "v": 0.9
      },
      {
        "x": 40,
        "y": 55,
        "r": 35,
        "v": 0.75
      },
      {
        "x": 60,
        "y": 55,
        "r": 35,
        "v": 0.75
      },
      {
        "x": 50,
        "y": 76,
        "r": 30,
        "v": 0.8
      }
    ],
    "strengths": [
      "Dribbling",
      "Tactical awareness"
    ],
    "weaknesses": [
      "Defending",
      "Physicality"
    ]
  },
  {
    "id": "freddie-potts",
    "name": "Freddie Potts",
    "age": 28,
    "position": "MF",
    "role": "Box-to-Box Midfielder",
    "club": "West Ham",
    "league": "Premier League",
    "nation": "Brazil",
    "value": 25800000,
    "rating": 75,
    "general": {
      "apps": 12,
      "mins": 1162,
      "goals": 0,
      "assists": 1,
      "yellowCards": 1,
      "redCards": 0
    },
    "attributes": {
      "pace": 61,
      "dribbling": 62,
      "passing": 69,
      "defending": 62,
      "physicality": 67,
      "tactical": 74,
      "workrate": 76
    },
    "detailedStats": {
      "goalsPer90": 0.0,
      "shotsOnTargetPer90": 0.5,
      "expectedGoals": 0.2,
      "shotConversionRate": 10.0,
      "touchesInBoxPer90": 0.6,
      "chancesCreated": 17,
      "dribblesCompletedPer90": 0.9,
      "keyPassesPer90": 0.55,
      "passingAccuracy": 84.4,
      "progressivePassesPer90": 3.4,
      "tacklesWonPer90": 1.4,
      "interceptionsPer90": 0.6,
      "ballRecoveriesPer90": 4.8
    },
    "leagueBenchmarks": [
      {
        "metric": "Key Passes per 90",
        "player": 0.55,
        "avg": 0.9,
        "elite": 2.2
      },
      {
        "metric": "Progressive Passes p90",
        "player": 3.4,
        "avg": 2.8,
        "elite": 6.2
      },
      {
        "metric": "Chances Created",
        "player": 17,
        "avg": 16,
        "elite": 55
      },
      {
        "metric": "Passing Accuracy %",
        "player": 84.4,
        "avg": 79.5,
        "elite": 87.0
      }
    ],
    "heatmap": [
      {
        "x": 50,
        "y": 42,
        "r: ": 45,
        "v": 0.9
      },
      {
        "x": 44,
        "y": 35,
        "r": 38,
        "v": 0.8
      },
      {
        "x": 56,
        "y": 35,
        "r": 38,
        "v": 0.8
      },
      {
        "x": 50,
        "y": 55,
        "r": 35,
        "v": 0.75
      }
    ],
    "strengths": [
      "Workrate",
      "Tactical awareness"
    ],
    "weaknesses": [
      "Defending",
      "Pace"
    ]
  },
  {
    "id": "jarrod-bowen",
    "name": "Jarrod Bowen",
    "age": 29,
    "position": "FW",
    "role": "Inverted Winger",
    "club": "West Ham",
    "league": "Premier League",
    "nation": "England",
    "value": 46800000,
    "rating": 93,
    "general": {
      "apps": 38,
      "mins": 3406,
      "goals": 9,
      "assists": 13,
      "yellowCards": 4,
      "redCards": 0
    },
    "attributes": {
      "pace": 98,
      "dribbling": 96,
      "passing": 97,
      "defending": 47,
      "physicality": 94,
      "tactical": 95,
      "workrate": 96
    },
    "detailedStats": {
      "goalsPer90": 0.24,
      "shotsOnTargetPer90": 0.9,
      "expectedGoals": 7.2,
      "shotConversionRate": 20.8,
      "touchesInBoxPer90": 6.1,
      "chancesCreated": 86,
      "dribblesCompletedPer90": 2.7,
      "keyPassesPer90": 0.92
    },
    "leagueBenchmarks": [
      {
        "metric": "Goals per 90",
        "player": 0.24,
        "avg": 0.22,
        "elite": 0.65
      },
      {
        "metric": "Shot Conversion %",
        "player": 20.8,
        "avg": 10.5,
        "elite": 18.0
      },
      {
        "metric": "Touches in Box p90",
        "player": 6.1,
        "avg": 2.5,
        "elite": 5.5
      },
      {
        "metric": "Expected Goals (xG)",
        "player": 7.2,
        "avg": 4.5,
        "elite": 14.0
      }
    ],
    "heatmap": [
      {
        "x": 22,
        "y": 72,
        "r": 45,
        "v": 0.9
      },
      {
        "x": 22,
        "y": 58,
        "r": 38,
        "v": 0.75
      },
      {
        "x": 28,
        "y": 82,
        "r": 35,
        "v": 0.8
      },
      {
        "x": 50,
        "y": 84,
        "r": 30,
        "v": 0.65
      }
    ],
    "strengths": [
      "Passing",
      "Clinical Finishing",
      "Pace"
    ],
    "weaknesses": [
      "Defending",
      "Defensive Tracking Back"
    ]
  },
  {
    "id": "niclas-f\u00fcllkrug",
    "name": "Niclas F\u00fcllkrug",
    "age": 30,
    "position": "FW",
    "role": "Complete Winger / Striker",
    "club": "West Ham",
    "league": "Premier League",
    "nation": "France",
    "value": 33600000,
    "rating": 71,
    "general": {
      "apps": 5,
      "mins": 407,
      "goals": 0,
      "assists": 0,
      "yellowCards": 0,
      "redCards": 0
    },
    "attributes": {
      "pace": 77,
      "dribbling": 63,
      "passing": 65,
      "defending": 25,
      "physicality": 56,
      "tactical": 70,
      "workrate": 65
    },
    "detailedStats": {
      "goalsPer90": 0.0,
      "shotsOnTargetPer90": 0.5,
      "expectedGoals": 0.9,
      "shotConversionRate": 10.0,
      "touchesInBoxPer90": 2.6,
      "chancesCreated": 10,
      "dribblesCompletedPer90": 0.7,
      "keyPassesPer90": 0.94
    },
    "leagueBenchmarks": [
      {
        "metric": "Goals per 90",
        "player": 0.0,
        "avg": 0.22,
        "elite": 0.65
      },
      {
        "metric": "Shot Conversion %",
        "player": 10.0,
        "avg": 10.5,
        "elite": 18.0
      },
      {
        "metric": "Touches in Box p90",
        "player": 2.6,
        "avg": 2.5,
        "elite": 5.5
      },
      {
        "metric": "Expected Goals (xG)",
        "player": 0.9,
        "avg": 4.5,
        "elite": 14.0
      }
    ],
    "heatmap": [
      {
        "x": 50,
        "y": 84,
        "r": 38,
        "v": 0.9
      },
      {
        "x": 48,
        "y": 76,
        "r": 32,
        "v": 0.75
      },
      {
        "x": 52,
        "y": 80,
        "r": 32,
        "v": 0.8
      },
      {
        "x": 50,
        "y": 92,
        "r": 28,
        "v": 0.85
      }
    ],
    "strengths": [
      "Tactical awareness",
      "Pace"
    ],
    "weaknesses": [
      "Defending",
      "Defensive Tracking Back"
    ]
  },
  {
    "id": "kyle-walker-peters",
    "name": "Kyle Walker-Peters",
    "age": 34,
    "position": "DF",
    "role": "Attacking Fullback",
    "club": "West Ham",
    "league": "Premier League",
    "nation": "Spain",
    "value": 25200000,
    "rating": 77,
    "general": {
      "apps": 15,
      "mins": 1378,
      "goals": 1,
      "assists": 0,
      "yellowCards": 2,
      "redCards": 0
    },
    "attributes": {
      "pace": 69,
      "dribbling": 64,
      "passing": 68,
      "defending": 87,
      "physicality": 72,
      "tactical": 77,
      "workrate": 79
    },
    "detailedStats": {
      "goalsPer90": 0.07,
      "shotsOnTargetPer90": 0.6,
      "expectedGoals": 1.1,
      "shotConversionRate": 11.2,
      "touchesInBoxPer90": 0.9,
      "chancesCreated": 15,
      "dribblesCompletedPer90": 0.8,
      "keyPassesPer90": 0.41,
      "tacklesWonPer90": 1.9,
      "interceptionsPer90": 1.0,
      "clearancesPer90": 2.8,
      "aerialDuelWinPercentage": 68.3,
      "tackledDribblerRate": 55.0,
      "progressivePassesPer90": 2.1,
      "longPassesCompletedPer90": 1.4,
      "passingAccuracy": 82.5
    },
    "leagueBenchmarks": [
      {
        "metric": "Passing Accuracy %",
        "player": 82.5,
        "avg": 82.0,
        "elite": 89.0
      },
      {
        "metric": "Clearances per 90",
        "player": 2.8,
        "avg": 2.6,
        "elite": 4.0
      },
      {
        "metric": "Aerial Duel Win %",
        "player": 68.3,
        "avg": 54.5,
        "elite": 68.0
      },
      {
        "metric": "Tackles Won per 90",
        "player": 1.9,
        "avg": 1.1,
        "elite": 2.0
      }
    ],
    "heatmap": [
      {
        "x": 86,
        "y": 25,
        "r": 38,
        "v": 0.8
      },
      {
        "x": 86,
        "y": 45,
        "r": 40,
        "v": 0.85
      },
      {
        "x": 86,
        "y": 65,
        "r": 35,
        "v": 0.7
      },
      {
        "x": 86,
        "y": 12,
        "r": 30,
        "v": 0.6
      }
    ],
    "strengths": [
      "Defending",
      "Workrate",
      "Aerial Dominance"
    ],
    "weaknesses": [
      "Dribbling",
      "Passing"
    ]
  },
  {
    "id": "callum-wilson",
    "name": "Callum Wilson",
    "age": 31,
    "position": "FW",
    "role": "Complete Winger / Striker",
    "club": "West Ham",
    "league": "Premier League",
    "nation": "Spain",
    "value": 34800000,
    "rating": 81,
    "general": {
      "apps": 11,
      "mins": 1234,
      "goals": 7,
      "assists": 2,
      "yellowCards": 1,
      "redCards": 0
    },
    "attributes": {
      "pace": 98,
      "dribbling": 79,
      "passing": 67,
      "defending": 32,
      "physicality": 75,
      "tactical": 87,
      "workrate": 77
    },
    "detailedStats": {
      "goalsPer90": 0.51,
      "shotsOnTargetPer90": 1.3,
      "expectedGoals": 7.6,
      "shotConversionRate": 18.4,
      "touchesInBoxPer90": 4.5,
      "chancesCreated": 13,
      "dribblesCompletedPer90": 0.8,
      "keyPassesPer90": 0.4
    },
    "leagueBenchmarks": [
      {
        "metric": "Goals per 90",
        "player": 0.51,
        "avg": 0.22,
        "elite": 0.65
      },
      {
        "metric": "Shot Conversion %",
        "player": 18.4,
        "avg": 10.5,
        "elite": 18.0
      },
      {
        "metric": "Touches in Box p90",
        "player": 4.5,
        "avg": 2.5,
        "elite": 5.5
      },
      {
        "metric": "Expected Goals (xG)",
        "player": 7.6,
        "avg": 4.5,
        "elite": 14.0
      }
    ],
    "heatmap": [
      {
        "x": 50,
        "y": 84,
        "r": 38,
        "v": 0.9
      },
      {
        "x": 48,
        "y": 76,
        "r": 32,
        "v": 0.75
      },
      {
        "x": 52,
        "y": 80,
        "r": 32,
        "v": 0.8
      },
      {
        "x": 50,
        "y": 92,
        "r": 28,
        "v": 0.85
      }
    ],
    "strengths": [
      "Tactical awareness",
      "Pace"
    ],
    "weaknesses": [
      "Defending",
      "Defensive Tracking Back"
    ]
  },
  {
    "id": "mads-hermansen",
    "name": "Mads Hermansen",
    "age": 24,
    "position": "GK",
    "role": "Sweeper Keeper",
    "club": "West Ham",
    "league": "Premier League",
    "nation": "Brazil",
    "value": 25200000,
    "rating": 80,
    "general": {
      "apps": 18,
      "mins": 1620,
      "goals": 0,
      "assists": 1,
      "yellowCards": 0,
      "redCards": 0
    },
    "attributes": {
      "pace": 60,
      "dribbling": 55,
      "passing": 76,
      "defending": 93,
      "physicality": 83,
      "tactical": 76,
      "workrate": 83
    },
    "detailedStats": {
      "savePercentage": 76.0,
      "cleanSheets": 7,
      "goalsConceded": 28,
      "psxgDifference": 2.8,
      "passingAccuracy": 90.0,
      "sweeperActionsPer90": 0.8,
      "averageDistanceOfSweeperActions": 12.9
    },
    "leagueBenchmarks": [
      {
        "metric": "Save %",
        "player": 76.0,
        "avg": 69.5,
        "elite": 77.0
      },
      {
        "metric": "Clean Sheets",
        "player": 7,
        "avg": 4.5,
        "elite": 10.0
      },
      {
        "metric": "Sweeper Actions p90",
        "player": 0.8,
        "avg": 0.6,
        "elite": 1.2
      },
      {
        "metric": "Passing Accuracy %",
        "player": 90.0,
        "avg": 73.0,
        "elite": 82.0
      }
    ],
    "heatmap": [
      {
        "x": 50,
        "y": 6,
        "r": 35,
        "v": 0.98
      },
      {
        "x": 50,
        "y": 14,
        "r": 28,
        "v": 0.7
      },
      {
        "x": 45,
        "y": 8,
        "r": 22,
        "v": 0.55
      },
      {
        "x": 55,
        "y": 8,
        "r": 22,
        "v": 0.55
      }
    ],
    "strengths": [
      "Defending",
      "Reflexes",
      "Physicality"
    ],
    "weaknesses": [
      "Dribbling",
      "Pace"
    ]
  },
  {
    "id": "mateus-gon\u00e7alo-espanha-fernandes",
    "name": "Mateus Gon\u00e7alo Espanha Fernandes",
    "age": 23,
    "position": "MF",
    "role": "Attacking Playmaker",
    "club": "West Ham",
    "league": "Premier League",
    "nation": "England",
    "value": 33000000,
    "rating": 89,
    "general": {
      "apps": 35,
      "mins": 3017,
      "goals": 3,
      "assists": 4,
      "yellowCards": 7,
      "redCards": 0
    },
    "attributes": {
      "pace": 69,
      "dribbling": 87,
      "passing": 97,
      "defending": 88,
      "physicality": 94,
      "tactical": 95,
      "workrate": 96
    },
    "detailedStats": {
      "goalsPer90": 0.09,
      "shotsOnTargetPer90": 0.6,
      "expectedGoals": 2.0,
      "shotConversionRate": 13.6,
      "touchesInBoxPer90": 1.1,
      "chancesCreated": 77,
      "dribblesCompletedPer90": 2.5,
      "keyPassesPer90": 0.93,
      "passingAccuracy": 92.4,
      "progressivePassesPer90": 8.2,
      "tacklesWonPer90": 3.0,
      "interceptionsPer90": 0.9,
      "ballRecoveriesPer90": 7.9
    },
    "leagueBenchmarks": [
      {
        "metric": "Key Passes per 90",
        "player": 0.93,
        "avg": 0.9,
        "elite": 2.2
      },
      {
        "metric": "Progressive Passes p90",
        "player": 8.2,
        "avg": 2.8,
        "elite": 6.2
      },
      {
        "metric": "Chances Created",
        "player": 77,
        "avg": 16,
        "elite": 55
      },
      {
        "metric": "Passing Accuracy %",
        "player": 92.4,
        "avg": 79.5,
        "elite": 87.0
      }
    ],
    "heatmap": [
      {
        "x": 50,
        "y": 64,
        "r": 42,
        "v": 0.9
      },
      {
        "x": 40,
        "y": 55,
        "r": 35,
        "v": 0.75
      },
      {
        "x": 60,
        "y": 55,
        "r": 35,
        "v": 0.75
      },
      {
        "x": 50,
        "y": 76,
        "r": 30,
        "v": 0.8
      }
    ],
    "strengths": [
      "Passing",
      "Workrate"
    ],
    "weaknesses": [
      "Dribbling",
      "Pace"
    ]
  },
  {
    "id": "soungoutou-magassa",
    "name": "Soungoutou Magassa",
    "age": 33,
    "position": "MF",
    "role": "Box-to-Box Midfielder",
    "club": "West Ham",
    "league": "Premier League",
    "nation": "Spain",
    "value": 30000000,
    "rating": 76,
    "general": {
      "apps": 11,
      "mins": 971,
      "goals": 1,
      "assists": 0,
      "yellowCards": 4,
      "redCards": 0
    },
    "attributes": {
      "pace": 62,
      "dribbling": 60,
      "passing": 65,
      "defending": 62,
      "physicality": 67,
      "tactical": 72,
      "workrate": 73
    },
    "detailedStats": {
      "goalsPer90": 0.09,
      "shotsOnTargetPer90": 0.6,
      "expectedGoals": 0.4,
      "shotConversionRate": 11.2,
      "touchesInBoxPer90": 0.6,
      "chancesCreated": 10,
      "dribblesCompletedPer90": 0.7,
      "keyPassesPer90": 0.39,
      "passingAccuracy": 83.4,
      "progressivePassesPer90": 2.8,
      "tacklesWonPer90": 1.4,
      "interceptionsPer90": 0.6,
      "ballRecoveriesPer90": 4.7
    },
    "leagueBenchmarks": [
      {
        "metric": "Key Passes per 90",
        "player": 0.39,
        "avg": 0.9,
        "elite": 2.2
      },
      {
        "metric": "Progressive Passes p90",
        "player": 2.8,
        "avg": 2.8,
        "elite": 6.2
      },
      {
        "metric": "Chances Created",
        "player": 10,
        "avg": 16,
        "elite": 55
      },
      {
        "metric": "Passing Accuracy %",
        "player": 83.4,
        "avg": 79.5,
        "elite": 87.0
      }
    ],
    "heatmap": [
      {
        "x": 50,
        "y": 42,
        "r: ": 45,
        "v": 0.9
      },
      {
        "x": 44,
        "y": 35,
        "r": 38,
        "v": 0.8
      },
      {
        "x": 56,
        "y": 35,
        "r": 38,
        "v": 0.8
      },
      {
        "x": 50,
        "y": 55,
        "r": 35,
        "v": 0.75
      }
    ],
    "strengths": [
      "Workrate",
      "Tactical awareness"
    ],
    "weaknesses": [
      "Dribbling",
      "Defending"
    ]
  },
  {
    "id": "pablo-felipe-pereira-de-jesus",
    "name": "Pablo Felipe Pereira de Jesus",
    "age": 25,
    "position": "FW",
    "role": "Complete Winger / Striker",
    "club": "West Ham",
    "league": "Premier League",
    "nation": "France",
    "value": 32400000,
    "rating": 73,
    "general": {
      "apps": 10,
      "mins": 819,
      "goals": 0,
      "assists": 1,
      "yellowCards": 0,
      "redCards": 0
    },
    "attributes": {
      "pace": 76,
      "dribbling": 66,
      "passing": 72,
      "defending": 27,
      "physicality": 62,
      "tactical": 75,
      "workrate": 71
    },
    "detailedStats": {
      "goalsPer90": 0.0,
      "shotsOnTargetPer90": 0.5,
      "expectedGoals": 1.1,
      "shotConversionRate": 10.0,
      "touchesInBoxPer90": 2.5,
      "chancesCreated": 23,
      "dribblesCompletedPer90": 1.0,
      "keyPassesPer90": 1.05
    },
    "leagueBenchmarks": [
      {
        "metric": "Goals per 90",
        "player": 0.0,
        "avg": 0.22,
        "elite": 0.65
      },
      {
        "metric": "Shot Conversion %",
        "player": 10.0,
        "avg": 10.5,
        "elite": 18.0
      },
      {
        "metric": "Touches in Box p90",
        "player": 2.5,
        "avg": 2.5,
        "elite": 5.5
      },
      {
        "metric": "Expected Goals (xG)",
        "player": 1.1,
        "avg": 4.5,
        "elite": 14.0
      }
    ],
    "heatmap": [
      {
        "x": 50,
        "y": 84,
        "r": 38,
        "v": 0.9
      },
      {
        "x": 48,
        "y": 76,
        "r": 32,
        "v": 0.75
      },
      {
        "x": 52,
        "y": 80,
        "r": 32,
        "v": 0.8
      },
      {
        "x": 50,
        "y": 92,
        "r": 28,
        "v": 0.85
      }
    ],
    "strengths": [
      "Tactical awareness",
      "Pace"
    ],
    "weaknesses": [
      "Defending",
      "Defensive Tracking Back"
    ]
  },
  {
    "id": "valent\u00edn-castellanos",
    "name": "Valent\u00edn Castellanos",
    "age": 31,
    "position": "FW",
    "role": "Complete Winger / Striker",
    "club": "West Ham",
    "league": "Premier League",
    "nation": "Brazil",
    "value": 33000000,
    "rating": 78,
    "general": {
      "apps": 17,
      "mins": 1384,
      "goals": 6,
      "assists": 1,
      "yellowCards": 6,
      "redCards": 0
    },
    "attributes": {
      "pace": 98,
      "dribbling": 85,
      "passing": 71,
      "defending": 32,
      "physicality": 73,
      "tactical": 90,
      "workrate": 79
    },
    "detailedStats": {
      "goalsPer90": 0.39,
      "shotsOnTargetPer90": 1.1,
      "expectedGoals": 5.8,
      "shotConversionRate": 17.2,
      "touchesInBoxPer90": 5.0,
      "chancesCreated": 21,
      "dribblesCompletedPer90": 1.0,
      "keyPassesPer90": 0.57
    },
    "leagueBenchmarks": [
      {
        "metric": "Goals per 90",
        "player": 0.39,
        "avg": 0.22,
        "elite": 0.65
      },
      {
        "metric": "Shot Conversion %",
        "player": 17.2,
        "avg": 10.5,
        "elite": 18.0
      },
      {
        "metric": "Touches in Box p90",
        "player": 5.0,
        "avg": 2.5,
        "elite": 5.5
      },
      {
        "metric": "Expected Goals (xG)",
        "player": 5.8,
        "avg": 4.5,
        "elite": 14.0
      }
    ],
    "heatmap": [
      {
        "x": 50,
        "y": 84,
        "r": 38,
        "v": 0.9
      },
      {
        "x": 48,
        "y": 76,
        "r": 32,
        "v": 0.75
      },
      {
        "x": 52,
        "y": 80,
        "r": 32,
        "v": 0.8
      },
      {
        "x": 50,
        "y": 92,
        "r": 28,
        "v": 0.85
      }
    ],
    "strengths": [
      "Tactical awareness",
      "Pace"
    ],
    "weaknesses": [
      "Defending",
      "Defensive Tracking Back"
    ]
  },
  {
    "id": "axel-disasi",
    "name": "Axel Disasi",
    "age": 25,
    "position": "DF",
    "role": "Central Defender",
    "club": "West Ham",
    "league": "Premier League",
    "nation": "France",
    "value": 27000000,
    "rating": 77,
    "general": {
      "apps": 14,
      "mins": 1254,
      "goals": 0,
      "assists": 0,
      "yellowCards": 1,
      "redCards": 0
    },
    "attributes": {
      "pace": 68,
      "dribbling": 59,
      "passing": 61,
      "defending": 84,
      "physicality": 69,
      "tactical": 73,
      "workrate": 77
    },
    "detailedStats": {
      "goalsPer90": 0.0,
      "shotsOnTargetPer90": 0.5,
      "expectedGoals": 1.1,
      "shotConversionRate": 10.0,
      "touchesInBoxPer90": 0.8,
      "chancesCreated": 2,
      "dribblesCompletedPer90": 0.5,
      "keyPassesPer90": 0.07,
      "tacklesWonPer90": 1.7,
      "interceptionsPer90": 0.9,
      "clearancesPer90": 2.6,
      "aerialDuelWinPercentage": 66.0,
      "tackledDribblerRate": 53.2,
      "progressivePassesPer90": 1.6,
      "longPassesCompletedPer90": 1.1,
      "passingAccuracy": 80.4
    },
    "leagueBenchmarks": [
      {
        "metric": "Passing Accuracy %",
        "player": 80.4,
        "avg": 82.0,
        "elite": 89.0
      },
      {
        "metric": "Clearances per 90",
        "player": 2.6,
        "avg": 2.6,
        "elite": 4.0
      },
      {
        "metric": "Aerial Duel Win %",
        "player": 66.0,
        "avg": 54.5,
        "elite": 68.0
      },
      {
        "metric": "Tackles Won per 90",
        "player": 1.7,
        "avg": 1.1,
        "elite": 2.0
      }
    ],
    "heatmap": [
      {
        "x": 50,
        "y": 20,
        "r": 45,
        "v": 0.9
      },
      {
        "x": 42,
        "y": 18,
        "r": 32,
        "v": 0.8
      },
      {
        "x": 58,
        "y": 18,
        "r": 32,
        "v": 0.8
      },
      {
        "x": 50,
        "y": 10,
        "r": 28,
        "v": 0.6
      }
    ],
    "strengths": [
      "Defending",
      "Workrate"
    ],
    "weaknesses": [
      "Dribbling",
      "Passing"
    ]
  },
  {
    "id": "sam-johnstone",
    "name": "Sam Johnstone",
    "age": 32,
    "position": "GK",
    "role": "Sweeper Keeper",
    "club": "Wolves",
    "league": "Premier League",
    "nation": "England",
    "value": 26400000,
    "rating": 73,
    "general": {
      "apps": 12,
      "mins": 1080,
      "goals": 0,
      "assists": 0,
      "yellowCards": 0,
      "redCards": 0
    },
    "attributes": {
      "pace": 60,
      "dribbling": 55,
      "passing": 70,
      "defending": 90,
      "physicality": 75,
      "tactical": 72,
      "workrate": 75
    },
    "detailedStats": {
      "savePercentage": 72.8,
      "cleanSheets": 0,
      "goalsConceded": 24,
      "psxgDifference": 0.0,
      "passingAccuracy": 85.4,
      "sweeperActionsPer90": 0.7,
      "averageDistanceOfSweeperActions": 12.6
    },
    "leagueBenchmarks": [
      {
        "metric": "Save %",
        "player": 72.8,
        "avg": 69.5,
        "elite": 77.0
      },
      {
        "metric": "Clean Sheets",
        "player": 0,
        "avg": 4.5,
        "elite": 10.0
      },
      {
        "metric": "Sweeper Actions p90",
        "player": 0.7,
        "avg": 0.6,
        "elite": 1.2
      },
      {
        "metric": "Passing Accuracy %",
        "player": 85.4,
        "avg": 73.0,
        "elite": 82.0
      }
    ],
    "heatmap": [
      {
        "x": 50,
        "y": 6,
        "r": 35,
        "v": 0.98
      },
      {
        "x": 50,
        "y": 14,
        "r": 28,
        "v": 0.7
      },
      {
        "x": 45,
        "y": 8,
        "r": 22,
        "v": 0.55
      },
      {
        "x": 55,
        "y": 8,
        "r": 22,
        "v": 0.55
      }
    ],
    "strengths": [
      "Defending",
      "Physicality"
    ],
    "weaknesses": [
      "Dribbling",
      "Pace"
    ]
  },
  {
    "id": "jos\u00e9-malheiro-de-s\u00e1",
    "name": "Jos\u00e9 Malheiro de S\u00e1",
    "age": 33,
    "position": "GK",
    "role": "Sweeper Keeper",
    "club": "Wolves",
    "league": "Premier League",
    "nation": "Spain",
    "value": 25200000,
    "rating": 79,
    "general": {
      "apps": 23,
      "mins": 2070,
      "goals": 0,
      "assists": 0,
      "yellowCards": 2,
      "redCards": 0
    },
    "attributes": {
      "pace": 60,
      "dribbling": 55,
      "passing": 80,
      "defending": 93,
      "physicality": 89,
      "tactical": 78,
      "workrate": 89
    },
    "detailedStats": {
      "savePercentage": 78.0,
      "cleanSheets": 4,
      "goalsConceded": 37,
      "psxgDifference": 1.6,
      "passingAccuracy": 90.0,
      "sweeperActionsPer90": 0.9,
      "averageDistanceOfSweeperActions": 13.1
    },
    "leagueBenchmarks": [
      {
        "metric": "Save %",
        "player": 78.0,
        "avg": 69.5,
        "elite": 77.0
      },
      {
        "metric": "Clean Sheets",
        "player": 4,
        "avg": 4.5,
        "elite": 10.0
      },
      {
        "metric": "Sweeper Actions p90",
        "player": 0.9,
        "avg": 0.6,
        "elite": 1.2
      },
      {
        "metric": "Passing Accuracy %",
        "player": 90.0,
        "avg": 73.0,
        "elite": 82.0
      }
    ],
    "heatmap": [
      {
        "x": 50,
        "y": 6,
        "r": 35,
        "v": 0.98
      },
      {
        "x": 50,
        "y": 14,
        "r": 28,
        "v": 0.7
      },
      {
        "x": 45,
        "y": 8,
        "r": 22,
        "v": 0.55
      },
      {
        "x": 55,
        "y": 8,
        "r": 22,
        "v": 0.55
      }
    ],
    "strengths": [
      "Defending",
      "Reflexes",
      "Physicality"
    ],
    "weaknesses": [
      "Dribbling",
      "Pace"
    ]
  },
  {
    "id": "daniel-bentley",
    "name": "Daniel Bentley",
    "age": 34,
    "position": "GK",
    "role": "Sweeper Keeper",
    "club": "Wolves",
    "league": "Premier League",
    "nation": "Spain",
    "value": 23400000,
    "rating": 70,
    "general": {
      "apps": 3,
      "mins": 270,
      "goals": 0,
      "assists": 0,
      "yellowCards": 0,
      "redCards": 0
    },
    "attributes": {
      "pace": 60,
      "dribbling": 55,
      "passing": 58,
      "defending": 78,
      "physicality": 59,
      "tactical": 66,
      "workrate": 63
    },
    "detailedStats": {
      "savePercentage": 66.4,
      "cleanSheets": 0,
      "goalsConceded": 7,
      "psxgDifference": 0.0,
      "passingAccuracy": 73.3,
      "sweeperActionsPer90": 0.5,
      "averageDistanceOfSweeperActions": 12.1
    },
    "leagueBenchmarks": [
      {
        "metric": "Save %",
        "player": 66.4,
        "avg": 69.5,
        "elite": 77.0
      },
      {
        "metric": "Clean Sheets",
        "player": 0,
        "avg": 4.5,
        "elite": 10.0
      },
      {
        "metric": "Sweeper Actions p90",
        "player": 0.5,
        "avg": 0.6,
        "elite": 1.2
      },
      {
        "metric": "Passing Accuracy %",
        "player": 73.3,
        "avg": 73.0,
        "elite": 82.0
      }
    ],
    "heatmap": [
      {
        "x": 50,
        "y": 6,
        "r": 35,
        "v": 0.98
      },
      {
        "x": 50,
        "y": 14,
        "r": 28,
        "v": 0.7
      },
      {
        "x": 45,
        "y": 8,
        "r": 22,
        "v": 0.55
      },
      {
        "x": 55,
        "y": 8,
        "r": 22,
        "v": 0.55
      }
    ],
    "strengths": [
      "Defending",
      "Tactical awareness"
    ],
    "weaknesses": [
      "Dribbling",
      "Passing"
    ]
  },
  {
    "id": "emmanuel-agbadou",
    "name": "Emmanuel Agbadou",
    "age": 21,
    "position": "DF",
    "role": "Central Defender",
    "club": "Wolves",
    "league": "Premier League",
    "nation": "Spain",
    "value": 25200000,
    "rating": 73,
    "general": {
      "apps": 12,
      "mins": 1100,
      "goals": 0,
      "assists": 0,
      "yellowCards": 1,
      "redCards": 1
    },
    "attributes": {
      "pace": 68,
      "dribbling": 61,
      "passing": 65,
      "defending": 89,
      "physicality": 75,
      "tactical": 76,
      "workrate": 75
    },
    "detailedStats": {
      "goalsPer90": 0.0,
      "shotsOnTargetPer90": 0.5,
      "expectedGoals": 0.6,
      "shotConversionRate": 10.0,
      "touchesInBoxPer90": 0.8,
      "chancesCreated": 9,
      "dribblesCompletedPer90": 0.7,
      "keyPassesPer90": 0.31,
      "tacklesWonPer90": 2.0,
      "interceptionsPer90": 1.0,
      "clearancesPer90": 3.1,
      "aerialDuelWinPercentage": 70.6,
      "tackledDribblerRate": 54.6,
      "progressivePassesPer90": 1.9,
      "longPassesCompletedPer90": 1.3,
      "passingAccuracy": 81.5
    },
    "leagueBenchmarks": [
      {
        "metric": "Passing Accuracy %",
        "player": 81.5,
        "avg": 82.0,
        "elite": 89.0
      },
      {
        "metric": "Clearances per 90",
        "player": 3.1,
        "avg": 2.6,
        "elite": 4.0
      },
      {
        "metric": "Aerial Duel Win %",
        "player": 70.6,
        "avg": 54.5,
        "elite": 68.0
      },
      {
        "metric": "Tackles Won per 90",
        "player": 2.0,
        "avg": 1.1,
        "elite": 2.0
      }
    ],
    "heatmap": [
      {
        "x": 50,
        "y": 20,
        "r": 45,
        "v": 0.9
      },
      {
        "x": 42,
        "y": 18,
        "r": 32,
        "v": 0.8
      },
      {
        "x": 58,
        "y": 18,
        "r": 32,
        "v": 0.8
      },
      {
        "x": 50,
        "y": 10,
        "r": 28,
        "v": 0.6
      }
    ],
    "strengths": [
      "Defending",
      "Tactical awareness",
      "Aerial Dominance"
    ],
    "weaknesses": [
      "Dribbling",
      "Passing"
    ]
  },
  {
    "id": "matt-doherty",
    "name": "Matt Doherty",
    "age": 22,
    "position": "DF",
    "role": "Central Defender",
    "club": "Wolves",
    "league": "Premier League",
    "nation": "Spain",
    "value": 26400000,
    "rating": 72,
    "general": {
      "apps": 11,
      "mins": 786,
      "goals": 0,
      "assists": 0,
      "yellowCards": 4,
      "redCards": 0
    },
    "attributes": {
      "pace": 65,
      "dribbling": 57,
      "passing": 63,
      "defending": 79,
      "physicality": 63,
      "tactical": 70,
      "workrate": 71
    },
    "detailedStats": {
      "goalsPer90": 0.0,
      "shotsOnTargetPer90": 0.5,
      "expectedGoals": 0.1,
      "shotConversionRate": 10.0,
      "touchesInBoxPer90": 0.6,
      "chancesCreated": 6,
      "dribblesCompletedPer90": 0.6,
      "keyPassesPer90": 0.29,
      "tacklesWonPer90": 1.4,
      "interceptionsPer90": 0.9,
      "clearancesPer90": 2.2,
      "aerialDuelWinPercentage": 61.6,
      "tackledDribblerRate": 52.0,
      "progressivePassesPer90": 1.8,
      "longPassesCompletedPer90": 1.2,
      "passingAccuracy": 81.0
    },
    "leagueBenchmarks": [
      {
        "metric": "Passing Accuracy %",
        "player": 81.0,
        "avg": 82.0,
        "elite": 89.0
      },
      {
        "metric": "Clearances per 90",
        "player": 2.2,
        "avg": 2.6,
        "elite": 4.0
      },
      {
        "metric": "Aerial Duel Win %",
        "player": 61.6,
        "avg": 54.5,
        "elite": 68.0
      },
      {
        "metric": "Tackles Won per 90",
        "player": 1.4,
        "avg": 1.1,
        "elite": 2.0
      }
    ],
    "heatmap": [
      {
        "x": 50,
        "y": 20,
        "r": 45,
        "v": 0.9
      },
      {
        "x": 42,
        "y": 18,
        "r": 32,
        "v": 0.8
      },
      {
        "x": 58,
        "y": 18,
        "r": 32,
        "v": 0.8
      },
      {
        "x": 50,
        "y": 10,
        "r": 28,
        "v": 0.6
      }
    ],
    "strengths": [
      "Defending",
      "Workrate"
    ],
    "weaknesses": [
      "Dribbling",
      "Physicality"
    ]
  },
  {
    "id": "hugo-bueno-l\u00f3pez",
    "name": "Hugo Bueno L\u00f3pez",
    "age": 23,
    "position": "DF",
    "role": "Attacking Fullback",
    "club": "Wolves",
    "league": "Premier League",
    "nation": "England",
    "value": 25800000,
    "rating": 81,
    "general": {
      "apps": 26,
      "mins": 2359,
      "goals": 1,
      "assists": 3,
      "yellowCards": 3,
      "redCards": 0
    },
    "attributes": {
      "pace": 71,
      "dribbling": 88,
      "passing": 97,
      "defending": 94,
      "physicality": 91,
      "tactical": 95,
      "workrate": 93
    },
    "detailedStats": {
      "goalsPer90": 0.04,
      "shotsOnTargetPer90": 0.6,
      "expectedGoals": 0.9,
      "shotConversionRate": 11.2,
      "touchesInBoxPer90": 1.1,
      "chancesCreated": 84,
      "dribblesCompletedPer90": 2.6,
      "keyPassesPer90": 1.29,
      "tacklesWonPer90": 2.8,
      "interceptionsPer90": 1.3,
      "clearancesPer90": 4.3,
      "aerialDuelWinPercentage": 80.0,
      "tackledDribblerRate": 64.0,
      "progressivePassesPer90": 4.9,
      "longPassesCompletedPer90": 3.2,
      "passingAccuracy": 93.5
    },
    "leagueBenchmarks": [
      {
        "metric": "Passing Accuracy %",
        "player": 93.5,
        "avg": 82.0,
        "elite": 89.0
      },
      {
        "metric": "Clearances per 90",
        "player": 4.3,
        "avg": 2.6,
        "elite": 4.0
      },
      {
        "metric": "Aerial Duel Win %",
        "player": 80.0,
        "avg": 54.5,
        "elite": 68.0
      },
      {
        "metric": "Tackles Won per 90",
        "player": 2.8,
        "avg": 1.1,
        "elite": 2.0
      }
    ],
    "heatmap": [
      {
        "x": 86,
        "y": 25,
        "r": 38,
        "v": 0.8
      },
      {
        "x": 86,
        "y": 45,
        "r": 40,
        "v": 0.85
      },
      {
        "x": 86,
        "y": 65,
        "r": 35,
        "v": 0.7
      },
      {
        "x": 86,
        "y": 12,
        "r": 30,
        "v": 0.6
      }
    ],
    "strengths": [
      "Passing",
      "Tactical awareness",
      "Aerial Dominance"
    ],
    "weaknesses": [
      "Dribbling",
      "Pace"
    ]
  },
  {
    "id": "yerson-mosquera-valdelamar",
    "name": "Yerson Mosquera Valdelamar",
    "age": 24,
    "position": "DF",
    "role": "Attacking Fullback",
    "club": "Wolves",
    "league": "Premier League",
    "nation": "Spain",
    "value": 25800000,
    "rating": 78,
    "general": {
      "apps": 24,
      "mins": 2137,
      "goals": 0,
      "assists": 0,
      "yellowCards": 12,
      "redCards": 0
    },
    "attributes": {
      "pace": 75,
      "dribbling": 71,
      "passing": 69,
      "defending": 94,
      "physicality": 83,
      "tactical": 85,
      "workrate": 90
    },
    "detailedStats": {
      "goalsPer90": 0.0,
      "shotsOnTargetPer90": 0.5,
      "expectedGoals": 2.5,
      "shotConversionRate": 10.0,
      "touchesInBoxPer90": 1.4,
      "chancesCreated": 17,
      "dribblesCompletedPer90": 0.9,
      "keyPassesPer90": 0.3,
      "tacklesWonPer90": 2.4,
      "interceptionsPer90": 1.1,
      "clearancesPer90": 3.6,
      "aerialDuelWinPercentage": 76.3,
      "tackledDribblerRate": 58.4,
      "progressivePassesPer90": 2.2,
      "longPassesCompletedPer90": 1.5,
      "passingAccuracy": 82.8
    },
    "leagueBenchmarks": [
      {
        "metric": "Passing Accuracy %",
        "player": 82.8,
        "avg": 82.0,
        "elite": 89.0
      },
      {
        "metric": "Clearances per 90",
        "player": 3.6,
        "avg": 2.6,
        "elite": 4.0
      },
      {
        "metric": "Aerial Duel Win %",
        "player": 76.3,
        "avg": 54.5,
        "elite": 68.0
      },
      {
        "metric": "Tackles Won per 90",
        "player": 2.4,
        "avg": 1.1,
        "elite": 2.0
      }
    ],
    "heatmap": [
      {
        "x": 14,
        "y": 25,
        "r": 38,
        "v": 0.8
      },
      {
        "x": 14,
        "y": 45,
        "r": 40,
        "v": 0.85
      },
      {
        "x": 14,
        "y": 65,
        "r": 35,
        "v": 0.7
      },
      {
        "x": 14,
        "y": 12,
        "r": 30,
        "v": 0.6
      }
    ],
    "strengths": [
      "Defending",
      "Workrate",
      "Aerial Dominance"
    ],
    "weaknesses": [
      "Dribbling",
      "Passing"
    ]
  },
  {
    "id": "rodrigo-martins-gomes",
    "name": "Rodrigo Martins Gomes",
    "age": 25,
    "position": "DF",
    "role": "Attacking Fullback",
    "club": "Wolves",
    "league": "Premier League",
    "nation": "France",
    "value": 26400000,
    "rating": 76,
    "general": {
      "apps": 9,
      "mins": 954,
      "goals": 3,
      "assists": 0,
      "yellowCards": 0,
      "redCards": 0
    },
    "attributes": {
      "pace": 73,
      "dribbling": 66,
      "passing": 65,
      "defending": 83,
      "physicality": 67,
      "tactical": 77,
      "workrate": 73
    },
    "detailedStats": {
      "goalsPer90": 0.28,
      "shotsOnTargetPer90": 0.9,
      "expectedGoals": 2.1,
      "shotConversionRate": 13.6,
      "touchesInBoxPer90": 1.2,
      "chancesCreated": 9,
      "dribblesCompletedPer90": 0.7,
      "keyPassesPer90": 0.36,
      "tacklesWonPer90": 1.6,
      "interceptionsPer90": 1.0,
      "clearancesPer90": 2.4,
      "aerialDuelWinPercentage": 64.3,
      "tackledDribblerRate": 54.8,
      "progressivePassesPer90": 1.9,
      "longPassesCompletedPer90": 1.3,
      "passingAccuracy": 81.5
    },
    "leagueBenchmarks": [
      {
        "metric": "Passing Accuracy %",
        "player": 81.5,
        "avg": 82.0,
        "elite": 89.0
      },
      {
        "metric": "Clearances per 90",
        "player": 2.4,
        "avg": 2.6,
        "elite": 4.0
      },
      {
        "metric": "Aerial Duel Win %",
        "player": 64.3,
        "avg": 54.5,
        "elite": 68.0
      },
      {
        "metric": "Tackles Won per 90",
        "player": 1.6,
        "avg": 1.1,
        "elite": 2.0
      }
    ],
    "heatmap": [
      {
        "x": 86,
        "y": 25,
        "r": 38,
        "v": 0.8
      },
      {
        "x": 86,
        "y": 45,
        "r": 40,
        "v": 0.85
      },
      {
        "x": 86,
        "y": 65,
        "r": 35,
        "v": 0.7
      },
      {
        "x": 86,
        "y": 12,
        "r": 30,
        "v": 0.6
      }
    ],
    "strengths": [
      "Defending",
      "Tactical awareness"
    ],
    "weaknesses": [
      "Dribbling",
      "Passing"
    ]
  },
  {
    "id": "santiago-ignacio-bueno",
    "name": "Santiago Ignacio Bueno",
    "age": 26,
    "position": "DF",
    "role": "Attacking Fullback",
    "club": "Wolves",
    "league": "Premier League",
    "nation": "England",
    "value": 26400000,
    "rating": 83,
    "general": {
      "apps": 28,
      "mins": 2552,
      "goals": 3,
      "assists": 2,
      "yellowCards": 4,
      "redCards": 0
    },
    "attributes": {
      "pace": 75,
      "dribbling": 70,
      "passing": 68,
      "defending": 94,
      "physicality": 94,
      "tactical": 90,
      "workrate": 96
    },
    "detailedStats": {
      "goalsPer90": 0.11,
      "shotsOnTargetPer90": 0.7,
      "expectedGoals": 2.3,
      "shotConversionRate": 13.6,
      "touchesInBoxPer90": 1.4,
      "chancesCreated": 16,
      "dribblesCompletedPer90": 0.8,
      "keyPassesPer90": 0.23,
      "tacklesWonPer90": 3.0,
      "interceptionsPer90": 1.1,
      "clearancesPer90": 4.6,
      "aerialDuelWinPercentage": 80.0,
      "tackledDribblerRate": 60.0,
      "progressivePassesPer90": 2.2,
      "longPassesCompletedPer90": 1.4,
      "passingAccuracy": 82.6
    },
    "leagueBenchmarks": [
      {
        "metric": "Passing Accuracy %",
        "player": 82.6,
        "avg": 82.0,
        "elite": 89.0
      },
      {
        "metric": "Clearances per 90",
        "player": 4.6,
        "avg": 2.6,
        "elite": 4.0
      },
      {
        "metric": "Aerial Duel Win %",
        "player": 80.0,
        "avg": 54.5,
        "elite": 68.0
      },
      {
        "metric": "Tackles Won per 90",
        "player": 3.0,
        "avg": 1.1,
        "elite": 2.0
      }
    ],
    "heatmap": [
      {
        "x": 14,
        "y": 25,
        "r": 38,
        "v": 0.8
      },
      {
        "x": 14,
        "y": 45,
        "r": 40,
        "v": 0.85
      },
      {
        "x": 14,
        "y": 65,
        "r": 35,
        "v": 0.7
      },
      {
        "x": 14,
        "y": 12,
        "r": 30,
        "v": 0.6
      }
    ],
    "strengths": [
      "Defending",
      "Workrate",
      "Aerial Dominance"
    ],
    "weaknesses": [
      "Dribbling",
      "Passing"
    ]
  },
  {
    "id": "toti-gomes",
    "name": "Toti Gomes",
    "age": 27,
    "position": "DF",
    "role": "Central Defender",
    "club": "Wolves",
    "league": "Premier League",
    "nation": "Brazil",
    "value": 25200000,
    "rating": 75,
    "general": {
      "apps": 17,
      "mins": 1423,
      "goals": 0,
      "assists": 0,
      "yellowCards": 1,
      "redCards": 1
    },
    "attributes": {
      "pace": 67,
      "dribbling": 61,
      "passing": 66,
      "defending": 92,
      "physicality": 78,
      "tactical": 77,
      "workrate": 80
    },
    "detailedStats": {
      "goalsPer90": 0.0,
      "shotsOnTargetPer90": 0.5,
      "expectedGoals": 0.5,
      "shotConversionRate": 10.0,
      "touchesInBoxPer90": 0.7,
      "chancesCreated": 11,
      "dribblesCompletedPer90": 0.7,
      "keyPassesPer90": 0.29,
      "tacklesWonPer90": 2.2,
      "interceptionsPer90": 1.0,
      "clearancesPer90": 3.2,
      "aerialDuelWinPercentage": 72.5,
      "tackledDribblerRate": 55.2,
      "progressivePassesPer90": 2.0,
      "longPassesCompletedPer90": 1.3,
      "passingAccuracy": 81.9
    },
    "leagueBenchmarks": [
      {
        "metric": "Passing Accuracy %",
        "player": 81.9,
        "avg": 82.0,
        "elite": 89.0
      },
      {
        "metric": "Clearances per 90",
        "player": 3.2,
        "avg": 2.6,
        "elite": 4.0
      },
      {
        "metric": "Aerial Duel Win %",
        "player": 72.5,
        "avg": 54.5,
        "elite": 68.0
      },
      {
        "metric": "Tackles Won per 90",
        "player": 2.2,
        "avg": 1.1,
        "elite": 2.0
      }
    ],
    "heatmap": [
      {
        "x": 50,
        "y": 20,
        "r": 45,
        "v": 0.9
      },
      {
        "x": 42,
        "y": 18,
        "r": 32,
        "v": 0.8
      },
      {
        "x": 58,
        "y": 18,
        "r": 32,
        "v": 0.8
      },
      {
        "x": 50,
        "y": 10,
        "r": 28,
        "v": 0.6
      }
    ],
    "strengths": [
      "Defending",
      "Workrate",
      "Aerial Dominance"
    ],
    "weaknesses": [
      "Dribbling",
      "Passing"
    ]
  },
  {
    "id": "ki-jana-hoever",
    "name": "Ki-Jana Hoever",
    "age": 28,
    "position": "DF",
    "role": "Central Defender",
    "club": "Wolves",
    "league": "Premier League",
    "nation": "Spain",
    "value": 22800000,
    "rating": 71,
    "general": {
      "apps": 6,
      "mins": 423,
      "goals": 0,
      "assists": 0,
      "yellowCards": 0,
      "redCards": 0
    },
    "attributes": {
      "pace": 65,
      "dribbling": 59,
      "passing": 65,
      "defending": 78,
      "physicality": 61,
      "tactical": 70,
      "workrate": 66
    },
    "detailedStats": {
      "goalsPer90": 0.0,
      "shotsOnTargetPer90": 0.5,
      "expectedGoals": 0.0,
      "shotConversionRate": 10.0,
      "touchesInBoxPer90": 0.5,
      "chancesCreated": 10,
      "dribblesCompletedPer90": 0.7,
      "keyPassesPer90": 0.93,
      "tacklesWonPer90": 1.3,
      "interceptionsPer90": 0.9,
      "clearancesPer90": 2.0,
      "aerialDuelWinPercentage": 60.1,
      "tackledDribblerRate": 52.0,
      "progressivePassesPer90": 1.9,
      "longPassesCompletedPer90": 1.3,
      "passingAccuracy": 81.8
    },
    "leagueBenchmarks": [
      {
        "metric": "Passing Accuracy %",
        "player": 81.8,
        "avg": 82.0,
        "elite": 89.0
      },
      {
        "metric": "Clearances per 90",
        "player": 2.0,
        "avg": 2.6,
        "elite": 4.0
      },
      {
        "metric": "Aerial Duel Win %",
        "player": 60.1,
        "avg": 54.5,
        "elite": 68.0
      },
      {
        "metric": "Tackles Won per 90",
        "player": 1.3,
        "avg": 1.1,
        "elite": 2.0
      }
    ],
    "heatmap": [
      {
        "x": 50,
        "y": 20,
        "r": 45,
        "v": 0.9
      },
      {
        "x": 42,
        "y": 18,
        "r": 32,
        "v": 0.8
      },
      {
        "x": 58,
        "y": 18,
        "r": 32,
        "v": 0.8
      },
      {
        "x": 50,
        "y": 10,
        "r": 28,
        "v": 0.6
      }
    ],
    "strengths": [
      "Defending",
      "Tactical awareness"
    ],
    "weaknesses": [
      "Dribbling",
      "Physicality"
    ]
  },
  {
    "id": "pedro-cardoso-de-lima",
    "name": "Pedro Cardoso de Lima",
    "age": 30,
    "position": "DF",
    "role": "Central Defender",
    "club": "Wolves",
    "league": "Premier League",
    "nation": "France",
    "value": 24000000,
    "rating": 71,
    "general": {
      "apps": 3,
      "mins": 257,
      "goals": 0,
      "assists": 0,
      "yellowCards": 0,
      "redCards": 0
    },
    "attributes": {
      "pace": 66,
      "dribbling": 58,
      "passing": 63,
      "defending": 74,
      "physicality": 57,
      "tactical": 68,
      "workrate": 63
    },
    "detailedStats": {
      "goalsPer90": 0.0,
      "shotsOnTargetPer90": 0.5,
      "expectedGoals": 0.3,
      "shotConversionRate": 10.0,
      "touchesInBoxPer90": 0.6,
      "chancesCreated": 6,
      "dribblesCompletedPer90": 0.6,
      "keyPassesPer90": 0.85,
      "tacklesWonPer90": 1.1,
      "interceptionsPer90": 0.8,
      "clearancesPer90": 1.7,
      "aerialDuelWinPercentage": 56.8,
      "tackledDribblerRate": 51.2,
      "progressivePassesPer90": 1.7,
      "longPassesCompletedPer90": 1.2,
      "passingAccuracy": 81.0
    },
    "leagueBenchmarks": [
      {
        "metric": "Passing Accuracy %",
        "player": 81.0,
        "avg": 82.0,
        "elite": 89.0
      },
      {
        "metric": "Clearances per 90",
        "player": 1.7,
        "avg": 2.6,
        "elite": 4.0
      },
      {
        "metric": "Aerial Duel Win %",
        "player": 56.8,
        "avg": 54.5,
        "elite": 68.0
      },
      {
        "metric": "Tackles Won per 90",
        "player": 1.1,
        "avg": 1.1,
        "elite": 2.0
      }
    ],
    "heatmap": [
      {
        "x": 50,
        "y": 20,
        "r": 45,
        "v": 0.9
      },
      {
        "x": 42,
        "y": 18,
        "r": 32,
        "v": 0.8
      },
      {
        "x": 58,
        "y": 18,
        "r": 32,
        "v": 0.8
      },
      {
        "x": 50,
        "y": 10,
        "r": 28,
        "v": 0.6
      }
    ],
    "strengths": [
      "Defending",
      "Tactical awareness"
    ],
    "weaknesses": [
      "Dribbling",
      "Physicality"
    ]
  },
  {
    "id": "hwang-hee-chan",
    "name": "Hwang Hee-chan",
    "age": 32,
    "position": "MF",
    "role": "Box-to-Box Midfielder",
    "club": "Wolves",
    "league": "Premier League",
    "nation": "England",
    "value": 33600000,
    "rating": 77,
    "general": {
      "apps": 18,
      "mins": 1439,
      "goals": 2,
      "assists": 2,
      "yellowCards": 5,
      "redCards": 0
    },
    "attributes": {
      "pace": 68,
      "dribbling": 70,
      "passing": 74,
      "defending": 60,
      "physicality": 65,
      "tactical": 78,
      "workrate": 80
    },
    "detailedStats": {
      "goalsPer90": 0.13,
      "shotsOnTargetPer90": 0.7,
      "expectedGoals": 2.4,
      "shotConversionRate": 12.4,
      "touchesInBoxPer90": 1.1,
      "chancesCreated": 27,
      "dribblesCompletedPer90": 1.1,
      "keyPassesPer90": 0.68,
      "passingAccuracy": 85.6,
      "progressivePassesPer90": 4.2,
      "tacklesWonPer90": 1.3,
      "interceptionsPer90": 0.6,
      "ballRecoveriesPer90": 4.6
    },
    "leagueBenchmarks": [
      {
        "metric": "Key Passes per 90",
        "player": 0.68,
        "avg": 0.9,
        "elite": 2.2
      },
      {
        "metric": "Progressive Passes p90",
        "player": 4.2,
        "avg": 2.8,
        "elite": 6.2
      },
      {
        "metric": "Chances Created",
        "player": 27,
        "avg": 16,
        "elite": 55
      },
      {
        "metric": "Passing Accuracy %",
        "player": 85.6,
        "avg": 79.5,
        "elite": 87.0
      }
    ],
    "heatmap": [
      {
        "x": 50,
        "y": 42,
        "r: ": 45,
        "v": 0.9
      },
      {
        "x": 44,
        "y": 35,
        "r": 38,
        "v": 0.8
      },
      {
        "x": 56,
        "y": 35,
        "r": 38,
        "v": 0.8
      },
      {
        "x": 50,
        "y": 55,
        "r": 35,
        "v": 0.75
      }
    ],
    "strengths": [
      "Workrate",
      "Tactical awareness"
    ],
    "weaknesses": [
      "Defending",
      "Physicality"
    ]
  },
  {
    "id": "andr\u00e9-trindade-da-costa-neto",
    "name": "Andr\u00e9 Trindade da Costa Neto",
    "age": 33,
    "position": "MF",
    "role": "Box-to-Box Midfielder",
    "club": "Wolves",
    "league": "Premier League",
    "nation": "Spain",
    "value": 31200000,
    "rating": 83,
    "general": {
      "apps": 30,
      "mins": 2760,
      "goals": 1,
      "assists": 0,
      "yellowCards": 12,
      "redCards": 0
    },
    "attributes": {
      "pace": 62,
      "dribbling": 69,
      "passing": 81,
      "defending": 78,
      "physicality": 83,
      "tactical": 84,
      "workrate": 96
    },
    "detailedStats": {
      "goalsPer90": 0.03,
      "shotsOnTargetPer90": 0.5,
      "expectedGoals": 0.5,
      "shotConversionRate": 11.2,
      "touchesInBoxPer90": 0.7,
      "chancesCreated": 40,
      "dribblesCompletedPer90": 1.5,
      "keyPassesPer90": 0.52,
      "passingAccuracy": 87.3,
      "progressivePassesPer90": 5.2,
      "tacklesWonPer90": 2.2,
      "interceptionsPer90": 0.7,
      "ballRecoveriesPer90": 6.3
    },
    "leagueBenchmarks": [
      {
        "metric": "Key Passes per 90",
        "player": 0.52,
        "avg": 0.9,
        "elite": 2.2
      },
      {
        "metric": "Progressive Passes p90",
        "player": 5.2,
        "avg": 2.8,
        "elite": 6.2
      },
      {
        "metric": "Chances Created",
        "player": 40,
        "avg": 16,
        "elite": 55
      },
      {
        "metric": "Passing Accuracy %",
        "player": 87.3,
        "avg": 79.5,
        "elite": 87.0
      }
    ],
    "heatmap": [
      {
        "x": 50,
        "y": 42,
        "r: ": 45,
        "v": 0.9
      },
      {
        "x": 44,
        "y": 35,
        "r": 38,
        "v": 0.8
      },
      {
        "x": 56,
        "y": 35,
        "r": 38,
        "v": 0.8
      },
      {
        "x": 50,
        "y": 55,
        "r": 35,
        "v": 0.75
      }
    ],
    "strengths": [
      "Workrate",
      "Tactical awareness"
    ],
    "weaknesses": [
      "Dribbling",
      "Pace"
    ]
  },
  {
    "id": "jean-ricner-bellegarde",
    "name": "Jean-Ricner Bellegarde",
    "age": 34,
    "position": "MF",
    "role": "Box-to-Box Midfielder",
    "club": "Wolves",
    "league": "Premier League",
    "nation": "Brazil",
    "value": 30600000,
    "rating": 76,
    "general": {
      "apps": 15,
      "mins": 1239,
      "goals": 1,
      "assists": 1,
      "yellowCards": 5,
      "redCards": 0
    },
    "attributes": {
      "pace": 67,
      "dribbling": 69,
      "passing": 74,
      "defending": 63,
      "physicality": 68,
      "tactical": 78,
      "workrate": 77
    },
    "detailedStats": {
      "goalsPer90": 0.07,
      "shotsOnTargetPer90": 0.6,
      "expectedGoals": 1.0,
      "shotConversionRate": 11.2,
      "touchesInBoxPer90": 1.0,
      "chancesCreated": 26,
      "dribblesCompletedPer90": 1.1,
      "keyPassesPer90": 0.76,
      "passingAccuracy": 85.5,
      "progressivePassesPer90": 4.1,
      "tacklesWonPer90": 1.5,
      "interceptionsPer90": 0.6,
      "ballRecoveriesPer90": 4.8
    },
    "leagueBenchmarks": [
      {
        "metric": "Key Passes per 90",
        "player": 0.76,
        "avg": 0.9,
        "elite": 2.2
      },
      {
        "metric": "Progressive Passes p90",
        "player": 4.1,
        "avg": 2.8,
        "elite": 6.2
      },
      {
        "metric": "Chances Created",
        "player": 26,
        "avg": 16,
        "elite": 55
      },
      {
        "metric": "Passing Accuracy %",
        "player": 85.5,
        "avg": 79.5,
        "elite": 87.0
      }
    ],
    "heatmap": [
      {
        "x": 50,
        "y": 42,
        "r: ": 45,
        "v": 0.9
      },
      {
        "x": 44,
        "y": 35,
        "r": 38,
        "v": 0.8
      },
      {
        "x": 56,
        "y": 35,
        "r": 38,
        "v": 0.8
      },
      {
        "x": 50,
        "y": 55,
        "r": 35,
        "v": 0.75
      }
    ],
    "strengths": [
      "Workrate",
      "Tactical awareness"
    ],
    "weaknesses": [
      "Defending",
      "Pace"
    ]
  },
  {
    "id": "fer-l\u00f3pez-gonz\u00e1lez",
    "name": "Fer L\u00f3pez Gonz\u00e1lez",
    "age": 20,
    "position": "MF",
    "role": "Box-to-Box Midfielder",
    "club": "Wolves",
    "league": "Premier League",
    "nation": "England",
    "value": 30600000,
    "rating": 71,
    "general": {
      "apps": 2,
      "mins": 228,
      "goals": 0,
      "assists": 1,
      "yellowCards": 1,
      "redCards": 0
    },
    "attributes": {
      "pace": 61,
      "dribbling": 58,
      "passing": 64,
      "defending": 51,
      "physicality": 56,
      "tactical": 68,
      "workrate": 63
    },
    "detailedStats": {
      "goalsPer90": 0.0,
      "shotsOnTargetPer90": 0.5,
      "expectedGoals": 0.2,
      "shotConversionRate": 10.0,
      "touchesInBoxPer90": 0.6,
      "chancesCreated": 7,
      "dribblesCompletedPer90": 0.6,
      "keyPassesPer90": 1.2,
      "passingAccuracy": 83.0,
      "progressivePassesPer90": 2.6,
      "tacklesWonPer90": 0.9,
      "interceptionsPer90": 0.5,
      "ballRecoveriesPer90": 3.7
    },
    "leagueBenchmarks": [
      {
        "metric": "Key Passes per 90",
        "player": 1.2,
        "avg": 0.9,
        "elite": 2.2
      },
      {
        "metric": "Progressive Passes p90",
        "player": 2.6,
        "avg": 2.8,
        "elite": 6.2
      },
      {
        "metric": "Chances Created",
        "player": 7,
        "avg": 16,
        "elite": 55
      },
      {
        "metric": "Passing Accuracy %",
        "player": 83.0,
        "avg": 79.5,
        "elite": 87.0
      }
    ],
    "heatmap": [
      {
        "x": 50,
        "y": 42,
        "r: ": 45,
        "v": 0.9
      },
      {
        "x": 44,
        "y": 35,
        "r": 38,
        "v": 0.8
      },
      {
        "x": 56,
        "y": 35,
        "r": 38,
        "v": 0.8
      },
      {
        "x": 50,
        "y": 55,
        "r": 35,
        "v": 0.75
      }
    ],
    "strengths": [
      "Passing",
      "Tactical awareness"
    ],
    "weaknesses": [
      "Defending",
      "Physicality"
    ]
  },
  {
    "id": "jo\u00e3o-victor-gomes-da-silva",
    "name": "Jo\u00e3o Victor Gomes da Silva",
    "age": 21,
    "position": "MF",
    "role": "Attacking Playmaker",
    "club": "Wolves",
    "league": "Premier League",
    "nation": "Spain",
    "value": 31800000,
    "rating": 85,
    "general": {
      "apps": 32,
      "mins": 2829,
      "goals": 1,
      "assists": 2,
      "yellowCards": 10,
      "redCards": 0
    },
    "attributes": {
      "pace": 68,
      "dribbling": 76,
      "passing": 83,
      "defending": 82,
      "physicality": 87,
      "tactical": 90,
      "workrate": 96
    },
    "detailedStats": {
      "goalsPer90": 0.03,
      "shotsOnTargetPer90": 0.5,
      "expectedGoals": 1.3,
      "shotConversionRate": 11.2,
      "touchesInBoxPer90": 1.1,
      "chancesCreated": 44,
      "dribblesCompletedPer90": 1.6,
      "keyPassesPer90": 0.56,
      "passingAccuracy": 87.9,
      "progressivePassesPer90": 5.5,
      "tacklesWonPer90": 2.4,
      "interceptionsPer90": 0.8,
      "ballRecoveriesPer90": 6.7
    },
    "leagueBenchmarks": [
      {
        "metric": "Key Passes per 90",
        "player": 0.56,
        "avg": 0.9,
        "elite": 2.2
      },
      {
        "metric": "Progressive Passes p90",
        "player": 5.5,
        "avg": 2.8,
        "elite": 6.2
      },
      {
        "metric": "Chances Created",
        "player": 44,
        "avg": 16,
        "elite": 55
      },
      {
        "metric": "Passing Accuracy %",
        "player": 87.9,
        "avg": 79.5,
        "elite": 87.0
      }
    ],
    "heatmap": [
      {
        "x": 50,
        "y": 64,
        "r": 42,
        "v": 0.9
      },
      {
        "x": 40,
        "y": 55,
        "r": 35,
        "v": 0.75
      },
      {
        "x": 60,
        "y": 55,
        "r": 35,
        "v": 0.75
      },
      {
        "x": 50,
        "y": 76,
        "r": 30,
        "v": 0.8
      }
    ],
    "strengths": [
      "Workrate",
      "Tactical awareness"
    ],
    "weaknesses": [
      "Dribbling",
      "Pace"
    ]
  },
  {
    "id": "marshall-munetsi",
    "name": "Marshall Munetsi",
    "age": 23,
    "position": "MF",
    "role": "Box-to-Box Midfielder",
    "club": "Wolves",
    "league": "Premier League",
    "nation": "England",
    "value": 31800000,
    "rating": 75,
    "general": {
      "apps": 9,
      "mins": 872,
      "goals": 1,
      "assists": 2,
      "yellowCards": 2,
      "redCards": 0
    },
    "attributes": {
      "pace": 69,
      "dribbling": 65,
      "passing": 64,
      "defending": 60,
      "physicality": 65,
      "tactical": 75,
      "workrate": 72
    },
    "detailedStats": {
      "goalsPer90": 0.1,
      "shotsOnTargetPer90": 0.7,
      "expectedGoals": 1.6,
      "shotConversionRate": 11.2,
      "touchesInBoxPer90": 1.2,
      "chancesCreated": 7,
      "dribblesCompletedPer90": 0.6,
      "keyPassesPer90": 0.32,
      "passingAccuracy": 83.0,
      "progressivePassesPer90": 2.6,
      "tacklesWonPer90": 1.3,
      "interceptionsPer90": 0.6,
      "ballRecoveriesPer90": 4.6
    },
    "leagueBenchmarks": [
      {
        "metric": "Key Passes per 90",
        "player": 0.32,
        "avg": 0.9,
        "elite": 2.2
      },
      {
        "metric": "Progressive Passes p90",
        "player": 2.6,
        "avg": 2.8,
        "elite": 6.2
      },
      {
        "metric": "Chances Created",
        "player": 7,
        "avg": 16,
        "elite": 55
      },
      {
        "metric": "Passing Accuracy %",
        "player": 83.0,
        "avg": 79.5,
        "elite": 87.0
      }
    ],
    "heatmap": [
      {
        "x": 50,
        "y": 42,
        "r: ": 45,
        "v": 0.9
      },
      {
        "x": 44,
        "y": 35,
        "r": 38,
        "v": 0.8
      },
      {
        "x": 56,
        "y": 35,
        "r": 38,
        "v": 0.8
      },
      {
        "x": 50,
        "y": 55,
        "r": 35,
        "v": 0.75
      }
    ],
    "strengths": [
      "Workrate",
      "Tactical awareness"
    ],
    "weaknesses": [
      "Passing",
      "Defending"
    ]
  },
  {
    "id": "jhon-arias",
    "name": "Jhon Arias",
    "age": 23,
    "position": "MF",
    "role": "Box-to-Box Midfielder",
    "club": "Wolves",
    "league": "Premier League",
    "nation": "England",
    "value": 29400000,
    "rating": 76,
    "general": {
      "apps": 14,
      "mins": 1117,
      "goals": 1,
      "assists": 0,
      "yellowCards": 1,
      "redCards": 0
    },
    "attributes": {
      "pace": 67,
      "dribbling": 69,
      "passing": 73,
      "defending": 61,
      "physicality": 66,
      "tactical": 78,
      "workrate": 75
    },
    "detailedStats": {
      "goalsPer90": 0.08,
      "shotsOnTargetPer90": 0.6,
      "expectedGoals": 3.4,
      "shotConversionRate": 11.2,
      "touchesInBoxPer90": 1.0,
      "chancesCreated": 25,
      "dribblesCompletedPer90": 1.1,
      "keyPassesPer90": 0.82,
      "passingAccuracy": 85.4,
      "progressivePassesPer90": 4.0,
      "tacklesWonPer90": 1.4,
      "interceptionsPer90": 0.6,
      "ballRecoveriesPer90": 4.6
    },
    "leagueBenchmarks": [
      {
        "metric": "Key Passes per 90",
        "player": 0.82,
        "avg": 0.9,
        "elite": 2.2
      },
      {
        "metric": "Progressive Passes p90",
        "player": 4.0,
        "avg": 2.8,
        "elite": 6.2
      },
      {
        "metric": "Chances Created",
        "player": 25,
        "avg": 16,
        "elite": 55
      },
      {
        "metric": "Passing Accuracy %",
        "player": 85.4,
        "avg": 79.5,
        "elite": 87.0
      }
    ],
    "heatmap": [
      {
        "x": 50,
        "y": 42,
        "r: ": 45,
        "v": 0.9
      },
      {
        "x": 44,
        "y": 35,
        "r": 38,
        "v": 0.8
      },
      {
        "x": 56,
        "y": 35,
        "r": 38,
        "v": 0.8
      },
      {
        "x": 50,
        "y": 55,
        "r": 35,
        "v": 0.75
      }
    ],
    "strengths": [
      "Workrate",
      "Tactical awareness"
    ],
    "weaknesses": [
      "Defending",
      "Physicality"
    ]
  },
  {
    "id": "david-m\u00f8ller-wolfe",
    "name": "David M\u00f8ller Wolfe",
    "age": 27,
    "position": "DF",
    "role": "Central Defender",
    "club": "Wolves",
    "league": "Premier League",
    "nation": "Spain",
    "value": 25200000,
    "rating": 75,
    "general": {
      "apps": 11,
      "mins": 1042,
      "goals": 0,
      "assists": 2,
      "yellowCards": 1,
      "redCards": 0
    },
    "attributes": {
      "pace": 66,
      "dribbling": 61,
      "passing": 68,
      "defending": 81,
      "physicality": 65,
      "tactical": 73,
      "workrate": 74
    },
    "detailedStats": {
      "goalsPer90": 0.0,
      "shotsOnTargetPer90": 0.5,
      "expectedGoals": 0.1,
      "shotConversionRate": 10.0,
      "touchesInBoxPer90": 0.7,
      "chancesCreated": 15,
      "dribblesCompletedPer90": 0.8,
      "keyPassesPer90": 0.55,
      "tacklesWonPer90": 1.5,
      "interceptionsPer90": 0.9,
      "clearancesPer90": 2.3,
      "aerialDuelWinPercentage": 63.0,
      "tackledDribblerRate": 53.3,
      "progressivePassesPer90": 2.1,
      "longPassesCompletedPer90": 1.4,
      "passingAccuracy": 82.5
    },
    "leagueBenchmarks": [
      {
        "metric": "Passing Accuracy %",
        "player": 82.5,
        "avg": 82.0,
        "elite": 89.0
      },
      {
        "metric": "Clearances per 90",
        "player": 2.3,
        "avg": 2.6,
        "elite": 4.0
      },
      {
        "metric": "Aerial Duel Win %",
        "player": 63.0,
        "avg": 54.5,
        "elite": 68.0
      },
      {
        "metric": "Tackles Won per 90",
        "player": 1.5,
        "avg": 1.1,
        "elite": 2.0
      }
    ],
    "heatmap": [
      {
        "x": 50,
        "y": 20,
        "r": 45,
        "v": 0.9
      },
      {
        "x": 42,
        "y": 18,
        "r": 32,
        "v": 0.8
      },
      {
        "x": 58,
        "y": 18,
        "r": 32,
        "v": 0.8
      },
      {
        "x": 50,
        "y": 10,
        "r": 28,
        "v": 0.6
      }
    ],
    "strengths": [
      "Defending",
      "Workrate"
    ],
    "weaknesses": [
      "Dribbling",
      "Physicality"
    ]
  },
  {
    "id": "jackson-tchatchoua",
    "name": "Jackson Tchatchoua",
    "age": 25,
    "position": "DF",
    "role": "Attacking Fullback",
    "club": "Wolves",
    "league": "Premier League",
    "nation": "France",
    "value": 26400000,
    "rating": 77,
    "general": {
      "apps": 19,
      "mins": 1834,
      "goals": 0,
      "assists": 1,
      "yellowCards": 3,
      "redCards": 0
    },
    "attributes": {
      "pace": 67,
      "dribbling": 71,
      "passing": 83,
      "defending": 91,
      "physicality": 76,
      "tactical": 83,
      "workrate": 86
    },
    "detailedStats": {
      "goalsPer90": 0.0,
      "shotsOnTargetPer90": 0.5,
      "expectedGoals": 0.3,
      "shotConversionRate": 10.0,
      "touchesInBoxPer90": 0.7,
      "chancesCreated": 43,
      "dribblesCompletedPer90": 1.6,
      "keyPassesPer90": 0.86,
      "tacklesWonPer90": 2.1,
      "interceptionsPer90": 1.0,
      "clearancesPer90": 3.1,
      "aerialDuelWinPercentage": 70.9,
      "tackledDribblerRate": 57.4,
      "progressivePassesPer90": 3.2,
      "longPassesCompletedPer90": 2.2,
      "passingAccuracy": 87.0
    },
    "leagueBenchmarks": [
      {
        "metric": "Passing Accuracy %",
        "player": 87.0,
        "avg": 82.0,
        "elite": 89.0
      },
      {
        "metric": "Clearances per 90",
        "player": 3.1,
        "avg": 2.6,
        "elite": 4.0
      },
      {
        "metric": "Aerial Duel Win %",
        "player": 70.9,
        "avg": 54.5,
        "elite": 68.0
      },
      {
        "metric": "Tackles Won per 90",
        "player": 2.1,
        "avg": 1.1,
        "elite": 2.0
      }
    ],
    "heatmap": [
      {
        "x": 86,
        "y": 25,
        "r": 38,
        "v": 0.8
      },
      {
        "x": 86,
        "y": 45,
        "r": 40,
        "v": 0.85
      },
      {
        "x": 86,
        "y": 65,
        "r": 35,
        "v": 0.7
      },
      {
        "x": 86,
        "y": 12,
        "r": 30,
        "v": 0.6
      }
    ],
    "strengths": [
      "Defending",
      "Workrate",
      "Aerial Dominance"
    ],
    "weaknesses": [
      "Dribbling",
      "Pace"
    ]
  },
  {
    "id": "ladislav-krejc\u00ed",
    "name": "Ladislav Krejc\u00ed",
    "age": 24,
    "position": "DF",
    "role": "Attacking Fullback",
    "club": "Wolves",
    "league": "Premier League",
    "nation": "Spain",
    "value": 27000000,
    "rating": 79,
    "general": {
      "apps": 27,
      "mins": 2356,
      "goals": 2,
      "assists": 2,
      "yellowCards": 3,
      "redCards": 1
    },
    "attributes": {
      "pace": 76,
      "dribbling": 72,
      "passing": 69,
      "defending": 94,
      "physicality": 90,
      "tactical": 89,
      "workrate": 93
    },
    "detailedStats": {
      "goalsPer90": 0.08,
      "shotsOnTargetPer90": 0.6,
      "expectedGoals": 2.2,
      "shotConversionRate": 12.4,
      "touchesInBoxPer90": 1.4,
      "chancesCreated": 18,
      "dribblesCompletedPer90": 0.9,
      "keyPassesPer90": 0.28,
      "tacklesWonPer90": 2.8,
      "interceptionsPer90": 1.1,
      "clearancesPer90": 4.2,
      "aerialDuelWinPercentage": 80.0,
      "tackledDribblerRate": 59.7,
      "progressivePassesPer90": 2.2,
      "longPassesCompletedPer90": 1.5,
      "passingAccuracy": 83.0
    },
    "leagueBenchmarks": [
      {
        "metric": "Passing Accuracy %",
        "player": 83.0,
        "avg": 82.0,
        "elite": 89.0
      },
      {
        "metric": "Clearances per 90",
        "player": 4.2,
        "avg": 2.6,
        "elite": 4.0
      },
      {
        "metric": "Aerial Duel Win %",
        "player": 80.0,
        "avg": 54.5,
        "elite": 68.0
      },
      {
        "metric": "Tackles Won per 90",
        "player": 2.8,
        "avg": 1.1,
        "elite": 2.0
      }
    ],
    "heatmap": [
      {
        "x": 86,
        "y": 25,
        "r": 38,
        "v": 0.8
      },
      {
        "x": 86,
        "y": 45,
        "r": 40,
        "v": 0.85
      },
      {
        "x": 86,
        "y": 65,
        "r": 35,
        "v": 0.7
      },
      {
        "x": 86,
        "y": 12,
        "r": 30,
        "v": 0.6
      }
    ],
    "strengths": [
      "Defending",
      "Workrate",
      "Aerial Dominance"
    ],
    "weaknesses": [
      "Dribbling",
      "Passing"
    ]
  },
  {
    "id": "tolu-arokodare",
    "name": "Tolu Arokodare",
    "age": 20,
    "position": "FW",
    "role": "Complete Winger / Striker",
    "club": "Wolves",
    "league": "Premier League",
    "nation": "England",
    "value": 30600000,
    "rating": 79,
    "general": {
      "apps": 13,
      "mins": 1402,
      "goals": 3,
      "assists": 2,
      "yellowCards": 1,
      "redCards": 0
    },
    "attributes": {
      "pace": 98,
      "dribbling": 84,
      "passing": 71,
      "defending": 31,
      "physicality": 71,
      "tactical": 89,
      "workrate": 80
    },
    "detailedStats": {
      "goalsPer90": 0.19,
      "shotsOnTargetPer90": 0.8,
      "expectedGoals": 5.5,
      "shotConversionRate": 13.6,
      "touchesInBoxPer90": 4.8,
      "chancesCreated": 22,
      "dribblesCompletedPer90": 1.0,
      "keyPassesPer90": 0.57
    },
    "leagueBenchmarks": [
      {
        "metric": "Goals per 90",
        "player": 0.19,
        "avg": 0.22,
        "elite": 0.65
      },
      {
        "metric": "Shot Conversion %",
        "player": 13.6,
        "avg": 10.5,
        "elite": 18.0
      },
      {
        "metric": "Touches in Box p90",
        "player": 4.8,
        "avg": 2.5,
        "elite": 5.5
      },
      {
        "metric": "Expected Goals (xG)",
        "player": 5.5,
        "avg": 4.5,
        "elite": 14.0
      }
    ],
    "heatmap": [
      {
        "x": 50,
        "y": 84,
        "r": 38,
        "v": 0.9
      },
      {
        "x": 48,
        "y": 76,
        "r": 32,
        "v": 0.75
      },
      {
        "x": 52,
        "y": 80,
        "r": 32,
        "v": 0.8
      },
      {
        "x": 50,
        "y": 92,
        "r": 28,
        "v": 0.85
      }
    ],
    "strengths": [
      "Tactical awareness",
      "Pace"
    ],
    "weaknesses": [
      "Defending",
      "Defensive Tracking Back"
    ]
  },
  {
    "id": "mateus-man\u00e9",
    "name": "Mateus Man\u00e9",
    "age": 34,
    "position": "FW",
    "role": "Inverted Winger",
    "club": "Wolves",
    "league": "Premier League",
    "nation": "Brazil",
    "value": 25200000,
    "rating": 80,
    "general": {
      "apps": 19,
      "mins": 1787,
      "goals": 3,
      "assists": 2,
      "yellowCards": 0,
      "redCards": 0
    },
    "attributes": {
      "pace": 85,
      "dribbling": 85,
      "passing": 92,
      "defending": 33,
      "physicality": 76,
      "tactical": 92,
      "workrate": 85
    },
    "detailedStats": {
      "goalsPer90": 0.15,
      "shotsOnTargetPer90": 0.7,
      "expectedGoals": 2.0,
      "shotConversionRate": 13.6,
      "touchesInBoxPer90": 3.4,
      "chancesCreated": 61,
      "dribblesCompletedPer90": 2.0,
      "keyPassesPer90": 1.23
    },
    "leagueBenchmarks": [
      {
        "metric": "Goals per 90",
        "player": 0.15,
        "avg": 0.22,
        "elite": 0.65
      },
      {
        "metric": "Shot Conversion %",
        "player": 13.6,
        "avg": 10.5,
        "elite": 18.0
      },
      {
        "metric": "Touches in Box p90",
        "player": 3.4,
        "avg": 2.5,
        "elite": 5.5
      },
      {
        "metric": "Expected Goals (xG)",
        "player": 2.0,
        "avg": 4.5,
        "elite": 14.0
      }
    ],
    "heatmap": [
      {
        "x": 78,
        "y": 72,
        "r": 45,
        "v": 0.9
      },
      {
        "x": 78,
        "y": 58,
        "r": 38,
        "v": 0.75
      },
      {
        "x": 72,
        "y": 82,
        "r": 35,
        "v": 0.8
      },
      {
        "x": 50,
        "y": 84,
        "r": 30,
        "v": 0.65
      }
    ],
    "strengths": [
      "Passing",
      "Tactical awareness"
    ],
    "weaknesses": [
      "Defending",
      "Defensive Tracking Back"
    ]
  },
  {
    "id": "angel-gomes",
    "name": "Angel Gomes",
    "age": 26,
    "position": "MF",
    "role": "Box-to-Box Midfielder",
    "club": "Wolves",
    "league": "Premier League",
    "nation": "England",
    "value": 27600000,
    "rating": 72,
    "general": {
      "apps": 7,
      "mins": 457,
      "goals": 0,
      "assists": 0,
      "yellowCards": 1,
      "redCards": 0
    },
    "attributes": {
      "pace": 61,
      "dribbling": 59,
      "passing": 66,
      "defending": 53,
      "physicality": 58,
      "tactical": 69,
      "workrate": 66
    },
    "detailedStats": {
      "goalsPer90": 0.0,
      "shotsOnTargetPer90": 0.5,
      "expectedGoals": 0.2,
      "shotConversionRate": 10.0,
      "touchesInBoxPer90": 0.6,
      "chancesCreated": 11,
      "dribblesCompletedPer90": 0.7,
      "keyPassesPer90": 0.9,
      "passingAccuracy": 83.5,
      "progressivePassesPer90": 2.9,
      "tacklesWonPer90": 1.0,
      "interceptionsPer90": 0.5,
      "ballRecoveriesPer90": 3.9
    },
    "leagueBenchmarks": [
      {
        "metric": "Key Passes per 90",
        "player": 0.9,
        "avg": 0.9,
        "elite": 2.2
      },
      {
        "metric": "Progressive Passes p90",
        "player": 2.9,
        "avg": 2.8,
        "elite": 6.2
      },
      {
        "metric": "Chances Created",
        "player": 11,
        "avg": 16,
        "elite": 55
      },
      {
        "metric": "Passing Accuracy %",
        "player": 83.5,
        "avg": 79.5,
        "elite": 87.0
      }
    ],
    "heatmap": [
      {
        "x": 50,
        "y": 42,
        "r: ": 45,
        "v": 0.9
      },
      {
        "x": 44,
        "y": 35,
        "r": 38,
        "v": 0.8
      },
      {
        "x": 56,
        "y": 35,
        "r": 38,
        "v": 0.8
      },
      {
        "x": 50,
        "y": 55,
        "r": 35,
        "v": 0.75
      }
    ],
    "strengths": [
      "Passing",
      "Tactical awareness"
    ],
    "weaknesses": [
      "Defending",
      "Physicality"
    ]
  },
  {
    "id": "adam-armstrong",
    "name": "Adam Armstrong",
    "age": 27,
    "position": "FW",
    "role": "Complete Winger / Striker",
    "club": "Wolves",
    "league": "Premier League",
    "nation": "Spain",
    "value": 30600000,
    "rating": 75,
    "general": {
      "apps": 14,
      "mins": 1141,
      "goals": 2,
      "assists": 2,
      "yellowCards": 3,
      "redCards": 0
    },
    "attributes": {
      "pace": 80,
      "dribbling": 66,
      "passing": 65,
      "defending": 28,
      "physicality": 64,
      "tactical": 75,
      "workrate": 76
    },
    "detailedStats": {
      "goalsPer90": 0.16,
      "shotsOnTargetPer90": 0.7,
      "expectedGoals": 2.8,
      "shotConversionRate": 12.4,
      "touchesInBoxPer90": 3.0,
      "chancesCreated": 10,
      "dribblesCompletedPer90": 0.7,
      "keyPassesPer90": 0.34
    },
    "leagueBenchmarks": [
      {
        "metric": "Goals per 90",
        "player": 0.16,
        "avg": 0.22,
        "elite": 0.65
      },
      {
        "metric": "Shot Conversion %",
        "player": 12.4,
        "avg": 10.5,
        "elite": 18.0
      },
      {
        "metric": "Touches in Box p90",
        "player": 3.0,
        "avg": 2.5,
        "elite": 5.5
      },
      {
        "metric": "Expected Goals (xG)",
        "player": 2.8,
        "avg": 4.5,
        "elite": 14.0
      }
    ],
    "heatmap": [
      {
        "x": 50,
        "y": 84,
        "r": 38,
        "v": 0.9
      },
      {
        "x": 48,
        "y": 76,
        "r": 32,
        "v": 0.75
      },
      {
        "x": 52,
        "y": 80,
        "r": 32,
        "v": 0.8
      },
      {
        "x": 50,
        "y": 92,
        "r": 28,
        "v": 0.85
      }
    ],
    "strengths": [
      "Workrate",
      "Pace"
    ],
    "weaknesses": [
      "Defending",
      "Defensive Tracking Back"
    ]
  }
];

// Helper to search / filter players locally
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
