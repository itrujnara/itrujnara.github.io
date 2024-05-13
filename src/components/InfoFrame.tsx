export default function InfoFrame({ children }: { children: React.ReactNode }) {
  return (
    <div className="w-full flex flex-col gap-4 items-center justify-center border-indigo-500 border-2 p-4 rounded-2xl">
      {children}
    </div>
  )
}

export function InfoParagraph({ children }: { children: React.ReactNode }) {
  return <p className="w-full flex flex-row gap-2 justify-center">{children}</p>
}
