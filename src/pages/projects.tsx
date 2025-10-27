import IconLink from "@/components/ui/icon_link";
import ProjectCard, { ProjectLinks } from "@/components/ui/project_card";
import { faGithub, faGoogleScholar } from "@fortawesome/free-brands-svg-icons";
import { faLink, faNewspaper } from "@fortawesome/free-solid-svg-icons";

export default function ProjectsPage() {
  return (
    <div className="text-justify">
      <h1 className="text-center mb-4">Projects</h1>
      <p className="text-lg my-4">
        This page contains information about the major projects I have worked
        on.
      </p>
      <h2 className="text-2xl text-accent mb-6">Computational Science</h2>
      <div>
        <ProjectCard
          title="Microscreen"
          supervisor="Toni Gabaldón"
          group="Gabaldón Group, IRB/BSC"
        >
          <p>
            The aim of the Microscreen project is to improve the early detection
            of colorectal cancer through the use of metagenomics. While existing
            methods reliably detect the disease and other relevant lesions, they
            produce a very large number of false positives, leading to
            unnecessary expenses and patient inconvenience. Microscreen aims to
            reduce the number of false identifications while retaining 100%
            sensitivity by extending the existing analysis with a metagenomic
            screening followed by machine learning-based analysis. The project
            has been identified as a commercialization candidate and has pending
            patent applications in the EU and US.
          </p>
          <p>
            I work on developing and optimizing the machine learning models used
            in the project, focusing on improving their accuracy and efficiency.
            I work on optimizing the data processing pipelines, model tuning,
            training, and validation to ensure robust performance. I also ensure
            full reliance on free and open-source software (FOSS) tools to
            guarantee reliability and enable commercial application.
          </p>
          <ProjectLinks>
            <IconLink
              href="https://scholar.google.com/scholar?oi=bibs&cluster=2607889816116964249&btnI=1"
              icon={faGoogleScholar}
            />
          </ProjectLinks>
        </ProjectCard>
        <ProjectCard
          title="ND280 Particle Classification"
          supervisor="M. Pilar Casado Lechuga"
          group="Neutrinos Group, IFAE"
        >
          <p>
            The T2K experiment is a long-term effort to quantify the quantum
            parameters of neutrino oscillation by analyzing neutrino beams over
            a large distance. ND280 is one of the detectors in the experiment
            setup. Its role is to analyze the properties and composition of the
            outgoing neutrino beam very close to the source. HA-TPC is a sensor
            within the ND280 that detects neutrinos leaving the beam by
            analyzing secondary particles created in a gas container. The aim of
            the IFAE neutrinos team is to develop a robust method to classify
            the traces produced by HA-TPC depending on the flavor of the
            detected neutrino.
          </p>
          <p>
            I joined the group to perform my master's degree minor project. My
            role was to expand the exploration into applying machine learning
            models for this analysis. Specifically, I tested the potential of
            applying ElasticNet (a convolutional neural network) and Vision
            Transformer (a transformer-based model), in addition to a baseline
            multilayer perceptron. I managed to find a highly effective
            ElasticNet setup and provide useful information for further
            transformer exploration. I have also improved the group's data
            pipeline, and suggested a data augmentation strategy to promote
            translation and rotation invariance.
          </p>
          <ProjectLinks>
            <IconLink
              href="https://github.com/itrujnara/nd280-project"
              icon={faGithub}
            />
          </ProjectLinks>
        </ProjectCard>
        <ProjectCard
          title="Gene Annotation with Evo 2"
          supervisor="Roderic Guigó"
          group="Guigó Lab, CRG"
        >
          <p>
            The lab has well-established research lines in biodiversity genomics
            and computational gene annotation. With the then-recent advent of
            DNA language models, the lab was interested in exploring their
            potential in these areas. Together with my supervisors, I conceived
            the idea of exploring whether a DNA language model (specifically,
            Evo 2) has the potential for application to genome annotation. To
            this end, I analyzed the detection of various DNA features across a
            human chromosome.
          </p>
          <p>
            I was the only researcher in the project, and I performed all the
            substantial analysis. However, I received continuous feedback and
            concepts through regular supervisor meetings, as well as
            biodiversity subgroup meetings. With aid from the institute, I
            deployed the model on the institutional HPC infrastructure. I
            created the setup to run the model on FASTA sequences on the
            accelerator (GPU) partition. I created a framework to analyze long
            sequences using a sliding window strategy, identifying the optimal
            window parameters through relative entropy analysis. I ran the model
            on the entirety of human chromosome 21. I analyzed model embeddings
            using UMAP, and the nucleotide probabilities using Shannon's
            information content. Although the ultimate conclusion was that the
            model is not suitable for the purpose in its current state, we
            gained much useful information throughout the project.
          </p>
          <ProjectLinks>
            <IconLink
              href="https://github.com/itrujnara/genomes-project"
              icon={faGithub}
            />
          </ProjectLinks>
        </ProjectCard>
        <ProjectCard
          title="nf-core/reportho"
          supervisor="Cedric Notredame"
          group="Notredame Lab, CRG"
        >
          <p>
            The lab's research focuses on computational methods, with special
            emphasis on systematic comparison of equivalent methods. In this
            framework, I developed a project about comparing publicly available
            gene orthology predictions through the analysis of prediction
            overlap across sources.
          </p>
          <p>
            I was the only active researcher in the project, although due to my
            limited research experience at the time I was provided with constant
            guidance of a more senior lab member. I was responsible for all the
            programming and analysis in the project, with the co-supervisor and
            other experienced colleagues providing scientific and technical
            advice. The core of the project was a reproducible Nextflow pipeline
            for obtaining orthology data from public sources and performing
            comparative analysis. The pipeline was developed within nf-core, a
            large open-source method development community that creates
            high-quality Nextflow pipelines and components for computational
            science. Within the time frame of the bachelor's project, I managed
            to fully implement a first working version of the pipeline and make
            a first release. I also ran some proof-of-concept bulk analysis on a
            sample of 1000 human genes, as well as fine-grained analysis on
            several examples. The pipeline is still maintained and available
            through the nf-core repository.
          </p>
          <ProjectLinks>
            <IconLink
              href="https://github.com/nf-core/reportho"
              icon={faGithub}
            />
            <IconLink href="https://nf-co.re/reportho" icon={faLink} />
            <IconLink
              href="https://doi.org/10.5281/zenodo.15078563"
              icon={faNewspaper}
            />
          </ProjectLinks>
        </ProjectCard>
      </div>
    </div>
  );
}
