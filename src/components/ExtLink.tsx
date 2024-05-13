import LinkContent from "./LinkContent"

export default function ExtLink({
  href,
  children,
}: {
  href: string
  children: React.ReactNode
}) {
  return (
    <a href={href} target="_blank" className="w-full">
      <LinkContent>{children}</LinkContent>
    </a>
  )
}
