import { createFileRoute } from "@tanstack/react-router";
import Hero from "@/components/hero/Hero";
import Navbar from "@/components/hero/Navbar";
import CompaniesSection from "@/components/sections/CompaniesSection";
import FAQSection from "@/components/sections/FAQSection";
import FeaturesSection from "@/components/sections/FeaturesSection";
import FinalCTASection from "@/components/sections/FinalCTASection";
import Footer from "@/components/sections/Footer";
import PricingSection from "@/components/sections/PricingSection";
import StatsSection from "@/components/sections/StatsSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen w-full overflow-x-hidden bg-[#F5F5F7] text-[#0A0A0A]">
      <Navbar />
      <main>
        <Hero />
        <StatsSection />
        <CompaniesSection />
        <FeaturesSection />
        <TestimonialsSection />
        <PricingSection />
        <FAQSection />
        <FinalCTASection />
      </main>
      <Footer />
    </div>
  );
}
