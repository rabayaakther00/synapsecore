import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { servicesData } from '../data/servicesData';
import { siteConfig } from '../data/siteContent';
import { Calculator, Check, ArrowRight, MessageCircle, Sparkles, TrendingUp, Clock, DollarSign } from 'lucide-react';

export const PricingCalculator: React.FC = () => {
  const { lang, t } = useLanguage();
  const [selectedServiceId, setSelectedServiceId] = useState(servicesData[0].id);
  const [selectedPackageIndex, setSelectedPackageIndex] = useState(0);

  const currentService = servicesData.find((s) => s.id === selectedServiceId) || servicesData[0];
  const currentPackage = currentService.packages[selectedPackageIndex] || currentService.packages[0];

  const handleServiceChange = (serviceId: string) => {
    setSelectedServiceId(serviceId);
    setSelectedPackageIndex(0);
  };

  const getWhatsAppBookingLink = () => {
    const serviceName = lang === 'bn' ? currentService.titleBn : currentService.headline;
    const packageName = lang === 'bn' ? currentPackage.nameBn : currentPackage.name;
    const message = encodeURIComponent(
      `Hello SynapseCore! I am interested in ordering:
• Service: ${serviceName}
• Package: ${packageName} (${currentPackage.priceUsd} / ${currentPackage.priceBdt})
• Delivery Timeline: ${currentPackage.deliveryTime}

Please share the onboarding details and invoice.`
    );
    return `https://wa.me/${siteConfig.whatsAppNumber}?text=${message}`;
  };

  return (
    <section id="calculator" className="py-24 relative bg-[#0B132B]/60 border-y border-slate-800/80">
      {/* Background glowing gradients */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-gradient-to-r from-indigo-500/10 via-violet-500/10 to-cyan-500/10 blur-[130px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900 border border-indigo-500/30 text-xs font-semibold text-indigo-300">
            <Calculator className="w-3.5 h-3.5 text-cyan-400" />
            <span>{t('Instant ROI & Cost Calculator', 'ইনস্ট্যান্ট আরওআই ও প্রাইসিং ক্যালকুলেটর')}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            {t('Calculate Your Investment & Growth', 'আপনার প্রয়োজনীয় সার্ভিস ও বাজেট সিলেক্ট করুন')}
          </h2>
          <p className="text-slate-300/80 text-sm sm:text-base">
            {t(
              'Select any of our 8 core enterprise services to view transparent pricing, turnaround timelines, and expected business deliverables.',
              'যেকোনো সার্ভিস নির্বাচন করে তার স্বচ্ছ মূল্য, ডেলিভারির সময়সীমা এবং সম্ভাব্য প্রবৃদ্ধি তাৎক্ষণিক যাচাই করুন।'
            )}
          </p>
        </div>

        {/* Interactive Calculator Workspace */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Service & Package Selection */}
          <div className="lg:col-span-7 space-y-6">
            {/* Step 1: Service Selector */}
            <div className="p-6 rounded-2xl bg-slate-900/80 border border-slate-800 backdrop-blur-xl">
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-400 mb-3 font-mono">
                {t('1. Choose Enterprise Service', '১. সার্ভিস নির্বাচন করুন')}
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {servicesData.map((service) => (
                  <button
                    key={service.id}
                    onClick={() => handleServiceChange(service.id)}
                    type="button"
                    className={`flex items-center justify-between p-3 rounded-xl border text-left text-xs font-medium transition-all ${
                      selectedServiceId === service.id
                        ? 'bg-gradient-to-r from-indigo-500/20 to-violet-500/20 border-indigo-500/80 text-white shadow-[0_0_15px_rgba(99,102,241,0.2)]'
                        : 'bg-slate-950/50 border-slate-800 text-slate-300 hover:border-slate-700 hover:text-white'
                    }`}
                  >
                    <span className="truncate pr-2 font-semibold">
                      {lang === 'bn' ? service.titleBn : service.headline}
                    </span>
                    <span className="font-mono text-cyan-400 font-bold shrink-0">
                      {service.packages[0].priceUsd}
                    </span>
                  </button>
                ))}
              </div>
            </div>

            {/* Step 2: Package Tiers for Selected Service */}
            <div className="p-6 rounded-2xl bg-slate-900/80 border border-slate-800 backdrop-blur-xl space-y-3">
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-400 font-mono">
                {t('2. Select Package Tier', '২. প্যাকেজ টিয়ার নির্বাচন করুন')}
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {currentService.packages.map((pkg, idx) => (
                  <button
                    key={pkg.id}
                    onClick={() => setSelectedPackageIndex(idx)}
                    type="button"
                    className={`relative p-4 rounded-xl border text-left transition-all ${
                      selectedPackageIndex === idx
                        ? 'bg-indigo-600/20 border-indigo-500 text-white shadow-[0_0_20px_rgba(99,102,241,0.25)]'
                        : 'bg-slate-950/50 border-slate-800 text-slate-300 hover:border-slate-700'
                    }`}
                  >
                    {pkg.popular && (
                      <span className="absolute -top-2.5 right-3 px-2 py-0.5 rounded-full text-[10px] font-bold bg-gradient-to-r from-indigo-500 to-cyan-400 text-white shadow-sm">
                        POPULAR
                      </span>
                    )}
                    <p className="text-xs font-semibold text-slate-300">
                      {lang === 'bn' ? pkg.nameBn : pkg.name}
                    </p>
                    <p className="text-lg font-bold text-white font-mono mt-1">
                      {pkg.priceUsd}
                    </p>
                    <p className="text-xs text-cyan-400 font-bn">
                      {pkg.priceBdt}
                    </p>
                    <p className="text-[11px] text-slate-400 mt-2 flex items-center gap-1">
                      <Clock className="w-3 h-3 text-slate-500" />
                      <span>{lang === 'bn' ? pkg.deliveryTimeBn : pkg.deliveryTime}</span>
                    </p>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Live Projected Deliverables & WhatsApp Trigger */}
          <div className="lg:col-span-5">
            <div className="p-7 rounded-2xl bg-gradient-to-b from-slate-900 via-slate-900/95 to-slate-950 border border-indigo-500/40 shadow-[0_20px_50px_rgba(2,6,23,0.9)] backdrop-blur-2xl space-y-6">
              <div className="flex items-center justify-between border-b border-slate-800 pb-4">
                <div>
                  <span className="text-[11px] font-mono text-indigo-400 uppercase tracking-wider block">
                    SUMMARY ESTIMATE
                  </span>
                  <h3 className="text-lg font-bold text-white">
                    {lang === 'bn' ? currentService.titleBn : currentService.headline}
                  </h3>
                </div>
                <div className="text-right">
                  <div className="text-2xl font-black text-white font-mono">
                    {currentPackage.priceUsd}
                  </div>
                  <div className="text-sm font-semibold text-cyan-400 font-bn">
                    {currentPackage.priceBdt}
                  </div>
                </div>
              </div>

              {/* Highlight Metrics */}
              <div className="grid grid-cols-2 gap-3 text-center">
                <div className="p-3 rounded-xl bg-slate-950/70 border border-slate-800">
                  <p className="text-[11px] text-slate-400 uppercase font-mono">{t('Turnaround', 'ডেলিভারি টাইম')}</p>
                  <p className="text-sm font-bold text-white mt-1">
                    {lang === 'bn' ? currentPackage.deliveryTimeBn : currentPackage.deliveryTime}
                  </p>
                </div>
                <div className="p-3 rounded-xl bg-slate-950/70 border border-slate-800">
                  <p className="text-[11px] text-slate-400 uppercase font-mono">{t('Target ROI Impact', 'টার্গেট ইমপ্যাক্ট')}</p>
                  <p className="text-sm font-bold text-emerald-400 mt-1 flex items-center justify-center gap-1">
                    <TrendingUp className="w-3.5 h-3.5" />
                    <span>3.5x - 5.2x</span>
                  </p>
                </div>
              </div>

              {/* What's Included Preview */}
              <div className="space-y-3">
                <p className="text-xs font-bold uppercase tracking-wider text-slate-400 font-mono">
                  {t('Verified Deliverables Included:', 'প্যাকেজে অন্তর্ভুক্ত সুবিধাসমূহ:')}
                </p>
                <div className="space-y-2">
                  {currentService.whatsIncluded.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs text-slate-300">
                      <div className="p-0.5 rounded-full bg-indigo-500/20 text-cyan-400 mt-0.5 shrink-0">
                        <Check className="w-3 h-3" />
                      </div>
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Direct Booking via WhatsApp */}
              <div className="pt-4 border-t border-slate-800 space-y-3">
                <a
                  href={getWhatsAppBookingLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2.5 py-3.5 px-6 rounded-xl bg-gradient-to-r from-emerald-500 via-teal-600 to-emerald-600 hover:brightness-110 text-white font-bold text-sm shadow-[0_0_25px_rgba(16,185,129,0.35)] transition-all active:scale-95 border border-emerald-400/30"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>{t('Book This Package on WhatsApp', 'হোয়াটসঅ্যাপে এই প্যাকেজ বুক করুন')}</span>
                </a>
                <p className="text-center text-[11px] text-slate-400">
                  {t('⚡ Average response time: under 15 minutes', '⚡ সাধারণত ১৫ মিনিটের মধ্যে রেসপন্স করা হয়')}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
