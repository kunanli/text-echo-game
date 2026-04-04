// ══ Procedural Sound Effects (Web Audio API) ══
// Short one-shot sounds generated purely in code — no audio files needed.
// Shares AudioContext with ambientAudio when available.

var sfx = (function() {
  var ctx = null;
  var enabled = true;
  var volume = 0.4;

  function getCtx() {
    if (ctx) return ctx;
    var AC = window.AudioContext || window.webkitAudioContext;
    if (!AC) return null;
    ctx = new AC();
    return ctx;
  }

  function ensureCtx() {
    var c = getCtx();
    if (c && c.state === 'suspended') c.resume().catch(function() {});
    return c;
  }

  // ── Helpers ──
  function makeGain(c, vol, t) {
    var g = c.createGain();
    g.gain.setValueAtTime(vol * volume, t);
    g.connect(c.destination);
    return g;
  }

  // ── Choice click: soft tick ──
  function click() {
    if (!enabled) return;
    var c = ensureCtx(); if (!c) return;
    var t = c.currentTime;
    var osc = c.createOscillator();
    var g = makeGain(c, 0.25, t);
    osc.type = 'sine';
    osc.frequency.setValueAtTime(800, t);
    osc.frequency.exponentialRampToValueAtTime(400, t + 0.06);
    g.gain.exponentialRampToValueAtTime(0.001, t + 0.08);
    osc.connect(g);
    osc.start(t);
    osc.stop(t + 0.08);
  }

  // ── Combat hit: short noise burst ──
  function hit() {
    if (!enabled) return;
    var c = ensureCtx(); if (!c) return;
    var t = c.currentTime;
    var bufSize = Math.floor(c.sampleRate * 0.1);
    var buf = c.createBuffer(1, bufSize, c.sampleRate);
    var data = buf.getChannelData(0);
    for (var i = 0; i < bufSize; i++) {
      data[i] = (Math.random() * 2 - 1) * (1 - i / bufSize);
    }
    var src = c.createBufferSource();
    src.buffer = buf;
    var lp = c.createBiquadFilter();
    lp.type = 'lowpass';
    lp.frequency.setValueAtTime(2000, t);
    lp.frequency.exponentialRampToValueAtTime(200, t + 0.1);
    var g = makeGain(c, 0.35, t);
    g.gain.exponentialRampToValueAtTime(0.001, t + 0.12);
    src.connect(lp);
    lp.connect(g);
    src.start(t);
    src.stop(t + 0.12);
  }

  // ── Enemy hit (player takes damage): deeper thud ──
  function hurt() {
    if (!enabled) return;
    var c = ensureCtx(); if (!c) return;
    var t = c.currentTime;
    var osc = c.createOscillator();
    var g = makeGain(c, 0.3, t);
    osc.type = 'sine';
    osc.frequency.setValueAtTime(120, t);
    osc.frequency.exponentialRampToValueAtTime(40, t + 0.15);
    g.gain.exponentialRampToValueAtTime(0.001, t + 0.2);
    osc.connect(g);
    osc.start(t);
    osc.stop(t + 0.2);
  }

  // ── Petrification increase: crystalline shimmer ──
  function petri() {
    if (!enabled) return;
    var c = ensureCtx(); if (!c) return;
    var t = c.currentTime;
    // Two detuned high sines for shimmery feel
    for (var i = 0; i < 2; i++) {
      var osc = c.createOscillator();
      var g = makeGain(c, 0.15, t);
      osc.type = 'sine';
      var freq = 1200 + i * 180;
      osc.frequency.setValueAtTime(freq, t);
      osc.frequency.exponentialRampToValueAtTime(freq * 0.6, t + 0.25);
      g.gain.setValueAtTime(0, t);
      g.gain.linearRampToValueAtTime(0.15 * volume, t + 0.03);
      g.gain.exponentialRampToValueAtTime(0.001, t + 0.3);
      osc.connect(g);
      osc.start(t);
      osc.stop(t + 0.3);
    }
  }

  // ── Level up: ascending triad ──
  function levelUp() {
    if (!enabled) return;
    var c = ensureCtx(); if (!c) return;
    var t = c.currentTime;
    var notes = [523, 659, 784]; // C5, E5, G5
    for (var i = 0; i < notes.length; i++) {
      var osc = c.createOscillator();
      var g = makeGain(c, 0.2, t);
      osc.type = 'triangle';
      var start = t + i * 0.12;
      osc.frequency.setValueAtTime(notes[i], start);
      g.gain.setValueAtTime(0, t);
      g.gain.linearRampToValueAtTime(0.2 * volume, start);
      g.gain.setValueAtTime(0.2 * volume, start + 0.15);
      g.gain.exponentialRampToValueAtTime(0.001, start + 0.4);
      osc.connect(g);
      osc.start(start);
      osc.stop(start + 0.4);
    }
  }

  // ── Death: low descending tone ──
  function death() {
    if (!enabled) return;
    var c = ensureCtx(); if (!c) return;
    var t = c.currentTime;
    var osc = c.createOscillator();
    var g = makeGain(c, 0.3, t);
    osc.type = 'sawtooth';
    osc.frequency.setValueAtTime(200, t);
    osc.frequency.exponentialRampToValueAtTime(40, t + 0.8);
    var lp = c.createBiquadFilter();
    lp.type = 'lowpass';
    lp.frequency.setValueAtTime(800, t);
    lp.frequency.exponentialRampToValueAtTime(100, t + 0.8);
    g.gain.exponentialRampToValueAtTime(0.001, t + 1.0);
    osc.connect(lp);
    lp.connect(g);
    osc.start(t);
    osc.stop(t + 1.0);
  }

  // ── Item acquire: bright chime ──
  function item() {
    if (!enabled) return;
    var c = ensureCtx(); if (!c) return;
    var t = c.currentTime;
    var osc = c.createOscillator();
    var g = makeGain(c, 0.2, t);
    osc.type = 'sine';
    osc.frequency.setValueAtTime(880, t);
    osc.frequency.setValueAtTime(1175, t + 0.08);
    g.gain.exponentialRampToValueAtTime(0.001, t + 0.3);
    osc.connect(g);
    osc.start(t);
    osc.stop(t + 0.3);
  }

  // ── Stat check pass: quick positive blip ──
  function pass() {
    if (!enabled) return;
    var c = ensureCtx(); if (!c) return;
    var t = c.currentTime;
    var osc = c.createOscillator();
    var g = makeGain(c, 0.18, t);
    osc.type = 'sine';
    osc.frequency.setValueAtTime(600, t);
    osc.frequency.setValueAtTime(900, t + 0.06);
    g.gain.exponentialRampToValueAtTime(0.001, t + 0.15);
    osc.connect(g);
    osc.start(t);
    osc.stop(t + 0.15);
  }

  // ── Stat check fail: descending blip ──
  function fail() {
    if (!enabled) return;
    var c = ensureCtx(); if (!c) return;
    var t = c.currentTime;
    var osc = c.createOscillator();
    var g = makeGain(c, 0.18, t);
    osc.type = 'sine';
    osc.frequency.setValueAtTime(500, t);
    osc.frequency.exponentialRampToValueAtTime(250, t + 0.15);
    g.gain.exponentialRampToValueAtTime(0.001, t + 0.2);
    osc.connect(g);
    osc.start(t);
    osc.stop(t + 0.2);
  }

  return {
    click: click,
    hit: hit,
    hurt: hurt,
    petri: petri,
    levelUp: levelUp,
    death: death,
    item: item,
    pass: pass,
    fail: fail,
    setEnabled: function(v) { enabled = !!v; },
    isEnabled: function() { return enabled; },
    setVolume: function(v) { volume = Math.max(0, Math.min(1, v)); }
  };
})();
