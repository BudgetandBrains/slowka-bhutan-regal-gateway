import tigersNest from "@/assets/tigers-nest.jpg";
import wellnessBath from "@/assets/wellness-bath.jpg";
import prayerFlags from "@/assets/prayer-flags.jpg";
import riceTerraces from "@/assets/rice-terraces.jpg";
import monksMonastery from "@/assets/monks-monastery.jpg";

export interface ItineraryDay {
  day: number;
  title: string;
  description: string;
  stay?: string;
}

export interface Pricing {
  groupSize: string;
  price: number;
}

export interface Itinerary {
  id: string;
  title: string;
  duration: string;
  tagline: string;
  description: string;
  tags: string[];
  image: string;
  atAGlance: string[];
  pricing: Pricing[];
  sdfIncluded: number;
  singleSupplement?: number;
  included: string[];
  notIncluded: string[];
  days: ItineraryDay[];
  bookingDetails: string[];
}

export const itineraries: Itinerary[] = [
  {
    id: "sacred-bhutan",
    title: "Sacred Bhutan",
    duration: "4 Days, 3 Nights",
    tagline: "A short, sweet, and unforgettable taste of Bhutan.",
    description: "Perfect for travelers short on time, this compact journey delivers Bhutan's essential highlights—splitting your stay between energetic Thimphu and the tranquil Paro Valley, home of the legendary Tiger's Nest Monastery. In just four days, you'll sample sacred sites, mountain scenery, and Bhutan's famously warm hospitality.",
    tags: ["Thimphu", "Paro", "Tiger's Nest", "Dzongs", "Short Trip"],
    image: tigersNest,
    atAGlance: [
      "Day 1: Arrive in Paro ➝ drive to Thimphu",
      "Day 2: Thimphu sightseeing ➝ return to Paro",
      "Day 3: Hike Tiger's Nest (or choose a scenic alternative)",
      "Day 4: Depart from Paro"
    ],
    pricing: [
      { groupSize: "3–4 travelers", price: 732 },
      { groupSize: "2 travelers", price: 832 },
      { groupSize: "Single traveler", price: 1110 }
    ],
    sdfIncluded: 300,
    included: [
      "Comfortable hotel stays",
      "All meals",
      "Private vehicle, driver, and sightseeing",
      "English-speaking guide",
      "Entry fees & Bhutan visa processing",
      "Bottled water in-vehicle"
    ],
    notIncluded: [
      "International flights",
      "Travel insurance",
      "Personal expenses (souvenirs, drinks, laundry, tips)"
    ],
    days: [
      {
        day: 1,
        title: "Welcome to Bhutan",
        description: "Arrive in Paro and meet your guide before a scenic one-hour transfer to Thimphu. Depending on arrival time, visit highlights like Tashichho Dzong, the giant Buddha statue, or browse the craft market.",
        stay: "The Seva Hotel (modern Bhutanese design in the city center)"
      },
      {
        day: 2,
        title: "Thimphu ➝ Paro",
        description: "Join locals for a peaceful walk around the Memorial Chorten, see traditional arts schools, visit the takin preserve, then return to Paro. Explore the National Museum, Paro Dzong, and possibly Kyichu Lhakhang, one of Bhutan's oldest temples.",
        stay: "Tashi Namgay Resort (gardens, pool, quiet Bhutanese charm)"
      },
      {
        day: 3,
        title: "Tiger's Nest or a Scenic Pass",
        description: "Hike to Tiger's Nest, an unforgettable cliff-side monastery—challenging but rewarding, taken at your own pace. Prefer something gentler? Choose a scenic drive to Chele La Pass, visit a quiet nunnery, and explore cliff-side temples.",
        stay: "Tashi Namgay Resort"
      },
      {
        day: 4,
        title: "Departure",
        description: "Transfer to Paro Airport. If you fly later, enjoy a relaxed walk or last-minute shopping in town."
      }
    ],
    bookingDetails: [
      "Deposit: $200 per person secures your spot (credit card/PayPal, no fee)",
      "Balance: Due 70 days before travel (wire/check no fee; credit card +4%)",
      "Visas: Simply send your passport copy and photo—we handle everything and email your approved visa."
    ]
  },
  {
    id: "bhutan-in-5-days",
    title: "Bhutan in 5 Days: A Journey Within",
    duration: "5 Days, 4 Nights",
    tagline: "Five days of culture, mountains, monasteries, and mindful discovery.",
    description: "This scenic introduction to Bhutan blends the energy of Thimphu, the calm of the Paro Valley, and the thrill of hiking to Tiger's Nest. Explore ancient temples, dramatic fortresses, and timeless traditions—set against sweeping Himalayan landscapes. A perfect short journey for travelers seeking depth without rushing.",
    tags: ["Thimphu", "Paro", "Tiger's Nest", "Temples", "Culture"],
    image: wellnessBath,
    atAGlance: [
      "Day 1: Arrive in Paro ➝ drive to Thimphu",
      "Day 2: Full day exploring Thimphu",
      "Day 3: Scenic drive to Paro + temples & fortress visits",
      "Day 4: Hike to Tiger's Nest",
      "Day 5: Departure from Paro"
    ],
    pricing: [
      { groupSize: "3–5 travelers", price: 807 },
      { groupSize: "2 travelers", price: 885 },
      { groupSize: "Single traveler", price: 1185 }
    ],
    sdfIncluded: 400,
    included: [
      "Quality hotel stays",
      "All meals",
      "Private vehicle & driver",
      "Sightseeing + entry fees",
      "English-speaking guide",
      "Bhutan visa processing & fees",
      "Bottled water in-vehicle"
    ],
    notIncluded: [
      "International flights",
      "Travel insurance",
      "Personal expenses (souvenirs, drinks, laundry, tips)"
    ],
    days: [
      {
        day: 1,
        title: "Welcome to Bhutan",
        description: "Meet your guide on arrival and enjoy a scenic one-hour drive to Thimphu, passing farms and terraced valleys. Depending on arrival time, enjoy an introductory city tour.",
        stay: "City Hotel or Bhutan Peaceful Residency (forest-view comfort)"
      },
      {
        day: 2,
        title: "Explore Thimphu",
        description: "Customize your day: visit Tashichho Dzong, the Buddha Dordenma, traditional arts schools, the bustling market, or the takin sanctuary.",
        stay: "Same hotel in Thimphu"
      },
      {
        day: 3,
        title: "Into the Paro Valley",
        description: "A relaxed drive brings you to peaceful Paro—all mountains, fields, and heritage. Visit Kyichu Lhakhang, the ruins of Drugyal Dzong, and enjoy distant views of Tiger's Nest. Continue to the National Museum and Paro Dzong.",
        stay: "Tashi Namgay Resort (riverside, traditional-modern blend)"
      },
      {
        day: 4,
        title: "Hike to Tiger's Nest",
        description: "Your signature experience: ascend through pine forests and prayer flags to reach the cliff-side monastery of Taktsang. A rewarding, spiritual highlight of any Bhutan journey. Return for a restful evening.",
        stay: "Tashi Namgay Resort"
      },
      {
        day: 5,
        title: "Departure",
        description: "Transfer to Paro Airport. If you leave later, enjoy a village walk or last-minute sightseeing."
      }
    ],
    bookingDetails: [
      "Deposit: $200 per person (credit card/PayPal, no fee). Non-refundable but usually transferable if you cancel ≥90 days before travel.",
      "Balance: Due 70 days prior (wire/check no fee; credit card +4%).",
      "Visas: We handle everything—just send your passport copy + photo.",
      "It's your tour—flexible, private, and designed around your pace and interests."
    ]
  },
  {
    id: "mystical-bhutan",
    title: "Mystical Bhutan: A 6-Day Escape",
    duration: "6 Days, 5 Nights",
    tagline: "Six days of mountains, monasteries, living culture, and mindful discovery.",
    description: "This immersive journey takes you through Paro, Punakha, and Thimphu—Bhutan's western valleys rich in heritage and Himalayan beauty. Explore fortresses, hilltop temples, traditional villages, and the legendary Tiger's Nest, all while experiencing Bhutan's signature warmth and hospitality.",
    tags: ["Paro", "Punakha", "Thimphu", "Dochula Pass", "Tiger's Nest", "Dzongs"],
    image: prayerFlags,
    atAGlance: [
      "Day 1: Arrive in Paro & explore",
      "Day 2: Drive to Punakha via Dochula Pass + hilltop chorten & Punakha Dzong",
      "Day 3: Village walk + 'Fertility Temple' ➝ drive to Thimphu",
      "Day 4: Full day exploring Thimphu",
      "Day 5: Return to Paro for the Tiger's Nest hike",
      "Day 6: Departure"
    ],
    pricing: [
      { groupSize: "3–5 travelers", price: 1145 },
      { groupSize: "2 travelers", price: 1260 },
      { groupSize: "Single traveler", price: 1652 }
    ],
    sdfIncluded: 500,
    singleSupplement: 120,
    included: [
      "Comfortable hotel stays",
      "All meals",
      "Private vehicle & driver",
      "Sightseeing + entry fees",
      "English-speaking guide",
      "Bhutan visa processing & fees",
      "Bottled water in-vehicle"
    ],
    notIncluded: [
      "Flights",
      "Travel insurance",
      "Personal expenses (souvenirs, drinks, laundry, tips)"
    ],
    days: [
      {
        day: 1,
        title: "Welcome to Paro",
        description: "Meet your guide and dive straight into Paro's highlights: the National Museum, Rinpung Dzong, a traditional bridge, and the town market before settling into your riverside stay.",
        stay: "Tashi Namgay Resort"
      },
      {
        day: 2,
        title: "Over the Dochula Pass to Punakha",
        description: "A scenic climb to Dochula Pass (3,050m) offers sweeping Himalayan views before descending into the lush Punakha Valley. Enjoy a short hike to Khamsum Yulley Chorten, followed by the stunning Punakha Dzong at the rivers' confluence.",
        stay: "Zhingkham Resort (valley-view cottages)"
      },
      {
        day: 3,
        title: "Villages, Blessings & Thimphu",
        description: "Walk through Rinchengang Village, then visit Chimi Lhakhang, the joyful 'Temple of Fertility.' Continue to Thimphu and visit Tashichho Dzong, seat of government and monastic life.",
        stay: "The Capital Hotel (boutique comfort)"
      },
      {
        day: 4,
        title: "A Day in the Capital",
        description: "Customize your exploration—options include the Buddha Dordenma, traditional arts school, takin sanctuary, textile museum, or weekend market. Thimphu offers a rare blend of heritage and contemporary life.",
        stay: "The Seva Hotel (new, sustainable, central)"
      },
      {
        day: 5,
        title: "The Tiger's Nest",
        description: "Drive back to Paro and ascend through forests and prayer flags to Taktsang (Tiger's Nest)—dramatically perched on a cliff and unforgettable to reach. Return for a relaxing final evening.",
        stay: "Tashi Namgay Resort"
      },
      {
        day: 6,
        title: "Farewell Bhutan",
        description: "Transfer to Paro Airport. If you fly later, enjoy a relaxed stroll or last-minute sightseeing."
      }
    ],
    bookingDetails: [
      "Deposit: $200 per person (credit card/PayPal, no fee). Non-refundable but usually transferable ≥90 days before travel.",
      "Balance: Due 70 days prior (wire/check no fee; credit cards +4%).",
      "Visas: We handle everything—just send your passport copy + photo.",
      "This private journey is flexible—adjust timing, activities, and pace anytime. It's your escape into Bhutan's magic."
    ]
  },
  {
    id: "dragon-kingdom-week",
    title: "The Dragon Kingdom in a Week",
    duration: "7 Days, 6 Nights",
    tagline: "A week inside Bhutan feels like stepping into another world—where mountains touch the sky, monasteries hum with prayer, and the pace of life gently slows down.",
    description: "This journey gives you a full taste of Bhutan's capital, valleys, temples, fortresses, and legendary hikes without ever feeling rushed. This is a perfectly-paced introduction to Bhutan's three signature valleys—Thimphu, Punakha & Paro. Expect dramatic Himalayan passes, riverside fortresses, sacred temples, rural villages, and the unforgettable Tiger's Nest hike.",
    tags: ["Thimphu", "Punakha", "Paro", "Happiness", "Passes", "Monasteries", "Tiger's Nest", "Dzongs", "Culture", "Valley Views"],
    image: riceTerraces,
    atAGlance: [
      "Day 1: Welcome to Bhutan & Drive to Thimphu",
      "Day 2: Discover Thimphu, Your Way",
      "Day 3: Dochula Pass Panoramas & Into Punakha",
      "Day 4: Temples & Storytelling • Return to Paro",
      "Day 5: The Heritage Trails of Paro",
      "Day 6: The Tiger's Nest Experience",
      "Day 7: A Bhutanese Goodbye"
    ],
    pricing: [
      { groupSize: "4–5 travelers", price: 1350 },
      { groupSize: "3 travelers", price: 1388 },
      { groupSize: "2 travelers", price: 1496 },
      { groupSize: "Single traveler", price: 1860 }
    ],
    sdfIncluded: 600,
    singleSupplement: 140,
    included: [
      "Stylish, comfortable hotels",
      "All meals (breakfast, lunch, dinner)",
      "Private vehicle & personal driver",
      "English-speaking guide for the entire trip",
      "All sightseeing entries",
      "Bhutan visa fees & processing",
      "Bottled water during touring",
      "SDF fee"
    ],
    notIncluded: [
      "International flights",
      "Travel insurance",
      "Alcohol, laundry, shopping, tips, personal expenses"
    ],
    days: [
      {
        day: 1,
        title: "Welcome to Bhutan & Drive to Thimphu",
        description: "Arrive in Paro and meet your guide at the airport. Your first Bhutan moment begins with a scenic one-hour drive to Thimphu, the only capital in the world without traffic lights. Depending on your energy, explore Tashichho Dzong or wander through boutique shops and cafés before settling in.",
        stay: "Capital Hotel or The Seva Hotel (handpicked 4-star comfort)"
      },
      {
        day: 2,
        title: "Discover Thimphu, Your Way",
        description: "This is a choose-your-own-wonder day. Visit the Buddha Dordenma statue overlooking the entire valley, step into the School of Traditional Arts to watch students practice ancient crafts, and meet Bhutan's national animal—the quirky takin. In the evening, explore local life, sip a coffee, or browse handicrafts.",
        stay: "Capital Hotel or The Seva Hotel"
      },
      {
        day: 3,
        title: "Dochula Pass Panoramas & Into Punakha",
        description: "Drive across the legendary Dochula Pass (3,050m), framed by 108 white stupas and Himalayan peaks when skies are clear. Descend into lush Punakha Valley and visit the magnificent Punakha Dzong set at the confluence of two rivers. End with Bhutan's longest suspension bridge—fun, breezy, and wildly photogenic.",
        stay: "Zhingkham Resort (private cottages with sweeping valley views)"
      },
      {
        day: 4,
        title: "Temples & Storytelling • Return to Paro",
        description: "Walk through a traditional Punakha village and continue to Chimi Lhakhang—the 'Temple of Fertility,' wrapped in folklore of Bhutan's iconic Divine Madman. After the visit, wind your way back across Dochula to Paro Valley, where pine trees, farms, and ancient watchtowers set the scene.",
        stay: "Tashi Namgay Resort (riverside serenity + traditional Bhutanese interiors)"
      },
      {
        day: 5,
        title: "The Heritage Trails of Paro",
        description: "Today is about history and landscape: visit sacred Kyichu Lhakhang—one of the oldest temples in Bhutan, explore the National Museum inside an ancient watchtower, and drop into a traditional farmhouse to see rural life up close. Wander through Paro town for crafts, antiques, or steaming momos.",
        stay: "Tashi Namgay Resort"
      },
      {
        day: 6,
        title: "The Tiger's Nest Experience",
        description: "The moment you've been waiting for. Hike through pine forests to reach the cliff-hugging Tiger's Nest Monastery—Bhutan's most iconic site. It's a moderate climb, an emotional achievement, and a memory that stays forever. Prefer to skip the ascent? Your guide will curate alternative visits in the valley.",
        stay: "Tashi Namgay Resort"
      },
      {
        day: 7,
        title: "A Bhutanese Goodbye",
        description: "Enjoy breakfast and mountain air before your transfer to Paro Airport. If your flight is later, your guide can fill the morning with additional sights or shopping. Depart with a lighter mind and a very full heart."
      }
    ],
    bookingDetails: [
      "Deposit: 200 USD per person (credit card or PayPal, no fees). Non-refundable but transferable if cancelled 90+ days before departure.",
      "Balance: Due 70 days before the trip. Can be paid by wire/cheque (no fee) or credit card (+4%).",
      "Visa Made Simple: Just send a passport copy + a digital photo. Your approved visa and travel documents arrive by email—easy and stress-free.",
      "Your Tour, Your Pace: This is a private trip, built for flexibility. Want to start late, swap a stop, or add an experience? Your guide will tailor the journey as you go."
    ]
  },
  {
    id: "gateway-to-happiness",
    title: "Gateway to Happiness: 8 Days in Bhutan",
    duration: "8 Days, 7 Nights",
    tagline: "Your perfect first journey into the Land of the Thunder Dragon.",
    description: "Discover Bhutan at an easy, enjoyable pace—designed for travelers who want rich cultural immersion without long days on the road. This 8-day introduction focuses on the highlights of Western Bhutan, with a stunning glimpse into its alpine heartlands. Begin in Thimphu, cross dramatic passes, descend into the protected Phobjikha Valley—winter home of black-necked cranes—explore Punakha, and culminate with the iconic Tiger's Nest hike.",
    tags: ["Thimphu", "Punakha", "Paro", "Phobjikha Valley", "Gangtey", "Black-Necked Cranes", "Tiger's Nest", "Dochula Pass"],
    image: monksMonastery,
    atAGlance: [
      "Day 1: Paro ➝ Thimphu: Scenic drive, dzongs, stroll the capital",
      "Day 2: Thimphu: Museums, Buddha Dordenma, archery, markets",
      "Day 3: Dochula Pass ➝ Gangtey: Himalayan panoramas, Gangtey Monastery, nature trail",
      "Day 4: Phobjikha ➝ Punakha/Wangdue: Rural walks, valley descent, local markets",
      "Day 5: Punakha Valley: Hike to Khamsum Chorten, Punakha Dzong, suspension bridge",
      "Day 6: Fertility Temple ➝ Paro: Chimi Lhakhang, National Museum, ancient temples",
      "Day 7: Paro: Hike to Tiger's Nest",
      "Day 8: Departure: Transfer to Paro Airport"
    ],
    pricing: [
      { groupSize: "3–5 travelers", price: 1563 },
      { groupSize: "2 travelers", price: 1716 },
      { groupSize: "Single traveler", price: 2260 }
    ],
    sdfIncluded: 700,
    included: [
      "Listed hotel accommodations",
      "All meals (restaurants & private homes)",
      "Private vehicle & all land transfers",
      "Sightseeing with entry fees",
      "English-speaking guide",
      "Bhutan visa & processing",
      "Bottled water in vehicle",
      "Government Sustainable Development Fee (SDF)"
    ],
    notIncluded: [
      "International flights",
      "Travel insurance",
      "Personal expenses (souvenirs, snacks, alcohol, laundry, tips)"
    ],
    days: [
      {
        day: 1,
        title: "Paro ➝ Thimphu",
        description: "Scenic drive to the capital, visit dzongs and stroll through Thimphu's charming streets.",
        stay: "Hotel in Thimphu"
      },
      {
        day: 2,
        title: "Explore Thimphu",
        description: "Museums, Buddha Dordenma statue, traditional archery, and vibrant markets.",
        stay: "Hotel in Thimphu"
      },
      {
        day: 3,
        title: "Dochula Pass ➝ Gangtey",
        description: "Cross the spectacular Dochula Pass with Himalayan panoramas, visit Gangtey Monastery, and walk the scenic nature trail.",
        stay: "Hotel in Gangtey/Phobjikha"
      },
      {
        day: 4,
        title: "Phobjikha ➝ Punakha/Wangdue",
        description: "Rural walks through the glacial valley, descent into warmer Punakha, explore local markets.",
        stay: "Hotel in Punakha"
      },
      {
        day: 5,
        title: "Punakha Valley",
        description: "Hike to Khamsum Yulley Chorten, explore the magnificent Punakha Dzong, cross the iconic suspension bridge.",
        stay: "Hotel in Punakha"
      },
      {
        day: 6,
        title: "Fertility Temple ➝ Paro",
        description: "Visit Chimi Lhakhang (the 'Fertility Temple'), drive to Paro, explore the National Museum and ancient temples.",
        stay: "Hotel in Paro"
      },
      {
        day: 7,
        title: "Hike to Tiger's Nest",
        description: "The culmination of your journey—hike through pine forests to the cliff-side Tiger's Nest Monastery at 3,120m.",
        stay: "Hotel in Paro"
      },
      {
        day: 8,
        title: "Departure",
        description: "Transfer to Paro Airport. A gentle but unforgettable introduction to a kingdom unlike anywhere on earth."
      }
    ],
    bookingDetails: [
      "Rates may change until booking is confirmed.",
      "Perfect for curious travelers seeking sacred culture, epic scenery, warm hospitality, and flexibility.",
      "Private guiding allows you to tailor each day to your pace and interests."
    ]
  }
];

export const getItineraryById = (id: string): Itinerary | undefined => {
  return itineraries.find((itinerary) => itinerary.id === id);
};
