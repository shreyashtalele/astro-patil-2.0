import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import StarryBackground from "@/app/components/StarryBackground";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Premium Astrology Consultations",
  description: "Unlock your destiny with premium astrological guidance.",
};
export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} relative`}>
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
