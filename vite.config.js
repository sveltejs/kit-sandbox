import path from 'path';

/** @type {import('vite').UserConfig} */
export const config = {
	server: {
		fs: {
			allow: [path.resolve('../kit/packages/kit/src')]
		}
	}
};
