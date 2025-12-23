import { createContext, useContext, useState, ReactNode } from "react";

type Language = "en" | "fr";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations = {
  en: {
    // Navigation
    "nav.whyBhutan": "Why Bhutan",
    "nav.experience": "Experience",
    "nav.journeys": "Journeys",
    "nav.moments": "Moments",
    
    // Hero
    "hero.tagline": "The Kingdom of Happiness",
    "hero.title1": "Where Time Slows,",
    "hero.title2": "Stories Begin",
    "hero.subtitle": "Curating transformative journeys through the last Himalayan kingdom for discerning travel partners worldwide.",
    "hero.cta": "Explore Journeys",
    "hero.discover": "Discover",
    
    // Why Bhutan
    "whyBhutan.tagline": "The Last Shangri-La",
    "whyBhutan.title": "Why Bhutan Transforms",
    "whyBhutan.description": "In a world rushing forward, Bhutan invites you to pause. Here, happiness is not pursued - it is cultivated, measured, and protected by the very constitution of the land.",
    "whyBhutan.feature1.title": "Pristine Landscapes",
    "whyBhutan.feature1.description": "Untouched Himalayan valleys, ancient forests, and sacred peaks that have inspired seekers for millennia.",
    "whyBhutan.feature2.title": "Gross National Happiness",
    "whyBhutan.feature2.description": "The world's only nation that measures prosperity through the well-being of its people and environment.",
    "whyBhutan.feature3.title": "Carbon Negative",
    "whyBhutan.feature3.description": "Bhutan absorbs more carbon than it produces - a true sanctuary for eco-conscious travelers.",
    "whyBhutan.feature4.title": "Living Heritage",
    "whyBhutan.feature4.description": "Ancient traditions, vibrant festivals, and Buddhist wisdom preserved through centuries of intentional isolation.",
    "whyBhutan.imageCaption": "Taktsang Palphug Monastery",
    "whyBhutan.imageDescription": "The sacred Tiger's Nest, where Guru Rinpoche meditated in the 8th century",
    "whyBhutan.quote": "Bhutan is the only country in the world where the sale of tobacco is illegal, hunting is prohibited, and wearing national dress is encouraged by law.",
    "whyBhutan.quoteCaption": "A Kingdom Unlike Any Other",
    
    // Slowka Experience
    "experience.tagline": "Our Promise",
    "experience.title": "The Slowka Difference",
    "experience.description": "We don't just arrange trips—we craft transformations. Every detail is considered, every moment intentional, reflecting the unhurried philosophy from which we take our name.",
    "experience.pillar1.title": "Local Expertise",
    "experience.pillar1.stat": "25+",
    "experience.pillar1.label": "Years in Bhutan",
    "experience.pillar1.description": "Deep-rooted relationships with communities, monasteries, and local artisans.",
    "experience.pillar2.title": "B2B Excellence",
    "experience.pillar2.stat": "500+",
    "experience.pillar2.label": "Partner Agencies",
    "experience.pillar2.description": "Trusted by leading travel operators across Europe, Asia, and the Americas.",
    "experience.pillar3.title": "Sustainable Tourism",
    "experience.pillar3.stat": "100%",
    "experience.pillar3.label": "Carbon Offset",
    "experience.pillar3.description": "Every journey contributes to conservation and community development.",
    "experience.pillar4.title": "Curated Quality",
    "experience.pillar4.stat": "98%",
    "experience.pillar4.label": "Satisfaction",
    "experience.pillar4.description": "Handpicked accommodations and experiences that exceed expectations.",
    "experience.quote": "\"Slowka means 'to slow down'. It is not just our name - it is our philosophy, our gift to every traveler who walks this sacred land.\"",
    "experience.quoteAuthor": "Dilu Giri, Founder",
    
    // Founder Section
    "founder.tagline": "About",
    "founder.title": "Meet Our Founder",
    "founder.name": "Dilu Giri",
    "founder.role": "Founder & Visionary",
    "founder.bio1": "Dilu Giri's journey in hospitality began with a deep curiosity for people, places, and the way travel can shape perspective. Trained in hotel management in France, Austria, and Thailand, he spent years working closely with guests from across the world, eventually taking on the role of Group General Manager at one of Bhutan's oldest hotel chains.",
    "founder.bio2": "Living and working in hospitality gave Dilu a front-row seat to the reasons people travel to Bhutan. He observed that guests were not only looking for comfort or sightseeing, but for calm, meaning, and a sense of connection. Over time, this understanding shaped his belief that Bhutan offers something far more personal than a holiday. It offers space for inner reflection.",
    "founder.bio3": "From hosting guests to curating journeys, Dilu's work has always been rooted in helping people slow down and experience Bhutan in a way that feels genuine and transformative. This same philosophy now forms the foundation of his travel vision, where every journey is designed to reflect the inner landscape as much as the outer one.",
    "founder.training": "Training",
    "founder.trainingValue": "France, Austria & Thailand",
    "founder.venture": "Venture",
    "founder.ventureValue": "Laughing Lama Hotels",
    "founder.philosophy": "Philosophy",
    "founder.philosophyValue": "\"Home at Heart\"",
    
    // Signature Journeys
    "journeys.tagline": "Curated Experiences",
    "journeys.title": "Signature Journeys",
    "journeys.description": "Each itinerary is a canvas—adaptable to your clients' dreams, crafted with our expertise.",
    "journeys.viewItinerary": "View Itinerary",
    "journeys.bespoke": "Looking for something unique? We specialize in bespoke journeys tailored to your clients' specific interests.",
    
    // Moments from Bhutan
    "moments.tagline": "Stories & Traditions",
    "moments.title": "Moments from Bhutan",
    "moments.description": "Hover over each image to discover the stories and cultural wisdom that make Bhutan unlike anywhere else on Earth.",
    "moments.didYouKnow": "Did you know?",
    "moments.1.title": "Morning Prayers",
    "moments.1.story": "At dawn, the sound of conch shells echoes through monastery halls as monks begin their daily prayers—a tradition unchanged for centuries.",
    "moments.1.fact": "Bhutan has over 2,000 monasteries and temples.",
    "moments.2.title": "Wind Prayers",
    "moments.2.story": "Colorful prayer flags flutter across mountain passes, carrying mantras and blessings on the wind to all sentient beings.",
    "moments.2.fact": "Each color represents an element: blue (sky), white (air), red (fire), green (water), yellow (earth).",
    "moments.3.title": "Valley of Life",
    "moments.3.story": "Farmers tend rice paddies using methods passed down through generations, in harmony with the rhythms of nature.",
    "moments.3.fact": "72% of Bhutan remains under forest cover by constitutional mandate.",
    "moments.4.title": "Ancient Healing",
    "moments.4.story": "Hot stone baths, known as 'dotsho', have been a cornerstone of Bhutanese wellness for centuries—river stones heated and placed in wooden tubs.",
    "moments.4.fact": "Traditional medicine (Sowa Rigpa) is provided free by the government.",
    "moments.5.title": "Sacred Heights",
    "moments.5.story": "Legend says Guru Rinpoche flew to this cliff on the back of a tigress to meditate and bring Buddhism to Bhutan.",
    "moments.5.fact": "The monastery sits at 3,120 meters (10,240 ft) above sea level.",
    "moments.6.title": "Golden Hour",
    "moments.6.story": "As the sun sets over the Himalayas, the last light paints ancient dzongs in gold—a daily reminder of Bhutan's timeless beauty.",
    "moments.6.fact": "Bhutan measures success through Gross National Happiness, not GDP.",
    
    // Partner CTA
    "partner.tagline": "For Travel Partners",
    "partner.title1": "Let's Create",
    "partner.title2": "Together",
    "partner.description": "Whether you're a boutique travel agency, a global tour operator, or a corporate travel planner, Slowka Bhutan is your trusted ground partner. We handle the details - you deliver the dreams.",
    "partner.benefit1": "Competitive B2B pricing and commission structures",
    "partner.benefit2": "White-label itinerary support for your brand",
    "partner.benefit3": "24/7 on-ground assistance for your clients",
    "partner.benefit4": "Marketing materials and high-resolution imagery",
    "partner.benefit5": "FAM trips for qualifying partners",
    "partner.getInTouch": "Get in Touch",
    "partner.contactDescription": "Ready to partner with us? Reach out directly and let's start a conversation about how we can work together.",
    "partner.emailUs": "Email Us",
    
    // Footer
    "footer.tagline": "Crafting transformative journeys through the Kingdom of Happiness since 1998.",
    "footer.explore": "Explore",
    "footer.whyBhutan": "Why Bhutan",
    "footer.ourJourneys": "Our Journeys",
    "footer.moments": "Moments",
    "footer.contact": "Contact",
    "footer.copyright": "© 2024 Slowka Bhutan. All rights reserved. Licensed by Tourism Council of Bhutan.",
    "footer.privacy": "Privacy Policy",
    "footer.terms": "Terms of Service",
    "footer.blessing": "Tashi Delek",
    "footer.blessingMeaning": "— May all auspicious signs come to you",
  },
  fr: {
    // Navigation
    "nav.whyBhutan": "Pourquoi le Bhoutan",
    "nav.experience": "Expérience",
    "nav.journeys": "Voyages",
    "nav.moments": "Instants",
    
    // Hero
    "hero.tagline": "Le Royaume du Bonheur",
    "hero.title1": "Où le Temps Ralentit,",
    "hero.title2": "Les Histoires Commencent",
    "hero.subtitle": "Créer des voyages transformateurs à travers le dernier royaume himalayen pour des partenaires de voyage exigeants du monde entier.",
    "hero.cta": "Explorer les Voyages",
    "hero.discover": "Découvrir",
    
    // Why Bhutan
    "whyBhutan.tagline": "Le Dernier Shangri-La",
    "whyBhutan.title": "Pourquoi le Bhoutan Transforme",
    "whyBhutan.description": "Dans un monde qui avance à toute vitesse, le Bhoutan vous invite à faire une pause. Ici, le bonheur n'est pas poursuivi - il est cultivé, mesuré et protégé par la constitution même du pays.",
    "whyBhutan.feature1.title": "Paysages Préservés",
    "whyBhutan.feature1.description": "Vallées himalayennes intactes, forêts anciennes et sommets sacrés qui ont inspiré les chercheurs depuis des millénaires.",
    "whyBhutan.feature2.title": "Bonheur National Brut",
    "whyBhutan.feature2.description": "La seule nation au monde qui mesure la prospérité à travers le bien-être de sa population et de son environnement.",
    "whyBhutan.feature3.title": "Carbone Négatif",
    "whyBhutan.feature3.description": "Le Bhoutan absorbe plus de carbone qu'il n'en produit - un véritable sanctuaire pour les voyageurs éco-responsables.",
    "whyBhutan.feature4.title": "Patrimoine Vivant",
    "whyBhutan.feature4.description": "Traditions anciennes, festivals vibrants et sagesse bouddhiste préservés à travers des siècles d'isolement intentionnel.",
    "whyBhutan.imageCaption": "Monastère de Taktsang Palphug",
    "whyBhutan.imageDescription": "Le Nid du Tigre sacré, où Guru Rinpoche a médité au 8ème siècle",
    "whyBhutan.quote": "Le Bhoutan est le seul pays au monde où la vente de tabac est illégale, la chasse interdite et le port du costume national encouragé par la loi.",
    "whyBhutan.quoteCaption": "Un Royaume Pas Comme les Autres",
    
    // Slowka Experience
    "experience.tagline": "Notre Promesse",
    "experience.title": "La Différence Slowka",
    "experience.description": "Nous ne faisons pas qu'organiser des voyages — nous créons des transformations. Chaque détail est pensé, chaque moment intentionnel, reflétant la philosophie de la lenteur dont nous tirons notre nom.",
    "experience.pillar1.title": "Expertise Locale",
    "experience.pillar1.stat": "25+",
    "experience.pillar1.label": "Années au Bhoutan",
    "experience.pillar1.description": "Relations profondes avec les communautés, monastères et artisans locaux.",
    "experience.pillar2.title": "Excellence B2B",
    "experience.pillar2.stat": "500+",
    "experience.pillar2.label": "Agences Partenaires",
    "experience.pillar2.description": "La confiance des principaux opérateurs touristiques d'Europe, d'Asie et des Amériques.",
    "experience.pillar3.title": "Tourisme Durable",
    "experience.pillar3.stat": "100%",
    "experience.pillar3.label": "Compensation Carbone",
    "experience.pillar3.description": "Chaque voyage contribue à la conservation et au développement communautaire.",
    "experience.pillar4.title": "Qualité Curatée",
    "experience.pillar4.stat": "98%",
    "experience.pillar4.label": "Satisfaction",
    "experience.pillar4.description": "Hébergements et expériences triés sur le volet qui dépassent les attentes.",
    "experience.quote": "\"Slowka signifie 'ralentir'. Ce n'est pas seulement notre nom - c'est notre philosophie, notre cadeau à chaque voyageur qui foule cette terre sacrée.\"",
    "experience.quoteAuthor": "Dilu Giri, Fondateur",
    
    // Founder Section
    "founder.tagline": "À Propos",
    "founder.title": "Rencontrez Notre Fondateur",
    "founder.name": "Dilu Giri",
    "founder.role": "Fondateur & Visionnaire",
    "founder.bio1": "Le parcours de Dilu Giri dans l'hôtellerie a commencé par une profonde curiosité pour les gens, les lieux et la façon dont le voyage peut façonner les perspectives. Formé en gestion hôtelière en France, en Autriche et en Thaïlande, il a passé des années à travailler étroitement avec des clients du monde entier, devenant finalement Directeur Général du Groupe d'une des plus anciennes chaînes hôtelières du Bhoutan.",
    "founder.bio2": "Vivre et travailler dans l'hôtellerie a donné à Dilu une place aux premières loges pour comprendre pourquoi les gens voyagent au Bhoutan. Il a observé que les clients ne cherchaient pas seulement le confort ou le tourisme, mais le calme, le sens et un sentiment de connexion. Au fil du temps, cette compréhension a façonné sa conviction que le Bhoutan offre quelque chose de bien plus personnel qu'un simple voyage. Il offre un espace de réflexion intérieure.",
    "founder.bio3": "De l'accueil des clients à la création de voyages, le travail de Dilu a toujours été ancré dans l'aide aux gens pour ralentir et vivre le Bhoutan d'une manière authentique et transformatrice. Cette même philosophie constitue désormais le fondement de sa vision du voyage, où chaque parcours est conçu pour refléter autant le paysage intérieur que l'extérieur.",
    "founder.training": "Formation",
    "founder.trainingValue": "France, Autriche & Thaïlande",
    "founder.venture": "Entreprise",
    "founder.ventureValue": "Laughing Lama Hotels",
    "founder.philosophy": "Philosophie",
    "founder.philosophyValue": "\"Chez Soi au Cœur\"",
    
    // Signature Journeys
    "journeys.tagline": "Expériences Curatées",
    "journeys.title": "Voyages Signature",
    "journeys.description": "Chaque itinéraire est une toile — adaptable aux rêves de vos clients, façonné avec notre expertise.",
    "journeys.viewItinerary": "Voir l'Itinéraire",
    "journeys.bespoke": "Vous cherchez quelque chose d'unique ? Nous sommes spécialisés dans les voyages sur mesure adaptés aux intérêts spécifiques de vos clients.",
    
    // Moments from Bhutan
    "moments.tagline": "Histoires & Traditions",
    "moments.title": "Instants du Bhoutan",
    "moments.description": "Survolez chaque image pour découvrir les histoires et la sagesse culturelle qui rendent le Bhoutan unique au monde.",
    "moments.didYouKnow": "Le saviez-vous ?",
    "moments.1.title": "Prières du Matin",
    "moments.1.story": "À l'aube, le son des conques résonne dans les salles des monastères tandis que les moines commencent leurs prières quotidiennes — une tradition inchangée depuis des siècles.",
    "moments.1.fact": "Le Bhoutan compte plus de 2 000 monastères et temples.",
    "moments.2.title": "Prières au Vent",
    "moments.2.story": "Des drapeaux de prière colorés flottent sur les cols de montagne, portant mantras et bénédictions dans le vent vers tous les êtres sensibles.",
    "moments.2.fact": "Chaque couleur représente un élément : bleu (ciel), blanc (air), rouge (feu), vert (eau), jaune (terre).",
    "moments.3.title": "Vallée de Vie",
    "moments.3.story": "Les agriculteurs cultivent les rizières selon des méthodes transmises de génération en génération, en harmonie avec les rythmes de la nature.",
    "moments.3.fact": "72% du Bhoutan reste sous couvert forestier par mandat constitutionnel.",
    "moments.4.title": "Guérison Ancestrale",
    "moments.4.story": "Les bains de pierres chaudes, connus sous le nom de 'dotsho', sont une pierre angulaire du bien-être bhoutanais depuis des siècles — des pierres de rivière chauffées et placées dans des cuves en bois.",
    "moments.4.fact": "La médecine traditionnelle (Sowa Rigpa) est fournie gratuitement par le gouvernement.",
    "moments.5.title": "Hauteurs Sacrées",
    "moments.5.story": "La légende dit que Guru Rinpoche a volé jusqu'à cette falaise sur le dos d'une tigresse pour méditer et apporter le bouddhisme au Bhoutan.",
    "moments.5.fact": "Le monastère se situe à 3 120 mètres d'altitude.",
    "moments.6.title": "Heure Dorée",
    "moments.6.story": "Lorsque le soleil se couche sur l'Himalaya, la dernière lumière peint les anciens dzongs en or — un rappel quotidien de la beauté intemporelle du Bhoutan.",
    "moments.6.fact": "Le Bhoutan mesure le succès par le Bonheur National Brut, pas le PIB.",
    
    // Partner CTA
    "partner.tagline": "Pour les Partenaires de Voyage",
    "partner.title1": "Créons",
    "partner.title2": "Ensemble",
    "partner.description": "Que vous soyez une agence de voyage boutique, un tour-opérateur mondial ou un planificateur de voyages d'affaires, Slowka Bhutan est votre partenaire de confiance sur le terrain. Nous gérons les détails - vous réalisez les rêves.",
    "partner.benefit1": "Tarifs B2B compétitifs et structures de commissions",
    "partner.benefit2": "Support d'itinéraire en marque blanche pour votre marque",
    "partner.benefit3": "Assistance sur le terrain 24h/24 pour vos clients",
    "partner.benefit4": "Matériel marketing et images haute résolution",
    "partner.benefit5": "Voyages FAM pour les partenaires qualifiés",
    "partner.getInTouch": "Contactez-nous",
    "partner.contactDescription": "Prêt à devenir partenaire ? Contactez-nous directement et commençons une conversation sur notre collaboration.",
    "partner.emailUs": "Écrivez-nous",
    
    // Footer
    "footer.tagline": "Créer des voyages transformateurs à travers le Royaume du Bonheur depuis 1998.",
    "footer.explore": "Explorer",
    "footer.whyBhutan": "Pourquoi le Bhoutan",
    "footer.ourJourneys": "Nos Voyages",
    "footer.moments": "Instants",
    "footer.contact": "Contact",
    "footer.copyright": "© 2024 Slowka Bhutan. Tous droits réservés. Agréé par le Conseil du Tourisme du Bhoutan.",
    "footer.privacy": "Politique de Confidentialité",
    "footer.terms": "Conditions d'Utilisation",
    "footer.blessing": "Tashi Delek",
    "footer.blessingMeaning": "— Que tous les signes favorables vous accompagnent",
  },
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>("en");

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations.en] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};
