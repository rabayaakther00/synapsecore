import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { siteConfig } from '../data/siteContent';
import { ArrowRight, ShieldCheck, Zap, TrendingUp, CheckCircle } from 'lucide-react';

interface HeroProps {
  onExploreClick: () => void;
  onContactClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onExploreClick, onContactClick }) => {
  const { lang, t } = useLanguage();

  return (
    <section id="hero" className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      {/* Background radial gradients for Dark Emerald depth */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-gradient-to-tr from-[#163832]/40 via-[#8EB69B]/10 to-transparent blur-3xl pointer-events-none rounded-full" />
      <div className="absolute -top-24 right-0 w-[450px] h-[450px] bg-[#8EB69B]/5 blur-3xl pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Headline, Tagline, & Action */}
          <div className="lg:col-span-7 space-y-6">
            {/* Tagline / Subtitle */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#163832] border border-[#8EB69B]/30 text-xs font-semibold text-[#8EB69B] tracking-wide uppercase">
              <span className="w-2 h-2 rounded-full bg-[#8EB69B] animate-pulse" />
              <span>{t('Official B2B Service Catalog & Pricing', 'অফিসিয়াল বি২বি সার্ভিস ক্যাটালগ ও প্রাইসিং')}</span>
            </div>

            {/* Display Tagline & Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.15] text-balance">
              {siteConfig.tagline}
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#8EB69B] via-[#DAF1DE] to-[#8EB69B] mt-2">
                {t('Accelerate Your B2B Enterprise', 'আপনার বিজনেসের সেলস ও রেভিনিউ বাড়ান')}
              </span>
            </h1>

            {/* Bilingual Intro Text */}
            <p className="text-base sm:text-lg text-[#DAF1DE]/80 max-w-2xl leading-relaxed">
              {t(
                'SynapseCore delivers verified high-ROI digital solutions: high-converting web engineering, precision B2B lead generation, paid acquisition campaigns, content video editing, and automated operational pipelines designed for rapid business scale.',
                'SynapseCore নিয়ে এসেছে হাই-আরওআই ডিজিটাল সমাধান: হাই-কনভার্টিং ওয়েবসাইট ডিজাইন, ১০০% ভেরিফায়েড বি২বি লিড জেনারেশন, পেইড অ্যাডস ক্যাম্পেইন, ভাইরাল ভিডিও এডিটিং এবং স্মার্ট নো-কোড অটোমেশন—যা আপনার ব্যবসাকে নিয়ে যাবে অনন্য উচ্চতায়।'
              )}
            </p>

            {/* CTA Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <button
                onClick={onExploreClick}
                type="button"
                className="flex items-center gap-2.5 px-6 py-3.5 rounded-lg bg-[#8EB69B] text-[#051F20] font-bold text-sm hover:brightness-110 active:scale-95 transition-all shadow-[0_4px_20px_rgba(142,182,155,0.3)]"
              >
                <span>{t('Explore Services', 'সার্ভিসসমূহ দেখুন')}</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={onContactClick}
                type="button"
                className="flex items-center gap-2 px-6 py-3.5 rounded-lg bg-[#163832] border border-[#8EB69B]/30 text-white font-medium text-sm hover:bg-[#163832]/80 hover:border-[#8EB69B]/60 transition-all"
              >
                <span>{t('Instant WhatsApp Consultation', 'হোয়াটসঅ্যাপে যোগাযোগ')}</span>
              </button>
            </div>

            {/* Key Trust Checkmarks */}
            <div className="pt-6 grid grid-cols-2 sm:grid-cols-3 gap-3 border-t border-[#8EB69B]/15 text-xs text-[#DAF1DE]/90">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-[#8EB69B] shrink-0" />
                <span>{t('Zero-Bounce Guarantee', 'জিরো-বাউন্স গ্যারান্টি')}</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-[#8EB69B] shrink-0" />
                <span>{t('Transparent Dual Pricing ($/৳)', 'স্বচ্ছ ডুয়াল প্রাইসিং ($/৳)')}</span>
              </div>
              <div className="flex items-center gap-2 col-span-2 sm:col-span-1">
                <CheckCircle className="w-4 h-4 text-[#8EB69B] shrink-0" />
                <span>{t('Direct WhatsApp Execution', 'সরাসরি হোয়াটসঅ্যাপে অর্ডার')}</span>
              </div>
            </div>
          </div>

          {/* Right Column: Hero Visual Asset Card */}
          <div className="lg:col-span-5">
            <div className="relative rounded-2xl overflow-hidden border border-[#8EB69B]/30 bg-[#163832] shadow-[0_20px_50px_rgba(5,31,32,0.9)] group">
              <div className="relative aspect-[16/10] sm:aspect-[16/11] overflow-hidden">
                <img
                  src={siteConfig.heroImage}
                  alt="SynapseCore B2B Digital Command Hub"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#051F20] via-transparent to-transparent opacity-80" />
              </div>

              {/* In-Card Highlights */}
              <div className="p-6 space-y-4">
                <div className="flex items-center justify-between border-b border-[#8EB69B]/15 pb-3">
                  <div className="flex items-center gap-2 text-xs font-semibold text-[#8EB69B]">
                    <Zap className="w-4 h-4" />
                    <span>{t('8 Core Enterprise Services', '৮টি প্রধান এন্টারপ্রাইজ সার্ভিস')}</span>
                  </div>
                  <span className="text-xs text-[#DAF1DE]/70 font-mono">2026 OFFICIAL CATALOG</span>
                </div>

                <div className="grid grid-cols-3 gap-3 text-center">
                  <div className="p-2.5 rounded-lg bg-[#051F20]/70 border border-[#8EB69B]/20">
                    <p className="text-xl font-bold text-white font-mono">100%</p>
                    <p className="text-[11px] text-[#DAF1DE]/70 mt-0.5">{t('Verified Leads', 'ভেরিফায়েড লিড')}</p>
                  </div>
                  <div className="p-2.5 rounded-lg bg-[#051F20]/70 border border-[#8EB69B]/20">
                    <p className="text-xl font-bold text-white font-mono">4.8x</p>
                    <p className="text-[11px] text-[#DAF1DE]/70 mt-0.5">{t('Avg Paid ROAS', 'গড় পেইড আরওআই')}</p>
                  </div>
                  <div className="p-2.5 rounded-lg bg-[#051F20]/70 border border-[#8EB69B]/20">
                    <p className="text-xl font-bold text-white font-mono">24/7</p>
                    <p className="text-[11px] text-[#DAF1DE]/70 mt-0.5">{t('Direct Support', 'সার্বক্ষণিক সাপোর্ট')}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
