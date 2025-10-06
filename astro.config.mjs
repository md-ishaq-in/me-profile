import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import vercel from '@astrojs/vercel'; // ✅ Official recommended import

export default defineConfig({
  output: 'server', // Needed for SSR (server functions, email backend, etc.)
  adapter: vercel({
    runtime: 'nodejs18.x', // ✅ or 'edge' if you prefer Edge Runtime
  }),
  integrations: [tailwind()],
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


