/* empty css                                 */
import { c as createComponent, d as createAstro, r as renderComponent, a as renderTemplate } from '../chunks/astro/server_D0N2Goyc.mjs';
import 'kleur/colors';
import { $ as $$Main } from '../chunks/main_DtTr-pTQ.mjs';
import { $ as $$ContactForm } from '../chunks/contact-form_g3u2pbXU.mjs';
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro();
const $$Contact = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Contact;
  let success = false;
  let error = "";
  if (Astro2.request.method === "POST") {
    try {
      const formData = await Astro2.request.formData();
      const name = formData.get("name");
      const email = formData.get("email");
      const message = formData.get("message");
      if (!name || !email || !message) {
        throw new Error("All fields are required");
      }
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, message })
      });
      if (response.ok) success = true;
      else throw new Error("Failed to send email");
    } catch (err) {
      error = err.message;
    }
  }
  return renderTemplate`${renderComponent($$result, "Layout", $$Main, { "title": "Contact" }, { "default": async ($$result2) => renderTemplate` ${renderComponent($$result2, "ContactForm", $$ContactForm, { "success": success, "error": error })} ` })}`;
}, "/home/ishaq/Desktop/test-repo/src/pages/contact.astro", void 0);

const $$file = "/home/ishaq/Desktop/test-repo/src/pages/contact.astro";
const $$url = "/contact";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Contact,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
