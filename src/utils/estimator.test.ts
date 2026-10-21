import test from 'node:test';
import assert from 'node:assert/strict';
import {
  calculatePricing,
  filterProjects,
  WEBSITE_BASE_PRICE,
  HOSTING_MONTHLY_PRICE,
} from './estimator.ts';
import type { Project } from '../types/index.ts';

test('calculatePricing computes $10 website with NO hosting when hosting is unselected', () => {
  const result = calculatePricing({
    websiteType: 'landing',
    includeHosting: false,
    hostingBilling: 'monthly',
    extraPages: 0,
  });

  assert.equal(result.oneTimeWebsitePrice, 10);
  assert.equal(result.hostingPrice, 0);
  assert.equal(result.isHostingIncluded, false);
  assert.equal(result.totalUpfront, 10); // Exactly $10!
});

test('calculatePricing computes $10 website + $15 hosting when optional hosting is selected', () => {
  const result = calculatePricing({
    websiteType: 'business',
    includeHosting: true,
    hostingBilling: 'monthly',
    extraPages: 0,
  });

  assert.equal(result.oneTimeWebsitePrice, 10);
  assert.equal(result.hostingPrice, 15);
  assert.equal(result.isHostingIncluded, true);
  assert.equal(result.totalUpfront, 25);
});

test('calculatePricing handles extra pages and optional yearly hosting', () => {
  const result = calculatePricing({
    websiteType: 'services',
    includeHosting: true,
    hostingBilling: 'yearly',
    extraPages: 2, // 2 * $5 = $10 extra
  });

  assert.equal(result.oneTimeWebsitePrice, 20); // 10 base + 10 extra
  assert.equal(result.hostingPrice, 150);
  assert.equal(result.totalUpfront, 170);
});

test('filterProjects filters projects correctly', () => {
  const mockProjects: Project[] = [
    {
      id: '1',
      title: 'Aether Construction',
      subtitle: 'Luxury Contractor Website',
      category: 'services',
      categoryLabel: 'Services & Contractors',
      year: '2025',
      image: '/images/project_apex_contractor.jpg',
      client: 'Aether Group',
      deliverables: ['Custom Website'],
      techStack: ['React', 'Tailwind'],
      metrics: [],
      overview: '',
      challenge: '',
      solution: '',
      featured: true,
      interactivePreviewType: 'contractor',
    },
    {
      id: '2',
      title: 'Avenue Partners',
      subtitle: 'Corporate Advisory Website',
      category: 'business',
      categoryLabel: 'Business & Corporate',
      year: '2025',
      image: '/images/project_solaris_consulting.jpg',
      client: 'Avenue Partners',
      deliverables: ['Corporate Site'],
      techStack: ['Next.js', 'Tailwind'],
      metrics: [],
      overview: '',
      challenge: '',
      solution: '',
      featured: true,
      interactivePreviewType: 'consulting',
    },
  ];

  const all = filterProjects(mockProjects, 'all');
  assert.equal(all.length, 2);

  const business = filterProjects(mockProjects, 'business');
  assert.equal(business.length, 1);
  assert.equal(business[0].title, 'Avenue Partners');
});
