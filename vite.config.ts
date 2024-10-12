import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/lwc-website/',
  css: {
    postcss: './postcss.config.js',
  },
})
