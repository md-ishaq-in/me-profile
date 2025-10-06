/* empty css                                 */
import { c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_D0N2Goyc.mjs';
import 'kleur/colors';
import { p as projects, $ as $$Project } from '../chunks/project_pGT5XuyX.mjs';
import { $ as $$PageHeading } from '../chunks/page-heading_C0B15EGP.mjs';
import { $ as $$Main } from '../chunks/main_DtTr-pTQ.mjs';
export { renderers } from '../renderers.mjs';

const $$Projects = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Main, { "title": "My Projects" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="relative z-20 max-w-6xl mx-auto my-12 px-7 lg:px-8"> ${renderComponent($$result2, "PageHeading", $$PageHeading, { "title": "My Projects", "description": "Here's some of the exciting projects I'm building right now. I'm constantly working on new ideas\u2014stay tuned for the next big thing.!  \u{1F680}" })} <div class="z-50 grid items-stretch w-full grid-cols-1 my-8 gap-7 sm:gap-6 sm:grid-cols-2 lg:grid-cols-3"> ${projects.map((project) => {
    return renderTemplate`${renderComponent($$result2, "Project", $$Project, { "name": project.name, "description": project.description, "image": project.image, "url": project.url })}`;
  })} </div> </section> ` })}`;
}, "/home/ishaq/Desktop/test-repo/src/pages/projects.astro", void 0);

const $$file = "/home/ishaq/Desktop/test-repo/src/pages/projects.astro";
const $$url = "/projects";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Projects,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
