import { ChartBarIncreasing, Layers3, ShieldCheck } from 'lucide-react';
import CampaignTemplates from '../components/CampaignTemplates';
import PageHero from '../components/PageHero';
import Pricing from '../components/Pricing';
import RouteSeo from '../components/RouteSeo';

const PricingPage = () => {
  return (
    <>
      <RouteSeo
        title="Pricing | Wasla"
        description="Explore Wasla pricing for small campaigns, recurring creator programs, and managed support for Tunisian brands."
      />
      <PageHero
        eyebrow="Pricing"
        title="Commercial packaging that helps brands start small, then scale creator marketing with confidence."
        description="Wasla's pricing structure is designed to feel understandable to SMEs while still giving growing teams better control, filtering, and campaign support."
        aside={
          <div className="grid w-full gap-4 sm:grid-cols-3 lg:grid-cols-1">
            {[
              {
                title: 'Accessible entry',
                copy: 'Ideal for brands validating creator marketing without heavy commitments.',
                icon: Layers3,
              },
              {
                title: 'Growth-ready',
                copy: 'Structured for teams that need repeatable monthly campaign operations.',
                icon: ChartBarIncreasing,
              },
              {
                title: 'Support when needed',
                copy: 'Managed help can reduce setup friction for busier teams.',
                icon: ShieldCheck,
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
      <Pricing />
      <CampaignTemplates />
    </>
  );
};

export default PricingPage;
