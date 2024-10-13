import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  return {
    plugins: [react()],
    base: mode === 'production' ? '/lwc-website/' : '/',
    build: {
      outDir: 'dist'
    },
    css: {
      postcss: './postcss.config.js',
    }
  };
});
