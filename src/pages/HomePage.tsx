import CampaignTemplates from '../components/CampaignTemplates';
import FAQ from '../components/FAQ';
import Features from '../components/Features';
import Hero from '../components/Hero';
import HowItWorks from '../components/HowItWorks';
import InstagramShowcase from '../components/InstagramShowcase';
import Pricing from '../components/Pricing';
import ProblemSolution from '../components/ProblemSolution';
import RouteSeo from '../components/RouteSeo';
import TrustStrip from '../components/TrustStrip';

const HomePage = () => {
  return (
    <>
      <RouteSeo
        title="Wasla | Creator campaigns for Tunisian brands"
        description="Wasla helps Tunisian brands find local creators faster, approve content in one place, and manage safer creator payments with a premium mobile-first workflow."
      />
      <Hero />
      <TrustStrip />
      <ProblemSolution />
      <CampaignTemplates />
      <InstagramShowcase />
      <HowItWorks />
      <Features />
      <Pricing />
      <FAQ />
    </>
  );
};

export default HomePage;
