import React, { useState } from 'react';
import { Card, CardContent } from '../ui/Card';
import { ChevronLeft, ChevronRight, Quote, Star } from 'lucide-react';
import { Testimonial } from '../../types';

const testimonials: Testimonial[] = [
  {
    id: 1,
    quote: "Plug Connect Solutions really helped me get my student accommodation business online. Now people can find us all across social media and we get way more tenants.",
    author: "Tshepo Sekhoahla",
    role: "Owner",
    company: "MTR VISION 30",
    image: "https://scontent-jnb2-1.xx.fbcdn.net/v/t39.30808-6/617870449_862834963205516_7281797345763936963_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=fFDFagD1JxoQ7kNvwH7oV8R&_nc_oc=Adm1I5CbntQ_EmvglrAjgYbkrZmj2nyeHToCPSGmW7dBy8ObBUEwL4CYnKkBMORie2o&_nc_zt=23&_nc_ht=scontent-jnb2-1.xx&_nc_gid=0oSlFvrLUUzQdcBcfn8FMA&oh=00_AfoAMHhVDbsMwZaS1MKnEc87Jv4l9T1Mf_pBAUcuP6kpPg&oe=697901D4",
  },
  {
    id: 2,
    quote: "Helped me understand how websites work, which tech stacks I align with and that helped me build my own professional website where my customers can find me",
    author: "Obakeng Kobuane",
    role: "Owner",
    company: "Obby's PC Solutions",
    image: "https://scontent-jnb2-1.xx.fbcdn.net/v/t39.30808-6/480555918_1142464504215129_3924523770384393238_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=cc71e4&_nc_eui2=AeGGDB9sgXyXn7Ze2Afgr_C-1RJQ_i45axHVElD-LjlrEScrPvQThH85QC9moSFQbBRJgU1TnWs1IBWUC3fKJwS6&_nc_ohc=oPzVLnbrkX4Q7kNvwHjJFcJ&_nc_oc=AdktvBYH-IWJTKpuXqdvBW9Qre9jfqbSe5LsVOqzAPBrXgb41_UnacU_RstnNmZ-Oo8&_nc_zt=23&_nc_ht=scontent-jnb2-1.xx&_nc_gid=Kkv-4ccfFtCou_U_kkezAA&oh=00_Afo-6ZH7qeZLIf67TXVPja02E8kTY-mEUvX_6vAzouB3RQ&oe=69793DFF"
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