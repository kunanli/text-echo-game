// ══ Save / Load System ══
// localStorage auto-save + shareable base64 save code

var SAVE_KEY = 'petrification_abyss_save';

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
    state.hp = data.hp != null ? data.hp : 100;
    state.maxHp = data.maxHp || 100;
    state.petri = data.petri || 0;
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

// ── Share code (base64 encoded state) ──
function exportSaveCode() {
  var data = {
    n: state.name, s: state.sex,
    h: state.hp, mh: state.maxHp, p: state.petri,
    str: state.str, agi: state.agi, wil: state.wil,
    xp: state.xp, lv: state.level, xn: state.xpToNext,
    inv: state.inventory, r: state.region, nd: state.node,
    f: state.flags, dc: state.deathCount, l: state.lang,
  };
  try {
    return btoa(unescape(encodeURIComponent(JSON.stringify(data))));
  } catch (e) { return ''; }
}

function importSaveCode(code) {
  try {
    var json = decodeURIComponent(escape(atob(code.trim())));
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
    saveGame();
    return true;
  } catch (e) {
    return false;
  }
}
