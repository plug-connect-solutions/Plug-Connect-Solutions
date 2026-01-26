import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

const faqs = [
  {
    question: "Do I have to pay a monthly fee?",
    answer: "For the website design, you only pay once. However, every website needs 'hosting' (renting space on the internet) and a 'domain' (your .co.za name). We offer affordable monthly packages to handle this for you, or you can manage it yourself."
  },
  {
    question: "How long does it take to build a website?",
    answer: "A standard 5-page website usually takes 5 to 7 working days, provided we have all your information (text and photos). Online stores may take 2-3 weeks."
  },
  {
    question: "Can I update the website myself?",
    answer: "Yes! We build our websites so that you can easily change text, prices, or photos without needing to code. We also provide a training video to show you how."
  },
  {
    question: "What if I don't have a logo or photos?",
    answer: "No problem. We can help design a simple logo for you and use high-quality stock photos that match your industry until you have your own professional photos."
  },
  {
    question: "Does the website come with email?",
    answer: "Yes. If you choose our monthly hosting package, we set up professional emails for you (e.g., info@yourbusiness.co.za)."
  }
];

export const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-24 bg-white" id="faq">
      <div className="container max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary mb-4">Frequently Asked Questions</h2>
          <p className="text-muted-foreground">Got questions? We have answers.</p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className={`border border-gray-200 rounded-xl overflow-hidden transition-all duration-300 ${openIndex === index ? 'shadow-md border-accent/30 bg-blue-50/30' : 'bg-white'}`}
            >
              <button
                className="w-full flex justify-between items-center p-6 text-left focus:outline-none"
                onClick={() => toggleFAQ(index)}
              >
                <span className={`font-semibold text-lg ${openIndex === index ? 'text-accent' : 'text-primary'}`}>
                  {faq.question}
                </span>
                {openIndex === index ? (
                  <Minus className="text-accent flex-shrink-0" size={20} />
                ) : (
                  <Plus className="text-gray-400 flex-shrink-0" size={20} />
                )}
              </button>

              
              <div 
                className={`px-6 overflow-hidden transition-all duration-300 ease-in-out ${
                  openIndex === index ? 'max-h-96 pb-6 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <p className="text-gray-600 leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
