import React, { useState } from 'react';
import { MessageCircle, Sparkles } from 'lucide-react';

interface FloatingActionsProps {
  onOpenContact: () => void;
}

export const FloatingActions: React.FC<FloatingActionsProps> = ({ onOpenContact }) => {
  const [showTooltip, setShowTooltip] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-3 pointer-events-auto">
      {/* Floating "Contact Me" Pill Button */}
      <button
        onClick={onOpenContact}
        className="px-4 py-2 rounded-full text-xs font-bold shadow-lg transition-all hover:scale-105 flex items-center gap-2 group cursor-pointer border bg-white/95 backdrop-blur-md border-blue-200 text-blue-700 hover:text-blue-900 hover:bg-blue-50 shadow-slate-300/60"
      >
        <span className="w-2 h-2 rounded-full animate-ping bg-blue-600" />
        <span>Hire ALTHAF</span>
      </button>

      {/* Floating WhatsApp Button with Hover Tooltip */}
      <div className="relative flex items-center">
        {/* Tooltip on hover */}
        {showTooltip && (
          <div className="absolute right-16 px-3.5 py-1.5 rounded-xl text-xs whitespace-nowrap shadow-xl font-medium flex items-center gap-1.5 border bg-white border-emerald-200 text-emerald-900 shadow-slate-300/60">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
            <span>Chat with ALTHAF on WhatsApp</span>
          </div>
        )}

        <a
          href="https://wa.me/918179176914?text=Hi%20ALTHAF!%20I%20am%20interested%20in%20building%20a%20modern%20website%20for%20my%20business."
          target="_blank"
          rel="noreferrer"
          onMouseEnter={() => setShowTooltip(true)}
          onMouseLeave={() => setShowTooltip(false)}
          className="relative w-14 h-14 rounded-full bg-emerald-500 hover:bg-emerald-600 text-white flex items-center justify-center shadow-xl shadow-emerald-500/35 hover:scale-110 active:scale-95 transition-all duration-300 group cursor-pointer"
          aria-label="Chat on WhatsApp with ALTHAF (8179176914)"
        >
          {/* Subtle pulse ring around WhatsApp button */}
          <span className="absolute inset-0 rounded-full bg-emerald-500 animate-ping opacity-25" />
          <MessageCircle className="w-7 h-7 fill-white relative z-10" />
        </a>
      </div>
    </div>
  );
};
