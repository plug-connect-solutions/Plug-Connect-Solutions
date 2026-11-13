import React from 'react';
import { MessageSquare, PenTool, Search, Rocket } from 'lucide-react';

const steps = [
  {
    number: "01",
    title: "We Chat",
    description: "We have a quick call to understand your business and what you need.",
    icon: MessageSquare,
  },
  {
    number: "02",
    title: "We Build",
    description: "Our team designs your site or system while you focus on your work.",
    icon: PenTool,
  },
  {
    number: "03",
    title: "You Review",
    description: "We show you the draft. You tell us what you like or want to change.",
    icon: Search,
  },
  {
    number: "04",
    title: "Launch",
    description: "We put your site online and show you how to use it.",
    icon: Rocket,
  },
];

export const Process: React.FC = () => {
  return (
    <section className="py-14 lg:py-20 px-6 lg:px-16 bg-surface-container overflow-hidden" id="process">
      <div className="max-w-[1280px] mx-auto text-center mb-10">
        <span className="text-xs font-semibold uppercase tracking-[0.1em] text-accent block mb-2">
          THE PROCESS
        </span>
        <h2 className="font-heading text-4xl lg:text-[48px] font-semibold tracking-[-0.01em] text-primary mb-4">
          Simple 4-Step Process
        </h2>
        <p className="text-base text-on-surface-variant max-w-xl mx-auto leading-relaxed">
          We know you are busy. We have made our process as simple as possible so you can get results without the headache.
        </p>
      </div>

      <div className="max-w-[1280px] mx-auto mt-10 relative">
        {/* Connecting Line */}
        <div className="absolute top-10 left-0 w-full h-px bg-outline-variant hidden lg:block" />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          {steps.map((step, index) => (
            <div key={index} className="flex flex-col items-center text-center group">
              <div className="w-20 h-20 bg-surface border border-border-muted rounded-full flex items-center justify-center mb-8 relative z-10 group-hover:bg-accent group-hover:text-white group-hover:border-accent transition-all duration-300 text-primary">
                <step.icon size={28} strokeWidth={1.75} />
                <div className="absolute -top-2 -right-2 bg-accent text-white w-8 h-8 rounded-full flex items-center justify-center text-xs font-semibold tracking-[0.06em] tabular-nums">
                  {step.number}
                </div>
              </div>
              <h3 className="font-heading text-2xl font-semibold text-primary mb-2">
                {step.title}
              </h3>
              <p className="text-sm text-on-surface-variant px-4 leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};