import { c as createComponent, d as createAstro, m as maybeRenderHead, b as addAttribute, r as renderComponent, F as Fragment, a as renderTemplate } from './astro/server_D0N2Goyc.mjs';
import 'kleur/colors';
import { g as getCollection } from './_astro_content_P7MS61rj.mjs';
/* empty css                         */

const $$Astro = createAstro();
const $$PostsLoop = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$PostsLoop;
  const allPosts = await getCollection("post");
  const { count } = Astro2.props;
  function parseDate(dateStr) {
    if (!dateStr) return /* @__PURE__ */ new Date();
    const [month, day, year] = dateStr.split(" ");
    return /* @__PURE__ */ new Date(`${month} ${parseInt(day)}, ${year}`);
  }
  const sortedPosts = allPosts.map((post) => ({
    ...post,
    date: parseDate(post.data.dateFormatted)
  })).sort((a, b) => b.date.getTime() - a.date.getTime());
  const postsLoop = sortedPosts.slice(0, count).map((post) => ({
    title: post.data.title || "",
    description: post.data.description || "",
    dateFormatted: post.data.dateFormatted || "",
    tags: post.data.tags || [],
    link: `/post/${post.slug}`
  }));
  return renderTemplate`${maybeRenderHead()}<div class="flex flex-col items-stretch w-full gap-5" data-astro-cid-3vkkykcb> ${postsLoop.map((post) => renderTemplate`<div class="relative border border-transparent border-dashed cursor-pointer p-7 group rounded-2xl"${addAttribute(`location.href = '${post.link}'`, "onclick")} data-astro-cid-3vkkykcb> <div class="absolute inset-0 z-20 w-full h-full duration-300 ease-out bg-neutral-950 border border-dashed rounded-2xl border-neutral-700 group-hover:-translate-x-1 group-hover:-translate-y-1" data-astro-cid-3vkkykcb></div> <div class="absolute inset-0 z-10 w-full h-full duration-300 ease-out border border-dashed rounded-2xl border-neutral-700 group-hover:translate-x-1 group-hover:translate-y-1" data-astro-cid-3vkkykcb></div> <div class="relative z-30 duration-300 ease-out group-hover:-translate-x-1 group-hover:-translate-y-1" data-astro-cid-3vkkykcb> <h2 class="flex items-center mb-3" data-astro-cid-3vkkykcb> <a${addAttribute(post.link, "href")} class="text-base font-bold leading-tight tracking-tight sm:text-lg text-neutral-100" data-astro-cid-3vkkykcb> ${post.title} </a> <svg class="group-hover:translate-x-0 flex-shrink-0 translate-y-0.5 -translate-x-1 w-2.5 h-2.5 stroke-current ml-1 transition-all ease-in-out duration-200 transform text-neutral-400" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" data-astro-cid-3vkkykcb> <path d="M7 17L17 7M17 7H7M17 7V17" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-astro-cid-3vkkykcb></path> </svg> </h2> <p class="text-sm text-neutral-400" data-astro-cid-3vkkykcb> <span data-astro-cid-3vkkykcb>${post.description}</span> </p> <div class="mt-2.5 text-xs font-medium text-neutral-500" data-astro-cid-3vkkykcb> <span data-astro-cid-3vkkykcb>Posted on ${post.dateFormatted}</span> ${post.tags.length > 0 && renderTemplate`${renderComponent($$result, "Fragment", Fragment, { "data-astro-cid-3vkkykcb": true }, { "default": async ($$result2) => renderTemplate` <span class="mx-2" data-astro-cid-3vkkykcb>•</span> <div class="flex gap-2" data-astro-cid-3vkkykcb> ${post.tags.map((tag) => renderTemplate`<span class="px-2 py-1 bg-neutral-800/50 rounded-full text-xs" data-astro-cid-3vkkykcb> ${tag} </span>`)} </div> ` })}`} </div> </div> </div>`)} </div> `;
}, "/home/ishaq/Desktop/test-repo/src/components/posts-loop.astro", void 0);

export { $$PostsLoop as $ };
