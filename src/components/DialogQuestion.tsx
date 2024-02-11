import { useLocation } from "react-router"
import Typewriter from "typewriter-effect"

export default function DialogQuestion({ children }: { children: string }) {
  const location = useLocation()
  const displayName =
    location.pathname === "/" ? "Mystery Programmer" : "Igor Trujnara"
  return (
    <div className="w-full flex flex-col lg:flex-row gap-4">
      <div className="max-w-[100px] m-auto flex flex-col gap-2">
        <img
          src="fb_pfp.jpg"
          alt={`Photo of ${displayName}`}
          className="rounded-full"
        />
        <div className="m-auto text-sm text-center">{displayName}</div>
      </div>
      <div className="grow text-white text-xl lg:text-4xl font-mono text-justify">
        <div className="w-full h-full flex items-center justify-center">
          <Typewriter
            onInit={(typewriter) => {
              typewriter.typeString(children).start()
            }}
            options={{
              delay: 80,
              cursorClassName: "hidden",
            }}
          />
        </div>
      </div>
    </div>
  )
}
