import { Leaf, Mountain, Heart, Sparkles } from "lucide-react";
import tigersNest from "@/assets/tigers-nest.jpg";

const features = [
  {
    icon: Mountain,
    title: "Pristine Landscapes",
    description:
      "Untouched Himalayan valleys, ancient forests, and sacred peaks that have inspired seekers for millennia.",
  },
  {
    icon: Heart,
    title: "Gross National Happiness",
    description:
      "The world's only nation that measures prosperity through the well-being of its people and environment.",
  },
  {
    icon: Leaf,
    title: "Carbon Negative",
    description:
      "Bhutan absorbs more carbon than it produces - a true sanctuary for eco-conscious travelers.",
  },
  {
    icon: Sparkles,
    title: "Living Heritage",
    description:
      "Ancient traditions, vibrant festivals, and Buddhist wisdom preserved through centuries of intentional isolation.",
  },
];

const WhyBhutan = () => {
  return (
    <section id="why-bhutan" className="section-padding bg-background relative">
      {/* Subtle Pattern */}
      <div className="absolute inset-0 bg-pattern-bhutan opacity-30" />

      <div className="max-w-7xl mx-auto relative">
        {/* Section Header */}
        <div className="text-center mb-16 md:mb-24">
          <span className="text-gold text-xs tracking-[0.4em] uppercase font-body block mb-4">
            The Last Shangri-La
          </span>
          <h2 className="font-display text-3xl md:text-5xl text-foreground mb-6">
            Why Bhutan Transforms
          </h2>
          <p className="font-body text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            In a world rushing forward, Bhutan invites you to pause. Here,
            happiness is not pursued - it is cultivated, measured, and protected
            by the very constitution of the land.
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
                "Taktsang Palphug Monastery"
              </p>
              <p className="font-body text-primary-foreground/70 text-sm mt-1">
                The sacred Tiger's Nest, where Guru Rinpoche meditated in the
                8th century
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
              "Bhutan is the only country in the world where the sale of tobacco
              is illegal, hunting is prohibited, and wearing national dress is
              encouraged by law."
            </p>
            <span className="font-body text-gold text-sm">
              A Kingdom Unlike Any Other
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyBhutan;
