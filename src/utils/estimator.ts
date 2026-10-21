import type { Project, ProjectCategory, ProjectTier, EstimatorState } from '../types/index.ts';

export const BASE_TIER_CONFIG: Record<
  ProjectTier,
  { label: string; basePrice: number; baseDays: number; defaultPages: string }
> = {
  landing: {
    label: 'High-Converting Landing Page',
    basePrice: 1800,
    baseDays: 10,
    defaultPages: '1 focused page with conversion sections',
  },
  business: {
    label: 'Complete Corporate / Brand Website',
    basePrice: 3400,
    baseDays: 21,
    defaultPages: '5-8 bespoke pages with custom UI',
  },
  ecommerce: {
    label: 'Full E-Commerce Store Platform',
    basePrice: 4800,
    baseDays: 30,
    defaultPages: 'Full store, product pages, cart & checkout',
  },
  custom_app: {
    label: 'Custom Web Application / SaaS Portal',
    basePrice: 6500,
    baseDays: 45,
    defaultPages: 'Custom dashboards, user auth & interactive app logic',
  },
};

export const AVAILABLE_FEATURES = [
  {
    id: 'cms',
    label: 'Headless CMS Integration',
    description: 'Empowers your team to edit text, blog posts, and media without touching code.',
    price: 600,
    days: 4,
  },
  {
    id: 'animations',
    label: 'Custom Micro-Interactions & Motion',
    description: 'Smooth scroll storytelling, interactive hover effects, and tactile feedback.',
    price: 550,
    days: 4,
  },
  {
    id: 'seo',
    label: 'Technical SEO & Performance Hardening',
    description: 'Structured JSON-LD schema, open graph assets, and 100/100 Core Web Vitals audit.',
    price: 450,
    days: 3,
  },
  {
    id: 'analytics',
    label: 'Event Tracking & Conversion Analytics',
    description: 'Custom goal tracking, button clicks, funnels, and privacy-first analytics setup.',
    price: 350,
    days: 2,
  },
  {
    id: 'multilingual',
    label: 'Multi-Language Localization (i18n)',
    description: 'Seamless language switcher, localized routing, and SEO-friendly hreflang tags.',
    price: 800,
    days: 6,
  },
  {
    id: 'auth_portal',
    label: 'Client Portal / Member Authentication',
    description: 'Gated customer dashboards, member logins, and secure document access.',
    price: 1200,
    days: 8,
  },
];

export interface EstimateResult {
  minPrice: number;
  maxPrice: number;
  estimatedWeeks: number;
  tierLabel: string;
  selectedFeaturesCount: number;
  timelineMultiplier: number;
}

export function calculateProjectEstimate(state: EstimatorState): EstimateResult {
  const tierConfig = BASE_TIER_CONFIG[state.tier] || BASE_TIER_CONFIG.business;

  let featureSum = 0;
  let featureDays = 0;

  for (const featId of state.features) {
    const matched = AVAILABLE_FEATURES.find((f) => f.id === featId);
    if (matched) {
      featureSum += matched.price;
      featureDays += matched.days;
    }
  }

  let timelineMultiplier = 1;
  let daysModifier = 1;

  if (state.timeline === 'rush') {
    timelineMultiplier = 1.25; // +25% rush delivery surcharge
    daysModifier = 0.65; // compressed schedule
  } else if (state.timeline === 'flexible') {
    timelineMultiplier = 0.95; // -5% flexibility discount
    daysModifier = 1.15;
  }

  const rawBase = tierConfig.basePrice + featureSum;
  const rawDays = (tierConfig.baseDays + featureDays) * daysModifier;

  const minPrice = Math.round((rawBase * timelineMultiplier) / 50) * 50;
  const maxPrice = Math.round((minPrice * 1.2) / 50) * 50;
  const estimatedWeeks = Math.max(1, Math.round(rawDays / 5)); // 5 working days per week

  return {
    minPrice,
    maxPrice,
    estimatedWeeks,
    tierLabel: tierConfig.label,
    selectedFeaturesCount: state.features.length,
    timelineMultiplier,
  };
}

export function filterProjects(
  projects: Project[],
  category: ProjectCategory,
  searchQuery = ''
): Project[] {
  const query = searchQuery.trim().toLowerCase();

  return projects.filter((project) => {
    const matchesCategory = category === 'all' || project.category === category;
    if (!matchesCategory) return false;

    if (!query) return true;

    return (
      project.title.toLowerCase().includes(query) ||
      project.subtitle.toLowerCase().includes(query) ||
      project.client.toLowerCase().includes(query) ||
      project.deliverables.some((d) => d.toLowerCase().includes(query)) ||
      project.techStack.some((t) => t.toLowerCase().includes(query))
    );
  });
}

export interface InquiryValidationResult {
  isValid: boolean;
  errors: Partial<Record<'name' | 'email' | 'message' | 'projectType', string>>;
}

export function validateInquiry(formData: {
  name: string;
  email: string;
  message: string;
  projectType: string;
}): InquiryValidationResult {
  const errors: Partial<Record<'name' | 'email' | 'message' | 'projectType', string>> = {};

  if (!formData.name.trim()) {
    errors.name = 'Please provide your name or company contact.';
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!formData.email.trim() || !emailRegex.test(formData.email.trim())) {
    errors.email = 'Please provide a valid business email address.';
  }

  if (!formData.message.trim() || formData.message.trim().length < 10) {
    errors.message = 'Please provide a brief description of your website vision (min 10 characters).';
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors,
  };
}
