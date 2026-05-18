import { Navbar } from "@/components/layout/Navbar";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { ValueProposition } from "@/components/sections/ValueProposition";
import { Process } from "@/components/sections/Process";
import { Timeline } from "@/components/sections/Timeline";
import { Pricing } from "@/components/sections/Pricing";
import { FAQ } from "@/components/sections/FAQ";
import { Footer } from "@/components/sections/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <ValueProposition />
        <Process />
        <Timeline />
        <Pricing />
        <FAQ />
      </main>
      <Footer />
    </>
  );
}
