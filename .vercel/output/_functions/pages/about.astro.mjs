/* empty css                                 */
import { c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead, b as addAttribute } from '../chunks/astro/server_D0N2Goyc.mjs';
import 'kleur/colors';
import { $ as $$PageHeading } from '../chunks/page-heading_C0B15EGP.mjs';
import { $ as $$Main } from '../chunks/main_DtTr-pTQ.mjs';
export { renderers } from '../renderers.mjs';

const experiences = [
	{
		dates: "December 2025 · Present",
		role: "DevOps Engineer",
		company: "Al Nafi Cloud",
		description: "Working as a DevOps Engineer, responsible for managing and optimizing cloud infrastructure and deployment pipelines.",
		logo: "/assets/images/experiences/Alnafi.jpeg"
	},
	{
		dates: "Apr 2024 · Nov 2024",
		role: "Linux Admin Intern",
		company: "Al Nafi Cloud",
		description: "Intern, involved in the administration of Linux based servers and cloud infrastructure.",
		logo: "/assets/images/experiences/Alnafi.jpeg"
	},
	{
		dates: "March 2024 · May 2024 ",
		role: "Python Developer",
		company: "CodeSoft",
		description: "Intern, involved in the development of python based applications.",
		logo: "/assets/images/experiences/codesoft.jpeg"
	}
];

const $$About = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Main, { "title": "About Me" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="relative z-20 max-w-5xl mx-auto my-12 px-7 lg:px-8"> ${renderComponent($$result2, "PageHeading", $$PageHeading, { "title": "About Me", "description": "Hello \u{1F44B}.. Me Muhammad Ishaq a DevOps Engineer from Karachi, Pakistan.I focus on building scalable cloud-native architectures, automating infrastructure with IaC, and improving system reliability through observability and DevOps best practices." })} <img src="/assets/images/Banner.png" class="relative z-30 w-full my-10 rounded-xl"> <div class="z-50 w-full prose prose-neutral dark:prose-invert lg:prose-lg"> <h2 class="text-2xl font-bold dark:text-neutral-200">Short Bio</h2> <p class="text-white-600 white:text-neutral-400">
DevOps Engineer | Cloud & Automation Enthusiast
</p> <p class="text-white-600 white:text-neutral-400">
I'm a DevOps engineer from Karachi, Pakistan, passionate about building scalable infrastructure and automating everything from deployment to delivery. I specialize in Docker, Kubernetes, CI/CD pipelines, and cloud platforms like AWS and Azure. With hands-on experience in Linux administration and Python development, I bridge the gap between development and operations to ensure smooth, reliable software delivery.
</p> <h2 class="mt-10 text-3xl font-extrabold text-neutral-900 dark:text-white tracking-wide">
Experience
</h2> <div class="relative px-5 py-10"> <!-- Vertical Timeline Line --> <div class="absolute left-8 top-0 h-full w-1 bg-gradient-to-b from-yellow-500 via-yellow-400 to-yellow-300 dark:from-yellow-400 dark:via-yellow-300 dark:to-yellow-200 rounded-full"></div> <div class="space-y-14 relative z-10"> ${experiences.map((experience, index) => renderTemplate`<div class="relative pl-16"> <!-- Timeline Dot --> <div class="absolute left-[1.4rem] top-2 w-5 h-5 bg-yellow-500 dark:bg-yellow-400 rounded-full shadow-lg ring-4 ring-white dark:ring-neutral-900"></div> <div class="flex flex-col md:flex-row md:items-center gap-6"> <!-- Company Logo --> <img${addAttribute(experience.logo, "src")}${addAttribute(`${experience.company} logo`, "alt")} class="w-16 h-16 rounded-xl object-contain bg-white dark:bg-neutral-900 p-2 shadow-md border border-neutral-200 dark:border-neutral-700"> <div class="flex flex-col space-y-2"> <!-- Role --> <h3 class="text-2xl font-bold text-neutral-900 dark:text-white"> ${experience.role} </h3> <!-- Company --> <p class="text-xl font-semibold text-yellow-600 dark:text-yellow-400"> ${experience.company} </p> <!-- Dates --> <p class="text-sm italic text-neutral-600 dark:text-neutral-300"> ${experience.dates} </p> <!-- Description --> <p class="text-base leading-relaxed text-neutral-700 dark:text-neutral-200 mt-3"> ${experience.description} </p> </div> </div> </div>`)} </div> </div> <h2 class="mt-10 text-2xl font-bold dark:text-neutral-200">My Expertise</h2> <ul> <li>Container orchestration with Docker and Kubernetes</li> <li>Infrastructure as Code (IaC) using Terraform and CloudFormation</li> <li>CI/CD pipeline automation</li> <li>Cloud platforms (AWS, GCP, Azure)</li> <li>System monitoring and observability</li> <li>Automation and scripting</li> </ul> <h2 class="mt-10 text-2xl font-bold dark:text-neutral-200">Let's Connect</h2>  <p class="text-gray-600 dark:text-neutral-400">
If you want to stay up to date with my work be sure to <a href="https://www.linkedin.com/in/muhammadishaq-khan/" target="_blank" class="text-indigo-600 underline">follow me on linkedin</a>, or you can send me an <a href="mailto:devopsaws804@gmail.com" class="text-indigo-600 underline">email</a> and I'll be sure to get back to you.
</p> </div> </section> ` })}`;
}, "/home/ishaq/Desktop/test-repo/src/pages/about.astro", void 0);

const $$file = "/home/ishaq/Desktop/test-repo/src/pages/about.astro";
const $$url = "/about";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$About,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
