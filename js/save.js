// ══ Save / Load System ══
// localStorage auto-save + shareable base64 save code + 3 manual save slots

var SAVE_KEY = 'petrification_abyss_save';
var SLOT_KEY_PREFIX = 'petrification_abyss_slot_';

function saveGame() {
  try {
    var data = {
      name: state.name,
      sex: state.sex,
      hp: state.hp,
      maxHp: state.maxHp,
      petri: state.petri,
      str: state.str,
      agi: state.agi,
      wil: state.wil,
      xp: state.xp,
      level: state.level,
      xpToNext: state.xpToNext,
      inventory: state.inventory.slice(),
      region: state.region,
      node: state.node,
      flags: JSON.parse(JSON.stringify(state.flags)),
      deathCount: state.deathCount,
      lang: state.lang,
      mood: state.mood,
    };
    localStorage.setItem(SAVE_KEY, JSON.stringify(data));
  } catch (e) { /* storage full or unavailable */ }
}

function loadSave() {
  try {
    var json = localStorage.getItem(SAVE_KEY);
    if (!json) return false;
    var data = JSON.parse(json);
    state.name = data.name || '旅者';
    state.sex = data.sex || 'male';
    state.maxHp = data.maxHp || 100;
    state.hp = clamp(data.hp != null ? data.hp : 100, 0, state.maxHp);
    state.petri = clamp(data.petri || 0, 0, 99);
    state.str = data.str || 5;
    state.agi = data.agi || 5;
    state.wil = data.wil || 5;
    state.xp = data.xp || 0;
    state.level = data.level || 1;
    state.xpToNext = data.xpToNext || 20;
    state.inventory = data.inventory || [];
    state.region = data.region || 0;
    state.node = data.node || 'r0_start';
    state.flags = data.flags || {};
    state.deathCount = data.deathCount || 0;
    state.lang = data.lang || 'zh';
    state.mood = data.mood || 'normal';
    return true;
  } catch (e) {
    return false;
  }
}

function hasSave() {
  return !!localStorage.getItem(SAVE_KEY);
}

function deleteSave() {
  localStorage.removeItem(SAVE_KEY);
}

// ── Seed-based share code (compact) ──
// Encodes state into a short alphanumeric string (~30-50 chars)

var SEED_NODES = [
  'r0_start','r0_body','r0_look','r0_patrol','r0_corpse','r0_statues',
  'r0_whisper','r0_ritual','r0_hidden','r0_rest','r0_crack',
  'r0_climb_check','r0_climb_str','r0_climb_alt','r0_tunnel',
  'r0_after_lizard','r0_path',
  'r1_start','r1_look','r1_forge','r1_furnace','r1_forge_search',
  'r1_crystal','r1_crystal_items','r1_guard_check','r1_guard_fight',
  'r1_guard_weak','r1_guard_sneak','r1_deep','r1_quarters','r1_rest',
  'r1_gate','r1_gate_open','r1_patrol',
  'r2_start','r2_look','r2_quarry_floor','r2_crystal_harvest','r2_crystal_deep',
  'r2_machine','r2_machine_activate','r2_bridge','r2_bridge_fix','r2_bridge_swing',
  'r2_bridge_jump','r2_camp','r2_camp_chief','r2_camp_smith','r2_camp_medic',
  'r2_rest','r2_boss_prep','r2_boss','r2_gate','r2_patrol',
  'r2_ying_talk','r2_ying_seal','r2_ying_night','r2_ying_promise',
  'r2_crane','r2_zhou_trace','chapter_select',
  'r3_start','r3_look','r3_dock','r3_market','r3_council','r3_inn',
  'r3_bell','r3_ying_talk','r3_ying_inn','r3_zhou','r3_crane','r3_patrol',
  'r3_quest_check','r3_boss_prep','r3_boss','r3_vote','r3_testimony',
  'r3_ending_dawn','r3_ending_compromise','r3_ending_lockdown','r3_ending_sacrifice',
  'r3_epilogue',
];

var SEED_ITEMS_ZH = [
  '碎石匕首','黑麵包','微光石','石化水瓶','乾燥草藥','粗繩','石化結晶',
  '鍛造鐵錘','迴廊地圖','純淨石化結晶','灰石盾','守衛核心石',
  '抗石化護符','礦工烈酒','皮甲碎片',
  '強化鶴嘴鋤','抗石化藥膏','高純度石化結晶','工程師筆記',
  '機甲控制鍵','精鍛戰鋤','濃縮淨化液',
  '螢的護身符','石化抑制劑',
  '河城地圖','河城草藥包','河城淨化液',
];
var SEED_ITEMS_EN = [
  'Stone Dagger','Black Bread','Glowstone','Petri-Water Flask','Dried Herbs','Rope','Petri Crystal',
  'Forged Hammer','Corridor Map','Pure Petri Crystal','Greystone Shield','Guardian Core Stone',
  'Anti-Petri Amulet','Miner\'s Spirits','Leather Scrap',
  'Reinforced Pickaxe','Anti-Petri Salve','High-Purity Petri Crystal','Engineer\'s Notebook',
  'Mech Control Key','Masterwork War Pick','Concentrated Purifier',
  'Ying\'s Charm','Petri Suppressant',
  'River City Map','River City Herb Pack','River City Purifier',
];

var SEED_FLAGS = [
  'lookedAround','corpseSearched','corpseWarning','statuesSearched',
  'tookCrystal','hiddenFound',
  'r1Looked','r1ForgeVisited','r1ForgeSearched','r1ForgeFullSearch',
  'r1GuardHint','r1GuardDefeated','r1CrystalItemsTaken','r1QuartersSearched',
  'r1CrystalVisited','r1DeepVisited',
  'r2Looked','r2FloorSearched','r2CrystalHarvested','r2CrystalStatueSearched',
  'r2MachineInspected','r2MachineCore','r2BridgeFixed','r2CampVisited',
  'r2ChiefTalked','r2PickaxeUpgraded','r2ArmorUpgraded',
  'r2MedicHealed','r2MedicElixir','r2BossDefeated','r2FloorVisited',
  'r2YingArrived','r2YingLore3','r2YingLore4','r2YingSketch','r2YingNight',
  'r2YingPromise','r2YingEngineer',
  'r2CraneMet','r2CraneLore','r2CraneTrade','r2ZhouTrace',
  'r3Looked','r3DockVisited','r3MarketVisited','r3CouncilUnlocked','r3CouncilVisited',
  'r3CouncilEntry','r3InnUnlocked','r3InnFirstVisit',
  'r3CaptainTalked','r3DockSearch','r3MarketRumor','r3MarketBuy',
  'r3BellMet','r3BellReport','r3BellAlliance','r3BellQuest',
  'r3YingArrived','r3YingCity','r3YingEvidence','r3YingInn',
  'r3ZhouMet','r3ZhouUpgrade',
  'r3CraneMet3','r3CraneTestimony','r3CraneTrade3',
  'r3PlagueProof','r3BossDefeated','r3Ending',
  'craneSwordOffered','r3DicePlayed',
];

var B36 = '0123456789abcdefghijklmnopqrstuvwxyz';

function toB36(num, len) {
  var s = '';
  num = Math.max(0, Math.floor(num));
  for (var i = 0; i < len; i++) {
    s = B36[num % 36] + s;
    num = Math.floor(num / 36);
  }
  return s;
}

function fromB36(str) {
  var n = 0;
  for (var i = 0; i < str.length; i++) {
    n = n * 36 + B36.indexOf(str[i].toLowerCase());
  }
  return n;
}

// Pack boolean flags into b36 string (5 bits per char, safe from 32-bit overflow)
function packBitsB36(list, lookup) {
  var s = '';
  for (var i = 0; i < list.length; i += 5) {
    var val = 0;
    for (var j = 0; j < 5 && i + j < list.length; j++) {
      if (lookup(i + j)) val |= (1 << j);
    }
    s += B36[val];
  }
  return s;
}

// Unpack b36 string into callback (5 bits per char)
function unpackBitsB36(str, count, setter) {
  for (var i = 0; i < count; i++) {
    var ci = Math.floor(i / 5);
    var bi = i % 5;
    var val = B36.indexOf(str[ci].toLowerCase());
    if (val & (1 << bi)) setter(i);
  }
}

function exportSaveCode() {
  try {
    var parts = [];
    // Header (PA2 = fixed bit-packing format)
    parts.push('PA2');
    // Sex + lang (1 char each)
    parts.push(state.sex === 'female' ? '1' : '0');
    parts.push(state.lang === 'en' ? '1' : '0');
    // Stats: hp(3), maxHp(3), petri(2), str(2), agi(2), wil(2)
    parts.push(toB36(state.hp, 3));
    parts.push(toB36(state.maxHp, 3));
    parts.push(toB36(state.petri, 2));
    parts.push(toB36(state.str, 2));
    parts.push(toB36(state.agi, 2));
    parts.push(toB36(state.wil, 2));
    // XP(3), level(2), region(1), deathCount(2)
    parts.push(toB36(state.xp, 3));
    parts.push(toB36(state.level, 2));
    parts.push(toB36(state.region, 1));
    parts.push(toB36(state.deathCount, 2));
    // Node index (2 chars)
    var nodeIdx = SEED_NODES.indexOf(state.node);
    if (nodeIdx < 0) nodeIdx = 0;
    parts.push(toB36(nodeIdx, 2));
    // Inventory + flags char counts (stored before data for forward compat)
    var invChars = Math.ceil(SEED_ITEMS_ZH.length / 5);
    var flagChars = Math.ceil(SEED_FLAGS.length / 5);
    parts.push(toB36(invChars, 1));
    parts.push(toB36(flagChars, 1));
    // Inventory bits (5 items per b36 char)
    parts.push(packBitsB36(SEED_ITEMS_ZH, function(i) {
      return state.inventory.indexOf(SEED_ITEMS_ZH[i]) !== -1
          || state.inventory.indexOf(SEED_ITEMS_EN[i]) !== -1;
    }));
    // Flags bits (5 flags per b36 char)
    parts.push(packBitsB36(SEED_FLAGS, function(i) {
      return !!state.flags[SEED_FLAGS[i]];
    }));
    // Name (URI-encode then base36 length prefix + raw)
    var nameEnc = encodeURIComponent(state.name);
    parts.push(toB36(nameEnc.length, 2) + nameEnc);
    // Checksum (simple sum of all preceding chars mod 36)
    var all = parts.join('');
    var cksum = 0;
    for (var i = 0; i < all.length; i++) cksum = (cksum + all.charCodeAt(i)) % 36;
    parts.push(B36[cksum]);

    return parts.join('');
  } catch (e) { return ''; }
}

function importSaveCode(code) {
  try {
    code = code.trim();
    if (code.indexOf('PA2') === 0) {
      return importSeedV2(code);
    }
    // Legacy PA1 format (broken for >32 flags, kept for old save codes)
    if (code.indexOf('PA1') === 0) {
      return importSeedV1(code);
    }
    // Fallback: try legacy base64 format
    return importLegacy(code);
  } catch (e) {
    return false;
  }
}

// PA2: bit-packed format (5 flags per b36 char, no 32-bit overflow)
function importSeedV2(code) {
  try {
    if (code.substring(0, 3) !== 'PA2') return false;
    var p = 3;
    // Sex + lang
    state.sex = code[p++] === '1' ? 'female' : 'male';
    state.lang = code[p++] === '1' ? 'en' : 'zh';
    // Stats
    var rawHp = fromB36(code.substring(p, p + 3)); p += 3;
    state.maxHp = fromB36(code.substring(p, p + 3)) || 100; p += 3;
    state.hp = clamp(rawHp, 0, state.maxHp);
    state.petri = clamp(fromB36(code.substring(p, p + 2)), 0, 99); p += 2;
    state.str = fromB36(code.substring(p, p + 2)); p += 2;
    state.agi = fromB36(code.substring(p, p + 2)); p += 2;
    state.wil = fromB36(code.substring(p, p + 2)); p += 2;
    // XP, level, region, deathCount
    state.xp = fromB36(code.substring(p, p + 3)); p += 3;
    state.level = fromB36(code.substring(p, p + 2)); p += 2;
    state.region = fromB36(code.substring(p, p + 1)); p += 1;
    state.deathCount = fromB36(code.substring(p, p + 2)); p += 2;
    state.xpToNext = xpForLevel(state.level);
    // Node
    var nodeIdx = fromB36(code.substring(p, p + 2)); p += 2;
    state.node = SEED_NODES[nodeIdx] || 'r0_start';
    // Read inv/flag char counts (stored before packed data for forward compat)
    var invChars = fromB36(code.substring(p, p + 1)); p += 1;
    var flagChars = fromB36(code.substring(p, p + 1)); p += 1;
    // Inventory (bit-packed)
    var invStr = code.substring(p, p + invChars); p += invChars;
    state.inventory = [];
    var itemList = state.lang === 'en' ? SEED_ITEMS_EN : SEED_ITEMS_ZH;
    unpackBitsB36(invStr, Math.min(itemList.length, invChars * 5), function(i) {
      if (i < itemList.length) state.inventory.push(itemList[i]);
    });
    // Flags (bit-packed)
    var flagStr = code.substring(p, p + flagChars); p += flagChars;
    state.flags = {};
    unpackBitsB36(flagStr, Math.min(SEED_FLAGS.length, flagChars * 5), function(i) {
      if (i < SEED_FLAGS.length) state.flags[SEED_FLAGS[i]] = true;
    });
    // Name
    var nameLen = fromB36(code.substring(p, p + 2)); p += 2;
    var nameEnc = code.substring(p, p + nameLen); p += nameLen;
    state.name = decodeURIComponent(nameEnc) || '旅者';
    // Checksum
    var all = code.substring(0, p);
    var cksum = 0;
    for (var i = 0; i < all.length; i++) cksum = (cksum + all.charCodeAt(i)) % 36;
    if (code[p] !== B36[cksum]) return false;
    state.mood = 'normal';
    saveGame();
    return true;
  } catch (e) {
    return false;
  }
}

// PA1: legacy format (broken for >32 flags/items, kept for backward compat)
function importSeedV1(code) {
  try {
    if (code.substring(0, 3) !== 'PA1') return false;
    var p = 3;
    state.sex = code[p++] === '1' ? 'female' : 'male';
    state.lang = code[p++] === '1' ? 'en' : 'zh';
    var rawHp = fromB36(code.substring(p, p + 3)); p += 3;
    state.maxHp = fromB36(code.substring(p, p + 3)) || 100; p += 3;
    state.hp = clamp(rawHp, 0, state.maxHp);
    state.petri = clamp(fromB36(code.substring(p, p + 2)), 0, 99); p += 2;
    state.str = fromB36(code.substring(p, p + 2)); p += 2;
    state.agi = fromB36(code.substring(p, p + 2)); p += 2;
    state.wil = fromB36(code.substring(p, p + 2)); p += 2;
    state.xp = fromB36(code.substring(p, p + 3)); p += 3;
    state.level = fromB36(code.substring(p, p + 2)); p += 2;
    state.region = fromB36(code.substring(p, p + 1)); p += 1;
    state.deathCount = fromB36(code.substring(p, p + 2)); p += 2;
    state.xpToNext = xpForLevel(state.level);
    var nodeIdx = fromB36(code.substring(p, p + 2)); p += 2;
    state.node = SEED_NODES[nodeIdx] || 'r0_start';
    // Legacy: 3-char bitmask (only first ~15 items reliable)
    var invBits = fromB36(code.substring(p, p + 3)); p += 3;
    state.inventory = [];
    var itemList = state.lang === 'en' ? SEED_ITEMS_EN : SEED_ITEMS_ZH;
    for (var i = 0; i < Math.min(itemList.length, 15); i++) {
      if (invBits & (1 << i)) state.inventory.push(itemList[i]);
    }
    // Legacy: 3-char bitmask (only first ~15 flags reliable)
    var flagBits = fromB36(code.substring(p, p + 3)); p += 3;
    state.flags = {};
    for (var i = 0; i < Math.min(SEED_FLAGS.length, 15); i++) {
      if (flagBits & (1 << i)) state.flags[SEED_FLAGS[i]] = true;
    }
    var nameLen = fromB36(code.substring(p, p + 2)); p += 2;
    var nameEnc = code.substring(p, p + nameLen); p += nameLen;
    state.name = decodeURIComponent(nameEnc) || '旅者';
    var all = code.substring(0, p);
    var cksum = 0;
    for (var i = 0; i < all.length; i++) cksum = (cksum + all.charCodeAt(i)) % 36;
    if (code[p] !== B36[cksum]) return false;
    state.mood = 'normal';
    saveGame();
    return true;
  } catch (e) {
    return false;
  }
}

function importLegacy(code) {
  try {
    var json = decodeURIComponent(escape(atob(code)));
    var d = JSON.parse(json);
    state.name = d.n || '旅者';
    state.sex = d.s || 'male';
    state.hp = d.h != null ? d.h : 100;
    state.maxHp = d.mh || 100;
    state.petri = d.p || 0;
    state.str = d.str || 5;
    state.agi = d.agi || 5;
    state.wil = d.wil || 5;
    state.xp = d.xp || 0;
    state.level = d.lv || 1;
    state.xpToNext = d.xn || 20;
    state.inventory = d.inv || [];
    state.region = d.r || 0;
    state.node = d.nd || 'r0_start';
    state.flags = d.f || {};
    state.deathCount = d.dc || 0;
    state.lang = d.l || 'zh';
    state.mood = 'normal';
    saveGame();
    return true;
  } catch (e) {
    return false;
  }
}

// ── Save Slots (3 manual slots) ──

function slotKey(n) { return SLOT_KEY_PREFIX + n; }

function saveToSlot(n) {
  try {
    var data = {
      name: state.name, sex: state.sex,
      hp: state.hp, maxHp: state.maxHp, petri: state.petri,
      str: state.str, agi: state.agi, wil: state.wil,
      xp: state.xp, level: state.level, xpToNext: state.xpToNext,
      inventory: state.inventory.slice(),
      region: state.region, node: state.node,
      flags: JSON.parse(JSON.stringify(state.flags)),
      deathCount: state.deathCount, lang: state.lang, mood: state.mood,
      savedAt: Date.now()
    };
    localStorage.setItem(slotKey(n), JSON.stringify(data));
    return true;
  } catch (e) { return false; }
}

function loadFromSlot(n) {
  try {
    var json = localStorage.getItem(slotKey(n));
    if (!json) return false;
    var data = JSON.parse(json);
    state.name = data.name || '旅者';
    state.sex = data.sex || 'male';
    state.maxHp = data.maxHp || 100;
    state.hp = clamp(data.hp != null ? data.hp : 100, 0, state.maxHp);
    state.petri = clamp(data.petri || 0, 0, 99);
    state.str = data.str || 5;
    state.agi = data.agi || 5;
    state.wil = data.wil || 5;
    state.xp = data.xp || 0;
    state.level = data.level || 1;
    state.xpToNext = data.xpToNext || 20;
    state.inventory = data.inventory || [];
    state.region = data.region || 0;
    state.node = data.node || 'r0_start';
    state.flags = data.flags || {};
    state.deathCount = data.deathCount || 0;
    state.lang = data.lang || 'zh';
    state.mood = data.mood || 'normal';
    saveGame();
    return true;
  } catch (e) { return false; }
}

function getSlotInfo(n) {
  try {
    var json = localStorage.getItem(slotKey(n));
    if (!json) return null;
    var d = JSON.parse(json);
    return {
      name: d.name || '旅者',
      level: d.level || 1,
      region: d.region || 0,
      savedAt: d.savedAt || 0
    };
  } catch (e) { return null; }
}

function deleteSlot(n) {
  localStorage.removeItem(slotKey(n));
}
