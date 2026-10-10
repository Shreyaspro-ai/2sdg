import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig(({ command }) => ({
  // Keep existing prototype asset URLs working during development. Production
  // assets are served from /dist/ while the legacy reference bundle is retained.
  base: command === 'serve' ? '/' : '/dist/',
  plugins: [react(), tailwindcss()],
  build: {
    outDir: 'dist',
    // Preserve the carefully reconstructed reference assets while the app is
    // migrated; the generated entry points can coexist with the current bundle.
    emptyOutDir: false,
  },
}));
