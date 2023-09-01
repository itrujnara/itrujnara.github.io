import { NavLink } from "react-router-dom";

export default function Header() {
    return (
        <div className="flex flex-col gap-4 items-center mx-0 bg-gray-700 py-5">
            <h1 className="text-gray-400 font-bold text-xl md:text-4xl"><NavLink to="/">Igor Trujnara</NavLink></h1>
            <h2 className="text-gray-500 text-lg md:text-2xl">Bioinformatician & Game Developer</h2>
        </div>
    )
}