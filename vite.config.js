import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    {
      name: 'pdf-headers',
      configureServer(server) {
        server.middlewares.use((req, res, next) => {
          if (req.url && req.url.toLowerCase().includes('.pdf')) {
            res.setHeader('Content-Type', 'application/pdf');
          }
          next();
        });
      }
    }
  ],
  server: {
    port: 3000,
    open: true,
    proxy: {
      '/api': {
        target: 'http://localhost:5000',
        changeOrigin: true
      }
    }
  }
})
