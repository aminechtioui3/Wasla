import { motion } from 'framer-motion';
import { partnerNiches, trustMetrics } from '../data/mockData';

const TrustStrip = () => {
  return (
    <section className="pb-10 sm:pb-12">
      <div className="container-shell">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.55, ease: 'easeOut' }}
          className="premium-panel px-6 py-7 sm:px-8 sm:py-8"
        >
          <div className="grid gap-6 xl:grid-cols-[0.95fr_1.05fr]">
            <div className="rounded-[28px] border border-white/10 bg-white/8 p-6 backdrop-blur">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-cream">
                Built for real local campaigns
              </p>
              <h2 className="mt-3 max-w-2xl text-2xl font-bold text-white sm:text-3xl">
                Creator campaigns made clearer for local teams.
              </h2>
              <p className="mt-3 max-w-2xl text-sm text-white/72 sm:text-base">
                Wasla helps brands launch faster, keep approvals tidy, and pay creators with more
                confidence instead of managing everything across scattered apps.
              </p>

              <div className="mt-6 rounded-[24px] border border-white/10 bg-white/6 p-5">
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-cream/80">
                  Best fit for
                </p>
                <p className="mt-1 text-sm text-white/65">
                  The local businesses most aligned with the Wasla workflow.
                </p>
                <div className="mt-4 flex flex-wrap gap-2.5">
                  {partnerNiches.map((niche) => (
                    <span
                      key={niche}
                      className="rounded-full border border-white/10 bg-white/10 px-3 py-1.5 text-sm font-medium text-white/85"
                    >
                      {niche}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="rounded-[28px] border border-white/10 bg-white/8 p-6 backdrop-blur">
              <div className="mb-5">
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-cream/80">
                  Trust signals
                </p>
                <p className="mt-1 text-sm text-white/65">
                  The platform qualities brands and creators care about first.
                </p>
              </div>

              <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-3">
                {trustMetrics.map((metric) => {
                  const Icon = metric.icon;
                  return (
                    <div
                      key={metric.label}
                      className="flex min-h-[118px] items-start gap-3 rounded-[22px] border border-white/10 bg-white/10 p-4 shadow-soft backdrop-blur"
                    >
                      <div className="inline-flex rounded-2xl bg-white/10 p-2.5 text-cream">
                        <Icon className="h-4 w-4" />
                      </div>
                      <div className="min-w-0">
                        <p className="text-base font-extrabold text-white">{metric.value}</p>
                        <p className="mt-1 text-sm font-medium text-white/72">{metric.label}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TrustStrip;
