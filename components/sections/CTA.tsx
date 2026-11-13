import React from 'react';
import { Calendar } from 'lucide-react';
import { Link } from 'react-router-dom';

export const CTA: React.FC = () => {
  return (
    <section className="py-14 lg:py-20 px-6 lg:px-16 bg-surface">
      <div className="max-w-[1280px] mx-auto bg-primary rounded-3xl p-10 sm:p-16 text-center relative overflow-hidden">
        <div className="relative z-10">
          <h2 className="font-heading text-4xl sm:text-5xl lg:text-[72px] font-bold leading-[1.1] tracking-[-0.02em] text-white mb-4 text-balance">
            Ready to Scale Your Business?
          </h2>
          <p className="text-lg text-white/70 mb-8 max-w-2xl mx-auto leading-relaxed">
            Your competition isn't waiting. Book a free 30-minute discovery call to discuss your goals and how we can help you achieve them.
          </p>
          <Link to="/consultation">
            <button className="bg-accent text-white px-10 py-5 text-xs font-semibold uppercase tracking-[0.1em] rounded-xl hover:bg-secondary-container transition-all duration-300 inline-flex items-center gap-3">
              Book a Free Consultation <Calendar size={18} />
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};