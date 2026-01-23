import React from 'react';
import { MessageSquare, PenTool, Search, Rocket } from 'lucide-react';

const steps = [
  {
    number: "01",
    title: "We Chat",
    description: "We have a quick call to understand your business and what you need.",
    icon: MessageSquare
  },
  {
    number: "02",
    title: "We Build",
    description: "Our team designs your site or system while you focus on your work.",
    icon: PenTool
  },
  {
    number: "03",
    title: "You Review",
    description: "We show you the draft. You tell us what you like or want to change.",
    icon: Search
  },
  {
    number: "04",
    title: "Launch",
    description: "We put your site online and show you how to use it.",
    icon: Rocket
  }
];

export const Process: React.FC = () => {
  return (
    <section className="py-24 bg-white border-t border-gray-100" id="process">
      <div className="container">
        <div className="text-center mb-16">
          <span className="text-accent font-bold tracking-wider uppercase text-sm mb-2 block">The Process</span>
          <h2 className="font-heading text-3xl md:text-5xl font-bold text-primary mb-4">Simple 4-Step Process</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            We know you are busy. We have made our process as simple as possible so you can get results without the headache.
          </p>
        </div>

        <div className="relative grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Connecting Line (Desktop Only) */}
          <div className="hidden md:block absolute top-12 left-[12%] right-[12%] h-0.5 bg-gray-100 -z-10"></div>

          {steps.map((step, index) => (
            <div key={index} className="relative flex flex-col items-center text-center bg-white p-4">
              <div className="w-24 h-24 bg-white border-4 border-gray-50 rounded-full flex items-center justify-center mb-6 shadow-sm relative">
                <div className="w-20 h-20 bg-secondary rounded-full flex items-center justify-center text-primary group-hover:bg-accent group-hover:text-white transition-colors">
                  <step.icon size={32} />
                </div>
                <div className="absolute -top-2 -right-2 bg-accent text-white text-xs font-bold w-8 h-8 rounded-full flex items-center justify-center border-4 border-white">
                  {step.number}
                </div>
              </div>
              <h3 className="text-xl font-bold text-primary mb-3">{step.title}</h3>
              <p className="text-sm text-gray-500 leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};