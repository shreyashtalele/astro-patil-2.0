// app/components/StructuredData.tsx
"use client";

import { SITE_CONFIG } from "@/app/data/config";

interface StructuredDataProps {
  type?: "Organization" | "ProfessionalService" | "WebSite";
}

export function StructuredData({
  type = "ProfessionalService",
}: StructuredDataProps) {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://astropatil.com";

  const data = {
    "@context": "https://schema.org",
    "@type": type,
    "@id": `${baseUrl}#organization`,
    name: SITE_CONFIG.name,
    description: SITE_CONFIG.meta.description,
    url: baseUrl,
    logo: `${baseUrl}/images/logo.png`,
    image: SITE_CONFIG.meta.ogImage,
    telephone: SITE_CONFIG.phone,
    email: SITE_CONFIG.email,
    address: {
      "@type": "PostalAddress",
      addressLocality: SITE_CONFIG.location.split(",")[0].trim(),
      addressRegion: SITE_CONFIG.location.split(",")[1]?.trim() || "",
      addressCountry: "India",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: "18.5204", // Pune latitude
      longitude: "73.8567", // Pune longitude
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday",
        ],
        opens: "09:00",
        closes: "21:00",
      },
    ],
    priceRange: "₹₹",
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "5.0",
      ratingCount: "5000",
      bestRating: "5.0",
    },
    sameAs: [
      SITE_CONFIG.instagram,
      SITE_CONFIG.whatsapp,
      SITE_CONFIG.astrotalk,
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(data),
      }}
    />
  );
}

// Service-specific structured data
export function ServiceStructuredData() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Service",
          name: "Vedic Astrology Consultation",
          provider: {
            "@type": "ProfessionalService",
            name: SITE_CONFIG.name,
            url: process.env.NEXT_PUBLIC_SITE_URL || "https://astropatil.com",
          },
          description: SITE_CONFIG.meta.description,
          serviceType: "Astrology Consultation",
          availableChannel: {
            "@type": "ServiceChannel",
            serviceUrl: SITE_CONFIG.whatsapp,
            availableLanguage: ["English", "Hindi", "Marathi"],
          },
        }),
      }}
    />
  );
}
