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
  // Generic/Popular Services (for SEO-friendly URLs)
  "CCTV Installation",
  "Door Lock Installation",
  "DVR Installation",
  "NVR Installation",
  "Smart Lock Installation",
  
  // Specific CCTV Installation Services
  "Residential CCTV Installation",
  "Commercial CCTV Installation",
  "Industrial CCTV Installation",
  "Dome Camera Installation",
  "Bullet Camera Installation",
  "PTZ Camera Installation",
  "IP Camera Installation",
  "CCTV Camera Installation",
  "CCTV Repair",
  "Biometric Installation",
  "Video Door Phone Installation",
  "Access Control System",
  "Intercom System Installation",
  "Security Alarm System",
  "Fire Alarm System",
  "Electric Fence Installation",
  "Electrical Wiring for CCTV",
  "Power Supply Installation",
  "Inverter Connection for CCTV",
  "Smart Home Automation",
  "Video Door Phone Wiring",
  "MCB Box Installation",
  "Earthing for CCTV",
  "Analog Camera Installation",
  "Wireless Camera Installation",
  "Hidden Camera Installation",
  "Night Vision Camera Installation",
  "License Plate Recognition Camera",
  "Fisheye Camera Installation",
  "Smart Home Camera Installation",

  "CCTV Camera Repair",
  "CCTV General Troubleshooting",
  "CCTV Cable Repair",
  "CCTV Power Supply Repair",
  "CCTV Maintenance Contract",
  "CCTV Relocation Service",
  "CCTV Password Reset",
  "CCTV Online Configuration",

  "Hikvision Camera Installation",
  "CP Plus Camera Installation",
  "Dahua Camera Installation",
  "Honeywell CCTV Installation",
  "Bosch Security System",
  "Panasonic CCTV Camera",
  "Samsung CCTV Camera",
  "Sony CCTV Camera",
  "Godrej CCTV Camera",
  "Zicom Security System",
  "Hikvision DVR Repair",
  "CP Plus DVR Repair",
  "Dahua NVR Configuration",

  "WiFi Camera Installation",
  "Wireless CCTV Camera",
  "4G Sim Camera Installation",
  "Solar CCTV Camera",
  "Night Vision Camera",
  "360 Degree Camera",
  "Spy Camera Installation",
  "Cloud CCTV Storage",
  "Motion Sensor Camera",
  "Face Recognition Camera",
  "Number Plate Recognition",
  "Thermal Camera Installation",

  "Home Security System",
  "Office CCTV Installation",
  "Shop CCTV Camera",
  "Warehouse Security System",
  "Factory CCTV Installation",
  "School CCTV Installation",
  "Hospital Security System",
  "Hotel CCTV Installation",
  "Apartment CCTV System",
  "Building Intercom System",
  "Society Gate Security",
  "Parking Lot Camera",
  "Elevator CCTV Camera",
  "Tiandy Camera Installation",
  "Uniview Camera Installation",
  "Ezviz Camera Installation",

  "CCTV Camera Not Working",
  "CCTV No Signal Fix",
  "CCTV Blur Image Fix",
  "CCTV Recording Issue",
  "CCTV Mobile View Setup",
  "DVR Hard Disk Replacement",
  "CCTV Camera Shifting",
  "CCTV AMC Service",
  "CCTV Maintenance Service",

  "Digital Door Lock Installation",
  "Biometric Lock Installation",
  "Smart Lock Installation",
  "Face Recognition Lock",
  "Access Control System Installation",
  "Mechanical Lock Installation",
  "Electric Lock Installation",
  "Glass Door Lock Installation",
  "Furniture Lock Installation",
  "Panic Bar Installation",
  "Automatic Door Opener",
  "Emergency Lockout Service",
  "Door Lock Repair",
  "Key Duplication Service",
  "Lock Cylinder Replacement",
  "Digital Lock Battery Replacement",
  "Door Closer Installation",
  "Intercom Repair",

  "2MP CCTV Camera",
  "5MP CCTV Camera",
  "8MP 4K CCTV Camera",
  "HD CCTV Camera",
  "Full HD CCTV Camera",
  "Color Night Vision Camera",
  "StarLight Camera Installation",

  "Yale Digital Lock",
  "Godrej Digital Lock",
  "Samsung Smart Lock",
  "Dorset Lock Installation",
  "Harrison Lock Installation",
  "Europa Lock Installation",
  "Ozone Lock Installation",
  "Schlage Lock Installation",

  "DVR Configuration",
  "NVR Configuration",
  "CCTV Remote View Setup",
  "DVR HDD Installation",
  "DVR Firmware Update",
  "DVR Board Repair",
  "DVR Password Recovery",
  "CCTV Recording Issue Fix",
  "CCTV Connectivity Fix",
  "4 Channel DVR Setup",
  "8 Channel DVR Setup",
  "16 Channel DVR Setup",
  "32 Channel DVR Setup",
  "4 Channel NVR Setup",
  "8 Channel NVR Setup",
  "16 Channel NVR Setup",
  "32 Channel NVR Setup",
  "PoE NVR Setup",
  "WiFi NVR Setup",
  "4K NVR Configuration",
  "Mobile DVR Installation",

  "Hikvision IP Camera",
  "Hikvision Analog Camera",
  "Hikvision WiFi Camera",
  "CP Plus IP Camera",
  "CP Plus Analog Camera",
  "CP Plus WiFi Camera",
  "Dahua IP Camera",
  "Dahua Analog Camera",
  "Godrej Video Door Phone",
  "Panasonic Video Door Phone",

  "Smart Door Lock Installation",
  "Fingerprint Door Lock",
  "Digital Door Lock",
  "WiFi Video Doorbell",
  "Smart Video Doorbell",
  "Automatic Gate System",
  "Boom Barrier Installation",
  "RFID Attendance System",
  "Face Attendance Machine",
  "Hotel Card Lock System",
  "Glass Door Biometric Lock",
  "Wooden Door Biometric Lock",

  "Wireless Security System",
  "Home Automation System",
  "Office Automation System",
  "Biometric Attendance System",
  "Access Control Repair",
  "Video Door Phone Repair",
  "Fire Alarm Repair",

  "Outdoor CCTV Installation",
  "Indoor CCTV Installation",
  "Lift CCTV Installation",
  "Staircase CCTV Camera",
  "Parking CCTV Camera",
  "Basement CCTV Camera",
  "Terrace CCTV Camera",
  "Boundary Wall Security",
  "Main Gate Security Camera",

  "CCTV Installation Service",
  "Security Camera Service",
  "CCTV Mechanic",
  "CCTV Technician",
  "Home Security Cameras",
  "Wireless CCTV",
  "Surveillance System",
  "Locksmith",
  "Key Maker",
  "Emergency Locksmith",
  "Video Door Phone",
  "DVR Repair",
  "CCTV Recording Setup",
  "Surveillance Storage"
];

export const INDUSTRIES = [
  'Hospitals & Clinics',
  'Schools & Colleges',
  'Restaurants & Cafes',
  'Retail Stores',
  'Warehouses & Manufacturing',
  'Offices & Corporate',
  'Hotels & Guesthouses',
  'Construction Sites',
  'Event Venues & Auditoriums',
  'Housing Societies',
  'Smart Homes',
  'Temples & Religious Places',
  'Transport Hubs',
  'Banks & ATMs',
  'Gyms & Fitness Centers',
  'Parking Lots',
  'Car Dealerships',
  'Co-Working Spaces',
  'Fuel Stations & Petrol Pumps',
  'Salons & Spas',
  'Coaching Centers',
  'Markets & Street Food',
  'IT Parks & Tech Hubs',
  'Wedding Halls & Banquets',
  'Pharmacies & Medical Stores',
  'Jewelry Stores',
  'E-commerce Warehouses'
];

export interface IndustryContent {
  heroImage: string;
  description: string;
  features: string[];
  faqs: { question: string; answer: string }[];
}

export const INDUSTRY_CONTENT: Record<string, IndustryContent> = {
  'Hospitals & Clinics': {
    heroImage: 'https://images.unsplash.com/photo-1586773860418-d37222d8fce3?q=80&w=1200&auto=format&fit=crop',
    description: 'Medical-grade surveillance for patient safety, sterile zones, pharmacies, and ICUs.',
    features: ['ICU monitoring','Pharmacy security','Visitor tracking','Emergency response'],
    faqs: [
      { question: 'Is footage compliant with privacy?', answer: 'We configure restricted access and retention per policy.' },
      { question: 'Do cameras support low-light?', answer: 'Yes, with IR and Starlight options for wards and corridors.' }
    ]
  },
  'Schools & Colleges': {
    heroImage: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=1200&auto=format&fit=crop',
    description: 'Campus-wide visibility for entrances, classrooms, playgrounds, and exam halls.',
    features: ['Anti-bullying coverage','Exam integrity','Playground safety','Attendance integration'],
    faqs: [
      { question: 'Can parents view live feeds?', answer: 'Role-based remote view is supported where policy permits.' },
      { question: 'Do you cover hostel areas?', answer: 'Yes, with access-controlled viewing and audit logs.' }
    ]
  },
  'Restaurants & Cafes': {
    heroImage: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=1200&auto=format&fit=crop',
    description: 'Front-of-house and kitchen surveillance to improve safety, hygiene, and operations.',
    features: ['Cash counter safety','Kitchen hygiene','Staff areas','Remote owner view'],
    faqs: [
      { question: 'Can cameras resist heat/grease?', answer: 'We use enclosures rated for kitchen environments.' },
      { question: 'Do you integrate with POS?', answer: 'Yes, overlay options can align cameras with transaction points.' }
    ]
  },
  'Retail Stores': {
    heroImage: 'https://images.unsplash.com/photo-1542831371-d531d36971e6?q=80&w=1200&auto=format&fit=crop',
    description: 'Shrinkage control and customer safety with strategic aisles and checkout coverage.',
    features: ['Aisle coverage','Checkout lanes','Entrance analytics','Parking safety'],
    faqs: [
      { question: 'Do you support people counting?', answer: 'Yes, selected cameras provide footfall analytics.' },
      { question: 'Is storage scalable?', answer: 'NVR and cloud options allow retention growth.' }
    ]
  },
  'Warehouses & Manufacturing': {
    heroImage: 'https://images.unsplash.com/photo-1581092580495-0b1be1b1541a?q=80&w=1200&auto=format&fit=crop',
    description: 'Inventory and process visibility, loading bays, and compliance monitoring.',
    features: ['Bay monitoring','Perimeter cameras','Worker safety','Production audits'],
    faqs: [
      { question: 'Do you support outdoor coverage?', answer: 'Yes, weatherproof PoE cameras for yards and perimeters.' },
      { question: 'Any license plate recognition?', answer: 'Optional LPR for gate entries and fleets.' }
    ]
  },
  'Offices & Corporate': {
    heroImage: 'https://images.unsplash.com/photo-1496307042754-b4aa456c4a2d?q=80&w=1200&auto=format&fit=crop',
    description: 'Lobby, corridors, server rooms, and access-controlled spaces for corporate security.',
    features: ['Lobby coverage','Badge integration','Server room monitoring','Visitor logs'],
    faqs: [
      { question: 'GDPR-like policies?', answer: 'We implement access scopes, audit logs, and retention rules.' },
      { question: 'Is remote view secure?', answer: 'Encrypted channels with strong authentication.' }
    ]
  },
  'Hotels & Guesthouses': {
    heroImage: 'https://images.unsplash.com/photo-1439130433244-6b4bd8492d70?q=80&w=1200&auto=format&fit=crop',
    description: 'Lobby, corridors, lifts, parking—guest and staff safety with discreet coverage.',
    features: ['Lobby/lifts','Corridor coverage','Parking safety','Back-of-house'],
    faqs: [
      { question: 'Do you track valet areas?', answer: 'Yes, lane and handover coverage for valet desks.' },
      { question: 'Is privacy respected?', answer: 'No cameras in rooms; only common areas as per policy.' }
    ]
  },
  'Construction Sites': {
    heroImage: 'https://images.unsplash.com/photo-1556909212-20d2333d66d6?q=80&w=1200&auto=format&fit=crop',
    description: 'Site progress, material protection, and safety oversight in hazardous zones.',
    features: ['Progress monitoring','Material protection','Hazard alerts','Gate LPR'],
    faqs: [
      { question: 'Power on remote sites?', answer: 'Solar and 4G options available for temporary setups.' },
      { question: 'Mobile view for managers?', answer: 'Yes, app access for multi-site dashboards.' }
    ]
  },
  'Event Venues & Auditoriums': {
    heroImage: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1200&auto=format&fit=crop',
    description: 'Crowd control and incident visibility for large gatherings and weddings.',
    features: ['Crowd analytics','Perimeter control','Vendor monitoring','Emergency exits'],
    faqs: [
      { question: 'Do you offer highlight reels?', answer: 'Optional recording segregation for selected feeds.' },
      { question: 'Any temporary deployment?', answer: 'Yes, quick-deploy kits for events.' }
    ]
  },
  'Housing Societies': {
    heroImage: 'https://images.unsplash.com/photo-1501183638710-841dd1904471?q=80&w=1200&auto=format&fit=crop',
    description: 'Gate control, common areas, parking and lifts for resident safety.',
    features: ['Gate entries','Lift cameras','Play areas','Parking lanes'],
    faqs: [
      { question: 'Can RWA access dashboards?', answer: 'Yes, multi-admin role-based dashboards.' },
      { question: 'Integration with intercom?', answer: 'Supported with VDP systems.' }
    ]
  }
  ,
  'Smart Homes': {
    heroImage: 'https://images.unsplash.com/photo-1493666438817-866a91353ca9?q=80&w=1200&auto=format&fit=crop',
    description: 'Connected cameras, doorbells, and locks integrated with home automation.',
    features: ['App control','Doorbell cameras','Smart locks','Cloud storage'],
    faqs: [
      { question: 'Can I control devices by phone?', answer: 'Yes, iOS/Android apps with secure login.' },
      { question: 'Do you support Alexa/Google?', answer: 'Voice assistants supported via compatible hubs.' }
    ]
  },
  'Temples & Religious Places': {
    heroImage: 'https://images.unsplash.com/photo-1496317556649-f930d733eea0?q=80&w=1200&auto=format&fit=crop',
    description: 'Crowd, donation rooms, and entry gates with respectful coverage policies.',
    features: ['Donation room safety','Entry queues','Perimeter monitoring','Night coverage'],
    faqs: [
      { question: 'Is recording discreet?', answer: 'We place cameras per committee guidance and policy.' },
      { question: 'Can trustees view feeds?', answer: 'Role-based remote view is provided.' }
    ]
  },
  'Transport Hubs': {
    heroImage: 'https://images.unsplash.com/photo-1525351483943-4f4b2b1b8683?q=80&w=1200&auto=format&fit=crop',
    description: 'Stations, bus depots, and terminals with LPR and crowd analytics.',
    features: ['Gate LPR','Platform coverage','Crowd heatmaps','Incident review'],
    faqs: [
      { question: 'Do you cover large areas?', answer: 'PTZ and multi-lens cameras for wide coverage.' },
      { question: 'Retention length?', answer: 'Configurable on NVR/cloud per compliance.' }
    ]
  },
  'Banks & ATMs': {
    heroImage: 'https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?q=80&w=1200&auto=format&fit=crop',
    description: 'Vault-adjacent zones, teller counters, entries, and ATM kiosks with audit trails.',
    features: ['Teller counters','ATM kiosks','Server room','Access logs'],
    faqs: [
      { question: 'Do you meet compliance?', answer: 'We align recording and retention with policy.' },
      { question: 'Any tamper alerts?', answer: 'Yes, motion/tamper alerts via supported models.' }
    ]
  },
  'Gyms & Fitness Centers': {
    heroImage: 'https://images.unsplash.com/photo-1558611848-73f7eb4001a1?q=80&w=1200&auto=format&fit=crop',
    description: 'Reception, workout zones, lockers, and parking with privacy-aware placement.',
    features: ['Reception desk','Locker area entrances','Parking','Access control'],
    faqs: [
      { question: 'Are cameras in changing rooms?', answer: 'No, only at entrances respecting privacy.' },
      { question: 'Mobile view for owners?', answer: 'Yes, secure multi-user access.' }
    ]
  },
  'Parking Lots': {
    heroImage: 'https://images.unsplash.com/photo-1519643398871-8f0fae8290bd?q=80&w=1200&auto=format&fit=crop',
    description: 'Lane coverage, entries/exits, and LPR for efficient parking operations.',
    features: ['Lane cameras','Entry/exit','LPR','Incident review'],
    faqs: [
      { question: 'Night performance?', answer: 'Color night vision/Starlight options available.' },
      { question: 'Data export?', answer: 'Clips export and logs per incident.' }
    ]
  },
  'Car Dealerships': {
    heroImage: 'https://images.unsplash.com/photo-1493238792000-8113da705763?q=80&w=1200&auto=format&fit=crop',
    description: 'Showrooms, yards, and delivery bays with customer-safe experience.',
    features: ['Showroom floor','Delivery bay','Yard coverage','Cash desk'],
    faqs: [
      { question: 'Do you cover test-drive lanes?', answer: 'Perimeter and entry cameras can monitor lanes.' },
      { question: 'Warranty support?', answer: 'Manufacturer and installer warranty is provided.' }
    ]
  },
  'Co-Working Spaces': {
    heroImage: 'https://images.unsplash.com/photo-1524758631624-e2822e304c36?q=80&w=1200&auto=format&fit=crop',
    description: 'Lobbies, hot desks, meeting rooms, and access-controlled zones.',
    features: ['Lobby','Access control','Meeting rooms','Server racks'],
    faqs: [
      { question: 'Badge integration?', answer: 'Supported via access control systems.' },
      { question: 'Privacy for cabins?', answer: 'Common areas only; private cabins per policy.' }
    ]
  },
  'Fuel Stations & Petrol Pumps': {
    heroImage: 'https://images.unsplash.com/photo-1487956387771-9ff19f1f6f81?q=80&w=1200&auto=format&fit=crop',
    description: 'Forecourt, cash counters, and ingress/egress with weatherproof cameras.',
    features: ['Forecourt lanes','Cash counter','Ingress/egress','LPR'],
    faqs: [
      { question: 'Explosion-proof gear?', answer: 'We use appropriate rated enclosures for safety.' },
      { question: 'Outdoor durability?', answer: 'Weatherproof cameras with IR for night.' }
    ]
  },
  'Salons & Spas': {
    heroImage: 'https://images.unsplash.com/photo-1502773862418-c7f2a6df2eb3?q=80&w=1200&auto=format&fit=crop',
    description: 'Reception, cash counter, and corridors with privacy-aware placement.',
    features: ['Reception','Cash counter','Corridors','Waiting area'],
    faqs: [
      { question: 'Private rooms?', answer: 'No cameras inside therapy rooms; entrances only.' },
      { question: 'Owner remote view?', answer: 'Yes, secure access with audit logs.' }
    ]
  },
  'Coaching Centers': {
    heroImage: 'https://images.unsplash.com/photo-1513258496099-48168024b6ff?q=80&w=1200&auto=format&fit=crop',
    description: 'Classrooms, entrances, and exam halls to ensure discipline and safety.',
    features: ['Classrooms','Exam halls','Entrances','Attendance integration'],
    faqs: [
      { question: 'Do you record classes?', answer: 'Optional recording per institute policy.' },
      { question: 'Can parents view feeds?', answer: 'Role-based access if permitted.' }
    ]
  },
  'Markets & Street Food': {
    heroImage: 'https://images.unsplash.com/photo-1516685304081-de7947d419d6?q=80&w=1200&auto=format&fit=crop',
    description: 'Stalls, cash points, and crowd flow with ruggedized outdoor cameras.',
    features: ['Stall coverage','Cash points','Crowd flow','Perimeter'],
    faqs: [
      { question: 'Portable setups?', answer: 'Quick-deploy kits available for temporary stalls.' },
      { question: 'Power backup?', answer: 'UPS/inverter options for continuity.' }
    ]
  },
  'IT Parks & Tech Hubs': {
    heroImage: 'https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?q=80&w=1200&auto=format&fit=crop',
    description: 'Lobby, corridors, server rooms, parking—enterprise-grade deployment.',
    features: ['Lobby','Badge access','Server rooms','Parking'],
    faqs: [
      { question: 'GDPR-like compliance?', answer: 'Access scopes and audit trails implemented.' },
      { question: 'Multi-tenant?', answer: 'Zones per tenant with role-based access.' }
    ]
  },
  'Wedding Halls & Banquets': {
    heroImage: 'https://images.unsplash.com/photo-1524578271613-d550eacf7ae9?q=80&w=1200&auto=format&fit=crop',
    description: 'Entry gates, stage, dining and parking with crowd visibility.',
    features: ['Stage view','Dining area','Entry gates','Parking'],
    faqs: [
      { question: 'Temporary setups?', answer: 'Yes, rapid deployments for events.' },
      { question: 'Highlight segregation?', answer: 'Optional feed segregation available.' }
    ]
  },
  'Pharmacies & Medical Stores': {
    heroImage: 'https://images.unsplash.com/photo-1586074296815-aef0a54fba94?q=80&w=1200&auto=format&fit=crop',
    description: 'Counters, storage, and entrances with theft deterrence.',
    features: ['Counter view','Storage shelves','Entrance','Audit logs'],
    faqs: [
      { question: 'Low-light areas?', answer: 'IR options for night coverage.' },
      { question: 'Billing integration?', answer: 'POS alignment possible for counters.' }
    ]
  },
  'Jewelry Stores': {
    heroImage: 'https://images.unsplash.com/photo-1516637090014-cb1ab0a62b71?q=80&w=1200&auto=format&fit=crop',
    description: 'Counters, safes, entries with high-resolution and audit trails.',
    features: ['High-res lenses','Safe areas','Entry gates','Audit logs'],
    faqs: [
      { question: 'Do you support 4K?', answer: 'Yes, 4K cameras for critical zones.' },
      { question: 'Any panic integration?', answer: 'Integration with alarm systems possible.' }
    ]
  },
  'E-commerce Warehouses': {
    heroImage: 'https://images.unsplash.com/photo-1587547133148-1e4fdc4f0f7b?q=80&w=1200&auto=format&fit=crop',
    description: 'Inbound/outbound docks, racks, and packing stations with process visibility.',
    features: ['Dock cameras','Rack aisles','Packing stations','Gate LPR'],
    faqs: [
      { question: 'Do you support analytics?', answer: 'Yes, heatmaps and motion analytics on select models.' },
      { question: 'Outdoor yards?', answer: 'Weatherproof PoE for yards.' }
    ]
  }
};

export function getIndustryContent(industryName: string): IndustryContent {
  if (INDUSTRY_CONTENT[industryName]) return INDUSTRY_CONTENT[industryName];
  return {
    heroImage: 'https://images.unsplash.com/photo-1556157382-97eda2d62296?q=80&w=1200&auto=format&fit=crop',
    description: 'Tailored surveillance designed for your industry’s operations and safety.',
    features: ['Strategic coverage','Role-based access','Mobile view','Warranty support'],
    faqs: [
      { question: 'Do you provide AMC?', answer: 'Yes, annual maintenance contracts with scheduled health checks.' },
      { question: 'Is the system scalable?', answer: 'Modular NVR/camera upgrades and cloud retention.' }
    ]
  };
}

// export const SERVICES = [
//   // --- CCTV Installation Services ---
//   'Residential CCTV Installation',
//   'Commercial CCTV Installation',
//   'Industrial CCTV Installation',
//   'Dome Camera Installation',
//   'Bullet Camera Installation',
//   'PTZ Camera Installation',
//   'IP Camera Installation',
//   'Analog Camera Installation',
//   'Wireless Camera Installation',
//   'Hidden Camera Installation',
//   'Night Vision Camera Installation',
//   'License Plate Recognition Camera',
//   'Fisheye Camera Installation',
//   'Smart Home Camera Installation',

//   // --- CCTV Repair & Maintenance ---
//   'CCTV Camera Repair',
//   'CCTV General Troubleshooting',
//   'CCTV Cable Repair',
//   'CCTV Power Supply Repair',
//   'CCTV Maintenance Contract',
//   'CCTV Relocation Service',
//   'CCTV Password Reset',
//   'CCTV Online Configuration',

//   // --- Brand Specific CCTV ---
//   'Hikvision Camera Installation',
//   'CP Plus Camera Installation',
//   'Dahua Camera Installation',
//   'Honeywell CCTV Installation',
//   'Panasonic CCTV Camera',
//   'Samsung CCTV Camera',
//   'Bosch Security System',
//   'Godrej CCTV Camera',
//   'Sony CCTV Camera',
//   'Tiandy Camera Installation',
//   'Uniview Camera Installation',
//   'Ezviz Camera Installation',

//   // --- Door Lock & Locksmith Services ---
//   'Digital Door Lock Installation',
//   'Biometric Lock Installation',
//   'Smart Lock Installation',
//   'Face Recognition Lock',
//   'Video Door Phone Installation',
//   'Access Control System Installation',
//   'Mechanical Lock Installation',
//   'Electric Lock Installation',
//   'Glass Door Lock Installation',
//   'Furniture Lock Installation',
//   'Panic Bar Installation',
//   'Automatic Door Opener',
//   'Emergency Lockout Service',
//   'Door Lock Repair',
//   'Key Duplication Service',
//   'Lock Cylinder Replacement',
//   'Digital Lock Battery Replacement',
//   'Door Closer Installation',
//   'Intercom Repair',

//   // --- Brand Specific Locks ---
//   'Yale Digital Lock',
//   'Godrej Digital Lock',
//   'Samsung Smart Lock',
//   'Dorset Lock Installation',
//   'Harrison Lock Installation',
//   'Europa Lock Installation',
//   'Ozone Lock Installation',
//   'Schlage Lock Installation',

//   // --- DVR/NVR Services ---
//   'DVR Configuration',
//   'NVR Configuration',
//   'CCTV Remote View Setup',
//   'DVR HDD Installation',
//   'DVR Firmware Update',
//   'DVR Board Repair',
//   'DVR Password Recovery',
//   'CCTV Recording Issue Fix',
//   'CCTV Connectivity Fix',
//   '4 Channel DVR Setup',
//   '8 Channel DVR Setup',
//   '16 Channel DVR Setup',
//   '32 Channel DVR Setup',
//   'PoE NVR Setup',
//   'WiFi NVR Setup',
//   '4K NVR Configuration',
//   'Mobile DVR Installation',

//   // --- SEO Keywords as Services ---
//   'CCTV Installation Service',
//   'Security Camera Service',
//   'CCTV Mechanic',
//   'CCTV Technician',
//   'Home Security Cameras',
//   'Wireless CCTV',
//   'Surveillance System',
//   'Locksmith',
//   'Key Maker',
//   'Emergency Locksmith',
//   'Video Door Phone',
//   'Access Control System',
//   'DVR Repair',
//   'CCTV Recording Setup',
//   'Surveillance Storage'
// ];

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

// Helper to get city for a locality
export function getCityForLocality(locality: string): string | null {
  for (const [city, localities] of Object.entries(LOCALITIES)) {
    if (localities.some(l => createSlug(l) === locality)) {
      return city;
    }
  }
  return null;
}

// Helper to parse query-based slug (multiple patterns)
// Patterns:
// 1. service-in-locality-city: cctv-installation-in-sadar-bazar-delhi
// 2. service-locality-city: cctv-camera-installation-sadar-bazar-delhi
// 3. locality-service: sadar-bazar-cctv-camera-service
// 4. locality-service-type: sadar-bazar-cctv-repair
// 5. brand-service-locality: hikvision-cctv-installation-sadar-bazar
export function parseQuerySlug(slug: string) {
  // Pattern 1: service-in-locality-city
  if (slug.includes('-in-')) {
    const parts = slug.split('-in-');
    if (parts.length === 2) {
      const serviceSlug = parts[0];
      const locationPart = parts[1];
      
      // Find city at the end
      const city = CITIES.find(c => locationPart.endsWith(`-${createSlug(c)}`));
      if (city) {
        const citySlug = createSlug(city);
        const localitySlug = locationPart.slice(0, -(citySlug.length + 1));
        const locality = LOCALITIES[city]?.find(l => createSlug(l) === localitySlug);
        const service = SERVICES.find(s => createSlug(s) === serviceSlug);
        
        if (locality && service) {
          return { service, locality, city, pattern: 'service-in-locality-city' };
        }
      }
    }
  }

  // Pattern 2 & 3: Try to find locality in the slug
  for (const [city, localities] of Object.entries(LOCALITIES)) {
    for (const locality of localities) {
      const localitySlug = createSlug(locality);
      const citySlug = createSlug(city);
      
      // Pattern 2: service-locality-city
      if (slug.endsWith(`-${localitySlug}-${citySlug}`)) {
        const serviceSlug = slug.slice(0, -(localitySlug.length + citySlug.length + 2));
        const service = SERVICES.find(s => createSlug(s) === serviceSlug);
        if (service) {
          return { service, locality, city, pattern: 'service-locality-city' };
        }
      }
      
      // Pattern 3 & 4: locality-service (starts with locality)
      if (slug.startsWith(`${localitySlug}-`)) {
        const serviceSlug = slug.slice(localitySlug.length + 1);
        const service = SERVICES.find(s => createSlug(s) === serviceSlug);
        if (service) {
          return { service, locality, city, pattern: 'locality-service' };
        }
      }
      
      // Pattern 5: brand-service-locality (ends with locality)
      if (slug.endsWith(`-${localitySlug}`)) {
        const prefixSlug = slug.slice(0, -(localitySlug.length + 1));
        const service = SERVICES.find(s => createSlug(s) === prefixSlug);
        if (service) {
          return { service, locality, city, pattern: 'brand-service-locality' };
        }
      }
    }
  }
  
  return null;
}

// Helper to generate query-based slugs (filtered for high-value combinations)
export function generateQuerySlugs(): string[] {
  const slugs: string[] = [];
  
  // Top services (most searched)
  const topServices = SERVICES.slice(0, 100); // Top 100 services
  
  // For each city, get top localities
  for (const [city, localities] of Object.entries(LOCALITIES)) {
    const citySlug = createSlug(city);
    const topLocalities = localities.slice(0, 50); // Top 50 localities per city
    
    for (const locality of topLocalities) {
      const localitySlug = createSlug(locality);
      
      for (const service of topServices) {
        const serviceSlug = createSlug(service);
        
        // Pattern 1: service-in-locality-city
        slugs.push(`${serviceSlug}-in-${localitySlug}-${citySlug}`);
        
        // Pattern 2: service-locality-city
        slugs.push(`${serviceSlug}-${localitySlug}-${citySlug}`);
        
        // Pattern 3: locality-service
        slugs.push(`${localitySlug}-${serviceSlug}`);
      }
    }
  }
  
  return slugs;
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
  'Digital Door Lock Installation': {
    description: "Upgrade your home security with our advanced Digital Door Lock Installation services. We offer a wide range of keyless entry solutions including fingerprint locks, RFID card locks, and smart app-controlled locks. Say goodbye to lost keys and enjoy the convenience of modern security.",
    benefits: [
      "Keyless Entry Convenience",
      "Multiple Access Methods (Fingerprint, PIN, Card)",
      "Remote Access via Mobile App",
      "Auto-Locking Feature",
      "Emergency Battery Backup"
    ],
    faqs: [
      { question: "What happens if the battery dies?", answer: "Most digital locks have an emergency power terminal where you can use a 9V battery to power it up temporarily." },
      { question: "Can I still use a mechanical key?", answer: "Yes, almost all our digital locks come with a mechanical override key for emergencies." }
    ]
  },
  'DVR/NVR Setup': {
    description: "Professional DVR and NVR Setup services to ensure your CCTV system records perfectly. We configure recording schedules, motion detection, and remote viewing on your smartphone. Whether it's a 4-channel home setup or a 32-channel commercial system, we handle it all.",
    benefits: [
      "Optimized Recording Schedules",
      "Remote View Configuration",
      "Motion Detection Alerts",
      "HDD Health Monitoring",
      "Network Security Setup"
    ],
    faqs: [
      { question: "Can I view recordings on my phone?", answer: "Yes, we configure the system so you can view live footage and playback recordings from anywhere using a mobile app." },
      { question: "How many days of recording will I get?", answer: "This depends on the hard disk size and number of cameras. We can help you calculate the storage needed for your requirements." }
    ]
  },
  'Access Control System Installation': {
    description: "Secure your business premises with our Access Control System Installation. We install electromagnetic locks (EM locks), biometric readers, and controller boards to manage employee access efficiently.",
    benefits: [
      "Restricted Unauthorized Entry",
      "Employee Attendance Tracking",
      "Time-Zone Based Access",
      "Integration with Fire Alarm",
      "Centralized Management"
    ],
    faqs: [
      { question: "Can this integrate with payroll?", answer: "Yes, our biometric access control systems can export data compatible with most payroll software." },
      { question: "What happens during a fire?", answer: "We integrate the system with your fire alarm to automatically unlock all doors in case of an emergency." }
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
  if (SERVICE_CONTENT[serviceName]) {
    return SERVICE_CONTENT[serviceName];
  }

  const lower = serviceName.toLowerCase();

  // Smart Fallback Logic
  if (lower.includes('lock') || lower.includes('key') || lower.includes('access control')) {
    return SERVICE_CONTENT['Digital Door Lock Installation'];
  }
  
  if (lower.includes('dvr') || lower.includes('nvr') || lower.includes('recording')) {
    return SERVICE_CONTENT['DVR/NVR Setup'];
  }

  if (lower.includes('repair') || lower.includes('fix') || lower.includes('troubleshooting')) {
    return SERVICE_CONTENT['CCTV Repair'];
  }

  if (lower.includes('cctv') || lower.includes('camera') || lower.includes('surveillance')) {
    return SERVICE_CONTENT['CCTV Camera Installation'];
  }

  return SERVICE_CONTENT['default'];
}
