import founderImage from "@/assets/founder-dilu-giri.jpg";

const FounderSection = () => {
  return (
    <section id="about" className="section-padding bg-muted">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-gold text-xs tracking-[0.4em] uppercase font-body block mb-4">
            About
          </span>
          <h2 className="font-display text-3xl md:text-5xl text-foreground mb-4">
            Meet Our Founder
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
                Dilu Giri
              </h3>
              <p className="text-gold font-body text-sm tracking-wider uppercase">
                Founder & Visionary
              </p>
            </div>

            <div className="space-y-4 font-body text-muted-foreground leading-relaxed">
              <p>
                Dilu Giri's journey in hospitality began with a deep curiosity for people, 
                places, and the way travel can shape perspective. Trained in hotel management 
                in France, Austria, and Thailand, he spent years working closely with guests 
                from across the world, eventually taking on the role of Group General Manager 
                at one of Bhutan's oldest hotel chains.
              </p>
              <p>
                Living and working in hospitality gave Dilu a front-row seat to the reasons 
                people travel to Bhutan. He observed that guests were not only looking for 
                comfort or sightseeing, but for calm, meaning, and a sense of connection. 
                Over time, this understanding shaped his belief that Bhutan offers something 
                far more personal than a holiday. It offers space for inner reflection.
              </p>
              <p>
                From hosting guests to curating journeys, Dilu's work has always been rooted 
                in helping people slow down and experience Bhutan in a way that feels genuine 
                and transformative. This same philosophy now forms the foundation of his travel 
                vision, where every journey is designed to reflect the inner landscape as much 
                as the outer one.
              </p>
            </div>

            {/* Credentials */}
            <div className="pt-4 border-t border-border">
              <div className="flex flex-wrap gap-6 text-sm font-body">
                <div>
                  <span className="text-gold font-medium">Training</span>
                  <p className="text-muted-foreground">France, Austria & Thailand</p>
                </div>
                <div>
                  <span className="text-gold font-medium">Venture</span>
                  <p className="text-muted-foreground">Laughing Lama Hotels</p>
                </div>
                <div>
                  <span className="text-gold font-medium">Philosophy</span>
                  <p className="text-muted-foreground">"Home at Heart"</p>
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
