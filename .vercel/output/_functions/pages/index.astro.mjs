/* empty css                                 */
import { c as createComponent, d as createAstro, m as maybeRenderHead, b as addAttribute, a as renderTemplate, r as renderComponent } from '../chunks/astro/server_D0N2Goyc.mjs';
import 'kleur/colors';
import 'clsx';
import { p as projects, $ as $$Project } from '../chunks/project_pGT5XuyX.mjs';
/* empty css                                 */
import { $ as $$PostsLoop } from '../chunks/posts-loop_BCtPG3bP.mjs';
import { $ as $$Main } from '../chunks/main_DtTr-pTQ.mjs';
import { $ as $$ContactForm } from '../chunks/contact-form_g3u2pbXU.mjs';
export { renderers } from '../renderers.mjs';

const $$Astro$1 = createAstro();
const $$Button = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Button;
  const { link, text } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<a${addAttribute(link, "href")} class="inline-flex w-auto px-4 py-2 mt-5 text-xs font-semibold duration-300 ease-out border rounded-full bg-neutral-900 dark:bg-white dark:text-neutral-900 text-neutral-100 hover:border-neutral-700 border-neutral-900 dark:hover:border-neutral-300 hover:bg-white dark:hover:bg-black dark:hover:text-white hover:text-neutral-900"> ${text} </a>`;
}, "/home/ishaq/Desktop/test-repo/src/components/button.astro", void 0);

const $$Projects = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section id="projects" class="max-w-4xl mx-auto px-7 lg:px-0"> <h2 class="text-2xl font-bold leading-10 tracking-tight text-neutral-900 dark:text-neutral-100">
My Projects
</h2> <p class="mb-6 text-base text-neutral-600 dark:text-neutral-400">
Here’s an overview of the projects I’m currently developing.
  With a focus on innovation and real-world impact, more updates are on the way...🚀⚡
</p> <div class="grid items-stretch w-full grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-7 mt-7"> ${projects.slice(0, 6).map((project) => {
    return renderTemplate`${renderComponent($$result, "Project", $$Project, { "name": project.name, "description": project.description, "image": project.image, "url": project.url })}`;
  })} </div> <div class="flex items-center justify-center w-full py-5"> ${renderComponent($$result, "Button", $$Button, { "text": "View All My Projects", "link": "/projects" })} </div> </section>`;
}, "/home/ishaq/Desktop/test-repo/src/components/home/projects.astro", void 0);

const $$Astro = createAstro();
const $$Separator = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Separator;
  const { text, link = "#" } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="relative my-32" data-astro-cid-2upraigc> <div class="relative w-full pl-5 overflow-x-hidden md:pl-0" data-astro-cid-2upraigc> <div class="absolute w-full h-px bg-gradient-to-r from-transparent to-white md:from-white dark:from-transparent dark:to-neutral-950 md:dark:from-neutral-950 md:via-transparent md:dark:via-transparent md:to-white md:dark:to-neutral-950" data-astro-cid-2upraigc></div> <div class="w-full h-px border-t border-dashed border-neutral-300 dark:border-neutral-600" data-astro-cid-2upraigc></div> </div> <a${addAttribute(link, "href")} class="absolute flex items-center justify-center w-auto h-auto px-3 py-1.5 uppercase tracking-widest space-x-1 text-[0.6rem] -translate-y-1/2 border rounded-full bg-white dark:bg-neutral-900 text-neutral-400 border-neutral-100 dark:border-neutral-800 shadow-sm hover:scale-105 transition-all duration-300 ease-in-out animate-float cursor-pointer hover:text-neutral-600 dark:hover:text-neutral-300 left-1/2 -translate-x-1/2" data-astro-cid-2upraigc> <p class="leading-none" data-astro-cid-2upraigc>${text}</p> <div class="flex items-center justify-center w-5 h-5 translate-x-1 border rounded-full border-neutral-100 dark:border-neutral-800" data-astro-cid-2upraigc> <svg class="w-3 h-3 animate-pulse" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" data-astro-cid-2upraigc><path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m0 0l6.75-6.75M12 19.5l-6.75-6.75" data-astro-cid-2upraigc></path></svg> </div> </a> </div> `;
}, "/home/ishaq/Desktop/test-repo/src/components/home/separator.astro", void 0);

const $$Writings = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section class="max-w-4xl mx-auto px-7 lg:px-0"> <h2 class="text-2xl font-bold leading-10 tracking-tight text-neutral-900 dark:text-neutral-100">
My Blogs
</h2> <p class="mb-6 text-base text-neutral-600 dark:text-neutral-400">
Along with coding I also like to write about life and technology. Here are
    some of my recent posts.
</p> <div class="w-full max-w-4xl mx-auto my-7 xl:px-0"> <div class="flex flex-col items-start justify-start md:flex-row md:space-x-7"> <!-- Left side: posts --> <div class="w-full md:w-2/3 space-y-7"> ${renderComponent($$result, "PostsLoop", $$PostsLoop, { "count": "3" })} <div class="flex items-center justify-center w-full py-5"> ${renderComponent($$result, "Button", $$Button, { "text": "View All My Blogs", "link": "/posts" })} </div> </div> <!-- Right side: Dev.to follow card --> <div class="w-full mt-10 md:w-1/3 md:mt-0"> <div class="p-6 border border-dashed rounded-2xl border-neutral-300 dark:border-neutral-600"> <div class="relative flex items-center space-x-2"> <svg class="flex-none w-6 h-6 text-neutral-700 dark:text-neutral-200" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"> <path stroke-linecap="round" stroke-linejoin="round" d="M12 7.5h1.5m-1.5 3h1.5m-7.5 3h7.5m-7.5 3h7.5m3-9h3.375c.621 0 1.125.504 1.125 1.125V18a2.25 2.25 0 01-2.25 2.25M16.5 7.5V18a2.25 2.25 0 002.25 2.25M16.5 7.5V4.875c0-.621-.504-1.125-1.125-1.125H4.125C3.504 3.75 3 4.254 3 4.875V18a2.25 2.25 0 002.25 2.25h13.5M6 7.5h3v3H6v-3z"></path> </svg> <h2 class="flex text-sm font-semibold text-neutral-900 dark:text-neutral-100">
Follow me on Dev.to
</h2> </div> <p class="mt-2 text-sm text-neutral-600 dark:text-neutral-400">
Get notified when I publish new blog posts about DevOps, Cloud
            Computing, and Software Development on Dev.to.
</p> <div class="flex flex-col items-center w-full mt-4 space-y-3"> <a href="https://dev.to/muhammad_ishaq_955f95dfa2" target="_blank" rel="noopener noreferrer" class="block w-full px-4 py-2 mt-5 text-xs font-semibold text-center duration-300 ease-out border rounded 
                     bg-neutral-900 text-neutral-100 hover:bg-white hover:text-neutral-900 
                     dark:bg-neutral-100 dark:text-neutral-900 dark:hover:bg-neutral-900 dark:hover:text-neutral-100 
                     border-neutral-900 dark:border-neutral-100">
Follow Me on Dev.to
</a> </div> </div> </div> </div> </div> </section>`;
}, "/home/ishaq/Desktop/test-repo/src/components/home/writings.astro", void 0);

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Main, { "title": "Muhammad Ishaq", "data-astro-cid-j7pv25f6": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="relative z-20 w-full max-w-4xl mx-auto mt-16 px-7 md:mt-24 lg:mt-32 xl:px-0" data-astro-cid-j7pv25f6> <div class="flex flex-col items-center md:flex-row" data-astro-cid-j7pv25f6> <div class="relative w-full md:w-1/2" data-astro-cid-j7pv25f6> <!-- Typing SVG --> <p align="center" data-astro-cid-j7pv25f6> <a href="https://github.com/muhammadiishaq" data-astro-cid-j7pv25f6> <img src="https://readme-typing-svg.herokuapp.com?font=bold+Mono&size=40&pause=1000&color=d4ad00&center=true&vCenter=true&width=700&lines=DevOps+Engineer;Cloud+Computing+Specialist;Linux+SysAdmin;CI%2FCD+Automation;IaC+%7C+Terraform+%7C+Ansible;Monitoring+%26+Observability;Cyber+Security+Enthusiast;Python+%7C+C%2B%2B+%7C+Bash" alt="Typing SVG" data-astro-cid-j7pv25f6> </a> </p> <h1 class="mb-5 text-4xl font-bold leading-tight md:text-4xl lg:text-6xl dark:text-white" data-astro-cid-j7pv25f6>
Hello, <br data-astro-cid-j7pv25f6> I'm Muhammad Ishaq
</h1> <p class="mb-6 text-base text-neutral-600 dark:text-neutral-400" data-astro-cid-j7pv25f6>
I'm a DevOps engineer from Karachi, Pakistan. <br class="hidden lg:block" data-astro-cid-j7pv25f6>
Passionate about building scalable infrastructure and automating everything from deployment to delivery. I specialize in Docker, Kubernetes, CI/CD pipelines, and cloud platforms like AWS and Azure. With hands-on experience in Linux administration and Python development, I bridge the gap between development and operations to ensure smooth, reliable software delivery.
</p> <p class="mb-2 font-semibold text-neutral-800 dark:text-neutral-200" data-astro-cid-j7pv25f6>
I can help you out with:
</p> <ul class="py-2 space-y-[3px] text-sm list-disc list-inside text-neutral-500 dark:text-neutral-400" data-astro-cid-j7pv25f6> <li data-astro-cid-j7pv25f6>DevOps Engineering & Automation</li> <li data-astro-cid-j7pv25f6>Infrastructure as Code (IaC) & Scalable Architectures</li> <li data-astro-cid-j7pv25f6>Cloud & Edge Computing Solutions</li> <li data-astro-cid-j7pv25f6>Containerization & Microservices Orchestration</li> <li data-astro-cid-j7pv25f6>System Administration & Network Reliability</li> <li data-astro-cid-j7pv25f6>Open Source & DevOps Community Leadership</li> <li data-astro-cid-j7pv25f6>and more...</li> </ul> ${renderComponent($$result2, "Button", $$Button, { "text": "Follow me on linkedin", "link": "https://www.linkedin.com/in/muhammadishaq-khan/", "data-astro-cid-j7pv25f6": true })} ${renderComponent($$result2, "Button", $$Button, { "text": "Follow me on GitHub", "link": "https://github.com/muhammadiishaq", "data-astro-cid-j7pv25f6": true })} </div> <!-- Cinematic Border Image Section without Emoji --> <div class="relative justify-end hidden w-full mt-10 md:flex md:pl-10 md:w-1/2 md:mt-0 md:translate-y-4 xl:translate-y-0" data-astro-cid-j7pv25f6> <div class="relative z-50 w-full flex justify-center" data-astro-cid-j7pv25f6> <div class="relative group" data-astro-cid-j7pv25f6> <!-- Outer Glow --> <div class="absolute inset-0 rounded-2xl bg-gradient-to-r from-yellow-500 via-red-500 to-pink-500 opacity-40 blur-3xl animate-pulse" data-astro-cid-j7pv25f6></div> <!-- Inner Border with animated diagonal streaks --> <div class="absolute inset-0 border-4 border-yellow-400 rounded-2xl overflow-hidden" data-astro-cid-j7pv25f6> <div class="absolute inset-0 bg-[linear-gradient(45deg,rgba(255,255,255,0.15) 25%,transparent 25%,transparent 50%,rgba(255,255,255,0.15) 50%,rgba(255,255,255,0.15) 75%,transparent 75%,transparent)] bg-[length:50px_50px] animate-[moveStripes_4s_linear_infinite] rounded-2xl" data-astro-cid-j7pv25f6></div> </div> <!-- Profile Image with hover lift --> <img src="/assets/images/photo1.png" loading="eager" decoding="auto" class="relative z-10 w-full max-w-md rounded-2xl shadow-2xl transition-transform duration-500 group-hover:-translate-y-2" alt="Muhammad Ishaq" data-astro-cid-j7pv25f6> </div> </div> </div> </div> </div> ${renderComponent($$result2, "Separator", $$Separator, { "text": "Check out my projects", "link": "#projects", "data-astro-cid-j7pv25f6": true })} ${renderComponent($$result2, "Projects", $$Projects, { "data-astro-cid-j7pv25f6": true })} ${renderComponent($$result2, "Separator", $$Separator, { "text": "Some of my writing", "link": "#writings", "data-astro-cid-j7pv25f6": true })} <div id="writings" data-astro-cid-j7pv25f6> ${renderComponent($$result2, "Writings", $$Writings, { "data-astro-cid-j7pv25f6": true })} </div> ${renderComponent($$result2, "ContactSection", $$ContactForm, { "data-astro-cid-j7pv25f6": true })} ` })} `;
}, "/home/ishaq/Desktop/test-repo/src/pages/index.astro", void 0);

const $$file = "/home/ishaq/Desktop/test-repo/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
