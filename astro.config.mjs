import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import vercel from '@astrojs/vercel/serverless'; // ✅ use /serverless path

export default defineConfig({
  output: 'server',
  adapter: vercel(),
  integrations: [tailwind()],
});
;




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


