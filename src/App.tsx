import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { MarqueeTicker } from './components/MarqueeTicker';
import { ProjectsShowcase } from './components/ProjectsShowcase';
import { ScopeEstimator } from './components/ScopeEstimator';
import { ServicesSection } from './components/ServicesSection';
import { ProcessSection } from './components/ProcessSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { ContactSection } from './components/ContactSection';
import { FaqSection } from './components/FaqSection';
import { Footer } from './components/Footer';
import { ArrowUp } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { X_PROFILE_URL, X_HANDLE } from './data/portfolioData';

export default function App() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#0a0a0c] text-neutral-100 flex flex-col font-sans selection:bg-amber-400 selection:text-neutral-950 relative">
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

        {/* Smooth Infinite Marquee Ribbon */}
        <MarqueeTicker />

        {/* Client Showcase (Honest "No websites for now" state) */}
        <ProjectsShowcase />

        {/* Transparent $10 Website & Optional $15/mo Hosting Calculator */}
        <ScopeEstimator />

        {/* Services & Deliverables */}
        <ServicesSection />

        {/* Simple 3-Day Turnaround Process */}
        <ProcessSection />

        {/* Honest Value Pillars & Deliverables */}
        <TestimonialsSection />

        {/* Direct X (@SBGwebsites) DM Ordering Section */}
        <ContactSection />

        {/* Frequently Asked Questions */}
        <FaqSection />
      </main>

      {/* Floating Scroll-to-Top and Fast Action */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            transition={{ duration: 0.2 }}
            className="fixed bottom-6 right-6 z-40 flex items-center gap-2"
          >
            <motion.a
              href={X_PROFILE_URL}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="hidden sm:flex items-center gap-2 px-3.5 py-2.5 rounded-full bg-neutral-900/90 backdrop-blur-md border border-neutral-700/80 text-xs font-semibold text-white shadow-xl hover:border-amber-400/50 transition-colors"
            >
              <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
              <span>DM {X_HANDLE}</span>
            </motion.a>

            <motion.button
              onClick={scrollToTop}
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.92 }}
              className="p-3 rounded-full bg-amber-400 text-neutral-950 shadow-xl hover:bg-amber-300 transition-colors cursor-pointer"
              aria-label="Scroll back to top"
            >
              <ArrowUp className="w-4 h-4 stroke-[2.5]" />
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Footer with clean links and X account only */}
      <Footer />
    </div>
  );
}
