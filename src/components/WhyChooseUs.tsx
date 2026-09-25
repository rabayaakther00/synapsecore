import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { ShieldCheck, Zap, BarChart3, Clock, Users, Headphones } from 'lucide-react';

export const WhyChooseUs: React.FC = () => {
  const { lang, t } = useLanguage();

  const metrics = [
    {
      icon: ShieldCheck,
      value: '100%',
      label: 'Zero-Bounce Lead Guarantee',
      labelBn: 'জিরো-বাউন্স লিড গ্যারান্টি',
      desc: 'Dual-verified email verification protocols via NeverBounce & ZeroBounce.',
      descBn: 'ডাবল ভেরিফিকেশনের মাধ্যমে ১০০% সক্রিয় বিজনেস ইমেইল সরবরাহ।'
    },
    {
      icon: Clock,
      value: '2-5 Days',
      label: 'Rapid Agile Turnaround',
      labelBn: 'দ্রুততম সময়ে ডেলিভারি',
      desc: 'Streamlined operational sprints ensure your campaigns launch without delay.',
      descBn: 'সুনির্দিষ্ট টাইমলাইনে দ্রুত ডেলিভারি যাতে প্রজেক্ট থেমে না থাকে।'
    },
    {
      icon: BarChart3,
      value: '4.8x',
      label: 'Average Campaign ROAS',
      labelBn: 'বিজ্ঞাপনে গড় ৪.৮ গুণ রিটার্ন',
      desc: 'Data-driven funnel engineering that maximizes conversion revenue.',
      descBn: 'ডাটা-ড্রিভেন ফানেল ও রিটার্গেটিংয়ের মাধ্যমে সর্বোচ্চ সেলস ও আরওআই।'
    },
    {
      icon: Headphones,
      value: '24/7',
      label: 'Dedicated Support Channel',
      labelBn: 'সার্বক্ষণিক ক্লায়েন্ট সাপোর্ট',
      desc: 'Real-time communication and progress tracking over WhatsApp and Slack.',
      descBn: 'হোয়াটসঅ্যাপ ও স্ল্যাকে সরাসরি ইনস্ট্যান্ট প্রজেক্ট আপডেট।'
    }
  ];

  return (
    <section id="why-us" className="py-24 bg-[#0B2B26]/60 relative border-y border-[#8EB69B]/15">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#163832] border border-[#8EB69B]/30 text-xs font-semibold text-[#8EB69B] uppercase tracking-wider">
            <Zap className="w-3.5 h-3.5" />
            <span>{t('Engineered for Growth', 'ব্যবসার দ্রুত প্রবৃদ্ধির নিশ্চয়তা')}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            {t('Why Leading Enterprises Trust SynapseCore', 'কেন অগ্রণী প্রতিষ্ঠানগুলো SynapseCore বেছে নেয়')}
          </h2>
          <p className="text-sm sm:text-base text-[#DAF1DE]/80">
            {t(
              'We replace trial-and-error with audited execution, strict delivery standards, and quantifiable B2B business outcomes.',
              'আমরা কেবল প্রতিশ্রুতি নয়, বরং সুনির্দিষ্ট ডাটা, প্রমাণিত স্ট্র্যাটেজি এবং পরিমাপযোগ্য ফলাফলের মাধ্যমে ক্লায়েন্টদের সফল করি।'
            )}
          </p>
        </div>

        {/* Metric Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {metrics.map((metric, idx) => {
            const Icon = metric.icon;
            return (
              <div
                key={idx}
                className="rounded-2xl p-6 bg-[#163832] border border-[#8EB69B]/25 hover:border-[#8EB69B]/60 transition-all duration-300 shadow-[0_10px_25px_rgba(5,31,32,0.6)] flex flex-col justify-between group"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-[#051F20] border border-[#8EB69B]/30 flex items-center justify-center text-[#8EB69B] group-hover:scale-110 transition-transform mb-5">
                    <Icon className="w-6 h-6" />
                  </div>

                  <div className="text-3xl sm:text-4xl font-extrabold text-white font-mono tracking-tight">
                    {metric.value}
                  </div>

                  <h3 className="text-base font-bold text-[#DAF1DE] mt-2 leading-snug">
                    {lang === 'bn' ? metric.labelBn : metric.label}
                  </h3>
                </div>

                <p className="text-xs text-[#DAF1DE]/70 mt-4 pt-4 border-t border-[#8EB69B]/15 leading-relaxed">
                  {lang === 'bn' ? metric.descBn : metric.desc}
                </p>
              </div>
            );
          })}
        </div>

        {/* B2B Competency Highlights Banner */}
        <div className="mt-12 rounded-2xl bg-gradient-to-r from-[#163832] via-[#10302b] to-[#163832] border border-[#8EB69B]/30 p-6 sm:p-8 flex flex-col lg:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center lg:text-left">
            <h4 className="text-lg font-bold text-white">
              {t('Transparent Execution & Dual Currency Invoicing', 'স্বচ্ছ কার্যপদ্ধতি ও ডুয়াল কারেন্সি ইনভয়েসিং')}
            </h4>
            <p className="text-xs sm:text-sm text-[#DAF1DE]/80">
              {t(
                'Clear pricing in USD ($) and BDT (৳) with verified milestones. Zero hidden fees or unexpected retainer additions.',
                'ইউএসডি ($) এবং বিডিটি (৳) তে স্বচ্ছ মূল্যতালিকা। কোনো গোপন চার্জ ছাড়াই নির্দিষ্ট মাইলস্টোনে কাজ ডেলিভারি।'
              )}
            </p>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <a
              href="#services"
              className="px-5 py-2.5 rounded-lg bg-[#8EB69B] text-[#051F20] font-bold text-xs uppercase tracking-wider hover:brightness-110 transition-all"
            >
              {t('Browse Catalog', 'ক্যাটালগ দেখুন')}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
