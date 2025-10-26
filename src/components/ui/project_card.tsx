export default function ProjectCard({
  title,
  supervisor,
  group,
  children,
}: {
  title: string;
  supervisor?: string;
  group?: string;
  children: React.ReactNode;
}) {
  return (
    <div className="project-card my-6">
      <h3 className="text-2xl">{title}</h3>
      <hr className="my-2 border-accent" />
      {supervisor && <p className="text-lg">Supervisor: {supervisor}</p>}
      {group && <p className="text-lg">Group: {group}</p>}
      {children}
    </div>
  );
}

export function ProjectLinks({ children }: { children: React.ReactNode }) {
  return <div className="my-2 flex gap-3 text-2xl">{children}</div>;
}
