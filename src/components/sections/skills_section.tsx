import FiveDots from "../ui/five_dots";
import PillList from "../ui/pill_list";

export default function SkillsSection() {
  return (
    <>
      <h2>Skills</h2>

      <h3>Natural languages</h3>
      <table className="w-full mb-4 text-lg">
        <tbody>
          <tr>
            <td className="font-bold">Polish</td>
            <td className="text-right">Native</td>
          </tr>
          <tr>
            <td className="font-bold">English</td>
            <td className="text-right">Fluent (CEFR C2)</td>
          </tr>
          <tr>
            <td className="font-bold">Spanish</td>
            <td className="text-right">Fluent (CEFR B2+)</td>
          </tr>
          <tr>
            <td className="font-bold">Catalan</td>
            <td className="text-right">Intermediate (CEFR B1)</td>
          </tr>
          <tr>
            <td className="font-bold">French</td>
            <td className="text-right">Intermediate (CEFR B1)</td>
          </tr>
          <tr>
            <td className="font-bold">German</td>
            <td className="text-right">Intermediate (CEFR B1)</td>
          </tr>
          <tr>
            <td className="font-bold">Italian</td>
            <td className="text-right">Elementary (CEFR A1)</td>
          </tr>
          <tr>
            <td className="font-bold">Russian</td>
            <td className="text-right">Elementary (CEFR A1)</td>
          </tr>
        </tbody>
      </table>

      <h3>Programming languages</h3>
      <table className="w-full mb-4 text-lg">
        <tbody>
          <tr>
            <td className="font-bold">Python</td>
            <td className="flex items-center justify-end">
              <FiveDots n_full={5} />
            </td>
          </tr>
          <tr>
            <td className="font-bold">Nextflow</td>
            <td className="flex items-center justify-end">
              <FiveDots n_full={4} />
            </td>
          </tr>
          <tr>
            <td className="font-bold">C++</td>
            <td className="flex items-center justify-end">
              <FiveDots n_full={4} />
            </td>
          </tr>
          <tr>
            <td className="font-bold">R</td>
            <td className="flex items-center justify-end">
              <FiveDots n_full={3} />
            </td>
          </tr>
          <tr>
            <td className="font-bold">Bash</td>
            <td className="flex items-center justify-end">
              <FiveDots n_full={3} />
            </td>
          </tr>
          <tr>
            <td className="font-bold">JavaScript/TypeScript</td>
            <td className="flex items-center justify-end">
              <FiveDots n_full={3} />
            </td>
          </tr>
          <tr>
            <td className="font-bold">C</td>
            <td className="flex items-center justify-end">
              <FiveDots n_full={2} />
            </td>
          </tr>
          <tr>
            <td className="font-bold">Haskell</td>
            <td className="flex items-center justify-end">
              <FiveDots n_full={1} />
            </td>
          </tr>
          <tr>
            <td className="font-bold">C#</td>
            <td className="flex items-center justify-end">
              <FiveDots n_full={1} />
            </td>
          </tr>
        </tbody>
      </table>

      <h3>Frameworks</h3>
      <h4>Python</h4>
      <PillList
        items={[
          "Pytorch",
          "Pandas",
          "Polars",
          "Scikit-learn",
          "Numpy",
          "Biopython",
        ]}
      />
      <h4>R</h4>
      <PillList items={["Tidyverse", "Shiny", "Bioconductor"]} />
      <h4>C++</h4>
      <PillList items={["Unreal Engine"]} />
      <h4>JavaScript</h4>
      <PillList items={["React", "Node.js", "Tailwind"]} />

      <h3>Operating Systems</h3>
      <PillList items={["Linux", "Windows"]} />

      <h3>Software</h3>
      <PillList
        items={[
          "Visual Studio",
          "Visual Studio Code",
          "R Studio",
          "Jupyter Lab",
          "Git",
          "GitHub",
          "Docker",
          "Singularity",
          "SLURM",
        ]}
      />

      <h3>Bioinformatics</h3>
      <PillList
        items={[
          "Workflow management",
          "Data mining",
          "Statistical models",
          "Machine learning",
          "MSA",
          "Genomics",
          "Metagenomics",
          "High performance computing",
        ]}
      />

      <h3>Soft Skills</h3>
      <PillList
        items={[
          "Teamwork",
          "Time management",
          "Organization",
          "Creativity",
          "Quick learning",
          "Information retrieval",
          "Work with documentation",
        ]}
      />
    </>
  );
}
