import React, { useState } from 'react';
import {
  X,
  Laptop,
  Smartphone,
  Heart,
  Share2,
  MessageSquare,
  CheckCircle2,
  ArrowRight,
  ShieldCheck,
  ChevronRight,
  Sparkles,
  Phone,
  Clock,
  MapPin,
} from 'lucide-react';
import { DemoWebsite } from '../data/portfolioData';
import { useTheme } from '../context/ThemeContext';

interface DemoPreviewModalProps {
  demo: DemoWebsite | null;
  isOpen: boolean;
  onClose: () => void;
  onChooseDesign: (demo: DemoWebsite) => void;
  onLikeDemo: (demoId: string) => void;
  isLiked: boolean;
  onOpenFeedback: (demo: DemoWebsite) => void;
  onOpenShare: (demo: DemoWebsite) => void;
}

export const DemoPreviewModal: React.FC<DemoPreviewModalProps> = ({
  demo,
  isOpen,
  onClose,
  onChooseDesign,
  onLikeDemo,
  isLiked,
  onOpenFeedback,
  onOpenShare,
}) => {
  const [deviceMode, setDeviceMode] = useState<'desktop' | 'mobile'>('desktop');
  const [activeTab, setActiveTab] = useState<'overview' | 'features' | 'catalog' | 'reviews'>('overview');
  const [bookingToast, setBookingToast] = useState<string | null>(null);
  const { isLight } = useTheme();

  if (!isOpen || !demo) return null;

  const handleSimulateAction = (msg: string) => {
    setBookingToast(msg);
    setTimeout(() => setBookingToast(null), 3500);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-xl p-2 sm:p-4 overflow-y-auto">
      {/* Modal Container */}
      <div
        className={`relative w-full max-w-6xl h-[94vh] flex flex-col rounded-2xl shadow-2xl overflow-hidden border transition-colors ${
          isLight
            ? 'bg-white border-slate-200 shadow-slate-900/20 text-slate-900'
            : 'bg-[#090d16] border-slate-700/80 shadow-cyan-950/40 text-slate-100'
        }`}
      >
        {/* Top Control Bar & Browser Simulator Header */}
        <div
          className={`px-4 py-3 border-b flex flex-wrap items-center justify-between gap-3 shrink-0 ${
            isLight ? 'bg-slate-100 border-slate-200' : 'bg-[#0d1322] border-slate-800'
          }`}
        >
          {/* Left: Browser window buttons & Title */}
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-1.5">
              <button
                onClick={onClose}
                className="w-3 h-3 rounded-full bg-rose-500 hover:bg-rose-400 transition-colors cursor-pointer"
                title="Close Demo"
              />
              <span className="w-3 h-3 rounded-full bg-amber-500/80" />
              <span className="w-3 h-3 rounded-full bg-emerald-500/80" />
            </div>

            <div
              className={`hidden md:flex items-center gap-2 pl-2 border-l ${
                isLight ? 'border-slate-300' : 'border-slate-800'
              }`}
            >
              <span className={`text-xs font-bold tracking-wide ${isLight ? 'text-slate-900' : 'text-white'}`}>
                {demo.name}
              </span>
              <span
                className={`text-[11px] px-2 py-0.5 rounded font-mono border ${
                  isLight
                    ? 'bg-blue-50 text-blue-700 border-blue-200'
                    : 'bg-cyan-950 text-cyan-400 border-cyan-800/60'
                }`}
              >
                {demo.category}
              </span>
            </div>
          </div>

          {/* Center: Desktop / Mobile Viewport Switcher */}
          <div
            className={`flex items-center p-1 rounded-xl border ${
              isLight ? 'bg-white border-slate-200' : 'bg-slate-900/90 border-slate-800'
            }`}
          >
            <button
              onClick={() => setDeviceMode('desktop')}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                deviceMode === 'desktop'
                  ? isLight
                    ? 'bg-blue-600 text-white shadow-sm'
                    : 'bg-cyan-500 text-slate-950 shadow-sm'
                  : 'text-slate-500 hover:text-slate-900'
              }`}
            >
              <Laptop className="w-3.5 h-3.5" />
              <span>Desktop</span>
            </button>

            <button
              onClick={() => setDeviceMode('mobile')}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                deviceMode === 'mobile'
                  ? isLight
                    ? 'bg-blue-600 text-white shadow-sm'
                    : 'bg-cyan-500 text-slate-950 shadow-sm'
                  : 'text-slate-500 hover:text-slate-900'
              }`}
            >
              <Smartphone className="w-3.5 h-3.5" />
              <span>Mobile</span>
            </button>
          </div>

          {/* Right Action Controls */}
          <div className="flex items-center gap-2">
            {/* Like button */}
            <button
              onClick={() => onLikeDemo(demo.id)}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium border transition-colors cursor-pointer ${
                isLiked
                  ? 'bg-rose-50 text-rose-600 border-rose-300'
                  : isLight
                  ? 'bg-white text-slate-700 border-slate-200 hover:text-rose-600'
                  : 'bg-slate-900 text-slate-300 border-slate-800 hover:text-rose-400'
              }`}
              title="Like this demo"
            >
              <Heart className={`w-3.5 h-3.5 ${isLiked ? 'fill-rose-500 text-rose-500' : ''}`} />
              <span className="font-mono">{demo.likes}</span>
            </button>

            {/* Share button */}
            <button
              onClick={() => onOpenShare(demo)}
              className={`p-2 rounded-lg text-xs border transition-colors cursor-pointer ${
                isLight
                  ? 'bg-white text-slate-700 border-slate-200 hover:text-blue-600'
                  : 'bg-slate-900 text-slate-300 border-slate-800 hover:text-cyan-400'
              }`}
              title="Share Demo"
            >
              <Share2 className="w-3.5 h-3.5" />
            </button>

            {/* Feedback button */}
            <button
              onClick={() => onOpenFeedback(demo)}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs border transition-colors cursor-pointer ${
                isLight
                  ? 'bg-white text-slate-700 border-slate-200 hover:text-amber-600'
                  : 'bg-slate-900 text-slate-300 border-slate-800 hover:text-amber-400'
              }`}
              title="Leave Feedback"
            >
              <MessageSquare className="w-3.5 h-3.5 text-amber-500" />
              <span className="hidden sm:inline">Feedback</span>
            </button>

            {/* Choose This Design CTA */}
            <button
              onClick={() => {
                onClose();
                onChooseDesign(demo);
              }}
              className="px-4 py-1.5 rounded-lg bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold shadow-md shadow-blue-500/20 transition-all cursor-pointer whitespace-nowrap"
            >
              Choose This Design
            </button>

            {/* Close Cross */}
            <button
              onClick={onClose}
              className={`p-1.5 rounded-lg transition-colors cursor-pointer ${
                isLight ? 'text-slate-500 hover:text-slate-900 hover:bg-slate-200' : 'text-slate-400 hover:text-white hover:bg-slate-800'
              }`}
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Browser Mock URL bar */}
        <div
          className={`hidden sm:flex items-center px-4 py-1.5 border-b text-xs font-mono gap-2 ${
            isLight ? 'bg-white border-slate-200 text-slate-500' : 'bg-[#090d16] border-slate-800/80 text-slate-400'
          }`}
        >
          <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
          <span className="text-emerald-600 font-semibold">https://</span>
          <span className={isLight ? 'text-slate-800' : 'text-slate-300'}>althaf.studio/demos/{demo.id}</span>
          <span className="ml-auto text-[11px] text-slate-400">Live Client Preview Simulator</span>
        </div>

        {/* Main Viewport Content Area */}
        <div
          className={`flex-1 overflow-y-auto p-4 sm:p-6 flex justify-center items-start ${
            isLight ? 'bg-slate-100/70' : 'bg-slate-950'
          }`}
        >
          <div
            className={`transition-all duration-300 w-full ${
              deviceMode === 'mobile'
                ? 'max-w-[390px] border-4 border-slate-800 rounded-[38px] shadow-2xl p-1 bg-black overflow-hidden'
                : `max-w-5xl rounded-xl border shadow-xl ${
                    isLight ? 'bg-white border-slate-200' : 'bg-[#080c14] border-slate-800/80'
                  }`
            }`}
          >
            {/* If Mobile, render phone notch */}
            {deviceMode === 'mobile' && (
              <div className="w-full h-6 bg-black flex justify-center items-center">
                <div className="w-24 h-4 bg-slate-900 rounded-full" />
              </div>
            )}

            {/* Simulated Live Website Application */}
            <div className="relative w-full overflow-hidden text-slate-100 bg-[#070a12] min-h-[580px] rounded-lg">
              {/* Simulated Demo Nav */}
              <div className="px-4 py-3 border-b border-slate-800/70 flex items-center justify-between bg-[#0b101c]/90">
                <div className="flex items-center gap-2">
                  <div
                    className="w-7 h-7 rounded-lg flex items-center justify-center text-white font-bold text-xs"
                    style={{ backgroundColor: demo.themeColor }}
                  >
                    ★
                  </div>
                  <span className="font-bold text-sm tracking-wide text-white">{demo.name}</span>
                </div>

                <div className="hidden md:flex items-center gap-4 text-xs text-slate-300">
                  <button onClick={() => setActiveTab('overview')} className={`hover:text-cyan-400 ${activeTab === 'overview' ? 'text-cyan-400 font-bold' : ''}`}>
                    Home
                  </button>
                  <button onClick={() => setActiveTab('features')} className={`hover:text-cyan-400 ${activeTab === 'features' ? 'text-cyan-400 font-bold' : ''}`}>
                    Features
                  </button>
                  <button onClick={() => setActiveTab('catalog')} className={`hover:text-cyan-400 ${activeTab === 'catalog' ? 'text-cyan-400 font-bold' : ''}`}>
                    Offerings
                  </button>
                  <button onClick={() => setActiveTab('reviews')} className={`hover:text-cyan-400 ${activeTab === 'reviews' ? 'text-cyan-400 font-bold' : ''}`}>
                    Reviews
                  </button>
                </div>

                <button
                  onClick={() => handleSimulateAction(`Action recorded! In a live website this initiates direct WhatsApp or online booking.`)}
                  className="px-3 py-1.5 rounded-lg text-xs font-bold text-white shadow-sm cursor-pointer"
                  style={{ backgroundColor: demo.themeColor }}
                >
                  {demo.mockData.primaryAction}
                </button>
              </div>

              {/* Simulated Hero Banner */}
              <div className="relative py-12 px-6 sm:px-10 overflow-hidden">
                <div
                  className="absolute inset-0 opacity-20 pointer-events-none"
                  style={{
                    backgroundImage: `radial-gradient(circle at 50% 30%, ${demo.themeColor} 0%, transparent 70%)`,
                  }}
                />

                <div className="relative z-10 max-w-2xl space-y-4">
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-semibold bg-slate-900 border border-slate-700 text-cyan-400">
                    <Sparkles className="w-3 h-3" />
                    <span>{demo.subtitle || demo.category}</span>
                  </div>

                  <h2 className="text-2xl sm:text-4xl font-extrabold font-display text-white tracking-tight leading-tight">
                    {demo.mockData.heroTitle}
                  </h2>

                  <p className="text-sm text-slate-300 leading-relaxed">
                    {demo.mockData.heroSubtitle}
                  </p>

                  <div className="flex flex-wrap items-center gap-3 pt-2">
                    <button
                      onClick={() => handleSimulateAction(`Triggered: ${demo.mockData.primaryAction}`)}
                      className="px-5 py-2.5 rounded-xl font-bold text-xs text-white shadow-lg cursor-pointer"
                      style={{ backgroundColor: demo.themeColor }}
                    >
                      {demo.mockData.primaryAction}
                    </button>
                    <button
                      onClick={() => setActiveTab('catalog')}
                      className="px-4 py-2.5 rounded-xl font-semibold text-xs text-slate-300 bg-slate-900/80 hover:bg-slate-800 border border-slate-700 cursor-pointer"
                    >
                      {demo.mockData.secondaryAction}
                    </button>
                  </div>
                </div>

                {/* Simulated Quick Stats Bar */}
                <div className="grid grid-cols-3 gap-3 pt-8 mt-8 border-t border-slate-800/80 max-w-lg">
                  {demo.mockData.stats.map((st, i) => (
                    <div key={i} className="text-left">
                      <div className="text-base sm:text-lg font-bold text-white font-mono">{st.value}</div>
                      <div className="text-[10px] text-slate-400">{st.label}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Interactive Features Bento */}
              <div className="px-6 sm:px-10 py-8 bg-[#0a0f1d] border-t border-slate-800/60">
                <div className="mb-4">
                  <span className="text-[11px] font-mono uppercase tracking-wider text-cyan-400">Why Customers Choose Us</span>
                  <h3 className="text-lg font-bold text-white">Engineered For Exceptional Results</h3>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  {demo.mockData.features.map((feat, idx) => (
                    <div
                      key={idx}
                      className="p-4 rounded-xl bg-slate-900/80 border border-slate-800 hover:border-cyan-500/40 transition-colors"
                    >
                      <CheckCircle2 className="w-5 h-5 text-cyan-400 mb-2" />
                      <h4 className="text-xs font-bold text-white">{feat.title}</h4>
                      <p className="text-[11px] text-slate-400 mt-1 leading-relaxed">{feat.desc}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Sample Catalog / Offerings Grid */}
              <div className="px-6 sm:px-10 py-8 bg-[#070a12]">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <span className="text-[11px] font-mono uppercase tracking-wider text-cyan-400">Curated Showcase</span>
                    <h3 className="text-lg font-bold text-white">Popular Highlights</h3>
                  </div>
                  <button
                    onClick={() => handleSimulateAction('Opening full digital catalog...')}
                    className="text-xs text-cyan-400 hover:underline flex items-center gap-1 cursor-pointer"
                  >
                    <span>View All</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </button>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  {demo.mockData.sampleItems.map((item, idx) => (
                    <div
                      key={idx}
                      className="p-4 rounded-xl bg-[#0d1322] border border-slate-800 hover:border-slate-700 transition-all flex flex-col justify-between space-y-3"
                    >
                      <div>
                        <div className="flex items-center justify-between">
                          <span className="text-[10px] px-2 py-0.5 rounded bg-slate-800 text-cyan-400 font-mono">
                            {item.tag}
                          </span>
                          <span className="text-xs font-bold text-white font-mono">
                            {item.priceOrHighlight}
                          </span>
                        </div>
                        <h4 className="text-sm font-bold text-white mt-2">{item.name}</h4>
                        <p className="text-xs text-slate-400 mt-1 leading-relaxed">{item.desc}</p>
                      </div>

                      <button
                        onClick={() => handleSimulateAction(`Selected: ${item.name}`)}
                        className="w-full py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold transition-colors cursor-pointer"
                      >
                        Select Option
                      </button>
                    </div>
                  ))}
                </div>
              </div>

              {/* Contact Bar Footnote inside simulated website */}
              <div className="px-6 sm:px-10 py-6 bg-[#080d18] border-t border-slate-800 text-xs text-slate-400 flex flex-wrap items-center justify-between gap-4">
                <div className="flex items-center gap-2">
                  <MapPin className="w-3.5 h-3.5 text-cyan-400" />
                  <span>{demo.mockData.contactInfo.address}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-3.5 h-3.5 text-amber-400" />
                  <span>{demo.mockData.contactInfo.hours}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="w-3.5 h-3.5 text-emerald-400" />
                  <span>{demo.mockData.contactInfo.phone}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Toast alert if simulated action clicked */}
        {bookingToast && (
          <div className="absolute top-16 left-1/2 -translate-x-1/2 bg-emerald-500 text-slate-950 font-bold px-4 py-2 rounded-xl shadow-2xl text-xs z-50 flex items-center gap-2 animate-bounce">
            <CheckCircle2 className="w-4 h-4 text-slate-950" />
            <span>{bookingToast}</span>
          </div>
        )}

        {/* Floating CTA Banner inside preview as requested */}
        <div
          className={`px-6 py-3 border-t flex flex-wrap items-center justify-between gap-4 shrink-0 shadow-xl ${
            isLight
              ? 'bg-white border-slate-200 text-slate-900'
              : 'bg-[#0d1424] border-cyan-500/30 text-white'
          }`}
        >
          <div className="flex items-center gap-3">
            <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
            <div>
              <p className={`text-xs sm:text-sm font-bold ${isLight ? 'text-slate-900' : 'text-white'}`}>
                Like this design? Let ALTHAF build it for you.
              </p>
              <p className={`text-[11px] ${isLight ? 'text-slate-500' : 'text-slate-400'}`}>
                Customized for your branding, services, and online customer leads.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => onOpenFeedback(demo)}
              className={`text-xs underline cursor-pointer ${
                isLight ? 'text-slate-600 hover:text-slate-900' : 'text-slate-300 hover:text-white'
              }`}
            >
              Rate or Review Design
            </button>

            <button
              onClick={() => {
                onClose();
                onChooseDesign(demo);
              }}
              className="px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 hover:scale-105 text-white font-bold text-xs tracking-wide shadow-lg shadow-blue-500/25 transition-all flex items-center gap-2 cursor-pointer"
            >
              <span>Build This Website</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
