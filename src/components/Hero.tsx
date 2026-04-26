import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, BadgeCheck, MessageSquareText, ShieldCheck } from 'lucide-react';
import { useRef } from 'react';
import { heroHighlights } from '../data/mockData';
import Button from './Button';
import PhoneMockup from './PhoneMockup';

const Hero = () => {
  const sectionRef = useRef<HTMLElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end start'],
  });

  const copyY = useTransform(scrollYProgress, [0, 1], [0, 110]);
  const copyRotate = useTransform(scrollYProgress, [0, 1], [0, -2.5]);
  const phoneY = useTransform(scrollYProgress, [0, 1], [0, -84]);
  const phoneX = useTransform(scrollYProgress, [0, 1], [0, 18]);
  const phoneRotate = useTransform(scrollYProgress, [0, 1], [0, 8]);
  const stageScale = useTransform(scrollYProgress, [0, 1], [1, 1.18]);
  const stageGlowY = useTransform(scrollYProgress, [0, 1], [0, -46]);

  return (
    <section
      ref={sectionRef}
      id="home"
      className="relative overflow-hidden pb-16 pt-10 sm:pb-20 sm:pt-14 lg:pb-24"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(253,249,182,0.28),transparent_24%),radial-gradient(circle_at_82%_16%,rgba(225,160,186,0.2),transparent_22%)]" />
      <div className="container-shell">
        <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            style={{ y: copyY, rotateZ: copyRotate }}
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-purple/10 bg-white/78 px-4 py-2 text-sm font-semibold text-purple shadow-soft backdrop-blur">
              <BadgeCheck className="h-4 w-4" />
              Tunisia-first creator marketplace
            </div>
            <h1 className="mt-6 max-w-3xl text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
              Find Tunisian creators for your brand in{' '}
              <span className="text-gradient">days, not weeks.</span>
            </h1>
            <p className="mt-6 max-w-2xl text-lg text-plum/75 sm:text-xl">
              Post a campaign, get matched, approve content, and release payment milestones inside
              one workflow built for Tunisian SMEs, restaurants, beauty businesses, and local
              e-commerce teams.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button href="#cta" size="lg">
                Join the waitlist
              </Button>
              <Button to="/pricing#campaign-templates" variant="secondary" size="lg" className="gap-2">
                Explore campaign packages
                <ArrowRight className="h-4 w-4" />
              </Button>
            </div>

            <div className="mt-4 flex flex-wrap items-center gap-3 text-sm">
              <Button
                variant="ghost"
                className="gap-2 rounded-full px-0 text-sm font-semibold"
                onClick={() => window.dispatchEvent(new Event('wasla:open-assistant'))}
              >
                <MessageSquareText className="h-4 w-4" />
                Talk to Wasla Assistant
              </Button>
              <span className="rounded-full border border-purple/10 bg-white/70 px-3 py-1.5 text-xs font-medium uppercase tracking-[0.16em] text-plum/70">
                Arabic + French workflow
              </span>
            </div>

            <div className="mt-10 grid gap-4 sm:grid-cols-3">
              {heroHighlights.map((item, index) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: 28, rotateX: -14 }}
                    whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                    viewport={{ once: true, amount: 0.35 }}
                    transition={{ duration: 0.65, delay: 0.12 + index * 0.08, ease: 'easeOut' }}
                    whileHover={{ y: -6, rotateX: 5, rotateY: index % 2 === 0 ? -4 : 4 }}
                    style={{ transformPerspective: 1200, transformStyle: 'preserve-3d' }}
                    className="section-card p-5"
                  >
                    <div className="mb-3 inline-flex rounded-2xl bg-purple/10 p-3 text-purple">
                      <Icon className="h-5 w-5" />
                    </div>
                    <h2 className="text-base font-bold">{item.title}</h2>
                    <p className="mt-2 text-sm">{item.description}</p>
                  </motion.div>
                );
              })}
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              {['Bilingual briefs', 'Clear deliverables', 'Payment milestones'].map((item) => (
                <div
                  key={item}
                  className="inline-flex items-center gap-2 rounded-full border border-purple/10 bg-white/72 px-4 py-2 text-sm font-medium text-plum/80 shadow-soft"
                >
                  <ShieldCheck className="h-4 w-4 text-purple" />
                  {item}
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            className="relative scene-3d"
            style={{ x: phoneX, y: phoneY, rotateZ: phoneRotate }}
          >
            <motion.div
              className="absolute left-1/2 top-14 -z-10 h-64 w-64 -translate-x-1/2 rounded-full bg-cream/80 blur-3xl"
              style={{ scale: stageScale, y: stageGlowY }}
            />
            <motion.div
              className="absolute -left-3 top-16 hidden w-44 rounded-[28px] p-4 md:block"
              animate={{ y: [0, -16, 0] }}
              transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
            >
              <div className="vibe-glass-slab vibe-glass-slab--a absolute inset-0 rounded-[28px]" />
              <div className="hero-sheen absolute inset-[1px] rounded-[28px]" />
              <div className="relative">
                <p className="text-[0.65rem] font-semibold uppercase tracking-[0.24em] text-purple/80">
                  Creator flow
                </p>
                <p className="mt-2 text-sm font-semibold text-plum">
                  Faster sourcing, cleaner approvals, calmer launch days.
                </p>
              </div>
            </motion.div>
            <motion.div
              className="absolute -right-2 bottom-24 hidden w-40 rounded-[28px] p-4 md:block"
              animate={{ y: [0, 14, 0] }}
              transition={{ duration: 9.5, repeat: Infinity, ease: 'easeInOut' }}
            >
              <div className="vibe-glass-slab vibe-glass-slab--b absolute inset-0 rounded-[28px]" />
              <div className="hero-sheen absolute inset-[1px] rounded-[28px]" />
              <div className="relative">
                <p className="text-[0.65rem] font-semibold uppercase tracking-[0.24em] text-purple/80">
                  Live payout
                </p>
                <p className="mt-2 text-sm font-semibold text-plum">Milestones stay visible all campaign long.</p>
              </div>
            </motion.div>
            <PhoneMockup />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
