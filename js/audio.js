// ══ Procedural Ambient Audio Engine ══
// Generates cave ambience using Web Audio API — no external files needed.
// Layer: low cave drone (filtered brown noise).

var ambientAudio = (function() {
  var ctx = null;
  var masterGain = null;
  var running = false;
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


  // ── Public API ──
  function beginPlayback() {
    if (running) return;  // guard against double-start
    running = true;

    // Fade in master volume
    masterGain.gain.setValueAtTime(0, ctx.currentTime);
    masterGain.gain.linearRampToValueAtTime(volume, ctx.currentTime + 2);

    startDrone();
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
