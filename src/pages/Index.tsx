import HeroSection from "@/components/HeroSection";
import NicheSection from "@/components/NicheSection";
import HowItWorks from "@/components/HowItWorks";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";

const Index = () => (
  <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
    <HeroSection />
    <NicheSection />
    <HowItWorks />
    <FinalCTA />
    <Footer />
  </div>
);

export default Index;
