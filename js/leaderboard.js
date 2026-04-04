// ══ Leaderboard System (Dreamlo) ══
// Get your free keys at: https://dreamlo.com
// Replace the keys below with your own.

var LEADERBOARD = {
  // ── Dreamlo keys (REPLACE THESE) ──
  privateKey: 'cewmb78CnUmsLIJuKmd6GQgL6TlyH9LkCyWxwfHbqkRQ',
  publicKey:  '69d1277e8f40bc2f60f2d6f8',
  baseUrl: 'https://dreamlo.com/lb',

  // Is leaderboard configured?
  isEnabled: function() {
    return this.privateKey !== 'YOUR_PRIVATE_KEY' && this.publicKey !== 'YOUR_PUBLIC_KEY';
  },

  // ── Submit score ──
  // Format: name | score | seconds | ending
  submit: function(name, score, ending, callback) {
    if (!this.isEnabled()) {
      if (callback) callback(false);
      return;
    }
    var seconds = 0;
    if (typeof globalStats !== 'undefined' && globalStats.currentRunStartMs > 0) {
      seconds = Math.floor((Date.now() - globalStats.currentRunStartMs) / 1000);
    }
    // Dreamlo add: /lb/{privateKey}/add/{name}/{score}/{seconds}/{ending}
    var safeName = encodeURIComponent(name.replace(/[\/\\\?&]/g, '_'));
    var url = this.baseUrl + '/' + this.privateKey + '/add/' + safeName + '/' + score + '/' + seconds + '/' + ending;
    console.log('[Leaderboard] submit →', url);
    fetch(url).then(function(r) {
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
    var url = this.baseUrl + '/' + this.publicKey + '/json/' + count;
    console.log('[Leaderboard] fetch →', url);
    fetch(url).then(function(r) { console.log('[Leaderboard] fetch status:', r.status); return r.json(); }).then(function(data) {
      console.log('[Leaderboard] data:', JSON.stringify(data));
      var entries = [];
      if (data && data.dreamlo && data.dreamlo.leaderboard) {
        var board = data.dreamlo.leaderboard.entry;
        if (!board) { callback([]); return; }
        // single entry comes as object, not array
        if (!Array.isArray(board)) board = [board];
        for (var i = 0; i < board.length; i++) {
          entries.push({
            name: board[i].name,
            score: parseInt(board[i].score) || 0,
            seconds: parseInt(board[i].seconds) || 0,
            ending: board[i].text || '',
          });
        }
      }
      callback(entries);
    }).catch(function(err) {
      console.error('[Leaderboard] fetch error:', err);
      callback([]);
    });
  }
};

// ── Leaderboard UI ──

function submitToLeaderboard() {
  if (!LEADERBOARD.isEnabled()) return;
  var ending = state.flags.r3Ending || 'lockdown';
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

    var endingMeta = (typeof ENDING_META !== 'undefined') ? ENDING_META : {};
    var endingCards = {
      dawn:       { zh: '曙光者', en: 'DAWNBRINGER' },
      sacrifice:  { zh: '獻身者', en: 'MARTYR' },
      compromise: { zh: '斡旋者', en: 'MEDIATOR' },
      lockdown:   { zh: '守門者', en: 'WARDEN' },
    };

    var html = '<table class="lb-table">';
    html += '<tr class="lb-header"><th>#</th><th>' + L('玩家', 'Player') + '</th><th>' + L('卡片', 'Card') + '</th><th>' + L('稀有度', 'Rarity') + '</th></tr>';

    for (var i = 0; i < entries.length; i++) {
      var e = entries[i];
      var rankClass = i < 3 ? ' lb-top' + (i + 1) : '';
      var rarity = (typeof getRarity === 'function') ? getRarity(e.score) : null;
      var rarityName = rarity ? (en ? rarity.en : rarity.zh) : '--';
      var rarityColor = rarity ? rarity.color : '#6a6a7a';
      var card = endingCards[e.ending];
      var cardName = card ? (en ? card.en : card.zh) : '--';
      var stars = rarity ? '' : '';
      for (var si = 0; si < (rarity ? rarity.stars : 0); si++) stars += '★';

      html += '<tr class="lb-row' + rankClass + '">';
      html += '<td class="lb-rank">' + (i + 1) + '</td>';
      html += '<td class="lb-name">' + e.name + '</td>';
      html += '<td class="lb-card">' + cardName + '</td>';
      html += '<td class="lb-rarity" style="color:' + rarityColor + '"><span class="lb-stars">' + stars + '</span> ' + rarityName + '</td>';
      html += '</tr>';
    }
    html += '</table>';
    $list.innerHTML = html;
  });
}
