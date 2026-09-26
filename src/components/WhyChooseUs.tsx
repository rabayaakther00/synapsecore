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
    <section id="why-us" className="py-24 bg-[#0F172A]/70 relative border-y border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900 border border-indigo-500/30 text-xs font-semibold text-indigo-300 uppercase tracking-wider">
            <Zap className="w-3.5 h-3.5 text-cyan-400" />
            <span>{t('Engineered for Growth', 'ব্যবসার দ্রুত প্রবৃদ্ধির নিশ্চয়তা')}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            {t('Why Leading Enterprises Trust SynapseCore', 'কেন অগ্রণী প্রতিষ্ঠানগুলো SynapseCore বেছে নেয়')}
          </h2>
          <p className="text-sm sm:text-base text-slate-300/80">
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
                className="rounded-2xl p-6 bg-slate-900/80 border border-slate-800 hover:border-indigo-500/60 transition-all duration-300 shadow-[0_10px_25px_rgba(2,6,23,0.7)] hover:shadow-[0_15px_35px_rgba(99,102,241,0.2)] flex flex-col justify-between group backdrop-blur-xl"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-slate-950 border border-indigo-500/30 flex items-center justify-center text-cyan-400 group-hover:scale-110 group-hover:text-indigo-300 transition-all mb-5 shadow-sm">
                    <Icon className="w-6 h-6" />
                  </div>

                  <div className="text-3xl sm:text-4xl font-extrabold text-white font-mono tracking-tight">
                    {metric.value}
                  </div>

                  <h3 className="text-base font-bold text-slate-100 mt-2 leading-snug">
                    {lang === 'bn' ? metric.labelBn : metric.label}
                  </h3>
                </div>

                <p className="text-xs text-slate-300/70 mt-4 pt-4 border-t border-slate-800/80 leading-relaxed">
                  {lang === 'bn' ? metric.descBn : metric.desc}
                </p>
              </div>
            );
          })}
        </div>

        {/* B2B Competency Highlights Banner */}
        <div className="mt-12 rounded-2xl bg-gradient-to-r from-slate-900 via-indigo-950/40 to-slate-900 border border-indigo-500/30 p-6 sm:p-8 flex flex-col lg:flex-row items-center justify-between gap-6 shadow-xl backdrop-blur-xl">
          <div className="space-y-1 text-center lg:text-left">
            <h4 className="text-lg font-bold text-white">
              {t('Transparent Execution & Dual Currency Invoicing', 'স্বচ্ছ কার্যপদ্ধতি ও ডুয়াল কারেন্সি ইনভয়েসিং')}
            </h4>
            <p className="text-xs sm:text-sm text-slate-300/80">
              {t(
                'Direct bKash/Nagad and Bank transfers for Bangladesh clients; Stripe/Wire for International partners.',
                'বাংলাদেশি ক্লায়েন্টদের জন্য বিকাশ, নগদ ও ব্যাংক ট্রান্সফার; গ্লোবাল ক্লায়েন্টদের জন্য স্ট্রাইপ ও ওয়্যার।'
              )}
            </p>
          </div>
          <a
            href="https://wa.me/8801353762827"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 rounded-xl bg-gradient-to-r from-indigo-500 to-violet-600 hover:from-indigo-600 hover:to-violet-700 text-white font-bold text-xs uppercase tracking-wider transition-all shadow-[0_0_20px_rgba(99,102,241,0.3)] active:scale-95 whitespace-nowrap"
          >
            {t('Speak With Our Lead Strategist', 'লিড স্ট্র্যাটেজিস্টের সাথে কথা বলুন')}
          </a>
        </div>
      </div>
    </section>
  );
};

