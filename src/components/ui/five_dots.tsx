export default function FiveDots({ n_full = 5 }: { n_full?: number }) {
  return (
    <div className="flex space-x-1">
      {[...Array(5)].map((_, i) => (
        <div
          key={i}
          className={`w-3 h-3 rounded-full ${
            i < n_full ? "bg-accent" : "bg-accent/20"
          }`}
        ></div>
      ))}
    </div>
  );
}
