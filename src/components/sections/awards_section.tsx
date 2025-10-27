import CVSection from "../ui/cv_section";

export default function AwardsSection({
  showDescriptions,
}: {
  showDescriptions: boolean;
}) {
  return (
    <>
      <h2>Awards</h2>
      <CVSection
        position="BIST Fellowship"
        employer="Barcelona Institute of Science and Technology (BIST)"
        location="Barcelona, Spain"
        startDate="2024"
        showDescriptions={showDescriptions}
      >
        Covers full tuition fees for the master's program for the duration of
        the fellowship.
      </CVSection>

      <CVSection
        position="Final Project Award"
        employer="Universitat Pompeu Fabra"
        location="Barcelona, Spain"
        startDate="2024"
        showDescriptions={showDescriptions}
      >
        Awarded to the best bachelor's theses in the Bioinformatics degree
        program.
      </CVSection>
    </>
  );
}
