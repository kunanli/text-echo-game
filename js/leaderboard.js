// ══ Leaderboard System (Firebase Realtime DB) ══

var LEADERBOARD = {
  dbUrl: 'https://petriabyss-db-default-rtdb.asia-southeast1.firebasedatabase.app',

  isEnabled: function() {
    return !!this.dbUrl;
  },

  // ── Submit score ──
  submit: function(name, score, ending, callback) {
    if (!this.isEnabled()) {
      if (callback) callback(false);
      return;
    }
    var seconds = 0;
    if (typeof globalStats !== 'undefined' && globalStats.currentRunStartMs > 0) {
      seconds = Math.floor((Date.now() - globalStats.currentRunStartMs) / 1000);
    }
    var cycle = state.flags.ngPlusRun || 0;
    var entry = {
      name: name,
      score: score,
      ending: ending,
      cycle: cycle + 1,
      seconds: seconds,
      region: state.region || 0,
      level: state.level || 1,
      cause: state.flags._deathCause || null,
      enemy: state.flags._deathEnemyZh || null,
      enemyEn: state.flags._deathEnemyEn || null,
      timestamp: Date.now()
    };
    var url = this.dbUrl + '/leaderboard.json';
    console.log('[Leaderboard] submit →', url);
    fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(entry)
    }).then(function(r) {
      console.log('[Leaderboard] submit status:', r.status);
      if (callback) callback(r.ok);
    }).catch(function(err) {
      console.error('[Leaderboard] submit error:', err);
      if (callback) callback(false);
    });
  },

  // ── Fetch top scores ──
  fetch: function(limit, callback) {
    if (!this.isEnabled()) {
      callback([]);
      return;
    }
    var count = limit || 20;
    // orderBy score descending, limitToLast gets highest scores
    var url = this.dbUrl + '/leaderboard.json?orderBy="score"&limitToLast=' + count;
    console.log('[Leaderboard] fetch →', url);
    fetch(url).then(function(r) {
      console.log('[Leaderboard] fetch status:', r.status);
      return r.json();
    }).then(function(data) {
      console.log('[Leaderboard] data:', JSON.stringify(data));
      var entries = [];
      if (data && typeof data === 'object') {
        for (var key in data) {
          if (data.hasOwnProperty(key)) {
            var d = data[key];
            entries.push({
              name: d.name || '???',
              score: d.score || 0,
              seconds: d.seconds || 0,
              ending: d.ending || '',
              cycle: d.cycle || 1,
              region: typeof d.region === 'number' ? d.region : -1,
              level: d.level || 1,
              cause: d.cause || null,
              enemy: d.enemy || null,
              enemyEn: d.enemyEn || null
            });
          }
        }
      }
      // Sort by score descending
      entries.sort(function(a, b) { return b.score - a.score; });
      callback(entries.slice(0, count));
    }).catch(function(err) {
      console.error('[Leaderboard] fetch error:', err);
      callback([]);
    });
  }
};

// ── Fallen travelers cache (death entries from leaderboard) ──
var FALLEN_CACHE = null;
var FALLEN_FETCHING = false;
function _ensureFallenCache(cb) {
  if (FALLEN_CACHE) { if (cb) cb(FALLEN_CACHE); return; }
  if (FALLEN_FETCHING) { setTimeout(function() { _ensureFallenCache(cb); }, 300); return; }
  if (!LEADERBOARD.isEnabled()) { FALLEN_CACHE = []; if (cb) cb([]); return; }
  FALLEN_FETCHING = true;
  LEADERBOARD.fetch(100, function(entries) {
    FALLEN_FETCHING = false;
    FALLEN_CACHE = (entries || []).filter(function(e) {
      return e.ending === 'death' && e.region >= 0 && e.name && e.name !== (state && state.name);
    });
    if (cb) cb(FALLEN_CACHE);
  });
}

// Prefetch on game start — called from title.js / boot
function prefetchFallenTravelers() {
  _ensureFallenCache();
}

// Render a single fallen traveler into an epitaph-like line
function _formatEpitaph(e, en) {
  var cyc = e.cycle <= 1 ? (en ? '1st' : '一周目') : (e.cycle + (en ? 'th' : '周目'));
  var who = e.name + '（' + cyc + '・Lv.' + e.level + '）';
  // Cause-of-death phrasing
  var enemyName = en ? (e.enemyEn || e.enemy) : (e.enemy || e.enemyEn);
  if (e.cause === 'combat' && enemyName) {
    return en
      ? who + ' fell to ' + enemyName
      : who + ' 死於「' + enemyName + '」之手';
  }
  if (e.cause === 'petri') {
    return en
      ? who + ' turned entirely to stone'
      : who + ' 徹底化為冰冷的石像';
  }
  if (e.cause === 'combat') {
    return en ? who + ' fell in battle' : who + ' 戰死於此';
  }
  if (e.cause === 'environmental') {
    return en ? who + ' was claimed by the abyss' : who + ' 被深淵吞噬';
  }
  return who;
}

// Called when player enters a new region (state.maxRegion just advanced)
// Shows a story log entry listing fallen travelers with count + up to 3 epitaphs.
function showFallenTravelers(region) {
  _ensureFallenCache(function(fallen) {
    if (!fallen || fallen.length === 0) return;
    var here = fallen.filter(function(e) { return e.region === region; });
    var surpassed = fallen.filter(function(e) { return e.region < region; });
    if (here.length === 0 && surpassed.length === 0) return;

    var en = state.lang === 'en';
    var lines = [];
    if (here.length > 0) {
      // Show up to 3 epitaphs, one per line for readability
      var sample = here.slice(0, 3).map(function(e) {
        return '· ' + _formatEpitaph(e, en);
      }).join('<br>&nbsp;&nbsp;&nbsp;');
      var header = en
        ? here.length + ' traveler' + (here.length > 1 ? 's have' : ' has') + ' perished here:'
        : '在此地，已有 ' + here.length + ' 位旅者的魂魄凝在石中：';
      lines.push(header + '<br>&nbsp;&nbsp;&nbsp;' + sample);
    }
    if (surpassed.length > 0) {
      lines.push(en
        ? 'You have surpassed ' + surpassed.length + ' fallen traveler' + (surpassed.length > 1 ? 's' : '') + '.'
        : '你已超越了 ' + surpassed.length + ' 位葬身深淵的旅者。');
    }
    if (lines.length === 0) return;

    if (!$story) return;
    var wrap = document.createElement('div');
    wrap.className = 'log-line fallen-travelers';
    var tagEl = document.createElement('span');
    tagEl.className = 'log-tag tag-system';
    tagEl.textContent = '[' + (en ? 'Stele' : '石碑') + ']';
    wrap.appendChild(tagEl);
    var body = document.createElement('span');
    body.innerHTML = ' ' + lines.join('<br>&nbsp;&nbsp;&nbsp;');
    wrap.appendChild(body);
    $story.appendChild(wrap);
    if (typeof scrollStoryToBottom === 'function') scrollStoryToBottom();
  });
}

// ── Leaderboard UI ──

// Rate-limit low-value death submissions to avoid ballooning the backend
// with trivial early-game deaths. Only submit deaths that meet at least one
// bar: level ≥ 2 OR score ≥ 20 OR reached region ≥ 1 OR it's a non-death ending.
// Also throttle per-browser: 1 submission every 5 minutes even if meaningful.
var LB_THROTTLE_KEY = 'petriabyss_lb_last_submit';
var LB_THROTTLE_MS = 5 * 60 * 1000; // 5 minutes
function _meetsSubmitBar(ending, score) {
  if (ending !== 'death') return true;  // any ending always submits
  if ((state.level || 1) >= 2) return true;
  if (score >= 20) return true;
  if ((state.region || 0) >= 1) return true;
  return false;
}
function _isThrottled() {
  try {
    var last = parseInt(localStorage.getItem(LB_THROTTLE_KEY), 10) || 0;
    return (Date.now() - last) < LB_THROTTLE_MS;
  } catch (e) { return false; }
}
function _markSubmitted() {
  try { localStorage.setItem(LB_THROTTLE_KEY, String(Date.now())); } catch (e) {}
}

function submitToLeaderboard() {
  if (!LEADERBOARD.isEnabled()) return;
  var ending = state.flags.r3Ending || 'death';
  var score = (typeof calculateEndScore === 'function') ? calculateEndScore() : 0;
  if (!_meetsSubmitBar(ending, score)) {
    console.log('[Leaderboard] submission skipped — below bar');
    return;
  }
  if (_isThrottled()) {
    console.log('[Leaderboard] submission throttled');
    return;
  }
  _markSubmitted();
  LEADERBOARD.submit(state.name, score, ending, function(ok) {
    if (ok) {
      notify(L('分數已提交到排行榜！', 'Score submitted to leaderboard!'));
    } else {
      console.warn('[Leaderboard] submit failed — score:', score, 'ending:', ending);
      notify(L('排行榜提交失敗，請檢查網路連線', 'Leaderboard submit failed, check connection'));
    }
  });
}

function showLeaderboard() {
  var $overlay = document.getElementById('leaderboard-overlay');
  var $list = document.getElementById('leaderboard-list');
  var $loading = document.getElementById('leaderboard-loading');
  var $closeBtn = document.getElementById('leaderboard-close-btn');
  var $title = document.getElementById('leaderboard-title');
  var en = state.lang === 'en';

  if ($title) $title.textContent = en ? 'L E A D E R B O A R D' : '排 行 榜';
  if ($closeBtn) {
    $closeBtn.textContent = en ? 'Close' : '關閉';
    $closeBtn.onclick = function() { $overlay.classList.remove('active'); };
  }

  $overlay.classList.add('active');
  $loading.textContent = en ? 'Loading...' : '載入中...';
  $loading.style.display = '';
  $list.innerHTML = '';

  if (!LEADERBOARD.isEnabled()) {
    $loading.style.display = 'none';
    $list.innerHTML = '<div class="lb-empty">' + L('排行榜尚未設定', 'Leaderboard not configured') + '</div>';
    return;
  }

  LEADERBOARD.fetch(10, function(entries) {
    $loading.style.display = 'none';
    if (entries.length === 0) {
      $list.innerHTML = '<div class="lb-empty">' + L('暫無記錄', 'No entries yet') + '</div>';
      return;
    }

    var endingCards = {
      dawn:       { zh: '曙光者', en: 'DAWNBRINGER' },
      sacrifice:  { zh: '獻身者', en: 'MARTYR' },
      compromise: { zh: '斡旋者', en: 'MEDIATOR' },
      lockdown:   { zh: '守門者', en: 'WARDEN' },
      death:      { zh: '殞命者', en: 'FALLEN' },
    };

    var html = '<table class="lb-table">';
    html += '<tr class="lb-header"><th>#</th><th>' + L('玩家', 'Player') + '</th><th>' + L('周目', 'Cycle') + '</th><th>' + L('分數', 'Score') + '</th><th>' + L('卡片', 'Card') + '</th></tr>';

    for (var i = 0; i < entries.length; i++) {
      var e = entries[i];
      var rankClass = i < 3 ? ' lb-top' + (i + 1) : '';
      var rarity = (typeof getRarity === 'function') ? getRarity(e.score) : null;
      var rarityColor = rarity ? rarity.color : '#6a6a7a';
      var card = endingCards[e.ending];
      var cardName = card ? (en ? card.en : card.zh) : '--';
      var cycleLabel = e.cycle <= 1 ? (en ? '1st' : '一周目') : (en ? e.cycle + 'nd' : e.cycle + '周目');
      if (en && e.cycle === 3) cycleLabel = '3rd';
      if (en && e.cycle >= 4) cycleLabel = e.cycle + 'th';

      html += '<tr class="lb-row' + rankClass + '">';
      html += '<td class="lb-rank">' + (i + 1) + '</td>';
      html += '<td class="lb-name">' + e.name + '</td>';
      html += '<td class="lb-cycle">' + cycleLabel + '</td>';
      html += '<td class="lb-score" style="color:' + rarityColor + '">' + e.score + '</td>';
      html += '<td class="lb-card" style="color:' + rarityColor + '">' + cardName + '</td>';
      html += '</tr>';
    }
    html += '</table>';
    $list.innerHTML = html;
  });
}
