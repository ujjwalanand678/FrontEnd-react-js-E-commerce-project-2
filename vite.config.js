import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
   build: {
    rollupOptions: {
      external: ['@rollup/rollup-linux-x64-gnu']
    }
  },
  base:"/FrontEnd-react-js-E-commerce-project-2",

})
