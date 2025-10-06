import type { APIRoute } from 'astro';
import nodemailer from 'nodemailer';

export const POST: APIRoute = async ({ request }) => {
  try {
    const user = import.meta.env.ASTRO_EMAIL_USER;
    const pass = import.meta.env.ASTRO_EMAIL_PASS;

    if (!user || !pass) {
      console.error("⚠ ASTRO_EMAIL_USER or ASTRO_EMAIL_PASS is missing!");
      return new Response(JSON.stringify({ message: 'Server misconfiguration' }), { status: 500 });
    }

    const { name, email, message } = await request.json();

    if (!name || !email || !message) {
      return new Response(JSON.stringify({ message: 'All fields are required' }), { status: 400 });
    }

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: { user, pass },
    });

    await transporter.sendMail({
      from: `"${name} (${email})" <${user}>`,
      replyTo: email,
      to: user,
      subject: `📬 New Email from Portfolio: ${name}`,
      html: `<p><strong>Name:</strong> ${name}</p><p><strong>Email:</strong> ${email}</p><p>${message}</p>`,
    });

    return new Response(JSON.stringify({ message: 'Email sent successfully!' }), { status: 200 });
  } catch (err) {
    console.error("Email sending error:", err);
    return new Response(JSON.stringify({ message: 'Failed to send email' }), { status: 500 });
  }
};
