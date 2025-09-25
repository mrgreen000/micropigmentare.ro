import { defineConfig } from 'vite';
import { viteStaticCopy } from 'vite-plugin-static-copy';

export default defineConfig({
  base: '/micropigmentare-site/',
  server: {
    port: 5200,
    open: true,
    host: true
  },
  plugins: [
    viteStaticCopy({
      targets: [
        {
          src: 'assets/**/*',
          dest: 'assets'
        }
      ]
    })
  ],
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    rollupOptions: {
      input: {
        main: './index.html'
      }
    }
  },
  experimental: {
    renderBuiltUrl(filename) {
      return '/micropigmentare-site/' + filename;
    }
  }
});