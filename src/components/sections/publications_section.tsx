import { faNewspaper } from "@fortawesome/free-solid-svg-icons";
import CVSection from "../ui/cv_section";

export default function PublicationsSection({
  showDescriptions,
}: {
  showDescriptions: boolean;
}) {
  return (
    <div className="text-justify">
      <h2>Publications</h2>
      <h3>Journal Articles</h3>
      <CVSection
        position="An nf-core framework for the systematic comparison of alternative modeling tools: the multiple sequence alignment case study"
        employer="Luisa Santus, Jose Espinosa-Carrasco, Leon Rauschning, Júlia Mir-Pedrol, Igor Trujnara, Alessio Vignoli, Leila Mansouri, Athanasios Baltzis, Evan W Floden, Paolo Di Tommaso, Edgar Garriga, Adam Gudyś, Sebastian Deorowicz, Cameron Gilchrist, Martin Steinegger, Cedric Notredame, nf-core community"
        location="NAR Genomics and Bioinformatics"
        startDate="2025"
        links={[
          {
            icon: faNewspaper,
            url: "https://doi.org/10.1093/nargab/lqaf104",
          },
        ]}
        showDescriptions={showDescriptions}
      />
      <h3>Conference Proceedings</h3>
      <CVSection
        position="nf-core/reportho: A pipeline for comparative analysis of ortholog predictions"
        employer="Igor Trujnara, Luisa Santus, Jose Espinosa-Carrasco, Alessio Vignoli, nf-core community, Cedric Notredame"
        location="Nextflow Summit Barcelona 2024"
        startDate="2024"
        links={[
          {
            icon: faNewspaper,
            url: "https://doi.org/10.5281/zenodo.15078564",
          },
        ]}
        showDescriptions={showDescriptions}
      />
    </div>
  );
}
