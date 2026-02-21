// ══ Procedural Ambient Audio Engine ══
// Generates cave ambience using Web Audio API — no external files needed.
// Layers: low drone, cave drafts, resonant hum.

var ambientAudio = (function() {
  var ctx = null;
  var masterGain = null;
  var running = false;
  var gustTimer = null;
  var toneTimer = null;
  var volume = 0.35;  // default volume

  function init() {
    if (ctx) return;
    var AC = window.AudioContext || window.webkitAudioContext;
    if (!AC) return;
    ctx = new AC();
    masterGain = ctx.createGain();
    masterGain.gain.value = 0;
    masterGain.connect(ctx.destination);
  }

  // ── Layer 1: Low cave drone (filtered noise) ──
  var droneNode = null;
  var droneGain = null;

  function startDrone() {
    // Create brown-ish noise via filtered white noise
    var bufSize = ctx.sampleRate * 2;
    var buf = ctx.createBuffer(1, bufSize, ctx.sampleRate);
    var data = buf.getChannelData(0);
    var last = 0;
    for (var i = 0; i < bufSize; i++) {
      var white = Math.random() * 2 - 1;
      // Brown noise: integrate white noise
      last = (last + (0.02 * white)) / 1.02;
      data[i] = last * 3.5;
    }
    droneNode = ctx.createBufferSource();
    droneNode.buffer = buf;
    droneNode.loop = true;

    // Low-pass filter for deep rumble
    var lp = ctx.createBiquadFilter();
    lp.type = 'lowpass';
    lp.frequency.value = 80;
    lp.Q.value = 1.0;

    droneGain = ctx.createGain();
    droneGain.gain.value = 0.6;

    droneNode.connect(lp);
    lp.connect(droneGain);
    droneGain.connect(masterGain);
    droneNode.start();
  }

  // ── Layer 2: Cave draft (short low-frequency air bursts) ──
  function playGust() {
    if (!running || !ctx) return;
    var now = ctx.currentTime;
    // Short burst: 0.4–1.2s (tunnel draft, not ocean wave)
    var dur = 0.4 + Math.random() * 0.8;

    var bufSize = Math.ceil(ctx.sampleRate * (dur + 0.2));
    var buf = ctx.createBuffer(1, bufSize, ctx.sampleRate);
    var data = buf.getChannelData(0);
    // Brown noise for deeper texture
    var last = 0;
    for (var i = 0; i < bufSize; i++) {
      var white = Math.random() * 2 - 1;
      last = (last + (0.04 * white)) / 1.04;
      data[i] = last * 3.0;
    }
    var src = ctx.createBufferSource();
    src.buffer = buf;

    // Low bandpass: 60–150 Hz, narrow band — rumble through rock
    var bp = ctx.createBiquadFilter();
    bp.type = 'bandpass';
    bp.frequency.value = 60 + Math.random() * 90;
    bp.Q.value = 2.0;

    var g = ctx.createGain();
    // Quick attack, quick decay — sudden draft feeling
    g.gain.setValueAtTime(0, now);
    g.gain.linearRampToValueAtTime(0.05 + Math.random() * 0.03, now + dur * 0.15);
    g.gain.linearRampToValueAtTime(0, now + dur);

    src.connect(bp);
    bp.connect(g);
    g.connect(masterGain);
    src.start(now);
    src.stop(now + dur + 0.1);

    scheduleGust();
  }

  function scheduleGust() {
    var delay = 10000 + Math.random() * 20000; // 10-30 seconds between drafts
    gustTimer = setTimeout(playGust, delay);
  }

  // ── Layer 4: Resonant cave tones (eerie harmonics) ──
  function playTone() {
    if (!running || !ctx) return;
    var now = ctx.currentTime;
    var dur = 2 + Math.random() * 3;

    // Pick from a pentatonic-ish set for an eerie feel
    var notes = [55, 65.4, 73.4, 82.4, 98, 110, 130.8];
    var freq = notes[Math.floor(Math.random() * notes.length)];

    var osc = ctx.createOscillator();
    osc.type = 'triangle';
    osc.frequency.value = freq;

    var g = ctx.createGain();
    g.gain.setValueAtTime(0, now);
    g.gain.linearRampToValueAtTime(0.04 + Math.random() * 0.03, now + dur * 0.3);
    g.gain.linearRampToValueAtTime(0, now + dur);

    // Subtle reverb-like effect via delay
    var delay = ctx.createDelay();
    delay.delayTime.value = 0.15 + Math.random() * 0.2;
    var feedback = ctx.createGain();
    feedback.gain.value = 0.3;

    osc.connect(g);
    g.connect(masterGain);
    g.connect(delay);
    delay.connect(feedback);
    feedback.connect(delay);
    feedback.connect(masterGain);

    osc.start(now);
    osc.stop(now + dur + 1);

    scheduleTone();
  }

  function scheduleTone() {
    var delay = 12000 + Math.random() * 20000; // 12-32 seconds between tones
    toneTimer = setTimeout(playTone, delay);
  }

  // ── Public API ──
  function beginPlayback() {
    if (running) return;  // guard against double-start
    running = true;

    // Fade in master volume
    masterGain.gain.setValueAtTime(0, ctx.currentTime);
    masterGain.gain.linearRampToValueAtTime(volume, ctx.currentTime + 2);

    startDrone();
    scheduleGust();
    scheduleTone();
  }

  function start() {
    if (running) return;
    init();
    if (!ctx) return;

    // Mobile browsers require AudioContext.resume() inside a user gesture.
    // resume() returns a Promise — we must wait for it before creating nodes,
    // otherwise nodes are silently dropped on iOS Safari / Android Chrome.
    if (ctx.state === 'suspended') {
      ctx.resume().then(function() {
        beginPlayback();
      });
    } else {
      beginPlayback();
    }
  }

  function stop() {
    if (!running) return;
    running = false;
    if (gustTimer) { clearTimeout(gustTimer); gustTimer = null; }
    if (toneTimer) { clearTimeout(toneTimer); toneTimer = null; }

    if (masterGain && ctx) {
      masterGain.gain.linearRampToValueAtTime(0, ctx.currentTime + 1);
    }
    if (droneNode) {
      try { droneNode.stop(ctx.currentTime + 1.2); } catch(e) {}
      droneNode = null;
    }
  }

  // Pre-create AudioContext on the very first user touch/click.
  // Mobile browsers only allow AudioContext creation inside gesture handlers,
  // so calling this early makes subsequent start() calls reliable.
  function warmup() {
    init();
    if (ctx && ctx.state === 'suspended') ctx.resume();
  }

  function setVolume(v) {
    volume = Math.max(0, Math.min(1, v));
    if (masterGain && ctx && running) {
      masterGain.gain.linearRampToValueAtTime(volume, ctx.currentTime + 0.3);
    }
  }

  function getVolume() { return volume; }
  function isRunning() { return running; }

  return {
    start: start,
    stop: stop,
    warmup: warmup,
    setVolume: setVolume,
    getVolume: getVolume,
    isRunning: isRunning
  };
})();
