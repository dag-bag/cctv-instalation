import { notFound } from "next/navigation";
import Link from "next/link";
import { SERVICES, getServiceBySlug } from "@/data/services";
import {
  CITY_CONFIG,
  CITY_SLUGS,
  getCityLocalities,
  getCityName,
} from "@/data/cities";

const formatSlug = (slug: string): string =>
  slug
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");

export async function generateStaticParams() {
  return SERVICES.map((service) => ({ service: service.slug }));
}

export default function CatalogServicePage({
  params,
}: {
  params: { service: string };
}) {
  const service = getServiceBySlug(params.service);

  if (!service) {
    notFound();
  }

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#f8fafc",
        padding: "2rem 1rem",
        fontFamily: "Inter, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          background: "white",
          borderRadius: "16px",
          padding: "2.5rem",
          boxShadow: "0 20px 45px rgba(15, 23, 42, 0.08)",
        }}
      >
        <header style={{ marginBottom: "2.5rem" }}>
          <p
            style={{
              fontSize: "0.9rem",
              fontWeight: 600,
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              color: "#6366f1",
              marginBottom: "0.75rem",
            }}
          >
            Service Catalogue
          </p>
          <h1
            style={{
              fontSize: "2.25rem",
              fontWeight: 700,
              color: "#0f172a",
              marginBottom: "1rem",
            }}
          >
            {service.name}
          </h1>
          <p
            style={{
              color: "#475569",
              fontSize: "1.05rem",
              maxWidth: "720px",
              lineHeight: 1.7,
            }}
          >
            {service.description ||
              `Explore ${service.name.toLowerCase()} availability across Delhi NCR. Choose a city and locality to view hyper-local landing pages with pricing, FAQs, and contact options.`}
          </p>
        </header>

        <section style={{ marginBottom: "2.5rem" }}>
          <h2
            style={{
              fontSize: "1.5rem",
              fontWeight: 600,
              marginBottom: "1rem",
              color: "#0f172a",
            }}
          >
            Where we deliver {service.name.toLowerCase()}
          </h2>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))",
              gap: "1.25rem",
            }}
          >
            {CITY_SLUGS.map((citySlug) => {
              const cityName = getCityName(citySlug) || formatSlug(citySlug);
              const localities = getCityLocalities(citySlug).slice(0, 6);

              return (
                <div
                  key={citySlug}
                  style={{
                    border: "1px solid #e2e8f0",
                    borderRadius: "14px",
                    padding: "1.5rem",
                    background: "#ffffff",
                  }}
                >
                  <div style={{ marginBottom: "0.75rem" }}>
                    <p
                      style={{
                        fontSize: "0.825rem",
                        textTransform: "uppercase",
                        letterSpacing: "0.08em",
                        color: "#94a3b8",
                        marginBottom: "0.35rem",
                      }}
                    >
                      City
                    </p>
                    <Link
                      href={`/services/${citySlug}`}
                      style={{
                        fontSize: "1.25rem",
                        fontWeight: 600,
                        color: "#1d4ed8",
                        textDecoration: "none",
                      }}
                    >
                      {cityName}
                    </Link>
                  </div>

                  <div>
                    <p
                      style={{
                        fontSize: "0.85rem",
                        fontWeight: 600,
                        color: "#475569",
                        marginBottom: "0.5rem",
                      }}
                    >
                      Popular localities
                    </p>
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        gap: "0.35rem",
                      }}
                    >
                      {localities.map((localitySlug) => (
                        <Link
                          key={`${citySlug}-${localitySlug}`}
                          href={`/services/${citySlug}/${localitySlug}/${params.service}`}
                          style={{
                            display: "flex",
                            justifyContent: "space-between",
                            alignItems: "center",
                            padding: "0.55rem 0",
                            borderBottom: "1px solid #f1f5f9",
                            textDecoration: "none",
                            color: "#0f172a",
                          }}
                        >
                          <span>{formatSlug(localitySlug)}</span>
                          <span style={{ color: "#94a3b8" }}>→</span>
                        </Link>
                      ))}
                      <Link
                        href={`/services/${citySlug}`}
                        style={{
                          marginTop: "0.35rem",
                          fontSize: "0.9rem",
                          fontWeight: 600,
                          color: "#2563eb",
                          textDecoration: "none",
                        }}
                      >
                        View all localities
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {service.features?.length ? (
          <section>
            <h2
              style={{
                fontSize: "1.25rem",
                fontWeight: 600,
                marginBottom: "0.75rem",
                color: "#0f172a",
              }}
            >
              What&apos;s included
            </h2>
            <ul
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
                gap: "0.75rem",
              }}
            >
              {service.features.map((feature) => (
                <li
                  key={feature}
                  style={{
                    padding: "0.85rem 1rem",
                    borderRadius: "10px",
                    border: "1px solid #e2e8f0",
                    background: "#f8fafc",
                    fontSize: "0.95rem",
                    color: "#475569",
                  }}
                >
                  {feature}
                </li>
              ))}
            </ul>
          </section>
        ) : null}
      </div>
    </div>
  );
}

