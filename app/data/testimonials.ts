// app/data/testimonials.ts

export interface Testimonial {
  name: string;
  location: string;
  service: string;
  text: string;
  rating: number;
  highlight?: boolean;
}

export const testimonials: Testimonial[] = [
  {
    name: "Aans",
    location: "Mumbai",
    service: "Life Guidance",
    text: "The consultation gave me real clarity during one of the most difficult phases of my life. The guidance was practical, grounded, and surprisingly accurate.",
    rating: 5,
  },
  {
    name: "Navid",
    location: "Pune",
    service: "Kundli Reading",
    text: "Incredibly detailed reading with predictions that matched my situation almost exactly. I was genuinely taken aback by the accuracy.",
    rating: 5,
    highlight: true,
  },
  {
    name: "Samachan",
    location: "Nagpur",
    service: "Career Guidance",
    text: "Made a major career decision with full confidence after this session. The clarity I got was something I couldn't find anywhere else.",
    rating: 5,
  },
  {
    name: "Priya",
    location: "Mumbai",
    service: "Marriage Compatibility",
    text: "The kundli matching gave us both genuine reassurance before our wedding. Every concern was addressed thoughtfully and without judgment.",
    rating: 5,
  },
  {
    name: "Rohit",
    location: "Nashik",
    service: "Vastu Consultation",
    text: "Professional, fully confidential, and very accurate. The Vastu remedies suggested were simple to follow and made a real difference.",
    rating: 5,
  },
  {
    name: "Sneha",
    location: "Delhi",
    service: "Finance Guidance",
    text: "Every question answered with patience and depth. Left the session with a completely different perspective on my financial situation.",
    rating: 5,
    highlight: true,
  },
];
