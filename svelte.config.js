import path from 'path';
import adapter from '@sveltejs/adapter-auto';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter(),

		// hydrate the <div id="svelte"> element in src/app.html
		target: '#svelte',

		vite: {
			server: {
				fs: {
					allow: [path.resolve('../kit/packages/kit/src')]
				}
			}
		}
	}
};

export default config;
