import Hero from "@/components/Hero";
import WhyChooseUs from "@/components/WhyChooseUs";
import SignatureTreatments from "@/components/SignatureTreatments";
import MeetTheTeam from "@/components/MeetTheTeam";
import ResultsSection from "@/components/ResultsSection";
import PackagesSection from "@/components/PackagesSection";
import FAQSection from "@/components/FAQSection";
import CTASection from "@/components/CTASection";

export default function Home() {
  return (
    <>
      <Hero />
      <WhyChooseUs />
      <SignatureTreatments />
      <MeetTheTeam />
      <ResultsSection />
      <PackagesSection />
      <FAQSection />
      <CTASection />
    </>
  );
}

