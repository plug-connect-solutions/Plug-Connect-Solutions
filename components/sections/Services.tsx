
import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardHeader, CardTitle, CardContent } from '../ui/Card';
import { Code, Smartphone, Share2, Bot, Briefcase, GraduationCap, ArrowUpRight } from 'lucide-react';
import { ServiceItem } from '../../types';

const services: ServiceItem[] = [
  {
    title: "Website Design",
    description: "We build professional websites that look great on phones and help customers find you on Google.",
    icon: Code,
    features: ["Mobile Friendly", "Get on Google", "Easy to Update"]
  },
  {
    title: "Custom Apps",
    description: "We build custom mobile apps and software to help you run your business exactly how you want to.",
    icon: Smartphone,
    features: ["Works on Android/iOS", "Connects to your data", "Secure Logins"]
  },
  {
    title: "Social Media",
    description: "We help you post on Facebook, Instagram, and TikTok to grow your brand and find new customers.",
    icon: Share2,
    features: ["Profile Setup", "Posting Plan", "Ad Management"]
  },
  {
    title: "Save Time (Automation)",
    description: "Stop doing manual admin. We set up systems to handle emails, invoices, and bookings automatically.",
    icon: Bot,
    features: ["Auto-replies", "Online Booking", "Customer Lists (CRM)"]
  },
  {
    title: "Company Branding",
    description: "We register your company with CIPC and design your logo, business cards, and letterheads.",
    icon: Briefcase,
    features: ["Logo Design", "Business Cards", "Registration Help"]
  },
  {
    title: "Training",
    description: "We teach you and your staff how to use digital tools, computers, and your new website.",
    icon: GraduationCap,
    features: ["Staff Training", "Computer Basics", "1-on-1 Help"]
  }
];

export const Services: React.FC = () => {
  return (
    <section className="py-24 bg-white" id="services">
      <div className="container">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-4 border-b border-gray-100 pb-8">
          <div className="max-w-2xl">
            <span className="text-accent font-bold tracking-wider uppercase text-sm mb-2 block">What We Do</span>
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-primary">Services for Your Business</h2>
          </div>
          <Link to="/consultation" className="group flex items-center text-primary font-semibold hover:opacity-70 transition-opacity">
            View full catalog 
            <ArrowUpRight className="ml-2 w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <Card key={index} className="group border-gray-100 hover:border-accent/30 transition-all duration-300">
              <CardHeader className="pb-4">
                <div className="flex justify-between items-start mb-4">
                  <div className="w-14 h-14 bg-secondary rounded-2xl flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-accent transition-colors duration-300">
                    <service.icon size={28} strokeWidth={1.5} />
                  </div>
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-accent">
                    <ArrowUpRight size={24} />
                  </div>
                </div>
                <CardTitle className="text-2xl">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-6 min-h-[48px] leading-relaxed">{service.description}</p>
                <div className="flex flex-wrap gap-2">
                  {service.features.map((feature, fIndex) => (
                    <span key={fIndex} className="text-xs font-medium px-2.5 py-1 rounded-full bg-secondary text-secondary-foreground border border-gray-200">
                      {feature}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
