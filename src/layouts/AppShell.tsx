import { Outlet } from 'react-router-dom';
import AnimatedNetworkBackground from '../components/AnimatedNetworkBackground';
import Chatbot from '../components/Chatbot';
import FinalCTA from '../components/FinalCTA';
import Footer from '../components/Footer';
import Header from '../components/Header';
import ScrollToTop from '../components/ScrollToTop';

const AppShell = () => {
  return (
    <div className="relative min-h-screen overflow-x-hidden text-plum">
      <AnimatedNetworkBackground />
      <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[46rem] bg-hero-glow" />
      <div className="pointer-events-none absolute left-[-10%] top-64 -z-10 h-80 w-80 rounded-full bg-cream/65 blur-3xl" />
      <div className="pointer-events-none absolute right-[-12%] top-[30rem] -z-10 h-[28rem] w-[28rem] rounded-full bg-rose/15 blur-3xl" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 -z-10 h-[28rem] bg-[radial-gradient(circle_at_center,rgba(114,0,101,0.06),transparent_55%)]" />
      <ScrollToTop />
      <Header />
      <main>
        <Outlet />
      </main>
      <FinalCTA />
      <Footer />
      <Chatbot />
    </div>
  );
};

export default AppShell;
