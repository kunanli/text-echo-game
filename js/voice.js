// ══ Voice Narration Engine (Web Speech API TTS) ══
// Reads story text aloud using the browser's built-in speech synthesis.
// Supports Chinese (zh-TW / zh-CN) and English voices based on game language.

var voiceNarrator = (function() {
  var enabled = false;
  var synth = window.speechSynthesis || null;
  // Storytelling pace — slower and deeper for an adventure narrator feel
  var rate = 0.82;
  var pitch = 0.92;
  var volume = 1.0;
  var cachedVoices = [];
  var queueDepth = 0;       // track how many utterances are pending
  var MAX_QUEUE = 4;        // max queued utterances before we start cancelling old ones

  // ── Voice selection ──
  function loadVoices() {
    if (!synth) return;
    cachedVoices = synth.getVoices();
  }

  // Some browsers fire onvoiceschanged async
  if (synth && synth.onvoiceschanged !== undefined) {
    synth.onvoiceschanged = loadVoices;
  }

  // Preferred high-quality voices (in priority order).
  // iOS/macOS have premium voices; Android & desktop Chrome use different names.
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

    if (lang === 'zh') {
      // Try preferred voices first
      for (var p = 0; p < PREFERRED_ZH.length; p++) {
        for (var v = 0; v < voices.length; v++) {
          if (PREFERRED_ZH[p].test(voices[v].name) && /zh/i.test(voices[v].lang)) {
            return voices[v];
          }
        }
      }
      // Fallback: zh-TW → zh-CN → any zh
      var zhTW = voices.filter(function(v) { return /zh[-_]TW/i.test(v.lang); });
      if (zhTW.length) return zhTW[0];
      var zhCN = voices.filter(function(v) { return /zh[-_]CN/i.test(v.lang); });
      if (zhCN.length) return zhCN[0];
      var zhAny = voices.filter(function(v) { return /zh/i.test(v.lang); });
      if (zhAny.length) return zhAny[0];
    } else {
      // Try preferred voices first
      for (var p = 0; p < PREFERRED_EN.length; p++) {
        for (var v = 0; v < voices.length; v++) {
          if (PREFERRED_EN[p].test(voices[v].name) && /en/i.test(voices[v].lang)) {
            return voices[v];
          }
        }
      }
      // Fallback: en-US → en-GB → any en
      var enUS = voices.filter(function(v) { return /en[-_]US/i.test(v.lang); });
      if (enUS.length) return enUS[0];
      var enGB = voices.filter(function(v) { return /en[-_]GB/i.test(v.lang); });
      if (enGB.length) return enGB[0];
      var enAny = voices.filter(function(v) { return /en/i.test(v.lang); });
      if (enAny.length) return enAny[0];
    }
    return null; // fallback: browser default
  }

  // ── Strip tags and clean text for speech ──
  function cleanText(text) {
    if (!text) return '';
    // Remove HTML tags
    var clean = text.replace(/<[^>]*>/g, '');
    // Remove ASCII art characters that shouldn't be spoken
    clean = clean.replace(/[═╔╗╚╝║░▒▓█─│┌┐└┘├┤┬┴┼◆·✦˚\[\]]/g, '');
    // Collapse whitespace
    clean = clean.replace(/\s+/g, ' ').trim();
    return clean;
  }

  // ── Create a configured utterance ──
  function makeUtterance(text, lang) {
    var utter = new SpeechSynthesisUtterance(text);
    var voice = pickVoice(lang || 'zh');
    if (voice) utter.voice = voice;
    utter.lang = lang === 'en' ? 'en-US' : 'zh-TW';
    utter.rate = rate;
    utter.pitch = pitch;
    utter.volume = volume;
    utter.onend = function() { queueDepth = Math.max(0, queueDepth - 1); };
    utter.onerror = function() { queueDepth = Math.max(0, queueDepth - 1); };
    return utter;
  }

  // ── Speak text ──
  // Does NOT cancel ongoing speech by default — new text is queued so the
  // narrator finishes the current sentence before moving on.  This prevents
  // the "skipping" feel when the user taps to advance text.
  function speak(text, lang) {
    if (!enabled || !synth) return;
    var clean = cleanText(text);
    if (!clean || clean.length < 2) return; // skip very short / empty

    // If the queue is getting too long (user skipping fast), flush old speech
    if (queueDepth >= MAX_QUEUE) {
      synth.cancel();
      queueDepth = 0;
    }

    // Chrome bug: long utterances pause after ~15s. Work around by chunking.
    if (clean.length > 200) {
      speakChunked(clean, lang);
      return;
    }

    queueDepth++;
    synth.speak(makeUtterance(clean, lang));
  }

  // Chrome workaround: split long text into sentences and queue them
  function speakChunked(text, lang) {
    // Split on sentence-ending punctuation (Chinese & English)
    var sentences = text.split(/(?<=[。！？\.!?；;])\s*/);

    sentences.forEach(function(s) {
      s = s.trim();
      if (!s || s.length < 2) return;
      queueDepth++;
      synth.speak(makeUtterance(s, lang));
    });
  }

  // ── Cancel ongoing speech ──
  function cancel() {
    if (synth) synth.cancel();
    queueDepth = 0;
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

  // ── Check if TTS is supported ──
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
