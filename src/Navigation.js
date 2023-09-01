import { NavLink, useResolvedPath, useMatch } from "react-router-dom";

export default function Navigation() {
    return (
        <ul className="col-span-1 flex flex-col gap-2 text-lg items-center justify-center bg-gray-700 text-gray-400">
            <NavEntry to="/">Home</NavEntry>
            <NavEntry to="/about">About Me</NavEntry>
            <NavEntry to="/education">Education</NavEntry>
        </ul>
    )
}

function NavEntry({to, children, ...props}) {
    const resolvedPath = useResolvedPath(to);
    const isActive = useMatch({path: resolvedPath.pathname, end: true});
    return (
        <li className={isActive ? "active" : ""}>
            <NavLink to={to} {...props}>{children}</NavLink>
        </li>
    )
}