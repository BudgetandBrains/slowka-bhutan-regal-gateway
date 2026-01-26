import { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Menu, X, Globe } from "lucide-react";
import { cn } from "@/lib/utils";
import { useLanguage } from "@/contexts/LanguageContext";
import slowkaLogo from "@/assets/slowka-logo.png";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();
  const location = useLocation();
  const navigate = useNavigate();
  const isHomePage = location.pathname === "/";

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: t("nav.whyBhutan"), href: "#why-bhutan" },
    { name: t("nav.experience"), href: "#experience" },
    { name: t("nav.journeys"), href: "#journeys" },
    { name: t("nav.moments"), href: "#moments" },
  ];

  const toggleLanguage = () => {
    setLanguage(language === "en" ? "fr" : "en");
  };

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    if (isHomePage) {
      // On homepage, just scroll to the section
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      // On other pages, navigate to homepage with hash
      navigate("/" + href);
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
        isScrolled
          ? "bg-background/95 backdrop-blur-md shadow-lg py-4"
          : "bg-transparent py-6"
      )}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="group">
          <img
            src={slowkaLogo}
            alt="Slowka - Journeys Within"
            className="h-16 md:h-20 w-auto transition-all duration-300"
          />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className={cn(
                "font-body text-sm tracking-wider uppercase transition-all duration-300 hover:opacity-70 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-px after:transition-all after:duration-300 hover:after:w-full cursor-pointer",
                isScrolled
                  ? "text-foreground after:bg-gold"
                  : "text-primary-foreground/90 after:bg-primary-foreground"
              )}
            >
              {link.name}
            </a>
          ))}
          
          {/* Language Toggle */}
          <button
            onClick={toggleLanguage}
            className={cn(
              "flex items-center gap-2 font-body text-sm tracking-wider uppercase transition-all duration-300 hover:opacity-70 ml-4 px-3 py-1.5 border rounded-sm",
              isScrolled
                ? "text-foreground border-gold/30 hover:border-gold"
                : "text-primary-foreground/90 border-primary-foreground/30 hover:border-primary-foreground"
            )}
          >
            <Globe className="w-4 h-4" />
            <span>{language === "en" ? "FR" : "EN"}</span>
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className={cn(
            "md:hidden p-2 transition-colors",
            isScrolled ? "text-foreground" : "text-primary-foreground"
          )}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={cn(
          "md:hidden absolute top-full left-0 right-0 bg-background/98 backdrop-blur-lg transition-all duration-300 overflow-hidden",
          isMobileMenuOpen ? "max-h-96 border-b border-gold/20" : "max-h-0"
        )}
      >
        <div className="px-6 py-6 flex flex-col gap-4">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className="font-body text-sm tracking-wider uppercase text-foreground py-2 border-b border-border/50 cursor-pointer"
            >
              {link.name}
            </a>
          ))}
          
          {/* Mobile Language Toggle */}
          <button
            onClick={toggleLanguage}
            className="flex items-center gap-2 font-body text-sm tracking-wider uppercase text-foreground py-2 border-b border-border/50"
          >
            <Globe className="w-4 h-4" />
            <span>{language === "en" ? "Français" : "English"}</span>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
