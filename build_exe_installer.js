const electronInstaller = require('electron-winstaller');
const path = require('path');

async function createInstaller {
  const APP_DIR = path.resolve(__dirname, './dist/electron-mat/Packaged/win-unpacked');
  const OUT_DIR = path.resolve(__dirname, './dist/electron-mat/win_installer');
  try {
    await electronInstaller.createWindowsInstaller({
      appDirectory: APP_DIR,
      outputDirectory: OUT_DIR,
      authors: 'Ryo Wallet Developers',
      exe: 'Ryo Wallet Atom.exe'
    });
    console.log(`Installer created at ${OUTD_DIR}`);
  } catch (e) {
    console.log(`Failed to create installer: ${e.message}`);
  }
}

createInstaller();
