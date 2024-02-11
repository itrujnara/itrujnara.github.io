import { NavLink, To } from "react-router-dom"

export default function DialogAnswer({
  href,
  children,
}: {
  href: To
  children: React.ReactNode
}) {
  return (
    <NavLink to={href} className="w-full">
      <div className="text-center border-2 border-white rounded-full hover:bg-primaryfg hover:text-primarybg p-4 transition-all duration-700">
        {children}
      </div>
    </NavLink>
  )
}
