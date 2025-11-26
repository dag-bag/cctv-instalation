import { permanentRedirect, notFound } from 'next/navigation';
import { parseSlug, createSlug } from '../../lib/seo-data';
import { Metadata } from 'next';

type Props = {
  params: Promise<{
    slug: string;
  }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const parsed = parseSlug(slug);

  if (!parsed) {
    return {
      title: 'Page Not Found',
    };
  }

  const { city, locality, service } = parsed;
  const canonicalUrl = `/services/${createSlug(city)}/${createSlug(locality)}/${createSlug(service)}`;

  return {
    title: `Redirecting to ${service} in ${locality}...`,
    alternates: {
      canonical: canonicalUrl,
    },
  };
}

export default async function FlatServicePage({ params }: Props) {
  const { slug } = await params;
  const parsed = parseSlug(slug);

  if (!parsed) {
    notFound();
  }

  const { city, locality, service } = parsed;
  
  // Redirect to the new canonical URL structure
  // /services/[city]/[locality]/[service]
  permanentRedirect(`/services/${createSlug(city)}/${createSlug(locality)}/${createSlug(service)}`);
}
