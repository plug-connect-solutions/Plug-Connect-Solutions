import React, { useState } from 'react';
import { Layers, DollarSign, Rocket } from 'lucide-react';
import { motion } from 'framer-motion';

export const Values: React.FC = () => {
  const [workspaceImgFailed, setWorkspaceImgFailed] = useState(false);
  const [growthImgFailed, setGrowthImgFailed] = useState(false);

  return (
    <section className="py-14 lg:py-20 px-6 lg:px-16 bg-surface-warm" id="values">
      <div className="max-w-[1280px] mx-auto">
        <div className="text-center mb-10 lg:mb-12">
          <h2 className="font-heading text-4xl lg:text-[48px] font-semibold tracking-[-0.01em] text-primary mb-4">
            Why Choose Us?
          </h2>
          <p className="text-base text-on-surface-variant max-w-2xl mx-auto leading-relaxed">
            We understand that technology can be confusing. We make it simple, useful, and profitable for your business.
          </p>
        </div>

        <div className="grid grid-cols-12 gap-6 lg:gap-8">
          {/* Large Feature (Left 8 cols) */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45 }}
            className="col-span-12 lg:col-span-8 bg-surface p-8 lg:p-12 rounded-lg border border-border-muted hover-lift group"
          >
            <div className="flex flex-col md:flex-row gap-8 items-center">
              <div className="w-full md:w-1/2">
                <Layers size={34} className="text-accent mb-6" strokeWidth={1.75} />
                <h3 className="font-heading text-2xl lg:text-[32px] font-semibold leading-tight text-primary mb-4">
                  Everything In One Place
                </h3>
                <p className="text-base text-on-surface-variant leading-relaxed">
                  Design, websites, and help with social media all under one roof. You don't need to hire five different people. We keep your whole online presence looking sharp and working together.
                </p>
              </div>
              <div className="w-full md:w-1/2 aspect-square rounded overflow-hidden bg-surface-container relative">
                {workspaceImgFailed ? (
                  <div className="w-full h-full bg-gradient-to-br from-surface-container to-secondary-fixed/50 flex items-center justify-center p-6 text-center">
                    <span className="font-heading text-lg font-semibold text-primary">All Your Digital Tools Together</span>
                  </div>
                ) : (
                  <img
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuColczmbA7X8_YuXcejhVkjbQ9OB1G6c1WoLKa0w4R_l-7-RqGKHfAudrtDNecK9zhKNHIwayzdaPf4vcjntL27fOPKndtAWBosWCx0vXc8bnr04F07q1LB7m1Jumo50PQo5U7i7bGOTqvRJpTk6eZZWk_WNPJbEhFTOCy805HEeYZxhKXwPDd_b3Xgr3OJP1A4TQ3VCauAWHhzP7G1q7F8nZIx_1BfNsIyj4c-_ZSfCqV7MEBPvJ8cYw"
                    alt="Modern workspace with website design tools"
                    referrerPolicy="no-referrer"
                    onError={() => setWorkspaceImgFailed(true)}
                    className="object-cover w-full h-full opacity-90 group-hover:scale-105 transition-transform duration-700"
                  />
                )}
              </div>
            </div>
          </motion.div>

          {/* Clear Pricing (Right 4 cols - Solid Black) */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: 0.08 }}
            className="col-span-12 lg:col-span-4 bg-primary text-white p-8 lg:p-12 rounded-lg hover-lift flex flex-col justify-start"
          >
            <DollarSign size={34} className="text-secondary-fixed mb-6" strokeWidth={1.75} />
            <h3 className="font-heading text-2xl lg:text-[32px] font-semibold leading-tight mb-4">
              Clear Pricing
            </h3>
            <p className="text-base text-white/80 leading-relaxed">
              You know exactly what you pay before we start. No hidden costs or surprise bills at the end of the month.
            </p>
          </motion.div>

          {/* Built To Grow (Bottom Left 4 cols) */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: 0.14 }}
            className="col-span-12 md:col-span-6 lg:col-span-4 bg-surface p-8 lg:p-12 rounded-lg border border-border-muted hover-lift"
          >
            <Rocket size={34} className="text-accent mb-6" strokeWidth={1.75} />
            <h3 className="font-heading text-2xl lg:text-[32px] font-semibold leading-tight text-primary mb-4">
              Built To Grow
            </h3>
            <p className="text-base text-on-surface-variant leading-relaxed">
              We build websites and systems that grow with your business, so you can handle more customers without starting over from scratch.
            </p>
          </motion.div>

          {/* Smart Digital Growth (Bottom Right 8 cols - Image Overlay Card) */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: 0.2 }}
            className="col-span-12 md:col-span-6 lg:col-span-8 overflow-hidden rounded-lg border border-border-muted relative group min-h-[360px] lg:min-h-[400px]"
          >
            {growthImgFailed ? (
              <div className="w-full h-full min-h-[360px] bg-primary-container" />
            ) : (
              <img
                src="/assets/digitalgrowth_img.png"
                alt="Team planning smart digital growth"
                referrerPolicy="no-referrer"
                onError={() => setGrowthImgFailed(true)}
                className="w-full h-full min-h-[360px] lg:h-[400px] object-cover group-hover:scale-105 transition-transform duration-700"
              />
            )}
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/45 to-black/15 z-10 p-8 lg:p-12 flex flex-col justify-end">
              <h3 className="font-heading text-2xl lg:text-[32px] font-semibold text-white mb-2">
                Simple Digital Growth
              </h3>
              <p className="text-base text-white/85 max-w-md leading-relaxed">
                Practical websites and tools made to save you time and bring more paying customers to your business.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};