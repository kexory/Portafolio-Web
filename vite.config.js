import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// For GitHub Pages project sites, set VITE_BASE_PATH to "/repository-name/".
// For a user/org site (username.github.io), keep "/".
export default defineConfig({
  plugins: [react()],
  base: process.env.VITE_BASE_PATH || "/"
});
