import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://solena-art.github.io',
  base: '/artndesign',
  trailingSlash: 'always',
  integrations: [tailwind(), mdx(), sitemap()],
  output: 'static',
  build: {
    assets: '_assets'
  }
}); 