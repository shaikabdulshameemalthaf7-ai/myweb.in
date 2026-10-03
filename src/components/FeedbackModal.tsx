import React, { useState } from 'react';
import { X, Star, CheckCircle2, MessageSquare, Send } from 'lucide-react';
import { DemoWebsite, FeedbackEntry } from '../data/portfolioData';
import { useTheme } from '../context/ThemeContext';

interface FeedbackModalProps {
  demo: DemoWebsite | null;
  isOpen: boolean;
  onClose: () => void;
  onSubmitFeedback: (feedback: Omit<FeedbackEntry, 'id' | 'createdAt'>) => void;
}

export const FeedbackModal: React.FC<FeedbackModalProps> = ({
  demo,
  isOpen,
  onClose,
  onSubmitFeedback,
}) => {
  const [rating, setRating] = useState<number>(5);
  const [hoverRating, setHoverRating] = useState<number>(0);
  const [comment, setComment] = useState<string>('');
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [submitted, setSubmitted] = useState<boolean>(false);
  const { isLight } = useTheme();

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!comment.trim() || !name.trim()) return;

    onSubmitFeedback({
      demoId: demo?.id,
      demoName: demo?.name || 'General Portfolio',
      rating,
      comment,
      userName: name,
      userRole: 'Verified Client',
      userEmail: email.trim() || undefined,
      isVerified: true,
    });

    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setComment('');
      setName('');
      setEmail('');
      onClose();
    }, 2200);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/75 backdrop-blur-md p-4">
      <div
        className={`relative w-full max-w-md rounded-2xl p-6 sm:p-7 shadow-2xl border transition-colors ${
          isLight
            ? 'bg-white border-slate-200 text-slate-900 shadow-slate-900/20'
            : 'bg-[#0b101c] border-slate-700 text-slate-100 shadow-cyan-950/50'
        }`}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className={`absolute top-4 right-4 p-1.5 rounded-lg transition-colors cursor-pointer ${
            isLight ? 'text-slate-400 hover:text-slate-900 hover:bg-slate-100' : 'text-slate-400 hover:text-white hover:bg-slate-800'
          }`}
        >
          <X className="w-5 h-5" />
        </button>

        {submitted ? (
          <div className="py-8 text-center space-y-3">
            <div className="w-14 h-14 bg-emerald-500/20 text-emerald-600 rounded-full flex items-center justify-center mx-auto border border-emerald-500/40">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-bold font-display">Thank You!</h3>
            <p className={`text-sm ${isLight ? 'text-slate-600' : 'text-slate-300'}`}>
              Your feedback for <span className="font-semibold text-blue-600">{demo?.name || 'ALTHAF Studio'}</span> has been recorded.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <div className={`flex items-center gap-2 text-xs font-mono mb-1 ${isLight ? 'text-blue-600' : 'text-cyan-400'}`}>
                <MessageSquare className="w-3.5 h-3.5" />
                <span>Like &amp; Feedback System</span>
              </div>
              <h3 className="text-lg font-bold font-display">
                WHAT DO YOU THINK ABOUT THIS DESIGN?
              </h3>
              {demo && (
                <p className={`text-xs mt-1 ${isLight ? 'text-slate-500' : 'text-slate-400'}`}>
                  Design: <span className="font-semibold text-slate-800">{demo.name}</span> ({demo.category})
                </p>
              )}
            </div>

            {/* Interactive 5-Star Selector */}
            <div
              className={`p-3.5 rounded-xl border text-center space-y-1.5 ${
                isLight ? 'bg-slate-50 border-slate-200' : 'bg-slate-900/80 border-slate-800'
              }`}
            >
              <div className={`text-xs font-medium ${isLight ? 'text-slate-600' : 'text-slate-400'}`}>
                Click to rate this website design:
              </div>
              <div className="flex items-center justify-center gap-2 pt-1">
                {[1, 2, 3, 4, 5].map((star) => (
                  <button
                    key={star}
                    type="button"
                    onMouseEnter={() => setHoverRating(star)}
                    onMouseLeave={() => setHoverRating(0)}
                    onClick={() => setRating(star)}
                    className="p-1 transition-transform hover:scale-125 focus:outline-none cursor-pointer"
                  >
                    <Star
                      className={`w-7 h-7 ${
                        (hoverRating || rating) >= star
                          ? 'text-amber-500 fill-amber-500'
                          : isLight ? 'text-slate-300' : 'text-slate-700'
                      }`}
                    />
                  </button>
                ))}
              </div>
              <div className={`text-[11px] font-mono font-semibold ${isLight ? 'text-blue-700' : 'text-cyan-400'}`}>
                {rating === 5 && 'Outstanding & Modern'}
                {rating === 4 && 'Great Design & Clean'}
                {rating === 3 && 'Good Baseline'}
                {rating <= 2 && 'Needs Improvement'}
              </div>
            </div>

            {/* Comment Textarea */}
            <div className="space-y-1.5">
              <label className={`text-xs font-semibold ${isLight ? 'text-slate-700' : 'text-slate-300'}`}>
                Tell us what you like about this website: <span className="text-rose-500">*</span>
              </label>
              <textarea
                required
                value={comment}
                onChange={(e) => setComment(e.target.value)}
                placeholder="The color choices are sleek, navigation is clean, and the layout looks very professional for a brand..."
                rows={3}
                className={`w-full px-3.5 py-2.5 rounded-xl text-sm outline-none resize-none border ${
                  isLight
                    ? 'bg-slate-50 border-slate-300 text-slate-900 focus:bg-white focus:border-blue-600'
                    : 'bg-slate-900 border-slate-700 text-slate-100 focus:border-cyan-400'
                }`}
              />
            </div>

            {/* Name Input */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div className="space-y-1.5">
                <label className={`text-xs font-semibold ${isLight ? 'text-slate-700' : 'text-slate-300'}`}>
                  Your Name <span className="text-rose-500">*</span>
                </label>
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="e.g. Rahul Sharma"
                  className={`w-full px-3.5 py-2 rounded-xl text-xs outline-none border ${
                    isLight
                      ? 'bg-slate-50 border-slate-300 text-slate-900 focus:bg-white focus:border-blue-600'
                      : 'bg-slate-900 border-slate-700 text-slate-100 focus:border-cyan-400'
                  }`}
                />
              </div>

              <div className="space-y-1.5">
                <label className={`text-xs font-semibold ${isLight ? 'text-slate-700' : 'text-slate-300'}`}>
                  Email (Optional)
                </label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="name@business.com"
                  className={`w-full px-3.5 py-2 rounded-xl text-xs outline-none border ${
                    isLight
                      ? 'bg-slate-50 border-slate-300 text-slate-900 focus:bg-white focus:border-blue-600'
                      : 'bg-slate-900 border-slate-700 text-slate-100 focus:border-cyan-400'
                  }`}
                />
              </div>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full py-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs tracking-wider uppercase transition-all shadow-lg shadow-blue-500/20 flex items-center justify-center gap-2 cursor-pointer"
            >
              <Send className="w-3.5 h-3.5" />
              <span>Submit Feedback</span>
            </button>
          </form>
        )}
      </div>
    </div>
  );
};
