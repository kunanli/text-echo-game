// ══ ASCII Avatar System ══
// Classic RPG full-body portrait, dark fantasy style

// ═══════════════════════════════════════════════════
//  ASCII Avatar — Hooded Adventurer Portraits
// ═══════════════════════════════════════════════════
var AVATAR = {
  male: {
    normal: [
      "       .::::::::.       ",
      "      ::::::::::::.     ",
      "     ::  _____  :::     ",
      "     :: | o_o | :::     ",
      "     ::.|_____|.:::     ",
      "      ::: |=| :::       ",
      "    __|:::|=|:::|__     ",
      "   / ##::===::## \\     ",
      "  | ####:   :#####|    ",
      "  | ####:   :#### |    ",
      "   \\##__|   |__##/     ",
      "       |     |         ",
      "       |     |         ",
      "      _|     |_        ",
      "     [_________]       ",
    ],
    happy: [
      "       .::::::::.       ",
      "      ::::::::::::.     ",
      "     ::  _____  :::     ",
      "     :: | ^_^ | :::     ",
      "     ::.|_____|.:::     ",
      "      ::: |=| :::       ",
      "    __|:::|=|:::|__     ",
      "   / ##::===::## \\     ",
      "  | ####:   :#####|    ",
      "  | ####:   :#### |    ",
      "   \\##__|   |__##/     ",
      "       |     |         ",
      "       |     |         ",
      "      _|     |_        ",
      "     [_________]       ",
    ],
    hurt: [
      "       .::::::::.    *  ",
      "      ::::::::::::.  *  ",
      "     ::  _____  :::     ",
      "     :: | >_< | :::     ",
      "     ::.|_____|.:::     ",
      "      ::: |=| :::       ",
      "    __|:::|=|:::|__     ",
      "   / ##::===::## \\     ",
      "  |*####:   :#####|    ",
      "  | ####: * :#### |    ",
      "   \\##__|   |__##/     ",
      "       |     |         ",
      "       |     |         ",
      "      _|     |_        ",
      "     [_________]       ",
    ],
    danger: [
      "   *   .::::::::.  * * ",
      "    * ::::::::::::.  *  ",
      "     ::  _____  :::     ",
      "   * :: | x_x | :::     ",
      "     ::.|_____|.:::     ",
      "      ::: |=| :::       ",
      "  * __|:::|=|:::|__     ",
      "   / ##::===::## \\     ",
      "  |*####: * :#####|    ",
      "  |*####: * :####*|    ",
      "   \\##__|   |__##/     ",
      "       |  *  |         ",
      "       |     |         ",
      "      _|     |_        ",
      "     [_________]       ",
    ],
    petri: [
      "      ░.::::::::.░      ",
      "     ░::::::::::::.░    ",
      "    ░::  _____  :::░    ",
      "    ░:: | -_- | :::░    ",
      "    ░::.|_____|.:::░    ",
      "     ░::: |=| :::░      ",
      "   ░__|:::|=|:::|__░    ",
      "  ░/ ##::===::## \\░    ",
      " ░|░####:░░░:#####|░   ",
      " ░|░####:░░░:####░|░   ",
      "  ░\\##__|░░░|__##/░    ",
      "      ░|░░░░░|░        ",
      "      ░|░░░░░|░        ",
      "     ░_|░░░░░|_░       ",
      "    ░[_________]░      ",
    ],
    combat: [
      "       .::::::::.       ",
      "      ::::::::::::.     ",
      "     ::  _____  :::     ",
      "     :: | o`o | :::     ",
      "     ::.|_____|.:::     ",
      "    __::: |=| :::       ",
      "   |  |::|=|:::|__     ",
      " --+  |:===::## \\     ",
      " --+ ||:   :#####|    ",
      "   |  ||:   :#### |    ",
      "   |__|_|   |__##/     ",
      "       |     |         ",
      "       |     |         ",
      "      _|     |_        ",
      "     [_________]       ",
    ],
  },
  female: {
    normal: [
      "      .*.:::::::.*      ",
      "     *.::::::::::.*.    ",
      "    .:: ' _____ ` ::.   ",
      "    .:: '| o_o |` ::.   ",
      "     ::.`|_____|'::.    ",
      "      ::: |=| :::       ",
      "    __|:::|=|:::|__     ",
      "   / ~~::===::~~ \\     ",
      "  | ~~~~:   :~~~~~|    ",
      "  | ~~~~:   :~~~~ |    ",
      "   \\~~__|   |__~~/     ",
      "       |     |         ",
      "       |     |         ",
      "      _|     |_        ",
      "     [_________]       ",
    ],
    happy: [
      "      .*.:::::::.*      ",
      "     *.::::::::::.*.    ",
      "    .:: ' _____ ` ::.   ",
      "    .:: '| ^_^ |` ::.   ",
      "     ::.`|_____|'::.    ",
      "      ::: |=| :::       ",
      "    __|:::|=|:::|__     ",
      "   / ~~::===::~~ \\     ",
      "  | ~~~~:   :~~~~~|    ",
      "  | ~~~~:   :~~~~ |    ",
      "   \\~~__|   |__~~/     ",
      "       |     |         ",
      "       |     |         ",
      "      _|     |_        ",
      "     [_________]       ",
    ],
    hurt: [
      "      .*.:::::::.*   *  ",
      "     *.::::::::::.*.  * ",
      "    .:: ' _____ ` ::.   ",
      "    .:: '| >_< |` ::.   ",
      "     ::.`|_____|'::.    ",
      "      ::: |=| :::       ",
      "    __|:::|=|:::|__     ",
      "   / ~~::===::~~ \\     ",
      "  |*~~~~:   :~~~~~|    ",
      "  | ~~~~: * :~~~~ |    ",
      "   \\~~__|   |__~~/     ",
      "       |     |         ",
      "       |     |         ",
      "      _|     |_        ",
      "     [_________]       ",
    ],
    danger: [
      "  *   .*.:::::::.*  * * ",
      "   * *.::::::::::.*.  * ",
      "    .:: ' _____ ` ::.   ",
      "  * .:: '| x_x |` ::.   ",
      "     ::.`|_____|'::.    ",
      "      ::: |=| :::       ",
      "  * __|:::|=|:::|__     ",
      "   / ~~::===::~~ \\     ",
      "  |*~~~~: * :~~~~~|    ",
      "  |*~~~~: * :~~~~*|    ",
      "   \\~~__|   |__~~/     ",
      "       |  *  |         ",
      "       |     |         ",
      "      _|     |_        ",
      "     [_________]       ",
    ],
    petri: [
      "     ░.*.:::::::.*░     ",
      "    ░*.::::::::::.*.░   ",
      "   ░.:: ' _____ ` ::.░  ",
      "   ░.:: '| -_- |` ::.░  ",
      "    ░::.`|_____|'::.░   ",
      "     ░::: |=| :::░      ",
      "   ░__|:::|=|:::|__░    ",
      "  ░/ ~~::===::~~ \\░    ",
      " ░|░~~~~:░░░:~~~~~|░   ",
      " ░|░~~~~:░░░:~~~~░|░   ",
      "  ░\\~~__|░░░|__~~/░    ",
      "      ░|░░░░░|░        ",
      "      ░|░░░░░|░        ",
      "     ░_|░░░░░|_░       ",
      "    ░[_________]░      ",
    ],
    combat: [
      "      .*.:::::::.*      ",
      "     *.::::::::::.*.    ",
      "    .:: ' _____ ` ::.   ",
      "    .:: '| o`o |` ::.   ",
      "     ::.`|_____|'::.    ",
      "    __::: |=| :::       ",
      "   |  |::|=|:::|__     ",
      " --+  |:===::~~ \\     ",
      " --+ ||:   :~~~~~|    ",
      "   |  ||:   :~~~~ |    ",
      "   |__|_|   |__~~/     ",
      "       |     |         ",
      "       |     |         ",
      "      _|     |_        ",
      "     [_________]       ",
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

// ── Idle animation (blink + breath) ──
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
    var r = Math.random();
    if (r < 0.45) _doBlink();
    else if (r < 0.75) _doBreath();
    else _doCloakWind();
  }, 1600 + Math.random() * 2200);
}

function _doBlink() {
  if (!_getSpan()) return _nextIdle();
  var orig = _idleArt;
  // Close eyes: replace eye chars with -
  var blinked = orig
    .replace(/\| o_o \|/g, '| -_- |')
    .replace(/\| \^_\^ \|/g, '| -_- |')
    .replace(/\| >_< \|/g, '| -_- |')
    .replace(/\| x_x \|/g, '| -_- |')
    .replace(/\| o`o \|/g, '| -`- |');
  _setText(blinked);
  _idleR = setTimeout(function() {
    _setText(orig);
    // Double-blink sometimes
    if (Math.random() < 0.35) {
      _idleR = setTimeout(function() {
        _setText(blinked);
        _idleR = setTimeout(function() {
          _setText(orig);
          _nextIdle();
        }, 90);
      }, 150);
    } else _nextIdle();
  }, 120);
}

// Subtle breathing: belt expands
function _doBreath() {
  if (!_getSpan()) return _nextIdle();
  var orig = _idleArt;
  var breathed = orig.replace(/::===::/g, '::-=-::');
  _setText(breathed);
  _idleR = setTimeout(function() {
    _setText(orig);
    _nextIdle();
  }, 500);
}

// Cloak wind: toggle : in cloak area
function _doCloakWind() {
  if (!_getSpan()) return _nextIdle();
  var orig = _idleArt;
  var lines = orig.split('\n');
  // Shift the cloak chars (: to . and back)
  var frame1 = lines.map(function(line, i) {
    if (i >= 6 && i <= 10) {
      return line.replace(/:::/g, ':..');
    }
    return line;
  }).join('\n');
  var frame2 = lines.map(function(line, i) {
    if (i >= 6 && i <= 10) {
      return line.replace(/:::/g, '.::');
    }
    return line;
  }).join('\n');

  _setText(frame1);
  _idleR = setTimeout(function() {
    _setText(frame2);
    _idleR = setTimeout(function() {
      _setText(orig);
      _nextIdle();
    }, 200);
  }, 200);
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
