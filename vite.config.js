import { defineConfig } from "vite";
import { resolve } from "path";
import fs from "fs";

const templatesDir = resolve(__dirname, "./");

const input = {};

fs.readdirSync(templatesDir)
  .filter(file => file.endsWith(".html"))
  .forEach(file => {
    input[file.replace(".html", "")] = resolve(templatesDir, file);
  });

export default defineConfig({
  root: ".",
  build: {
    outDir: "dist",
    rollupOptions: {
      input
    }
  },
  server: {
    host: '0.0.0.0',
    port: 5173,
    open: true
  }
});
