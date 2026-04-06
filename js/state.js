// ══ State, i18n, DOM refs ══
var VERSION = '1.1';
var DEBUG = false;

const state = {
  name: '旅者',
  sex: 'male',       // 'male' | 'female'
  hp: 50, maxHp: 50,
  petri: 0,          // 石化度 0-100
  str: 5, agi: 5, wil: 5,
  xp: 0, level: 1, xpToNext: 20,
  inventory: [],
  region: 0,         // 0=祭獻坑, 1=石脈迴廊, 2=大採石場, 3=河城渡口
  node: 'start',
  flags: {},
  skills: [],            // unlocked combat skill IDs (NG+ only)
  deathCount: 0,
  lang: 'zh',
  mood: 'normal',    // avatar mood: normal, happy, hurt, danger, petri, combat
};

// ── i18n helpers ──
function L(zh, en) { return state.lang === 'en' ? en : zh; }

const TAG_EN = {
  '系統':'SYS','意識':'MIND','感知':'SENSE','身體':'BODY',
  '石化':'PETRI','警告':'WARN','情報':'INFO','決意':'RESOLVE',
  '行動':'ACT','探索':'EXPLORE','發現':'FOUND','物品':'ITEM',
  '移動':'MOVE','記憶':'MEMORY','成功':'SUCCESS','失敗':'FAIL',
  '遭遇':'ENCOUNTER','戰鬥':'COMBAT','勝利':'VICTORY','潛行':'STEALTH',
  '撤退':'RETREAT','休息':'REST','恢復':'RECOVER','環境':'ENV',
  '意志':'WILL','傷害':'DMG','援助':'ALLY','恢復':'HEAL',
};

const REGIONS_ZH = ['祭獻坑','石脈迴廊','大採石場','河城渡口'];
const REGIONS_EN = ['Sacrificial Pit','Vein Corridor','Great Quarry','River City Ferry'];
function getRegion(i) { return state.lang === 'en' ? REGIONS_EN[i] : REGIONS_ZH[i]; }

function applyLang() {
  var en = state.lang === 'en';
  // Title screen
  document.getElementById('label-name').textContent = en ? 'CHARACTER NAME' : '角 色 命 名';
  document.getElementById('name-input').placeholder = en ? 'Enter your name...' : '輸入你的名字……';
  document.getElementById('label-sex').textContent = en ? 'SEX' : '性 別';
  document.getElementById('sex-male').textContent = en ? '♂ Male' : '♂ 男';
  document.getElementById('sex-female').textContent = en ? '♀ Female' : '♀ 女';
  document.getElementById('label-stat-alloc').textContent = en ? 'STAT ALLOCATION' : '能 力 分 配';
  document.getElementById('alloc-str-name').textContent = en ? 'STR' : '力量';
  document.getElementById('alloc-agi-name').textContent = en ? 'AGI' : '敏捷';
  document.getElementById('alloc-wil-name').textContent = en ? 'WIL' : '意志';
  document.getElementById('alloc-str-desc').textContent = en ? 'Attack·Climb' : '攻擊·攀爬';
  document.getElementById('alloc-agi-desc').textContent = en ? 'Dodge·Stealth' : '閃避·潛行';
  document.getElementById('alloc-wil-desc').textContent = en ? 'Anti-Petri·Mind' : '抗石化·精神';
  document.getElementById('alloc-remain-label').textContent = en ? 'Points left: ' : '剩餘點數：';
  document.getElementById('start-btn').textContent = en ? 'BEGIN ADVENTURE' : '開 始 冒 險';
  // Header bar
  var $hdrTitle = document.getElementById('header-title');
  var $hdrSub = document.getElementById('header-subtitle');
  if ($hdrTitle) $hdrTitle.textContent = en ? 'PETRIFICATION ABYSS' : '石化深淵';
  if ($hdrSub) $hdrSub.textContent = en ? '' : 'PETRIABYSS';
  // Status panel
  document.getElementById('label-life').textContent = en ? 'LIFE' : '生命';
  document.getElementById('label-hp').textContent = 'HP';
  document.getElementById('label-petri').textContent = en ? 'Petrification' : '石化度';
  document.getElementById('label-stats').textContent = en ? 'STATS' : '屬性';
  document.getElementById('label-str').textContent = en ? 'STR' : '力量';
  document.getElementById('label-agi').textContent = en ? 'AGI' : '敏捷';
  document.getElementById('label-wil').textContent = en ? 'WIL' : '意志';
  document.getElementById('label-level').textContent = en ? 'LEVEL' : '等級';
  document.getElementById('label-xp').textContent = en ? 'EXP' : '經驗';
  document.getElementById('label-inv').textContent = en ? 'INVENTORY' : '物品欄';
  document.getElementById('label-loc').textContent = en ? 'LOCATION' : '位置';
  // Death overlay
  document.getElementById('death-title').textContent = en ? 'PETRIFIED' : '石 化';
  document.getElementById('revive-btn').textContent = en ? 'Break free and rise again' : '掙脫石殼，重新站起';
  // Save code button
  document.getElementById('save-code-btn').textContent = en ? 'Save Code' : '存檔碼';
  var $chapterIngame = document.getElementById('chapter-ingame-btn');
  if ($chapterIngame) $chapterIngame.textContent = en ? 'Chapters' : '章節';
  var $labelNpc = document.getElementById('label-npc');
  if ($labelNpc) $labelNpc.textContent = en ? 'AFFINITY' : '好感度';
  // Achievement section
  var $labelAch = document.getElementById('label-ach');
  if ($labelAch) $labelAch.textContent = en ? 'ACHIEVEMENTS' : '成就';
  var $labelAchCount = document.getElementById('label-ach-count');
  if ($labelAchCount) $labelAchCount.textContent = en ? 'Progress' : '進度';
  var $achViewBtn = document.getElementById('ach-view-btn');
  if ($achViewBtn) $achViewBtn.textContent = en ? 'View Achievements' : '查看成就';
  // Ending card overlay
  var $endcardTitle = document.getElementById('endcard-title');
  if ($endcardTitle) $endcardTitle.style.display = 'none';
  var $endcardDl = document.getElementById('endcard-download-btn');
  if ($endcardDl) $endcardDl.textContent = en ? 'Download' : '下載圖片';
  var $endcardShare = document.getElementById('endcard-share-btn');
  if ($endcardShare) $endcardShare.textContent = en ? 'Copy Image' : '複製圖片';
  var $endcardClose = document.getElementById('endcard-close-btn');
  if ($endcardClose) $endcardClose.textContent = en ? 'Close' : '關閉';
  // Level-up dialog (static labels)
  document.getElementById('levelup-str-desc').textContent = en ? 'Attack · Climb' : '攻擊·攀爬';
  document.getElementById('levelup-agi-desc').textContent = en ? 'Dodge · Stealth' : '閃避·潛行';
  document.getElementById('levelup-wil-desc').textContent = en ? 'Anti-Petri · Mind' : '抗石化·精神';
}

// ── DOM refs ──
const $story   = document.getElementById('story-text');
const $choices  = document.getElementById('choices');
const $region   = document.getElementById('region-label');
const $hp       = document.getElementById('stat-hp');
const $barHp    = document.getElementById('bar-hp');
const $petri    = document.getElementById('stat-petri');
const $barPetri = document.getElementById('bar-petri');
const $str      = document.getElementById('stat-str');
const $agi      = document.getElementById('stat-agi');
const $wil      = document.getElementById('stat-wil');
const $inv      = document.getElementById('inventory');
const $loc      = document.getElementById('location-text');
const $deathOv  = document.getElementById('death-overlay');
const $deathMsg = document.getElementById('death-msg');
const $revive   = document.getElementById('revive-btn');
const $notif    = document.getElementById('notification');
const $playerName = document.getElementById('player-name');
const $hmTitle  = document.getElementById('header-title');
const $mobileToggle = document.getElementById('mobile-status-toggle');
const $mstName  = document.getElementById('mst-name');
const $mstLv    = document.getElementById('mst-lv');
const $mstHp    = document.getElementById('mst-hp');
const $mstPetri = document.getElementById('mst-petri');
const $statusPanel  = document.querySelector('.status-panel');
const $avatarBox    = document.getElementById('avatar-box');
const $xpBar    = document.getElementById('bar-xp');
const $xpVal    = document.getElementById('stat-xp');
const $levelVal = document.getElementById('stat-level');

// ── Mobile status toggle ──
$mobileToggle.addEventListener('click', function() {
  $statusPanel.classList.toggle('open');
  $mobileToggle.classList.toggle('open');
});

// ── Inventory collapse toggle (mobile) ──
var $invToggle = document.getElementById('label-inv');
var $invSection = $invToggle ? $invToggle.closest('.inv-section') : null;
if ($invToggle && $invSection) {
  $invToggle.addEventListener('click', function() {
    $invSection.classList.toggle('open');
  });
}
