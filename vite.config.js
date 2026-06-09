import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Project site lives at https://<user>.github.io/miterlab-v3/ in production,
// but at root during local dev.
export default defineConfig(({ mode }) => ({
  base: mode === 'production' ? '/miterlab-v3/' : '/',
  plugins: [react()],
  server: {
    host: '127.0.0.1',
    port: 5174,
  },
}))
