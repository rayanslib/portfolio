import React, { useState, useEffect } from 'react';
import {
  X,
  Monitor,
  Smartphone,
  Gauge,
  CheckCircle2,
  PhoneCall,
  Calendar,
  Layers,
  ArrowRight,
  TrendingUp,
  Briefcase,
  Home
} from 'lucide-react';
import { Project } from '../types';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
  onRequestSimilar: (projectTitle: string) => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({
  project,
  onClose,
  onRequestSimilar,
}) => {
  const [activeTab, setActiveTab] = useState<'simulator' | 'audit'>('simulator');
  const [deviceMode, setDeviceMode] = useState<'desktop' | 'mobile'>('desktop');

  // Interactive Simulator States
  // 1. Contractor Simulator
  const [contractorCategory, setContractorCategory] = useState<'all' | 'custom_homes' | 'remodel'>('all');
  const [quoteRequested, setQuoteRequested] = useState(false);

  // 2. Consulting Simulator
  const [activePractice, setActivePractice] = useState<'strategy' | 'finance' | 'governance'>('strategy');
  const [bookingConfirmed, setBookingConfirmed] = useState(false);

  // 3. SaaS Landing Simulator
  const [timeRange, setTimeRange] = useState<'7d' | '30d' | '90d'>('30d');
  const [activeMetricTab, setActiveMetricTab] = useState<'revenue' | 'users' | 'uptime'>('revenue');

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!project) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-neutral-950/90 backdrop-blur-md overflow-y-auto animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-5xl my-auto bg-neutral-900 border border-neutral-800 rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[92vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Top Bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-neutral-800 bg-neutral-950">
          <div className="flex items-center gap-3">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
            <div>
              <div className="flex items-center gap-2 text-xs text-neutral-400">
                <span className="font-semibold text-white">{project.title}</span>
                <span>·</span>
                <span>{project.categoryLabel}</span>
                <span>·</span>
                <span className="text-amber-400">$10 Build Plan</span>
              </div>
            </div>
          </div>

          {/* Mode Switcher & Close Button */}
          <div className="flex items-center gap-3">
            <div className="hidden sm:flex items-center p-1 bg-neutral-900 border border-neutral-800 rounded-lg text-xs">
              <button
                onClick={() => setActiveTab('simulator')}
                className={`px-3 py-1 font-medium rounded-md transition-colors ${
                  activeTab === 'simulator'
                    ? 'bg-amber-400 text-neutral-950 font-semibold shadow-sm'
                    : 'text-neutral-300 hover:text-white'
                }`}
              >
                Interactive Preview
              </button>
              <button
                onClick={() => setActiveTab('audit')}
                className={`px-3 py-1 font-medium rounded-md transition-colors ${
                  activeTab === 'audit'
                    ? 'bg-amber-400 text-neutral-950 font-semibold shadow-sm'
                    : 'text-neutral-300 hover:text-white'
                }`}
              >
                Case Study & Audit
              </button>
            </div>

            <button
              onClick={onClose}
              className="p-1.5 text-neutral-400 hover:text-white hover:bg-neutral-800 rounded-lg transition-colors cursor-pointer"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Mobile Tab Switcher */}
        <div className="sm:hidden flex border-b border-neutral-800 bg-neutral-950 text-xs font-medium">
          <button
            onClick={() => setActiveTab('simulator')}
            className={`flex-1 py-2.5 text-center border-b-2 ${
              activeTab === 'simulator'
                ? 'border-amber-400 text-amber-400 font-semibold'
                : 'border-transparent text-neutral-400'
            }`}
          >
            Interactive Demo
          </button>
          <button
            onClick={() => setActiveTab('audit')}
            className={`flex-1 py-2.5 text-center border-b-2 ${
              activeTab === 'audit'
                ? 'border-amber-400 text-amber-400 font-semibold'
                : 'border-transparent text-neutral-400'
            }`}
          >
            Case Study
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 overflow-y-auto flex-1">
          {activeTab === 'simulator' ? (
            /* ================= TAB 1: INTERACTIVE SIMULATOR ================= */
            <div className="flex flex-col gap-5">
              {/* Simulator Toolbar */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 p-3 bg-neutral-950/70 border border-neutral-800/80 rounded-xl text-xs">
                <div className="flex items-center gap-2">
                  <span className="font-mono text-neutral-400 uppercase tracking-wider text-[11px]">
                    Interactive Client Sandbox
                  </span>
                  <span className="text-neutral-600">|</span>
                  <span className="text-neutral-300 font-mono text-[11px] truncate">
                    https://sbgwebsites.com/demo/{project.id}
                  </span>
                </div>

                {/* Viewport Width Switcher */}
                <div className="flex items-center gap-2">
                  <span className="text-neutral-400 text-[11px] hidden sm:inline">Test Viewport:</span>
                  <div className="inline-flex p-0.5 bg-neutral-900 border border-neutral-800 rounded-md">
                    <button
                      onClick={() => setDeviceMode('desktop')}
                      className={`flex items-center gap-1 px-2.5 py-1 rounded text-xs transition-colors ${
                        deviceMode === 'desktop'
                          ? 'bg-neutral-800 text-white font-medium'
                          : 'text-neutral-400 hover:text-white'
                      }`}
                    >
                      <Monitor className="w-3.5 h-3.5" />
                      <span>Desktop 1440px</span>
                    </button>
                    <button
                      onClick={() => setDeviceMode('mobile')}
                      className={`flex items-center gap-1 px-2.5 py-1 rounded text-xs transition-colors ${
                        deviceMode === 'mobile'
                          ? 'bg-neutral-800 text-white font-medium'
                          : 'text-neutral-400 hover:text-white'
                      }`}
                    >
                      <Smartphone className="w-3.5 h-3.5" />
                      <span>Mobile 390px</span>
                    </button>
                  </div>
                </div>
              </div>

              {/* Device Frame */}
              <div className="flex justify-center w-full">
                <div
                  className={`w-full transition-all duration-300 rounded-xl border border-neutral-800 bg-neutral-950 shadow-inner overflow-hidden ${
                    deviceMode === 'desktop' ? 'max-w-4xl' : 'max-w-[360px]'
                  }`}
                >
                  {/* Browser Window Header Chrome */}
                  <div className="flex items-center justify-between px-3.5 py-2 bg-neutral-900 border-b border-neutral-800">
                    <div className="flex items-center gap-1.5">
                      <div className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
                      <div className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                      <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
                    </div>
                    <div className="px-2.5 py-0.5 rounded bg-neutral-950 text-neutral-400 text-[11px] font-mono border border-neutral-800/80 truncate max-w-[240px]">
                      demo.sbgwebsites.com/{project.id}
                    </div>
                    <div className="text-[10px] text-emerald-400 font-mono flex items-center gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                      Live Demo
                    </div>
                  </div>

                  {/* PROJECT-SPECIFIC INTERACTIVE CONTENT (NO E-COMMERCE) */}
                  <div className="p-4 sm:p-6 bg-neutral-950 min-h-[380px] text-neutral-100">
                    {/* AETHER CONTRACTOR SIMULATOR */}
                    {project.interactivePreviewType === 'contractor' && (
                      <div className="flex flex-col gap-4">
                        <div className="flex items-center justify-between pb-3 border-b border-neutral-800">
                          <div className="flex items-center gap-2">
                            <Home className="w-4 h-4 text-amber-400" />
                            <span className="text-base font-bold tracking-tight text-white font-display">
                              AETHER DESIGN BUILD
                            </span>
                          </div>
                          <button
                            onClick={() => setQuoteRequested(true)}
                            className="px-3 py-1.5 text-xs font-semibold bg-amber-400 text-neutral-950 rounded-lg hover:bg-amber-300 transition-colors flex items-center gap-1 cursor-pointer"
                          >
                            <PhoneCall className="w-3 h-3" />
                            <span>Request Quote</span>
                          </button>
                        </div>

                        {quoteRequested && (
                          <div className="p-3 bg-emerald-950/80 border border-emerald-800 rounded-xl text-xs text-emerald-200 flex items-center justify-between animate-in fade-in">
                            <span>Quote request received! Contractor callback dispatched within 2 hours.</span>
                            <button
                              onClick={() => setQuoteRequested(false)}
                              className="text-neutral-400 hover:text-white"
                            >
                              ✕
                            </button>
                          </div>
                        )}

                        <div className="flex items-center gap-2">
                          <button
                            onClick={() => setContractorCategory('all')}
                            className={`px-3 py-1 text-xs rounded-md ${
                              contractorCategory === 'all'
                                ? 'bg-neutral-200 text-neutral-950 font-semibold'
                                : 'bg-neutral-900 text-neutral-400 hover:text-white'
                            }`}
                          >
                            All Projects
                          </button>
                          <button
                            onClick={() => setContractorCategory('custom_homes')}
                            className={`px-3 py-1 text-xs rounded-md ${
                              contractorCategory === 'custom_homes'
                                ? 'bg-neutral-200 text-neutral-950 font-semibold'
                                : 'bg-neutral-900 text-neutral-400 hover:text-white'
                            }`}
                          >
                            Custom Homes
                          </button>
                          <button
                            onClick={() => setContractorCategory('remodel')}
                            className={`px-3 py-1 text-xs rounded-md ${
                              contractorCategory === 'remodel'
                                ? 'bg-neutral-200 text-neutral-950 font-semibold'
                                : 'bg-neutral-900 text-neutral-400 hover:text-white'
                            }`}
                          >
                            Remodeling
                          </button>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-1">
                          <div className="p-3.5 bg-neutral-900/60 border border-neutral-800 rounded-xl flex flex-col justify-between">
                            <div>
                              <div className="text-[11px] text-amber-400 mb-1">Architectural Build · 2025</div>
                              <h4 className="text-sm font-semibold text-white">The Fjord Residence</h4>
                              <p className="text-xs text-neutral-400 mt-1 mb-3">
                                4,200 sq.ft contemporary hillside construction with floor-to-ceiling glass.
                              </p>
                            </div>
                            <span className="text-xs text-neutral-300 font-mono">Status: Completed · 5-Star Review</span>
                          </div>

                          <div className="p-3.5 bg-neutral-900/60 border border-neutral-800 rounded-xl flex flex-col justify-between">
                            <div>
                              <div className="text-[11px] text-amber-400 mb-1">Full Luxury Remodel</div>
                              <h4 className="text-sm font-semibold text-white">Travertine Plinth Villa</h4>
                              <p className="text-xs text-neutral-400 mt-1 mb-3">
                                Complete interior and exterior renovation with custom European millwork.
                              </p>
                            </div>
                            <span className="text-xs text-neutral-300 font-mono">Status: Featured on Dwell</span>
                          </div>
                        </div>
                      </div>
                    )}

                    {/* AVENUE ADVISORY CONSULTING SIMULATOR */}
                    {project.interactivePreviewType === 'consulting' && (
                      <div className="flex flex-col gap-4">
                        <div className="flex items-center justify-between pb-3 border-b border-neutral-800">
                          <div className="flex items-center gap-2">
                            <Briefcase className="w-4 h-4 text-amber-400" />
                            <span className="text-base font-bold text-white font-display">
                              AVENUE STRATEGIC PARTNERS
                            </span>
                          </div>
                          <span className="text-xs text-neutral-400">London · New York</span>
                        </div>

                        <div className="grid grid-cols-3 gap-2">
                          {[
                            { id: 'strategy', label: 'Corporate Strategy' },
                            { id: 'finance', label: 'M&A Advisory' },
                            { id: 'governance', label: 'Board Advisory' },
                          ].map((tab) => (
                            <button
                              key={tab.id}
                              onClick={() => setActivePractice(tab.id as any)}
                              className={`p-2.5 text-xs rounded-xl border text-center transition-colors ${
                                activePractice === tab.id
                                  ? 'bg-neutral-900 border-amber-400 text-white font-semibold'
                                  : 'bg-neutral-950 border-neutral-800 text-neutral-400 hover:text-white'
                              }`}
                            >
                              {tab.label}
                            </button>
                          ))}
                        </div>

                        <div className="p-4 bg-neutral-900/60 border border-neutral-800 rounded-xl">
                          <h4 className="text-sm font-bold text-white mb-1.5">
                            {activePractice === 'strategy' && 'Strategic Planning & Growth Acceleration'}
                            {activePractice === 'finance' && 'Mergers, Acquisitions & Growth Capital'}
                            {activePractice === 'governance' && 'Executive Leadership & Board Governance'}
                          </h4>
                          <p className="text-xs text-neutral-300 leading-relaxed mb-4">
                            Guiding leadership teams through capital allocation, competitive market repositioning, and scale.
                          </p>
                          <div className="flex items-center justify-between pt-2 border-t border-neutral-800/80">
                            <span className="text-xs text-neutral-400">Next Consultation Slot: Tomorrow 2:00 PM</span>
                            <button
                              onClick={() => setBookingConfirmed(true)}
                              className="px-3 py-1 text-xs font-semibold bg-amber-400 text-neutral-950 rounded hover:bg-amber-300"
                            >
                              {bookingConfirmed ? 'Consultation Reserved' : 'Book 30-Min Call'}
                            </button>
                          </div>
                        </div>
                      </div>
                    )}

                    {/* PULSEMETRICS SAAS TOUR SIMULATOR */}
                    {project.interactivePreviewType === 'analytics' && (
                      <div className="flex flex-col gap-4">
                        <div className="flex items-center justify-between pb-3 border-b border-neutral-800">
                          <div className="flex items-center gap-2">
                            <TrendingUp className="w-4 h-4 text-amber-400" />
                            <span className="text-sm font-bold text-white">PulseMetrics Cloud Tour</span>
                          </div>
                          <div className="flex items-center gap-1 p-0.5 bg-neutral-900 border border-neutral-800 rounded-md text-xs">
                            {(['7d', '30d', '90d'] as const).map((r) => (
                              <button
                                key={r}
                                onClick={() => setTimeRange(r)}
                                className={`px-2 py-0.5 rounded ${
                                  timeRange === r ? 'bg-neutral-800 text-white font-bold' : 'text-neutral-400'
                                }`}
                              >
                                {r.toUpperCase()}
                              </button>
                            ))}
                          </div>
                        </div>

                        <div className="grid grid-cols-3 gap-2">
                          <div className="p-3 bg-neutral-900 rounded-xl border border-neutral-800">
                            <span className="text-[11px] text-neutral-400 block mb-0.5">Uptime SLA</span>
                            <span className="text-lg font-bold text-emerald-400 font-mono">99.99%</span>
                          </div>
                          <div className="p-3 bg-neutral-900 rounded-xl border border-neutral-800">
                            <span className="text-[11px] text-neutral-400 block mb-0.5">Edge Latency</span>
                            <span className="text-lg font-bold text-white font-mono">14ms</span>
                          </div>
                          <div className="p-3 bg-neutral-900 rounded-xl border border-neutral-800">
                            <span className="text-[11px] text-neutral-400 block mb-0.5">Lead Capture</span>
                            <span className="text-lg font-bold text-amber-400 font-mono">+74%</span>
                          </div>
                        </div>
                      </div>
                    )}

                    {/* STUDIO AETERNUM EDITORIAL SIMULATOR */}
                    {project.interactivePreviewType === 'editorial' && (
                      <div className="flex flex-col gap-4 text-center p-4">
                        <span className="text-xs uppercase tracking-widest text-neutral-400 font-mono">
                          Visual Archive · Studio Aeternum
                        </span>
                        <h3 className="text-2xl font-bold tracking-tight text-white font-display">
                          We Shape Culture Through Digital Craft
                        </h3>
                        <p className="text-xs text-neutral-400 max-w-md mx-auto">
                          Bespoke portfolio websites built for high-end creative agencies and visual directors.
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ) : (
            /* ================= TAB 2: TECHNICAL CASE STUDY & AUDIT ================= */
            <div className="space-y-8">
              {/* Google Lighthouse 4-Gauge Audit */}
              <div>
                <h4 className="text-xs font-semibold uppercase tracking-wider text-neutral-400 mb-3 flex items-center gap-1.5">
                  <Gauge className="w-4 h-4 text-emerald-400" />
                  Verified Google Lighthouse Audit
                </h4>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                  {[
                    { label: 'Performance', score: '100', color: 'text-emerald-400' },
                    { label: 'Accessibility', score: '100', color: 'text-emerald-400' },
                    { label: 'Best Practices', score: '100', color: 'text-emerald-400' },
                    { label: 'SEO Audit', score: '100', color: 'text-emerald-400' },
                  ].map((gauge) => (
                    <div
                      key={gauge.label}
                      className="p-3 bg-neutral-950 rounded-xl border border-neutral-800 text-center"
                    >
                      <span className={`text-2xl font-bold font-mono ${gauge.color}`}>
                        {gauge.score}
                      </span>
                      <span className="text-[11px] text-neutral-400 block mt-0.5">
                        {gauge.label}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Overview & Challenge */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="p-4 bg-neutral-950 rounded-xl border border-neutral-800">
                  <h4 className="text-xs font-semibold uppercase tracking-wider text-neutral-400 mb-2">
                    The Business Challenge
                  </h4>
                  <p className="text-xs text-neutral-300 leading-relaxed">
                    {project.challenge}
                  </p>
                </div>

                <div className="p-4 bg-neutral-950 rounded-xl border border-neutral-800">
                  <h4 className="text-xs font-semibold uppercase tracking-wider text-amber-400 mb-2">
                    The $10 Website Solution
                  </h4>
                  <p className="text-xs text-neutral-300 leading-relaxed">
                    {project.solution}
                  </p>
                </div>
              </div>

              {/* Measurable Results */}
              <div>
                <h4 className="text-xs font-semibold uppercase tracking-wider text-neutral-400 mb-3">
                  Quantifiable Client Outcomes
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {project.metrics.map((metric) => (
                    <div
                      key={metric.label}
                      className="p-3 bg-neutral-950 rounded-xl border border-neutral-800"
                    >
                      <span className="text-lg font-bold text-white tabular-nums block">
                        {metric.value}
                      </span>
                      <span className="text-xs font-medium text-neutral-300 block">
                        {metric.label}
                      </span>
                      {metric.change && (
                        <span className="text-[11px] text-neutral-500 block mt-0.5">
                          {metric.change}
                        </span>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* Client Testimonial */}
              {project.testimonial && (
                <div className="p-5 bg-neutral-950 rounded-xl border border-neutral-800 relative">
                  <p className="text-sm italic text-neutral-200 leading-relaxed mb-4">
                    "{project.testimonial.quote}"
                  </p>
                  <div className="flex items-center gap-2 text-xs">
                    <span className="font-semibold text-white">{project.testimonial.author}</span>
                    <span className="text-neutral-500">·</span>
                    <span className="text-neutral-400">
                      {project.testimonial.role}, {project.testimonial.company}
                    </span>
                  </div>
                </div>
              )}
            </div>
          )}
        </div>

        {/* Modal Bottom Action Footer */}
        <div className="px-6 py-4 border-t border-neutral-800 bg-neutral-950 flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="text-xs text-neutral-400 text-center sm:text-left">
            <span>Ready for a custom website like </span>
            <strong className="text-white">{project.title}</strong>? Just $10 build + $15/mo hosting.
          </div>

          <div className="flex items-center gap-3 w-full sm:w-auto">
            <button
              onClick={onClose}
              className="px-4 py-2 text-xs font-medium text-neutral-300 hover:text-white rounded-lg hover:bg-neutral-900 border border-neutral-800 transition-colors w-full sm:w-auto cursor-pointer"
            >
              Close
            </button>
            <button
              onClick={() => {
                onRequestSimilar(project.title);
                onClose();
              }}
              className="px-4 py-2 text-xs font-semibold text-neutral-950 bg-amber-400 hover:bg-amber-300 rounded-lg transition-colors flex items-center justify-center gap-1.5 shadow-md shadow-amber-400/10 w-full sm:w-auto cursor-pointer"
            >
              <span>Get My $10 Website</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
