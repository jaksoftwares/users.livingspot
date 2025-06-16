// src/utils/email.ts
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendVerificationEmail(email: string, name: string, token: string) {
  const verifyLink = `${process.env.NEXT_PUBLIC_BASE_URL}/auth/verify?token=${token}`;
  const subject = "Verify Your Email - LivingSpot";
  const html = `
    <h2>Hello ${name},</h2>
    <p>Thanks for signing up. Please click the link below to verify your email:</p>
    <a href="${verifyLink}" target="_blank" style="color:blue;">Verify Email</a>
    <p>If you didn't sign up, please ignore this.</p>
  `;

  await sendEmail({ to: email, subject, html });
}

async function sendEmail({ to, subject, html }: { to: string; subject: string; html: string }) {
  await resend.emails.send({
    from: 'noreply@livingspot.ke',
    to,
    subject,
    html,
  });
}
