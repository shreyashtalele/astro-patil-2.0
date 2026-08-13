// app/layout.tsx
import type { Metadata, Viewport } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import StarryBackground from "@/app/components/StarryBackground";
import { PerformanceTracker } from "@/app/components/PerformanceTracker";
import { StructuredData } from "@/app/components/StructuredData";
import { SITE_CONFIG } from "@/app/data/config";

// Font configuration
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
  preload: true,
  weight: ["400", "500", "600", "700"],
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-heading",
  display: "swap",
  preload: true,
  weight: ["400", "600", "700"],
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5, // ✅ Allow zoom for accessibility
  userScalable: true, // ✅ Allow zoom for accessibility
};

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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body className={`${inter.className} relative`}>
        {/* Structured Data */}
        <StructuredData />

        {/* Performance Tracker */}
        <PerformanceTracker />

        {/* The Animated Stars Background */}
        <StarryBackground />

        {/* Main Content */}
        <main className="relative z-10 flex flex-col min-h-screen">
          {children}
        </main>
      </body>
    </html>
  );
}
