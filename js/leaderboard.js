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
              cycle: d.cycle || 1
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

// ── Leaderboard UI ──

function submitToLeaderboard() {
  if (!LEADERBOARD.isEnabled()) return;
  var ending = state.flags.r3Ending || 'death';
  var score = (typeof calculateEndScore === 'function') ? calculateEndScore() : 0;
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

  LEADERBOARD.fetch(20, function(entries) {
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
    html += '<tr class="lb-header"><th>#</th><th>' + L('玩家', 'Player') + '</th><th>' + L('分數', 'Score') + '</th><th>' + L('卡片', 'Card') + '</th><th>' + L('稀有度', 'Rarity') + '</th></tr>';

    for (var i = 0; i < entries.length; i++) {
      var e = entries[i];
      var rankClass = i < 3 ? ' lb-top' + (i + 1) : '';
      var rarity = (typeof getRarity === 'function') ? getRarity(e.score) : null;
      var rarityName = rarity ? (en ? rarity.en : rarity.zh) : '--';
      var rarityColor = rarity ? rarity.color : '#6a6a7a';
      var card = endingCards[e.ending];
      var cardName = card ? (en ? card.en : card.zh) : '--';
      var stars = '';
      for (var si = 0; si < (rarity ? rarity.stars : 0); si++) stars += '★';

      html += '<tr class="lb-row' + rankClass + '">';
      html += '<td class="lb-rank">' + (i + 1) + '</td>';
      html += '<td class="lb-name">' + e.name + '</td>';
      html += '<td class="lb-score" style="color:' + rarityColor + '">' + e.score + '</td>';
      html += '<td class="lb-card">' + cardName + '</td>';
      html += '<td class="lb-rarity" style="color:' + rarityColor + '"><span class="lb-stars">' + stars + '</span> ' + rarityName + '</td>';
      html += '</tr>';
    }
    html += '</table>';
    $list.innerHTML = html;
  });
}
