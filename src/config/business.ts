// Business Configuration
// Change these values when business name is decided

export const BUSINESS_CONFIG = {
  name: "CamHarbor",
  phone: "+918766203976",
  whatsapp: "+918766203976",
  email: "info@camharbor.in",
  address: "House No. 110, C2 Block, Street No. 3, Mahavir Enclave Part-1, Palam, New Delhi, Delhi 110045",
  schemaAddress: {
    "@type": "PostalAddress",
    "streetAddress": "House No. 110, C2 Block, Street No. 3, Mahavir Enclave Part-1, Palam",
    "addressLocality": "New Delhi",
    "addressRegion": "Delhi",
    "postalCode": "110045",
    "addressCountry": "IN"
  },
  
  // SEO Configuration
  defaultDescription: "Professional CCTV installation and repair services in Delhi. 24/7 support, expert technicians, affordable rates.",
  keywords: "CCTV installation, CCTV repair, security camera, surveillance system, Delhi",
  
  // Social Links
  social: {
    youtube: "https://www.youtube.com/@CamHarbor",
    twitter: "https://x.com/CamHarbor304",
    instagram: "https://www.instagram.com/camharbor/",
    facebook: "https://www.facebook.com/people/Camharbor/61584745400134/",
    linkedin: "",
  },
  
  // Google My Business Review Link
  googleReview: "https://g.page/r/CUHFqTZBjDyIEBI/review",
  
  // Service Hours
  hours: {
    weekdays: "9:00 AM - 8:00 PM",
    weekends: "10:00 AM - 6:00 PM",
    emergency: "24/7 Available",
  },
};

export const CONTACT_CONFIG = {
  phone: BUSINESS_CONFIG.phone,
  whatsapp: BUSINESS_CONFIG.whatsapp,
  email: BUSINESS_CONFIG.email,
};
