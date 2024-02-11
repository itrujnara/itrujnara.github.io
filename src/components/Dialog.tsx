export default function Dialog({ children }: { children: React.ReactNode }) {
  return (
    <div className="w-[50%] min-w-[300px] max-w-[1000px] m-auto flex flex-col gap-5 items-center">
      {children}
    </div>
  )
}
