import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function IconLink({
  href,
  icon,
}: {
  href: string;
  icon: IconProp;
}) {
  return (
    <a
      href={href}
      className="flex items-center space-x-2 text-foreground hover:text-accent transition-colors duration-300"
      target="_blank"
      rel="noopener noreferrer"
    >
      <FontAwesomeIcon icon={icon} />
    </a>
  );
}
