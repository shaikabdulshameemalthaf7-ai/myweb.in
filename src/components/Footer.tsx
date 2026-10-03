import React from 'react';
import { MessageCircle, Phone, Mail, ArrowUp } from 'lucide-react';

export const Footer: React.FC = () => {
  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Demo Websites', href: '#demos' },
    { name: 'Animations', href: '#animations' },
    { name: 'Services', href: '#services' },
    { name: 'Why Choose Me', href: '#why-choose' },
    { name: 'Process', href: '#process' },
    { name: 'About', href: '#about' },
    { name: 'Contact', href: '#contact' },
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-white text-slate-600 py-12 border-t border-slate-200 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-slate-100">
          {/* Brand Logo */}
          <a href="#home" className="flex items-center gap-3 group">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-blue-600 via-indigo-600 to-cyan-500 p-[1.5px] shadow-sm">
              <div className="w-full h-full bg-white rounded-[10px] flex items-center justify-center">
                <span className="text-blue-600 font-display font-black text-base">A</span>
              </div>
            </div>
            <div>
              <span className="font-display font-black text-lg text-slate-900 tracking-tight leading-none block">
                ALTHAF
              </span>
              <span className="text-[10px] font-mono text-blue-600 font-semibold block tracking-wider mt-0.5">
                Website Designer &amp; Website Builder
              </span>
            </div>
          </a>

          {/* Navigation Links */}
          <nav className="flex flex-wrap items-center justify-center gap-5 sm:gap-6 text-xs font-medium">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-slate-600 hover:text-blue-600 transition-colors"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Direct Contacts */}
          <div className="flex items-center gap-2">
            <a
              href="https://wa.me/918179176914"
              target="_blank"
              rel="noreferrer"
              className="w-9 h-9 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-700 hover:bg-emerald-600 hover:text-white flex items-center justify-center transition-all shadow-xs"
              title="WhatsApp: 8179176914"
            >
              <MessageCircle className="w-4 h-4" />
            </a>
            <a
              href="tel:+918179176914"
              className="w-9 h-9 rounded-full bg-blue-50 border border-blue-200 text-blue-700 hover:bg-blue-600 hover:text-white flex items-center justify-center transition-all shadow-xs"
              title="Call: 8179176914"
            >
              <Phone className="w-4 h-4" />
            </a>
            <a
              href="mailto:myappinhub@gmail.com"
              className="w-9 h-9 rounded-full bg-indigo-50 border border-indigo-200 text-indigo-700 hover:bg-indigo-600 hover:text-white flex items-center justify-center transition-all shadow-xs"
              title="Email: myappinhub@gmail.com"
            >
              <Mail className="w-4 h-4" />
            </a>
            <button
              onClick={scrollToTop}
              className="w-9 h-9 rounded-full bg-slate-100 border border-slate-200 text-slate-600 hover:bg-slate-200 flex items-center justify-center transition-all cursor-pointer ml-2"
              title="Scroll to Top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Bottom Credits */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-400 gap-3">
          <p>© {new Date().getFullYear()} ALTHAF. Modern Websites. Powerful Experiences.</p>
          <p className="font-mono text-[11px]">
            WhatsApp: +91 8179176914 · Email: myappinhub@gmail.com
          </p>
        </div>
      </div>
    </footer>
  );
};
