import React from 'react';
import { MessageSquare, Layout, Sliders, CheckCircle, Rocket } from 'lucide-react';
import { WORK_PROCESS_STEPS } from '../data/portfolioData';
import { useTheme } from '../context/ThemeContext';

export const ProcessSection: React.FC = () => {
  const stepIcons = [MessageSquare, Layout, Sliders, CheckCircle, Rocket];
  const { isLight } = useTheme();

  return (
    <section
      className={`py-24 relative transition-colors ${
        isLight ? 'bg-slate-50/70 border-t border-slate-200' : 'bg-[#07090e]'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span
            className={`text-xs font-mono uppercase tracking-wider px-3.5 py-1 rounded-full border ${
              isLight
                ? 'bg-white border-slate-200 text-cyan-800 shadow-sm'
                : 'bg-slate-900 border-slate-800 text-cyan-400'
            }`}
          >
            Transparent Workflow
          </span>
          <h2
            className={`text-3xl sm:text-4xl md:text-5xl font-extrabold font-display tracking-tight ${
              isLight ? 'text-slate-900' : 'text-white'
            }`}
          >
            HOW WE{' '}
            <span
              className={`text-transparent bg-clip-text ${
                isLight
                  ? 'bg-gradient-to-r from-blue-600 to-indigo-600'
                  : 'bg-gradient-to-r from-cyan-400 to-indigo-400'
              }`}
            >
              BUILD YOUR WEBSITE
            </span>
          </h2>
          <p
            className={`text-base sm:text-lg leading-relaxed ${
              isLight ? 'text-slate-600' : 'text-slate-400'
            }`}
          >
            A simple, predictable five-step process from initial brief to live high-speed deployment.
          </p>
        </div>

        {/* Timeline Desktop & Mobile */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4 relative">
          {/* Connector Line (Desktop) */}
          <div
            className={`hidden md:block absolute top-1/4 left-10 right-10 h-0.5 z-0 ${
              isLight
                ? 'bg-gradient-to-r from-blue-200 via-indigo-200 to-cyan-200'
                : 'bg-gradient-to-r from-cyan-500/20 via-blue-500/40 to-purple-500/20'
            }`}
          />

          {WORK_PROCESS_STEPS.map((step, idx) => {
            const Icon = stepIcons[idx % stepIcons.length];
            return (
              <div
                key={step.step}
                className={`relative z-10 p-5 rounded-2xl transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between space-y-4 shadow-xl group border ${
                  isLight
                    ? 'bg-white border-slate-200 hover:border-blue-400 shadow-slate-200/50 hover:shadow-2xl hover:shadow-blue-500/10'
                    : 'bg-[#0b101c] border-slate-800 hover:border-cyan-500/50 shadow-black/40'
                }`}
              >
                <div>
                  {/* Step Number & Icon */}
                  <div className="flex items-center justify-between mb-4">
                    <span
                      className={`text-xl font-extrabold font-mono transition-colors ${
                        isLight ? 'text-blue-600' : 'text-cyan-400/90 group-hover:text-cyan-300'
                      }`}
                    >
                      {step.step}
                    </span>
                    <div
                      className={`w-10 h-10 rounded-xl border flex items-center justify-center transition-all shadow-md ${
                        isLight
                          ? 'bg-slate-50 border-slate-200 text-blue-600 group-hover:bg-blue-600 group-hover:text-white'
                          : 'bg-slate-900 border-slate-800 text-cyan-400 group-hover:bg-cyan-500 group-hover:text-slate-950'
                      }`}
                    >
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  <h3
                    className={`text-sm font-bold transition-colors ${
                      isLight ? 'text-slate-900 group-hover:text-blue-600' : 'text-white group-hover:text-cyan-300'
                    }`}
                  >
                    {step.title}
                  </h3>
                  <p className={`text-xs mt-2 leading-relaxed ${isLight ? 'text-slate-600' : 'text-slate-400'}`}>
                    {step.desc}
                  </p>
                </div>

                <div
                  className={`pt-2 text-[10px] font-mono uppercase tracking-widest border-t ${
                    isLight ? 'border-slate-100 text-slate-400' : 'border-slate-800/80 text-slate-500'
                  }`}
                >
                  Phase {idx + 1} of 5
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
