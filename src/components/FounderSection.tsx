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
                Dilu Giri is a renowned icon in Bhutan's hotel industry, celebrated for his 
                extensive expertise and leadership. With a solid background in hotel management 
                and specialized training in France, Austria, and Thailand, he rose through the 
                ranks to become the Group General Manager of one of Bhutan's oldest and most 
                prestigious hotel chains.
              </p>
              <p>
                After years of dedicated service, Dilu embarked on a new venture, founding 
                Laughing Lama Hotels / Resorts / Homestays. Under this umbrella, Laughing Lama 
                Hotels now offers a collection of 3 and 4-star properties across Bhutan, 
                providing travellers with a promise of "home at heart" hospitality, rooted in 
                his passion for the industry.
              </p>
              <p>
                His vision blends authentic Bhutanese warmth with world-class standards, 
                creating experiences that honor tradition while embracing excellence.
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
