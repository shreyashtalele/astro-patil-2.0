// app/data/about.ts

export interface AboutData {
  stats: {
    icon: string;
    value: string;
    label: string;
  }[];
  highlights: string[];
  bio: string[];
}

export const aboutData: AboutData = {
  stats: [
    { icon: "Clock", value: "9+", label: "Years Experience" },
    { icon: "Users", value: "5,000+", label: "Clients Guided" },
    { icon: "Sparkles", value: "20+", label: "Years Legacy" },
  ],
  highlights: [
    "Vedic birth chart & transit readings",
    "Marriage compatibility (Kundali Milan)",
    "Vastu analysis for home & office",
    "Numerology & name correction",
  ],
  bio: [
    "I'm a Software Engineer turned dedicated Astrologer — a rare combination that brings both rigorous analytical thinking and deep spiritual understanding to every consultation.",
    "With 9+ years of practice built on a 20-year family legacy, I deliver Vedic readings that are grounded, practical, and genuinely personalised — not generic forecasts.",
  ],
};
