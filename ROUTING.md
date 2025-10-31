# CCTV Installation Website - Routing Structure

## Overview
This Next.js application uses a catch-all route pattern with `[[...slug]]` to handle multiple URL formats dynamically.

## Folder Structure

```
src/app/
├── page.tsx                    # Homepage (/)
├── [[...slug]]/               # Catch-all route for dynamic pages
│   ├── page.tsx               # Handles all dynamic routes
│   └── catch-all.module.css   # Styles for dynamic pages
├── service/                   # Alternative service route
│   └── [location]/page.tsx    # Service by location
└── layout.tsx                 # Root layout
```

## Supported URL Patterns

### 1. Homepage
- **URL**: `/`
- **File**: `src/app/page.tsx`
- **Description**: Main landing page with services overview and location listing

### 2. Location Pages
- **URL**: `/{location-slug}`
- **Examples**: 
  - `/central-delhi`
  - `/rohini`
  - `/karol-bagh`
- **Description**: Shows all CCTV services available in a specific location

### 3. Location + Service Pages (Pattern 1)
- **URL**: `/{location-slug}/{service-slug}`
- **Examples**:
  - `/central-delhi/installation-services`
  - `/rohini/repair-services`
- **Description**: Service details page for a specific location

### 4. Service + Location Pages (Pattern 2)
- **URL**: `/{service-slug}/{location-slug}`
- **Examples**:
  - `/installation-services/central-delhi`
  - `/repair-services/rohini`
- **Description**: Alternative URL pattern, shows same content as Pattern 1

### 5. SEO-Optimized Routes (Hyphenated)
- **URL**: `/{service}-in-{location}-delhi`
- **Examples**:
  - `/installation-services-in-rohini-delhi`
  - `/repair-services-in-karol-bagh-delhi`
- **Description**: SEO-friendly URLs with keywords, redirects to Pattern 1

### 6. Alternative SEO Routes
- **URL**: `/{service}-{location}-delhi`
- **Examples**:
  - `/installation-services-rohini-delhi`
  - `/repair-services-karol-bagh-delhi`
- **Description**: Another SEO format without "in" separator

## Route Parsing Logic

The `parseRoute()` function in `[[...slug]]/page.tsx` determines the route type:

1. **Priority 1**: Check for SEO routes (contains `-in-` or ends with `-delhi`)
2. **Priority 2**: Check for valid location slugs
3. **Priority 3**: Check for two-segment patterns (location/service or service/location)

## Hyphenated URL Handling

All slugs support hyphens naturally:
- **Locations**: `central-delhi`, `karol-bagh`, `connaught-place`
- **Services**: `installation-services`, `repair-services`, `maintenance-services`
- **SEO URLs**: Automatically parsed and matched to correct location + service

## Static Generation

All routes are statically generated at build time using `generateStaticParams()`:
- Generates all location pages
- Generates all location/service combinations
- Generates all SEO-optimized URL variants

## Metadata & SEO

Each route has dynamic metadata generation:
- **Title**: Customized per service + location
- **Description**: Location-specific service descriptions  
- **Keywords**: Auto-generated from service and location names
- **Structured Data**: JSON-LD schema for better SEO

## Navigation Flow

1. User lands on **Homepage** (/)
2. Selects a **Location** → Goes to `/{location}`
3. Views **Service Details** → Goes to `/{location}/{service}`
4. Can also use **SEO URLs** directly → Redirects to canonical route

## Examples of Complete User Journey

### Example 1: Central Delhi Installation
```
/ → /central-delhi → /central-delhi/installation-services
```

### Example 2: Direct SEO URL
```
/installation-services-in-central-delhi-delhi 
  → Resolves to /central-delhi/installation-services
```

### Example 3: Service-First Navigation
```
/ → /installation-services/central-delhi
  → Shows same content as /central-delhi/installation-services
```

## Benefits of This Structure

1. **SEO-Friendly**: Multiple URL patterns for better search ranking
2. **User-Friendly**: Clean, readable URLs
3. **Flexible**: Supports various navigation patterns
4. **Scalable**: Easy to add new locations and services
5. **Static**: All pages pre-generated for fast loading

## Adding New Locations or Services

1. Add to `src/data/locations.ts` or `src/data/services.ts`
2. Run `npm run build`
3. All routes automatically generated

## Technical Notes

- Uses Next.js 14+ App Router
- TypeScript for type safety
- CSS Modules for styling
- Dynamic metadata generation
- Structured data (Schema.org) included
