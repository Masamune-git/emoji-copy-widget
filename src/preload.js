const { contextBridge, ipcRenderer } = require('electron')

contextBridge.exposeInMainWorld('api', {
  emojiJson: async () => await ipcRenderer.invoke('emojiJson')
})
