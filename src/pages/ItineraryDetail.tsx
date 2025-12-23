import { useParams, Link } from "react-router-dom";
import { useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { ArrowLeft, Check, X, Calendar, MapPin, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { getItineraryById } from "@/data/itineraries";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { useLanguage } from "@/contexts/LanguageContext";

const ItineraryDetail = () => {
  const { id } = useParams<{ id: string }>();
  const itinerary = id ? getItineraryById(id) : undefined;
  const { t } = useLanguage();

  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!itinerary) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <div className="text-center">
          <h1 className="font-display text-4xl text-foreground mb-4">{t("itinerary.notFound")}</h1>
          <Link to="/#journeys">
            <Button variant="gold">{t("itinerary.backToJourneys")}</Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <>
      <Helmet>
        <title>{itinerary.title} | Slowka Bhutan</title>
        <meta name="description" content={itinerary.description} />
      </Helmet>

      <Navigation />

      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[400px] flex items-end">
        <div className="absolute inset-0">
          <img
            src={itinerary.image}
            alt={itinerary.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/50 to-transparent" />
        </div>

        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 pb-12">
          <Link
            to="/#journeys"
            className="inline-flex items-center gap-2 text-gold hover:text-gold-light transition-colors mb-6"
          >
            <ArrowLeft className="w-4 h-4" />
            <span className="text-sm font-body tracking-wider uppercase">{t("itinerary.backToJourneys")}</span>
          </Link>

          <div className="flex flex-wrap items-center gap-4 mb-4">
            <span className="bg-gold text-charcoal text-xs tracking-wider uppercase px-3 py-1 font-body">
              {itinerary.duration}
            </span>
            <span className="text-primary-foreground/70 text-sm font-body">
              {t("itinerary.from")} ${itinerary.pricing[0].price} {t("itinerary.perPerson")}
            </span>
          </div>

          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl text-primary-foreground mb-4">
            {itinerary.title}
          </h1>
          <p className="font-body text-xl text-primary-foreground/80 italic max-w-2xl">
            {itinerary.tagline}
          </p>
        </div>
      </section>

      {/* Main Content */}
      <main className="bg-background">
        {/* Overview */}
        <section className="section-padding">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-3 gap-12">
              {/* Description */}
              <div className="lg:col-span-2">
                <h2 className="font-display text-2xl text-foreground mb-6">{t("itinerary.overview")}</h2>
                <p className="font-body text-muted-foreground leading-relaxed mb-8">
                  {itinerary.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {itinerary.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs font-body text-gold border border-gold/30 px-3 py-1"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* At a Glance */}
              <div className="bg-card border border-border p-6">
                <h3 className="font-display text-xl text-foreground mb-4 flex items-center gap-2">
                  <Calendar className="w-5 h-5 text-gold" />
                  {t("itinerary.atAGlance")}
                </h3>
                <ul className="space-y-3">
                  {itinerary.atAGlance.map((item, index) => (
                    <li key={index} className="font-body text-sm text-muted-foreground flex items-start gap-2">
                      <span className="text-gold mt-0.5">•</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Day by Day */}
        <section className="section-padding bg-secondary/30">
          <div className="max-w-7xl mx-auto">
            <h2 className="font-display text-3xl text-foreground mb-12 text-center">
              {t("itinerary.dayByDay")}
            </h2>

            <div className="space-y-8">
              {itinerary.days.map((day) => (
                <div
                  key={day.day}
                  className="bg-card border border-border p-6 md:p-8 hover-lift"
                >
                  <div className="flex flex-col md:flex-row md:items-start gap-6">
                    <div className="flex-shrink-0">
                      <div className="w-16 h-16 bg-gold/10 border border-gold/30 flex items-center justify-center">
                        <span className="font-display text-2xl text-gold">
                          {day.day}
                        </span>
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="font-display text-xl text-foreground mb-3">
                        {day.title}
                      </h3>
                      <p className="font-body text-muted-foreground leading-relaxed mb-4">
                        {day.description}
                      </p>
                      {day.stay && (
                        <div className="flex items-center gap-2 text-sm">
                          <MapPin className="w-4 h-4 text-gold" />
                          <span className="font-body text-foreground/80">
                            <span className="text-gold">{t("itinerary.stay")}:</span> {day.stay}
                          </span>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing */}
        <section className="section-padding">
          <div className="max-w-7xl mx-auto">
            <h2 className="font-display text-3xl text-foreground mb-12 text-center">
              {t("itinerary.pricing")}
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              {itinerary.pricing.map((price) => (
                <div
                  key={price.groupSize}
                  className="bg-card border border-border p-6 text-center hover-lift"
                >
                  <div className="flex items-center justify-center gap-2 mb-3">
                    <Users className="w-5 h-5 text-gold" />
                    <span className="font-body text-sm text-muted-foreground">
                      {price.groupSize}
                    </span>
                  </div>
                  <p className="font-display text-3xl text-foreground">
                    ${price.price}
                  </p>
                  <p className="font-body text-xs text-muted-foreground mt-1">
                    {t("itinerary.perPerson")}
                  </p>
                </div>
              ))}
            </div>

            <div className="text-center">
              <p className="font-body text-sm text-muted-foreground">
                {t("itinerary.sdfNote")} <span className="text-gold">${itinerary.sdfIncluded} {t("itinerary.sdfLabel")}</span> {t("itinerary.sdfSupport")}
                {itinerary.singleSupplement && (
                  <span> {t("itinerary.singleSupplement")}: ${itinerary.singleSupplement}.</span>
                )}
              </p>
            </div>
          </div>
        </section>

        {/* What's Included */}
        <section className="section-padding bg-secondary/30">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h3 className="font-display text-2xl text-foreground mb-6 flex items-center gap-3">
                  <Check className="w-6 h-6 text-green-500" />
                  {t("itinerary.whatsIncluded")}
                </h3>
                <ul className="space-y-3">
                  {itinerary.included.map((item, index) => (
                    <li key={index} className="font-body text-muted-foreground flex items-start gap-3">
                      <Check className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="font-display text-2xl text-foreground mb-6 flex items-center gap-3">
                  <X className="w-6 h-6 text-red-400" />
                  {t("itinerary.notIncluded")}
                </h3>
                <ul className="space-y-3">
                  {itinerary.notIncluded.map((item, index) => (
                    <li key={index} className="font-body text-muted-foreground flex items-start gap-3">
                      <X className="w-4 h-4 text-red-400 mt-0.5 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Booking Details */}
        <section className="section-padding">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-display text-3xl text-foreground mb-8">
              {t("itinerary.bookingInfo")}
            </h2>
            <div className="bg-card border border-border p-8 mb-8">
              <ul className="space-y-4 text-left">
                {itinerary.bookingDetails.map((detail, index) => (
                  <li key={index} className="font-body text-muted-foreground flex items-start gap-3">
                    <span className="text-gold">•</span>
                    {detail}
                  </li>
                ))}
              </ul>
            </div>
            <Button variant="gold" size="xl">
              {t("itinerary.requestItinerary")}
            </Button>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default ItineraryDetail;
