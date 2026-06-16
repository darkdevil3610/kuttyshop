import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

const basePath = process.env.VITE_BASE_PATH || (process.env.VERCEL ? '/' : '/first-page/');

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  base: basePath,
  define: {
    __DEV__: JSON.stringify(mode !== 'production'),
  },
  plugins: [react()],
}))
