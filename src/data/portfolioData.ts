import { Project } from '../types';

export const HERO_IMAGE = '/images/hero_web_showcase.jpg';
export const X_PROFILE_URL = 'https://x.com/SBGwebsites';
export const X_HANDLE = '@SBGwebsites';
export const CONTACT_EMAIL = 'rayanlhrban@gmail.com';

export const PROJECTS_DATA: Project[] = [
  {
    id: 'aether-contractor',
    title: 'Aether Construction',
    subtitle: 'Modern Luxury Home Builder & Architectural Contractor Website',
    category: 'services',
    categoryLabel: 'Services & Contractor',
    year: '2025',
    image: '/images/project_apex_contractor.jpg',
    client: 'Aether Design Build',
    deliverables: ['Custom Mobile-First Website', 'Project Showcase Gallery', 'Quote Request Flow', 'Local SEO'],
    techStack: ['Next.js', 'Tailwind CSS', 'TypeScript', 'Responsive Grid'],
    metrics: [
      { label: 'Consultation Inquiries', value: '+180%', change: 'Qualified local bids' },
      { label: 'Mobile Page Load', value: '0.5s', change: '100 Google PageSpeed' },
      { label: 'Customer Bounce Rate', value: '18%', change: 'Clean intuitive design' },
    ],
    overview: 'A bespoke high-end contractor website designed to establish immediate trust with homeowners seeking luxury renovations and architectural builds.',
    challenge: 'The client had no web presence and was losing high-ticket renovation contracts to competitors with professional websites.',
    solution: 'Designed and deployed a responsive business website featuring completed project photography, customer testimonials, and a one-minute consultation quote form.',
    featured: true,
    testimonial: {
      quote: 'Getting a custom website built for just $10 with reliable $15/month hosting was the best business investment we made this year. We landed a $65,000 project within our first month.',
      author: 'Marcus Aurelius Vance',
      role: 'Principal Contractor',
      company: 'Aether Construction',
    },
    interactivePreviewType: 'contractor',
  },
  {
    id: 'avenue-partners',
    title: 'Avenue Advisory',
    subtitle: 'Corporate Advisory, Management Consulting & Legal Agency Website',
    category: 'business',
    categoryLabel: 'Business & Corporate',
    year: '2025',
    image: '/images/project_solaris_consulting.jpg',
    client: 'Avenue Strategic Partners',
    deliverables: ['Corporate Web Architecture', 'Service Offerings Grid', 'Team Directory', 'Executive Consultation Booking'],
    techStack: ['React', 'TypeScript', 'Tailwind CSS', 'Vite'],
    metrics: [
      { label: 'Inbound Inquiries', value: '+210%', change: 'Corporate decision makers' },
      { label: 'Page Performance', value: '100/100', change: 'Google Core Web Vitals' },
      { label: 'Average Session Time', value: '3m 45s', change: 'Engaged readership' },
    ],
    overview: 'A sleek, authoritative corporate website for a boutique management advisory firm catering to startups and mid-market enterprises.',
    challenge: 'Presenting intricate consulting practices and corporate expertise in an approachable, polished executive format.',
    solution: 'Built a multi-section corporate site with clear value propositions, industry case studies, and a direct consultation scheduler.',
    featured: true,
    testimonial: {
      quote: 'SBG Websites delivered a site that looks like a $10,000 agency build. Fast, sharp, and the $15/month hosting handles all security and maintenance without headaches.',
      author: 'Sarah Jenkins',
      role: 'Managing Partner',
      company: 'Avenue Advisory',
    },
    interactivePreviewType: 'consulting',
  },
  {
    id: 'pulse-metrics',
    title: 'PulseMetrics',
    subtitle: 'High-Converting SaaS Product Landing Page & Feature Tour',
    category: 'landing',
    categoryLabel: 'Landing Page',
    year: '2025',
    image: '/images/project_pulse_metrics.jpg',
    client: 'PulseMetrics Cloud',
    deliverables: ['Product Landing Page', 'Interactive Feature Tour', 'Live Performance Graph', 'Lead Capture Form'],
    techStack: ['React', 'TypeScript', 'Tailwind CSS', 'Lucide Icons'],
    metrics: [
      { label: 'Trial Conversions', value: '+74%', change: 'Post-launch 60 days' },
      { label: 'Global Edge Speed', value: '0.4s', change: 'Instant page delivery' },
      { label: 'Form Fill Rate', value: '8.4%', change: 'Frictionless layout' },
    ],
    overview: 'A focused, high-speed product landing page created to clearly communicate cloud monitoring software to technical team leads.',
    challenge: 'Turning complex software telemetry features into a clean, compelling landing page that visitors grasp in under 10 seconds.',
    solution: 'Engineered an interactive product preview directly inside the landing page with tabbed feature tours and instant signup callouts.',
    featured: true,
    testimonial: {
      quote: 'Incredible turnaround and attention to detail. Rayan built our marketing site in just 3 days and the $15/month hosting keeps it flying fast.',
      author: 'David Sterling',
      role: 'Tech Lead',
      company: 'PulseMetrics',
    },
    interactivePreviewType: 'analytics',
  },
  {
    id: 'verve-studio',
    title: 'Studio Aeternum',
    subtitle: 'Avant-Garde Creative Portfolio & Editorial Monograph Showcase',
    category: 'portfolio',
    categoryLabel: 'Portfolio & Creative',
    year: '2024',
    image: '/images/project_verve_studio.jpg',
    client: 'Studio Aeternum Group',
    deliverables: ['Editorial Typography Website', 'Creative Portfolio Archive', 'Showreel Video Embed', 'Contact Channel'],
    techStack: ['React', 'Tailwind CSS', 'Vite', 'Smooth Physics'],
    metrics: [
      { label: 'Client Inquiries', value: '+140%', change: 'High-budget commissions' },
      { label: 'Awwwards Recognition', value: 'Site of the Day', change: 'Design Excellence' },
      { label: 'Dwell Time', value: '4m 20s', change: 'Deep engagement' },
    ],
    overview: 'A striking visual monograph and personal portfolio designed to showcase high-fashion, editorial photography, and creative campaigns.',
    challenge: 'Displaying bold architectural typography and heavy visual portfolios without sacrificing mobile responsiveness or page speed.',
    solution: 'Designed a lightweight typography-first layout with progressive image loading and zero bloated libraries.',
    featured: true,
    testimonial: {
      quote: 'Every client who discovers our studio compliments our website. Rayan made the entire process painless from start to finish.',
      author: 'Elena Vance-Reid',
      role: 'Creative Director',
      company: 'Studio Aeternum',
    },
    interactivePreviewType: 'editorial',
  },
];

export const CLIENT_STATS = [
  { value: '$10', label: 'Website Creation Fee', subtext: 'One-time flat build price' },
  { value: '$15/mo', label: 'Hosting & Maintenance', subtext: 'Fast cloud, SSL, 99.9% uptime' },
  { value: '3 Days', label: 'Average Turnaround', subtext: 'Fast concept-to-launch delivery' },
  { value: '100%', label: 'Mobile & Speed Optimized', subtext: 'Google Core Web Vitals optimized' },
];

export const SERVICES_DATA = [
  {
    number: '01',
    title: 'Custom Website Design & Development',
    price: '$10 One-Time',
    description: 'A custom-built, modern website tailored specifically to your business or personal brand. Hand-coded with clean modern React and Tailwind CSS.',
    capabilities: [
      'Custom Layout & Brand Styling',
      '100% Mobile Responsive on all screens',
      'Fast Lead & Contact Form Setup',
      'Google SEO & Social Share Preview Setup',
    ],
    deliverable: 'Fully coded modern website live on your domain',
  },
  {
    number: '02',
    title: 'Managed Cloud Hosting & Care',
    price: '$15 / Month',
    description: 'Worry-free cloud hosting, maintenance, and technical support. We take care of servers, security, and updates so you never have to worry.',
    capabilities: [
      'Ultra-Fast Global Edge CDN Servers',
      'Free SSL Certificate (HTTPS Security)',
      '99.9% Uptime Guarantee',
      'Ongoing Content Updates & Tech Support',
    ],
    deliverable: 'Fully managed 24/7 online availability & maintenance',
  },
  {
    number: '03',
    title: 'Landing Pages & Lead Capture',
    price: '$10 One-Time',
    description: 'High-converting single-page websites engineered to convert ad traffic and social visitors into paying leads and consultation calls.',
    capabilities: [
      'Clear Call-to-Action Architecture',
      'Fast Booking & Inquiry Forms',
      'Sub-Second Page Load Speed',
      'Direct Social & X (@SBGwebsites) Integration',
    ],
    deliverable: 'High-converting landing page optimized for lead generation',
  },
  {
    number: '04',
    title: 'Local Business & Service Provider Sites',
    price: '$10 One-Time',
    description: 'Professional web presence for contractors, consultants, local businesses, gyms, salons, and freelancers who need clients to take them seriously.',
    capabilities: [
      'Showcase Your Services & Pricing',
      'Customer Reviews & Proof Section',
      'Click-to-Call & Click-to-Email Buttons',
      'Local Business Google Search Readiness',
    ],
    deliverable: 'Professional online presence that turns searches into clients',
  },
];

export const PROCESS_STEPS = [
  {
    step: '01',
    name: 'Share Your Details',
    timeline: 'Day 1',
    description: 'DM me on X (@SBGwebsites) or fill out the quick form with your business name, services, and any text or photos you want on your site.',
  },
  {
    step: '02',
    name: 'I Build Your Website',
    timeline: 'Day 2',
    description: 'I design and code a custom, mobile-friendly website tailored to your brand with clean typography, fast performance, and lead forms.',
  },
  {
    step: '03',
    name: 'Review & Revisions',
    timeline: 'Day 3',
    description: 'You inspect the live preview link. We tweak text, colors, or sections until you are 100% satisfied with the result.',
  },
  {
    step: '04',
    name: 'Launch & Hosting Activation',
    timeline: 'Day 3-4',
    description: 'Your website goes live on your domain with high-speed $15/month cloud hosting, SSL security, and continuous uptime monitoring.',
  },
];

export const FAQS = [
  {
    question: 'How is it only $10 for a custom website?',
    answer: 'I keep pricing simple and accessible: a $10 one-time build fee, paired with our $15/month managed hosting and care service. This model allows small businesses, contractors, and creators to get a professional modern website without having to spend thousands of dollars upfront with slow agencies.',
  },
  {
    question: 'What is included in the $15/month hosting service?',
    answer: 'The $15/month hosting covers everything needed to keep your site fast, secure, and online: high-speed global CDN cloud hosting, free SSL certificate (HTTPS), 99.9% uptime, regular software updates, and minor content updates whenever you need text or photos updated.',
  },
  {
    question: 'Do you build e-commerce or online shopping cart sites?',
    answer: 'No. I specialize exclusively in business websites, service provider sites, portfolios, and lead generation landing pages. I do not build e-commerce or product selling stores.',
  },
  {
    question: 'How fast will my website be ready?',
    answer: 'Most standard websites are designed, coded, and ready for your review within 2 to 4 days after you provide your content and details.',
  },
  {
    question: 'Can I connect my own custom domain (e.g. yourbusiness.com)?',
    answer: 'Yes! You can connect your existing domain or I will help you register and set up a new domain with full DNS configuration and HTTPS security.',
  },
  {
    question: 'How do I reach you to get started?',
    answer: 'You can DM me directly on X at @SBGwebsites (https://x.com/SBGwebsites), email me at rayanlhrban@gmail.com, or submit the quick project form below!',
  },
];
