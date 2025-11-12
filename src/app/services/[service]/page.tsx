import { notFound } from 'next/navigation';
import { getServiceBySlug } from '@/data/services';
import { Metadata } from 'next';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ service: string }>;
}): Promise<Metadata> {
  const { service: serviceSlug } = await params;
  const service = getServiceBySlug(serviceSlug);
  
  if (!service) {
    return {};
  }

  const title = service.seoTitle || `${service.name} | CCTV Installation Delhi`;
  const description = service.seoDescription || service.description;
  const keywords = service.keywords || [service.name, 'installation', 'services'];

  return {
    title,
    description,
    keywords,
    alternates: {
      canonical: `/services/${service.slug}`,
    },
  };
}

export default async function ServicePage({
  params,
}: {
  params: Promise<{ service: string }>;
}) {
  const { service: serviceSlug } = await params;
  const service = getServiceBySlug(serviceSlug);

  if (!service) {
    notFound();
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">{service.name}</h1>
      <p className="text-lg mb-6">{service.description}</p>
      
      {service.features && service.features.length > 0 && (
        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Features</h2>
          <ul className="list-disc pl-6">
            {service.features.map((feature, index) => (
              <li key={index} className="mb-2">{feature}</li>
            ))}
          </ul>
        </div>
      )}
      
      {service.priceRange && (
        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">Pricing</h2>
          <p>Starting from {service.priceRange}</p>
        </div>
      )}
      
      {service.faqs && service.faqs.length > 0 && (
        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {service.faqs.map((faq, index) => (
              <div key={index} className="border-b pb-4">
                <h3 className="text-xl font-medium mb-2">{faq.question}</h3>
                <p className="text-gray-600">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export async function generateStaticParams() {
  return []; // This will be populated by the build process
}
