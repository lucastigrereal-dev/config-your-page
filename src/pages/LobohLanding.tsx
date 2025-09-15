import Header from "@/components/ui/header";
import HeroSection from "@/components/ui/hero-section";
import ServicesSection from "@/components/ui/services-section";
import TestimonialsSection from "@/components/ui/testimonials-section";
import ContactSection from "@/components/ui/contact-section";
import Footer from "@/components/ui/footer";

const LobohLanding = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <section id="home">
          <HeroSection />
        </section>
        <section id="services">
          <ServicesSection />
        </section>
        <section id="testimonials">
          <TestimonialsSection />
        </section>
        <section id="contact">
          <ContactSection />
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default LobohLanding;