import React from 'react';
import { Card, CardContent } from '../ui/Card';
import { Layers, DollarSign, Zap, Rocket } from 'lucide-react';
import { ValueProp } from '../../types';
import { motion } from 'framer-motion';

const values: ValueProp[] = [
  {
    title: "Everything In One Place",
    description: "Design, code, and help with social media. You don't need to hire five different people.",
    icon: Layers
  },
  {
    title: "Clear Pricing",
    description: "You know exactly what you pay. No hidden costs or surprise bills at the end of the month.",
    icon: DollarSign
  },
  {
    title: "Fast Delivery",
    description: "We work quickly so you can start using your new website or system as soon as possible.",
    icon: Zap
  },
  {
    title: "Built To Grow",
    description: "We build systems that can handle more customers as your business gets bigger.",
    icon: Rocket
  }
];

export const Values: React.FC = () => {
  return (
    <section className="py-24 bg-secondary/30" id="values">
      <div className="container">
        <div className="text-center mb-20">
          <h2 className="font-heading text-3xl md:text-5xl font-bold text-primary mb-6">Why Choose Us?</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We understand that technology can be confusing. We make it simple, useful, and profitable for your business.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((val, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              <Card className="h-full border-none shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 bg-white">
                <CardContent className="pt-8 text-center flex flex-col items-center h-full">
                  <div className="w-16 h-16 rounded-2xl bg-secondary flex items-center justify-center mb-6 text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                    <val.icon size={32} strokeWidth={1.5} />
                  </div>
                  <h3 className="text-xl font-bold mb-3">{val.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{val.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};