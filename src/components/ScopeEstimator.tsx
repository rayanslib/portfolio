import React, { useState } from 'react';
import { Check, ArrowRight, ShieldCheck, Zap, Server, Globe } from 'lucide-react';
import { PricingState } from '../types';
import {
  WEBSITE_TYPES,
  WEBSITE_BASE_PRICE,
  HOSTING_MONTHLY_PRICE,
  calculatePricing,
} from '../utils/estimator';
import { X_PROFILE_URL, X_HANDLE } from '../data/portfolioData';

interface ScopeEstimatorProps {
  onApplyScopeToInquiry: (scopeSummary: string, estimatedBudget: string) => void;
}

export const ScopeEstimator: React.FC<ScopeEstimatorProps> = ({ onApplyScopeToInquiry }) => {
  const [pricingState, setPricingState] = useState<PricingState>({
    websiteType: 'business',
    hostingBilling: 'monthly',
    extraPages: 0,
    includeSeo: true,
    includeContactForm: true,
  });

  const pricing = calculatePricing(pricingState);

  const handleClaim = () => {
    const typeLabel = WEBSITE_TYPES[pricingState.websiteType].label;
    const summary = `${typeLabel} ($10 build) with ${pricingState.hostingBilling} hosting ($${pricing.hostingPrice}${pricing.hostingPeriodLabel}) and ${pricingState.extraPages} additional pages.`;
    const budgetSummary = `$${pricing.totalUpfront} upfront ($10 website + $${pricing.hostingPrice} hosting)`;
    onApplyScopeToInquiry(summary, budgetSummary);
  };

  const types = Object.keys(WEBSITE_TYPES) as (keyof typeof WEBSITE_TYPES)[];

  return (
    <section id="pricing" className="py-24 border-b border-neutral-900 scroll-mt-20 relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="flex items-center justify-center gap-2 text-xs font-semibold text-neutral-400 mb-2.5 tracking-wider uppercase">
            <span className="text-amber-400 font-bold">$10 Custom Website</span>
            <span aria-hidden="true">·</span>
            <span>$15/mo Cloud Hosting</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-white tracking-tight text-balance mb-4">
            Simple, honest pricing. No agency markups.
          </h2>
          <p className="text-sm text-neutral-400 leading-relaxed">
            Get a high-performance website custom-built for just <strong className="text-white">$10</strong> with our fast, reliable <strong className="text-white">$15/month</strong> managed cloud hosting service.
          </p>
        </div>

        {/* Pricing Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left: Website & Plan Configurator (7 cols) */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            {/* Step 1: Website Category Selection */}
            <div>
              <span className="text-xs font-mono uppercase tracking-wider text-amber-400 block mb-3">
                01. Select Your Website Type ($10 Flat Build)
              </span>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {types.map((typeKey) => {
                  const item = WEBSITE_TYPES[typeKey];
                  const isSelected = pricingState.websiteType === typeKey;

                  return (
                    <button
                      key={typeKey}
                      type="button"
                      onClick={() => setPricingState({ ...pricingState, websiteType: typeKey })}
                      className={`p-4 rounded-xl border text-left transition-all cursor-pointer ${
                        isSelected
                          ? 'bg-neutral-900 border-amber-400 shadow-md ring-1 ring-amber-400/40'
                          : 'bg-neutral-900/40 border-neutral-800 hover:border-neutral-700'
                      }`}
                    >
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-sm font-bold text-white">{item.label}</span>
                        {isSelected && <Check className="w-4 h-4 text-amber-400" />}
                      </div>
                      <p className="text-xs text-neutral-400 leading-normal mb-2">
                        {item.description}
                      </p>
                      <div className="text-[11px] font-mono text-amber-300 pt-1 border-t border-neutral-800/60">
                        {item.includedPages}
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Step 2: Hosting Service Billing */}
            <div>
              <span className="text-xs font-mono uppercase tracking-wider text-amber-400 block mb-3">
                02. Managed Cloud Hosting & Maintenance Plan
              </span>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <button
                  type="button"
                  onClick={() => setPricingState({ ...pricingState, hostingBilling: 'monthly' })}
                  className={`p-4 rounded-xl border text-left transition-all cursor-pointer ${
                    pricingState.hostingBilling === 'monthly'
                      ? 'bg-neutral-900 border-amber-400 shadow-md ring-1 ring-amber-400/40'
                      : 'bg-neutral-900/40 border-neutral-800 hover:border-neutral-700'
                  }`}
                >
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-sm font-bold text-white">Monthly Hosting Plan</span>
                    <span className="text-sm font-bold text-amber-400 font-mono">$15 / mo</span>
                  </div>
                  <p className="text-xs text-neutral-400">
                    Billed month-to-month. Cancel anytime. Full cloud hosting, SSL, updates & 99.9% uptime.
                  </p>
                </button>

                <button
                  type="button"
                  onClick={() => setPricingState({ ...pricingState, hostingBilling: 'yearly' })}
                  className={`p-4 rounded-xl border text-left transition-all cursor-pointer ${
                    pricingState.hostingBilling === 'yearly'
                      ? 'bg-neutral-900 border-amber-400 shadow-md ring-1 ring-amber-400/40'
                      : 'bg-neutral-900/40 border-neutral-800 hover:border-neutral-700'
                  }`}
                >
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-sm font-bold text-white">Annual Hosting (Save $30)</span>
                    <span className="text-sm font-bold text-amber-400 font-mono">$150 / yr</span>
                  </div>
                  <p className="text-xs text-neutral-400">
                    Pay upfront for the entire year. Get 2 months free hosting + priority maintenance.
                  </p>
                </button>
              </div>
            </div>

            {/* Step 3: Optional Additional Pages */}
            <div className="p-4 rounded-xl bg-neutral-900/40 border border-neutral-800 flex items-center justify-between">
              <div>
                <span className="text-xs font-semibold text-white block mb-0.5">
                  Need extra sub-pages?
                </span>
                <span className="text-[11px] text-neutral-400">
                  Add more detailed service or location pages (+$5 each)
                </span>
              </div>
              <div className="flex items-center gap-3">
                <button
                  type="button"
                  onClick={() =>
                    setPricingState((prev) => ({
                      ...prev,
                      extraPages: Math.max(0, prev.extraPages - 1),
                    }))
                  }
                  className="w-8 h-8 rounded-lg bg-neutral-800 hover:bg-neutral-700 text-white font-bold flex items-center justify-center cursor-pointer"
                >
                  -
                </button>
                <span className="text-xs font-mono font-bold text-white tabular-nums w-4 text-center">
                  {pricingState.extraPages}
                </span>
                <button
                  type="button"
                  onClick={() =>
                    setPricingState((prev) => ({
                      ...prev,
                      extraPages: prev.extraPages + 1,
                    }))
                  }
                  className="w-8 h-8 rounded-lg bg-neutral-800 hover:bg-neutral-700 text-white font-bold flex items-center justify-center cursor-pointer"
                >
                  +
                </button>
              </div>
            </div>
          </div>

          {/* Right: Transparent Price Summary Card (5 cols) */}
          <div className="lg:col-span-5 sticky top-24">
            <div className="p-6 bg-neutral-900 border border-neutral-800 rounded-2xl shadow-xl flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-mono text-neutral-400 uppercase tracking-wider">
                    Total Investment Summary
                  </span>
                  <span className="text-xs font-semibold text-emerald-400 bg-emerald-950/80 px-2 py-0.5 rounded border border-emerald-800/80">
                    Live Launch Package
                  </span>
                </div>

                {/* Big Price Breakdown */}
                <div className="p-4 rounded-xl bg-neutral-950 border border-neutral-800 mb-6">
                  <div className="flex items-baseline justify-between mb-2">
                    <span className="text-xs text-neutral-400">Website Custom Build:</span>
                    <span className="text-xl font-display font-extrabold text-amber-400 tabular-nums">
                      ${pricing.oneTimeWebsitePrice} <span className="text-xs font-normal text-neutral-400">one-time</span>
                    </span>
                  </div>
                  <div className="flex items-baseline justify-between mb-3">
                    <span className="text-xs text-neutral-400">Cloud Hosting & Maintenance:</span>
                    <span className="text-base font-bold text-white tabular-nums">
                      ${pricing.hostingPrice} <span className="text-xs font-normal text-neutral-400">{pricing.hostingPeriodLabel}</span>
                    </span>
                  </div>
                  <div className="pt-2 border-t border-neutral-800 flex items-baseline justify-between text-xs">
                    <span className="text-neutral-300 font-medium">Total to launch today:</span>
                    <span className="text-base font-bold text-emerald-400 tabular-nums">
                      ${pricing.totalUpfront}
                    </span>
                  </div>
                </div>

                {/* Included Features Checklist */}
                <div className="space-y-2 mb-6 text-xs text-neutral-300">
                  <div className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>Custom website designed for your business (No e-commerce bloat)</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>Fast global cloud hosting with 99.9% uptime</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>Free SSL Security Certificate (HTTPS)</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>100% Mobile & tablet responsive on all devices</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>Lead generation contact form with email notifications</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>Ongoing content updates and technical maintenance</span>
                  </div>
                </div>

                {/* Quick Trust Bar */}
                <div className="flex items-center gap-2 p-3 bg-neutral-950/60 rounded-lg border border-neutral-800/80 mb-6 text-[11px] text-neutral-400">
                  <ShieldCheck className="w-4 h-4 text-amber-400 shrink-0" />
                  <span>
                    Turnaround: ~{pricing.turnaroundDays} Days. Or DM on X{' '}
                    <a
                      href={X_PROFILE_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-amber-400 hover:underline font-mono"
                    >
                      {X_HANDLE}
                    </a>
                  </span>
                </div>
              </div>

              {/* Action Button */}
              <button
                type="button"
                onClick={handleClaim}
                className="w-full py-3.5 px-4 text-xs font-semibold text-neutral-950 bg-amber-400 hover:bg-amber-300 rounded-lg transition-colors flex items-center justify-center gap-2 shadow-lg shadow-amber-400/10 cursor-pointer"
              >
                <span>Get My $10 Website Now</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
