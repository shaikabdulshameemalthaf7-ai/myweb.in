import React, { useState } from 'react';
import {
  Heart,
  Eye,
  Star,
  MessageSquare,
  ArrowRight,
  Sparkles,
  ExternalLink,
  Laptop,
  Check,
  ShoppingBag,
  UtensilsCrossed,
  Hotel,
  Dumbbell,
  Building2,
  Briefcase,
  Layers,
} from 'lucide-react';
import { DemoWebsite } from '../data/portfolioData';

interface DemoShowcaseProps {
  demos: DemoWebsite[];
  onViewDemo: (demo: DemoWebsite) => void;
  onChooseDesign: (demo: DemoWebsite) => void;
  onLikeDemo: (demoId: string) => void;
  likedDemoIds: Set<string>;
}

export const DemoShowcase: React.FC<DemoShowcaseProps> = ({
  demos,
  onViewDemo,
  onChooseDesign,
  onLikeDemo,
  likedDemoIds,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = [
    'All',
    'E-Commerce Store',
    'Restaurant Website',
    'Hotel & Resort',
    'Gym & Fitness',
    'Real Estate',
    'Corporate & Agency',
  ];

  const filteredDemos =
    selectedCategory === 'All'
      ? demos
      : demos.filter((d) => d.category.toLowerCase().includes(selectedCategory.toLowerCase()));

  // Icon mapping for stylized UI mockups (No photo)
  const getCategoryIcon = (category: string) => {
    const c = category.toLowerCase();
    if (c.includes('food') || c.includes('restaurant')) return <UtensilsCrossed className="w-8 h-8 text-amber-500" />;
    if (c.includes('hotel') || c.includes('resort')) return <Hotel className="w-8 h-8 text-indigo-500" />;
    if (c.includes('gym') || c.includes('fitness')) return <Dumbbell className="w-8 h-8 text-rose-500" />;
    if (c.includes('real') || c.includes('estate')) return <Building2 className="w-8 h-8 text-emerald-500" />;
    if (c.includes('store') || c.includes('commerce') || c.includes('furniture')) return <ShoppingBag className="w-8 h-8 text-blue-500" />;
    return <Briefcase className="w-8 h-8 text-blue-600" />;
  };

  return (
    <section id="demos" className="py-24 bg-slate-50/70 text-slate-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Kicker */}
        <div className="flex items-center gap-2 mb-3">
          <span className="text-xs font-mono font-bold text-blue-600 px-3 py-1 rounded-full bg-blue-50 border border-blue-200">
            &lt;/&gt; Interactive Showcase
          </span>
          <span className="text-xs font-mono text-slate-400">· Click to test live demo</span>
        </div>

        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6">
          <div className="space-y-2 max-w-2xl">
            <h2 className="text-3xl sm:text-4xl font-extrabold font-display tracking-tight text-slate-900">
              EXPLORE MY WEBSITE DESIGNS
            </h2>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              Choose a design you like. Explore the interactive live experience. Then let's build
              something tailored specifically for your business.
            </p>
          </div>

          {/* Quick Stat Pill */}
          <div className="flex items-center gap-3 bg-white px-4 py-2 rounded-2xl border border-slate-200 shadow-xs text-xs font-mono">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
            <span className="text-slate-600">
              <strong className="text-slate-900 font-bold">{demos.length} Active Demos</strong> Ready to Deploy
            </span>
          </div>
        </div>

        {/* Category Pills Filter */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 scrollbar-none">
          {categories.map((cat) => {
            const isSelected = selectedCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-full text-xs font-semibold tracking-wide whitespace-nowrap transition-all cursor-pointer ${
                  isSelected
                    ? 'bg-blue-600 text-white shadow-md shadow-blue-600/20'
                    : 'bg-white text-slate-600 hover:text-slate-900 hover:bg-slate-100 border border-slate-200'
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* Grid of Demo Website Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredDemos.map((demo) => {
            const isLiked = likedDemoIds.has(demo.id);

            return (
              <div
                key={demo.id}
                className="bg-white rounded-3xl border border-slate-200 overflow-hidden shadow-xs hover:shadow-xl hover:border-blue-400 transition-all duration-300 flex flex-col justify-between group"
              >
                {/* Simulated Stylized Browser Header (NO PHOTO, Pure Vector UI Layout) */}
                <div>
                  <div className="px-4 py-2.5 bg-slate-50 border-b border-slate-200 flex items-center justify-between">
                    <div className="flex items-center gap-1.5">
                      <span className="w-2.5 h-2.5 rounded-full bg-rose-400" />
                      <span className="w-2.5 h-2.5 rounded-full bg-amber-400" />
                      <span className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
                      <span className="ml-2 text-[10px] font-mono text-slate-500">
                        {demo.id}.althaf.dev
                      </span>
                    </div>

                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        onLikeDemo(demo.id);
                      }}
                      className={`p-1.5 rounded-full transition-transform active:scale-125 cursor-pointer ${
                        isLiked
                          ? 'text-rose-500 bg-rose-50'
                          : 'text-slate-400 hover:text-rose-500 hover:bg-slate-100'
                      }`}
                      title={isLiked ? 'Unlike' : 'Like this design'}
                    >
                      <Heart className={`w-4 h-4 ${isLiked ? 'fill-rose-500' : ''}`} />
                    </button>
                  </div>

                  {/* Stylized Vector Mockup Container (No photo!) */}
                  <div
                    onClick={() => onViewDemo(demo)}
                    className="relative aspect-[16/10] bg-gradient-to-br from-slate-900 via-slate-850 to-slate-950 p-5 flex flex-col justify-between text-white overflow-hidden cursor-pointer group-hover:opacity-95 transition-opacity"
                  >
                    {/* Background subtle geometric lines */}
                    <div
                      className="absolute inset-0 opacity-10 pointer-events-none"
                      style={{
                        backgroundImage:
                          'linear-gradient(rgba(255,255,255,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.4) 1px, transparent 1px)',
                        backgroundSize: '24px 24px',
                      }}
                    />

                    {/* Top tags */}
                    <div className="relative z-10 flex items-center justify-between">
                      <span className="px-2.5 py-1 rounded-full bg-white/10 backdrop-blur-md text-[10px] font-mono text-blue-300 font-semibold border border-white/15">
                        {demo.category}
                      </span>
                      <div className="w-7 h-7 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center text-white/80 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                        <Eye className="w-3.5 h-3.5" />
                      </div>
                    </div>

                    {/* Center stylized preview graphic */}
                    <div className="relative z-10 flex items-center gap-4 py-2">
                      <div className="w-14 h-14 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                        {getCategoryIcon(demo.category)}
                      </div>
                      <div>
                        <h4 className="font-extrabold font-display text-lg text-white leading-tight">
                          {demo.name}
                        </h4>
                        <p className="text-xs text-slate-300 font-medium mt-0.5">
                          {demo.subtitle}
                        </p>
                      </div>
                    </div>

                    {/* Bottom Mini UI Bar */}
                    <div className="relative z-10 flex items-center justify-between pt-2 border-t border-white/10 text-[10px] text-slate-400 font-mono">
                      <span>Interactive Live Mockup</span>
                      <span className="text-blue-300 flex items-center gap-1 group-hover:underline">
                        <span>Click to Preview</span>
                        <ArrowRight className="w-3 h-3" />
                      </span>
                    </div>

                    {/* Ambient glow in background */}
                    <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-blue-500/20 rounded-full blur-2xl pointer-events-none" />
                  </div>
                </div>

                {/* Card Description & Info */}
                <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                  <div>
                    <div className="flex items-center justify-between text-xs text-slate-500 mb-1.5 font-mono">
                      <span>{demo.subCategory}</span>
                      <div className="flex items-center gap-1 text-amber-500 font-bold">
                        <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                        <span>{demo.rating}</span>
                      </div>
                    </div>

                    <p className="text-xs text-slate-600 line-clamp-2 leading-relaxed">
                      {demo.shortDesc}
                    </p>
                  </div>

                  {/* Primary & Secondary Action Buttons */}
                  <div className="space-y-2 pt-2 border-t border-slate-100">
                    <div className="grid grid-cols-2 gap-2">
                      <button
                        onClick={() => onViewDemo(demo)}
                        className="py-2.5 px-3 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-bold transition-all flex items-center justify-center gap-1.5 cursor-pointer"
                      >
                        <Eye className="w-3.5 h-3.5 text-blue-600" />
                        <span>View Demo</span>
                      </button>

                      <button
                        onClick={() => onChooseDesign(demo)}
                        className="py-2.5 px-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold shadow-xs hover:shadow-md transition-all flex items-center justify-center gap-1.5 cursor-pointer"
                      >
                        <Check className="w-3.5 h-3.5 text-blue-200" />
                        <span>Choose Design</span>
                      </button>
                    </div>

                    {/* Engagement Stats row: Likes, Views, Reviews */}
                    <div className="flex items-center justify-between text-[11px] font-mono text-slate-500 pt-1 px-1">
                      <span className="flex items-center gap-1">
                        <Heart
                          className={`w-3.5 h-3.5 ${
                            isLiked ? 'text-rose-500 fill-rose-500' : 'text-slate-400'
                          }`}
                        />
                        <strong>{demo.likes}</strong> Likes
                      </span>

                      <span className="flex items-center gap-1">
                        <Eye className="w-3.5 h-3.5 text-slate-400" />
                        <strong>{demo.views}</strong> Views
                      </span>

                      <span className="flex items-center gap-1">
                        <MessageSquare className="w-3.5 h-3.5 text-slate-400" />
                        <strong>{demo.reviewsCount}</strong> Reviews
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
