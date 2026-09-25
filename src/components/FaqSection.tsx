import React, { useState } from 'react';
import { generalFaqs } from '../data/siteContent';
import { useLanguage } from '../context/LanguageContext';
import { HelpCircle, ChevronDown } from 'lucide-react';

export const FaqSection: React.FC = () => {
  const { lang, t } = useLanguage();
  const [openId, setOpenId] = useState<string | null>('g1');

  const toggleFaq = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section id="faq" className="py-24 bg-[#0B2B26]/40 relative border-t border-[#8EB69B]/15">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#163832] border border-[#8EB69B]/30 text-xs font-semibold text-[#8EB69B] uppercase tracking-wider">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>{t('Clear Answers', 'সাধারণ প্রশ্নোত্তর')}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            {t('Frequently Asked Questions', 'কাজের নিয়ম ও সাধারণ জিজ্ঞাসা')}
          </h2>
          <p className="text-sm sm:text-base text-[#DAF1DE]/80">
            {t(
              'Everything you need to know about our engagement terms, turnaround timelines, and payment models.',
              'আমাদের কাজের পদ্ধতি, পেমেন্ট মাধ্যম এবং সেবা প্রদান সংক্রান্ত গুরুত্বপূর্ণ তথ্য।'
            )}
          </p>
        </div>

        {/* FAQ Accordion List */}
        <div className="space-y-3.5">
          {generalFaqs.map((faq) => {
            const isOpen = openId === faq.id;

            return (
              <div
                key={faq.id}
                className="rounded-2xl border border-[#8EB69B]/25 bg-[#163832] overflow-hidden transition-all duration-200 shadow-sm"
              >
                <button
                  onClick={() => toggleFaq(faq.id)}
                  type="button"
                  className="w-full flex items-center justify-between p-5 text-left font-bold text-white text-base hover:text-[#DAF1DE] transition-colors gap-4"
                  aria-expanded={isOpen}
                >
                  <span className={lang === 'bn' ? 'font-bn' : ''}>
                    {lang === 'bn' ? faq.questionBn : faq.question}
                  </span>
                  <div
                    className={`w-7 h-7 rounded-full bg-[#051F20] flex items-center justify-center text-[#8EB69B] shrink-0 transition-transform duration-200 ${
                      isOpen ? 'rotate-180 bg-[#8EB69B] text-[#051F20]' : ''
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 pt-1 text-sm text-[#DAF1DE]/85 leading-relaxed border-t border-[#8EB69B]/10">
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
    </section>
  );
};
