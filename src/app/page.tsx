import HomeSection from "@/components/sections/HomeSection";
import ServicesSection from "@/components/sections/ServicesSection";
import ResumeSection from "@/components/sections/ResumeSection";
import WorkSection from "@/components/sections/WorkSection";
import ContactSection from "@/components/sections/ContactSection";

export default function SinglePagePortfolio() {
  return (
    <main className="container mx-auto px-6 max-w-[1000px] flex flex-col">
      <HomeSection />
      <ServicesSection />
      <ResumeSection />
      <WorkSection />
      <ContactSection />
    </main>
  );
}
