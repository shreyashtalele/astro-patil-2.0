// app/data/navigation.ts

export interface NavLink {
  label: string;
  href: string;
}

export const navLinks: NavLink[] = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Contact", href: "#contact" },
];

export const serviceLinks: NavLink[] = [
  { label: "Kundli Reading", href: "#services" },
  { label: "Marriage Compatibility", href: "#services" },
  { label: "Career Guidance", href: "#services" },
  { label: "Vastu Consultation", href: "#services" },
  { label: "Numerology", href: "#services" },
];
