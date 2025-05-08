import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: process.env.VITE_BASE_PATH || "/portfolio",
  server: {
    proxy: {
      '/api': 'https://portfolio-two-rust-85.vercel.app/',
    },
  },
})
