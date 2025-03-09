import { HTMLProps } from "react"
import { Link } from "react-router-dom"

interface NiceLinkProps {
  to: string
  variant?: "nav" | "inline"
}

export default function NiceLink({
  to,
  variant = "inline",
  children,
}: HTMLProps<HTMLAnchorElement> & NiceLinkProps) {
  return (
    <Link className="group transition-all duration-300 ease-in-out" to={to}>
      <span
        className={
          "bg-left-bottom bg-gradient-to-r bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out " +
          (variant === "nav"
            ? "from-foreground to-foreground"
            : "text-accent from-accent to-accent")
        }
      >
        {children}
      </span>
    </Link>
  )
}
