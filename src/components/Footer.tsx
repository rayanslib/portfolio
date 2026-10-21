import React from 'react';
import { Globe, ArrowUp } from 'lucide-react';
import { X_PROFILE_URL, X_HANDLE } from '../data/portfolioData';

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
              <Globe className="w-3.5 h-3.5" />
            </span>
            <span className="font-display font-bold text-white text-base">
              SBG Websites
            </span>
          </div>

          {/* Clean Nav links */}
          <nav className="flex flex-wrap items-center justify-center gap-6 text-neutral-400">
            <a href="#projects" className="hover:text-white transition-colors">
              Selected Works
            </a>
            <a href="#services" className="hover:text-white transition-colors">
              Services
            </a>
            <a href="#pricing" className="hover:text-white transition-colors">
              Pricing ($10)
            </a>
            <a href="#process" className="hover:text-white transition-colors">
              Process
            </a>
            <a href="#why-us" className="hover:text-white transition-colors">
              Deliverables
            </a>
            <a href="#contact" className="hover:text-white transition-colors">
              DM on X
            </a>
          </nav>

          {/* Social X Account & Back to top */}
          <div className="flex items-center gap-4">
            <a
              href={X_PROFILE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-neutral-900 hover:bg-neutral-800 border border-neutral-800 text-neutral-300 hover:text-white transition-colors"
              aria-label="SBG Websites on X"
            >
              <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
              <span>{X_HANDLE}</span>
            </a>

            <button
              onClick={scrollToTop}
              className="flex items-center gap-1.5 text-neutral-400 hover:text-white transition-colors cursor-pointer p-1.5 rounded hover:bg-neutral-900"
              aria-label="Scroll back to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Bottom bar without email */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-neutral-400">
          <p>© {new Date().getFullYear()} SBG Websites. Built with clean React & Tailwind. All rights reserved.</p>
          <div className="flex items-center gap-3 text-neutral-400">
            <span className="text-amber-400 font-medium">$10 Custom Build · Optional $15/mo Cloud Hosting</span>
            <span>·</span>
            <a
              href={X_PROFILE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-neutral-300 hover:text-white underline"
            >
              Contact on X: {X_HANDLE}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
