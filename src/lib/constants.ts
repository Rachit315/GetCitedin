export const SITE = {
  name: "GetCitedin",
  tagline: "Reddit Marketing Agency",
  url: "https://getcitedin.com",
} as const;

export const NAV_LINKS = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Pricing", href: "#pricing" },
  { label: "FAQ", href: "#faq" },
] as const;

export const REDDIT_POSTS = [
  {
    community: "r/SaaS",
    author: "GrowthLead_42",
    text: "We switched our entire acquisition strategy to Reddit threads. 3x demo bookings in 60 days — not ads, just authentic conversations.",
    likes: "2.4k",
    shares: "412",
    rotation: -4,
  },
  {
    community: "r/startups",
    author: "founder_daily",
    text: "Honest question: what's working for B2B SaaS on Reddit right now? Our team is testing community-led growth and seeing insane intent.",
    likes: "1.8k",
    shares: "289",
    rotation: 2,
  },
  {
    community: "r/Entrepreneur",
    author: "scaleoperator",
    text: "Reddit isn't a billboard. It's where buyers ask real questions before they ever hit your landing page. We learned that the hard way.",
    likes: "3.1k",
    shares: "567",
    rotation: -2,
  },
  {
    community: "r/marketing",
    author: "channel_ops",
    text: "If you're not mapping subreddits to your ICP, you're leaving the highest-intent traffic on the table. Here's our playbook.",
    likes: "999+",
    shares: "198",
    rotation: 3,
  },
  {
    community: "r/ProductManagement",
    author: "pm_stack",
    text: "Our product research pipeline now starts on Reddit. The qualitative signal you get beats any survey tool we've used.",
    likes: "1.2k",
    shares: "334",
    rotation: -3,
  },
  {
    community: "r/GrowthHacking",
    author: "reddit_native",
    text: "Seeded 12 threads last month. Organic upvotes + comment chains drove more qualified signups than our entire paid social budget.",
    likes: "4.2k",
    shares: "891",
    rotation: 1,
  },
] as const;

export const STATS = [
  { value: 700, suffix: "+", label: "Posts Created Across Campaigns" },
  { value: 150, suffix: "M+", label: "Impressions Generated" },
  { value: 200, suffix: "+", label: "Subreddits Activated" },
] as const;

export const VALUE_CARDS = [
  {
    stat: "73M+",
    title: "daily users engaging in real discussions",
    iconImage: "/images/value/value-icon-users.svg",
  },
  {
    stat: "74%",
    title: "of users say Reddit influences their purchasing decisions",
    iconImage: "/images/value/value-icon-purchasing.svg",
  },
  {
    stat: "#1 Source",
    title: "for product research, reviews, and recommendations",
    iconImage: "/images/value/value-icon-source.svg",
  },
] as const;

export const PROCESS_STEPS = [
  {
    number: "#1 Research",
    title: "Subreddit & Keyword mapping",
    visual: "/images/bento/bento-research-visual.png",
    variant: "research" as const,
  },
  {
    number: "#2 Accounts",
    title: "Account Seeding & Warming",
    visual: "/images/bento/bento-accounts-visual.png",
    variant: "accounts" as const,
  },
  {
    number: "#3 Content",
    title: "Content seeding.",
    visual: "/images/bento/bento-content-visual.png",
    variant: "content" as const,
  },
  {
    number: "#4 Tracking",
    title: "Analytics & reporting.",
    visual: "/images/bento/bento-tracking-visual.png",
    variant: "tracking" as const,
  },
] as const;

export const TIMELINE = [
  {
    weeks: "Weeks 1–2",
    phase: "Deep dive & playbook.",
    description:
      "We audit your brand, identify the key subreddits, and plan the approach, the playbook.",
    items: [
      "Brand + competitor audit",
      "Subreddit & keyword map",
      "Custom 60-day playbook",
    ],
    waveImage: "/images/timeline/timeline-wave-1-7c63c6.png",
  },
  {
    weeks: "Weeks 3–4",
    phase: "Soft launch.",
    description:
      "We seed threads and comments, build credibility, and warm up accounts across priority subreddits.",
    items: [
      "Seeded organic comments",
      "Warmed high-karma accounts",
      "First upvote momentum",
    ],
    waveImage: "/images/timeline/timeline-wave-2.png",
  },
  {
    weeks: "Weeks 5–8",
    phase: "Scale up.",
    description:
      "We amplify what works, ads + organic + LLM optimization, and track how Reddit moves.",
    items: [
      "Reddit Ads live & tuned",
      "LLM citation tracking",
      "Weekly SEO + AI impact report",
    ],
    waveImage: "/images/timeline/timeline-wave-3.png",
  },
] as const;

export const PRICING = [
  {
    name: "Stealth Entry",
    price: 1999,
    headerImage: "/images/pricing/pricing-header-stealth.png",
    description:
      "For founders who need Reddit presence but aren't ready to go all in",
    features: [
      "Strategic Narrative Seeding",
      "3 Authority Threads / mo",
      "Basic AI Citation Tracking",
      "Weekly Lab Reports",
    ],
    featured: false,
    cta: "Get Started",
  },
  {
    name: "Growth Engine",
    price: 3999,
    headerImage: "/images/pricing/pricing-header-growth.png",
    description:
      "For teams ready to own the conversation across multiple subreddits at scale",
    features: [
      "Full Subreddit Domination",
      "12 Authority Threads / mo",
      "Advanced LLM Citation Tracking",
      "Reddit Ads Management",
      "Bi-weekly Strategy Calls",
    ],
    featured: true,
    cta: "Get Started",
  },
  {
    name: "Market Dominance",
    price: 7999,
    headerImage: "/images/pricing/pricing-header-dominance-3b2c1f.png",
    description:
      "For brands that want category leadership and compounding Reddit presence",
    features: [
      "Unlimited Subreddit Coverage",
      "30+ Authority Threads / mo",
      "Full LLM + SEO Attribution",
      "Dedicated Account Lead",
      "Custom Reporting Dashboard",
    ],
    featured: false,
    cta: "Get Started",
  },
] as const;

export const FAQ_ITEMS = [
  {
    question: "How do you avoid getting banned?",
    answer:
      "We use high-karma, aged accounts and Redditor-native language. We don't spam; we participate in the conversation. Our strategy is built on manual, high-quality engagement.",
  },
  {
    question: "Can you handle multiple subreddits?",
    answer:
      "Yes. Every campaign maps 15–50+ subreddits based on your ICP, with tailored messaging per community. We scale across verticals without sacrificing authenticity.",
  },
  {
    question: "How do you measure success?",
    answer:
      "We track impressions, thread performance, LLM citations, branded search lift, and pipeline attribution. You'll get weekly reports with clear ROI metrics.",
  },
  {
    question: "What is Reddit Growth API?",
    answer:
      "Our proprietary system monitors subreddit signals, keyword trends, and citation patterns — giving you real-time intelligence on where to show up next.",
  },
] as const;

export const FOOTER_LINKS = {
  company: [
    { label: "About", href: "#about" },
    { label: "Services", href: "#services" },
    { label: "Pricing", href: "#pricing" },
    { label: "FAQ", href: "#faq" },
  ],
  legal: [
    { label: "Privacy Policy", href: "#" },
    { label: "Terms of Service", href: "#" },
  ],
} as const;
