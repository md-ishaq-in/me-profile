import { c as createComponent, d as createAstro, m as maybeRenderHead, e as renderScript, a as renderTemplate, r as renderComponent, F as Fragment } from './astro/server_D0N2Goyc.mjs';
import 'kleur/colors';

const $$Astro = createAstro();
const $$ContactForm = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$ContactForm;
  const { success = false, error = "" } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<section class="max-w-xl mx-auto my-12 p-8 bg-white/5 rounded-lg shadow-lg"> <h2 class="text-3xl font-bold mb-2 text-yellow-400">Contact Me</h2> <p class="mb-6 text-lg">Let's talk — I'm currently open for new opportunities.</p> ${success ? renderTemplate`<div class="bg-green-600 p-3 rounded">✅ Message sent successfully!</div>` : renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": async ($$result2) => renderTemplate`${error && renderTemplate`<div class="bg-red-600 p-3 rounded mb-4">❌ ${error}</div>`}<form id="contactForm" class="space-y-4"> <div> <label for="name" class="block mb-1 font-semibold">Your Name</label> <input type="text" id="name" name="name" class="w-full p-2 rounded bg-gray-800 text-white border border-gray-600" required> </div> <div> <label for="email" class="block mb-1 font-semibold">Your Email</label> <input type="email" id="email" name="email" class="w-full p-2 rounded bg-gray-800 text-white border border-gray-600" required> </div> <div> <label for="message" class="block mb-1 font-semibold">Message</label> <textarea id="message" name="message" rows="4" class="w-full p-2 rounded bg-gray-800 text-white border border-gray-600" required></textarea> </div> <button type="submit" class="bg-yellow-400 text-black font-bold px-6 py-2 rounded hover:bg-yellow-500">Send Message</button> </form> <div id="formStatus" class="mt-4"></div> ` })}`} </section> ${renderScript($$result, "/home/ishaq/Desktop/test-repo/src/components/contact-form.astro?astro&type=script&index=0&lang.ts")}`;
}, "/home/ishaq/Desktop/test-repo/src/components/contact-form.astro", void 0);

export { $$ContactForm as $ };
