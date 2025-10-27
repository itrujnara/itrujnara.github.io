import { IconProp } from "@fortawesome/fontawesome-svg-core";
import IconLink from "./icon_link";

export default function CVSection({
  position,
  employer,
  location,
  startDate,
  endDate,
  links,
  showDescriptions,
  children,
}: {
  position: string;
  employer: string;
  location: string;
  startDate: string;
  endDate?: string;
  links?: { icon: IconProp; url: string }[];
  showDescriptions: boolean;
  children?: React.ReactNode;
}) {
  return (
    <div className="cv-section w-screen max-w-full my-4 border border-accent p-4 rounded-lg">
      <h3>{position}</h3>
      <h4 className="text-accent">{employer}</h4>
      <p className="text-muted-foreground">{location}</p>
      {startDate && (
        <p>
          {startDate} {endDate ? `- ${endDate}` : ""}
        </p>
      )}
      {showDescriptions && <>{children}</>}
      {links && links.length > 0 && (
        <div className="cv-links mt-4 flex gap-4 text-2xl">
          {links.map((link, index) => (
            <IconLink key={index} icon={link.icon} href={link.url} />
          ))}
        </div>
      )}
    </div>
  );
}

export function CVBulletList({ items }: { items: string[] }) {
  return (
    <ul className="list-disc list-inside text-lg">
      {items.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  );
}
