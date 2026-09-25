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
    <section id="testimonials" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14 border-b border-[#8EB69B]/20 pb-6">
          <div>
            <div className="flex items-center gap-2 text-xs font-bold text-[#8EB69B] uppercase tracking-wider mb-2">
              <Star className="w-4 h-4 fill-[#8EB69B]" />
              <span>{t('Client Verification & Case Studies', 'ক্লায়েন্ট রিভিউ ও সফলতার গল্প')}</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              {t('Proven Results from Real Partnerships', 'বাস্তব অংশীদারিত্ব থেকে অর্জিত সাফল্য')}
            </h2>
            <p className="mt-1 text-sm text-[#DAF1DE]/80">
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
              className="p-2.5 rounded-lg bg-[#163832] border border-[#8EB69B]/30 text-[#DAF1DE] hover:text-white hover:border-[#8EB69B] transition-colors"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <span className="text-xs font-mono text-[#DAF1DE]/60 px-2">
              {currentIndex + 1} / {testimonialsData.length}
            </span>
            <button
              onClick={nextSlide}
              type="button"
              className="p-2.5 rounded-lg bg-[#163832] border border-[#8EB69B]/30 text-[#DAF1DE] hover:text-white hover:border-[#8EB69B] transition-colors"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Featured Testimonial Card */}
        <div className="rounded-3xl bg-[#163832] border border-[#8EB69B]/30 p-8 sm:p-12 shadow-[0_20px_50px_rgba(5,31,32,0.8)] relative">
          <Quote className="absolute top-6 right-8 w-16 h-16 text-[#8EB69B]/10 pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left: Metric Callout */}
            <div className="lg:col-span-4 p-6 rounded-2xl bg-[#0B2B26] border border-[#8EB69B]/20 text-center lg:text-left">
              <span className="text-xs font-semibold text-[#8EB69B] uppercase tracking-wider block">
                {t('Verified Metric', 'যাচাইকৃত ফলাফল')}
              </span>
              <div className="text-4xl sm:text-5xl font-extrabold text-white font-mono mt-1 mb-2">
                {currentTestimonial.metric}
              </div>
              <p className="text-sm font-semibold text-[#DAF1DE] mb-4">
                {lang === 'bn' ? currentTestimonial.metricLabelBn : currentTestimonial.metricLabel}
              </p>

              <div className="pt-3 border-t border-[#8EB69B]/15 text-xs text-[#DAF1DE]/70">
                <span className="text-[#8EB69B] font-semibold">{t('Service:', 'সার্ভিস:')} </span>
                <span>{currentTestimonial.serviceUsed}</span>
              </div>
            </div>

            {/* Right: Testimonial Statement & Author */}
            <div className="lg:col-span-8 space-y-6">
              <div className="flex items-center gap-1 text-[#8EB69B]">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-current" />
                ))}
              </div>

              <blockquote className="text-lg sm:text-xl text-white font-medium leading-relaxed">
                "{lang === 'bn' ? currentTestimonial.contentBn : currentTestimonial.content}"
              </blockquote>

              <div className="flex items-center gap-4 pt-2">
                <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-[#8EB69B] to-[#DAF1DE] text-[#051F20] font-extrabold flex items-center justify-center text-sm shadow-md">
                  {currentTestimonial.avatarText}
                </div>
                <div>
                  <h4 className="text-base font-bold text-white">
                    {currentTestimonial.name}
                  </h4>
                  <p className="text-xs text-[#DAF1DE]/70">
                    {currentTestimonial.role} · <span className="text-[#8EB69B]">{currentTestimonial.company}</span>
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
                  ? 'bg-[#163832] border-[#8EB69B] shadow-md ring-1 ring-[#8EB69B]/30'
                  : 'bg-[#0B2B26]/60 border-[#8EB69B]/20 hover:border-[#8EB69B]/40 opacity-70 hover:opacity-100'
              }`}
            >
              <div className="flex items-center justify-between mb-1">
                <span className="text-xs font-bold text-white truncate">{item.name}</span>
                <span className="text-xs font-mono font-bold text-[#8EB69B]">{item.metric}</span>
              </div>
              <p className="text-[11px] text-[#DAF1DE]/70 truncate">{item.company}</p>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};
