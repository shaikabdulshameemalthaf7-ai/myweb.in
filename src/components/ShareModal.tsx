import React, { useState } from 'react';
import { X, Copy, Check, Share2, MessageCircle } from 'lucide-react';
import { DemoWebsite } from '../data/portfolioData';
import { useTheme } from '../context/ThemeContext';

interface ShareModalProps {
  demo: DemoWebsite | null;
  isOpen: boolean;
  onClose: () => void;
}

export const ShareModal: React.FC<ShareModalProps> = ({ demo, isOpen, onClose }) => {
  const [copied, setCopied] = useState(false);
  const { isLight } = useTheme();

  if (!isOpen || !demo) return null;

  const currentUrl = window.location.href.split('#')[0] + `#demos`;
  const shareText = `Check out this modern "${demo.name}" website design built by ALTHAF: ${demo.shortDesc}`;

  const handleCopy = () => {
    navigator.clipboard.writeText(`${shareText}\n${currentUrl}`);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const shareTargets = [
    {
      name: 'Copy Link',
      icon: copied ? Check : Copy,
      color: copied ? 'bg-emerald-600 text-white' : isLight ? 'bg-slate-100 text-slate-800' : 'bg-slate-800 text-cyan-400',
      action: handleCopy,
    },
    {
      name: 'WhatsApp',
      icon: MessageCircle,
      color: 'bg-emerald-600 text-white',
      action: () => {
        window.open(
          `https://api.whatsapp.com/send?text=${encodeURIComponent(
            `${shareText} - Explore here: ${currentUrl}`
          )}`,
          '_blank'
        );
      },
    },
    {
      name: 'Twitter / X',
      icon: Share2,
      color: 'bg-sky-600 text-white',
      action: () => {
        window.open(
          `https://twitter.com/intent/tweet?text=${encodeURIComponent(
            shareText
          )}&url=${encodeURIComponent(currentUrl)}`,
          '_blank'
        );
      },
    },
    {
      name: 'LinkedIn',
      icon: Share2,
      color: 'bg-blue-700 text-white',
      action: () => {
        window.open(
          `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(currentUrl)}`,
          '_blank'
        );
      },
    },
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/75 backdrop-blur-md p-4">
      <div
        className={`relative w-full max-w-sm rounded-2xl p-6 shadow-2xl border transition-colors ${
          isLight
            ? 'bg-white border-slate-200 text-slate-900 shadow-slate-900/20'
            : 'bg-[#0b101c] border-slate-700 text-white shadow-cyan-950/40'
        }`}
      >
        <button
          onClick={onClose}
          className={`absolute top-4 right-4 p-1.5 rounded-lg transition-colors cursor-pointer ${
            isLight ? 'text-slate-400 hover:text-slate-900 hover:bg-slate-100' : 'text-slate-400 hover:text-white hover:bg-slate-800'
          }`}
        >
          <X className="w-5 h-5" />
        </button>

        <div className="mb-4">
          <span className={`text-xs font-mono ${isLight ? 'text-blue-600' : 'text-cyan-400'}`}>
            Share Showcase
          </span>
          <h3 className="text-lg font-bold font-display mt-0.5">Share {demo.name}</h3>
          <p className={`text-xs mt-1 ${isLight ? 'text-slate-600' : 'text-slate-400'}`}>
            Send this website design to your partner, team or client.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-3 py-2">
          {shareTargets.map((item, idx) => {
            const Icon = item.icon;
            return (
              <button
                key={idx}
                onClick={item.action}
                className={`flex items-center gap-2 p-3 rounded-xl border transition-all text-left cursor-pointer group ${
                  isLight
                    ? 'bg-slate-50 border-slate-200 hover:bg-slate-100 hover:border-slate-300'
                    : 'bg-slate-900 border-slate-800 hover:border-slate-700 hover:bg-slate-850'
                }`}
              >
                <div className={`p-2 rounded-lg ${item.color} shrink-0`}>
                  <Icon className="w-4 h-4" />
                </div>
                <div>
                  <div
                    className={`text-xs font-semibold ${
                      isLight ? 'text-slate-800 group-hover:text-blue-600' : 'text-slate-200 group-hover:text-cyan-300'
                    }`}
                  >
                    {item.name}
                  </div>
                  <div className="text-[10px] text-slate-500">
                    {item.name === 'Copy Link' ? (copied ? 'Copied!' : 'Clipboard') : 'Share direct'}
                  </div>
                </div>
              </button>
            );
          })}
        </div>

        {copied && (
          <div
            className={`mt-3 py-1.5 px-3 rounded-lg text-[11px] text-center font-medium border ${
              isLight
                ? 'bg-emerald-50 border-emerald-200 text-emerald-800'
                : 'bg-emerald-500/20 border-emerald-500/30 text-emerald-300'
            }`}
          >
            Link and description copied to clipboard!
          </div>
        )}
      </div>
    </div>
  );
};
