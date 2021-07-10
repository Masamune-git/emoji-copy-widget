const emoji = require('emoji.json')
const { app, BrowserWindow, ipcMain } = require('electron')
const path = require('path')

function createWindow (file) {
  const win = new BrowserWindow({
    width: 400,
    height: 400,
    webPreferences: {
      nodeIntegration: false,
      contextIsolation: true,
      preload: path.join(__dirname, 'preload.js')
    }
  })

  win.loadFile('public/index.html')
  // win.webContents.openDevTools()
}

app.whenReady().then(() => {
  createWindow('index.html')
})

app.on('window-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow()
  }
})

// ----------------------------------------
// IPC通信
// ----------------------------------------
// 絵文字 を渡す
ipcMain.handle('emojiJson', (event, data) => {
  return emoji
})
