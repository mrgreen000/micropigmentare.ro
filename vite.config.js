import { defineConfig } from 'vite';

export default defineConfig({
  base: '/micropigmentare-site/',
  server: {
    port: 5200,
    open: true,
    host: true
  },
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    rollupOptions: {
      input: {
        main: './index.html'
      }
    },
    copyPublicDir: true
  },
  publicDir: 'public'
});