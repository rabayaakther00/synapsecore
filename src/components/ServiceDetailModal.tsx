import React, { useEffect, useState } from 'react';
import { ServiceItem, PackageItem } from '../data/servicesData';
import { siteConfig } from '../data/siteContent';
import { useLanguage } from '../context/LanguageContext';
import {
  X,
  CheckCircle2,
  MessageSquare,
  Clock,
  ChevronDown,
  Sparkles,
  ArrowRight,
  ShieldCheck,
  Share2,
} from 'lucide-react';

interface ServiceDetailModalProps {
  service: ServiceItem | null;
  onClose: () => void;
}

export const ServiceDetailModal: React.FC<ServiceDetailModalProps> = ({
  service,
  onClose,
}) => {
  const { lang, t } = useLanguage();
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);
  const [copiedLink, setCopiedLink] = useState(false);

  // Close on ESC key and prevent body scroll
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    if (service) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [service, onClose]);

  if (!service) return null;

  // Build direct WhatsApp link with pre-filled package message
  const createWhatsAppOrderLink = (pkg: PackageItem) => {
    const textMessage = `Hello SynapseCore Team!
I am interested in ordering the following service:
• Service: ${service.headline}
• Package: ${pkg.name}
• Pricing: ${pkg.priceUsd} (${pkg.priceBdt})
${pkg.deliveryTime ? `• Timeline: ${pkg.deliveryTime}` : ''}

Please share the onboarding details and next steps. Thank you!`;

    return `https://wa.me/${siteConfig.whatsAppNumber}?text=${encodeURIComponent(textMessage)}`;
  };

  const handleShare = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(window.location.href);
      setCopiedLink(true);
      setTimeout(() => setCopiedLink(false), 2000);
    }
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/85 backdrop-blur-md flex items-center justify-center p-3 sm:p-4 md:p-6 animate-in fade-in duration-200">
      {/* Modal Container */}
      <div
        className="relative w-full max-w-5xl rounded-3xl bg-[#0F172A] border border-indigo-500/40 shadow-[0_25px_60px_rgba(2,6,23,0.95)] overflow-hidden my-6 max-h-[92vh] flex flex-col"
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-headline"
      >
        {/* Sticky Modal Header Bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-800 bg-slate-950/90 backdrop-blur-xl shrink-0 z-20">
          <div className="flex items-center gap-3">
            <span className="px-2.5 py-1 rounded bg-slate-900 border border-indigo-500/40 text-xs font-mono font-bold text-cyan-400">
              SERVICE #{service.number}
            </span>
            <span className="text-sm font-semibold text-white truncate max-w-xs sm:max-w-md">
              {service.title}
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleShare}
              type="button"
              className="p-2 rounded-xl bg-slate-900 text-slate-300 hover:text-white border border-slate-800 text-xs flex items-center gap-1.5 transition-colors"
              title="Copy service link"
            >
              <Share2 className="w-4 h-4 text-cyan-400" />
              <span className="hidden sm:inline">{copiedLink ? t('Copied!', 'কপি হয়েছে!') : t('Share', 'শেয়ার')}</span>
            </button>

            <button
              onClick={onClose}
              type="button"
              className="p-2 rounded-xl bg-slate-900 text-slate-300 hover:text-white hover:bg-slate-800 border border-slate-800 transition-colors"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Scrollable Content Body */}
        <div className="overflow-y-auto px-6 py-8 space-y-10 focus:outline-none bg-[#0B132B]/80">
          {/* 1. Large Service Banner Image & Title */}
          <div className="space-y-4">
            <div className="relative aspect-[21/9] sm:aspect-[16/7] w-full rounded-2xl overflow-hidden border border-slate-800 bg-slate-950 shadow-xl">
              <img
                src={service.image}
                alt={service.headline}
                referrerPolicy="no-referrer"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80';
                }}
                className="w-full h-full object-cover"
              />

              {/* Banner Badge */}
              <div className="absolute top-4 left-4 flex flex-col gap-1 z-10 pointer-events-none">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-xl bg-slate-950/90 backdrop-blur-md border border-indigo-500/50 text-xs font-bold tracking-wider text-indigo-300 shadow-md">
                  <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
                  {service.bannerBadgeText}
                </span>
                <span className="text-xs text-slate-200 font-semibold px-1 font-bn drop-shadow-[0_1px_3px_rgba(0,0,0,0.9)]">
                  {service.bannerBadgeSubtextBn}
                </span>
              </div>
            </div>

            <div className="pt-2">
              <h2
                id="modal-headline"
                className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight leading-tight"
              >
                {service.headline}
              </h2>
              <p className="text-sm font-semibold text-cyan-400 mt-1 font-bn">
                {service.titleBn}
              </p>
            </div>
          </div>

          {/* 2. Full Bilingual Overview (Bengali & English Sections) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-slate-900/90 p-6 rounded-2xl border border-slate-800 backdrop-blur-xl">
            {/* Bengali Overview Box */}
            <div className="space-y-2 border-b md:border-b-0 md:border-r border-slate-800 pb-5 md:pb-0 md:pr-6">
              <div className="flex items-center gap-2 text-xs font-bold text-indigo-400 uppercase tracking-wider font-mono">
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                <span>সার্ভিস বিস্তারিত (বাংলা বিবরণ)</span>
              </div>
              <p className="text-sm sm:text-base text-slate-200 leading-relaxed font-bn">
                {service.overviewBn}
              </p>
            </div>

            {/* English Overview Box */}
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-xs font-bold text-indigo-400 uppercase tracking-wider font-mono">
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                <span>Executive Overview (English)</span>
              </div>
              <p className="text-sm sm:text-base text-slate-200 leading-relaxed">
                {service.overviewEn}
              </p>
            </div>
          </div>

          {/* 3. "What's Included" Deliverables List */}
          <div className="space-y-4">
            <div className="flex items-center justify-between border-b border-slate-800 pb-3">
              <h3 className="text-xl font-bold text-white flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-indigo-400" />
                <span>{t("What's Included in This Service", 'এই সার্ভিসে যা যা অন্তর্ভুক্ত')}</span>
              </h3>
              <span className="text-xs text-cyan-400 font-mono">
                {service.whatsIncluded.length} {t('Key Deliverables', 'টি প্রধান কাজ')}
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              {service.whatsIncluded.map((item, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-3 p-3.5 rounded-xl bg-slate-900/60 border border-slate-800 hover:border-indigo-500/40 transition-colors"
                >
                  <div className="p-1 rounded-md bg-indigo-500/20 text-cyan-400 shrink-0 mt-0.5">
                    <CheckCircle2 className="w-4 h-4" />
                  </div>
                  <span className="text-sm text-slate-200 font-medium leading-snug">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* 4. Pricing Packages Cards (USD $ & BDT ৳) + 5. Order via WhatsApp */}
          <div className="space-y-5">
            <div className="border-b border-slate-800 pb-3">
              <h3 className="text-xl font-bold text-white flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-indigo-400" />
                <span>{t('Available Packages & Pricing', 'প্যাকেজ এবং মূল্যতালিকা')}</span>
              </h3>
              <p className="text-xs text-slate-400 mt-1">
                {t(
                  'Select a package below to initiate priority booking directly through our official WhatsApp business channel.',
                  'আপনার সুবিধামতো প্যাকেজ নির্বাচন করে সরাসরি আমাদের অফিসিয়াল হোয়াটসঅ্যাপে অর্ডার কনফার্ম করুন।'
                )}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {service.packages.map((pkg) => {
                const whatsappUrl = createWhatsAppOrderLink(pkg);

                return (
                  <div
                    key={pkg.id}
                    className={`relative rounded-2xl p-6 flex flex-col justify-between transition-all duration-300 border ${
                      pkg.popular
                        ? 'bg-gradient-to-b from-indigo-950/40 via-slate-900 to-slate-950 border-indigo-500 shadow-[0_10px_30px_rgba(99,102,241,0.25)] ring-1 ring-indigo-500/50'
                        : 'bg-slate-900/80 border-slate-800 hover:border-slate-700'
                    }`}
                  >
                    {pkg.popular && (
                      <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-0.5 rounded-full bg-gradient-to-r from-indigo-500 to-cyan-400 text-white text-[11px] font-extrabold uppercase tracking-wider shadow-md">
                        {t('Most Popular', 'জনপ্রিয় চয়েস')}
                      </div>
                    )}

                    <div className="space-y-3">
                      <div>
                        <h4 className="text-lg font-bold text-white leading-snug">
                          {pkg.name}
                        </h4>
                        {pkg.nameBn && (
                          <span className="text-xs text-cyan-400 font-bn block mt-0.5">
                            {pkg.nameBn}
                          </span>
                        )}
                      </div>

                      {/* Dual Pricing: USD ($) and BDT (৳) */}
                      <div className="pt-2">
                        <div className="flex items-baseline gap-2">
                          <span className="text-3xl font-extrabold text-white font-mono">
                            {pkg.priceUsd}
                          </span>
                        </div>
                        <div className="text-sm font-semibold text-cyan-400 font-bn mt-0.5">
                          {pkg.priceBdt}
                        </div>
                      </div>

                      {/* Delivery Time */}
                      {pkg.deliveryTime && (
                        <div className="flex items-center gap-1.5 text-xs text-slate-300 pt-1">
                          <Clock className="w-3.5 h-3.5 text-indigo-400" />
                          <span>{lang === 'bn' && pkg.deliveryTimeBn ? pkg.deliveryTimeBn : pkg.deliveryTime}</span>
                        </div>
                      )}

                      {/* Package Description from PDF */}
                      {pkg.description && (
                        <p className="text-xs text-slate-300/80 pt-2 border-t border-slate-800 leading-relaxed">
                          {pkg.description}
                        </p>
                      )}
                    </div>

                    {/* 5. "Order via WhatsApp" button on each package card */}
                    <div className="pt-6 mt-4 border-t border-slate-800">
                      <a
                        href={whatsappUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl font-bold text-xs uppercase tracking-wider transition-all duration-200 active:scale-95 shadow-md ${
                          pkg.popular
                            ? 'bg-gradient-to-r from-emerald-500 via-teal-600 to-emerald-600 hover:brightness-110 text-white border border-emerald-400/40 shadow-[0_0_20px_rgba(16,185,129,0.3)]'
                            : 'bg-slate-950 hover:bg-indigo-600 hover:text-white text-slate-200 border border-slate-800'
                        }`}
                      >
                        <MessageSquare className="w-4 h-4 shrink-0 fill-current" />
                        <span>{t('Order via WhatsApp', 'হোয়াটসঅ্যাপে অর্ডার করুন')}</span>
                      </a>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* 6. Service-Specific FAQ Section at the bottom */}
          <div className="space-y-4 pt-4 border-t border-slate-800">
            <div>
              <h3 className="text-xl font-bold text-white">
                {t('Frequently Asked Questions (Service FAQ)', 'এই সার্ভিস সম্পর্কিত প্রশ্নোত্তর')}
              </h3>
              <p className="text-xs text-slate-400 mt-1">
                {t(
                  'Common client inquiries about turnaround, workflow execution, and performance criteria.',
                  'ডেলিভারি সময়, কাজের প্রক্রিয়া এবং পারফরম্যান্স সংক্রান্ত সাধারণ প্রশ্নাবলী।'
                )}
              </p>
            </div>

            <div className="space-y-2.5">
              {service.faqs.map((faq, idx) => {
                const isOpen = openFaqIndex === idx;

                return (
                  <div
                    key={idx}
                    className="rounded-xl border border-slate-800 bg-slate-900/60 overflow-hidden"
                  >
                    <button
                      onClick={() => setOpenFaqIndex(isOpen ? null : idx)}
                      type="button"
                      className="w-full flex items-center justify-between p-4 text-left font-semibold text-white text-sm hover:text-indigo-300 transition-colors"
                    >
                      <span className={lang === 'bn' ? 'font-bn' : ''}>
                        {lang === 'bn' ? faq.questionBn : faq.question}
                      </span>
                      <ChevronDown
                        className={`w-4 h-4 text-cyan-400 shrink-0 transition-transform duration-200 ${
                          isOpen ? 'rotate-180' : ''
                        }`}
                      />
                    </button>

                    {isOpen && (
                      <div className="px-4 pb-4 pt-1 text-xs sm:text-sm text-slate-300 leading-relaxed border-t border-slate-800">
                        <p className={lang === 'bn' ? 'font-bn' : ''}>
                          {lang === 'bn' ? faq.answerBn : faq.answer}
                        </p>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Modal Bottom Action Bar */}
        <div className="px-6 py-4 border-t border-slate-800 bg-slate-950/90 flex flex-wrap items-center justify-between gap-4 shrink-0">
          <div className="text-xs text-slate-400">
            <span>{t('Need a custom requirement or bundled service?', 'কাস্টম রিকয়ারমেন্ট বা বান্ডেল সার্ভিসের প্রয়োজন?')} </span>
            <a
              href={`https://wa.me/${siteConfig.whatsAppNumber}?text=${encodeURIComponent(`Hi SynapseCore, I need a custom quote for ${service.headline}`)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-cyan-400 font-bold underline hover:text-white ml-1 font-mono"
            >
              {t('Chat with strategist', 'আমাদের সাথে কথা বলুন')}
            </a>
          </div>

          <button
            onClick={onClose}
            type="button"
            className="px-5 py-2 rounded-xl bg-slate-900 border border-slate-800 text-white text-xs font-semibold hover:bg-slate-800 transition-colors"
          >
            {t('Close Window', 'বন্ধ করুন')}
          </button>
        </div>
      </div>
    </div>
  );
};
