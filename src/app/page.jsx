import Link from "next/link";
import Footer from "./shadcn-ui-dark-mode/components/Footer";
import Header from "@/components/my-ui/Header";

export default function Home() {
  return (
    <div className="min-h-dvh">
      <Header />
      <main className="w-fit mt-12 mx-auto flex flex-col gap-4">
        <Link className="underline" href='/react-form/state-form'>React useState Form</Link >
        <Link className="underline" href='/react-form/ref-form'>React useRef Form</Link >
        <Link className="underline" href='/immer'>Immer</Link >
        <Link className="underline" href='/to-do'>React TodoList</Link >
        <Link className="underline" href='/react-hook-form'>React Hook Form</Link >
        <Link className="underline" href='/yup'>Yup</Link >
        <Link className="underline" href='/advanced-yup'>advanced Yup</Link >
        <Link className="underline" href='/shadcn-ui'>shadcn/ui Contact Form</Link >
        <Link className="underline" href='/shadcn-ui-dark-mode'>shadcn/ui Dark Mode Button</Link >
        <Link className="underline" href='/resend'>Resend</Link >
      </main>
      <Footer />
    </div>
  );
}
