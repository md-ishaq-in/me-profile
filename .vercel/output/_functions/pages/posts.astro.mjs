/* empty css                                 */
import { c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_D0N2Goyc.mjs';
import 'kleur/colors';
import { $ as $$PageHeading } from '../chunks/page-heading_C0B15EGP.mjs';
import { $ as $$PostsLoop } from '../chunks/posts-loop_BCtPG3bP.mjs';
import { $ as $$Main } from '../chunks/main_DtTr-pTQ.mjs';
export { renderers } from '../renderers.mjs';

const $$Posts = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Main, { "title": "My Blogs" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="relative z-20 max-w-4xl mx-auto my-12 px-7 lg:px-8"> ${renderComponent($$result2, "PageHeading", $$PageHeading, { "title": "My Blogs", "description": "Join me on a journey through DevOps, cloud, and automation. A space where technology meets innovation\u2014expect fresh perspectives, real-world solutions, and expert insights in every post." })} <div class="z-50 w-full my-8"> ${renderComponent($$result2, "PostsLoop", $$PostsLoop, {})} </div> </section> ` })}`;
}, "/home/ishaq/Desktop/test-repo/src/pages/posts.astro", void 0);

const $$file = "/home/ishaq/Desktop/test-repo/src/pages/posts.astro";
const $$url = "/posts";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Posts,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
