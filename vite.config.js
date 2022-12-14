import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

const vetur = require('@volar-plugins/vetur');


// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(),vetur()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
