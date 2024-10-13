import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/',  // This keeps the base URL as root for production and local development.
  build: {
    outDir: 'dist',  // Output directory for production builds.
    // Optionally, if you're planning to include a source map for debugging:
    sourcemap: true, 
  },
  css: {
    postcss: './postcss.config.js',
  }
});
