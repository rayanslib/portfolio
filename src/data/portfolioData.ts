import { Project } from '../types';

export const HERO_IMAGE = '/images/hero_web_showcase.jpg';
export const X_PROFILE_URL = 'https://x.com/SBGwebsites';
export const X_HANDLE = '@SBGwebsites';

export const PROJECTS_DATA: Project[] = [
  {
    id: 'aether-contractor',
    title: 'Aether Construction',
    subtitle: 'Modern Contractor & Architectural Builder Website',
    category: 'services',
    categoryLabel: 'Services & Contractor',
    year: '2025',
    image: '/images/project_apex_contractor.jpg',
    client: 'Aether Design Build',
    deliverables: ['Responsive Website', 'Project Gallery', 'Quote Request Section', 'Mobile Optimization'],
    techStack: ['Next.js', 'Tailwind CSS', 'TypeScript'],
    metrics: [
      { label: 'Mobile Page Load', value: '0.5s', change: 'Sub-second speed' },
      { label: 'Website Cost', value: '$10', change: 'One-time build fee' },
      { label: 'Optional Hosting', value: '$15/mo', change: 'Managed cloud' },
    ],
    overview: 'A high-impact, professional website built for a construction and remodeling business to display finished projects and book client consultations.',
    challenge: 'Needed a clean, trustworthy web presence that loads fast on phones without spending hundreds of dollars on agency builders.',
    solution: 'Coded a modern, mobile-first website with clean photo galleries, clear service descriptions, and quick quote callouts.',
    featured: true,
    interactivePreviewType: 'contractor',
  },
  {
    id: 'avenue-partners',
    title: 'Avenue Advisory',
    subtitle: 'Corporate Advisory & Management Consulting Website',
    category: 'business',
    categoryLabel: 'Business & Corporate',
    year: '2025',
    image: '/images/project_solaris_consulting.jpg',
    client: 'Avenue Strategic Partners',
    deliverables: ['Corporate Web Layout', 'Practice Areas Grid', 'Team Overview', 'Consultation Booking Callout'],
    techStack: ['React', 'TypeScript', 'Tailwind CSS'],
    metrics: [
      { label: 'Lighthouse Score', value: '100/100', change: 'Verified performance' },
      { label: 'Build Turnaround', value: '3 Days', change: 'Concept to review' },
      { label: 'Website Cost', value: '$10', change: 'One-time build fee' },
    ],
    overview: 'A sharp, executive corporate website designed for an advisory firm presenting practice areas and consultation options.',
    challenge: 'Needed an authoritative corporate presence without bloated templates or recurring agency contracts.',
    solution: 'Built with clean typography, high contrast, and structured service cards that highlight corporate expertise.',
    featured: true,
    interactivePreviewType: 'consulting',
  },
  {
    id: 'pulse-metrics',
    title: 'PulseMetrics',
    subtitle: 'High-Converting Product Landing Page & Feature Tour',
    category: 'landing',
    categoryLabel: 'Landing Page',
    year: '2025',
    image: '/images/project_pulse_metrics.jpg',
    client: 'PulseMetrics Cloud',
    deliverables: ['Landing Page Layout', 'Interactive Feature Tour', 'Speed Optimization', 'Call-to-Action'],
    techStack: ['React', 'TypeScript', 'Tailwind CSS'],
    metrics: [
      { label: 'Global Edge Speed', value: '0.4s', change: 'Instant delivery' },
      { label: 'Build Fee', value: '$10', change: 'One-time build' },
      { label: 'Delivery Time', value: '48h', change: 'Fast turnaround' },
    ],
    overview: 'A focused, high-speed single-page website created to communicate software features clearly with interactive tours.',
    challenge: 'Explaining features in an engaging, human way that visitors understand immediately.',
    solution: 'Designed an interactive product tour directly in the page with clean cards and clear call-to-actions.',
    featured: true,
    interactivePreviewType: 'analytics',
  },
  {
    id: 'verve-studio',
    title: 'Studio Aeternum',
    subtitle: 'Creative Portfolio & Editorial Design Showcase',
    category: 'portfolio',
    categoryLabel: 'Portfolio & Creative',
    year: '2024',
    image: '/images/project_verve_studio.jpg',
    client: 'Studio Aeternum Group',
    deliverables: ['Editorial Typography', 'Project Showcase', 'Responsive Mobile Layout', 'Clean Code Handover'],
    techStack: ['React', 'Tailwind CSS', 'Vite'],
    metrics: [
      { label: 'Design Rating', value: '10/10', change: 'Bespoke aesthetic' },
      { label: 'Build Fee', value: '$10', change: 'One-time build' },
      { label: 'Hosting', value: 'Optional', change: '$15/mo or self-host' },
    ],
    overview: 'A visual portfolio designed for creative directors and agencies to showcase recent work with bold typography.',
    challenge: 'Displaying heavy visual galleries without slowing down mobile devices.',
    solution: 'Implemented progressive image rendering and modern CSS grid architecture for smooth 60fps scrolling.',
    featured: true,
    interactivePreviewType: 'editorial',
  },
];

export const CLIENT_STATS = [
  { value: '$10', label: 'Website Build Fee', subtext: 'One-time flat creation cost' },
  { value: 'Optional', label: '$15/mo Hosting', subtext: 'Host with us or host yourself' },
  { value: '2-3 Days', label: 'Fast Delivery', subtext: 'Quick turnaround from DM to preview' },
  { value: 'Direct on X', label: '@SBGwebsites', subtext: 'Fast replies & easy ordering' },
];

export const SERVICES_DATA = [
  {
    number: '01',
    title: 'Custom Website Design & Coding',
    price: '$10 One-Time',
    description: 'We code a modern, clean website tailored to your business or personal brand. Hand-crafted with React and Tailwind CSS.',
    capabilities: [
      'Clean modern layout customized to your brand',
      '100% Mobile & tablet responsive on all devices',
      'Contact callout & lead capture section',
      'Full source code handover or deployment',
    ],
    deliverable: 'Your complete custom website ready for visitors',
  },
  {
    number: '02',
    title: 'Managed Cloud Hosting (Optional)',
    price: '$15 / Month (Optional)',
    description: 'Completely optional! If you don\'t want to deal with domain setups, servers, and updates, we host and maintain it for $15/month.',
    capabilities: [
      'High-speed global cloud server with 99.9% uptime',
      'Free SSL Security Certificate (HTTPS)',
      'Regular software updates and maintenance',
      'Text and photo updates whenever you need them',
    ],
    deliverable: 'Worry-free 24/7 online hosting (optional)',
  },
  {
    number: '03',
    title: 'Landing Pages & Lead Funnels',
    price: '$10 One-Time',
    description: 'Single-page websites designed to turn visitors into inquiries, calls, or consultation bookings for your business.',
    capabilities: [
      'Clear, bold headline & value propositions',
      'Click-to-call or direct social contact buttons',
      'Sub-second page loading speed',
      'Optimized for mobile traffic and ads',
    ],
    deliverable: 'High-converting single-page website',
  },
  {
    number: '04',
    title: 'Self-Hosting / Code Handover',
    price: 'Included Free',
    description: 'Don\'t want the $15/month hosting? No problem! You receive clean, production-ready code you can host anywhere you prefer.',
    capabilities: [
      'Deploy easily to Vercel, Netlify, or your host',
      'Full ownership of your website files',
      'Zero vendor lock-in or recurring traps',
      'Simple instructions to connect your own domain',
    ],
    deliverable: 'Full source code ownership',
  },
];

export const PROCESS_STEPS = [
  {
    step: '01',
    name: 'Send a DM on X',
    timeline: 'Day 1',
    description: 'Message @SBGwebsites on X with your business name, what services you offer, and any inspiration sites or photos you like.',
  },
  {
    step: '02',
    name: 'We Build Your Custom Site',
    timeline: 'Day 2',
    description: 'We design and code your website with clean typography, fast performance, and a mobile-friendly layout for just $10.',
  },
  {
    step: '03',
    name: 'Review & Choose Hosting',
    timeline: 'Day 2-3',
    description: 'You review the live link. You can choose our optional $15/month managed hosting or take the code and host it yourself!',
  },
];

export const FAQS = [
  {
    question: 'Is the $15/month hosting service required?',
    answer: 'No! The $15/month hosting is 100% optional. For just $10 flat, you get your complete custom website. If you want us to host and maintain it with fast servers and SSL, you can add our $15/mo hosting. If you prefer to host it yourself (e.g. on Vercel or your own server), we give you the complete code for free.',
  },
  {
    question: 'How do I order my $10 website?',
    answer: 'Simply send a Direct Message on X to @SBGwebsites (https://x.com/SBGwebsites). Tell us your business name, what services you offer, and we will get started right away!',
  },
  {
    question: 'How fast will my website be ready?',
    answer: 'Most websites are ready for review within 2 to 3 days after you send your details on X.',
  },
  {
    question: 'Do you build e-commerce or product selling stores?',
    answer: 'No. We specialize exclusively in business websites, service provider sites, contractor sites, personal portfolios, and landing pages. We do not build e-commerce or online store checkouts.',
  },
  {
    question: 'Can I connect my own custom domain?',
    answer: 'Yes! Whether you choose our optional $15/mo hosting or host it yourself, your website can be linked to your own custom domain (e.g. yourname.com).',
  },
];
