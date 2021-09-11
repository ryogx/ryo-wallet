// ./build_installer.js

// 1. Import Modules
const { MSICreator } = require('electron-wix-msi');
const path = require('path');

// 2. Define input and output directory.
// Important: the directories must be absolute, not relative e.g
// appDirectory: "C:\\Users\sdkca\Desktop\OurCodeWorld-win32-x64",
const APP_DIR = path.resolve(__dirname, './dist/electron-mat/Packaged/win-unpacked/');
// outputDirectory: "C:\\Users\sdkca\Desktop\windows_installer",
const OUT_DIR = path.resolve(__dirname, './windows_installer');

// 3. Instantiate the MSICreator
const msiCreator = new MSICreator({
    appDirectory: APP_DIR,
    outputDirectory: OUT_DIR,

    // Configure metadata
    description: 'Ryo Wallet -  Privacy for eveRYOne',
    exe: 'Ryo Wallet Atom',
    name: 'Ryo Wallet Atom',
    manufacturer: 'Ryo Wallet Developers',
    version: '1.5.0',

    // Configure installer User Interface
    ui: {
        chooseDirectory: true
    },
});
