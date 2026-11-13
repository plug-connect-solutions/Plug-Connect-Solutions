import React, { useState } from 'react';
import { Check, Shield, Zap, TrendingUp, Users } from 'lucide-react';

export const About: React.FC = () => {
  const [imgFailed, setImgFailed] = useState(false);

  return (
    <section className="py-14 lg:py-20 px-6 lg:px-16 bg-surface border-t border-border-muted/50 overflow-hidden" id="about">
      <div className="max-w-[1280px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        <div className="lg:col-span-5 relative order-2 lg:order-1">
          <div className="aspect-square rounded-lg overflow-hidden border border-border-muted bg-surface-container">
            {imgFailed ? (
              <div className="w-full h-full flex items-center justify-center p-8 text-center bg-gradient-to-br from-surface-container to-secondary-fixed/30">
                <span className="font-heading text-xl font-semibold text-primary">Plug Connect Solutions</span>
              </div>
            ) : (
              <img
                src="/assets/about_img.png"
                alt="Team discussing digital solutions"
                referrerPolicy="no-referrer"
                onError={() => setImgFailed(true)}
                className="w-full h-full object-cover"
              />
            )}
          </div>

          <div className="sm:absolute sm:-bottom-6 sm:-right-6 mt-4 sm:mt-0 bg-surface p-5 rounded-lg shadow-xl border border-border-muted flex items-center gap-4 max-w-xs">
            <div className="p-2.5 bg-secondary-fixed text-on-secondary-fixed rounded-lg shrink-0">
              <Users size={18} />
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.1em] text-primary">Client Focused</p>
              <p className="text-xs text-on-surface-variant mt-0.5">Tailored solutions for your goals</p>
            </div>
          </div>
        </div>

        <div className="lg:col-span-7 order-1 lg:order-2">
          <span className="text-xs font-semibold uppercase tracking-[0.1em] text-accent block mb-3">
            About Us
          </span>
          <h2 className="font-heading text-4xl lg:text-[48px] font-semibold leading-[1.15] tracking-[-0.01em] text-primary mb-6 text-balance">
            Smart, Simple, &amp; Affordable Digital Growth.
          </h2>

          <p className="text-lg text-on-surface-variant mb-5 leading-relaxed">
            Plug Connect Solutions provides practical digital solutions designed specifically for small businesses and service providers. We help you establish a strong online presence through websites, automation, and digital tools that work harder than you do.
          </p>

          <p className="text-base text-on-surface-variant mb-10 leading-relaxed">
            Our focus is on simplicity, affordability, and real business value. We work closely with you to understand your needs, delivering tailored solutions designed to help you operate more efficiently and attract more customers online.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-6 border-t border-border-muted">
            <div className="flex items-start gap-3.5">
              <div className="p-2.5 rounded-md bg-surface-container text-accent shrink-0">
                <Zap size={18} />
              </div>
              <div>
                <span className="font-heading font-semibold text-primary block">Speed</span>
                <span className="text-sm text-on-surface-variant">We launch your projects fast so you can start growing.</span>
              </div>
            </div>

            <div className="flex items-start gap-3.5">
              <div className="p-2.5 rounded-md bg-surface-container text-accent shrink-0">
                <Shield size={18} />
              </div>
              <div>
                <span className="font-heading font-semibold text-primary block">Reliability</span>
                <span className="text-sm text-on-surface-variant">Secure, stable systems you can rely on 24/7.</span>
              </div>
            </div>

            <div className="flex items-start gap-3.5">
              <div className="p-2.5 rounded-md bg-surface-container text-accent shrink-0">
                <Check size={18} />
              </div>
              <div>
                <span className="font-heading font-semibold text-primary block">Clarity</span>
                <span className="text-sm text-on-surface-variant">No confusing jargon. We speak your language.</span>
              </div>
            </div>

            <div className="flex items-start gap-3.5">
              <div className="p-2.5 rounded-md bg-surface-container text-accent shrink-0">
                <TrendingUp size={18} />
              </div>
              <div>
                <span className="font-heading font-semibold text-primary block">Affordability</span>
                <span className="text-sm text-on-surface-variant">Professional results that fit your budget.</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};