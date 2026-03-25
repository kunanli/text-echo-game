// ══ Voice Narration Engine (Web Speech API TTS) ══
// Reads story text aloud using the browser's built-in speech synthesis.
// Supports Chinese (zh-TW / zh-CN) and English voices based on game language.

var voiceNarrator = (function() {
  var enabled = false;
  var synth = window.speechSynthesis || null;
  var rate = 0.95;       // speech rate
  var pitch = 1.0;
  var volume = 0.9;
  var cachedVoices = [];
  var currentUtterance = null;

  // ── Voice selection ──
  function loadVoices() {
    if (!synth) return;
    cachedVoices = synth.getVoices();
  }

  // Some browsers fire onvoiceschanged async
  if (synth && synth.onvoiceschanged !== undefined) {
    synth.onvoiceschanged = loadVoices;
  }

  function pickVoice(lang) {
    if (cachedVoices.length === 0) loadVoices();
    var voices = cachedVoices;

    if (lang === 'zh') {
      // Prefer zh-TW, then zh-CN, then any zh
      var zhTW = voices.filter(function(v) { return /zh[-_]TW/i.test(v.lang); });
      if (zhTW.length) return zhTW[0];
      var zhCN = voices.filter(function(v) { return /zh[-_]CN/i.test(v.lang); });
      if (zhCN.length) return zhCN[0];
      var zhAny = voices.filter(function(v) { return /zh/i.test(v.lang); });
      if (zhAny.length) return zhAny[0];
    } else {
      // English — prefer en-US, then en-GB, then any en
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

  // ── Speak text ──
  function speak(text, lang) {
    if (!enabled || !synth) return;
    var clean = cleanText(text);
    if (!clean || clean.length < 2) return; // skip very short / empty

    // Cancel any ongoing speech first
    cancel();

    var utter = new SpeechSynthesisUtterance(clean);
    var voice = pickVoice(lang || 'zh');
    if (voice) utter.voice = voice;
    utter.lang = lang === 'en' ? 'en-US' : 'zh-TW';
    utter.rate = rate;
    utter.pitch = pitch;
    utter.volume = volume;
    currentUtterance = utter;

    // Chrome bug: long utterances pause after ~15s. Work around by chunking.
    if (clean.length > 200) {
      speakChunked(clean, lang);
      return;
    }

    synth.speak(utter);
  }

  // Chrome workaround: split long text into sentences and queue them
  function speakChunked(text, lang) {
    // Split on sentence-ending punctuation (Chinese & English)
    var sentences = text.split(/(?<=[。！？\.!?；;，,\n])\s*/);
    var voice = pickVoice(lang || 'zh');

    sentences.forEach(function(s) {
      s = s.trim();
      if (!s || s.length < 2) return;
      var utter = new SpeechSynthesisUtterance(s);
      if (voice) utter.voice = voice;
      utter.lang = lang === 'en' ? 'en-US' : 'zh-TW';
      utter.rate = rate;
      utter.pitch = pitch;
      utter.volume = volume;
      synth.speak(utter);
    });
  }

  // ── Cancel ongoing speech ──
  function cancel() {
    if (synth) synth.cancel();
    currentUtterance = null;
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
