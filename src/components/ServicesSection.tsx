import React from 'react';
import { SERVICES_DATA } from '../data/portfolioData';
import { Code, Compass, ShoppingBag, Zap, Check } from 'lucide-react';

export const ServicesSection: React.FC = () => {
  const iconMap: Record<string, React.ReactNode> = {
    '01': <Compass className="w-5 h-5 text-amber-400" />,
    '02': <Code className="w-5 h-5 text-amber-400" />,
    '03': <ShoppingBag className="w-5 h-5 text-amber-400" />,
    '04': <Zap className="w-5 h-5 text-amber-400" />,
  };

  return (
    <section id="services" className="py-24 border-b border-neutral-900 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold text-neutral-400 mb-2.5 tracking-wider uppercase">
              <span className="text-amber-400">Capabilities & Scope</span>
              <span aria-hidden="true">·</span>
              <span>Full-Stack Craft</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-display font-bold text-white tracking-tight text-balance">
              What I build for ambitious clients.
            </h2>
          </div>
          <p className="text-sm text-neutral-400 max-w-md">
            Every website is custom-architected from scratch. No clunky WordPress themes, slow page builders, or hidden technical debt.
          </p>
        </div>

        {/* 4 Clean Editorial Service Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {SERVICES_DATA.map((service) => (
            <div
              key={service.number}
              className="p-8 rounded-2xl bg-neutral-900/40 border border-neutral-800 hover:border-neutral-700 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-mono text-amber-400 font-semibold tracking-wider">
                    {service.number}. Service
                  </span>
                  <div className="p-2 rounded-lg bg-neutral-900 border border-neutral-800">
                    {iconMap[service.number]}
                  </div>
                </div>

                <h3 className="text-xl font-display font-bold text-white mb-3">
                  {service.title}
                </h3>

                <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed mb-6">
                  {service.description}
                </p>

                {/* Capabilities list */}
                <ul className="space-y-2 mb-6">
                  {service.capabilities.map((cap) => (
                    <li key={cap} className="flex items-center gap-2 text-xs text-neutral-300">
                      <Check className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                      <span>{cap}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Tangible deliverable footnote */}
              <div className="pt-4 border-t border-neutral-800/80 text-[11px] text-neutral-400 flex items-center justify-between">
                <span>Deliverable:</span>
                <span className="font-medium text-neutral-200">{service.deliverable}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
