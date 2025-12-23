import founderImage from "@/assets/founder-dilu-giri.jpg";
import { useLanguage } from "@/contexts/LanguageContext";

const FounderSection = () => {
  const { t } = useLanguage();

  return (
    <section id="about" className="section-padding bg-muted">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-gold text-xs tracking-[0.4em] uppercase font-body block mb-4">
            {t("founder.tagline")}
          </span>
          <h2 className="font-display text-3xl md:text-5xl text-foreground mb-4">
            {t("founder.title")}
          </h2>
        </div>

        {/* Founder Content */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image */}
          <div className="relative max-w-sm mx-auto lg:mx-0">
            <div className="aspect-[4/5] overflow-hidden rounded-sm">
              <img
                src={founderImage}
                alt="Dilu Giri, Founder of Slowka Bhutan"
                className="w-full h-full object-cover object-top"
              />
            </div>
            {/* Decorative element */}
            <div className="absolute -bottom-4 -right-4 w-24 h-24 border-2 border-gold/30 rounded-sm -z-10" />
          </div>

          {/* Content */}
          <div className="space-y-6">
            <div>
              <h3 className="font-display text-2xl md:text-3xl text-foreground mb-2">
                {t("founder.name")}
              </h3>
              <p className="text-gold font-body text-sm tracking-wider uppercase">
                {t("founder.role")}
              </p>
            </div>

            <div className="space-y-4 font-body text-muted-foreground leading-relaxed">
              <p>{t("founder.bio1")}</p>
              <p>{t("founder.bio2")}</p>
              <p>{t("founder.bio3")}</p>
            </div>

            {/* Credentials */}
            <div className="pt-4 border-t border-border">
              <div className="flex flex-wrap gap-6 text-sm font-body">
                <div>
                  <span className="text-gold font-medium">{t("founder.training")}</span>
                  <p className="text-muted-foreground">{t("founder.trainingValue")}</p>
                </div>
                <div>
                  <span className="text-gold font-medium">{t("founder.venture")}</span>
                  <p className="text-muted-foreground">{t("founder.ventureValue")}</p>
                </div>
                <div>
                  <span className="text-gold font-medium">{t("founder.philosophy")}</span>
                  <p className="text-muted-foreground">{t("founder.philosophyValue")}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FounderSection;
