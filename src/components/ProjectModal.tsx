import React, { useState, useEffect } from 'react';
import {
  X,
  Monitor,
  Smartphone,
  Gauge,
  Home,
  Briefcase,
  TrendingUp,
  ArrowUpRight,
  PhoneCall
} from 'lucide-react';
import { Project } from '../types';
import { X_PROFILE_URL, X_HANDLE } from '../data/portfolioData';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  const [activeTab, setActiveTab] = useState<'simulator' | 'audit'>('simulator');
  const [deviceMode, setDeviceMode] = useState<'desktop' | 'mobile'>('desktop');

  // Interactive Simulator States
  const [contractorCategory, setContractorCategory] = useState<'all' | 'custom_homes' | 'remodel'>('all');
  const [quoteRequested, setQuoteRequested] = useState(false);
  const [activePractice, setActivePractice] = useState<'strategy' | 'finance' | 'governance'>('strategy');
  const [timeRange, setTimeRange] = useState<'7d' | '30d' | '90d'>('30d');

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
                Architecture & Audit
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
            Audit Details
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 overflow-y-auto flex-1">
          {activeTab === 'simulator' ? (
            <div className="flex flex-col gap-5">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 p-3 bg-neutral-950/70 border border-neutral-800/80 rounded-xl text-xs">
                <div className="flex items-center gap-2">
                  <span className="font-mono text-neutral-400 uppercase tracking-wider text-[11px]">
                    Interactive Client Sandbox
                  </span>
                  <span className="text-neutral-600">|</span>
                  <span className="text-neutral-300 font-mono text-[11px] truncate">
                    demo.sbgwebsites.com/{project.id}
                  </span>
                </div>

                <div className="flex items-center gap-2">
                  <span className="text-neutral-400 text-[11px] hidden sm:inline">Viewport:</span>
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
                      <span>Desktop</span>
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
                      <span>Mobile</span>
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
                  <div className="flex items-center justify-between px-3.5 py-2 bg-neutral-900 border-b border-neutral-800">
                    <div className="flex items-center gap-1.5">
                      <div className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
                      <div className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                      <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
                    </div>
                    <div className="px-2.5 py-0.5 rounded bg-neutral-950 text-neutral-400 text-[11px] font-mono border border-neutral-800/80 truncate max-w-[240px]">
                      demo.sbgwebsites.com/{project.id}
                    </div>
                    <div className="text-[10px] text-emerald-400 font-mono">
                      $10 Build
                    </div>
                  </div>

                  {/* Interactive Content */}
                  <div className="p-4 sm:p-6 bg-neutral-950 min-h-[380px] text-neutral-100">
                    {project.interactivePreviewType === 'contractor' && (
                      <div className="flex flex-col gap-4">
                        <div className="flex items-center justify-between pb-3 border-b border-neutral-800">
                          <div className="flex items-center gap-2">
                            <Home className="w-4 h-4 text-amber-400" />
                            <span className="text-base font-bold text-white font-display">
                              AETHER BUILDERS
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
                          <div className="p-3 bg-emerald-950/80 border border-emerald-800 rounded-xl text-xs text-emerald-200 flex items-center justify-between">
                            <span>Quote inquiry dispatched directly to contractor.</span>
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
                            Custom Builds
                          </button>
                          <button
                            onClick={() => setContractorCategory('remodel')}
                            className={`px-3 py-1 text-xs rounded-md ${
                              contractorCategory === 'remodel'
                                ? 'bg-neutral-200 text-neutral-950 font-semibold'
                                : 'bg-neutral-900 text-neutral-400 hover:text-white'
                            }`}
                          >
                            Remodels
                          </button>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-1">
                          <div className="p-3.5 bg-neutral-900/60 border border-neutral-800 rounded-xl">
                            <span className="text-[11px] text-amber-400 block mb-1">Architectural Build</span>
                            <h4 className="text-sm font-semibold text-white">Hillside Residence</h4>
                            <p className="text-xs text-neutral-400 mt-1">
                              Custom 4,200 sq.ft contemporary home with clean steel and glass architecture.
                            </p>
                          </div>
                          <div className="p-3.5 bg-neutral-900/60 border border-neutral-800 rounded-xl">
                            <span className="text-[11px] text-amber-400 block mb-1">Full Remodel</span>
                            <h4 className="text-sm font-semibold text-white">Travertine Villa</h4>
                            <p className="text-xs text-neutral-400 mt-1">
                              Complete interior renovation with natural stone surfaces and open layout.
                            </p>
                          </div>
                        </div>
                      </div>
                    )}

                    {project.interactivePreviewType === 'consulting' && (
                      <div className="flex flex-col gap-4">
                        <div className="flex items-center justify-between pb-3 border-b border-neutral-800">
                          <div className="flex items-center gap-2">
                            <Briefcase className="w-4 h-4 text-amber-400" />
                            <span className="text-base font-bold text-white font-display">
                              AVENUE STRATEGIC
                            </span>
                          </div>
                          <span className="text-xs text-neutral-400">Corporate Advisory</span>
                        </div>

                        <div className="grid grid-cols-3 gap-2">
                          {[
                            { id: 'strategy', label: 'Strategy' },
                            { id: 'finance', label: 'M&A Advisory' },
                            { id: 'governance', label: 'Governance' },
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
                            {activePractice === 'strategy' && 'Strategic Planning & Growth'}
                            {activePractice === 'finance' && 'Mergers, Acquisitions & Capital'}
                            {activePractice === 'governance' && 'Executive Leadership Advisory'}
                          </h4>
                          <p className="text-xs text-neutral-300 leading-relaxed">
                            Helping executive teams navigate market complexity and achieve sustainable growth.
                          </p>
                        </div>
                      </div>
                    )}

                    {project.interactivePreviewType === 'analytics' && (
                      <div className="flex flex-col gap-4">
                        <div className="flex items-center justify-between pb-3 border-b border-neutral-800">
                          <div className="flex items-center gap-2">
                            <TrendingUp className="w-4 h-4 text-amber-400" />
                            <span className="text-sm font-bold text-white">PulseMetrics Tour</span>
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
                            <span className="text-[11px] text-neutral-400 block mb-0.5">Speed</span>
                            <span className="text-lg font-bold text-white font-mono">0.4s</span>
                          </div>
                          <div className="p-3 bg-neutral-900 rounded-xl border border-neutral-800">
                            <span className="text-[11px] text-neutral-400 block mb-0.5">Custom Build</span>
                            <span className="text-lg font-bold text-amber-400 font-mono">$10</span>
                          </div>
                        </div>
                      </div>
                    )}

                    {project.interactivePreviewType === 'editorial' && (
                      <div className="flex flex-col gap-4 text-center p-4">
                        <span className="text-xs uppercase tracking-widest text-neutral-400 font-mono">
                          Studio Aeternum
                        </span>
                        <h3 className="text-2xl font-bold tracking-tight text-white font-display">
                          Modern Creative Portfolio
                        </h3>
                        <p className="text-xs text-neutral-400 max-w-md mx-auto">
                          Bespoke portfolio websites built with clean code and high performance for $10.
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ) : (
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
                    Client Need
                  </h4>
                  <p className="text-xs text-neutral-300 leading-relaxed">
                    {project.challenge}
                  </p>
                </div>

                <div className="p-4 bg-neutral-950 rounded-xl border border-neutral-800">
                  <h4 className="text-xs font-semibold uppercase tracking-wider text-amber-400 mb-2">
                    Delivered Solution
                  </h4>
                  <p className="text-xs text-neutral-300 leading-relaxed">
                    {project.solution}
                  </p>
                </div>
              </div>

              {/* Deliverables */}
              <div>
                <h4 className="text-xs font-semibold uppercase tracking-wider text-neutral-400 mb-2">
                  Included Features
                </h4>
                <div className="flex flex-wrap gap-2">
                  {project.deliverables.map((d) => (
                    <span
                      key={d}
                      className="text-xs px-3 py-1.5 rounded-lg bg-neutral-950 border border-neutral-800 text-neutral-200"
                    >
                      {d}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Modal Bottom Action: Direct to X */}
        <div className="px-6 py-4 border-t border-neutral-800 bg-neutral-950 flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="text-xs text-neutral-400 text-center sm:text-left">
            <span>Want a custom website like </span>
            <strong className="text-white">{project.title}</strong>? Just $10 build fee.
          </div>

          <div className="flex items-center gap-3 w-full sm:w-auto">
            <button
              onClick={onClose}
              className="px-4 py-2 text-xs font-medium text-neutral-300 hover:text-white rounded-lg hover:bg-neutral-900 border border-neutral-800 transition-colors w-full sm:w-auto cursor-pointer"
            >
              Close
            </button>
            <a
              href={X_PROFILE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 text-xs font-bold text-neutral-950 bg-amber-400 hover:bg-amber-300 rounded-lg transition-colors flex items-center justify-center gap-1.5 shadow-md shadow-amber-400/10 w-full sm:w-auto cursor-pointer"
            >
              <span>DM on X {X_HANDLE}</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
