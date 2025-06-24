import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [vue()],
  base: process.env.NODE_ENV === 'production' ? '/daji-docs-animate/' : '/',
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    // 确保静态资源正确引用
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['vue', 'vue-router']
        }
      }
    }
  },
  // 确保开发环境和生产环境的一致性
  publicDir: 'public'
}) 