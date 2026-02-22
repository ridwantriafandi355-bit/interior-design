import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Gallery from "@/components/Gallery";
import Testimonial from "@/components/Testimonial";
import ContactCTA from "@/components/ContactCTA";
import WhatsAppButton from "@/components/WhatsAppButton";

export default function Home() {
  return (
    <main className="min-h-screen bg-cream selection:bg-gold/30 selection:text-charcoal">
      <Navbar />
      <Hero />
      <Services />
      <Gallery />
      <Testimonial />
      <ContactCTA />
      <WhatsAppButton />
    </main>
  );
}
