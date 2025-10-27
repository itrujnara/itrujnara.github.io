import { faEarthEurope } from "@fortawesome/free-solid-svg-icons";
import CVSection, { CVBulletList } from "../ui/cv_section";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

export default function CommunitySection({
  showDescriptions,
}: {
  showDescriptions: boolean;
}) {
  return (
    <>
      <h2>Community Roles</h2>
      <CVSection
        position="Maintainer"
        employer="nf-core"
        location="Remote"
        startDate="March 2025"
        endDate="Ongoing"
        links={[
          { icon: faEarthEurope, url: "https://nf-co.re" },
          { icon: faGithub, url: "https://github.com/nf-core" },
        ]}
        showDescriptions={showDescriptions}
      >
        <CVBulletList
          items={[
            "Maintainer in a large open-source community (over 1k contributors and 10k users).",
            "Maintaining and improving bioinformatics pipelines built with Nextflow.",
            "Assisting users and contributors with issues and pull requests.",
            "Involved in strategic decisions on the development of the community.",
          ]}
        />
      </CVSection>
    </>
  );
}
