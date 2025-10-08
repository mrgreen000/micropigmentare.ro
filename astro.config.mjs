import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import vercel from '@astrojs/vercel/static';

export default defineConfig({
  site: 'https://micropigmentaresprancene.ro',
  base: '/',
  output: 'static',
  adapter: vercel(),
  integrations: [tailwind()],
  server: {
    port: 5200,
    host: true
  },
  build: {
    assets: '_astro'
  }
});
