import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://artdesigner.co.kr',
  base: '/',
  integrations: [tailwind(), mdx(), sitemap()],
  output: 'static',
  build: {
    assets: '_assets',
    inlineStylesheets: 'auto'
  }
}); 