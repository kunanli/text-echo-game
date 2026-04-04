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
  stats.js          # 全域統計追蹤（跨遊玩累計數據）
  endcard.js        # 結局卡 canvas 生成（身分牌風格收藏卡，含評分/稀有度/NPC 語錄）
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
- **劇情節點**：每個 region 檔案用 `registerNode(id, fn)` 註冊節點，用 `loadNode(id)` 跳轉
- **探索步驟**：用 `{ tag, tagColor, text, textEn, delay }` 格式描述每一步
- **選項按鈕**：用 `{ text, textEn, action }` 格式
- **HTML 內容**：部分步驟用 `html`/`htmlEn` 取代 `text`/`textEn`，支援粗體等標記
- **CSS 命名**：用 `.tag-xxx` 管理標籤顏色（tag-combat, tag-info, tag-sense, tag-system, tag-warn, tag-petri 等）
- **雙語必備**：所有面向玩家的文字都必須同時提供 `zh` 和 `en` 版本

## 目前狀態

- 4 個區域全部完成，含 4 種結局
- 吹牛骰小遊戲（R2/R3 灰鶴），含金幣系統、作弊（AGI/WIL 判定）、武器獎勵
- 語音旁白功能已停用（Web Speech API 品質不足），UI 按鈕已隱藏
- 環境音：4 區域獨立音景 + 戰鬥/巡邏高強度層，自動切換
- 程序化音效（sfx.js）：9 種事件音效
- 存檔系統：auto-save + 3 個手動槽位 + Base64 存檔碼
- 結局卡（v1.1）：身分牌風格收藏卡片（450×740 canvas），含半身 ASCII art、評分系統、5 級稀有度、進度條能力值、成就亮點（top 3）、NPC 留言，支援下載/複製分享
- 全域統計：跨遊玩累計數據（死亡、結局分布、戰鬥、石化度等），結局後展示
- 已準備 itch.io 發布（DEV 工具已隱藏）

## 待辦 / 已知問題

- [ ] 語音旁白：尋找更好的 TTS 方案（Fish Audio / ElevenLabs / Kokoro）替換 Web Speech API
- [ ] `voice.js` 保留完整 API 介面（speak/cancel/toggle 等），目前為 no-op，方便未來接入新 TTS

## ✅ 已完成：結局卡片重製 v1.1（endcard.js）

身分牌風格收藏卡片，450×740 canvas。

**卡片佈局（由上到下）**：
1. 星級 + 稀有度等級（左）/ 結局身分稱號（右，顏色 = 稀有度色）
2. 半身 ASCII art（4 結局 × 2 性別 = 8 套，12 行）
3. 角色名 + 性別符號
4. 結局描述文字（自動換行）
5. 能力值進度條（STR/AGI/WIL/PETRI/DEPTH）+ 數值
6. 成就亮點（top 3，依稀有度排序著色）+ 評分（右側大字）
7. NPC 留言（好感度最高的 NPC 經典台詞，圓角外框）
8. 底部：網址 + 遊玩時間

**評分 & 稀有度**：`calculateEndScore()` 綜合屬性、等級、道具、NPC 關係、進程旗標、死亡/石化/結局加成。5 級稀有度：普通(<30)、精良(30-49)、稀有(50-69)、史詩(70-84)、傳說(≥85)。

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

- [x] **分享結局卡** — `endcard.js` 身分牌風格收藏卡片（評分/稀有度/ASCII art/NPC 語錄），支援下載/複製
- [x] **數據統計頁** — `stats.js` 用 localStorage 記錄全域統計（死亡次數、結局分布、戰鬥次數、石化度等），結局後展示
- [ ] **多語言擴展** — 架構已支援 i18n，可加日文或其他社群翻譯

## API 速查表

### 狀態物件 (`state.js`)

```javascript
state = {
  name: '旅者', sex: 'male',
  hp: 100, maxHp: 100, petri: 0,    // petri: 0-100，到 100 即石化死亡
  str: 5, agi: 5, wil: 5,           // 三圍屬性
  xp: 0, level: 1, xpToNext: 20,
  inventory: [],                      // 物品名稱陣列
  region: 0, node: 'start',          // 目前位置
  flags: {},                          // 劇情進度旗標（任意 key-value）
  deathCount: 0, lang: 'zh',
  mood: 'normal'  // normal|happy|hurt|danger|petri|combat（影響 avatar 表情）
};

// i18n 工具函式
L(zh, en)       // 根據 state.lang 回傳對應語言字串
applyLang()     // 更新所有 DOM 元素的語言顯示
```

### 節點系統 (`nodes.js`)

```javascript
registerNode('r0_body', () => { ... });  // 註冊節點
loadNode('r0_look');                      // 跳轉節點（自動存檔）
```

### 探索引擎 (`explore.js`)

```javascript
autoExplore(steps, choices, opts);
// steps:   探索步驟陣列
// choices: 結束後顯示的選項陣列
// opts:    { label: L('標籤', 'Label') }  顯示在探索過程中的區塊標題
```

**步驟物件格式**：

```javascript
{
  tag: '系統',               // 顯示為 [系統]
  tagColor: 'tag-system',    // CSS class
  text: '中文描述……',        // 打字機效果逐字渲染
  textEn: 'English desc...', // 英文版
  html: '<b>粗體</b>內容',   // 用 html 取代 text 則不觸發打字機，直接渲染
  htmlEn: '<b>bold</b> content',
  art: '<pre class="ascii-art">...</pre>',  // ASCII 藝術（直接渲染）
  artEn: '<pre>...</pre>',
  delay: 2500,               // 停留毫秒數再進下一步
  effect: function() { state.hp -= 5; },    // 副作用函式（立即執行）
}
```

**選項物件格式**：

```javascript
{ text: '檢查身體', textEn: 'Check body', action: () => loadNode('r0_body') }
```

### 工具函式 (`utils.js`)

```javascript
rng(min, max)               // 隨機整數 [min, max]
clamp(v, lo, hi)            // 限制範圍
L(zh, en)                   // i18n 選擇
notify(msg)                 // 彈出 toast 通知（2 秒）

// 屬性檢定
statCheck(stat, dc)         // → 'crit' | 'pass' | 'fail'（d6 + stat vs DC）
checkRate(stat, dc)         // → 百分比（顯示成功率用）

// HP / 石化度
changeHp(delta)             // → true 表示死亡
changePetri(delta)          // → true 表示完全石化
changeStat(stat, delta)     // 永久屬性變動

// 經驗值
gainXp(amount)              // 含升級處理
xpForLevel(lv)              // = 20 * 1.4^(lv-1)

// 物品
hasItem(name)               // 檢查是否持有
addItem(name)               // 加入背包
removeItem(name)            // 從背包移除
```

### 戰鬥系統 (`combat.js`)

```javascript
startCombat(enemy, onWin, onFlee);

// 敵人定義格式：
{
  name: '石化蝙蝠', nameEn: 'Petrified Bat',
  hp: 12, atkMin: 2, atkMax: 5,
  petriDmg: 1,           // 每次攻擊附加石化傷害
  xp: 5,
  empathyGoal: 3,        // 交流次數達標即可饒恕（預設 3）
  art: ['  ╱╲    ╱╲', ...],  // ASCII 藝術行陣列
  commune: [              // 交流成功文字池
    { zh: '蝙蝠的翅膀微微停頓。', en: 'The bat\'s wings pause.' }
  ],
  communeFail: [          // 交流失敗文字池（選填）
    { zh: '它完全無法理解……', en: 'It cannot comprehend...' }
  ],
  spareText: { zh: '蝙蝠飛走了。', en: 'The bat flies away.' }
}
```

**4 種戰鬥行動**：
- **攻擊**（STR）：`baseDmg = rng(3,6) + str*1.2 + 武器加成`；觀察後 2 倍傷害
- **觀察**（AGI 檢定 DC7）：成功則下次攻擊 2 倍
- **交流**（WIL 檢定 DC8）：`empathy++`，達 `empathyGoal` 可饒恕（1.5 倍 XP，-3 石化）
- **逃跑**：需提供 `onFlee` callback

### 巡邏遭遇 (`patrol.js`)

```javascript
// 各區域怪物池
var R0_MONSTERS = [ { name: '石化蝙蝠', ... }, ... ];
var R1_MONSTERS = [ ... ];

// 觸發隨機戰鬥
startCombat(
  R0_MONSTERS[Math.floor(Math.random() * R0_MONSTERS.length)],
  onWin, onFlee
);
```

### 音效 (`sfx.js`)

```javascript
sfx.click()     // UI 點擊音
sfx.hit()       // 攻擊命中
sfx.hurt()      // 受到傷害
sfx.petri()     // 石化效果（水晶音）
sfx.levelUp()   // 升級
sfx.death()     // 死亡
sfx.item()      // 獲得物品
sfx.pass()      // 檢定成功
sfx.fail()      // 檢定失敗
sfx.setEnabled(bool)   // 開關
sfx.setVolume(0-1)     // 音量
```

### 環境音 (`audio.js`)

```javascript
ambientAudio.setRegion(regionIndex)  // 切換區域音景（0-3）
ambientAudio.setCombat(true/false)   // 疊加戰鬥音效層
```

### 存檔系統 (`save.js`)

```javascript
saveGame()          // 自動存到 localStorage
loadSave()          // 讀取自動存檔
exportSaveCode()    // 生成 Base64 分享碼（PA2 格式，含 checksum）
importSaveCode(code)// 讀取分享碼
// 手動存檔：3 個槽位，UI 在存檔面板中操作
```

## 新增劇情節點範例（完整模板）

```javascript
registerNode('r1_example', () => {
  autoExplore([
    { tag: '環境', tagColor: 'tag-sense',
      text: '你來到一條幽暗的走廊，空氣中瀰漫著礦石的氣味。',
      textEn: 'You arrive at a dim corridor, the air thick with mineral scent.',
      delay: 2500 },
    { tag: '警告', tagColor: 'tag-warn',
      text: '前方的地面上散落著碎石，踩上去可能會滑倒。',
      textEn: 'Loose gravel covers the ground ahead — you might slip.',
      delay: 2200 },
    { tag: '檢定', tagColor: 'tag-info',
      text: L('你小心翼翼地通過（AGI 檢定）', 'You carefully proceed (AGI check)'),
      textEn: 'You carefully proceed (AGI check)',
      delay: 1500,
      effect: function() {
        var result = statCheck('agi', 6);
        if (result === 'fail') { changeHp(-5); sfx.fail(); }
        else { sfx.pass(); }
      }
    },
  ], [
    { text: '繼續前進', textEn: 'Continue forward',
      action: () => loadNode('r1_next') },
    { text: '返回', textEn: 'Return',
      action: () => loadNode('r1_prev') },
  ], { label: L('探索走廊', 'Exploring Corridor') });
});
```

## 新增怪物範例（完整模板）

```javascript
{
  name: '結晶蜘蛛', nameEn: 'Crystal Spider',
  hp: 18, atkMin: 3, atkMax: 7, petriDmg: 2, xp: 8,
  empathyGoal: 3,
  art: [
    '   /\\_/\\',
    '  ( o.o )',
    '   > ^ <',
  ],
  commune: [
    { zh: '蜘蛛的多隻眼睛閃爍著微光，似乎在觀察你。',
      en: 'The spider\'s many eyes glimmer, watching you intently.' },
    { zh: '它收起前肢，不再擺出攻擊姿態。',
      en: 'It retracts its forelegs, abandoning its attack stance.' },
  ],
  spareText: { zh: '結晶蜘蛛默默爬上石壁，消失在黑暗中。',
               en: 'The crystal spider crawls up the wall, vanishing into darkness.' }
}
```

## 開發注意事項

- 修改 JS 時注意 `index.html` 中的載入順序，`title.js` 必須最後載入
- 測試時注意 iOS Safari 的音頻限制（AudioContext 需要用戶手勢啟動）
- 存檔碼向後相容很重要——改 `state` 結構時要考慮舊存檔能否讀取
- 所有 story 內容都有中英雙語，新增劇情時兩個語言都要寫
- 新增 JS 檔案時，需同時在 `index.html` 底部加入 `<script>` 標籤，注意順序
- `flags` 物件可自由新增 key，用於追蹤劇情分歧（如 `state.flags.metNpc = true`）
- 節點 ID 命名慣例：`r{region}_{描述}`，如 `r0_start`, `r1_guard_fight`, `r3_ending_a`
- `mood` 變更會影響 `avatar.js` 的 ASCII 表情：`normal|happy|hurt|danger|petri|combat`
- 探索步驟的 `delay` 建議值：短描述 1500-2000ms，長描述 2500-3000ms，戲劇性場景 3000-4000ms
- 巡邏怪物池按區域分開（`R0_MONSTERS`, `R1_MONSTERS` 等），新增怪物加入對應陣列即可
