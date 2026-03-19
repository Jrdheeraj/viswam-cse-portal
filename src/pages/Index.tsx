import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import HeroTerminal from "@/components/HeroTerminal";
import AnnouncementsTicker from "@/components/AnnouncementsTicker";
import StatsBar from "@/components/StatsBar";
import AboutSection from "@/components/AboutSection";
import VisionMission from "@/components/VisionMission";
import WhyCSE from "@/components/WhyCSE";
import Academics from "@/components/Academics";
import Facilities from "@/components/Facilities";
import HodQuote from "@/components/HodQuote";
import Faculty from "@/components/Faculty";
import Activities from "@/components/Activities";
import Placements from "@/components/Placements";
import CTABanner from "@/components/CTABanner";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("revealed");
        });
      },
      { threshold: 0.12 }
    );
    document.querySelectorAll(".scroll-reveal").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroTerminal />
      <AnnouncementsTicker />
      <StatsBar />
      <AboutSection />
      <VisionMission />
      <WhyCSE />
      <Academics />
      <Facilities />
      <Activities />
      <HodQuote />
      <Faculty />
      <Placements />
      <CTABanner />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
