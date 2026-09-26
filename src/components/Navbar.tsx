import React, { useState, useEffect } from 'react';
import { SynapseLogo } from './SynapseLogo';
import { useLanguage } from '../context/LanguageContext';
import { Menu, X, Globe, ArrowRight } from 'lucide-react';

interface NavbarProps {
  onGetStartedClick?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onGetStartedClick }) => {
  const { lang, toggleLang, t } = useLanguage();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: t('Home', 'হোম'), href: '#hero' },
    { label: t('Services', 'সার্ভিসসমূহ'), href: '#services' },
    { label: t('Why Us', 'কেন আমরা'), href: '#why-us' },
    { label: t('Testimonials', 'রিভিউ'), href: '#testimonials' },
    { label: t('FAQ', 'জিজ্ঞাসা'), href: '#faq' },
    { label: t('Contact Us', 'যোগাযোগ'), href: '#contact' },
  ];

  const handleLinkClick = (href: string) => {
    setMobileMenuOpen(false);
    const targetElement = document.querySelector(href);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleGetStarted = () => {
    setMobileMenuOpen(false);
    if (onGetStartedClick) {
      onGetStartedClick();
    } else {
      const servicesSection = document.getElementById('services');
      if (servicesSection) {
        servicesSection.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#0B132B]/85 backdrop-blur-xl border-b border-indigo-500/20 shadow-[0_4px_30px_rgba(2,6,23,0.8)]'
          : 'bg-[#020617]/70 backdrop-blur-md border-b border-white/5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Zone 1: Single Brand Logo Element */}
          <a
            href="#hero"
            onClick={(e) => {
              e.preventDefault();
              handleLinkClick('#hero');
            }}
            className="flex items-center transition-opacity hover:opacity-90"
            aria-label="SynapseCore Home"
          >
            <SynapseLogo size="md" />
          </a>

          {/* Zone 2: Clean text navigation links */}
          <nav className="hidden lg:flex items-center gap-7">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleLinkClick(link.href);
                }}
                className="text-sm font-medium text-slate-300 hover:text-white transition-colors duration-150 relative py-1 hover:text-indigo-400 whitespace-nowrap"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Zone 3: Language Toggle & CTA Button */}
          <div className="hidden sm:flex items-center gap-4">
            {/* Functional Language Switcher Toggle (BN / EN) */}
            <button
              onClick={toggleLang}
              type="button"
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-slate-700/80 bg-slate-800/60 hover:bg-slate-800 text-xs font-semibold text-slate-200 transition-colors focus-visible:outline-2 focus-visible:outline-indigo-500"
              aria-label="Switch Language"
            >
              <Globe className="w-3.5 h-3.5 text-cyan-400" />
              <span className={lang === 'en' ? 'text-white font-bold' : 'text-slate-400'}>EN</span>
              <span className="text-slate-600">/</span>
              <span className={lang === 'bn' ? 'text-white font-bold' : 'text-slate-400'}>BN</span>
            </button>

            {/* Get Started CTA */}
            <button
              onClick={handleGetStarted}
              type="button"
              className="flex items-center gap-2 px-5 py-2.5 rounded-lg bg-gradient-to-r from-indigo-500 via-indigo-600 to-violet-600 text-white font-semibold text-sm hover:brightness-110 active:scale-95 transition-all shadow-[0_0_20px_rgba(99,102,241,0.4)] whitespace-nowrap border border-indigo-400/30"
            >
              <span>{t('Get Started', 'শুরু করুন')}</span>
              <ArrowRight className="w-4 h-4 text-cyan-200" />
            </button>
          </div>

          {/* Mobile menu trigger */}
          <div className="flex items-center gap-2 sm:hidden">
            <button
              onClick={toggleLang}
              type="button"
              className="p-2 rounded-lg border border-slate-700 bg-slate-800 text-xs font-bold text-slate-200"
            >
              {lang === 'en' ? 'BN' : 'EN'}
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              type="button"
              className="p-2.5 rounded-lg bg-slate-800 text-slate-200 border border-slate-700 hover:text-white"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="sm:hidden bg-[#0F172A] border-b border-indigo-500/20 px-5 pt-3 pb-6 space-y-3">
          <nav className="flex flex-col space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleLinkClick(link.href);
                }}
                className="px-3 py-2 rounded-md text-base font-medium text-slate-200 hover:bg-slate-800 hover:text-white transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>
          <div className="pt-2 border-t border-slate-800 flex flex-col gap-3">
            <button
              onClick={handleGetStarted}
              type="button"
              className="w-full flex items-center justify-center gap-2 py-3 rounded-lg bg-gradient-to-r from-indigo-500 to-violet-600 text-white font-semibold text-sm shadow-[0_0_15px_rgba(99,102,241,0.3)]"
            >
              <span>{t('Get Started', 'শুরু করুন')}</span>
              <ArrowRight className="w-4 h-4 text-cyan-200" />
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
