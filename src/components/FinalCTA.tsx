import { motion } from 'framer-motion';
import { FormEvent, useState } from 'react';
import { ArrowRight, CheckCircle2, MessageSquareText } from 'lucide-react';
import Button from './Button';
import SectionBadge from './SectionBadge';

const FinalCTA = () => {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!email.trim()) {
      return;
    }
    setSubmitted(true);
    setEmail('');
  };

  return (
    <section id="cta" className="pb-20 pt-12 sm:pb-24 sm:pt-16">
      <div className="container-shell">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.55 }}
          className="overflow-hidden rounded-[36px] bg-gradient-to-br from-purple via-plum to-panel px-6 py-10 text-white shadow-glow sm:px-10 sm:py-14"
        >
          <div className="grid items-center gap-8 lg:grid-cols-[1.1fr_0.9fr]">
            <div>
              <SectionBadge>Join Wasla</SectionBadge>
              <h2 className="mt-5 max-w-2xl text-3xl font-bold text-white sm:text-4xl">
                Ready to run creator campaigns without agency stress?
              </h2>
              <p className="mt-4 max-w-2xl text-base text-white/80">
                Join the waitlist if you want a cleaner way to discover Tunisian creators, approve
                content, and manage payment milestones with more confidence.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Button
                  to="/pricing#campaign-templates"
                  variant="secondary"
                  size="lg"
                  className="border-white/10 bg-white text-purple hover:bg-cream"
                >
                  Explore campaign packages
                </Button>
                <Button
                  variant="ghost"
                  size="lg"
                  className="gap-2 text-white hover:bg-white/10 hover:text-white"
                  onClick={() => window.dispatchEvent(new Event('wasla:open-assistant'))}
                >
                  <MessageSquareText className="h-4 w-4" />
                  Talk to Wasla Assistant
                </Button>
              </div>
            </div>

            <div className="rounded-[28px] border border-white/10 bg-white/10 p-5 backdrop-blur-xl sm:p-6">
              <form className="space-y-4" onSubmit={handleSubmit}>
                <label htmlFor="waitlist-email" className="block text-sm font-semibold text-white">
                  Join the waitlist
                </label>
                <input
                  id="waitlist-email"
                  type="email"
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                  placeholder="you@brand.tn"
                  className="h-12 w-full rounded-2xl border border-white/10 bg-white/95 px-4 text-sm text-plum outline-none transition placeholder:text-plum/40 focus:border-cream focus:ring-2 focus:ring-cream/30"
                  aria-label="Email address"
                  required
                />
                <button
                  type="submit"
                  className="inline-flex h-12 w-full items-center justify-center gap-2 rounded-2xl bg-cream px-5 text-sm font-semibold text-purple transition hover:bg-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cream"
                >
                  Join the waitlist
                  <ArrowRight className="h-4 w-4" />
                </button>
              </form>
              <p className="mt-4 text-xs text-white/70">
                Demo-only frontend form. Submission is stored locally in UI state and does not hit a backend.
              </p>
              {submitted && (
                <div className="mt-4 flex items-start gap-3 rounded-2xl border border-white/10 bg-white/10 p-4">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-cream" />
                  <p className="text-sm text-white/80">
                    You're on the mock waitlist. In a real product, this would trigger a backend
                    signup flow or CRM capture.
                  </p>
                </div>
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FinalCTA;
