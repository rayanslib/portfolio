import React, { useState } from 'react';
import { Check, ArrowRight, ShieldCheck, Zap, Globe, ArrowUpRight } from 'lucide-react';
import { PricingState } from '../types';
import {
  WEBSITE_TYPES,
  WEBSITE_BASE_PRICE,
  HOSTING_MONTHLY_PRICE,
  calculatePricing,
} from '../utils/estimator';
import { X_PROFILE_URL, X_HANDLE } from '../data/portfolioData';

export const ScopeEstimator: React.FC = () => {
  const [pricingState, setPricingState] = useState<PricingState>({
    websiteType: 'business',
    includeHosting: false, // Default optional!
    hostingBilling: 'monthly',
    extraPages: 0,
  });

  const pricing = calculatePricing(pricingState);
  const types = Object.keys(WEBSITE_TYPES) as (keyof typeof WEBSITE_TYPES)[];

  return (
    <section id="pricing" className="py-24 border-b border-neutral-900 scroll-mt-20 relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="flex items-center justify-center gap-2 text-xs font-semibold text-neutral-400 mb-2.5 tracking-wider uppercase">
            <span className="text-amber-400 font-bold">$10 Website Build</span>
            <span aria-hidden="true">·</span>
            <span>Optional $15/mo Cloud Hosting</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-white tracking-tight text-balance mb-4">
            Transparent pricing. Just $10 to build.
          </h2>
          <p className="text-sm text-neutral-400 leading-relaxed">
            Get your custom website built for <strong className="text-white">$10</strong>. Our $15/month managed cloud hosting is completely <strong className="text-amber-400">optional</strong>—host with us or take the code and host it yourself for free.
          </p>
        </div>

        {/* Pricing Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left: Configurator (7 cols) */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            {/* Step 1: Website Category Selection */}
            <div>
              <span className="text-xs font-mono uppercase tracking-wider text-amber-400 block mb-3 font-semibold">
                01. Select Your Website Style ($10 Flat Build)
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

            {/* Step 2: OPTIONAL Hosting Toggle */}
            <div className="p-5 rounded-2xl bg-neutral-900/50 border border-neutral-800">
              <div className="flex items-start justify-between gap-4 mb-4">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-sm font-bold text-white">
                      Managed Cloud Hosting & Maintenance
                    </span>
                    <span className="text-[10px] uppercase font-mono px-2 py-0.5 rounded bg-amber-400/10 text-amber-300 border border-amber-400/30">
                      Optional
                    </span>
                  </div>
                  <p className="text-xs text-neutral-400 leading-relaxed">
                    Leave unselected if you prefer to host it yourself for $0 (we hand over the complete code). Or check this box if you want us to handle fast cloud servers, free SSL, and updates for $15/month.
                  </p>
                </div>

                {/* Big Interactive Toggle Switch */}
                <button
                  type="button"
                  onClick={() =>
                    setPricingState((prev) => ({
                      ...prev,
                      includeHosting: !prev.includeHosting,
                    }))
                  }
                  className={`relative inline-flex h-7 w-12 shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none ${
                    pricingState.includeHosting ? 'bg-amber-400' : 'bg-neutral-800'
                  }`}
                  role="switch"
                  aria-checked={pricingState.includeHosting}
                >
                  <span
                    className={`pointer-events-none inline-block h-6 w-6 transform rounded-full bg-neutral-950 shadow ring-0 transition duration-200 ease-in-out ${
                      pricingState.includeHosting ? 'translate-x-5' : 'translate-x-0'
                    }`}
                  />
                </button>
              </div>

              {/* If hosting is active, show billing period option */}
              {pricingState.includeHosting && (
                <div className="pt-4 border-t border-neutral-800/80 flex flex-col sm:flex-row gap-3">
                  <button
                    type="button"
                    onClick={() => setPricingState({ ...pricingState, hostingBilling: 'monthly' })}
                    className={`flex-1 p-3 rounded-xl border text-left transition-colors cursor-pointer ${
                      pricingState.hostingBilling === 'monthly'
                        ? 'bg-neutral-900 border-amber-400 text-white'
                        : 'bg-neutral-950 border-neutral-800 text-neutral-400'
                    }`}
                  >
                    <span className="text-xs font-bold block mb-0.5">Monthly Billing</span>
                    <span className="text-sm font-mono text-amber-400 font-bold">$15 / month</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => setPricingState({ ...pricingState, hostingBilling: 'yearly' })}
                    className={`flex-1 p-3 rounded-xl border text-left transition-colors cursor-pointer ${
                      pricingState.hostingBilling === 'yearly'
                        ? 'bg-neutral-900 border-amber-400 text-white'
                        : 'bg-neutral-950 border-neutral-800 text-neutral-400'
                    }`}
                  >
                    <span className="text-xs font-bold block mb-0.5">Annual Billing (2 Months Free)</span>
                    <span className="text-sm font-mono text-amber-400 font-bold">$150 / year</span>
                  </button>
                </div>
              )}
            </div>

            {/* Step 3: Optional Additional Pages */}
            <div className="p-4 rounded-xl bg-neutral-900/40 border border-neutral-800 flex items-center justify-between">
              <div>
                <span className="text-xs font-semibold text-white block mb-0.5">
                  Extra Sub-Pages
                </span>
                <span className="text-[11px] text-neutral-400">
                  Need extra dedicated pages? (+$5 per additional page)
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
                    Total Pricing Breakdown
                  </span>
                  <span className="text-xs font-semibold text-emerald-400 bg-emerald-950/80 px-2 py-0.5 rounded border border-emerald-800/80">
                    No Hidden Fees
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
                    <span className="text-xs text-neutral-400">Cloud Hosting:</span>
                    <span className="text-sm font-bold text-white tabular-nums">
                      {pricing.isHostingIncluded ? (
                        <>
                          ${pricing.hostingPrice}{' '}
                          <span className="text-xs font-normal text-neutral-400">
                            {pricing.hostingPeriodLabel}
                          </span>
                        </>
                      ) : (
                        <span className="text-neutral-400 font-normal">$0 (Self-Hosted)</span>
                      )}
                    </span>
                  </div>

                  <div className="pt-2 border-t border-neutral-800 flex items-baseline justify-between text-xs">
                    <span className="text-neutral-300 font-medium">Total to get started:</span>
                    <span className="text-2xl font-bold text-emerald-400 tabular-nums">
                      ${pricing.totalUpfront}
                    </span>
                  </div>
                </div>

                {/* Included Features Checklist */}
                <div className="space-y-2 mb-6 text-xs text-neutral-300">
                  <div className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>Hand-crafted custom website (No bloated templates)</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>100% Mobile & phone responsive design</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>Full source code ownership (host anywhere)</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>
                      {pricing.isHostingIncluded
                        ? 'Full managed cloud hosting & updates included ($15/mo)'
                        : 'Hosting is optional — self-host anytime for free'}
                    </span>
                  </div>
                </div>

                {/* Guarantee callout */}
                <div className="flex items-center gap-2 p-3 bg-neutral-950/60 rounded-lg border border-neutral-800/80 mb-6 text-[11px] text-neutral-400">
                  <ShieldCheck className="w-4 h-4 text-amber-400 shrink-0" />
                  <span>Ready in 2-3 business days. Order directly on X {X_HANDLE}.</span>
                </div>
              </div>

              {/* Direct X DM Action Button */}
              <a
                href={X_PROFILE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3.5 px-4 text-xs font-bold text-neutral-950 bg-amber-400 hover:bg-amber-300 rounded-lg transition-colors flex items-center justify-center gap-2 shadow-lg shadow-amber-400/10 cursor-pointer"
              >
                <span>Order on X for ${pricing.totalUpfront}</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
