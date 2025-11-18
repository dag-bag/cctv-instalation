import { redirect } from "next/navigation";
import type { Metadata } from "next";
import { getServiceBySlug } from "@/data/services";

const DEFAULT_CITY_SLUG = "delhi";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ service: string; location: string }>;
}): Promise<Metadata> {
  const { service: serviceSlug, location } = await params;
  const service = getServiceBySlug(serviceSlug);

  if (!service) {
    return {};
  }

  return {
    title: service.seoTitle || `${service.name} | CCTV Installation Delhi`,
    description: service.seoDescription || service.description,
    keywords: service.keywords || [service.name, "installation", "services"],
    alternates: {
      canonical: `/services/${DEFAULT_CITY_SLUG}/${location}/${serviceSlug}`,
    },
  };
}

export default async function LegacyServiceLocationPage({
  params,
}: {
  params: Promise<{ service: string; location: string }>;
}) {
  const { service, location } = await params;
  redirect(`/services/${DEFAULT_CITY_SLUG}/${location}/${service}`);
}

export async function generateStaticParams() {
  return [];
}

