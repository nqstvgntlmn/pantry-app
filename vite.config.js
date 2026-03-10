import { defineConfig } from 'vite';

export default defineConfig({
  // Root is where index.html lives (project root)
  root: '.',
  // Build output goes to dist/ for Vercel
  build: {
    outDir: 'dist',
    emptyOutDir: true,
  },
  // Dev server proxies /api calls to Vercel dev server
  server: {
    proxy: {
      '/api': 'http://localhost:3000',
    },
  },
});
