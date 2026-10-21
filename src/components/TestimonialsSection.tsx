import React from 'react';
import { Quote, Star } from 'lucide-react';
import { PROJECTS_DATA } from '../data/portfolioData';

export const TestimonialsSection: React.FC = () => {
  const reviews = PROJECTS_DATA.filter((p) => p.testimonial).map((p) => ({
    ...p.testimonial!,
    projectTitle: p.title,
    primaryMetric: p.metrics[0],
  }));

  return (
    <section id="testimonials" className="py-24 border-b border-neutral-900 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="flex items-center justify-center gap-2 text-xs font-semibold text-neutral-400 mb-2.5 tracking-wider uppercase">
            <span className="text-amber-400">Client Endorsements</span>
            <span aria-hidden="true">·</span>
            <span>Measurable Impact</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-white tracking-tight text-balance mb-4">
            Trusted by founders, creative directors & growth teams.
          </h2>
          <p className="text-sm text-neutral-400">
            Real outcomes from custom web development engagements.
          </p>
        </div>

        {/* Testimonials Grid (3 or 4 columns) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.slice(0, 3).map((review) => (
            <div
              key={review.author}
              className="p-7 rounded-2xl bg-neutral-900/40 border border-neutral-800 flex flex-col justify-between"
            >
              <div>
                {/* Stars and Metric Highlight */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-1 text-amber-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-amber-400" />
                    ))}
                  </div>
                  {review.primaryMetric && (
                    <span className="text-xs font-mono font-semibold text-emerald-400 bg-emerald-950/60 border border-emerald-800/60 px-2 py-0.5 rounded">
                      {review.primaryMetric.value} {review.primaryMetric.label}
                    </span>
                  )}
                </div>

                <p className="text-xs sm:text-sm text-neutral-200 leading-relaxed italic mb-6">
                  "{review.quote}"
                </p>
              </div>

              {/* Attributable Client Credit */}
              <div className="pt-4 border-t border-neutral-800/80 flex items-center justify-between">
                <div>
                  <h4 className="text-xs font-bold text-white">{review.author}</h4>
                  <p className="text-[11px] text-neutral-400">
                    {review.role}, {review.company}
                  </p>
                </div>
                <span className="text-[11px] font-mono text-neutral-400">
                  {review.projectTitle}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
