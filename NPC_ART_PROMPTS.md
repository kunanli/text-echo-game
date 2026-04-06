# NPC 角色像素美術 Prompt 指南

## 統一風格模板

所有角色使用相同的前綴和後綴，中間替換角色描述。

### 模板結構

```
pixel art, dark fantasy, half-body portrait, [角色描述], [背景], 4-shade grayscale only black dark-grey light-grey white, visible pixel grid, no anti-aliasing
```

### 固定後綴

```
dark background, 4-shade grayscale only black dark-grey light-grey white, visible pixel grid, no anti-aliasing
```

如果需要純黑背景（與遊戲 #101018 背景融合）：

```
solid #000000 black background, 4-shade grayscale only black dark-grey light-grey white, visible pixel grid, no anti-aliasing
```

---

## Recraft 設定

- **Style**: Pixel Art
- **Size**: 512×256 px（2:1 寬幅）或 256×256 px（正方形，僅主角用）
- **Style Reference**: 用灰鶴（crane.png）作為基準圖鎖定風格
- **色階限制**: 嚴格 4 階灰度（黑 / 深灰 / 淺灰 / 白）

---

## 已完成角色 Prompt

### 主角

**主角（男） player_male.png — 256×256**
```
pixel art, dark fantasy, half-body portrait, young handsome boy, messy medium hair covering eyes, face half hidden in shadow showing only jaw, hooded tattered scarf wrapped around neck, shirtless lean muscular torso, torn pants with multiple belts and straps, single arm wrapped in bandages, stone crack veins on exposed chest and arms, solid #000000 black background, 4-shade grayscale only black dark-grey light-grey white, visible pixel grid, no anti-aliasing
```

**主角（女） player_female.png — 256×256**
```
pixel art, dark fantasy, half-body portrait, young girl in hooded cloak, face hidden in shadow under hood, only jaw and mouth visible, long hair strands falling from hood, torn revealing clothing showing shoulders and midriff, tattered short cloak, belts and straps across body, stone crack veins on exposed skin, hands at sides, solid #000000 black background, 4-shade grayscale only black dark-grey light-grey white, visible pixel grid, no anti-aliasing
```

### 主要 NPC

**螢 ying.png**
```
pixel art, dark fantasy, half-body portrait, petite young girl, ponytail hair, holding worn notebook to chest, faint glowing vein marks on skin, dark background, 4-shade grayscale only black dark-grey light-grey white, visible pixel grid, no anti-aliasing
```

**老周 zhou.png**
```
pixel art, dark fantasy, half-body portrait, ruggedly handsome middle-aged man, strong jawline, short stubble beard, weathered noble face, right side of face cracked stone texture, mining lamp on forehead, muscular build, worn coat open at chest, dark background, 4-shade grayscale only black dark-grey light-grey white, visible pixel grid, no anti-aliasing
```

**灰鶴 crane.png**
```
pixel art, dark fantasy, half-body portrait, slender young woman, hooded cloak open revealing bare shoulders and midriff, crop top underneath, sly seductive smile, visible scar on forearm, holding bottle, merchant bag over shoulder, slim waist exposed, dark background, 4-shade grayscale only black dark-grey light-grey white, visible pixel grid, no anti-aliasing
```

**鐵霜 frost.png**
```
pixel art, dark fantasy, half-body portrait, muscular tall woman warrior, short cropped hair, stern expression, exposed toned arms and shoulders, sleeveless armor showing cleavage, left arm petrified cracked stone texture, holding large stone hammer, military posture, dark background, 4-shade grayscale only black dark-grey light-grey white, visible pixel grid, no anti-aliasing
```

**承鋼 cheng.png**
```
pixel art, dark fantasy, half-body portrait, handsome young man scholar, gentle intelligent eyes, clean short hair slightly messy, thin build wearing researcher coat, faint stone crack marks across neck and collarbone, holding ancient document scroll, dark background, 4-shade grayscale only black dark-grey light-grey white, visible pixel grid, no anti-aliasing
```

**老鑄 cast.png**
```
pixel art, dark fantasy, half-body portrait, stocky short old blacksmith, thick beard, both hands heavily covered in cracked stone texture, leather apron over bare thick arms, holding hammer, dark background, 4-shade grayscale only black dark-grey light-grey white, visible pixel grid, no anti-aliasing
```

**清露 dew.png**
```
pixel art, dark fantasy, half-body portrait, young woman medic, focused intense eyes, protective face mask covering nose and mouth, thin hands with faint grey vein marks on wrists, holding medicine box with cross symbol, gloves on hands, dark background, 4-shade grayscale only black dark-grey light-grey white, visible pixel grid, no anti-aliasing
```

**銅鐘 bell.png（綱手風）**
```
pixel art, dark fantasy, half-body portrait, tall voluptuous beautiful woman leader like Tsunade from Naruto, large bust, long hair tied in two loose tails, diamond mark on forehead, confident powerful expression, ornate robe with authority, right hand cracked stone texture holding a pen, dark background, 4-shade grayscale only black dark-grey light-grey white, visible pixel grid, no anti-aliasing
```

**冥河渡江人 ferryman.png**
```
pixel art, dark fantasy, half-body portrait, mysterious hooded boatman, skeletal bony hands visible under dark robe, holding dim lantern with faint glow, face hidden in deep hood shadow, tattered ancient robes, dark background, 4-shade grayscale only black dark-grey light-grey white, visible pixel grid, no anti-aliasing
```

### 次要 NPC

**老船長 captain.png**
```
pixel art, dark fantasy, half-body portrait, old weathered sailor man, thick grey beard, smoking pipe, captain hat worn and torn, heavy coat with rope and anchor details, wrinkled face with deep lines, one eye squinting, dark background, 4-shade grayscale only black dark-grey light-grey white, visible pixel grid, no anti-aliasing
```

**賣水果老婦人 vendor.png**
```
pixel art, dark fantasy, half-body portrait, old hunched woman, headscarf covering hair, wrinkled kind face, carrying basket of fruit, worn patched clothing, one hand raised gesturing while talking, dark background, 4-shade grayscale only black dark-grey light-grey white, visible pixel grid, no anti-aliasing
```

**河畔居老闆娘 landlady.png**
```
pixel art, dark fantasy, half-body portrait, sturdy middle-aged woman, thick arms crossed, greasy apron over robust build, hair tied back in messy bun, confident no-nonsense expression, towel over shoulder, dark background, 4-shade grayscale only black dark-grey light-grey white, visible pixel grid, no anti-aliasing
```

**守衛 guard.png**
```
pixel art, dark fantasy, half-body portrait, armored guard soldier, full helmet with visor half open, spear in hand, stone armor plates with petrification cracks, standing at attention, stern mouth visible under helmet, dark background, 4-shade grayscale only black dark-grey light-grey white, visible pixel grid, no anti-aliasing
```

---

## 新角色 Prompt 寫法指南

### 角色描述要素（按重要性排列）

1. **體型** — muscular / slender / stocky / petite / tall
2. **性別特徵** — man / woman / boy / girl / old man / old woman
3. **髮型** — short cropped / long flowing / ponytail / hooded / bald
4. **表情** — stern / sly smile / gentle / fierce / no-nonsense
5. **服裝** — cloak / armor / apron / robe / torn clothing
6. **石化特徵** — cracked stone texture on [部位] / petrification veins / grey vein marks
7. **手持物品** — holding [weapon/tool/item]
8. **姿勢** — arms crossed / standing at attention / military posture

### 注意事項

- **手部問題**：AI 生成像素畫常畫錯手指，加 `simple mitten-style hand` 或 `simple hands with minimal finger detail` 可改善
- **背景融合**：遊戲背景色 `#101018`，用 `dark background` 或 `solid #000000 black background`
- **性感角色**：用 `exposed shoulders / bare midriff / showing cleavage / slim waist exposed` 等描述
- **石化紋路**：每個角色都應有不同程度的石化描述，這是遊戲核心視覺元素
- **風格一致性**：務必用灰鶴（crane.png）作為 Recraft style reference

### 圖片規格

| 類型 | 尺寸 | 用途 |
|------|------|------|
| NPC | 512×256 px | 故事節點肖像（2:1 寬幅） |
| 主角 | 256×256 px | UI 面板頭像（1:1 正方形） |
| 格式 | PNG | 透明或黑色背景 |

### 加入遊戲步驟

1. 用 Recraft 生成圖片（套用 style reference）
2. 放到 `assets/npc/[id].png`
3. 在 `js/portrait.js` 的 `PORTRAITS` 物件新增條目
4. 在故事節點用 `npcPortrait.art('id', { subtitle: '稱號' }) || \`ASCII fallback\``
