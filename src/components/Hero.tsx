import { ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroBhutan from "@/assets/hero-bhutan.jpg";

const Hero = () => {
  return (
    <section className="relative h-screen min-h-[700px] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroBhutan}
          alt="Majestic Bhutan landscape with monastery and prayer flags"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-charcoal/40 via-charcoal/20 to-charcoal/60" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
        {/* Decorative Element */}
        <div className="flex items-center justify-center gap-4 mb-8 animate-fade-up opacity-0" style={{ animationDelay: "200ms", animationFillMode: "forwards" }}>
          <div className="w-16 h-px bg-gold-light/60" />
          <span className="text-gold-light text-xs tracking-[0.4em] uppercase font-body">
            The Kingdom of Happiness
          </span>
          <div className="w-16 h-px bg-gold-light/60" />
        </div>

        {/* Main Tagline */}
        <h1 className="font-display text-4xl md:text-6xl lg:text-7xl text-primary-foreground leading-tight mb-6 animate-fade-up opacity-0" style={{ animationDelay: "400ms", animationFillMode: "forwards" }}>
          Where Time Slows,
          <br />
          <span className="italic font-light">Stories Begin</span>
        </h1>

        {/* Subtitle */}
        <p className="font-body text-lg md:text-xl text-primary-foreground/80 max-w-2xl mx-auto mb-10 leading-relaxed animate-fade-up opacity-0" style={{ animationDelay: "600ms", animationFillMode: "forwards" }}>
          Curating transformative journeys through the last Himalayan kingdom
          for discerning travel partners worldwide.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-up opacity-0" style={{ animationDelay: "800ms", animationFillMode: "forwards" }}>
          <a href="#journeys">
            <Button variant="hero-gold" size="xl">
              Explore Journeys
            </Button>
          </a>
        </div>
      </div>

      {/* Scroll Indicator */}
      <a
        href="#why-bhutan"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-primary-foreground/70 hover:text-primary-foreground transition-colors animate-fade-up opacity-0"
        style={{ animationDelay: "1000ms", animationFillMode: "forwards" }}
      >
        <span className="text-xs tracking-[0.3em] uppercase font-body">
          Discover
        </span>
        <ChevronDown className="w-5 h-5 animate-bounce" />
      </a>

      {/* Decorative Corner Elements */}
      <div className="absolute top-24 left-8 w-20 h-20 border-l border-t border-gold/30 hidden lg:block" />
      <div className="absolute bottom-24 right-8 w-20 h-20 border-r border-b border-gold/30 hidden lg:block" />
    </section>
  );
};

export default Hero;
