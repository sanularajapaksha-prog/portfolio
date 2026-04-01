import dynamic from "next/dynamic";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import About from "@/components/About";
import Education from "@/components/Education";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Achievement from "@/components/Achievement";
import AIStack from "@/components/AIStack";
import References from "@/components/References";
import Footer from "@/components/Footer";

// Client-only components
const Cursor         = dynamic(() => import("@/components/Cursor"),         { ssr: false });
const ScrollProgress = dynamic(() => import("@/components/ScrollProgress"), { ssr: false });
const ParticleCanvas = dynamic(() => import("@/components/ParticleCanvas"), { ssr: false });
const Navbar         = dynamic(() => import("@/components/Navbar"),         { ssr: false });

const Divider = () => (
  <div className="border-t border-white/[0.07] relative z-[2]" />
);

export default function Home() {
  return (
    <>
      {/* Global overlays */}
      <Cursor />
      <ScrollProgress />
      <ParticleCanvas />
      <Navbar />

      {/* Page content */}
      <main className="relative z-[2]">
        <Hero />
        <Marquee />
        <Divider />
        <About />
        <Divider />
        <Education />
        <Divider />
        <Projects />
        <Divider />
        <Skills />
        <Divider />
        <Achievement />
        <Divider />
        <AIStack />
        <Divider />
        <References />
      </main>

      <Footer />
    </>
  );
}
