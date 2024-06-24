import Link from "next/link"
import ThemeBtn from "./ThemeBtn"

const Header = () => {
  return (
    <header className="border-b flex justify-between items-center p-2">
      <Link href='/' className="font-bold text-lg px-3 py-2">Practice React Form</Link>
      <ThemeBtn />
    </header>
  )
}

export default Header