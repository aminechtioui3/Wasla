import { BadgeCheck, Camera, Wallet } from 'lucide-react';
import CreatorCategories from '../components/CreatorCategories';
import PageHero from '../components/PageHero';
import RouteSeo from '../components/RouteSeo';
import Testimonials from '../components/Testimonials';

const CreatorsPage = () => {
  return (
    <>
      <RouteSeo
        title="For Creators | Wasla"
        description="Wasla helps Tunisian UGC creators, nano influencers, and micro influencers discover campaigns, submit content, and track payment status with less chaos."
      />
      <PageHero
        eyebrow="For creators"
        title="A more professional home for Tunisian creator work."
        description="Wasla is built for creators who want a clearer way to find campaigns, apply with confidence, keep approvals organized, and understand exactly where payment stands."
        aside={
          <div className="grid w-full gap-4 sm:grid-cols-3 lg:grid-cols-1">
            {[
              {
                title: 'Show your style',
                copy: 'Present your niche, rates, and content quality more clearly.',
                icon: Camera,
              },
              {
                title: 'Build trust',
                copy: 'Use ratings and campaign history to strengthen your profile.',
                icon: BadgeCheck,
              },
              {
                title: 'Track payouts',
                copy: 'Reduce uncertainty around approvals and payment timing.',
                icon: Wallet,
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
      <CreatorCategories />
      <Testimonials />
    </>
  );
};

export default CreatorsPage;
