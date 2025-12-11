import { Shield, Users, Globe, Award } from "lucide-react";
import monksMonastery from "@/assets/monks-monastery.jpg";

const pillars = [
  {
    icon: Shield,
    title: "Local Expertise",
    stat: "25+",
    label: "Years in Bhutan",
    description:
      "Deep-rooted relationships with communities, monasteries, and local artisans.",
  },
  {
    icon: Users,
    title: "B2B Excellence",
    stat: "500+",
    label: "Partner Agencies",
    description:
      "Trusted by leading travel operators across Europe, Asia, and the Americas.",
  },
  {
    icon: Globe,
    title: "Sustainable Tourism",
    stat: "100%",
    label: "Carbon Offset",
    description:
      "Every journey contributes to conservation and community development.",
  },
  {
    icon: Award,
    title: "Curated Quality",
    stat: "98%",
    label: "Satisfaction",
    description:
      "Handpicked accommodations and experiences that exceed expectations.",
  },
];

const SlowkaExperience = () => {
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
            Our Promise
          </span>
          <h2 className="font-display text-3xl md:text-5xl mb-6">
            The Slowka Difference
          </h2>
          <p className="font-body text-primary-foreground/80 max-w-2xl mx-auto leading-relaxed">
            We don't just arrange trips—we craft transformations. Every detail
            is considered, every moment intentional, reflecting the unhurried
            philosophy from which we take our name.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {pillars.map((pillar, index) => (
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
            "Slowka means 'to slow down'. It is not just our name—it
            is our philosophy, our gift to every traveler who walks this sacred
            land."
          </blockquote>
          <div className="mt-6 flex items-center justify-center gap-4">
            <div className="w-12 h-px bg-gold/50" />
            <span className="font-body text-gold text-sm tracking-wider">
              Dilu Giri, Founder
            </span>
            <div className="w-12 h-px bg-gold/50" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SlowkaExperience;
