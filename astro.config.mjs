import { defineConfig } from 'astro/config';
import vercel from '@astrojs/vercel';  // ✅ use modern import (no /serverless)

export default defineConfig({
  output: 'server',
  adapter: vercel(),
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


