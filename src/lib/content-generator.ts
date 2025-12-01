// Detect URL pattern type
export function detectPattern(slug: string): 'installation' | 'repair' | 'brand' | 'generic' {
  const lower = slug.toLowerCase();
  
  // Brand pattern: starts with brand name
  const brands = ['hikvision', 'cp-plus', 'dahua', 'godrej', 'yale', 'samsung', 'honeywell', 'bosch', 'panasonic', 'sony'];
  if (brands.some(brand => lower.startsWith(brand))) {
    return 'brand';
  }
  
  // Repair/problem pattern
  const repairKeywords = ['repair', 'fix', 'troubleshooting', 'not-working', 'no-signal', 'blur', 'password-reset', 'maintenance', 'amc'];
  if (repairKeywords.some(keyword => lower.includes(keyword))) {
    return 'repair';
  }
  
  // Installation pattern (default for most services)
  const installKeywords = ['installation', 'install', 'setup', 'configuration'];
  if (installKeywords.some(keyword => lower.includes(keyword))) {
    return 'installation';
  }
  
  return 'generic';
}

// Get service category
export function getServiceCategory(service: string): 'cctv' | 'lock' | 'dvr' | 'other' {
  const lower = service.toLowerCase();
  
  if (lower.includes('lock') || lower.includes('door') || lower.includes('access control')) {
    return 'lock';
  }
  
  if (lower.includes('dvr') || lower.includes('nvr') || lower.includes('recording')) {
    return 'dvr';
  }
  
  if (lower.includes('cctv') || lower.includes('camera') || lower.includes('surveillance')) {
    return 'cctv';
  }
  
  return 'other';
}

// Generate installation-focused content
export function generateInstallationContent(service: string, locality: string, city: string) {
  const category = getServiceCategory(service);
  
  return {
    heroTitle: `Professional ${service} in ${locality}, ${city}`,
    heroSubtitle: `Expert installation services with same-day availability. 500+ successful installations in ${locality}. Free consultation & quote.`,
    
    sections: [
      {
        title: `Why Choose Our ${service} in ${locality}?`,
        content: `Residents and businesses in ${locality}, ${city} trust us for professional ${service.toLowerCase()}. We combine technical expertise with local knowledge to deliver installations that meet your specific security needs.`,
        points: [
          `Certified technicians with 10+ years experience`,
          `Same-day service available in ${locality}`,
          `ISI marked equipment and cables`,
          `1-year installation warranty`,
          `Free site survey in ${locality}`
        ]
      },
      {
        title: `Our ${service} Process`,
        content: `We follow a systematic approach to ensure perfect installation every time:`,
        steps: [
          {
            number: 1,
            title: 'Free Consultation',
            description: `Our expert visits your ${locality} location to assess requirements and provide a detailed quote.`
          },
          {
            number: 2,
            title: 'Equipment Selection',
            description: `We recommend the best equipment based on your budget and security needs.`
          },
          {
            number: 3,
            title: 'Professional Installation',
            description: `Our certified technicians complete the installation with minimal disruption to your routine.`
          },
          {
            number: 4,
            title: 'Testing & Training',
            description: `We thoroughly test the system and train you on how to use it effectively.`
          },
          {
            number: 5,
            title: 'After-Sales Support',
            description: `We provide ongoing support and maintenance services in ${locality}.`
          }
        ]
      },
      {
        title: `What's Included in ${service}?`,
        content: `Our comprehensive ${service.toLowerCase()} package includes:`,
        points: category === 'cctv' ? [
          `High-quality cameras (2MP/5MP/8MP options)`,
          `DVR/NVR with required storage`,
          `All cables and connectors`,
          `Professional wiring and installation`,
          `Mobile app configuration for remote viewing`,
          `1-year warranty on equipment and labor`
        ] : category === 'lock' ? [
          `Premium digital lock unit`,
          `Professional installation on any door type`,
          `Multiple access methods (fingerprint, PIN, card)`,
          `Emergency backup key`,
          `Mobile app setup (if applicable)`,
          `1-year warranty on product and installation`
        ] : [
          `Quality equipment from trusted brands`,
          `Professional installation`,
          `Complete configuration`,
          `User training`,
          `Warranty coverage`
        ]
      }
    ],
    
    localContext: {
      title: `Serving ${locality} and Nearby Areas`,
      content: `We have completed numerous ${service.toLowerCase()} projects in ${locality} and surrounding areas of ${city}. Our local presence ensures quick response times and personalized service.`
    },
    
    faqAdditions: [
      {
        question: `How long does ${service} take in ${locality}?`,
        answer: `For a standard installation in ${locality}, the process typically takes 4-6 hours depending on the complexity. We can complete most installations in a single visit.`
      },
      {
        question: `Do you provide same-day ${service} in ${locality}?`,
        answer: `Yes, we offer same-day installation services in ${locality} subject to technician availability. Contact us early in the day for same-day service.`
      },
      {
        question: `What areas near ${locality} do you cover?`,
        answer: `We serve ${locality} and all surrounding areas in ${city}. Our service area covers the entire ${city} region.`
      },
      {
        question: `Do you offer warranty on ${service} in ${locality}?`,
        answer: `Yes, we provide warranty on installation and equipment as applicable. Details are shared with your quote for ${locality}.`
      },
      {
        question: `Can you visit ${locality} for a free site survey?`,
        answer: `We provide a free site survey in ${locality} to assess camera positions, wiring routes, and network readiness.`
      }
    ]
  };
}

// Generate repair/problem-focused content
export function generateRepairContent(service: string, locality: string, city: string) {
  return {
    heroTitle: `Fast ${service} in ${locality}, ${city}`,
    heroSubtitle: `Emergency repair services available 24/7. Expert technicians reach ${locality} within 2 hours. Get your system back online quickly.`,
    
    sections: [
      {
        title: `Common Issues We Fix in ${locality}`,
        content: `Our technicians have extensive experience resolving all types of security system problems in ${locality}:`,
        points: [
          `Camera not working or showing "No Signal"`,
          `Blurry or distorted video quality`,
          `DVR/NVR not recording properly`,
          `Mobile app not connecting`,
          `Password reset and recovery`,
          `Cable damage or connection issues`
        ]
      },
      {
        title: `Our ${service} Solutions`,
        content: `We provide comprehensive repair services to get your system working perfectly:`,
        steps: [
          {
            number: 1,
            title: 'Quick Diagnosis',
            description: `Our technician identifies the root cause of the problem at your ${locality} location.`
          },
          {
            number: 2,
            title: 'Transparent Quote',
            description: `We provide a clear quote before starting any repair work.`
          },
          {
            number: 3,
            title: 'Expert Repair',
            description: `Using genuine parts and professional tools, we fix the issue efficiently.`
          },
          {
            number: 4,
            title: 'Testing',
            description: `We thoroughly test the system to ensure everything works perfectly.`
          },
          {
            number: 5,
            title: 'Warranty',
            description: `All repairs come with a warranty for your peace of mind.`
          }
        ]
      },
      {
        title: `Emergency Service in ${locality}`,
        content: `Security issues can't wait. That's why we offer:`,
        points: [
          `24/7 emergency support`,
          `2-hour response time in ${locality}`,
          `Same-day repair completion`,
          `Upfront pricing with no hidden charges`,
          `Genuine spare parts only`
        ]
      }
    ],
    
    localContext: {
      title: `Trusted Repair Service in ${locality}`,
      content: `We've been serving ${locality} for years, building a reputation for fast, reliable repairs. Our technicians know the area well and can reach you quickly.`
    },
    
    faqAdditions: [
      {
        question: `How quickly can you reach ${locality} for repairs?`,
        answer: `We typically reach ${locality} within 2 hours of your call. For emergencies, we prioritize and can often arrive even faster.`
      },
      {
        question: `Do you provide warranty on repairs in ${locality}?`,
        answer: `Yes, all our repair work in ${locality} comes with a warranty. The warranty period depends on the type of repair and parts used.`
      },
      {
        question: `Can you repair all brands in ${locality}?`,
        answer: `Yes, our technicians are trained to repair all major brands including Hikvision, CP Plus, Dahua, and others commonly used in ${locality}.`
      },
      {
        question: `Do you provide same-day repair in ${locality}?`,
        answer: `Yes, we aim to provide same-day repair in ${locality} whenever scheduling allows.`
      },
      {
        question: `Can you fix mobile view and remote access issues?`,
        answer: `We resolve DVR/NVR mobile view problems, router port forwarding, and app configuration so you can view cameras remotely.`
      }
    ]
  };
}

// Generate brand-focused content
export function generateBrandContent(service: string, locality: string, city: string, brand: string) {
  return {
    heroTitle: `${brand} ${service} in ${locality}, ${city}`,
    heroSubtitle: `Authorized ${brand} installation and service partner. Genuine products, expert installation, full warranty support in ${locality}.`,
    
    sections: [
      {
        title: `Why Choose ${brand} in ${locality}?`,
        content: `${brand} is a trusted name in security solutions, and we're proud to be an authorized partner serving ${locality}:`,
        points: [
          `100% genuine ${brand} products`,
          `Authorized installation partner`,
          `Full manufacturer warranty`,
          `Expert technicians trained on ${brand} systems`,
          `Competitive pricing in ${locality}`
        ]
      },
      {
        title: `${brand} Product Range`,
        content: `We offer the complete ${brand} product lineup for ${locality} customers:`,
        points: brand.toLowerCase() === 'hikvision' ? [
          `2MP to 8MP IP cameras`,
          `ColorVu night vision cameras`,
          `AcuSense AI-powered cameras`,
          `Network Video Recorders (NVR)`,
          `Mobile DVR solutions`
        ] : brand.toLowerCase() === 'cp-plus' ? [
          `HD CCTV cameras (2MP to 8MP)`,
          `WiFi cameras for home use`,
          `DVR and NVR systems`,
          `Video door phones`,
          `Complete security packages`
        ] : [
          `Complete range of security cameras`,
          `Recording systems (DVR/NVR)`,
          `Access control solutions`,
          `Integrated security systems`
        ]
      },
      {
        title: `${brand} Installation in ${locality}`,
        content: `Our ${brand}-certified technicians ensure perfect installation:`,
        steps: [
          {
            number: 1,
            title: 'Product Selection',
            description: `We help you choose the right ${brand} products for your ${locality} property.`
          },
          {
            number: 2,
            title: 'Professional Setup',
            description: `Installation following ${brand} guidelines and best practices.`
          },
          {
            number: 3,
            title: 'Configuration',
            description: `Complete system configuration including mobile app setup.`
          },
          {
            number: 4,
            title: 'Warranty Registration',
            description: `We register your ${brand} products for full warranty coverage.`
          }
        ]
      }
    ],
    
    localContext: {
      title: `${brand} Service Center in ${locality}`,
      content: `As an authorized ${brand} partner, we provide complete sales, installation, and after-sales service in ${locality}. Trust us for genuine products and expert support.`
    },
    
    faqAdditions: [
      {
        question: `Are your ${brand} products genuine?`,
        answer: `Yes, we source all ${brand} products directly from authorized distributors. Every product comes with a genuine ${brand} warranty.`
      },
      {
        question: `Do you provide ${brand} warranty support in ${locality}?`,
        answer: `Absolutely. As an authorized partner, we handle all ${brand} warranty claims for customers in ${locality}.`
      },
      {
        question: `What's the price difference between ${brand} and other brands in ${locality}?`,
        answer: `${brand} products are competitively priced. We offer the best rates in ${locality} with flexible payment options.`
      }
    ]
  };
}
