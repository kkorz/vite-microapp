import { defineConfig } from 'vite'
import path from "path";
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  css: {
    preprocessorOptions: {
      less: {
        // 支持内联 JavaScript
        javascriptEnabled: true,
        // 重写 less 变量，定制样式
        // modifyVars: themeVariables
      }
    }
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    }
  }
})
