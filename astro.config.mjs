import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://1056599884.github.io',
  base: '/desktop-tutorial',
  output: 'static',
  integrations: [
    tailwind({
      applyBaseStyles: false
    }),
    sitemap()
  ]
});
