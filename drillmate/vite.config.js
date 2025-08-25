import { defineConfig } from "vite";
import tailwindcss from '@tailwindcss/vite';
import path from 'path';

export default defineConfig({
  root: '.', // project root
  build: {
    rollupOptions: {
      input: {
        main: path.resolve(__dirname, 'index.html'),
        login: path.resolve(__dirname, 'login.html'),
      },
    },
  },
  plugins: [
    tailwindcss(),
  ],
})