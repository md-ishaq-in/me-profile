// @ts-check
import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";

export default defineConfig({
  site: "https://muhammadiishaq.github.io/portfolio-test/", // your GitHub Pages URL
  base: "/portfolio-test/", // your repo name
  output: "static",
  integrations: [tailwind()],
  vite: {
    assetsInclude: ["**/*.md"]
  }
});

