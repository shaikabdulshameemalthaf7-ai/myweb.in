import React from 'react';
import { Star } from 'lucide-react';
import { FeedbackEntry } from '../data/portfolioData';

interface TestimonialsSectionProps {
  testimonials: FeedbackEntry[];
  onOpenLeaveReview?: () => void;
}

export const TestimonialsSection: React.FC<TestimonialsSectionProps> = ({
  testimonials,
  onOpenLeaveReview,
}) => {
  return (
    <section id="reviews" className="py-24 bg-white text-slate-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Kicker */}
        <div className="mb-2">
          <span className="text-xs font-mono font-semibold text-amber-600 flex items-center gap-1.5">
            <span>⭐</span>
            <span>Client Reviews</span>
          </span>
        </div>

        {/* Section Header & View More Button */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div className="space-y-2 max-w-2xl">
            <h2 className="text-3xl sm:text-4xl font-extrabold font-display tracking-tight text-slate-900">
              What My Clients Say
            </h2>
            <p className="text-sm text-slate-600 leading-relaxed">
              Real feedback from real clients. Their words keep me motivated to do better every day.
            </p>
          </div>

          <button
            onClick={onOpenLeaveReview}
            className="px-5 py-2.5 rounded-full bg-[#080c16] hover:bg-slate-800 text-white text-xs font-bold shadow-md transition-all cursor-pointer whitespace-nowrap self-start md:self-auto"
          >
            View More Reviews
          </button>
        </div>

        {/* 3 Review Cards Grid matching reference image */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.slice(0, 3).map((item) => (
            <div
              key={item.id}
              className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm hover:shadow-xl hover:border-blue-400 transition-all duration-300 flex flex-col justify-between space-y-4"
            >
              <div className="space-y-3">
                {/* Author Avatar & Info */}
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-blue-600 to-indigo-500 text-white font-bold flex items-center justify-center text-sm shadow-md">
                    {item.userName.charAt(0)}
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-slate-900 leading-tight">
                      {item.userName}
                    </h4>
                    <p className="text-xs text-slate-500">{item.userRole}</p>
                  </div>
                </div>

                {/* 5 Gold Stars */}
                <div className="flex items-center gap-1">
                  {[...Array(item.rating)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
                  ))}
                </div>

                {/* Testimonial Quote */}
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed italic">
                  "{item.comment}"
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
