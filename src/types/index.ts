export type ProjectCategory = 'all' | 'business' | 'portfolio' | 'landing' | 'services';

export interface ProjectMetric {
  label: string;
  value: string;
  change?: string;
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
  interactivePreviewType: 'contractor' | 'analytics' | 'editorial' | 'consulting';
}

export interface PricingState {
  websiteType: 'landing' | 'business' | 'portfolio' | 'services';
  includeHosting: boolean;
  hostingBilling: 'monthly' | 'yearly';
  extraPages: number;
}
