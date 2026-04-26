import { motion } from 'framer-motion';
import type { ReactNode } from 'react';
import SectionBadge from './SectionBadge';

type PageHeroProps = {
  eyebrow: string;
  title: string;
  description: string;
  aside?: ReactNode;
};

const PageHero = ({ eyebrow, title, description, aside }: PageHeroProps) => {
  return (
    <section className="pb-10 pt-10 sm:pb-12 sm:pt-14">
      <div className="container-shell">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, ease: 'easeOut' }}
          className="grid gap-6 rounded-[34px] border border-purple/10 bg-white/78 p-7 shadow-soft backdrop-blur-xl lg:grid-cols-[1.1fr_0.9fr] lg:p-9"
        >
          <div>
            <SectionBadge>{eyebrow}</SectionBadge>
            <h1 className="mt-5 max-w-3xl text-4xl font-bold leading-tight sm:text-5xl">
              {title}
            </h1>
            <p className="mt-5 max-w-2xl text-lg text-plum/75">{description}</p>
          </div>
          <div className="flex items-stretch">{aside}</div>
        </motion.div>
      </div>
    </section>
  );
};

export default PageHero;
