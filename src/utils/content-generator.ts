// SEO-Optimized Content Generator
import { BUSINESS_CONFIG } from "@/config/business";
import { Service } from "@/data/services";

export const generatePageTitle = (service: string, location: string): string => {
  return `${service} in ${location} | ${BUSINESS_CONFIG.name} | Call ${BUSINESS_CONFIG.phone}`;
};

export const generateMetaDescription = (service: string, location: string): string => {
  return `Professional ${service.toLowerCase()} in ${location}, Delhi. ✓ Expert Technicians ✓ 24/7 Support ✓ Affordable Rates ✓ Free Consultation. Call ${BUSINESS_CONFIG.phone} for immediate service.`;
};

export const generateHeadline = (service: string, location: string): string => {
  return `Expert ${service} in ${location}`;
};

export const generateSubheadline = (service: string): string => {
  return `Professional ${service.toLowerCase()} with certified technicians and quality guarantee`;
};

export const generateIntroContent = (service: string, location: string): string => {
  return `Looking for reliable ${service.toLowerCase()} in ${location}? ${BUSINESS_CONFIG.name} provides top-notch security solutions with professional installation, maintenance, and support services. Our expert technicians ensure your property is protected with the latest surveillance technology.`;
};

export const generateWhyChooseUs = (location: string): string[] => {
  return [
    `Trusted service provider in ${location} with 500+ satisfied customers`,
    "Certified and experienced technicians with 10+ years of expertise",
    "Quality products from top brands like Hikvision, Dahua, CP Plus",
    "Competitive pricing with transparent quotes - no hidden charges",
    "Same-day service available for urgent requirements",
    "1-year comprehensive warranty on all installations",
    "Free consultation and site survey",
    "24/7 customer support and emergency services",
    "Professional cable management and clean installation",
    "Post-installation training and support",
  ];
};

export const generateServiceBenefits = (service: Service): string[] => {
  return [
    `Professional ${service.name.toLowerCase()} by certified experts`,
    "High-quality equipment from authorized dealers",
    "Customized solutions based on your requirements",
    "Proper planning and execution for optimal coverage",
    "Mobile app integration for remote monitoring",
    "Regular maintenance and support packages available",
    "Scalable systems that grow with your needs",
    "Energy-efficient and eco-friendly solutions",
  ];
};

export const generateLocationContent = (location: string): string => {
  return `We proudly serve ${location} and surrounding areas in Delhi. Our local presence ensures quick response times and personalized service. Whether you need installation for your home, office, shop, or industrial facility, our team is ready to help.`;
};

export const generateCTAText = (): { primary: string; secondary: string } => {
  return {
    primary: "Get Free Quote Now",
    secondary: "Call for Immediate Service",
  };
};

export const generateFAQs = (
  service: string,
  location: string
): { question: string; answer: string }[] => {
  return [
    {
      question: `How much does ${service.toLowerCase()} cost in ${location}?`,
      answer: `The cost of ${service.toLowerCase()} in ${location} varies based on the number of cameras, type of equipment, and installation complexity. Basic packages start from ₹5,000, while complete solutions can range up to ₹1,00,000+. Contact us for a free quote tailored to your requirements.`,
    },
    {
      question: `How long does installation take in ${location}?`,
      answer: `For residential properties in ${location}, installation typically takes 4-8 hours depending on the number of cameras. Commercial installations may take 1-3 days. We ensure minimal disruption to your daily activities.`,
    },
    {
      question: `Do you provide warranty on ${service.toLowerCase()}?`,
      answer: `Yes, we provide a comprehensive 1-year warranty on all installations, covering both equipment and labor. Extended warranty options are also available.`,
    },
    {
      question: `Can I view cameras on my mobile phone?`,
      answer: `Absolutely! All our installations include mobile app setup, allowing you to monitor your cameras from anywhere in the world through your smartphone or tablet.`,
    },
    {
      question: `Do you service ${location} on weekends?`,
      answer: `Yes, we provide services in ${location} 7 days a week, including weekends and holidays. Emergency services are available 24/7.`,
    },
    {
      question: `What brands do you work with?`,
      answer: `We work with all major brands including Hikvision, Dahua, CP Plus, Honeywell, Samsung, and more. We recommend the best brand based on your budget and requirements.`,
    },
    {
      question: `Is ${service.toLowerCase()} available for both homes and businesses?`,
      answer: `Yes, we provide ${service.toLowerCase()} for residential homes, commercial offices, retail shops, warehouses, and industrial facilities in ${location}.`,
    },
    {
      question: `Do you provide AMC services in ${location}?`,
      answer: `Yes, we offer Annual Maintenance Contract (AMC) services with regular checkups, cleaning, and priority support for all our customers in ${location}.`,
    },
  ];
};

export const generateTestimonials = (location: string, serviceName = "CCTV Installation") => {
  return [
    {
      name: "Rajesh Kumar",
      location,
      rating: 5,
      text: `Excellent experience! The ${serviceName.toLowerCase()} team was professional, punctual, and the installation was done perfectly.`,
      service: serviceName,
    },
    {
      name: "Priya Sharma",
      location,
      rating: 5,
      text: `Quick response and great support for our ${serviceName.toLowerCase()} project in ${location}. The mobile app setup is very convenient.`,
      service: serviceName,
    },
    {
      name: "Amit Verma",
      location,
      rating: 5,
      text: `Best ${serviceName.toLowerCase()} service in the area! Affordable pricing and no compromise on quality.`,
      service: serviceName,
    },
  ];
};

export const generateServiceAreas = (mainLocation: string): string[] => {
  return [
    mainLocation,
    "Nearby areas and localities",
    "All Delhi NCR regions",
    "Residential complexes",
    "Commercial buildings",
    "Retail stores and malls",
    "Offices and corporate parks",
    "Educational institutions",
    "Healthcare facilities",
    "Industrial areas",
  ];
};

export const generateKeywords = (service: string, location: string): string => {
  return [
    `${service} ${location}`,
    `${service} in ${location}`,
    `best ${service} ${location}`,
    `affordable ${service} ${location}`,
    `${service} near me`,
    `CCTV ${location}`,
    `security camera ${location}`,
    `surveillance system ${location}`,
    location,
    `${location} CCTV`,
  ].join(", ");
};

// -----------------------------
// Dynamic service page helpers
// -----------------------------

const hashString = (value: string): number => {
  let hash = 0;
  for (let i = 0; i < value.length; i++) {
    hash = (hash << 5) - hash + value.charCodeAt(i);
    hash |= 0;
  }
  return Math.abs(hash);
};

const pickVariant = <T>(seed: string, options: T[]): T => {
  if (options.length === 0) {
    throw new Error("Options array cannot be empty");
  }
  const index = hashString(seed) % options.length;
  return options[index];
};

const pickMultiple = <T>(seed: string, options: T[], count: number): T[] => {
  if (!options.length || count <= 0) {
    return [];
  }
  const result: T[] = [];
  const used = new Set<number>();
  const iterations = Math.min(count, options.length);
  for (let i = 0; i < iterations; i++) {
    let index = hashString(`${seed}-${i}`) % options.length;
    while (used.has(index)) {
      index = (index + 1) % options.length;
    }
    used.add(index);
    result.push(options[index]);
  }
  return result;
};

type ServicePageContext = {
  serviceName: string;
  serviceSlug: string;
  serviceCategory: string;
  serviceFeatures?: string[];
  cityName: string;
  citySlug: string;
  localityName: string;
  localitySlug: string;
  districtName?: string;
  landmarks?: string[];
  nearbyLocalities?: string[];
};

type ServicePageContent = {
  heroSubtitle: string;
  heroStats: { label: string; value: string }[];
  introParagraph: string;
  locationSnippet: string;
  serviceHighlights: string[];
  whyChoose: string[];
  faqs: { question: string; answer: string }[];
  cta: {
    body: string;
    phoneLine: string;
  };
  keywordPhrase: string;
};

const heroSubtitleTemplates = [
  (ctx: ServicePageContext) =>
    `Turnkey ${ctx.serviceName.toLowerCase()} for apartments, showrooms, and warehouses in ${ctx.localityName}.`,
  (ctx: ServicePageContext) =>
    `${ctx.localityName} now gets enterprise-grade ${ctx.serviceName.toLowerCase()} with local engineers on call.`,
  (ctx: ServicePageContext) =>
    `Protect every lane of ${ctx.localityName}, ${ctx.cityName} with certified ${ctx.serviceName.toLowerCase()} specialists.`,
  (ctx: ServicePageContext) =>
    `Trusted by RWA societies near ${ctx.landmarks?.[0] || ctx.localityName} for proactive security deployments.`,
];

const introTemplates = [
  (ctx: ServicePageContext, descriptor: string) =>
    `${BUSINESS_CONFIG.name} delivers modern ${ctx.serviceName.toLowerCase()} solutions across ${ctx.localityName}, ${ctx.cityName}. From gated societies to high-street stores ${descriptor}, our engineers map every blind spot before installing.`,
  (ctx: ServicePageContext, descriptor: string) =>
    `Get tailor-made ${ctx.serviceName.toLowerCase()} for homes and businesses in ${ctx.localityName}. We combine site surveys, optimal camera placement, and remote monitoring so you stay in control ${descriptor}.`,
  (ctx: ServicePageContext, descriptor: string) =>
    `We design ${ctx.serviceName.toLowerCase()} stacks for villas, clinics, cafes, and offices in ${ctx.localityName}. Expect branded hardware, neat wiring, and instant alerting ${descriptor}.`,
];

const locationSnippetTemplates = [
  (ctx: ServicePageContext, descriptor: string) =>
    `Our crew is stationed within ${descriptor}, allowing us to reach ${ctx.localityName} within hours for surveys, installation, or urgent repairs.`,
  (ctx: ServicePageContext, descriptor: string) =>
    `Coverage spans ${ctx.localityName}, ${ctx.districtName || ctx.cityName} along with neighbouring pockets like ${descriptor}, ensuring consistent support.`,
  (ctx: ServicePageContext, descriptor: string) =>
    `We understand the mix of residential blocks and commercial corridors in ${ctx.localityName}, enabling us to secure entry gates, lifts, basements, and façade signage with the right mix of cameras.`,
];

const serviceHighlightTemplates = [
  (ctx: ServicePageContext, descriptor: string) =>
    `Intelligent camera placement covering entry lanes towards ${descriptor}.`,
  (ctx: ServicePageContext) =>
    `Neat conduit routing that keeps façade aesthetics intact for showrooms in ${ctx.localityName}.`,
  (ctx: ServicePageContext) =>
    `Cloud and mobile monitoring so owners manage multiple sites across ${ctx.cityName}.`,
  (ctx: ServicePageContext) =>
    `Integration with alarm systems for premium plots and farmhouses around ${ctx.localityName}.`,
  (ctx: ServicePageContext) =>
    `Annual maintenance programs that include quarterly cleaning, backups, and health checks.`,
];

const whyChooseTemplates = [
  (ctx: ServicePageContext) =>
    `Dedicated field engineers stationed near ${ctx.localityName} for same-day surveys.`,
  (ctx: ServicePageContext) =>
    `We stock Hikvision, Dahua, CP Plus, and Uniview hardware for rapid replacements.`,
  (ctx: ServicePageContext) =>
    `Layouts optimised for both narrow gali entrances and wide parking lots in ${ctx.localityName}.`,
  (ctx: ServicePageContext) =>
    `Central monitoring that lets you view feeds from ${ctx.localityName} and the wider ${ctx.cityName} network.`,
  (ctx: ServicePageContext) =>
    `Clear documentation, handover training, and multilingual support for facility teams.`,
  (ctx: ServicePageContext) =>
    `Flexible AMC plans so RWAs and shop owners in ${ctx.localityName} never worry about downtime.`,
  (ctx: ServicePageContext) =>
    `Proactive health alerts—know if a camera in ${ctx.localityName} goes offline before an incident occurs.`,
];

const faqTemplates = [
  (ctx: ServicePageContext) => ({
    question: `How fast can you install ${ctx.serviceName.toLowerCase()} in ${ctx.localityName}?`,
    answer: `Site surveys typically happen within 24 hours. Standard ${ctx.serviceName.toLowerCase()} installs in ${ctx.localityName} finish in a single day, while large commercial complexes might take 48–72 hours.`,
  }),
  (ctx: ServicePageContext) => ({
    question: `Do you provide night-vision or PTZ cameras for ${ctx.localityName}?`,
    answer: `Yes. We recommend IR-enabled domes for basement/parking areas and PTZ units to monitor long stretches like ${ctx.landmarks?.[0] || "main roads"} in ${ctx.localityName}.`,
  }),
  (ctx: ServicePageContext) => ({
    question: `Can I club ${ctx.serviceName.toLowerCase()} with access control?`,
    answer: `Absolutely. We integrate ${ctx.serviceName.toLowerCase()} with biometric or RFID access systems for RWAs and offices in ${ctx.cityName}, offering a unified security dashboard.`,
  }),
  (ctx: ServicePageContext) => ({
    question: `What maintenance support do you offer after installation?`,
    answer: `Our AMC covers quarterly cleaning, DVR/NVR backups, health checks, and priority support. Customers in ${ctx.localityName} can raise tickets via phone, WhatsApp, or portal.`,
  }),
  (ctx: ServicePageContext) => ({
    question: `Which recording options do you suggest for ${ctx.localityName}?`,
    answer: `Depending on storage needs, we configure DVR/NVR setups with local disks plus cloud sync for tamper-proof evidence. Outlets along ${ctx.landmarks?.[0] || ctx.localityName} usually opt for 15–30 day archives.`,
  }),
  (ctx: ServicePageContext) => ({
    question: `Is remote viewing enabled for owners travelling outside ${ctx.cityName}?`,
    answer: `Yes, every ${ctx.serviceName.toLowerCase()} deployment includes secure mobile app access with role-based logins. You can view feeds, playback recordings, and receive alerts from anywhere.`,
  }),
];

const ctaTemplates = [
  (ctx: ServicePageContext) => ({
    body: `Ready to secure your property in ${ctx.localityName}? Book a free ${ctx.serviceName.toLowerCase()} consultation and get a same-day proposal.`,
    phoneLine: `Need quick help in ${ctx.localityName}? Call/WhatsApp`,
  }),
  (ctx: ServicePageContext) => ({
    body: `Apartments, boutiques, clinics, and warehouses in ${ctx.localityName} trust us for ${ctx.serviceName.toLowerCase()}. Let's plan your deployment.`,
    phoneLine: `Speak directly with our ${ctx.cityName} command centre:`,
  }),
  (ctx: ServicePageContext) => ({
    body: `Get transparent pricing, brand comparisons, and deployment timelines for ${ctx.serviceName.toLowerCase()} in ${ctx.localityName}.`,
    phoneLine: `Our engineers are on standby for ${ctx.localityName}:`,
  }),
];

const heroStatSets = [
  [
    { label: "Avg. Install Time", value: "24 hrs" },
    { label: "Local Engineers", value: "3+" },
    { label: "Warranty", value: "12 Months" },
  ],
  [
    { label: "Sites Secured", value: "750+" },
    { label: "Response", value: "<90 mins" },
    { label: "Support", value: "24/7" },
  ],
  [
    { label: "Camera Brands", value: "10+" },
    { label: "AMC Clients", value: "150+" },
    { label: "Avg. Rating", value: "4.8/5" },
  ],
];

const formatDescriptor = (values?: string[], fallback?: string) => {
  if (values && values.length) {
    const slice = values.slice(0, 2).map((val) =>
      val
        .split("-")
        .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
        .join(" ")
    );
    return slice.join(" & ");
  }
  return fallback || "the neighbourhood";
};

export const generateServicePageContent = (
  ctx: ServicePageContext
): ServicePageContent => {
  const seed = `${ctx.serviceSlug}-${ctx.localitySlug}`;
  const descriptor =
    formatDescriptor(ctx.landmarks, ctx.localityName) || ctx.localityName;
  const nearbyDescriptor = formatDescriptor(
    ctx.nearbyLocalities,
    ctx.cityName
  );

  const heroSubtitle = pickVariant(seed, heroSubtitleTemplates)(ctx);
  const introParagraph = pickVariant(`${seed}-intro`, introTemplates)(
    ctx,
    descriptor
  );
  const locationSnippet = pickVariant(
    `${seed}-location`,
    locationSnippetTemplates
  )(ctx, nearbyDescriptor);
  const heroStats = pickVariant(`${seed}-stats`, heroStatSets);

  const featureHighlights = [
    ...(ctx.serviceFeatures || []).map(
      (feature) =>
        `${feature} tailored for properties in ${ctx.localityName}.`
    ),
    ...serviceHighlightTemplates.map((template) =>
      template(ctx, descriptor)
    ),
  ];

  const serviceHighlights = pickMultiple(
    `${seed}-highlights`,
    featureHighlights,
    4
  );
  const whyChoose = pickMultiple(
    `${seed}-choose`,
    whyChooseTemplates.map((template) => template(ctx)),
    5
  );

  const faqs = pickMultiple(
    `${seed}-faqs`,
    faqTemplates.map((template) => template(ctx)),
    4
  );

  const cta = pickVariant(`${seed}-cta`, ctaTemplates)(ctx);

  return {
    heroSubtitle,
    heroStats,
    introParagraph,
    locationSnippet,
    serviceHighlights,
    whyChoose,
    faqs,
    cta,
    keywordPhrase: `${ctx.serviceName} ${ctx.localityName} ${ctx.cityName}`,
  };
};
