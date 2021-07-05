const { contextBridge, ipcRenderer } = require('electron')

contextBridge.exposeInMainWorld('api', {
    sample:  async () => await ipcRenderer.invoke('sample'),
    emojiTest:  async () => await ipcRenderer.invoke('emojiTest')
  }
)
