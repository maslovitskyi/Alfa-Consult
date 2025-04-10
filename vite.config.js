import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
//f
export default defineConfig({
  base: '/Alfa-Consult/',
  build: {
    outDir: 'dist'
  },
  plugins: [react(),
     tailwindcss()],
})
