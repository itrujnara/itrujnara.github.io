export default function PillList({ items }: { items: string[] }) {
  return (
    <div className="flex flex-wrap gap-2 my-2">
      {items.map((item, index) => (
        <span
          key={index}
          className="inline-block px-3 py-1 text-sm font-semibold border border-accent rounded-full"
        >
          {item}
        </span>
      ))}
    </div>
  );
}
