import nodemailer from 'nodemailer';
export { renderers } from '../../renderers.mjs';

console.log("✅ API loaded: /api/send-email is ready");
const POST = async ({ request }) => {
  try {
    console.log("Email user:", "devopsaws804@gmail.com");
    console.log("Email pass exists:", true);
    const { name, email, message } = await request.json();
    if (!name || !email || !message) {
      return new Response(JSON.stringify({ message: "All fields are required" }), { status: 400 });
    }
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "devopsaws804@gmail.com",
        pass: "ynus hdzp rafw dzha"
      }
    });
    await transporter.sendMail({
      from: `"${name} (${email})" <${"devopsaws804@gmail.com"}>`,
      replyTo: email,
      to: "devopsaws804@gmail.com",
      subject: `📬 New Email from your portfolio Name : ${name}`,
      html: `
      <h2>New message from your portfolio contact form</h2>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Message:</strong></p>
      <p style="white-space: pre-wrap;">${message}</p>
      <hr />
      <p style="font-size: 12px; color: gray;">This message was sent from your portfolio website form.</p>
    `
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
