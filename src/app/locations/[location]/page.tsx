import { notFound } from 'next/navigation';
import { getLocationBySlug, getLocalityDetails } from '@/data/locations';
import { SERVICES, SERVICE_CATEGORIES } from '@/data/services';
import Link from 'next/link';
import { Metadata } from 'next';

export async function generateMetadata({
  params,
}: {
  params: { location: string };
}): Promise<Metadata> {
  const location = getLocationBySlug(params.location) || getLocalityDetails(params.location);
  
  if (!location) {
    return {};
  }

  const locationName = 'name' in location ? location.name : location.locality;
  const title = `CCTV & Security Services in ${locationName} | CCTV Installation ${locationName}`;
  const description = `Professional CCTV installation and security services in ${locationName}. Get free quotes and expert advice for your home or business security needs.`;
  
  return {
    title,
    description,
    keywords: [
      `CCTV installation ${locationName}`,
      `security cameras ${locationName}`,
      `home security ${locationName}`,
      `business security ${locationName}`,
      `CCTV services near me`,
    ],
    alternates: {
      canonical: `/locations/${params.location}`,
    },
  };
}

export default function LocationPage({
  params,
}: {
  params: { location: string };
}) {
  const location = getLocationBySlug(params.location) || getLocalityDetails(params.location);

  if (!location) {
    notFound();
  }

  const locationName = 'name' in location ? location.name : location.locality;
  const locationServices = SERVICES.filter(service => 
    !service.availableLocations || 
    service.availableLocations.includes(params.location) ||
    service.isLocationSpecific
  );

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Security & CCTV Services in {locationName}</h1>
      
      <div className="prose max-w-none mb-12">
        <p className="text-lg mb-6">
          Professional security and CCTV installation services in {locationName}. We provide comprehensive security solutions for homes and businesses, including CCTV cameras, alarm systems, and access control.
        </p>
      </div>

      <div className="mb-12">
        <h2 className="text-2xl font-semibold mb-6">Our Services in {locationName}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {locationServices.map((service) => (
            <Link 
              key={service.slug}
              href={`/services/${service.slug}/${params.location}`}
              className="block p-6 border border-gray-200 rounded-lg hover:shadow-md transition-shadow"
            >
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{service.name}</h3>
              <p className="text-gray-600">{service.description}</p>
              <div className="mt-4 text-blue-600 font-medium">Learn more →</div>
            </Link>
          ))}
        </div>
      </div>

      <div className="bg-blue-50 p-8 rounded-lg">
        <h2 className="text-2xl font-semibold mb-4">Why Choose Us in {locationName}?</h2>
        <ul className="space-y-3 mb-6">
          <li className="flex items-start">
            <span className="text-green-500 mr-2">✓</span>
            <span>Local experts with extensive experience in {locationName}</span>
          </li>
          <li className="flex items-start">
            <span className="text-green-500 mr-2">✓</span>
            <span>Free, no-obligation quotes and site surveys</span>
          </li>
          <li className="flex items-start">
            <span className="text-green-500 mr-2">✓</span>
            <span>Professional installation by certified technicians</span>
          </li>
          <li className="flex items-start">
            <span className="text-green-500 mr-2">✓</span>
            <span>24/7 emergency support and maintenance</span>
          </li>
        </ul>
        <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors">
          Get a Free Quote for {locationName}
        </button>
      </div>
    </div>
  );
}

export async function generateStaticParams() {
  return []; // This will be populated by the build process
}
