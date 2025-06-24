import { defineConfig } from 'vite'
import * as react from '@vitejs/plugin-react'
import path from 'path'
import { apiServerPlugin } from './api/vite-server.js';

export default defineConfig({
  plugins: [(react as any).default(), apiServerPlugin()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  optimizeDeps: {
    include: ['react', 'react-dom']
  },
  server: {
    hmr: true,
    watch: {
      usePolling: true
    }
  },
  build: {
    sourcemap: true,
    rollupOptions: {
      output: {
        manualChunks: undefined
      }
    }
  },
  css: {
    postcss: {
      plugins: [
        require('tailwindcss'),
        require('autoprefixer'),
      ],
    },
  },
})