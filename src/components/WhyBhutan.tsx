import { Leaf, Mountain, Heart, Sparkles } from "lucide-react";
import tigersNest from "@/assets/tigers-nest.jpg";
import { useLanguage } from "@/contexts/LanguageContext";

const WhyBhutan = () => {
  const { t } = useLanguage();

  const features = [
    {
      icon: Mountain,
      title: t("whyBhutan.feature1.title"),
      description: t("whyBhutan.feature1.description"),
    },
    {
      icon: Heart,
      title: t("whyBhutan.feature2.title"),
      description: t("whyBhutan.feature2.description"),
    },
    {
      icon: Leaf,
      title: t("whyBhutan.feature3.title"),
      description: t("whyBhutan.feature3.description"),
    },
    {
      icon: Sparkles,
      title: t("whyBhutan.feature4.title"),
      description: t("whyBhutan.feature4.description"),
    },
  ];

  return (
    <section id="why-bhutan" className="section-padding bg-background relative">
      {/* Subtle Pattern */}
      <div className="absolute inset-0 bg-pattern-bhutan opacity-30" />

      <div className="max-w-7xl mx-auto relative">
        {/* Section Header */}
        <div className="text-center mb-16 md:mb-24">
          <span className="text-gold text-xs tracking-[0.4em] uppercase font-body block mb-4">
            {t("whyBhutan.tagline")}
          </span>
          <h2 className="font-display text-3xl md:text-5xl text-foreground mb-6">
            {t("whyBhutan.title")}
          </h2>
          <p className="font-body text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            {t("whyBhutan.description")}
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image */}
          <div className="relative group">
            <div className="absolute -inset-4 border border-gold/20 -z-10 transition-all duration-500 group-hover:border-gold/40" />
            <img
              src={tigersNest}
              alt="Tiger's Nest Monastery perched on cliff"
              className="w-full h-[500px] object-cover"
            />
            <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-charcoal/90 to-transparent">
              <p className="font-display text-primary-foreground text-lg italic">
                "{t("whyBhutan.imageCaption")}"
              </p>
              <p className="font-body text-primary-foreground/70 text-sm mt-1">
                {t("whyBhutan.imageDescription")}
              </p>
            </div>
          </div>

          {/* Features */}
          <div className="grid sm:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <div
                key={feature.title}
                className="group hover-lift"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-12 h-12 rounded-sm bg-gold/10 flex items-center justify-center mb-4 group-hover:bg-gold/20 transition-colors">
                  <feature.icon className="w-6 h-6 text-gold" />
                </div>
                <h3 className="font-display text-xl text-foreground mb-2">
                  {feature.title}
                </h3>
                <p className="font-body text-muted-foreground text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Cultural Fact */}
        <div className="mt-20 text-center">
          <div className="inline-block bg-card border border-gold/20 px-8 py-6 max-w-2xl">
            <p className="font-display text-lg text-foreground italic mb-2">
              "{t("whyBhutan.quote")}"
            </p>
            <span className="font-body text-gold text-sm">
              {t("whyBhutan.quoteCaption")}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyBhutan;
