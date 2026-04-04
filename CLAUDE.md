# 石化深淵 PETRIABYSS — 開發指引

## 專案概述

瀏覽器端文字冒險 RPG，純前端（vanilla JS + HTML + CSS），無後端、無框架依賴。
玩家在地下深淵中探索，管理 HP 與石化度，做出分歧選擇，橫跨 4 大區域。

## 技術架構

- **語言**：vanilla JavaScript (ES5 compatible)，無打包工具
- **載入順序**：`index.html` 底部按順序載入 `<script>`，全域變數互相引用
- **狀態管理**：`js/state.js` 中的 `state` 物件為唯一遊戲狀態
- **i18n**：雙語（繁體中文 zh-TW / English），在 `state.lang` 切換
- **存檔**：localStorage 自動存 + Base64 存檔碼手動分享

## 檔案結構

```
index.html          # 單頁應用入口
css/style.css       # 所有樣式（暗黑奇幻主題）
js/
  audio.js          # 程序化環境音（Web Audio API，4 區域音景 + 戰鬥層）
  sfx.js            # 程序化音效（點擊/命中/受傷/石化/升級/死亡/物品/判定）
  voice.js          # 語音旁白引擎（目前已停用，待換更好的 TTS）
  state.js          # 遊戲狀態 + i18n 翻譯
  utils.js          # 工具函式
  avatar.js         # ASCII 角色肖像（6 種情緒）
  ui.js             # UI 渲染 + 鍵盤輸入
  explore.js        # 自動探索日誌引擎（idle RPG 風格）
  combat.js         # 回合制戰鬥（攻擊/觀察/交流/逃跑），支援武器加成
  dice.js           # 吹牛骰小遊戲（灰鶴賭博，含作弊機制）
  save.js           # 存讀檔 + 分享碼 + 3 個手動存檔槽
  nodes.js          # 節點系統 + 死亡/復活
  patrol.js         # 隨機巡邏遭遇
  title.js          # 標題畫面 + 角色創建（最後載入，綁定事件）
  story/
    region0.js      # 祭獻坑（教學區）
    region1.js      # 石脈迴廊
    region2.js      # 大採石場
    region3.js      # 河城渡口（含 4 結局）
assets/
  banner.svg        # itch.io 用橫幅
  cover.svg         # 封面圖
```

## 開發慣例

- **全域變數**：各模組透過 IIFE 或直接 `var` 暴露全域 API（如 `ambientAudio`, `voiceNarrator`, `state`）
- **劇情節點**：每個 region 檔案 export 一個 `regionN` 物件，key 為節點 ID，value 為函式
- **探索步驟**：用 `{ tag, tagColor, text, textEn, delay }` 格式描述每一步
- **選項按鈕**：用 `{ text, textEn, action }` 格式
- **HTML 內容**：部分步驟用 `html`/`htmlEn` 取代 `text`/`textEn`，支援粗體等標記
- **CSS 命名**：用 `.tag-xxx` 管理標籤顏色（tag-combat, tag-info, tag-sense 等）

## 目前狀態

- 4 個區域全部完成，含 4 種結局
- 吹牛骰小遊戲（R2/R3 灰鶴），含金幣系統、作弊（AGI/WIL 判定）、武器獎勵
- 語音旁白功能已停用（Web Speech API 品質不足），UI 按鈕已隱藏
- 環境音：4 區域獨立音景 + 戰鬥/巡邏高強度層，自動切換
- 程序化音效（sfx.js）：9 種事件音效
- 存檔系統：auto-save + 3 個手動槽位 + Base64 存檔碼
- 已準備 itch.io 發布（DEV 工具已隱藏）

## 待辦 / 已知問題

- [ ] 語音旁白：尋找更好的 TTS 方案（Fish Audio / ElevenLabs / Kokoro）替換 Web Speech API
- [ ] `voice.js` 保留完整 API 介面（speak/cancel/toggle 等），目前為 no-op，方便未來接入新 TTS

## 未來開發方向

### 體驗提升（投入產出比高）

- [x] **音效反饋** — `sfx.js` 程序化生成（click/hit/hurt/petri/levelUp/death/item/pass/fail）
- [x] **打字機效果** — `explore.js` 已內建逐字渲染
- [x] **存檔槽位** — 3 個手動槽位（存檔/讀取/刪除），存檔碼收進可展開區塊

### 內容擴展

- [ ] **隨機事件池擴充** — 各區域巡邏遭遇和環境描述加更多變體，提高重玩新鮮感
- [ ] **成就系統** — 追蹤隱藏行為（全程零戰鬥通關、石化度壓在 10% 以下、所有 NPC 都交流過），結局畫面顯示
- [ ] **New Game+** — 通關後帶部分屬性/物品重玩，解鎖新對話選項或隱藏路線

### 技術改善

- [ ] **離線支援 (PWA)** — 加 Service Worker + manifest.json，可「安裝」到手機桌面離線遊玩
- [ ] **無障礙** — 選項按鈕加 `aria-label`，鍵盤導航優化，高對比模式
- [ ] **ES Module 重構** — 遷移全域變數到 ES modules，搭配簡單 bundler，改善可維護性

### 傳播 / 社群

- [ ] **分享結局卡** — 通關時用 canvas 生成圖片（角色名、結局類型、關鍵數據），方便截圖分享
- [ ] **數據統計頁** — 用 localStorage 記錄全域統計（死亡次數、最常選的路線、平均石化度），結局後展示
- [ ] **多語言擴展** — 架構已支援 i18n，可加日文或其他社群翻譯

## 開發注意事項

- 修改 JS 時注意 `index.html` 中的載入順序，`title.js` 必須最後載入
- 測試時注意 iOS Safari 的音頻限制（AudioContext 需要用戶手勢啟動）
- 存檔碼向後相容很重要——改 `state` 結構時要考慮舊存檔能否讀取
- 所有 story 內容都有中英雙語，新增劇情時兩個語言都要寫
