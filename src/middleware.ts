import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { SERVICES } from '@/data/services';

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname;

  // Skip if it's already a known path or static file
  if (
    pathname.startsWith('/_next') ||
    pathname.startsWith('/api') ||
    pathname.includes('.') ||
    pathname === '/'
  ) {
    return NextResponse.next();
  }

  // Check if it's an SEO-friendly route (contains '-in-' or ends with '-delhi')
  if (pathname.includes('-in-') || pathname.endsWith('-delhi')) {
    const slug = pathname.slice(1); // Remove leading /
    const parsed = parseSEORoute(slug);

    if (parsed) {
      // Rewrite to the location/service pattern
      const url = request.nextUrl.clone();
      url.pathname = `/${parsed.location}/${parsed.service}`;
      return NextResponse.rewrite(url);
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
     */
    '/((?!_next/static|_next/image|favicon.ico|.*\\..*|api).*)',
  ],
};
