import { faEarthEurope } from "@fortawesome/free-solid-svg-icons";
import CVSection, { CVBulletList } from "../ui/cv_section";
import {
  faInstagram,
  faOrcid,
  faXTwitter,
} from "@fortawesome/free-brands-svg-icons";

export default function EmploymentSection({
  showDescriptions,
  scientificMode,
}: {
  showDescriptions: boolean;
  scientificMode: boolean;
}) {
  return (
    <>
      <h2>Employment History</h2>
      {scientificMode && <h3>Academic</h3>}
      <CVSection
        position="Bioinformatician"
        employer="Gabaldón Group, IRB Barcelona"
        location="Barcelona, Spain"
        startDate="October 2025"
        endDate="Ongoing"
        links={[
          { icon: faEarthEurope, url: "https://cgenomics.org" },
          { icon: faOrcid, url: "https://orcid.org/0000-0003-0019-1735" },
        ]}
        showDescriptions={showDescriptions}
      >
        <CVBulletList
          items={[
            "Developing machine learning models for early detection of colorectal cancer using metagenomics.",
          ]}
        />
      </CVSection>
      <CVSection
        position="Master's Student"
        employer="Neutrinos Group, IFAE"
        location="Barcelona, Spain"
        startDate="April 2025"
        endDate="July 2025"
        links={[
          { icon: faEarthEurope, url: "https://ifae.es/groups/neutrinos/" },
          { icon: faOrcid, url: "https://orcid.org/0000-0002-0394-5646" },
        ]}
        showDescriptions={showDescriptions}
      >
        <CVBulletList
          items={[
            "Developed deep learning models for particle classification in the HyperK experiment.",
            "Improved the lab's data pipeline and introduced novel training approaches.",
          ]}
        />
      </CVSection>
      <CVSection
        position="Master's Student"
        employer="Guigó Lab, CRG"
        location="Barcelona, Spain"
        startDate="October 2024"
        endDate="July 2025"
        links={[
          { icon: faEarthEurope, url: "https://https://genome.crg.es" },
          { icon: faOrcid, url: "https://orcid.org/0000-0002-5738-4477" },
        ]}
        showDescriptions={showDescriptions}
      >
        <CVBulletList
          items={[
            "Explored the potential of DNA large language models for gene annotation.",
            "Supported other biodiversity research projects in the lab.",
          ]}
        />
      </CVSection>
      <CVSection
        position="Bachelor's Student"
        employer="Notredame Lab, CRG"
        location="Barcelona, Spain"
        startDate="January 2022"
        endDate="June 2024"
        links={[
          { icon: faEarthEurope, url: "https://www.crg.eu/cedric_notredame" },
          { icon: faOrcid, url: "https://orcid.org/0000-0003-1461-0988" },
        ]}
        showDescriptions={showDescriptions}
      >
        <CVBulletList
          items={[
            "Developed a scalable and reproducible pipeline for comparing orthology annotations.",
            "Analyzed experimental and generated structures of the BicD2 protein, leading to novel wet lab experiments.",
            "Provided technical assistance to multiple projects in the group.",
          ]}
        />
      </CVSection>
      {scientificMode && <h3>Other</h3>}
      <CVSection
        position="Game Developer"
        employer="Vistula Development"
        location="Remote"
        startDate="January 2022"
        endDate="Ongoing"
        links={[
          {
            icon: faInstagram,
            url: "https://www.instagram.com/trackracergame/",
          },
          { icon: faXTwitter, url: "https://x.com/vistuladev" },
        ]}
        showDescriptions={showDescriptions}
      >
        <CVBulletList
          items={[
            "One of 2 developers of an indie game.",
            "Designing and implementing the user interface and visual effects for an arcade racing game.",
            "Creating 2D and 3D visual assets for the game.",
          ]}
        />
      </CVSection>
    </>
  );
}
