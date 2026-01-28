import React, { useState } from 'react';
import { Card, CardContent } from '../ui/Card';
import { ChevronLeft, ChevronRight, Quote, Star } from 'lucide-react';
import { Testimonial } from '../../types';

import mtrImg from '../../images/testimonials/mtrvision30_logo.jpg';
import obbyImg from '../../images/testimonials/Obby.jpg';

const testimonials: Testimonial[] = [
  {
    id: 1,
    quote: "Plug Connect Solutions really helped me get my student accommodation business online. Now people can find us all across social media and we get way more tenants.",
    author: "Tshepo Sekhoahla",
    role: "Owner",
    company: "MTR VISION 30",
    image: mtrImg,
  },
  {
    id: 2,
    quote: "Helped me understand how websites work, which tech stacks I align with and that helped me build my own professional website where my customers can find me",
    author: "Obakeng Kobuane",
    role: "Owner",
    company: "Obby's PC Solutions",
    image: obbyImg,
  },
];

export const Testimonials: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prev = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-24 bg-white" id="testimonials">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="font-heading text-3xl md:text-5xl font-bold text-primary mb-4">Happy Clients</h2>
          <p className="text-muted-foreground">See what other business owners say about us.</p>
        </div>

        <div className="max-w-5xl mx-auto relative">
          <div className="overflow-hidden">
            <Card className="bg-secondary/20 border-none shadow-none">
              <CardContent className="p-8 md:p-16 flex flex-col md:flex-row items-center gap-10">
                <div className="shrink-0 relative">
                  <div className="absolute inset-0 bg-accent/20 rounded-full blur-xl transform translate-y-2"></div>
                  <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-white shadow-xl relative z-10">
                    <img 
                      src={testimonials[currentIndex].image} 
                      alt={testimonials[currentIndex].author} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                
                <div className="flex-grow text-center md:text-left">
                  <div className="flex justify-center md:justify-start gap-1 mb-6 text-yellow-400">
                    {[1,2,3,4,5].map(i => <Star key={i} size={20} fill="currentColor" />)}
                  </div>
                  <Quote size={40} className="text-primary/10 mb-4 mx-auto md:mx-0" fill="currentColor" />
                  <p className="text-xl md:text-2xl font-medium text-primary leading-relaxed mb-8">
                    "{testimonials[currentIndex].quote}"
                  </p>
                  <div>
                    <h4 className="font-bold text-xl font-heading">{testimonials[currentIndex].author}</h4>
                    <p className="text-muted-foreground">{testimonials[currentIndex].role}, {testimonials[currentIndex].company}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="flex justify-center mt-8 space-x-4">
            <button onClick={prev} className="p-3 rounded-full bg-white border border-gray-200 hover:border-primary hover:text-primary transition-colors shadow-sm">
              <ChevronLeft size={24} />
            </button>
            <button onClick={next} className="p-3 rounded-full bg-white border border-gray-200 hover:border-primary hover:text-primary transition-colors shadow-sm">
              <ChevronRight size={24} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
