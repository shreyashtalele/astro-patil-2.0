import Navbar from "@/app/components/layout/Navbar";
import HeroWrapper from "@/app/components/sections/hero/Hero";
import About from "@/app/components/sections/About";
import Services from "@/app/components/sections/Services";
import Testimonials from "@/app/components/sections/Testonomials";
import FutureCTA from "@/app/components/sections/FutureCTA";
import ContactSection from "@/app/components/sections/ContactSection";
import Footer from "@/app/components/layout/Footer";
export default function ComponentWrapper() {
  return (
    <div>
      <Navbar />
      <HeroWrapper />
      <About />
      <Services />
      <Testimonials />
      <FutureCTA />
      <ContactSection />
      <Footer />
    </div>
  );
}
