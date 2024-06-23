import Link from "next/link";

export default function Home() {
  return (
    <main className="mt-4 flex flex-col gap-2 text-center">
      <h2 className='text-center mb-4 font-bold'>Practices</h2>
      <Link className="underline" href='/react-form/state-form'>React useState Form</Link >
      <Link className="underline" href='/react-form/ref-form'>React useRef Form</Link >
      <Link className="underline" href='/immer'>Immer</Link >
      <Link className="underline" href='/to-do'>React TodoList</Link >
      <Link className="underline" href='/react-hook-form'>react-hook-form</Link >
      <Link className="underline" href='/yup'>Yup</Link >
      <Link className="underline" href='/advanced-yup'>advanced Yup</Link >
      <Link className="underline" href='/resend'>Resend</Link >
    </main>
  );
}
