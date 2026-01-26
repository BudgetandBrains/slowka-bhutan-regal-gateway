import { Link } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";
import slowkaLogo from "@/assets/slowka-logo.png";

const Footer = () => {
  const { t } = useLanguage();

  const footerLinks = [
    { name: t("footer.whyBhutan"), href: "#why-bhutan" },
    { name: t("footer.ourJourneys"), href: "#journeys" },
    { name: t("footer.moments"), href: "#moments" },
  ];

  return (
    <footer className="bg-charcoal text-primary-foreground py-16 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div className="md:col-span-1">
            <Link to="/" className="inline-block mb-6">
              <img
                src={slowkaLogo}
                alt="Slowka - Journeys Within"
                className="h-16 w-auto brightness-0 invert"
              />
            </Link>
            <p className="font-body text-sm text-primary-foreground/70 leading-relaxed">
              {t("footer.tagline")}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display text-lg mb-6">{t("footer.explore")}</h4>
            <ul className="space-y-3">
              {footerLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="font-body text-sm text-primary-foreground/70 hover:text-gold transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display text-lg mb-6">{t("footer.contact")}</h4>
            <div className="space-y-3 font-body text-sm text-primary-foreground/70">
              <p>Norzin Lam, Thimphu</p>
              <p>Kingdom of Bhutan</p>
              <p className="mt-4">journeys@slowkabhutan.com</p>
              <p>+975 2 334 567</p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-primary-foreground/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="font-body text-xs text-primary-foreground/50">
            {t("footer.copyright")}
          </p>
          <div className="flex items-center gap-6">
            <a
              href="#"
              className="font-body text-xs text-primary-foreground/50 hover:text-gold transition-colors"
            >
              {t("footer.privacy")}
            </a>
            <a
              href="#"
              className="font-body text-xs text-primary-foreground/50 hover:text-gold transition-colors"
            >
              {t("footer.terms")}
            </a>
          </div>
        </div>

        {/* Bhutanese Blessing */}
        <div className="mt-12 text-center">
          <p className="font-display text-lg italic text-primary-foreground/40">
            "{t("footer.blessing")}"
          </p>
          <p className="font-body text-xs text-primary-foreground/30 mt-1">
            {t("footer.blessingMeaning")}
          </p>
        </div>

        {/* Credits */}
        <div className="mt-8 text-center">
          <p className="font-body text-xs text-primary-foreground/40">
            Website designed and developed by{" "}
            <a
              href="https://budgetandbrains.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gold hover:text-gold-light transition-colors"
            >
              Budget and Brains
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
