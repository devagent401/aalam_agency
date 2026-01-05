import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import SolutionsOverview from "./components/SolutionsOverview";
import CorePillars from "./components/CorePillars";
import EngineeringApproach from "./components/EngineeringApproach";
import IndustriesWeTransform from "./components/IndustriesWeTransform";
import CustomerTestimonials from "./components/CustomerTestimonials";
import SmartAIHelp from "./components/SmartAIHelp";

export default function Home() {
  return (
    <main className="min-h-screen bg-dark-deep">
      <Navbar />
      <Hero />
      <CorePillars />
      <EngineeringApproach />
      <IndustriesWeTransform />
      <SolutionsOverview />
      <CustomerTestimonials />
      <SmartAIHelp />
    </main>
  );
}
