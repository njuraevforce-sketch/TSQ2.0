import { defineConfig } from 'vite'
import uni from '@dcloudio/vite-plugin-uni'

export default defineConfig({
  plugins: [uni()],
  base: './',
  build: {
    outDir: 'dist',
    assetsDir: 'static'
  },
  server: {
    port: 3000,
    host: true
  }
})
