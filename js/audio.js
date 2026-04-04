// ══ Procedural Ambient Audio Engine ══
// Generates ambient soundscapes using Web Audio API — no external files needed.
// Supports per-region soundscapes and a combat/patrol intensity layer.

var ambientAudio = (function() {
  var ctx = null;
  var masterGain = null;
  var running = false;
  var volume = 0.18;
  var isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent) ||
                 window.innerWidth <= 760;

  // Current state
  var currentRegion = -1;    // active region soundscape (-1 = none)
  var combatMode = false;    // combat/patrol intensity layer

  // Active audio nodes (for cleanup)
  var activeNodes = [];      // [{node, gain}] — region layers
  var combatNodes = [];      // [{node, gain}] — combat layers

  function init() {
    if (ctx) return;
    var AC = window.AudioContext || window.webkitAudioContext;
    if (!AC) return;
    ctx = new AC();
    masterGain = ctx.createGain();
    masterGain.gain.value = 0;
    masterGain.connect(ctx.destination);
  }

  function ensureResumed() {
    if (!ctx) return Promise.resolve();
    if (ctx.state === 'running') return Promise.resolve();
    return ctx.resume().catch(function() {});
  }

  // ── Noise generators ──

  function makeBrownNoise(duration) {
    var bufSize = Math.floor(ctx.sampleRate * duration);
    var buf = ctx.createBuffer(1, bufSize, ctx.sampleRate);
    var data = buf.getChannelData(0);
    var last = 0;
    for (var i = 0; i < bufSize; i++) {
      var white = Math.random() * 2 - 1;
      last = (last + (0.02 * white)) / 1.02;
      data[i] = last * 3.5;
    }
    return buf;
  }

  function makeWhiteNoise(duration) {
    var bufSize = Math.floor(ctx.sampleRate * duration);
    var buf = ctx.createBuffer(1, bufSize, ctx.sampleRate);
    var data = buf.getChannelData(0);
    for (var i = 0; i < bufSize; i++) {
      data[i] = Math.random() * 2 - 1;
    }
    return buf;
  }

  // Create a looping noise source with filter chain
  function makeFilteredNoise(noiseBuf, filterType, freq, Q, gainVal) {
    var src = ctx.createBufferSource();
    src.buffer = noiseBuf;
    src.loop = true;

    var filter = ctx.createBiquadFilter();
    filter.type = filterType;
    filter.frequency.value = freq;
    filter.Q.value = Q || 1.0;

    var g = ctx.createGain();
    g.gain.value = 0; // start silent, fade in

    src.connect(filter);
    filter.connect(g);
    g.connect(masterGain);
    src.start();

    return { node: src, gain: g, filter: filter };
  }

  // Create a low oscillator drone
  function makeOscDrone(freq, type, gainVal) {
    var osc = ctx.createOscillator();
    osc.type = type || 'sine';
    osc.frequency.value = freq;

    var g = ctx.createGain();
    g.gain.value = 0;

    osc.connect(g);
    g.connect(masterGain);
    osc.start();

    return { node: osc, gain: g };
  }

  // Fade a gain node to target over duration
  function fadeGain(gainNode, target, dur) {
    var t = ctx.currentTime;
    gainNode.cancelScheduledValues(t);
    gainNode.setValueAtTime(gainNode.value, t);
    if (isMobile) {
      gainNode.setTargetAtTime(target, t, dur * 0.33);
    } else {
      gainNode.linearRampToValueAtTime(target, t + dur);
    }
  }

  // Stop and cleanup a list of {node, gain} objects
  function cleanupNodes(list, fadeDur) {
    var dur = fadeDur || 1.0;
    for (var i = 0; i < list.length; i++) {
      var item = list[i];
      fadeGain(item.gain.gain, 0, dur);
      (function(n) {
        setTimeout(function() { try { n.stop(); } catch(e) { console.warn('Audio node stop failed:', e); } }, (dur + 0.5) * 1000);
      })(item.node);
    }
    list.length = 0;
  }

  // ══════════════════════════════════════════
  //  Region Soundscapes
  // ══════════════════════════════════════════

  // Push a region layer and remember its target gain for combat restore
  function pushRegionLayer(layer, targetGain, fadeDur) {
    layer._origGain = targetGain;
    fadeGain(layer.gain.gain, targetGain, fadeDur);
    activeNodes.push(layer);
  }

  // Region 0: 祭獻坑 — Deep cave rumble, dripping water feel
  function buildRegion0() {
    var brown = makeBrownNoise(2);
    var cutoff = isMobile ? 400 : 80;
    var layer = makeFilteredNoise(brown, 'lowpass', cutoff, isMobile ? 0.7 : 1.0, 0.6);
    pushRegionLayer(layer, isMobile ? 1.0 : 0.6, 2);
  }

  // Region 1: 石脈迴廊 — Resonant hum + mid-frequency drone (glowing ore veins)
  function buildRegion1() {
    var brown = makeBrownNoise(2);
    var base = makeFilteredNoise(brown, 'lowpass', isMobile ? 350 : 100, 0.8, 0.4);
    pushRegionLayer(base, isMobile ? 0.7 : 0.4, 2);

    var drone = makeOscDrone(isMobile ? 180 : 55, 'sine');
    pushRegionLayer(drone, 0.12, 2.5);

    var white = makeWhiteNoise(2);
    var shimmer = makeFilteredNoise(white, 'bandpass', isMobile ? 3000 : 2200, 8, 0.05);
    pushRegionLayer(shimmer, 0.04, 3);
  }

  // Region 2: 大採石場 — Open space, wind + distant echoes, mechanical rumble
  function buildRegion2() {
    var brown = makeBrownNoise(2);
    var wind = makeFilteredNoise(brown, 'bandpass', isMobile ? 600 : 250, 0.5, 0.5);
    pushRegionLayer(wind, isMobile ? 0.6 : 0.45, 2);

    var mech = makeOscDrone(isMobile ? 120 : 38, 'sawtooth');
    var mechFilter = ctx.createBiquadFilter();
    mechFilter.type = 'lowpass';
    mechFilter.frequency.value = isMobile ? 250 : 80;
    mech.node.disconnect();
    mech.node.connect(mechFilter);
    mechFilter.connect(mech.gain);
    pushRegionLayer(mech, 0.08, 2);

    var white = makeWhiteNoise(2);
    var echo = makeFilteredNoise(white, 'highpass', 4000, 2, 0.02);
    pushRegionLayer(echo, 0.025, 3);
  }

  // Region 3: 河城渡口 — Water flow + civilization hum + warmth
  function buildRegion3() {
    var brown = makeBrownNoise(2);
    var water = makeFilteredNoise(brown, 'bandpass', isMobile ? 800 : 400, 0.6, 0.5);
    pushRegionLayer(water, isMobile ? 0.55 : 0.4, 2);

    var hum = makeOscDrone(isMobile ? 150 : 65, 'triangle');
    pushRegionLayer(hum, 0.1, 2.5);

    var white = makeWhiteNoise(2);
    var activity = makeFilteredNoise(white, 'bandpass', 1500, 3, 0.03);
    pushRegionLayer(activity, 0.03, 3);
  }

  var regionBuilders = [buildRegion0, buildRegion1, buildRegion2, buildRegion3];

  // ══════════════════════════════════════════
  //  Combat / Patrol Layer
  // ══════════════════════════════════════════

  function buildCombatLayer() {
    // Pulsing low tension drone
    var osc = ctx.createOscillator();
    osc.type = 'sawtooth';
    osc.frequency.value = isMobile ? 100 : 45;

    var lp = ctx.createBiquadFilter();
    lp.type = 'lowpass';
    lp.frequency.value = isMobile ? 300 : 120;

    // LFO for pulse effect
    var lfo = ctx.createOscillator();
    lfo.type = 'sine';
    lfo.frequency.value = 1.8; // heartbeat-ish

    var lfoGain = ctx.createGain();
    lfoGain.gain.value = isMobile ? 0.12 : 0.08;

    var g = ctx.createGain();
    g.gain.value = 0;

    lfo.connect(lfoGain);
    lfoGain.connect(g.gain); // modulate volume
    osc.connect(lp);
    lp.connect(g);
    g.connect(masterGain);
    osc.start();
    lfo.start();

    fadeGain(g.gain, isMobile ? 0.22 : 0.15, 0.8);
    combatNodes.push({ node: osc, gain: g });
    combatNodes.push({ node: lfo, gain: lfoGain }); // track for cleanup

    // High-frequency tension — sharp filtered noise
    var white = makeWhiteNoise(2);
    var tension = makeFilteredNoise(white, 'bandpass', isMobile ? 2500 : 1800, 6, 0.04);
    fadeGain(tension.gain.gain, 0.05, 1.0);
    combatNodes.push(tension);
  }

  // ══════════════════════════════════════════
  //  Public API
  // ══════════════════════════════════════════

  function beginPlayback() {
    if (running) return;
    running = true;

    var now = ctx.currentTime;
    masterGain.gain.cancelScheduledValues(now);
    masterGain.gain.setValueAtTime(0, now);
    if (isMobile) {
      masterGain.gain.setTargetAtTime(volume, now, 0.6);
    } else {
      masterGain.gain.linearRampToValueAtTime(volume, now + 2);
    }

    // Build initial region soundscape
    var region = (typeof state !== 'undefined') ? (state.region || 0) : 0;
    setRegion(region);
  }

  function start() {
    if (running) return;
    init();
    if (!ctx) return;
    ensureResumed().then(function() {
      beginPlayback();
    });
  }

  function stop() {
    if (!running) return;
    running = false;
    cleanupNodes(activeNodes, 1.0);
    cleanupNodes(combatNodes, 0.6);
    currentRegion = -1;
    combatMode = false;
    if (masterGain && ctx) {
      masterGain.gain.linearRampToValueAtTime(0, ctx.currentTime + 1);
    }
  }

  // Switch region soundscape (crossfade)
  function setRegion(region) {
    if (!ctx || !running) { currentRegion = region; return; }
    if (region === currentRegion) return;
    currentRegion = region;

    // Fade out old layers
    cleanupNodes(activeNodes, 1.5);

    // Build new region
    var builder = regionBuilders[region] || regionBuilders[0];
    builder();
  }

  // Toggle combat/patrol intensity layer
  // Fades region ambient down so combat and ambient don't overlap
  function setCombat(on) {
    if (!ctx || !running) { combatMode = on; return; }
    if (on === combatMode) return;
    combatMode = on;

    if (on) {
      // Fade region layers to near-silence
      for (var i = 0; i < activeNodes.length; i++) {
        fadeGain(activeNodes[i].gain.gain, 0.03, 1.0);
      }
      buildCombatLayer();
    } else {
      cleanupNodes(combatNodes, 0.8);
      // Restore region layers
      for (var i = 0; i < activeNodes.length; i++) {
        fadeGain(activeNodes[i].gain.gain, activeNodes[i]._origGain || 0.4, 1.2);
      }
    }
  }

  function warmup() {
    init();
    ensureResumed();
    if (ctx) {
      try {
        var silentBuf = ctx.createBuffer(1, 1, ctx.sampleRate);
        var src = ctx.createBufferSource();
        src.buffer = silentBuf;
        src.connect(ctx.destination);
        src.start();
      } catch (e) { console.warn('Audio warmup failed:', e); }
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
    isRunning: isRunning,
    setRegion: setRegion,
    setCombat: setCombat
  };
})();
