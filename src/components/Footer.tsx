import React from 'react';
import { SynapseLogo } from './SynapseLogo';
import { siteConfig } from '../data/siteContent';
import { useLanguage } from '../context/LanguageContext';
import { Mail, MessageSquare, Linkedin, ArrowUp } from 'lucide-react';

export const Footer: React.FC = () => {
  const { lang, t } = useLanguage();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#051F20] border-t border-[#8EB69B]/20 pt-16 pb-12 text-[#DAF1DE]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-[#8EB69B]/15">
          {/* Brand & Tagline Column */}
          <div className="lg:col-span-5 space-y-4">
            <SynapseLogo size="md" />
            <p className="text-sm font-semibold text-[#8EB69B]">
              {siteConfig.tagline}
            </p>
            <p className="text-xs text-[#DAF1DE]/70 max-w-sm leading-relaxed">
              {t(
                'SynapseCore is a full-stack B2B service agency specializing in verified performance marketing, lead prospecting, high-converting digital storefronts, and autonomous business workflows.',
                'SynapseCore হলো আধুনিক বি২বি সার্ভিস এজেন্সি যা পারফরম্যান্স মার্কেটিং, ভেরিফায়েড লিড প্রসপেক্টিং, আধুনিক ওয়েবসাইট এবং অটোমেশন নিয়ে কাজ করে।'
              )}
            </p>
          </div>

          {/* Quick Links Column */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">
              {t('Quick Navigation', 'গুরুত্বপূর্ণ লিংক')}
            </h4>
            <ul className="space-y-2 text-xs text-[#DAF1DE]/80">
              <li>
                <a href="#hero" className="hover:text-white transition-colors">
                  {t('Home Overview', 'হোম ওভারভিউ')}
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition-colors">
                  {t('All 8 B2B Services', '৮টি বি২বি সার্ভিস')}
                </a>
              </li>
              <li>
                <a href="#why-us" className="hover:text-white transition-colors">
                  {t('Why Choose SynapseCore', 'কেন আমাদের বেছে নেবেন')}
                </a>
              </li>
              <li>
                <a href="#testimonials" className="hover:text-white transition-colors">
                  {t('Client Testimonials', 'ক্লায়েন্ট রিভিউ')}
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-white transition-colors">
                  {t('Engagement FAQ', 'সাধারণ প্রশ্নোত্তর')}
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-white transition-colors">
                  {t('Contact & Inquiries', 'যোগাযোগ')}
                </a>
              </li>
            </ul>
          </div>

          {/* Official Contact Info & Socials */}
          <div className="lg:col-span-4 space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">
              {t('Official Contact Information', 'অফিসিয়াল যোগাযোগের মাধ্যম')}
            </h4>
            <ul className="space-y-2.5 text-xs text-[#DAF1DE]/80">
              <li className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#8EB69B] shrink-0" />
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="hover:text-white transition-colors font-mono"
                >
                  {siteConfig.email}
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <MessageSquare className="w-4 h-4 text-[#8EB69B] shrink-0" />
                <a
                  href={`https://wa.me/${siteConfig.whatsAppNumber}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors font-mono"
                >
                  WhatsApp: {siteConfig.phone}
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Linkedin className="w-4 h-4 text-[#8EB69B] shrink-0" />
                <a
                  href={siteConfig.linkedInUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  LinkedIn: Abu Sufian Al Rohan
                </a>
              </li>
            </ul>

            <div className="pt-2">
              <span className="text-[11px] text-[#DAF1DE]/60 block mb-2">
                {t('Catalog Version: 2026 Official B2B Release', 'ক্যাটালগ সংস্করণ: ২০২৬ অফিসিয়াল বি২বি রিলিজ')}
              </span>
              <a
                href={`https://wa.me/${siteConfig.whatsAppNumber}?text=${encodeURIComponent('Hello SynapseCore! I would like to order a service from your official catalog.')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[#163832] border border-[#8EB69B]/30 text-xs font-semibold text-[#8EB69B] hover:text-white transition-colors"
              >
                <span>{t('Instant WhatsApp Chat', 'ইনস্ট্যান্ট চ্যাট শুরু করুন')}</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Back to Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#DAF1DE]/60">
          <p>
            © {new Date().getFullYear()} SynapseCore. All rights reserved. Official B2B Service Catalog & Pricing.
          </p>

          <button
            onClick={scrollToTop}
            type="button"
            className="flex items-center gap-1.5 text-xs text-[#8EB69B] hover:text-white transition-colors"
          >
            <span>{t('Back to top', 'উপরে যান')}</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
};
