/* ══════════════════════════════════════════════
 *  portrait.js — NPC Pixel Portrait System
 *  方案 B：NPC 用像素圖，場景/怪物保留 ASCII art
 * ══════════════════════════════════════════════ */

var npcPortrait = (function() {
  'use strict';

  // ── NPC portrait registry ──
  // 每位 NPC 對應一張半身像素圖（黑白動漫風）
  // 圖片放在 assets/npc/ 目錄下，256×256 px PNG
  var PORTRAITS = {
    // 主角（依性別）
    player_male:   { file: 'player_male.png',   zh: '主角',       en: 'Player',      color: ''       },
    player_female: { file: 'player_female.png', zh: '主角',       en: 'Player',      color: ''       },
    // NPC
    ying:     { file: 'ying.png',     zh: '螢',       en: 'Ying',        color: 'cyan'   },
    zhou:     { file: 'zhou.png',     zh: '老周',     en: 'Old Zhou',    color: 'gold'   },
    crane:    { file: 'crane.png',    zh: '灰鶴',     en: 'Grey Crane',  color: 'gold'   },
    frost:    { file: 'frost.png',    zh: '鐵霜',     en: 'Iron Frost',  color: ''       },
    cast:     { file: 'cast.png',     zh: '老鑄',     en: 'Old Cast',    color: ''       },
    dew:      { file: 'dew.png',      zh: '清露',     en: 'Dew',         color: 'cyan'   },
    bell:     { file: 'bell.png',     zh: '銅鐘',     en: 'Bronze Bell', color: ''       },
    ferryman: { file: 'ferryman.png', zh: '冥河渡江人', en: 'Ferryman',  color: 'purple' },
  };

  var BASE_PATH = 'assets/npc/';

  // 預載入快取（key = portraitId, value = Image element or null）
  var _cache = {};
  var _failedSet = {};  // 載入失敗的 ID，避免重試

  // ── 預載入單張圖片 ──
  function _preload(id) {
    if (_cache[id] || _failedSet[id]) return;
    var info = PORTRAITS[id];
    if (!info) return;
    var img = new Image();
    img.onload = function() { _cache[id] = img; };
    img.onerror = function() { _failedSet[id] = true; };
    img.src = BASE_PATH + info.file;
  }

  // ── 預載入全部 ──
  function preloadAll() {
    for (var id in PORTRAITS) {
      if (PORTRAITS.hasOwnProperty(id)) _preload(id);
    }
  }

  // ── 檢查圖片是否可用 ──
  function isReady(id) {
    return !!_cache[id];
  }

  // ── 便利：取得當前主角的 portrait ID ──
  function playerId() {
    return 'player_' + (state.sex === 'female' ? 'female' : 'male');
  }

  // ── 生成肖像 HTML（用於 art 欄位） ──
  // 圖片已載入 → 回傳 <img> HTML
  // 圖片未載入或不存在 → 回傳 null（呼叫端用 || 語法 fallback 到 ASCII art）
  function html(id, opts) {
    var info = PORTRAITS[id];
    if (!info) return null;

    // 確保已觸發預載
    _preload(id);

    // 圖片尚未載入完成 → fallback 到 ASCII art
    if (!_cache[id]) return null;

    opts = opts || {};
    var label = (state.lang === 'en') ? info.en : info.zh;
    var subtitle = opts.subtitle || '';  // e.g. '記錄員' / 'Chronicler'
    var colorClass = info.color ? (' pixel-portrait-' + info.color) : '';

    return '<div class="pixel-portrait-wrap' + colorClass + '">' +
      '<div class="pixel-portrait-frame">' +
        '<img src="' + BASE_PATH + info.file + '" class="pixel-portrait" alt="' + label + '">' +
      '</div>' +
      '<div class="pixel-portrait-label">' + label +
        (subtitle ? (' —— ' + subtitle) : '') +
      '</div>' +
    '</div>';
  }

  // ── 主角肖像（自動依性別選擇） ──
  function playerHtml(opts) {
    return html(playerId(), opts);
  }

  // ── 用於 endcard.js canvas 繪製 ──
  // 回傳 Image element（已載入），或 null
  function getImage(id) {
    _preload(id);
    return _cache[id] || null;
  }

  // ── 便利函式：生成 art 欄位，自動 fallback ──
  // 用法：art: npcPortrait.art('ying', { subtitle: '記錄員' }) || `<pre>...</pre>`
  function art(id, opts) {
    return html(id, opts);
  }

  // ── Public API ──
  return {
    PORTRAITS: PORTRAITS,
    preloadAll: preloadAll,
    isReady: isReady,
    playerId: playerId,
    playerHtml: playerHtml,
    html: html,
    art: art,
    getImage: getImage,
  };
})();

// 頁面載入後預載入所有肖像
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', npcPortrait.preloadAll);
} else {
  npcPortrait.preloadAll();
}
