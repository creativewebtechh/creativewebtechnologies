export interface NavItem {
  label: string;
  href: string;
}

export interface Stat {
  label: string;
  value: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  content: string;
  avatar?: string;
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  author: string;
  slug: string;
  image?: string;
  featured?: boolean;
}

export interface ContactFormData {
  name: string;
  company: string;
  email: string;
  phone: string;
  projectType: string;
  budget: string;
  timeline: string;
  description: string;
}

export interface QuoteFormData {
  projectType: string;
  description: string;
  budget: string;
  timeline: string;
  name: string;
  email: string;
  phone: string;
  company: string;
}