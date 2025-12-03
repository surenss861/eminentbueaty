import Hero from "@/components/Hero";
import TrustBadges from "@/components/TrustBadges";
import ServicesScroll from "@/components/ServicesScroll";
import WhyChooseUsEnhanced from "@/components/WhyChooseUsEnhanced";
import ResultsSection from "@/components/ResultsSection";
import TestimonialsEnhanced from "@/components/TestimonialsEnhanced";
import FounderSection from "@/components/FounderSection";
import FAQEnhanced from "@/components/FAQEnhanced";
import LuxuryCTA from "@/components/LuxuryCTA";

export default function Home() {
  return (
    <>
      <Hero />
      <TrustBadges />
      <ServicesScroll />
      <WhyChooseUsEnhanced />
      <ResultsSection />
      <TestimonialsEnhanced />
      <FounderSection />
      <FAQEnhanced />
      <LuxuryCTA />
    </>
  );
}
