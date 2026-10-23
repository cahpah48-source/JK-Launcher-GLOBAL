const { contextBridge } = require('electron');
contextBridge.exposeInMainWorld('jkLauncher', Object.freeze({
  version: '1.1.4',
  platform: process.platform,
  status: 'ui-preview'
}));
