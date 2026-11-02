import { defineConfig, type Plugin } from 'vite';
import react from '@vitejs/plugin-react';

// GitHub Pages serves 404.html for unknown paths. Making it a copy of
// index.html lets the SPA boot and resolve client-side routes on deep links.
const spaFallback = (): Plugin => ({
  name: 'spa-fallback-404',
  apply: 'build',
  enforce: 'post',
  generateBundle(_, bundle) {
    const index = bundle['index.html'];
    if (index?.type !== 'asset') return;
    this.emitFile({ type: 'asset', fileName: '404.html', source: index.source });
  },
});

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), spaFallback()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});
