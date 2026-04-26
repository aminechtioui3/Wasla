export type ChatTopic = {
  id: string;
  keywords: string[];
  answer: string;
};

export const suggestedQuestions = [
  'How does Wasla work?',
  'How do brands pay creators?',
  'What creators can join?',
  'Is it for Tunisia only?',
  'What campaign packages exist?',
  'How does approval work?',
];

export const chatbotTopics: ChatTopic[] = [
  {
    id: 'how-it-works',
    keywords: ['how', 'work', 'works', 'platform', 'process', 'start', 'campaign'],
    answer:
      'A brand posts a brief, creators apply or get matched, drafts are approved in one place, and payout is tracked against deliverables.',
  },
  {
    id: 'payments',
    keywords: ['pay', 'payment', 'payments', 'milestone', 'release', 'safe', 'paid'],
    answer:
      'Wasla uses payment milestones. Brands can approve work before release, and creators can see where payout stands.',
  },
  {
    id: 'creators',
    keywords: ['creator', 'creators', 'ugc', 'nano', 'micro', 'join', 'influencer'],
    answer:
      'Wasla is built for Tunisian UGC creators, nano influencers, and micro influencers who want clearer briefs, approvals, and payment visibility.',
  },
  {
    id: 'tunisia',
    keywords: ['tunisia', 'tunisian', 'only', 'country', 'local', 'market'],
    answer:
      'Yes. The launch focus is Tunisia-first, with local SMEs, local creators, and Arabic plus French workflows.',
  },
  {
    id: 'packages',
    keywords: ['package', 'packages', 'template', 'templates', 'offer', 'pricing'],
    answer:
      'The demo includes fixed package ideas like UGC videos, story bundles, restaurant visits, product seeding, and launch packs.',
  },
  {
    id: 'approval',
    keywords: ['approve', 'approval', 'draft', 'drafts', 'feedback', 'revision', 'revisions'],
    answer:
      'Approval stays inside the workflow, not across scattered DMs. Brands can review drafts, request edits, and approve final content in one thread.',
  },
  {
    id: 'pricing-plans',
    keywords: ['starter', 'growth', 'managed', 'plan', 'plans', 'subscription'],
    answer:
      'Wasla has Starter for small campaigns, Growth for repeat activity, and Managed for teams that want more support.',
  },
];

export const chatbotFallback =
  'I can help with campaigns, creators, payment flow, approval workflow, packages, and Tunisia-first positioning. Try one of the suggested questions below.';
