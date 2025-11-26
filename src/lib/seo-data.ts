export const CITIES = [
  'Delhi',
  'Gurgaon',
  'Noida',
  'Greater Noida',
  'Ghaziabad',
  'Faridabad'
];

import localitiesData from '../data/localities.json';

export const LOCALITIES: Record<string, string[]> = localitiesData;

export const SERVICES = [
  // Core Services
  'IP Camera Installation',
  'CCTV Camera Installation',
  'CCTV Repair',
  'Biometric Installation',
  'Video Door Phone Installation',
  'Access Control System',
  'Intercom System Installation',
  'Security Alarm System',
  'Fire Alarm System',
  'Electric Fence Installation',
  'Electrical Wiring for CCTV',
  'Power Supply Installation',
  'Inverter Connection for CCTV',
  'Smart Home Automation',
  'Video Door Phone Wiring',
  'MCB Box Installation',
  'Earthing for CCTV',

  // Brand Specific
  'Hikvision Camera Installation',
  'CP Plus Camera Installation',
  'Dahua Camera Installation',
  'Honeywell CCTV Installation',
  'Bosch Security System',
  'Panasonic CCTV Camera',
  'Samsung CCTV Camera',
  'Sony CCTV Camera',
  'Godrej CCTV Camera',
  'Zicom Security System',
  'Hikvision DVR Repair',
  'CP Plus DVR Repair',
  'Dahua NVR Configuration',

  // Technology Specific
  'WiFi Camera Installation',
  'Wireless CCTV Camera',
  '4G Sim Camera Installation',
  'Solar CCTV Camera',
  'Night Vision Camera',
  'PTZ Camera Installation',
  'Dome Camera Installation',
  'Bullet Camera Installation',
  '360 Degree Camera',
  'Hidden Camera Installation',
  'Spy Camera Installation',
  'Cloud CCTV Storage',
  'Motion Sensor Camera',
  'Face Recognition Camera',
  'Number Plate Recognition',
  'Thermal Camera Installation',

  // Property Specific
  'Home Security System',
  'Office CCTV Installation',
  'Shop CCTV Camera',
  'Warehouse Security System',
  'Factory CCTV Installation',
  'School CCTV Installation',
  'Hospital Security System',
  'Hotel CCTV Installation',
  'Apartment CCTV System',
  'Building Intercom System',
  'Society Gate Security',
  'Parking Lot Camera',
  'Elevator CCTV Camera',

  // Problem Specific
  'CCTV Camera Not Working',
  'CCTV No Signal Fix',
  'CCTV Blur Image Fix',
  'CCTV Recording Issue',
  'CCTV Password Reset',
  'CCTV Online Configuration',
  'CCTV Mobile View Setup',
  'DVR Hard Disk Replacement',
  'CCTV Cable Repair',
  'CCTV Power Supply Repair',
  'CCTV Camera Shifting',
  'CCTV AMC Service',
  'CCTV Maintenance Service',

  // Resolution Specific
  '2MP CCTV Camera',
  '5MP CCTV Camera',
  '8MP 4K CCTV Camera',
  'HD CCTV Camera',
  'Full HD CCTV Camera',
  'Color Night Vision Camera',
  'StarLight Camera Installation',

  // DVR/NVR Specific
  '4 Channel DVR Setup',
  '8 Channel DVR Setup',
  '16 Channel DVR Setup',
  '32 Channel DVR Setup',
  '4 Channel NVR Setup',
  '8 Channel NVR Setup',
  '16 Channel NVR Setup',
  '32 Channel NVR Setup',

  // Brand + Type Combinations
  'Hikvision IP Camera',
  'Hikvision Analog Camera',
  'Hikvision WiFi Camera',
  'CP Plus IP Camera',
  'CP Plus Analog Camera',
  'CP Plus WiFi Camera',
  'Dahua IP Camera',
  'Dahua Analog Camera',
  'Godrej Video Door Phone',
  'Panasonic Video Door Phone',

  // Smart Home & Advanced
  'Smart Door Lock Installation',
  'Fingerprint Door Lock',
  'Digital Door Lock',
  'WiFi Video Doorbell',
  'Smart Video Doorbell',
  'Automatic Gate System',
  'Boom Barrier Installation',
  'RFID Attendance System',
  'Face Attendance Machine',
  'Hotel Card Lock System',
  'Glass Door Biometric Lock',
  'Wooden Door Biometric Lock',
  
  // Repairs & Systems
  'Wireless Security System',
  'Home Automation System',
  'Office Automation System',
  'Biometric Attendance System',
  'Access Control Repair',
  'Video Door Phone Repair',
  'Intercom Repair',
  'Fire Alarm Repair',
  
  // Location/Placement Specific
  'Outdoor CCTV Installation',
  'Indoor CCTV Installation',
  'Lift CCTV Installation',
  'Staircase CCTV Camera',
  'Parking CCTV Camera',
  'Basement CCTV Camera',
  'Terrace CCTV Camera',
  'Boundary Wall Security',
  'Main Gate Security Camera'
];

// Helper to create a slug from text
export function createSlug(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-') // Replace non-alphanumeric chars with hyphens
    .replace(/^-+|-+$/g, ''); // Remove leading/trailing hyphens
}

// Helper to parse a flat slug into components
// Slug format: [service-slug]-in-[locality-slug]-[city-slug]
// Example: ip-camera-installation-in-dwarka-delhi
export function parseSlug(slug: string) {
  if (!slug.includes('-in-')) return null;

  const parts = slug.split('-in-');
  if (parts.length !== 2) return null;

  const serviceSlug = parts[0];
  const locationSlug = parts[1];

  // Find Service
  const service = SERVICES.find(s => createSlug(s) === serviceSlug);
  if (!service) return null;

  // Find City (check end of location slug)
  const city = CITIES.find(c => locationSlug.endsWith(createSlug(c)));
  if (!city) return null;

  // Extract Locality
  const citySlug = createSlug(city);
  // locality-slug-city-slug -> remove -city-slug from end
  const localitySlug = locationSlug.slice(0, -(citySlug.length + 1)); // +1 for the hyphen
  
  const locality = LOCALITIES[city]?.find(l => createSlug(l) === localitySlug);
  
  if (!locality) return null;

  return {
    service,
    city,
    locality
  };
}

// Helper to find service by slug (exact or partial match)
export function getServiceBySlug(slug: string): string | null {
  return SERVICES.find(s => createSlug(s) === slug) || null;
}

// Helper to find location (city or locality) by slug
export function findLocation(slug: string): { city: string; locality?: string } | null {
  // Check cities
  const city = CITIES.find(c => createSlug(c) === slug);
  if (city) return { city };

  // Check localities
  for (const [c, localities] of Object.entries(LOCALITIES)) {
    const locality = localities.find(l => createSlug(l) === slug);
    if (locality) {
      return { city: c, locality };
    }
  }

  return null;
}

export interface ServiceContent {
  description: string;
  benefits: string[];
  faqs: { question: string; answer: string }[];
}

export const SERVICE_CONTENT: Record<string, ServiceContent> = {
  'IP Camera Installation': {
    description: "Upgrade your security with high-definition IP Camera Installation. Unlike traditional analog cameras, IP cameras offer superior image quality, remote access via smartphone, and advanced features like motion detection and night vision. Perfect for modern homes and businesses requiring crystal-clear surveillance.",
    benefits: [
      "Full HD / 4K Resolution Clarity",
      "Remote Access via Mobile App",
      "Power over Ethernet (PoE) Support",
      "Advanced Motion Detection",
      "Cloud Storage Options"
    ],
    faqs: [
      { question: "What is the difference between IP and Analog cameras?", answer: "IP cameras send digital signals via network cables, offering much higher resolution and smart features compared to analog cameras which use coaxial cables." },
      { question: "Do I need internet for IP cameras?", answer: "Internet is required for remote viewing on your phone, but the cameras can record to a local NVR without internet." }
    ]
  },
  'CCTV Camera Installation': {
    description: "Professional CCTV Camera Installation services for comprehensive security. We install a wide range of cameras including Dome, Bullet, and PTZ types to cover every blind spot of your property. Our expert technicians ensure neat wiring and optimal camera positioning.",
    benefits: [
      "24/7 Surveillance & Recording",
      "Deterrence of Criminal Activity",
      "Evidence for Legal Purposes",
      "Remote Monitoring Capability",
      "Low Maintenance Requirements"
    ],
    faqs: [
      { question: "How long does installation take?", answer: "For a standard 4-camera setup, installation typically takes 4-6 hours depending on the wiring complexity." },
      { question: "What happens during a power cut?", answer: "Standard systems turn off, but we can install a CCTV power supply with battery backup to keep them running." }
    ]
  },
  'CCTV Repair': {
    description: "Fast and reliable CCTV Repair services to get your security system back online. Whether it's a blurry image, connection loss, hard drive failure, or wiring issue, our technicians can diagnose and fix it quickly.",
    benefits: [
      "Quick Diagnosis & Troubleshooting",
      "Replacement of Faulty Parts",
      "Wiring Repair & Re-routing",
      "DVR/NVR Configuration Fixes",
      "Camera Lens Cleaning & Focusing"
    ],
    faqs: [
      { question: "Why is my CCTV camera showing 'No Signal'?", answer: "This is usually due to a loose BNC connector, damaged power supply, or a cut in the cable. We can trace and fix this easily." },
      { question: "Do you repair old analog systems?", answer: "Yes, we repair all types of CCTV systems, including older analog, HD-TVI, and modern IP systems." }
    ]
  },
  'Biometric Installation': {
    description: "Secure your premises with advanced Biometric Installation services. Control access to your office or secure areas using fingerprint, face recognition, or card readers. Ideal for tracking employee attendance and preventing unauthorized entry.",
    benefits: [
      "Accurate Attendance Tracking",
      "Prevent Unauthorized Access",
      "Touchless Face Recognition Options",
      "Integration with Payroll Systems",
      "Detailed Entry/Exit Logs"
    ],
    faqs: [
      { question: "Can this system track employee attendance?", answer: "Yes, most biometric systems come with software to generate detailed attendance reports for payroll." },
      { question: "What if a fingerprint doesn't work?", answer: "Modern systems also support PIN codes or RFID cards as backup methods." }
    ]
  },
  'Video Door Phone Installation': {
    description: "Enhance your home safety with Video Door Phone Installation. See and speak to visitors at your gate before opening the door. Modern systems allow you to unlock electronic locks directly from the indoor screen.",
    benefits: [
      "Visual Verification of Visitors",
      "Two-Way Audio Communication",
      "Remote Door Unlocking",
      "Night Vision Capability",
      "Photo Capture of Visitors"
    ],
    faqs: [
      { question: "Can I see visitors on my phone?", answer: "Yes, IP-based Video Door Phones connect to WiFi and ring on your smartphone app as well as the indoor screen." },
      { question: "Does it work at night?", answer: "Yes, the outdoor unit has infrared LEDs for clear night vision." }
    ]
  },
  // Default fallback for others
  'default': {
    description: "Expert installation and maintenance services tailored to your specific security needs. We use high-quality equipment and follow industry best practices to ensure a reliable and long-lasting setup.",
    benefits: [
      "Professional Installation",
      "High-Quality Components",
      "Warranty on Products & Labor",
      "Timely Service Delivery",
      "Competitive Pricing"
    ],
    faqs: [
      { question: "Do you provide a warranty?", answer: "Yes, we provide a 1-year warranty on installation and standard manufacturer warranty on all products." },
      { question: "How can I book a service?", answer: "You can call us directly or fill out the booking form on this page to schedule a visit." }
    ]
  }
};

export function getServiceContent(serviceName: string): ServiceContent {
  return SERVICE_CONTENT[serviceName] || SERVICE_CONTENT['default'];
}
