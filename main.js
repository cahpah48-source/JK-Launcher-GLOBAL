const { app, BrowserWindow } = require('electron');
const path = require('node:path');

function createWindow() {
  const win = new BrowserWindow({
    width: 1180,
    height: 760,
    minWidth: 850,
    minHeight: 600,
    backgroundColor: '#07110d',
    show: false,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
      contextIsolation: true,
      nodeIntegration: false,
      sandbox: true
    }
  });
  win.once('ready-to-show', () => win.show());
  win.webContents.setWindowOpenHandler(() => ({ action: 'deny' }));
  win.webContents.on('will-navigate', (event, url) => {
    if (url !== `file://${path.join(__dirname, 'index.html').replaceAll('\\', '/')}`) event.preventDefault();
  });
  win.loadFile(path.join(__dirname, 'index.html'));
}

app.whenReady().then(createWindow);
app.on('window-all-closed', () => { if (process.platform !== 'darwin') app.quit(); });
