import test from 'node:test';
import assert from 'node:assert/strict';
import {
  calculatePricing,
  filterProjects,
  validateInquiry,
  WEBSITE_BASE_PRICE,
  HOSTING_MONTHLY_PRICE,
} from './estimator.ts';
import type { Project } from '../types/index.ts';

test('calculatePricing computes base $10 website + $15/month hosting correctly', () => {
  const result = calculatePricing({
    websiteType: 'landing',
    hostingBilling: 'monthly',
    extraPages: 0,
    includeSeo: true,
    includeContactForm: true,
  });

  assert.equal(result.oneTimeWebsitePrice, 10);
  assert.equal(result.hostingPrice, 15);
  assert.equal(result.hostingPeriodLabel, '/month');
  assert.equal(result.totalUpfront, 25);
});

test('calculatePricing adds extra pages and annual discount correctly', () => {
  const result = calculatePricing({
    websiteType: 'business',
    hostingBilling: 'yearly',
    extraPages: 2, // 2 * $5 = $10 extra
    includeSeo: true,
    includeContactForm: true,
  });

  assert.equal(result.oneTimeWebsitePrice, 20); // 10 base + 10 extra
  assert.equal(result.hostingPrice, 150); // annual hosting
  assert.equal(result.hostingPeriodLabel, '/year');
  assert.equal(result.totalUpfront, 170);
});

test('filterProjects filters by non-ecommerce category and search term', () => {
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
      deliverables: ['Custom Website', 'Contact System'],
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
      deliverables: ['Corporate Site', 'Lead Generation'],
      techStack: ['Next.js', 'Tailwind'],
      metrics: [],
      overview: '',
      challenge: '',
      solution: '',
      featured: true,
      interactivePreviewType: 'consulting',
    },
  ];

  const allProjects = filterProjects(mockProjects, 'all');
  assert.equal(allProjects.length, 2);

  const businessOnly = filterProjects(mockProjects, 'business');
  assert.equal(businessOnly.length, 1);
  assert.equal(businessOnly[0].title, 'Avenue Partners');

  const searchMatch = filterProjects(mockProjects, 'all', 'contractor');
  assert.equal(searchMatch.length, 1);
  assert.equal(searchMatch[0].title, 'Aether Construction');
});

test('validateInquiry validates form inputs correctly', () => {
  const invalid = validateInquiry({
    name: '',
    email: 'invalid-email',
    message: 'hi',
    projectType: 'Business Website',
  });

  assert.equal(invalid.isValid, false);
  assert.ok(invalid.errors.name);
  assert.ok(invalid.errors.email);
  assert.ok(invalid.errors.message);

  const valid = validateInquiry({
    name: 'David Miller',
    email: 'david@aetherbuild.com',
    message: 'I want a modern contractor website for $10 with the $15/mo hosting plan.',
    projectType: 'Local Services & Contractor',
  });

  assert.equal(valid.isValid, true);
  assert.deepEqual(valid.errors, {});
});
