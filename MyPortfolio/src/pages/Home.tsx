
import Contact from "./Contact";
import Hero from "../components/home/Hero";
import FeaturedProjects from "../components/home/FeaturedProjects";
import AboutSection from "../components/home/AboutSection";

export default function Home() {
  return (
    <>
      <Hero />
      <FeaturedProjects />
      <AboutSection />
      <Contact />
    </>
  );
}