import { defineConfig } from "vite";

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    proxy: {
      // string shorthand
      "/api/test": "http://localhost:3232",
    },
  },
});
