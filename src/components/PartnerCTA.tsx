import { Mail } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const PartnerCTA = () => {
  const { t } = useLanguage();

  const benefits = [
    t("partner.benefit1"),
    t("partner.benefit2"),
    t("partner.benefit3"),
    t("partner.benefit4"),
    t("partner.benefit5"),
  ];

  return (
    <section className="section-padding bg-card border-t border-border relative overflow-hidden">
      {/* Decorative Pattern */}
      <div className="absolute inset-0 bg-pattern-bhutan opacity-20" />

      <div className="max-w-7xl mx-auto relative">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div>
            <span className="text-gold text-xs tracking-[0.4em] uppercase font-body block mb-4">
              {t("partner.tagline")}
            </span>
            <h2 className="font-display text-3xl md:text-5xl text-foreground mb-6">
              {t("partner.title1")}
              <br />
              <span className="italic font-light">{t("partner.title2")}</span>
            </h2>
            <p className="font-body text-muted-foreground leading-relaxed mb-8">
              {t("partner.description")}
            </p>

            {/* Benefits */}
            <div className="space-y-4 mb-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-gold mt-2 shrink-0" />
                  <span className="font-body text-foreground text-sm">
                    {benefit}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Right - Contact Info */}
          <div className="bg-background border border-gold/20 p-8 md:p-10 flex flex-col justify-center">
            <h3 className="font-display text-2xl text-foreground mb-6">
              {t("partner.getInTouch")}
            </h3>
            
            <p className="font-body text-muted-foreground leading-relaxed mb-8">
              {t("partner.contactDescription")}
            </p>

            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center">
                  <Mail className="w-5 h-5 text-gold" />
                </div>
                <div>
                  <span className="font-body text-xs tracking-wider uppercase text-muted-foreground block mb-1">
                    {t("partner.emailUs")}
                  </span>
                  <a 
                    href="mailto:journeys@slowkabhutan.com" 
                    className="font-body text-lg text-foreground hover:text-gold transition-colors"
                  >
                    journeys@slowkabhutan.com
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PartnerCTA;
