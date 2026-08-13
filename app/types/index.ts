// app/types/index.ts

export interface Service {
  id: string;
  title: string;
  desc: string;
  image: string;
  tag?: string;
}

export interface Testimonial {
  name: string;
  location: string;
  service: string;
  text: string;
  rating: number;
  highlight?: boolean;
}

export interface NavLink {
  label: string;
  href: string;
}

export interface Stat {
  value: string;
  label: string;
  icon?: string;
}

export interface SocialLink {
  label: string;
  href: string;
  icon: React.ReactNode;
  external?: boolean;
  hoverClass: string;
}

export interface TrustPill {
  icon: string;
  text: string;
}

export interface ContactItem {
  icon: React.ComponentType;
  label: string;
  value: string;
  href: string;
}
