import React, { useState, useEffect } from 'react';
import {
  X,
  ExternalLink,
  Monitor,
  Smartphone,
  Gauge,
  CheckCircle2,
  ShoppingCart,
  TrendingUp,
  Sparkles,
  Sliders,
  DollarSign,
  Layers,
  ArrowRight
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
  // 1. Furniture E-commerce state
  const [furnitureFilter, setFurnitureFilter] = useState<'all' | 'seating' | 'tables'>('all');
  const [cartCount, setCartCount] = useState(0);
  const [cartTotal, setCartTotal] = useState(0);
  const [showCartToast, setShowCartToast] = useState(false);

  // 2. SaaS analytics state
  const [timeRange, setTimeRange] = useState<'7d' | '30d' | '90d'>('30d');
  const [activeMetricTab, setActiveMetricTab] = useState<'revenue' | 'users' | 'conversion'>('revenue');

  // 3. Fintech calculator state
  const [initialCapital, setInitialCapital] = useState(25000);
  const [monthlyContribution, setMonthlyContribution] = useState(1200);
  const [investmentYears, setInvestmentYears] = useState(10);

  // 4. Botanica quiz state
  const [quizStep, setQuizStep] = useState(1);
  const [selectedSkinGoal, setSelectedSkinGoal] = useState<string | null>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!project) return null;

  // Add to cart handler for simulator
  const handleAddToCart = (price: number) => {
    setCartCount((prev) => prev + 1);
    setCartTotal((prev) => prev + price);
    setShowCartToast(true);
    setTimeout(() => setShowCartToast(false), 2400);
  };

  // Compound wealth calculation
  const calculateWealth = () => {
    const r = 0.08 / 12; // 8% annual return compounded monthly
    const n = investmentYears * 12;
    const futureValueInitial = initialCapital * Math.pow(1 + r, n);
    const futureValueMonthly = monthlyContribution * ((Math.pow(1 + r, n) - 1) / r);
    return Math.round(futureValueInitial + futureValueMonthly);
  };

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
                <span>{project.client}</span>
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
                Interactive Simulator
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

        {/* Modal Scrollable Body */}
        <div className="p-6 overflow-y-auto flex-1">
          {activeTab === 'simulator' ? (
            /* ================= TAB 1: INTERACTIVE SIMULATOR ================= */
            <div className="flex flex-col gap-5">
              {/* Simulator Toolbar */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 p-3 bg-neutral-950/70 border border-neutral-800/80 rounded-xl text-xs">
                <div className="flex items-center gap-2">
                  <span className="font-mono text-neutral-400 uppercase tracking-wider text-[11px]">
                    Simulated Sandbox
                  </span>
                  <span className="text-neutral-600">|</span>
                  <span className="text-neutral-300 font-mono text-[11px] truncate">
                    {project.liveUrlMock}
                  </span>
                </div>

                {/* Viewport Width Switcher */}
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
                      {project.liveUrlMock}
                    </div>
                    <div className="text-[10px] text-emerald-400 font-mono flex items-center gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                      Interactive
                    </div>
                  </div>

                  {/* ================= PROJECT-SPECIFIC INTERACTIVE CONTENT ================= */}
                  <div className="p-4 sm:p-6 bg-neutral-950 min-h-[380px] text-neutral-100">
                    {/* AURA LIVING FURNITURE E-COMMERCE SIMULATOR */}
                    {project.interactivePreviewType === 'furniture' && (
                      <div className="flex flex-col gap-4">
                        <div className="flex items-center justify-between pb-3 border-b border-neutral-800">
                          <div>
                            <span className="text-base font-bold tracking-tight text-white font-display">
                              AURA LIVING
                            </span>
                            <span className="text-[11px] text-neutral-400 ml-2">Copenhagen</span>
                          </div>

                          {/* Interactive Cart Button */}
                          <div className="relative">
                            <button
                              className="px-3 py-1.5 text-xs bg-neutral-900 border border-neutral-800 rounded-lg flex items-center gap-2 hover:border-neutral-700 transition-colors"
                              aria-label="View shopping bag"
                            >
                              <ShoppingCart className="w-3.5 h-3.5 text-amber-400" />
                              <span className="tabular-nums font-medium">{cartCount} items</span>
                              {cartTotal > 0 && (
                                <span className="text-neutral-400">(${cartTotal})</span>
                              )}
                            </button>
                            {showCartToast && (
                              <div className="absolute right-0 top-10 px-3 py-1 bg-amber-400 text-neutral-950 text-xs font-semibold rounded shadow-lg whitespace-nowrap animate-in fade-in">
                                Item added to bag!
                              </div>
                            )}
                          </div>
                        </div>

                        {/* Interactive Filter Buttons */}
                        <div className="flex items-center gap-2">
                          <button
                            onClick={() => setFurnitureFilter('all')}
                            className={`px-3 py-1 text-xs rounded-md ${
                              furnitureFilter === 'all'
                                ? 'bg-neutral-200 text-neutral-950 font-semibold'
                                : 'bg-neutral-900 text-neutral-400 hover:text-white'
                            }`}
                          >
                            All Pieces
                          </button>
                          <button
                            onClick={() => setFurnitureFilter('seating')}
                            className={`px-3 py-1 text-xs rounded-md ${
                              furnitureFilter === 'seating'
                                ? 'bg-neutral-200 text-neutral-950 font-semibold'
                                : 'bg-neutral-900 text-neutral-400 hover:text-white'
                            }`}
                          >
                            Lounge Seating
                          </button>
                          <button
                            onClick={() => setFurnitureFilter('tables')}
                            className={`px-3 py-1 text-xs rounded-md ${
                              furnitureFilter === 'tables'
                                ? 'bg-neutral-200 text-neutral-950 font-semibold'
                                : 'bg-neutral-900 text-neutral-400 hover:text-white'
                            }`}
                          >
                            Travertine Tables
                          </button>
                        </div>

                        {/* Simulated Products Grid */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-2">
                          {(furnitureFilter === 'all' || furnitureFilter === 'seating') && (
                            <div className="p-3 bg-neutral-900/60 border border-neutral-800 rounded-xl flex flex-col justify-between">
                              <div>
                                <div className="text-[11px] text-neutral-400 mb-1">Oatmeal Bouclé</div>
                                <h4 className="text-sm font-semibold text-white">Nordic Low Lounge Chair</h4>
                                <p className="text-xs text-neutral-400 mt-1 mb-3">
                                  Solid white oak frame with hand-loomed wool upholstery.
                                </p>
                              </div>
                              <div className="flex items-center justify-between pt-2 border-t border-neutral-800/60">
                                <span className="text-sm font-bold text-white tabular-nums">$840</span>
                                <button
                                  onClick={() => handleAddToCart(840)}
                                  className="px-3 py-1 text-xs font-semibold bg-amber-400 text-neutral-950 rounded hover:bg-amber-300 transition-colors cursor-pointer"
                                >
                                  + Add to Bag
                                </button>
                              </div>
                            </div>
                          )}

                          {(furnitureFilter === 'all' || furnitureFilter === 'tables') && (
                            <div className="p-3 bg-neutral-900/60 border border-neutral-800 rounded-xl flex flex-col justify-between">
                              <div>
                                <div className="text-[11px] text-neutral-400 mb-1">Natural Stone</div>
                                <h4 className="text-sm font-semibold text-white">Roma Travertine Plinth</h4>
                                <p className="text-xs text-neutral-400 mt-1 mb-3">
                                  Honed Italian unfilled travertine with monolithic chamfered edges.
                                </p>
                              </div>
                              <div className="flex items-center justify-between pt-2 border-t border-neutral-800/60">
                                <span className="text-sm font-bold text-white tabular-nums">$1,250</span>
                                <button
                                  onClick={() => handleAddToCart(1250)}
                                  className="px-3 py-1 text-xs font-semibold bg-amber-400 text-neutral-950 rounded hover:bg-amber-300 transition-colors cursor-pointer"
                                >
                                  + Add to Bag
                                </button>
                              </div>
                            </div>
                          )}
                        </div>
                      </div>
                    )}

                    {/* PULSEMETRICS SAAS ANALYTICS SIMULATOR */}
                    {project.interactivePreviewType === 'analytics' && (
                      <div className="flex flex-col gap-4">
                        <div className="flex items-center justify-between pb-3 border-b border-neutral-800">
                          <div className="flex items-center gap-2">
                            <TrendingUp className="w-4 h-4 text-amber-400" />
                            <span className="text-sm font-bold text-white">PulseMetrics Console</span>
                          </div>

                          {/* Time Range Selector */}
                          <div className="flex items-center gap-1 p-0.5 bg-neutral-900 border border-neutral-800 rounded-md text-xs">
                            {(['7d', '30d', '90d'] as const).map((range) => (
                              <button
                                key={range}
                                onClick={() => setTimeRange(range)}
                                className={`px-2 py-0.5 rounded transition-colors ${
                                  timeRange === range
                                    ? 'bg-neutral-800 text-white font-semibold'
                                    : 'text-neutral-400 hover:text-white'
                                }`}
                              >
                                {range.toUpperCase()}
                              </button>
                            ))}
                          </div>
                        </div>

                        {/* Interactive Metric Cards */}
                        <div className="grid grid-cols-3 gap-3">
                          <button
                            onClick={() => setActiveMetricTab('revenue')}
                            className={`p-3 rounded-xl border text-left transition-colors cursor-pointer ${
                              activeMetricTab === 'revenue'
                                ? 'bg-neutral-900 border-amber-400/80 shadow-sm'
                                : 'bg-neutral-950 border-neutral-800 hover:border-neutral-700'
                            }`}
                          >
                            <span className="text-[11px] text-neutral-400 block mb-1">
                              {timeRange === '7d' ? '7-Day ARR' : timeRange === '30d' ? 'Monthly ARR' : 'Quarterly ARR'}
                            </span>
                            <span className="text-base sm:text-lg font-bold text-white tabular-nums">
                              {timeRange === '7d' ? '$28.4k' : timeRange === '30d' ? '$128.4k' : '$394.2k'}
                            </span>
                            <span className="text-[10px] text-emerald-400 font-medium block mt-0.5">
                              +18.4% vs last period
                            </span>
                          </button>

                          <button
                            onClick={() => setActiveMetricTab('users')}
                            className={`p-3 rounded-xl border text-left transition-colors cursor-pointer ${
                              activeMetricTab === 'users'
                                ? 'bg-neutral-900 border-amber-400/80 shadow-sm'
                                : 'bg-neutral-950 border-neutral-800 hover:border-neutral-700'
                            }`}
                          >
                            <span className="text-[11px] text-neutral-400 block mb-1">Active Users</span>
                            <span className="text-base sm:text-lg font-bold text-white tabular-nums">
                              {timeRange === '7d' ? '19.2k' : timeRange === '30d' ? '84.1k' : '241.0k'}
                            </span>
                            <span className="text-[10px] text-emerald-400 font-medium block mt-0.5">
                              +12.1% growth
                            </span>
                          </button>

                          <button
                            onClick={() => setActiveMetricTab('conversion')}
                            className={`p-3 rounded-xl border text-left transition-colors cursor-pointer ${
                              activeMetricTab === 'conversion'
                                ? 'bg-neutral-900 border-amber-400/80 shadow-sm'
                                : 'bg-neutral-950 border-neutral-800 hover:border-neutral-700'
                            }`}
                          >
                            <span className="text-[11px] text-neutral-400 block mb-1">Conv. Rate</span>
                            <span className="text-base sm:text-lg font-bold text-white tabular-nums">
                              4.15%
                            </span>
                            <span className="text-[10px] text-emerald-400 font-medium block mt-0.5">
                              +0.8% target met
                            </span>
                          </button>
                        </div>

                        {/* Simulated Visual Graph Bar */}
                        <div className="p-4 bg-neutral-900/50 rounded-xl border border-neutral-800">
                          <div className="flex items-center justify-between mb-3 text-xs text-neutral-400">
                            <span>Dynamic Trajectory Simulator</span>
                            <span className="text-amber-400 font-mono">Real-time edge cache</span>
                          </div>
                          <div className="flex items-end gap-2 h-24 pt-2">
                            {[40, 55, 48, 65, 78, 70, 88, 92, 100].map((h, i) => (
                              <div key={i} className="flex-1 flex flex-col items-center gap-1 group">
                                <div
                                  className="w-full bg-gradient-to-t from-amber-400/30 to-amber-400 rounded-t transition-all duration-500 group-hover:to-amber-300"
                                  style={{ height: `${h}%` }}
                                />
                                <span className="text-[9px] font-mono text-neutral-500">
                                  T{i + 1}
                                </span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    )}

                    {/* BOTANICA LAB SKINCARE QUIZ SIMULATOR */}
                    {project.interactivePreviewType === 'botanical' && (
                      <div className="flex flex-col gap-4">
                        <div className="flex items-center justify-between pb-3 border-b border-neutral-800">
                          <span className="text-sm font-bold text-white">Botanica Skincare Routine Quiz</span>
                          <span className="text-xs text-amber-400 font-mono">Step {quizStep} of 2</span>
                        </div>

                        {quizStep === 1 ? (
                          <div className="flex flex-col gap-3">
                            <p className="text-xs text-neutral-300">
                              What is your primary skincare focus for this season?
                            </p>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                              {['Deep Hydration & Barrier Repair', 'Radiance & Brightening', 'Calming Sensitive Skin', 'Anti-Pollution Defense'].map(
                                (goal) => (
                                  <button
                                    key={goal}
                                    onClick={() => setSelectedSkinGoal(goal)}
                                    className={`p-3 text-left text-xs rounded-xl border transition-colors ${
                                      selectedSkinGoal === goal
                                        ? 'bg-amber-400 text-neutral-950 font-semibold border-amber-400'
                                        : 'bg-neutral-900 text-neutral-300 border-neutral-800 hover:border-neutral-700'
                                    }`}
                                  >
                                    {goal}
                                  </button>
                                )
                              )}
                            </div>
                            <button
                              disabled={!selectedSkinGoal}
                              onClick={() => setQuizStep(2)}
                              className="mt-2 py-2 px-4 text-xs font-semibold bg-neutral-200 text-neutral-950 rounded-lg hover:bg-white disabled:opacity-40 transition-colors self-end"
                            >
                              See Custom Routine →
                            </button>
                          </div>
                        ) : (
                          <div className="p-4 bg-neutral-900/80 rounded-xl border border-neutral-800 flex flex-col gap-3">
                            <div className="flex items-center justify-between">
                              <span className="text-xs font-bold text-amber-400">Custom Recommended Duo</span>
                              <button
                                onClick={() => {
                                  setQuizStep(1);
                                  setSelectedSkinGoal(null);
                                }}
                                className="text-[11px] text-neutral-400 hover:underline"
                              >
                                Retake Quiz
                              </button>
                            </div>
                            <p className="text-xs text-neutral-300">
                              Tailored for: <strong className="text-white">{selectedSkinGoal}</strong>
                            </p>
                            <div className="p-3 bg-neutral-950 rounded-lg border border-neutral-800 flex items-center justify-between">
                              <div>
                                <p className="text-xs font-semibold text-white">Botanical Barrier Elixir + Night Balm</p>
                                <p className="text-[11px] text-neutral-400">Cold-pressed organic jojoba & blue tansy</p>
                              </div>
                              <span className="text-xs font-bold text-white">$68 Bundle</span>
                            </div>
                            <button
                              onClick={() => {
                                alert('In a live store, this seamlessly transfers to Shopify Cart & Checkout!');
                              }}
                              className="py-2 text-xs font-semibold bg-amber-400 text-neutral-950 rounded-lg hover:bg-amber-300"
                            >
                              Add Recommended Bundle to Cart
                            </button>
                          </div>
                        )}
                      </div>
                    )}

                    {/* KROMA FINANCE WEALTH MODELER SIMULATOR */}
                    {project.interactivePreviewType === 'fintech' && (
                      <div className="flex flex-col gap-4">
                        <div className="flex items-center justify-between pb-3 border-b border-neutral-800">
                          <span className="text-sm font-bold text-white">Kroma Capital Growth Modeler</span>
                          <span className="text-xs text-emerald-400 font-mono">Assumes 8% annualized</span>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                          <div>
                            <label className="text-[11px] text-neutral-400 block mb-1">
                              Starting Capital: ${initialCapital.toLocaleString()}
                            </label>
                            <input
                              type="range"
                              min="5000"
                              max="100000"
                              step="5000"
                              value={initialCapital}
                              onChange={(e) => setInitialCapital(Number(e.target.value))}
                              className="w-full accent-amber-400"
                            />
                          </div>

                          <div>
                            <label className="text-[11px] text-neutral-400 block mb-1">
                              Monthly Addition: ${monthlyContribution.toLocaleString()}
                            </label>
                            <input
                              type="range"
                              min="200"
                              max="5000"
                              step="100"
                              value={monthlyContribution}
                              onChange={(e) => setMonthlyContribution(Number(e.target.value))}
                              className="w-full accent-amber-400"
                            />
                          </div>

                          <div>
                            <label className="text-[11px] text-neutral-400 block mb-1">
                              Horizon: {investmentYears} Years
                            </label>
                            <input
                              type="range"
                              min="3"
                              max="30"
                              step="1"
                              value={investmentYears}
                              onChange={(e) => setInvestmentYears(Number(e.target.value))}
                              className="w-full accent-amber-400"
                            />
                          </div>
                        </div>

                        {/* Calculated Results */}
                        <div className="p-4 bg-neutral-900 rounded-xl border border-neutral-800 flex items-center justify-between">
                          <div>
                            <span className="text-[11px] text-neutral-400 block">Projected Portfolio Value</span>
                            <span className="text-xl sm:text-2xl font-bold text-amber-400 tabular-nums">
                              ${calculateWealth().toLocaleString()}
                            </span>
                          </div>
                          <button
                            onClick={() => alert('Consultation modal opens in live environment!')}
                            className="px-3 py-1.5 text-xs font-semibold bg-neutral-200 text-neutral-950 rounded hover:bg-white"
                          >
                            Lock in Plan
                          </button>
                        </div>
                      </div>
                    )}

                    {/* EDITORIAL STUDIO AETERNUM SIMULATOR */}
                    {project.interactivePreviewType === 'editorial' && (
                      <div className="flex flex-col gap-4">
                        <div className="flex items-center justify-between pb-3 border-b border-neutral-800">
                          <span className="text-sm font-bold tracking-widest text-white uppercase font-display">
                            Studio Aeternum
                          </span>
                          <span className="text-xs text-neutral-400">London · Paris · NYC</span>
                        </div>

                        <div className="p-6 bg-neutral-900 border border-neutral-800 rounded-xl text-center">
                          <h3 className="text-xl sm:text-2xl font-extrabold tracking-tighter text-white uppercase mb-2 font-display">
                            We Shape Visual Cultures & Forward Visions
                          </h3>
                          <p className="text-xs text-neutral-400 max-w-md mx-auto mb-4">
                            Rigorous design direction and cinematic digital archives for forward-thinking cultural institutions.
                          </p>
                          <div className="flex justify-center gap-3">
                            <span className="text-xs font-mono text-amber-400 underline cursor-pointer">
                              Play 2025 Showreel (4K)
                            </span>
                          </div>
                        </div>
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
                    The Client Challenge
                  </h4>
                  <p className="text-xs text-neutral-300 leading-relaxed">
                    {project.challenge}
                  </p>
                </div>

                <div className="p-4 bg-neutral-950 rounded-xl border border-neutral-800">
                  <h4 className="text-xs font-semibold uppercase tracking-wider text-amber-400 mb-2">
                    The Engineering Solution
                  </h4>
                  <p className="text-xs text-neutral-300 leading-relaxed">
                    {project.solution}
                  </p>
                </div>
              </div>

              {/* Measurable Results */}
              <div>
                <h4 className="text-xs font-semibold uppercase tracking-wider text-neutral-400 mb-3">
                  Quantifiable Commercial Outcomes
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
            <span>Like the architecture of </span>
            <strong className="text-white">{project.title}</strong>? Let's build yours.
          </div>

          <div className="flex items-center gap-3 w-full sm:w-auto">
            <button
              onClick={onClose}
              className="px-4 py-2 text-xs font-medium text-neutral-300 hover:text-white rounded-lg hover:bg-neutral-900 border border-neutral-800 transition-colors w-full sm:w-auto"
            >
              Close Viewer
            </button>
            <button
              onClick={() => {
                onRequestSimilar(project.title);
                onClose();
              }}
              className="px-4 py-2 text-xs font-semibold text-neutral-950 bg-amber-400 hover:bg-amber-300 rounded-lg transition-colors flex items-center justify-center gap-1.5 shadow-md shadow-amber-400/10 w-full sm:w-auto cursor-pointer"
            >
              <span>Build a Site Like This</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
