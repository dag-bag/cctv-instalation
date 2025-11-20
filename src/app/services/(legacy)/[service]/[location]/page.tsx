import { redirect, notFound } from "next/navigation";
import type { Metadata } from "next";
import { getServiceBySlug } from "@/data/services";
import { getLocationBySlug, getLocalityDetails } from "@/data/locations";

const DEFAULT_CITY_SLUG = "delhi";

type Params = {
  service: string;
  location: string;
};

const resolveCityAndLocality = (slug: string) => {
  const localityDetails = getLocalityDetails(slug);
  if (localityDetails) {
    return {
      citySlug: localityDetails.district.slug,
      localitySlug: localityDetails.locality,
    };
  }

  const location = getLocationBySlug(slug);
  if (location) {
    return {
      citySlug: location.slug,
      localitySlug: location.slug,
    };
  }

  return null;
};

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { service: serviceSlug, location } = await params;
  const service = getServiceBySlug(serviceSlug);

  if (!service) {
    return {};
  }

  return {
    title: service.seoTitle || `${service.name} | CCTV Installation Delhi`,
    description: service.seoDescription || service.description,
    alternates: {
      canonical: `/services/${DEFAULT_CITY_SLUG}/${location}/${serviceSlug}`,
    },
  };
}

export default async function LegacyServiceLocationPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { service: serviceSlug, location } = await params;
  const service = getServiceBySlug(serviceSlug);

  if (!service) {
    notFound();
  }

  const target = resolveCityAndLocality(location) || {
    citySlug: DEFAULT_CITY_SLUG,
    localitySlug: location,
  };

  redirect(`/services/${target.citySlug}/${target.localitySlug}/${serviceSlug}`);
}

export async function generateStaticParams() {
  return [];
}

