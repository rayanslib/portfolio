import type { Project, ProjectCategory, PricingState } from '../types/index.ts';

export const WEBSITE_BASE_PRICE = 10; // $10 one-time website creation
export const HOSTING_MONTHLY_PRICE = 15; // $15/month cloud hosting & maintenance
export const HOSTING_YEARLY_PRICE = 150; // $150/year (save $30)

export const WEBSITE_TYPES: Record<
  PricingState['websiteType'],
  { label: string; description: string; includedPages: string }
> = {
  landing: {
    label: 'High-Converting Landing Page',
    description: 'Single-page website designed to capture leads, showcase services, and convert visitors.',
    includedPages: '1 responsive single-page layout with custom sections',
  },
  business: {
    label: 'Company & Business Website',
    description: 'Clean multi-section corporate site showcasing your services, team, and contact information.',
    includedPages: 'Homepage, About, Services, Contact & Call-to-action sections',
  },
  portfolio: {
    label: 'Personal Brand & Portfolio',
    description: 'Sleek portfolio website for creators, consultants, designers, and professionals.',
    includedPages: 'Work showcase, bio, client proof, and consultation booking',
  },
  services: {
    label: 'Local Services & Contractor Site',
    description: 'Lead generation website for contractors, mechanics, salons, clinics, and local businesses.',
    includedPages: 'Service packages, customer reviews, quote request form',
  },
};

export interface PricingBreakdown {
  oneTimeWebsitePrice: number;
  hostingPrice: number;
  hostingPeriodLabel: string;
  totalUpfront: number;
  extraPagesCost: number;
  turnaroundDays: number;
}

export function calculatePricing(state: PricingState): PricingBreakdown {
  const extraPagesCost = Math.max(0, state.extraPages) * 5;
  const oneTimeWebsitePrice = WEBSITE_BASE_PRICE + extraPagesCost;
  
  const hostingPrice = state.hostingBilling === 'yearly' ? HOSTING_YEARLY_PRICE : HOSTING_MONTHLY_PRICE;
  const hostingPeriodLabel = state.hostingBilling === 'yearly' ? '/year' : '/month';
  const totalUpfront = oneTimeWebsitePrice + hostingPrice;
  const turnaroundDays = 3 + state.extraPages;

  return {
    oneTimeWebsitePrice,
    hostingPrice,
    hostingPeriodLabel,
    totalUpfront,
    extraPagesCost,
    turnaroundDays,
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
    errors.name = 'Please provide your name or business name.';
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!formData.email.trim() || !emailRegex.test(formData.email.trim())) {
    errors.email = 'Please provide a valid email address.';
  }

  if (!formData.message.trim() || formData.message.trim().length < 8) {
    errors.message = 'Please provide a short note about the website you need (min 8 characters).';
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors,
  };
}
