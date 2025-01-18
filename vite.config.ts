import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  // Remove the base URL since this is a username.github.io repository
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
})