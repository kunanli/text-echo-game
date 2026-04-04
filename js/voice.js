// ══ Voice Narration Engine (Web Speech API TTS) ══
// Reads story text aloud using the browser's built-in speech synthesis.
// Uses a self-managed queue instead of the browser's native queue to avoid
// iOS Safari dropping or overlapping queued utterances.

var voiceNarrator = (function() {
  var enabled = false;
  var synth = window.speechSynthesis || null;
  // Storytelling pace — slower and deeper for an adventure narrator feel
  var rate = 0.82;
  var pitch = 0.9;
  var volume = 1.0;
  var cachedVoices = [];

  // ── Self-managed utterance queue ──
  // iOS Safari's native speechSynthesis queue is unreliable — it silently
  // drops queued utterances or overlaps them.  We manage our own queue and
  // only feed one utterance at a time, advancing on the `onend` callback.
  var queue = [];         // array of { text, lang }
  var speaking = false;   // true while an utterance is active
  var MAX_QUEUE = 6;      // max pending phrases (not lines — lines are split)

  // ── Voice selection ──
  function loadVoices() {
    if (!synth) return;
    cachedVoices = synth.getVoices();
  }

  if (synth && synth.onvoiceschanged !== undefined) {
    synth.onvoiceschanged = loadVoices;
  }

  // Preferred high-quality voices (in priority order).
  var PREFERRED_ZH = [
    /mei-?jia/i,        // iOS zh-TW premium
    /yu-?shu/i,         // iOS zh-TW
    /ting-?ting/i,      // macOS zh-CN premium
    /sin-?ji/i,         // iOS zh-HK
    /li-?mu/i,          // iOS zh-CN
  ];
  var PREFERRED_EN = [
    /samantha/i,        // iOS/macOS premium
    /daniel/i,          // iOS British premium
    /karen/i,           // iOS Australian
    /moira/i,           // iOS Irish
    /google.*us/i,      // Chrome high-quality
  ];

  function pickVoice(lang) {
    if (cachedVoices.length === 0) loadVoices();
    var voices = cachedVoices;
    var preferred = lang === 'zh' ? PREFERRED_ZH : PREFERRED_EN;
    var langRe = lang === 'zh' ? /zh/i : /en/i;

    // Try preferred voices first
    for (var p = 0; p < preferred.length; p++) {
      for (var v = 0; v < voices.length; v++) {
        if (preferred[p].test(voices[v].name) && langRe.test(voices[v].lang)) {
          return voices[v];
        }
      }
    }

    // Fallback chain
    if (lang === 'zh') {
      var zhTW = voices.filter(function(v) { return /zh[-_]TW/i.test(v.lang); });
      if (zhTW.length) return zhTW[0];
      var zhCN = voices.filter(function(v) { return /zh[-_]CN/i.test(v.lang); });
      if (zhCN.length) return zhCN[0];
      var zhAny = voices.filter(function(v) { return /zh/i.test(v.lang); });
      if (zhAny.length) return zhAny[0];
    } else {
      var enUS = voices.filter(function(v) { return /en[-_]US/i.test(v.lang); });
      if (enUS.length) return enUS[0];
      var enGB = voices.filter(function(v) { return /en[-_]GB/i.test(v.lang); });
      if (enGB.length) return enGB[0];
      var enAny = voices.filter(function(v) { return /en/i.test(v.lang); });
      if (enAny.length) return enAny[0];
    }
    return null;
  }

  // ── Strip tags and clean text for speech ──
  function cleanText(text) {
    if (!text) return '';
    var clean = text.replace(/<[^>]*>/g, '');
    clean = clean.replace(/[═╔╗╚╝║░▒▓█─│┌┐└┘├┤┬┴┼◆·✦˚\[\]]/g, '');
    clean = clean.replace(/\s+/g, ' ').trim();
    return clean;
  }

  // ── Split text into natural phrases for more human-like delivery ──
  // Chinese text is split at clause boundaries (，、；：) and sentence
  // boundaries (。！？) so the TTS engine produces natural pauses.
  // Short fragments are merged with the next phrase to avoid choppy output.
  function splitIntoPhrases(text, lang) {
    var parts;
    if (lang === 'zh') {
      // Split at Chinese punctuation — keep the punctuation attached
      parts = text.split(/(?<=[。！？，、；：…～\n\.!?;,])\s*/);
    } else {
      // English: split at sentence boundaries
      parts = text.split(/(?<=[\.!?;])\s+/);
    }

    // Merge very short fragments (< 4 chars) with the next piece so we
    // don't get awkward micro-utterances like "你" or "了。"
    var merged = [];
    var buf = '';
    for (var i = 0; i < parts.length; i++) {
      buf += parts[i];
      if (buf.length >= 4 || i === parts.length - 1) {
        merged.push(buf);
        buf = '';
      }
    }
    if (buf) {
      if (merged.length) merged[merged.length - 1] += buf;
      else merged.push(buf);
    }
    return merged.filter(function(s) { return s.trim().length > 0; });
  }

  // ── Drain the queue: speak one item, wait for onend, then next ──
  function drain() {
    if (speaking || queue.length === 0) return;

    var item = queue.shift();
    speaking = true;

    var utter = new SpeechSynthesisUtterance(item.text);
    var voice = pickVoice(item.lang || 'zh');
    if (voice) utter.voice = voice;
    utter.lang = item.lang === 'en' ? 'en-US' : 'zh-TW';
    utter.rate = rate;
    utter.pitch = pitch;
    utter.volume = volume;

    utter.onend = function() {
      speaking = false;
      // Small pause between phrases for natural rhythm
      if (queue.length > 0) {
        setTimeout(drain, 80);
      }
    };
    utter.onerror = function() {
      speaking = false;
      drain();
    };

    // iOS Safari safety: if synth gets stuck in a "speaking" state without
    // firing onend (known iOS bug), set a watchdog to unstick it.
    var maxDuration = Math.max(item.text.length * 250, 3000);
    var watchdog = setTimeout(function() {
      if (speaking) {
        speaking = false;
        synth.cancel();
        drain();
      }
    }, maxDuration);

    var origOnEnd = utter.onend;
    utter.onend = function() {
      clearTimeout(watchdog);
      origOnEnd();
    };
    var origOnError = utter.onerror;
    utter.onerror = function() {
      clearTimeout(watchdog);
      origOnError();
    };

    synth.speak(utter);
  }

  // ── Public: enqueue text for narration ──
  function speak(text, lang) {
    if (!enabled || !synth) return;
    var clean = cleanText(text);
    if (!clean || clean.length < 2) return;

    // Split into natural phrases
    var phrases = splitIntoPhrases(clean, lang || 'zh');

    // If queue is getting too long (user advancing fast), trim old entries
    // but keep the currently-speaking utterance alive
    if (queue.length + phrases.length > MAX_QUEUE) {
      queue = [];
      // Don't cancel the active utterance — let it finish naturally so
      // the listener doesn't hear an abrupt cut.
    }

    for (var i = 0; i < phrases.length; i++) {
      queue.push({ text: phrases[i], lang: lang || 'zh' });
    }

    drain();
  }

  // ── Cancel everything ──
  function cancel() {
    queue = [];
    speaking = false;
    if (synth) synth.cancel();
  }

  // ── Toggle ──
  function toggle() {
    enabled = !enabled;
    if (!enabled) cancel();
    return enabled;
  }

  function setEnabled(v) {
    enabled = !!v;
    if (!enabled) cancel();
  }

  function isEnabled() { return enabled; }
  function setRate(r) { rate = Math.max(0.5, Math.min(2.0, r)); }
  function getRate() { return rate; }
  function setVolume(v) { volume = Math.max(0, Math.min(1, v)); }
  function getVolume() { return volume; }
  function isSupported() { return !!synth; }

  return {
    speak: speak,
    cancel: cancel,
    toggle: toggle,
    setEnabled: setEnabled,
    isEnabled: isEnabled,
    isSupported: isSupported,
    setRate: setRate,
    getRate: getRate,
    setVolume: setVolume,
    getVolume: getVolume
  };
})();
