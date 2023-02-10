import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/kit/vite';
import { execSync } from 'child_process';

// This snapshots all the website source files with sha256sum, then calculates the sha256 hash of that,
//  to create a stable version name for the website.
const snapshot = execSync(`bash -c 'find src static svelte.config.js package.json package-lock.json tsconfig.json vite.config.ts -type f -exec sha256sum "{}" + | grep -o "^[a-z0-9]* " | sort | sha256sum | grep -o "^[a-z0-9]* "' `).toString().trim();

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://kit.svelte.dev/docs/integrations#preprocessors
	// for more information about preprocessors
	preprocess: vitePreprocess(),

	kit: {
		adapter: adapter(),
		paths: {
			base: '/class/cs45'
		},
		version: {
			name: snapshot
		}
	}
};

export default config;
