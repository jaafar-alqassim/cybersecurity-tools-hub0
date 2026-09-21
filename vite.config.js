import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Relative base so the built site works on GitHub Pages project sites,
// custom domains, and any static host without extra config.
export default defineConfig({
  plugins: [react()],
  base: './',
});
