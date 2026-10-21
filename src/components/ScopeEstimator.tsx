import React, { useState } from 'react';
import { Calculator, Check, ArrowRight, Clock, ShieldCheck, Sparkles } from 'lucide-react';
import { ProjectTier, EstimatorState } from '../types';
import {
  BASE_TIER_CONFIG,
  AVAILABLE_FEATURES,
  calculateProjectEstimate,
} from '../utils/estimator';

interface ScopeEstimatorProps {
  onApplyScopeToInquiry: (scopeSummary: string, estimatedBudget: string) => void;
}

export const ScopeEstimator: React.FC<ScopeEstimatorProps> = ({ onApplyScopeToInquiry }) => {
  const [estimatorState, setEstimatorState] = useState<EstimatorState>({
    tier: 'business',
    features: ['cms', 'seo'],
    timeline: 'standard',
  });

  const tiers: ProjectTier[] = ['landing', 'business', 'ecommerce', 'custom_app'];

  const toggleFeature = (featureId: string) => {
    setEstimatorState((prev) => {
      const exists = prev.features.includes(featureId);
      return {
        ...prev,
        features: exists
          ? prev.features.filter((id) => id !== featureId)
          : [...prev.features, featureId],
      };
    });
  };

  const estimate = calculateProjectEstimate(estimatorState);

  const handleTransfer = () => {
    const summary = `${estimate.tierLabel} with ${estimatorState.features.length} selected modules (${estimatorState.features.join(', ')}) on a ${estimatorState.timeline} timeline (~${estimate.estimatedWeeks} weeks).`;
    const budgetRange = `$${estimate.minPrice.toLocaleString()} - $${estimate.maxPrice.toLocaleString()}`;
    onApplyScopeToInquiry(summary, budgetRange);
  };

  return (
    <section id="estimator" className="py-24 border-b border-neutral-900 scroll-mt-20 relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="flex items-center justify-center gap-2 text-xs font-semibold text-neutral-400 mb-2.5 tracking-wider uppercase">
            <Calculator className="w-3.5 h-3.5 text-amber-400" />
            <span>Transparent Pricing & Scope</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-white tracking-tight text-balance mb-4">
            Interactive Project Cost & Timeline Estimator.
          </h2>
          <p className="text-sm text-neutral-400 leading-relaxed">
            Select your requirements below to see an instant realistic investment range and turnaround schedule before we talk.
          </p>
        </div>

        {/* Main Grid: Configurator on Left, Sticky Summary on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Tiers and Features Selection (8 cols) */}
          <div className="lg:col-span-8 flex flex-col gap-8">
            {/* Step 1: Project Tier */}
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-mono uppercase tracking-wider text-amber-400">
                  Step 01 / Select Project Type
                </span>
                <span className="text-xs text-neutral-400">All tiers include responsive mobile layout</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                {tiers.map((tierKey) => {
                  const cfg = BASE_TIER_CONFIG[tierKey];
                  const isSelected = estimatorState.tier === tierKey;

                  return (
                    <button
                      key={tierKey}
                      type="button"
                      onClick={() => setEstimatorState({ ...estimatorState, tier: tierKey })}
                      className={`p-4 rounded-xl border text-left transition-all cursor-pointer ${
                        isSelected
                          ? 'bg-neutral-900 border-amber-400 shadow-lg shadow-amber-400/5 ring-1 ring-amber-400/40'
                          : 'bg-neutral-900/40 border-neutral-800 hover:border-neutral-700'
                      }`}
                    >
                      <div className="flex items-center justify-between mb-1.5">
                        <span className="text-sm font-bold text-white">{cfg.label}</span>
                        {isSelected && <Check className="w-4 h-4 text-amber-400" />}
                      </div>
                      <p className="text-xs text-neutral-400 mb-3">{cfg.defaultPages}</p>
                      <div className="flex items-center justify-between pt-2 border-t border-neutral-800/80 text-xs">
                        <span className="font-mono text-neutral-300 tabular-nums">
                          From ${cfg.basePrice.toLocaleString()}
                        </span>
                        <span className="text-neutral-500 font-mono">
                          ~{Math.round(cfg.baseDays / 5)} wks
                        </span>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Step 2: Features & Architecture Modules */}
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-mono uppercase tracking-wider text-amber-400">
                  Step 02 / Choose Technical Capabilities
                </span>
                <span className="text-xs text-neutral-400">Add modules as needed</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {AVAILABLE_FEATURES.map((feature) => {
                  const isChecked = estimatorState.features.includes(feature.id);

                  return (
                    <div
                      key={feature.id}
                      onClick={() => toggleFeature(feature.id)}
                      className={`p-3.5 rounded-xl border text-left transition-all cursor-pointer flex items-start justify-between gap-3 ${
                        isChecked
                          ? 'bg-neutral-900/90 border-amber-400/80'
                          : 'bg-neutral-900/30 border-neutral-800 hover:border-neutral-700'
                      }`}
                    >
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <span
                            className={`w-4 h-4 rounded flex items-center justify-center border transition-colors ${
                              isChecked
                                ? 'bg-amber-400 border-amber-400 text-neutral-950'
                                : 'border-neutral-700 bg-neutral-950'
                            }`}
                          >
                            {isChecked && <Check className="w-3 h-3 stroke-[3]" />}
                          </span>
                          <span className="text-xs font-semibold text-white">{feature.label}</span>
                        </div>
                        <p className="text-[11px] text-neutral-400 leading-normal pl-6">
                          {feature.description}
                        </p>
                      </div>
                      <span className="text-xs font-mono text-neutral-300 shrink-0 tabular-nums pt-0.5">
                        +${feature.price}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Step 3: Timeline & Schedule */}
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-mono uppercase tracking-wider text-amber-400">
                  Step 03 / Launch Timeline
                </span>
              </div>

              <div className="grid grid-cols-3 gap-3">
                {[
                  { id: 'rush', label: 'Rush Launch', subtext: 'Compressed delivery (+25%)' },
                  { id: 'standard', label: 'Standard Pace', subtext: 'Optimal quality schedule' },
                  { id: 'flexible', label: 'Flexible Launch', subtext: 'Relaxed kickoff (-5%)' },
                ].map((speed) => (
                  <button
                    key={speed.id}
                    type="button"
                    onClick={() =>
                      setEstimatorState({
                        ...estimatorState,
                        timeline: speed.id as EstimatorState['timeline'],
                      })
                    }
                    className={`p-3 rounded-xl border text-left transition-colors cursor-pointer ${
                      estimatorState.timeline === speed.id
                        ? 'bg-neutral-900 border-amber-400'
                        : 'bg-neutral-900/30 border-neutral-800 hover:border-neutral-700'
                    }`}
                  >
                    <span className="text-xs font-bold text-white block mb-0.5">{speed.label}</span>
                    <span className="text-[11px] text-neutral-400 block">{speed.subtext}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Calculated Investment Summary (4 cols sticky) */}
          <div className="lg:col-span-4 sticky top-24">
            <div className="p-6 bg-neutral-900 border border-neutral-800 rounded-2xl shadow-xl flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 text-xs font-mono text-neutral-400 uppercase tracking-wider mb-3">
                  <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                  <span>Estimated Project Scope</span>
                </div>

                {/* Big Price Range */}
                <div className="mb-4">
                  <div className="text-2xl sm:text-3xl font-display font-extrabold text-white tracking-tight tabular-nums">
                    ${estimate.minPrice.toLocaleString()} - ${estimate.maxPrice.toLocaleString()}
                  </div>
                  <span className="text-xs text-neutral-400">
                    All-inclusive estimate (Design, Code, SEO & Testing)
                  </span>
                </div>

                {/* Delivery Timeframe */}
                <div className="flex items-center gap-2 p-3 bg-neutral-950 rounded-xl border border-neutral-800 mb-6 text-xs text-neutral-300">
                  <Clock className="w-4 h-4 text-amber-400 shrink-0" />
                  <div>
                    <span className="font-semibold text-white">
                      Estimated Turnaround: ~{estimate.estimatedWeeks} Weeks
                    </span>
                    <p className="text-[11px] text-neutral-400">From kickoff to live domain launch</p>
                  </div>
                </div>

                {/* Scope Breakdown List */}
                <div className="space-y-2 pb-6 border-b border-neutral-800 text-xs text-neutral-300">
                  <div className="flex justify-between">
                    <span className="text-neutral-400">Base Tier:</span>
                    <span className="font-medium text-white text-right">{estimate.tierLabel}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-neutral-400">Add-On Modules:</span>
                    <span className="font-mono text-white tabular-nums">
                      {estimate.selectedFeaturesCount} selected
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-neutral-400">Timeline:</span>
                    <span className="capitalize font-medium text-white">{estimatorState.timeline}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-neutral-400">Payment Milestones:</span>
                    <span className="font-mono text-white">50% Kickoff / 50% Launch</span>
                  </div>
                </div>

                {/* Guarantee trust callout */}
                <div className="flex items-start gap-2 pt-4 mb-6 text-[11px] text-neutral-400">
                  <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>
                    Fixed price contract guarantee. No surprise hourly overages. Free 30-day post-launch warranty.
                  </span>
                </div>
              </div>

              {/* Transfer CTA Button */}
              <button
                type="button"
                onClick={handleTransfer}
                className="w-full py-3 px-4 text-xs font-semibold text-neutral-950 bg-amber-400 hover:bg-amber-300 rounded-lg transition-colors flex items-center justify-center gap-2 shadow-lg shadow-amber-400/10 cursor-pointer"
              >
                <span>Transfer Scope to Proposal Request</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
