import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, MessageCircle, Phone, Sparkles } from 'lucide-react';

interface NavbarProps {
  onStartProject: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onStartProject }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Demo Websites', href: '#demos' },
    { name: 'Interactive Animations', href: '#animations' },
    { name: 'Services', href: '#services' },
    { name: 'Why Choose Me', href: '#why-choose' },
    { name: 'Process', href: '#process' },
    { name: 'About', href: '#about' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/90 backdrop-blur-xl border-b border-slate-200/80 shadow-sm py-3'
          : 'bg-white/70 backdrop-blur-md py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Logo for ALTHAF */}
          <a href="#home" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-blue-600 via-indigo-600 to-cyan-500 p-[1.5px] shadow-md shadow-blue-500/20 group-hover:scale-105 transition-transform">
              <div className="w-full h-full bg-white rounded-[10px] flex items-center justify-center">
                <span className="text-blue-600 font-display text-xl font-black">A</span>
              </div>
            </div>
            <div>
              <span className="font-display font-black text-xl tracking-tight text-slate-900 block leading-none">
                ALTHAF
              </span>
              <span className="text-[11px] font-mono text-blue-600 font-semibold block tracking-wider mt-1">
                Website Designer &amp; Builder
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-xs font-semibold text-slate-600 hover:text-blue-600 transition-colors tracking-wide py-1"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Right Action CTA: "Start Your Website" */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href="https://wa.me/918179176914"
              target="_blank"
              rel="noreferrer"
              className="p-2.5 rounded-full bg-slate-100 hover:bg-emerald-50 text-slate-600 hover:text-emerald-600 border border-slate-200 transition-colors"
              title="Chat on WhatsApp: 8179176914"
            >
              <MessageCircle className="w-4 h-4" />
            </a>

            <button
              onClick={onStartProject}
              className="px-5 py-2.5 rounded-full bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold tracking-wide shadow-md shadow-blue-600/25 hover:scale-105 active:scale-95 transition-all cursor-pointer flex items-center gap-1.5"
            >
              <Sparkles className="w-3.5 h-3.5 text-blue-200" />
              <span>Start Your Website</span>
            </button>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="flex lg:hidden items-center gap-2">
            <button
              onClick={onStartProject}
              className="sm:hidden px-3.5 py-1.5 rounded-full bg-blue-600 text-white text-[11px] font-bold shadow-sm"
            >
              Start Project
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl bg-slate-100 border border-slate-200 text-slate-700 hover:text-slate-900"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Animated Dropdown Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white/95 backdrop-blur-2xl border-b border-slate-200 px-5 pt-4 pb-6 mt-3 space-y-4 shadow-xl">
          <div className="flex flex-col space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 rounded-lg text-sm font-medium text-slate-700 hover:text-blue-600 hover:bg-slate-50 transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="pt-3 border-t border-slate-200 flex flex-col gap-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onStartProject();
              }}
              className="w-full py-2.5 px-4 rounded-full bg-blue-600 text-white font-bold text-xs text-center shadow-md shadow-blue-600/20"
            >
              Start Your Website
            </button>

            <div className="grid grid-cols-2 gap-2 text-xs pt-2">
              <a
                href="https://wa.me/918179176914"
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-center gap-1.5 py-2 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-700 font-semibold"
              >
                <MessageCircle className="w-3.5 h-3.5 text-emerald-600" />
                <span>WhatsApp</span>
              </a>
              <a
                href="tel:+918179176914"
                className="flex items-center justify-center gap-1.5 py-2 rounded-xl bg-blue-50 border border-blue-200 text-blue-700 font-semibold"
              >
                <Phone className="w-3.5 h-3.5 text-blue-600" />
                <span>8179176914</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
