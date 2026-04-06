// ══ Registry — Centralized region, monster, patrol & event configuration ══
// Loaded AFTER state.js/utils.js, BEFORE nodes.js/patrol.js/region*.js
// Provides extensible registries so adding R4+ requires zero changes to core files.

// ─── Region Configuration ───
// Single source of truth for region metadata. Used by nodes.js, patrol.js, title.js, chapter_select.
var REGION_CONFIG = [
  { id: 0, zh: '祭獻坑',   en: 'Sacrificial Pit',  hub: 'r0_look', start: 'r0_start', patrol: 'r0_patrol', icon: '†' },
  { id: 1, zh: '石脈迴廊', en: 'Vein Corridor',     hub: 'r1_look', start: 'r1_start', patrol: 'r1_patrol', icon: '◇' },
  { id: 2, zh: '大採石場', en: 'Great Quarry',       hub: 'r2_look', start: 'r2_start', patrol: 'r2_patrol', icon: '⛏' },
  { id: 3, zh: '河城渡口', en: 'River City Ferry',   hub: 'r3_look', start: 'r3_start', patrol: 'r3_patrol', icon: '⚓' },
];

function getRegionConfig(id) {
  return REGION_CONFIG[id] || REGION_CONFIG[0];
}

function getRegionName(id) {
  var cfg = getRegionConfig(id);
  return L(cfg.zh, cfg.en);
}

function getHubNode(regionId) {
  return getRegionConfig(regionId != null ? regionId : state.region).hub;
}

function getStartNode(regionId) {
  return getRegionConfig(regionId != null ? regionId : state.region).start;
}

// Register a new region (for R4+ expansion)
function registerRegion(cfg) {
  // cfg: { id, zh, en, hub, start, patrol, icon }
  if (REGION_CONFIG[cfg.id]) {
    // Update existing
    for (var k in cfg) { REGION_CONFIG[cfg.id][k] = cfg[k]; }
  } else {
    // Expand array to fit
    while (REGION_CONFIG.length <= cfg.id) REGION_CONFIG.push(null);
    REGION_CONFIG[cfg.id] = cfg;
  }
}

// ─── Node Metadata Registry ───
// Optional metadata per node: { region, type, npc, tags }
// type: 'hub' | 'start' | 'explore' | 'combat' | 'boss' | 'npc' | 'rest' | 'gate' | 'ending' | 'hidden'
var _nodeMeta = {};

function registerNodeMeta(id, meta) {
  _nodeMeta[id] = meta;
}

// Batch-register metadata for multiple nodes
function registerNodeMetaBatch(entries) {
  for (var i = 0; i < entries.length; i++) {
    _nodeMeta[entries[i].id] = entries[i];
  }
}

function getNodeMeta(id) {
  return _nodeMeta[id] || null;
}

function getNodesByRegion(regionId) {
  var result = [];
  for (var id in _nodeMeta) {
    if (_nodeMeta[id].region === regionId) result.push(id);
  }
  return result;
}

function getNodesByType(type) {
  var result = [];
  for (var id in _nodeMeta) {
    if (_nodeMeta[id].type === type) result.push(id);
  }
  return result;
}

function getNodesByNpc(npcId) {
  var result = [];
  for (var id in _nodeMeta) {
    var m = _nodeMeta[id];
    if (m.npc === npcId || (m.npcs && m.npcs.indexOf(npcId) !== -1)) result.push(id);
  }
  return result;
}

// ─── Safe Revive Map ───
// Extensible mapping: dangerous node → safe fallback node for revival
var _safeReviveMap = {
  'r0_tunnel': 'r0_climb_check',
  'r1_guard_fight': 'r1_look',
  'r1_guard_check': 'r1_look',
  'r2_boss': 'r2_camp',
  'r2_boss_prep': 'r2_camp',
  'r3_patrol': 'r3_look',
  'r3_boss': 'r3_council',
  'r3_boss_prep': 'r3_council',
};

function registerSafeRevive(nodeId, safeNodeId) {
  _safeReviveMap[nodeId] = safeNodeId;
}

function registerSafeReviveBatch(map) {
  for (var k in map) _safeReviveMap[k] = map[k];
}

function getSafeReviveNode(nodeId) {
  if (_safeReviveMap[nodeId]) return _safeReviveMap[nodeId];
  // Heuristic: combat/patrol/tunnel/boss nodes fall back to region hub
  if (nodeId && (nodeId.indexOf('combat') !== -1 || nodeId.indexOf('patrol') !== -1 ||
      nodeId.indexOf('tunnel') !== -1 || nodeId.indexOf('guard_fight') !== -1 ||
      nodeId.indexOf('boss') !== -1)) {
    return getHubNode(state.region);
  }
  return nodeId;
}

// ─── Monster Pool Registry ───
var _monsterPools = {};

function registerMonsterPool(regionId, monsters) {
  _monsterPools[regionId] = monsters;
}

function getMonsterPool(regionId) {
  var id = regionId != null ? regionId : state.region;
  return _monsterPools[id] || _monsterPools[0] || [];
}

// ─── Patrol Text Registry ───
var _patrolTextPools = {};

function registerPatrolTexts(regionId, texts) {
  _patrolTextPools[regionId] = texts;
}

function getPatrolTextPool(regionId) {
  var id = regionId != null ? regionId : state.region;
  return _patrolTextPools[id] || _patrolTextPools[0] || [];
}

// ─── Narrative Event Registry (for patrol random events) ───
// Each event: { id, flag, region, buildQueue: function(queue){} }
var _narrativeEventPools = {};

function registerPatrolEvents(regionId, events) {
  if (!_narrativeEventPools[regionId]) _narrativeEventPools[regionId] = [];
  _narrativeEventPools[regionId] = _narrativeEventPools[regionId].concat(events);
}

function getAvailablePatrolEvents(regionId) {
  var id = regionId != null ? regionId : state.region;
  var pool = _narrativeEventPools[id] || [];
  return pool.filter(function(e) { return !state.flags[e.flag]; });
}

// ─── NPC Registry (for future expansion) ───
var NPC_REGISTRY = {
  ying:      { zh: '螢',       en: 'Ying',         sex: 'adapt', firstNode: 'r1_ying_encounter', regions: [1,2,3] },
  zhou:      { zh: '老周',     en: 'Old Zhou',     sex: 'male',  firstNode: 'r1_survivor',       regions: [1,3] },
  crane:     { zh: '灰鶴',     en: 'Grey Crane',   sex: 'female',firstNode: 'r1_wanderer',       regions: [1,2,3] },
  frost:     { zh: '鐵霜',     en: 'Iron Frost',   sex: 'female',firstNode: 'r2_camp_chief',     regions: [2] },
  cheng:     { zh: '承鋼',     en: 'Cheng Gang',   sex: 'male',  firstNode: 'r2_camp_chief',     regions: [2] },
  cast:      { zh: '老鑄',     en: 'Old Cast',     sex: 'male',  firstNode: 'r2_camp_smith',     regions: [2] },
  dew:       { zh: '清露',     en: 'Dew',          sex: 'female',firstNode: 'r2_camp_medic',     regions: [2] },
  bell:      { zh: '銅鐘',     en: 'Bronze Bell',  sex: 'female',firstNode: 'r3_bell',           regions: [3] },
  ferryman:  { zh: '冥河渡江人',en: 'Ferryman',     sex: 'male',  firstNode: 'r0_ferryman_meet',  regions: [0] },
};

function getNpcName(npcId) {
  var npc = NPC_REGISTRY[npcId];
  return npc ? L(npc.zh, npc.en) : npcId;
}

function registerNpc(id, data) {
  NPC_REGISTRY[id] = data;
}
