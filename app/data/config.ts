// app/data/config.ts

export const SITE_CONFIG = {
  name: "Astro Patil",
  phone: "+91 73858 03537",
  phoneFormatted: "+91 73858 03537",
  phoneRaw: "917385803537",

  email: "astropatilofficial@gmail.com",
  location: "Pune, Maharashtra, India",

  whatsapp: "https://wa.me/917385803537",
  whatsappMessage:
    "Hello Astro Patil, I would like personal astrology guidance.",

  instagram: "https://instagram.com/astropatil_",
  astrotalk: "https://chat.astrotalk.com/BnlV/j0phqq83?slug=Trishit",

  stats: {
    clients: "5,000+",
    experience: "9+ Years",
    legacy: "20+ Years",
    satisfaction: "100%",
  },

  meta: {
    title: "Astro Patil - Premium Vedic Astrology Consultations",
    description:
      "Unlock your destiny with personalized Vedic astrology consultations. 9+ years experience, 20+ year family legacy in astrology, palmistry, Vastu, and numerology.",
    keywords:
      "Vedic astrology, astrologer, palmistry, Vastu, numerology, career guidance, marriage compatibility, kundli reading, astrology consultation",
    ogImage: "/images/og-image.jpg",
  },

  services: [
    "Kundli Reading",
    "Marriage Compatibility",
    "Career Guidance",
    "Vastu Consultation",
    "Numerology",
    "Face Reading",
    "Palmistry",
    "Finance Guidance",
    "Muhurta",
    "Money & Growth",
  ],
  social: {
    instagram: "https://instagram.com/astropatil_",
    whatsapp: "https://wa.me/917385803537",
    astrotalk: "https://chat.astrotalk.com/BnlV/j0phqq83?slug=Trishit",
  },

  socialMeta: {
    facebookAppId: "", // Add if you have Facebook app
    twitterSite: "@astropatil",
    instagram: "astropatil_",
  },

  trustPills: [
    { icon: "Users", text: "5,000+ Consultations" },
    { icon: "ShieldCheck", text: "100% Confidential" },
    { icon: "Clock", text: "Quick Response" },
  ],
} as const;

export type SiteConfig = typeof SITE_CONFIG;
