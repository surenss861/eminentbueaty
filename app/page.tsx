import Hero from "@/components/Hero";
import ServicesSection from "@/components/ServicesSection";
import PackagesSection from "@/components/PackagesSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import ApproachSection from "@/components/ApproachSection";
import CTASection from "@/components/CTASection";
import FAQSection from "@/components/FAQSection";
import HorizontalScrollSection from "@/components/HorizontalScrollSection";

export default function Home() {
  return (
    <>
      <Hero />
      <ServicesSection />
      <PackagesSection />
      <ApproachSection />
      <HorizontalScrollSection />
      <TestimonialsSection />
      <FAQSection />
      <CTASection />
    </>
  );
}

