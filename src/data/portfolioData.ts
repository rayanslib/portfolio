import { Project } from '../types';

export const X_PROFILE_URL = 'https://x.com/SBGwebsites';
export const X_HANDLE = '@SBGwebsites';

// No fake websites — user requested to show "no websites for now"
export const PROJECTS_DATA: Project[] = [];

export const CLIENT_STATS = [
  { value: '$10', label: 'Website Build Fee', subtext: 'One-time flat build cost' },
  { value: 'Optional', label: '$15/mo Hosting', subtext: 'Host with us or host yourself' },
  { value: '2-3 Days', label: 'Fast Delivery', subtext: 'Quick turnaround from DM to launch' },
  { value: 'Direct on X', label: '@SBGwebsites', subtext: 'Fast replies & easy ordering' },
];

export const SERVICES_DATA = [
  {
    number: '01',
    title: 'Custom Website Design & Coding',
    price: '$10 One-Time',
    description: 'We code a modern, clean website tailored to your business or personal brand. Hand-crafted with modern React and Tailwind CSS.',
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
    description: 'Don\'t want the $15/month hosting? No problem! You receive clean, production-ready code you can host anywhere you prefer for $0.',
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
    description: 'Message @SBGwebsites on X with your business name, what services you offer, and any photos or text you want.',
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
