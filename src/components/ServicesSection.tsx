import React, { useState } from 'react';
import { servicesData, ServiceItem } from '../data/servicesData';
import { ServiceCard } from './ServiceCard';
import { useLanguage } from '../context/LanguageContext';
import { Layers } from 'lucide-react';

interface ServicesSectionProps {
  onSelectService: (service: ServiceItem) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onSelectService }) => {
  const { t } = useLanguage();
  const [filterCategory, setFilterCategory] = useState<'all' | 'growth' | 'ops'>('all');

  const filteredServices = servicesData.filter((service) => {
    if (filterCategory === 'growth') {
      return ['meta-google-ads', 'b2b-lead-generation', 'web-landing-page', 'video-editing'].includes(service.id);
    }
    if (filterCategory === 'ops') {
      return ['organic-seo', 'workflow-automation', 'data-entry-scraping', 'virtual-assistant'].includes(service.id);
    }
    return true;
  });

  return (
    <section id="services" className="py-28 relative bg-[#020617]">
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 left-0 w-[500px] h-[500px] bg-indigo-500/10 blur-[130px] pointer-events-none rounded-full" />
      <div className="absolute bottom-10 right-0 w-[500px] h-[500px] bg-cyan-500/10 blur-[130px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 border-b border-slate-800 pb-8">
          <div>
            <div className="flex items-center gap-2 text-xs font-bold text-indigo-400 uppercase tracking-wider mb-2">
              <Layers className="w-4 h-4 text-cyan-400" />
              <span>{t('Comprehensive B2B Solutions', 'পূর্ণাঙ্গ বি২বি সার্ভিস তালিকা')}</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              {t('Official Service Catalog & Packages', 'অফিসিয়াল সার্ভিস ক্যাটালগ ও প্যাকেজসমূহ')}
            </h2>
            <p className="mt-2 text-sm sm:text-base text-slate-300/80 max-w-2xl">
              {t(
                'Explore our 8 specialized enterprise services with verified deliverables, fixed turnaround timelines, and dual currency rates ($ USD & ৳ BDT).',
                'আমাদের ৮টি সুনির্দিষ্ট এন্টারপ্রাইজ সার্ভিস দেখুন—যেখানে রয়েছে সুস্পষ্ট কাজের তালিকা, নির্দিষ্ট ডেলিভারি টাইম এবং স্বচ্ছ ইউএসডি ও বিডিটি রেট।'
              )}
            </p>
          </div>

          {/* Clean Segmented Filter Controls */}
          <div className="flex items-center gap-1.5 p-1.5 rounded-xl bg-slate-900 border border-slate-800 self-start md:self-auto shrink-0 shadow-inner">
            <button
              onClick={() => setFilterCategory('all')}
              type="button"
              className={`px-4 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                filterCategory === 'all'
                  ? 'bg-gradient-to-r from-indigo-500 to-violet-600 text-white shadow-md'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              {t('All 8 Services', 'সকল ৮টি সার্ভিস')}
            </button>
            <button
              onClick={() => setFilterCategory('growth')}
              type="button"
              className={`px-4 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                filterCategory === 'growth'
                  ? 'bg-gradient-to-r from-indigo-500 to-violet-600 text-white shadow-md'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              {t('Growth & Ads', 'গ্রোথ ও অ্যাডস')}
            </button>
            <button
              onClick={() => setFilterCategory('ops')}
              type="button"
              className={`px-4 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                filterCategory === 'ops'
                  ? 'bg-gradient-to-r from-indigo-500 to-violet-600 text-white shadow-md'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              {t('Automation & Ops', 'অটোমেশন ও অপস')}
            </button>
          </div>
        </div>

        {/* E-Commerce Service Grid Layout:
            On Desktop (lg: 6 columns):
            - Row 1: 3 Services (Services 0, 1, 2 -> each col-span-2)
            - Row 2: 3 Services (Services 3, 4, 5 -> each col-span-2)
            - Row 3: 2 Services (Services 6, 7 -> each col-span-3)
        */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-6 sm:gap-8">
          {filteredServices.map((service, index) => {
            // Determine desktop column span based on full catalog 3-3-2 layout
            const isFullCatalog = filteredServices.length === 8;
            let desktopSpanClass = 'lg:col-span-2'; // Default: 3 per row (2 of 6 columns)

            if (isFullCatalog && index >= 6) {
              // 7th and 8th items take 3 columns each (2 per row)
              desktopSpanClass = 'lg:col-span-3';
            } else if (!isFullCatalog) {
              // In filtered mode with 4 items, 2x2 grid looks great
              desktopSpanClass = 'lg:col-span-3';
            }

            return (
              <ServiceCard
                key={service.id}
                service={service}
                onViewDetails={onSelectService}
                className={desktopSpanClass}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};
