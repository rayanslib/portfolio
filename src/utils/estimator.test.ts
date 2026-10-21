import test from 'node:test';
import assert from 'node:assert/strict';
import {
  calculateProjectEstimate,
  filterProjects,
  validateInquiry,
} from './estimator.ts';
import type { Project } from '../types/index.ts';

test('calculateProjectEstimate computes baseline landing tier correctly', () => {
  const estimate = calculateProjectEstimate({
    tier: 'landing',
    features: [],
    timeline: 'standard',
  });

  assert.equal(estimate.minPrice, 1800);
  assert.equal(estimate.maxPrice, 2150);
  assert.equal(estimate.estimatedWeeks, 2);
  assert.equal(estimate.selectedFeaturesCount, 0);
});

test('calculateProjectEstimate adds features and rush timeline correctly', () => {
  const estimate = calculateProjectEstimate({
    tier: 'ecommerce',
    features: ['cms', 'seo'],
    timeline: 'rush',
  });

  // Base 4800 + 600 + 450 = 5850 * 1.25 = 7312.5 -> rounded to 50: 7300
  assert.ok(estimate.minPrice >= 7300);
  assert.ok(estimate.maxPrice > estimate.minPrice);
  assert.equal(estimate.selectedFeaturesCount, 2);
});

test('filterProjects filters by category and search query', () => {
  const mockProjects: Project[] = [
    {
      id: '1',
      title: 'Aura Living',
      subtitle: 'Architectural Furniture Store',
      category: 'ecommerce',
      categoryLabel: 'E-Commerce',
      year: '2025',
      image: '',
      client: 'Aura Design',
      deliverables: ['Custom Storefront', 'Checkout Integration'],
      techStack: ['Next.js', 'Shopify'],
      metrics: [],
      overview: '',
      challenge: '',
      solution: '',
      liveUrlMock: 'https://auraliving.studio',
      featured: true,
      interactivePreviewType: 'furniture',
    },
    {
      id: '2',
      title: 'PulseMetrics',
      subtitle: 'SaaS Analytics Platform',
      category: 'saas',
      categoryLabel: 'SaaS & Tech',
      year: '2025',
      image: '',
      client: 'Pulse Inc',
      deliverables: ['Web Application', 'Dashboard'],
      techStack: ['React', 'Tailwind'],
      metrics: [],
      overview: '',
      challenge: '',
      solution: '',
      liveUrlMock: 'https://pulsemetrics.io',
      featured: true,
      interactivePreviewType: 'analytics',
    },
  ];

  const allProjects = filterProjects(mockProjects, 'all');
  assert.equal(allProjects.length, 2);

  const ecommerceOnly = filterProjects(mockProjects, 'ecommerce');
  assert.equal(ecommerceOnly.length, 1);
  assert.equal(ecommerceOnly[0].title, 'Aura Living');

  const searchMatch = filterProjects(mockProjects, 'all', 'dashboard');
  assert.equal(searchMatch.length, 1);
  assert.equal(searchMatch[0].title, 'PulseMetrics');

  const noMatch = filterProjects(mockProjects, 'all', 'nonexistent');
  assert.equal(noMatch.length, 0);
});

test('validateInquiry flags missing fields and passes valid submissions', () => {
  const invalid = validateInquiry({
    name: '',
    email: 'bad-email',
    message: 'short',
    projectType: 'E-Commerce',
  });

  assert.equal(invalid.isValid, false);
  assert.ok(invalid.errors.name);
  assert.ok(invalid.errors.email);
  assert.ok(invalid.errors.message);

  const valid = validateInquiry({
    name: 'Sarah Connor',
    email: 'sarah@cyberdyne.com',
    message: 'We need a high-performance website redesign for our robotics enterprise.',
    projectType: 'Corporate Website',
  });

  assert.equal(valid.isValid, true);
  assert.deepEqual(valid.errors, {});
});
