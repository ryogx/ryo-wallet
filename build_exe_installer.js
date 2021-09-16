// This script makes a broken installer - DO NOT USE
// use "build_msi_installer" instead.
const electronInstaller = require('electron-winstaller');
const path = require('path');

async function createInstaller() {
  const APP_DIR = path.resolve(__dirname, './dist/electron-mat/Packaged/win-unpacked');
  const OUT_DIR = path.resolve(__dirname, './dist/electron-mat/win_installer');
  try {
    await electronInstaller.createWindowsInstaller({
      appDirectory: APP_DIR,
      outputDirectory: OUT_DIR,
      name: 'RyoWalletAtom',
      title: 'RyoWalletAtom',
      authors: 'Ryo Wallet Developers',
      setupExe: 'Ryo Wallet Atom Setup.exe',
      setupMsi: 'Ryo Wallet Atom Setup.msi',
      exe: 'Ryo Wallet Atom.exe',
      version: '1.5.0'
    });
    console.log(`Installer created at ${OUT_DIR}`);
  } catch (e) {
    console.log(`Failed to create installer: ${e.message}`);
  }
}

createInstaller();
