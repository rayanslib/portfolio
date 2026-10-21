import React, { useState } from 'react';
import { Search, ArrowRight, Eye, Layers, Monitor } from 'lucide-react';
import { Project, ProjectCategory } from '../types';
import { PROJECTS_DATA } from '../data/portfolioData';
import { filterProjects } from '../utils/estimator';

interface ProjectsShowcaseProps {
  onSelectProject: (project: Project) => void;
}

export const ProjectsShowcase: React.FC<ProjectsShowcaseProps> = ({ onSelectProject }) => {
  const [activeCategory, setActiveCategory] = useState<ProjectCategory>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [failedImages, setFailedImages] = useState<Record<string, boolean>>({});

  const categories: { id: ProjectCategory; label: string }[] = [
    { id: 'all', label: 'All Websites (4)' },
    { id: 'services', label: 'Services & Contractors' },
    { id: 'business', label: 'Business & Corporate' },
    { id: 'landing', label: 'Landing Pages' },
    { id: 'portfolio', label: 'Portfolios' },
  ];

  const filteredProjects = filterProjects(PROJECTS_DATA, activeCategory, searchQuery);

  const handleImageError = (id: string) => {
    setFailedImages((prev) => ({ ...prev, [id]: true }));
  };

  return (
    <section id="projects" className="py-24 border-b border-neutral-900 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold text-neutral-400 mb-2.5 tracking-wider uppercase">
              <span className="text-amber-400">Client Portfolio</span>
              <span aria-hidden="true">·</span>
              <span>Websites Built for Real Businesses</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-display font-bold text-white tracking-tight text-balance">
              See what your $10 website could look like.
            </h2>
          </div>
          <p className="text-sm text-neutral-400 max-w-md">
            Clean, professional business websites without bloated templates. Click any site to inspect the live preview simulator and performance audit.
          </p>
        </div>

        {/* Filter Bar & Search */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 mb-10 pb-6 border-b border-neutral-800/80">
          {/* Category Tabs */}
          <div className="flex items-center gap-1.5 p-1 bg-neutral-900/90 rounded-xl border border-neutral-800 overflow-x-auto">
            {categories.map((cat) => (
              <button
                key={cat.id}
                type="button"
                onClick={() => setActiveCategory(cat.id)}
                className={`px-3.5 py-1.5 text-xs font-medium rounded-lg transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                  activeCategory === cat.id
                    ? 'bg-amber-400 text-neutral-950 font-semibold shadow-sm'
                    : 'text-neutral-300 hover:text-white hover:bg-neutral-800/60'
                }`}
                aria-pressed={activeCategory === cat.id}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Search Input */}
          <div className="relative min-w-[220px]">
            <Search className="w-4 h-4 text-neutral-400 absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Filter by contractor, business, style..."
              className="w-full pl-9 pr-3 py-1.5 text-xs text-neutral-200 bg-neutral-900 border border-neutral-800 rounded-lg focus:outline-none focus:border-amber-400 transition-colors placeholder:text-neutral-500"
              aria-label="Filter websites by keyword"
            />
          </div>
        </div>

        {/* Projects Grid */}
        {filteredProjects.length === 0 ? (
          <div className="text-center py-16 bg-neutral-900/30 rounded-2xl border border-neutral-800">
            <Layers className="w-10 h-10 text-neutral-500 mx-auto mb-3" />
            <p className="text-sm font-medium text-neutral-300">No websites match your filter criteria.</p>
            <button
              onClick={() => {
                setActiveCategory('all');
                setSearchQuery('');
              }}
              className="mt-3 text-xs text-amber-400 hover:underline"
            >
              Reset filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                className="group flex flex-col bg-neutral-900/40 rounded-2xl border border-neutral-800/80 hover:border-neutral-700 transition-all duration-300 overflow-hidden hover:shadow-xl hover:shadow-black/40"
              >
                {/* Media Container with Vercel Resilient Fallback */}
                <div
                  onClick={() => onSelectProject(project)}
                  className="relative aspect-[16/10] bg-neutral-950 overflow-hidden cursor-pointer"
                >
                  {!failedImages[project.id] ? (
                    <img
                      src={project.image}
                      alt={`${project.title} website by SBG Websites`}
                      onError={() => handleImageError(project.id)}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      loading="lazy"
                    />
                  ) : (
                    /* Styled CSS fallback */
                    <div className="w-full h-full bg-gradient-to-br from-neutral-900 via-neutral-950 to-neutral-900 flex flex-col items-center justify-center p-6 text-center">
                      <Monitor className="w-10 h-10 text-amber-400 mb-2" />
                      <p className="text-sm font-bold text-white">{project.title}</p>
                      <p className="text-xs text-neutral-400 mt-1">{project.categoryLabel}</p>
                    </div>
                  )}

                  <div className="absolute inset-0 bg-neutral-950/20 group-hover:bg-neutral-950/40 transition-colors flex items-center justify-center opacity-0 group-hover:opacity-100">
                    <span className="px-3 py-1.5 text-xs font-semibold text-neutral-950 bg-amber-400 rounded-lg shadow-lg flex items-center gap-1.5 transform translate-y-2 group-hover:translate-y-0 transition-all">
                      <Eye className="w-3.5 h-3.5" />
                      Inspect Live Preview & Details
                    </span>
                  </div>

                  {/* Primary Outcome Metric Ribbon */}
                  {project.metrics[0] && (
                    <div className="absolute top-3 left-3 px-2.5 py-1 rounded bg-neutral-950/85 backdrop-blur-md border border-neutral-700/60 text-[11px] font-mono text-amber-300">
                      {project.metrics[0].label}: <span className="font-bold text-white">{project.metrics[0].value}</span>
                    </div>
                  )}

                  {/* Category Marker */}
                  <div className="absolute top-3 right-3 px-2.5 py-1 rounded bg-neutral-950/85 backdrop-blur-md border border-neutral-700/60 text-[11px] font-medium text-neutral-300">
                    {project.categoryLabel}
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    {/* Unboxed Metadata: Client & Year */}
                    <div className="flex items-center gap-2 text-xs text-neutral-400 mb-2">
                      <span className="text-amber-400 font-semibold">$10 Build Plan</span>
                      <span aria-hidden="true">·</span>
                      <span>{project.client}</span>
                      <span aria-hidden="true">·</span>
                      <span>{project.year}</span>
                    </div>

                    <h3
                      onClick={() => onSelectProject(project)}
                      className="text-xl font-display font-bold text-white group-hover:text-amber-300 transition-colors mb-2 cursor-pointer"
                    >
                      {project.title}
                    </h3>

                    <p className="text-xs text-neutral-300 line-clamp-2 leading-relaxed mb-4">
                      {project.subtitle}
                    </p>

                    {/* Tech Stack items */}
                    <div className="flex flex-wrap gap-1.5 mb-5">
                      {project.techStack.map((tech) => (
                        <span
                          key={tech}
                          className="text-[11px] font-mono px-2 py-0.5 rounded bg-neutral-800 text-neutral-300 border border-neutral-700/50"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Action Link */}
                  <div className="pt-4 border-t border-neutral-800/80 flex items-center justify-between">
                    <span className="text-xs text-neutral-400">
                      {project.deliverables[0]}
                    </span>
                    <button
                      type="button"
                      onClick={() => onSelectProject(project)}
                      className="text-xs font-semibold text-amber-400 group-hover:text-amber-300 flex items-center gap-1 cursor-pointer"
                      aria-label={`View ${project.title} details`}
                    >
                      View Live Simulator
                      <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};
