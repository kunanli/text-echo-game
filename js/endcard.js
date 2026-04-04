// ══ Ending Card Generator ══
// Generates a shareable canvas image at the end of the game

var ENDCARD_W = 600;
var ENDCARD_H = 400;

var ENDING_META = {
  dawn:       { zh: '結局 A — 黎明',   en: 'Ending A — Dawn',       color: '#60c8e0', icon: '☀' },
  compromise: { zh: '結局 B — 妥協',   en: 'Ending B — Compromise', color: '#d4a843', icon: '⚖' },
  lockdown:   { zh: '結局 C — 封鎖',   en: 'Ending C — Lockdown',   color: '#c06060', icon: '🔒' },
  sacrifice:  { zh: '結局 D — 犧牲',   en: 'Ending D — Sacrifice',  color: '#9a8ac8', icon: '✦' },
};

function generateEndCard() {
  var canvas = document.createElement('canvas');
  canvas.width = ENDCARD_W;
  canvas.height = ENDCARD_H;
  var ctx = canvas.getContext('2d');
  var en = state.lang === 'en';
  var ending = state.flags.r3Ending || 'lockdown';
  var meta = ENDING_META[ending] || ENDING_META.lockdown;

  // Background
  ctx.fillStyle = '#0a0a10';
  ctx.fillRect(0, 0, ENDCARD_W, ENDCARD_H);

  // Border
  ctx.strokeStyle = meta.color;
  ctx.lineWidth = 2;
  ctx.strokeRect(12, 12, ENDCARD_W - 24, ENDCARD_H - 24);

  // Inner border (double line)
  ctx.strokeStyle = 'rgba(255,255,255,0.08)';
  ctx.lineWidth = 1;
  ctx.strokeRect(18, 18, ENDCARD_W - 36, ENDCARD_H - 36);

  // Top decorative line
  ctx.fillStyle = meta.color;
  ctx.fillRect(30, 30, ENDCARD_W - 60, 1);

  // Title: PETRIABYSS
  ctx.font = '600 14px "Courier New", monospace';
  ctx.fillStyle = '#6a6a7a';
  ctx.textAlign = 'center';
  ctx.fillText('P E T R I A B Y S S', ENDCARD_W / 2, 52);

  // Chinese subtitle
  ctx.font = '600 11px sans-serif';
  ctx.fillStyle = '#4a4a5a';
  ctx.fillText(en ? '' : '石 化 深 淵', ENDCARD_W / 2, 68);

  // Ending type
  ctx.font = 'bold 24px "Courier New", monospace';
  ctx.fillStyle = meta.color;
  ctx.fillText(en ? meta.en : meta.zh, ENDCARD_W / 2, 108);

  // Decorative line below ending
  ctx.fillStyle = meta.color;
  ctx.globalAlpha = 0.3;
  ctx.fillRect(120, 118, ENDCARD_W - 240, 1);
  ctx.globalAlpha = 1;

  // Character info
  var sexLabel = state.sex === 'female' ? (en ? '♀' : '♀') : (en ? '♂' : '♂');
  ctx.font = '18px sans-serif';
  ctx.fillStyle = '#c8c8d0';
  ctx.fillText(state.name + ' ' + sexLabel, ENDCARD_W / 2, 152);

  // Stats section
  var statsY = 185;
  var colW = 140;
  var col1X = ENDCARD_W / 2 - colW - 20;
  var col2X = ENDCARD_W / 2 + 20;

  ctx.font = '13px "Courier New", monospace';
  ctx.textAlign = 'left';

  // Left column
  var leftStats = [
    [en ? 'Level' : '等級', '' + state.level],
    [en ? 'STR' : '力量', '' + state.str],
    [en ? 'AGI' : '敏捷', '' + state.agi],
    [en ? 'WIL' : '意志', '' + state.wil],
  ];

  // Right column
  var rightStats = [
    [en ? 'Petri' : '石化度', state.petri + '%'],
    ['HP', state.hp + '/' + state.maxHp],
    [en ? 'Deaths' : '死亡', '' + state.deathCount],
    [en ? 'Score' : '評分', '' + (state.flags.r3VoteScore || 0)],
  ];

  for (var i = 0; i < leftStats.length; i++) {
    var y = statsY + i * 22;
    ctx.fillStyle = '#6a6a7a';
    ctx.fillText(leftStats[i][0], col1X, y);
    ctx.fillStyle = '#c8c8d0';
    ctx.textAlign = 'right';
    ctx.fillText(leftStats[i][1], col1X + colW, y);
    ctx.textAlign = 'left';
  }
  for (var i = 0; i < rightStats.length; i++) {
    var y = statsY + i * 22;
    ctx.fillStyle = '#6a6a7a';
    ctx.fillText(rightStats[i][0], col2X, y);
    ctx.fillStyle = '#c8c8d0';
    ctx.textAlign = 'right';
    ctx.fillText(rightStats[i][1], col2X + colW, y);
    ctx.textAlign = 'left';
  }

  // Divider
  ctx.fillStyle = 'rgba(255,255,255,0.08)';
  ctx.fillRect(40, 278, ENDCARD_W - 80, 1);

  // Key flags / narrative highlights
  var highlights = [];
  if (state.flags.r1YingCompanion) highlights.push(en ? 'Ying\'s Companion' : '螢的同伴');
  if (state.flags.r3PlagueProof) highlights.push(en ? 'Plague Proof Found' : '找到瘟疫證據');
  if (state.flags.r3CraneTestimony) highlights.push(en ? 'Crane Testified' : '灰鶴作證');
  if (state.flags.r3ZhouMet) highlights.push(en ? 'Met Old Zhou' : '遇見老周');
  if (state.deathCount === 0) highlights.push(en ? 'Deathless Run' : '零死亡通關');
  if (state.petri <= 10) highlights.push(en ? 'Stone Resistant' : '抗石化體質');

  if (highlights.length > 0) {
    ctx.font = '11px sans-serif';
    ctx.textAlign = 'center';
    ctx.fillStyle = '#5a5a6a';
    var hlText = highlights.join('  ·  ');
    ctx.fillText(hlText, ENDCARD_W / 2, 298);
  }

  // Petri bar visual at bottom
  var barY = 320;
  var barW = ENDCARD_W - 100;
  var barH = 8;
  var barX = 50;
  ctx.fillStyle = '#1a1a2a';
  ctx.fillRect(barX, barY, barW, barH);
  var petriW = barW * (state.petri / 100);
  var petriGrad = ctx.createLinearGradient(barX, 0, barX + petriW, 0);
  petriGrad.addColorStop(0, '#4a3a6a');
  petriGrad.addColorStop(1, meta.color);
  ctx.fillStyle = petriGrad;
  ctx.fillRect(barX, barY, petriW, barH);
  // Bar labels
  ctx.font = '10px "Courier New", monospace';
  ctx.textAlign = 'left';
  ctx.fillStyle = '#4a4a5a';
  ctx.fillText(en ? 'Petrification' : '石化度', barX, barY - 4);
  ctx.textAlign = 'right';
  ctx.fillText(state.petri + '%', barX + barW, barY - 4);

  // Play time
  if (typeof globalStats !== 'undefined' && globalStats.currentRunStartMs > 0) {
    var runTime = Date.now() - globalStats.currentRunStartMs;
    ctx.font = '10px "Courier New", monospace';
    ctx.textAlign = 'center';
    ctx.fillStyle = '#3a3a4a';
    ctx.fillText((en ? 'Time: ' : '時間：') + formatTime(runTime), ENDCARD_W / 2, 350);
  }

  // Bottom decorative line
  ctx.fillStyle = meta.color;
  ctx.globalAlpha = 0.3;
  ctx.fillRect(30, ENDCARD_H - 30, ENDCARD_W - 60, 1);
  ctx.globalAlpha = 1;

  // Footer
  ctx.font = '10px "Courier New", monospace';
  ctx.textAlign = 'center';
  ctx.fillStyle = '#3a3a4a';
  ctx.fillText('petriabyss.itch.io', ENDCARD_W / 2, ENDCARD_H - 16);

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
          // Fallback: copy image URL
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
