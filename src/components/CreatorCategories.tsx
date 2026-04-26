import { motion } from 'framer-motion';
import { creatorCategories } from '../data/mockData';
import SectionBadge from './SectionBadge';

const CreatorCategories = () => {
  return (
    <section id="for-creators" className="py-12 sm:py-16">
      <div className="container-shell">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.55 }}
        >
          <div className="max-w-3xl">
            <SectionBadge>Creator categories</SectionBadge>
            <h2 className="mt-5 text-3xl font-bold sm:text-4xl">
              Match with the right creator type for the outcome you want.
            </h2>
            <p className="mt-4 text-base">
              From authentic UGC to wider-reach micro creators, Wasla helps brands choose the
              right format without guesswork.
            </p>
          </div>

          <div className="mt-8 grid gap-5 lg:grid-cols-3">
            {creatorCategories.map((category) => (
              <article key={category.title} className="section-card p-6">
                <div className="inline-flex rounded-full bg-purple/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-purple">
                  {category.priceRange}
                </div>
                <h3 className="mt-4 text-2xl font-bold">{category.title}</h3>
                <p className="mt-3 text-sm">{category.description}</p>
                <div className="mt-5 rounded-[22px] border border-purple/10 bg-purple/5 p-4">
                  <p className="text-xs font-semibold uppercase tracking-[0.16em] text-purple">
                    Ideal use case
                  </p>
                  <p className="mt-2 text-sm">{category.idealUseCase}</p>
                </div>
                <div className="mt-5">
                  <p className="text-xs font-semibold uppercase tracking-[0.16em] text-purple">
                    Platforms
                  </p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {category.platforms.map((platform) => (
                      <span
                        key={platform}
                        className="rounded-full border border-purple/10 bg-white px-3 py-1.5 text-sm font-medium text-plum"
                      >
                        {platform}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CreatorCategories;
