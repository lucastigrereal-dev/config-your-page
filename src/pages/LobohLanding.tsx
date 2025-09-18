import Header from "@/components/ui/header";
import HeroSection from "@/components/ui/hero-section";
import TransitionHeadline from "@/components/ui/transition-headline";
import TransformationsSection from "@/components/ui/transformations-section";
import MethodologySection from "@/components/ui/services-section";
import AuthoritySection from "@/components/ui/authority-section";
import UrgencySection from "@/components/ui/urgency-section";
import FaqSectionNew from "@/components/ui/faq-section-new";
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
        
        <TransitionHeadline />
        
        <section id="transformations">
          <TransformationsSection />
        </section>
        
        <section id="methodology">
          <MethodologySection />
        </section>
        
        <section id="cases">
          <AuthoritySection />
        </section>
        
        <section id="urgency">
          <UrgencySection />
        </section>
        
        <section id="faq">
          <FaqSectionNew />
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