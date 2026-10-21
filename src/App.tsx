import React from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { ProjectsShowcase } from './components/ProjectsShowcase';
import { ScopeEstimator } from './components/ScopeEstimator';
import { ServicesSection } from './components/ServicesSection';
import { ProcessSection } from './components/ProcessSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { ContactSection } from './components/ContactSection';
import { FaqSection } from './components/FaqSection';
import { Footer } from './components/Footer';

export default function App() {
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
        {/* Split Screen Hero with $10 Deal Card */}
        <Hero
          onOpenPricing={() => scrollToSection('pricing')}
          onExploreProjects={() => scrollToSection('projects')}
        />

        {/* Client Showcase (Honest "No websites for now" state) */}
        <ProjectsShowcase />

        {/* Transparent $10 Website & Optional $15/mo Hosting Calculator */}
        <ScopeEstimator />

        {/* Services & Deliverables */}
        <ServicesSection />

        {/* Simple 3-Day Turnaround Process */}
        <ProcessSection />

        {/* Honest Value Pillars & Deliverables (Zero Fake Comments) */}
        <TestimonialsSection />

        {/* Direct X (@SBGwebsites) DM Ordering Section */}
        <ContactSection />

        {/* Frequently Asked Questions */}
        <FaqSection />
      </main>

      {/* Footer with clean links and X account only */}
      <Footer />
    </div>
  );
}
