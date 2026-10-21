import React from 'react';
import { Sparkles, ArrowUpRight, Clock, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { X_PROFILE_URL, X_HANDLE } from '../data/portfolioData';

export const ProjectsShowcase: React.FC = () => {
  return (
    <section id="projects" className="py-24 border-b border-neutral-900 scroll-mt-20">
      <div className="max-w-4xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-2 text-xs font-semibold text-neutral-400 mb-2.5 tracking-wider uppercase">
            <span className="text-amber-400">Portfolio</span>
            <span aria-hidden="true">·</span>
            <span>Client Work</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-white tracking-tight mb-4">
            Client Showcase
          </h2>
        </div>

        {/* Honest "No websites for now" Card */}
        <div className="p-8 sm:p-12 rounded-3xl bg-neutral-900/40 border border-neutral-800 text-center relative overflow-hidden">
          <div className="w-14 h-14 rounded-2xl bg-amber-400/10 border border-amber-400/30 flex items-center justify-center text-amber-400 mx-auto mb-5">
            <Sparkles className="w-7 h-7" />
          </div>

          <h3 className="text-2xl sm:text-3xl font-display font-bold text-white mb-3">
            No websites for now.
          </h3>

          <p className="text-sm sm:text-base text-neutral-300 max-w-lg mx-auto mb-8 leading-relaxed">
            We just opened up our <strong className="text-amber-400">$10 custom website offer</strong>. Be one of our very first clients to get a high-speed, modern website built for just $10 and get featured right here!
          </p>

          {/* Direct CTA */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
            <a
              href={X_PROFILE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3.5 text-xs font-bold text-neutral-950 bg-amber-400 hover:bg-amber-300 rounded-xl transition-all flex items-center justify-center gap-2 shadow-lg shadow-amber-400/10 cursor-pointer"
            >
              <span>Get Your Website for $10 on X</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>

          {/* Quick Perks */}
          <div className="flex flex-wrap items-center justify-center gap-6 text-xs text-neutral-400 pt-6 border-t border-neutral-800/80">
            <div className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              <span>$10 flat creation</span>
            </div>
            <div className="flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>Optional $15/mo hosting</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Clock className="w-4 h-4 text-amber-400" />
              <span>2-3 day turnaround</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
