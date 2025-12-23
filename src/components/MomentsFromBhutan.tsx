import { useState } from "react";
import monksMonastery from "@/assets/monks-monastery.jpg";
import prayerFlags from "@/assets/prayer-flags.jpg";
import riceTerraces from "@/assets/rice-terraces.jpg";
import wellnessBath from "@/assets/wellness-bath.jpg";
import tigersNest from "@/assets/tigers-nest.jpg";
import goldenHour from "@/assets/golden-hour.jpg";
import { useLanguage } from "@/contexts/LanguageContext";

const MomentsFromBhutan = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const { t } = useLanguage();

  const moments = [
    {
      image: monksMonastery,
      title: t("moments.1.title"),
      story: t("moments.1.story"),
      fact: t("moments.1.fact"),
    },
    {
      image: prayerFlags,
      title: t("moments.2.title"),
      story: t("moments.2.story"),
      fact: t("moments.2.fact"),
    },
    {
      image: riceTerraces,
      title: t("moments.3.title"),
      story: t("moments.3.story"),
      fact: t("moments.3.fact"),
    },
    {
      image: wellnessBath,
      title: t("moments.4.title"),
      story: t("moments.4.story"),
      fact: t("moments.4.fact"),
    },
    {
      image: tigersNest,
      title: t("moments.5.title"),
      story: t("moments.5.story"),
      fact: t("moments.5.fact"),
    },
    {
      image: goldenHour,
      title: t("moments.6.title"),
      story: t("moments.6.story"),
      fact: t("moments.6.fact"),
    },
  ];

  return (
    <section id="moments" className="section-padding bg-background">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-gold text-xs tracking-[0.4em] uppercase font-body block mb-4">
            {t("moments.tagline")}
          </span>
          <h2 className="font-display text-3xl md:text-5xl text-foreground mb-6">
            {t("moments.title")}
          </h2>
          <p className="font-body text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            {t("moments.description")}
          </p>
        </div>

        {/* Photo Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {moments.map((moment, index) => (
            <div
              key={moment.title}
              className={`relative overflow-hidden cursor-pointer group ${
                index === 0 || index === 5 ? "row-span-2" : ""
              }`}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <img
                src={moment.image}
                alt={moment.title}
                className={`w-full object-cover transition-all duration-700 ${
                  index === 0 || index === 5 ? "h-full min-h-[400px]" : "h-48 md:h-64"
                } ${hoveredIndex === index ? "scale-110" : "scale-100"}`}
              />

              {/* Overlay */}
              <div
                className={`absolute inset-0 transition-all duration-500 ${
                  hoveredIndex === index
                    ? "bg-charcoal/80"
                    : "bg-gradient-to-t from-charcoal/60 via-transparent to-transparent"
                }`}
              />

              {/* Default Title */}
              <div
                className={`absolute bottom-4 left-4 right-4 transition-all duration-300 ${
                  hoveredIndex === index ? "opacity-0" : "opacity-100"
                }`}
              >
                <h3 className="font-display text-lg text-primary-foreground">
                  {moment.title}
                </h3>
              </div>

              {/* Hover Content */}
              <div
                className={`absolute inset-0 p-4 md:p-6 flex flex-col justify-center transition-all duration-500 ${
                  hoveredIndex === index
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-4"
                }`}
              >
                <h3 className="font-display text-xl md:text-2xl text-primary-foreground mb-3">
                  {moment.title}
                </h3>
                <p className="font-body text-sm text-primary-foreground/90 leading-relaxed mb-4 line-clamp-3">
                  {moment.story}
                </p>
                <div className="mt-auto">
                  <div className="bg-gold/20 backdrop-blur-sm border border-gold/30 p-3 rounded-sm">
                    <span className="text-gold-light text-xs tracking-wider uppercase block mb-1 font-body">
                      {t("moments.didYouKnow")}
                    </span>
                    <p className="font-body text-xs text-primary-foreground/80">
                      {moment.fact}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MomentsFromBhutan;
