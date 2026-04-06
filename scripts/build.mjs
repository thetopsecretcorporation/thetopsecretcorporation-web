import { mkdir, copyFile } from 'node:fs/promises';
import { resolve } from 'node:path';
import { spawn } from 'node:child_process';

const projectRoot = process.cwd();

function run(command, args) {
  return new Promise((resolvePromise, rejectPromise) => {
    const child = spawn(command, args, { cwd: projectRoot, stdio: 'inherit', shell: true });

    child.on('exit', (code) => {
      if (code === 0) {
        resolvePromise();
      } else {
        rejectPromise(new Error(`${command} ${args.join(' ')} exited with code ${code}`));
      }
    });

    child.on('error', rejectPromise);
  });
}

await run('npx', ['astro', 'build']);

const distDir = resolve(projectRoot, 'dist');
await mkdir(distDir, { recursive: true });
await copyFile(resolve(projectRoot, 'workers', 'pages-oauth-worker.js'), resolve(distDir, '_worker.js'));
