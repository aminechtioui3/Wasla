import { motion } from 'framer-motion';
import { CheckCircle2, MessageSquareText, Shield, Sparkles } from 'lucide-react';
import { heroPreview } from '../data/mockData';

const PhoneMockup = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30, scale: 0.96 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, amount: 0.35 }}
      transition={{ duration: 0.7, ease: 'easeOut' }}
      animate={{ y: [0, -10, 0], rotateZ: [0, 0.8, 0] }}
      className="relative mx-auto w-full max-w-sm scene-3d"
      style={{ transformPerspective: 1600, transformStyle: 'preserve-3d' }}
    >
      <div className="absolute inset-x-10 top-8 -z-10 h-80 rounded-full bg-purple/25 blur-3xl" />
      <div className="pointer-events-none absolute -left-10 top-32 hidden rounded-[24px] border border-white/45 bg-white/75 px-4 py-3 shadow-soft backdrop-blur md:block">
        <p className="text-[0.65rem] font-semibold uppercase tracking-[0.22em] text-purple/70">
          Brief sync
        </p>
        <p className="mt-1 text-sm font-semibold text-plum">Arabic + French creator comms</p>
      </div>
      <div className="pointer-events-none absolute -right-8 top-20 hidden rounded-[24px] border border-white/45 bg-[linear-gradient(135deg,rgba(253,249,182,0.82),rgba(255,255,255,0.72))] px-4 py-3 shadow-soft backdrop-blur md:block">
        <p className="text-[0.65rem] font-semibold uppercase tracking-[0.22em] text-purple/70">
          Match pulse
        </p>
        <p className="mt-1 text-sm font-semibold text-plum">Verified creator shortlist</p>
      </div>
      <div className="relative rounded-[42px] border border-white/10 bg-[linear-gradient(180deg,rgba(42,20,48,0.98),rgba(21,16,21,1))] p-3 shadow-glow">
        <div className="absolute inset-[1px] rounded-[40px] bg-[linear-gradient(135deg,rgba(255,255,255,0.08),transparent_28%,rgba(255,255,255,0.04)_70%,transparent)]" />
        <div className="relative rounded-[34px] border border-white/10 bg-[linear-gradient(180deg,rgba(253,249,182,0.1),rgba(255,255,255,0.04))] p-4">
          <div className="mx-auto mb-4 h-1.5 w-20 rounded-full bg-white/12" />
          <div className="space-y-4">
            <div className="rounded-[24px] bg-gradient-to-br from-purple to-orchid p-4 text-white shadow-soft">
              <div className="mb-2 flex items-center justify-between">
                <span className="text-xs font-semibold uppercase tracking-[0.22em] text-white/75">
                  Live campaign
                </span>
                <Sparkles className="h-4 w-4" />
              </div>
              {heroPreview.campaigns.map((campaign) => (
                <div
                  key={campaign.name}
                  className="mt-3 rounded-2xl border border-white/10 bg-white/10 p-3 backdrop-blur"
                >
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <p className="text-sm font-semibold text-white">{campaign.name}</p>
                      <p className="text-xs text-white/75">{campaign.applicants} creator applications</p>
                    </div>
                    <span className="rounded-full bg-white/10 px-2.5 py-1 text-xs font-semibold">
                      {campaign.budget}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div className="rounded-[22px] border border-white/10 bg-white/95 p-4 shadow-soft">
                <div className="mb-3 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.16em] text-purple">
                  <CheckCircle2 className="h-4 w-4" />
                  Match score
                </div>
                <p className="text-3xl font-bold text-plum">{heroPreview.matchScore}</p>
                <p className="mt-2 text-xs text-plum/60">Top fit based on niche, format, and campaign goals.</p>
              </div>
              <div className="rounded-[22px] border border-white/10 bg-cream/80 p-4 shadow-soft">
                <div className="mb-3 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.16em] text-purple">
                  <Shield className="h-4 w-4" />
                  Payment
                </div>
                <p className="text-lg font-bold text-plum">{heroPreview.paymentStatus}</p>
                <p className="mt-2 text-xs text-plum/80">Draft approved, final payout ready after delivery.</p>
              </div>
            </div>

            <div className="rounded-[24px] border border-white/10 bg-white/95 p-4 shadow-soft">
              <div className="mb-3 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.16em] text-purple">
                <MessageSquareText className="h-4 w-4" />
                Chat preview
              </div>
              <div className="rounded-2xl bg-purple/5 p-3">
                <p className="text-sm font-medium text-plum">{heroPreview.chatPreview}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default PhoneMockup;
