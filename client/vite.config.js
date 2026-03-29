import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],
  server: {
    proxy: {
      '/auth': 'http://localhost:5000',
      '/blogs': 'http://localhost:5000',
      '/comments': 'http://localhost:5000',
      '/ai': 'http://localhost:5000',
    }
  }
})
