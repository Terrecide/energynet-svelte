import { vitePreprocess } from '@sveltejs/kit/vite';
import adapter from '@sveltejs/adapter-auto';
import sveltePreprocess from 'svelte-preprocess';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const postcssConfig = path.join(__dirname, 'postcss.config.cjs');

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		// adapter-auto only supports some environments, see https://kit.svelte.dev/docs/adapter-auto for a list.
		// If your environment is not supported or you settled on a specific environment, switch out the adapter.
		// See https://kit.svelte.dev/docs/adapters for more information about adapters.
		adapter: adapter()
	},

	preprocess: [
		vitePreprocess(),
		sveltePreprocess({
		  postcss: {
			configFilePath: postcssConfig
		  }
		})
	  ]
};

export default config;
