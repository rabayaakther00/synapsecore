import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { siteConfig } from '../data/siteContent';
import { ArrowRight, ShieldCheck, Zap, TrendingUp, CheckCircle, Activity, Sparkles, MessageCircle } from 'lucide-react';

interface HeroProps {
  onExploreClick: () => void;
  onContactClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onExploreClick, onContactClick }) => {
  const { lang, t } = useLanguage();

  return (
    <section id="hero" className="relative pt-32 pb-20 md:pt-44 md:pb-32 overflow-hidden bg-[#020617]">
      {/* Background ambient lighting for Deep Slate & Indigo depth */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[900px] h-[550px] bg-gradient-to-tr from-indigo-600/20 via-violet-600/15 to-cyan-500/10 blur-[130px] pointer-events-none rounded-full" />
      <div className="absolute top-10 right-10 w-[500px] h-[500px] bg-indigo-500/10 blur-[140px] pointer-events-none rounded-full" />
      <div className="absolute -bottom-20 left-10 w-[450px] h-[450px] bg-cyan-500/10 blur-[120px] pointer-events-none rounded-full" />

      {/* Subtle modern cyber grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b12_1px,transparent_1px),linear-gradient(to_bottom,#1e293b12_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_40%,#000_70%,transparent_100%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Headline, Tagline, & Action */}
          <div className="lg:col-span-7 space-y-6">
            {/* Tagline / Subtitle Pill */}
            <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-slate-900/80 border border-indigo-500/30 backdrop-blur-md text-xs font-semibold text-indigo-300 tracking-wide uppercase shadow-[0_0_20px_rgba(99,102,241,0.2)]">
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
              <span className="flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
                {t('AI-Powered B2B Revenue Engine • 2026', 'এআই-পাওয়ার্ড বি২বি রেভিনিউ ইঞ্জিন • ২০২৬')}
              </span>
            </div>

            {/* Display Tagline & Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.12] text-balance">
              Smart Tech.{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-violet-300 to-cyan-400">
                Seamless Growth.
              </span>
              <span className="block text-2xl sm:text-3xl lg:text-4xl font-semibold text-slate-300 mt-3">
                {t('Accelerate Your Enterprise Revenue', 'আপনার বিজনেসের সেলস ও রেভিনিউ বাড়ান দ্রুতগতিতে')}
              </span>
            </h1>

            {/* Bilingual Intro Text */}
            <p className="text-base sm:text-lg text-slate-300/90 max-w-2xl leading-relaxed">
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
                className="flex items-center gap-2.5 px-6 py-3.5 rounded-xl bg-gradient-to-r from-indigo-500 via-indigo-600 to-violet-600 text-white font-bold text-sm hover:brightness-110 active:scale-95 transition-all shadow-[0_0_25px_rgba(99,102,241,0.4)] border border-indigo-400/40"
              >
                <span>{t('Explore 8 Core Services', '৮টি সার্ভিস দেখুন')}</span>
                <ArrowRight className="w-4 h-4 text-cyan-200" />
              </button>

              <button
                onClick={onContactClick}
                type="button"
                className="flex items-center gap-2 px-6 py-3.5 rounded-xl bg-slate-900/80 border border-slate-700/80 hover:border-indigo-500/60 text-slate-200 hover:text-white font-medium text-sm hover:bg-slate-800/80 transition-all backdrop-blur-md shadow-sm"
              >
                <MessageCircle className="w-4 h-4 text-emerald-400" />
                <span>{t('Direct WhatsApp Consultation', 'হোয়াটসঅ্যাপে যোগাযোগ')}</span>
              </button>
            </div>

            {/* Key Trust Checkmarks */}
            <div className="pt-6 grid grid-cols-2 sm:grid-cols-3 gap-3.5 border-t border-slate-800 text-xs text-slate-300">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-cyan-400 shrink-0" />
                <span>{t('Zero-Bounce Guarantee', 'জিরো-বাউন্স গ্যারান্টি')}</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-indigo-400 shrink-0" />
                <span>{t('Transparent Dual Pricing ($/৳)', 'স্বচ্ছ ডুয়াল প্রাইসিং ($/৳)')}</span>
              </div>
              <div className="flex items-center gap-2 col-span-2 sm:col-span-1">
                <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>{t('Direct WhatsApp Execution', 'সরাসরি হোয়াটসঅ্যাপে অর্ডার')}</span>
              </div>
            </div>
          </div>

          {/* Right Column: Hero Interactive 3D Tech Dashboard Card */}
          <div className="lg:col-span-5 relative">
            {/* Glowing Backdrop */}
            <div className="absolute -inset-1.5 bg-gradient-to-r from-indigo-500/30 via-violet-500/30 to-cyan-500/30 rounded-3xl blur-xl opacity-75 group-hover:opacity-100 transition duration-1000" />

            <div className="relative rounded-2xl overflow-hidden border border-slate-700/80 bg-slate-900/90 shadow-[0_20px_50px_rgba(2,6,23,0.9)] backdrop-blur-xl">
              {/* Window Chrome Header */}
              <div className="flex items-center justify-between px-4 py-3 bg-slate-950/80 border-b border-slate-800">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-rose-500/80 inline-block" />
                  <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block" />
                  <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block" />
                  <span className="text-[11px] font-mono text-slate-400 ml-2">synapsecore-command-hub.app</span>
                </div>
                <div className="flex items-center gap-1.5 text-[10px] font-mono font-semibold px-2 py-0.5 rounded bg-indigo-500/10 text-indigo-300 border border-indigo-500/20">
                  <Activity className="w-3 h-3 text-cyan-400 animate-spin" />
                  <span>LIVE REVENUE ENGINE</span>
                </div>
              </div>

              {/* Main Visual Image Banner */}
              <div className="relative aspect-[16/10] overflow-hidden bg-slate-950">
                <img
                  src={siteConfig.heroImage}
                  alt="SynapseCore B2B Digital Command Hub"
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                  referrerPolicy="no-referrer"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80';
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />

                {/* Floating Metric Badge */}
                <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between p-2.5 rounded-xl bg-slate-900/90 border border-slate-700/80 backdrop-blur-md">
                  <div className="flex items-center gap-2.5">
                    <div className="p-2 rounded-lg bg-indigo-600/20 border border-indigo-500/30 text-indigo-400">
                      <TrendingUp className="w-4 h-4 text-cyan-400" />
                    </div>
                    <div>
                      <p className="text-[10px] uppercase font-mono text-slate-400 tracking-wider">MONTHLY REVENUE RUN RATE</p>
                      <p className="text-sm font-bold text-white font-mono">$124,500 <span className="text-emerald-400 text-xs font-sans">(+38.4%)</span></p>
                    </div>
                  </div>
                  <div className="text-right">
                    <span className="inline-block px-2 py-0.5 rounded text-[10px] font-semibold bg-emerald-500/10 text-emerald-400 border border-emerald-500/30">
                      VERIFIED
                    </span>
                  </div>
                </div>
              </div>

              {/* In-Card 3 High-Performance Metrics */}
              <div className="p-5 space-y-4 bg-slate-900/80">
                <div className="grid grid-cols-3 gap-3 text-center">
                  <div className="p-3 rounded-xl bg-slate-950/60 border border-slate-800">
                    <p className="text-xl font-bold text-white font-mono">100%</p>
                    <p className="text-[11px] text-slate-400 mt-0.5">{t('Zero Bounce', 'জিরো বাউন্স')}</p>
                  </div>
                  <div className="p-3 rounded-xl bg-slate-950/60 border border-slate-800">
                    <p className="text-xl font-bold text-cyan-400 font-mono">4.8x</p>
                    <p className="text-[11px] text-slate-400 mt-0.5">{t('Avg ROAS', 'গড় আরওআই')}</p>
                  </div>
                  <div className="p-3 rounded-xl bg-slate-950/60 border border-slate-800">
                    <p className="text-xl font-bold text-indigo-400 font-mono">24/7</p>
                    <p className="text-[11px] text-slate-400 mt-0.5">{t('Dedicated VA', 'ডেডিকেটেড ভিএ')}</p>
                  </div>
                </div>

                <div className="flex items-center justify-between text-xs text-slate-400 pt-1 border-t border-slate-800/80">
                  <span className="flex items-center gap-1.5 text-indigo-300 font-medium">
                    <Zap className="w-3.5 h-3.5 text-indigo-400" />
                    {t('Ready to scale your business?', 'আপনার বিজনেস স্কেল করতে প্রস্তুত?')}
                  </span>
                  <button
                    onClick={onExploreClick}
                    type="button"
                    className="text-cyan-400 hover:text-cyan-300 font-semibold flex items-center gap-1 transition-colors"
                  >
                    {t('View Catalog', 'ক্যাটালগ')} &rarr;
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

