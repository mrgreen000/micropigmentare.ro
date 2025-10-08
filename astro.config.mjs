import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

// Use base path only for GitHub Pages deployment, not for Vercel
const base = process.env.VERCEL ? '/' : (process.env.NODE_ENV === 'production' ? '/micropigmentare.ro/' : '/');

export default defineConfig({
  site: 'https://micropigmentaresprancene.ro',
  base: base,
  integrations: [tailwind()],
  server: {
    port: 5200,
    host: true
  },
  build: {
    assets: '_astro'
  }
});
