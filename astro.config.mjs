// @ts-check
import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";

export default defineConfig({
  site: "https://profoilomdishaq.netlify.app", // your Netlify domain
  output: "static",
  integrations: [tailwind()],
  vite: {
    assetsInclude: ["**/*.md"]
  }
<<<<<<< HEAD
});
=======
});
>>>>>>> 7288e3b (update astro)
