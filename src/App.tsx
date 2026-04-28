import { AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import LoadingScreen from './components/LoadingScreen';
import AppShell from './layouts/AppShell';
import BrandsPage from './pages/BrandsPage';
import CreatorsPage from './pages/CreatorsPage';
import FAQPage from './pages/FAQPage';
import HomePage from './pages/HomePage';
import HowItWorksPage from './pages/HowItWorksPage';
import PricingPage from './pages/PricingPage';

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  const handleLoadingComplete = () => {
    setIsLoading(false);
  };

  return (
    <AnimatePresence mode="wait">
      {isLoading ? (
        <LoadingScreen key="loading" onComplete={handleLoadingComplete} />
      ) : (
        <Routes key="app">
          <Route element={<AppShell />}>
            <Route path="/" element={<HomePage />} />
            <Route path="/brands" element={<BrandsPage />} />
            <Route path="/creators" element={<CreatorsPage />} />
            <Route path="/how-it-works" element={<HowItWorksPage />} />
            <Route path="/pricing" element={<PricingPage />} />
            <Route path="/faq" element={<FAQPage />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Route>
        </Routes>
      )}
    </AnimatePresence>
  );
};

export default App;
