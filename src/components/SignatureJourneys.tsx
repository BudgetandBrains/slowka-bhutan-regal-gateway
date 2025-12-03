import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import tigersNest from "@/assets/tigers-nest.jpg";
import wellnessBath from "@/assets/wellness-bath.jpg";
import prayerFlags from "@/assets/prayer-flags.jpg";
import riceTerraces from "@/assets/rice-terraces.jpg";

const journeys = [
  {
    category: "Culture",
    title: "Heritage & Spirituality",
    duration: "10 Days",
    image: tigersNest,
    description:
      "Ancient monasteries, sacred festivals, and encounters with living Buddhist traditions.",
    highlights: ["Paro Tshechu Festival", "Punakha Dzong", "Meditation Retreat"],
  },
  {
    category: "Wellness",
    title: "Healing Traditions",
    duration: "8 Days",
    image: wellnessBath,
    description:
      "Traditional hot stone baths, herbal therapies, and holistic rejuvenation in mountain sanctuaries.",
    highlights: ["Hot Stone Therapy", "Traditional Medicine", "Yoga Retreats"],
  },
  {
    category: "Adventure",
    title: "Himalayan Trails",
    duration: "14 Days",
    image: prayerFlags,
    description:
      "Trek through pristine valleys, camp under starlit skies, and discover hidden mountain villages.",
    highlights: ["Druk Path Trek", "Snowman Trail", "Peak Expeditions"],
  },
  {
    category: "Nature",
    title: "Valley & Wildlife",
    duration: "7 Days",
    image: riceTerraces,
    description:
      "Emerald rice terraces, rare wildlife sanctuaries, and the untouched beauty of rural Bhutan.",
    highlights: ["Phobjikha Valley", "Black-Necked Cranes", "Forest Bathing"],
  },
];

const SignatureJourneys = () => {
  return (
    <section id="journeys" className="section-padding bg-secondary/30 relative">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-16">
          <div>
            <span className="text-gold text-xs tracking-[0.4em] uppercase font-body block mb-4">
              Curated Experiences
            </span>
            <h2 className="font-display text-3xl md:text-5xl text-foreground">
              Signature Journeys
            </h2>
          </div>
          <p className="font-body text-muted-foreground max-w-md mt-4 md:mt-0 md:text-right leading-relaxed">
            Each itinerary is a canvas—adaptable to your clients' dreams,
            crafted with our expertise.
          </p>
        </div>

        {/* Journeys Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {journeys.map((journey, index) => (
            <div
              key={journey.title}
              className="group relative overflow-hidden bg-card hover-lift"
            >
              {/* Image */}
              <div className="relative h-72 overflow-hidden">
                <img
                  src={journey.image}
                  alt={journey.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-charcoal/20 to-transparent" />

                {/* Category Badge */}
                <div className="absolute top-4 left-4">
                  <span className="bg-gold/90 text-charcoal text-xs tracking-wider uppercase px-3 py-1 font-body">
                    {journey.category}
                  </span>
                </div>

                {/* Duration */}
                <div className="absolute top-4 right-4">
                  <span className="bg-charcoal/70 backdrop-blur-sm text-primary-foreground text-xs tracking-wider px-3 py-1 font-body">
                    {journey.duration}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 border border-t-0 border-border">
                <h3 className="font-display text-2xl text-foreground mb-2">
                  {journey.title}
                </h3>
                <p className="font-body text-muted-foreground text-sm leading-relaxed mb-4">
                  {journey.description}
                </p>

                {/* Highlights */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {journey.highlights.map((highlight) => (
                    <span
                      key={highlight}
                      className="text-xs font-body text-gold border border-gold/30 px-2 py-1"
                    >
                      {highlight}
                    </span>
                  ))}
                </div>

                {/* CTA */}
                <Button
                  variant="elegant"
                  className="w-full group/btn"
                >
                  <span>View Itinerary</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <p className="font-body text-muted-foreground mb-6">
            Looking for something unique? We specialize in bespoke journeys
            tailored to your clients' specific interests.
          </p>
          <Button variant="gold" size="lg">
            Request Custom Itinerary
          </Button>
        </div>
      </div>
    </section>
  );
};

export default SignatureJourneys;
