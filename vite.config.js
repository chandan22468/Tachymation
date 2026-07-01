/* global process */
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { createRequire } from 'module'
import path from 'path'

const require = createRequire(import.meta.url)
const prerender = require('vite-plugin-prerender')

export default defineConfig({
  plugins: [
    react(),
    prerender({
      staticDir: path.resolve(process.cwd(), 'dist'),
      routes: ['/', '/about', '/features', '/use-cases', '/contact', '/blog'],
    })
  ],
  server: {
    port: 3000,
    host: true
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          'vendor-react': ['react', 'react-dom'],
          'vendor-three': ['three'],
          'vendor-gsap': ['gsap'],
          'vendor-lenis': ['lenis'],
        }
      }
    },
    chunkSizeWarningLimit: 600
  }
})
