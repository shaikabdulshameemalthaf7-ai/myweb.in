import React, { useState, useEffect, useRef } from 'react';
import {
  ArrowRight,
  Laptop,
  Smartphone,
  Tablet,
  Zap,
  CheckCircle2,
  Sparkles,
  MessageCircle,
  Phone,
  Mail,
  ExternalLink,
  Code2,
  TrendingUp,
  ShieldCheck,
  MousePointer2,
} from 'lucide-react';

interface HeroSectionProps {
  onExploreDemos: () => void;
  onContactAlthaf: () => void;
  onOpenDemo?: (demoId: string) => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onExploreDemos,
  onContactAlthaf,
  onOpenDemo,
}) => {
  const [deviceMode, setDeviceMode] = useState<'desktop' | 'tablet' | 'mobile'>('desktop');
  const [interactiveTab, setInteractiveTab] = useState<'preview' | 'code'>('preview');
  const [activeMetric, setActiveMetric] = useState(0);

  // Mouse tilt effect for the interactive showcase
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setMousePos({ x, y });
  };

  const handleMouseLeave = () => {
    setMousePos({ x: 0, y: 0 });
  };

  // Rotating metrics in simulated preview
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveMetric((prev) => (prev + 1) % 3);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-[92vh] pt-32 pb-20 flex items-center bg-gradient-to-b from-white via-slate-50/60 to-white text-slate-900 overflow-hidden"
    >
      {/* Luminous Ambient Background Glows */}
      <div className="absolute top-12 left-10 w-96 h-96 bg-blue-100/70 rounded-full blur-[110px] pointer-events-none" />
      <div className="absolute top-28 right-12 w-[460px] h-[460px] bg-indigo-100/60 rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute bottom-10 left-1/3 w-80 h-80 bg-cyan-100/50 rounded-full blur-[100px] pointer-events-none" />

      {/* Modern Subtle Dot Grid Background */}
      <div
        className="absolute inset-0 opacity-[0.4] pointer-events-none"
        style={{
          backgroundImage:
            'radial-gradient(circle at 1px 1px, rgba(148, 163, 184, 0.25) 1px, transparent 0)',
          backgroundSize: '32px 32px',
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Heading, Value Proposition, Action Buttons */}
          <div className="lg:col-span-6 flex flex-col items-start space-y-6">
            {/* Top Kicker Badge with Animated Glow */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200/80 shadow-xs">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-600"></span>
              </span>
              <span className="text-xs font-mono font-bold text-blue-700 tracking-wide">
                ALTHAF · Website Designer &amp; Builder
              </span>
            </div>

            {/* Main Punchy Heading */}
            <div className="space-y-2">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold font-display tracking-tight text-slate-900 leading-[1.12]">
                YOUR BUSINESS DESERVES <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-500 animate-shimmer">
                  A WEBSITE THAT STANDS OUT.
                </span>
              </h1>
            </div>

            {/* Subtitle */}
            <p className="text-base sm:text-lg text-slate-600 max-w-xl leading-relaxed">
              I design and build modern, responsive, and high-converting websites designed
              specifically for businesses, brands, and entrepreneurs looking to accelerate their growth.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <button
                onClick={onExploreDemos}
                className="px-7 py-3.5 rounded-full bg-blue-600 hover:bg-blue-700 text-white font-bold text-sm tracking-wide shadow-lg shadow-blue-600/25 hover:shadow-xl hover:shadow-blue-600/35 hover:-translate-y-0.5 active:translate-y-0 transition-all flex items-center gap-2 cursor-pointer group"
              >
                <span>Explore Demo Websites</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={onContactAlthaf}
                className="px-7 py-3.5 rounded-full bg-white hover:bg-slate-50 border border-slate-300 text-slate-700 hover:text-slate-900 font-bold text-sm tracking-wide shadow-xs hover:border-slate-400 hover:-translate-y-0.5 transition-all cursor-pointer flex items-center gap-2"
              >
                <span>Contact ALTHAF</span>
                <MessageCircle className="w-4 h-4 text-blue-600" />
              </button>
            </div>

            {/* Trust Indicators: 4 Badges */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-6 border-t border-slate-200/90 w-full">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span className="text-xs font-semibold text-slate-700">Responsive UI</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0" />
                <span className="text-xs font-semibold text-slate-700">Modern UX</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-indigo-600 shrink-0" />
                <span className="text-xs font-semibold text-slate-700">Fast &amp; SEO-Ready</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-cyan-600 shrink-0" />
                <span className="text-xs font-semibold text-slate-700">Custom Built</span>
              </div>
            </div>

            {/* Direct Contact Pill */}
            <div className="flex flex-wrap items-center gap-3 pt-1 text-xs font-mono text-slate-600">
              <a
                href="https://wa.me/918179176914"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-emerald-50 text-emerald-700 hover:bg-emerald-100 transition-colors font-medium border border-emerald-200"
              >
                <MessageCircle className="w-3.5 h-3.5" />
                <span>WhatsApp: 8179176914</span>
              </a>
              <a
                href="mailto:myappinhub@gmail.com"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-blue-50 text-blue-700 hover:bg-blue-100 transition-colors font-medium border border-blue-200"
              >
                <Mail className="w-3.5 h-3.5" />
                <span>myappinhub@gmail.com</span>
              </a>
            </div>
          </div>

          {/* Right Column: Mesmerizing Interactive 3D Mockup Stage (NO PHOTO) */}
          <div className="lg:col-span-6 relative flex flex-col items-center">
            {/* Interactive Browser Device Frame with 3D Tilt */}
            <div
              ref={cardRef}
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              style={{
                transform: `perspective(1000px) rotateY(${mousePos.x * 10}deg) rotateX(${-mousePos.y * 10}deg)`,
                transition: 'transform 0.15s ease-out',
              }}
              className="relative w-full max-w-[540px] rounded-3xl bg-white border border-slate-200 shadow-2xl shadow-blue-500/10 p-5 group transition-all duration-300"
            >
              {/* Top Window Bar with Controls & Device Switchers */}
              <div className="flex items-center justify-between pb-3.5 border-b border-slate-100">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-rose-400" />
                  <span className="w-3 h-3 rounded-full bg-amber-400" />
                  <span className="w-3 h-3 rounded-full bg-emerald-400" />
                  <span className="ml-2 text-xs font-mono font-medium text-slate-500 hidden sm:inline">
                    althaf-studio.preview.web
                  </span>
                </div>

                {/* Device switch buttons */}
                <div className="flex items-center gap-1 bg-slate-100 p-1 rounded-xl border border-slate-200">
                  <button
                    onClick={() => setDeviceMode('desktop')}
                    className={`p-1.5 rounded-lg text-xs transition-all ${
                      deviceMode === 'desktop'
                        ? 'bg-white text-blue-600 shadow-xs font-bold'
                        : 'text-slate-500 hover:text-slate-900'
                    }`}
                    title="Desktop Preview"
                  >
                    <Laptop className="w-3.5 h-3.5" />
                  </button>
                  <button
                    onClick={() => setDeviceMode('tablet')}
                    className={`p-1.5 rounded-lg text-xs transition-all ${
                      deviceMode === 'tablet'
                        ? 'bg-white text-blue-600 shadow-xs font-bold'
                        : 'text-slate-500 hover:text-slate-900'
                    }`}
                    title="Tablet Preview"
                  >
                    <Tablet className="w-3.5 h-3.5" />
                  </button>
                  <button
                    onClick={() => setDeviceMode('mobile')}
                    className={`p-1.5 rounded-lg text-xs transition-all ${
                      deviceMode === 'mobile'
                        ? 'bg-white text-blue-600 shadow-xs font-bold'
                        : 'text-slate-500 hover:text-slate-900'
                    }`}
                    title="Mobile Preview"
                  >
                    <Smartphone className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>

              {/* Simulated Website UI Canvas with Responsive Container */}
              <div
                className={`mx-auto transition-all duration-500 mt-4 rounded-2xl border border-slate-200/90 overflow-hidden bg-slate-50/50 ${
                  deviceMode === 'desktop'
                    ? 'w-full'
                    : deviceMode === 'tablet'
                    ? 'w-[85%]'
                    : 'w-[68%]'
                }`}
              >
                {/* Simulated Web Header */}
                <div className="px-4 py-3 bg-white border-b border-slate-200 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 rounded-lg bg-blue-600 flex items-center justify-center text-white font-bold text-xs">
                      A
                    </div>
                    <span className="text-xs font-bold font-display text-slate-900">
                      Modern Luxury Brand
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-700 text-[10px] font-bold border border-emerald-200">
                      Live
                    </span>
                  </div>
                </div>

                {/* Simulated Hero Banner inside the mockup */}
                <div className="p-5 bg-gradient-to-br from-blue-50/80 via-white to-indigo-50/50 space-y-3 text-center">
                  <span className="inline-block text-[10px] font-mono font-semibold px-2 py-0.5 rounded-md bg-blue-100/70 text-blue-700">
                    High Conversion Design
                  </span>
                  <h3 className="text-base sm:text-lg font-black font-display text-slate-900 leading-snug">
                    Elevate Your Business Online
                  </h3>
                  <p className="text-[11px] text-slate-500 max-w-xs mx-auto">
                    Designed with precision for seamless speed and captivating customer interactions.
                  </p>
                  <div className="flex items-center justify-center gap-2 pt-1">
                    <button
                      onClick={onExploreDemos}
                      className="px-3.5 py-1.5 rounded-full bg-blue-600 text-white font-bold text-[11px] shadow-sm hover:bg-blue-700 cursor-pointer"
                    >
                      Explore Demos
                    </button>
                    <button
                      onClick={onContactAlthaf}
                      className="px-3 py-1.5 rounded-full bg-white border border-slate-300 text-slate-700 font-semibold text-[11px] hover:bg-slate-50 cursor-pointer"
                    >
                      Book Call
                    </button>
                  </div>
                </div>

                {/* Simulated Micro Metrics Row inside the Mockup */}
                <div className="grid grid-cols-3 divide-x divide-slate-200 border-t border-slate-200 bg-white py-2.5 text-center text-[10px]">
                  <div>
                    <span className="block font-bold text-slate-900">99/100</span>
                    <span className="text-slate-400">Speed Score</span>
                  </div>
                  <div>
                    <span className="block font-bold text-blue-600">100%</span>
                    <span className="text-slate-400">Responsive</span>
                  </div>
                  <div>
                    <span className="block font-bold text-emerald-600">&lt; 0.8s</span>
                    <span className="text-slate-400">Load Time</span>
                  </div>
                </div>
              </div>

              {/* Floating Interactive Badge 1: 50+ Projects Completed */}
              <div className="absolute -top-4 -left-3 bg-white border border-slate-200 rounded-2xl px-3.5 py-2 shadow-lg shadow-blue-500/10 flex items-center gap-2.5 animate-float">
                <div className="w-8 h-8 rounded-xl bg-blue-50 border border-blue-200 flex items-center justify-center text-blue-600">
                  <Sparkles className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs font-black font-display text-slate-900 leading-none">
                    50+ Websites
                  </div>
                  <div className="text-[10px] text-slate-500 font-medium mt-0.5">
                    Designed &amp; Built
                  </div>
                </div>
              </div>

              {/* Floating Interactive Badge 2: Client Rating 4.9 */}
              <div className="absolute -bottom-4 -right-3 bg-white border border-slate-200 rounded-2xl px-3.5 py-2 shadow-lg shadow-indigo-500/10 flex items-center gap-2.5 animate-float-delayed">
                <div className="w-8 h-8 rounded-xl bg-amber-50 border border-amber-200 flex items-center justify-center text-amber-500 font-black text-xs">
                  ★
                </div>
                <div>
                  <div className="text-xs font-black font-display text-slate-900 leading-none">
                    4.9 / 5.0
                  </div>
                  <div className="text-[10px] text-slate-500 font-medium mt-0.5">
                    Client Satisfaction
                  </div>
                </div>
              </div>
            </div>

            {/* Mouse guidance note */}
            <div className="mt-6 flex items-center gap-2 text-xs font-mono text-slate-400">
              <MousePointer2 className="w-3.5 h-3.5 text-blue-500" />
              <span>Hover &amp; move cursor to rotate interactive 3D website card</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
