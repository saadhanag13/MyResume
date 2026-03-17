import Navbar          from "@/components/Navbar";
import HeroSection     from "@/components/HeroSection";
import AboutSection    from "@/components/AboutSection";
import ResumeSection   from "@/components/ResumeSection";
import ServicesSection from "@/components/ServicesSection";
import SkillsSection   from "@/components/SkillsSection";
import ProjectsSection from "@/components/ProjectsSection";
import BannerSection   from "@/components/BannerSection";
import ContactSection  from "@/components/ContactSection";
import Footer          from "@/components/Footer";
import ScrollToTop     from "@/components/ScrollToTop";

export default function Home() {
  return (
    <main>
      <Navbar />
      <HeroSection />
      <AboutSection />
      <ResumeSection />
      <ServicesSection />
      <SkillsSection />
      <ProjectsSection />
      <BannerSection />
      <ContactSection />
      <Footer />
      <ScrollToTop />
    </main>
  );
}
