import { notFound } from 'next/navigation';
import { getServiceBySlug } from '@/data/services';
import { getLocationBySlug, getLocalityDetails } from '@/data/locations';
import { Metadata } from 'next';

export async function generateMetadata({
  params,
}: {
  params: { service: string; location: string };
}): Promise<Metadata> {
  const service = getServiceBySlug(params.service);
  const location = getLocationBySlug(params.location) || getLocalityDetails(params.location);
  
  if (!service || !location) {
    return {};
  }

  const locationName = 'name' in location ? location.name : location.locality;
  const title = `${service.name} in ${locationName} | CCTV Installation ${locationName}`;
  const description = `Professional ${service.name} services in ${locationName}. ${service.description}`;
  
  const keywords = [
    ...(service.keywords || []),
    locationName,
    `${service.name} in ${locationName}`,
    `${service.name} near me`,
  ];

  return {
    title,
    description,
    keywords,
    alternates: {
      canonical: `/services/${service.slug}/${params.location}`,
    },
  };
}

export default function ServiceLocationPage({
  params,
}: {
  params: { service: string; location: string };
}) {
  const service = getServiceBySlug(params.service);
  const location = getLocationBySlug(params.location) || getLocalityDetails(params.location);

  if (!service || !location) {
    notFound();
  }

  const locationName = 'name' in location ? location.name : location.locality;

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">
        {service.name} in {locationName}
      </h1>
      
      <div className="prose max-w-none">
        <p className="text-lg mb-6">
          Professional {service.name.toLowerCase()} services in {locationName}. {service.description}
        </p>
        
        {service.features && service.features.length > 0 && (
          <div className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Our {service.name} Services Include:</h2>
            <ul className="list-disc pl-6 space-y-2">
              {service.features.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
          </div>
        )}
        
        <div className="bg-blue-50 p-6 rounded-lg mb-8">
          <h2 className="text-2xl font-semibold mb-4">
            Need {service.name} in {locationName}?
          </h2>
          <p className="mb-4">
            Contact us today for a free consultation and quote. Our expert team is ready to help with all your {service.name.toLowerCase()} needs in {locationName}.
          </p>
          <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors">
            Get a Free Quote
          </button>
        </div>
        
        {service.faqs && service.faqs.length > 0 && (
          <div className="mt-12">
            <h2 className="text-2xl font-semibold mb-6">Frequently Asked Questions</h2>
            <div className="space-y-6">
              {service.faqs.map((faq, index) => (
                <div key={index} className="border-b border-gray-200 pb-6">
                  <h3 className="text-xl font-medium mb-2">{faq.question}</h3>
                  <p className="text-gray-700">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export async function generateStaticParams() {
  return []; // This will be populated by the build process
}
