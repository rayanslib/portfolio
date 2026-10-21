import React, { useState, useEffect } from 'react';
import { Send, CheckCircle2, Mail, Clock, ShieldCheck, AlertCircle } from 'lucide-react';
import { validateInquiry } from '../utils/estimator';

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
    company: '',
    projectType: 'Corporate Website',
    budget: initialBudget || '$3,000 - $6,000',
    timeline: 'Standard (3-5 weeks)',
    message: initialMessage,
  });

  const [errors, setErrors] = useState<Partial<Record<string, string>>>({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (initialMessage) {
      setFormData((prev) => ({ ...prev, message: initialMessage }));
    }
    if (initialBudget) {
      setFormData((prev) => ({ ...prev, budget: initialBudget }));
    }
  }, [initialMessage, initialBudget]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const result = validateInquiry(formData);

    if (!result.isValid) {
      setErrors(result.errors);
      return;
    }

    setErrors({});
    setIsSubmitting(true);

    // Simulate reliable submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 600);
  };

  return (
    <section id="contact" className="py-24 border-b border-neutral-900 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Direct Inquiries, Commitments & Email (5 cols) */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 text-xs font-semibold text-neutral-400 mb-2.5 tracking-wider uppercase">
                <span className="text-amber-400">Project Kickoff</span>
                <span aria-hidden="true">·</span>
                <span>Direct Inquiry</span>
              </div>

              <h2 className="text-3xl sm:text-4xl font-display font-bold text-white tracking-tight text-balance mb-4">
                Let's build a website your clients will remember.
              </h2>

              <p className="text-sm text-neutral-300 leading-relaxed mb-8">
                Ready to elevate your online presence? Tell me about your goals, current bottlenecks, and timeline. I'll review your brief and send back a high-level technical proposal within 24 hours.
              </p>

              {/* Direct email link */}
              <div className="p-4 bg-neutral-900/60 rounded-xl border border-neutral-800 mb-6">
                <span className="text-xs text-neutral-400 block mb-1">Direct inquiries & RFPs:</span>
                <a
                  href="mailto:rayanlhrban@gmail.com"
                  className="text-sm font-mono font-medium text-amber-400 hover:text-amber-300 transition-colors flex items-center gap-2"
                >
                  <Mail className="w-4 h-4" />
                  rayanlhrban@gmail.com
                </a>
              </div>

              {/* Guarantees */}
              <div className="space-y-3 pt-2 text-xs text-neutral-300">
                <div className="flex items-center gap-2.5">
                  <Clock className="w-4 h-4 text-amber-400 shrink-0" />
                  <span>24-Hour response guarantee with initial proposal</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Fixed-fee transparent milestone quotes — zero hidden fees</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                  <span>Complimentary 30-day post-launch support and warranty</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Consultation & Request Form (7 cols) */}
          <div className="lg:col-span-7">
            <div className="p-8 bg-neutral-900/50 rounded-2xl border border-neutral-800 shadow-xl">
              {isSubmitted ? (
                <div className="py-12 text-center flex flex-col items-center">
                  <div className="w-14 h-14 rounded-full bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 mb-4">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-display font-bold text-white mb-2">
                    Inquiry Received, {formData.name.split(' ')[0]}!
                  </h3>
                  <p className="text-xs sm:text-sm text-neutral-300 max-w-md mb-6 leading-relaxed">
                    Thank you for reaching out. I've received your project details regarding{' '}
                    <strong className="text-white">{formData.projectType}</strong>. I will review your requirements and send a tailored proposal and consultation link to{' '}
                    <span className="font-mono text-amber-400">{formData.email}</span> within 24 hours.
                  </p>
                  <button
                    onClick={() => {
                      setIsSubmitted(false);
                      setFormData({
                        name: '',
                        email: '',
                        company: '',
                        projectType: 'Corporate Website',
                        budget: '$3,000 - $6,000',
                        timeline: 'Standard (3-5 weeks)',
                        message: '',
                      });
                    }}
                    className="px-4 py-2 text-xs font-semibold text-neutral-950 bg-amber-400 rounded-lg hover:bg-amber-300 transition-colors"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5" noValidate>
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
                        placeholder="Frederik Lindqvist"
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
                        Work Email *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="frederik@auraliving.com"
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
                        Company or Brand
                      </label>
                      <input
                        type="text"
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        placeholder="Aura Living Copenhagen"
                        className="w-full px-3.5 py-2 text-xs text-white bg-neutral-950 rounded-lg border border-neutral-800 focus:border-amber-400 transition-colors focus:outline-none"
                      />
                    </div>

                    {/* Project Type */}
                    <div>
                      <label className="text-xs font-medium text-neutral-300 block mb-1.5">
                        Project Scope Type
                      </label>
                      <select
                        value={formData.projectType}
                        onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                        className="w-full px-3.5 py-2 text-xs text-white bg-neutral-950 rounded-lg border border-neutral-800 focus:border-amber-400 transition-colors focus:outline-none"
                      >
                        <option value="Corporate Website">Corporate / Brand Website</option>
                        <option value="E-Commerce Platform">E-Commerce Storefront</option>
                        <option value="SaaS Marketing & Web App">SaaS Marketing & Web App</option>
                        <option value="High-Converting Landing Page">High-Converting Landing Page</option>
                        <option value="Speed & SEO Optimization">Speed & Core Web Vitals Overhaul</option>
                      </select>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Budget */}
                    <div>
                      <label className="text-xs font-medium text-neutral-300 block mb-1.5">
                        Estimated Budget Range
                      </label>
                      <input
                        type="text"
                        value={formData.budget}
                        onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                        placeholder="$3,000 - $6,000"
                        className="w-full px-3.5 py-2 text-xs text-white bg-neutral-950 rounded-lg border border-neutral-800 focus:border-amber-400 transition-colors focus:outline-none"
                      />
                    </div>

                    {/* Timeline */}
                    <div>
                      <label className="text-xs font-medium text-neutral-300 block mb-1.5">
                        Target Launch Date
                      </label>
                      <select
                        value={formData.timeline}
                        onChange={(e) => setFormData({ ...formData, timeline: e.target.value })}
                        className="w-full px-3.5 py-2 text-xs text-white bg-neutral-950 rounded-lg border border-neutral-800 focus:border-amber-400 transition-colors focus:outline-none"
                      >
                        <option value="Rush (2-3 weeks)">Rush Launch (2-3 weeks)</option>
                        <option value="Standard (3-5 weeks)">Standard Schedule (3-5 weeks)</option>
                        <option value="Flexible (6+ weeks)">Flexible Kickoff (6+ weeks)</option>
                      </select>
                    </div>
                  </div>

                  {/* Project Brief */}
                  <div>
                    <label className="text-xs font-medium text-neutral-300 block mb-1.5">
                      Tell me about your project & goals *
                    </label>
                    <textarea
                      required
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Share your current website URL, what needs improving, key features you need, and any inspiration sites you love..."
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
                    className="w-full py-3 px-5 text-xs font-semibold text-neutral-950 bg-amber-400 hover:bg-amber-300 disabled:opacity-50 rounded-lg transition-colors flex items-center justify-center gap-2 shadow-lg shadow-amber-400/10 cursor-pointer"
                  >
                    {isSubmitting ? (
                      <span>Submitting Inquiry...</span>
                    ) : (
                      <>
                        <span>Submit Project Brief & Request Proposal</span>
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
