import React from 'react';
import { Button } from '../components/ui/Button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from '../components/ui/Card';
import { Check, Shield, Zap, TrendingUp, Layers, FileText } from 'lucide-react';
import { Link } from 'react-router-dom';
import { PricingPlan } from '../types';
import { FAQ } from '../components/sections/FAQ';

// Duplicated data for display context
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

export const PricingPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-white pt-20">
      {/* Header Section */}
      <section className="bg-primary text-white py-20 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-accent/20 rounded-full blur-[80px] translate-x-1/3 -translate-y-1/3"></div>
        <div className="container relative z-10 text-center">
            <h1 className="font-heading text-4xl md:text-6xl font-bold mb-6">Pricing Overview</h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
                At Plug Connect Solutions, our pricing is designed to be flexible, transparent, and scalable, ensuring that businesses of all sizes can access modern digital solutions without unnecessary complexity.
            </p>
        </div>
      </section>

      <div className="container py-16 space-y-20">
        
        {/* Core Principles */}
        <section>
            <h2 className="font-heading text-3xl font-bold text-primary mb-10 text-center">How Our Pricing Works</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <Card className="bg-secondary/30 border-none">
                    <CardContent className="pt-8 text-center">
                        <div className="w-16 h-16 bg-blue-100 text-accent rounded-full flex items-center justify-center mx-auto mb-6">
                            <TrendingUp size={32} />
                        </div>
                        <h3 className="text-xl font-bold mb-3">Fair & Scalable</h3>
                        <p className="text-muted-foreground">You only pay for what your business needs today, with the ability to scale as you grow.</p>
                    </CardContent>
                </Card>
                <Card className="bg-secondary/30 border-none">
                    <CardContent className="pt-8 text-center">
                        <div className="w-16 h-16 bg-blue-100 text-accent rounded-full flex items-center justify-center mx-auto mb-6">
                            <Layers size={32} />
                        </div>
                        <h3 className="text-xl font-bold mb-3">Modular & Customizable</h3>
                        <p className="text-muted-foreground">Services can be combined or expanded, allowing you to build your solution step by step.</p>
                    </CardContent>
                </Card>
                <Card className="bg-secondary/30 border-none">
                    <CardContent className="pt-8 text-center">
                        <div className="w-16 h-16 bg-blue-100 text-accent rounded-full flex items-center justify-center mx-auto mb-6">
                            <FileText size={32} />
                        </div>
                        <h3 className="text-xl font-bold mb-3">Transparent & Predictable</h3>
                        <p className="text-muted-foreground">No hidden costs. All pricing is discussed and approved before development begins.</p>
                    </CardContent>
                </Card>
            </div>
        </section>

        {/* Development Packages (Reused Layout) */}
        <section>
            <div className="text-center mb-12">
                <span className="text-accent font-bold tracking-wider uppercase text-sm mb-2 block">Development Packages</span>
                <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary">Estimated Starting Prices</h2>
                <p className="text-muted-foreground mt-2">Websites, Apps, and Digital Systems</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
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
        </section>

        {/* Influencers */}
        <section className="bg-gray-50 rounded-3xl p-8 md:p-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div>
                    <h2 className="font-heading text-3xl font-bold text-primary mb-6">What Influences Project Cost?</h2>
                    <p className="text-gray-600 mb-6">
                        Every project is different. While our packages give you a great starting point, the final investment may vary depending on:
                    </p>
                    <ul className="space-y-3">
                        {[
                            "Number of pages or features required",
                            "Web or mobile application complexity",
                            "System integrations and automations",
                            "Payment gateways and third-party APIs",
                            "AI and workflow automation requirements",
                            "Ongoing maintenance and support needs"
                        ].map((item, i) => (
                            <li key={i} className="flex items-center space-x-3 text-gray-700">
                                <div className="h-2 w-2 rounded-full bg-accent"></div>
                                <span>{item}</span>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="relative">
                     <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
                        <h3 className="font-bold text-xl mb-4">Need a Custom Quote?</h3>
                        <p className="text-gray-500 text-sm mb-6">
                            Every business is unique. If your requirements fall outside standard packages, we offer custom quotes designed specifically for your objectives, timeline, and budget.
                        </p>
                        <Link to="/consultation">
                            <Button className="w-full" variant="accent">Request Custom Quote</Button>
                        </Link>
                     </div>
                </div>
            </div>
        </section>

        {/* Monthly Plans */}
        <section>
          <div className="text-center mb-12">
            <span className="text-accent font-bold tracking-wider uppercase text-sm mb-2 block">Ongoing Success</span>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary mb-4">Maintenance & Support Plans</h2>
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
                            Subscribe
                        </Button>
                     </Link>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* FAQ Section */}
        <FAQ />

        <section className="text-center pb-8 text-muted-foreground text-sm">
            <p>Plug Connect Solutions — Connecting Businesses to Smart Digital Solutions.</p>
        </section>

      </div>
    </div>
  );
};