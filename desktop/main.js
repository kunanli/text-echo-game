// 石化深淵 PETRIABYSS — Electron 桌面包裝（Windows 全屏，供 Playnite 使用）
// 把純前端遊戲包進一個獨立的全屏視窗。遊戲檔案位於上層目錄。
const { app, BrowserWindow, globalShortcut, Menu } = require('electron');
const path = require('path');

// 單一實例鎖：避免從 Playnite 重複啟動開出多個視窗
const gotLock = app.requestSingleInstanceLock();
if (!gotLock) {
  app.quit();
}

let mainWindow = null;

function createWindow() {
  mainWindow = new BrowserWindow({
    fullscreen: true,           // 開機即全屏
    autoHideMenuBar: true,      // 隱藏選單列
    backgroundColor: '#000000', // 載入前的底色（與遊戲暗黑主題一致）
    icon: path.join(__dirname, 'build', 'icon.png'),
    webPreferences: {
      contextIsolation: true,
      nodeIntegration: false,
      // 允許 localStorage 存檔持久化（Electron 預設即持久化於使用者資料夾）
      backgroundThrottling: false
    }
  });

  // 移除預設選單（File/Edit/View...）
  Menu.setApplicationMenu(null);

  // 載入遊戲本體。
  //  開發模式（npm start）：遊戲檔在上層目錄。
  //  打包後（.exe）：遊戲檔被放進 resources/app/（見 package.json extraResources）。
  const gameIndex = app.isPackaged
    ? path.join(process.resourcesPath, 'app', 'index.html')
    : path.join(__dirname, '..', 'index.html');
  mainWindow.loadFile(gameIndex);

  mainWindow.on('closed', () => {
    mainWindow = null;
  });
}

app.whenReady().then(() => {
  createWindow();

  // 全屏遊玩時的快捷鍵：
  //  F11      → 切換全屏 / 視窗
  //  Esc 長按 → 不綁定（避免遊戲內 Esc 衝突）；用 Alt+F4 或 Ctrl+Q 離開
  globalShortcut.register('F11', () => {
    if (mainWindow) mainWindow.setFullScreen(!mainWindow.isFullScreen());
  });
  globalShortcut.register('CommandOrControl+Q', () => {
    app.quit();
  });

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  });
});

// 第二次啟動時聚焦既有視窗
app.on('second-instance', () => {
  if (mainWindow) {
    if (mainWindow.isMinimized()) mainWindow.restore();
    mainWindow.focus();
  }
});

app.on('will-quit', () => {
  globalShortcut.unregisterAll();
});

app.on('window-all-closed', () => {
  app.quit();
});
