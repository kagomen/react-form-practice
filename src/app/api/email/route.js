import Email from '@/email';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req) {
  // const { email, firstName } = await req.json()

  await resend.emails.send({
    from: 'onboarding@resend.dev',
    to: process.env.MY_EMAIL_ADDRESS,
    subject: 'hello world',
    react: Email({ firstName })
  });
}


