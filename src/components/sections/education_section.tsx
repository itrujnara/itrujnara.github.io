import { faEarthEurope, faNewspaper } from "@fortawesome/free-solid-svg-icons";
import CVSection from "../ui/cv_section";

export default function EducationSection({
  showDescriptions,
}: {
  showDescriptions: boolean;
}) {
  return (
    <>
      <h2>Education</h2>
      <CVSection
        position="Master of Multidisciplinary Research in Experimental Sciences"
        employer="Universitat Pompeu Fabra"
        location="Barcelona, Spain"
        startDate="September 2024"
        endDate="July 2025"
        links={[{ icon: faEarthEurope, url: "https://www.mmres.bist.eu" }]}
        showDescriptions={showDescriptions}
      >
        <p>
          Thesis title:{" "}
          <em>
            Exploring the detection of DNA features by the Evo large language
            model
          </em>
        </p>
        <p>
          Minor project:{" "}
          <em>Particle classification with ND280 HA-TPC using deep learning</em>
        </p>
      </CVSection>
      <CVSection
        position="Bachelor's Degree in Bioinformatics"
        employer="Universitat Pompeu Fabra"
        location="Barcelona, Spain"
        startDate="September 2021"
        endDate="July 2024"
        links={[
          {
            icon: faEarthEurope,
            url: "https://www.upc.edu/en/bachelors/bioinformatics-interuniversity-upc-ub-uab-upf-degree-barcelona-fib-etsetb",
          },
          {
            icon: faNewspaper,
            url: "https://repositori.upf.edu/bitstreams/1162696c-cdcc-4869-b8dc-bd634ae1e12f/download",
          },
        ]}
        showDescriptions={showDescriptions}
      >
        <p>
          Thesis title:{" "}
          <em>
            nf-core/reportho: a pipeline for comparative analysis of ortholog
            predictions
          </em>
        </p>
      </CVSection>
    </>
  );
}
