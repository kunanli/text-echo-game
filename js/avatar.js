// ══ ASCII Avatar System ══

// ═══════════════════════════════════════════════════
//  ASCII Avatar System
// ═══════════════════════════════════════════════════
var AVATAR = {
  male: {
    normal: [
      "        ╱▓▓▓▓▓▓▓╲        ",
      "       ╱ ▓▓▓▓▓▓▓ ╲       ",
      "     ╭─────────────╮     ",
      "     │             │     ",
      "     │  ( ˘ ω ˘ )  │     ",
      "     │             │     ",
      "     ╰──────◡──────╯     ",
      "         ╱   ╲           ",
    ],
    happy: [
      "        ╱▓▓▓▓▓▓▓╲        ",
      "       ╱ ▓▓▓▓▓▓▓ ╲       ",
      "     ╭─────────────╮     ",
      "     │             │     ",
      "     │  ( ^ ▽ ^ )  │     ",
      "     │             │     ",
      "     ╰──────◡──────╯     ",
      "         ╱   ╲           ",
    ],
    hurt: [
      "        ╱▓▓▓▓▓▓▓╲     ·  ",
      "       ╱ ▓▓▓▓▓▓▓ ╲   ·   ",
      "     ╭─────────────╮     ",
      "     │             │     ",
      "     │  ( > ~ < )  │     ",
      "     │             │     ",
      "     ╰──────◡──────╯     ",
      "         ╱   ╲           ",
    ],
    danger: [
      "   ·    ╱▓▓▓▓▓▓▓╲  · ·  ",
      "       ╱ ▓▓▓▓▓▓▓ ╲  ·   ",
      "     ╭─────────────╮     ",
      "   · │             │     ",
      "     │  ( × _ × )  │     ",
      "     │             │     ",
      "     ╰──────◡──────╯     ",
      "         ╱   ╲           ",
    ],
    petri: [
      "        ╱░░░░░░░╲        ",
      "       ╱ ░▓░▓▓░▓ ╲       ",
      "     ╭───░─────░───╮     ",
      "     │    ░     ░  │     ",
      "     │  ( ░ _ ░ )  │     ",
      "     │  ░       ░  │     ",
      "     ╰─░░░░░◡░░░░░─╯     ",
      "         ╱   ╲           ",
    ],
    combat: [
      "        ╱▓▓▓▓▓▓▓╲        ",
      "       ╱ ▓▓▓▓▓▓▓ ╲       ",
      "     ╭─────────────╮     ",
      "     │             │     ",
      "     │  ( ◆ ε ◆ )  │     ",
      "     │             │     ",
      "     ╰──────◡──────╯     ",
      "         ╱   ╲           ",
    ],
  },
  female: {
    normal: [
      "       ·˚·˚·˚·˚·˚·       ",
      "      ╱ ˚·˚·˚·˚·˚ ╲      ",
      "     ╭─────────────╮     ",
      "     │             │     ",
      "     │  ( ˘ ◡ ˘ )  │     ",
      "     │             │     ",
      "     ╰──────◡──────╯     ",
      "         ╱   ╲           ",
    ],
    happy: [
      "       ·˚·˚·˚·˚·˚·       ",
      "      ╱ ˚·˚·˚·˚·˚ ╲      ",
      "     ╭─────────────╮     ",
      "     │             │     ",
      "     │  ( ^ ◡ ^ )  │     ",
      "     │             │     ",
      "     ╰──────◡──────╯     ",
      "         ╱   ╲           ",
    ],
    hurt: [
      "       ·˚·˚·˚·˚·˚·    ·  ",
      "      ╱ ˚·˚·˚·˚·˚ ╲  ·   ",
      "     ╭─────────────╮     ",
      "     │             │     ",
      "     │  ( > ~ < )  │     ",
      "     │             │     ",
      "     ╰──────◡──────╯     ",
      "         ╱   ╲           ",
    ],
    danger: [
      "  ·    ·˚·˚·˚·˚·˚·  · ·  ",
      "      ╱ ˚·˚·˚·˚·˚ ╲  ·   ",
      "     ╭─────────────╮     ",
      "   · │             │     ",
      "     │  ( × _ × )  │     ",
      "     │             │     ",
      "     ╰──────◡──────╯     ",
      "         ╱   ╲           ",
    ],
    petri: [
      "       ·░·░·░·░·░·       ",
      "      ╱ ░·˚·░·˚·░ ╲      ",
      "     ╭───░─────░───╮     ",
      "     │    ░     ░  │     ",
      "     │  ( ░ _ ░ )  │     ",
      "     │  ░       ░  │     ",
      "     ╰─░░░░░◡░░░░░─╯     ",
      "         ╱   ╲           ",
    ],
    combat: [
      "       ·˚·˚·˚·˚·˚·       ",
      "      ╱ ˚·˚·˚·˚·˚ ╲      ",
      "     ╭─────────────╮     ",
      "     │             │     ",
      "     │  ( ◆ ◡ ◆ )  │     ",
      "     │             │     ",
      "     ╰──────◡──────╯     ",
      "         ╱   ╲           ",
    ],
  }
};

function getAvatarMood() {
  if (state.mood === 'combat') return 'combat';
  if (state.petri >= 60) return 'petri';
  var hpPct = state.hp / state.maxHp;
  if (hpPct <= 0.25) return 'danger';
  if (hpPct <= 0.55) return 'hurt';
  if (hpPct >= 0.95 && state.petri <= 10) return 'happy';
  return 'normal';
}

// ── Idle animation (blink + hair wind) ──
var _idleTmr = null, _idleR = null, _idleArt = '';

function _getSpan() { return $avatarBox.querySelector('span'); }
function _setText(txt) { var s = _getSpan(); if (s) s.textContent = txt; }

function startIdleAnim() {
  stopIdleAnim();
  _nextIdle();
}
function stopIdleAnim() {
  clearTimeout(_idleTmr); clearTimeout(_idleR);
  _idleTmr = _idleR = null;
}
function _nextIdle() {
  _idleTmr = setTimeout(function() {
    if (Math.random() < 0.55) _doBlink(); else _doHairWind();
  }, 1200 + Math.random() * 2000);
}

function _doBlink() {
  if (!_getSpan()) return _nextIdle();
  var orig = _idleArt;
  var blinked = orig.replace(/[˘^><×◆]/g, '─');
  _setText(blinked);
  _idleR = setTimeout(function() {
    _setText(orig);
    if (Math.random() < 0.4) {
      _idleR = setTimeout(function() {
        _setText(blinked);
        _idleR = setTimeout(function() {
          _setText(orig);
          _nextIdle();
        }, 80);
      }, 120);
    } else _nextIdle();
  }, 110);
}

function _doHairWind() {
  if (!_getSpan()) return _nextIdle();
  var orig = _idleArt;
  var lines = orig.split('\n');
  var isFemale = state.sex === 'female';
  var hc = isFemale ? '˚' : '▓';
  var wc = isFemale ? "'" : '░';

  function windFrame(parity) {
    var out = lines.slice();
    for (var i = 0; i <= 1 && i < out.length; i++) {
      var r = '', n = 0;
      for (var j = 0; j < out[i].length; j++) {
        if (out[i][j] === hc) { r += (n % 2 === parity) ? wc : hc; n++; }
        else r += out[i][j];
      }
      out[i] = r;
    }
    return out.join('\n');
  }

  _setText(windFrame(0));
  _idleR = setTimeout(function() {
    _setText(windFrame(1));
    _idleR = setTimeout(function() {
      _setText(orig);
      _nextIdle();
    }, 180);
  }, 180);
}

function renderAvatar() {
  var mood = getAvatarMood();
  var art = AVATAR[state.sex] && AVATAR[state.sex][mood];
  if (!art) art = AVATAR.male.normal;
  var text = art.join('\n');
  _idleArt = text;

  var span = document.createElement('span');
  span.textContent = text;
  $avatarBox.innerHTML = '';
  $avatarBox.appendChild(span);
  $avatarBox.className = 'avatar-box mood-' + mood;

  startIdleAnim();
}
