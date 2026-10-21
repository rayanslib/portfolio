export type ProjectCategory = 'all' | 'ecommerce' | 'saas' | 'editorial' | 'webapp';

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
  avatarUrl?: string;
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
  liveUrlMock: string;
  featured: boolean;
  testimonial?: ClientTestimonial;
  interactivePreviewType: 'furniture' | 'analytics' | 'editorial' | 'botanical' | 'fintech';
}

export interface EstimatorFeature {
  id: string;
  label: string;
  description: string;
  price: number;
  days: number;
}

export type ProjectTier = 'landing' | 'business' | 'ecommerce' | 'custom_app';

export interface EstimatorState {
  tier: ProjectTier;
  features: string[];
  timeline: 'rush' | 'standard' | 'flexible';
}

export interface InquiryFormState {
  name: string;
  email: string;
  company: string;
  projectType: string;
  budget: string;
  timeline: string;
  message: string;
}
