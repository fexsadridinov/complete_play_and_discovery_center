import type { LucideIcon } from "lucide-react";

export type NavItem = {
  label: string;
  href: string;
  isCta?: boolean;
};

export type Pillar = {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
};

export type ProgramCard = {
  id: string;
  title: string;
  description: string;
  tag?: string;
};

export type StatCard = {
  id: string;
  value: string;
  label: string;
  note?: string;
};

export type Testimonial = {
  id: string;
  quote: string;
  name: string;
  role: string;
};

export type WhySupportPoint = {
  id: string;
  title: string;
  description: string;
};

export type GalleryImage = {
  id: string;
  alt: string;
  /** Gradient placeholder classes when no src */
  placeholderClass: string;
};
