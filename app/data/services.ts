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
    image: "/images/kundalireading.png",
    tag: "Most Popular",
  },
  {
    id: "marriage-compatibility",
    title: "Marriage Compatibility",
    desc: "Detailed kundli matching to evaluate emotional, mental, and spiritual compatibility before you commit.",
    image: "/images/marriage.png", // ✅ Fixed path and spelling
    tag: "High Demand",
  },
  {
    id: "career-education",
    title: "Career & Education",
    desc: "Clarity on job switches, promotions, and academic direction based on your planetary strengths.",
    image: "/images/career.png",
  },
  {
    id: "finance-guidance",
    title: "Finance Guidance",
    desc: "Astrological insight into income, savings, investment timing, and breaking financial blocks.",
    image: "/images/finance.png",
  },
  {
    id: "vastu-consultation",
    title: "Vastu Consultation",
    desc: "Align your home or workspace with Vastu principles to invite positivity, growth, and harmony.",
    image: "/images/vastu.png",
  },
  {
    id: "numerology",
    title: "Numerology",
    desc: "Discover your life path and destiny numbers — and how they shape your decisions and success.",
    image: "/images/numerology.png",
  },
  {
    id: "muhurta",
    title: "Muhurta",
    desc: "Find the most auspicious moment for weddings, business launches, travel, and major milestones.",
    image: "/images/muhurta.png",
  },
  {
    id: "palmistry",
    title: "Palmistry",
    desc: "Hand analysis to reveal personality, life direction, health indicators, and hidden potential.",
    image: "/images/palmistry.png",
  },
  {
    id: "face-reading",
    title: "Face Reading",
    desc: "Understand behaviour patterns, emotional tendencies, and life themes through facial analysis.",
    image: "/images/facereading.png",
  },
  {
    id: "money-growth",
    title: "Money & Growth",
    desc: "Identify financial blocks, map money flow cycles, and spot the right windows for growth.",
    image: "/images/money.png",
  },
];
