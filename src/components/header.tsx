import { Link } from "react-router-dom"
import NiceLink from "./ui/nice_link"

export default function Header() {
  return (
    <header className="w-full flex flex-col md:flex-row justify-between items-center p-6">
      <Link to="/" className="text-2xl md:text-4xl font-bold">
        Igor Trujnara
      </Link>
      <nav>
        <ul className="pt-4 md:pt-0 flex flex-col md:flex-row gap-4 text-xl">
          <li>
            <NiceLink variant="nav" to="/">
              Home
            </NiceLink>
          </li>
          <li>
            <NiceLink variant="nav" to="/projects">
              Projects
            </NiceLink>
          </li>
          <li>
            <NiceLink variant="nav" to="/cv">
              CV
            </NiceLink>
          </li>
          <li>
            <NiceLink variant="nav" to="/blog">
              Blog
            </NiceLink>
          </li>
        </ul>
      </nav>
    </header>
  )
}
