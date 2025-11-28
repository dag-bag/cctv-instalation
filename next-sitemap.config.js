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

    // 1. City Pages
    for (const city of CITIES) {
      const citySlug = createSlug(city);
      result.push({
        loc: `/services/${citySlug}`,
        changefreq: 'weekly',
        priority: 0.9,
        lastmod: new Date().toISOString(),
      });

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
      }
    }

    return result;
  },
}
