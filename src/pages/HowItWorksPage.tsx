import { CheckCheck, MessageSquareText, Workflow } from 'lucide-react';
import HowItWorks from '../components/HowItWorks';
import PageHero from '../components/PageHero';
import RouteSeo from '../components/RouteSeo';

const HowItWorksPage = () => {
  return (
    <>
      <RouteSeo
        title="How It Works | Wasla"
        description="See how Wasla moves creator campaigns from posting to approval and payment with a simpler workflow for both brands and creators."
      />
      <PageHero
        eyebrow="How it works"
        title="The Wasla flow keeps both sides aligned from campaign brief to final payout."
        description="Brands and creators follow a shared sequence instead of juggling scattered conversations. That means fewer delays, faster approvals, and a more confident campaign experience."
        aside={
          <div className="grid w-full gap-4 sm:grid-cols-3 lg:grid-cols-1">
            {[
              {
                title: 'Shared workflow',
                copy: 'Both sides understand the next step at every stage.',
                icon: Workflow,
              },
              {
                title: 'Approval clarity',
                copy: 'Feedback and revisions stay visible in one place.',
                icon: CheckCheck,
              },
              {
                title: 'Better communication',
                copy: 'Campaign chat stays connected to the deliverable itself.',
                icon: MessageSquareText,
              },
            ].map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.title} className="rounded-[24px] border border-purple/10 bg-white/80 p-5 shadow-soft">
                  <div className="mb-3 inline-flex rounded-2xl bg-purple/10 p-3 text-purple">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h2 className="text-lg font-bold">{item.title}</h2>
                  <p className="mt-2 text-sm">{item.copy}</p>
                </div>
              );
            })}
          </div>
        }
      />
      <HowItWorks />
    </>
  );
};

export default HowItWorksPage;
