import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin } from "lucide-react";

const PartnerCTA = () => {
  return (
    <section className="section-padding bg-card border-t border-border relative overflow-hidden">
      {/* Decorative Pattern */}
      <div className="absolute inset-0 bg-pattern-bhutan opacity-20" />

      <div className="max-w-7xl mx-auto relative">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div>
            <span className="text-gold text-xs tracking-[0.4em] uppercase font-body block mb-4">
              For Travel Partners
            </span>
            <h2 className="font-display text-3xl md:text-5xl text-foreground mb-6">
              Let's Create
              <br />
              <span className="italic font-light">Together</span>
            </h2>
            <p className="font-body text-muted-foreground leading-relaxed mb-8">
              Whether you're a boutique travel agency, a global tour operator,
              or a corporate travel planner, Slowka Bhutan is your trusted
              ground partner. We handle the details - you deliver the dreams.
            </p>

            {/* Benefits */}
            <div className="space-y-4 mb-8">
              {[
                "Competitive B2B pricing and commission structures",
                "White-label itinerary support for your brand",
                "24/7 on-ground assistance for your clients",
                "Marketing materials and high-resolution imagery",
                "FAM trips for qualifying partners",
              ].map((benefit, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-gold mt-2 shrink-0" />
                  <span className="font-body text-foreground text-sm">
                    {benefit}
                  </span>
                </div>
              ))}
            </div>

            <Button variant="gold" size="lg">
              Become a Partner
            </Button>
          </div>

          {/* Right - Contact Form */}
          <div className="bg-background border border-gold/20 p-8 md:p-10">
            <h3 className="font-display text-2xl text-foreground mb-6">
              Start a Conversation
            </h3>

            <form className="space-y-5">
              <div className="grid md:grid-cols-2 gap-5">
                <div>
                  <label className="font-body text-xs tracking-wider uppercase text-muted-foreground block mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    className="w-full bg-transparent border border-border focus:border-gold px-4 py-3 font-body text-foreground outline-none transition-colors"
                    placeholder="Full name"
                  />
                </div>
                <div>
                  <label className="font-body text-xs tracking-wider uppercase text-muted-foreground block mb-2">
                    Company
                  </label>
                  <input
                    type="text"
                    className="w-full bg-transparent border border-border focus:border-gold px-4 py-3 font-body text-foreground outline-none transition-colors"
                    placeholder="Company name"
                  />
                </div>
              </div>

              <div>
                <label className="font-body text-xs tracking-wider uppercase text-muted-foreground block mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  className="w-full bg-transparent border border-border focus:border-gold px-4 py-3 font-body text-foreground outline-none transition-colors"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label className="font-body text-xs tracking-wider uppercase text-muted-foreground block mb-2">
                  Your Inquiry
                </label>
                <textarea
                  rows={4}
                  className="w-full bg-transparent border border-border focus:border-gold px-4 py-3 font-body text-foreground outline-none transition-colors resize-none"
                  placeholder="Tell us about your travel business and how we can collaborate..."
                />
              </div>

              <Button variant="royal" className="w-full" size="lg">
                Send Inquiry
              </Button>
            </form>

            {/* Contact Info */}
            <div className="mt-8 pt-8 border-t border-border grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-gold" />
                <span className="font-body text-sm text-muted-foreground">
                  partners@slowka.bt
                </span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-gold" />
                <span className="font-body text-sm text-muted-foreground">
                  +975 2 334 567
                </span>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="w-4 h-4 text-gold" />
                <span className="font-body text-sm text-muted-foreground">
                  Thimphu, Bhutan
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PartnerCTA;
