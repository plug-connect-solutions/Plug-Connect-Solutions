import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';
import { Testimonial } from '../../types';

const testimonials: Testimonial[] = [
  {
    id: 1,
    quote: "Plug Connect Solutions really helped me get my student accommodation business online. Now people can find us all across social media and we get way more tenants.",
    author: "Tshepo Sekhoahla",
    role: "Owner",
    company: "MTR VISION 30",
    image: "/images/testimonials/mtrvision30_logo.jpg"
  },
  {
    id: 2,
    quote: "Helped me understand how websites work, which tech stacks I align with and that helped me build my own professional website where my customers can find me",
    author: "Obakeng Kobuane",
    role: "Owner",
    company: "Obby's PC Solutions",
    image: "/images/testimonials/Obby.jpg"
  },
];

export const Testimonials: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Preload and decode all testimonial images upfront so image and text switch in sync
  useEffect(() => {
    testimonials.forEach((item) => {
      const img = new Image();
      img.src = item.image;
      if (typeof img.decode === 'function') {
        img.decode().catch(() => {});
      }
    });
  }, []);

  const next = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prev = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const active = testimonials[currentIndex];

  return (
    <section className="py-14 lg:py-20 px-6 lg:px-16 bg-surface-warm" id="testimonials">
      <div className="max-w-[1280px] mx-auto">
        <div className="bg-surface p-8 sm:p-12 lg:p-16 rounded-2xl shadow-sm border border-border-muted relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-accent/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl pointer-events-none" />

          <div className="flex flex-col md:flex-row gap-10 lg:gap-12 items-center relative z-10">
            <div className="w-40 h-40 lg:w-48 lg:h-48 shrink-0 relative rounded-full border-4 border-surface shadow-lg bg-white overflow-hidden">
              {testimonials.map((item, idx) => (
                <img
                  key={item.id}
                  src={item.image}
                  alt={item.author}
                  loading="eager"
                  decoding="sync"
                  className={`absolute inset-0 w-full h-full object-cover ${
                    idx === currentIndex ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'
                  }`}
                />
              ))}
            </div>

            <div className="flex-grow text-center md:text-left">
              <div className="flex justify-center md:justify-start gap-1 mb-6 text-accent">
                {[1, 2, 3, 4, 5].map((i) => (
                  <Star key={i} size={20} fill="currentColor" />
                ))}
              </div>

              <blockquote className="font-heading text-2xl lg:text-[32px] font-semibold leading-[1.3] italic text-primary mb-8 text-balance">
                "{active.quote}"
              </blockquote>

              <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                <cite className="not-italic">
                  <span className="block font-bold text-lg text-primary">{active.author}</span>
                  <span className="text-on-surface-variant text-xs font-semibold uppercase tracking-[0.1em]">
                    {active.role}, {active.company}
                  </span>
                </cite>

                <div className="flex items-center gap-3">
                  <button
                    onClick={prev}
                    aria-label="Previous testimonial"
                    className="w-10 h-10 rounded-full bg-surface-warm border border-border-muted flex items-center justify-center text-primary hover:border-accent hover:text-accent transition-colors"
                  >
                    <ChevronLeft size={18} />
                  </button>
                  <button
                    onClick={next}
                    aria-label="Next testimonial"
                    className="w-10 h-10 rounded-full bg-surface-warm border border-border-muted flex items-center justify-center text-primary hover:border-accent hover:text-accent transition-colors"
                  >
                    <ChevronRight size={18} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
