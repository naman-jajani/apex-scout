// Football Scout App - Tactical & AI Engine

// Presets for formations
const FORMATIONS = {
  "4-3-3": {
    name: "4-3-3 Offensive",
    description: "High-pressing, possession-oriented style. Needs ball-playing defenders, a deep playmaker, box-to-box runners, and creative/scoring wide players.",
    roles: [
      { id: "fw-inside-forward", name: "Inside Forward (Wingers)", pos: "FW", desc: "Cuts inside to shoot or create. Needs pace, dribbling, and shot conversion." },
      { id: "fw-poacher", name: "Poacher (Striker)", pos: "FW", desc: "Stays high, finishes chances. Needs positioning, finishing, and xG efficiency." },
      { id: "mf-dlp", name: "Deep-Lying Playmaker (DM)", pos: "MF", desc: "Regulates tempo, shields defence. Needs passing accuracy, progressive passes, and tackles." },
      { id: "mf-b2b", name: "Box-to-Box Midfielder (CM)", pos: "MF", desc: "Covers ground, links play. Needs stamina/workrate, tackles, and recoveries." },
      { id: "df-ball-playing-cb", name: "Ball-Playing Defender (CB)", pos: "DF", desc: "Distributes from back. Needs passing accuracy, long balls, and aerials." },
      { id: "df-wingback", name: "Attacking Fullback (LB/RB)", pos: "DF", desc: "Provides width. Needs pace, crossing/key passes, and recoveries." }
    ]
  },
  "4-2-3-1": {
    name: "4-2-3-1 Modern",
    description: "Balanced defensive block with an attacking midfielder (No. 10) connecting to a lone striker. Needs solid pivots and creative attacking midfielders.",
    roles: [
      { id: "fw-shadow-striker", name: "Shadow Striker (CAM)", pos: "FW", desc: "Plays in pockets, makes late runs. Needs tactical rating, chances created, and goals." },
      { id: "fw-target-man", name: "Target Man (Striker)", pos: "FW", desc: "Holds up play, wins aerials. Needs physical strength, aerial duels, and hold up." },
      { id: "mf-anchor", name: "Anchor / Ball Winner (DM)", pos: "MF", desc: "Breaks up play. Needs tackling, interceptions, and defensive awareness." },
      { id: "mf-playmaker", name: "Advanced Playmaker (CM/CAM)", pos: "MF", desc: "Key distributor. Needs high passing, vision, and key passes." },
      { id: "df-defensive-cb", name: "Defensive Leader (CB)", pos: "DF", desc: "Shields box. Needs clearances, tackled dribbler %, and positioning." },
      { id: "df-inverted-fb", name: "Inverted Fullback (LB/RB)", pos: "DF", desc: "Steps into midfield. Needs short passing, tactical discipline, and interceptions." }
    ]
  },
  "3-5-2": {
    name: "3-5-2 Wingback",
    description: "Three central defenders, packed midfield, and two strikers. Relies heavily on high-stamina wingbacks who cover the entire flanks.",
    roles: [
      { id: "fw-pressing-forward", name: "Pressing Forward (Striker)", pos: "FW", desc: "Presses defenders, runs channels. Needs pace, workrate, and aerial presence." },
      { id: "fw-deep-lying", name: "Deep-Lying Forward (Striker)", pos: "FW", desc: "Drops deep to link. Needs playmaking passes, dribbling, and shot conversion." },
      { id: "mf-wingback-active", name: "Active Wingback (LWB/RWB)", pos: "DF", desc: "Flank engines. Needs elite pace, workrate, crossing, and tackles." },
      { id: "mf-tempo", name: "Tempo Regulator (CM)", pos: "MF", desc: "Dictates possession. Needs passing accuracy, press resistance, and progressive passes." },
      { id: "df-libero", name: "Libero / Sweeping CB", pos: "DF", desc: "Steps out with ball. Needs progressive passing, dribbles, and composure." }
    ]
  }
};

// Weight configurations for standardized roles
const ROLE_WEIGHTS = {
  "fw-inside-forward": {
    attributes: { pace: 0.3, dribbling: 0.3, passing: 0.15, defending: 0.0, physicality: 0.05, tactical: 0.15, workrate: 0.05 },
    stats: { dribblesCompletedPer90: 0.4, keyPassesPer90: 0.3, expectedGoals: 0.3 }
  },
  "fw-poacher": {
    attributes: { pace: 0.25, dribbling: 0.15, passing: 0.05, defending: 0.0, physicality: 0.2, tactical: 0.25, workrate: 0.1 },
    stats: { goalsPer90: 0.4, shotConversionRate: 0.3, expectedGoals: 0.3 }
  },
  "fw-shadow-striker": {
    attributes: { pace: 0.15, dribbling: 0.2, passing: 0.25, defending: 0.05, physicality: 0.1, tactical: 0.15, workrate: 0.1 },
    stats: { goalsPer90: 0.3, expectedGoals: 0.3, chancesCreated: 0.4 }
  },
  "fw-target-man": {
    attributes: { pace: 0.05, dribbling: 0.1, passing: 0.15, defending: 0.0, physicality: 0.4, tactical: 0.2, workrate: 0.1 },
    stats: { goalsPer90: 0.3, expectedGoals: 0.2, touchesInBoxPer90: 0.5 }
  },
  "fw-pressing-forward": {
    attributes: { pace: 0.2, dribbling: 0.1, passing: 0.1, defending: 0.15, physicality: 0.15, tactical: 0.1, workrate: 0.2 },
    stats: { goalsPer90: 0.3, expectedGoals: 0.3, dribblesCompletedPer90: 0.4 }
  },
  "fw-deep-lying": {
    attributes: { pace: 0.1, dribbling: 0.2, passing: 0.3, defending: 0.05, physicality: 0.1, tactical: 0.15, workrate: 0.1 },
    stats: { expectedGoals: 0.3, keyPassesPer90: 0.4, dribblesCompletedPer90: 0.3 }
  },
  "mf-dlp": {
    attributes: { pace: 0.05, dribbling: 0.1, passing: 0.4, defending: 0.2, physicality: 0.1, tactical: 0.1, workrate: 0.05 },
    stats: { passingAccuracy: 0.4, progressivePassesPer90: 0.4, keyPassesPer90: 0.2 }
  },
  "mf-b2b": {
    attributes: { pace: 0.1, dribbling: 0.1, passing: 0.2, defending: 0.2, physicality: 0.15, tactical: 0.1, workrate: 0.15 },
    stats: { tacklesWonPer90: 0.4, ballRecoveriesPer90: 0.3, progressivePassesPer90: 0.3 }
  },
  "mf-anchor": {
    attributes: { pace: 0.05, dribbling: 0.05, passing: 0.2, defending: 0.4, physicality: 0.2, tactical: 0.05, workrate: 0.05 },
    stats: { tacklesWonPer90: 0.3, interceptionsPer90: 0.4, ballRecoveriesPer90: 0.3 }
  },
  "mf-playmaker": {
    attributes: { pace: 0.1, dribbling: 0.2, passing: 0.4, defending: 0.05, physicality: 0.05, tactical: 0.15, workrate: 0.05 },
    stats: { keyPassesPer90: 0.4, chancesCreated: 0.4, progressivePassesPer90: 0.2 }
  },
  "mf-tempo": {
    attributes: { pace: 0.05, dribbling: 0.15, passing: 0.4, defending: 0.15, physicality: 0.1, tactical: 0.1, workrate: 0.05 },
    stats: { passingAccuracy: 0.5, progressivePassesPer90: 0.3, keyPassesPer90: 0.2 }
  },
  "df-ball-playing-cb": {
    attributes: { pace: 0.1, dribbling: 0.05, passing: 0.3, defending: 0.3, physicality: 0.15, tactical: 0.05, workrate: 0.05 },
    stats: { passingAccuracy: 0.4, progressivePassesPer90: 0.3, longPassesCompletedPer90: 0.3 }
  },
  "df-wingback": {
    attributes: { pace: 0.3, dribbling: 0.15, passing: 0.2, defending: 0.15, physicality: 0.05, tactical: 0.05, workrate: 0.1 },
    stats: { keyPassesPer90: 0.4, chancesCreated: 0.3, progressivePassesPer90: 0.3 }
  },
  "df-defensive-cb": {
    attributes: { pace: 0.1, dribbling: 0.0, passing: 0.1, defending: 0.4, physicality: 0.3, tactical: 0.05, workrate: 0.05 },
    stats: { tackledDribblerRate: 0.4, clearancesPer90: 0.3, aerialDuelWinPercentage: 0.3 }
  },
  "df-inverted-fb": {
    attributes: { pace: 0.15, dribbling: 0.1, passing: 0.25, defending: 0.25, physicality: 0.1, tactical: 0.1, workrate: 0.05 },
    stats: { passingAccuracy: 0.4, progressivePassesPer90: 0.3, interceptionsPer90: 0.3 }
  },
  "mf-wingback-active": {
    attributes: { pace: 0.3, dribbling: 0.15, passing: 0.15, defending: 0.15, physicality: 0.1, tactical: 0.05, workrate: 0.1 },
    stats: { progressivePassesPer90: 0.3, keyPassesPer90: 0.3, tacklesWonPer90: 0.4 }
  },
  "df-libero": {
    attributes: { pace: 0.15, dribbling: 0.15, passing: 0.3, defending: 0.25, physicality: 0.05, tactical: 0.05, workrate: 0.05 },
    stats: { passingAccuracy: 0.4, progressivePassesPer90: 0.4, dribblesCompletedPer90: 0.2 }
  }
};

/**
 * Calculates a tactical fit percentage and qualitative review for a player.
 */
function evaluateTacticalFit(player, roleId, formationId) {
  let posMismatch = false;
  const roleInfo = FORMATIONS[formationId]?.roles.find(r => r.id === roleId);
  if (roleInfo && player.position !== roleInfo.pos) {
    posMismatch = true;
  }

  const weights = ROLE_WEIGHTS[roleId];
  if (!weights) {
    return { score: 50, rating: "Unknown Role", pros: [], cons: [], text: "No role profile matches this role selection." };
  }

  let attrScore = 0;
  for (const [attr, weight] of Object.entries(weights.attributes)) {
    attrScore += (player.attributes[attr] || 60) * weight;
  }

  let statScore = 0;
  let matchesCount = 0;
  for (const [statKey, weight] of Object.entries(weights.stats)) {
    let rawValue = player.detailedStats[statKey] || 0;
    
    let normalized = 0;
    if (statKey.includes("Accuracy") || statKey.includes("Percentage") || statKey.includes("Rate")) {
      normalized = rawValue;
    } else {
      let target = 1.0;
      if (statKey === "goalsPer90") target = 0.8;
      else if (statKey === "shotsOnTargetPer90") target = 2.0;
      else if (statKey === "expectedGoals") target = 20.0;
      else if (statKey === "touchesInBoxPer90") target = 7.0;
      else if (statKey === "dribblesCompletedPer90") target = 3.0;
      else if (statKey === "keyPassesPer90") target = 2.5;
      else if (statKey === "chancesCreated") target = 70.0;
      else if (statKey === "progressivePassesPer90") target = 8.0;
      else if (statKey === "tacklesWonPer90") target = 2.5;
      else if (statKey === "interceptionsPer90") target = 2.0;
      else if (statKey === "ballRecoveriesPer90") target = 7.0;
      else if (statKey === "clearancesPer90") target = 4.5;
      else if (statKey === "longPassesCompletedPer90") target = 5.0;
      
      normalized = Math.min((rawValue / target) * 100, 100);
    }
    statScore += normalized * weight;
    matchesCount++;
  }
  if (matchesCount === 0) statScore = attrScore;

  let finalScore = Math.round(attrScore * 0.6 + statScore * 0.4);

  if (posMismatch) {
    finalScore = Math.max(finalScore - 15, 30);
  }

  let rating = "System Mismatch";
  if (finalScore >= 85) rating = "Elite Fit";
  else if (finalScore >= 75) rating = "Good Fit";
  else if (finalScore >= 60) rating = "Tactical Adjustment Required";

  const pros = [];
  const cons = [];

  const sortedAttrs = Object.entries(player.attributes).sort((a, b) => b[1] - a[1]);

  pros.push(`${player.name} possesses high level ${sortedAttrs[0][0]} (${sortedAttrs[0][1]}/100).`);
  if (player.strengths && player.strengths.length > 0) {
    pros.push(`Fits system's request for ${player.strengths[0]}.`);
  }

  if (player.weaknesses && player.weaknesses.length > 0) {
    cons.push(`Vulnerable in ${player.weaknesses[0]}.`);
  }
  const lowestAttrs = Object.entries(player.attributes).sort((a, b) => a[1] - b[1]);
  if (lowestAttrs[0][1] < 60) {
    cons.push(`Low rating in ${lowestAttrs[0][0]} (${lowestAttrs[0][1]}/100) requires tactical support.`);
  }

  if (posMismatch) {
    cons.push(`Natural position is ${player.position}, playing out of position as ${roleInfo?.pos || 'unknown'}.`);
  }

  let text = `AI Scout Assessment: ${player.name} matches this system with a suitability index of ${finalScore}%. `;
  if (finalScore >= 85) {
    text += `They are an absolute perfect fit for the ${roleInfo?.name || 'role'} in our ${FORMATIONS[formationId]?.name || 'formation'}. Their high rating in ${sortedAttrs[0][0]} allows them to excel in the key areas.`;
  } else if (finalScore >= 75) {
    text += `They represent a strong tactical option. While they fit the general template of the ${roleInfo?.name || 'role'}, they may require some tweaks in instructions to cover their lower ${lowestAttrs[0][0]} capacity.`;
  } else {
    text += `We would advise caution. ${player.name} is a high-quality player, but their skill set is mismatched with the ${roleInfo?.name || 'role'}.`;
  }

  return {
    score: finalScore,
    rating: rating,
    pros: pros,
    cons: cons,
    text: text
  };
}

/**
 * AI Natural Language Query Parser
 * Decodes phrases like "midfielder under 20 who is creative"
 */
function parseAISearch(prompt) {
  const q = prompt.toLowerCase();
  
  const weightAdjust = {
    pace: 1.0,
    dribbling: 1.0,
    passing: 1.0,
    defending: 1.0,
    physicality: 1.0,
    tactical: 1.0,
    workrate: 1.0
  };

  let targetPosition = null;
  let maxAge = null;
  let minAge = null;
  let maxValue = null;
  
  let strictAge = false;
  let strictPosition = false;

  // Position keywords - detect specifically using else-if so first match wins
  // Use word-boundary regex for short codes (fw, mf, df, gk, cb) to avoid substring false positives
  const wordMatch = (word) => new RegExp(`\\b${word}\\b`).test(q);
  
  if (q.includes("goalkeeper") || q.includes("keeper") || wordMatch("gk")) {
    targetPosition = "GK";
    strictPosition = true;
  } else if (q.includes("midfielder") || q.includes("playmaker") || q.includes("pivot") || q.includes("number 8") || q.includes("number 6") || q.includes("number 10") || wordMatch("mf") || q.includes("central mid") || q.includes("midfield")) {
    targetPosition = "MF";
    strictPosition = true;
  } else if (q.includes("striker") || q.includes("forward") || q.includes("attacker") || q.includes("number 9") || wordMatch("fw") || q.includes("winger") || q.includes("wide forward") || q.includes("inside forward")) {
    targetPosition = "FW";
    strictPosition = true;
  } else if (q.includes("defender") || wordMatch("cb") || q.includes("center back") || q.includes("centre back") || q.includes("fullback") || q.includes("wingback") || wordMatch("df") || q.includes("wing-back") || q.includes("back line")) {
    targetPosition = "DF";
    strictPosition = true;
  }

  // Age extraction
  // Regex to extract age details: e.g. "less than 20", "under 20", "u20", "younger than 20", "<20", "< 20"
  const underMatch = q.match(/under\s+(\d+)/) || 
                      q.match(/u\s*(\d+)/) || 
                      q.match(/less than\s*(\d+)/) || 
                      q.match(/younger than\s*(\d+)/) ||
                      q.match(/<\s*(\d+)/);
  if (underMatch) {
    maxAge = parseInt(underMatch[1]);
    strictAge = true;
  }

  const overMatch = q.match(/over\s+(\d+)/) || 
                    q.match(/older than\s*(\d+)/) ||
                    q.match(/>\s*(\d+)/);
  if (overMatch) {
    minAge = parseInt(overMatch[1]);
    strictAge = true;
  }

  if (q.includes("young") || q.includes("wonderkid") || q.includes("prospect")) {
    if (!maxAge) {
      maxAge = 25;
      strictAge = true;
    }
  }

  // Budget/value keywords
  if (q.includes("cheap") || q.includes("bargain") || q.includes("budget") || q.includes("low cost")) {
    maxValue = 50000000;
  }
  const millionMatch = q.match(/under\s+(\d+)\s*m/) || 
                       q.match(/budget\s*(?:of)?\s*(\d+)\s*m/) ||
                       q.match(/less than\s*(\d+)\s*m/);
  if (millionMatch) {
    maxValue = parseInt(millionMatch[1]) * 1000000;
  }

  // Attribute weights adjustments based on descriptive terms
  if (q.includes("fast") || q.includes("speed") || q.includes("pace") || q.includes("quick") || q.includes("acceleration")) {
    weightAdjust.pace = 3.0;
  }
  if (q.includes("dribble") || q.includes("skill") || q.includes("flair") || q.includes("isolation")) {
    weightAdjust.dribbling = 2.5;
  }
  if (q.includes("pass") || q.includes("vision") || q.includes("playmaker") || q.includes("creative") || q.includes("set the rhythm") || q.includes("distribut")) {
    weightAdjust.passing = 3.0;
  }
  if (q.includes("defend") || q.includes("tackl") || q.includes("intercept") || q.includes("shield") || q.includes("ball winner")) {
    weightAdjust.defending = 2.5;
  }
  if (q.includes("strong") || q.includes("physical") || q.includes("aerial") || q.includes("tall") || q.includes("power")) {
    weightAdjust.physicality = 2.5;
  }
  if (q.includes("smart") || q.includes("intelligent") || q.includes("tactical") || q.includes("position") || q.includes("read")) {
    weightAdjust.tactical = 2.5;
  }
  if (q.includes("workrate") || q.includes("engine") || q.includes("press") || q.includes("stamina") || q.includes("work horse") || q.includes("workhorse") || q.includes("running")) {
    weightAdjust.workrate = 3.0;
  }

  // League/country keywords
  let targetLeague = null;
  if (q.includes('premier league') || q.includes('english') || q.includes('epl')) targetLeague = 'Premier League';
  else if (q.includes('la liga') || q.includes('spanish') || q.includes('spain') || q.includes('liga')) targetLeague = 'La Liga';
  else if (q.includes('bundesliga') || q.includes('german')) targetLeague = 'Bundesliga';
  else if (q.includes('serie a') || q.includes('italian') || q.includes('italy') || q.includes('calcio')) targetLeague = 'Serie A';
  else if (q.includes('ligue 1') || q.includes('french') || q.includes('france')) targetLeague = 'Ligue 1';
  else if (q.includes('portug') || q.includes('primeira liga') || q.includes('liga portugal')) targetLeague = 'Primeira Liga';
  else if (q.includes('brazil') || q.includes('brasileiro') || q.includes('brasileir')) targetLeague = 'Brasileirão';
  else if (q.includes('argentin') || q.includes('primera division')) targetLeague = 'Argentine Primera';

  return {
    targetPosition,
    minAge,
    maxAge,
    maxValue,
    targetLeague,
    strictAge,
    strictPosition,
    weightAdjust,
    scoutingFocus: Object.entries(weightAdjust)
      .filter(([_, w]) => w > 1.0)
      .map(([attr]) => attr)
  };
}

/**
 * Ranks all database players using the parsed AI requirements
 */
function rankPlayersByAIQuery(database, prompt) {
  const reqs = parseAISearch(prompt);
  const results = [];
  
  database.forEach(player => {
    // 1. STRICT AGE FILTER: Exclude strictly if strictAge flag is set
    if (reqs.strictAge) {
      if (reqs.maxAge && player.age >= reqs.maxAge) return; // e.g. age less than 20 -> excludes 20 and above
      if (reqs.minAge && player.age <= reqs.minAge) return;
    }
    
    // 2. STRICT POSITION FILTER: Exclude strictly if strictPosition flag is set
    if (reqs.strictPosition) {
      if (reqs.targetPosition && player.position !== reqs.targetPosition) return;
    }
    
    // 3. BUDGET FILTER
    if (reqs.maxValue && player.value > reqs.maxValue) return;

    let score = player.rating;

    // Adjust match score based on attribute weights requested
    let weightedSum = 0;
    let weightDivider = 0;
    for (const [attr, multiplier] of Object.entries(reqs.weightAdjust)) {
      weightedSum += player.attributes[attr] * multiplier;
      weightDivider += multiplier;
    }
    const attrMatch = weightedSum / weightDivider;

    // Final combination: 30% baseline rating, 70% matching characteristics
    let finalMatchScore = Math.round((score * 0.3) + (attrMatch * 0.7));
    finalMatchScore = Math.max(Math.min(finalMatchScore, 100), 20);

    // AI summary text for why this player is recommended
    let rationale = "";
    if (reqs.scoutingFocus.length > 0) {
      const positiveAttributes = reqs.scoutingFocus.filter(attr => player.attributes[attr] >= 80);
      if (positiveAttributes.length > 0) {
        rationale = `Strong candidate. Matches request with high-level ${positiveAttributes.join(" & ")}.`;
      } else {
        rationale = `Decent fit. Meets age/position criteria with overall balanced stats.`;
      }
    } else {
      rationale = `Matches based on parameters and tactical value of ${player.rating}.`;
    }

    results.push({
      player,
      matchScore: finalMatchScore,
      rationale
    });
  });

  // Sort by match score descending
  return results.sort((a, b) => b.matchScore - a.matchScore);
}

/**
 * Conversational Agent Response Generator
 */
function generateAIResponse(message, history) {
  const msg = message.toLowerCase().trim();
  
  if (!msg) {
    return {
      text: "### 🤖 AI Scout Assistant\n\nHow can I help you today? You can search for player shortlists (e.g. *'young creative midfielders under 22'*) or ask why a specific player is highly rated.",
      shortlist: []
    };
  }
  
  // 1. Check if the user is asking about a specific player profile
  let mentionedPlayer = null;
  for (const player of PLAYER_DATABASE) {
    const lastName = player.name.split(" ").slice(-1)[0].toLowerCase();
    if (msg.includes(player.name.toLowerCase()) || (lastName.length > 3 && msg.includes(lastName))) {
      mentionedPlayer = player;
      break;
    }
  }
  
  if (mentionedPlayer) {
    const sortedAttrs = Object.entries(mentionedPlayer.attributes).sort((a,b)=>b[1]-a[1]);
    const formattedVal = mentionedPlayer.value >= 1000000 ? `€${mentionedPlayer.value / 1000000}M` : `€${mentionedPlayer.value / 1000}`;
    
    let text = `### 🤖 Scouting Report: **${mentionedPlayer.name}**\n\n`;
    text += `**${mentionedPlayer.name}** is a **${mentionedPlayer.age} year old** **${mentionedPlayer.position}** playing as a **${mentionedPlayer.role}** for **${mentionedPlayer.club}** in the **${mentionedPlayer.league}**.\n\n`;
    
    text += `#### Why is ${mentionedPlayer.name} rated highly? 🤔\n`;
    text += `- **Elite Attributes**: His strongest attributes are **${sortedAttrs[0][0]}** (${sortedAttrs[0][1]}/100) and **${sortedAttrs[1][0]}** (${sortedAttrs[1][1]}/100).\n`;
    text += `- **Key Strengths**: ${mentionedPlayer.strengths.join(", ")}.\n`;
    
    if (mentionedPlayer.position === "GK") {
      text += `- **Performance Metrics**: Keeping **${mentionedPlayer.detailedStats.cleanSheets} clean sheets** with a **${mentionedPlayer.detailedStats.savePercentage}% save percentage**.\n`;
    } else {
      text += `- **Output**: Generating **${mentionedPlayer.detailedStats.goalsPer90} goals per 90** and **${mentionedPlayer.detailedStats.keyPassesPer90} key passes per 90** from **${mentionedPlayer.detailedStats.touchesInBoxPer90} box touches**.\n`;
    }
    
    text += `\n#### Tactical Suitability:\n`;
    text += `In terms of tactical play, he excels at progressiveness and press resistance. His workrate is rated at **${mentionedPlayer.attributes.workrate}/100**, and his tactical discipline is **${mentionedPlayer.attributes.tactical}/100**. His primary weakness is **${mentionedPlayer.weaknesses[0]}**, meaning scouts suggest surrounding him with physical duel-winners or defensive covers.`;
    
    return {
      text: text,
      shortlist: [{ player: mentionedPlayer, matchScore: mentionedPlayer.rating, rationale: "Direct search" }]
    };
  }
  
  // 2. Otherwise, treat as a filter search query
  const ranked = rankPlayersByAIQuery(PLAYER_DATABASE, message);
  
  if (ranked.length === 0) {
    return {
      text: `### 🤖 AI Scout Assistant\n\nI couldn't find any players in our database that strictly match your requirements.\n\n*Try relaxing your search limits (e.g. asking for players under 23, or simply asking for creative midfielders).*`,
      shortlist: []
    };
  }
  
  const topMatches = ranked.slice(0, 5);
  let text = `### 🤖 AI Scout Shortlist\n\nI parsed our player database based on your requirements. Here are the top candidates matching your criteria:\n\n`;
  
  topMatches.forEach((item, index) => {
    const p = item.player;
    const formattedVal = p.value >= 1000000 ? `€${p.value / 1000000}M` : `€${p.value / 1000}`;
    text += `${index + 1}. **${p.name}** (${p.age} y/o, ${p.position} - ${p.club}) — **Match Score: ${item.matchScore}%**\n`;
    text += `   *Value: ${formattedVal} | Strengths: ${p.strengths.slice(0,2).join(", ")}*\n`;
    text += `   *AI Note: ${item.rationale}*\n\n`;
  });
  
  text += `You can ask further follow-up questions about any of these players (e.g. *"Why is ${topMatches[0].player.name} rated highly?"*) or type a new requirement.`;
  
  return {
    text: text,
    shortlist: topMatches
  };
}
