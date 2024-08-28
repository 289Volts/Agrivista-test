import BenefitsSection from "./components/Blocks/Home/BenefitsSection";
import BlogSection from "./components/Blocks/Home/BlogSection";
import CtaSection from "./components/Blocks/Home/CtaSection";
import HeroSection from "./components/Blocks/Home/HeroSection";
import MissionSection from "./components/Blocks/Home/MissionSection";
import ProductsSection from "./components/Blocks/Home/ProductsSection";
import ServicesSection from "./components/Blocks/Home/ServicesSection";
import TestimonialsSection from "./components/Blocks/Home/TestimonialsSection";

function App() {
  return (
    <>
      <HeroSection />
      <MissionSection />
      <ServicesSection />
      <ProductsSection />
      <CtaSection />
      <BenefitsSection />
      <TestimonialsSection />
      <BlogSection />
    </>
  );
}

export default App;
