export interface PackageItem {
  id: string;
  name: string;
  nameBn?: string;
  priceUsd: string;
  priceBdt: string;
  deliveryTime?: string;
  deliveryTimeBn?: string;
  description?: string;
  popular?: boolean;
}

export interface ServiceItem {
  id: string;
  number: string;
  title: string;
  titleBn: string;
  headline: string;
  bannerBadgeText: string;
  bannerBadgeSubtextBn: string;
  overviewBn: string;
  overviewEn: string;
  image: string;
  whatsIncluded: string[];
  packages: PackageItem[];
  faqs: {
    question: string;
    questionBn: string;
    answer: string;
    answerBn: string;
  }[];
}

export const servicesData: ServiceItem[] = [
  {
    id: "meta-google-ads",
    number: "01",
    title: "Meta (Facebook/Instagram) & Google Paid Ads Campaign Service",
    titleBn: "মেটা (ফেসবুক/ইনস্টাগ্রাম) ও গুগল পেইড অ্যাডস ক্যাম্পেইন সার্ভিস",
    headline: "Meta (Facebook & Instagram) and Google Paid Ads Management Service",
    bannerBadgeText: "HIGH-ROI PAID ADS",
    bannerBadgeSubtextBn: "সেলস ও বিজনেস গ্রোথ",
    overviewBn: "আমরা শুধু ফেসবুক ও গুগলে প্রমোশনাল পোস্ট বা অ্যাড রান করি না, বরং সঠিক অডিয়েন্স ট্র্যাকিং এবং অ্যাডভান্সড পিক্সেল সেটআপের মাধ্যমে আপনার সার্ভিসের প্রকৃত কাস্টমার খুঁজে বের করি। সঠিক ডাটা বিশ্লেষণ ও রিটার্গেটিং ফানেল ব্যবহার করে আমরা কম খরচে আপনার বিজনেসের সেলস ও রেভিনিউ সর্বোচ্চ নিশ্চিত করি।",
    overviewEn: "We don't just run basic ads on Facebook and Google; we identify your ideal buyers through precise tracking and advanced Meta Pixel setup. By leveraging data-driven remarketing funnels, we maximize your sales and revenue while keeping your ad acquisition costs as low as possible.",
    image: "/src/assets/images/service_paid_ads_1790349113064.jpg",
    whatsIncluded: [
      "Comprehensive Audience & Competitor Funnel Research",
      "Complete Meta Pixel, CAPI (Conversion API) & Google Tag Manager Setup",
      "High-Converting Ad Copywriting & Custom Visual Graphic Design",
      "A/B Split Testing for Ad Creatives & Custom Retargeting Funnel",
      "Clear Weekly Performance Audit & Analytics ROI Report"
    ],
    packages: [
      {
        id: "ads-starter",
        name: "Starter Package (10 Days)",
        nameBn: "স্টার্টার প্যাকেজ (১০ দিন)",
        priceUsd: "$60",
        priceBdt: "৳৭,০০০",
        deliveryTime: "10 Days Management",
        deliveryTimeBn: "১০ দিন ম্যানেজমেন্ট",
        description: "1 Core Campaign Setup + Pixel Tracking + Initial Optimization"
      },
      {
        id: "ads-growth",
        name: "Growth Package (30 Days)",
        nameBn: "গ্রোথ প্যাকেজ (৩০ দিন)",
        priceUsd: "$150",
        priceBdt: "৳১৮,০০০",
        deliveryTime: "30 Days Management",
        deliveryTimeBn: "৩০ দিন ম্যানেজমেন্ট",
        description: "Multi-Campaign Setup + Retargeting Funnel + Weekly Optimization",
        popular: true
      },
      {
        id: "ads-enterprise",
        name: "Enterprise Package (Monthly Retainer)",
        nameBn: "এন্টারপ্রাইজ প্যাকেজ (মাসিক রিটেইনার)",
        priceUsd: "$300",
        priceBdt: "৳৩৫,০০০",
        deliveryTime: "Monthly Retainer",
        deliveryTimeBn: "মাসিক রিটেইনার",
        description: "Full Ads Strategy + Dynamic Scaling + Daily Ad Management"
      }
    ],
    faqs: [
      {
        question: "What advertising budget is required to get started?",
        questionBn: "শুরু করার জন্য কী পরিমাণ বিজ্ঞাপন বাজেট প্রয়োজন?",
        answer: "We recommend a minimum ad spend of $10 to $20/day paid directly to Meta or Google. Our service fee covers end-to-end strategy, creative copywriting, pixel setup, and conversion optimization.",
        answerBn: "আমরা মেটা বা গুগলকে সরাসরি প্রতিদিন কমপক্ষে ১০ থেকে ২০ ডলার বাজেট দেওয়ার পরামর্শ দিই। আমাদের সার্ভিস ফি সম্পূর্ণ স্ট্র্যাটেজি, কপিরাইটিং, পিক্সেল সেটআপ এবং অপটিমাইজেশন পরিচালনা করে।"
      },
      {
        question: "How do you guarantee a high return on ad spend (ROAS)?",
        questionBn: "আপনারা কীভাবে উচ্চ রিটার্ন অন অ্যাড স্পেন্ড (ROAS) নিশ্চিত করেন?",
        answer: "We ensure high performance by deploying server-side Conversion API (CAPI), audience exclusion filters, custom lookalike audiences, and continuous A/B creative testing.",
        answerBn: "আমরা সার্ভার-সাইড কনভার্সন এপিআই (CAPI), এক্সক্লুসিভ অডিয়েন্স ফিল্টার, লুকঅ্যালাইক অডিয়েন্স এবং ধারাবাহিক A/B টেস্টিংয়ের মাধ্যমে সর্বোচ্চ ROAS নিশ্চিত করি।"
      },
      {
        question: "Will I have full access to campaign analytics?",
        questionBn: "আমি কি ক্যাম্পেইন অ্যানালিটিক্স দেখতে পারব?",
        answer: "Yes, you retain 100% administrative ownership of your Ad Accounts. We provide transparent weekly audit reports highlighting cost-per-acquisition (CPA) and ROAS.",
        answerBn: "হ্যাঁ, আপনার অ্যাড অ্যাকাউন্টের সম্পূর্ণ মালিকানা আপনার থাকবে। আমরা প্রতি সপ্তাহে স্বচ্ছ অডিট রিপোর্ট প্রদান করি।"
      }
    ]
  },
  {
    id: "b2b-lead-generation",
    number: "02",
    title: "Verified B2B Lead Generation & Decision Maker Prospecting Service",
    titleBn: "ভেরিফায়েড বি২বি লিড জেনারেশন ও ডিসিশন মেকার প্রসপেক্টিং সার্ভিস",
    headline: "Verified B2B Lead Generation & Decision Maker Prospecting Service",
    bannerBadgeText: "VERIFIED B2B LEADS",
    bannerBadgeSubtextBn: "টার্গেটেড ক্লায়েন্ট লিস্ট",
    overviewBn: "ভুল বা নিষ্ক্রিয় ইমেইল অ্যাড্রেসে কোল্ড আউটরিচ করে সময় নষ্ট না করে সরাসরি সঠিক সম্ভাব্য ক্লায়েন্টের কাছে পৌঁছান। আমরা ফিল্টার করে আপনার কাঙ্ক্ষিত ইন্ডাস্ট্রির সিদ্ধান্তগ্রহণকারীদের (CEO, Founder, Director) সম্পূর্ণ যাচাইকৃত এবং জিরো-বাউন্স ইমেইল লিস্ট এনে দিই।",
    overviewEn: "Stop wasting time reaching out to inactive contacts or wrong audiences. We gather and deliver 100% verified, high-intent B2B contact lists of key decision-makers (CEOs, Founders, Directors) tailored specifically to your target industry.",
    image: "/src/assets/images/service_lead_gen_1790349134253.jpg",
    whatsIncluded: [
      "Targeted Lead Prospecting via LinkedIn Sales Navigator & Premium Tools",
      "Direct Emails & LinkedIn Profile Links of Business Decision Makers",
      "Email Verification via NeverBounce / ZeroBounce (Zero-Bounce Guarantee)",
      "Well-Organized Excel/Google Sheet with Company Revenue, Size & Location"
    ],
    packages: [
      {
        id: "lead-starter",
        name: "Starter Pack (200 Verified Leads)",
        nameBn: "স্টার্টার প্যাক (২০০ ভেরিফায়েড লিডস)",
        priceUsd: "$40",
        priceBdt: "৳৫,০০০",
        deliveryTime: "3 Days Delivery",
        deliveryTimeBn: "৩ দিনে ডেলিভারি",
        description: "200 Verified Decision Maker Leads with Zero-Bounce Guarantee"
      },
      {
        id: "lead-pro",
        name: "Pro Pack (500 Verified Leads)",
        nameBn: "প্রো প্যাক (৫০০ ভেরিফায়েড লিডস)",
        priceUsd: "$90",
        priceBdt: "৳১১,০০০",
        deliveryTime: "5 Days Delivery",
        deliveryTimeBn: "৫ দিনে ডেলিভারি",
        description: "500 High-Intent Verified Leads with Full Company Firmographics",
        popular: true
      },
      {
        id: "lead-enterprise",
        name: "Enterprise Pack (1,200 Verified Leads)",
        nameBn: "এন্টারপ্রাইজ প্যাক (১,২০০ ভেরিফায়েড লিডস)",
        priceUsd: "$190",
        priceBdt: "৳২৩,০০০",
        deliveryTime: "10 Days Delivery",
        deliveryTimeBn: "১০ দিনে ডেলিভারি",
        description: "1,200 Precision-Targeted Enterprise Decision Maker Contacts"
      }
    ],
    faqs: [
      {
        question: "How do you guarantee a zero bounce rate?",
        questionBn: "জিরো বাউন্স রেট কীভাবে নিশ্চিত করেন?",
        answer: "Every single email undergoes dual verification through NeverBounce and ZeroBounce before dispatch. If any contact bounces, we replace it instantly at zero cost.",
        answerBn: "ডেলিভারির পূর্বে প্রতিটি ইমেইল NeverBounce ও ZeroBounce দিয়ে যাচাই করা হয়। কোনো ইমেইল বাউন্স করলে আমরা বিনামূল্যে রিপ্লেসমেন্ট দিই।"
      },
      {
        question: "What specific contact fields are included in the delivery sheet?",
        questionBn: "ডেলিভারি ফাইলে কী কী তথ্য অন্তর্ভুক্ত থাকে?",
        answer: "First Name, Last Name, Verified Business Email, Job Title, LinkedIn Profile URL, Company Name, Website, Employee Headcount, Annual Revenue, and Physical Location.",
        answerBn: "নাম, ভেরিফায়েড বিজনেস ইমেইল, পদবী (Job Title), লিঙ্কডইন প্রোফাইল, কোম্পানির নাম, ওয়েবসাইট, কর্মী সংখ্যা এবং লোকেশন।"
      }
    ]
  },
  {
    id: "web-landing-page",
    number: "03",
    title: "Custom High-Converting Website & Landing Page Design Service",
    titleBn: "কাস্টম হাই-কনভার্টিং ওয়েবসাইট ও ল্যান্ডিং পেজ ডিজাইন সার্ভিস",
    headline: "Custom High-Converting Website & Landing Page Design Service",
    bannerBadgeText: "HIGH-CONVERTING WEBSITES",
    bannerBadgeSubtextBn: "স্পিড ও আধুনিক ডিজাইন",
    overviewBn: "একটি ধীরগতির বা পুরনো লেআউটের ওয়েবসাইট আপনার সম্ভাব্য কাস্টমারদের দূরে ঠেলে দেয়। আমরা নিয়ে আসি দৃষ্টিনন্দন UI/UX, দ্রুত লোডিং স্পিড এবং সম্পূর্ণ মোবাইল-রেসপন্সিভ ওয়েবসাইট design, যা ভিজিটরদের দ্রুত কাস্টমারে রূপান্তর করতে সাহায্য করে।",
    overviewEn: "A slow or outdated website discourages potential customers. We build modern, lightning-fast, and fully mobile-responsive websites with conversion-focused UI/UX that turn ordinary traffic into paying clients.",
    image: "/src/assets/images/service_web_design_1790349148216.jpg",
    whatsIncluded: [
      "Custom Modern UI/UX Layout with Mobile-First Responsive Design",
      "Seamless Payment Gateway, Contact Forms & CRM Integration",
      "Speed Optimization, Clean Code & Basic Security Setup",
      "Basic On-Page SEO Setup & Domain/Hosting Support"
    ],
    packages: [
      {
        id: "web-landing",
        name: "Single High-Converting Landing Page",
        nameBn: "সিঙ্গেল হাই-কনভার্টিং ল্যান্ডিং পেজ",
        priceUsd: "$100",
        priceBdt: "৳১২,০০০",
        deliveryTime: "5 Days Delivery",
        deliveryTimeBn: "৫ দিনে ডেলিভারি",
        description: "1 Custom High-Converting Conversion Landing Page with Lead Capture"
      },
      {
        id: "web-business",
        name: "Full Business Website (5-6 Pages)",
        nameBn: "ফুল বিজনেস ওয়েবসাইট (৫-৬ পেজ)",
        priceUsd: "$250",
        priceBdt: "৳৩০,০০০",
        deliveryTime: "10 Days Delivery",
        deliveryTimeBn: "১০ দিনে ডেলিভারি",
        description: "Complete 5-6 Page Corporate Website with Forms, CMS & SEO",
        popular: true
      },
      {
        id: "web-ecommerce",
        name: "E-Commerce Portal",
        nameBn: "ই-কমার্স পোর্টাল",
        priceUsd: "$450",
        priceBdt: "৳৫৫,০০০",
        deliveryTime: "15 Days Delivery",
        deliveryTimeBn: "১৫ দিনে ডেলিভারি",
        description: "Full-Featured Online Store with Cart, Payment Gateway & Inventory"
      }
    ],
    faqs: [
      {
        question: "Is the design responsive on all screen sizes?",
        questionBn: "ওয়েবসাইট কি সব ডিভাইসে সুন্দরভাবে চলবে?",
        answer: "Yes, every website is engineered mobile-first and tested rigorously across smartphones, tablets, laptops, and ultra-wide desktop monitors.",
        answerBn: "হ্যাঁ, প্রতিটি সাইট মোবাইল-ফার্স্ট আর্কিটেকচারে তৈরি এবং স্মার্টফোন থেকে ডেক্সটপ পর্যন্ত সব স্ক্রিন সাইজে সম্পূর্ণ রেসপনসিভ।"
      },
      {
        question: "Do you integrate payment gateways and lead forms?",
        questionBn: "পেমেন্ট গেটওয়ে এবং লিড ফর্ম কি যুক্ত করা থাকবে?",
        answer: "Yes, we integrate Stripe, PayPal, bKash, Nagad, SSLCommerz, and direct CRM form sync based on your business locale.",
        answerBn: "হ্যাঁ, আমরা আপনার পছন্দমতো পেমেন্ট গেটওয়ে এবং অটোমেটেড লিড ফর্ম ইন্টিগ্রেট করে দিই।"
      }
    ]
  },
  {
    id: "video-editing",
    number: "04",
    title: "Short & Long-Form Professional Video Editing Service",
    titleBn: "শর্ট ও লং-ফর্ম প্রফেশনাল ভিডিও এডিটিং সার্ভিস",
    headline: "Short-Form Reels/Shorts & Long-Form YouTube Video Editing Service",
    bannerBadgeText: "HIGH-ENGAGEMENT EDITING",
    bannerBadgeSubtextBn: "ট্রেন্ডি রিলস ও ইউটিউব কনটেন্ট",
    overviewBn: "সামাজিক যোগাযোগ মাধ্যমে দর্শকের নজর ধরে রাখা অন্যতম বড় চ্যালেঞ্জ। ট্রেন্ডি এডিটিং, এনিমেশন, আকর্ষণীয় সাবটাইটেল এবং ক্লিয়ার সাউন্ড ইফেক্টসের মাধ্যমে আমরা আপনার ভিডিও কনটেন্টকে প্রফেশনাল ও ভাইরাল-রেডি করে তুলি।",
    overviewEn: "Capturing viewer attention on social media requires high-level video editing. Through trendy transitions, sound effects, motion graphics, and clean subtitles, we transform your raw footage into engaging, viral-ready content.",
    image: "/src/assets/images/service_video_editing_1790349165616.jpg",
    whatsIncluded: [
      "Dynamic Vertical Editing for Reels, TikToks & YouTube Shorts",
      "Custom On-Screen Subtitles, Motion Graphics & Sound Effects",
      "YouTube Long-Form Content Editing & Click-Worthy Thumbnail Creation",
      "Background Noise Cleaning & Voiceover Audio Mastering"
    ],
    packages: [
      {
        id: "video-shorts-starter",
        name: "Shorts/Reels Starter Pack (5 Short Videos)",
        nameBn: "শর্টস/রিলস স্টার্টার প্যাক (৫টি ভিডিও)",
        priceUsd: "$45",
        priceBdt: "৳৫,৫০০",
        deliveryTime: "3 Days Delivery",
        deliveryTimeBn: "৩ দিনে ডেলিভারি",
        description: "5 High-Retention Vertical Videos with Animated Captions & SFX"
      },
      {
        id: "video-shorts-growth",
        name: "Shorts Growth Pack (15 Short Videos)",
        nameBn: "শর্টস গ্রোথ প্যাক (১৫টি ভিডিও)",
        priceUsd: "$120",
        priceBdt: "৳১৪,০০০",
        deliveryTime: "8 Days Delivery",
        deliveryTimeBn: "৮ দিনে ডেলিভারি",
        description: "15 Viral Vertical Clips with B-Roll, Motion Graphics & Sound Design",
        popular: true
      },
      {
        id: "video-youtube",
        name: "YouTube Long-Form Video (Per Video)",
        nameBn: "ইউটিউব লং-ফর্ম ভিডিও (প্রতি ভিডিও)",
        priceUsd: "$35 - $60",
        priceBdt: "৳৪,০০০ - ৳৭,০০০",
        deliveryTime: "Up to 15 Min Length",
        deliveryTimeBn: "১৫ মিনিট পর্যন্ত",
        description: "Full YouTube Edit + Audio Mastering + Click-Worthy 3D/HD Thumbnail"
      }
    ],
    faqs: [
      {
        question: "How do I share my raw footage?",
        questionBn: "কাঁচা ফুটেজ কীভাবে পাঠাব?",
        answer: "You can share files conveniently via Google Drive, Dropbox, WeTransfer, or OneDrive folders.",
        answerBn: "গুগল ড্রাইভ, ড্রপবক্স অথবা উইট্রান্সফারের মাধ্যমে সহজেই আপনার ফুটেজ আপলোড করে লিংক শেয়ার করতে পারবেন।"
      },
      {
        question: "Are revisions included?",
        questionBn: "রিভিশন বা সংশোধন কি অন্তর্ভুক্ত?",
        answer: "Yes, each video package includes up to 2 rounds of free revisions to ensure 100% satisfaction.",
        answerBn: "হ্যাঁ, সম্পূর্ণ সন্তুষ্টি নিশ্চিত করতে প্রতিটি প্যাকেজের সাথে ২ বার ফ্রি রিভিশন সুবিধা রয়েছে।"
      }
    ]
  },
  {
    id: "organic-seo",
    number: "05",
    title: "Organic Search Engine Optimization (SEO) & Traffic Growth Service",
    titleBn: "অর্গানিক সার্চ ইঞ্জিন অপটিমাইজেশন (SEO) ও ট্রাফিক গ্রোথ সার্ভিস",
    headline: "Organic Search Engine Optimization (SEO) & Website Traffic Growth Service",
    bannerBadgeText: "ORGANIC SEO RANKING",
    bannerBadgeSubtextBn: "ফ্রিতে অর্গানিক ট্রাফিক",
    overviewBn: "বিজ্ঞাপনের বাজেট শেষ হয়ে গেলে পেইড কাস্টমার আসাও বন্ধ হয়ে যায়। কিন্তু আমাদের লং-টার্ম অর্গানিক এসইও স্ট্র্যাটেজির মাধ্যমে গুগল সার্চের শীর্ষ স্থানে র‍্যাঙ্ক করে আপনি কোনো বাড়তি বিজ্ঞাপন খরচ ছাড়াই প্রতিদিন ফ্রি কাস্টমার ও ট্রাফিক পাবেন।",
    overviewEn: "Paid traffic stops the moment you stop paying for ads. Our long-term SEO strategy ranks your website at the top of Google search results, securing steady, high-intent organic traffic for your business organically.",
    image: "/src/assets/images/service_seo_traffic_1790349181575.jpg",
    whatsIncluded: [
      "In-Depth Technical, Speed & On-Page SEO Audit",
      "High-Intent Buyer Keyword Research & Content Architecture",
      "High-Authority Backlink Building Strategy (Off-Page SEO)",
      "Google Search Console & Google Analytics 4 Setup and Monitoring"
    ],
    packages: [
      {
        id: "seo-audit",
        name: "SEO Audit & On-Page Fixes (One-Time)",
        nameBn: "এসইও অডিট ও অন-পেজ ফিক্সেস (এককালীন)",
        priceUsd: "$100",
        priceBdt: "৳১২,০০০",
        deliveryTime: "7 Days Delivery",
        deliveryTimeBn: "৭ দিনে ডেলিভারি",
        description: "Full Technical Health Audit + Title, Meta, Schema & PageSpeed Optimization"
      },
      {
        id: "seo-monthly",
        name: "Monthly Organic Growth Retainer",
        nameBn: "মান্থলি অর্গানিক গ্রোথ রিটেইনার",
        priceUsd: "$200 / Month",
        priceBdt: "৳২৪,০০০ / মাস",
        deliveryTime: "Min. 3 Months Retainer",
        deliveryTimeBn: "নূন্যতম ৩ মাসের রিটেইনার",
        description: "Continuous Keyword Optimization + Authority Backlinks + Ranking Reports",
        popular: true
      }
    ],
    faqs: [
      {
        question: "When will I see Google ranking improvements?",
        questionBn: "গুগল র‍্যাঙ্কিংয়ে উন্নতি দেখতে কত সময় লাগবে?",
        answer: "Technical crawl and indexing fixes reflect in 2 to 4 weeks. High-intent keyword ranking and organic traffic momentum typically mature within 60 to 90 days.",
        answerBn: "টেকনিক্যাল ত্রুটি দূর করার ফল ২ থেকে ৪ সপ্তাহের মধ্যে দেখা যায়। প্রতিযোগিতাপূর্ণ কিওয়ার্ডে র‍্যাঙ্ক করতে সাধারণত ৬০ থেকে ৯০ দিন সময় লাগে।"
      },
      {
        question: "Do you follow 100% white-hat SEO techniques?",
        questionBn: "আপনারা কি ১০০% হোয়াইট-হ্যাট এসইও মেনে চলেন?",
        answer: "Absolutely. We strictly abide by Google Search Essentials guidelines, utilizing organic outreach and manual editorial backlinks.",
        answerBn: "হ্যাঁ, আমরা গুগলের অফিসিয়াল গাইডলাইন মেনে ১০০% অর্গানিক এবং নিরাপদ হোয়াইট-হ্যাট পদ্ধতিতে কাজ করি।"
      }
    ]
  },
  {
    id: "workflow-automation",
    number: "06",
    title: "Smart Business No-Code & AI Workflow Automation Service",
    titleBn: "স্মার্ট বিজনেস নো-কোড ও এআই ওয়ার্কফ্লো অটোমেশন সার্ভিস",
    headline: "Smart Business No-Code & AI Workflow Automation Service",
    bannerBadgeText: "NO-CODE AUTOMATION",
    bannerBadgeSubtextBn: "সময় বাঁচান, অটোমেট করুন",
    overviewBn: "ম্যানুয়াল এবং বারবার করা কাজগুলোতে সময় নষ্ট না করে আপনার ব্যবসাকে অটোমেটিক সিস্টেমে নিয়ে আসুন। নো-কোড টুলস ব্যবহার করে আমরা আপনার লিড ফর্ম, হোয়াটসঅ্যাপ, সিআরএম এবং ইমেইল সিস্টেমকে এমনভাবে যুক্ত করে দিই যাতে ব্যাকএন্ডের কাজগুলো স্বয়ংক্রিয়ভাবে সম্পন্ন হয়।",
    overviewEn: "Eliminate manual, repetitive operational tasks and place your business on autopilot. Using advanced no-code tools, we seamlessly connect your lead forms, WhatsApp, CRM, and email software to run back-end processes automatically.",
    image: "/src/assets/images/service_no_code_automation_1790349198465.jpg",
    whatsIncluded: [
      "Multi-Step Automated Workflows via Zapier / Make / n8n",
      "Instant Lead Notifications to WhatsApp, Telegram & CRM Systems",
      "Facebook Messenger & Web AI Chatbot Integration",
      "Automated Client Email Series & Invoice Generation Systems"
    ],
    packages: [
      {
        id: "auto-single",
        name: "Single Workflow Setup",
        nameBn: "সিঙ্গেল ওয়ার্কফ্লো সেটআপ",
        priceUsd: "$45",
        priceBdt: "৳৫,৫০০",
        deliveryTime: "2 Days Delivery",
        deliveryTimeBn: "২ দিনে ডেলিভারি",
        description: "Connect 2 Apps (e.g. Lead Form to Instant WhatsApp/Email Notification)"
      },
      {
        id: "auto-advanced",
        name: "Advanced Business Multi-App Automation",
        nameBn: "অ্যাডভান্সড বিজনেস মাল্টি-অ্যাপ অটোমেশন",
        priceUsd: "$130",
        priceBdt: "৳১৫,৫০০",
        deliveryTime: "7 Days Delivery",
        deliveryTimeBn: "৭ দিনে ডেলিভারি",
        description: "Multi-Platform Integration: CRM + WhatsApp Bot + Invoicing + Webhooks",
        popular: true
      }
    ],
    faqs: [
      {
        question: "Which automation platforms do you work with?",
        questionBn: "কোন কোন অটোমেশন প্ল্যাটফর্মে কাজ করেন?",
        answer: "We build on Zapier, Make.com, n8n, Airtable, HubSpot, ActiveCampaign, Notion, Google Workspace, and custom REST API webhooks.",
        answerBn: "আমরা Zapier, Make.com, n8n, Airtable, HubSpot, Google Workspace এবং কাস্টম ওয়েবহুক ব্যবহার করে কাজ করি।"
      },
      {
        question: "Can leads receive automated WhatsApp confirmation messages?",
        questionBn: "লিড আসার সাথে সাথে কি হোয়াটসঅ্যাপে মেসেজ পাঠানো সম্ভব?",
        answer: "Yes, whenever a visitor fills out a contact form or lands on your ad, an automated personalized WhatsApp message and team notification fire instantly.",
        answerBn: "হ্যাঁ, যেকোনো ফর্ম পূরণের সাথে সাথে স্বয়ংক্রিয়ভাবে কাস্টমারকে হোয়াটসঅ্যাপ নিশ্চিতকরণ বার্তা এবং আপনার টিমকে অ্যালার্ট পাঠানো হবে।"
      }
    ]
  },
  {
    id: "data-entry-scraping",
    number: "07",
    title: "Accurate Data Entry, Spreadsheet Cleaning & Web Scraping Service",
    titleBn: "অ্যাকিউরেট ডাটা এন্ট্রি, স্প্রেডশীট ক্লিনিং ও ওয়েব স্ক্র্যাপিং সার্ভিস",
    headline: "Accurate Data Entry, Spreadsheet Cleaning & Web Scraping Service",
    bannerBadgeText: "ACCURATE DATA PROCESSING",
    bannerBadgeSubtextBn: "নির্ভুল ও গুছানো ডাটা",
    overviewBn: "অগোছালো ডাটা বা ভুল স্প্রেডশীট আপনার ব্যবসার সঠিক সিদ্ধান্ত নেওয়ার সময় নষ্ট করে। আমরা ১০০% নিখুঁতভাবে আপনার ডাটা প্রসেস করে, স্প্রেডশীট ক্লিন করে এবং ই-কমার্স প্রোডাক্টের ক্যাটালগ সুন্দরভাবে সাজিয়ে দিই।",
    overviewEn: "Disorganized spreadsheets and errors in data slow down your business operations. We offer highly accurate data entry, spreadsheet formatting, product listing management, and automated web scraping services.",
    image: "/src/assets/images/service_data_processing_1790349214060.jpg",
    whatsIncluded: [
      "Advanced Excel & Google Sheets Cleaning, Formatting & Formulas",
      "E-Commerce Product Listing, SKU Organization & Meta Tagging",
      "Automated Web Scraping & CRM Database Entry Management"
    ],
    packages: [
      {
        id: "data-hourly",
        name: "Hourly Pay-as-You-Go",
        nameBn: "আওয়ারলি পে-অ্যাজ-ইউ-গো",
        priceUsd: "$6 / Hour",
        priceBdt: "৳৭৫০ / ঘণ্টা",
        deliveryTime: "Flexible Hourly",
        deliveryTimeBn: "নমনীয় ঘণ্টার ভিত্তিতে",
        description: "Ad-hoc Data Cleaning, Product Entry & Web Research Tasks"
      },
      {
        id: "data-project",
        name: "Project Basis (1,000 Cleaned Entries)",
        nameBn: "প্রজেক্ট বেসিস (১,০০০ ক্লিনড এন্ট্রি)",
        priceUsd: "$30",
        priceBdt: "৳৩,৫০০",
        deliveryTime: "3 Days Delivery",
        deliveryTimeBn: "৩ দিনে ডেলিভারি",
        description: "1,000 Standardized, Deduplicated & Verified Records in Clean Excel/CSV",
        popular: true
      }
    ],
    faqs: [
      {
        question: "How do you ensure zero errors in data entry?",
        questionBn: "ডাটা এন্ট্রিতে নির্ভুলতা কীভাবে নিশ্চিত করেন?",
        answer: "We implement a dual-stage quality audit: automated validation scripts for duplicates/formatting combined with manual spot-checking.",
        answerBn: "আমরা ডাবল-লেয়ার কোয়ালিটি চেক ব্যবহার করি: অটোমেটেড স্ক্রিপ্ট এবং ম্যানুয়াল ক্রস-চেকিংয়ের মাধ্যমে ১০০% নির্ভুলতা নিশ্চিত করা হয়।"
      },
      {
        question: "Can you scrape directories or e-commerce stores into spreadsheets?",
        questionBn: "ডিরেক্টরি বা অনলাইন স্টোর থেকে ডাটা সংগ্রহ করে সাজিয়ে দিতে পারবেন?",
        answer: "Yes, we extract publicly accessible product listings, pricing details, and directory listings with full compliance into neatly organized Google Sheets or Excel.",
        answerBn: "হ্যাঁ, পাবলিক ডিরেক্টরি বা ই-কমার্স প্রোডাক্ট ডাটা দ্রুত সংগ্রহ করে সুশৃঙ্খল স্প্রেডশীটে প্রস্তুত করে দিই।"
      }
    ]
  },
  {
    id: "virtual-assistant",
    number: "08",
    title: "Dedicated Executive Virtual Assistant (VA) & Administrative Support Service",
    titleBn: "ডেডিকেটেড এক্সিকিউটিভ ভার্চুয়াল অ্যাসিস্ট্যান্ট (VA) ও এডমিন সাপোর্ট সার্ভিস",
    headline: "Dedicated Executive Virtual Assistant (VA) & Administrative Support Service",
    bannerBadgeText: "DEDICATED VIRTUAL ASSISTANT",
    bannerBadgeSubtextBn: "২৪/৭ এডমিন ও ক্লায়েন্ট সাপোর্ট",
    overviewBn: "ব্যবসাকে বড় করার মূল কাজে মনোযোগ দিতে প্রতিদিনের ছোটখাটো অ্যাডমিন কাজগুলো আমাদের দক্ষ ভার্চুয়াল অ্যাসিস্ট্যান্টদের হাতে ছেড়ে দিন। ইমেইল হ্যান্ডেল করা, মিটিং শিডিউল এবং কাস্টমার সাপোর্ট সামলাবে আমাদের টিম।",
    overviewEn: "Focus on high-level business growth while our skilled virtual assistants handle your daily administrative workload, calendar scheduling, inbox organization, and live customer communications.",
    image: "/src/assets/images/service_virtual_assistant_1790349231794.jpg",
    whatsIncluded: [
      "Executive Email Management & Inbox Zero Maintenance",
      "Calendar Scheduling, Appointment & Event Management",
      "Customer Chat, Inquiry & Social Media DM Support",
      "Routine Administrative & Operational Task Execution"
    ],
    packages: [
      {
        id: "va-parttime",
        name: "Part-Time VA (20 Hours / Week)",
        nameBn: "পার্ট-টাইম ভিএ (২০ ঘণ্টা / সপ্তাহ)",
        priceUsd: "$120 / Month",
        priceBdt: "৳১৪,৫০০ / মাস",
        deliveryTime: "Monthly Contract",
        deliveryTimeBn: "মাসিক চুক্তি",
        description: "20 Hours per week dedicated to Executive Inboxes, Calendar & Support"
      },
      {
        id: "va-fulltime",
        name: "Full-Time Dedicated VA (40 Hours / Week)",
        nameBn: "ফুল-টাইম ডেডিকেটেড ভিএ (৪০ ঘণ্টা / সপ্তাহ)",
        priceUsd: "$230 / Month",
        priceBdt: "৳২৮,০০০ / মাস",
        deliveryTime: "Monthly Dedicated",
        deliveryTimeBn: "মাসিক ফুল-টাইম",
        description: "40 Hours per week fully dedicated Executive Assistant with daily EOD reports",
        popular: true
      }
    ],
    faqs: [
      {
        question: "What time zones can the Virtual Assistant support?",
        questionBn: "ভার্চুয়াল অ্যাসিস্ট্যান্ট কোন টাইমজোনে কাজ করতে পারবে?",
        answer: "We support US Eastern/Pacific, UK/Europe GMT, Australia, and Asian business hours to fit your schedule seamlessly.",
        answerBn: "আমরা ইউএস, ইউরোপ, অস্ট্রেলিয়া এবং বাংলাদেশ সময় অনুযায়ী আপনার সুবিধামতো টাইমজোনে সার্বক্ষণিক কাজ করি।"
      },
      {
        question: "How do you track tasks and productivity?",
        questionBn: "কাজের অগ্রগতি কীভাবে ট্র্যাক করা যায়?",
        answer: "We manage tasks via ClickUp, Trello, Asana, or Slack, providing transparent daily End-of-Day (EOD) logs and time tracking.",
        answerBn: "আমরা Trello, Asana, ClickUp অথবা Slack-এর মাধ্যমে প্রতিদিনের কাজের অগ্রগতি ও লগ রিপোর্ট প্রদান করি।"
      }
    ]
  }
];
