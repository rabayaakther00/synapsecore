/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { LanguageProvider, useLanguage } from './context/LanguageContext';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ServicesSection } from './components/ServicesSection';
import { PricingCalculator } from './components/PricingCalculator';
import { WhyChooseUs } from './components/WhyChooseUs';
import { Testimonials } from './components/Testimonials';
import { FaqSection } from './components/FaqSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { ServiceDetailModal } from './components/ServiceDetailModal';
import { ServiceItem } from './data/servicesData';
import { siteConfig } from './data/siteContent';
import { MessageSquare } from 'lucide-react';

function MainContent() {
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);
  const { t } = useLanguage();

  const scrollToServices = () => {
    const servicesEl = document.getElementById('services');
    if (servicesEl) {
      servicesEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToContact = () => {
    const contactEl = document.getElementById('contact');
    if (contactEl) {
      contactEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#020617] text-slate-100 flex flex-col selection:bg-indigo-500/30 selection:text-white">
      {/* Top Bar / Navigation */}
      <Navbar onGetStartedClick={scrollToServices} />

      {/* Main Sections */}
      <main className="flex-1">
        {/* 1. Hero Section */}
        <Hero
          onExploreClick={scrollToServices}
          onContactClick={scrollToContact}
        />

        {/* 2. Services Section (Desktop 3-3-2 Grid) */}
        <ServicesSection onSelectService={(service) => setSelectedService(service)} />

        {/* 3. Interactive Pricing & ROI Calculator */}
        <PricingCalculator />

        {/* 4. Why Choose Us Section */}
        <WhyChooseUs />

        {/* 5. Client Testimonials Section */}
        <Testimonials />

        {/* 6. FAQ Accordion Section */}
        <FaqSection />

        {/* 7. Contact Section */}
        <ContactSection />
      </main>

      {/* 8. Footer Section */}
      <Footer />

      {/* Service Detail Modal / Dedicated View */}
      <ServiceDetailModal
        service={selectedService}
        onClose={() => setSelectedService(null)}
      />

      {/* Floating Quick WhatsApp Action Button */}
      <a
        href={`https://wa.me/${siteConfig.whatsAppNumber}?text=${encodeURIComponent('Hello SynapseCore! I am reviewing your official B2B service catalog and would like to consult.')}`}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-40 p-3.5 rounded-full bg-gradient-to-r from-emerald-500 to-teal-600 text-white shadow-[0_6px_25px_rgba(16,185,129,0.45)] hover:scale-110 active:scale-95 transition-all duration-200 flex items-center justify-center group border border-emerald-400/40"
        aria-label="Chat on WhatsApp"
        title="Chat on WhatsApp: 01353762827"
      >
        <MessageSquare className="w-6 h-6 fill-current" />
        <span className="max-w-0 overflow-hidden whitespace-nowrap group-hover:max-w-xs transition-all duration-300 ease-in-out font-bold text-xs pl-0 group-hover:pl-2">
          {t('WhatsApp Us', 'হোয়াটসঅ্যাপ করুন')}
        </span>
      </a>
    </div>
  );
}

export default function App() {
  return (
    <LanguageProvider>
      <MainContent />
    </LanguageProvider>
  );
}
