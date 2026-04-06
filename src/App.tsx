import { Footer } from "./components/layout/Footer";
import { SiteChrome } from "./components/layout/SiteChrome";
import { FinalCTA } from "./components/sections/FinalCTA";
import { Gallery } from "./components/sections/Gallery";
import { Hero } from "./components/sections/Hero";
import { Impact } from "./components/sections/Impact";
import { Mission } from "./components/sections/Mission";
import { MissionBanner } from "./components/sections/MissionBanner";
import { Programs } from "./components/sections/Programs";
import { Testimonials } from "./components/sections/Testimonials";
import { Values } from "./components/sections/Values";
import { WhySupport } from "./components/sections/WhySupport";

export default function App() {
  return (
    <>
      <a
        href="#main"
        className="sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:inline-flex focus:h-auto focus:w-auto focus:overflow-visible focus:rounded-xl focus:bg-white focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-ink focus:shadow-card focus:outline-none focus-visible:ring-2 focus-visible:ring-brand"
      >
        Skip to main content
      </a>
      <SiteChrome />
      <main id="main">
        <div id="top" className="scroll-mt-0" />
        <Hero />
        <MissionBanner />
        <Mission />
        <Values />
        <Programs />
        <Impact />
        <WhySupport />
        <Gallery />
        <Testimonials />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
