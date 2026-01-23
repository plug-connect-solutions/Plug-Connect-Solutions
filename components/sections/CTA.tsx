import React from 'react';
import { Button } from '../ui/Button';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export const CTA: React.FC = () => {
  return (
    <section className="py-24 bg-primary text-white relative overflow-hidden">
      {/* Background Shapes */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-accent/10 rounded-full blur-[100px] translate-x-1/3 -translate-y-1/3"></div>
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[100px] -translate-x-1/3 translate-y-1/3"></div>
      </div>
      
      <div className="container relative z-10 text-center">
        <h2 className="font-heading text-4xl md:text-6xl font-bold mb-6 tracking-tight">Ready to Scale Your Business?</h2>
        <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-10 leading-relaxed">
          Your competition isn't waiting. Book a free 30-minute discovery call to discuss your goals and how we can help you achieve them.
        </p>
        <Link to="/consultation">
          <Button size="xl" variant="accent" className="font-bold text-lg rounded-full px-12 py-6">
            Book a Free Consultation <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </Link>
      </div>
    </section>
  );
};