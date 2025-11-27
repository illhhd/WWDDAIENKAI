import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: './', // 静的ホスティング用に相対パスでリソースを読み込む
  build: {
    outDir: 'static_site', // ビルド成果物をこのフォルダに出力
    emptyOutDir: true,     // ビルド前にフォルダを空にする
  }
})