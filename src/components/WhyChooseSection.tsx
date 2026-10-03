import React from 'react';
import { Heart, Clock, Wallet, Headphones, CheckCircle2, Sparkles, ShieldCheck } from 'lucide-react';

export const WhyChooseSection: React.FC = () => {
  const cards = [
    {
      title: '100% Satisfaction',
      desc: 'I work with you until you are completely satisfied with the design and performance.',
      icon: Heart,
      highlight: 'Guaranteed',
      color: 'text-rose-600 bg-rose-50 border-rose-200',
    },
    {
      title: 'On-Time Delivery',
      desc: 'Predictable milestones and rapid development without compromising code quality.',
      icon: Clock,
      highlight: 'Fast Turnaround',
      color: 'text-blue-600 bg-blue-50 border-blue-200',
    },
    {
      title: 'Affordable Pricing',
      desc: 'Direct developer rates with maximum value, transparent quotes and no hidden fees.',
      icon: Wallet,
      highlight: 'Transparent',
      color: 'text-emerald-600 bg-emerald-50 border-emerald-200',
    },
    {
      title: 'Reliable Support',
      desc: 'Continuous post-launch assistance, domain guidance, updates, and maintenance.',
      icon: Headphones,
      highlight: 'Post-Launch',
      color: 'text-indigo-600 bg-indigo-50 border-indigo-200',
    },
  ];

  return (
    <section id="why-choose" className="py-24 bg-white text-slate-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Kicker */}
        <div className="mb-3">
          <span className="text-xs font-mono font-bold text-blue-600 px-3 py-1 rounded-full bg-blue-50 border border-blue-200">
            &lt;/&gt; Why Choose ALTHAF
          </span>
        </div>

        {/* Section Header */}
        <div className="max-w-3xl mb-12 space-y-2">
          <h2 className="text-3xl sm:text-4xl font-extrabold font-display tracking-tight text-slate-900">
            YOUR VISION, MY CODE.
          </h2>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed max-w-2xl">
            I focus on top-tier craft, crisp communication, and on-time delivery. Your business growth
            is the benchmark of success, backed by dedicated support every step of the way.
          </p>
        </div>

        {/* 4 Feature Trust Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {cards.map((card, idx) => {
            const Icon = card.icon;
            return (
              <div
                key={idx}
                className="p-6 rounded-3xl bg-slate-50 border border-slate-200 hover:bg-white hover:border-blue-400 hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col items-center text-center space-y-4 group"
              >
                {/* Halo Icon */}
                <div
                  className={`w-14 h-14 rounded-2xl border flex items-center justify-center transition-all shadow-xs group-hover:scale-110 ${card.color}`}
                >
                  <Icon className="w-6 h-6" />
                </div>

                <div className="space-y-1">
                  <span className="text-[10px] font-mono font-bold uppercase text-slate-400">
                    {card.highlight}
                  </span>
                  <h3 className="text-base font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                    {card.title}
                  </h3>
                </div>

                <p className="text-xs text-slate-600 leading-relaxed">
                  {card.desc}
                </p>
              </div>
            );
          })}
        </div>

        {/* Bottom Trust Stat Bar */}
        <div className="mt-12 p-6 rounded-2xl bg-blue-50/70 border border-blue-100 flex flex-wrap items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <ShieldCheck className="w-6 h-6 text-blue-600" />
            <div>
              <h4 className="text-xs font-bold text-slate-900">100% Quality Assurance</h4>
              <p className="text-[11px] text-slate-600">Cross-browser tested on modern iOS, Android, and Desktop.</p>
            </div>
          </div>

          <div className="flex items-center gap-6 text-xs font-mono text-slate-600">
            <span>✓ Clean Semantic Code</span>
            <span>✓ Lightning Fast Speed</span>
            <span>✓ Direct Communication</span>
          </div>
        </div>
      </div>
    </section>
  );
};
