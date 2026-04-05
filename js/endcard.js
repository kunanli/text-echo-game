// ══ Ending Card Generator — Collectible Card ══

var ENDCARD_W = 450;
var ENDCARD_H = 740;

var ENDING_META = {
  dawn:       { zh: '黎明', en: 'DAWN',       type: '曙光者',  typeEn: 'DAWNBRINGER', color: '#60c8e0' },
  sacrifice:  { zh: '犧牲', en: 'SACRIFICE',  type: '獻身者',  typeEn: 'MARTYR',      color: '#9a8ac8' },
  compromise: { zh: '妥協', en: 'COMPROMISE', type: '斡旋者',  typeEn: 'MEDIATOR',    color: '#d4a843' },
  lockdown:   { zh: '封鎖', en: 'LOCKDOWN',   type: '守門者',  typeEn: 'WARDEN',      color: '#c06060' },
};

var ENDING_FLAVOR = {
  dawn: {
    zh: '"帶著真相穿越了深淵的黑暗，將光明重新引入這被遺忘的地底世界。石化的詛咒終將褪去，而這個名字會被銘刻在新時代的起點。當第一縷曙光照進石壁，所有沉睡者終於再次睜開雙眼。"',
    en: '"Carried the truth through darkness, bringing light back to the forgotten underworld. The curse shall fade, and this name marks a new dawn. When the first light touched the stone walls, all who slumbered finally opened their eyes again."',
  },
  sacrifice: {
    zh: '"選擇了以自身為代價換取眾人的安全。石化的命運並未消失，只是由一人承擔。深淵會記住這份犧牲——在石壁最深處，一尊完美的石像靜靜佇立，面容安詳。"',
    en: '"Chose to bear the cost so others might live. The curse did not vanish — simply taken upon oneself. The abyss remembers this sacrifice. Deep within, a perfect stone figure stands in serene silence."',
  },
  compromise: {
    zh: '"在對立的勢力之間找到了一條脆弱但可行的中間道路。沒有英雄式的結局，但每個人都活了下來。有時候最勇敢的選擇不是戰鬥，而是放下武器，開口對話。"',
    en: '"Found a fragile but viable path between opposing forces. No heroic ending — but everyone lived to see another day. Sometimes the bravest choice is not to fight, but to lay down arms and speak."',
  },
  lockdown: {
    zh: '"深淵的入口被永遠封閉。地底的一切——包括真相——都被埋葬在石壁之下。安全，但代價是永遠的沉默。也許有一天，會有人重新找到這扇被封印的門。"',
    en: '"The abyss was sealed forever. All beneath — truth included — buried under stone. Safe, yes. But at the cost of eternal silence. Perhaps someday, someone will find this sealed gate once more."',
  },
};

// ── Rarity ──
var RARITY_TIERS = [
  { min: 85, zh: '傳說', en: 'LEGENDARY', color: '#d4a843', stars: 5 },
  { min: 70, zh: '史詩', en: 'EPIC',      color: '#9a5ac8', stars: 4 },
  { min: 50, zh: '稀有', en: 'RARE',      color: '#4a8ac8', stars: 3 },
  { min: 30, zh: '精良', en: 'UNCOMMON',   color: '#4a9e4a', stars: 2 },
  { min: 0,  zh: '普通', en: 'COMMON',     color: '#6a6a7a', stars: 1 },
];

function getRarity(score) {
  for (var i = 0; i < RARITY_TIERS.length; i++) {
    if (score >= RARITY_TIERS[i].min) return RARITY_TIERS[i];
  }
  return RARITY_TIERS[RARITY_TIERS.length - 1];
}

// ── Scoring ──
function calculateEndScore() {
  var s = 0;
  s += (state.str + state.agi + state.wil) * 2;
  s += state.level * 2;
  s += Math.min(state.inventory.length * 2, 20);
  if (state.flags.r1YingCompanion) s += 5;
  if (state.flags.r3ZhouMet) s += 3;
  if (state.flags.r3BellMet) s += 3;
  if (state.flags.r3CraneMet3 || state.flags.r2CraneMet) s += 3;
  if (state.flags.r3PlagueProof) s += 4;
  if (state.flags.r3CraneTestimony) s += 4;
  if (state.flags.r3BellAlliance) s += 3;
  if (state.flags.r3CouncilEntry) s += 2;
  if (state.deathCount === 0) s += 8;
  if (state.petri <= 10) s += 5;
  else if (state.petri <= 30) s += 3;
  var ending = state.flags.r3Ending || 'lockdown';
  if (ending === 'dawn') s += 5;
  else if (ending === 'sacrifice') s += 4;
  else if (ending === 'compromise') s += 2;
  return s;
}

// ── Half-body ASCII Art ──

var ENDCARD_ART = {
  dawn: {
    male: [
      "      .  \u00b7  \u2726  \u00b7  .       ",
      "     \u00b7 \u00b7 \\ \\|/ / \u00b7 \u00b7     ",
      "         \u256d\u2500\u2500\u2500\u256e           ",
      "    \u2571\u2571\u2571\u2571\u2571\u2502   \u2502\u2572\u2572\u2572\u2572\u2572     ",
      "   \u2571\u2571   \u256d\u2570\u2500\u2500\u2500\u256f\u256e  \u2572\u2572    ",
      "  \u2571\u2571   \u2502 \u00b0   \u00b0 \u2502  \u2572\u2572   ",
      "  \u2551    \u2502   \u25bd    \u2502   \u2551   ",
      "  \u2551    \u2502  \u2570\u2500\u256f   \u2502   \u2551   ",
      "  \u2551\u2572   \u2570\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u256f  \u2571\u2551   ",
      "  \u2571\u2551\u2572\u2500\u2500\u2524   \u2502   \u251c\u2500\u2500\u2571\u2551\u2572  ",
      " \u2571 \u2551  \u2571\u2502  \u2571\u2726\u2572  \u2502\u2572  \u2551 \u2572 ",
      "   \u2551\u2571  \u2571  \u2550\u2567\u2550  \u2572  \u2572\u2551  ",
    ],
    female: [
      "      .  \u00b7  \u2726  \u00b7  .       ",
      "     \u00b7 \u00b7 \\ \\|/ / \u00b7 \u00b7     ",
      "      \u00b7  \u2726  \u00b7              ",
      "    \u2572\u2572\u2502\u2571\u2571 \u2572\u2572\u2502\u2572\u2572~~\u256e      ",
      "     \u256d\u2570\u2500\u2500\u2500\u256f\u256e  ~~\u256e\u2502     ",
      "    \u2502 \u00b0   \u00b0 \u2502   \u2570\u2502     ",
      "    \u2502   \u25bf    \u2502    \u2502     ",
      "    \u2502  \u2570\u2500\u256f   \u2502   \u2571      ",
      "     \u2570\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u256f  \u2571       ",
      "   \u2500\u2500\u2524    \u2502   \u251c\u2500\u2500       ",
      "    \u2571\u2502   \u2571\u2726\u2572  \u2502\u2572        ",
      "   \u2571  \u2502  \u2550\u2567\u2550  \u2502 \u2572       ",
    ],
  },
  sacrifice: {
    male: [
      "      \u00b7  \u2726  \u00b7  \u2726  \u00b7     ",
      "     \u2726       \u2726           ",
      "         \u256d\u2500\u2500\u2500\u256e           ",
      "    \u2571\u2571\u2571\u2571\u2571\u2502   \u2502\u2572\u2572\u2572\u2572\u2572     ",
      "   \u2571\u2571   \u256d\u2570\u2500\u2500\u2500\u256f\u256e  \u2572\u2572    ",
      "  \u2571\u2571   \u2502 \u00b0   \u00b0 \u2502  \u2572\u2572   ",
      "  \u2551    \u2502   \u25bd    \u2502   \u2551   ",
      "  \u2551    \u2502  \u2500\u2500\u2500   \u2502   \u2551   ",
      "  \u2551\u2572   \u2570\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u256f  \u2571\u2551   ",
      " \u2591\u2571\u2551\u2591\u2500\u2500\u2524\u2591\u2591\u2591\u2502\u2591\u2591\u2591\u251c\u2500\u2500\u2591\u2551\u2591  ",
      " \u2591\u2571 \u2551\u2591\u2571\u2502\u2591\u2591\u2591\u2502\u2591\u2591\u2591\u2502\u2572\u2591 \u2551\u2591\u2572 ",
      "  \u2591 \u2551\u2571\u2591\u2571\u2591\u2591\u2550\u2567\u2550\u2591\u2591\u2572\u2591\u2572\u2551\u2591  ",
    ],
    female: [
      "      \u00b7  \u2726  \u00b7  \u2726  \u00b7     ",
      "     \u2726       \u2726           ",
      "      \u00b7  \u2726  \u00b7              ",
      "    \u2572\u2572\u2502\u2571\u2571 \u2572\u2572\u2502\u2572\u2572~~\u256e      ",
      "     \u256d\u2570\u2500\u2500\u2500\u256f\u256e  ~~\u256e\u2502     ",
      "    \u2502 \u00b0   \u00b0 \u2502   \u2570\u2502     ",
      "    \u2502   \u25bf    \u2502    \u2502     ",
      "    \u2502  \u2500\u2500\u2500   \u2502   \u2571      ",
      "     \u2570\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u256f  \u2571       ",
      "  \u2591\u2500\u2500\u2524\u2591\u2591\u2591\u2591\u2502\u2591\u2591\u2591\u251c\u2500\u2500\u2591     ",
      "   \u2591\u2571\u2502\u2591\u2591\u2591\u2591\u2502\u2591\u2591\u2591\u2502\u2572\u2591       ",
      "  \u2591\u2571  \u2502\u2591\u2591\u2550\u2567\u2550\u2591\u2591\u2502\u2591\u2572\u2591     ",
    ],
  },
  compromise: {
    male: [
      "                           ",
      "         \u2500 \u21cc \u2500           ",
      "         \u256d\u2500\u2500\u2500\u256e           ",
      "    \u2571\u2571\u2571\u2571\u2571\u2502   \u2502\u2572\u2572\u2572\u2572\u2572     ",
      "   \u2571\u2571   \u256d\u2570\u2500\u2500\u2500\u256f\u256e  \u2572\u2572    ",
      "  \u2571\u2571   \u2502 \u00b0   \u00b0 \u2502  \u2572\u2572   ",
      "  \u2551    \u2502   \u25bd    \u2502   \u2551   ",
      "  \u2551    \u2502  \u2570\u2500\u256f   \u2502   \u2551   ",
      "  \u2551\u2572   \u2570\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u256f  \u2571\u2551   ",
      "  \u2571\u2551\u2572\u2500\u2500\u2524   \u2502   \u251c\u2500\u2500\u2571\u2551\u2572  ",
      " \u2571 \u2551 \u2571\u2571\u2502  \u2571\u2502\u2572  \u2502\u2572\u2572 \u2551 \u2572 ",
      "   \u2551\u2571\u2571  \u2571  \u2550\u2567\u2550  \u2572 \u2572\u2572\u2551  ",
    ],
    female: [
      "                           ",
      "         \u2500 \u21cc \u2500           ",
      "      \u00b7  \u2726  \u00b7              ",
      "    \u2572\u2572\u2502\u2571\u2571 \u2572\u2572\u2502\u2572\u2572~~\u256e      ",
      "     \u256d\u2570\u2500\u2500\u2500\u256f\u256e  ~~\u256e\u2502     ",
      "    \u2502 \u00b0   \u00b0 \u2502   \u2570\u2502     ",
      "    \u2502   \u25bf    \u2502    \u2502     ",
      "    \u2502  \u2570\u2500\u256f   \u2502   \u2571      ",
      "     \u2570\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u256f  \u2571       ",
      "   \u2500\u2500\u2524   \u2571\u2502\u2572  \u251c\u2500\u2500       ",
      "    \u2571\u2502\u2571\u2571 \u2550\u2567\u2550  \u2502\u2572\u2572      ",
      "   \u2571\u2571 \u2502       \u2502 \u2572\u2572      ",
    ],
  },
  lockdown: {
    male: [
      "     \u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591      ",
      "    \u2591               \u2591    ",
      "   \u2591     \u256d\u2500\u2500\u2500\u256e       \u2591   ",
      "   \u2591\u2571\u2571\u2571\u2571\u2571\u2502   \u2502\u2572\u2572\u2572\u2572\u2572\u2591    ",
      "  \u2591\u2571\u2571   \u256d\u2570\u2500\u2500\u2500\u256f\u256e  \u2572\u2572\u2591   ",
      "  \u2591\u2571   \u2502 \u00b0   \u00b0 \u2502  \u2572\u2591   ",
      "  \u2591\u2551    \u2502   \u25bd    \u2502  \u2591\u2551  ",
      "  \u2591\u2551    \u2502  \u2550\u2550\u2550   \u2502  \u2591\u2551  ",
      "  \u2591\u2551\u2572   \u2570\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u256f \u2571\u2591\u2551  ",
      "  \u2591\u2571\u2551\u2572\u2500\u2500\u2524   \u2502   \u251c\u2500\u2571\u2591\u2551\u2572 ",
      " \u2591\u2571 \u2551  \u2571\u2502  \u2571\u2502\u2572  \u2502\u2572 \u2591\u2551 \u2572",
      "  \u2591 \u2551\u2571  \u2571  \u2550\u2567\u2550  \u2572 \u2591\u2572\u2551 ",
    ],
    female: [
      "     \u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591      ",
      "    \u2591               \u2591    ",
      "   \u2591  \u00b7  \u2726  \u00b7        \u2591   ",
      "   \u2591\u2572\u2572\u2502\u2571\u2571 \u2572\u2572\u2502\u2572\u2572~~\u256e  \u2591   ",
      "    \u2591\u256d\u2570\u2500\u2500\u2500\u256f\u256e  ~~\u256e\u2502\u2591    ",
      "   \u2591\u2502 \u00b0   \u00b0 \u2502   \u2570\u2502\u2591    ",
      "   \u2591\u2502   \u25bf    \u2502    \u2502\u2591    ",
      "   \u2591\u2502  \u2550\u2550\u2550   \u2502   \u2571\u2591     ",
      "    \u2591\u2570\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u256f  \u2571\u2591      ",
      "  \u2591\u2500\u2500\u2524    \u2502   \u251c\u2500\u2500\u2591     ",
      "   \u2591\u2571\u2502   \u2571\u2502\u2572  \u2502\u2572\u2591       ",
      "  \u2591\u2571  \u2502  \u2550\u2567\u2550  \u2502\u2591\u2572      ",
    ],
  },
};

// ── Progress bar for stats ──
function _drawStatBar(ctx, x, y, val, maxVal, barW, barH) {
  var ratio = Math.min(val / maxVal, 1);
  // Background track
  ctx.fillStyle = '#161620';
  _roundRect(ctx, x, y, barW, barH, 3);
  ctx.fill();
  // Filled portion
  if (ratio > 0) {
    var fw = Math.max(barW * ratio, 6);
    ctx.fillStyle = '#46464f';
    _roundRect(ctx, x, y, fw, barH, 3);
    ctx.fill();
  }
}

// ── Text word-wrap (supports CJK + latin) ──
function _wrapText(ctx, text, maxW) {
  var lines = [];
  var line = '';
  for (var i = 0; i < text.length; i++) {
    var ch = text[i];
    var test = line + ch;
    if (ctx.measureText(test).width > maxW && line.length > 0) {
      lines.push(line);
      line = ch;
    } else {
      line = test;
    }
  }
  if (line) lines.push(line);
  return lines;
}

// ── Rounded rect ──
function _roundRect(ctx, x, y, w, h, r) {
  ctx.beginPath();
  ctx.moveTo(x + r, y);
  ctx.lineTo(x + w - r, y);
  ctx.quadraticCurveTo(x + w, y, x + w, y + r);
  ctx.lineTo(x + w, y + h - r);
  ctx.quadraticCurveTo(x + w, y + h, x + w - r, y + h);
  ctx.lineTo(x + r, y + h);
  ctx.quadraticCurveTo(x, y + h, x, y + h - r);
  ctx.lineTo(x, y + r);
  ctx.quadraticCurveTo(x, y, x + r, y);
  ctx.closePath();
}

// ── Main Generator ──

function generateEndCard() {
  var canvas = document.createElement('canvas');
  canvas.width = ENDCARD_W;
  canvas.height = ENDCARD_H;
  var ctx = canvas.getContext('2d');
  var en = state.lang === 'en';
  var ending = state.flags.r3Ending || 'lockdown';
  var meta = ENDING_META[ending] || ENDING_META.lockdown;
  var totalScore = calculateEndScore();
  var rarity = getRarity(totalScore);
  var pad = 52;

  // ── Background ──
  ctx.fillStyle = '#0d0d15';
  ctx.fillRect(0, 0, ENDCARD_W, ENDCARD_H);

  // ── Rounded border ──
  _roundRect(ctx, 10, 10, ENDCARD_W - 20, ENDCARD_H - 20, 18);
  ctx.strokeStyle = rarity.color;
  ctx.globalAlpha = 0.45;
  ctx.lineWidth = 2.5;
  ctx.stroke();
  ctx.globalAlpha = 1;

  // Inner fill
  _roundRect(ctx, 12, 12, ENDCARD_W - 24, ENDCARD_H - 24, 16);
  ctx.fillStyle = '#101018';
  ctx.fill();

  // Subtle top glow
  var glow = ctx.createLinearGradient(0, 10, 0, 120);
  glow.addColorStop(0, rarity.color);
  glow.addColorStop(1, 'rgba(0,0,0,0)');
  ctx.globalAlpha = 0.035;
  ctx.fillStyle = glow;
  _roundRect(ctx, 12, 12, ENDCARD_W - 24, 120, 16);
  ctx.fill();
  ctx.globalAlpha = 1;

  // ═════════════════════════════════
  //  TOP BAR: stars + rarity / type
  // ═════════════════════════════════
  var curY = 44;

  var stars = '';
  for (var i = 0; i < rarity.stars; i++) stars += '★';
  ctx.font = 'bold 15px "Courier New", monospace';
  ctx.textAlign = 'left';
  ctx.fillStyle = rarity.color;
  ctx.fillText(stars + '  ' + (en ? rarity.en : rarity.zh), pad, curY);

  ctx.textAlign = 'right';
  ctx.font = '13px "Courier New", monospace';
  ctx.fillStyle = rarity.color;
  ctx.fillText(en ? meta.typeEn : meta.type, ENDCARD_W - pad, curY);

  // ═════════════════════════════════
  //  ASCII ART
  // ═════════════════════════════════
  curY += 32;
  var artSet = ENDCARD_ART[ending] || ENDCARD_ART.lockdown;
  var art = artSet[state.sex] || artSet.male;
  ctx.font = '14px "Courier New", monospace';
  ctx.fillStyle = '#9898a8';
  ctx.textAlign = 'left';
  for (var ai = 0; ai < art.length; ai++) {
    ctx.fillText(art[ai], pad + 24, curY + ai * 17);
  }
  curY += art.length * 17 + 28;

  // ═════════════════════════════════
  //  PLAYER NAME (large, prominent)
  // ═════════════════════════════════
  ctx.font = 'bold 22px "Courier New", monospace';
  ctx.fillStyle = '#e8e8f0';
  ctx.textAlign = 'left';
  ctx.fillText(state.name, pad, curY);

  var nameW = ctx.measureText(state.name).width;
  ctx.font = '14px sans-serif';
  ctx.fillStyle = '#5a5a6a';
  ctx.fillText(state.sex === 'female' ? '♀' : '♂', pad + nameW + 8, curY);

  // ═════════════════════════════════
  //  FLAVOR TEXT
  // ═════════════════════════════════
  curY += 22;
  var flavor = ENDING_FLAVOR[ending] || ENDING_FLAVOR.lockdown;
  var flavorRaw = en ? flavor.en : flavor.zh;
  ctx.font = '11px "Courier New", monospace';
  ctx.fillStyle = '#555568';
  ctx.textAlign = 'left';
  var flavorLines = _wrapText(ctx, flavorRaw, ENDCARD_W - pad * 2);
  for (var fi = 0; fi < flavorLines.length; fi++) {
    ctx.fillText(flavorLines[fi], pad, curY + fi * 16);
  }
  curY += flavorLines.length * 16 + 18;

  // ═════════════════════════════════
  //  STATS — pixel blocks (1 block = 1 point)
  // ═════════════════════════════════
  var statDefs = [
    { zh: '力量',   en: 'STR',   val: state.str, max: 15 },
    { zh: '敏捷',   en: 'AGI',   val: state.agi, max: 15 },
    { zh: '意志',   en: 'WIL',   val: state.wil, max: 15 },
    { zh: '石化度', en: 'PETRI', val: state.petri, max: 100 },
    { zh: '深度',   en: 'DEPTH', val: state.level, max: 10 },
  ];

  var barH = 6;
  var labelColW = en ? 56 : 50;
  var numColW = 36;
  var barX = pad + labelColW;
  var barW = Math.floor((ENDCARD_W - pad * 2 - labelColW - numColW) / 2);
  var rowH = barH + 16;

  for (var si = 0; si < statDefs.length; si++) {
    var sd = statDefs[si];
    var sy = curY + si * rowH;

    // Label
    ctx.font = '11px "Courier New", monospace';
    ctx.textAlign = 'left';
    ctx.fillStyle = '#555568';
    ctx.fillText(en ? sd.en : sd.zh, pad, sy + barH / 2 + 4);

    // Progress bar
    _drawStatBar(ctx, barX, sy, sd.val, sd.max, barW, barH);

    // Number (left-aligned after bar)
    ctx.textAlign = 'left';
    ctx.fillStyle = '#6a6a7a';
    ctx.font = '11px "Courier New", monospace';
    ctx.fillText('' + sd.val, barX + barW + 10, sy + barH / 2 + 4);
  }
  curY += statDefs.length * rowH + 12;

  // ═════════════════════════════════
  //  BOTTOM: highlights (left) + score (right)
  // ═════════════════════════════════
  // Highlights: sorted by rarity (highest first), show top 3
  var hlAll = [];
  if (state.deathCount === 0)          hlAll.push({ text: en ? 'Deathless Run'    : '零死亡通關', color: '#d4a843', rank: 5 });
  if (state.petri <= 10)               hlAll.push({ text: en ? 'Stone Resistant'  : '抗石化體質', color: '#9a5ac8', rank: 4 });
  if (state.flags.r3CraneTestimony)    hlAll.push({ text: en ? 'Crane Testified'  : '灰鶴作證',   color: '#4a8ac8', rank: 3 });
  if (state.flags.r3PlagueProof)       hlAll.push({ text: en ? 'Plague Proof'     : '瘟疫證據',   color: '#4a8ac8', rank: 3 });
  if (state.flags.r1YingCompanion)     hlAll.push({ text: en ? 'Ying\'s Companion': '螢的同伴',   color: '#4a9e4a', rank: 2 });
  hlAll.sort(function(a, b) { return b.rank - a.rank; });
  var hlItems = hlAll.slice(0, 3);

  // Highlights on left side
  if (hlItems.length > 0) {
    ctx.font = '10px "Courier New", monospace';
    ctx.textAlign = 'left';
    ctx.fillStyle = '#3a3a4a';
    ctx.fillText(en ? 'highlights' : '成就亮點', pad, curY + 6);

    ctx.font = '11px "Courier New", monospace';
    for (var hi = 0; hi < hlItems.length; hi++) {
      ctx.fillStyle = hlItems[hi].color;
      ctx.fillText('· ' + hlItems[hi].text, pad, curY + 24 + hi * 18);
    }
  }

  // Score on right side (vertically centered with highlights)
  var scoreBlockY = curY + (hlItems.length > 0 ? 10 : 0);

  ctx.font = '10px "Courier New", monospace';
  ctx.textAlign = 'right';
  ctx.fillStyle = '#3a3a4a';
  ctx.fillText(en ? 'score' : '評分', ENDCARD_W - pad, scoreBlockY + 6);

  ctx.font = 'bold 32px "Courier New", monospace';
  ctx.fillStyle = rarity.color;
  if (rarity.stars >= 4) {
    ctx.shadowColor = rarity.color;
    ctx.shadowBlur = 12;
  }
  ctx.textAlign = 'right';
  ctx.fillText('' + totalScore, ENDCARD_W - pad, scoreBlockY + 40);
  ctx.shadowBlur = 0;

  curY += Math.max(hlItems.length * 18 + 24, 50) + 16;

  // ═════════════════════════════════
  //  NPC FAREWELL QUOTE
  // ═════════════════════════════════
  var npcQuotes = [
    { key: 'ying', flags: ['r1YingTrustUp','r1YingCompanion','r2YingNight','r2YingLore4','r3YingInn'], max: 5,
      name: '螢', nameEn: 'Ying',
      zh: '「說好了要幫我校對的，笨蛋。」', en: '"You promised to proofread for me, idiot."' },
    { key: 'zhou', flags: ['r1SurvivorMet','r1SurvivorFed','r1SurvivorFullTrust','r2ZhouTrace','r3ZhouMet'], max: 5,
      name: '老周', nameEn: 'Old Zhou',
      zh: '「帶著這塊石頭，比我有用。」', en: '"Take this stone. It\'ll serve you better than me."' },
    { key: 'crane', flags: ['r1WandererMet','r1WandererLore','r2CraneMet','r2CraneLore','r3CraneTestimony'], max: 5,
      name: '灰鶴', nameEn: 'Grey Crane',
      zh: '「別弄丟了，我可沒第二把。」', en: '"Don\'t lose it. I don\'t have a spare."' },
    { key: 'bell', flags: ['r3BellMet','r3BellAlliance','r3BellQuest'], max: 3,
      name: '銅鐘', nameEn: 'Bronze Bell',
      zh: '「通道不會封鎖。永遠不會。」', en: '"The passages won\'t be sealed. Ever."' },
    { key: 'frost', flags: ['r2ChiefTalked','r2BossDefeated','r3BellAlliance'], max: 3,
      name: '鐵霜', nameEn: 'Iron Frost',
      zh: '「你比我更需要這把刀。」', en: '"You need this blade more than I do."' },
    { key: 'dew', flags: ['r2CampVisited','r2MedicHealed','r2MedicElixir'], max: 3,
      name: '清露', nameEn: 'Dew',
      zh: '「你撐到現在……比我更值得活下去。」', en: '"You\'ve lasted this long... you deserve to live."' },
    { key: 'cast', flags: ['r2CampVisited','r2PickaxeUpgraded','r2ArmorUpgraded'], max: 3,
      name: '老鑄', nameEn: 'Old Cast',
      zh: '「……最後一件了。用最好的料。」', en: '"...Last one. Best materials."' },
  ];

  // Find NPC with highest affinity
  var bestNpc = null;
  var bestAff = 0;
  for (var ni = 0; ni < npcQuotes.length; ni++) {
    var nq = npcQuotes[ni];
    var aff = 0;
    for (var fi = 0; fi < nq.flags.length; fi++) {
      if (state.flags[nq.flags[fi]]) aff++;
    }
    if (aff > bestAff) { bestAff = aff; bestNpc = nq; }
  }

  if (bestNpc && bestAff > 0) {
    var qPad = 14;
    var quoteText = en ? bestNpc.en : bestNpc.zh;
    ctx.font = '11px "Courier New", monospace';
    var quoteLines = _wrapText(ctx, quoteText, ENDCARD_W - pad * 2 - qPad * 2);
    var nameStr = '— ' + (en ? bestNpc.nameEn : bestNpc.name);

    var boxH = qPad + quoteLines.length * 15 + 8 + 14 + qPad;
    var boxX = pad;
    var boxW = ENDCARD_W - pad * 2;

    // Border box
    _roundRect(ctx, boxX, curY, boxW, boxH, 6);
    ctx.strokeStyle = '#2a2a3a';
    ctx.lineWidth = 1;
    ctx.stroke();

    // Quote text
    ctx.fillStyle = '#4a4a5a';
    ctx.textAlign = 'left';
    for (var qi = 0; qi < quoteLines.length; qi++) {
      ctx.fillText(quoteLines[qi], boxX + qPad, curY + qPad + 12 + qi * 15);
    }

    // NPC name
    ctx.font = '10px "Courier New", monospace';
    ctx.fillStyle = '#3a3a4a';
    ctx.fillText(nameStr, boxX + qPad, curY + qPad + 12 + quoteLines.length * 15 + 12);
  }

  // ═════════════════════════════════
  //  FOOTER: time + url
  // ═════════════════════════════════
  var footerY = ENDCARD_H - 36;
  ctx.textAlign = 'left';
  ctx.font = '9px "Courier New", monospace';
  ctx.fillStyle = '#2a2a3a';
  ctx.fillText('petriabyss.itch.io', pad, footerY);

  ctx.textAlign = 'right';
  if (typeof globalStats !== 'undefined' && globalStats.currentRunStartMs > 0) {
    var runTime = Date.now() - globalStats.currentRunStartMs;
    ctx.fillText((en ? 'time ' : '時間 ') + formatTime(runTime), ENDCARD_W - pad, footerY);
  }

  return canvas;
}

// ── Show / Share / Download ──

function showEndCard() {
  var canvas = generateEndCard();
  var $overlay = document.getElementById('endcard-overlay');
  var $container = document.getElementById('endcard-canvas-container');
  var $dlBtn = document.getElementById('endcard-download-btn');
  var $shareBtn = document.getElementById('endcard-share-btn');
  var $closeBtn = document.getElementById('endcard-close-btn');

  $container.innerHTML = '';
  canvas.style.maxWidth = '100%';
  canvas.style.height = 'auto';
  canvas.style.borderRadius = '6px';
  $container.appendChild(canvas);

  $dlBtn.onclick = function() {
    var link = document.createElement('a');
    link.download = 'petriabyss-' + (state.flags.r3Ending || 'ending') + '.png';
    link.href = canvas.toDataURL('image/png');
    link.click();
  };

  if (navigator.share && navigator.canShare) {
    $shareBtn.style.display = '';
    $shareBtn.onclick = function() {
      canvas.toBlob(function(blob) {
        var file = new File([blob], 'petriabyss-ending.png', { type: 'image/png' });
        var shareData = { files: [file] };
        if (navigator.canShare(shareData)) {
          navigator.share(shareData).catch(function() {});
        } else {
          fallbackCopyImage(canvas);
        }
      });
    };
  } else {
    $shareBtn.style.display = '';
    $shareBtn.onclick = function() {
      fallbackCopyImage(canvas);
    };
  }

  // Leaderboard button
  var $lbBtn = document.getElementById('endcard-leaderboard-btn');
  if ($lbBtn) {
    $lbBtn.textContent = L('排行榜', 'Leaderboard');
    $lbBtn.onclick = function() {
      if (typeof showLeaderboard === 'function') showLeaderboard();
    };
  }

  $closeBtn.onclick = function() {
    $overlay.classList.remove('active');
  };

  $overlay.classList.add('active');

  // Auto-submit score to leaderboard
  if (typeof submitToLeaderboard === 'function') submitToLeaderboard();
}

function fallbackCopyImage(canvas) {
  var en = state.lang === 'en';
  try {
    canvas.toBlob(function(blob) {
      if (navigator.clipboard && navigator.clipboard.write) {
        var item = new ClipboardItem({ 'image/png': blob });
        navigator.clipboard.write([item]).then(function() {
          notify(en ? 'Image copied to clipboard!' : '圖片已複製到剪貼簿！');
        }).catch(function() {
          notify(en ? 'Copy failed — try downloading instead' : '複製失敗，請嘗試下載');
        });
      } else {
        notify(en ? 'Copy not supported — try downloading' : '不支援複製，請嘗試下載');
      }
    });
  } catch (e) {
    notify(en ? 'Copy failed' : '複製失敗');
  }
}
