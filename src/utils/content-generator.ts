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

export const generateFAQs = (service: string, location: string): { question: string; answer: string }[] => {
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

export const generateTestimonials = (location: string) => {
  return [
    {
      name: "Rajesh Kumar",
      location: location,
      rating: 5,
      text: "Excellent service! The team was professional, punctual, and the installation was done perfectly. Very happy with the quality.",
      service: "CCTV Installation",
    },
    {
      name: "Priya Sharma",
      location: location,
      rating: 5,
      text: "Quick response and great support. They explained everything clearly and the mobile app setup is very convenient.",
      service: "Wireless CCTV",
    },
    {
      name: "Amit Verma",
      location: location,
      rating: 5,
      text: "Best service in Delhi! Affordable pricing and no compromise on quality. Highly recommended for CCTV installation.",
      service: "IP Camera Installation",
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
