const { spawn } = require('child_process');
const { join } = require('path');
const { existsSync } = require('fs');

const root = join(__dirname, '..');
const major = Number(process.versions.node.split('.')[0]);

function findNode22() {
  const candidates = [
    process.env.NVM_HOME && join(process.env.NVM_HOME, 'v22.23.2', 'node.exe'),
    'C:\\AppsShared\\nvm\\v22.23.2\\node.exe',
    process.env.NVM_SYMLINK && join(process.env.NVM_SYMLINK, 'node.exe'),
  ].filter(Boolean);
  return candidates.find((file) => existsSync(file));
}

if (major >= 24) {
  const node22 = findNode22();
  if (node22) {
    console.log(`Node ${process.version} is not supported. Restarting with Node 22...`);
    const child = spawn(node22, [__filename, ...process.argv.slice(2)], {
      cwd: root,
      env: process.env,
      stdio: 'inherit',
      shell: false,
    });
    child.on('exit', (code, signal) => {
      if (signal) {
        process.kill(process.pid, signal);
        return;
      }
      process.exit(code ?? 1);
    });
    return;
  }
  console.error(
    `Node ${process.version} is not supported for this Angular 19 storefront.`
  );
  console.error('Use Node 22, then start again:');
  console.error('  nvm use 22.23.2');
  console.error('  npm start');
  process.exit(1);
}

const extraNodeOptions = '--max-old-space-size=4096 --max-semi-space-size=128';
const existing = process.env.NODE_OPTIONS || '';
if (!existing.includes('max-old-space-size')) {
  process.env.NODE_OPTIONS = [existing, extraNodeOptions]
    .filter(Boolean)
    .join(' ')
    .trim();
}
process.env.NG_BUILD_MAX_WORKERS = process.env.NG_BUILD_MAX_WORKERS || '1';

const ng = join(root, 'node_modules', '@angular', 'cli', 'bin', 'ng.js');
const child = spawn(process.execPath, [ng, 'serve', '--no-hmr', ...process.argv.slice(2)], {
  cwd: root,
  env: process.env,
  stdio: 'inherit',
  shell: false,
});
child.on('exit', (code, signal) => {
  if (signal) {
    process.kill(process.pid, signal);
    return;
  }
  process.exit(code ?? 1);
});
