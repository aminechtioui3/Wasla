import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { campaignTemplates } from '../data/mockData';
import Button from './Button';
import SectionBadge from './SectionBadge';
import ScrollReveal from './ScrollReveal';

const CampaignTemplates = () => {
  return (
    <section id="campaign-templates" className="py-12 sm:py-16">
      <div className="container-shell">
        <ScrollReveal
          className="rounded-[34px] bg-gradient-to-br from-cream/[0.85] via-white/80 to-blush/[0.7] p-7 shadow-soft sm:p-9"
        >
          <div className="max-w-3xl">
            <SectionBadge>Campaign templates</SectionBadge>
            <h2 className="mt-5 text-3xl font-bold sm:text-4xl">
              Campaign packages that feel easier for brands to buy.
            </h2>
            <p className="mt-4 text-base">
              Wasla uses fixed package logic to reduce hesitation. Buyers can start from clearer
              deliverables, expected usage, and budget ranges instead of negotiating everything from
              zero.
            </p>
          </div>

          <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {campaignTemplates.map((template, index) => (
              <motion.article
                key={template.title}
                initial={{ opacity: 0, y: 24, rotateX: -12 }}
                whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.65, delay: 0.08 + index * 0.08 }}
                whileHover={{ y: -8, rotateX: 6, rotateY: index % 2 === 0 ? -4 : 4 }}
                style={{ transformPerspective: 1200, transformStyle: 'preserve-3d' }}
                className="section-card flex h-full flex-col bg-[linear-gradient(180deg,rgba(255,255,255,0.94),rgba(255,255,255,0.74))] p-6"
              >
                <p className="text-sm font-semibold uppercase tracking-[0.16em] text-purple">
                  {template.price}
                </p>
                <h3 className="mt-3 text-[1.65rem] font-bold leading-tight">{template.title}</h3>
                <div className="mt-5 space-y-4 text-sm">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.16em] text-purple">
                      Deliverables
                    </p>
                    <p className="mt-2 leading-6">{template.deliverables}</p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.16em] text-purple">
                      Best for
                    </p>
                    <p className="mt-2 leading-6">{template.bestFor}</p>
                  </div>
                </div>
                <div className="mt-auto pt-6">
                  <Button href="#cta" variant="secondary" className="w-full gap-2">
                    {template.cta}
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                </div>
              </motion.article>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default CampaignTemplates;
