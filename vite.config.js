import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// VITE_BASE lets GitHub Pages serve the site from /<repo-name>/ (see README).
export default defineConfig({
  base: process.env.VITE_BASE ?? '/',
  plugins: [react()],
});
