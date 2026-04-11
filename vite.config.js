import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api': {
        target: 'http://localhost:8080',  // your Spring Boot port
        changeOrigin: true,
        // If your Spring Boot routes DON'T start with /api,
        // use rewrite to strip it:
        // rewrite: (path) => path.replace(/^\/api/, '')
      }
    }
  }
})
