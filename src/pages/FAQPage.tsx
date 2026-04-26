import { Bot, CircleHelp, Globe2 } from 'lucide-react';
import FAQ from '../components/FAQ';
import PageHero from '../components/PageHero';
import RouteSeo from '../components/RouteSeo';

const FAQPage = () => {
  return (
    <>
      <RouteSeo
        title="FAQ | Wasla"
        description="Answers about how Wasla works for Tunisian brands and creators, including creator types, pricing logic, approvals, and payment flow."
      />
      <PageHero
        eyebrow="FAQ"
        title="The practical questions brands and creators ask before joining the Wasla waitlist."
        description="This page helps visitors understand the Tunisia-first positioning, creator model, campaign flow, and commercial logic without needing a sales call first."
        aside={
          <div className="grid w-full gap-4 sm:grid-cols-3 lg:grid-cols-1">
            {[
              {
                title: 'Clear positioning',
                copy: 'Explain what Wasla is and who it serves best.',
                icon: CircleHelp,
              },
              {
                title: 'Local context',
                copy: 'Reinforce the Tunisia-first angle throughout the answers.',
                icon: Globe2,
              },
              {
                title: 'Mock assistant',
                copy: 'The floating chatbot also helps answer common questions quickly.',
                icon: Bot,
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
      <FAQ />
    </>
  );
};

export default FAQPage;
