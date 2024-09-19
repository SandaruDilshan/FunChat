import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
<<<<<<< HEAD
  server: {
    proxy: {
      "/api": {
        target:"http://localhost:5000",
      }
    }
  }
=======
>>>>>>> 9fb66ff148f92d3b479c845674baccd30c15e466
})
