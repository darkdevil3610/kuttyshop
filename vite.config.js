import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  base: mode === 'production' ? '/first-page/' : '/',
  define: {
    __DEV__: JSON.stringify(mode !== 'production'),
  },
  plugins: [react()],
}))
