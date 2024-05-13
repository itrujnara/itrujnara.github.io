import { NavLink, To } from "react-router-dom"
import LinkContent from "./LinkContent"

export default function DialogAnswer({
  href,
  children,
}: {
  href: To
  children: React.ReactNode
}) {
  return (
    <NavLink to={href} className="w-full">
      <LinkContent>{children}</LinkContent>
    </NavLink>
  )
}
