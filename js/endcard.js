// ══ Ending Card Generator — Collectible Card (buddy style) ══

var ENDCARD_W = 450;
var ENDCARD_H = 680;

var ENDING_META = {
  dawn:       { zh: '黎明', en: 'DAWN',       type: '☀ 曙光者',  typeEn: 'DAWNBRINGER', color: '#60c8e0' },
  sacrifice:  { zh: '犧牲', en: 'SACRIFICE',  type: '✦ 獻身者',  typeEn: 'MARTYR',      color: '#9a8ac8' },
  compromise: { zh: '妥協', en: 'COMPROMISE', type: '⚖ 斡旋者',  typeEn: 'MEDIATOR',    color: '#d4a843' },
  lockdown:   { zh: '封鎖', en: 'LOCKDOWN',   type: '▣ 守門者',  typeEn: 'WARDEN',      color: '#c06060' },
};

var ENDING_FLAVOR = {
  dawn: {
    zh: '你帶著真相穿越了深淵的黑暗，\n將光明重新引入這被遺忘的地底世界。\n石化的詛咒終將褪去，而你的名字\n會被銘刻在新時代的起點。',
    en: 'You carried the truth through the\ndarkness of the abyss, bringing light\nback to this forgotten underworld.\nThe curse of petrification shall fade,\nand your name marks a new dawn.',
  },
  sacrifice: {
    zh: '你選擇了以自身為代價換取眾人的\n安全。石化的命運並未消失，只是由\n你一人承擔。深淵會記住這份犧牲。',
    en: 'You chose to bear the cost so others\nmight live. The curse did not vanish —\nyou simply took it upon yourself.\nThe abyss remembers your sacrifice.',
  },
  compromise: {
    zh: '在對立的勢力之間，你找到了一條\n脆弱但可行的中間道路。沒有英雄式\n的結局，但每個人都活了下來。',
    en: 'Between opposing forces, you found\na fragile but viable middle path.\nNo heroic ending — but everyone\nlived to see another day.',
  },
  lockdown: {
    zh: '深淵的入口被永遠封閉。地底的一切\n——包括真相——都被埋葬在石壁之下。\n安全，但代價是永遠的沉默。',
    en: 'The abyss was sealed forever. All that\nlay beneath — including the truth —\nburied under stone. Safe, yes.\nBut at the cost of eternal silence.',
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

// ── ASCII Art — larger, atmospheric ──

var ENDCARD_ART = {
  dawn: {
    male: [
      "            .  ✦  .       ",
      "         _,,,,,,,,,,_     ",
      "       .::::::::::::::::. ",
      "      ::: _________  :::::",
      "      :: |  °     °  | :::",
      "      :: |     <     | :::",
      "      :: |    \\__/   | :::",
      "      :::|___________|:::'",
      "       '::::.    .::::'  ",
      "       /::/ |    | \\::\\ ",
      "      |::|  |____|  |::| ",
      "      |::|  / || \\  |::| ",
      "      |::| (  ||  ) |::| ",
      "       \\:|   /  \\   |:/ ",
      "        |   / ◊◊ \\   |  ",
      "       /|  / ◊◊◊◊ \\  |\\ ",
      "      /_| /________\\ |_\\",
    ],
    female: [
      "            .  ✦  .       ",
      "        .*·*·*·*·*·*·*.  ",
      "       *·::::::::::::::::·",
      "      ::: _________  :::::",
      "     '::  | °     ° |:::' ",
      "      '·  |    v    | ·'  ",
      "      '·  |   \\__/  | ·'  ",
      "     '::: |___________|:' ",
      "       '::::.    .::::'  ",
      "       /::/ |    | \\::\\ ",
      "      |::|  |____|  |::| ",
      "      |::|  / || \\  |::| ",
      "      |::| (  ||  ) |::| ",
      "       \\:|   /  \\   |:/ ",
      "        |   / ◊◊ \\   |  ",
      "       /|  / ◊◊◊◊ \\  |\\ ",
      "      /_| /________\\ |_\\",
    ],
  },
  sacrifice: {
    male: [
      "         ·  ✦  ·  ✦  ·   ",
      "         _,,,,,,,,,,_     ",
      "       .::::::::::::::::. ",
      "      ::: _________  :::::",
      "      :: |  °     °  | :::",
      "      :: |     <     | :::",
      "      :: |    ___    | :::",
      "      :::|___________|:::'",
      "       '::::.    .::::'  ",
      "    __/::/  |    |  \\::\\__",
      "   /  |::|  |____|  |::|  \\",
      "  ◊   |::|  /    \\  |::|  ◊",
      "   \\  |::| /      \\ |::|  /",
      "    \\_\\::|/        \\|::/_/ ",
      "       |    / /\\ \\   |   ",
      "      /|   / /  \\ \\  |\\  ",
      "     /_|  /_/____\\_\\ |_\\ ",
    ],
    female: [
      "         ·  ✦  ·  ✦  ·   ",
      "        .*·*·*·*·*·*·*.  ",
      "       *·::::::::::::::::·",
      "      ::: _________  :::::",
      "     '::  | °     ° |:::' ",
      "      '·  |    v    | ·'  ",
      "      '·  |   ___   | ·'  ",
      "     '::: |___________|:' ",
      "       '::::.    .::::'  ",
      "    __/::/  |    |  \\::\\__",
      "   /  |::|  |____|  |::|  \\",
      "  ◊   |::|  /    \\  |::|  ◊",
      "   \\  |::| /      \\ |::|  /",
      "    \\_\\::|/        \\|::/_/ ",
      "       |    / /\\ \\   |   ",
      "      /|   / /  \\ \\  |\\  ",
      "     /_|  /_/____\\_\\ |_\\ ",
    ],
  },
  compromise: {
    male: [
      "                          ",
      "         _,,,,,,,,,,_     ",
      "       .::::::::::::::::. ",
      "      ::: _________  :::::",
      "      :: |  °     °  | :::",
      "      :: |     <     | :::",
      "      :: |    \\_/    | :::",
      "      :::|___________|:::'",
      "       '::::.    .::::'  ",
      "       /::/ |    | \\::\\ ",
      "      |::|  |____|  |::|__",
      "      |::|  / || \\  |::|-⇌",
      "      |::|    ||    |::|‾‾",
      "       \\:|    ||    |:/ ",
      "        |    /  \\    |  ",
      "       /|   /    \\   |\\ ",
      "      /_|  /______\\  |_\\",
    ],
    female: [
      "                          ",
      "        .*·*·*·*·*·*·*.  ",
      "       *·::::::::::::::::·",
      "      ::: _________  :::::",
      "     '::  | °     ° |:::' ",
      "      '·  |    v    | ·'  ",
      "      '·  |   \\_/   | ·'  ",
      "     '::: |___________|:' ",
      "       '::::.    .::::'  ",
      "       /::/ |    | \\::\\ ",
      "      |::|  |____|  |::|__",
      "      |::|  / || \\  |::|-⇌",
      "      |::|    ||    |::|‾‾",
      "       \\:|    ||    |:/ ",
      "        |    /  \\    |  ",
      "       /|   /    \\   |\\ ",
      "      /_|  /______\\  |_\\",
    ],
  },
  lockdown: {
    male: [
      "        ░░░░░░░░░░░░░    ",
      "       ░ _,,,,,,,,,,_ ░  ",
      "      ░.::::::::::::::::░",
      "      ░:: _________  :::░",
      "      ░:: | °    °  | ::░",
      "      ░:: |    <    | ::░",
      "      ░:: |  =====  | ::░",
      "      ░:::|__________|::░",
      "       ░::::.    .::::░  ",
      "       /::/ |    | \\::\\ ",
      "      |::|░░|____|░░|::| ",
      "      |::|░░/####\\░░|::| ",
      "      |::|░/######\\░|::| ",
      "       \\:|░/######\\░|:/ ",
      "        | / /####\\ \\ |  ",
      "       /| / #/  \\# \\ |\\ ",
      "      /_|/ _/____\\_ \\|_\\",
    ],
    female: [
      "        ░░░░░░░░░░░░░    ",
      "      ░.*·*·*·*·*·*·*.░  ",
      "      ░·::::::::::::::::░",
      "      ░:: _________  :::░",
      "      ░':: | °   ° |::'░ ",
      "      ░ '· |   v   | ·'░ ",
      "      ░ '· | ===== | ·'░ ",
      "      ░'::|__________|:░ ",
      "       ░::::.    .::::░  ",
      "       /::/ |    | \\::\\ ",
      "      |::|░░|____|░░|::| ",
      "      |::|░░/####\\░░|::| ",
      "      |::|░/######\\░|::| ",
      "       \\:|░/######\\░|:/ ",
      "        | / /####\\ \\ |  ",
      "       /| / #/  \\# \\ |\\ ",
      "      /_|/ _/____\\_ \\|_\\",
    ],
  },
};

// ── Pixel block bar renderer ──
function _drawBlockBar(ctx, x, y, val, max, color, blockSize) {
  var bs = blockSize || 8;
  var gap = 2;
  var totalBlocks = max;
  var filledBlocks = Math.round((val / max) * totalBlocks);

  for (var i = 0; i < totalBlocks; i++) {
    if (i < filledBlocks) {
      ctx.fillStyle = color;
      ctx.globalAlpha = 0.9;
    } else {
      ctx.fillStyle = '#1a1a24';
      ctx.globalAlpha = 0.6;
    }
    ctx.fillRect(x + i * (bs + gap), y, bs, bs);
  }
  ctx.globalAlpha = 1;
}

// ── Rounded rect helper ──
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
  var cx = ENDCARD_W / 2;
  var pad = 32; // left padding

  // ── Background ──
  ctx.fillStyle = '#0e0e16';
  ctx.fillRect(0, 0, ENDCARD_W, ENDCARD_H);

  // ── Rounded border ──
  _roundRect(ctx, 10, 10, ENDCARD_W - 20, ENDCARD_H - 20, 16);
  ctx.strokeStyle = rarity.color;
  ctx.globalAlpha = 0.5;
  ctx.lineWidth = 2;
  ctx.stroke();
  ctx.globalAlpha = 1;

  // Inner fill (slightly lighter)
  _roundRect(ctx, 12, 12, ENDCARD_W - 24, ENDCARD_H - 24, 14);
  ctx.fillStyle = '#111119';
  ctx.fill();

  // Subtle glow at top from rarity color
  var topGlow = ctx.createRadialGradient(cx, 0, 10, cx, 0, 250);
  topGlow.addColorStop(0, rarity.color);
  topGlow.addColorStop(1, 'transparent');
  ctx.globalAlpha = 0.04;
  ctx.fillStyle = topGlow;
  ctx.fillRect(12, 12, ENDCARD_W - 24, 300);
  ctx.globalAlpha = 1;

  // ── Top bar: stars + rarity (left) / type (right) ──
  var curY = 40;
  var stars = '';
  for (var si = 0; si < rarity.stars; si++) stars += '★';
  ctx.font = 'bold 14px "Courier New", monospace';
  ctx.textAlign = 'left';
  ctx.fillStyle = rarity.color;
  ctx.fillText(stars + ' ' + (en ? rarity.en : rarity.zh), pad, curY);

  ctx.textAlign = 'right';
  ctx.fillStyle = meta.color;
  ctx.font = '12px "Courier New", monospace';
  ctx.fillText(en ? meta.typeEn : meta.type, ENDCARD_W - pad, curY);

  // ── ASCII Art ──
  curY += 24;
  var artSet = ENDCARD_ART[ending] || ENDCARD_ART.lockdown;
  var art = artSet[state.sex] || artSet.male;
  ctx.font = '12px "Courier New", monospace';
  ctx.fillStyle = '#9898a8';
  ctx.textAlign = 'left';
  for (var i = 0; i < art.length; i++) {
    ctx.fillText(art[i], pad + 16, curY + i * 15);
  }
  curY += art.length * 15 + 16;

  // ── Character name ──
  var sexSymbol = state.sex === 'female' ? ' ♀' : ' ♂';
  ctx.font = 'bold 20px "Courier New", monospace';
  ctx.fillStyle = '#e0e0e8';
  ctx.textAlign = 'left';
  ctx.fillText(state.name + sexSymbol, pad, curY);

  // ── Flavor text ──
  curY += 20;
  var flavor = ENDING_FLAVOR[ending] || ENDING_FLAVOR.lockdown;
  var flavorText = en ? flavor.en : flavor.zh;
  var flavorLines = flavorText.split('\n');
  ctx.font = 'italic 12px "Courier New", monospace';
  ctx.fillStyle = '#6a6a7a';
  ctx.textAlign = 'left';
  for (var fi = 0; fi < flavorLines.length; fi++) {
    ctx.fillText(flavorLines[fi], pad, curY + fi * 16);
  }
  curY += flavorLines.length * 16 + 16;

  // ── Stats with pixel block bars ──
  var statLabels = en
    ? ['STR', 'AGI', 'WIL', 'PETRI', 'DEPTH']
    : ['力  量', '敏  捷', '意  志', '石化度', '深  度'];
  var statValues = [state.str, state.agi, state.wil, state.petri, state.level];
  var statMaxes  = [15, 15, 15, 100, 10];
  var statDisplayBlocks = [10, 10, 10, 10, 10]; // all normalized to 10 blocks
  var statColors = ['#c06060', '#60c060', '#6080c0', '#9a6ac8', '#c0a040'];

  var labelW = 90;
  var barX = pad + labelW + 8;
  var numX = ENDCARD_W - pad;

  for (var si2 = 0; si2 < statLabels.length; si2++) {
    var sy = curY + si2 * 22;
    // Label
    ctx.font = '12px "Courier New", monospace';
    ctx.textAlign = 'left';
    ctx.fillStyle = '#5a5a6a';
    ctx.fillText(statLabels[si2], pad, sy + 8);
    // Block bar
    _drawBlockBar(ctx, barX, sy, statValues[si2], statMaxes[si2], statColors[si2], 8);
    // Number
    ctx.textAlign = 'right';
    ctx.fillStyle = '#7a7a8a';
    ctx.font = '12px "Courier New", monospace';
    ctx.fillText('' + statValues[si2], numX, sy + 8);
  }
  curY += statLabels.length * 22 + 16;

  // ── Highlights box ──
  var hlItems = [];
  if (state.deathCount === 0) hlItems.push(en ? 'Deathless Run' : '零死亡通關');
  if (state.petri <= 10) hlItems.push(en ? 'Stone Resistant' : '抗石化體質');
  if (state.flags.r1YingCompanion) hlItems.push(en ? 'Ying\'s Companion' : '螢的同伴');
  if (state.flags.r3PlagueProof) hlItems.push(en ? 'Plague Proof' : '瘟疫證據');
  if (state.flags.r3CraneTestimony) hlItems.push(en ? 'Crane Testified' : '灰鶴作證');

  if (hlItems.length > 0) {
    // Box background
    _roundRect(ctx, pad - 4, curY - 4, ENDCARD_W - pad * 2 + 8, hlItems.length * 16 + 16, 6);
    ctx.fillStyle = '#14141e';
    ctx.fill();
    ctx.strokeStyle = '#2a2a3a';
    ctx.lineWidth = 1;
    ctx.stroke();

    // Label
    ctx.font = '10px "Courier New", monospace';
    ctx.fillStyle = '#4a4a5a';
    ctx.textAlign = 'left';
    ctx.fillText(en ? 'highlights' : '成就', pad + 4, curY + 10);

    // Items
    ctx.font = '11px "Courier New", monospace';
    ctx.fillStyle = '#8a8a9a';
    for (var hi = 0; hi < hlItems.length; hi++) {
      ctx.fillText('· ' + hlItems[hi], pad + 12, curY + 26 + hi * 16);
    }
    curY += hlItems.length * 16 + 24;
  }

  // ── Score at bottom ──
  curY = ENDCARD_H - 52;
  ctx.font = 'bold 11px "Courier New", monospace';
  ctx.textAlign = 'left';
  ctx.fillStyle = '#3a3a4a';
  ctx.fillText(en ? 'SCORE' : '評分', pad, curY);
  ctx.font = 'bold 22px "Courier New", monospace';
  ctx.fillStyle = rarity.color;
  ctx.shadowColor = rarity.color;
  ctx.shadowBlur = rarity.stars >= 4 ? 12 : 0;
  ctx.fillText('' + totalScore, pad + (en ? 60 : 48), curY);
  ctx.shadowBlur = 0;

  // Time + URL on right
  ctx.textAlign = 'right';
  ctx.font = '9px "Courier New", monospace';
  ctx.fillStyle = '#2a2a3a';
  if (typeof globalStats !== 'undefined' && globalStats.currentRunStartMs > 0) {
    var runTime = Date.now() - globalStats.currentRunStartMs;
    ctx.fillText((en ? 'time ' : '時間 ') + formatTime(runTime), ENDCARD_W - pad, curY - 10);
  }
  ctx.fillText('petriabyss.itch.io', ENDCARD_W - pad, curY);

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

  $closeBtn.onclick = function() {
    $overlay.classList.remove('active');
  };

  $overlay.classList.add('active');
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
