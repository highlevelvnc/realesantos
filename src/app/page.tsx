import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Authority from "@/components/Authority";
import Services from "@/components/Services";
import Projects from "@/components/Projects";
import About from "@/components/About";
import Differentiators from "@/components/Differentiators";
import Process from "@/components/Process";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import ScrollRevealClient from "@/components/ScrollRevealClient";

export default function Page() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Authority />
        <Services />
        <Projects />
        <About />
        <Differentiators />
        <Process />
        <FinalCTA />
      </main>
      <Footer />
      <WhatsAppFloat />
      <ScrollRevealClient />
    </>
  );
}
