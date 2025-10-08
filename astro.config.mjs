import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://micropigmentaresprancene.ro',
  base: '/micropigmentare-site/',
  integrations: [tailwind()],
  server: {
    port: 5200,
    host: true
  },
  build: {
    assets: '_astro'
  }
});
