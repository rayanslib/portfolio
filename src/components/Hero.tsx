import React from 'react';
import { Sparkles, CheckCircle, ArrowUpRight, ShieldCheck, Zap, Globe, Smartphone, Code2 } from 'lucide-react';
import { CLIENT_STATS, X_PROFILE_URL, X_HANDLE } from '../data/portfolioData';

interface HeroProps {
  onOpenPricing: () => void;
  onExploreProjects: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenPricing, onExploreProjects }) => {
  return (
    <section className="relative pt-32 pb-20 lg:pt-36 lg:pb-24 overflow-hidden border-b border-neutral-900">
      {/* Background radial glow */}
      <div
        className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-amber-500/5 blur-[140px] rounded-full pointer-events-none"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Split Grid: Left Typography / Right $10 Package Showcase Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center mb-16">
          {/* Left Column: Typographic Hierarchy */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            {/* Unboxed Kicker metadata */}
            <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-xs font-medium text-neutral-400 mb-4 tracking-wide">
              <span className="text-amber-400 font-semibold">SBG Websites</span>
              <span aria-hidden="true">·</span>
              <span>$10 Custom Website</span>
              <span aria-hidden="true">·</span>
              <span>Optional $15/mo Cloud Hosting</span>
              <span aria-hidden="true">·</span>
              <a
                href={X_PROFILE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="text-neutral-300 hover:text-white underline underline-offset-2 flex items-center gap-1"
              >
                <span>{X_HANDLE}</span>
              </a>
            </div>

            {/* Display Headline */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold tracking-tight text-white leading-[1.12] mb-6 text-balance">
              Get a custom, high-speed website for <span className="text-amber-400">$10</span>.
            </h1>

            {/* Lead copy */}
            <p className="text-base sm:text-lg text-neutral-300 leading-relaxed mb-8 max-w-xl">
              Professional, modern websites built for local contractors, business owners, agencies, and personal brands. Just <strong className="text-white">$10</strong> for your custom website build, with <strong className="text-amber-400">optional $15/month</strong> managed cloud hosting.
            </p>

            {/* Primary Action Buttons */}
            <div className="flex flex-wrap items-center gap-3.5 mb-8">
              <a
                href={X_PROFILE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3.5 text-sm font-bold text-neutral-950 bg-amber-400 hover:bg-amber-300 rounded-lg transition-colors flex items-center gap-2 shadow-lg shadow-amber-400/10 cursor-pointer"
              >
                <span>Get a $10 Website on X</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>

              <button
                onClick={onOpenPricing}
                className="px-5 py-3.5 text-sm font-medium text-neutral-200 hover:text-white bg-neutral-900/90 hover:bg-neutral-800 border border-neutral-800 rounded-lg transition-colors flex items-center gap-2 cursor-pointer"
              >
                <Sparkles className="w-4 h-4 text-amber-400" />
                <span>See Pricing Calculator</span>
              </button>
            </div>

            {/* Quiet Trust Marker */}
            <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-neutral-400 pt-4 border-t border-neutral-900">
              <span className="inline-flex items-center gap-1.5 text-emerald-400 font-medium">
                <CheckCircle className="w-4 h-4" />
                No E-Commerce Bloat
              </span>
              <span aria-hidden="true" className="hidden sm:inline">·</span>
              <span>Fast 2-3 day turnaround</span>
              <span aria-hidden="true" className="hidden sm:inline">·</span>
              <span>Direct order via X DM @SBGwebsites</span>
            </div>
          </div>

          {/* Right Column: Clean $10 Website Deal Card */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="w-full max-w-md rounded-2xl bg-neutral-900 border border-neutral-800 p-6 sm:p-7 shadow-2xl relative overflow-hidden">
              <div className="flex items-center justify-between pb-4 border-b border-neutral-800 mb-5">
                <div className="flex items-center gap-2">
                  <span className="w-8 h-8 rounded-lg bg-amber-400/10 border border-amber-400/30 flex items-center justify-center text-amber-400">
                    <Globe className="w-4 h-4" />
                  </span>
                  <div>
                    <span className="text-xs font-mono uppercase tracking-wider text-neutral-400 block">
                      Launch Package
                    </span>
                    <span className="text-sm font-bold text-white font-display">
                      Custom Website Deal
                    </span>
                  </div>
                </div>
                <div className="text-right">
                  <span className="text-2xl font-extrabold text-amber-400 font-display tabular-nums">
                    $10
                  </span>
                  <span className="text-[10px] text-neutral-400 block">one-time build</span>
                </div>
              </div>

              {/* What's included checklist */}
              <div className="space-y-3 mb-6 text-xs text-neutral-300">
                <div className="flex items-center gap-2.5">
                  <Code2 className="w-4 h-4 text-amber-400 shrink-0" />
                  <span>Custom modern React + Tailwind website</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Smartphone className="w-4 h-4 text-amber-400 shrink-0" />
                  <span>100% mobile-friendly on all phones & tablets</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Zap className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Ready in 2 to 3 business days</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Hosting is optional (+$15/mo or self-host for $0)</span>
                </div>
              </div>

              {/* Direct X Action Link */}
              <a
                href={X_PROFILE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 px-4 text-xs font-bold text-neutral-950 bg-amber-400 hover:bg-amber-300 rounded-xl transition-colors flex items-center justify-center gap-2 shadow-lg shadow-amber-400/15 cursor-pointer"
              >
                <span>Order on X ({X_HANDLE})</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>

              <div className="mt-3 text-center text-[11px] text-neutral-400">
                Send a quick DM with your business name to get started.
              </div>
            </div>
          </div>
        </div>

        {/* 4-Column Proof & Offer Strip */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-6 rounded-2xl bg-neutral-900/60 border border-neutral-800">
          {CLIENT_STATS.map((stat) => (
            <div key={stat.label} className="flex flex-col">
              <span className="text-2xl sm:text-3xl font-display font-extrabold text-amber-400 tracking-tight tabular-nums mb-1">
                {stat.value}
              </span>
              <span className="text-xs font-semibold text-neutral-200 mb-0.5">
                {stat.label}
              </span>
              <span className="text-[11px] text-neutral-400">
                {stat.subtext}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
