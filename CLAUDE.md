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
  skills.js         # 戰鬥技能系統（NG+ 限定，10 技能，機率觸發+保底+冷卻）
  combat.js         # 回合制戰鬥（攻擊/觀察/交流/逃跑），支援武器加成+技能整合
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
  portrait.js       # NPC 像素肖像系統（預載入、fallback、HTML 生成）
  story/
    region0.js      # 祭獻坑（教學區）
    region1.js      # 石脈迴廊
    region2.js      # 大採石場
    region3.js      # 河城渡口（含 4 結局）
assets/
  banner.svg        # itch.io 用橫幅
  cover.svg         # 封面圖
  npc/              # NPC 像素肖像（黑白 pixel art, 512×256 或 256×256）
    player_male.png, player_female.png  # 主角
    ying.png, zhou.png, crane.png ...   # NPC 肖像
    diviner.png                         # 占卜師（Game Over）
    endcard_dawn.png, endcard_sacrifice.png,
    endcard_compromise.png, endcard_lockdown.png,
    endcard_death.png                   # 結局卡塔羅牌背景（500×769）
```

## 開發慣例

- **全域變數**：各模組透過 IIFE 或直接 `var` 暴露全域 API（如 `ambientAudio`, `voiceNarrator`, `state`）
- **劇情節點**：每個 region 檔案用 `registerNode(id, fn)` 註冊節點，用 `loadNode(id)` 跳轉
- **探索步驟**：用 `{ tag, tagColor, text, textEn, delay }` 格式描述每一步
- **選項按鈕**：用 `{ text, textEn, action }` 格式
- **HTML 內容**：部分步驟用 `html`/`htmlEn` 取代 `text`/`textEn`，支援粗體等標記
- **CSS 命名**：用 `.tag-xxx` 管理標籤顏色（tag-combat, tag-info, tag-sense, tag-system, tag-warn, tag-petri 等）
- **雙語必備**：所有面向玩家的文字都必須同時提供 `zh` 和 `en` 版本
- **版本號**：每次 push 前必須更新 `index.html` 中的版本號（`<div id="title-version">v2.x</div>`，約第 68 行）。版本遞增規則：新功能或劇情 → minor 版本 +0.1，bug fix / 文字修正 → patch 加後綴（如 v2.0.1）

## 目前狀態

- 4 個區域全部完成，含 4 種結局 + 死亡結局卡
- 吹牛骰小遊戲（R2/R3 灰鶴），含金幣系統、作弊（AGI/WIL 判定）、武器獎勵
- 語音旁白功能已停用（Web Speech API 品質不足），UI 按鈕已隱藏
- 環境音：4 區域獨立音景 + 戰鬥/巡邏高強度層，自動切換
- 程序化音效（sfx.js）：9 種事件音效
- 存檔系統：auto-save + 3 個手動槽位 + Base64 存檔碼
- 結局卡（v2.0）：塔羅牌風格全幅背景美術 + 居中文字疊層（500×769 canvas），5 種結局（黎明/犧牲/妥協/封鎖/死亡）各有專屬塔羅牌美術
- 全域統計：跨遊玩累計數據（死亡、結局分布、戰鬥、石化度等），結局後展示
- 玩家排行榜（Dreamlo API）：自動提交分數，首頁+結局可查看排名
- 難度 v1.1：所有怪物攻擊/石化傷害 ×2，復活需消耗「復活石」道具（R0/R1/R2 各一顆）
- Game Over 流程：占卜師像素肖像揭露 → 死亡結局卡展示 → 排行榜
- 「從頭開始」按鈕也會先顯示結局卡，再重置遊戲
- 初始 HP 調整為 50（原為 100），提升難度
- 性別適配稱號：男性角色為「爐灶少年」(Hearth-Youth)，女性為「爐灶少女」(Hearth-Maiden)
- 螢（Ying）深度情感劇情線：R1 共眠、R2 噩夢安撫、R3 河邊月光（近告白）
- 冥河渡江人（隱藏 Post-game 路線）：通關後解鎖，屬性 ≥ 25 + 等級 ≥ 5 + WIL 檢定 DC10
- 已準備 itch.io 發布（DEV 工具已隱藏）
- 成就系統（v1.4）：24 個成就，含跨周目成就（全結局收集、和平主義者等）
- 隨機事件池擴充（v1.4）：每區域 6 隻怪物（+8 新怪物）、12 條巡邏文字、8 條懸疑文字、額外攻擊/反擊/擊敗動詞
- 5 階石化懲罰系統（v1.5）：石化度 20/40/60/80% 閾值觸發屬性減值 + 最大 HP 壓縮
- 多周目 New Game+ 系統（v1.6）：詳見下方「New Game+ 系統」
- 戰鬥技能解鎖系統（v1.9）：NG+ 限定，10 個技能分 3 階，機率觸發 + 保底，詳見下方「戰鬥技能系統」
- NPC 像素肖像系統（v2.0）：方案 B 混合模式，NPC 用黑白像素圖、場景/怪物保留 ASCII art
- UI 面板主角像素頭像（v2.0）：自動依性別顯示，心情 CSS 濾鏡
- 章節跳轉修正（v2.0）：`state.maxRegion` 追蹤最高到達區域，跳回不會丟失進度
- 鐵霜承鋼劇情引導（v2.0）：Boss 戰前暗示玩家用交流饒恕，解鎖承鋼支線
- 全頁面禁止文字選取（v2.0）：防止電腦端點擊全選
- 隨機敘事事件系統（v2.0.2）：12 個巡邏敘事事件（每區 3 個），含道德抉擇、屬性檢定、NPC 羈絆、調查線索、愛情互動
- 銅鐘信任弧線重寫（v2.0.2）：初見懷疑 → 考驗任務 → 完成後才認可同盟，取代原本的一見如故
- NPC 支線任務鏈（v2.0.3）：6 位 NPC 共 21 個支線節點，影響議會投票分數，詳見下方「NPC 支線任務系統」

## ✅ 已完成：NPC 支線任務系統（v2.0.3）

6 位 NPC 各有 3~5 個支線節點，揭露背景故事並影響議會投票結果。

### 螢（Ying）支線（3 節點，R2→R3）

| 節點 ID | 區域 | 說明 | 前置 | 關鍵 flags |
|---------|------|------|------|-----------|
| `r2_ying_secret` | R2 | 發現手冊隱藏頁，質問或放過 | `r2YingLore3 + r2YingSketch` | — |
| `r2_ying_past` | R2 | 螢揭露議會調查員身分 | `r2_ying_secret` | `r2YingPast` |
| `r2_ying_choice` | R2 | 撕毀假報告，決心寫真相 | `r2_ying_past` | — |
| `r3_ying_conflict` | R3 | 螢面臨立場衝突 | `r3YingInn + r2YingPast` | `r3YingConflict` |
| `r3_ying_confession` | R3 | 螢坦白「我是來封鎖你們的」 | `r3YingRiver + r2YingPast` | `r3YingConfession` |
| `r3_ying_resolve` | R3 | 擁抱場景，承諾寫真報告 | `r3_ying_confession` | `r3YingRealReport` (+3 score) |

### 灰鶴（Grey Crane）支線（5 節點，R2→R3）

| 節點 ID | 區域 | 說明 | 前置 | 關鍵 flags |
|---------|------|------|------|-----------|
| `r2_crane_scar` | R2 | 手臂放血刀疤，地表逃債往事 | `r2CraneLore` | `r2CraneScar` |
| `r2_crane_debt` | R2 | 追債人來襲，WIL說服/STR戰鬥/不介入 | `r2CraneScar` | `r2CraneDebtSaved` |
| `r3_crane_merchant` | R3 | 秘密倉庫，高濃度淨化劑 | `r2CraneDebtSaved` | `r3CraneMerchant` |
| `r3_crane_past` | R3 | 真名秋蘅，地表妹妹秋蕓 | `r3CraneMerchant` | `r3CranePast` |
| `r3_crane_deal` | R3 | 全部走私物資捐給議會換赦免 | `r3CranePast + r3BellAlliance` | `r3CraneDealDone` (+2 score) |

### 老周（Old Zhou）支線（4 節點，R1→R2→R3）

| 節點 ID | 區域 | 說明 | 前置 | 關鍵 flags |
|---------|------|------|------|-----------|
| `r1_zhou_memory` | R1 | 揭露礦難真相：監工K炸封印 | `r1SurvivorFullTrust` | `r1ZhouMineDisaster` |
| `r2_zhou_trace_deep` | R2 | 深層刻痕：監工K=孔德業=議會特派 | `r2ZhouTrace + r1ZhouMineDisaster` | `r2ZhouEvidence` |
| `r3_zhou_truth` | R3 | 老周發現孔德業現為議會顧問 | `r2ZhouEvidence` | `r3ZhouTruth` |
| `r3_zhou_justice` | R3 | 16人名單證詞，一起/代念 | `r3ZhouTruth` | `r3ZhouTestimony` (+2 score) |

### 鐵霜（Iron Frost）支線（3 節點，R2）

| 節點 ID | 區域 | 說明 | 前置 | 關鍵 flags |
|---------|------|------|------|-----------|
| `r2_frost_past` | R2 | 地表第七師團指揮官，拒絕屠村被流放 | `r2CampVisited` | `r2FrostPast` |
| `r2_frost_soldier` | R2 | 舊部方石到營地重逢 | `r2FrostPast` | `r2FrostSoldierSaved` |
| `r2_frost_letter` | R2 | 寫密封信給議會，請求撤離+調查第七師團 | `r2FrostSoldier` | `r2FrostLetterCarried` (+1 score) |

### 銅鐘（Bronze Bell）支線（3 節點，R3）

| 節點 ID | 區域 | 說明 | 前置 | 關鍵 flags |
|---------|------|------|------|-----------|
| `r3_bell_night` | R3 | 深夜辦公室，石化右手疼痛，脆弱面 | `r3BellAlliance` | `r3BellNight` |
| `r3_bell_secret` | R3 | 鏽刃壟斷石化結晶製造武器的真相 | `r3BellNight + (FrostLetter or ZhouTestimony)` | `r3BellSecret` |
| `r3_bell_alliance_deep` | R3 | 攤底牌，腐敗檔案全交出 | `r3BellSecret` | `r3BellAllianceDeep` (+3 score) |

### 承鋼（Cheng Gang）支線（3 節點，R2）

| 節點 ID | 區域 | 說明 | 前置 | 關鍵 flags |
|---------|------|------|------|-----------|
| `r2_cheng_memory` | R2 | 石化前研究：結晶是轉換非破壞 | `r2ChengAwake + train≥1` | `r2ChengMemory` |
| `r2_cheng_lab` | R2 | 古代密道隱藏實驗室，3年數據完好 | `r2ChengMemory` | `r2ChengLab` |
| `r2_cheng_cure` | R2 | 倫理困境：犧牲活人 vs 找封印裝置逆轉 | `r2ChengLab` | `r2ChengCureData` (+2 score) |

### 議會投票 score 更新（v2.0.3）

```javascript
// 新增支線任務加分
if (state.flags.r3YingRealReport) score += 3;  // 螢的真報告
if (state.flags.r3CraneDealDone) score += 2;   // 灰鶴物資捐贈
if (state.flags.r3ZhouTestimony) score += 2;   // 老周礦難證詞
if (state.flags.r2FrostLetterCarried) score += 1; // 鐵霜密封信
if (state.flags.r3BellAllianceDeep) score += 3; // 銅鐘腐敗檔案
if (state.flags.r2ChengCureData) score += 2;   // 承鋼治癒研究
// 理論最高：+13 分（支線全通）
```

## ✅ 已完成：New Game+ 系統（v1.6）

### 多周目怪物倍率

| 周目 | 怪物倍率 | XP 倍率 | 基礎 HP | 公式 |
|------|---------|---------|--------|------|
| 一周目 | 1x | 1x | 50 | — |
| 二周目 | **2x** | 1.25x | 60 (+10) | `2^1` |
| 三周目 | **4x** | 1.5x | 70 (+20) | `2^2` |
| 四周目 | **8x** | 1.75x | 80 (+30) | `2^3` |

**倍率公式**：`Math.pow(2, ngPlusRun)`，其中 `ngPlusRun = globalStats.totalRuns`

### 能力轉換系統

通關後玩家可選擇：
1. **轉換能力點 → NG+**：將本周目獲得的屬性點儲存為下周目的額外分配點
2. **繼續探索 → 冥河**：留在當前存檔，挑戰隱藏的冥河渡江人路線

**轉換公式**：`bankedPoints = (STR + AGI + WIL - 9) + max(0, Level - 5)`
- 能力加點：三圍總和 − 基礎值 9（每項初始 3）
- 等級獎勵：5 級以後每升 1 級 +1 點
- 跨周目保留最佳值：`globalStats.bankedPoints = max(舊值, 新值)`

### 屬性分配（角色創建）

| 項目 | 一周目 | NG+ |
|------|-------|-----|
| 基礎分配點 | 6 | 6 + bankedPoints |
| 單項上限 | 9 | **無上限** |
| 基礎值 | 3/3/3 | 3/3/3 |

### 關鍵變數與 flags

```javascript
state.flags.ngPlus        // boolean — 是否為 NG+ 周目
state.flags.ngPlusRun     // number — 第幾次 NG+（1=二周目, 2=三周目...）
state.flags.ngEndingDawn  // boolean — 前世是否達成黎明結局（其他結局類推）
globalStats.totalRuns     // number — 總通關次數
globalStats.bankedPoints  // number — 儲存的轉換點數（最佳值）

// 工具函式
getNgPlusScale()          // → 1 / 2 / 4 / 8...（怪物倍率）
scaleEnemyNgPlus(enemy)   // → 返回倍率調整後的敵人淺拷貝
getBaseMaxHp()            // → 考慮 NG+ 周目和等級的基礎最大 HP
calculateBankedPoints()   // → 計算當前周目可儲存的點數
```

### NG+ 劇情變體

- R0 開場：記憶閃回（夢到過去的旅程）
- R1 螢：「你的眼神很奇怪，好像認識我」
- R1 老周：模糊的河城記憶
- R1 灰鶴：骰桌上的似曾相識

## ✅ 已完成：5 階石化懲罰系統（v1.5）

石化度不再只是死亡計時器，而是持續影響戰鬥力的核心機制。

| 階段 | 石化度 | STR | AGI | WIL | 最大HP |
|------|--------|-----|-----|-----|--------|
| 0 正常 | 0-19% | — | — | — | 100% |
| 1 輕微 | 20-39% | -1 | -1 | — | 100% |
| 2 中度 | 40-59% | -2 | -2 | -1 | 90% |
| 3 嚴重 | 60-79% | -3 | -3 | -2 | 80% |
| 4 瀕臨 | 80-99% | -4 | -4 | -3 | 70% |

```javascript
petriPenalty()           // → { stage, str, agi, wil, maxHpMult, label, labelEn }
effectiveStat(stat)      // → Math.max(1, state[stat] + penalty)
// statCheck() 和 checkRate() 自動使用 effectiveStat()
// changePetri() 跨越閾值時顯示警告 + 動態調整 maxHp
```

## ✅ 已完成：成就系統（v1.4，achievements.js）

24 個成就，存於獨立 localStorage key `petriabyss_achievements`。

**成就類別**：
- 探索型：首次戰鬥、首次死亡、抵達各區域、全 NPC 交流
- 關係型：螢同行、河邊月光、冥河渡江人
- 挑戰型：和平主義者（0 戰鬥通關）、石之花（石化 ≥80% 存活通關）、極速通關
- 收集型：全 4 結局收集（跨周目追蹤）、骰子高手

## 待辦 / 已知問題

- [ ] 語音旁白：尋找更好的 TTS 方案（Fish Audio / ElevenLabs / Kokoro）替換 Web Speech API
- [ ] `voice.js` 保留完整 API 介面（speak/cancel/toggle 等），目前為 no-op，方便未來接入新 TTS

## 劇情節點索引（Story Node Index）

全遊戲共約 90+ 個劇情節點，分佈在 4 個區域 + 1 條隱藏路線。
修改劇情時請參照此索引定位節點，並維持節點 ID 命名慣例 `r{region}_{描述}`。

### 整體流程

```
R0 祭獻坑 → R1 石脈迴廊 → R2 大採石場 → R3 河城渡口 → 4 結局
     ↓ (隱藏路線，需破關 1 次)
  冥河渡江人 → 深淵更深處（待開發）
```

### R0 — 祭獻坑（教學區）`region0.js`

| 節點 ID | 類型 | 說明 | NPC / Boss |
|---------|------|------|-----------|
| `r0_start` | 開場 | 玩家甦醒，發現石化感染，揭示「大上升」目標 | — |
| `r0_body` | 線性 | 檢查身體，了解石化程度（+AGI 或 +WIL） | — |
| `r0_look` | **中樞** | 觀察環境，分歧至屍體/石像/攀爬/裂縫/冥河入口 | — |
| `r0_patrol` | 戰鬥 | 坑底巡邏練等 | R0 怪物池 |
| `r0_corpse` | 探索 | 搜索半石化屍體，獲得碎石匕首 | — |
| `r0_statues` | 探索 | 調查石化人形群，獲得黑麵包 | — |
| `r0_whisper` | 探索 | 石像間的神祕低語 | — |
| `r0_ritual` | 探索 | 古老祭獻儀式現場 | — |
| `r0_hidden` | 物品 | 隱藏物資緩存 | — |
| `r0_rest` | 休息 | 靠牆休息 + 記憶閃回 | — |
| `r0_crack` | 分歧 | 南面裂縫（通往水源 / 石化水瓶） | — |
| `r0_climb_check` | 分歧 | 決定攀爬方式（STR / AGI / 替代） | — |
| `r0_climb_str` | 檢定 | 力量攀爬（STR 檢定） | — |
| `r0_climb_alt` | 替代 | 微光石照明繞路 | — |
| `r0_tunnel` | **Boss** | 對抗石化蜥蜴 | 石化蜥蜴 |
| `r0_after_lizard` | 過渡 | 擊敗蜥蜴後，發現通往 R1 的石門 | — |
| `r0_path` | 捷徑 | 直接尋找出路（跳過探索） | — |

**隱藏路線 — 冥河渡江人（需破關 ≥1 次）：**

| 節點 ID | 類型 | 說明 | NPC |
|---------|------|------|-----|
| `r0_ferryman_gate` | 門檻 | 發現冥河入口，未破關者被擋住 | — |
| `r0_ferryman_meet` | NPC | 遇見渡江人，判斷玩家是否夠強（屬性≥25, Lv≥5） | 冥河渡江人 |
| `r0_ferryman_lore` | 對話 | 渡江人講述冥河與石化瘟疫起源 | 冥河渡江人 |
| `r0_ferryman_challenge` | 檢定 | WIL DC10 試煉「深淵的凝視」 | 冥河渡江人 |
| `r0_ferryman_fail` | 失敗 | 試煉失敗，石化度+8%、HP-15 | 冥河渡江人 |
| `r0_ferryman_descent` | 成功 | 登船渡河（flag: `ferrymanPassed`，STR/AGI/WIL+1, HP+20, 石化-15%, 獲得深淵渡河令），敬請期待 | 冥河渡江人 |

### R1 — 石脈迴廊 `region1.js`

| 節點 ID | 類型 | 說明 | NPC / Boss |
|---------|------|------|-----------|
| `r1_start` | 開場 | 進入廢棄礦坑 | — |
| `r1_look` | **中樞** | 四向分歧：北(鍛造)、東(守衛)、西(礦脈)、南(返回) | — |
| `r1_forge` | 探索 | 廢棄鍛造間，獲得鍛造鐵錘 | — |
| `r1_furnace` | 製造 | 使用熔爐製作抗石化護符 | — |
| `r1_forge_search` | 物品 | 搜索鍛造間角落 | — |
| `r1_crystal` | 探索 | 西面結晶礦脈 | — |
| `r1_crystal_items` | 物品 | 取出嵌在結晶中的物品 | — |
| `r1_guard_check` | 過渡 | 前往東面走廊 | — |
| `r1_guard_fight` | **Boss** | 對抗石脈守衛 | 石脈守衛 |
| `r1_guard_weak` | 勝利 | 擊敗守衛，獲得守衛核心石 | — |
| `r1_guard_sneak` | 檢定 | 潛行繞過守衛（AGI 檢定） | — |
| `r1_deep` | 探索 | 沿鐵軌深入迴廊 | — |
| `r1_quarters` | 探索 | 礦工宿舍生活遺跡 | — |
| `r1_rest` | 休息 | 宿舍內休息恢復 | — |
| `r1_survivor` | NPC | 遇見倖存礦工老周 | 老周 |
| `r1_survivor_bread` | 關係 | 給老周黑麵包 | 老周 |
| `r1_survivor_reward` | 獎勵 | 老周回報獎勵 | 老周 |
| `r1_survivor_info` | 情報 | 老周提供地底資訊 | 老周 |
| `r1_survivor_talk` | 對話 | 多次拜訪老周的對話分支 | 老周 |
| `r1_wanderer` | NPC | 遇見流浪商人灰鶴（首次登場） | 灰鶴 |
| `r1_wanderer_lore` | 劇情 | 灰鶴講述古代地底文明 | 灰鶴 |
| `r1_wanderer_trade` | 交易 | 與灰鶴以物易物 | 灰鶴 |
| `r1_ying_encounter` | NPC | 追趕身影，遇見記錄員螢（首次登場） | 螢 |
| `r1_ying_truth` | 關係 | 告訴螢自己是爐灶少年/少女（性別適配） | 螢 |
| `r1_ying_alone` | 關係 | 問螢為何獨行 | 螢 |
| `r1_ying_silent` | 關係 | 保持沉默的回應 | 螢 |
| `r1_ying_share` | 關係 | 分享目標（flag: `r1YingCompanion`） | 螢 |
| `r1_ying_talk` | 對話 | 多次對話分支 | 螢 |
| `r1_ying_herb` | 浪漫 | 一起採集草藥 | 螢 |
| `r1_ying_chat` | 關係 | 輕鬆聊天加深羈絆 | 螢 |
| `r1_ying_warmth` | 浪漫 | 共眠取暖——螢靠在肩上入睡（HP+20, 石化-8%, WIL+1） | 螢 |
| `r1_gate` | 門檻 | 通往 R2 的大門（需守衛核心石） | — |
| `r1_gate_open` | 過渡 | 開門進入 R2 | — |
| `r1_patrol` | 戰鬥 | 迴廊巡邏練等 | R1 怪物池 |

### R2 — 大採石場 `region2.js`

| 節點 ID | 類型 | 說明 | NPC / Boss |
|---------|------|------|-----------|
| `r2_start` | 開場 | 進入巨大採石場 | — |
| `r2_look` | **中樞** | 俯瞰全景，螢若同行則在此抵達 | (螢) |
| `r2_quarry_floor` | 探索 | 採石台區域 | — |
| `r2_crystal_harvest` | 採集 | 採集高品質結晶（STR 檢定） | — |
| `r2_crystal_deep` | 後果 | 過度採集導致石化加劇 | — |
| `r2_machine` | 探索 | 調查石化戰爭機械 + 工程師筆記 | — |
| `r2_machine_activate` | 解謎 | 啟動機械核心，獲得機甲控制鍵 | — |
| `r2_bridge` | 解謎 | 通往營地的斷橋（3 種解法） | — |
| `r2_bridge_fix` | 解法 | 用繩索修橋 | — |
| `r2_bridge_swing` | 檢定 | 盪過斷橋（AGI） | — |
| `r2_bridge_jump` | 檢定 | 跳過斷橋（STR） | — |
| `r2_camp` | 據點 | 倖存者營地（flag: `r2CampVisited`） | 多 NPC |
| `r2_camp_chief` | NPC | 營地首領——鐵霜 | 鐵霜 |
| `r2_camp_smith` | NPC | 鐵匠老鑄——修補護甲 | 老鑄 |
| `r2_camp_medic` | NPC | 醫師清露——治療 + 復活石 + 淨化液 | 清露 |
| `r2_rest` | 休息 | 營火旁休息 + 記憶場景 | — |
| `r2_boss_prep` | 準備 | Boss 前準備（螢送行） | (螢) |
| `r2_boss` | **Boss** | 對抗石化巨像 | 石化巨像 |
| `r2_gate` | 過渡 | 通往 R3 的上升通道 | — |
| `r2_ying_talk` | 對話 | 與螢的 R2 對話分支 | 螢 |
| `r2_ying_seal` | 劇情 | 螢講述封印石室 | 螢 |
| `r2_ying_night` | 浪漫 | 營火邊的夜間場景 | 螢 |
| `r2_ying_promise` | 浪漫 | Boss 前的承諾 | 螢 |
| `r2_ying_nightmare` | 浪漫 | 螢的噩夢——安撫（抱緊/低語兩條分支，HP+25, 石化-10%, WIL+1） | 螢 |
| `r2_crane` | NPC | 灰鶴再登場——交易 + 吹牛骰 | 灰鶴 |
| `r2_zhou_trace` | 線索 | 發現老周蹤跡 | — |
| `r2_ancient_tunnel` | **隱藏** | 古代科學密道（需饒恕 Boss + 承鋼通行碼），獲得瘟疫起源報告 | 承鋼 |
| `r2_patrol` | 戰鬥 | 採石場巡邏練等 | R2 怪物池 |

### R3 — 河城渡口（含 4 結局）`region3.js`

| 節點 ID | 類型 | 說明 | NPC / Boss |
|---------|------|------|-----------|
| `r3_start` | 開場 | 抵達地底城市，通過碼頭哨兵 | 哨兵 |
| `r3_look` | **中樞** | 三大區域分歧：碼頭 / 市場 / 議會廳 | — |
| `r3_dock` | 探索 | 碼頭——與水手、商人互動 | — |
| `r3_market` | 探索 | 市場——購物 + 收集情報 | — |
| `r3_council` | 據點 | 議會廳——守衛 + 進入銅鐘辦公室 | 守衛 |
| `r3_inn` | 休息 | 河畔客棧——休息 + 存檔點 | — |
| `r3_bell` | **NPC** | 銅鐘（首次見面：懷疑→給考驗→完成任務後認可同盟） | 銅鐘 |
| `r3_ying_talk` | 對話 | 螢的 R3 對話分支 | 螢 |
| `r3_ying_inn` | 浪漫 | 客棧晚宴——重要情節節點 | 螢 |
| `r3_ying_river` | 浪漫 | 河邊月光近告白——牽手/筆記本兩條分支（HP+30, 石化-12%, WIL+2） | 螢 |
| `r3_zhou` | NPC | 老周再會 | 老周 |
| `r3_crane` | NPC | 灰鶴的 R3 登場——取得證詞 + 吹牛骰 | 灰鶴 |
| `r3_quest_check` | 任務 | 回報銅鐘——檢查 3 個任務完成度 | 銅鐘 |
| `r3_boss_prep` | 準備 | 最終 Boss 準備（3 種策略） | — |
| `r3_boss` | **Boss** | 3 種方式：潛行 / 戰鬥 / 說服 | 鏽刃 |
| `r3_testimony` | 劇情 | 玩家在議會前作證 | 議會 5 人 |
| `r3_vote` | **分歧** | 議會投票——根據 score 決定結局 | 議會 |
| `r3_ending_dawn` | 結局A | 🌅 黎明——最佳結局（score≥12 + 瘟疫證據） | — |
| `r3_ending_compromise` | 結局B | 🤝 妥協——中立結局（score≥8） | — |
| `r3_ending_lockdown` | 結局C | 🔒 封鎖——壞結局（score<8） | — |
| `r3_ending_sacrifice` | 結局D | 💀 犧牲——石化結局（高石化度 + 瘟疫證據） | — |
| `r3_epilogue` | 尾聲 | 根據結局 + NPC 關係展示不同尾聲 | 全 NPC |
| `r3_patrol` | 戰鬥 | 渡口巡邏練等 | R3 怪物池 |

### NPC 角色索引

| 角色 | 性別 | 首次登場 | 出現區域 | 好感度等級 | 關鍵 flags |
|------|------|---------|---------|-----------|-----------|
| 螢 Ying | 配合主角 | R1 `r1_ying_encounter` | R1→R2→R3 | 5 | `r1YingCompanion`, `r1YingWarmth`, `r2YingPromise`, `r2YingNightmare`, `r3YingRiver` |
| 老周 Old Zhou | 男 | R1 `r1_survivor` | R1→R3 | 3 | `r1SurvivorMet`, `r3ZhouMet` |
| 灰鶴 Grey Crane | **女** | R1 `r1_wanderer` | R1→R2→R3 | 5 | `r1WandererMet`, `r2CraneMet`, `r3CraneTestimony` |
| 鐵霜 Iron Frost | 女 | R2 `r2_camp_chief` | R2 | 3 | `r2CampVisited`, `r2BossSpared`, `r2ReunionSeen` |
| 承鋼 Cheng Gang | 男 | R2 `r2_camp_chief`(饒恕Boss後) | R2 | — | `r2BossSpared`, `r2ChengAwake` |
| 老鑄 Old Cast | 男 | R2 `r2_camp_smith` | R2 | 3 | `r2SmithVisited` |
| 清露 Dew | 女 | R2 `r2_camp_medic` | R2 | 3 | `r2MedicHealed`, `r2MedicElixir` |
| 銅鐘 Bronze Bell | 女 | R3 `r3_bell` | R3 | 3 | `r3BellMet`, `r3BellReport`, `r3BellQuest`, `r3BellAlliance`（任務完成後才給） |
| 冥河渡江人 Ferryman | 男 | R0 `r0_ferryman_meet` | R0(隱藏) | — | `ferrymanPassed` |

### 銅鐘信任弧線（v2.0.2 重寫）

銅鐘不再一見面就認可玩家。信任需要通過行動贏得：

| 階段 | 觸發 | 態度 | flags |
|------|------|------|-------|
| 1. 初見 | `r3_bell` 首次 | 冷漠懷疑：「門是關著的。你沒有被邀請。」 | `r3BellMet` |
| 2. 匯報 | 選「告訴她下面的情況」 | 聽取但不信：「議會每個月都聽這種故事」→ 給三個任務當考驗 | `r3BellReport`, `r3BellQuest` |
| 3. 回訪（未認可） | 再次拜訪但任務未完成 | 冷淡：「任務完成了嗎？」 | — |
| 4. **認可** | `r3_quest_check` 完成 ≥2 個任務 | 「我錯了。你是我的盟友。」握腕立誓，情感轉折 | `r3BellAlliance` + XP+15 + WIL+1 |
| 5. 親密遞增 | 認可後再訪 visit 2/3/4+ | 審視→身體接近→佔有感（與之前相同） | `_bellVisits` |

### 結局 score 計算（`r3_vote` 節點）

```
var score = 0;
if (state.level >= 5)             score += 2;  // 等級夠高
if (state.flags.r3CraneTestimony) score += 2;  // 灰鶴作證
if (state.flags.r1YingCompanion)  score += 1;  // 螢同行
if (state.flags.r3BossMethod === 'sneak') score += 1; // 潛行過 Boss
if (hasItem("Ying's Charm"))      score += 1;  // 持有螢的護身符
if (state.flags.r3ZhouMet)        score += 1;  // 與老周重逢
if (state.flags.r3PlagueProof)    score += 3;  // 瘟疫起源證據（關鍵）
// 結局判定：≥12+proof→黎明  ≥8→妥協  <8→封鎖  高石化+proof→犧牲
```

## ✅ 已完成：結局卡片重製 v2.0（endcard.js）

塔羅牌風格全幅背景美術 + 居中文字疊層，500×769 canvas。

**5 種結局卡**：黎明（螢）、犧牲（老周）、妥協（銅鐘）、封鎖（鐵霜）、死亡（占卜師）。
每種結局有專屬塔羅牌像素美術（`assets/npc/endcard_*.png`），黑白韓風。

**卡片佈局（由上到下）**：
1. 全幅塔羅牌美術背景（佔 70%）
2. 漸層遮罩（上方透明 → 下方深色）
3. 角色名（居中大字）
4. 結局稱號（居中，結局色）
5. 一行屬性（STR AGI WIL Lv. 石化%）
6. 評分數字（居中特大）+ 星級稀有度
7. 底部：網址 + 遊玩時間

**結局判定**：通關結局用 `state.flags.r3Ending`（dawn/sacrifice/compromise/lockdown），一般死亡用 `death`。

**評分 & 稀有度**：`calculateEndScore()` 綜合屬性、等級、道具、NPC 關係、進程旗標、死亡/石化/結局加成。5 級稀有度：普通(<30)、精良(30-49)、稀有(50-69)、史詩(70-84)、傳說(≥85)。

## ✅ 已完成：玩家排行榜（leaderboard.js）

使用 Firebase Realtime DB（純 REST fetch，零 SDK，HTTPS 原生支援）。

**功能**：
- 死亡（無復活石）或通關結局時，自動提交分數到 Firebase
- 排行榜顯示：排名、玩家名稱、結局卡片稱號（曙光者/獻身者/斡旋者/守門者/殞命者）、稀有度星級
- 首頁標題畫面有「高分榜」按鈕，可隨時查看
- Game Over 流程：占卜師像素肖像揭露 → 結局卡 → 排行榜

**Firebase Realtime DB**：
- URL: `https://petriabyss-db-default-rtdb.asia-southeast1.firebasedatabase.app`
- 提交：`POST /leaderboard.json` (JSON body: name, score, ending, cycle, seconds, timestamp)
- 讀取：`GET /leaderboard.json?orderBy="score"&limitToLast=N`
- Rules: `{ leaderboard: { .read: true, .write: true, .indexOn: ["score"] } }`
- 支援 GitHub Pages (HTTPS) 和 itch.io

## 未來開發方向

### 體驗提升（已完成）

- [x] **音效反饋** — `sfx.js` 程序化生成
- [x] **打字機效果** — `explore.js` 已內建逐字渲染
- [x] **存檔槽位** — 3 個手動槽位
- [x] **成就系統** — 24 個成就，跨周目追蹤
- [x] **隨機事件池** — 每區域 6 怪物、12 巡邏文字
- [x] **New Game+** — 多周目能力轉換 + 倍率遞增怪物
- [x] **石化懲罰** — 5 階段屬性減值 + HP 壓縮

### 內容擴展（推薦下一步）

- [x] **戰鬥技能解鎖系統**（類似劍星） — 詳見下方「已完成：戰鬥技能系統」
- [ ] **冥河深淵（R4+ 新區域）** — 渡江人路線目前只有「敬請期待」，可開發全新區域：古代封印層、石化瘟疫真正起源、最終 Boss。NG+ 高周目玩家的終極挑戰
- [ ] **NG+ 專屬劇情分歧** — 二周目以上解鎖全新對話選項和隱藏路線（例：直接揭露瘟疫真相給銅鐘、和 Boss 鏽刃談判時提及「上一世」的記憶）
- [ ] **NPC 好感度系統強化** — 目前好感度只靠 flags 判斷，可改為數值型（0-100），影響 NPC 商店價格、戰鬥支援、專屬結局變體
- [ ] **裝備系統** — 目前只有 `weaponDmg` flag，可擴展為完整裝備槽（武器/護甲/飾品），各區域 Boss 掉落稀有裝備，NG+ 可繼承
- [ ] **動態難度調整** — 追蹤玩家的連續死亡/連續勝利，自動微調怪物強度，讓不同技術水準的玩家都有好體驗

### 技術改善

- [ ] **離線支援 (PWA)** — 加 Service Worker + manifest.json，可「安裝」到手機桌面離線遊玩
- [ ] **無障礙** — 選項按鈕加 `aria-label`，鍵盤導航優化，高對比模式
- [ ] **ES Module 重構** — 遷移全域變數到 ES modules，搭配簡單 bundler，改善可維護性
- [ ] **效能監控** — 高周目（4x+）怪物數值可能導致戰鬥回合過長，考慮加入回合上限或自動結算

### 傳播 / 社群

- [x] **分享結局卡** — `endcard.js` 身分牌風格收藏卡片
- [x] **數據統計頁** — `stats.js` 跨遊玩累計統計
- [x] **玩家排行榜** — `js/leaderboard.js`，Dreamlo API
- [ ] **多語言擴展** — 架構已支援 i18n，可加日文或其他社群翻譯
- [ ] **周目排行榜** — 排行榜加入「周目數」欄位，區分一周目和高周目玩家，展示最高通關周目

## ✅ 已完成：戰鬥技能系統（v1.9，skills.js）

類似劍星（Stellar Blade）的技能解鎖機制——在戰鬥中特定條件觸發時，有機率領悟新技巧。
技能不是手動學習，而是在「對的時刻」自然觸發，給玩家驚喜感。

### ⚠️ 前置條件：僅限二周目以上（NG+）

技能系統是 NG+ 的核心獎勵之一，**一周目玩家不會觸發任何技能解鎖**。

- 判定條件：`state.flags.ngPlus === true`（即 `globalStats.totalRuns >= 1`）
- 一周目戰鬥中完全不執行 `checkSkillUnlock()`，不顯示技能按鈕
- NG+ 開場提示：「你的身體記得上一世的戰鬥——石化的記憶開始甦醒。」
- 劇情合理性：技能是「前世戰鬥記憶的殘留」，在石化能量的刺激下被喚醒
- 這也給一周目玩家一個明確的二周目動機：「二周目會解鎖戰鬥技能」

### 設計核心

- **NG+ 限定**：僅二周目以上觸發，一周目完全不啟用
- **機率觸發**：每次滿足觸發條件時，有 X% 機率解鎖（非必定）
- **一次解鎖永久可用**：解鎖後存入 `state.skills[]`，之後每場戰鬥都能使用
- **跨周目保留**：已學技能存入 `globalStats.unlockedSkills`，下個周目開局即可使用
- **漸進解鎖**：不同技能有不同的前置條件（戰鬥場次、等級、屬性值、已學技能數）
- **戰鬥選項動態擴充**：解鎖後在戰鬥中出現新的行動按鈕（第 5、6… 個選項）

### 觸發時機 × 機率

技能在**回合結束時**判定。每次觸發只判定一個技能（優先判定前置條件剛滿足的）。

| 觸發條件 | 判定時機 | 基礎機率 | 機率修正 |
|----------|---------|---------|---------|
| 暴擊（觀察後攻擊） | 造成 2x 傷害後 | 15% | +2%/Lv |
| 受傷（HP < 30%） | 被攻擊後 HP 低於閾值 | 12% | +3%/連續戰鬥場次 |
| 感應成功 | 感應（Commune）判定成功後 | 10% | +2%/WIL |
| 觀察成功 | 觀察（Observe）判定成功後 | 10% | +2%/AGI |
| 擊殺 | 戰鬥勝利（非饒恕） | 8% | +5% if Boss |
| 饒恕 | 和平解決戰鬥 | 8% | +5% if Boss |
| 連續戰鬥 | 不休息連打 3 場以上 | 20% | 一次性觸發 |

**保底機制**：每個技能有「未觸發計數器」，每次滿足條件但未觸發時 +1，累計 N 次後必定觸發（避免歐皇/非酋體驗差異過大）。

### 技能列表（10 個技能，分 3 階）

#### 第一階：基礎技（戰鬥 3 場後開始觸發）

| 技能 | 中文 | 觸發條件 | 效果 | 冷卻 |
|------|------|---------|------|------|
| **反擊** | 石膚反擊 | 受傷時觸發 | 被攻擊後自動反擊，造成 STR×0.8 傷害 | 每場 1 次 |
| **蓄力** | 石錘蓄力 | 暴擊時觸發 | 消耗本回合行動，下回合攻擊 3x（取代觀察的 2x） | 3 回合 |
| **石盾** | 石化護壁 | 受傷(HP<30%)時觸發 | 下一次受到的傷害減半 | 每場 1 次 |

#### 第二階：進階技（等級 ≥ 3 且已學 ≥ 2 個一階技）

| 技能 | 中文 | 觸發條件 | 效果 | 冷卻 |
|------|------|---------|------|------|
| **連擊** | 裂石連擊 | 暴擊時觸發 | 一回合攻擊 2 次（第二次傷害 60%） | 3 回合 |
| **石化共鳴** | 石脈共振 | 感應成功時觸發 | 利用石化能量攻擊，造成 WIL×1.5 傷害 + 敵人石化 | 2 回合 |
| **看破** | 石眼看破 | 觀察成功時觸發 | 觀察後永久標記敵人弱點，本場戰鬥所有攻擊 +30% | 每場 1 次 |
| **吸收** | 石化吸收 | 受傷時觸發 | 將受到的石化傷害轉為 HP 回復（petriDmg → HP） | 4 回合 |

#### 第三階：覺醒技（等級 ≥ 5 且已學 ≥ 4 個技能）

| 技能 | 中文 | 觸發條件 | 效果 | 冷卻 |
|------|------|---------|------|------|
| **石化爆發** | 深淵脈動 | 擊殺/饒恕時觸發 | 消耗 10% 石化度，對敵人造成 (petri×2) 固定傷害 | 每場 1 次 |
| **不屈** | 石心不屈 | 受傷(HP<30%)時觸發 | HP 歸零時自動觸發，恢復 20% HP + 1 回合無敵（每場限 1 次） | 每場 1 次 |
| **全觀** | 石眼全觀 | 觀察成功時觸發 | 本回合免費：觀察 + 攻擊同時進行（2x 傷害不消耗觀察 buff） | 5 回合 |

### 解鎖演出

技能觸發時中斷正常戰鬥流程，插入一段特殊演出：

```javascript
// 演出格式（插入 combat log）
{
  tag: '覺醒', tagColor: 'tag-petri',
  html: '<div class="skill-unlock">⚡ 石膚反擊 ⚡</div>',
  text: '你的身體記住了這種痛——石化的皮膚在被擊中的瞬間自動回彈！',
  textEn: 'Your body remembers the pain — petrified skin rebounds the instant it\'s struck!',
  delay: 3000,
  effect: function() { sfx.levelUp(); notify(L('習得技能：石膚反擊！', 'Skill learned: Stone Counter!')); }
}
```

- 螢幕閃爍 + 升級音效（`sfx.levelUp()`）
- 技能名稱大字顯示（CSS 動畫）
- 簡短的敘事描寫（配合當前石化/深淵主題）
- **不中斷戰鬥**：演出後直接回到行動選擇，新技能立即可用

### 技術實裝方案

#### 資料結構

```javascript
// state.js 擴充
state.skills = [];           // 已解鎖技能 ID 陣列，如 ['counter', 'charge', ...]
state.flags._skillPity = {}; // 保底計數器，如 { counter: 3, charge: 1 }
state.flags._combatCount = 0; // 累計戰鬥場次（跨存檔）

// 技能定義（新檔案 js/skills.js）
var SKILLS = {
  counter:   { tier: 1, zh: '石膚反擊', en: 'Stone Counter',   trigger: 'hurt',    baseRate: 0.15, pity: 8,  reqCombats: 3, reqLevel: 1, reqSkills: 0 },
  charge:    { tier: 1, zh: '石錘蓄力', en: 'Stone Charge',    trigger: 'crit',    baseRate: 0.15, pity: 8,  reqCombats: 3, reqLevel: 1, reqSkills: 0 },
  shield:    { tier: 1, zh: '石化護壁', en: 'Stone Shield',    trigger: 'lowHp',   baseRate: 0.12, pity: 10, reqCombats: 3, reqLevel: 1, reqSkills: 0 },
  combo:     { tier: 2, zh: '裂石連擊', en: 'Rift Combo',      trigger: 'crit',    baseRate: 0.15, pity: 10, reqCombats: 8, reqLevel: 3, reqSkills: 2 },
  resonance: { tier: 2, zh: '石脈共振', en: 'Vein Resonance',  trigger: 'commune', baseRate: 0.10, pity: 12, reqCombats: 8, reqLevel: 3, reqSkills: 2 },
  pierce:    { tier: 2, zh: '石眼看破', en: 'Stone Pierce',    trigger: 'observe', baseRate: 0.10, pity: 12, reqCombats: 8, reqLevel: 3, reqSkills: 2 },
  absorb:    { tier: 2, zh: '石化吸收', en: 'Petri Absorb',    trigger: 'hurt',    baseRate: 0.12, pity: 12, reqCombats: 8, reqLevel: 3, reqSkills: 2 },
  burst:     { tier: 3, zh: '深淵脈動', en: 'Abyss Pulse',     trigger: 'kill',    baseRate: 0.08, pity: 15, reqCombats: 15, reqLevel: 5, reqSkills: 4 },
  undying:   { tier: 3, zh: '石心不屈', en: 'Stone Resolve',   trigger: 'lowHp',   baseRate: 0.12, pity: 12, reqCombats: 15, reqLevel: 5, reqSkills: 4 },
  omnisight: { tier: 3, zh: '石眼全觀', en: 'Omnisight',       trigger: 'observe', baseRate: 0.10, pity: 15, reqCombats: 15, reqLevel: 5, reqSkills: 4 },
};
```

#### combat.js 擴充

```javascript
// 戰鬥選項動態生成
function buildCombatChoices() {
  var choices = [
    { text: atkLabel, action: doAttack },
    { text: L('觀察 [敏捷]', 'Observe [AGI]'), action: doObserve },
    { text: L('感應 [意志]', 'Commune [WIL]'), action: doCommune },
  ];
  // 動態插入已解鎖技能
  if (hasSkill('charge') && !cooldowns.charge)
    choices.splice(1, 0, { text: L('🔨 蓄力 (3x)', '🔨 Charge (3x)'), action: doCharge });
  if (hasSkill('resonance') && !cooldowns.resonance)
    choices.splice(-1, 0, { text: L('💎 石脈共振', '💎 Resonance'), action: doResonance });
  if (hasSkill('burst') && !cooldowns.burst && state.petri >= 10)
    choices.push({ text: L('🌋 深淵脈動 [-10%石化]', '🌋 Abyss Pulse [-10% petri]'), action: doBurst });
  // ... 逃跑放最後
  if (onFlee) choices.push({ text: L('逃跑', 'Flee'), action: doFlee });
  return choices;
}

// 回合結束時判定技能解鎖（僅 NG+）
function checkSkillUnlock(triggerType) {
  if (!state.flags.ngPlus) return; // 一周目不觸發
  var candidates = getUnlockCandidates(triggerType); // 過濾前置條件
  if (candidates.length === 0) return;
  var skill = candidates[0]; // 優先判定最接近保底的
  var rate = skill.baseRate + levelBonus + pityBonus;
  if (Math.random() < rate || state.flags._skillPity[skill.id] >= skill.pity) {
    unlockSkill(skill.id); // 加入 state.skills，播放演出
  } else {
    state.flags._skillPity[skill.id] = (state.flags._skillPity[skill.id] || 0) + 1;
  }
}
```

#### 被動技能處理

被動技能（反擊、石盾、吸收、不屈）不需要玩家選擇，在相應時機自動觸發：

```javascript
// doAttack() 內，敵人攻擊後：
if (hasSkill('counter') && !cooldowns.counter) {
  var counterDmg = Math.floor(effectiveStat('str') * 0.8);
  enemyHp -= counterDmg;
  cooldowns.counter = true;
  log += '【石膚反擊】你的石化皮膚自動回彈！造成 ' + counterDmg + ' 反擊傷害。';
}

// changeHp() 攔截：
if (hasSkill('undying') && !cooldowns.undying && state.hp + delta <= 0) {
  state.hp = Math.floor(state.maxHp * 0.2);
  cooldowns.undying = true;
  // 插入演出：你拒絕倒下...
  return false; // 沒有死亡
}
```

### 與現有系統的整合

| 系統 | 整合方式 |
|------|---------|
| **石化懲罰** | 石化度高時，部分技能的觸發機率降低（stage 3+ 機率 ×0.7），但「深淵脈動」和「石化吸收」反而更容易觸發 |
| **NG+** | **一周目完全不啟用**（`if (!state.flags.ngPlus) return;`）。技能跨周目保留（存入 `globalStats.unlockedSkills`），NG+ 開局自帶上周目技能 |
| **裝備系統** | 部分飾品可增加技能觸發機率或降低冷卻 |
| **成就系統** | 新增成就：「初次覺醒」（學會第一個技能）、「石之武者」（學會全部 10 個）、「一擊必殺」（深淵脈動秒殺 Boss） |
| **結局卡** | 結局卡顯示已學技能數量 + 最稀有技能名稱 |
| **存檔** | `state.skills` 和 `_skillPity` 自動隨 saveGame() 保存 |

### 檔案規劃

- `js/skills.js`（新檔案）：技能定義、觸發判定、解鎖演出、冷卻管理
- `js/combat.js`：擴充行動選項 + 回合結束觸發 `checkSkillUnlock()`
- `js/state.js`：`state.skills = []` 初始化
- `js/save.js`：確保 skills 陣列正確序列化/反序列化
- `index.html`：在 `combat.js` 之前載入 `skills.js`
- `css/style.css`：`.skill-unlock` 動畫樣式

### UI 顯示

- 戰鬥介面：已解鎖的主動技能作為額外行動按鈕（帶冷卻計數）
- 被動技能觸發時在 combat log 中顯示特殊顏色標籤 `[石膚反擊]`
- 狀態列：小圖示顯示已學技能數 `⚔ 3/10`
- 技能面板（新 UI）：查看已學/未學技能列表 + 觸發條件提示（模糊提示，不直接告訴機率）

## 待實裝：故事內容擴展計畫（目標：節點數 ×2）

目前全遊戲約 109 個劇情節點（R0:23 + R1:34 + R2:29 + R3:23），目標擴展至 ~220 個。
擴展策略分 5 大方向，優先順序由上往下。

### 方向一：冥河深淵 R4 新區域（+30~40 節點）

渡江人路線目前只有「敬請期待」。開發完整的第五區域。

**R4 — 冥河深淵（古代封印層）**

| 類型 | 節點數 | 說明 |
|------|-------|------|
| 主線 | 12-15 | 渡河→古代神殿遺跡→封印核心→瘟疫起源真相→最終抉擇 |
| NPC | 6-8 | 渡江人深度對話、古代守護者殘魂（新 NPC）、螢/灰鶴/老周的 R4 變體（若同行） |
| Boss | 3 | 封印守衛（中 Boss）、瘟疫之源（主 Boss）、真正的自己（石化分身，隱藏 Boss） |
| 探索 | 8-10 | 古代實驗室、石化標本室、失落文明壁畫、冥河支流、深淵底部 |
| 結局 | 2-3 | 新增「根治」結局（徹底消除瘟疫）、「共生」結局（與石化共存）、「深淵之主」結局（擁抱石化成為新的守護者） |

**R4 世界觀擴展：**
- 揭露石化瘟疫的真正起源——不是天災，而是古代文明的能量實驗失控
- 「封印」其實是控制裝置，歷代守護者用自己的身體維持封印（渡江人就是上一任）
- 最終抉擇：犧牲自己成為新封印 vs. 破壞裝置解放所有人（但瘟疫可能擴散到地表）
- NG+ 高周目玩家可以發現「第三條路」——利用技能系統的石化能量重新校準裝置

**R4 怪物池（6 隻新怪物）：**
- 封印碎片（自律型石化結晶）、深淵水蛭（巨型）、古代衛兵殘骸、冥河魚群、石化胎兒（未完成的實驗體）、記憶幻影（玩家過去的石化投影）

### 方向二：NPC 支線任務鏈（+25~35 節點）

每位主要 NPC 增加一條 3~6 節點的個人支線，揭露其背景故事並影響結局。

#### 螢的秘密（+6 節點）
- `r2_ying_secret` — 螢的筆記本裡藏著什麼？偷看 vs. 正面詢問
- `r2_ying_past` — 螢揭露自己的真實身分：不是普通記錄員，而是議會派下來的調查員
- `r2_ying_choice` — 她的任務是「評估下層是否該被封鎖」。她的報告決定了數千人的命運
- `r3_ying_conflict` — 在河城，螢面臨立場衝突：寫真實報告（幫助下層）vs. 完成上級命令（封鎖）
- `r3_ying_confession` — 好感度夠高時，她向你坦白一切——「我原本該封鎖你們的通道」
- `r3_ying_resolve` — 她的最終選擇（影響結局 score +3 或 -2）

#### 灰鶴的過去（+5 節點）
- `r2_crane_scar` — 灰鶴手臂上的放血刀疤：她曾是地表人，為了逃債躲進深淵
- `r2_crane_debt` — 債主的手下追到了大採石場（觸發特殊戰鬥或 WIL 說服）
- `r3_crane_merchant` — 灰鶴在河城有一個秘密倉庫，裡面是她走私的物資
- `r3_crane_past` — 她的真名不是灰鶴。她在地表有一個等她回去的人
- `r3_crane_deal` — 最終交易：她把所有走私物資捐給議會換取赦免（影響結局 score +2）

#### 老周的腿（+4 節點）
- `r1_zhou_memory` — 老周在通風管裡刻的字不只是求生記錄——裡面藏著礦難真相
- `r2_zhou_trace_deep` — 採石場裡發現老周留下的更多線索：礦難是人為造成的
- `r3_zhou_truth` — 老周在河城重逢時，終於說出真相：監工 K 為了開採石化結晶，故意引爆了封印
- `r3_zhou_justice` — 老周想公開真相。支持他（獲得關鍵證據）vs. 勸他保密（保護他的安全）

#### 鐵霜的戰爭（+4 節點）
- `r2_frost_past` — 鐵霜曾是地表軍隊的指揮官，因為拒絕執行屠殺命令而被流放到地下
- `r2_frost_soldier` — 營地裡有一個倖存的士兵認出了她——他是當年的敵方
- `r2_frost_choice` — 鐵霜要處決他還是饒恕他？玩家介入的機會
- `r2_frost_letter` — 鐵霜給玩家一封信，帶給河城的某個人（支線影響 R3 議會態度）

#### 銅鐘的代價（+5 節點）
- `r3_bell_night` — 深夜造訪銅鐘辦公室，發現她獨自一人在哭——石化的右手疼痛難忍
- `r3_bell_medicine` — 清露有一種藥可以暫時緩解石化疼痛，但需要稀有材料
- `r3_bell_weakness` — 銅鐘第一次在你面前展現脆弱：「有時候我真的撐不下去了」
- `r3_bell_secret` — 銅鐘的秘密：她知道封鎖通道的真正原因——議會裡有人在利用石化結晶牟利
- `r3_bell_alliance_deep` — 深度同盟：銅鐘把所有底牌攤給你看（解鎖議會投票的隱藏加分項）

#### 承鋼的覺醒（+3 節點）
- `r2_cheng_memory` — 承鋼恢復意識後，記起了自己被石化前的最後記憶——他是封印的研究員
- `r2_cheng_lab` — 承鋼帶你去他的隱藏實驗室，裡面有石化瘟疫的完整研究數據
- `r2_cheng_cure` — 承鋼認為可以用石化結晶逆轉瘟疫——但需要活體實驗（倫理抉擇）

### 方向三：區域探索擴充（+20~25 節點）

每個現有區域增加 5-6 個可選探索節點，增加地圖深度。

#### R0 祭獻坑（+5）
- `r0_pool` — 坑底的積水池：潛水探索，發現古代獻祭品（+物品）
- `r0_echo` — 迴音走廊：聽到過去祭獻者的聲音，選擇回應 or 無視（WIL 檢定，影響石化度）
- `r0_bones` — 骨堆深處：翻找骨堆發現一本半腐爛的日記——第一批感染者的記錄
- `r0_altar` — 破損祭壇：嘗試使用祭壇（STR/WIL 二選一），成功可降低石化度
- `r0_mural` — 壁畫牆：描繪古代文明從繁榮到石化毀滅的過程，提供世界觀線索

#### R1 石脈迴廊（+6）
- `r1_minecart` — 廢棄礦車軌道：修好礦車可以快速穿越迴廊（AGI 檢定，失敗會受傷）
- `r1_underground_river` — 地下河：沿河探索發現隱藏洞穴，裡面有倖存者留下的物資
- `r1_collapse` — 坍塌區域：冒險穿過（STR 檢定），另一側有高品質裝備
- `r1_shrine` — 礦工祠堂：礦工們建造的簡易神龕，祈禱可恢復 HP（每遊戲限 1 次）
- `r1_vein_deep` — 石脈深處：結晶密度極高的區域，採集有豐厚獎勵但石化風險大
- `r1_ghost` — 礦工幽靈：一個不知道自己已經石化的「人」，與他對話揭露礦難細節

#### R2 大採石場（+6）
- `r2_elevator` — 廢棄升降機：修復後可以到達採石場的最高平台（俯瞰全景 + 隱藏物品）
- `r2_laboratory` — 石化實驗室：散落的實驗設備和筆記，記錄了石化結晶的軍事用途
- `r2_garden` — 地底花園：倖存者嘗試在石化土壤中種植——草藥來源（可補給）
- `r2_arena` — 角鬥場遺跡：古代文明用石化生物進行角鬥的場所，可挑戰特殊 Boss
- `r2_waterfall` — 地下瀑布：瀑布後有一個安靜的洞穴，是絕佳的休息點（HP + 石化度恢復加成）
- `r2_mural_war` — 戰爭壁畫：描繪古代石化武器的使用，為技能系統提供劇情呼應

#### R3 河城渡口（+6）
- `r3_underground` — 河城地下通道：黑市交易 + 情報收集（可提前獲得議會投票線索）
- `r3_temple` — 石化神殿：河城居民信仰的「石之母」——宗教儀式可降石化度，但有代價
- `r3_library` — 河城圖書館：檔案中找到石化瘟疫的歷史記錄 + 隱藏的議會醜聞文件
- `r3_slum` — 下城區：被石化度較高的居民聚居的貧民區，了解底層視角
- `r3_garden_r3` — 議會花園：銅鐘/螢/灰鶴的休閒互動場景（好感度事件）
- `r3_prison` — 河城監獄：關押著反對派，可以幫忙越獄或審問（影響議會投票）

### 方向四：NG+ 專屬劇情分歧（+15~20 節點）

二周目以上玩家在關鍵節點解鎖全新選項和對話。

| 觸發點 | NG+ 新增內容 | 影響 |
|--------|-------------|------|
| R0 開場 | 記憶閃回更加清晰——可以選擇「跳過教學」直奔 R1 門口 | 節省時間，但錯過新增探索內容 |
| R1 螢初遇 | 「我認識你」選項——螢震驚，觸發獨特對話線 | 好感度直接 +2，解鎖獨特支線 |
| R1 老周 | 直接告訴老周「你以後會到河城」——老周以為你瘋了 | 老周在 R3 多一段回憶對話 |
| R1 灰鶴 | 骰局開始就坐她旁邊——「我知道你的底牌」 | 灰鶴警戒提升，骰子 AI 更強 |
| R2 Boss | 直接叫出石化巨像的名字「承鋼」 | 跳過 Boss 戰，直接觸發對話 |
| R2 承鋼 | 告訴承鋼「你上一世教過我」 | 承鋼更快信任你，解鎖更多研究數據 |
| R3 銅鐘 | 第一次見面就說出三個任務的內容 | 銅鐘震驚+懷疑，好感度變化取決於說服力（WIL） |
| R3 鏽刃 | 告訴鏽刃「封鎖通道救不了任何人，我有證據」 | 可能跳過 Boss 戰，直接進入議會 |
| R3 投票 | 引用上一世的經歷作為證詞 | 議會 score +2（但部分議員不信，+1 爭議點） |

### 方向五：隨機敘事事件（+10~15 節點）

巡邏時觸發的非戰鬥隨機事件，增加探索的驚喜感。每區域 3-4 個獨特事件。

| 區域 | 事件 | 類型 | 結果 |
|------|------|------|------|
| R0 | 石化雕像突然動了——它在求救 | 道德 | 幫助 → 獲得物品 + 石化度+3；無視 → 無事 |
| R0 | 牆壁裂縫裡漏出微光 | 探索 | AGI 檢定鑽進去 → 隱藏寶箱 |
| R0 | 聽到遠處有人在唱歌 | 氛圍 | 跟隨 → 發現已石化的歌者，獲得其遺物 |
| R1 | 一隻未石化的貓 | 關係 | 餵食 → 之後它會在戰鬥中偶爾出現（分散敵人注意） |
| R1 | 礦車突然啟動 | 緊張 | AGI 閃避 or STR 攔停，失敗受傷 |
| R1 | 遇到一面完整的鏡子 | 敘事 | 鏡中的自己石化程度比現實更深——暗示什麼？ |
| R2 | 發現一個還在運作的自動販賣機 | 幽默 | 投入金幣，隨機獲得物品或被坑 |
| R2 | 營火旁有人在說故事 | 情報 | 聽完獲得地圖碎片（標記隱藏節點） |
| R2 | 一場突如其來的地震 | 危機 | 跑 vs. 躲，不同結果 |
| R3 | 酒館裡的賭局 | 金幣 | 新的小賭局（非骰子），贏了加金幣 |
| R3 | 碼頭邊一個小孩在偷東西 | 道德 | 舉報 / 幫忙 / 無視，影響市場 NPC 態度 |
| R3 | 收到一封匿名信 | 懸疑 | 引向隱藏的議會陰謀線索 |

### ✅ 已完成：隨機敘事事件系統（v2.0.2）

**狀態**：全部完成（引擎 + 12 個事件定義 + 註冊）

#### 系統設計

- 整合進現有 `runPatrolCycle()`，每次巡邏循環有 **25% 機率**觸發敘事事件取代戰鬥
- 每個事件有唯一 flag（如 `state.flags._evt_r0_statue`），**每周目只觸發一次**
- 當該區域所有事件都已觸發時，回退為正常戰鬥
- 事件使用巡邏系統的 `queue` + `processNext()` 機制渲染（與戰鬥同樣的打字機/pending 效果）
- 事件結束後自動繼續下一輪巡邏循環

#### 資料結構

```javascript
// 每個事件物件格式：
{
  id: 'r0_statue',           // 唯一 ID，用於 flag tracking
  flag: '_evt_r0_statue',    // state.flags 中的 key
  region: 0,                 // 所屬區域
  // buildQueue(queue) — 將事件的敘事步驟推入 queue 陣列
  // 使用與戰鬥相同的 { tag, color, text, html, art, delay, pending, sfx, effect } 格式
  buildQueue: function(queue) { ... }
}

// 每區域事件池：
var R0_EVENTS = [ ... ];  // 3 個事件
var R1_EVENTS = [ ... ];  // 3 個事件
var R2_EVENTS = [ ... ];  // 3 個事件
var R3_EVENTS = [ ... ];  // 3 個事件

function getPatrolEvents() {
  return state.region >= 3 ? R3_EVENTS : state.region >= 2 ? R2_EVENTS
       : state.region >= 1 ? R1_EVENTS : R0_EVENTS;
}
```

#### runPatrolCycle() 修改

```javascript
function runPatrolCycle() {
  if (!patrolActive) return;

  // 25% 機率觸發敘事事件（取代戰鬥）
  var events = getPatrolEvents();
  var available = events.filter(function(e) { return !state.flags[e.flag]; });
  if (available.length > 0 && Math.random() < 0.25) {
    var evt = available[rng(0, available.length - 1)];
    state.flags[evt.flag] = true;  // 標記已觸發
    runNarrativeEvent(evt);
    return;
  }

  // ... 原有戰鬥邏輯 ...
}
```

#### 12 個事件詳細規格

**R0 祭獻坑（3 個事件）：**

| ID | 事件名 | 類型 | 互動 | 結果 |
|----|--------|------|------|------|
| `r0_statue` | 石化雕像求救 | 道德 | 2 選項：幫助(STR DC6) / 無視 | 幫助成功 → 獲得「石心碎片」+石化+3；幫助失敗 → 石化+5；無視 → 無事 |
| `r0_crack_light` | 裂縫微光 | 探索 | AGI DC7 檢定鑽入 | 成功 → 獲得黑麵包+HP回復；失敗 → HP-5 卡住受傷 |
| `r0_singer` | 遠方歌聲 | 氛圍 | 2 選項：跟隨 / 忽略 | 跟隨 → 發現石化歌者遺物（WIL+1）+ 石化+2；忽略 → 無事 |

**R1 石脈迴廊（3 個事件）：**

| ID | 事件名 | 類型 | 互動 | 結果 |
|----|--------|------|------|------|
| `r1_cat` | 未石化的貓 | 關係 | 2 選項：餵食(消耗黑麵包 or 免費) / 忽略 | 餵食 → flag `r1CatFed`，巡邏戰鬥傷害-10%（貓分散敵人）；忽略 → 無事 |
| `r1_minecart` | 失控礦車 | 緊張 | 2 選項：AGI DC7 閃避 / STR DC7 攔停 | AGI 成功 → 無傷；AGI 失敗 → HP-8；STR 成功 → 獲得礦車中的物資（HP藥水）；STR 失敗 → HP-10 |
| `r1_mirror` | 完整鏡子 | 敘事 | 1 選項：注視 / 離開 | 注視 → 看見石化更深的自己，WIL 檢定 DC6：成功 → WIL+1「你不會變成那樣」；失敗 → 石化+3「恐懼侵蝕了你」 |

**R2 大採石場（3 個事件）：**

| ID | 事件名 | 類型 | 互動 | 結果 |
|----|--------|------|------|------|
| `r2_vending` | 古代自動販賣機 | 幽默 | 投入金幣(需 ≥5 金幣) / 離開 | 50% 獲得隨機物品（抗石化藥水/黑麵包/微光石）；50% 被坑（機器吞錢 + 噴石化粉塵 石化+2） |
| `r2_storyteller` | 營火說書人 | 情報 | 聽故事 / 離開 | 聽完 → 獲得世界觀線索（flag `r2LoreHeard`，議會投票 +1 隱藏加分），HP+5 |
| `r2_quake` | 突發地震 | 危機 | 2 選項：跑(AGI DC7) / 躲(STR DC7) | AGI 成功 → 無傷 + 發現震出的寶物（金幣+3）；AGI 失敗 → HP-8；STR 成功 → 護住自己 + 發現地縫中的結晶（XP+10）；STR 失敗 → HP-12 + 石化+3 |

**R3 河城渡口（3 個事件）：**

| ID | 事件名 | 類型 | 互動 | 結果 |
|----|--------|------|------|------|
| `r3_gamble` | 碼頭賭局 | 金幣 | 參加(需 ≥3 金幣) / 離開 | 骰大小：玩家擲 d6，≥4 贏（金幣+5）；<4 輸（金幣-3）；暴擊6 贏雙倍（金幣+8） |
| `r3_thief_kid` | 偷東西的小孩 | 道德 | 3 選項：舉報 / 幫忙掩護 / 無視 | 舉報 → 商人感謝（金幣+3）但小孩被打；幫忙 → 小孩感謝 flag `r3KidHelped`（後續議會場景可作為底層證人）；無視 → 無事 |
| `r3_letter` | 匿名信 | 懸疑 | 打開 / 丟棄 | 打開 → 獲得議會陰謀線索 flag `r3AnonLetter`（銅鐘對話新選項），WIL+1；丟棄 → 無事 |

#### 事件中的 ASCII Art 風格

每個事件都需要配 ASCII art，風格參照：
- 物件/場景類 → 40-60 字元寬，用 box-drawing + 符號
- 與現有巡邏怪物 art 風格統一（暗黑奇幻地下城）

#### 需修改的檔案

1. **`js/patrol.js`**：
   - 新增 `R0_EVENTS`, `R1_EVENTS`, `R2_EVENTS`, `R3_EVENTS` 事件池
   - 新增 `getPatrolEvents()` 輔助函式
   - 新增 `runNarrativeEvent(evt)` 函式（用巡邏的 queue 機制渲染事件 + 選項）
   - 修改 `runPatrolCycle()`：開頭加 25% 事件觸發判定
2. **`js/save.js`**：無需修改（事件 flags 已存在 `state.flags` 中，自動隨存檔保存）
3. **`css/style.css`**：可能新增 `.tag-event` 標籤顏色（事件專用金色標籤）
4. **`index.html`**：版本號更新

#### runNarrativeEvent() 實裝模板

```javascript
function runNarrativeEvent(evt) {
  // 建構敘事步驟 queue
  var queue = [];

  // 1-2 巡邏文字（與戰鬥相同）
  var patrolPool = getPatrolTexts();
  var p = patrolPool[rng(0, patrolPool.length - 1)];
  queue.push({ tag: L('巡邏','Patrol'), color: 'tag-move',
    text: L(p.text, p.textEn), delay: rng(1500, 2300) });

  // 事件自己的步驟（由 buildQueue 填充）
  evt.buildQueue(queue);

  // 處理 queue（與戰鬥相同的 processNext 邏輯）
  var qi = 0;
  function processNext() {
    if (!patrolActive) return;
    if (qi >= queue.length) {
      // 事件結束，繼續巡邏
      patrolTimers.push(setTimeout(runPatrolCycle, 1500));
      return;
    }
    var step = queue[qi++];
    // ... 與現有 processNext 相同的 pending + render 邏輯 ...
    // 如果 step.choices 存在，暫停巡邏顯示選項按鈕
  }
  processNext();
}
```

#### 事件選項（中斷巡邏讓玩家選擇）

部分事件需要玩家做選擇。實裝方式：
- queue 步驟中加入 `choices: [{ text, textEn, action }]` 欄位
- 當 processNext 遇到 choices 步驟時，暫停自動推進，顯示選項按鈕
- 玩家選擇後，action 函式執行效果 + 推入後續步驟 + 恢復巡邏

```javascript
// choices 步驟格式
{
  tag: '抉擇', color: 'tag-info',
  text: L('你要怎麼做？', 'What do you do?'),
  choices: [
    { text: '幫助它', textEn: 'Help it',
      action: function() {
        // 執行效果 + 推入後續敘事
        var result = statCheck('str', 6);
        if (result !== 'fail') {
          addItem(L('石心碎片', 'Stone Heart Shard'));
          changePetri(3);
          patrolAppend(L('事件','Event'), 'tag-event',
            L('你成功撬開了石化的外殼！', 'You pry open the petrified shell!'), false);
        } else {
          changePetri(5);
          patrolAppend(L('事件','Event'), 'tag-event',
            L('你沒能幫上忙，石化粉塵沾染了你。', 'You fail to help, petri-dust coats you.'), false);
        }
        renderStatus();
        // 恢復巡邏
        patrolTimers.push(setTimeout(runPatrolCycle, 2500));
      }
    },
    { text: '走開', textEn: 'Walk away',
      action: function() {
        patrolAppend(L('巡邏','Patrol'), 'tag-move',
          L('你決定不介入，繼續前進。', 'You decide not to intervene and move on.'), false);
        patrolTimers.push(setTimeout(runPatrolCycle, 2000));
      }
    }
  ]
}
```

### 擴展節點預估

| 方向 | 新增節點 | 優先級 | 開發量 |
|------|---------|--------|--------|
| R4 冥河深淵 | 30-40 | ★★★★★ | 大（新區域+結局） |
| NPC 支線任務 | 25-35 | ★★★★★ | 中（擴充現有 NPC） |
| 區域探索擴充 | 20-25 | ★★★★ | 中（每區 +5-6 節點） |
| NG+ 劇情分歧 | 15-20 | ★★★ | 小（分歧選項+對話） |
| 隨機敘事事件 | 10-15 | ★★★ | 小（獨立事件） |
| **合計** | **100-135** | — | — |

### 實裝順序建議

1. **NPC 支線** → 對現有內容影響最小，可逐步加入，立即增加深度
2. **區域探索** → 與支線同步，豐富每個區域的可玩性
3. **隨機事件** → 開發量小，快速增加重玩價值
4. **NG+ 分歧** → 需要已有的 NG+ 框架，適合在其他內容穩定後加入
5. **R4 冥河深淵** → 最大最完整的新內容，作為最終更新

### 開發注意事項

- 所有新節點遵循 `r{region}_{描述}` 命名慣例
- 每個節點必須有 ASCII art + 中英雙語
- NPC 支線需要新增對應的 flags（如 `r2YingSecret`, `r3BellNight` 等）
- 新結局需要更新 `endcard.js` 的結局卡設計 + `stats.js` 的統計追蹤
- R4 需要新增 `js/story/region4.js` + `patrol.js` 的 R4 怪物池 + `audio.js` 的 R4 音景
- 隨機事件建議放在 `patrol.js` 中，與現有巡邏系統整合（非戰鬥事件也通過巡邏觸發）

## ✅ 已完成：ASCII 美術圖全覆蓋

全遊戲 98 個劇情節點 + 16 隻巡邏怪物 + 結局卡，全部 **100% 有 ASCII art**。

### 各區域覆蓋率

| 區域 | 節點總數 | 覆蓋率 |
|------|---------|--------|
| R0 祭獻坑 | 17 (+6 隱藏) | 100% |
| R1 石脈迴廊 | 34 | 100% |
| R2 大採石場 | 27 | 100% |
| R3 河城渡口 | 23 | 100% |

### NPC 肖像設計

每個 NPC 有像素肖像（`portrait.js`），圖片存在時優先顯示，否則 fallback 到 ASCII art：

| 角色 | 像素圖 | 色彩光暈 | 出現次數 |
|------|--------|---------|---------|
| 螢 Ying | ying.png | cyan | 14 處 |
| 老周 Old Zhou | zhou.png | gold | 6 處 |
| 灰鶴 Grey Crane | crane.png | gold | 5 處 |
| 鐵霜 Iron Frost | frost.png | — | 2 處 |
| 老鑄 Old Cast | cast.png | — | 1 處 |
| 承鋼 Cheng Gang | cheng.png | — | 2 處 |
| 清露 Dew | dew.png | cyan | 1 處 |
| 銅鐘 Bronze Bell | bell.png | — | 5 處 |
| 冥河渡江人 Ferryman | ferryman.png | purple | 5 處 |
| 占卜師 Diviner | diviner.png | purple | 1 處（Game Over） |
| 老船長 Captain | captain.png | — | 1 處 |
| 賣水果老婦人 Vendor | vendor.png | — | 1 處 |
| 河畔居老闆娘 Landlady | landlady.png | — | 1 處 |
| 守衛 Guard | guard.png | — | 1 處 |

### 美術風格指引（新增內容時參考）

- 使用 `<pre class="ascii-art">` 包裹，寬度建議 40-60 字元內（手機相容）
- 用半形 box-drawing 字元（╔═╗║╚╝├┤┬┴┼）和符號（·˚✦░▓█）
- 風格統一為暗黑奇幻地下城風格
- 每個 art 需提供 `art` + `artEn`（通常可共用同一份 ASCII 圖，僅文字標註不同）
- NPC 肖像使用無框開放式設計（不要用 ╔══╗ 方框包圍）
- 同一 NPC 跨區域復用同一肖像設計，保持視覺一致性

### 像素肖像系統（v2.0 方案 B：NPC 像素圖 + 場景/怪物 ASCII art）

**架構**：`js/portrait.js` 提供 `npcPortrait.art(id, opts)` API，圖片存在時顯示像素圖，不存在時自動 fallback 到 ASCII art。場景和怪物維持原有 ASCII art 不變。

**詳細 Recraft prompt 指南**：參見 `NPC_ART_PROMPTS.md`

#### 檔名規範（`assets/npc/` 目錄）

**主角：**

| 檔名 | 角色 | 尺寸 |
|------|------|------|
| `player_male.png` | 主角（男） | 256×256 |
| `player_female.png` | 主角（女） | 256×256 |

**主要 NPC：**

| 檔名 | 角色 | 說明 | 尺寸 |
|------|------|------|------|
| `ying.png` | 螢 | 記錄員，cyan 光暈 | 512×256 |
| `zhou.png` | 老周 | 倖存礦工，gold 光暈 | 512×256 |
| `crane.png` | 灰鶴 | 行商人，gold 光暈 | 512×256 |
| `frost.png` | 鐵霜 | 營地首領 | 512×256 |
| `cast.png` | 老鑄 | 鐵匠 | 512×256 |
| `cheng.png` | 承鋼 | 研究員，鐵霜的伴侶 | 512×256 |
| `dew.png` | 清露 | 醫師，cyan 光暈 | 512×256 |
| `bell.png` | 銅鐘 | 議會代表 | 512×256 |
| `ferryman.png` | 冥河渡江人 | 隱藏 NPC，purple 光暈 | 512×256 |
| `diviner.png` | 占卜師 | Game Over NPC，purple 光暈 | 512×256 |

**次要 NPC：**

| 檔名 | 角色 | 尺寸 |
|------|------|------|
| `captain.png` | 老船長 | 512×256 |
| `vendor.png` | 賣水果老婦人 | 512×256 |
| `landlady.png` | 河畔居老闆娘 | 512×256 |
| `guard.png` | 議會廳守衛 | 512×256 |

**結局卡塔羅牌背景：**

| 檔名 | 結局 | 角色 | 尺寸 |
|------|------|------|------|
| `endcard_dawn.png` | 黎明 | 螢 | 500×769 |
| `endcard_sacrifice.png` | 犧牲 | 老周 | 500×769 |
| `endcard_compromise.png` | 妥協 | 銅鐘 | 500×769 |
| `endcard_lockdown.png` | 封鎖 | 鐵霜 | 500×769 |
| `endcard_death.png` | 死亡 | 占卜師 | 500×769 |

#### 圖片規格

- **NPC 肖像**：512×256 px（2:1 寬幅），黑白 pixel art，黑底
- **主角肖像**：256×256 px（1:1 正方形），用於 UI 面板頭像
- **結局卡背景**：500×769 px（塔羅牌直式），含精緻邊框
- **格式**：PNG，黑色背景
- **風格**：pixel art, dark fantasy, 4-shade grayscale (black/dark-grey/light-grey/white)
- **生成工具**：Recraft（pixel art style），用灰鶴（crane.png）作為 style reference
- **CSS 渲染**：滿版寬度，radial-gradient 邊緣融合遮罩

#### 程式碼用法

```javascript
// NPC 肖像（自動 fallback ASCII art）
{ art: npcPortrait.art('ying', { subtitle: '記錄員' }) || `<pre class="ascii-art cyan">...</pre>`,
  artEn: npcPortrait.art('ying', { subtitle: 'Chronicler' }) || `<pre class="ascii-art cyan">...</pre>` }

// 主角肖像（自動依 state.sex 選擇 male/female）
{ art: npcPortrait.playerHtml({ subtitle: '爐灶少年' }) || `<pre class="ascii-art">...</pre>` }

// endcard.js canvas 繪製
var img = npcPortrait.getImage('ying');  // → Image element or null

// UI 面板頭像（avatar.js 自動處理）
// renderAvatar() 自動檢測像素圖，fallback ASCII 表情動畫
```

#### 新增角色時

1. 在 `js/portrait.js` 的 `PORTRAITS` 物件中新增條目
2. 將 PNG 放入 `assets/npc/` 目錄（尺寸按上方規格）
3. 在故事節點中使用 `npcPortrait.art('id', { subtitle: '稱號' }) || \`ASCII fallback\``
4. 用 `NPC_ART_PROMPTS.md` 中的統一模板生成 Recraft prompt

## API 速查表

### 狀態物件 (`state.js`)

```javascript
state = {
  name: '旅者', sex: 'male',
  hp: 50, maxHp: 50, petri: 0,      // petri: 0-100，到 100 即石化死亡
  str: 5, agi: 5, wil: 5,           // 三圍屬性
  xp: 0, level: 1, xpToNext: 20,
  inventory: [],                      // 物品名稱陣列
  region: 0, maxRegion: 0,            // 目前位置 / 到達過的最高區域
  node: 'start',
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

// 屬性檢定（自動套用石化懲罰）
statCheck(stat, dc)         // → 'crit' | 'pass' | 'fail'（d6 + effectiveStat vs DC）
checkRate(stat, dc)         // → 百分比（顯示成功率用）
effectiveStat(stat)         // → 套用石化懲罰後的屬性值（min 1）
petriPenalty()              // → { stage, str, agi, wil, maxHpMult }

// HP / 石化度
changeHp(delta)             // → true 表示死亡
changePetri(delta)          // → true 表示完全石化（含階段警告 + maxHp 調整）
changeStat(stat, delta)     // 永久屬性變動
getBaseMaxHp()              // → 基礎最大 HP（考慮 NG+ 周目和等級）

// NG+ 怪物倍率
getNgPlusScale()            // → 1 / 2 / 4 / 8...
scaleEnemyNgPlus(enemy)     // → 倍率調整後的敵人淺拷貝
calculateBankedPoints()     // → 當前周目可儲存的轉換點數

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
