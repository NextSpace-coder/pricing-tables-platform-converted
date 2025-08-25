import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';
import tailwindcss from 'tailwindcss';
import viteTagger from "vite-tagger";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    viteTagger({ prefixName: "wb" })
  ],
  server: {
    host: "::",
    port: 8080,
    allowedHosts: true,
  },
  resolve: {
    alias: {
      "@": resolve(__dirname, "src")
    }
  },
  css: {
    postcss: {
      plugins: [tailwindcss()]
    }
  }
});