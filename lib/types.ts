export type SnapshotCategory =
  | "Home Services"
  | "Health & Wellness"
  | "Professional Services"
  | "Agency"
  | "Local Business"
  | "Insurance & Finance";

export interface Snapshot {
  id: string;
  name: string;
  slug: string;
  industry: string;
  category: SnapshotCategory;
  description: string;
  longDescription: string;
  price: number;
  features: string[];
  includes: string[];
  thumbnailGradient: [string, string];
  ghlShareLink: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface Testimonial {
  quote: string;
  name: string;
  title: string;
  industry: string;
}

export interface Stat {
  value: string;
  label: string;
}
