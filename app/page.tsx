import AboutExpertise from "@/components/AboutExpertise";
import BeyondCode from "@/components/BeyondCode";
import Bio from "@/components/Bio";
import Contact from "@/components/Contact";
import Navbar from "@/components/Navbar";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";

export default function Page() {
  return (
    <>
      <Navbar />
      <Bio />
      <AboutExpertise />
      <Skills />
      <Projects />
      <BeyondCode />
      <Contact />
    </>
  );
}
