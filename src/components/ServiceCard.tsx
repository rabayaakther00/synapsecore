import React from 'react';
import { ServiceItem } from '../data/servicesData';
import { useLanguage } from '../context/LanguageContext';
import { ArrowRight, Check } from 'lucide-react';

interface ServiceCardProps {
  service: ServiceItem;
  onViewDetails: (service: ServiceItem) => void;
  className?: string;
}

export const ServiceCard: React.FC<ServiceCardProps> = ({
  service,
  onViewDetails,
  className = '',
}) => {
  const { lang, t } = useLanguage();

  // Retrieve lowest starting price for quick reference
  const firstPackage = service.packages[0];

  return (
    <div
      className={`group flex flex-col justify-between rounded-2xl bg-[#163832] border border-[#8EB69B]/25 hover:border-[#8EB69B]/60 transition-all duration-300 shadow-[0_10px_30px_rgba(5,31,32,0.6)] hover:shadow-[0_15px_40px_rgba(5,31,32,0.9)] overflow-hidden ${className}`}
    >
      <div>
        {/* Banner Image Container */}
        <div className="relative aspect-[16/9] w-full overflow-hidden bg-[#0B2B26] border-b border-[#8EB69B]/20">
          <img
            src={service.image}
            alt={service.headline}
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />

          {/* Banner Tag / Official PDF Headline Badge */}
          <div className="absolute top-3 left-3 flex flex-col gap-0.5 z-10 pointer-events-none">
            <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-[#051F20]/95 backdrop-blur-md border border-[#8EB69B]/50 text-[11px] font-bold tracking-wider text-[#DAF1DE] shadow-md">
              <span className="w-1.5 h-1.5 rounded-full bg-[#8EB69B]" />
              <span>{service.bannerBadgeText}</span>
            </div>
            <span className="text-[11px] text-white font-semibold px-1 drop-shadow-[0_1px_3px_rgba(0,0,0,0.9)] font-bn">
              {service.bannerBadgeSubtextBn}
            </span>
          </div>

          {/* Service Editorial Index */}
          <div className="absolute top-3 right-3 px-2.5 py-0.5 rounded-md bg-[#051F20]/95 backdrop-blur-md border border-[#8EB69B]/40 text-xs font-mono font-bold text-[#8EB69B] shadow-md z-10">
            #{service.number}
          </div>
        </div>

        {/* Content Body */}
        <div className="p-6 space-y-4">
          {/* Official Service Title / Headline */}
          <h3 className="text-xl font-bold text-white tracking-tight leading-snug group-hover:text-[#DAF1DE] transition-colors">
            {lang === 'bn' ? service.titleBn : service.headline}
          </h3>

          {/* Dynamic Overview based on active language */}
          <p className="text-sm text-[#DAF1DE]/80 leading-relaxed line-clamp-3">
            {lang === 'bn' ? service.overviewBn : service.overviewEn}
          </p>

          {/* Quick Deliverable Highlights (Top 2 items) */}
          <div className="pt-2 space-y-1.5 border-t border-[#8EB69B]/15">
            {service.whatsIncluded.slice(0, 2).map((item, idx) => (
              <div key={idx} className="flex items-start gap-2 text-xs text-[#DAF1DE]/70">
                <Check className="w-3.5 h-3.5 text-[#8EB69B] shrink-0 mt-0.5" />
                <span className="truncate">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Card Footer: Starting Price & "View Details & Order" Button */}
      <div className="px-6 pb-6 pt-3 mt-auto border-t border-[#8EB69B]/15 flex items-center justify-between gap-3">
        <div>
          <span className="text-[11px] text-[#DAF1DE]/60 block uppercase tracking-wider">
            {t('Starting at', 'শুরু')}
          </span>
          <span className="text-base font-bold text-white font-mono">
            {firstPackage.priceUsd}{' '}
            <span className="text-xs text-[#8EB69B] font-normal font-bn">
              ({firstPackage.priceBdt})
            </span>
          </span>
        </div>

        <button
          onClick={() => onViewDetails(service)}
          type="button"
          className="flex items-center gap-1.5 px-4 py-2 rounded-lg bg-[#8EB69B] hover:bg-[#DAF1DE] text-[#051F20] font-semibold text-xs transition-all shadow-[0_2px_10px_rgba(142,182,155,0.2)] active:scale-95 whitespace-nowrap"
        >
          <span>{t('View Details & Order', 'বিস্তারিত ও অর্ডার')}</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </button>
      </div>
    </div>
  );
};
