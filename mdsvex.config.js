import { defineMDSveXConfig as defineConfig } from 'mdsvex';
import { remarkPlugins, rehypePlugins } from './src/lib/markdown.js';

const config = defineConfig({
  extensions: ['.svelte.md', '.md', '.svx'],

  smartypants: {
    dashes: 'oldschool'
  },
  layout: {
    assignment: './src/lib/layouts/Assignment.svelte'
  },

  remarkPlugins,
  rehypePlugins
});

export default config;
