import { motion } from 'framer-motion';
import { featureSpotlight, features, sectionIntro } from '../data/mockData';
import SectionBadge from './SectionBadge';
import ScrollReveal from './ScrollReveal';

const Features = () => {
  return (
    <section className="py-12 sm:py-16">
      <div className="container-shell">
        <ScrollReveal>
          <div className="grid gap-8 xl:grid-cols-[0.75fr_1.25fr]">
            <div className="premium-panel space-y-4 p-7 sm:p-8">
              <SectionBadge>{sectionIntro.featureEyebrow}</SectionBadge>
              <h2 className="text-3xl font-bold text-white sm:text-4xl">
                The product details that reduce trust friction.
              </h2>
              <p className="text-base text-white/90">
                Wasla is deliberately structured around the moments that usually slow down creator
                campaigns: selection, approvals, communication, and payout clarity.
              </p>

              <div className="space-y-4 pt-2">
                {featureSpotlight.map((item, index) => {
                  const Icon = item.icon;
                  return (
                    <motion.div
                      key={item.title}
                      initial={{ opacity: 0, y: 22, rotateX: -10 }}
                      whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                      viewport={{ once: true, amount: 0.35 }}
                      transition={{ duration: 0.6, delay: index * 0.08 }}
                      whileHover={{ y: -5, rotateX: 4, rotateY: -3 }}
                      style={{ transformPerspective: 1200, transformStyle: 'preserve-3d' }}
                      className="rounded-[24px] border border-white/10 bg-white/8 p-5 backdrop-blur"
                    >
                      <div className="mb-3 inline-flex rounded-2xl bg-white/10 p-3 text-cream">
                        <Icon className="h-5 w-5" />
                      </div>
                      <h3 className="text-lg font-bold text-white">{item.title}</h3>
                      <p className="mt-2 text-sm text-white/90">{item.description}</p>
                    </motion.div>
                  );
                })}
              </div>
            </div>

            <div className="grid auto-rows-fr gap-4 sm:grid-cols-2">
              {features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <motion.article
                    key={feature.title}
                    initial={{ opacity: 0, y: 24, rotateX: -12 }}
                    whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                    viewport={{ once: true, amount: 0.25 }}
                    transition={{ duration: 0.65, delay: 0.08 + index * 0.07 }}
                    whileHover={{ y: -7, rotateX: 6, rotateY: index % 2 === 0 ? -4 : 4 }}
                    style={{ transformPerspective: 1200, transformStyle: 'preserve-3d' }}
                    className="section-card flex h-full flex-col bg-[linear-gradient(180deg,rgba(255,255,255,0.92),rgba(255,255,255,0.74))] p-6"
                  >
                    <div className="mb-4 inline-flex rounded-2xl bg-gradient-to-br from-purple to-orchid p-3 text-white shadow-soft">
                      <Icon className="h-5 w-5" />
                    </div>
                    <h3 className="text-xl font-bold leading-tight">{feature.title}</h3>
                    <p className="mt-3 text-sm leading-6">{feature.description}</p>
                  </motion.article>
                );
              })}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default Features;
