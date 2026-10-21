import type { Project, ProjectCategory, PricingState } from '../types/index.ts';

export const WEBSITE_BASE_PRICE = 10; // $10 one-time website creation
export const HOSTING_MONTHLY_PRICE = 15; // Optional $15/month hosting
export const HOSTING_YEARLY_PRICE = 150; // Optional $150/year (save $30)

export const WEBSITE_TYPES: Record<
  PricingState['websiteType'],
  { label: string; description: string; includedPages: string }
> = {
  landing: {
    label: 'Single-Page Landing Page',
    description: 'Clean, focused landing page to present your business and capture client leads.',
    includedPages: 'Hero, services, about, and call-to-action sections',
  },
  business: {
    label: 'Company & Business Website',
    description: 'Multi-section business website showcasing your company, services, and trust markers.',
    includedPages: 'Homepage, services breakdown, company story & contact banner',
  },
  portfolio: {
    label: 'Personal Brand & Portfolio',
    description: 'Sleek portfolio for freelancers, consultants, creators, and professionals.',
    includedPages: 'Work showcase, bio, skills, and direct contact options',
  },
  services: {
    label: 'Local Services & Contractor Site',
    description: 'Practical website for contractors, mechanics, barbers, painters, and local pros.',
    includedPages: 'Services list, project photos, quote callouts',
  },
};

export interface PricingBreakdown {
  oneTimeWebsitePrice: number;
  hostingPrice: number;
  hostingPeriodLabel: string;
  isHostingIncluded: boolean;
  totalUpfront: number;
  extraPagesCost: number;
  turnaroundDays: number;
}

export function calculatePricing(state: PricingState): PricingBreakdown {
  const extraPagesCost = Math.max(0, state.extraPages) * 5;
  const oneTimeWebsitePrice = WEBSITE_BASE_PRICE + extraPagesCost;
  
  let hostingPrice = 0;
  let hostingPeriodLabel = '';

  if (state.includeHosting) {
    hostingPrice = state.hostingBilling === 'yearly' ? HOSTING_YEARLY_PRICE : HOSTING_MONTHLY_PRICE;
    hostingPeriodLabel = state.hostingBilling === 'yearly' ? '/year' : '/month';
  }

  const totalUpfront = oneTimeWebsitePrice + hostingPrice;
  const turnaroundDays = 2 + state.extraPages;

  return {
    oneTimeWebsitePrice,
    hostingPrice,
    hostingPeriodLabel,
    isHostingIncluded: state.includeHosting,
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
