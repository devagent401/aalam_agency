import CorePillars from "./components/CorePillars";
import CTASection from "./components/CTASection";
import CustomerTestimonials from "./components/CustomerTestimonials";
import EngineeringApproach from "./components/EngineeringApproach";
import Hero from "./components/Hero";
import ImpactAndPartners from "./components/ImpactAndPartners";
import IndustriesWeTransform from "./components/IndustriesWeTransform";
import SmartAIHelp from "./components/SmartAIHelp";
import SolutionsOverview from "./components/SolutionsOverview";
import TechnologyEcosystem from "./components/TechnologyEcosystem";

export default function Home() {
  return (
    <>
      <Hero />
      <ImpactAndPartners />
      <CorePillars />
      <EngineeringApproach />
      <TechnologyEcosystem />
      <IndustriesWeTransform />
      <SolutionsOverview />
      <CustomerTestimonials />
      <SmartAIHelp />
      <CTASection />
    </>
  );
}
