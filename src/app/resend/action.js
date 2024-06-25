'use server'

import { Resend } from "resend";
import { formSchema } from "./schema"
import { EmailTemplate } from "@/components/email-template";

export async function sendEmail(data) {
  const result = formSchema.safeParse(data)  // サーバー側でもバリデーションを行う

  if (!result.success) {
    return { error: result.error }
  }

  // メッセージの送信
  const resend = new Resend(process.env.RESEND_API_KEY);

  const { error } = await resend.emails.send({
    from: process.env.MY_EMAIL_ADDRESS,
    to: ['mejej50073@gawte.com'],
    subject: 'Hello world',
    react: EmailTemplate(data),  // リッチメール
    text: `hello! ${data.name}!`  // プレーンテキスト
  });

  if (error) {
    return { error }
  }
}