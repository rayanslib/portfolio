import React from 'react';
import { ArrowUpRight, CheckCircle2, Clock, ShieldCheck, Zap } from 'lucide-react';
import { X_PROFILE_URL, X_HANDLE } from '../data/portfolioData';

export const ContactSection: React.FC = () => {
  return (
    <section id="contact" className="py-24 border-b border-neutral-900 scroll-mt-20">
      <div className="max-w-4xl mx-auto px-6 lg:px-8">
        <div className="p-8 sm:p-12 rounded-3xl bg-neutral-900/60 border border-neutral-800 text-center relative overflow-hidden shadow-2xl">
          {/* Subtle background glow */}
          <div
            className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-48 bg-amber-500/10 blur-[90px] rounded-full pointer-events-none"
            aria-hidden="true"
          />

          {/* Header */}
          <div className="flex items-center justify-center gap-2 text-xs font-semibold text-neutral-400 mb-3 tracking-wider uppercase">
            <span className="text-amber-400">Order Your Website</span>
            <span aria-hidden="true">·</span>
            <span>Direct Message on X</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold text-white tracking-tight mb-4 text-balance">
            Ready to get started? DM me on X.
          </h2>

          <p className="text-sm sm:text-base text-neutral-300 max-w-xl mx-auto mb-8 leading-relaxed">
            I handle all website orders and questions directly through X messages. Fast answers, quick turnaround, and no email back-and-forth.
          </p>

          {/* Big Primary Action: Direct Message on X */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10">
            <a
              href={X_PROFILE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-8 py-4 text-sm font-bold text-neutral-950 bg-amber-400 hover:bg-amber-300 rounded-xl transition-all flex items-center justify-center gap-2.5 shadow-xl shadow-amber-400/15 group cursor-pointer"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
              <span>Send Direct Message to {X_HANDLE}</span>
              <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </div>

          {/* Simple 3-Step DM Checklist */}
          <div className="p-6 rounded-2xl bg-neutral-950 border border-neutral-800/80 text-left max-w-lg mx-auto mb-8">
            <span className="text-xs font-mono uppercase tracking-wider text-amber-400 block mb-3 font-semibold">
              What to include in your message:
            </span>
            <ul className="space-y-2.5 text-xs text-neutral-300">
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span>Your business name and what services or products you offer</span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span>Any text, logo, or photos you want on the website</span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span>Whether you want our optional $15/month hosting or prefer to host it yourself</span>
              </li>
            </ul>
          </div>

          {/* Trust points */}
          <div className="flex flex-wrap items-center justify-center gap-6 text-xs text-neutral-400">
            <div className="flex items-center gap-1.5">
              <Clock className="w-4 h-4 text-amber-400" />
              <span>Replies within a few hours</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Zap className="w-4 h-4 text-amber-400" />
              <span>Ready in 2-3 business days</span>
            </div>
            <div className="flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>$10 flat build · optional $15/mo hosting</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
