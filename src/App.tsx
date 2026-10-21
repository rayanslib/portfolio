import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { ProjectsShowcase } from './components/ProjectsShowcase';
import { ProjectModal } from './components/ProjectModal';
import { ScopeEstimator } from './components/ScopeEstimator';
import { ServicesSection } from './components/ServicesSection';
import { ProcessSection } from './components/ProcessSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { ContactSection } from './components/ContactSection';
import { FaqSection } from './components/FaqSection';
import { Footer } from './components/Footer';
import { Project } from './types';

export default function App() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [inquiryMessage, setInquiryMessage] = useState('');
  const [inquiryBudget, setInquiryBudget] = useState('');

  // Handle transfer from Pricing Estimator to Contact Form
  const handleApplyScope = (scopeSummary: string, budgetSummary: string) => {
    setInquiryMessage(
      `Hello Rayan, I would like to get my website started: ${scopeSummary}. Total: ${budgetSummary}.`
    );
    setInquiryBudget(budgetSummary);
    const contactElem = document.getElementById('contact');
    if (contactElem) {
      contactElem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Handle request for similar project from Project Modal
  const handleRequestSimilar = (projectTitle: string) => {
    setInquiryMessage(
      `Hello Rayan, I saw the ${projectTitle} website on SBG Websites and would like to build a similar high-performance site for my business ($10 build + $15/mo hosting).`
    );
    const contactElem = document.getElementById('contact');
    if (contactElem) {
      contactElem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#0a0a0c] text-neutral-100 flex flex-col font-sans selection:bg-amber-400 selection:text-neutral-950">
      {/* Top Bar Navigation */}
      <Header
        onOpenPricing={() => scrollToSection('pricing')}
        onOpenContact={() => scrollToSection('contact')}
      />

      <main className="flex-1">
        {/* Split Screen Hero with Interactive Device Bezel */}
        <Hero
          onOpenPricing={() => scrollToSection('pricing')}
          onExploreProjects={() => scrollToSection('projects')}
        />

        {/* Selected Works & Client Website Showcase (Zero E-Commerce) */}
        <ProjectsShowcase onSelectProject={(project) => setSelectedProject(project)} />

        {/* Transparent $10 Website & $15/mo Hosting Pricing Calculator */}
        <ScopeEstimator onApplyScopeToInquiry={handleApplyScope} />

        {/* Services & Capabilities */}
        <ServicesSection />

        {/* Process & Turnaround */}
        <ProcessSection />

        {/* Client Endorsements & Proof */}
        <TestimonialsSection />

        {/* Project Inquiry & X (@SBGwebsites) Direct Contact Form */}
        <ContactSection
          initialMessage={inquiryMessage}
          initialBudget={inquiryBudget}
        />

        {/* Frequently Asked Questions */}
        <FaqSection />
      </main>

      {/* Footer with clean links and X account */}
      <Footer />

      {/* Case Study & Interactive Live Demo Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
        onRequestSimilar={handleRequestSimilar}
      />
    </div>
  );
}
