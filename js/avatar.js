// ══ ASCII Avatar System ══
// Close-up head portrait, dark fantasy style

// ═══════════════════════════════════════════════════
//  ASCII Avatar — Hooded Face Portraits
// ═══════════════════════════════════════════════════
var AVATAR = {
  male: {
    normal: [
      "      _,,,,,,,,,,_      ",
      "    .::::::::::::::::,   ",
      "   ::: _________  ::::  ",
      "  ::::|         |:::: : ",
      "  ::  | °     ° | ::::: ",
      "  ::  |    <    | ::::: ",
      "  ::  |   ___   | ::::: ",
      "  ::::|_________|:::::: ",
      "   :::::.     .::::::   ",
      "    '':::::::::::''     ",
    ],
    happy: [
      "      _,,,,,,,,,,_      ",
      "    .::::::::::::::::,   ",
      "   ::: _________  ::::  ",
      "  ::::|         |:::: : ",
      "  ::  | ^     ^ | ::::: ",
      "  ::  |    <    | ::::: ",
      "  ::  |   \\_/   | ::::: ",
      "  ::::|_________|:::::: ",
      "   :::::.     .::::::   ",
      "    '':::::::::::''     ",
    ],
    hurt: [
      "      _,,,,,,,,,,_   *  ",
      "    .::::::::::::::::, * ",
      "   ::: _________  ::::  ",
      "  ::::|         |:::: : ",
      "  ::  | >     < | ::::: ",
      "  ::  |    <    | ::::: ",
      "  ::  |   ~~~   | ::::: ",
      "  ::::|_________|:::::: ",
      "   :::::.     .::::::   ",
      "    '':::::::::::''     ",
    ],
    danger: [
      "   *  _,,,,,,,,,,_  * * ",
      "  * .::::::::::::::::, * ",
      "   ::: _________  ::::  ",
      "  ::::|         |:::: : ",
      "  ::  | x     x | ::::: ",
      "  ::  |    <    | ::::: ",
      "  ::  |   ...   | ::::: ",
      "  ::::|_________|:::::: ",
      "   :::::.     .::::::   ",
      "    '':::::::::::''     ",
    ],
    petri: [
      "     ░_,,,,,,,,,,_░     ",
      "   ░.::::::::::::::::,░  ",
      "  ░::: _________  ::::░ ",
      " ░::::|░░░░░░░░░|::::░: ",
      " ░::  |░°░░░░░°░| :::::░",
      " ░::  |░░░░<░░░░| :::::░",
      " ░::  |░░░___░░░| :::::░",
      " ░::::|_________|:::::░ ",
      "  ░:::::.     .::::::░  ",
      "   ░'':::::::::::''░    ",
    ],
    combat: [
      "      _,,,,,,,,,,_      ",
      "    .::::::::::::::::,   ",
      "   ::: _________  ::::  ",
      "  ::::|         |:::: : ",
      "  ::  | °     ` | ::::: ",
      "  ::  |    <    | ::::: ",
      "  ::  |   ===   | ::::: ",
      "  ::::|_________|:::::: ",
      "   :::::.     .::::::   ",
      "    '':::::::::::''     ",
    ],
  },
  female: {
    normal: [
      "     .*·*·*·*·*·*·*.    ",
      "    *·::::::::::::::::·  ",
      "   ::: _________  ::::  ",
      "  ' ::|         |::' :  ",
      "   ' ·| °     ° |· ' :  ",
      "   ' ·|    v    |· ' :  ",
      "   ' ·|   ___   |· ' :  ",
      "  ' ::|_________|::' :  ",
      "   :::::.     .::::::   ",
      "    '':::::::::::''     ",
    ],
    happy: [
      "     .*·*·*·*·*·*·*.    ",
      "    *·::::::::::::::::·  ",
      "   ::: _________  ::::  ",
      "  ' ::|         |::' :  ",
      "   ' ·| ^     ^ |· ' :  ",
      "   ' ·|    v    |· ' :  ",
      "   ' ·|   \\_/   |· ' :  ",
      "  ' ::|_________|::' :  ",
      "   :::::.     .::::::   ",
      "    '':::::::::::''     ",
    ],
    hurt: [
      "     .*·*·*·*·*·*·*.  * ",
      "    *·::::::::::::::::·* ",
      "   ::: _________  ::::  ",
      "  ' ::|         |::' :  ",
      "   ' ·| >     < |· ' :  ",
      "   ' ·|    v    |· ' :  ",
      "   ' ·|   ~~~   |· ' :  ",
      "  ' ::|_________|::' :  ",
      "   :::::.     .::::::   ",
      "    '':::::::::::''     ",
    ],
    danger: [
      "  *  .*·*·*·*·*·*·*. ** ",
      "   **·::::::::::::::::·* ",
      "   ::: _________  ::::  ",
      "  ' ::|         |::' :  ",
      "   ' ·| x     x |· ' :  ",
      "   ' ·|    v    |· ' :  ",
      "   ' ·|   ...   |· ' :  ",
      "  ' ::|_________|::' :  ",
      "   :::::.     .::::::   ",
      "    '':::::::::::''     ",
    ],
    petri: [
      "    ░.*·*·*·*·*·*·*.░   ",
      "   ░*·::::::::::::::::·░ ",
      "  ░::: _________  ::::░ ",
      " ░' ::|░░░░░░░░░|::' :░ ",
      "  ░' ·|░°░░░░░°░|· ' :░ ",
      "  ░' ·|░░░v░░░░░|· ' :░ ",
      "  ░' ·|░░░___░░░|· ' :░ ",
      " ░' ::|_________|::' :░ ",
      "  ░:::::.     .::::::░  ",
      "   ░'':::::::::::''░    ",
    ],
    combat: [
      "     .*·*·*·*·*·*·*.    ",
      "    *·::::::::::::::::·  ",
      "   ::: _________  ::::  ",
      "  ' ::|         |::' :  ",
      "   ' ·| °     ` |· ' :  ",
      "   ' ·|    v    |· ' :  ",
      "   ' ·|   ===   |· ' :  ",
      "  ' ::|_________|::' :  ",
      "   :::::.     .::::::   ",
      "    '':::::::::::''     ",
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

// ── Idle animation (blink + hood sway) ──
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
    if (r < 0.55) _doBlink();
    else _doHoodSway();
  }, 1800 + Math.random() * 2500);
}

function _doBlink() {
  if (!_getSpan()) return _nextIdle();
  var orig = _idleArt;
  // Close eyes
  var blinked = orig
    .replace(/° /g, '- ').replace(/ °/g, ' -')
    .replace(/\^ /g, '- ').replace(/ \^/g, ' -')
    .replace(/> /g, '- ').replace(/ </g, ' -')
    .replace(/x /g, '- ').replace(/ x/g, ' -')
    .replace(/` /g, '- ');
  if (blinked === orig) return _nextIdle();
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
      }, 160);
    } else _nextIdle();
  }, 120);
}

// Hood fabric sway animation
function _doHoodSway() {
  if (!_getSpan()) return _nextIdle();
  var orig = _idleArt;
  var lines = orig.split('\n');
  // Shift hood chars (:::: to :::. and back)
  var frame1 = lines.map(function(line, i) {
    if (i >= 0 && i <= 2) {
      return line.replace(/::::/g, ':::.').replace(/,,,,/g, ',,,.');
    }
    return line;
  }).join('\n');

  _setText(frame1);
  _idleR = setTimeout(function() {
    _setText(orig);
    _nextIdle();
  }, 300);
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
