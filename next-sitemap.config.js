/** @type {import('next-sitemap').IConfig} */

const localitiesData = require('./src/data/localities.json');

// Replicate logic from src/lib/seo-data.ts
const CITIES = [
  'Delhi',
  'Gurgaon',
  'Noida',
  'Greater Noida',
  'Ghaziabad',
  'Faridabad'
];

 const SERVICES = [
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

const BRANDS = [
  'Hikvision','CP Plus','Dahua','Honeywell','Bosch','Panasonic','Godrej','Samsung','Sony','Tiandy','Uniview','Ezviz'
];

const REPAIR_ISSUES = [
  'camera-not-working','no-signal','blur-image','recording-issue','mobile-view-setup','dvr-hard-disk-replacement','password-reset','online-configuration','cable-repair','power-supply-repair'
];

const INDUSTRIES = [
  'Hospitals & Clinics','Schools & Colleges','Restaurants & Cafes','Retail Stores','Warehouses & Manufacturing','Offices & Corporate','Hotels & Guesthouses','Construction Sites','Event Venues & Auditoriums','Housing Societies','Smart Homes','Temples & Religious Places','Transport Hubs','Banks & ATMs','Gyms & Fitness Centers','Parking Lots','Car Dealerships','Co-Working Spaces','Fuel Stations & Petrol Pumps','Salons & Spas','Coaching Centers','Markets & Street Food','IT Parks & Tech Hubs','Wedding Halls & Banquets','Pharmacies & Medical Stores','Jewelry Stores','E-commerce Warehouses'
];

function createSlug(text) {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

module.exports = {
  siteUrl: 'https://www.camharbor.in',
  generateRobotsTxt: true,
  robotsTxtOptions: {
    policies: [
      { userAgent: '*', allow: '/' },
      { userAgent: '*', disallow: ['/api/', '/admin/'] },
    ],
  },
  sitemapSize: 20000,
  exclude: ['/server-sitemap.xml'], // Exclude server-side sitemap if any
  additionalPaths: async (config) => {
    const result = [];

    // Index pages
    result.push({ loc: `/brands`, changefreq: 'weekly', priority: 0.6, lastmod: new Date().toISOString() });
    result.push({ loc: `/repairs`, changefreq: 'weekly', priority: 0.6, lastmod: new Date().toISOString() });
    result.push({ loc: `/industries`, changefreq: 'weekly', priority: 0.6, lastmod: new Date().toISOString() });

    // Brand pages (cities list)
    for (const brand of BRANDS) {
      const brandSlug = createSlug(brand);
      result.push({ loc: `/brands/${brandSlug}`, changefreq: 'weekly', priority: 0.7, lastmod: new Date().toISOString() });
    }

    // Repair issue pages (cities list)
    for (const issue of REPAIR_ISSUES) {
      result.push({ loc: `/repairs/${issue}`, changefreq: 'weekly', priority: 0.7, lastmod: new Date().toISOString() });
    }

    // Industry pages (cities list)
    for (const ind of INDUSTRIES) {
      const indSlug = createSlug(ind);
      result.push({ loc: `/industries/${indSlug}`, changefreq: 'weekly', priority: 0.7, lastmod: new Date().toISOString() });
    }

    // 1. City Pages
    for (const city of CITIES) {
      const citySlug = createSlug(city);
      result.push({
        loc: `/services/${citySlug}`,
        changefreq: 'weekly',
        priority: 0.9,
        lastmod: new Date().toISOString(),
      });

      // Brand-city pages
      for (const brand of BRANDS) {
        const brandSlug = createSlug(brand);
        result.push({ loc: `/brands/${brandSlug}/${citySlug}`, changefreq: 'weekly', priority: 0.75, lastmod: new Date().toISOString() });
      }

      // Repair-city pages
      for (const issue of REPAIR_ISSUES) {
        result.push({ loc: `/repairs/${issue}/${citySlug}`, changefreq: 'weekly', priority: 0.75, lastmod: new Date().toISOString() });
      }

      // 2. Locality Pages
      const localities = localitiesData[city] || [];
      for (const locality of localities) {
        const localitySlug = createSlug(locality);
        result.push({
          loc: `/services/${citySlug}/${localitySlug}`,
          changefreq: 'weekly',
          priority: 0.8,
          lastmod: new Date().toISOString(),
        });

        // 3. Service Pages (City + Locality + Service)
        for (const service of SERVICES) {
          const serviceSlug = createSlug(service);
          result.push({
            loc: `/services/${citySlug}/${localitySlug}/${serviceSlug}`,
            changefreq: 'monthly',
            priority: 0.7,
            lastmod: new Date().toISOString(),
          });
        }

        for (const ind of INDUSTRIES) {
          const indSlug = createSlug(ind);
          result.push({
            loc: `/industries/${indSlug}/${citySlug}/${localitySlug}`,
            changefreq: 'monthly',
            priority: 0.7,
            lastmod: new Date().toISOString(),
          });
        }

        for (const brand of BRANDS) {
          const brandSlug = createSlug(brand);
          result.push({
            loc: `/brands/${brandSlug}/${citySlug}/${localitySlug}`,
            changefreq: 'monthly',
            priority: 0.7,
            lastmod: new Date().toISOString(),
          });
        }

        for (const issue of REPAIR_ISSUES) {
          result.push({
            loc: `/repairs/${issue}/${citySlug}/${localitySlug}`,
            changefreq: 'monthly',
            priority: 0.7,
            lastmod: new Date().toISOString(),
          });
        }
      }
    }

    // 4. Query-Based URLs (Permutations)
    const topServices = SERVICES.slice(0, 100); // Top 100 services
    
    for (const city of CITIES) {
      const citySlug = createSlug(city);
      const localities = localitiesData[city] || [];
      const topLocalities = localities.slice(0, 50); // Top 50 localities per city
      
      for (const locality of topLocalities) {
        const localitySlug = createSlug(locality);
        
        for (const service of topServices) {
          const serviceSlug = createSlug(service);
          
          // Pattern 1: service-in-locality-city
          result.push({
            loc: `/${serviceSlug}-in-${localitySlug}-${citySlug}`,
            changefreq: 'monthly',
            priority: 0.75,
            lastmod: new Date().toISOString(),
          });
          
          // Pattern 2: service-locality-city
          result.push({
            loc: `/${serviceSlug}-${localitySlug}-${citySlug}`,
            changefreq: 'monthly',
            priority: 0.75,
            lastmod: new Date().toISOString(),
          });
          
          // Pattern 3: locality-service
          result.push({
            loc: `/${localitySlug}-${serviceSlug}`,
            changefreq: 'monthly',
            priority: 0.75,
            lastmod: new Date().toISOString(),
          });
        }
      }
    }

    return result;
  },
}
