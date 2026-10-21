import React, { useState, useEffect } from 'react';
import { Send, CheckCircle2, Mail, Clock, ShieldCheck, AlertCircle } from 'lucide-react';
import { validateInquiry } from '../utils/estimator';
import { X_PROFILE_URL, X_HANDLE, CONTACT_EMAIL } from '../data/portfolioData';

interface ContactSectionProps {
  initialMessage?: string;
  initialBudget?: string;
}

export const ContactSection: React.FC<ContactSectionProps> = ({
  initialMessage = '',
  initialBudget = '',
}) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    xHandle: '',
    company: '',
    projectType: 'Business / Company Website',
    message: initialMessage || 'I would like to get a custom website built for $10 with the $15/month hosting and maintenance service.',
  });

  const [errors, setErrors] = useState<Partial<Record<string, string>>>({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (initialMessage) {
      setFormData((prev) => ({ ...prev, message: initialMessage }));
    }
  }, [initialMessage]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const result = validateInquiry(formData);

    if (!result.isValid) {
      setErrors(result.errors);
      return;
    }

    setErrors({});
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 600);
  };

  return (
    <section id="contact" className="py-24 border-b border-neutral-900 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Direct Links & X Account (5 cols) */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 text-xs font-semibold text-neutral-400 mb-2.5 tracking-wider uppercase">
                <span className="text-amber-400">Fastest Way to Start</span>
                <span aria-hidden="true">·</span>
                <span>DM or Form</span>
              </div>

              <h2 className="text-3xl sm:text-4xl font-display font-bold text-white tracking-tight text-balance mb-4">
                Get your $10 website launched this week.
              </h2>

              <p className="text-sm text-neutral-300 leading-relaxed mb-6">
                Tell me about your business, the services you provide, and any websites you like. I'll review your details and get back to you with your live preview plan within 24 hours.
              </p>

              {/* Prominent Official X Channel Card */}
              <div className="p-4 bg-neutral-900/80 rounded-xl border border-neutral-800 mb-4 hover:border-neutral-700 transition-colors">
                <span className="text-xs text-neutral-400 block mb-1 font-mono uppercase tracking-wider">
                  Fastest Response: Direct Message on X
                </span>
                <a
                  href={X_PROFILE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-semibold text-white hover:text-amber-400 transition-colors flex items-center gap-2 group"
                >
                  <span className="w-6 h-6 rounded-md bg-neutral-800 flex items-center justify-center text-white group-hover:bg-amber-400 group-hover:text-neutral-950 transition-colors">
                    <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                    </svg>
                  </span>
                  <span>{X_PROFILE_URL}</span>
                </a>
                <p className="text-[11px] text-neutral-400 mt-1">
                  DM me {X_HANDLE} directly on X for quick answers and immediate project scheduling.
                </p>
              </div>

              {/* Direct email card */}
              <div className="p-4 bg-neutral-900/60 rounded-xl border border-neutral-800 mb-6">
                <span className="text-xs text-neutral-400 block mb-1 font-mono uppercase tracking-wider">
                  Direct Email Inquiry
                </span>
                <a
                  href={`mailto:${CONTACT_EMAIL}`}
                  className="text-sm font-mono font-medium text-amber-400 hover:text-amber-300 transition-colors flex items-center gap-2"
                >
                  <Mail className="w-4 h-4" />
                  {CONTACT_EMAIL}
                </a>
              </div>

              {/* Guarantees */}
              <div className="space-y-3 pt-2 text-xs text-neutral-300">
                <div className="flex items-center gap-2.5">
                  <Clock className="w-4 h-4 text-amber-400 shrink-0" />
                  <span>24-Hour response time guarantee</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>$10 flat website creation + $15/month managed hosting</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                  <span>No e-commerce bloat · pure business lead generation</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Inquiry Form (7 cols) */}
          <div className="lg:col-span-7">
            <div className="p-8 bg-neutral-900/50 rounded-2xl border border-neutral-800 shadow-xl">
              {isSubmitted ? (
                <div className="py-12 text-center flex flex-col items-center">
                  <div className="w-14 h-14 rounded-full bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 mb-4">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-display font-bold text-white mb-2">
                    Message Received, {formData.name.split(' ')[0]}!
                  </h3>
                  <p className="text-xs sm:text-sm text-neutral-300 max-w-md mb-6 leading-relaxed">
                    Thank you for reaching out to SBG Websites! I will review your requirements for{' '}
                    <strong className="text-white">{formData.projectType}</strong> and reply directly to{' '}
                    <span className="font-mono text-amber-400">{formData.email}</span> within 24 hours.
                  </p>
                  <div className="flex flex-wrap justify-center gap-3">
                    <a
                      href={X_PROFILE_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 text-xs font-semibold text-neutral-950 bg-amber-400 rounded-lg hover:bg-amber-300 transition-colors flex items-center gap-1.5"
                    >
                      <span>DM on X {X_HANDLE}</span>
                    </a>
                    <button
                      onClick={() => {
                        setIsSubmitted(false);
                        setFormData({
                          name: '',
                          email: '',
                          xHandle: '',
                          company: '',
                          projectType: 'Business / Company Website',
                          message: '',
                        });
                      }}
                      className="px-4 py-2 text-xs font-medium text-neutral-300 bg-neutral-800 rounded-lg hover:bg-neutral-700 transition-colors"
                    >
                      Send Another Message
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4" noValidate>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Name */}
                    <div>
                      <label className="text-xs font-medium text-neutral-300 block mb-1.5">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Marcus Vance"
                        className={`w-full px-3.5 py-2 text-xs text-white bg-neutral-950 rounded-lg border transition-colors focus:outline-none ${
                          errors.name ? 'border-rose-500' : 'border-neutral-800 focus:border-amber-400'
                        }`}
                      />
                      {errors.name && (
                        <p className="text-[11px] text-rose-400 mt-1 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" />
                          {errors.name}
                        </p>
                      )}
                    </div>

                    {/* Email */}
                    <div>
                      <label className="text-xs font-medium text-neutral-300 block mb-1.5">
                        Your Email *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="marcus@business.com"
                        className={`w-full px-3.5 py-2 text-xs text-white bg-neutral-950 rounded-lg border transition-colors focus:outline-none ${
                          errors.email ? 'border-rose-500' : 'border-neutral-800 focus:border-amber-400'
                        }`}
                      />
                      {errors.email && (
                        <p className="text-[11px] text-rose-400 mt-1 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" />
                          {errors.email}
                        </p>
                      )}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Company */}
                    <div>
                      <label className="text-xs font-medium text-neutral-300 block mb-1.5">
                        Business / Company Name
                      </label>
                      <input
                        type="text"
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        placeholder="Aether Construction"
                        className="w-full px-3.5 py-2 text-xs text-white bg-neutral-950 rounded-lg border border-neutral-800 focus:border-amber-400 transition-colors focus:outline-none"
                      />
                    </div>

                    {/* X Handle (Optional) */}
                    <div>
                      <label className="text-xs font-medium text-neutral-300 block mb-1.5">
                        Your X (Twitter) Handle (Optional)
                      </label>
                      <input
                        type="text"
                        value={formData.xHandle}
                        onChange={(e) => setFormData({ ...formData, xHandle: e.target.value })}
                        placeholder="@yourhandle"
                        className="w-full px-3.5 py-2 text-xs text-white bg-neutral-950 rounded-lg border border-neutral-800 focus:border-amber-400 transition-colors focus:outline-none"
                      />
                    </div>
                  </div>

                  {/* Project Type */}
                  <div>
                    <label className="text-xs font-medium text-neutral-300 block mb-1.5">
                      Website Type ($10 Build + $15/mo Hosting)
                    </label>
                    <select
                      value={formData.projectType}
                      onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                      className="w-full px-3.5 py-2 text-xs text-white bg-neutral-950 rounded-lg border border-neutral-800 focus:border-amber-400 transition-colors focus:outline-none"
                    >
                      <option value="Business / Company Website">Business / Corporate Website ($10)</option>
                      <option value="Local Contractor / Service Provider">Local Contractor / Service Provider ($10)</option>
                      <option value="Landing Page & Lead Funnel">High-Converting Landing Page ($10)</option>
                      <option value="Personal Brand & Portfolio">Personal Brand & Portfolio ($10)</option>
                    </select>
                  </div>

                  {/* Project Brief */}
                  <div>
                    <label className="text-xs font-medium text-neutral-300 block mb-1.5">
                      Tell me about your business & what you need *
                    </label>
                    <textarea
                      required
                      rows={3}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Tell me what services you offer, your city/area, and what you want visitors to do..."
                      className={`w-full px-3.5 py-2.5 text-xs text-white bg-neutral-950 rounded-lg border transition-colors focus:outline-none resize-none ${
                        errors.message ? 'border-rose-500' : 'border-neutral-800 focus:border-amber-400'
                      }`}
                    />
                    {errors.message && (
                      <p className="text-[11px] text-rose-400 mt-1 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" />
                        {errors.message}
                      </p>
                    )}
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-3.5 px-5 text-xs font-semibold text-neutral-950 bg-amber-400 hover:bg-amber-300 disabled:opacity-50 rounded-lg transition-colors flex items-center justify-center gap-2 shadow-lg shadow-amber-400/10 cursor-pointer"
                  >
                    {isSubmitting ? (
                      <span>Sending Request...</span>
                    ) : (
                      <>
                        <span>Claim My $10 Website & Request Proposal</span>
                        <Send className="w-3.5 h-3.5" />
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
