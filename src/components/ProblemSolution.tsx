import { motion } from 'framer-motion';
import { problems, sectionIntro, solutions } from '../data/mockData';
import SectionBadge from './SectionBadge';
import ScrollReveal from './ScrollReveal';

const ProblemSolution = () => {
  return (
    <section className="py-12 sm:py-16">
      <div className="container-shell space-y-8">
        <ScrollReveal className="grid gap-6 lg:grid-cols-2">
          <div className="rounded-[32px] bg-gradient-to-br from-plum to-purple p-7 text-white shadow-glow sm:p-9">
            <SectionBadge>{sectionIntro.problemEyebrow}</SectionBadge>
            <h2 className="mt-5 text-3xl font-bold text-white sm:text-4xl">
              Creator campaigns break down when the workflow stays fragmented.
            </h2>
            <p className="mt-4 max-w-2xl text-white/80">
              Small businesses want results, not platform chaos. The current process is often too
              manual, too unclear, and too risky for fast-moving teams.
            </p>
            <div className="mt-8 space-y-4">
              {problems.map((problem, index) => {
                const Icon = problem.icon;
                return (
                  <motion.div
                    key={problem.title}
                    initial={{ opacity: 0, y: 20, rotateX: -10 }}
                    whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                    viewport={{ once: true, amount: 0.35 }}
                    transition={{ duration: 0.6, delay: index * 0.08 }}
                    whileHover={{ y: -5, rotateX: 4, rotateY: -3 }}
                    style={{ transformPerspective: 1200, transformStyle: 'preserve-3d' }}
                    className="rounded-[24px] border border-white/10 bg-white/10 p-5 backdrop-blur"
                  >
                    <div className="mb-3 inline-flex rounded-2xl bg-white/10 p-3 text-cream">
                      <Icon className="h-5 w-5" />
                    </div>
                    <h3 className="text-lg font-semibold text-white">{problem.title}</h3>
                    <p className="mt-2 text-sm text-white/75">{problem.description}</p>
                  </motion.div>
                );
              })}
            </div>
          </div>

          <div className="section-card p-7 sm:p-9">
            <SectionBadge>{sectionIntro.solutionEyebrow}</SectionBadge>
            <h2 className="mt-5 text-3xl font-bold sm:text-4xl">
              Wasla turns creator marketing into a calmer, clearer operating system.
            </h2>
            <p className="mt-4 max-w-2xl text-base">
              Instead of chasing creators across apps, brands and creators work inside one guided,
              mobile-native flow built for speed, trust, and campaign visibility.
            </p>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {solutions.map((solution, index) => {
                const Icon = solution.icon;
                return (
                  <motion.div
                    key={solution.title}
                    initial={{ opacity: 0, y: 20, rotateX: -10 }}
                    whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                    viewport={{ once: true, amount: 0.35 }}
                    transition={{ duration: 0.6, delay: 0.12 + index * 0.07 }}
                    whileHover={{ y: -5, rotateX: 5, rotateY: index % 2 === 0 ? -3 : 3 }}
                    style={{ transformPerspective: 1200, transformStyle: 'preserve-3d' }}
                    className="rounded-[24px] border border-purple/10 bg-white/75 p-5"
                  >
                    <div className="mb-3 inline-flex rounded-2xl bg-purple/10 p-3 text-purple">
                      <Icon className="h-5 w-5" />
                    </div>
                    <h3 className="text-base font-bold">{solution.title}</h3>
                    <p className="mt-2 text-sm">{solution.description}</p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default ProblemSolution;
