import React, { useState, useEffect } from 'react';
import { Phone, Mail, MapPin, Send, CheckCircle2, MessageCircle, Sparkles, ArrowRight } from 'lucide-react';
import { CustomerEnquiry, DemoWebsite } from '../data/portfolioData';

interface ContactSectionProps {
  selectedDemoName?: string;
  demos?: DemoWebsite[];
  onSubmitEnquiry: (enquiry: Omit<CustomerEnquiry, 'id' | 'createdAt' | 'status'>) => void;
}

export const ContactSection: React.FC<ContactSectionProps> = ({
  selectedDemoName,
  demos = [],
  onSubmitEnquiry,
}) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [websiteType, setWebsiteType] = useState('Business / Corporate Website');
  const [selectedDemo, setSelectedDemo] = useState(selectedDemoName || 'None / Custom Design');
  const [projectDetails, setProjectDetails] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    if (selectedDemoName) {
      setSelectedDemo(selectedDemoName);
    }
  }, [selectedDemoName]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !email.trim()) return;

    onSubmitEnquiry({
      name,
      email,
      phone,
      websiteType,
      selectedDemo,
      projectDetails,
    });

    setIsSubmitted(true);
  };

  const handleSendViaWhatsApp = () => {
    const text = `Hi ALTHAF! I want to start my website project:
• Name: ${name || 'Prospective Client'}
• Email: ${email || 'N/A'}
• Phone: ${phone || 'N/A'}
• Desired Type: ${websiteType}
• Selected Design: ${selectedDemo}
• Message: ${projectDetails || 'I would like to discuss building a website for my business.'}

Looking forward to hearing from you!`;

    window.open(`https://wa.me/918179176914?text=${encodeURIComponent(text)}`, '_blank');
  };

  return (
    <section id="contact" className="py-24 bg-slate-50/80 text-slate-900 relative border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Kicker */}
        <div className="mb-3">
          <span className="text-xs font-mono font-bold text-blue-600 px-3 py-1 rounded-full bg-blue-50 border border-blue-200">
            &lt;/&gt; Contact ALTHAF
          </span>
        </div>

        {/* 2-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start pt-2">
          {/* Left Column: Direct Contact Info & Value Prop */}
          <div className="lg:col-span-5 space-y-6">
            <h2 className="text-3xl sm:text-4xl font-extrabold font-display tracking-tight text-slate-900 leading-tight">
              LET'S BUILD YOUR <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
                NEXT GREAT WEBSITE.
              </span>
            </h2>

            <p className="text-sm sm:text-base text-slate-600 leading-relaxed max-w-md">
              Have an idea? Need a new website or redesign? Reach out directly to ALTHAF via WhatsApp,
              phone, or email for an immediate response.
            </p>

            {/* Direct Contact Action Cards */}
            <div className="space-y-3 pt-2">
              {/* WhatsApp Card */}
              <a
                href="https://wa.me/918179176914"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-4 p-4 rounded-2xl bg-white border border-slate-200 hover:border-emerald-400 hover:shadow-md transition-all group cursor-pointer"
              >
                <div className="w-11 h-11 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-600 flex items-center justify-center shrink-0 group-hover:scale-110 group-hover:bg-emerald-600 group-hover:text-white transition-all">
                  <MessageCircle className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-bold text-slate-900 font-mono group-hover:text-emerald-600 transition-colors">
                    +91 8179176914
                  </div>
                  <div className="text-[11px] text-slate-500">Chat Instantly on WhatsApp</div>
                </div>
              </a>

              {/* Call Card */}
              <a
                href="tel:+918179176914"
                className="flex items-center gap-4 p-4 rounded-2xl bg-white border border-slate-200 hover:border-blue-400 hover:shadow-md transition-all group cursor-pointer"
              >
                <div className="w-11 h-11 rounded-xl bg-blue-50 border border-blue-200 text-blue-600 flex items-center justify-center shrink-0 group-hover:scale-110 group-hover:bg-blue-600 group-hover:text-white transition-all">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-bold text-slate-900 font-mono group-hover:text-blue-600 transition-colors">
                    8179176914
                  </div>
                  <div className="text-[11px] text-slate-500">Call ALTHAF Directly</div>
                </div>
              </a>

              {/* Email Card */}
              <a
                href="mailto:myappinhub@gmail.com"
                className="flex items-center gap-4 p-4 rounded-2xl bg-white border border-slate-200 hover:border-indigo-400 hover:shadow-md transition-all group cursor-pointer"
              >
                <div className="w-11 h-11 rounded-xl bg-indigo-50 border border-indigo-200 text-indigo-600 flex items-center justify-center shrink-0 group-hover:scale-110 group-hover:bg-indigo-600 group-hover:text-white transition-all">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-bold text-slate-900 font-mono group-hover:text-indigo-600 transition-colors truncate max-w-[220px]">
                    myappinhub@gmail.com
                  </div>
                  <div className="text-[11px] text-slate-500">Send an Email Enquiry</div>
                </div>
              </a>
            </div>

            {/* Quick response badge */}
            <div className="flex items-center gap-2 text-xs font-mono text-slate-500 pt-2">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>Average response time: within 1-2 hours</span>
            </div>
          </div>

          {/* Right Column: Project Enquiry Form */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-3xl border border-slate-200 shadow-xl p-6 sm:p-8">
              {isSubmitted ? (
                <div className="text-center py-12 space-y-4">
                  <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold font-display text-slate-900">
                    Thank You, {name}!
                  </h3>
                  <p className="text-sm text-slate-600 max-w-sm mx-auto">
                    Your enquiry has been received. ALTHAF will review your details and connect with
                    you shortly via WhatsApp or email.
                  </p>
                  <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
                    <button
                      onClick={handleSendViaWhatsApp}
                      className="px-6 py-2.5 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold shadow-md flex items-center gap-2 cursor-pointer"
                    >
                      <MessageCircle className="w-4 h-4" />
                      <span>Also Ping on WhatsApp</span>
                    </button>
                    <button
                      onClick={() => setIsSubmitted(false)}
                      className="px-6 py-2.5 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-bold cursor-pointer"
                    >
                      Send Another Request
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="border-b border-slate-100 pb-3 mb-4">
                    <h3 className="text-lg font-bold font-display text-slate-900">
                      Start Your Project
                    </h3>
                    <p className="text-xs text-slate-500">
                      Tell me about your business and website requirements.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="e.g. John Doe"
                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-100 outline-none text-xs text-slate-900 transition-all"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="name@business.com"
                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-100 outline-none text-xs text-slate-900 transition-all"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">
                        Phone / WhatsApp
                      </label>
                      <input
                        type="tel"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder="+91 8179176914"
                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-100 outline-none text-xs text-slate-900 transition-all"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">
                        Website Category
                      </label>
                      <select
                        value={websiteType}
                        onChange={(e) => setWebsiteType(e.target.value)}
                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-100 outline-none text-xs text-slate-900 bg-white transition-all"
                      >
                        <option>Business / Corporate Website</option>
                        <option>E-Commerce Online Store</option>
                        <option>Restaurant / Food Delivery</option>
                        <option>Hotel &amp; Resort Booking</option>
                        <option>Gym &amp; Fitness Center</option>
                        <option>Real Estate &amp; Construction</option>
                        <option>Portfolio / Creative Studio</option>
                        <option>Custom Web Application</option>
                      </select>
                    </div>
                  </div>

                  {/* Selected Demo Design Reference */}
                  {selectedDemo && selectedDemo !== 'None / Custom Design' && (
                    <div className="p-3 rounded-xl bg-blue-50/80 border border-blue-200 flex items-center justify-between text-xs">
                      <div>
                        <span className="text-[10px] uppercase font-mono font-bold text-blue-600 block">
                          Selected Design
                        </span>
                        <span className="font-bold text-slate-900">{selectedDemo}</span>
                      </div>
                      <button
                        type="button"
                        onClick={() => setSelectedDemo('None / Custom Design')}
                        className="text-[11px] text-blue-600 hover:underline font-semibold"
                      >
                        Clear
                      </button>
                    </div>
                  )}

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      Project Details / Features Needed
                    </label>
                    <textarea
                      rows={4}
                      value={projectDetails}
                      onChange={(e) => setProjectDetails(e.target.value)}
                      placeholder="Briefly describe what your business does and any specific pages or features you need (e.g. online booking, payment gateway, multi-language)..."
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-100 outline-none text-xs text-slate-900 transition-all resize-none"
                    />
                  </div>

                  {/* Submit buttons */}
                  <div className="pt-2 flex flex-col sm:flex-row items-center gap-3">
                    <button
                      type="submit"
                      className="w-full sm:flex-1 py-3 px-6 rounded-full bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs tracking-wide shadow-md shadow-blue-600/25 transition-all flex items-center justify-center gap-2 cursor-pointer"
                    >
                      <Send className="w-4 h-4" />
                      <span>Submit Website Enquiry</span>
                    </button>

                    <button
                      type="button"
                      onClick={handleSendViaWhatsApp}
                      className="w-full sm:w-auto py-3 px-5 rounded-full bg-emerald-50 hover:bg-emerald-100 text-emerald-700 border border-emerald-300 font-bold text-xs tracking-wide transition-all flex items-center justify-center gap-2 cursor-pointer"
                    >
                      <MessageCircle className="w-4 h-4 text-emerald-600" />
                      <span>Instant WhatsApp</span>
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
