import type { LucideIcon } from 'lucide-react';
import {
  BadgeCheck,
  Banknote,
  BriefcaseBusiness,
  Building2,
  Camera,
  CheckCheck,
  ClipboardCheck,
  CreditCard,
  Globe2,
  HeartHandshake,
  LayoutDashboard,
  MessageCircleMore,
  MonitorPlay,
  SearchCheck,
  ShieldCheck,
  Sparkles,
  Star,
  Store,
} from 'lucide-react';

export type NavItem = {
  label: string;
  to: string;
};

export type TrustMetric = {
  label: string;
  value: string;
  icon: LucideIcon;
};

export type HighlightCard = {
  title: string;
  description: string;
  icon: LucideIcon;
};

export type StepItem = {
  step: string;
  title: string;
  description: string;
};

export type CreatorCategory = {
  title: string;
  description: string;
  idealUseCase: string;
  priceRange: string;
  platforms: string[];
};

export type CampaignTemplate = {
  title: string;
  deliverables: string;
  bestFor: string;
  price: string;
  cta: string;
};

export type FeatureCard = {
  title: string;
  description: string;
  icon: LucideIcon;
};

export type PricingPlan = {
  name: string;
  subtitle: string;
  price: string;
  cadence: string;
  description: string;
  features: string[];
  highlighted?: boolean;
  cta: string;
};

export type Testimonial = {
  name: string;
  role: string;
  quote: string;
};

export type FAQItem = {
  question: string;
  answer: string;
};

export type FooterLink = {
  label: string;
  href: string;
};

export type SocialPost = {
  image: string;
  title: string;
  caption: string;
  likes: string;
  comments: string;
};

export const navItems: NavItem[] = [
  { label: 'Home', to: '/' },
  { label: 'For Brands', to: '/brands' },
  { label: 'For Creators', to: '/creators' },
  { label: 'How It Works', to: '/how-it-works' },
  { label: 'Packages', to: '/pricing' },
  { label: 'FAQ', to: '/faq' },
];

export const trustMetrics: TrustMetric[] = [
  { value: 'AR + FR', label: 'bilingual briefs', icon: Globe2 },
  { value: 'Matched', label: 'creator fit', icon: Sparkles },
  { value: 'Clear', label: 'scope + timing', icon: ClipboardCheck },
  { value: 'Safe', label: 'payout flow', icon: ShieldCheck },
  { value: 'Local', label: 'Tunisia-first', icon: Building2 },
];

export const heroHighlights = [
  {
    title: 'Post faster',
    description: 'Launch a brief in minutes with fixed package logic and guided inputs.',
    icon: BriefcaseBusiness,
  },
  {
    title: 'Match smarter',
    description: 'Find strong-fit Tunisian creators without hunting across DMs.',
    icon: SearchCheck,
  },
  {
    title: 'Approve safely',
    description: 'Track drafts, revisions, and payment milestones in one place.',
    icon: CreditCard,
  },
] satisfies HighlightCard[];

export const heroPreview = {
  campaigns: [
    { name: 'Beauty launch', budget: '650 TND', applicants: 18 },
    { name: 'Restaurant visit', budget: '520 TND', applicants: 12 },
  ],
  matchScore: '92%',
  paymentStatus: 'Milestone secured',
  chatPreview: 'Draft approved. Final cut can go live tomorrow.',
};

export const problems = [
  {
    title: 'Finding reliable creators is slow',
    description:
      'Brands waste days searching Instagram, sending DMs, and guessing who will actually deliver on time.',
    icon: SearchCheck,
  },
  {
    title: 'Pricing feels inconsistent',
    description:
      'Without clear packages or benchmarks, SMEs struggle to compare creator offers and stay within budget.',
    icon: Banknote,
  },
  {
    title: 'Approvals are scattered',
    description:
      'Feedback lives across Instagram, WhatsApp, and voice notes, making content review chaotic and hard to track.',
    icon: MessageCircleMore,
  },
  {
    title: 'Payments create trust issues',
    description:
      'Creators worry about getting paid and brands worry about paying too early without clear delivery milestones.',
    icon: HeartHandshake,
  },
  {
    title: 'Agencies are often out of reach',
    description:
      'Many local businesses want creator marketing, but not the overhead, retainer, or complexity of an agency setup.',
    icon: Store,
  },
] satisfies HighlightCard[];

export const solutions = [
  {
    title: 'Smart creator discovery',
    description: 'Browse local profiles with niche, platform, audience size, and fit signals.',
    icon: Sparkles,
  },
  {
    title: 'Campaign templates',
    description: 'Start from clear package ideas for launches, retail, food, and beauty brands.',
    icon: ClipboardCheck,
  },
  {
    title: 'Content approval flow',
    description: 'Keep drafts, edits, feedback, and final approvals in one place.',
    icon: CheckCheck,
  },
  {
    title: 'Safe payment tracking',
    description: 'Release payments against milestones so both sides feel protected.',
    icon: ShieldCheck,
  },
  {
    title: 'Brand and creator chat',
    description: 'Keep timelines, revisions, and clarifications in one thread.',
    icon: MessageCircleMore,
  },
  {
    title: 'Ratings and trust profiles',
    description: 'Use delivery history and ratings to build confidence faster.',
    icon: BadgeCheck,
  },
] satisfies HighlightCard[];

export const brandSteps: StepItem[] = [
  {
    step: '01',
    title: 'Post a campaign',
    description: 'Choose a package, set your goals, budget, and delivery timeline in a guided flow.',
  },
  {
    step: '02',
    title: 'Review creator applications',
    description:
      'Compare creator style, niche fit, deliverables, and response speed before shortlisting.',
  },
  {
    step: '03',
    title: 'Approve drafts',
    description: 'Request edits, approve content, and keep every revision in one approval thread.',
  },
  {
    step: '04',
    title: 'Release payment',
    description: 'Mark milestones complete and pay creators safely once deliverables are approved.',
  },
];

export const creatorSteps: StepItem[] = [
  {
    step: '01',
    title: 'Create your profile',
    description:
      'Show your content style, niche, platforms, and rates so brands know where you fit best.',
  },
  {
    step: '02',
    title: 'Apply to campaigns',
    description: 'Browse opportunities that match your audience, format, and preferred industries.',
  },
  {
    step: '03',
    title: 'Submit content',
    description: 'Upload drafts, handle revisions, and keep communication organized inside the app.',
  },
  {
    step: '04',
    title: 'Get paid',
    description: 'Track payment status clearly and build trust with every successful campaign.',
  },
];

export const creatorCategories: CreatorCategory[] = [
  {
    title: 'UGC Creators',
    description:
      'Product-first creators who shoot authentic videos and photos that feel native, credible, and ad-ready.',
    idealUseCase:
      'Best for product demos, testimonials, app explainers, and paid social creatives.',
    priceRange: '120-350 TND',
    platforms: ['Instagram Reels', 'TikTok', 'Meta Ads'],
  },
  {
    title: 'Nano Influencers',
    description:
      'Local personalities with tight-knit audiences and high trust, ideal for community-driven awareness.',
    idealUseCase: 'Best for local launches, opening weekends, cafe visits, and referral-style content.',
    priceRange: '180-500 TND',
    platforms: ['Instagram', 'TikTok', 'Stories'],
  },
  {
    title: 'Micro Influencers',
    description:
      'Creators with broader reach and polished content, useful when brands need scale without celebrity pricing.',
    idealUseCase: 'Best for product drops, seasonal offers, and brand credibility campaigns.',
    priceRange: '400-1,200 TND',
    platforms: ['Instagram', 'TikTok', 'YouTube Shorts'],
  },
];

export const campaignTemplates: CampaignTemplate[] = [
  {
    title: '1 UGC Video',
    deliverables: '1 vertical video, 1 hook variation, usage rights summary',
    bestFor: 'Testing a new product, offer, or ad angle quickly',
    price: 'Starts at 160 TND',
    cta: 'Request this package',
  },
  {
    title: '3 Story Creators',
    deliverables: '3 creators, 9 stories total, swipe-up or link mention',
    bestFor: 'Flash sales, openings, and local event promotion',
    price: 'Starts at 280 TND',
    cta: 'Explore package',
  },
  {
    title: 'Restaurant Visit Campaign',
    deliverables: '2 visits, 2 Reels, 6 stories, tasting coverage',
    bestFor: 'Restaurants, cafes, dessert drops, menu launches',
    price: 'Starts at 520 TND',
    cta: 'See restaurant flow',
  },
  {
    title: 'Product Seeding Campaign',
    deliverables: '5 seeded products, unboxing coverage, 3 reposts',
    bestFor: 'Beauty, fashion, and e-commerce brands',
    price: 'Starts at 460 TND',
    cta: 'View seeding package',
  },
  {
    title: '3-Creator Launch Pack',
    deliverables: '3 creators, UGC + awareness mix, tracking sheet',
    bestFor: 'Launches that need speed, volume, and proof',
    price: 'Starts at 780 TND',
    cta: 'Plan launch package',
  },
];

export const features: FeatureCard[] = [
  {
    title: 'Campaign dashboard',
    description: 'Track briefs, creator status, approvals, and payouts in one mobile-friendly view.',
    icon: LayoutDashboard,
  },
  {
    title: 'Creator matching',
    description: 'Spot strong-fit creators fast through niche, style, and use-case signals.',
    icon: Sparkles,
  },
  {
    title: 'Approval workflow',
    description: 'Keep drafts, edits, and final sign-off organized so nothing gets lost.',
    icon: ClipboardCheck,
  },
  {
    title: 'Campaign chat',
    description: 'Handle revisions and delivery updates without leaving the campaign.',
    icon: MessageCircleMore,
  },
  {
    title: 'Payment milestones',
    description: 'Create a safer experience by tying payout progress to approved deliverables.',
    icon: Banknote,
  },
  {
    title: 'Portfolio profiles',
    description: 'Give creators a strong home for examples, niches, and campaign history.',
    icon: Camera,
  },
  {
    title: 'Ratings',
    description: 'Build trust with profile reputation, campaign feedback, and repeat-work signals.',
    icon: Star,
  },
  {
    title: 'Bilingual briefs',
    description: 'Run campaigns in Arabic and French so both sides can collaborate naturally.',
    icon: Globe2,
  },
];

export const pricingPlans: PricingPlan[] = [
  {
    name: 'Starter',
    subtitle: 'For small campaigns',
    price: '79 TND',
    cadence: '/ campaign',
    description: 'A practical starting point for brands testing creator marketing for the first time.',
    features: [
      'Basic campaign posting',
      'Creator applications',
      'Approval flow',
      'In-app chat',
      'Standard support',
    ],
    cta: 'Start with Starter',
  },
  {
    name: 'Growth',
    subtitle: 'For monthly campaigns',
    price: '249 TND',
    cadence: '/ month',
    description:
      'Built for brands that want repeat campaigns, better filtering, and smoother reporting.',
    features: [
      'Multiple active campaigns',
      'Advanced creator filters',
      'Performance snapshots',
      'Priority approvals',
      'Team collaboration',
    ],
    highlighted: true,
    cta: 'Join Growth waitlist',
  },
  {
    name: 'Managed',
    subtitle: 'For teams that want help',
    price: 'Custom',
    cadence: '',
    description:
      'Get hands-on setup support, creator shortlists, and campaign planning for larger pushes.',
    features: [
      'Done-for-you creator shortlist',
      'Campaign setup support',
      'Brief refinement',
      'Priority assistance',
      'Custom rollout planning',
    ],
    cta: 'Talk to the team',
  },
];

export const testimonials: Testimonial[] = [
  {
    name: 'Amina Ben Salem',
    role: 'Mock testimonial, local cafe owner',
    quote:
      'We wanted creators for a weekend menu launch without dealing with ten different DMs. Wasla made the workflow feel structured from the first brief to final approval.',
  },
  {
    name: 'Sarra Gharbi',
    role: 'Mock testimonial, beauty shop owner',
    quote:
      'The biggest difference is clarity. We can see what each creator will deliver, when drafts are due, and when payment should move. That removes so much friction.',
  },
  {
    name: 'Youssef Trabelsi',
    role: 'Mock testimonial, UGC creator',
    quote:
      'Most creators just want a clear brief and fair payment visibility. Wasla feels like a professional home for creator work instead of scattered messages.',
  },
  {
    name: 'Mariem Jebali',
    role: 'Mock testimonial, e-commerce brand manager',
    quote:
      'For a Tunisia-first brand, local relevance matters. The platform positioning feels much closer to how we actually run campaigns than generic global marketplaces.',
  },
];

export const faqs: FAQItem[] = [
  {
    question: 'Is Wasla only for Tunisia?',
    answer:
      'Wasla is designed Tunisia-first, with workflows, pricing expectations, and creator discovery focused on the local market. Expansion can come later, but the current product story is local by design.',
  },
  {
    question: 'Can creators join for free?',
    answer:
      'Yes. The creator experience is positioned as free to join so creators can build profiles, apply to campaigns, submit content, and track payments without upfront fees.',
  },
  {
    question: 'How are payments handled?',
    answer:
      'This demo uses mock data, but the workflow models milestone-based payment tracking so brands can release payment after approvals and creators get better visibility into status.',
  },
  {
    question: 'What types of brands can use Wasla?',
    answer:
      'Local cafes, beauty brands, fashion shops, consumer products, restaurants, and emerging e-commerce teams are all strong fits for the Wasla model.',
  },
  {
    question: 'Can I use creators content in ads?',
    answer:
      'Yes, when rights are agreed in the campaign scope. Wasla package structure makes it easier to clarify deliverables and usage before work begins.',
  },
  {
    question: 'Does Wasla replace an agency?',
    answer:
      'Not always. Wasla is best for brands that want a faster, lighter, and more affordable creator workflow. Teams that need more support can choose a managed plan instead.',
  },
  {
    question: 'What platforms are supported?',
    answer:
      'The demo focuses on Instagram, TikTok, and short-form UGC use cases, which are the most relevant channels for the current positioning.',
  },
];

export const footerLinks: { product: FooterLink[]; company: FooterLink[] } = {
  product: [
    { label: 'For Brands', href: '/brands' },
    { label: 'For Creators', href: '/creators' },
    { label: 'How It Works', href: '/how-it-works' },
    { label: 'Packages', href: '/pricing' },
  ],
  company: [
    { label: 'About Wasla', href: '/' },
    { label: 'FAQ', href: '/faq' },
    { label: 'Waitlist', href: '#cta' },
    { label: 'Campaign packages', href: '/pricing#campaign-templates' },
  ],
};

export const socialLinks = [
  { label: 'Instagram', href: '#' },
  { label: 'LinkedIn', href: '#' },
  { label: 'TikTok', href: '#' },
];

export const socialPosts: SocialPost[] = [
  {
    image: '/social/artboard-6.png',
    title: 'Join Wasla',
    caption: 'A bold launch-style post that sells the feeling of joining early.',
    likes: '1.8k',
    comments: '48',
  },
  {
    image: '/social/artboard-14.png',
    title: 'Marketplace Flow',
    caption: 'A product-story frame built around simple, clear campaign actions.',
    likes: '2.3k',
    comments: '61',
  },
  {
    image: '/social/artboard-12.png',
    title: '3,000 Users',
    caption: 'Social proof artwork that turns traction into a visual headline.',
    likes: '2.7k',
    comments: '73',
  },
  {
    image: '/social/artboard-13.png',
    title: 'Stop Chasing',
    caption: 'Creative that reframes Wasla as the easier path to real connections.',
    likes: '1.6k',
    comments: '39',
  },
  {
    image: '/social/artboard-15.png',
    title: 'Hiring Creator',
    caption: 'Recruitment-style creative for creators who want to work with brands.',
    likes: '1.9k',
    comments: '52',
  },
  {
    image: '/social/artboard-16.png',
    title: 'Contract Faster',
    caption: 'A punchier business visual around signing more deals with less friction.',
    likes: '2.1k',
    comments: '57',
  },
  {
    image: '/social/artboard-17.png',
    title: 'Trusted Brands',
    caption: 'Social validation artwork that makes the offer feel established and credible.',
    likes: '1.5k',
    comments: '34',
  },
  {
    image: '/social/artboard-18.png',
    title: 'Break The Pattern',
    caption: 'A more dramatic brand piece that leans into standing out from the crowd.',
    likes: '2.4k',
    comments: '66',
  },
  {
    image: '/social/artboard-19.png',
    title: 'Platform Live',
    caption: 'Launch artwork designed to feel like an announcement post from the feed.',
    likes: '2.0k',
    comments: '58',
  },
];

export const sectionIntro = {
  problemEyebrow: 'Why brands hesitate',
  solutionEyebrow: 'Why Wasla feels better',
  featureEyebrow: 'Built for campaign clarity',
  pricingEyebrow: 'Simple commercial packaging',
  faqEyebrow: 'Questions teams usually ask',
};

export const partnerNiches = [
  'Restaurants and cafes',
  'Beauty businesses',
  'Fashion shops',
  'Local e-commerce',
];

export const featureSpotlight = [
  {
    title: 'Tunisia-first workflow',
    description:
      'The product is tailored around how local brands and creators actually coordinate campaigns.',
    icon: Globe2,
  },
  {
    title: 'Fixed package thinking',
    description: 'Clear packages make the offer easier to understand, compare, and buy.',
    icon: MonitorPlay,
  },
];
