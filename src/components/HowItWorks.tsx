import { motion } from 'framer-motion';
import { useState } from 'react';
import { brandSteps, creatorSteps } from '../data/mockData';
import SectionBadge from './SectionBadge';
import ScrollReveal from './ScrollReveal';

const HowItWorks = () => {
  const [active, setActive] = useState<'brands' | 'creators'>('brands');

  const tabs = [
    { key: 'brands' as const, label: 'For Brands', steps: brandSteps },
    { key: 'creators' as const, label: 'For Creators', steps: creatorSteps },
  ];

  return (
    <section id="how-it-works" className="py-12 sm:py-16">
      <div className="container-shell">
        <ScrollReveal className="section-card p-7 sm:p-9">
          <SectionBadge>How it works</SectionBadge>
          <div className="mt-5 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-3xl">
              <h2 className="text-3xl font-bold sm:text-4xl">
                A campaign flow that is easier to buy into and easier to trust.
              </h2>
              <p className="mt-4 text-base">
                Wasla keeps both sides aligned from brief to payout, with direct steps that help
                brands move faster and help creators understand what happens next.
              </p>
            </div>
            <div className="inline-flex rounded-full border border-purple/10 bg-white/75 p-1 lg:hidden">
              {tabs.map((tab) => (
                <button
                  key={tab.key}
                  type="button"
                  className={`rounded-full px-4 py-2 text-sm font-semibold transition ${
                    active === tab.key ? 'bg-purple text-white shadow-soft' : 'text-purple'
                  }`}
                  onClick={() => setActive(tab.key)}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          <div className="mt-8 grid gap-6 lg:grid-cols-2">
            {tabs.map((tab, tabIndex) => (
              <motion.div
                key={tab.key}
                id={tab.key === 'brands' ? 'for-brands' : 'for-creators'}
                initial={{ opacity: 0, y: 24, rotateX: -12 }}
                whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.65, delay: tabIndex * 0.08 }}
                whileHover={{ y: -6, rotateX: 4, rotateY: tab.key === 'brands' ? -3 : 3 }}
                style={{ transformPerspective: 1200, transformStyle: 'preserve-3d' }}
                className={`rounded-[28px] border border-purple/10 bg-gradient-to-b from-white/80 to-white/60 p-6 shadow-soft ${
                  active === tab.key ? 'block' : 'hidden'
                } lg:block`}
              >
                <div className="mb-5 flex items-center justify-between gap-3">
                  <div>
                    <h3 className="text-2xl font-bold">{tab.label}</h3>
                    <p className="mt-1 text-sm">
                      {tab.key === 'brands'
                        ? 'Structured campaign setup for local teams.'
                        : 'A cleaner path to paid creator work.'}
                    </p>
                  </div>
                  <span className="rounded-full bg-purple/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-purple">
                    {tab.key === 'brands' ? 'Brand flow' : 'Creator flow'}
                  </span>
                </div>
                <div className="space-y-4">
                  {tab.steps.map((item, index) => (
                    <motion.div
                      key={item.step}
                      initial={{ opacity: 0, y: 18 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, amount: 0.35 }}
                      transition={{ duration: 0.45, delay: 0.08 + index * 0.06 }}
                      className="rounded-[22px] border border-purple/10 bg-white/75 p-5"
                    >
                      <div className="mb-3 flex items-center gap-3">
                        <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-purple text-sm font-bold text-white">
                          {item.step}
                        </span>
                        <h4 className="text-lg font-semibold">{item.title}</h4>
                      </div>
                      <p className="text-sm">{item.description}</p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default HowItWorks;
