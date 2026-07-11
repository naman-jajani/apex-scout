// app.js - Football Scout App Main Client Controller

let currentRadarChart = null;
let activeTacticalRole = null;
let activeAISearchResult = null; // Stores results from NLP/LLM search query
let activeModalPlayer = null; // Store Player A currently open in modal
let selectedComparePlayerId = null; // Currently compared player in modal
let chatConversationHistory = []; // Track chat messages for LLM context
let aiExplanations = {}; // Store per-player AI explanations {playerId: "explanation"}

// DOM Elements
const playerGrid = document.getElementById("playerGrid");
const filterPosition = document.getElementById("filterPosition");
const filterAgeRange = document.getElementById("filterAgeRange");
const ageRangeVal = document.getElementById("ageRangeVal");
const filterBudget = document.getElementById("filterBudget");
const budgetVal = document.getElementById("budgetVal");
const btnApplyFilters = document.getElementById("btnApplyFilters");
const selectFormation = document.getElementById("selectFormation");
const roleBadgeList = document.getElementById("roleBadgeList");
const scraperConsole = document.getElementById("scraperConsole");
const btnTriggerScraper = document.getElementById("btnTriggerScraper");
const dashboardSearch = document.getElementById("dashboardSearch");
const sortBy = document.getElementById("sortBy");
const sortByMatchOption = document.getElementById("sortByMatchOption");
const totalPlayersPill = document.getElementById("totalPlayersPill");
const radarChartTitle = document.getElementById("radarChartTitle");

// Tab Navigation Elements
const btnTabGrid = document.getElementById("btnTabGrid");
const btnTabChat = document.getElementById("btnTabChat");
const gridViewWrapper = document.getElementById("gridViewWrapper");
const chatViewWrapper = document.getElementById("chatViewWrapper");

// Chat Elements
const chatHistory = document.getElementById("chatHistory");
const chatInput = document.getElementById("chatInput");
const btnSendChat = document.getElementById("btnSendChat");
const btnClearChat = document.getElementById("btnClearChat");

// Modal Elements
const profileModal = document.getElementById("profileModal");
const modalCloseBtn = document.getElementById("modalCloseBtn");
const modalPlayerAvatar = document.getElementById("modalPlayerAvatar");
const modalPlayerName = document.getElementById("modalPlayerName");
const modalPlayerPosition = document.getElementById("modalPlayerPosition");
const modalPlayerClub = document.getElementById("modalPlayerClub");
const modalPlayerLeague = document.getElementById("modalPlayerLeague");
const modalPlayerAge = document.getElementById("modalPlayerAge");
const modalPlayerValue = document.getElementById("modalPlayerValue");
const modalPlayerNation = document.getElementById("modalPlayerNation");
const modalPlayerStrengths = document.getElementById("modalPlayerStrengths");
const modalPlayerWeaknesses = document.getElementById("modalPlayerWeaknesses");
const modalFitSystem = document.getElementById("modalFitSystem");
const modalFitRating = document.getElementById("modalFitRating");
const modalFitScore = document.getElementById("modalFitScore");
const modalCompareFitScore = document.getElementById("modalCompareFitScore");
const modalFitNarrative = document.getElementById("modalFitNarrative");
const modalFitPros = document.getElementById("modalFitPros");
const modalFitCons = document.getElementById("modalFitCons");
const leagueComparisonContainer = document.getElementById("leagueComparisonContainer");
const leagueComparisonSub = document.getElementById("leagueComparisonSub");
const legendPlayerB = document.getElementById("legendPlayerB");
const heatmapLegend = document.getElementById("heatmapLegend");

// Compare dropdown elements
const compareSearchInput = document.getElementById("compareSearchInput");
const compareDropdownList = document.getElementById("compareDropdownList");

// AI Grid Search elements
const aiGridQuery = document.getElementById("aiGridQuery");
const btnAIGridSearch = document.getElementById("btnAIGridSearch");
const btnClearAISearch = document.getElementById("btnClearAISearch");
const aiResultsBanner = document.getElementById("aiResultsBanner");
const aiResultsSummary = document.getElementById("aiResultsSummary");

// API Key elements
const btnToggleApiKey = document.getElementById("btnToggleApiKey");
const apiKeyPanel = document.getElementById("apiKeyPanel");
const groqApiKeyInput = document.getElementById("groqApiKeyInput");
const btnSaveApiKey = document.getElementById("btnSaveApiKey");
const apiKeyStatus = document.getElementById("apiKeyStatus");
const aiStatusPill = document.getElementById("aiStatusPill");

// ── API Key Helpers ──────────────────────────────────────────────
function getApiKey() {
  return localStorage.getItem('groqApiKey') || '';
}
function setApiKey(key) {
  localStorage.setItem('groqApiKey', key);
}
function hasApiKey() {
  return !!getApiKey();
}

// ── LLM Constants ────────────────────────────────────────────────
const GROQ_API_URL = 'https://api.groq.com/openai/v1/chat/completions';
const GROQ_MODEL = 'llama-3.3-70b-versatile';

const SCOUT_SYSTEM_PROMPT = `You are APEX SCOUT AI, an elite football transfer intelligence system. You have deep expertise in player analysis, tactical systems, and scouting.

When given a scouting query and a database of player profiles, you must:
1. Carefully analyze each player against ALL criteria in the query (position, age, playstyle, attributes, tactical role, etc.)
2. Select the top 5-8 best matching players
3. Assign a match score (0-100) based on how well each player fits ALL stated requirements
4. Write a detailed scouting rationale for each player explaining WHY they fit
5. Identify specific strengths relevant to the query
6. Note any tactical concerns

CRITICAL RULES:
- Only recommend players whose POSITION matches what the query asks for (e.g. if they ask for a midfielder, only recommend MF players)
- Strictly respect age constraints (if they say "under 20", only include players aged 19 or younger)
- Consider the player's attributes, stats, and playing style holistically
- Be specific — reference actual stat numbers and attribute ratings in your explanations

Return ONLY valid JSON in this exact format (no markdown, no code blocks):
{
  "summary": "A 2-3 sentence overview of the scouting brief and what type of player profile you looked for",
  "recommendations": [
    {
      "id": "player_id_string",
      "name": "Player Full Name",
      "matchScore": 92,
      "explanation": "Detailed 2-3 sentence scouting rationale referencing specific stats and attributes",
      "keyStrengths": ["Strength 1", "Strength 2", "Strength 3"],
      "concerns": ["Concern or limitation 1"]
    }
  ]
}`;

const CHAT_SYSTEM_PROMPT = `You are APEX SCOUT AI, a conversational football scouting assistant. You help scouts find players, analyze profiles, and build shortlists.

You have access to a database of Premier League players. When the user asks about finding players, analyze the provided player data and recommend the best matches.

RESPONSE FORMAT:
- Use markdown formatting for readability
- Use **bold** for player names and key stats
- Use bullet points for lists
- Be specific with stats and numbers
- If recommending players, always explain WHY each player fits

If the user asks about a specific player, give a detailed scouting report.
If the user asks for a shortlist, provide 5-8 recommendations with explanations.
If the user asks a follow-up question, reference the conversation context.

When recommending players, also include a JSON block at the very end of your response on its own line, formatted as:
|||SHORTLIST|||[{"id":"player_id","name":"Name","matchScore":85}]|||END|||

This hidden data helps the UI display the shortlist. Only include this when you are recommending specific players.`;

// ── Compact Player Summary Builder (for LLM context) ─────────────
function buildPlayerSummaries(players) {
  return players.slice(0, 35).map(p => {
    const ds = p.detailedStats || {};
    const s = {
      id: p.id, name: p.name, age: p.age, pos: p.position, role: p.role,
      club: p.club, league: p.league, nation: p.nation,
      rating: p.rating, valueMil: Math.round(p.value / 1000000 * 10) / 10,
      attr: p.attributes,
      strengths: (p.strengths || []).slice(0, 3),
      weaknesses: (p.weaknesses || []).slice(0, 2)
    };
    if (Object.keys(ds).length) {
      s.stats = {
        g90: ds.goalsPer90, kp90: ds.keyPassesPer90, tw90: ds.tacklesWonPer90,
        passAcc: ds.passingAccuracy, drib90: ds.dribblesCompletedPer90,
        prog90: ds.progressivePassesPer90, int90: ds.interceptionsPer90,
        chances: ds.chancesCreated, xG: ds.expectedGoals,
        apps: ds.appearances || (p.general && p.general.apps)
      };
    }
    return s;
  });
}

// ── Direct Groq API Callers (browser → Groq, no server needed) ───
async function callScoutAPI(query, players) {
  const summaries = buildPlayerSummaries(players);
  const userMsg = `SCOUTING QUERY: "${query}"\n\nPLAYER DATABASE (${summaries.length} candidates):\n${JSON.stringify(summaries)}\n\nAnalyze these players against the scouting query. Return your ranked recommendations as JSON.`;

  const res = await fetch(GROQ_API_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${getApiKey()}`
    },
    body: JSON.stringify({
      model: GROQ_MODEL,
      messages: [
        { role: 'system', content: SCOUT_SYSTEM_PROMPT },
        { role: 'user', content: userMsg }
      ],
      temperature: 0.3,
      max_tokens: 3000,
      response_format: { type: 'json_object' }
    })
  });

  if (!res.ok) {
    const errData = await res.json().catch(() => ({}));
    const errMsg = errData.error?.message || errData.error || `Groq API error (${res.status})`;
    throw new Error(errMsg);
  }

  const data = await res.json();
  return JSON.parse(data.choices[0].message.content);
}

async function callChatAPI(query, players, history) {
  const summaries = buildPlayerSummaries(players);
  const messages = [{ role: 'system', content: CHAT_SYSTEM_PROMPT }];

  // Add conversation history (last 6 messages)
  history.slice(-6).forEach(msg => {
    messages.push({ role: msg.role || 'user', content: msg.content || '' });
  });

  // Build user message with player context
  let userContent = query;
  if (summaries.length > 0) {
    userContent = `${query}\n\n[Available Player Data — ${summaries.length} candidates]:\n${JSON.stringify(summaries)}`;
  }
  messages.push({ role: 'user', content: userContent });

  const res = await fetch(GROQ_API_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${getApiKey()}`
    },
    body: JSON.stringify({
      model: GROQ_MODEL,
      messages: messages,
      temperature: 0.5,
      max_tokens: 2000
    })
  });

  if (!res.ok) {
    const errData = await res.json().catch(() => ({}));
    const errMsg = errData.error?.message || errData.error || `Groq API error (${res.status})`;
    throw new Error(errMsg);
  }

  const data = await res.json();
  return { text: data.choices[0].message.content };
}

// ── Pre-filter players for LLM context ────────────────────────────
function getPreFilteredForLLM(query) {
  const reqs = parseAISearch(query);
  let candidates = PLAYER_DATABASE.filter(p => {
    if (reqs.strictPosition && reqs.targetPosition && p.position !== reqs.targetPosition) return false;
    if (reqs.strictAge && reqs.maxAge && p.age >= reqs.maxAge) return false;
    if (reqs.strictAge && reqs.minAge && p.age <= reqs.minAge) return false;
    if (reqs.maxValue && p.value > reqs.maxValue) return false;
    return true;
  });
  if (candidates.length < 10) {
    candidates = PLAYER_DATABASE.filter(p => {
      if (reqs.targetPosition && p.position !== reqs.targetPosition) return false;
      return true;
    });
  }
  candidates.sort((a, b) => b.rating - a.rating);
  return candidates.slice(0, 35);
}

// Init App
window.addEventListener("DOMContentLoaded", () => {
  renderFormationRoles();
  renderPlayers();
  
  // Filters: only update label values on slider input, but do NOT re-render players
  filterAgeRange.addEventListener("input", (e) => {
    ageRangeVal.innerText = `${e.target.value} years`;
  });
  
  filterBudget.addEventListener("input", (e) => {
    budgetVal.innerText = `€${e.target.value}M`;
  });
  
  // Apply Filters button — this triggers the actual re-render
  btnApplyFilters.addEventListener("click", () => {
    resetAISearch();
    renderPlayers();
    // Visual feedback
    btnApplyFilters.innerText = "✓ Filters Applied";
    btnApplyFilters.style.background = "linear-gradient(135deg, #10b981, #059669)";
    setTimeout(() => {
      btnApplyFilters.innerText = "Apply Filters";
      btnApplyFilters.style.background = "";
    }, 1200);
  });
  
  selectFormation.addEventListener("change", () => {
    activeTacticalRole = null;
    renderFormationRoles();
    resetAISearch();
    renderPlayers();
  });
  
  dashboardSearch.addEventListener("input", () => {
    renderPlayers();
  });
  
  sortBy.addEventListener("change", () => {
    renderPlayers();
  });
  
  // Sync button click
  btnTriggerScraper.addEventListener("click", handleScraperSync);
  
  // Tab Swapping
  btnTabGrid.addEventListener("click", () => {
    btnTabChat.classList.remove("active");
    btnTabGrid.classList.add("active");
    chatViewWrapper.style.display = "none";
    gridViewWrapper.style.display = "block";
  });
  
  btnTabChat.addEventListener("click", () => {
    btnTabGrid.classList.remove("active");
    btnTabChat.classList.add("active");
    gridViewWrapper.style.display = "none";
    chatViewWrapper.style.display = "flex";
    chatHistory.scrollTop = chatHistory.scrollHeight;
  });
  
  // Chat Handlers
  btnSendChat.addEventListener("click", sendUserChatMessage);
  chatInput.addEventListener("keydown", (e) => {
    if (e.key === "Enter") sendUserChatMessage();
  });
  btnClearChat.addEventListener("click", () => {
    chatConversationHistory = [];
    chatHistory.innerHTML = `
      <div class="chat-msg bot">
        <div class="chat-bubble">
          <h3>Welcome to AI Scout Advisor</h3>
          <p>I have access to statistics and attributes for all 441 active Premier League players. You can ask me to compile shortlists, analyze players, or compare profiles.</p>
          <p style="margin-top: 0.6rem; font-weight: 600; font-size:0.8rem; color: var(--accent-cyan); text-transform:uppercase; letter-spacing:0.5px;">Scouting Queries to Try:</p>
          <div class="chat-prompt-chips" id="chatChipsContainer">
            <!-- Chips bound via delegates -->
          </div>
        </div>
      </div>
    `;
    bindPromptChips();
  });
  
  // Bind chips initially
  bindPromptChips();
  
  // Compare player searchable dropdown
  initCompareDropdown();

  // Modal Close — using direct event handling for reliability
  modalCloseBtn.addEventListener("click", (e) => {
    e.preventDefault();
    e.stopPropagation();
    closeModal();
  });
  profileModal.addEventListener("click", (e) => {
    if (e.target === profileModal) closeModal();
  });
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && profileModal.classList.contains("active")) {
      closeModal();
    }
  });

  // ── API Key Management ──────────────────────────────────────────
  if (btnToggleApiKey) {
    btnToggleApiKey.addEventListener("click", () => {
      apiKeyPanel.style.display = apiKeyPanel.style.display === "none" ? "block" : "none";
    });
  }
  if (btnSaveApiKey) {
    btnSaveApiKey.addEventListener("click", () => {
      const key = groqApiKeyInput.value.trim();
      if (key) {
        setApiKey(key);
        apiKeyStatus.innerText = "✓ Key saved";
        apiKeyStatus.style.color = "var(--accent-neon)";
        if (aiStatusPill) aiStatusPill.innerHTML = 'AI Engine: <span style="color:#10b981;">LLM Active</span>';
        setTimeout(() => { apiKeyPanel.style.display = "none"; }, 800);
      } else {
        apiKeyStatus.innerText = "Enter a key first";
        apiKeyStatus.style.color = "var(--accent-red)";
      }
    });
    // Pre-fill if key exists
    const existingKey = getApiKey();
    if (existingKey) {
      groqApiKeyInput.value = existingKey;
      apiKeyStatus.innerText = "✓ Key loaded";
      apiKeyStatus.style.color = "var(--accent-neon)";
      if (aiStatusPill) aiStatusPill.innerHTML = 'AI Engine: <span style="color:#10b981;">LLM Active</span>';
    }
  }
  // Close API key panel on outside click
  document.addEventListener("click", (e) => {
    if (apiKeyPanel && apiKeyPanel.style.display !== "none" && !e.target.closest('.api-key-container')) {
      apiKeyPanel.style.display = "none";
    }
  });

  // ── AI Grid Search ───────────────────────────────────────────────
  if (btnAIGridSearch) {
    btnAIGridSearch.addEventListener("click", () => {
      const query = aiGridQuery.value.trim();
      if (!query) return;
      handleAIGridSearch(query);
    });
  }
  if (aiGridQuery) {
    aiGridQuery.addEventListener("keydown", (e) => {
      if (e.key === "Enter") {
        const query = aiGridQuery.value.trim();
        if (query) handleAIGridSearch(query);
      }
    });
  }
  if (btnClearAISearch) {
    btnClearAISearch.addEventListener("click", clearAIGridSearch);
  }
});

// Resets any custom AI query results when normal filters are adjusted
function resetAISearch() {
  activeAISearchResult = null;
  sortByMatchOption.style.display = "none";
  if (sortBy.value === "matchScore") {
    sortBy.value = "rating";
  }
}

// Bind click events to chat prompt chips
function bindPromptChips() {
  document.querySelectorAll(".prompt-chip").forEach(chip => {
    chip.addEventListener("click", () => {
      const prompt = chip.getAttribute("data-prompt");
      if (prompt) {
        chatInput.value = prompt;
        sendUserChatMessage();
      }
    });
  });
}

// Render dynamic roles based on formation selection
function renderFormationRoles() {
  const formationId = selectFormation.value;
  const formation = FORMATIONS[formationId];
  roleBadgeList.innerHTML = "";
  
  if (!formation) return;
  
  formation.roles.forEach(role => {
    const badge = document.createElement("span");
    badge.className = "role-badge";
    badge.innerText = role.name;
    badge.setAttribute("data-role-id", role.id);
    
    badge.addEventListener("click", () => {
      if (badge.classList.contains("active")) {
        badge.classList.remove("active");
        activeTacticalRole = null;
        sortByMatchOption.style.display = "none";
        if (sortBy.value === "matchScore") sortBy.value = "rating";
      } else {
        document.querySelectorAll(".role-badge").forEach(b => b.classList.remove("active"));
        badge.classList.add("active");
        activeTacticalRole = {
          roleId: role.id,
          pos: role.pos,
          name: role.name,
          formationId: formationId
        };
        
        filterPosition.value = role.pos;
        resetAISearch();
        
        sortByMatchOption.style.display = "block";
        sortBy.value = "matchScore";
      }
      renderPlayers();
    });
    
    roleBadgeList.appendChild(badge);
  });
}

// Render player cards
function renderPlayers() {
  const query = dashboardSearch.value;
  const position = filterPosition.value;
  const maxAge = parseInt(filterAgeRange.value);
  const maxVal = parseInt(filterBudget.value) * 1000000;
  
  let filtered = getPlayersFiltered({ position, maxAge, maxVal, query });
  
  let displayList = filtered.map(player => {
    let matchScore = null;
    let rationale = "";
    
    if (activeAISearchResult) {
      const matchObj = activeAISearchResult.find(r => r.player.id === player.id);
      if (matchObj) {
        matchScore = matchObj.matchScore;
        rationale = matchObj.rationale;
      }
    } else if (activeTacticalRole) {
      const tacticalObj = evaluateTacticalFit(player, activeTacticalRole.roleId, activeTacticalRole.formationId);
      matchScore = tacticalObj.score;
      rationale = `${activeTacticalRole.name} Fit: ${matchScore}%`;
    }
    
    return {
      ...player,
      matchScore,
      rationale
    };
  });
  
  // Filter list when AI search is active so only shortlisted players appear
  if (activeAISearchResult) {
    displayList = displayList.filter(item => item.matchScore !== null);
  }
  
  // Sort list
  const sortCriteria = sortBy.value;
  displayList.sort((a, b) => {
    if (sortCriteria === "matchScore") {
      const scoreA = a.matchScore !== null ? a.matchScore : -1;
      const scoreB = b.matchScore !== null ? b.matchScore : -1;
      if (scoreA !== scoreB) {
        return scoreB - scoreA;
      }
      return b.rating - a.rating;
    }
    if (sortCriteria === "value") {
      return b.value - a.value;
    }
    if (sortCriteria === "age") {
      return a.age - b.age;
    }
    return b.rating - a.rating;
  });
  
  // Update total pill
  totalPlayersPill.innerHTML = `Scouted: <span>${displayList.length} Players</span>`;
  
  // Render HTML
  playerGrid.innerHTML = "";
  if (displayList.length === 0) {
    playerGrid.innerHTML = `
      <div class="glass-panel" style="grid-column: 1/-1; text-align: center; padding: 3rem; color: var(--text-muted);">
        <svg style="width:48px;height:48px;margin-bottom:1rem;color:var(--text-dim);" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
        <p>No players match your scouting filter criteria.</p>
        <p style="font-size:0.8rem;margin-top:0.5rem;">Try relaxing your budget, age, or search query parameters.</p>
      </div>
    `;
    return;
  }
  
  displayList.forEach(item => {
    const card = document.createElement("div");
    card.className = "glass-panel player-card";
    
    const isElite = item.rating >= 88;
    const ratingClass = isElite ? "player-rating-badge elite" : "player-rating-badge";
    
    let fitBadgeHtml = "";
    if (item.matchScore !== null) {
      fitBadgeHtml = `<div class="player-match-badge">${item.matchScore}% Match</div>`;
    }
    
    const formattedVal = item.value >= 1000000 ? `€${item.value / 1000000}M` : `€${item.value / 1000}`;
    
    card.innerHTML = `
      ${fitBadgeHtml}
      <div class="player-card-header">
        <div class="player-basic-info">
          <p style="color:var(--accent-cyan);font-weight:600;font-size:0.75rem;text-transform:uppercase;">${item.position} • ${item.role}</p>
          <h3 title="${item.name}">${item.name}</h3>
          <p>${item.club} (${item.nation})</p>
        </div>
        <div class="${ratingClass}">
          <span style="font-size:0.65rem;color:var(--text-dim);font-weight:600;text-transform:uppercase;">OVR</span>
          <span style="font-size:1.1rem;line-height:1;">${item.rating}</span>
        </div>
      </div>
      
      <div class="player-card-meta">
        <div class="meta-item">
          <span class="meta-label">Age</span>
          <span class="meta-val">${item.age}</span>
        </div>
        <div class="meta-item">
          <span class="meta-label">League</span>
          <span class="meta-val">${item.league}</span>
        </div>
        <div class="meta-item" style="text-align:right;">
          <span class="meta-label">Apps (G/A)</span>
          <span class="meta-val">${item.general.apps} (${item.general.goals}/${item.general.assists})</span>
        </div>
      </div>
      
      <div class="card-attributes">
        <div class="card-attr-item">
          <span class="card-attr-label">PAC</span>
          <span class="card-attr-val ${item.attributes.pace >= 85 ? 'high' : ''}">${item.attributes.pace}</span>
        </div>
        <div class="card-attr-item">
          <span class="card-attr-label">DRI</span>
          <span class="card-attr-val ${item.attributes.dribbling >= 85 ? 'high' : ''}">${item.attributes.dribbling}</span>
        </div>
        <div class="card-attr-item">
          <span class="card-attr-label">PAS</span>
          <span class="card-attr-val ${item.attributes.passing >= 85 ? 'high' : ''}">${item.attributes.passing}</span>
        </div>
        <div class="card-attr-item">
          <span class="card-attr-label">DEF</span>
          <span class="card-attr-val ${item.attributes.defending >= 85 ? 'high' : ''}">${item.attributes.defending}</span>
        </div>
        <div class="card-attr-item">
          <span class="card-attr-label">PHY</span>
          <span class="card-attr-val ${item.attributes.physicality >= 85 ? 'high' : ''}">${item.attributes.physicality}</span>
        </div>
        <div class="card-attr-item">
          <span class="card-attr-label">TAC</span>
          <span class="card-attr-val ${item.attributes.tactical >= 85 ? 'high' : ''}">${item.attributes.tactical}</span>
        </div>
      </div>
      
      ${aiExplanations[item.id] ? `
      <div class="card-ai-insight" style="padding:0.5rem 0;border-top:1px solid var(--border-glass);margin-top:0.3rem;">
        <p style="font-size:0.65rem;text-transform:uppercase;font-weight:700;color:var(--accent-cyan);margin-bottom:0.25rem;">🤖 AI Insight</p>
        <p style="font-size:0.75rem;color:var(--text-muted);line-height:1.4;">${aiExplanations[item.id].explanation?.substring(0, 120)}...</p>
        ${aiExplanations[item.id].keyStrengths?.length ? `<div style="display:flex;flex-wrap:wrap;gap:0.3rem;margin-top:0.3rem;">${aiExplanations[item.id].keyStrengths.map(s => `<span style="font-size:0.6rem;padding:0.15rem 0.4rem;border-radius:6px;background:rgba(16,185,129,0.15);color:#10b981;font-weight:600;">${s}</span>`).join('')}</div>` : ''}
      </div>
      ` : ''}
      
      <div class="player-card-footer">
        <span class="player-value">${formattedVal}</span>
        <button class="btn-card-details" onclick="openPlayerModal('${item.id}')">Scout Profile</button>
      </div>
    `;
    
    playerGrid.appendChild(card);
  });
}

// ── AI Grid Search (LLM-powered) ──────────────────────────────────
async function handleAIGridSearch(query) {
  if (!hasApiKey()) {
    alert('Please set your Groq API key first. Click the \"⚙️ LLM Key\" button in the header to get started (free key from console.groq.com).');
    return;
  }

  // Show loading state
  btnAIGridSearch.disabled = true;
  btnAIGridSearch.innerText = '⏳ Analyzing...';
  logScraperConsole('AI Engine: Sending query to LLM (Llama 3.3 70B)...', 'info');

  // Reset tactical badges
  document.querySelectorAll('.role-badge').forEach(b => b.classList.remove('active'));
  activeTacticalRole = null;

  try {
    // Pre-filter candidates using keyword parser for LLM context
    const candidates = getPreFilteredForLLM(query);
    logScraperConsole(`Pre-filtered ${candidates.length} candidates for LLM analysis.`, 'info');

    const result = await callScoutAPI(query, candidates);

    // Map LLM recommendations back to full player objects
    const recs = result.recommendations || [];
    aiExplanations = {};
    activeAISearchResult = [];

    recs.forEach(rec => {
      const player = PLAYER_DATABASE.find(p => p.id === rec.id || p.name === rec.name);
      if (player) {
        activeAISearchResult.push({
          player,
          matchScore: rec.matchScore || 80,
          rationale: rec.explanation || 'Recommended by AI'
        });
        aiExplanations[player.id] = {
          explanation: rec.explanation,
          keyStrengths: rec.keyStrengths || [],
          concerns: rec.concerns || []
        };
      }
    });

    // Show results
    sortByMatchOption.style.display = 'block';
    sortBy.value = 'matchScore';
    btnClearAISearch.style.display = 'inline-flex';

    if (aiResultsBanner) {
      aiResultsBanner.style.display = 'block';
      aiResultsSummary.innerText = result.summary || `Found ${activeAISearchResult.length} players matching your criteria.`;
    }

    logScraperConsole(`LLM returned ${activeAISearchResult.length} recommendations. Top: ${activeAISearchResult[0]?.player.name} (${activeAISearchResult[0]?.matchScore}%)`, 'success');
    renderPlayers();

  } catch (err) {
    console.error('AI Grid Search error:', err);
    logScraperConsole(`Error: ${err.message}`, 'warn');
    // Fallback to rule-based search
    logScraperConsole('Falling back to rule-based search...', 'info');
    const ranked = rankPlayersByAIQuery(PLAYER_DATABASE, query);
    activeAISearchResult = ranked;
    if (ranked.length > 0) {
      sortByMatchOption.style.display = 'block';
      sortBy.value = 'matchScore';
      btnClearAISearch.style.display = 'inline-flex';
    }
    renderPlayers();
  } finally {
    btnAIGridSearch.disabled = false;
    btnAIGridSearch.innerText = 'Scout with AI';
  }
}

function clearAIGridSearch() {
  activeAISearchResult = null;
  aiExplanations = {};
  aiGridQuery.value = '';
  btnClearAISearch.style.display = 'none';
  if (aiResultsBanner) aiResultsBanner.style.display = 'none';
  sortByMatchOption.style.display = 'none';
  if (sortBy.value === 'matchScore') sortBy.value = 'rating';
  renderPlayers();
}

// Simulated Sync Scraper logs
function logScraperConsole(text, type = "info") {
  const line = document.createElement("div");
  line.className = `console-line ${type}`;
  line.innerText = `[${new Date().toLocaleTimeString()}] ${text}`;
  scraperConsole.appendChild(line);
  scraperConsole.scrollTop = scraperConsole.scrollHeight;
}

// Scraper Simulation triggering sequence
function handleScraperSync() {
  btnTriggerScraper.disabled = true;
  btnTriggerScraper.innerText = "Syncing...";
  logScraperConsole("Connecting to open-source database mirrors...", "info");
  setTimeout(() => {
    logScraperConsole("Fetching bootstrap statistics from Premier League servers...", "info");
  }, 1000);
  setTimeout(() => {
    logScraperConsole("Sync Complete: 441 player profiles successfully indexed & sync'd!", "success");
    btnTriggerScraper.disabled = false;
    btnTriggerScraper.innerText = "Trigger Open Source Sync";
    renderPlayers();
  }, 2200);
}

// ── Markdown-to-HTML formatter ────────────────────────────────────
function formatScoutMessage(text) {
  let html = text;
  html = html.replace(/### (.*)/g, '<h3>$1</h3>');
  html = html.replace(/#### (.*)/g, '<h4>$1</h4>');
  html = html.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
  html = html.replace(/\*(.*?)\*/g, '<em>$1</em>');
  // Convert bullet lists
  html = html.replace(/^- (.*)/gm, '<li>$1</li>');
  html = html.replace(/(<li>.*<\/li>)/gs, '<ul>$1</ul>');
  // Clean up multiple consecutive <ul> wrappers
  html = html.replace(/<\/ul>\s*<ul>/g, '');
  html = html.split('\n').join('<br>');
  return html;
}

// ── Chat: Send Message (LLM-powered) ──────────────────────────────
async function sendUserChatMessage() {
  const text = chatInput.value.trim();
  if (!text) return;

  // Append user message to UI
  const userMsg = document.createElement('div');
  userMsg.className = 'chat-msg user';
  userMsg.innerHTML = `<div class="chat-bubble"><p>${text}</p></div>`;
  chatHistory.appendChild(userMsg);
  chatInput.value = '';
  chatHistory.scrollTop = chatHistory.scrollHeight;

  // Track conversation context
  chatConversationHistory.push({ role: 'user', content: text });

  // Show typing indicator
  const typingEl = document.createElement('div');
  typingEl.className = 'chat-msg bot';
  typingEl.id = 'chatTyping';
  typingEl.innerHTML = `<div class="chat-bubble" style="display:flex;align-items:center;gap:0.5rem;"><span class="typing-dots">⏳</span> <em style="color:var(--text-muted);font-size:0.85rem;">AI is analyzing player data...</em></div>`;
  chatHistory.appendChild(typingEl);
  chatHistory.scrollTop = chatHistory.scrollHeight;
  btnSendChat.disabled = true;

  // Decide: use LLM or fallback
  if (hasApiKey()) {
    try {
      // Pre-filter relevant players for context
      const candidates = getPreFilteredForLLM(text);
      const result = await callChatAPI(text, candidates, chatConversationHistory.slice(-6));
      typingEl.remove();

      const responseText = result.text || 'I could not process that query. Please try again.';
      chatConversationHistory.push({ role: 'assistant', content: responseText });

      // Check for embedded shortlist data
      const shortlistMatch = responseText.match(/\|\|\|SHORTLIST\|\|\|(.*?)\|\|\|END\|\|\|/);
      let cleanText = responseText.replace(/\|\|\|SHORTLIST\|\|\|.*?\|\|\|END\|\|\|/g, '').trim();

      if (shortlistMatch) {
        try {
          const shortlistData = JSON.parse(shortlistMatch[1]);
          activeAISearchResult = shortlistData.map(item => {
            const player = PLAYER_DATABASE.find(p => p.id === item.id || p.name === item.name);
            return player ? { player, matchScore: item.matchScore || 80, rationale: 'Recommended by AI Scout' } : null;
          }).filter(Boolean);
          if (activeAISearchResult.length > 0) {
            sortByMatchOption.style.display = 'block';
            sortBy.value = 'matchScore';
            renderPlayers();
          }
        } catch (e) { /* ignore parse errors in shortlist */ }
      }

      const botMsg = document.createElement('div');
      botMsg.className = 'chat-msg bot';
      botMsg.innerHTML = `<div class="chat-bubble">${formatScoutMessage(cleanText)}</div>`;
      chatHistory.appendChild(botMsg);

    } catch (err) {
      typingEl.remove();
      console.error('Chat API error:', err);
      // Fallback to local
      const response = generateAIResponse(text, []);
      const botMsg = document.createElement('div');
      botMsg.className = 'chat-msg bot';
      botMsg.innerHTML = `<div class="chat-bubble"><p style="color:var(--accent-red);font-size:0.75rem;margin-bottom:0.5rem;">⚠ LLM unavailable (${err.message}), using local analysis:</p>${formatScoutMessage(response.text)}</div>`;
      chatHistory.appendChild(botMsg);
    }
  } else {
    // No API key: use local rule-based system
    typingEl.remove();
    const response = generateAIResponse(text, []);
    const botMsg = document.createElement('div');
    botMsg.className = 'chat-msg bot';
    botMsg.innerHTML = `<div class="chat-bubble"><p style="color:var(--text-dim);font-size:0.7rem;margin-bottom:0.5rem;">💡 Set a Groq API key for smarter AI responses</p>${formatScoutMessage(response.text)}</div>`;
    chatHistory.appendChild(botMsg);
    if (response.shortlist && response.shortlist.length > 1) {
      activeAISearchResult = response.shortlist;
      renderPlayers();
    }
  }

  btnSendChat.disabled = false;
  chatHistory.scrollTop = chatHistory.scrollHeight;
}

// Compare dropdown initialization and management
function initCompareDropdown() {
  // Search input keyup: filter the dropdown options
  compareSearchInput.addEventListener("input", () => {
    const query = compareSearchInput.value.trim().toLowerCase();
    if (!activeModalPlayer) return;
    
    // Show all players when search is cleared, or filter by query
    populateCompareDropdown(query);
    compareDropdownList.style.display = "block";
  });
  
  // Show dropdown on focus if there's text
  compareSearchInput.addEventListener("focus", () => {
    const query = compareSearchInput.value.trim().toLowerCase();
    if (activeModalPlayer && query.length > 0) {
      populateCompareDropdown(query);
      compareDropdownList.style.display = "block";
    } else if (activeModalPlayer) {
      // Show all players on focus with empty input
      populateCompareDropdown("");
      compareDropdownList.style.display = "block";
    }
  });
  
  // Close dropdown when clicking outside
  document.addEventListener("click", (e) => {
    if (!e.target.closest(".custom-compare-dropdown")) {
      compareDropdownList.style.display = "none";
    }
  });
}

function populateCompareDropdown(query) {
  compareDropdownList.innerHTML = "";
  
  const otherPlayers = PLAYER_DATABASE
    .filter(p => p.id !== activeModalPlayer.id)
    .filter(p => {
      if (!query) return true;
      const searchStr = `${p.name} ${p.position} ${p.club} ${p.league} ${p.nation} ${p.role}`.toLowerCase();
      return searchStr.includes(query);
    })
    .sort((a, b) => a.name.localeCompare(b.name));
  
  if (otherPlayers.length === 0) {
    const noResult = document.createElement("div");
    noResult.style.cssText = "padding: 0.8rem 1rem; color: var(--text-muted); font-size: 0.8rem; text-align: center;";
    noResult.innerText = "No players found";
    compareDropdownList.appendChild(noResult);
    return;
  }
  
  // Add a "Clear comparison" option if a player is selected
  if (selectedComparePlayerId) {
    const clearItem = document.createElement("div");
    clearItem.className = "compare-dropdown-item";
    clearItem.style.cssText = "padding: 0.6rem 1rem; cursor: pointer; font-size: 0.8rem; color: var(--accent-red); border-bottom: 1px solid var(--border-glass); transition: background 0.2s;";
    clearItem.innerText = "✕ Clear Comparison";
    clearItem.addEventListener("mouseenter", () => { clearItem.style.background = "rgba(239,68,68,0.15)"; });
    clearItem.addEventListener("mouseleave", () => { clearItem.style.background = "transparent"; });
    clearItem.addEventListener("click", (e) => {
      e.stopPropagation();
      selectedComparePlayerId = null;
      compareSearchInput.value = "";
      compareDropdownList.style.display = "none";
      updateModalComparison("");
    });
    compareDropdownList.appendChild(clearItem);
  }
  
  otherPlayers.forEach(p => {
    const item = document.createElement("div");
    item.className = "compare-dropdown-item";
    item.style.cssText = "padding: 0.6rem 1rem; cursor: pointer; font-size: 0.8rem; color: var(--text-main); transition: background 0.2s; display: flex; justify-content: space-between; align-items: center;";
    
    const isSelected = p.id === selectedComparePlayerId;
    if (isSelected) {
      item.style.background = "rgba(6, 182, 212, 0.15)";
      item.style.borderLeft = "3px solid var(--accent-cyan)";
    }
    
    item.innerHTML = `
      <span>${p.name}</span>
      <span style="color: var(--text-dim); font-size: 0.7rem;">${p.position} • ${p.club}</span>
    `;
    
    item.addEventListener("mouseenter", () => {
      if (!isSelected) item.style.background = "rgba(255,255,255,0.05)";
    });
    item.addEventListener("mouseleave", () => {
      if (!isSelected) item.style.background = "transparent";
    });
    
    item.addEventListener("click", (e) => {
      e.stopPropagation();
      selectedComparePlayerId = p.id;
      compareSearchInput.value = p.name;
      compareDropdownList.style.display = "none";
      updateModalComparison(p.id);
    });
    
    compareDropdownList.appendChild(item);
  });
}

// Modal open and compare setup
function openPlayerModal(playerId) {
  const player = PLAYER_DATABASE.find(p => p.id === playerId);
  if (!player) return;
  
  activeModalPlayer = player;
  selectedComparePlayerId = null;
  
  // Reset compare search input
  compareSearchInput.value = "";
  compareDropdownList.style.display = "none";
  compareDropdownList.innerHTML = "";
  
  // Load Player A details
  loadPlayerADetails(player);
  
  // Activate modal overlay
  profileModal.classList.add("active");
  document.body.style.overflow = "hidden";
}

function loadPlayerADetails(player) {
  const initials = player.name.split(" ").map(n => n[0]).join("").substring(0, 2);
  modalPlayerAvatar.innerText = initials;
  modalPlayerName.innerText = player.name;
  modalPlayerPosition.innerText = `${player.position} • ${player.role}`;
  modalPlayerClub.innerText = player.club;
  modalPlayerLeague.innerText = player.league;
  modalPlayerAge.innerText = `${player.age} years`;
  modalPlayerValue.innerText = player.value >= 1000000 ? `€${player.value / 1000000}M` : `€${player.value / 1000}`;
  modalPlayerNation.innerText = player.nation;
  
  // Hide player B visual structures
  modalCompareFitScore.style.display = "none";
  legendPlayerB.style.display = "none";
  heatmapLegend.style.display = "none";
  leagueComparisonSub.innerText = "Vs. League Average";
  radarChartTitle.innerText = `Tactical Rating Profile - ${player.position === 'FW' ? 'Forward' : player.position === 'MF' ? 'Midfielder' : player.position === 'DF' ? 'Defender' : 'Goalkeeper'}`;
  
  // Fill strengths / weaknesses
  modalPlayerStrengths.innerHTML = "";
  player.strengths.forEach(s => {
    const li = document.createElement("li");
    li.className = "sw-list-item strength";
    li.innerText = s;
    modalPlayerStrengths.appendChild(li);
  });
  
  modalPlayerWeaknesses.innerHTML = "";
  player.weaknesses.forEach(w => {
    const li = document.createElement("li");
    li.className = "sw-list-item weakness";
    li.innerText = w;
    modalPlayerWeaknesses.appendChild(li);
  });
  
  // Compute Tactical Fit
  let activeRoleSelection = activeTacticalRole;
  if (!activeRoleSelection) {
    if (player.position === "FW") activeRoleSelection = { roleId: "fw-poacher", name: "Poacher (Striker)", formationId: "4-3-3" };
    else if (player.position === "MF") activeRoleSelection = { roleId: "mf-b2b", name: "Box-to-Box Midfielder (CM)", formationId: "4-3-3" };
    else if (player.position === "DF") activeRoleSelection = { roleId: "df-ball-playing-cb", name: "Ball-Playing Defender (CB)", formationId: "4-3-3" };
    else activeRoleSelection = { roleId: "mf-anchor", name: "Anchor / Ball Winner (DM)", formationId: "4-2-3-1" };
  }
  
  const tacticalFit = evaluateTacticalFit(player, activeRoleSelection.roleId, activeRoleSelection.formationId);
  modalFitSystem.innerText = `${FORMATIONS[activeRoleSelection.formationId].name} (${activeRoleSelection.name})`;
  modalFitScore.innerText = `${tacticalFit.score}%`;
  modalFitRating.innerText = `Player A: ${tacticalFit.rating}`;
  modalFitNarrative.innerText = `"${tacticalFit.text}"`;
  
  if (tacticalFit.score >= 85) {
    modalFitScore.style.borderColor = "var(--accent-neon)";
    modalFitScore.style.color = "var(--accent-neon)";
  } else if (tacticalFit.score >= 70) {
    modalFitScore.style.borderColor = "var(--accent-cyan)";
    modalFitScore.style.color = "var(--accent-cyan)";
  } else {
    modalFitScore.style.borderColor = "var(--accent-red)";
    modalFitScore.style.color = "var(--accent-red)";
  }
  
  modalFitPros.innerHTML = "";
  tacticalFit.pros.forEach(pro => {
    const li = document.createElement("li");
    li.className = "sw-list-item strength";
    li.innerText = pro;
    modalFitPros.appendChild(li);
  });
  
  modalFitCons.innerHTML = "";
  tacticalFit.cons.forEach(con => {
    const li = document.createElement("li");
    li.className = "sw-list-item weakness";
    li.innerText = con;
    modalFitCons.appendChild(li);
  });
  
  // Render Percentile League Comparison
  renderLeagueComparisonBars(player, null);
  
  // Draw Canvas Heatmap
  drawHeatmap(player, null);
  
  // Render Radar Chart
  renderRadarChart(player, null);
}

// Render horizontal bars (handles single player or compared player)
function renderLeagueComparisonBars(playerA, playerB) {
  leagueComparisonContainer.innerHTML = "";
  
  playerA.leagueBenchmarks.forEach(benchA => {
    // Find matching metric in player B
    let valB = 0;
    if (playerB) {
      const benchB = playerB.leagueBenchmarks.find(b => b.metric === benchA.metric);
      if (benchB) valB = benchB.player;
    }
    
    // Calculations helpers
    const calculatePercentVal = (metric, val) => {
      if (metric.includes("%")) return val;
      if (metric.includes("per 90") || metric.includes("p90") || metric.includes("xG")) {
        const maxVal = metric.includes("Expected") || metric.includes("Created") || metric.includes("Accuracy") ? 100 : 1.5;
        return Math.min((val / maxVal) * 100, 100);
      }
      const maxVal = metric.includes("Chances") ? 100 : 35;
      return Math.min((val / maxVal) * 100, 100);
    };
    
    let percentA = calculatePercentVal(benchA.metric, benchA.player);
    let percentB = playerB ? calculatePercentVal(benchA.metric, valB) : 0;
    let avgPercent = calculatePercentVal(benchA.metric, benchA.avg);
    let elitePercent = calculatePercentVal(benchA.metric, benchA.elite);
    
    const displayVal = playerB ? `A: ${benchA.player} vs B: ${valB}` : `Player: ${benchA.player}`;
    
    const item = document.createElement("div");
    item.className = "comparison-bar-item";
    item.innerHTML = `
      <div class="comparison-meta">
        <span>${benchA.metric}</span>
        <span class="comparison-val-tag" style="font-family:var(--font-display);font-size:0.8rem;">${displayVal}</span>
      </div>
      <div class="comparison-bar-track">
        <div class="comparison-bar-player" data-width="${percentA}%"></div>
        ${playerB ? `<div class="comparison-bar-player-b" data-width="${percentB}%" style="height: 50%; top: 50%; background: linear-gradient(90deg, var(--accent-cyan), #67e8f9); position: absolute; left: 0; transition: width 1s cubic-bezier(0.1, 0.8, 0.25, 1); z-index: 2; border-bottom-left-radius: 6px; border-bottom-right-radius: 6px;"></div>` : ''}
        <div class="comparison-bar-avg" style="left: ${avgPercent}%;"></div>
        <div class="comparison-bar-elite" style="left: ${elitePercent}%;"></div>
      </div>
    `;
    leagueComparisonContainer.appendChild(item);
  });
  
  // Trigger bar widths animations
  setTimeout(() => {
    document.querySelectorAll(".comparison-bar-player").forEach(bar => {
      bar.style.width = bar.getAttribute("data-width");
    });
    document.querySelectorAll(".comparison-bar-player-b").forEach(bar => {
      bar.style.width = bar.getAttribute("data-width");
    });
  }, 100);
}

// Modal Comparison trigger
function updateModalComparison(comparedPlayerId) {
  if (!comparedPlayerId) {
    // Reset back to normal single player
    loadPlayerADetails(activeModalPlayer);
    return;
  }
  
  const playerB = PLAYER_DATABASE.find(p => p.id === comparedPlayerId);
  if (!playerB) return;
  
  // Update UI headers
  radarChartTitle.innerText = `Tactical Comparison: ${activeModalPlayer.name} vs ${playerB.name}`;
  leagueComparisonSub.innerText = `A: ${activeModalPlayer.name} | B: ${playerB.name}`;
  legendPlayerB.style.display = "flex";
  heatmapLegend.style.display = "flex";
  
  // Render dual radar chart
  renderRadarChart(activeModalPlayer, playerB);
  
  // Render dual heatmaps
  drawHeatmap(activeModalPlayer, playerB);
  
  // Render dual percentile bars
  renderLeagueComparisonBars(activeModalPlayer, playerB);
  
  // Calculate fit score for player B
  let activeRoleSelection = activeTacticalRole;
  if (!activeRoleSelection) {
    if (activeModalPlayer.position === "FW") activeRoleSelection = { roleId: "fw-poacher", name: "Poacher (Striker)", formationId: "4-3-3" };
    else if (activeModalPlayer.position === "MF") activeRoleSelection = { roleId: "mf-b2b", name: "Box-to-Box Midfielder (CM)", formationId: "4-3-3" };
    else if (activeModalPlayer.position === "DF") activeRoleSelection = { roleId: "df-ball-playing-cb", name: "Ball-Playing Defender (CB)", formationId: "4-3-3" };
    else activeRoleSelection = { roleId: "mf-anchor", name: "Anchor / Ball Winner (DM)", formationId: "4-2-3-1" };
  }
  
  const fitA = evaluateTacticalFit(activeModalPlayer, activeRoleSelection.roleId, activeRoleSelection.formationId);
  const fitB = evaluateTacticalFit(playerB, activeRoleSelection.roleId, activeRoleSelection.formationId);
  
  modalFitRating.innerText = `A: ${fitA.rating} | B: ${fitB.rating}`;
  modalFitScore.innerText = `${fitA.score}%`;
  modalCompareFitScore.innerText = `${fitB.score}%`;
  modalCompareFitScore.style.display = "flex";
  
  if (fitB.score >= 85) {
    modalCompareFitScore.style.borderColor = "var(--accent-neon)";
    modalCompareFitScore.style.color = "var(--accent-neon)";
  } else if (fitB.score >= 70) {
    modalCompareFitScore.style.borderColor = "var(--accent-cyan)";
    modalCompareFitScore.style.color = "var(--accent-cyan)";
  } else {
    modalCompareFitScore.style.borderColor = "var(--accent-red)";
    modalCompareFitScore.style.color = "var(--accent-red)";
  }
  
  modalFitNarrative.innerHTML = `
    <strong>AI Comparison Narrative:</strong><br>
    <strong>A (${activeModalPlayer.name}):</strong> ${fitA.text}<br><br>
    <strong>B (${playerB.name}):</strong> ${fitB.text}
  `;
}

function closeModal() {
  profileModal.classList.remove("active");
  document.body.style.overflow = "auto";
  activeModalPlayer = null;
  selectedComparePlayerId = null;
  // Clean up compare dropdown state
  if (compareSearchInput) compareSearchInput.value = "";
  if (compareDropdownList) {
    compareDropdownList.style.display = "none";
    compareDropdownList.innerHTML = "";
  }
  // Destroy radar chart to prevent memory leaks
  if (currentRadarChart) {
    currentRadarChart.destroy();
    currentRadarChart = null;
  }
}

// Draw heatmap onto pitch canvas
function drawHeatmap(playerA, playerB) {
  const canvas = document.getElementById("pitchCanvas");
  const ctx = canvas.getContext("2d");
  
  canvas.width = canvas.parentElement.clientWidth;
  canvas.height = canvas.parentElement.clientHeight;
  
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  
  // Draw Player A: Red
  if (playerA && playerA.heatmap) {
    playerA.heatmap.forEach(point => {
      const x = (point.x / 100) * canvas.width;
      const y = (1 - (point.y / 100)) * canvas.height;
      const radius = point.r || 35;
      const intensity = point.v || 0.8;
      
      const grad = ctx.createRadialGradient(x, y, 2, x, y, radius);
      grad.addColorStop(0, `rgba(239, 68, 68, ${intensity})`); // Red Core
      grad.addColorStop(0.4, `rgba(245, 158, 11, ${intensity * 0.5})`); // Orange
      grad.addColorStop(1, 'rgba(0, 0, 0, 0)'); // Alpha
      
      ctx.fillStyle = grad;
      ctx.beginPath();
      ctx.arc(x, y, radius, 0, Math.PI * 2);
      ctx.fill();
    });
  }
  
  // Draw Player B: Cyan
  if (playerB && playerB.heatmap) {
    playerB.heatmap.forEach(point => {
      const x = (point.x / 100) * canvas.width;
      const y = (1 - (point.y / 100)) * canvas.height;
      const radius = point.r || 35;
      const intensity = point.v || 0.8;
      
      const grad = ctx.createRadialGradient(x, y, 2, x, y, radius);
      grad.addColorStop(0, `rgba(6, 182, 212, ${intensity})`); // Cyan Core
      grad.addColorStop(0.4, `rgba(59, 130, 246, ${intensity * 0.5})`); // Blue
      grad.addColorStop(1, 'rgba(0, 0, 0, 0)');
      
      ctx.fillStyle = grad;
      ctx.beginPath();
      ctx.arc(x, y, radius, 0, Math.PI * 2);
      ctx.fill();
    });
  }
}

// Helper to calculate dynamic tactical metrics based on position
function getTacticalMetricsForPosition(player, pos) {
  const stats = player.detailedStats || {};
  const apps = player.general?.apps || 1;
  let labels = [];
  let values = [];
  
  if (pos === 'GK') {
    labels = ['Save %', 'Clean Sheet Rate', 'PSxG Prevented', 'Distribution %', 'Sweeper Actions', 'Claim Distance'];
    values = [
      stats.savePercentage || player.attributes?.defending || 70,
      ((stats.cleanSheets || 0) / apps) * 150,
      50 + ((stats.psxgDifference || 0) * 5),
      stats.passingAccuracy || player.attributes?.passing || 70,
      (stats.sweeperActionsPer90 || 0) * 60,
      (stats.averageDistanceOfSweeperActions || 0) * 5
    ];
  } else if (pos === 'DF') {
    labels = ['Tackles p90', 'Interceptions p90', 'Clearances p90', 'Aerial Duel Win %', '1v1 Tackled Rate', 'Passing Accuracy'];
    values = [
      (stats.tacklesWonPer90 || 0) * 22,
      (stats.interceptionsPer90 || 0) * 45,
      (stats.clearancesPer90 || 0) * 12,
      stats.aerialDuelWinPercentage || player.attributes?.defending || 70,
      stats.tackledDribblerRate || player.attributes?.tactical || 70,
      stats.passingAccuracy || player.attributes?.passing || 70
    ];
  } else if (pos === 'MF') {
    labels = ['Key Passes p90', 'Prog. Passes p90', 'Passing Accuracy', 'Chances Created', 'Ball Recoveries', 'Tackles p90'];
    values = [
      (stats.keyPassesPer90 || 0) * 45,
      (stats.progressivePassesPer90 || 0) * 8,
      stats.passingAccuracy || player.attributes?.passing || 70,
      ((stats.chancesCreated || 0) / apps) * 20,
      (stats.ballRecoveriesPer90 || 0) * 10,
      (stats.tacklesWonPer90 || 0) * 22
    ];
  } else { // FW
    labels = ['Goals p90', 'Expected Goals (xG)', 'Shot Conversion %', 'Chances Created', 'Dribbles Completed', 'Touches in Box'];
    values = [
      (stats.goalsPer90 || 0) * 150,
      ((stats.expectedGoals || 0) / apps) * 150,
      (stats.shotConversionRate || 0) * 3,
      ((stats.chancesCreated || 0) / apps) * 20,
      (stats.dribblesCompletedPer90 || 0) * 25,
      (stats.touchesInBoxPer90 || 0) * 15
    ];
  }
  
  return {
    labels,
    values: values.map(v => Math.max(0, Math.min(100, Math.round(v))))
  };
}

// Render overall stats Radar Chart via Chart.js
function renderRadarChart(playerA, playerB) {
  const ctx = document.getElementById("radarChart").getContext("2d");
  
  if (currentRadarChart) {
    currentRadarChart.destroy();
  }
  
  const targetPos = playerA.position;
  const metricsA = getTacticalMetricsForPosition(playerA, targetPos);
  
  const datasets = [{
    label: playerA.name,
    data: metricsA.values,
    backgroundColor: 'rgba(16, 185, 129, 0.15)',
    borderColor: '#10b981',
    borderWidth: 2,
    pointBackgroundColor: '#10b981',
    pointBorderColor: '#ffffff',
    pointHoverBackgroundColor: '#ffffff',
    pointHoverBorderColor: '#10b981',
    pointRadius: 4,
    pointHoverRadius: 6
  }];
  
  if (playerB) {
    const metricsB = getTacticalMetricsForPosition(playerB, targetPos);
    datasets.push({
      label: playerB.name,
      data: metricsB.values,
      backgroundColor: 'rgba(6, 182, 212, 0.15)',
      borderColor: '#06b6d4',
      borderWidth: 2,
      pointBackgroundColor: '#06b6d4',
      pointBorderColor: '#ffffff',
      pointHoverBackgroundColor: '#ffffff',
      pointHoverBorderColor: '#06b6d4',
      pointRadius: 4,
      pointHoverRadius: 6
    });
  }
  
  const options = {
    scales: {
      r: {
        grid: {
          color: 'rgba(255, 255, 255, 0.08)'
        },
        angleLines: {
          color: 'rgba(255, 255, 255, 0.08)'
        },
        pointLabels: {
          color: '#9ca3af',
          font: {
            family: 'Montserrat',
            weight: '600',
            size: 9
          }
        },
        ticks: {
          display: false,
          stepSize: 20
        },
        min: 0,
        max: 100,
        backgroundColor: 'rgba(0, 0, 0, 0.2)'
      }
    },
    plugins: {
      legend: {
        display: false
      },
      tooltip: {
        callbacks: {
          label: function(context) {
            return `${context.dataset.label} - ${context.label}: ${context.raw}/100`;
          }
        }
      }
    },
    responsive: true,
    maintainAspectRatio: false
  };
  
  currentRadarChart = new Chart(ctx, {
    type: 'radar',
    data: {
      labels: metricsA.labels,
      datasets: datasets
    },
    options: options
  });
}
