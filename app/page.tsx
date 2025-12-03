import Hero from "@/components/Hero";
import ServicesGrid from "@/components/ServicesGrid";
import TrustSection from "@/components/TrustSection";
import AboutSection from "@/components/AboutSection";
import CTASection from "@/components/CTASection";

export default function Home() {
  return (
    <>
      <Hero />
      <ServicesGrid />
      <TrustSection />
      <AboutSection />
      <CTASection />
    </>
  );
}
