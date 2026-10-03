import React from 'react';
import {
  Globe,
  ShoppingCart,
  UtensilsCrossed,
  Smartphone,
  Palette,
  Zap,
  LayoutDashboard,
  Wrench,
  Rocket,
  TrendingUp,
  ArrowRight,
  Check,
} from 'lucide-react';
import { SERVICES_LIST } from '../data/portfolioData';
import { useTheme } from '../context/ThemeContext';

interface ServicesSectionProps {
  onSelectService: (serviceName: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onSelectService }) => {
  const { isLight } = useTheme();

  const getIcon = (iconName: string) => {
    const iconClass = isLight ? 'text-blue-600' : 'text-cyan-400';
    switch (iconName) {
      case 'Globe': return <Globe className={`w-5 h-5 ${iconClass}`} />;
      case 'ShoppingCart': return <ShoppingCart className={`w-5 h-5 ${isLight ? 'text-emerald-600' : 'text-emerald-400'}`} />;
      case 'UtensilsCrossed': return <UtensilsCrossed className={`w-5 h-5 ${isLight ? 'text-amber-600' : 'text-amber-400'}`} />;
      case 'Smartphone': return <Smartphone className={`w-5 h-5 ${isLight ? 'text-sky-600' : 'text-sky-400'}`} />;
      case 'Palette': return <Palette className={`w-5 h-5 ${isLight ? 'text-purple-600' : 'text-purple-400'}`} />;
      case 'Zap': return <Zap className={`w-5 h-5 ${isLight ? 'text-yellow-600' : 'text-yellow-400'}`} />;
      case 'LayoutDashboard': return <LayoutDashboard className={`w-5 h-5 ${isLight ? 'text-indigo-600' : 'text-indigo-400'}`} />;
      case 'Wrench': return <Wrench className={`w-5 h-5 ${isLight ? 'text-orange-600' : 'text-orange-400'}`} />;
      case 'Rocket': return <Rocket className={`w-5 h-5 ${isLight ? 'text-rose-600' : 'text-rose-400'}`} />;
      case 'TrendingUp': return <TrendingUp className={`w-5 h-5 ${isLight ? 'text-teal-600' : 'text-teal-400'}`} />;
      default: return <Globe className={`w-5 h-5 ${iconClass}`} />;
    }
  };

  return (
    <section
      id="services"
      className={`py-24 relative transition-colors ${
        isLight ? 'bg-slate-50/70 border-t border-slate-200' : 'bg-[#07090e]'
      }`}
    >
      {/* Subtle background glow */}
      <div
        className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] blur-[140px] pointer-events-none rounded-full ${
          isLight ? 'bg-blue-100/50' : 'bg-cyan-600/5'
        }`}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span
            className={`text-xs font-mono uppercase tracking-wider px-3.5 py-1 rounded-full border ${
              isLight
                ? 'bg-white border-slate-200 text-cyan-800 shadow-sm'
                : 'bg-slate-900 border-slate-800 text-cyan-400'
            }`}
          >
            Specialized Development Services
          </span>
          <h2
            className={`text-3xl sm:text-4xl md:text-5xl font-extrabold font-display tracking-tight ${
              isLight ? 'text-slate-900' : 'text-white'
            }`}
          >
            WHAT I CAN{' '}
            <span
              className={`text-transparent bg-clip-text ${
                isLight
                  ? 'bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-600'
                  : 'bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-400'
              }`}
            >
              BUILD FOR YOU
            </span>
          </h2>
          <p
            className={`text-base sm:text-lg leading-relaxed ${
              isLight ? 'text-slate-600' : 'text-slate-400'
            }`}
          >
            Tailored digital solutions built from the ground up for performance, brand distinction, and real business growth.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES_LIST.map((service) => (
            <div
              key={service.id}
              className={`group relative rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between shadow-xl border ${
                isLight
                  ? 'bg-white border-slate-200 hover:border-blue-400 shadow-slate-200/50 hover:shadow-2xl hover:shadow-blue-500/10'
                  : 'bg-[#0b101c] border-slate-800/90 hover:border-cyan-500/40 shadow-black/40 hover:shadow-cyan-950/20'
              }`}
            >
              <div>
                {/* Icon & Turnaround */}
                <div className="flex items-center justify-between mb-4">
                  <div
                    className={`p-3 rounded-xl border group-hover:scale-110 transition-transform ${
                      isLight ? 'bg-slate-50 border-slate-200' : 'bg-slate-900 border-slate-800'
                    }`}
                  >
                    {getIcon(service.icon)}
                  </div>
                  <span
                    className={`text-[10px] font-mono px-2 py-0.5 rounded border ${
                      isLight
                        ? 'bg-slate-100 text-slate-600 border-slate-200'
                        : 'bg-slate-900/90 text-slate-400 border-slate-800'
                    }`}
                  >
                    {service.turnaround}
                  </span>
                </div>

                <h3
                  className={`text-lg font-bold transition-colors ${
                    isLight ? 'text-slate-900 group-hover:text-blue-600' : 'text-white group-hover:text-cyan-300'
                  }`}
                >
                  {service.title}
                </h3>
                <p className={`text-xs mt-2 leading-relaxed ${isLight ? 'text-slate-600' : 'text-slate-400'}`}>
                  {service.desc}
                </p>

                {/* Bullets */}
                <ul
                  className={`mt-4 space-y-1.5 pt-3 border-t ${
                    isLight ? 'border-slate-100' : 'border-slate-800/80'
                  }`}
                >
                  {service.features.map((h: string, i: number) => (
                    <li
                      key={i}
                      className={`flex items-center gap-2 text-xs ${
                        isLight ? 'text-slate-700' : 'text-slate-300'
                      }`}
                    >
                      <Check className={`w-3.5 h-3.5 shrink-0 ${isLight ? 'text-blue-600' : 'text-cyan-400'}`} />
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Order / Inquire Button */}
              <button
                onClick={() => onSelectService(service.title)}
                className={`mt-6 w-full py-2.5 px-3 rounded-xl border text-xs font-semibold flex items-center justify-center gap-1.5 transition-all cursor-pointer ${
                  isLight
                    ? 'bg-slate-50 hover:bg-blue-50 text-slate-800 hover:text-blue-700 border-slate-200 hover:border-blue-300'
                    : 'bg-slate-900 hover:bg-cyan-500/10 border-slate-800 hover:border-cyan-500/40 text-slate-300 hover:text-cyan-300'
                }`}
              >
                <span>Request {service.title}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
