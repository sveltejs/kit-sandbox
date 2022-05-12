import { spawn } from 'child_process';
import { fileURLToPath } from 'url';

const [node, , ...args] = process.argv;
const path = process.env.CI
	? './node_modules/@sveltejs/kit/dist/cli.js'
	: '../kit/packages/kit/src/cli';

const bin = fileURLToPath(new URL(path, import.meta.url));

const child = spawn(node, [bin, ...args], {
	stdio: 'inherit'
});

if (child) {
	child.on('exit', process.exit);
}
