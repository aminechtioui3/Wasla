import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
import { pricingPlans, sectionIntro } from '../data/mockData';
import Button from './Button';
import SectionBadge from './SectionBadge';

const Pricing = () => {
  return (
    <section id="pricing" className="py-12 sm:py-16">
      <div className="container-shell">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.55 }}
        >
          <div className="mx-auto max-w-3xl text-center">
            <SectionBadge>{sectionIntro.pricingEyebrow}</SectionBadge>
            <h2 className="mt-5 text-3xl font-bold sm:text-4xl">
              Pricing that gives SMEs a clear starting point.
            </h2>
            <p className="mt-4 text-base">
              Start with one campaign, move into repeat monthly operations when creator marketing
              proves itself, and add support only when your team needs it.
            </p>
          </div>

          <div className="mt-8 grid gap-5 lg:grid-cols-3">
            {pricingPlans.map((plan) => (
              <article
                key={plan.name}
                className={`flex h-full flex-col rounded-[30px] p-6 shadow-soft ${
                  plan.highlighted
                    ? 'bg-gradient-to-br from-purple to-panel text-white shadow-glow'
                    : 'section-card'
                }`}
              >
                <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                  <div>
                    <p
                      className={`text-sm font-semibold uppercase tracking-[0.16em] ${
                        plan.highlighted ? 'text-white/75' : 'text-purple'
                      }`}
                    >
                      {plan.subtitle}
                    </p>
                    <h3 className={`mt-3 text-2xl font-bold ${plan.highlighted ? 'text-white' : ''}`}>
                      {plan.name}
                    </h3>
                  </div>
                  {plan.highlighted && (
                    <span className="rounded-full bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-cream">
                      Most popular
                    </span>
                  )}
                </div>

                <div className="mt-6 flex items-end gap-2">
                  <p className={`text-4xl font-extrabold ${plan.highlighted ? 'text-white' : ''}`}>
                    {plan.price}
                  </p>
                  {plan.cadence && (
                    <p className={`pb-1 text-sm ${plan.highlighted ? 'text-white/75' : 'text-plum/60'}`}>
                      {plan.cadence}
                    </p>
                  )}
                </div>

                <p className={`mt-4 text-sm leading-6 ${plan.highlighted ? 'text-white/75' : ''}`}>
                  {plan.description}
                </p>

                <div className="mt-6 space-y-3">
                  {plan.features.map((feature) => (
                    <div key={feature} className="flex items-start gap-3">
                      <span
                        className={`mt-0.5 inline-flex h-5 w-5 items-center justify-center rounded-full ${
                          plan.highlighted ? 'bg-white/10 text-cream' : 'bg-purple/10 text-purple'
                        }`}
                      >
                        <Check className="h-3.5 w-3.5" />
                      </span>
                      <p className={`text-sm leading-6 ${plan.highlighted ? 'text-white/80' : ''}`}>
                        {feature}
                      </p>
                    </div>
                  ))}
                </div>

                <div className="mt-auto pt-7">
                  <Button
                    href="#cta"
                    variant={plan.highlighted ? 'secondary' : 'primary'}
                    className={`w-full ${plan.highlighted ? 'border-white/10 bg-white text-purple hover:bg-cream' : ''}`}
                  >
                    {plan.cta}
                  </Button>
                </div>
              </article>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Pricing;
