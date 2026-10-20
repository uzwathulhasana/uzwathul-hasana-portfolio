import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    {
      name: 'pdf-streamer',
      configureServer(server) {
        server.middlewares.use(async (req, res, next) => {
          // NEVER intercept Vite internal module requests
          if (!req.url || req.url.startsWith('/@') || req.url.includes('?import')) {
            return next();
          }

          const cleanUrl = req.url.split('?')[0];
          if (cleanUrl.toLowerCase().endsWith('.pdf')) {
            const fs = await import('fs');
            const path = await import('path');
            const filePath = path.join(process.cwd(), 'public', 'k.Uzwathul_Hasana_Resume.pdf');
            if (fs.existsSync(filePath)) {
              const buf = fs.readFileSync(filePath);
              res.writeHead(200, {
                'Content-Type': 'application/pdf',
                'Content-Disposition': 'attachment; filename="k.Uzwathul_Hasana_Resume.pdf"',
                'Content-Length': buf.length,
                'Cache-Control': 'no-store, no-cache, must-revalidate, max-age=0',
                'Pragma': 'no-cache',
                'Expires': '0',
              });
              res.end(buf);
              return;
            }
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
