
import Contact from "./Contact";
import Hero from "../components/home/Hero";
import Skills from "./Skills";
import SkillsSection from "../components/home/SkillsSection";
import FeaturedProjects from "../components/home/FeaturedProjects";
import AboutSection from "../components/home/AboutSection";

export default function Home() {
  return (
    <>
      <Hero />
      <SkillsSection />
      <FeaturedProjects />
      <AboutSection />

      <Skills />
      <Contact />
    </>
  );
}