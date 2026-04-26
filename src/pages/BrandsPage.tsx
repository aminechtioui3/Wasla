import { ArrowRight, BriefcaseBusiness, ShieldCheck, Sparkles } from 'lucide-react';
import Button from '../components/Button';
import CampaignTemplates from '../components/CampaignTemplates';
import PageHero from '../components/PageHero';
import ProblemSolution from '../components/ProblemSolution';
import RouteSeo from '../components/RouteSeo';

const BrandsPage = () => {
  return (
    <>
      <RouteSeo
        title="For Brands | Wasla"
        description="Launch creator campaigns with more clarity. Wasla helps Tunisian SMEs post briefs, review creator applications, approve content, and manage payment milestones."
      />
      <PageHero
        eyebrow="For brands"
        title="A cleaner creator workflow for Tunisian SMEs that want results without agency overhead."
        description="From the first campaign brief to final payout, Wasla gives small businesses a more organized way to discover creators, compare applications, approve deliverables, and keep campaign momentum high."
        aside={
          <div className="grid w-full gap-4 sm:grid-cols-3 lg:grid-cols-1">
            {[
              {
                title: 'Post faster',
                copy: 'Turn campaign ideas into guided briefs in minutes.',
                icon: BriefcaseBusiness,
              },
              {
                title: 'Match smarter',
                copy: 'Compare fit, niche, and creator quality with more confidence.',
                icon: Sparkles,
              },
              {
                title: 'Approve safely',
                copy: 'Use visible milestones before payment release.',
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
            <Button href="#campaign-templates" variant="secondary" className="gap-2 lg:w-fit">
              Explore campaign packages
              <ArrowRight className="h-4 w-4" />
            </Button>
          </div>
        }
      />
      <ProblemSolution />
      <CampaignTemplates />
    </>
  );
};

export default BrandsPage;
