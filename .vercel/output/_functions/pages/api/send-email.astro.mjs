import nodemailer from 'nodemailer';
export { renderers } from '../../renderers.mjs';

const POST = async ({ request }) => {
  try {
    const user = "devopsaws804@gmail.com";
    const pass = "ynus hdzp rafw dzha";
    if (!user || !pass) ;
    const { name, email, message } = await request.json();
    if (!name || !email || !message) {
      return new Response(JSON.stringify({ message: "All fields are required" }), { status: 400 });
    }
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: { user, pass }
    });
    await transporter.sendMail({
      from: `"${name} (${email})" <${user}>`,
      replyTo: email,
      to: user,
      subject: `📬 New Email from Portfolio: ${name}`,
      html: `<p><strong>Name:</strong> ${name}</p><p><strong>Email:</strong> ${email}</p><p>${message}</p>`
    });
    return new Response(JSON.stringify({ message: "Email sent successfully!" }), { status: 200 });
  } catch (err) {
    console.error("Email sending error:", err);
    return new Response(JSON.stringify({ message: "Failed to send email" }), { status: 500 });
  }
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  POST
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
