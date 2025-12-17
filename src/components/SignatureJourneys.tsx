import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { itineraries } from "@/data/itineraries";

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
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {itineraries.map((journey) => (
            <div
              key={journey.id}
              className="group relative overflow-hidden bg-card hover-lift"
            >
              {/* Image */}
              <div className="relative h-56 overflow-hidden">
                <img
                  src={journey.image}
                  alt={journey.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-charcoal/20 to-transparent" />

                {/* Duration Badge */}
                <div className="absolute top-4 right-4">
                  <span className="bg-gold/90 text-charcoal text-xs tracking-wider uppercase px-3 py-1 font-body">
                    {journey.duration}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 border border-t-0 border-border">
                <h3 className="font-display text-xl text-foreground mb-2">
                  {journey.title}
                </h3>
                <p className="font-body text-gold text-sm italic mb-3">
                  {journey.tagline}
                </p>
                <p className="font-body text-muted-foreground text-sm leading-relaxed mb-4 line-clamp-3">
                  {journey.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {journey.tags.slice(0, 4).map((tag) => (
                    <span
                      key={tag}
                      className="text-xs font-body text-gold border border-gold/30 px-2 py-1"
                    >
                      {tag}
                    </span>
                  ))}
                  {journey.tags.length > 4 && (
                    <span className="text-xs font-body text-muted-foreground px-2 py-1">
                      +{journey.tags.length - 4} more
                    </span>
                  )}
                </div>

                {/* CTA */}
                <Link to={`/itinerary/${journey.id}`}>
                  <Button
                    variant="elegant"
                    className="w-full group/btn"
                  >
                    <span>View Itinerary</span>
                    <ArrowRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
                  </Button>
                </Link>
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
