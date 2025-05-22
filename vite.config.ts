import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
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