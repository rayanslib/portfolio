import React from 'react';
import { Sparkles, Zap, Shield, Globe, Clock, CheckCircle2 } from 'lucide-react';

export const MarqueeTicker: React.FC = () => {
  const items = [
    { label: '$10 Custom Website Build', icon: <Sparkles className="w-3.5 h-3.5 text-amber-400" /> },
    { label: 'Optional $15/mo Cloud Hosting', icon: <Shield className="w-3.5 h-3.5 text-emerald-400" /> },
    { label: '2-3 Business Days Turnaround', icon: <Clock className="w-3.5 h-3.5 text-amber-400" /> },
    { label: 'Pure React & Tailwind (No Bloat)', icon: <Zap className="w-3.5 h-3.5 text-amber-400" /> },
    { label: '100% Mobile & Tablet Responsive', icon: <Globe className="w-3.5 h-3.5 text-emerald-400" /> },
    { label: 'Order Directly on X @SBGwebsites', icon: <CheckCircle2 className="w-3.5 h-3.5 text-amber-400" /> },
    { label: 'Full Source Code Ownership', icon: <Shield className="w-3.5 h-3.5 text-emerald-400" /> },
  ];

  return (
    <div className="py-4 border-y border-neutral-900 bg-neutral-950/70 overflow-hidden select-none relative">
      {/* Subtle fade masks on sides */}
      <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-[#0a0a0c] to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-[#0a0a0c] to-transparent z-10 pointer-events-none" />

      <div className="flex w-max animate-marquee">
        {/* Repeated twice for seamless infinite scroll */}
        {[...items, ...items].map((item, idx) => (
          <div
            key={idx}
            className="flex items-center gap-2.5 mx-6 text-xs font-mono uppercase tracking-wider text-neutral-400"
          >
            {item.icon}
            <span className="whitespace-nowrap">{item.label}</span>
            <span className="text-neutral-700 ml-4 font-normal">/</span>
          </div>
        ))}
      </div>
    </div>
  );
};
