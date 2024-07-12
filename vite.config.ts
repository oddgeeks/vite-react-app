import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import federation from "@originjs/vite-plugin-federation";

export default defineConfig({
  plugins: [
    react(),
    federation({
      name: "vite_react_app",
      remotes: {
        vite_remix_cloudflare_app:
          "http://localhost:3000/assets/remoteEntry.js",
      },
      shared: ['@remix-run/react'],
    }),
  ],
  build: {
    modulePreload: false,
    target: "esnext",
    minify: false,
    cssCodeSplit: false,
  },
  preview: {
    host: '127.0.0.1',
    port: 3001,
    strictPort: true,
  },
  server: {
    host: "127.0.0.1",
    port: 5174,
  },
});
