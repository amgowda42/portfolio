import AboutExpertise from "@/components/AboutExpertise";
import BeyondCode from "@/components/BeyondCode";
import Bio from "@/components/Bio";
import Contact from "@/components/Contact";
import Navbar from "@/components/Navbar";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";

export default function Page() {
  return (
    <div className="relative min-h-screen">
      <div
        aria-hidden
        style={{
          position: "fixed",
          top: 0,
          left: "50%",
          transform: "translateX(-50%)",
          width: "800px",
          height: "500px",
          background:
            "radial-gradient(ellipse at center, #6366f118 0%, transparent 70%)",
          pointerEvents: "none",
          zIndex: 0,
        }}
      />
      <div className="relative z-10">
        <Navbar />
        <Bio />
        <AboutExpertise />
        <Skills />
        <Projects />
        <BeyondCode />
        <Contact />
      </div>
    </div>
  );
}
