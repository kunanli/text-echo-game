// ══ Global Statistics Tracker ══
// Tracks cross-run statistics in localStorage, displayed after endings

var STATS_KEY = 'petriabyss_global_stats';

var globalStats = {
  totalRuns: 0,
  totalDeaths: 0,
  endings: { dawn: 0, compromise: 0, lockdown: 0, sacrifice: 0 },
  totalCombats: 0,
  totalPetriEvents: 0,
  maxLevelReached: 1,
  maxPetriReached: 0,
  regionVisits: [0, 0, 0, 0],
  bossMethodCounts: { persuade: 0, sneak: 0, fight: 0 },
  npcEncounters: { ying: 0, crane: 0, zhou: 0, frost: 0, bell: 0 },
  totalPlayTimeMs: 0,
  fastestRunMs: 0,
  currentRunStartMs: 0,
  bankedPoints: 0,
  bankedGold: 0,          // NG+-only: persistent gold carried across cycles (best value)
  romanceHistory: {},     // { ying: { maxAffinity: 85, timesRomanced: 1 }, ... }
  romanceCarryOver: null, // last-run romance NPC id (for NG+ inheritance)
};

function loadGlobalStats() {
  try {
    var json = localStorage.getItem(STATS_KEY);
    if (!json) return;
    var saved = JSON.parse(json);
    for (var key in saved) {
      if (saved.hasOwnProperty(key)) {
        if (typeof globalStats[key] === 'object' && !Array.isArray(globalStats[key])) {
          for (var subKey in saved[key]) {
            if (saved[key].hasOwnProperty(subKey)) globalStats[key][subKey] = saved[key][subKey];
          }
        } else {
          globalStats[key] = saved[key];
        }
      }
    }
  } catch (e) { /* ignore */ }
}

function saveGlobalStats() {
  try {
    localStorage.setItem(STATS_KEY, JSON.stringify(globalStats));
  } catch (e) { /* ignore */ }
}

// Call at game start
function statsStartRun() {
  globalStats.currentRunStartMs = Date.now();
  saveGlobalStats();
}

// Call during gameplay to track events
function statsTrackCombat() {
  globalStats.totalCombats++;
  saveGlobalStats();
}

function statsTrackPetriEvent() {
  globalStats.totalPetriEvents++;
  if (state.petri > globalStats.maxPetriReached) {
    globalStats.maxPetriReached = state.petri;
  }
  saveGlobalStats();
}

function statsTrackRegion(regionIdx) {
  if (regionIdx >= 0 && regionIdx < 4) {
    globalStats.regionVisits[regionIdx]++;
    saveGlobalStats();
  }
}

function statsTrackLevel() {
  if (state.level > globalStats.maxLevelReached) {
    globalStats.maxLevelReached = state.level;
    saveGlobalStats();
  }
}

// Call at ending — records the full run stats
function statsRecordEnding(endingType) {
  globalStats.totalRuns++;
  globalStats.totalDeaths += state.deathCount;
  if (globalStats.endings[endingType] !== undefined) {
    globalStats.endings[endingType]++;
  }
  if (state.level > globalStats.maxLevelReached) {
    globalStats.maxLevelReached = state.level;
  }
  if (state.petri > globalStats.maxPetriReached) {
    globalStats.maxPetriReached = state.petri;
  }
  // Boss method
  var method = state.flags.r3BossMethod || 'fight';
  if (globalStats.bossMethodCounts[method] !== undefined) {
    globalStats.bossMethodCounts[method]++;
  }
  // NPC encounters
  if (state.flags.r1YingCompanion) globalStats.npcEncounters.ying++;
  if (state.flags.r2CraneMet || state.flags.r3CraneMet3) globalStats.npcEncounters.crane++;
  if (state.flags.r3ZhouMet) globalStats.npcEncounters.zhou++;
  if (state.flags.r3BellMet) globalStats.npcEncounters.bell++;
  // Play time
  var runTime = 0;
  if (globalStats.currentRunStartMs > 0) {
    runTime = Date.now() - globalStats.currentRunStartMs;
    globalStats.totalPlayTimeMs += runTime;
    if (runTime > 0 && (globalStats.fastestRunMs === 0 || runTime < globalStats.fastestRunMs)) {
      globalStats.fastestRunMs = runTime;
    }
  }
  // Romance stats
  if (typeof recordRomanceStats === 'function') recordRomanceStats();
  saveGlobalStats();
  return runTime;
}

// Format milliseconds to readable time
function formatTime(ms) {
  if (!ms || ms <= 0) return '--:--';
  var s = Math.floor(ms / 1000);
  var m = Math.floor(s / 60);
  var h = Math.floor(m / 60);
  s = s % 60;
  m = m % 60;
  if (h > 0) return h + 'h ' + m + 'm';
  if (m > 0) return m + 'm ' + s + 's';
  return s + 's';
}

// Generate stats summary HTML for the ending screen
function renderStatsSummary() {
  var en = state.lang === 'en';
  var total = globalStats.totalRuns;

  // Most chosen ending
  var maxEnding = 'dawn';
  var maxCount = 0;
  for (var e in globalStats.endings) {
    if (globalStats.endings[e] > maxCount) {
      maxCount = globalStats.endings[e];
      maxEnding = e;
    }
  }
  var endingNames = en
    ? { dawn: 'Dawn', compromise: 'Compromise', lockdown: 'Lockdown', sacrifice: 'Sacrifice' }
    : { dawn: '黎明', compromise: '妥協', lockdown: '封鎖', sacrifice: '犧牲' };

  // Most chosen boss method
  var maxMethod = 'fight';
  var maxMCount = 0;
  for (var m in globalStats.bossMethodCounts) {
    if (globalStats.bossMethodCounts[m] > maxMCount) {
      maxMCount = globalStats.bossMethodCounts[m];
      maxMethod = m;
    }
  }
  var methodNames = en
    ? { persuade: 'Persuade', sneak: 'Sneak', fight: 'Fight' }
    : { persuade: '說服', sneak: '潛行', fight: '戰鬥' };

  var html = '';
  html += '<div class="stats-summary">';
  html += '<h4 class="stats-title">' + (en ? '═══ GLOBAL STATISTICS ═══' : '═══ 全域統計 ═══') + '</h4>';
  html += '<div class="stats-grid">';
  html += '<div class="stats-item"><span class="stats-label">' + (en ? 'Total Runs' : '總遊玩次數') + '</span><span class="stats-val">' + total + '</span></div>';
  html += '<div class="stats-item"><span class="stats-label">' + (en ? 'Total Deaths' : '累計死亡') + '</span><span class="stats-val">' + globalStats.totalDeaths + '</span></div>';
  html += '<div class="stats-item"><span class="stats-label">' + (en ? 'Total Combats' : '累計戰鬥') + '</span><span class="stats-val">' + globalStats.totalCombats + '</span></div>';
  html += '<div class="stats-item"><span class="stats-label">' + (en ? 'Max Level' : '最高等級') + '</span><span class="stats-val">' + globalStats.maxLevelReached + '</span></div>';
  html += '<div class="stats-item"><span class="stats-label">' + (en ? 'Max Petri' : '最高石化度') + '</span><span class="stats-val">' + globalStats.maxPetriReached + '%</span></div>';
  html += '<div class="stats-item"><span class="stats-label">' + (en ? 'Total Playtime' : '總遊玩時間') + '</span><span class="stats-val">' + formatTime(globalStats.totalPlayTimeMs) + '</span></div>';
  html += '</div>';

  // Ending breakdown
  if (total > 0) {
    html += '<div class="stats-section">';
    html += '<div class="stats-subtitle">' + (en ? 'Ending Breakdown' : '結局分布') + '</div>';
    var endings = ['dawn', 'compromise', 'lockdown', 'sacrifice'];
    var endingColors = { dawn: '#60c8e0', compromise: '#d4a843', lockdown: '#c06060', sacrifice: '#9a8ac8' };
    for (var i = 0; i < endings.length; i++) {
      var eid = endings[i];
      var cnt = globalStats.endings[eid] || 0;
      var pct = total > 0 ? Math.round(cnt / total * 100) : 0;
      html += '<div class="stats-bar-row">';
      html += '<span class="stats-bar-label" style="color:' + endingColors[eid] + '">' + endingNames[eid] + '</span>';
      html += '<div class="stats-bar-track"><div class="stats-bar-fill" style="width:' + pct + '%;background:' + endingColors[eid] + '"></div></div>';
      html += '<span class="stats-bar-count">' + cnt + '</span>';
      html += '</div>';
    }
    html += '</div>';

    // Preferred approach
    html += '<div class="stats-section">';
    html += '<div class="stats-subtitle">' + (en ? 'Preferred Approach' : '偏好策略') + '</div>';
    html += '<span class="stats-val">' + methodNames[maxMethod] + ' (' + maxMCount + ')</span>';
    html += '</div>';
  }

  html += '</div>';
  return html;
}

// Initialize on load
loadGlobalStats();
