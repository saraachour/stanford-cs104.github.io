import { defineMDSveXConfig as defineConfig } from 'mdsvex';
import github from 'remark-gfm';

const config = defineConfig({
	extensions: ['.svelte.md', '.md', '.svx'],

	smartypants: {
		dashes: 'oldschool'
	},

	remarkPlugins: [github],
	rehypePlugins: []
});

export default config;
