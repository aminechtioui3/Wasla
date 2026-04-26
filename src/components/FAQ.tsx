import { AnimatePresence, motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { useState } from 'react';
import { faqs, sectionIntro } from '../data/mockData';
import SectionBadge from './SectionBadge';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number>(0);

  return (
    <section id="faq" className="py-12 sm:py-16">
      <div className="container-shell">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.55 }}
          className="grid gap-8 xl:grid-cols-[0.8fr_1.2fr]"
        >
          <div>
            <SectionBadge>{sectionIntro.faqEyebrow}</SectionBadge>
            <h2 className="mt-5 text-3xl font-bold sm:text-4xl">
              Answers for brands and creators exploring Wasla.
            </h2>
            <p className="mt-4 text-base">
              The FAQ focuses on the trust questions visitors ask before they join a waitlist,
              shortlist creators, or commit to a package.
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => {
              const isOpen = openIndex === index;
              return (
                <article key={faq.question} className="section-card overflow-hidden">
                  <button
                    type="button"
                    className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                    onClick={() => setOpenIndex(isOpen ? -1 : index)}
                    aria-expanded={isOpen}
                    aria-controls={`faq-panel-${index}`}
                  >
                    <span className="text-base font-semibold text-plum">{faq.question}</span>
                    <ChevronDown
                      className={`h-5 w-5 shrink-0 text-purple transition-transform ${
                        isOpen ? 'rotate-180' : ''
                      }`}
                    />
                  </button>
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        id={`faq-panel-${index}`}
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.22 }}
                        className="overflow-hidden"
                      >
                        <div className="border-t border-purple/10 px-6 py-5">
                          <p className="text-sm">{faq.answer}</p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </article>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQ;
