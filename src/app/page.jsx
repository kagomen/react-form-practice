'use client'

export default function Home() {
  return (
    <main>
      <button onClick={async () => {
        await fetch('/api/email', {
          method: 'POST',
          body: JSON.stringify({
            email: process.env.MY_EMAIL_ADDRESS,
            firstName: 'kagome',

          })
        })
      }}>メールを送信する</button>
    </main>
  );
}
