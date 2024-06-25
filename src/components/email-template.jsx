import { Hr, Tailwind, Text } from "@react-email/components";

export function EmailTemplate({ name, email, body }) {
  return (
    <Tailwind>
      <Text>{name}さま</Text>
      <Text>メッセージの送信を受け付けました！</Text>
      <Hr />
      <Text>メールアドレス: {email}</Text>
      <Text>メッセージ: {body}</Text>
    </Tailwind>
  )
}