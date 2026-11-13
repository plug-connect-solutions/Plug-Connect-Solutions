import React from 'react';
import { Link } from 'react-router-dom';
import { Code, Smartphone, Share2, Bot, Briefcase, GraduationCap, ArrowRight, CheckCircle2 } from 'lucide-react';
import { ServiceItem } from '../../types';

interface LinkedServiceItem extends ServiceItem {
  to: string;
}

const services: LinkedServiceItem[] = [
  {
    title: "Website Design",
    description: "We build professional websites that look great on phones and help customers find you on Google.",
    icon: Code,
    features: ["Mobile Friendly", "Get on Google", "Easy to Update"],
    to: "/web-design",
  },
  {
    title: "Custom Apps",
    description: "We build custom mobile apps and software to help you run your business exactly how you want to.",
    icon: Smartphone,
    features: ["Works on Android/iOS", "Connects to your data", "Secure Logins"],
    to: "/solutions",
  },
  {
    title: "Social Media",
    description: "We help you post on Facebook, Instagram, and TikTok to grow your brand and find new customers.",
    icon: Share2,
    features: ["Profile Setup", "Posting Plan", "Ad Management"],
    to: "/social-media",
  },
  {
    title: "Save Time (Automation)",
    description: "Stop doing manual admin. We set up systems to handle emails, invoices, and bookings automatically.",
    icon: Bot,
    features: ["Auto-replies", "Online Booking", "Customer Lists (CRM)"],
    to: "/solutions",
  },
  {
    title: "Company Branding",
    description: "We register your company with CIPC and design your logo, business cards, and letterheads.",
    icon: Briefcase,
    features: ["Logo Design", "Business Cards", "Registration Help"],
    to: "/business-registration",
  },
  {
    title: "Training",
    description: "We teach you and your staff how to use digital tools, computers, and your new website.",
    icon: GraduationCap,
    features: ["Staff Training", "Computer Basics", "1-on-1 Help"],
    to: "/solutions",
  },
];

export const Services: React.FC = () => {
  return (
    <section className="py-14 lg:py-20 px-6 lg:px-16 bg-surface border-t border-border-muted/50" id="services">
      <div className="max-w-[1280px] mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4 mb-8 lg:mb-10">
          <div>
            <span className="text-xs font-semibold uppercase tracking-[0.1em] text-accent block mb-2">
              WHAT WE DO
            </span>
            <h2 className="font-heading text-4xl lg:text-[48px] font-semibold tracking-[-0.01em] text-primary">
              Services for Your Business
            </h2>
          </div>
          <Link
            to="/solutions"
            className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.1em] text-accent group whitespace-nowrap"
          >
            See All Solutions
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Link
              key={index}
              to={service.to}
              className="p-8 lg:p-10 bg-surface border border-border-muted hover:border-accent transition-colors duration-300 group rounded flex flex-col"
            >
              <service.icon size={30} className="text-accent mb-6" strokeWidth={1.75} />
              <h3 className="font-heading text-2xl lg:text-[28px] font-semibold text-primary mb-4 group-hover:text-accent transition-colors">
                {service.title}
              </h3>
              <p className="text-base text-on-surface-variant leading-relaxed mb-6 flex-grow">
                {service.description}
              </p>
              <ul className="space-y-2.5 pt-2">
                {service.features.map((feature, fIndex) => (
                  <li
                    key={fIndex}
                    className="flex items-center gap-2.5 text-xs font-semibold uppercase tracking-[0.06em] text-on-surface-variant"
                  >
                    <CheckCircle2 size={15} className="text-accent shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};
