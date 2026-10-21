import React, { useState } from 'react';
import { ArrowDown, Sparkles, Monitor, Smartphone, CheckCircle, ExternalLink } from 'lucide-react';
import { HERO_IMAGE, CLIENT_STATS } from '../data/portfolioData';

interface HeroProps {
  onOpenEstimator: () => void;
  onExploreProjects: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenEstimator, onExploreProjects }) => {
  const [activeDeviceView, setActiveDeviceView] = useState<'desktop' | 'mobile'>('desktop');

  return (
    <section className="relative pt-32 pb-20 lg:pt-36 lg:pb-24 overflow-hidden border-b border-neutral-900">
      {/* Background radial glow */}
      <div
        className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-amber-500/5 blur-[140px] rounded-full pointer-events-none"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Split Grid: Left Typography / Right Visual Mockup */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center mb-16">
          {/* Left Column: Typographic Hierarchy */}
          <div className="lg:col-span-6 xl:col-span-6 flex flex-col justify-center">
            {/* Unboxed Kicker metadata */}
            <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-xs font-medium text-neutral-400 mb-4 tracking-wide">
              <span className="text-amber-400 font-semibold">Web Developer & Designer</span>
              <span aria-hidden="true">·</span>
              <span>Next.js & Full-Stack</span>
              <span aria-hidden="true">·</span>
              <span>Available for Hire</span>
            </div>

            {/* Display Headline */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold tracking-tight text-white leading-[1.12] mb-6 text-balance">
              I build custom, high-speed websites that turn visitors into clients.
            </h1>

            {/* Lead copy */}
            <p className="text-base sm:text-lg text-neutral-300 leading-relaxed mb-8 max-w-xl">
              Specializing in custom e-commerce platforms, SaaS marketing sites, and high-performance web applications. Zero cookie-cutter templates—every site is hand-crafted with clean code, sub-second speeds, and conversion-focused design.
            </p>

            {/* Primary Action Buttons */}
            <div className="flex flex-wrap items-center gap-3.5 mb-8">
              <button
                onClick={onExploreProjects}
                className="px-6 py-3 text-sm font-semibold text-neutral-950 bg-amber-400 hover:bg-amber-300 rounded-lg transition-colors flex items-center gap-2 shadow-lg shadow-amber-400/10 cursor-pointer"
              >
                <span>Explore Selected Works</span>
                <ArrowDown className="w-4 h-4" />
              </button>

              <button
                onClick={onOpenEstimator}
                className="px-5 py-3 text-sm font-medium text-neutral-200 hover:text-white bg-neutral-900/90 hover:bg-neutral-800 border border-neutral-800 rounded-lg transition-colors flex items-center gap-2 cursor-pointer"
              >
                <Sparkles className="w-4 h-4 text-amber-400" />
                <span>Estimate Project Cost</span>
              </button>
            </div>

            {/* Quiet Trust Marker */}
            <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-neutral-400 pt-4 border-t border-neutral-900">
              <span className="inline-flex items-center gap-1.5 text-emerald-400 font-medium">
                <CheckCircle className="w-4 h-4" />
                Open for Q2/Q3 bookings
              </span>
              <span aria-hidden="true" className="hidden sm:inline">·</span>
              <span>Direct engineer & designer partnership</span>
              <span aria-hidden="true" className="hidden sm:inline">·</span>
              <span>No agency middlemen</span>
            </div>
          </div>

          {/* Right Column: Interactive Bezel Mockup with Device Viewport Switcher */}
          <div className="lg:col-span-6 xl:col-span-6 flex flex-col items-center">
            {/* Viewport switcher segmented control */}
            <div className="flex items-center justify-between w-full max-w-md mb-3 px-1">
              <span className="text-xs font-mono text-neutral-400 uppercase tracking-wider">
                Live Studio Showcase
              </span>
              <div className="inline-flex items-center gap-1 p-1 bg-neutral-900 border border-neutral-800 rounded-lg">
                <button
                  type="button"
                  onClick={() => setActiveDeviceView('desktop')}
                  className={`flex items-center gap-1.5 px-3 py-1 text-xs font-medium rounded-md transition-colors ${
                    activeDeviceView === 'desktop'
                      ? 'bg-neutral-800 text-white shadow-sm'
                      : 'text-neutral-400 hover:text-white'
                  }`}
                  aria-label="View desktop showcase layout"
                >
                  <Monitor className="w-3.5 h-3.5" />
                  <span>Desktop</span>
                </button>
                <button
                  type="button"
                  onClick={() => setActiveDeviceView('mobile')}
                  className={`flex items-center gap-1.5 px-3 py-1 text-xs font-medium rounded-md transition-colors ${
                    activeDeviceView === 'mobile'
                      ? 'bg-neutral-800 text-white shadow-sm'
                      : 'text-neutral-400 hover:text-white'
                  }`}
                  aria-label="View mobile showcase layout"
                >
                  <Smartphone className="w-3.5 h-3.5" />
                  <span>Mobile</span>
                </button>
              </div>
            </div>

            {/* Device Container Frame */}
            <div className="w-full flex justify-center">
              {activeDeviceView === 'desktop' ? (
                /* Desktop Browser Frame */
                <div className="w-full max-w-xl rounded-xl border border-neutral-800 bg-neutral-900/90 shadow-2xl overflow-hidden transition-all duration-300">
                  {/* Browser Window Header */}
                  <div className="flex items-center justify-between px-4 py-2.5 bg-neutral-900 border-b border-neutral-800">
                    <div className="flex items-center gap-1.5">
                      <div className="w-2.5 h-2.5 rounded-full bg-neutral-700" />
                      <div className="w-2.5 h-2.5 rounded-full bg-neutral-700" />
                      <div className="w-2.5 h-2.5 rounded-full bg-neutral-700" />
                    </div>
                    <div className="px-3 py-1 rounded bg-neutral-950 text-neutral-400 text-xs font-mono flex items-center gap-1.5 border border-neutral-800/80 max-w-[260px] truncate">
                      <span className="w-2 h-2 rounded-full bg-emerald-500/80 inline-block" />
                      <span className="truncate">https://rayanstudio.dev/live-works</span>
                    </div>
                    <span className="text-[11px] font-mono text-neutral-500">100 FPS</span>
                  </div>

                  {/* Browser Content */}
                  <div className="relative aspect-[16/10] bg-neutral-950 overflow-hidden group">
                    <img
                      src={HERO_IMAGE}
                      alt="Modern studio workspace showing custom architectural websites designed by Rayan"
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      loading="eager"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/80 via-transparent to-transparent pointer-events-none" />

                    {/* Floating pill-less metadata callout */}
                    <div className="absolute bottom-3 left-3 right-3 p-3 rounded-lg bg-neutral-900/90 backdrop-blur-md border border-neutral-700/60 flex items-center justify-between text-xs text-neutral-200">
                      <div>
                        <p className="font-semibold text-white">Full-Stack Custom Client Websites</p>
                        <p className="text-neutral-400 text-[11px]">Next.js · Tailwind · Shopify Plus · Sub-0.7s LCP</p>
                      </div>
                      <button
                        onClick={onExploreProjects}
                        className="px-2.5 py-1 text-[11px] font-medium bg-amber-400 text-neutral-950 rounded hover:bg-amber-300 transition-colors flex items-center gap-1 cursor-pointer"
                      >
                        Inspect
                        <ExternalLink className="w-3 h-3" />
                      </button>
                    </div>
                  </div>
                </div>
              ) : (
                /* Mobile Phone Frame */
                <div className="w-full max-w-[280px] rounded-[36px] border-[6px] border-neutral-800 bg-neutral-950 shadow-2xl p-2 transition-all duration-300">
                  <div className="relative aspect-[9/17] rounded-[28px] overflow-hidden bg-neutral-900 border border-neutral-800/80">
                    {/* Speaker notch */}
                    <div className="absolute top-2 left-1/2 -translate-x-1/2 w-16 h-3.5 bg-neutral-950 rounded-full z-10" />

                    <img
                      src={HERO_IMAGE}
                      alt="Mobile responsive web experience preview"
                      className="w-full h-full object-cover"
                      loading="lazy"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/40 to-transparent" />

                    <div className="absolute bottom-4 left-3 right-3 text-center">
                      <p className="text-xs font-bold text-white mb-0.5">Fluid Mobile Architecture</p>
                      <p className="text-[11px] text-neutral-400 mb-2.5">Thumb-driven navigation & 60fps gesture touch</p>
                      <button
                        onClick={onExploreProjects}
                        className="w-full py-1.5 text-xs font-semibold bg-amber-400 text-neutral-950 rounded-lg"
                      >
                        Browse Mobile Demos
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* 4-Column Proof & KPI Strip Placed in a Full-Width Row Below the Hero Split (Rule 13) */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-6 rounded-2xl bg-neutral-900/60 border border-neutral-800">
          {CLIENT_STATS.map((stat) => (
            <div key={stat.label} className="flex flex-col">
              <span className="text-2xl sm:text-3xl font-display font-extrabold text-white tracking-tight tabular-nums mb-1">
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
