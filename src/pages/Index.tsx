import { Helmet } from "react-helmet-async";
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import WhyBhutan from "@/components/WhyBhutan";
import SlowkaExperience from "@/components/SlowkaExperience";
import FounderSection from "@/components/FounderSection";
import SignatureJourneys from "@/components/SignatureJourneys";
import MomentsFromBhutan from "@/components/MomentsFromBhutan";
import PartnerCTA from "@/components/PartnerCTA";
import Footer from "@/components/Footer";
const Index = () => {
  return (
    <>
      <Helmet>
        <title>Slowka Bhutan | B2B Travel Partner for Bhutan Tours</title>
        <meta
          name="description"
          content="Your trusted B2B ground operator in Bhutan. Curating transformative journeys through the Kingdom of Happiness for travel agencies and tour operators worldwide."
        />
        <meta
          name="keywords"
          content="Bhutan travel, B2B Bhutan tours, Bhutan ground operator, Bhutan travel partner, Kingdom of Happiness tours"
        />
        <link rel="canonical" href="https://slowka.bt" />
      </Helmet>

      <main className="overflow-hidden">
        <Navigation />
        <Hero />
        <WhyBhutan />
        <SlowkaExperience />
        <FounderSection />
        <SignatureJourneys />
        <MomentsFromBhutan />
        <PartnerCTA />
        <Footer />
      </main>
    </>
  );
};

export default Index;
