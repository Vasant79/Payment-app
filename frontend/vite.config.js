import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// resolve proxy issue
// url: "http://localhost:3001/v1/user/signup",
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      "/v1": {
        target: "http://localhost:3001",
        changeOrigin: true,
      },
    },
  },
});
