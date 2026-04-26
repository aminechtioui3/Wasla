import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';
import { testimonials } from '../data/mockData';
import SectionBadge from './SectionBadge';

const Testimonials = () => {
  return (
    <section className="py-12 sm:py-16">
      <div className="container-shell">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.55 }}
        >
          <div className="mx-auto max-w-3xl text-center">
            <SectionBadge>Testimonials</SectionBadge>
            <h2 className="mt-5 text-3xl font-bold sm:text-4xl">
              Mock stories that show how Wasla fits real local use cases.
            </h2>
            <p className="mt-4 text-base">
              These sample testimonials are fictional, but they reflect the commercial pains and
              wins that a Tunisia-first creator marketplace is built to address.
            </p>
          </div>

          <div className="mt-8 grid gap-5 md:grid-cols-2">
            {testimonials.map((testimonial) => (
              <article key={testimonial.name} className="section-card p-6">
                <div className="mb-4 inline-flex rounded-2xl bg-purple/10 p-3 text-purple">
                  <Quote className="h-5 w-5" />
                </div>
                <p className="text-base text-plum/80">"{testimonial.quote}"</p>
                <div className="mt-6 border-t border-purple/10 pt-4">
                  <p className="font-bold text-plum">{testimonial.name}</p>
                  <p className="text-sm">{testimonial.role}</p>
                </div>
              </article>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
