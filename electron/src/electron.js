import { app, BrowserWindow } from 'electron';
import { resolve } from 'path';
import { env } from 'process';

if (env.NODE_ENV === 'development') {
  require('electron-reload')(__dirname); // eslint-disable-line
}

let win;

function createWindow() {
  win = new BrowserWindow({
    minWidth: 1000,
    minHeight: 600,
    show: false,
    nodeIntegration: false,
  });

  win.loadURL(`file://${resolve(__dirname, 'index.html')}`);

  if (env.NODE_ENV === 'development') {
    win.webContents.openDevTools();
  }

  win.on('closed', () => {
    win = null;
  });

  win.once('ready-to-show', () => {
    win.show();
  });
}

app.on('ready', () => {
  createWindow();
});

app.on('activate', () => {
  if (win === null) {
    createWindow();
  }
});

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});
