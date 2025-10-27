import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import CVSection from "../ui/cv_section";

export default function ReferencesSection() {
  return (
    <>
      <h2>References</h2>
      <CVSection
        position="Cedric Notredame"
        employer="Senior Group Leader"
        location="CRG, Barcelona, Spain"
        startDate=""
        links={[
          {
            icon: faEnvelope,
            url: "mailto:cedric.notredame@crg.eu",
          },
        ]}
        showDescriptions={false}
      />
      <CVSection
        position="Roderic Guigó"
        employer="Senior Group Leader"
        location="CRG, Barcelona, Spain"
        startDate=""
        links={[
          {
            icon: faEnvelope,
            url: "mailto:roderic.guigo@crg.eu",
          },
        ]}
        showDescriptions={false}
      />
      <CVSection
        position="Hafid Laayouni"
        employer="Associate Professor"
        location="Universitat Pompeu Fabra, Barcelona, Spain"
        startDate=""
        links={[
          {
            icon: faEnvelope,
            url: "mailto:hafid.laayouni@upf.edu",
          },
        ]}
        showDescriptions={false}
      />
    </>
  );
}
