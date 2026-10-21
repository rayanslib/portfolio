import React from 'react';
import { PROCESS_STEPS } from '../data/portfolioData';

export const ProcessSection: React.FC = () => {
  return (
    <section id="process" className="py-24 border-b border-neutral-900 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold text-neutral-400 mb-2.5 tracking-wider uppercase">
              <span className="text-amber-400">Collaborative Process</span>
              <span aria-hidden="true">·</span>
              <span>Predictable Timeline</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-display font-bold text-white tracking-tight text-balance">
              How we take your website from concept to live deployment.
            </h2>
          </div>
          <p className="text-sm text-neutral-400 max-w-md">
            A structured four-stage methodology with regular asynchronous Loom walk-throughs and staging links, keeping you in full control every week.
          </p>
        </div>

        {/* 4 Process Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {PROCESS_STEPS.map((step) => (
            <div
              key={step.step}
              className="p-6 rounded-2xl bg-neutral-900/40 border border-neutral-800 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-2xl font-display font-extrabold text-white/20">
                    {step.step}
                  </span>
                  <span className="text-xs font-mono text-amber-400 font-semibold px-2 py-0.5 rounded bg-neutral-900 border border-neutral-800">
                    {step.timeline}
                  </span>
                </div>

                <h3 className="text-base font-bold text-white mb-2">
                  {step.name}
                </h3>

                <p className="text-xs text-neutral-300 leading-relaxed">
                  {step.description}
                </p>
              </div>

              <div className="pt-4 mt-6 border-t border-neutral-800/60 text-[11px] text-neutral-400">
                Weekly staging review
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
