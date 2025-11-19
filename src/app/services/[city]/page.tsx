import { notFound } from "next/navigation";
import Link from "next/link";
import { getLocationBySlug } from "@/data/locations";
import { CITY_CONFIG } from "@/data/cities";

const formatSlug = (slug: string): string =>
  slug
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");

export default function CityPage({
  params,
}: {
  params: { city: string };
}) {
  const location = getLocationBySlug(params.city);
  const cityConfig = CITY_CONFIG[params.city];

  if (!location || !cityConfig) notFound();

  return (
    <div
      style={{
        minHeight: "100vh",
        backgroundColor: "#f9fafb",
        fontFamily: "sans-serif",
        padding: "2rem 1rem",
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          backgroundColor: "white",
          borderRadius: "0.5rem",
          boxShadow: "0 1px 3px rgba(0,0,0,0.1)",
          padding: "2rem",
        }}
      >
        <h1
          style={{
            fontSize: "2rem",
            fontWeight: "bold",
            marginBottom: "1.5rem",
            color: "#1f2937",
          }}
        >
          Services in {location.name}
        </h1>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
            gap: "1.5rem",
            marginTop: "2rem",
          }}
        >
          {cityConfig.localities.map((localitySlug) => (
            <Link
              key={localitySlug}
              href={`/services/${params.city}/${localitySlug}`}
              style={{
                display: "block",
                padding: "1.5rem",
                backgroundColor: "#f3f4f6",
                borderRadius: "0.375rem",
                textDecoration: "none",
                color: "#111827",
                transition: "transform 0.2s, box-shadow 0.2s",
              }}
            >
              <h2
                style={{
                  fontSize: "1.25rem",
                  fontWeight: "600",
                  marginBottom: "0.5rem",
                }}
              >
                {formatSlug(localitySlug)}
              </h2>
              <p
                style={{
                  color: "#4b5563",
                  margin: 0,
                }}
              >
                View all services in {formatSlug(localitySlug)}, {location.name}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
