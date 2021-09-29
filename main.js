const { BrowserWindow, app } = require('electron');

app.on('ready', () => {
    const win = new BrowserWindow({
        width: 1200,
        height: 800,
        titleBarStyle: 'hiddenInset',
        autoHideMenuBar: true,
        icon: 'icon.png'
    });
    win.loadURL('https://gitpod.io/workspaces');
    win.setResizable(true);

    win.once('ready-to-show', () => {
        win.show();
    });
});
