export default function LinkContent({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="text-center border-2 border-white rounded-full hover:bg-primaryfg hover:text-primarybg p-4 transition-all duration-700">
      {children}
    </div>
  )
}
