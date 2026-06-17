import Navbar from "@/app/components/layout/Navbar";
import HeroWrapper from "./components/sections/hero/HeroWrapper";
import About from "@/app/components/sections/About";
import Services from "@/app/components/sections/Services";
import Testimonials from "./components/sections/Testonomials";
import FutureCTA from "./components/sections/FutureCTA";
import ContactSection from "./components/sections/ContactSection";
import Footer from "./components/layout/Footer";
export default function Home() {
  return (
    <>
      <Navbar />
      <HeroWrapper />
      <About />
      <Services />
      <Testimonials />
      <FutureCTA />
      <ContactSection />
      <Footer />
    </>
  );
}
