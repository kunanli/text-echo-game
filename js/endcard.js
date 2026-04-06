// ══ Ending Card Generator — Collectible Card ══

var ENDCARD_W = 500;
var ENDCARD_H = 769;

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
  var pad = 32;

  // ── Background: full-bleed character art ──
  ctx.fillStyle = '#0d0d15';
  ctx.fillRect(0, 0, ENDCARD_W, ENDCARD_H);

  // Try ending-specific art first, then player portrait fallback
  var _pixelImg = null;
  if (typeof npcPortrait !== 'undefined') {
    // Priority: ending-specific art → death art (for game over) → player portrait
    _pixelImg = npcPortrait.getImage('endcard_' + ending)
             || (state.flags.r3Ending ? null : npcPortrait.getImage('endcard_death'))
             || npcPortrait.getImage(npcPortrait.playerId());
  }
  if (_pixelImg) {
    // Draw pixel portrait as full background (cover mode)
    var imgRatio = _pixelImg.width / _pixelImg.height;
    var canvasRatio = ENDCARD_W / ENDCARD_H;
    var drawW, drawH, drawX, drawY;
    if (imgRatio > canvasRatio) {
      drawH = ENDCARD_H;
      drawW = drawH * imgRatio;
      drawX = (ENDCARD_W - drawW) / 2;
      drawY = 0;
    } else {
      drawW = ENDCARD_W;
      drawH = drawW / imgRatio;
      drawX = 0;
      drawY = 0; // align top
    }
    ctx.imageSmoothingEnabled = false;
    ctx.drawImage(_pixelImg, drawX, drawY, drawW, drawH);

    // Dark gradient overlay: only bottom portion for text readability
    // Keep upper 55% mostly transparent to show tarot art
    var overlay = ctx.createLinearGradient(0, ENDCARD_H * 0.45, 0, ENDCARD_H);
    overlay.addColorStop(0, 'rgba(13,13,21,0)');
    overlay.addColorStop(0.2, 'rgba(13,13,21,0.6)');
    overlay.addColorStop(0.5, 'rgba(13,13,21,0.85)');
    overlay.addColorStop(1, 'rgba(13,13,21,0.95)');
    ctx.fillStyle = overlay;
    ctx.fillRect(0, Math.floor(ENDCARD_H * 0.45), ENDCARD_W, ENDCARD_H);
  } else {
    // ASCII art fallback (no pixel image)
    var artSet = ENDCARD_ART[ending] || ENDCARD_ART.lockdown;
    var art = artSet[state.sex] || artSet.male;
    ctx.font = '14px "Courier New", monospace';
    ctx.fillStyle = '#9898a8';
    ctx.textAlign = 'left';
    for (var ai = 0; ai < art.length; ai++) {
      ctx.fillText(art[ai], pad + 40, 80 + ai * 17);
    }
    var overlay2 = ctx.createLinearGradient(0, 250, 0, ENDCARD_H);
    overlay2.addColorStop(0, 'rgba(13,13,21,0)');
    overlay2.addColorStop(0.3, 'rgba(13,13,21,0.85)');
    overlay2.addColorStop(1, 'rgba(13,13,21,0.95)');
    ctx.fillStyle = overlay2;
    ctx.fillRect(0, 250, ENDCARD_W, ENDCARD_H - 250);
  }

  // ═════════════════════════════════
  //  TEXT OVERLAY — all in bottom 30%
  // ═════════════════════════════════
  var curY = Math.floor(ENDCARD_H * 0.68);

  // ── Player name + ending type ──
  ctx.shadowColor = 'rgba(0,0,0,0.9)';
  ctx.shadowBlur = 6;
  ctx.font = 'bold 20px "Courier New", monospace';
  ctx.fillStyle = '#e8e8f0';
  ctx.textAlign = 'left';
  ctx.fillText(state.name, pad, curY);

  ctx.textAlign = 'right';
  ctx.font = 'bold 14px "Courier New", monospace';
  ctx.fillStyle = meta.color;
  ctx.fillText(en ? meta.typeEn : meta.type, ENDCARD_W - pad, curY);
  ctx.shadowBlur = 0;

  // ── Stats: compact single row per stat ──
  curY += 20;
  var statDefs = [
    { label: 'STR', val: state.str },
    { label: 'AGI', val: state.agi },
    { label: 'WIL', val: state.wil },
  ];
  ctx.font = '11px "Courier New", monospace';
  ctx.textAlign = 'left';
  ctx.shadowColor = 'rgba(0,0,0,0.7)';
  ctx.shadowBlur = 3;
  var statStr = '';
  for (var si = 0; si < statDefs.length; si++) {
    statStr += statDefs[si].label + ' ' + statDefs[si].val + '   ';
  }
  statStr += 'Lv.' + state.level + '   ' + (en ? 'PETRI ' : '石化 ') + state.petri + '%';
  ctx.fillStyle = '#9a9aaa';
  ctx.fillText(statStr, pad, curY);
  ctx.shadowBlur = 0;

  // ── Score (large, right side) ──
  curY += 28;
  ctx.font = 'bold 36px "Courier New", monospace';
  ctx.fillStyle = rarity.color;
  ctx.textAlign = 'right';
  if (rarity.stars >= 4) {
    ctx.shadowColor = rarity.color;
    ctx.shadowBlur = 12;
  }
  ctx.fillText('' + totalScore, ENDCARD_W - pad, curY);
  ctx.shadowBlur = 0;

  // Stars + rarity (left of score)
  var stars = '';
  for (var i = 0; i < rarity.stars; i++) stars += '★';
  ctx.font = '12px "Courier New", monospace';
  ctx.textAlign = 'left';
  ctx.fillStyle = rarity.color;
  ctx.shadowColor = 'rgba(0,0,0,0.8)';
  ctx.shadowBlur = 4;
  ctx.fillText(stars + ' ' + (en ? rarity.en : rarity.zh), pad, curY);
  ctx.shadowBlur = 0;

  // ═════════════════════════════════
  //  FOOTER: time + url
  // ═════════════════════════════════
  var footerY = ENDCARD_H - 28;
  ctx.textAlign = 'left';
  ctx.font = '9px "Courier New", monospace';
  ctx.fillStyle = '#5a5a6a';
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
