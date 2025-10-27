import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { useState } from "react";
import InformationSection from "@/components/sections/information_section";
import EmploymentSection from "@/components/sections/employment_section";
import CommunitySection from "@/components/sections/community_section";
import EducationSection from "@/components/sections/education_section";
import PublicationsSection from "@/components/sections/publications_section";
import SkillsSection from "@/components/sections/skills_section";
import AwardsSection from "@/components/sections/awards_section";
import ReferencesSection from "@/components/sections/references_section";

export default function CVPage() {
  const [scientificMode, setScientificMode] = useState(false);
  const [showDescriptions, setShowDescriptions] = useState(false);

  return (
    <div className="cv max-w-full">
      <h1 className="w-full text-center">Curriculum Vitae</h1>

      <div className="flex justify-center">
        <Button variant="default" className="mx-auto mb-4" asChild>
          <a href="/IgorTrujnaraCV2025.pdf" download>
            Download PDF
          </a>
        </Button>
      </div>

      <div className="left flex items-center space-x-2 my-4">
        <Switch
          id="scientific-mode"
          checked={scientificMode}
          onCheckedChange={setScientificMode}
        />
        <label htmlFor="scientific-mode">Scientific</label>
      </div>
      <div className="left flex items-center space-x-2 my-4">
        <Switch
          id="descriptions"
          checked={showDescriptions}
          onCheckedChange={setShowDescriptions}
        />
        <label htmlFor="descriptions">Show descriptions</label>
      </div>

      <InformationSection />

      <EmploymentSection
        showDescriptions={showDescriptions}
        scientificMode={scientificMode}
      />

      <CommunitySection showDescriptions={showDescriptions} />

      <EducationSection showDescriptions={showDescriptions} />

      {scientificMode && (
        <PublicationsSection showDescriptions={showDescriptions} />
      )}

      <SkillsSection />

      <AwardsSection showDescriptions={showDescriptions} />

      <ReferencesSection />
    </div>
  );
}
