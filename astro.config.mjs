// @ts-check
import react from "@astrojs/react";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
  site: "https://imran-hossain.dev",
  base: "/",
  integrations: [react()],
  vite: {
    plugins: [tailwindcss()],
  },
  build: {
    assets: "assets",
    inlineStylesheets: "auto",
  },
  compressHTML: true,
  prefetch: {
    prefetchAll: true,
    defaultStrategy: "viewport",
  },
  // Optimize build for better SEO
  output: "static",
});
