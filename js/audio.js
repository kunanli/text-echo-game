// ══ Procedural Ambient Audio Engine ══
// Generates cave ambience using Web Audio API — no external files needed.
// Layer: low cave drone (filtered brown noise).

var ambientAudio = (function() {
  var ctx = null;
  var masterGain = null;
  var running = false;
  var volume = 0.35;  // default volume
  var isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent) ||
                 window.innerWidth <= 760;

  function init() {
    if (ctx) return;
    var AC = window.AudioContext || window.webkitAudioContext;
    if (!AC) return;
    ctx = new AC();
    masterGain = ctx.createGain();
    masterGain.gain.value = 0;
    masterGain.connect(ctx.destination);
  }

  // Ensure AudioContext is running — call inside every user gesture that
  // triggers audio.  Returns a Promise so callers can chain off it.
  function ensureResumed() {
    if (!ctx) return Promise.resolve();
    if (ctx.state === 'running') return Promise.resolve();
    return ctx.resume().catch(function() {});
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

    // Low-pass filter for rumble.
    // Mobile/phone speakers cannot reproduce very low frequencies — their
    // effective range starts around 300-500 Hz.  Use a much higher cutoff
    // on mobile so the sound is actually audible through tiny speakers.
    var lp = ctx.createBiquadFilter();
    lp.type = 'lowpass';
    lp.frequency.value = isMobile ? 400 : 80;
    lp.Q.value = isMobile ? 0.7 : 1.0;

    droneGain = ctx.createGain();
    droneGain.gain.value = isMobile ? 1.0 : 0.6;

    droneNode.connect(lp);
    lp.connect(droneGain);
    droneGain.connect(masterGain);
    droneNode.start();
  }


  // ── Public API ──
  function beginPlayback() {
    if (running) return;  // guard against double-start
    running = true;

    // Fade in master volume.
    // Use setTargetAtTime as fallback-safe alternative to linearRamp,
    // which has known issues on some iOS Safari versions.
    var now = ctx.currentTime;
    masterGain.gain.cancelScheduledValues(now);
    masterGain.gain.setValueAtTime(0, now);
    if (isMobile) {
      // setTargetAtTime is more reliable on iOS
      masterGain.gain.setTargetAtTime(volume, now, 0.6);
    } else {
      masterGain.gain.linearRampToValueAtTime(volume, now + 2);
    }

    startDrone();
  }

  function start() {
    if (running) return;
    init();
    if (!ctx) return;

    // Always attempt resume — on iOS the context can slip back to
    // "suspended" between user gestures, and we must resume inside
    // the current gesture to satisfy autoplay policy.
    ensureResumed().then(function() {
      beginPlayback();
    });
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
    ensureResumed();
    // iOS Safari workaround: play a silent buffer to fully unlock the audio
    // output path.  Without this, iOS may keep audio muted even after
    // resume() resolves, because the OS requires actual audio output within
    // a user gesture to "unlock" the hardware audio session.
    if (ctx) {
      try {
        var silentBuf = ctx.createBuffer(1, 1, ctx.sampleRate);
        var src = ctx.createBufferSource();
        src.buffer = silentBuf;
        src.connect(ctx.destination);
        src.start();
      } catch (e) {}
    }
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
