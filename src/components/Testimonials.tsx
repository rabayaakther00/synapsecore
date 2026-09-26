import React, { useState } from 'react';
import { testimonialsData, TestimonialItem } from '../data/siteContent';
import { useLanguage } from '../context/LanguageContext';
import { Quote, ChevronLeft, ChevronRight, Star, TrendingUp } from 'lucide-react';

export const Testimonials: React.FC = () => {
  const { lang, t } = useLanguage();
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? testimonialsData.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === 2 ? 0 : (prev + 1) % testimonialsData.length));
  };

  const currentTestimonial = testimonialsData[currentIndex];

  return (
    <section id="testimonials" className="py-24 relative overflow-hidden bg-[#020617]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14 border-b border-slate-800 pb-6">
          <div>
            <div className="flex items-center gap-2 text-xs font-bold text-indigo-400 uppercase tracking-wider mb-2">
              <Star className="w-4 h-4 fill-indigo-400 text-indigo-400" />
              <span>{t('Client Verification & Case Studies', 'ক্লায়েন্ট রিভিউ ও সফলতার গল্প')}</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              {t('Proven Results from Real Partnerships', 'বাস্তব অংশীদারিত্ব থেকে অর্জিত সাফল্য')}
            </h2>
            <p className="mt-1 text-sm text-slate-300/80">
              {t(
                'Direct feedback and quantifiable growth delivered for tech founders, agencies, and regional businesses.',
                'টেক ফাউন্ডার, এজেন্সি এবং ব্যবসায়ীদের জন্য SynapseCore এর প্রত্যক্ষ অবদান।'
              )}
            </p>
          </div>

          {/* Slider controls */}
          <div className="flex items-center gap-2">
            <button
              onClick={prevSlide}
              type="button"
              className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 hover:text-white hover:border-indigo-500 transition-colors shadow-sm"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <span className="text-xs font-mono text-slate-400 px-2">
              {currentIndex + 1} / {testimonialsData.length}
            </span>
            <button
              onClick={nextSlide}
              type="button"
              className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 hover:text-white hover:border-indigo-500 transition-colors shadow-sm"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Featured Testimonial Card */}
        <div className="rounded-3xl bg-slate-900/85 border border-indigo-500/30 p-8 sm:p-12 shadow-[0_20px_50px_rgba(2,6,23,0.9)] relative backdrop-blur-xl">
          <Quote className="absolute top-6 right-8 w-16 h-16 text-indigo-500/10 pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left: Metric Callout */}
            <div className="lg:col-span-4 p-6 rounded-2xl bg-slate-950/80 border border-slate-800 text-center lg:text-left shadow-inner">
              <span className="text-xs font-semibold text-cyan-400 uppercase tracking-wider block font-mono">
                {t('Verified Metric', 'যাচাইকৃত ফলাফল')}
              </span>
              <div className="text-4xl sm:text-5xl font-extrabold text-white font-mono mt-1 mb-2">
                {currentTestimonial.metric}
              </div>
              <p className="text-sm font-semibold text-slate-200 mb-4">
                {lang === 'bn' ? currentTestimonial.metricLabelBn : currentTestimonial.metricLabel}
              </p>

              <div className="pt-3 border-t border-slate-800 text-xs text-slate-400">
                <span className="text-indigo-400 font-semibold">{t('Service:', 'সার্ভিস:')} </span>
                <span>{currentTestimonial.serviceUsed}</span>
              </div>
            </div>

            {/* Right: Testimonial Statement & Author */}
            <div className="lg:col-span-8 space-y-6">
              <div className="flex items-center gap-1 text-amber-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-current" />
                ))}
              </div>

              <blockquote className="text-lg sm:text-xl text-slate-100 font-medium leading-relaxed">
                "{lang === 'bn' ? currentTestimonial.contentBn : currentTestimonial.content}"
              </blockquote>

              <div className="flex items-center gap-4 pt-2">
                <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-indigo-500 to-cyan-400 text-white font-extrabold flex items-center justify-center text-sm shadow-md">
                  {currentTestimonial.avatarText}
                </div>
                <div>
                  <h4 className="text-base font-bold text-white">
                    {currentTestimonial.name}
                  </h4>
                  <p className="text-xs text-slate-400">
                    {currentTestimonial.role} · <span className="text-cyan-400 font-medium">{currentTestimonial.company}</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Thumbnail Selector Row */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-6">
          {testimonialsData.map((item, idx) => (
            <button
              key={item.id}
              onClick={() => setCurrentIndex(idx)}
              type="button"
              className={`p-4 rounded-xl text-left transition-all border ${
                currentIndex === idx
                  ? 'bg-slate-900 border-indigo-500 shadow-[0_0_15px_rgba(99,102,241,0.25)] ring-1 ring-indigo-500/50'
                  : 'bg-slate-950/60 border-slate-800 hover:border-slate-700 opacity-70 hover:opacity-100'
              }`}
            >
              <div className="flex items-center justify-between mb-1">
                <span className="text-xs font-bold text-white truncate">{item.name}</span>
                <span className="text-xs font-mono font-bold text-cyan-400">{item.metric}</span>
              </div>
              <p className="text-[11px] text-slate-400 truncate">{item.company}</p>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};
