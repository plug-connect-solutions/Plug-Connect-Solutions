import React from 'react';
import { Check, Shield, Zap, TrendingUp } from 'lucide-react';
import { PricingPlan } from '../../types';
import { Link } from 'react-router-dom';

const devPlans: PricingPlan[] = [
  {
    name: "Starter",
    price: "1,499",
    period: "once-off",
    description: "Perfect for small businesses that just need to be found online.",
    features: [
      "One Page Website (Landing Page)",
      "Contact Form (Get leads via email)",
      "Works nicely on Phones (Mobile Friendly)",
      "Basic Google Setup (SEO)",
      "1 Month Free Support",
      "We help you buy your .co.za domain"
    ],
  },
  {
    name: "Standard",
    price: "3,499",
    period: "once-off",
    description: "Best for growing businesses who want to list all their services.",
    features: [
      "5 Page Website (Home, About, Services, etc)",
      "Update text yourself (Easy Management)",
      "Links to Facebook, TikTok & Instagram",
      "Google Business Profile Setup (Maps)",
      "Get found on Google (Advanced SEO)",
      "3 Months Free Support"
    ],
    recommended: true
  },
  {
    name: "Business Pro",
    price: "7,999",
    period: "once-off",
    description: "For businesses that want to sell online or need custom systems.",
    features: [
      "Online Store (E-commerce) or Web App",
      "Customer Logins",
      "Accept Payments (PayFast / Yoco)",
      "Database Storage",
      "Automated Emails & Invoicing",
      "6 Months Free Support"
    ],
  }
];

const monthlyPlans = [
  {
    name: "Basic Updates",
    price: "299",
    period: "per month",
    icon: Shield,
    features: ["Text & Image Changes", "Security Updates", "Weekly Backups", "We ensure your site stays online"]
  },
  {
    name: "Full Management",
    price: "599",
    period: "per month",
    icon: Zap,
    features: ["All Basic Features", "Priority Email Support", "We check your automation runs smoothly", "Monthly Report", "Plugin Updates"]
  },
  {
    name: "Website + Social",
    price: "999",
    period: "per month",
    icon: TrendingUp,
    features: ["All Management Features", "Social Media Content (2 posts/mo)", "We post for you", "Google Analytics Report", "1 Hour Strategy Call"]
  }
];

export const Pricing: React.FC = () => {
  return (
    <section className="py-14 lg:py-20 px-6 lg:px-16 bg-surface" id="pricing">
      <div className="max-w-[1280px] mx-auto">
        {/* Development Packages */}
        <div className="text-center mb-10 lg:mb-12">
          <span className="text-xs font-semibold uppercase tracking-[0.1em] text-accent block mb-2">
            DEVELOPMENT PACKAGES
          </span>
          <h2 className="font-heading text-4xl lg:text-[48px] font-semibold tracking-[-0.01em] text-primary mb-4">
            Affordable Project Pricing
          </h2>
          <p className="text-base text-on-surface-variant max-w-xl mx-auto">
            Clear, once-off prices for your business. No hidden costs.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch mb-16">
          {devPlans.map((plan, index) => (
            <div
              key={index}
              className={`p-10 rounded-xl flex flex-col relative transition-all duration-300 ${
                plan.recommended
                  ? 'bg-primary text-white lg:scale-105 shadow-2xl z-10'
                  : 'bg-surface border border-border-muted text-on-surface'
              }`}
            >
              {plan.recommended && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-accent text-white px-6 py-1.5 rounded-full text-[10px] font-semibold uppercase tracking-[0.12em] whitespace-nowrap">
                  MOST POPULAR
                </div>
              )}

              <div className="mb-8">
                <h3 className="font-heading text-2xl lg:text-[32px] font-semibold mb-2">
                  {plan.name}
                </h3>
                <p className={`text-sm mb-6 min-h-[40px] ${plan.recommended ? 'text-white/75' : 'text-on-surface-variant'}`}>
                  {plan.description}
                </p>
                <div className="flex items-baseline gap-1 tabular-nums">
                  <span className="text-2xl font-bold">R</span>
                  <span className="text-5xl font-bold tracking-tight">{plan.price}</span>
                  <span className={`text-sm ml-2 ${plan.recommended ? 'text-white/70' : 'text-on-surface-variant'}`}>
                    {plan.period}
                  </span>
                </div>
              </div>

              <ul className="space-y-4 mb-10 flex-grow">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm">
                    <Check
                      size={16}
                      strokeWidth={2.5}
                      className={`shrink-0 mt-0.5 ${plan.recommended ? 'text-secondary-fixed' : 'text-accent'}`}
                    />
                    <span className={plan.recommended ? 'text-white/90' : 'text-on-surface'}>{feature}</span>
                  </li>
                ))}
              </ul>

              <Link to="/consultation" className="w-full block">
                <button
                  className={`w-full py-4 text-xs font-semibold uppercase tracking-[0.1em] rounded transition-all duration-200 ${
                    plan.recommended
                      ? 'bg-accent text-white hover:bg-secondary-container'
                      : 'border border-primary text-primary hover:bg-primary hover:text-white'
                  }`}
                >
                  Select {plan.name}
                </button>
              </Link>
            </div>
          ))}
        </div>

        {/* Monthly Retainers */}
        <div>
          <div className="text-center mb-10">
            <span className="text-xs font-semibold uppercase tracking-[0.1em] text-accent block mb-2">
              MONTHLY SUPPORT
            </span>
            <h3 className="font-heading text-3xl lg:text-[40px] font-semibold tracking-[-0.01em] text-primary mb-4">
              Keep It Running Smoothly
            </h3>
            <p className="text-base text-on-surface-variant max-w-2xl mx-auto">
              We can look after your website so you can focus on running your business. Choose a monthly plan that suits you.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {monthlyPlans.map((plan, idx) => (
              <div
                key={idx}
                className="bg-surface border border-border-muted hover:border-accent transition-colors duration-300 p-8 lg:p-10 rounded-xl flex flex-col"
              >
                <div className="w-12 h-12 bg-secondary-fixed/60 text-accent rounded-lg flex items-center justify-center mb-6">
                  <plan.icon size={22} />
                </div>
                <h4 className="font-heading text-2xl font-semibold text-primary mb-2">{plan.name}</h4>
                <div className="flex items-baseline gap-1 mb-6 pb-6 border-b border-border-muted tabular-nums">
                  <span className="text-lg font-bold text-primary">R</span>
                  <span className="text-3xl font-bold text-primary">{plan.price}</span>
                  <span className="text-xs text-on-surface-variant ml-1.5">{plan.period}</span>
                </div>
                <ul className="space-y-3 mb-8 flex-grow">
                  {plan.features.map((feature, fIdx) => (
                    <li key={fIdx} className="flex items-start gap-2.5 text-sm text-on-surface-variant">
                      <Check size={16} className="text-accent shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link to="/consultation" className="w-full block">
                  <button className="w-full border border-border-muted text-primary py-3.5 text-xs font-semibold uppercase tracking-[0.1em] rounded hover:border-primary hover:bg-primary hover:text-white transition-all duration-200">
                    I Need This
                  </button>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};