import adapter from '@sveltejs/adapter-auto';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter(),

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
