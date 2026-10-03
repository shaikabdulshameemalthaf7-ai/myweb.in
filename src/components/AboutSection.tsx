import React from 'react';
import { ArrowRight, Clock, FolderKanban, CheckCircle2, Code2, Sparkles, Terminal, Laptop, ShieldCheck } from 'lucide-react';

interface AboutSectionProps {
  onContactAlthaf: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ onContactAlthaf }) => {
  const techStack = [
    { name: 'HTML5', iconText: '5', bg: 'bg-orange-50 text-orange-600 border-orange-200' },
    { name: 'CSS3', iconText: '3', bg: 'bg-blue-50 text-blue-600 border-blue-200' },
    { name: 'JavaScript', iconText: 'JS', bg: 'bg-amber-50 text-amber-600 border-amber-200' },
    { name: 'React', iconText: '⚛', bg: 'bg-cyan-50 text-cyan-600 border-cyan-200' },
    { name: 'Next.js', iconText: 'N', bg: 'bg-slate-100 text-slate-900 border-slate-300' },
    { name: 'Tailwind CSS', iconText: '≈', bg: 'bg-sky-50 text-sky-600 border-sky-200' },
    { name: 'Node.js', iconText: '⬢', bg: 'bg-emerald-50 text-emerald-600 border-emerald-200' },
    { name: 'TypeScript', iconText: 'TS', bg: 'bg-blue-50 text-blue-700 border-blue-200' },
  ];

  return (
    <section id="about" className="py-24 bg-white text-slate-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Kicker */}
        <div className="mb-4">
          <span className="text-xs font-mono font-bold text-blue-600 px-3 py-1 rounded-full bg-blue-50 border border-blue-200">
            &lt;/&gt; About ALTHAF
          </span>
        </div>

        {/* 3-Column Modern Grid (NO PHOTO) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Column 1: Bio & 3 Stat Badges (col-span-5) */}
          <div className="lg:col-span-5 space-y-6">
            <h2 className="text-3xl sm:text-4xl font-extrabold font-display tracking-tight text-slate-900 leading-tight">
              TURNING IDEAS INTO <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
                BEAUTIFUL WEBSITES.
              </span>
            </h2>

            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              I’m ALTHAF, a website designer and website builder passionate about crafting
              user-friendly, high-performing, and visually stunning web experiences. I combine clean
              code, thoughtful UI/UX, and rapid delivery to help your business stand out and thrive online.
            </p>

            {/* 3 Stats Counters */}
            <div className="grid grid-cols-3 gap-3 pt-2">
              {/* Stat 1 */}
              <div className="space-y-1 p-3 rounded-2xl bg-slate-50 border border-slate-200">
                <div className="w-8 h-8 rounded-full bg-blue-50 border border-blue-200 flex items-center justify-center text-blue-600 mb-1">
                  <Clock className="w-4 h-4" />
                </div>
                <div className="text-2xl font-black font-display text-slate-900">2+</div>
                <div className="text-[11px] text-slate-500 font-medium">Years Experience</div>
              </div>

              {/* Stat 2 */}
              <div className="space-y-1 p-3 rounded-2xl bg-slate-50 border border-slate-200">
                <div className="w-8 h-8 rounded-full bg-emerald-50 border border-emerald-200 flex items-center justify-center text-emerald-600 mb-1">
                  <FolderKanban className="w-4 h-4" />
                </div>
                <div className="text-2xl font-black font-display text-slate-900">50+</div>
                <div className="text-[11px] text-slate-500 font-medium">Projects Done</div>
              </div>

              {/* Stat 3 */}
              <div className="space-y-1 p-3 rounded-2xl bg-slate-50 border border-slate-200">
                <div className="w-8 h-8 rounded-full bg-rose-50 border border-rose-200 flex items-center justify-center text-rose-600 mb-1">
                  <CheckCircle2 className="w-4 h-4" />
                </div>
                <div className="text-2xl font-black font-display text-slate-900">100%</div>
                <div className="text-[11px] text-slate-500 font-medium">Satisfaction</div>
              </div>
            </div>

            {/* Button */}
            <div className="pt-2">
              <button
                onClick={onContactAlthaf}
                className="px-6 py-3 rounded-full bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs sm:text-sm tracking-wide flex items-center gap-2 hover:gap-3 transition-all cursor-pointer shadow-md shadow-blue-600/20"
              >
                <span>Let's Discuss Your Project</span>
                <ArrowRight className="w-4 h-4 text-blue-200" />
              </button>
            </div>
          </div>

          {/* Column 2: Tech Stack (col-span-4) */}
          <div className="lg:col-span-4 space-y-4">
            <h3 className="text-lg font-bold font-display text-slate-900">
              Core Technologies &amp; Stack
            </h3>

            <div className="grid grid-cols-4 gap-3 pt-1">
              {techStack.map((tech, idx) => (
                <div
                  key={idx}
                  className="flex flex-col items-center justify-center p-3 rounded-2xl border bg-slate-50 hover:bg-white hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group cursor-pointer"
                >
                  <div
                    className={`w-11 h-11 rounded-xl flex items-center justify-center font-black text-sm border shadow-xs ${tech.bg} group-hover:scale-110 transition-transform`}
                  >
                    {tech.iconText}
                  </div>
                  <span className="text-[10px] font-semibold text-slate-600 mt-2 text-center truncate max-w-full">
                    {tech.name}
                  </span>
                </div>
              ))}
            </div>

            <p className="text-xs font-mono text-slate-400 pt-1">
              + Full Responsive Web Design, SEO optimization &amp; Animations.
            </p>
          </div>

          {/* Column 3: Stylized Vector Code Card (col-span-3, NO PHOTO) */}
          <div className="lg:col-span-3">
            <div className="rounded-3xl bg-slate-900 text-white p-6 shadow-xl relative overflow-hidden flex flex-col justify-between min-h-[340px] border border-slate-800">
              {/* Card Header text */}
              <div className="space-y-1 z-10">
                <h4 className="text-xl font-bold font-display text-white">Clean Code</h4>
                <h4 className="text-xl font-bold font-display text-blue-400">Better Speed</h4>
                <h4 className="text-xl font-bold font-display text-emerald-400">Happy Clients</h4>
              </div>

              {/* Graphic code preview */}
              <div className="relative my-4 z-10">
                <div className="w-full h-32 rounded-xl bg-slate-950 border border-blue-500/30 p-3 flex flex-col justify-between font-mono text-[10px] text-cyan-300 shadow-inner">
                  <div className="flex items-center gap-1.5 opacity-70">
                    <span className="w-2 h-2 rounded-full bg-rose-500" />
                    <span className="w-2 h-2 rounded-full bg-amber-500" />
                    <span className="w-2 h-2 rounded-full bg-emerald-500" />
                  </div>
                  <div className="space-y-1 opacity-90">
                    <p className="text-slate-400">// built by ALTHAF</p>
                    <p className="text-blue-300">export default AlthafStudio();</p>
                    <p className="text-emerald-400">return &lt;StandOutWebsite /&gt;;</p>
                  </div>
                </div>
              </div>

              {/* Card Action Button */}
              <button
                onClick={onContactAlthaf}
                className="w-full py-2.5 rounded-full bg-blue-600 hover:bg-blue-500 text-xs font-semibold text-white transition-colors z-10 cursor-pointer shadow-md"
              >
                Hire ALTHAF
              </button>

              {/* Ambient blue glow behind */}
              <div className="absolute -bottom-10 -right-10 w-44 h-44 bg-blue-600/25 rounded-full blur-2xl pointer-events-none" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
