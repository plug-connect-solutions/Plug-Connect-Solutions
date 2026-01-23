import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Hero } from '../components/sections/Hero';
import { Values } from '../components/sections/Values';
import { About } from '../components/sections/About';
import { Services } from '../components/sections/Services';
import { Process } from '../components/sections/Process';
import { Automation } from '../components/sections/Automation';
import { Pricing } from '../components/sections/Pricing';
import { Testimonials } from '../components/sections/Testimonials';
import { CTA } from '../components/sections/CTA';

export const Home: React.FC = () => {
  const location = useLocation();

  useEffect(() => {
    // Check if there is a state with scrollTo
    if (location.state && location.state.scrollTo) {
      const sectionId = location.state.scrollTo;
      const element = document.getElementById(sectionId);
      
      if (element) {
        // Add a small delay to ensure DOM is ready
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
      
      // Optional: Clear the state so it doesn't scroll again on refresh
      // window.history.replaceState({}, document.title);
    }
  }, [location]);

  return (
    <main className="flex-grow">
      <Hero />
      <Values />
      <About />
      <Services />
      <Process />
      <Automation />
      <Pricing />
      <Testimonials />
      <CTA />
    </main>
  );
};