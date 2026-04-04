// ══ Auto-explore log feed engine ══

// ═══════════════════════════════════════════════════
//  Auto-explore log feed engine (idle RPG style)
// ═══════════════════════════════════════════════════
var autoTimer = null;
var autoClockTimer = null;
var autoFast = false;
var autoSkipAll = false;  // long-press: dump all remaining text instantly
var autoRunning = false;
var _autoResume = null;  // callback to resume loop after long-press interrupt
var autoElapsed = 0;    // cumulative game-time in milliseconds (never resets)

// Mobile pacing: slower text on small screens
var isMobile = window.innerWidth <= 760;
var PACE = isMobile ? 1.4 : 1.0;   // delay multiplier
window.addEventListener('resize', function() {
  isMobile = window.innerWidth <= 760;
  PACE = isMobile ? 1.4 : 1.0;
});
let currentChoices = [];

// DOM refs for explore bar
const $exploreBar   = document.getElementById('explore-bar');
const $ebLabel      = document.getElementById('eb-label');
const $ebDots       = document.getElementById('eb-dots');
const $ebTimer      = document.getElementById('eb-timer');

// ── Ambient / filler events ──
const AMBIENT_POOL = [
  { tag: '環境', tagColor: 'tag-system', text: '一陣冷風從遠處吹來……', textEn: 'A cold wind blows from the depths...' },
  { tag: '感知', tagColor: 'tag-sense', text: '遠處傳來微弱的水滴聲。', textEn: 'Faint dripping echoes in the distance.' },
  { tag: '環境', tagColor: 'tag-system', text: '空氣中的石化粒子在微光中閃爍。', textEn: 'Petrification particles glimmer in the faint light.' },
  { tag: '感知', tagColor: 'tag-sense', text: '你感覺到腳下的地面微微震動。', textEn: 'You feel the ground trembling beneath your feet.' },
  { tag: '環境', tagColor: 'tag-system', text: '某處傳來石塊碎裂的聲響。', textEn: 'The sound of crumbling stone echoes nearby.' },
  { tag: '感知', tagColor: 'tag-sense', text: '一股潮濕的氣息撲面而來。', textEn: 'A wave of damp air washes over you.' },
  { tag: '石化', tagColor: 'tag-petri', text: '你的指尖隱隱發麻——石化在緩慢蔓延。', textEn: 'Your fingertips tingle — petrification slowly spreads.' },
  { tag: '感知', tagColor: 'tag-sense', text: '你聽到了自己的心跳聲。', textEn: 'You hear your own heartbeat.' },
  { tag: '環境', tagColor: 'tag-system', text: '洞穴深處傳來不明的回聲。', textEn: 'Unknown echoes reverberate from deep within the cave.' },
  { tag: '感知', tagColor: 'tag-sense', text: '你的影子在礦脈的冷光中微微搖晃。', textEn: 'Your shadow sways in the cold glow of ore veins.' },
  { tag: '感知', tagColor: 'tag-sense', text: '空氣變得更加沉重了。', textEn: 'The air grows heavier.' },
  { tag: '環境', tagColor: 'tag-system', text: '你嗅到了一絲腐朽的氣味。', textEn: 'You catch a faint scent of decay.' },
  { tag: '感知', tagColor: 'tag-sense', text: '頭頂傳來碎屑掉落的細響，像是有什麼在上方移動。', textEn: 'Debris trickles from above — something stirs overhead.' },
  { tag: '環境', tagColor: 'tag-system', text: '岩壁上一道裂縫正緩緩滲出灰色液體。', textEn: 'A crack in the wall seeps with grey liquid.' },
];
var lastAmbientIdx = -1;

function pickAmbient() {
  var pool = AMBIENT_POOL;
  var idx;
  do { idx = Math.floor(Math.random() * pool.length); } while (idx === lastAmbientIdx);
  lastAmbientIdx = idx;
  return Object.assign({}, pool[idx], { delay: rng(1800, 2800) });
}

// ── Format time ──
function fmtTime(ms) {
  var totalSec = Math.floor(ms / 1000);
  var h = Math.floor(totalSec / 3600);
  var m = Math.floor((totalSec % 3600) / 60);
  var s = totalSec % 60;
  var pad = function(n) { return (n < 10 ? '0' : '') + n; };
  return h > 0
    ? pad(h) + ':' + pad(m) + ':' + pad(s)
    : pad(m) + ':' + pad(s);
}

// ── ASCII spinner & dots animation ──
var dotCount = 0;
var dotTimer = null;
var spinnerFrames = ['/', '-', '\\', '|'];
var spinnerIdx = 0;
var $ebIcon = document.getElementById('eb-icon');
function startDots() {
  dotCount = 0;
  spinnerIdx = 0;
  if (dotTimer) clearInterval(dotTimer);
  dotTimer = setInterval(function() {
    dotCount = (dotCount + 1) % 4;
    spinnerIdx = (spinnerIdx + 1) % 4;
    $ebDots.textContent = '.'.repeat(dotCount);
    $ebIcon.textContent = '[' + spinnerFrames[spinnerIdx] + ']';
  }, 250);
}
function stopDots() {
  if (dotTimer) { clearInterval(dotTimer); dotTimer = null; }
  $ebDots.textContent = '';
}

// ── Explore bar control ──
function showExploreBar(label) {
  $exploreBar.classList.add('active');
  $exploreBar.classList.remove('done');
  $ebLabel.textContent = label || L('自動探索中', 'Auto-exploring');
  $ebTimer.textContent = '[' + fmtTime(autoElapsed) + ']';
  startDots();
}
function updateExploreTimer() {
  $ebTimer.textContent = '[' + fmtTime(autoElapsed) + ']';
}
function finishExploreBar() {
  stopDots();
  $exploreBar.classList.add('done');
  $ebIcon.textContent = '[=]';
  $ebLabel.textContent = L('等待決策', 'Awaiting decision');
  $ebTimer.textContent = '[' + fmtTime(autoElapsed) + ']';
}
function hideExploreBar() {
  $exploreBar.classList.remove('active');
  $exploreBar.classList.remove('done');
  stopDots();
}

// ── Stop everything ──
function stopAuto() {
  if (autoTimer) { clearTimeout(autoTimer); autoTimer = null; }
  if (autoClockTimer) { clearInterval(autoClockTimer); autoClockTimer = null; }
  autoRunning = false;
  removePending();
  voiceNarrator.cancel();
}

// ── Main autoExplore function ──
// steps: array of { tag?, tagColor?, text?, html?, art?, delay?, effect?, noAmbient? }
// choices: array of { text, action }
// opts: { label? }
function appendDivider() {
  if ($story.children.length > 0) {
    var div = document.createElement('div');
    div.className = 'story-divider';
    div.textContent = '· · ·';
    $story.appendChild(div);
  }
}

// ── Pending indicator (animated dots before new content) ──
var $pendingEl = null;

function showPending() {
  removePending();
  $pendingEl = document.createElement('div');
  $pendingEl.className = 'pending-indicator';
  $pendingEl.innerHTML = '<span class="dot">░</span><span class="dot">░</span><span class="dot">▒</span><span class="dot">░</span><span class="dot">░</span>';
  $story.appendChild($pendingEl);
  $story.scrollTop = $story.scrollHeight;
}

function removePending() {
  if ($pendingEl && $pendingEl.parentNode) {
    $pendingEl.parentNode.removeChild($pendingEl);
  }
  $pendingEl = null;
}

function autoExplore(steps, choices, opts) {
  stopAuto();
  autoFast = false;
  autoSkipAll = false;
  autoRunning = true;
  appendDivider();
  $choices.innerHTML = '';
  currentChoices = [];
  renderStatus();

  var label = (opts && opts.label) || L('自動探索中', 'Auto-exploring');
  showExploreBar(label);

  // Start the clock (ticks every 200ms for smooth display)
  autoClockTimer = setInterval(function() {
    autoElapsed += 200;
    updateExploreTimer();
  }, 200);

  // Build the expanded step list (inject ambient between steps)
  var expanded = [];
  for (var i = 0; i < steps.length; i++) {
    expanded.push(steps[i]);
    // After non-art, non-last steps, maybe inject ambient (30% chance)
    if (!steps[i].art && i < steps.length - 1 && !steps[i].noAmbient) {
      if (Math.random() < 0.3) {
        expanded.push(pickAmbient());
      }
    }
  }

  var idx = 0;

  function showNext() {
    if (idx >= expanded.length) {
      removePending();
      autoRunning = false;
      if (autoClockTimer) { clearInterval(autoClockTimer); autoClockTimer = null; }
      finishExploreBar();
      showChoices(choices);
      return;
    }

    var step = expanded[idx];
    idx++;

    // Long-press: dump all remaining text instantly (no pending, no typewriter)
    if (autoSkipAll) {
      renderStepInstant(step);
      showNext();
      return;
    }

    // If user tapped, skip pending but still show step normally
    if (autoFast) {
      autoFast = false;   // reset — only skip THIS step's pending
      renderStep(step);
      return;
    }

    // Show pending indicator, then render the actual step after a short pause
    showPending();
    var pendingDelay = (step.art ? 400 : 600) * PACE;
    _autoResume = function() {
      removePending();
      // Speak the line — renderStepInstant doesn't trigger voice, so we
      // must do it here when the user taps through the pending phase.
      var artC = (state.lang === 'en' && step.artEn) ? step.artEn : step.art;
      if (!artC) {
        var tc = (state.lang === 'en' && step.textEn) ? step.textEn : step.text;
        var hc = (state.lang === 'en' && step.htmlEn) ? step.htmlEn : step.html;
        voiceNarrator.speak(tc || hc, state.lang);
      }
      renderStepInstant(step);
      showNext();
    };
    autoTimer = setTimeout(function() {
      removePending();
      renderStep(step);
    }, pendingDelay);
  }

  // Instant render (for long-press skip-all) — no typewriter, no delays
  function renderStepInstant(step) {
    var line = document.createElement('div');
    var artContent = (state.lang === 'en' && step.artEn) ? step.artEn : step.art;

    if (artContent) {
      line.innerHTML = artContent;
      if (step.effect) { try { step.effect(); renderStatus(); } catch(e) { DEBUG && console.warn('Step effect error:', e); } }
      $story.appendChild(line);
    } else {
      line.className = 'log-line';
      var tsEl = document.createElement('span');
      tsEl.className = 'log-ts';
      tsEl.textContent = fmtTime(autoElapsed);
      line.appendChild(tsEl);
      if (step.tag) {
        var tagEl = document.createElement('span');
        tagEl.className = 'log-tag ' + (step.tagColor || 'tag-explore');
        var tagText = (state.lang === 'en' && TAG_EN[step.tag]) ? TAG_EN[step.tag] : step.tag;
        tagEl.textContent = '[' + tagText + ']';
        line.appendChild(tagEl);
      }
      var htmlContent = (state.lang === 'en' && step.htmlEn) ? step.htmlEn : step.html;
      var textContent = (state.lang === 'en' && step.textEn) ? step.textEn : step.text;
      var contentSpan = document.createElement('span');
      if (htmlContent) { contentSpan.innerHTML = htmlContent; }
      else { contentSpan.textContent = textContent || ''; }
      line.appendChild(contentSpan);
      if (step.effect) { try { step.effect(); renderStatus(); } catch(e) { DEBUG && console.warn('Step effect error:', e); } }
      $story.appendChild(line);
    }
    $story.scrollTop = $story.scrollHeight;
  }

  function renderStep(step) {
    // Build line element
    var line = document.createElement('div');

    var artContent = (state.lang === 'en' && step.artEn) ? step.artEn : step.art;
    var stepDelay = Math.round((step.delay != null ? step.delay : 1200) * PACE);

    if (artContent) {
      line.innerHTML = artContent;
      // Run side effect
      if (step.effect) { try { step.effect(); renderStatus(); } catch(e) { DEBUG && console.warn('Step effect error:', e); } }
      $story.appendChild(line);
      $story.scrollTop = $story.scrollHeight;
      _autoResume = function() { showNext(); };
      autoTimer = setTimeout(showNext, stepDelay);
    } else {
      line.className = 'log-line';

      // Timestamp
      var tsEl = document.createElement('span');
      tsEl.className = 'log-ts';
      tsEl.textContent = fmtTime(autoElapsed);
      line.appendChild(tsEl);

      // Tag
      if (step.tag) {
        var tagEl = document.createElement('span');
        tagEl.className = 'log-tag ' + (step.tagColor || 'tag-explore');
        var tagText = (state.lang === 'en' && TAG_EN[step.tag]) ? TAG_EN[step.tag] : step.tag;
        tagEl.textContent = '[' + tagText + ']';
        line.appendChild(tagEl);
      }

      // Content — typewriter effect
      var htmlContent = (state.lang === 'en' && step.htmlEn) ? step.htmlEn : step.html;
      var textContent = (state.lang === 'en' && step.textEn) ? step.textEn : step.text;
      var contentSpan = document.createElement('span');
      line.appendChild(contentSpan);

      // Run side effect
      if (step.effect) { try { step.effect(); renderStatus(); } catch(e) { DEBUG && console.warn('Step effect error:', e); } }

      $story.appendChild(line);
      $story.scrollTop = $story.scrollHeight;

      // Voice narration — speak when typewriter begins
      voiceNarrator.speak(textContent || htmlContent, state.lang);

      var fullText = textContent || '';
      var fullHtml = htmlContent || '';
      var isHtml = !!htmlContent;

      // Typewriter: for html content, extract plain text to type, then swap to html at end
      var chars = isHtml ? fullHtml.replace(/<[^>]*>/g, '') : fullText;
      var ci = 0;
      var typeBuf = '';  // buffer chars to reduce DOM writes
      var TYPE_BATCH = 3; // flush every N chars
      var typeSpeed = Math.round(35 * PACE);
      function typeChar() {
        if (autoSkipAll) {
          // Long-press — finish instantly, no delay before next
          if (isHtml) { contentSpan.innerHTML = fullHtml; } else { contentSpan.textContent = fullText; }
          $story.scrollTop = $story.scrollHeight;
          showNext();
          return;
        }
        if (autoFast) {
          // User tapped — finish THIS line's typewriter instantly, then wait normal delay
          autoFast = false;
          if (isHtml) { contentSpan.innerHTML = fullHtml; } else { contentSpan.textContent = fullText; }
          $story.scrollTop = $story.scrollHeight;
          _autoResume = function() { showNext(); };
          autoTimer = setTimeout(showNext, stepDelay);
          return;
        }
        if (ci < chars.length) {
          typeBuf += chars[ci];
          ci++;
          // Flush buffer to DOM every TYPE_BATCH chars or at end
          if (typeBuf.length >= TYPE_BATCH || ci >= chars.length) {
            contentSpan.textContent += typeBuf;
            typeBuf = '';
            $story.scrollTop = $story.scrollHeight;
          }
          // Resume = finish this line's text instantly, then continue
          _autoResume = function() {
            if (isHtml) { contentSpan.innerHTML = fullHtml; } else { contentSpan.textContent = fullText; }
            $story.scrollTop = $story.scrollHeight;
            showNext();
          };
          autoTimer = setTimeout(typeChar, typeSpeed);
        } else {
          // Typing done — swap to full html if needed (to restore <b> tags etc)
          if (isHtml) { contentSpan.innerHTML = fullHtml; }
          $story.scrollTop = $story.scrollHeight;
          _autoResume = function() { showNext(); };
          autoTimer = setTimeout(showNext, stepDelay);
        }
      }
      typeChar();
    }
  }

  showNext();
}

// ── Tap / long-press controls ──
// Tap (short press): skip one line's typewriter/pending
// Long press (≥500ms): dump ALL remaining text instantly
var _touchMoved = false;
var _longPressTimer = null;
var _didLongPress = false;
var LONG_PRESS_MS = 500;

function tapOneLine() {
  if (!autoRunning) return;
  // Cancel current timer, finish current step, advance to next immediately
  if (autoTimer) { clearTimeout(autoTimer); autoTimer = null; }
  removePending();
  if (_autoResume) {
    var fn = _autoResume;
    _autoResume = null;
    fn();
  } else {
    autoFast = true;
  }
}

function longPressSkipAll() {
  if (autoRunning) {
    autoSkipAll = true;
    // Cancel current timer and resume immediately — showNext will see autoSkipAll
    if (autoTimer) { clearTimeout(autoTimer); autoTimer = null; }
    removePending();
    if (_autoResume) { var fn = _autoResume; _autoResume = null; fn(); }
  }
}

$story.addEventListener('touchstart', function() {
  _touchMoved = false;
  _didLongPress = false;
  _longPressTimer = setTimeout(function() {
    _didLongPress = true;
    longPressSkipAll();
  }, LONG_PRESS_MS);
}, { passive: true });

$story.addEventListener('touchmove', function() {
  _touchMoved = true;
  if (_longPressTimer) { clearTimeout(_longPressTimer); _longPressTimer = null; }
}, { passive: true });

$story.addEventListener('touchend', function(e) {
  if (_longPressTimer) { clearTimeout(_longPressTimer); _longPressTimer = null; }
  if (!_touchMoved && !_didLongPress) tapOneLine();
  _touchMoved = false;
  _didLongPress = false;
});

// Desktop click = single tap (skip one line)
// Desktop long-press (mousedown ≥500ms) = skip all
var _mouseLP = null;
var _didMouseLP = false;

$story.addEventListener('mousedown', function(e) {
  // Ignore touch-originated mouse events
  if (e.sourceCapabilities && e.sourceCapabilities.firesTouchEvents) return;
  if (e.button !== 0) return;
  _didMouseLP = false;
  _mouseLP = setTimeout(function() {
    _didMouseLP = true;
    longPressSkipAll();
  }, LONG_PRESS_MS);
});

$story.addEventListener('mouseup', function(e) {
  if (e.sourceCapabilities && e.sourceCapabilities.firesTouchEvents) return;
  if (_mouseLP) { clearTimeout(_mouseLP); _mouseLP = null; }
  if (!_didMouseLP) tapOneLine();
  _didMouseLP = false;
});

$story.addEventListener('mouseleave', function() {
  if (_mouseLP) { clearTimeout(_mouseLP); _mouseLP = null; }
});
