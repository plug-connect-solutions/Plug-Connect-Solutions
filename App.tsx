
import React, { useEffect } from 'react';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Home } from './pages/Home';
import { Consultation } from './pages/Consultation';
import { PrivacyPolicy } from './pages/PrivacyPolicy';
import { PricingPage } from './pages/PricingPage';
import { TermsOfService } from './pages/TermsOfService';
import { WebDesign } from './pages/WebDesign';
import { SocialMedia } from './pages/SocialMedia';
import { BusinessRegistration } from './pages/BusinessRegistration';
import { SitePreview } from './pages/SitePreview';
import { FloatingActionButton } from './components/ui/FloatingActionButton';

// Scroll to top on route change
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

// Layout wrapper to conditionally hide Header/Footer for preview pages
const LayoutWrapper: React.FC<{children: React.ReactNode}> = ({ children }) => {
  const location = useLocation();
  const isPreview = location.pathname.startsWith('/preview');

  return (
    <div className="flex flex-col min-h-screen font-sans text-primary bg-background">
      <ScrollToTop />
      {!isPreview && <Header />}
      {children}
      {!isPreview && <Footer />}
      {!isPreview && <FloatingActionButton />}
    </div>
  );
};

const App: React.FC = () => {
  return (
    <Router>
      <LayoutWrapper>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/pricing" element={<PricingPage />} />
          <Route path="/consultation" element={<Consultation />} />
          <Route path="/privacy" element={<PrivacyPolicy />} />
          <Route path="/terms" element={<TermsOfService />} />
          {/* New Service Routes */}
          <Route path="/web-design" element={<WebDesign />} />
          <Route path="/social-media" element={<SocialMedia />} />
          <Route path="/business-registration" element={<BusinessRegistration />} />
          {/* Preview Route */}
          <Route path="/preview/:templateId" element={<SitePreview />} />
        </Routes>
      </LayoutWrapper>
    </Router>
  );
};

export default App;
