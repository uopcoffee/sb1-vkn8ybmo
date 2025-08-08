import { defineConfig, Plugin } from 'vite';
import react from '@vitejs/plugin-react';
import contactHandler from './src/server/contact';

const contactApiPlugin: Plugin = {
  name: 'contact-api-dev',
  configureServer(server) {
    server.middlewares.use('/api/contact', async (req, res) => {
      try {
        const chunks: Uint8Array[] = [];
        await new Promise<void>((resolve) => {
          req.on('data', (c) => chunks.push(Buffer.from(c)));
          req.on('end', () => resolve());
        });
        const body = Buffer.concat(chunks);
        const url = `http://localhost${req.url ?? '/api/contact'}`;
        const headers: Record<string, string> = {};
        for (const [k, v] of Object.entries(req.headers)) {
          if (typeof v === 'string') headers[k] = v;
        }
        const request = new Request(url, {
          method: req.method,
          headers,
          body: body.length ? body : undefined,
        });
        const response = await contactHandler(request);
        res.statusCode = response.status;
        response.headers.forEach((value, key) => res.setHeader(key, value));
        const respBody = await response.arrayBuffer();
        res.end(Buffer.from(respBody));
      } catch (e) {
        res.statusCode = 500;
        res.end('Internal Server Error');
      }
    });
  },
};

export default defineConfig({
  plugins: [react(), contactApiPlugin],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
  server: {
    https: false, // Disable HTTPS for development
    host: true, // Listen on all local IPs
    port: 5173,
  },
  test: {
    globals: true,
    environment: 'jsdom',
  },
});