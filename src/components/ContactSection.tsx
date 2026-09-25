import React, { useState } from 'react';
import { siteConfig } from '../data/siteContent';
import { useLanguage } from '../context/LanguageContext';
import { Mail, MessageSquare, Linkedin, Send, CheckCircle2, ArrowRight } from 'lucide-react';

export const ContactSection: React.FC = () => {
  const { lang, t } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: 'meta-google-ads',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email) return;

    // Build WhatsApp message for direct execution
    const inquiryText = `Hello SynapseCore Team!
New Website Inquiry:
• Name: ${formData.name}
• Email: ${formData.email}
• Requested Service: ${formData.service}
• Details: ${formData.message || 'Please contact me regarding your packages.'}`;

    // Open WhatsApp with inquiry
    const whatsappUrl = `https://wa.me/${siteConfig.whatsAppNumber}?text=${encodeURIComponent(inquiryText)}`;
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');

    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Direct Official Contact Info */}
          <div className="lg:col-span-5 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#163832] border border-[#8EB69B]/30 text-xs font-semibold text-[#8EB69B] uppercase tracking-wider">
              <Mail className="w-3.5 h-3.5" />
              <span>{t('Initiate Partnership', 'যোগাযোগ ও আলোচনা')}</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              {t("Let's Accelerate Your Business Growth", 'আপনার বিজনেসের গ্রোথ শুরু করতে যোগাযোগ করুন')}
            </h2>

            <p className="text-sm sm:text-base text-[#DAF1DE]/80 leading-relaxed">
              {t(
                'Have a tailored requirement, enterprise inquiry, or wish to start immediately? Reach out directly via WhatsApp, email, or LinkedIn.',
                'নির্দিষ্ট কোনো রিকয়ারমেন্ট বা কাস্টম প্রজেক্ট নিয়ে কথা বলতে চান? সরাসরি হোয়াটসঅ্যাপ, ইমেইল অথবা লিঙ্কডইনে আমাদের সাথে যুক্ত হোন।'
              )}
            </p>

            {/* Direct Official Contact Cards */}
            <div className="space-y-3.5 pt-2">
              {/* WhatsApp Card */}
              <a
                href={`https://wa.me/${siteConfig.whatsAppNumber}?text=${encodeURIComponent('Hello SynapseCore! I would like to discuss a project.')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 rounded-xl bg-[#163832] border border-[#8EB69B]/30 hover:border-[#8EB69B] transition-all group"
              >
                <div className="w-11 h-11 rounded-lg bg-[#051F20] text-[#8EB69B] flex items-center justify-center group-hover:scale-105 transition-transform">
                  <MessageSquare className="w-5 h-5 fill-current" />
                </div>
                <div className="flex-1 min-w-0">
                  <span className="text-[11px] font-semibold text-[#8EB69B] uppercase tracking-wider block">
                    {t('WhatsApp (Fastest Response)', 'হোয়াটসঅ্যাপ (দ্রুততম রেসপন্স)')}
                  </span>
                  <p className="text-sm font-bold text-white truncate font-mono">
                    {siteConfig.phone}
                  </p>
                </div>
                <ArrowRight className="w-4 h-4 text-[#8EB69B] opacity-0 group-hover:opacity-100 transition-opacity" />
              </a>

              {/* Email Card */}
              <a
                href={`mailto:${siteConfig.email}`}
                className="flex items-center gap-4 p-4 rounded-xl bg-[#163832] border border-[#8EB69B]/30 hover:border-[#8EB69B] transition-all group"
              >
                <div className="w-11 h-11 rounded-lg bg-[#051F20] text-[#8EB69B] flex items-center justify-center group-hover:scale-105 transition-transform">
                  <Mail className="w-5 h-5" />
                </div>
                <div className="flex-1 min-w-0">
                  <span className="text-[11px] font-semibold text-[#8EB69B] uppercase tracking-wider block">
                    {t('Official Email', 'অফিসিয়াল ইমেইল')}
                  </span>
                  <p className="text-sm font-bold text-white truncate font-mono">
                    {siteConfig.email}
                  </p>
                </div>
                <ArrowRight className="w-4 h-4 text-[#8EB69B] opacity-0 group-hover:opacity-100 transition-opacity" />
              </a>

              {/* LinkedIn Card */}
              <a
                href={siteConfig.linkedInUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 rounded-xl bg-[#163832] border border-[#8EB69B]/30 hover:border-[#8EB69B] transition-all group"
              >
                <div className="w-11 h-11 rounded-lg bg-[#051F20] text-[#8EB69B] flex items-center justify-center group-hover:scale-105 transition-transform">
                  <Linkedin className="w-5 h-5" />
                </div>
                <div className="flex-1 min-w-0">
                  <span className="text-[11px] font-semibold text-[#8EB69B] uppercase tracking-wider block">
                    {t('LinkedIn Leadership Profile', 'লিঙ্কডইন প্রোফাইল')}
                  </span>
                  <p className="text-sm font-bold text-white truncate">
                    Abu Sufian Al Rohan
                  </p>
                </div>
                <ArrowRight className="w-4 h-4 text-[#8EB69B] opacity-0 group-hover:opacity-100 transition-opacity" />
              </a>
            </div>
          </div>

          {/* Right Column: Interactive Quick Inquiry Form */}
          <div className="lg:col-span-7 rounded-2xl bg-[#163832] border border-[#8EB69B]/30 p-6 sm:p-8 shadow-[0_20px_50px_rgba(5,31,32,0.8)]">
            <h3 className="text-xl font-bold text-white mb-2">
              {t('Send a Direct Project Brief', 'প্রজেক্ট সংক্রান্ত তথ্য পাঠান')}
            </h3>
            <p className="text-xs sm:text-sm text-[#DAF1DE]/70 mb-6">
              {t(
                'Submit the form to connect directly via our verified communication channel.',
                'ফর্মটি পূরণ করে সরাসরি আমাদের টিমের সাথে কথা বলুন।'
              )}
            </p>

            {submitted ? (
              <div className="p-6 rounded-xl bg-[#051F20] border border-[#8EB69B]/50 text-center space-y-3">
                <CheckCircle2 className="w-10 h-10 text-[#8EB69B] mx-auto" />
                <h4 className="text-lg font-bold text-white">
                  {t('Inquiry Initiated!', 'তথ্য পাঠানো হয়েছে!')}
                </h4>
                <p className="text-xs sm:text-sm text-[#DAF1DE]/80">
                  {t(
                    'WhatsApp has opened with your inquiry parameters. Our strategist will reply promptly.',
                    'আপনার তথ্যসহ হোয়াটসঅ্যাপ ওপেন হয়েছে। আমাদের টিম খুব দ্রুত উত্তর দেবে।'
                  )}
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  type="button"
                  className="px-4 py-2 rounded-lg bg-[#163832] text-xs font-semibold text-white border border-[#8EB69B]/30 hover:bg-[#163832]/80"
                >
                  {t('Submit Another Inquiry', 'নতুন তথ্য পাঠান')}
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-[#DAF1DE] mb-1.5">
                      {t('Your Name / Company *', 'আপনার নাম / প্রতিষ্ঠান *')}
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder={t('e.g. Arif Rahman', 'যেমন: আরিফ রহমান')}
                      className="w-full px-4 py-2.5 rounded-lg bg-[#051F20] border border-[#8EB69B]/30 text-white placeholder-[#DAF1DE]/40 text-sm focus:outline-none focus:border-[#8EB69B]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-[#DAF1DE] mb-1.5">
                      {t('Business Email Address *', 'বিজনেস ইমেইল অ্যাড্রেস *')}
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="name@company.com"
                      className="w-full px-4 py-2.5 rounded-lg bg-[#051F20] border border-[#8EB69B]/30 text-white placeholder-[#DAF1DE]/40 text-sm focus:outline-none focus:border-[#8EB69B]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#DAF1DE] mb-1.5">
                    {t('Interested B2B Service *', 'আগ্রহী সার্ভিস নির্বাচন করুন *')}
                  </label>
                  <select
                    value={formData.service}
                    onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-lg bg-[#051F20] border border-[#8EB69B]/30 text-white text-sm focus:outline-none focus:border-[#8EB69B]"
                  >
                    <option value="meta-google-ads">1. Meta & Google Paid Ads Campaign</option>
                    <option value="b2b-lead-generation">2. Verified B2B Lead Generation</option>
                    <option value="web-landing-page">3. High-Converting Website Design</option>
                    <option value="video-editing">4. Professional Video Editing</option>
                    <option value="organic-seo">5. Organic Search Engine Optimization (SEO)</option>
                    <option value="workflow-automation">6. Smart No-Code & AI Automation</option>
                    <option value="data-entry-scraping">7. Accurate Data Entry & Scraping</option>
                    <option value="virtual-assistant">8. Dedicated Executive Virtual Assistant</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#DAF1DE] mb-1.5">
                    {t('Project Requirements / Message', 'প্রজেক্ট সম্পর্কে সংক্ষেপে লিখুন')}
                  </label>
                  <textarea
                    rows={3}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder={t(
                      'Describe your target timeline, audience, or questions...',
                      'আপনার রিকয়ারমেন্ট, টার্গেট অডিয়েন্স বা যেকোনো প্রশ্ন...'
                    )}
                    className="w-full px-4 py-2.5 rounded-lg bg-[#051F20] border border-[#8EB69B]/30 text-white placeholder-[#DAF1DE]/40 text-sm focus:outline-none focus:border-[#8EB69B] resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 py-3.5 px-6 rounded-lg bg-[#8EB69B] text-[#051F20] font-bold text-sm uppercase tracking-wider hover:brightness-105 active:scale-[0.99] transition-all shadow-[0_4px_16px_rgba(142,182,155,0.25)]"
                >
                  <Send className="w-4 h-4" />
                  <span>{t('Send Inquiry & Open WhatsApp', 'মেসেজ পাঠান ও হোয়াটসঅ্যাপে যুক্ত হোন')}</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
