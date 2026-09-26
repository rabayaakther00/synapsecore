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
    <footer className="bg-[#020617] border-t border-slate-800/80 pt-16 pb-12 text-slate-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-slate-800/80">
          {/* Brand & Tagline Column */}
          <div className="lg:col-span-5 space-y-4">
            <SynapseLogo size="md" />
            <p className="text-sm font-semibold text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400">
              {siteConfig.tagline}
            </p>
            <p className="text-xs text-slate-400 max-w-sm leading-relaxed">
              {t(
                'SynapseCore is a full-stack B2B service agency specializing in verified performance marketing, lead prospecting, high-converting digital storefronts, and autonomous business workflows.',
                'SynapseCore হলো আধুনিক বি২বি সার্ভিস এজেন্সি যা পারফরম্যান্স মার্কেটিং, ভেরিফায়েড লিড প্রসপেক্টিং, আধুনিক ওয়েবসাইট এবং অটোমেশন নিয়ে কাজ করে।'
              )}
            </p>
          </div>

          {/* Quick Links Column */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider font-mono">
              {t('Quick Navigation', 'গুরুত্বপূর্ণ লিংক')}
            </h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li>
                <a href="#hero" className="hover:text-indigo-400 transition-colors">
                  {t('Home Overview', 'হোম ওভারভিউ')}
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-indigo-400 transition-colors">
                  {t('All 8 B2B Services', '৮টি বি২বি সার্ভিস')}
                </a>
              </li>
              <li>
                <a href="#calculator" className="hover:text-indigo-400 transition-colors">
                  {t('Instant ROI Calculator', 'ক্যালকুলেটর')}
                </a>
              </li>
              <li>
                <a href="#why-us" className="hover:text-indigo-400 transition-colors">
                  {t('Why Choose SynapseCore', 'কেন আমাদের বেছে নেবেন')}
                </a>
              </li>
              <li>
                <a href="#testimonials" className="hover:text-indigo-400 transition-colors">
                  {t('Client Testimonials', 'ক্লায়েন্ট রিভিউ')}
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-indigo-400 transition-colors">
                  {t('Engagement FAQ', 'সাধারণ প্রশ্নোত্তর')}
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-indigo-400 transition-colors">
                  {t('Contact & Inquiries', 'যোগাযোগ')}
                </a>
              </li>
            </ul>
          </div>

          {/* Official Contact Info & Socials */}
          <div className="lg:col-span-4 space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider font-mono">
              {t('Official Contact Information', 'অফিসিয়াল যোগাযোগের মাধ্যম')}
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-400">
              <li className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-indigo-400 shrink-0" />
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="hover:text-white transition-colors font-mono"
                >
                  {siteConfig.email}
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <MessageSquare className="w-4 h-4 text-emerald-400 shrink-0" />
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
                <Linkedin className="w-4 h-4 text-cyan-400 shrink-0" />
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
              <span className="text-[11px] text-slate-500 block mb-2 font-mono">
                {t('Catalog Version: 2026 Official B2B Release', 'ক্যাটালগ সংস্করণ: ২০২৬ অফিসিয়াল বি২বি রিলিজ')}
              </span>
              <a
                href={`https://wa.me/${siteConfig.whatsAppNumber}?text=${encodeURIComponent('Hello SynapseCore! I would like to order a service from your official catalog.')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-slate-900 border border-indigo-500/30 text-xs font-semibold text-indigo-300 hover:text-white hover:border-indigo-500 transition-colors shadow-sm"
              >
                <span>{t('Instant WhatsApp Chat', 'ইনস্ট্যান্ট চ্যাট শুরু করুন')}</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Back to Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>
            © {new Date().getFullYear()} SynapseCore. All rights reserved. Official B2B Service Catalog & Pricing.
          </p>

          <button
            onClick={scrollToTop}
            type="button"
            className="flex items-center gap-1.5 text-xs text-cyan-400 hover:text-cyan-300 transition-colors font-mono"
          >
            <span>{t('Back to top', 'উপরে যান')}</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
};
