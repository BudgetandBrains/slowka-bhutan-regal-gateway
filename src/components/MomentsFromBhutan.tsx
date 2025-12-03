import { useState } from "react";
import monksMonastery from "@/assets/monks-monastery.jpg";
import prayerFlags from "@/assets/prayer-flags.jpg";
import riceTerraces from "@/assets/rice-terraces.jpg";
import wellnessBath from "@/assets/wellness-bath.jpg";
import tigersNest from "@/assets/tigers-nest.jpg";
import heroBhutan from "@/assets/hero-bhutan.jpg";

const moments = [
  {
    image: monksMonastery,
    title: "Morning Prayers",
    story:
      "At dawn, the sound of conch shells echoes through monastery halls as monks begin their daily prayers—a tradition unchanged for centuries.",
    fact: "Bhutan has over 2,000 monasteries and temples.",
  },
  {
    image: prayerFlags,
    title: "Wind Prayers",
    story:
      "Colorful prayer flags flutter across mountain passes, carrying mantras and blessings on the wind to all sentient beings.",
    fact: "Each color represents an element: blue (sky), white (air), red (fire), green (water), yellow (earth).",
  },
  {
    image: riceTerraces,
    title: "Valley of Life",
    story:
      "Farmers tend rice paddies using methods passed down through generations, in harmony with the rhythms of nature.",
    fact: "72% of Bhutan remains under forest cover by constitutional mandate.",
  },
  {
    image: wellnessBath,
    title: "Ancient Healing",
    story:
      "Hot stone baths, known as 'dotsho', have been a cornerstone of Bhutanese wellness for centuries—river stones heated and placed in wooden tubs.",
    fact: "Traditional medicine (Sowa Rigpa) is provided free by the government.",
  },
  {
    image: tigersNest,
    title: "Sacred Heights",
    story:
      "Legend says Guru Rinpoche flew to this cliff on the back of a tigress to meditate and bring Buddhism to Bhutan.",
    fact: "The monastery sits at 3,120 meters (10,240 ft) above sea level.",
  },
  {
    image: heroBhutan,
    title: "Golden Hour",
    story:
      "As the sun sets over the Himalayas, the last light paints ancient dzongs in gold—a daily reminder of Bhutan's timeless beauty.",
    fact: "Bhutan measures success through Gross National Happiness, not GDP.",
  },
];

const MomentsFromBhutan = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section id="moments" className="section-padding bg-background">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-gold text-xs tracking-[0.4em] uppercase font-body block mb-4">
            Stories & Traditions
          </span>
          <h2 className="font-display text-3xl md:text-5xl text-foreground mb-6">
            Moments from Bhutan
          </h2>
          <p className="font-body text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Hover over each image to discover the stories and cultural wisdom
            that make Bhutan unlike anywhere else on Earth.
          </p>
        </div>

        {/* Photo Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {moments.map((moment, index) => (
            <div
              key={moment.title}
              className={`relative overflow-hidden cursor-pointer group ${
                index === 0 || index === 5 ? "row-span-2" : ""
              }`}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <img
                src={moment.image}
                alt={moment.title}
                className={`w-full object-cover transition-all duration-700 ${
                  index === 0 || index === 5 ? "h-full min-h-[400px]" : "h-48 md:h-64"
                } ${hoveredIndex === index ? "scale-110" : "scale-100"}`}
              />

              {/* Overlay */}
              <div
                className={`absolute inset-0 transition-all duration-500 ${
                  hoveredIndex === index
                    ? "bg-charcoal/80"
                    : "bg-gradient-to-t from-charcoal/60 via-transparent to-transparent"
                }`}
              />

              {/* Default Title */}
              <div
                className={`absolute bottom-4 left-4 right-4 transition-all duration-300 ${
                  hoveredIndex === index ? "opacity-0" : "opacity-100"
                }`}
              >
                <h3 className="font-display text-lg text-primary-foreground">
                  {moment.title}
                </h3>
              </div>

              {/* Hover Content */}
              <div
                className={`absolute inset-0 p-4 md:p-6 flex flex-col justify-center transition-all duration-500 ${
                  hoveredIndex === index
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-4"
                }`}
              >
                <h3 className="font-display text-xl md:text-2xl text-primary-foreground mb-3">
                  {moment.title}
                </h3>
                <p className="font-body text-sm text-primary-foreground/90 leading-relaxed mb-4 line-clamp-3">
                  {moment.story}
                </p>
                <div className="mt-auto">
                  <div className="bg-gold/20 backdrop-blur-sm border border-gold/30 p-3 rounded-sm">
                    <span className="text-gold-light text-xs tracking-wider uppercase block mb-1 font-body">
                      Did you know?
                    </span>
                    <p className="font-body text-xs text-primary-foreground/80">
                      {moment.fact}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MomentsFromBhutan;
