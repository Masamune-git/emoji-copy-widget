const emoji = require('emoji.json')
const { app, BrowserWindow, ipcMain } = require('electron')
const path = require('path')

function createWindow (file) {
  const win = new BrowserWindow({
    width: 400,
    height: 400,
    webPreferences: {
      nodeIntegration: false, // v12からのデフォルト値（記述不要）
      contextIsolation: true, // 〃
      preload: path.join(__dirname, 'preload.js')
    }
  })

  // win.loadURL('file://' + __dirname + '/index.html')
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
// "絵文字" を返す
ipcMain.handle('sample', (event, data) => {
  return (`絵文字</br>`)
})
// 絵文字 を返す
const emojiTest = emoji[2].char
ipcMain.handle('emojiTest', (event, data) => {
  return emoji
})
