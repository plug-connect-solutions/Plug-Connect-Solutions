import React from 'react';
import { Card, CardHeader, CardContent, CardTitle, CardFooter, CardDescription } from '../ui/Card';
import { Button } from '../ui/Button';
import { Check, Shield, Zap, TrendingUp } from 'lucide-react';
import { PricingPlan } from '../../types';
import { Link } from 'react-router-dom';

const devPlans: PricingPlan[] = [
  {
    name: "Starter",
    price: "R1,499",
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
    price: "R3,499",
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
    price: "R7,999",
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
    price: "R299",
    period: "per month",
    icon: Shield,
    features: ["Text & Image Changes", "Security Updates", "Weekly Backups", "We ensure your site stays online"]
  },
  {
    name: "Full Management",
    price: "R599",
    period: "per month",
    icon: Zap,
    features: ["All Basic Features", "Priority Email Support", "We check your automation runs smoothly", "Monthly Report", "Plugin Updates"]
  },
  {
    name: "Website + Social",
    price: "R999",
    period: "per month",
    icon: TrendingUp,
    features: ["All Management Features", "Social Media Content (2 posts/mo)", "We post for you", "Google Analytics Report", "1 Hour Strategy Call"]
  }
];

export const Pricing: React.FC = () => {
  return (
    <section className="py-24 bg-secondary/30" id="pricing">
      <div className="container">
        {/* Development Packages */}
        <div className="text-center mb-16">
          <span className="text-accent font-bold tracking-wider uppercase text-sm mb-2 block">Development Packages</span>
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-primary mb-4">Affordable Project Pricing</h2>
          <p className="text-lg text-muted-foreground max-w-xl mx-auto">
            Clear, once-off prices to get your South African business online fast. No hidden costs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto mb-24">
          {devPlans.map((plan, index) => (
            <Card key={index} className={`relative flex flex-col ${plan.recommended ? 'border-accent shadow-xl scale-105 z-10 ring-1 ring-accent/20' : 'border-gray-200'} bg-white`}>
              {plan.recommended && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-accent text-white text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-wide shadow-md">
                  Most Popular
                </div>
              )}
              <CardHeader className="pb-4">
                <CardTitle className="text-2xl mb-2 font-heading">{plan.name}</CardTitle>
                <CardDescription className="min-h-[40px]">{plan.description}</CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                <div className="mb-8 pb-8 border-b border-gray-100">
                  <span className="text-4xl font-bold tracking-tight text-primary">{plan.price}</span>
                  <span className="text-muted-foreground text-sm ml-2 font-medium">{plan.period}</span>
                </div>
                <ul className="space-y-4">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start text-sm">
                      <div className="mr-3 p-0.5 bg-blue-50 text-accent rounded-full shrink-0">
                        <Check size={14} strokeWidth={3} />
                      </div>
                      <span className="text-gray-700 font-medium">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter className="pt-4">
                <Link to="/consultation" className="w-full">
                    <Button variant={plan.recommended ? 'accent' : 'outline'} className={`w-full ${plan.recommended ? 'text-white' : ''}`}>
                    Select {plan.name}
                    </Button>
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>
        
        {/* Monthly Retainers */}
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-accent font-bold tracking-wider uppercase text-sm mb-2 block">Monthly Support</span>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary mb-4">Keep It Running Smoothly</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We can look after your website so you can focus on running your business. Choose a monthly plan that suits you.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {monthlyPlans.map((plan, idx) => (
              <Card key={idx} className="border border-gray-100 hover:border-accent/40 transition-all duration-300">
                <CardHeader className="pb-2">
                  <div className="w-12 h-12 bg-blue-50 text-accent rounded-xl flex items-center justify-center mb-4">
                    <plan.icon size={24} />
                  </div>
                  <CardTitle className="text-xl">{plan.name}</CardTitle>
                  <div className="mt-2">
                    <span className="text-2xl font-bold text-primary">{plan.price}</span>
                    <span className="text-muted-foreground text-xs ml-1">{plan.period}</span>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 mt-4">
                    {plan.features.map((feature, fIdx) => (
                      <li key={fIdx} className="flex items-start text-sm text-gray-600">
                        <Check size={16} className="text-accent mr-2 shrink-0 mt-0.5" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-8">
                     <Link to="/consultation">
                        <Button variant="ghost" className="w-full border border-gray-200 hover:border-accent hover:text-accent hover:bg-blue-50">
                            I Need This
                        </Button>
                     </Link>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};