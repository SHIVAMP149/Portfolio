
import { useEffect } from "react";
import { useTheme } from "@/contexts/ThemeContext";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import SkillsSection from "@/components/SkillsSection";
import ProjectsSection from "@/components/ProjectsSection";
import EducationSection from "@/components/EducationSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  const { theme } = useTheme();

  useEffect(() => {
    document.title = "Shivam Prakash | Portfolio";
  }, []);

  return (
    <div className={`min-h-screen ${theme === 'dark' ? 'bg-theme-dark text-white' : 'bg-white text-gray-900'}`}>
      <Navbar />
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
      <EducationSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
