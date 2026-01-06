import CorePillars from "./components/CorePillars";
import CTASection from "./components/CTASection";
import CustomerTestimonials from "./components/CustomerTestimonials";
import EngineeringApproach from "./components/EngineeringApproach";
import Hero from "./components/Hero";
import IndustriesWeTransform from "./components/IndustriesWeTransform";
import SmartAIHelp from "./components/SmartAIHelp";
import SolutionsOverview from "./components/SolutionsOverview";

export default function Home() {
  return (
    <>
      <Hero />
      <CorePillars />
      <EngineeringApproach />
      <IndustriesWeTransform />
      <SolutionsOverview />
      <CustomerTestimonials />
      <SmartAIHelp />
      <CTASection />
    </>
  );
}
