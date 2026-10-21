import React from 'react';
import { Code2, ArrowUp } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-12 bg-neutral-950 text-neutral-400 text-xs">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-neutral-900">
          {/* Brand */}
          <div className="flex items-center gap-2.5">
            <span className="w-7 h-7 rounded-lg bg-neutral-900 border border-neutral-800 flex items-center justify-center text-amber-400">
              <Code2 className="w-3.5 h-3.5" />
            </span>
            <span className="font-display font-bold text-white text-base">
              Rayan <span className="text-neutral-500 font-normal">/ Web Studio</span>
            </span>
          </div>

          {/* Nav links */}
          <nav className="flex flex-wrap items-center justify-center gap-6 text-neutral-400">
            <a href="#projects" className="hover:text-white transition-colors">
              Selected Works
            </a>
            <a href="#services" className="hover:text-white transition-colors">
              Services
            </a>
            <a href="#estimator" className="hover:text-white transition-colors">
              Cost Estimator
            </a>
            <a href="#process" className="hover:text-white transition-colors">
              Process
            </a>
            <a href="#testimonials" className="hover:text-white transition-colors">
              Client Results
            </a>
            <a href="#contact" className="hover:text-white transition-colors">
              Contact
            </a>
          </nav>

          {/* Back to top */}
          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 text-neutral-400 hover:text-white transition-colors cursor-pointer"
            aria-label="Scroll back to top"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Bottom bar */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-neutral-400">
          <p>© {new Date().getFullYear()} Rayan. All rights reserved. Hand-crafted with React, TypeScript & Tailwind.</p>
          <div className="flex items-center gap-4 text-neutral-400">
            <span>Direct: rayanlhrban@gmail.com</span>
            <span>·</span>
            <span>Available Worldwide</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
