import React from 'react';
import { Check, Clock, Shield, Zap, TrendingUp, Users } from 'lucide-react';

export const About: React.FC = () => {
  return (
    <section className="py-20 md:py-32 bg-[#F5F5F5] overflow-hidden" id="about">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <div className="relative order-2 lg:order-1">
            <div className="absolute -top-10 -left-10 w-40 h-40 bg-accent rounded-full opacity-20 blur-3xl"></div>
            <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-primary rounded-full opacity-10 blur-3xl"></div>
            <img 
              src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&q=80&w=2070" 
              alt="Team discussing digital solutions" 
              className="relative z-10 rounded-2xl shadow-2xl w-full object-cover aspect-square"
            />
            
            {/* Floating Card */}
            <div className="absolute -bottom-6 -right-6 z-20 bg-white p-6 rounded-xl shadow-xl max-w-xs hidden md:block">
              <div className="flex items-center space-x-3 mb-2">
                <div className="p-2 bg-green-100 rounded-full text-green-600">
                    <Users size={18} />
                </div>
                <p className="font-bold text-lg text-primary">Client Focused</p>
              </div>
              <p className="text-sm text-gray-500"> tailored solutions for your goals.</p>
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <h2 className="text-sm font-bold text-accent uppercase tracking-wider mb-2">About Us</h2>
            <h3 className="text-3xl md:text-5xl font-bold text-primary mb-6">Smart, Simple, & Affordable Digital Growth.</h3>
            
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              Plug Connect Solutions provides practical digital solutions designed specifically for small businesses and service providers. We help you establish a strong online presence through websites, automation, and digital tools that work harder than you do.
            </p>
            
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Our focus is on simplicity, affordability, and real business value. We work closely with you to understand your needs, delivering tailored solutions designed to help you operate more efficiently and attract more customers online.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-6 gap-x-4">
              <div className="flex items-start space-x-3">
                <div className="bg-white p-2 rounded-full text-accent shadow-sm shrink-0 mt-1">
                    <Zap size={18} />
                </div>
                <div>
                  <span className="font-bold text-gray-900 block">Speed</span>
                  <span className="text-sm text-gray-500">We launch your projects fast so you can start growing.</span>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <div className="bg-white p-2 rounded-full text-accent shadow-sm shrink-0 mt-1">
                    <Shield size={18} />
                </div>
                <div>
                  <span className="font-bold text-gray-900 block">Reliability</span>
                  <span className="text-sm text-gray-500">Secure, stable systems you can rely on 24/7.</span>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <div className="bg-white p-2 rounded-full text-accent shadow-sm shrink-0 mt-1">
                    <Check size={18} />
                </div>
                <div>
                  <span className="font-bold text-gray-900 block">Clarity</span>
                  <span className="text-sm text-gray-500">No confusing jargon. We speak your language.</span>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <div className="bg-white p-2 rounded-full text-accent shadow-sm shrink-0 mt-1">
                    <TrendingUp size={18} />
                </div>
                <div>
                  <span className="font-bold text-gray-900 block">Affordability</span>
                  <span className="text-sm text-gray-500">Professional results that fit your budget.</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};