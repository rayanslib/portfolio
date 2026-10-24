import React from 'react';
import { Check, ShieldCheck, Zap, Code2, Sparkles, MessageCircle } from 'lucide-react';
import { motion } from 'motion/react';

export const TestimonialsSection: React.FC = () => {
  const pillars = [
    {
      icon: <Code2 className="w-5 h-5 text-amber-400" />,
      title: 'Hand-Crafted Modern Code',
      description: 'Zero bloated WordPress themes or slow visual builders. We write clean, lightweight code that loads in under 0.6 seconds.',
    },
    {
      icon: <Zap className="w-5 h-5 text-amber-400" />,
      title: '100% Mobile Optimized',
      description: 'Over 70% of web traffic is mobile. Every layout is tested for smooth thumb navigation, crisp fonts, and zero horizontal scroll.',
    },
    {
      icon: <ShieldCheck className="w-5 h-5 text-emerald-400" />,
      title: 'Optional $15/mo Cloud Hosting',
      description: 'You are never trapped. We can manage your cloud hosting and SSL for $15/month, or give you full source code to host anywhere for free.',
    },
    {
      icon: <MessageCircle className="w-5 h-5 text-amber-400" />,
      title: 'Direct Chat on X (@SBGwebsites)',
      description: 'No complicated support ticket systems or slow corporate emails. Talk directly with us on X for fast turnaround and updates.',
    },
  ];

  return (
    <section id="why-us" className="py-24 border-b border-neutral-900 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header with Scroll Reveal */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <div className="flex items-center justify-center gap-2 text-xs font-semibold text-neutral-400 mb-2.5 tracking-wider uppercase">
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            <span>Honest & Simple Offer</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-white tracking-tight text-balance mb-4">
            Everything you need in a website. None of the agency fluff.
          </h2>
          <p className="text-sm text-neutral-400 leading-relaxed">
            High-quality design, modern performance, and transparent pricing. Just <strong className="text-white">$10</strong> for your website build, with optional hosting.
          </p>
        </motion.div>

        {/* 4 Clean Value Pillars with Staggered Scroll Entrance */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((pillar, index) => (
            <motion.div
              key={pillar.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ delay: index * 0.1, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
              className="p-6 rounded-2xl bg-neutral-900/40 border border-neutral-800 hover:border-amber-400/30 transition-colors flex flex-col justify-between group shadow-lg"
            >
              <div>
                <div className="w-10 h-10 rounded-xl bg-neutral-900 border border-neutral-800 group-hover:border-amber-400/40 flex items-center justify-center mb-4 transition-colors">
                  {pillar.icon}
                </div>
                <h3 className="text-base font-bold text-white mb-2 group-hover:text-amber-300 transition-colors">
                  {pillar.title}
                </h3>
                <p className="text-xs text-neutral-400 leading-relaxed">
                  {pillar.description}
                </p>
              </div>

              <div className="pt-4 mt-6 border-t border-neutral-800/60 flex items-center gap-1.5 text-[11px] text-emerald-400 font-medium">
                <Check className="w-3.5 h-3.5" />
                <span>Included in your $10 build</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
