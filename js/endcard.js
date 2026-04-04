// ══ Ending Card Generator — Identity Card Style ══
// Generates a collectible 3:4 canvas card at the end of the game

var ENDCARD_W = 450;
var ENDCARD_H = 600;

var ENDING_META = {
  dawn:       { zh: '結局 A — 黎明',   en: 'Ending A — Dawn',       color: '#60c8e0', icon: '☀' },
  compromise: { zh: '結局 B — 妥協',   en: 'Ending B — Compromise', color: '#d4a843', icon: '⚖' },
  lockdown:   { zh: '結局 C — 封鎖',   en: 'Ending C — Lockdown',   color: '#c06060', icon: '🔒' },
  sacrifice:  { zh: '結局 D — 犧牲',   en: 'Ending D — Sacrifice',  color: '#9a8ac8', icon: '✦' },
};

// ── Rarity Tiers ──
var RARITY_TIERS = [
  { min: 85, zh: '傳說', en: 'Legendary', color: '#d4a843' },
  { min: 70, zh: '史詩', en: 'Epic',      color: '#9a5ac8' },
  { min: 50, zh: '稀有', en: 'Rare',      color: '#4a8ac8' },
  { min: 30, zh: '精良', en: 'Uncommon',   color: '#4a9e4a' },
  { min: 0,  zh: '普通', en: 'Common',     color: '#8a8a8a' },
];

function getRarity(score) {
  for (var i = 0; i < RARITY_TIERS.length; i++) {
    if (score >= RARITY_TIERS[i].min) return RARITY_TIERS[i];
  }
  return RARITY_TIERS[RARITY_TIERS.length - 1];
}

// ── Scoring System ──
function calculateEndScore() {
  var score = 0;

  // Stats total: (STR+AGI+WIL) × 2
  score += (state.str + state.agi + state.wil) * 2;

  // Level: level × 2
  score += state.level * 2;

  // Items: inventory.length × 2, cap 20
  score += Math.min(state.inventory.length * 2, 20);

  // NPC relations
  if (state.flags.r1YingCompanion) score += 5;
  if (state.flags.r3ZhouMet) score += 3;
  if (state.flags.r3BellMet) score += 3;
  if (state.flags.r3CraneMet3 || state.flags.r2CraneMet) score += 3;

  // Key progress
  if (state.flags.r3PlagueProof) score += 4;
  if (state.flags.r3CraneTestimony) score += 4;
  if (state.flags.r3BellAlliance) score += 3;
  if (state.flags.r3CouncilEntry) score += 2;

  // Zero death bonus
  if (state.deathCount === 0) score += 8;

  // Low petrification
  if (state.petri <= 10) score += 5;
  else if (state.petri <= 30) score += 3;

  // Ending bonus
  var ending = state.flags.r3Ending || 'lockdown';
  if (ending === 'dawn') score += 5;
  else if (ending === 'sacrifice') score += 4;
  else if (ending === 'compromise') score += 2;

  return score;
}

// ── Derived sub-scores for bar display ──
function getSubScores() {
  var ending = state.flags.r3Ending || 'lockdown';

  // Exploration (max ~20): level + items
  var explore = state.level * 2 + Math.min(state.inventory.length * 2, 20);
  explore = Math.min(explore, 40);

  // Social (max ~14): NPC relations
  var social = 0;
  if (state.flags.r1YingCompanion) social += 5;
  if (state.flags.r3ZhouMet) social += 3;
  if (state.flags.r3BellMet) social += 3;
  if (state.flags.r3CraneMet3 || state.flags.r2CraneMet) social += 3;

  // Survival (max ~13): death/petri
  var survival = 0;
  if (state.deathCount === 0) survival += 8;
  if (state.petri <= 10) survival += 5;
  else if (state.petri <= 30) survival += 3;

  return {
    str: state.str,
    agi: state.agi,
    wil: state.wil,
    explore: Math.round(explore / 40 * 15), // normalize to ~15 max for bar
    social: Math.round(social / 14 * 15),
    survival: Math.round(survival / 13 * 15),
  };
}

// ── Full-body ASCII Art (4 endings × 2 genders) ──
// Each: ~16 lines × ~24 chars wide

var ENDCARD_ART = {
  dawn: {
    male: [
      "        _,,,,_          ",
      "      .:::::::::.       ",
      "     ::: _____ ::::     ",
      "     :: | o o | :::     ",
      "     :: |  <  | :::     ",
      "     :: | ___ | :::     ",
      "     :::|_____|:::      ",
      "      .:::||:::.        ",
      "     /::/ || \\::\\      ",
      "    |::|  ||  |::|      ",
      "    |::|_/||  |::|      ",
      "    |::| (||) |::|      ",
      "     \\:|  ||  |:/      ",
      "      |  /  \\  |       ",
      "     /| /    \\ |\\     ",
      "    /_|/  ()  \\|_\\    ",
    ],
    female: [
      "      .*·*·*·*·*.       ",
      "     *·::::::::::·*     ",
      "     :: | o o | :::     ",
      "     :: |  v  | :::     ",
      "     :: | ___ | :::     ",
      "    '::|_____|:::'      ",
      "      .:::||:::.        ",
      "     /::/ || \\::\\      ",
      "    |::|  ||  |::|      ",
      "    |::|_/||  |::|      ",
      "    |::| (||) |::|      ",
      "     \\:| _||_ |:/      ",
      "      |/ /  \\ \\|      ",
      "     /| /    \\ |\\     ",
      "    /_|/ \\()/ \\|_\\   ",
      "       ~*·*·*~          ",
    ],
  },
  sacrifice: {
    male: [
      "        _,,,,_          ",
      "      .:::::::::.       ",
      "     ::: _____ ::::     ",
      "     :: | o o | :::     ",
      "     :: |  <  | :::     ",
      "     :: | ___ | :::     ",
      "     :::|_____|:::      ",
      "      .:::||:::.        ",
      "   __/::/    \\::\\__   ",
      "  /  |::|    |::|  \\  ",
      "  \\  |::|    |::|  /  ",
      "   \\_|::|    |::|_/   ",
      "      \\:|    |:/      ",
      "       |  /\\  |       ",
      "      /| /  \\ |\\     ",
      "     /_|/    \\|_\\    ",
    ],
    female: [
      "      .*·*·*·*·*.       ",
      "     *·::::::::::·*     ",
      "     :: | o o | :::     ",
      "     :: |  v  | :::     ",
      "     :: | ___ | :::     ",
      "    '::|_____|:::'      ",
      "      .:::||:::.        ",
      "   __/::/    \\::\\__   ",
      "  /  |::|    |::|  \\  ",
      "  \\  |::|    |::|  /  ",
      "   \\_|::|    |::|_/   ",
      "      \\:|    |:/      ",
      "       | _/\\_ |       ",
      "      /| /  \\ |\\     ",
      "     /_|/    \\|_\\    ",
      "       ~*·*·*~          ",
    ],
  },
  compromise: {
    male: [
      "        _,,,,_          ",
      "      .:::::::::.       ",
      "     ::: _____ ::::     ",
      "     :: | o o | :::     ",
      "     :: |  <  | :::     ",
      "     :: | ___ | :::     ",
      "     :::|_____|:::      ",
      "      .:::||:::.        ",
      "     /::/ || \\::\\      ",
      "    |::|  ||  |::|__    ",
      "    |::|  ||  |::|--)   ",
      "    |::|  ||  |::|--'   ",
      "     \\:|  ||  |:/      ",
      "      |  /  \\  |       ",
      "     /| /    \\ |\\     ",
      "    /_|/      \\|_\\    ",
    ],
    female: [
      "      .*·*·*·*·*.       ",
      "     *·::::::::::·*     ",
      "     :: | o o | :::     ",
      "     :: |  v  | :::     ",
      "     :: | ___ | :::     ",
      "    '::|_____|:::'      ",
      "      .:::||:::.        ",
      "     /::/ || \\::\\      ",
      "    |::|  ||  |::|__    ",
      "    |::|  ||  |::|--)   ",
      "    |::|  ||  |::|--'   ",
      "     \\:| _||_ |:/      ",
      "      |/ /  \\ \\|      ",
      "     /| /    \\ |\\     ",
      "    /_|/      \\|_\\    ",
      "       ~*·*·*~          ",
    ],
  },
  lockdown: {
    male: [
      "        _,,,,_          ",
      "      .:::::::::.       ",
      "     ::: _____ ::::     ",
      "     :: | o o | :::     ",
      "     :: |  <  | :::     ",
      "     :: | === | :::     ",
      "     :::|_____|:::      ",
      "      .:::||:::.        ",
      "     /::/ || \\::\\      ",
      "    |::|__||__|::|      ",
      "    |::|######|::|      ",
      "    |::|######|::|      ",
      "     \\:|######|:/      ",
      "      | /####\\ |      ",
      "     /|/ #/\\# \\|\\    ",
      "    /_|/ #/  \\# \\|_\\ ",
    ],
    female: [
      "      .*·*·*·*·*.       ",
      "     *·::::::::::·*     ",
      "     :: | o o | :::     ",
      "     :: |  v  | :::     ",
      "     :: | === | :::     ",
      "    '::|_____|:::'      ",
      "      .:::||:::.        ",
      "     /::/ || \\::\\      ",
      "    |::|__||__|::|      ",
      "    |::|######|::|      ",
      "    |::|######|::|      ",
      "     \\:|######|:/      ",
      "      |/ #### \\|      ",
      "     /|/ #/\\# \\|\\    ",
      "    /_|/ #/  \\# \\|_\\ ",
      "       ~*·*·*~          ",
    ],
  },
};

// ── Canvas Drawing Helpers ──

function _drawRoundRect(ctx, x, y, w, h, r) {
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

function _drawMiniBar(ctx, x, y, w, h, val, max, fillColor) {
  // Background
  ctx.fillStyle = '#1a1a2a';
  ctx.fillRect(x, y, w, h);
  // Fill
  var ratio = Math.min(val / max, 1);
  ctx.fillStyle = fillColor;
  ctx.fillRect(x, y, w * ratio, h);
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
  var sub = getSubScores();

  // ── Background ──
  ctx.fillStyle = '#08080e';
  ctx.fillRect(0, 0, ENDCARD_W, ENDCARD_H);

  // Subtle radial vignette
  var vg = ctx.createRadialGradient(ENDCARD_W / 2, ENDCARD_H / 3, 50, ENDCARD_W / 2, ENDCARD_H / 3, 350);
  vg.addColorStop(0, 'rgba(255,255,255,0.03)');
  vg.addColorStop(1, 'rgba(0,0,0,0)');
  ctx.fillStyle = vg;
  ctx.fillRect(0, 0, ENDCARD_W, ENDCARD_H);

  // ── Double Border (rarity color) ──
  // Outer border
  ctx.strokeStyle = rarity.color;
  ctx.lineWidth = 3;
  ctx.strokeRect(8, 8, ENDCARD_W - 16, ENDCARD_H - 16);
  // Inner border
  ctx.strokeStyle = rarity.color;
  ctx.globalAlpha = 0.35;
  ctx.lineWidth = 1;
  ctx.strokeRect(14, 14, ENDCARD_W - 28, ENDCARD_H - 28);
  ctx.globalAlpha = 1;

  // Corner accents (small L-shapes in rarity color)
  ctx.fillStyle = rarity.color;
  var cLen = 18, cW = 2;
  // top-left
  ctx.fillRect(8, 8, cLen, cW); ctx.fillRect(8, 8, cW, cLen);
  // top-right
  ctx.fillRect(ENDCARD_W - 8 - cLen, 8, cLen, cW); ctx.fillRect(ENDCARD_W - 10, 8, cW, cLen);
  // bottom-left
  ctx.fillRect(8, ENDCARD_H - 10, cLen, cW); ctx.fillRect(8, ENDCARD_H - 8 - cLen, cW, cLen);
  // bottom-right
  ctx.fillRect(ENDCARD_W - 8 - cLen, ENDCARD_H - 10, cLen, cW); ctx.fillRect(ENDCARD_W - 10, ENDCARD_H - 8 - cLen, cW, cLen);

  // ── Title: P E T R I A B Y S S ──
  var curY = 38;
  ctx.font = '600 12px "Courier New", monospace';
  ctx.fillStyle = '#5a5a6a';
  ctx.textAlign = 'center';
  ctx.fillText('P E T R I A B Y S S', ENDCARD_W / 2, curY);

  // ── Ending Name ──
  curY += 24;
  ctx.font = 'bold 20px "Courier New", monospace';
  ctx.fillStyle = meta.color;
  ctx.fillText(en ? meta.en : meta.zh, ENDCARD_W / 2, curY);

  // Decorative line
  curY += 10;
  ctx.fillStyle = meta.color;
  ctx.globalAlpha = 0.3;
  ctx.fillRect(60, curY, ENDCARD_W - 120, 1);
  ctx.globalAlpha = 1;

  // ── ASCII Full Body Art ──
  curY += 14;
  var artSet = ENDCARD_ART[ending] || ENDCARD_ART.lockdown;
  var art = artSet[state.sex] || artSet.male;
  ctx.font = '13px "Courier New", monospace';
  ctx.fillStyle = '#a0a0b0';
  ctx.textAlign = 'center';
  for (var i = 0; i < art.length; i++) {
    ctx.fillText(art[i], ENDCARD_W / 2, curY + i * 16);
  }
  curY += art.length * 16 + 8;

  // ── Character Name + Gender ──
  var sexLabel = state.sex === 'female' ? ' ♀' : ' ♂';
  ctx.font = '16px sans-serif';
  ctx.fillStyle = '#d0d0d8';
  ctx.textAlign = 'center';
  ctx.fillText(state.name + sexLabel, ENDCARD_W / 2, curY);

  // Thin line
  curY += 10;
  ctx.fillStyle = 'rgba(255,255,255,0.08)';
  ctx.fillRect(40, curY, ENDCARD_W - 80, 1);

  // ── Score Bars (6 stats) ──
  curY += 14;
  var barLabels = en
    ? ['STR', 'AGI', 'WIL', 'EXPLORE', 'SOCIAL', 'SURVIVAL']
    : ['力量', '敏捷', '意志', '探索', '交際', '生存'];
  var barValues = [sub.str, sub.agi, sub.wil, sub.explore, sub.social, sub.survival];
  var barMaxes  = [15, 15, 15, 15, 15, 15];
  var barColors = ['#c06060', '#60c060', '#6080c0', '#c0a040', '#c060a0', '#40c0c0'];

  var barW = 120, barH = 7;
  var barLeftLabel = 80;
  var barLeftBar = ENDCARD_W / 2 + 10;

  for (var b = 0; b < barLabels.length; b++) {
    var by = curY + b * 18;
    // Label
    ctx.font = '11px "Courier New", monospace';
    ctx.textAlign = 'right';
    ctx.fillStyle = '#6a6a7a';
    ctx.fillText(barLabels[b], barLeftBar - 10, by + 6);
    // Bar
    _drawMiniBar(ctx, barLeftBar, by, barW, barH, barValues[b], barMaxes[b], barColors[b]);
    // Value
    ctx.textAlign = 'left';
    ctx.fillStyle = '#8a8a9a';
    ctx.font = '10px "Courier New", monospace';
    ctx.fillText('' + barValues[b], barLeftBar + barW + 6, by + 6);
  }
  curY += barLabels.length * 18 + 8;

  // ── Total Score + Rarity Badge ──
  // Score number
  ctx.font = 'bold 28px "Courier New", monospace';
  ctx.textAlign = 'center';
  ctx.fillStyle = rarity.color;

  // Glow effect
  ctx.shadowColor = rarity.color;
  ctx.shadowBlur = 16;
  ctx.fillText('' + totalScore, ENDCARD_W / 2, curY);
  ctx.shadowBlur = 0;

  // Rarity label
  curY += 18;
  ctx.font = 'bold 13px "Courier New", monospace';
  ctx.fillStyle = rarity.color;
  ctx.globalAlpha = 0.85;
  ctx.fillText('[ ' + (en ? rarity.en : rarity.zh) + ' ]', ENDCARD_W / 2, curY);
  ctx.globalAlpha = 1;

  // ── Petrification Bar ──
  curY += 18;
  var pBarX = 50, pBarW = ENDCARD_W - 100, pBarH = 6;
  ctx.font = '9px "Courier New", monospace';
  ctx.textAlign = 'left';
  ctx.fillStyle = '#4a4a5a';
  ctx.fillText(en ? 'Petrification' : '石化度', pBarX, curY - 3);
  ctx.textAlign = 'right';
  ctx.fillText(state.petri + '%', pBarX + pBarW, curY - 3);
  // Bar bg
  ctx.fillStyle = '#1a1a2a';
  ctx.fillRect(pBarX, curY, pBarW, pBarH);
  // Bar fill
  var petriRatio = state.petri / 100;
  var petriGrad = ctx.createLinearGradient(pBarX, 0, pBarX + pBarW * petriRatio, 0);
  petriGrad.addColorStop(0, '#4a3a6a');
  petriGrad.addColorStop(1, '#9a6ac8');
  ctx.fillStyle = petriGrad;
  ctx.fillRect(pBarX, curY, pBarW * petriRatio, pBarH);

  // ── Play Time ──
  curY += 18;
  if (typeof globalStats !== 'undefined' && globalStats.currentRunStartMs > 0) {
    var runTime = Date.now() - globalStats.currentRunStartMs;
    ctx.font = '9px "Courier New", monospace';
    ctx.textAlign = 'center';
    ctx.fillStyle = '#3a3a4a';
    ctx.fillText((en ? 'Time: ' : '時間：') + formatTime(runTime), ENDCARD_W / 2, curY);
  }

  // ── Footer ──
  ctx.font = '9px "Courier New", monospace';
  ctx.textAlign = 'center';
  ctx.fillStyle = '#3a3a4a';
  ctx.fillText('petriabyss.itch.io', ENDCARD_W / 2, ENDCARD_H - 18);

  return canvas;
}

// Show the ending card overlay
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

  // Download
  $dlBtn.onclick = function() {
    var link = document.createElement('a');
    link.download = 'petriabyss-' + (state.flags.r3Ending || 'ending') + '.png';
    link.href = canvas.toDataURL('image/png');
    link.click();
  };

  // Share (Web Share API or copy to clipboard)
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
