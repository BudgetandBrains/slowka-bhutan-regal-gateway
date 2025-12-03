import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-charcoal text-primary-foreground py-16 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="md:col-span-1">
            <Link to="/" className="inline-block mb-6">
              <span className="font-display text-3xl font-semibold tracking-wide">
                Slowka
              </span>
              <span className="block text-[10px] tracking-[0.3em] uppercase text-gold-light">
                Bhutan
              </span>
            </Link>
            <p className="font-body text-sm text-primary-foreground/70 leading-relaxed">
              Crafting transformative journeys through the Kingdom of Happiness
              since 1998.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display text-lg mb-6">Explore</h4>
            <ul className="space-y-3">
              {["Why Bhutan", "Our Journeys", "Moments", "Travel Tips"].map(
                (link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="font-body text-sm text-primary-foreground/70 hover:text-gold transition-colors"
                    >
                      {link}
                    </a>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Partner */}
          <div>
            <h4 className="font-display text-lg mb-6">Partners</h4>
            <ul className="space-y-3">
              {[
                "Become a Partner",
                "B2B Portal",
                "FAM Trips",
                "Marketing Resources",
              ].map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="font-body text-sm text-primary-foreground/70 hover:text-gold transition-colors"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display text-lg mb-6">Contact</h4>
            <div className="space-y-3 font-body text-sm text-primary-foreground/70">
              <p>Norzin Lam, Thimphu</p>
              <p>Kingdom of Bhutan</p>
              <p className="mt-4">partners@slowka.bt</p>
              <p>+975 2 334 567</p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-primary-foreground/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="font-body text-xs text-primary-foreground/50">
            © 2024 Slowka Bhutan. All rights reserved. Licensed by Tourism
            Council of Bhutan.
          </p>
          <div className="flex items-center gap-6">
            <a
              href="#"
              className="font-body text-xs text-primary-foreground/50 hover:text-gold transition-colors"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="font-body text-xs text-primary-foreground/50 hover:text-gold transition-colors"
            >
              Terms of Service
            </a>
          </div>
        </div>

        {/* Bhutanese Blessing */}
        <div className="mt-12 text-center">
          <p className="font-display text-lg italic text-primary-foreground/40">
            "Tashi Delek"
          </p>
          <p className="font-body text-xs text-primary-foreground/30 mt-1">
            — May all auspicious signs come to you
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
