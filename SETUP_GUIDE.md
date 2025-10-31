# Setup Guide - CCTV Services Website

## Quick Start (5 Minutes)

### Step 1: Update Business Information
Edit `src/config/business.ts`:

```typescript
export const BUSINESS_CONFIG = {
  name: "Delhi CCTV Experts", // ← YOUR BUSINESS NAME
  phone: "+918766203976",      // ← Already set
  whatsapp: "+918766203976",   // ← Already set
  email: "info@yourbusiness.com", // ← YOUR EMAIL
  address: "Delhi, India",     // ← YOUR ADDRESS
  
  // Update these URLs when decided
  social: {
    facebook: "https://facebook.com/yourbusiness",
    instagram: "https://instagram.com/yourbusiness",
    twitter: "",
    linkedin: "",
  },
};
```

### Step 2: Update Domain
Replace `https://www.yourbusiness.com` with your actual domain in:

1. **src/app/layout.tsx** (Line 31)
   ```typescript
   metadataBase: new URL("https://www.yourrealdomain.com"),
   ```

2. **src/app/sitemap.ts** (Line 6)
   ```typescript
   const baseUrl = 'https://www.yourrealdomain.com';
   ```

3. **src/app/robots.ts** (Line 9)
   ```typescript
   sitemap: 'https://www.yourrealdomain.com/sitemap.xml',
   ```

4. **src/utils/schema-generator.ts** (Lines 75, 76, 89, 90)
   ```typescript
   "url": "https://www.yourrealdomain.com",
   "logo": "https://www.yourrealdomain.com/logo.png",
   ```

### Step 3: Install & Run

```bash
# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) - Your site is live! 🎉

---

## Production Deployment

### Build the Project
```bash
npm run build
```

This will generate:
- ✅ All 12,000+ static pages
- ✅ Optimized assets
- ✅ Sitemap.xml
- ✅ Robots.txt

### Deploy Options

#### Option 1: Vercel (Recommended)
```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

#### Option 2: Netlify
```bash
# Install Netlify CLI
npm i -g netlify-cli

# Build and deploy
npm run build
netlify deploy --prod
```

#### Option 3: Any Hosting
Upload the `.next` folder and run:
```bash
npm start
```

---

## Testing Routes

After running `npm run dev`, test these URLs:

### Pattern 1: Location First
- http://localhost:3000/lajpat-nagar/installation-services
- http://localhost:3000/dwarka/repair-services
- http://localhost:3000/south-delhi/wireless-cctv-installation

### Pattern 2: Service First  
- http://localhost:3000/installation-services/lajpat-nagar
- http://localhost:3000/repair-services/dwarka
- http://localhost:3000/ip-camera-installation/south-delhi

### Pattern 3: SEO-Friendly (BEST FOR RANKING)
- http://localhost:3000/cctv-installation-in-lajpat-nagar-delhi
- http://localhost:3000/cctv-repair-in-dwarka-delhi
- http://localhost:3000/installation-services-in-south-delhi-delhi

### Location Pages
- http://localhost:3000/lajpat-nagar
- http://localhost:3000/south-west-delhi
- http://localhost:3000/east-delhi

### Homepage
- http://localhost:3000/

---

## API Integration (Optional but Recommended)

### Google Places API
Edit `src/utils/locality-api.ts`:

```typescript
export async function fetchLocalityDetails(locality: string, district: string): Promise<LocalityDetails> {
  // Replace with real API call
  const response = await fetch(
    `https://maps.googleapis.com/maps/api/place/textsearch/json?query=${locality}+${district}+Delhi&key=YOUR_API_KEY`
  );
  const data = await response.json();
  
  // Parse and return real data
  return {
    name: data.results[0].name,
    fullAddress: data.results[0].formatted_address,
    // ... map other fields
  };
}
```

This will provide:
- Real addresses
- Actual pincodes
- Genuine landmarks
- Map coordinates
- Population data

---

## Adding More Services

Edit `src/data/services.ts`:

```typescript
export const SERVICES: Service[] = [
  // ... existing services
  {
    slug: "your-new-service",
    name: "Your New Service",
    category: SERVICE_CATEGORIES.CCTV,
    icon: "🎥",
    description: "Description here",
    features: [
      "Feature 1",
      "Feature 2",
    ],
    priceRange: "₹5,000 - ₹50,000",
  },
];
```

This will automatically:
- Generate 150+ new pages (one per location)
- Add to sitemap
- Include in homepage
- Create all 3 routing patterns

---

## Adding More Locations

Edit `src/data/locations.ts`:

```typescript
export const LOCATIONS: Location[] = [
  // ... existing locations
  {
    slug: "your-new-area",
    name: "Your New Area",
    district: "District Name",
    localities: [
      "locality-1",
      "locality-2",
      "locality-3",
    ],
  },
];
```

This will automatically:
- Generate 20+ new pages (one per service)
- Add to sitemap
- Include in location grid
- Create all 3 routing patterns

---

## SEO Checklist

Before going live:

- [ ] Update business name in `src/config/business.ts`
- [ ] Update domain in all files (search for "yourbusiness.com")
- [ ] Add logo.png to `public/` folder
- [ ] Add favicon.ico to `public/` folder
- [ ] Get Google Search Console verification code
- [ ] Add verification code to `src/app/layout.tsx`
- [ ] Submit sitemap to Google Search Console
- [ ] Set up Google Analytics (optional)
- [ ] Test WhatsApp link (+918766203976)
- [ ] Test call link (+918766203976)
- [ ] Update social media links
- [ ] Add real business address

---

## Performance Optimization

Already implemented:
✅ Static Site Generation (SSG)
✅ Image optimization (Next.js Image)
✅ Module CSS (CSS Modules)
✅ Lazy loading
✅ Automatic code splitting

Additional optimizations:
- Add images to `public/` folder
- Use WebP format for images
- Enable caching on your host
- Use CDN for assets (Vercel/Netlify do this automatically)

---

## Support & Maintenance

### Regular Updates
- Update service prices in `src/data/services.ts`
- Add new testimonials
- Update FAQs based on customer questions
- Add new localities as you expand

### Monitoring
- Google Search Console - Track rankings
- Google Analytics - Track visitors
- Check WhatsApp/Call conversion rates

---

## Folder Structure

```
src/
├── app/
│   ├── [location]/           # Pattern 1: /location/service
│   ├── [service]/[location]/ # Pattern 2: /service/location
│   ├── [seo-route]/          # Pattern 3: /service-in-location-delhi
│   ├── layout.tsx            # Root layout with SEO meta
│   ├── page.tsx              # Homepage
│   ├── sitemap.ts            # Auto-generated sitemap
│   └── robots.ts             # Robots.txt
├── components/
│   ├── CTAButtons.tsx        # WhatsApp & Call buttons
│   └── FloatingCTA.tsx       # Sticky floating buttons
├── config/
│   └── business.ts           # Business configuration
├── data/
│   ├── locations.ts          # All Delhi locations
│   └── services.ts           # All services
└── utils/
    ├── content-generator.ts  # SEO content
    ├── locality-api.ts       # Location API integration
    └── schema-generator.ts   # JSON-LD schemas
```

---

## Questions?

- **Build failing?** Run `npm install` again
- **Routes not working?** Check `npm run build` for errors
- **Need more locations?** Edit `src/data/locations.ts`
- **Need more services?** Edit `src/data/services.ts`
- **WhatsApp not working?** Check phone number format in config

---

## Next Steps

1. ✅ Update business information
2. ✅ Test locally (`npm run dev`)
3. ✅ Build for production (`npm run build`)
4. ✅ Deploy to hosting
5. ✅ Submit sitemap to Google
6. ✅ Start getting leads! 🎉

**Your website is ready to rank #1 on Google for CCTV services in Delhi!**
