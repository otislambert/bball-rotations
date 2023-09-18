/// <reference types="vitest" />

import { sveltekit } from "@sveltejs/kit/vite";
import { defineConfig } from "vite";
import path from "path";

export default defineConfig({
  plugins: [sveltekit()],
  test: {
    environment: "jsdom",
    globals: true,
  },
  resolve: {
    alias: {
      $lib: path.resolve(__dirname, "./src/lib/"),
      $components: path.resolve(__dirname, "./src/components/"),
      $styles: path.resolve(__dirname, "./src/styles/"),
      $types: path.resolve(__dirname, "./src/types/"),
    },
  },
});
