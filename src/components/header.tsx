import { Link } from "react-router-dom";
import NiceLink from "./ui/nice_link";
import IconLink from "./ui/icon_link";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

export default function Header() {
  return (
    <header className="md:sticky top-0 w-full flex flex-col md:flex-row justify-between items-center p-6 bg-background/80 backdrop-blur-md z-10">
      <Link to="/" className="text-2xl md:text-4xl font-bold">
        Igor Trujnara
      </Link>
      <nav>
        <ul className="pt-4 md:pt-0 flex flex-col md:flex-row gap-4 text-xl text-center md:text-left">
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
          {/* <li>
            <NiceLink variant="nav" to="/blog">
              Blog
            </NiceLink>
          </li> */}
          <li>
            <NiceLink variant="nav" to="/contact">
              Contact
            </NiceLink>
          </li>
          <li className="flex items-center justify-center text-2xl">
            <IconLink
              icon={faGithub}
              href="https://github.com/itrujnara/itrujnara.github.io"
            />
          </li>
        </ul>
      </nav>
    </header>
  );
}
