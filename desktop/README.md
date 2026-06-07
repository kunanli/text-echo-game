# 石化深淵 PETRIABYSS — Windows 桌面版（Electron）

把純前端遊戲包成一個 **Windows 全屏獨立程式**，並加入 **Playnite** 遊戲庫。

開機即全屏，內建瀏覽器引擎，**離線可玩**，存檔保存在使用者資料夾（不需要安裝任何瀏覽器）。

---

## 一、檔案結構

```
desktop/
  main.js          # Electron 主程序（建立全屏視窗、載入遊戲）
  package.json     # 相依套件 + electron-builder 打包設定
  build/
    icon.ico       # Windows 程式圖示（多尺寸）
    icon.png       # 512×512 圖示母檔
    icon.svg       # 圖示向量原稿
README 在這裡。遊戲本體（index.html / js / css / assets）位於上層目錄，
打包時會被一併收進 .exe（見 package.json 的 extraResources）。
```

## 二、在 Windows 上打包出 .exe

> 需要先安裝 [Node.js 18+](https://nodejs.org/)（含 npm）。整個流程在 **Windows** 上執行最簡單，
> 因為 electron-builder 會直接產生原生 Windows 安裝檔，不需要 wine。

```powershell
# 1. 進入 desktop 目錄
cd desktop

# 2. 安裝相依套件（會下載 Electron，約幾百 MB）
npm install

# 3a. 產生「安裝版 + 免安裝版」兩種 .exe
npm run dist

# 3b. 或只要免安裝（綠色版）單一 exe
npm run dist:portable
```

產物會出現在 `desktop/dist/`：

| 檔案 | 說明 |
|------|------|
| `PETRIABYSS Setup 2.3.4.exe` | NSIS 安裝程式（可選安裝路徑、建立桌面捷徑） |
| `PETRIABYSS-2.3.4-portable.exe` | 免安裝單檔，雙擊即玩 |
| `win-unpacked/PETRIABYSS.exe` | 解包後的可執行檔（資料夾形式） |

### 先在本機跑跑看（不打包）

```powershell
cd desktop
npm install
npm start      # 直接以全屏啟動遊戲
```

## 三、遊戲內操作

| 按鍵 | 功能 |
|------|------|
| `F11` | 切換全屏 / 視窗 |
| `Ctrl + Q` | 離開遊戲 |
| `Alt + F4` | 離開遊戲（Windows 標準） |

存檔（localStorage + Base64 存檔碼）會自動保存在
`%APPDATA%\PETRIABYSS\`，重開遊戲後繼續。

## 四、加入 Playnite

1. 打包完成後，把 `dist/win-unpacked/` 整個資料夾（或安裝後的程式資料夾）
   放到你想保存遊戲的位置，例如 `D:\Games\PETRIABYSS\`。
2. 開啟 **Playnite** → 左上角 **「+ 新增遊戲」→「手動新增」**。
3. 在遊戲設定中：
   - **名稱**：`石化深淵 PETRIABYSS`
   - **執行動作（Play action）** → 類型選 `Executable`
     - **路徑**：指向 `PETRIABYSS.exe`
     - （免安裝版則指向 `PETRIABYSS-2.3.4-portable.exe`）
4. **背景圖（Background image）**：
   - 切到遊戲的 **「Media」/「編輯」** 分頁
   - **Background Image** 選擇本專案 `assets/playnite_background.png`（1920×1080）
5. **封面 / 圖示**（可選）：
   - **Icon** 可用 `desktop/build/icon.png`
   - **Cover** 可用 `assets/cover.svg`（或自行轉成 png）

完成後，Playnite 的遊戲詳情頁會顯示石化深淵主題背景，點「開始遊戲」即全屏啟動。

## 五、常見問題

- **打包時跳出 wine / 找不到工具？** → 請在 **Windows** 上打包（不要在 Linux/Mac 跨平台打包 Windows）。
- **啟動是空白畫面？** → 確認 `index.html` 與 `js/ css/ assets/` 都在 `desktop` 的上一層；
  打包設定 `extraResources` 會把它們收進 `resources/app/`。
- **排行榜沒有資料？** → 排行榜需連線 Firebase；離線時會自動略過，不影響遊玩。
- **想改視窗化預設？** → 編輯 `main.js` 把 `fullscreen: true` 改成 `false`。
