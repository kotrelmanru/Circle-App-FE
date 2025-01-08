import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: "/",
  server: {
    proxy: {
      '/api': {
        target: 'https://circle-app-be-eta.vercel.app',
        changeOrigin: true,
        secure: false,
      },
    },
  },
});
