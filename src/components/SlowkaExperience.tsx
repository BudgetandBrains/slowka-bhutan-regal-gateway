import { Shield, Users, Globe, Award } from "lucide-react";
import monksMonastery from "@/assets/monks-monastery.jpg";
import { useLanguage } from "@/contexts/LanguageContext";

const SlowkaExperience = () => {
  const { t } = useLanguage();

  const pillars = [
    {
      icon: Shield,
      title: t("experience.pillar1.title"),
      stat: t("experience.pillar1.stat"),
      label: t("experience.pillar1.label"),
      description: t("experience.pillar1.description"),
    },
    {
      icon: Users,
      title: t("experience.pillar2.title"),
      stat: t("experience.pillar2.stat"),
      label: t("experience.pillar2.label"),
      description: t("experience.pillar2.description"),
    },
    {
      icon: Globe,
      title: t("experience.pillar3.title"),
      stat: t("experience.pillar3.stat"),
      label: t("experience.pillar3.label"),
      description: t("experience.pillar3.description"),
    },
    {
      icon: Award,
      title: t("experience.pillar4.title"),
      stat: t("experience.pillar4.stat"),
      label: t("experience.pillar4.label"),
      description: t("experience.pillar4.description"),
    },
  ];

  return (
    <section
      id="experience"
      className="section-padding bg-primary text-primary-foreground relative overflow-hidden"
    >
      {/* Background Image Overlay */}
      <div className="absolute inset-0 opacity-10">
        <img
          src={monksMonastery}
          alt=""
          className="w-full h-full object-cover"
        />
      </div>

      <div className="max-w-7xl mx-auto relative">
        {/* Section Header */}
        <div className="text-center mb-16 md:mb-24">
          <span className="text-gold-light text-xs tracking-[0.4em] uppercase font-body block mb-4">
            {t("experience.tagline")}
          </span>
          <h2 className="font-display text-3xl md:text-5xl mb-6">
            {t("experience.title")}
          </h2>
          <p className="font-body text-primary-foreground/80 max-w-2xl mx-auto leading-relaxed">
            {t("experience.description")}
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {pillars.map((pillar) => (
            <div
              key={pillar.title}
              className="text-center p-8 border border-primary-foreground/20 hover:border-gold/50 transition-all duration-300 group hover-lift"
            >
              <div className="w-14 h-14 mx-auto mb-6 rounded-sm bg-primary-foreground/10 flex items-center justify-center group-hover:bg-gold/20 transition-colors">
                <pillar.icon className="w-7 h-7 text-gold-light" />
              </div>
              <div className="font-display text-4xl md:text-5xl text-gold mb-1">
                {pillar.stat}
              </div>
              <div className="font-body text-xs tracking-wider uppercase text-primary-foreground/60 mb-4">
                {pillar.label}
              </div>
              <h3 className="font-display text-xl mb-2">{pillar.title}</h3>
              <p className="font-body text-sm text-primary-foreground/70 leading-relaxed">
                {pillar.description}
              </p>
            </div>
          ))}
        </div>

        {/* Philosophy Quote */}
        <div className="mt-20 text-center">
          <blockquote className="font-display text-2xl md:text-3xl italic text-primary-foreground/90 max-w-3xl mx-auto">
            {t("experience.quote")}
          </blockquote>
          <div className="mt-6 flex items-center justify-center gap-4">
            <div className="w-12 h-px bg-gold/50" />
            <span className="font-body text-gold text-sm tracking-wider">
              {t("experience.quoteAuthor")}
            </span>
            <div className="w-12 h-px bg-gold/50" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SlowkaExperience;
