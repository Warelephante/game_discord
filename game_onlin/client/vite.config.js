import { defineConfig } from "vite";

export default defineConfig({
  server: {
    port: 5173,
    host: true,
    allowedHosts: true,

    proxy: {
      "/socket.io": {
        target: "https://game-discord.onrender.com",
        ws: true,
        changeOrigin: true
      }
    }
  }
});
