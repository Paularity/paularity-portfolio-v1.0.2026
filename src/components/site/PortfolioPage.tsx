import { Nav } from "./Nav";
import { Hero } from "./Hero";
import { TechStrip } from "./TechStrip";
import { Projects } from "./Projects";
import { Why } from "./Why";
import { Experience } from "./Experience";
import { Philosophy } from "./Philosophy";
import { Gallery } from "./Gallery";
import { CTA } from "./CTA";
import { Footer } from "./Footer";

export function PortfolioPage() {
  return (
    <main className="relative min-h-screen bg-bg text-fg">
      <Nav />
      <Hero />
      <TechStrip />
      <Projects />
      <Why />
      <Experience />
      <Philosophy />
      <Gallery />
      <CTA />
      <Footer />
    </main>
  );
}
