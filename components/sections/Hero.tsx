import React from 'react';
import { Button } from '../ui/Button';
import { ArrowRight, CheckCircle } from 'lucide-react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const trustedCompanies = [
  "Local Retailers", "Law Firms", "Logistics", "Home Services", "Startups"
];

export const Hero: React.FC = () => {
  const scrollToServices = () => {
    const element = document.getElementById('services');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };
  return (
    <section className="relative w-full pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden bg-white">
      {/* Abstract Background Element */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-accent/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 z-0 pointer-events-none"></div>
      
      <div className="container relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          
          <div className="flex-1 text-center lg:text-left">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center space-x-2 bg-blue-50 border border-blue-100 px-3 py-1 rounded-full mb-8"
            >
              <span className="w-2 h-2 rounded-full bg-accent animate-pulse"></span>
              <span className="text-xs font-semibold text-accent uppercase tracking-wide">Open for New Projects</span>
            </motion.div>

            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-heading text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-primary leading-[1.1] mb-6"
            >
              Get Your Business <br />
              <span className="relative inline-block">
                <span className="relative z-10 text-transparent bg-clip-text bg-gradient-to-r from-primary via-blue-600 to-primary">Online Today</span>
                <span className="absolute bottom-2 left-0 w-full h-3 bg-accent/20 -z-0"></span>
              </span>
            </motion.h1>

            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg md:text-xl text-gray-500 mb-8 leading-relaxed max-w-2xl mx-auto lg:mx-0"
            >
              We help South African businesses grow. From professional websites to systems that help you run your day-to-day work, we make technology simple and affordable.
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <Link to="/consultation">
                  <Button size="lg" variant="accent" className="w-full sm:w-auto rounded-full text-white font-bold shadow-blue-200">
                  Get Started <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
              </Link>
                <Button onClick={scrollToServices} size="lg" variant="outline" className="w-full sm:w-auto rounded-full bg-white hover:text-accent border-gray-200">
                  View Our Services
                </Button>
            </motion.div>

            {/* Trust Signals */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 1 }}
              className="mt-12 pt-8 border-t border-gray-100"
            >
              <p className="text-sm font-medium text-gray-400 mb-4 uppercase tracking-wider">Helping businesses in sectors like:</p>
              <div className="flex flex-wrap justify-center lg:justify-start gap-4 grayscale opacity-70">
                {trustedCompanies.map((company) => (
                  <span key={company} className="text-base font-bold text-gray-400 bg-gray-50 px-3 py-1 rounded-md">{company}</span>
                ))}
              </div>
            </motion.div>
          </div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex-1 relative w-full max-w-lg lg:max-w-none"
          >
            <div className="relative aspect-square md:aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
              <img 
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=2070&auto=format&fit=crop" 
                alt="Business meeting in South Africa" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              
              <div className="absolute bottom-6 left-6 right-6 p-4 bg-white/90 backdrop-blur-md rounded-xl shadow-lg border border-white/50">
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-green-100 text-green-600 rounded-lg">
                    <CheckCircle size={24} />
                  </div>
                  <div>
                    <p className="font-bold text-gray-900">Online & Open</p>
                    <p className="text-xs text-gray-500">Reach customers 24/7</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Decorative dots */}
            <div className="absolute -bottom-10 -left-10 w-24 h-24 bg-accent/20 rounded-full blur-xl"></div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
