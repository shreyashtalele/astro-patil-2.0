// app/layout.tsx
import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import StarryBackground from "@/app/components/StarryBackground";
import { PerformanceTracker } from "@/app/components/PerformanceTracker";
// ✅ Remove this import - we're defining it locally
// import { StructuredData } from "@/app/components/StructuredData";
import { SITE_CONFIG } from "@/app/data/config";

// ✅ FONT CONFIGURATION - ONLY Inter (removed unused Playfair_Display)
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap", // ✅ Critical: prevents FOIT
  preload: true,
  weight: ["400", "500", "600", "700"],
  fallback: ["system-ui", "sans-serif"], // ✅ Fallback fonts
});

// ✅ VIEWPORT - Allow zoom for accessibility
export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5, // ✅ Allow zoom
  userScalable: true, // ✅ Allow zoom
};

// ✅ METADATA
export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL || "https://astropatil.com",
  ),

  title: {
    default: SITE_CONFIG.meta.title,
    template: `%s | ${SITE_CONFIG.name}`,
  },

  description: SITE_CONFIG.meta.description,
  keywords: SITE_CONFIG.meta.keywords,

  authors: [{ name: SITE_CONFIG.name }],
  creator: SITE_CONFIG.name,
  publisher: SITE_CONFIG.name,

  openGraph: {
    title: SITE_CONFIG.meta.title,
    description: SITE_CONFIG.meta.description,
    url: process.env.NEXT_PUBLIC_SITE_URL || "https://astropatil.com",
    siteName: SITE_CONFIG.name,
    images: [
      {
        url: SITE_CONFIG.meta.ogImage,
        width: 1200,
        height: 630,
        alt: SITE_CONFIG.name,
      },
    ],
    locale: "en_IN",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: SITE_CONFIG.meta.title,
    description: SITE_CONFIG.meta.description,
    images: [SITE_CONFIG.meta.ogImage],
    creator: `@${SITE_CONFIG.name}`,
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },

  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_VERIFICATION || "",
  },

  alternates: {
    canonical: process.env.NEXT_PUBLIC_SITE_URL || "https://astropatil.com",
  },
};

// ✅ RENAMED: StructuredDataComponent to avoid conflict
function StructuredDataComponent() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ProfessionalService",
          name: SITE_CONFIG.name,
          description: SITE_CONFIG.meta.description,
          image: SITE_CONFIG.meta.ogImage,
          telephone: SITE_CONFIG.phone,
          email: SITE_CONFIG.email,
          address: {
            "@type": "PostalAddress",
            addressLocality: SITE_CONFIG.location.split(",")[0].trim(),
            addressRegion: SITE_CONFIG.location.split(",")[1]?.trim() || "",
            addressCountry: "India",
          },
          openingHours: "Mo-Su 09:00-21:00",
          priceRange: "₹₹",
          aggregateRating: {
            "@type": "AggregateRating",
            ratingValue: "5.0",
            reviewCount: "5000",
          },
          sameAs: [
            SITE_CONFIG.instagram,
            "https://chat.astrotalk.com/BnlV/j0phqq83?slug=Trishit",
          ],
        }),
      }}
    />
  );
}

// ✅ Analytics Component (Conditional)
function Analytics() {
  const gaId = process.env.NEXT_PUBLIC_GA_ID;

  if (!gaId || process.env.NODE_ENV !== "production") {
    return null;
  }

  // Dynamic import for Google Analytics
  const GoogleAnalytics = require("@next/third-parties/google").GoogleAnalytics;
  return <GoogleAnalytics gaId={gaId} />;
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable}`}>
      <head>
        {/* ✅ PRELOAD LCP HERO IMAGE - Critical for LCP improvement */}
        <link
          rel="preload"
          as="image"
          href="/images/Image.webp"
          fetchPriority="high"
        />

        {/* ✅ PRELOAD CRITICAL FONT - Prevents FOIT */}
        <link
          rel="preload"
          as="font"
          href="/_next/static/media/2a65768255d6b625-s.p.3u4lli0-axodc.woff2"
          type="font/woff2"
          crossOrigin="anonymous"
        />

        {/* ✅ PRELOAD SECONDARY FONT WEIGHT */}
        <link
          rel="preload"
          as="font"
          href="/_next/static/media/83afe278b6a6bb3c-s.p.2bn3s6zvc0dyp.woff2"
          type="font/woff2"
          crossOrigin="anonymous"
        />
      </head>
      <body className={`${inter.className} relative`}>
        {/* ✅ Renamed to StructuredDataComponent */}
        <StructuredDataComponent />

        {/* Performance Tracker */}
        <PerformanceTracker />

        {/* The Animated Stars Background */}
        <StarryBackground />

        {/* Main Content */}
        <main className="relative z-10 flex flex-col min-h-screen">
          {children}
        </main>

        {/* Google Analytics */}
        <Analytics />
      </body>
    </html>
  );
}
