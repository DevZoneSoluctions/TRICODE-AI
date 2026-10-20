import { useEffect } from "react";
import Hero from "../sections/Hero";
import TechStrip from "../sections/TechStrip";
import ServicesPreview from "../sections/ServicesPreview";
import ProjectsPreview from "../sections/ProjectsPreview";
import ProcessSection from "../sections/ProcessSection";
import ContactCTA from "../sections/ContactCTA";

export default function Home() {
  useEffect(() => {
    document.title = "TRICODE AI Technologies — Engineering What's Next";
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <Hero />
      <TechStrip />
      <ServicesPreview />
      <ProjectsPreview />
      <ProcessSection />
      <ContactCTA />
    </div>
  );
}
