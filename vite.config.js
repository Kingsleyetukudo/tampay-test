import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "./", // Ensures correct paths
  build: {
    outDir: "dist",
  },
  server: {
    historyApiFallback: true, // Allows proper routing on refresh
  },
});
