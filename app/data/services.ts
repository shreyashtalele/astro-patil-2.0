// app/data/services.ts

export interface Service {
  id: string;
  title: string;
  desc: string;
  image: string;
  tag?: string;
}

export const services: Service[] = [
  {
    id: "kundli-reading",
    title: "Kundli Reading",
    desc: "In-depth birth chart analysis to uncover life patterns, strengths, karmic lessons, and future possibilities.",
    image: "/images/kundalireading.webp",
    tag: "Most Popular",
  },
  {
    id: "marriage-compatibility",
    title: "Marriage Compatibility",
    desc: "Detailed kundli matching to evaluate emotional, mental, and spiritual compatibility before you commit.",
    image: "/images/marriage.webp", // ✅ Fixed path and spelling
    tag: "High Demand",
  },
  {
    id: "career-education",
    title: "Career & Education",
    desc: "Clarity on job switches, promotions, and academic direction based on your planetary strengths.",
    image: "/images/career.webp",
  },
  {
    id: "finance-guidance",
    title: "Finance Guidance",
    desc: "Astrological insight into income, savings, investment timing, and breaking financial blocks.",
    image: "/images/finance.webp",
  },
  {
    id: "vastu-consultation",
    title: "Vastu Consultation",
    desc: "Align your home or workspace with Vastu principles to invite positivity, growth, and harmony.",
    image: "/images/vastu.webp",
  },
  {
    id: "numerology",
    title: "Numerology",
    desc: "Discover your life path and destiny numbers — and how they shape your decisions and success.",
    image: "/images/numerology.webp",
  },
  {
    id: "muhurta",
    title: "Muhurta",
    desc: "Find the most auspicious moment for weddings, business launches, travel, and major milestones.",
    image: "/images/muhurta.webp",
  },
  {
    id: "palmistry",
    title: "Palmistry",
    desc: "Hand analysis to reveal personality, life direction, health indicators, and hidden potential.",
    image: "/images/palmistry.webp",
  },
  {
    id: "face-reading",
    title: "Face Reading",
    desc: "Understand behaviour patterns, emotional tendencies, and life themes through facial analysis.",
    image: "/images/facereading.webp",
  },
  {
    id: "money-growth",
    title: "Money & Growth",
    desc: "Identify financial blocks, map money flow cycles, and spot the right windows for growth.",
    image: "/images/money.webp",
  },
];
