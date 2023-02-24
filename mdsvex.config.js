import { defineMDSveXConfig as defineConfig } from 'mdsvex';
import github from 'remark-gfm';
import remarkHeadingId from 'remark-heading-id';
import externalLinks from 'rehype-external-links';

const config = defineConfig({
  extensions: ['.svelte.md', '.md', '.svx'],

  smartypants: {
    dashes: 'oldschool'
  },

  remarkPlugins: [github, remarkHeadingId],
  rehypePlugins: [
    [
      externalLinks,
      {
        target: (el) => {
          if (!el.properties.href) return '_self';
          if (el.properties.href.startsWith('/') && !el.properties.href.startsWith('//'))
            return '_self';
          return '_blank';
        },
        rel: ['noreferrer', 'noopener', 'nofollow']
      }
    ]
  ]
});

export default config;
