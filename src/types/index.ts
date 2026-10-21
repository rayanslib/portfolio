export type ProjectCategory = 'all' | 'business' | 'portfolio' | 'landing' | 'services';

export interface ProjectMetric {
  label: string;
  value: string;
  change?: string;
}

export interface ClientTestimonial {
  quote: string;
  author: string;
  role: string;
  company: string;
}

export interface Project {
  id: string;
  title: string;
  subtitle: string;
  category: ProjectCategory;
  categoryLabel: string;
  year: string;
  image: string;
  client: string;
  deliverables: string[];
  techStack: string[];
  metrics: ProjectMetric[];
  overview: string;
  challenge: string;
  solution: string;
  featured: boolean;
  testimonial?: ClientTestimonial;
  interactivePreviewType: 'contractor' | 'analytics' | 'editorial' | 'consulting';
}

export interface PricingState {
  websiteType: 'landing' | 'business' | 'portfolio' | 'services';
  hostingBilling: 'monthly' | 'yearly';
  extraPages: number;
  includeSeo: boolean;
  includeContactForm: boolean;
}

export interface InquiryFormState {
  name: string;
  email: string;
  xHandle?: string;
  company: string;
  projectType: string;
  message: string;
}
