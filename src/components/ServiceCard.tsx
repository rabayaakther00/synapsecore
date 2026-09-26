import React from 'react';
import { ServiceItem } from '../data/servicesData';
import { useLanguage } from '../context/LanguageContext';
import { ArrowRight, Check, Sparkles } from 'lucide-react';

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
      className={`group flex flex-col justify-between rounded-2xl bg-slate-900/75 border border-slate-800/90 hover:border-indigo-500/50 transition-all duration-300 shadow-[0_10px_30px_rgba(2,6,23,0.7)] hover:shadow-[0_15px_40px_rgba(99,102,241,0.2)] backdrop-blur-xl overflow-hidden ${className}`}
    >
      <div>
        {/* Banner Image Container */}
        <div className="relative aspect-[16/9] w-full overflow-hidden bg-slate-950 border-b border-slate-800">
          <img
            src={service.image}
            alt={service.headline}
            referrerPolicy="no-referrer"
            onError={(e) => {
              (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80';
            }}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent pointer-events-none" />

          {/* Banner Tag / Official PDF Headline Badge */}
          <div className="absolute top-3 left-3 flex flex-col gap-1 z-10 pointer-events-none">
            <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-slate-950/90 backdrop-blur-md border border-indigo-500/40 text-[11px] font-bold tracking-wider text-indigo-300 shadow-md">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
              <span>{service.bannerBadgeText}</span>
            </div>
            <span className="text-[11px] text-slate-200 font-semibold px-1 drop-shadow-[0_1px_3px_rgba(0,0,0,0.9)] font-bn">
              {service.bannerBadgeSubtextBn}
            </span>
          </div>

          {/* Service Editorial Index */}
          <div className="absolute top-3 right-3 px-2.5 py-0.5 rounded-lg bg-slate-950/90 backdrop-blur-md border border-slate-700 text-xs font-mono font-bold text-cyan-400 shadow-md z-10">
            #{service.number}
          </div>
        </div>

        {/* Content Body */}
        <div className="p-6 space-y-4">
          {/* Official Service Title / Headline */}
          <h3 className="text-xl font-bold text-white tracking-tight leading-snug group-hover:text-indigo-300 transition-colors">
            {lang === 'bn' ? service.titleBn : service.headline}
          </h3>

          {/* Dynamic Overview based on active language */}
          <p className="text-sm text-slate-300/80 leading-relaxed line-clamp-3">
            {lang === 'bn' ? service.overviewBn : service.overviewEn}
          </p>

          {/* Quick Deliverable Highlights (Top 2 items) */}
          <div className="pt-2 space-y-1.5 border-t border-slate-800/80">
            {service.whatsIncluded.slice(0, 2).map((item, idx) => (
              <div key={idx} className="flex items-start gap-2 text-xs text-slate-300">
                <Check className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                <span className="truncate">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Card Footer: Starting Price & "View Details & Order" Button */}
      <div className="px-6 pb-6 pt-3 mt-auto border-t border-slate-800/80 flex items-center justify-between gap-3 bg-slate-950/40">
        <div>
          <span className="text-[10px] text-slate-400 block uppercase tracking-wider font-mono">
            {t('Starting at', 'শুরু')}
          </span>
          <span className="text-base font-bold text-white font-mono">
            {firstPackage.priceUsd}{' '}
            <span className="text-xs text-cyan-400 font-normal font-bn">
              ({firstPackage.priceBdt})
            </span>
          </span>
        </div>

        <button
          onClick={() => onViewDetails(service)}
          type="button"
          className="flex items-center gap-1.5 px-4 py-2 rounded-xl bg-gradient-to-r from-indigo-500 to-violet-600 hover:from-indigo-600 hover:to-violet-700 text-white font-semibold text-xs transition-all shadow-[0_0_15px_rgba(99,102,241,0.3)] active:scale-95 whitespace-nowrap border border-indigo-400/30"
        >
          <span>{t('View Details & Order', 'বিস্তারিত ও প্যাকেজ')}</span>
          <ArrowRight className="w-3.5 h-3.5 text-cyan-200" />
        </button>
      </div>
    </div>
  );
};

