import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import CorePillars from "./components/CorePillars";
import EngineeringApproach from "./components/EngineeringApproach";

export default function Home() {
  return (
    <main className="min-h-screen bg-dark-deep">
      <Navbar />
      <Hero />
      <CorePillars />
      <EngineeringApproach />
    </main>
  );
}
