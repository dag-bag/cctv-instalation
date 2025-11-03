// Comprehensive Delhi Locations Data
// This includes all districts and major localities

export interface Location {
  slug: string;
  name: string;
  district: string;
  description?: string;
  seoTitle?: string;
  seoDescription?: string;
  landmarks?: string[];
  localities: string[];
  coordinates?: {
    latitude: string;
    longitude: string;
  };
  population?: number;
  establishmentYear?: number;
  nearbyAreas?: string[];
  popularFor?: string[];
}

export const DELHI_DISTRICTS = [
  "central-delhi",
  "east-delhi",
  "new-delhi",
  "north-delhi",
  "north-east-delhi",
  "north-west-delhi",
  "shahdara",
  "south-delhi",
  "south-east-delhi",
  "south-west-delhi",
  "west-delhi",
];

export const LOCATIONS: Location[] = [
  // Central Delhi
  {
    slug: "central-delhi",
    name: "Central Delhi",
    district: "Central Delhi",
    description: "Professional CCTV installation services in Central Delhi. We provide high-quality security camera solutions for homes and businesses in Connaught Place, Karol Bagh, and surrounding areas.",
    seoTitle: "Best CCTV Installation in Central Delhi | Affordable Security Cameras",
    seoDescription: "Get expert CCTV installation services in Central Delhi. We offer HD security cameras, IP cameras, and complete surveillance solutions for homes and businesses in CP, Karol Bagh, and nearby areas.",
    coordinates: {
      latitude: "28.6519",
      longitude: "77.2315"
    },
    population: 582320,
    establishmentYear: 1911,
    nearbyAreas: ["New Delhi", "North Delhi", "South Delhi"],
    popularFor: ["Connaught Place", "Parliament House", "India Gate", "Rashtrapati Bhavan"],
    landmarks: [
      "Connaught Place",
      "India Gate",
      "Rashtrapati Bhavan",
      "Parliament House",
      "Jantar Mantar"
    ],
    localities: [
      "connaught-place",
      "karol-bagh",
      "paharganj",
      "daryaganj",
      "chandni-chowk",
      "civil-lines",
      "rajendra-place",
      "patel-nagar",
      "dev-nagar",
      "naraina",
    ],
  },
  
  // East Delhi
  {
    slug: "east-delhi",
    name: "East Delhi",
    district: "East Delhi",
    localities: [
      "preet-vihar",
      "laxmi-nagar",
      "mayur-vihar",
      "patparganj",
      "krishna-nagar",
      "gandhi-nagar",
      "shakarpur",
      "vivek-vihar",
      "nirman-vihar",
      "karkardooma",
      "anand-vihar",
      "ip-extension",
      "mandawali",
      "geeta-colony",
    ],
  },
  
  // New Delhi
  {
    slug: "new-delhi",
    name: "New Delhi",
    district: "New Delhi",
    localities: [
      "chanakyapuri",
      "diplomatic-enclave",
      "lodhi-road",
      "india-gate",
      "parliament-street",
      "sansad-marg",
      "janpath",
      "barakhamba-road",
      "pandara-road",
      "jor-bagh",
    ],
  },
  
  // North Delhi
  {
    slug: "north-delhi",
    name: "North Delhi",
    district: "North Delhi",
    localities: [
      "model-town",
      "azadpur",
      "rohini",
      "pitampura",
      "shalimar-bagh",
      "kohat-enclave",
      "shakti-nagar",
      "kamla-nagar",
      "saraswati-vihar",
      "ashok-vihar",
      "keshav-puram",
      "tri-nagar",
      "wazirpur",
      "narela",
      "burari",
    ],
  },
  
  // North East Delhi
  {
    slug: "north-east-delhi",
    name: "North East Delhi",
    district: "North East Delhi",
    localities: [
      "seelampur",
      "shahdara",
      "welcome",
      "jaffrabad",
      "maujpur",
      "yamuna-vihar",
      "nand-nagri",
      "bhajanpura",
      "gokulpuri",
      "karawal-nagar",
      "mustafabad",
    ],
  },
  
  // North West Delhi
  {
    slug: "north-west-delhi",
    name: "North West Delhi",
    district: "North West Delhi",
    localities: [
      "rohini-sector-1",
      "rohini-sector-3",
      "rohini-sector-7",
      "rohini-sector-9",
      "rohini-sector-11",
      "rohini-sector-15",
      "rohini-sector-18",
      "rohini-sector-22",
      "pitampura",
      "shalimar-bagh",
      "keshav-puram",
      "jahangirpuri",
      "adarsh-nagar",
      "badli",
      "narela",
      "bawana",
      "mundka",
      "nangloi",
    ],
  },
  
  // Shahdara
  {
    slug: "shahdara",
    name: "Shahdara",
    district: "Shahdara",
    localities: [
      "dilshad-garden",
      "jhilmil",
      "mansarovar-park",
      "shahdara",
      "vivek-vihar",
      "karkardooma",
      "east-azad-nagar",
      "jagatpur",
      "nand-nagri",
      "sonia-vihar",
    ],
  },
  
  // South Delhi
  {
    slug: "south-delhi",
    name: "South Delhi",
    district: "South Delhi",
    localities: [
      "greater-kailash",
      "defence-colony",
      "lajpat-nagar",
      "saket",
      "malviya-nagar",
      "hauz-khas",
      "green-park",
      "vasant-kunj",
      "vasant-vihar",
      "mehrauli",
      "chattarpur",
      "lado-sarai",
      "sainik-farms",
      "panchsheel-park",
      "south-extension",
      "jangpura",
      "kalkaji",
      "nehru-place",
      "greater-kailash-1",
      "greater-kailash-2",
    ],
  },
  
  // South East Delhi
  {
    slug: "south-east-delhi",
    name: "South East Delhi",
    district: "South East Delhi",
    localities: [
      "kalkaji",
      "nehru-place",
      "okhla",
      "govindpuri",
      "jasola",
      "sarita-vihar",
      "jaitpur",
      "badarpur",
      "tughlakabad",
      "meethapur",
      "sangam-vihar",
      "tigri",
      "madanpur-khadar",
    ],
  },
  
  // South West Delhi
  {
    slug: "south-west-delhi",
    name: "South West Delhi",
    district: "South West Delhi",
    localities: [
      "dwarka",
      "dwarka-sector-1",
      "dwarka-sector-3",
      "dwarka-sector-6",
      "dwarka-sector-7",
      "dwarka-sector-8",
      "dwarka-sector-10",
      "dwarka-sector-12",
      "dwarka-sector-18",
      "dwarka-sector-19",
      "dwarka-sector-21",
      "vasant-kunj",
      "rk-puram",
      "janakpuri",
      "uttam-nagar",
      "najafgarh",
      "kapashera",
      "mahipalpur",
      "bijwasan",
      "palam",
      "vikaspuri",
      "tilak-nagar",
    ],
  },
  
  // West Delhi
  {
    slug: "west-delhi",
    name: "West Delhi",
    district: "West Delhi",
    localities: [
      "rajouri-garden",
      "janakpuri",
      "vikaspuri",
      "tilak-nagar",
      "subhash-nagar",
      "tagore-garden",
      "kirti-nagar",
      "moti-nagar",
      "ramesh-nagar",
      "hari-nagar",
      "paschim-vihar",
      "punjabi-bagh",
      "madipur",
      "rajapuri",
      "maya-puri",
      "naraina-vihar",
    ],
  },
];

// Function to get all locations with localities (for generating all possible routes)
export const getAllLocationsWithLocalities = (): { slug: string; name: string; isLocality: boolean; parent?: string }[] => {
  const allLocations: { slug: string; name: string; isLocality: boolean; parent?: string }[] = [];
  
  LOCATIONS.forEach((location) => {
    // Add district
    allLocations.push({
      slug: location.slug,
      name: location.name,
      isLocality: false,
    });
    
    // Add all localities
    location.localities.forEach((locality) => {
      allLocations.push({
        slug: locality,
        name: locality.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' '),
        isLocality: true,
        parent: location.slug,
      });
    });
  });
  
  return allLocations;
};

// Function to get location by slug
export const getLocationBySlug = (slug: string): Location | undefined => {
  return LOCATIONS.find(loc => loc.slug === slug);
};

// Function to get locality details
export const getLocalityDetails = (localitySlug: string): { locality: string; district: Location } | undefined => {
  for (const location of LOCATIONS) {
    if (location.localities.includes(localitySlug)) {
      return {
        locality: localitySlug,
        district: location,
      };
    }
  }
  return undefined;
};
