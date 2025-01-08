import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: "/",
  server: {
    proxy: {
      '/api': {
        target: 'https://circle-app-be-zyaw.vercel.app',
        changeOrigin: true,
        secure: false,
      },
    },
  },
});
