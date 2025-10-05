import { defineConfig } from 'astro/config';
import vercel from '@astrojs/vercel/serverless';  // ✅ Vercel adapter for SSR

// https://docs.astro.build/en/configuration-reference
export default defineConfig({
  output: 'server',   // Required for backend functionality
  adapter: vercel(),  // Tell Astro to use the Vercel runtime
});






// // @ts-check
// import { defineConfig } from "astro/config";

// import tailwind from "@astrojs/tailwind";


// // https://astro.build/config
// export default defineConfig({
//   site: "https://iemafzalhassan.in",
//   output: "server",
//   integrations: [tailwind()],
//     devToolbar: {
//     enabled: false
//   }
// });


