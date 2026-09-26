export interface TestimonialItem {
  id: string;
  name: string;
  role: string;
  company: string;
  avatarText: string;
  metric: string;
  metricLabel: string;
  metricLabelBn: string;
  content: string;
  contentBn: string;
  serviceUsed: string;
}

export interface FaqItem {
  id: string;
  question: string;
  questionBn: string;
  answer: string;
  answerBn: string;
}

export const siteConfig = {
  companyName: "SynapseCore",
  tagline: "Smart Tech. Seamless Growth.",
  taglineBn: "স্মার্ট টেকনোলজি। নিরবচ্ছিন্ন প্রবৃদ্ধি।",
  email: "suufiannnn@gmail.com",
  phone: "01353762827",
  whatsAppNumber: "8801353762827",
  linkedInUrl: "https://www.linkedin.com/in/abu-sufian-al-rohan-9a57a53b5/",
  heroImage: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1200&q=80",
};

export const testimonialsData: TestimonialItem[] = [
  {
    id: "1",
    name: "Tariqul Islam",
    role: "Managing Director",
    company: "Apex Logistics & Trade",
    avatarText: "TI",
    metric: "+340%",
    metricLabel: "B2B Inbound Pipeline Growth",
    metricLabelBn: "বি২বি ইনবাউন্ড পাইপলাইন বৃদ্ধি",
    content: "SynapseCore completely overhauled our client acquisition. Their verified B2B lead generation delivered over 800 high-intent decision makers in 3 weeks, directly yielding 6 major enterprise accounts.",
    contentBn: "SynapseCore আমাদের ক্লায়েন্ট অ্যাকুইজিশন প্রক্রিয়াকে পুরোপুরি বদলে দিয়েছে। তাদের ভেরিফায়েড বি২বি লিড জেনারেশন থেকে ৩ সপ্তাহে ৮০০ জনের বেশি ডিসিশন মেকার পেয়েছি, যা সরাসরি ৬টি বড় প্রজেক্ট নিয়ে এসেছে।",
    serviceUsed: "Verified B2B Lead Gen & Cold Outreach"
  },
  {
    id: "2",
    name: "Farhana Yasmin",
    role: "Founder & CMO",
    company: "UrbanAura Fashion Tech",
    avatarText: "FY",
    metric: "4.6x",
    metricLabel: "Meta & Google Ads ROAS",
    metricLabelBn: "বিজ্ঞাপনে ৪.৬ গুণ রিটার্ন (ROAS)",
    content: "Before SynapseCore, our cost per purchase was soaring. Their team set up CAPI, built high-converting creatives, and scaled our e-commerce revenue by 4.6x while slashing ad waste.",
    contentBn: "SynapseCore-এর পূর্বে আমাদের বিজ্ঞাপন খরচ অনেক বেশি ছিল। তাদের টিম মেটা পিক্সেল ও কনভার্সন এপিআই সেটআপ করে চমৎকার ক্রিয়েটিভ বানিয়ে আমাদের সেলস ৪.৬ গুণ বৃদ্ধি করেছে।",
    serviceUsed: "Meta & Google Paid Ads Management"
  },
  {
    id: "3",
    name: "Rezaul Karim",
    role: "Chief Operating Officer",
    company: "FinFlow Software Solutions",
    avatarText: "RK",
    metric: "18 hrs/wk",
    metricLabel: "Operational Time Saved via Automation",
    metricLabelBn: "অটোমেশনে সপ্তাহে ১৮ ঘণ্টা সময় সাশ্রয়",
    content: "The workflow automations between our CRM, WhatsApp, and Google Sheets eliminated hours of tedious manual data entry. Everything happens synchronously within seconds.",
    contentBn: "আমাদের সিআরএম, হোয়াটসঅ্যাপ এবং গুগল শিটের মধ্যকার নো-কোড অটোমেশনের ফলে প্রতি সপ্তাহে ১৮ ঘণ্টারও বেশি সময় বাঁচছে। এখন সমস্ত কাজ চোখের পলকে স্বয়ংক্রিয়ভাবে হয়ে যায়।",
    serviceUsed: "Smart No-Code & AI Workflow Automation"
  },
  {
    id: "4",
    name: "Shamim Hossain",
    role: "Head of Growth",
    company: "Pulse Health Diagnostics",
    avatarText: "SH",
    metric: "0.2s",
    metricLabel: "Lightning Website Load Speed",
    metricLabelBn: "০.২ সেকেন্ডে অতি দ্রুত পেজ লোড",
    content: "Our previous website was sluggish and losing visitors. SynapseCore designed a high-converting, mobile-responsive landing page that improved our form submissions by 210%.",
    contentBn: "আমাদের আগের ওয়েবসাইট অনেক ধীরগতির ছিল। SynapseCore আমাদের একটি আধুনিক এবং অতি দ্রুতগতির ল্যান্ডিং পেজ তৈরি করে দিয়েছে যার মাধ্যমে ফর্ম সাবমিশন ২১০% বৃদ্ধি পেয়েছে।",
    serviceUsed: "High-Converting Website Design"
  }
];

export const generalFaqs: FaqItem[] = [
  {
    id: "g1",
    question: "How does the onboarding process work with SynapseCore?",
    questionBn: "SynapseCore এর সাথে কাজ শুরু করার প্রক্রিয়াটি কেমন?",
    answer: "Getting started is swift: Choose your preferred package from our catalog, click 'Order via WhatsApp' to outline your requirements, and our lead strategist will initialize your project workspace within 2 to 4 hours.",
    answerBn: "শুরু করা খুবই সহজ: আমাদের ক্যাটালগ থেকে আপনার পছন্দের প্যাকেজ বেছে নিন, 'Order via WhatsApp' এ ক্লিক করে আপনার রিকয়ারমেন্ট জানান, এবং আমাদের স্ট্র্যাটেজিস্ট ২ থেকে ৪ ঘণ্টার মধ্যে কাজ শুরু করবেন।"
  },
  {
    id: "g2",
    question: "Can I customize packages or combine multiple services?",
    questionBn: "আমি কি কাস্টম প্যাকেজ তৈরি করতে পারি বা একাধিক সার্ভিস একসাথে নিতে পারি?",
    answer: "Absolutely. We routinely bundle services (such as High-Converting Web Design + Meta Ads + Lead Generation) into bespoke enterprise retainers with bundled pricing advantages.",
    answerBn: "অবশ্যই। আপনার ব্যবসার প্রয়োজন অনুযায়ী আমরা ওয়েব ডিজাইন, পেইড অ্যাডস এবং লিড জেনারেশন একসাথে মিলিয়ে বিশেষ ডিসকাউন্টে কাস্টম প্যাকেজ প্রস্তুত করে দিই।"
  },
  {
    id: "g3",
    question: "What payment methods are supported for domestic and international clients?",
    questionBn: "পেমেন্ট কীভাবে করা যাবে?",
    answer: "We accommodate both local and global clients with transparent billing in USD ($) and BDT (৳). Accepted channels include bKash, Nagad, Bank Wire Transfer, Stripe, and Wise.",
    answerBn: "আমরা বিকাশ, নগদ, ব্যাংক ট্রান্সফার, স্ট্রাইপ এবং ওয়াইজ (Wise)-এর মাধ্যমে দেশীয় ও আন্তর্জাতিক উভয় কারেন্সিতে (USD এবং BDT) পেমেন্ট গ্রহণ করি।"
  },
  {
    id: "g4",
    question: "What if I am not satisfied with the deliverables?",
    questionBn: "কাজের ডেলিভারিতে কোনো পরিবর্তন প্রয়োজন হলে কি রিভিশন পাব?",
    answer: "Every deliverable comes with structured iterative revision rounds and clear milestone checkpoints to guarantee full alignment with your brand standards before sign-off.",
    answerBn: "প্রতিটি সার্ভিসে সুস্পষ্ট রিভিশন সুবিধা রয়েছে। আপনার ব্যবসার ব্র্যান্ড স্ট্যান্ডার্ড শতভাগ পূরণ না হওয়া পর্যন্ত আমরা যত্নসহকারে কাজ সমন্বয় করি।"
  },
  {
    id: "g5",
    question: "How do you maintain confidentiality of our proprietary business data?",
    questionBn: "আমাদের ব্যবসার গোপনীয় তথ্য কি সুরক্ষিত থাকবে?",
    answer: "Client trust is paramount. We execute strict Non-Disclosure Agreements (NDAs) and apply encrypted credentials management across all systems.",
    answerBn: "আমরা ক্লায়েন্টের তথ্যের সর্বোচ্চ সুরক্ষা নিশ্চিত করি। প্রতিটি প্রজেক্টে কঠোর নন-ডিসক্লোজার এগ্রিমেন্ট (NDA) এবং সুরক্ষিত ক্রেডেনশিয়াল সিস্টেম ব্যবহার করা হয়।"
  }
];
