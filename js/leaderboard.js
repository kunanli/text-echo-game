// ══ Leaderboard System (Dreamlo) ══
// Get your free keys at: https://dreamlo.com
// Replace the keys below with your own.

var LEADERBOARD = {
  // ── Dreamlo keys (REPLACE THESE) ──
  privateKey: 'YOUR_PRIVATE_KEY',   // for submitting scores
  publicKey:  'YOUR_PUBLIC_KEY',    // for reading scores
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
    fetch(url).then(function(r) {
      if (callback) callback(r.ok);
    }).catch(function() {
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
    fetch(url).then(function(r) { return r.json(); }).then(function(data) {
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
    }).catch(function() {
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

    var endingNames = {
      dawn: L('黎明', 'Dawn'),
      sacrifice: L('犧牲', 'Sacrifice'),
      compromise: L('妥協', 'Compromise'),
      lockdown: L('封鎖', 'Lockdown'),
    };

    var html = '<table class="lb-table">';
    html += '<tr class="lb-header"><th>#</th><th>' + L('名稱', 'Name') + '</th><th>' + L('評分', 'Score') + '</th><th>' + L('結局', 'Ending') + '</th><th>' + L('時間', 'Time') + '</th></tr>';

    for (var i = 0; i < entries.length; i++) {
      var e = entries[i];
      var rankClass = i < 3 ? ' lb-top' + (i + 1) : '';
      var medal = i === 0 ? '🥇' : i === 1 ? '🥈' : i === 2 ? '🥉' : (i + 1);
      var mins = Math.floor(e.seconds / 60);
      var timeStr = mins > 0 ? mins + 'm' : '--';
      var endingStr = endingNames[e.ending] || e.ending;
      var rarity = (typeof getRarity === 'function') ? getRarity(e.score) : null;
      var scoreColor = rarity ? rarity.color : '#9a9ab0';

      html += '<tr class="lb-row' + rankClass + '">';
      html += '<td class="lb-rank">' + medal + '</td>';
      html += '<td class="lb-name">' + e.name + '</td>';
      html += '<td class="lb-score" style="color:' + scoreColor + '">' + e.score + '</td>';
      html += '<td class="lb-ending">' + endingStr + '</td>';
      html += '<td class="lb-time">' + timeStr + '</td>';
      html += '</tr>';
    }
    html += '</table>';
    $list.innerHTML = html;
  });
}
