import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { SERVICES, getServiceBySlug } from '@/data/services';
import { getLocationBySlug, getLocalityDetails } from '@/data/locations';

// List of old paths that should be redirected to new paths
const redirects: Array<{ from: string; to: string }> = [
  // Old service paths
  { from: '^/installation-services$', to: '/services/installation-services' },
  { from: '^/repair-services$', to: '/services/repair-services' },
  { from: '^/maintenance-services$', to: '/services/maintenance-services' },
  
  // Old location paths
  { from: '^/service/([^/]+)$', to: '/locations/$1' },
  
  // Old service+location paths
  { from: '^/service/([^/]+)/([^/]+)$', to: '/services/$2/$1' },
];

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const hostname = request.headers.get('host') || 'www.cctvinstallationdelhi.in';
  
  // Skip if it's already a known path or static file
  if (
    pathname.startsWith('/_next') ||
    pathname.startsWith('/api') ||
    pathname.includes('.') ||
    pathname === '/'
  ) {
    return NextResponse.next();
  }

  // Handle www redirect
  if (hostname === 'cctvinstallationdelhi.in') {
    const url = new URL(`https://www.${hostname}${pathname}`);
    return NextResponse.redirect(url, 301);
  }

  // Handle HTTP to HTTPS redirect
  if (request.headers.get('x-forwarded-proto') !== 'https' && process.env.NODE_ENV === 'production') {
    const url = new URL(`https://${hostname}${pathname}`);
    return NextResponse.redirect(url, 301);
  }

  // Handle old URL redirects
  for (const redirect of redirects) {
    const regex = new RegExp(redirect.from);
    const match = pathname.match(regex);
    
    if (match) {
      const to = redirect.to.replace(/\$\d+/g, (group) => {
        const index = parseInt(group.slice(1), 10) - 1;
        return match[index + 1] || '';
      });
      
      const url = new URL(to, 'https://' + hostname);
      return NextResponse.redirect(url, 301);
    }
  }

  // Handle service/location routes
  const serviceLocationMatch = pathname.match(/^\/services\/([^/]+)(?:\/([^/]+))?/);
  if (serviceLocationMatch) {
    const [, serviceSlug, locationSlug] = serviceLocationMatch;
    const service = getServiceBySlug(serviceSlug);
    
    // If service doesn't exist, redirect to services page
    if (!service) {
      return NextResponse.redirect(new URL('/services', 'https://' + hostname), 301);
    }
    
    // If location is provided but not valid
    if (locationSlug) {
      const location = getLocationBySlug(locationSlug) || getLocalityDetails(locationSlug);
      if (!location) {
        // If location doesn't exist, redirect to service page
        return NextResponse.redirect(new URL(`/services/${serviceSlug}`, 'https://' + hostname), 301);
      }
    }
  }

  // Handle SEO-friendly URLs (e.g., cctv-installation-in-karol-bagh)
  if (pathname.includes('-in-') || pathname.endsWith('-delhi')) {
    const slug = pathname.slice(1); // Remove leading /
    const parsed = parseSEORoute(slug);

    if (parsed) {
      // Redirect to the new URL structure
      const url = new URL(`/services/${parsed.service}/${parsed.location}`, 'https://' + hostname);
      return NextResponse.redirect(url, 301);
    }
  }

  return NextResponse.next();
}

function parseSEORoute(seoRoute: string): { service: string; location: string } | null {
  const parts = seoRoute.split('-');

  // Remove 'delhi' from the end if present
  if (parts[parts.length - 1] === 'delhi') {
    parts.pop();
  }

  // Find 'in' separator
  const inIndex = parts.indexOf('in');

  if (inIndex !== -1) {
    // Pattern: service-in-location
    const serviceParts = parts.slice(0, inIndex);
    const locationParts = parts.slice(inIndex + 1);

    return {
      service: serviceParts.join('-'),
      location: locationParts.join('-'),
    };
  }

  // Try to match known service patterns
  for (const service of SERVICES) {
    if (seoRoute.startsWith(service.slug)) {
      const location = seoRoute
        .substring(service.slug.length + 1)
        .replace(/-delhi$/, '');
      return {
        service: service.slug,
        location: location,
      };
    }
  }

  return null;
}

export const config = {
  matcher: [
    /*
     * Match all request paths except:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - public files (public folder)
     * - API routes
     * - Already rewritten paths
     */
    '/((?!_next/static|_next/image|favicon.ico|.*\\.|api/).*)',
  ],
};
