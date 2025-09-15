import Header from "@/components/ui/header";
import HeroSection from "@/components/ui/hero-section";
import ProblemsSection from "@/components/ui/problems-section";
import AuthoritySection from "@/components/ui/authority-section";
import MethodologySection from "@/components/ui/services-section";
import DiagnosisSection from "@/components/ui/contact-section";
import UrgencySection from "@/components/ui/urgency-section";
import FaqSection from "@/components/ui/faq-section";
import GuaranteeSection from "@/components/ui/guarantee-section";
import FinalCtaSection from "@/components/ui/final-cta-section";
import Footer from "@/components/ui/footer";

const LobohLanding = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <section id="home">
          <HeroSection />
        </section>
        <section id="problems">
          <ProblemsSection />
        </section>
        <section id="cases">
          <AuthoritySection />
        </section>
        <section id="methodology">
          <MethodologySection />
        </section>
        <section id="diagnosis">
          <DiagnosisSection />
        </section>
        <section id="urgency">
          <UrgencySection />
        </section>
        <section id="faq">
          <FaqSection />
        </section>
        <section id="guarantee">
          <GuaranteeSection />
        </section>
        <section id="contact">
          <FinalCtaSection />
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default LobohLanding;