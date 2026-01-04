import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import CorePillars from "./components/CorePillars";

export default function Home() {
  return (
    <main className="min-h-screen bg-dark-deep">
      <Navbar />
      <Hero />
      <CorePillars />
    </main>
  );
}
