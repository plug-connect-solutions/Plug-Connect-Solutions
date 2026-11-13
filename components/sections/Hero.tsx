import React, { useState } from 'react';
import { ArrowRight, Zap } from 'lucide-react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const trustedCompanies = [
  "Local Retailers", "Law Firms", "Logistics", "Home Services", "Startups"
];

export const Hero: React.FC = () => {
  const [heroImgFailed, setHeroImgFailed] = useState(false);

  const scrollToServices = () => {
    const element = document.getElementById('services');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <header className="relative pt-28 lg:pt-32 pb-12 lg:pb-16 px-6 lg:px-16 overflow-hidden bg-surface">
        <div className="max-w-[1280px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55 }}
            className="lg:col-span-6 z-10"
          >
            <span className="inline-block mb-6 px-4 py-1.5 bg-secondary-fixed text-on-secondary-fixed text-xs font-semibold uppercase tracking-[0.1em] rounded-full">
              OPEN FOR NEW PROJECTS
            </span>

            <h1 className="font-heading text-5xl sm:text-6xl lg:text-[72px] font-bold leading-[1.08] tracking-[-0.02em] text-primary mb-5 text-balance">
              Get Your Business <span className="text-accent">Online</span> Today
            </h1>

            <p className="text-lg text-on-surface-variant leading-relaxed mb-8 max-w-xl text-balance">
              We help South African businesses grow. From professional websites to systems that help you run your day-to-day work, we make technology simple and affordable.
            </p>

            <div className="flex flex-wrap gap-4">
              <Link to="/consultation">
                <button className="bg-primary text-white px-8 py-4 text-xs font-semibold uppercase tracking-[0.1em] rounded-md hover:bg-accent transition-all duration-300 inline-flex items-center gap-2 whitespace-nowrap">
                  Get Started <ArrowRight size={16} />
                </button>
              </Link>
              <button
                onClick={scrollToServices}
                className="border border-outline/60 text-primary px-8 py-4 text-xs font-semibold uppercase tracking-[0.1em] rounded-md hover:bg-surface-container transition-all duration-200 whitespace-nowrap"
              >
                View Our Services
              </button>
            </div>
          </motion.div>

          {/* Right Column */}
          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="lg:col-span-6 relative mt-10 lg:mt-0"
          >
            <div className="aspect-[1.5/1] rounded-lg overflow-hidden shadow-2xl shadow-accent/10 border border-border-muted bg-surface-warm p-3 sm:p-4">
              {heroImgFailed ? (
                <div className="w-full h-full rounded bg-gradient-to-br from-surface-container to-secondary-fixed/40 flex items-center justify-center p-8 text-center">
                  <div>
                    <p className="font-heading text-2xl font-bold text-primary mb-2">Plug Connect Solutions</p>
                    <p className="text-sm text-on-surface-variant">Web Design, Automation &amp; Digital Growth</p>
                  </div>
                </div>
              ) : (
                <img
                  src="/assets/header_img.png"
                  alt="Business meeting in South Africa"
                  referrerPolicy="no-referrer"
                  onError={() => setHeroImgFailed(true)}
                  className="w-full h-full rounded object-cover"
                />
              )}
            </div>

            {/* Floating Fast Delivery Badge Card */}
            <div className="sm:absolute sm:-bottom-8 sm:-left-8 mt-4 sm:mt-0 bg-surface p-5 rounded-lg shadow-xl border border-border-muted flex items-center gap-4 max-w-xs">
              <div className="bg-secondary-container text-on-secondary-container p-3 rounded-lg shrink-0">
                <Zap size={20} fill="currentColor" />
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.1em] text-primary">Fast Delivery</p>
                <p className="text-xs text-on-surface-variant mt-0.5">Systems live in under 7 days</p>
              </div>
            </div>
          </motion.div>
        </div>
      </header>

      {/* Trusted By / Sectors Strip */}
      <section className="bg-surface-container py-8 px-6 lg:px-16 border-y border-border-muted/40">
        <div className="max-w-[1280px] mx-auto">
          <p className="text-center text-xs font-semibold uppercase tracking-[0.1em] text-on-surface-variant mb-5">
            HELPING BUSINESSES IN SECTORS LIKE
          </p>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
            {trustedCompanies.map((company) => (
              <span
                key={company}
                className="font-heading text-2xl md:text-[32px] font-semibold text-on-surface/30 hover:text-on-surface/70 transition-colors duration-300 select-none"
              >
                {company}
              </span>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};
