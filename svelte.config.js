import path from 'path';
import adapter from '@sveltejs/adapter-netlify';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter({
			edge: true
		}),

		// Override http methods in the Todo forms
		methodOverride: {
			allowed: ['PATCH', 'DELETE']
		},

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
