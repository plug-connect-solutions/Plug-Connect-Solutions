import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  CheckCircle2,
  ArrowRight,
  Zap,
  Play,
  Layers,
  BarChart3,
  Network,
} from 'lucide-react';

const anchorItems = [
  { id: 'website-design', label: '01 Website Design' },
  { id: 'custom-apps', label: '02 Custom Apps' },
  { id: 'social-media', label: '03 Social Media' },
  { id: 'automation', label: '04 Automation' },
  { id: 'branding', label: '05 Registration & Branding' },
  { id: 'training', label: '06 Training' },
];

export const Solutions: React.FC = () => {
  const [failedImages, setFailedImages] = useState<Record<string, boolean>>({});

  const markFailed = (key: string) => {
    setFailedImages((prev) => ({ ...prev, [key]: true }));
  };

  const scrollToSolution = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-surface text-on-surface">
      {/* Hero Section */}
      <header className="pt-28 lg:pt-32 pb-12 lg:pb-16 px-6 lg:px-16 max-w-[1280px] mx-auto overflow-hidden">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-end">
          <div className="md:col-span-8">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-secondary-container mb-4 block">
              What We Offer
            </span>
            <h1 className="font-heading text-5xl sm:text-6xl lg:text-[72px] font-bold leading-[1.08] tracking-[-0.02em] text-primary mb-8 text-balance">
              Simple Digital Solutions for Your Business.
            </h1>
            <p className="text-lg text-on-surface-variant max-w-2xl leading-relaxed">
              We help South African small and medium businesses get online, save time on admin, and bring in more customers without the confusing tech talk.
            </p>
          </div>

          <div className="md:col-span-4 hidden md:block">
            <div className="border-l border-border-muted pl-8 py-4">
              <p className="text-xs font-semibold uppercase tracking-[0.1em] text-on-surface-variant mb-2">
                OUR PROMISE
              </p>
              <p className="text-base italic text-on-primary-container leading-relaxed">
                "Simple tools that actually help you make more sales and save time every day."
              </p>
            </div>
          </div>
        </div>
      </header>

      {/* Solutions Anchor Navigation */}
      <div className="sticky top-20 bg-surface/95 backdrop-blur-sm z-40 border-y border-border-muted/40 py-4 mb-10">
        <div className="px-6 lg:px-16 max-w-[1280px] mx-auto flex overflow-x-auto gap-8 no-scrollbar">
          {anchorItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSolution(item.id)}
              className="whitespace-nowrap shrink-0 text-xs font-semibold uppercase tracking-[0.1em] text-on-surface-variant hover:text-accent transition-colors"
            >
              {item.label}
            </button>
          ))}
        </div>
      </div>

      {/* Main Content: Solutions */}
      <main className="space-y-16 lg:space-y-20 pb-16 lg:pb-20">
        {/* 01 Website Design */}
        <section className="px-6 lg:px-16 max-w-[1280px] mx-auto scroll-mt-40" id="website-design">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="order-2 md:order-1">
              <span className="text-xs font-semibold uppercase tracking-[0.1em] text-accent mb-4 block">
                01 / SOLUTION
              </span>
              <h2 className="font-heading text-4xl lg:text-[48px] font-semibold leading-[1.15] tracking-[-0.01em] text-primary mb-4">
                Professional Website Design
              </h2>
              <p className="text-lg text-on-surface-variant mb-8 leading-relaxed">
                We build fast, mobile-friendly websites that look professional and help customers find your business on Google and WhatsApp.
              </p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start gap-3">
                  <CheckCircle2 size={20} className="text-accent shrink-0 mt-0.5" />
                  <span className="text-base text-on-surface">Works nicely on any phone, tablet, or computer</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 size={20} className="text-accent shrink-0 mt-0.5" />
                  <span className="text-base text-on-surface">Easy for customers to contact you, book, or buy</span>
                </li>
              </ul>
              <div className="flex flex-wrap items-center gap-6">
                <Link
                  to="/consultation"
                  className="text-xs font-semibold uppercase tracking-[0.1em] text-primary border-b-2 border-primary pb-1 hover:text-accent hover:border-accent transition-all"
                >
                  Request a Free Website Check
                </Link>
                <Link
                  to="/web-design"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-[0.1em] text-accent hover:opacity-80 transition-opacity"
                >
                  View Website Examples <ArrowRight size={14} />
                </Link>
              </div>
            </div>

            <div className="order-1 md:order-2">
              <div className="aspect-[4/3] bg-surface-container overflow-hidden rounded group border border-border-muted">
                {failedImages['web'] ? (
                  <div className="w-full h-full flex items-center justify-center p-8 text-center">
                    <span className="font-heading text-xl font-semibold text-primary">Professional Website Design</span>
                  </div>
                ) : (
                  <img
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuBilBzJxdnegca47JIFBL_A29CsZOuoPnLHmzTQZ31C-2l7KuqjawXcyEAZ_EhrKXbUbe9THdkKKaDVGBtTZycbq7RF1zkg2-nKRi2te2MD6NLELklkFyxTRcxpVy4Ea2x4kAfqliAKejyH1VgsShhokRDd3uvkBY6FZdGeYjDcZvf_ult1YDaEXCJCiqKfzxGX4FTrMUUcQAp-EDTADuIgg8cHNOKlKiH_ePeRnEfqeEPqtsdbbwXPZw"
                    alt="Laptop showing a clean business website design"
                    referrerPolicy="no-referrer"
                    onError={() => markFailed('web')}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                )}
              </div>
            </div>
          </div>
        </section>

        {/* 02 Custom Apps */}
        <section className="bg-surface-warm py-14 lg:py-20 scroll-mt-32 border-y border-border-muted/50" id="custom-apps">
          <div className="px-6 lg:px-16 max-w-[1280px] mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20 items-center">
              <div>
                <div className="aspect-[4/3] bg-surface-container overflow-hidden relative rounded border border-border-muted">
                  {failedImages['apps'] ? (
                    <div className="w-full h-full flex items-center justify-center p-8 text-center">
                      <span className="font-heading text-xl font-semibold text-primary">Custom Apps for Your Business</span>
                    </div>
                  ) : (
                    <img
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuDHlwUEcYIiCwxS44PRTvq_yE9OCKO9AqaxFLdknomI9HcFHQm-dey32QEFnggspOFx03nDEW90Mjh79-QiqaqVmS3japt0GFqS6Ir0rs5S30rCWVoxI3oB18zdVRXe2fj6ugBLuFQQ9mCJAtBOptLP86P6u61CQ3iM7wOkqiDZg4Kfen8f3u9_vTFpaIqSrxlvXTh1DLzxGBSNpmmThZtP3P0-khYL2-1iOfDMUR8-Iu5OFTVSkW1Opw"
                      alt="Business owner using a mobile dashboard app"
                      referrerPolicy="no-referrer"
                      onError={() => markFailed('apps')}
                      className="w-full h-full object-cover"
                    />
                  )}
                </div>
              </div>

              <div>
                <span className="text-xs font-semibold uppercase tracking-[0.1em] text-accent mb-4 block">
                  02 / SOLUTION
                </span>
                <h2 className="font-heading text-4xl lg:text-[48px] font-semibold leading-[1.15] tracking-[-0.01em] text-primary mb-4">
                  Custom Apps for Your Business
                </h2>
                <p className="text-lg text-on-surface-variant mb-8 leading-relaxed">
                  When normal apps don't fit how your business works, we build a custom mobile app or system just for you, whether it's for taking orders, tracking jobs, or managing staff.
                </p>
                <div className="grid grid-cols-2 gap-8 mb-8">
                  <div>
                    <h4 className="text-xs font-semibold uppercase tracking-[0.1em] text-primary mb-2">GROWS WITH YOU</h4>
                    <p className="text-sm text-on-surface-variant leading-relaxed">
                      Built to handle more customers and staff as your business gets bigger.
                    </p>
                  </div>
                  <div>
                    <h4 className="text-xs font-semibold uppercase tracking-[0.1em] text-primary mb-2">SAFE &amp; SECURE</h4>
                    <p className="text-sm text-on-surface-variant leading-relaxed">
                      Your business and customer information stays private and protected.
                    </p>
                  </div>
                </div>
                <Link to="/consultation">
                  <button className="bg-primary text-white px-8 py-4 text-xs font-semibold uppercase tracking-[0.1em] rounded hover:bg-slate-deep transition-all">
                    Plan Your Custom App
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* 03 Social Media */}
        <section className="px-6 lg:px-16 max-w-[1280px] mx-auto scroll-mt-40" id="social-media">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-semibold uppercase tracking-[0.1em] text-accent mb-4 block">
              03 / SOLUTION
            </span>
            <h2 className="font-heading text-4xl lg:text-[48px] font-semibold leading-[1.15] tracking-[-0.01em] text-primary mb-6">
              Social Media Marketing
            </h2>
            <p className="text-lg text-on-surface-variant leading-relaxed">
              We help you show up consistently on Facebook, Instagram, and TikTok so local customers trust your business and message you to buy.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-10 bg-white border border-border-muted hover:border-accent transition-colors duration-300 rounded">
              <Layers size={34} className="text-accent mb-6" strokeWidth={1.75} />
              <h3 className="font-heading text-2xl font-semibold text-primary mb-3">Posts &amp; Graphics</h3>
              <p className="text-base text-on-surface-variant leading-relaxed">
                We design clean posts, flyers, and short videos that match your business look.
              </p>
            </div>
            <div className="p-10 bg-white border border-border-muted hover:border-accent transition-colors duration-300 rounded">
              <BarChart3 size={34} className="text-accent mb-6" strokeWidth={1.75} />
              <h3 className="font-heading text-2xl font-semibold text-primary mb-3">Targeted Local Ads</h3>
              <p className="text-base text-on-surface-variant leading-relaxed">
                Paid Facebook and Instagram ads that reach real buyers in your area.
              </p>
            </div>
            <div className="p-10 bg-white border border-border-muted hover:border-accent transition-colors duration-300 rounded">
              <Network size={34} className="text-accent mb-6" strokeWidth={1.75} />
              <h3 className="font-heading text-2xl font-semibold text-primary mb-3">Inbox &amp; Page Care</h3>
              <p className="text-base text-on-surface-variant leading-relaxed">
                Replying to comments and messages quickly so you never miss a customer lead.
              </p>
            </div>
          </div>

          <div className="mt-10 text-center">
            <Link
              to="/social-media"
              className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.1em] text-accent hover:opacity-80 transition-opacity"
            >
              See Social Media Work &amp; Results <ArrowRight size={14} />
            </Link>
          </div>
        </section>

        {/* 04 Automation */}
        <section className="relative overflow-hidden bg-primary-container text-white py-14 lg:py-20 scroll-mt-32" id="automation">
          <div className="px-6 lg:px-16 max-w-[1280px] mx-auto relative z-10">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
              <div className="md:col-span-5">
                <span className="text-xs font-semibold uppercase tracking-[0.1em] text-secondary-fixed mb-4 block">
                  04 / SOLUTION
                </span>
                <h2 className="font-heading text-4xl lg:text-[48px] font-semibold leading-[1.15] tracking-[-0.01em] text-white mb-4">
                  Save Time With Automation
                </h2>
                <p className="text-lg text-on-primary-container mb-8 leading-relaxed">
                  Stop wasting hours on repetitive admin. We connect your website, emails, invoices, and WhatsApp so daily tasks happen automatically.
                </p>
                <Link
                  to="/consultation"
                  className="group inline-flex items-center gap-4 text-white text-xs font-semibold uppercase tracking-[0.1em]"
                >
                  <span className="bg-accent p-3.5 rounded-full group-hover:scale-110 transition-transform">
                    <Zap size={18} fill="currentColor" />
                  </span>
                  SEE HOW WE AUTOMATE YOUR ADMIN
                </Link>
              </div>

              <div className="md:col-span-6 md:col-start-7">
                <div className="grid grid-cols-1 gap-4">
                  <div className="p-8 bg-white/5 backdrop-blur-md border border-white/10 flex gap-6 items-center rounded">
                    <div className="text-4xl lg:text-5xl font-heading font-semibold text-secondary-fixed tabular-nums shrink-0">
                      85%
                    </div>
                    <div className="text-base text-white/90">
                      Less time spent typing out invoices, quotes, and customer details by hand.
                    </div>
                  </div>
                  <div className="p-8 bg-white/5 backdrop-blur-md border border-white/10 flex gap-6 items-center rounded">
                    <div className="text-4xl lg:text-5xl font-heading font-semibold text-secondary-fixed tabular-nums shrink-0">
                      24/7
                    </div>
                    <div className="text-base text-white/90">
                      Your bookings, auto-replies, and lead forms work non-stop, even after hours.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 05 Branding */}
        <section className="px-6 lg:px-16 max-w-[1280px] mx-auto scroll-mt-40" id="branding">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="order-2 md:order-1">
              <div className="grid grid-cols-2 gap-4 pb-12">
                <div className="aspect-square bg-surface-container-high overflow-hidden rounded border border-border-muted">
                  {failedImages['brand1'] ? (
                    <div className="w-full h-full flex items-center justify-center font-heading text-6xl font-bold text-primary">
                      P
                    </div>
                  ) : (
                    <img
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuCLlpkQDYr8pqb5-5UIelQPxDqS0AuSQwC5zKGlA17fE1xaS06OwgF-xtZIRIuyD4H5cC0ddyoZQ-IP78WslXUUhUbN7-vt-qDNeUT8HvirBlI7lVXlusZTZBxB4NQM9w5JAMAbBRzVC4znDOvguYD8-ljyA6GQ0T6Gf5d31hufVC7kw7YzklbjjKSnTCz2U8ptxJsLimUasHRVvm4f_DWDawN1gz4ramw3GY-nCgwbTY3uwWHod9CiWA"
                      alt="Clean lettermark logo design"
                      referrerPolicy="no-referrer"
                      onError={() => markFailed('brand1')}
                      className="w-full h-full object-cover"
                    />
                  )}
                </div>
                <div className="aspect-square bg-surface-container overflow-hidden translate-y-10 rounded border border-border-muted">
                  {failedImages['brand2'] ? (
                    <div className="w-full h-full flex items-center justify-center p-4 text-center font-heading text-sm font-semibold text-primary">
                      Plug Connect Solutions
                    </div>
                  ) : (
                    <img
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuBLw693UZp2xwWmqnHPjsFX5UMoNHz1P9hWb1XETjLk5jgrfXqB49g6hoYNA8HAjmTLoUvWY-Dirj3-G_Yi__GCVG7PKAfr5EvNfQn1kRdnr8LI2B7YEmBXKM97k7LQ7aclowiiVstAv-c6V8ozhM39AO0FNSousJY27NhPWj7tFw1aPd6w41uMZ1vOjVdTmiHjjh74TB4HGFIx8dBzM9EOxquVw0sri9rd6ZtvNnepn8WlXwpYawAXiw"
                      alt="Printed business branding and stationery"
                      referrerPolicy="no-referrer"
                      onError={() => markFailed('brand2')}
                      className="w-full h-full object-cover"
                    />
                  )}
                </div>
              </div>
            </div>

            <div className="order-1 md:order-2 md:pl-8">
              <span className="text-xs font-semibold uppercase tracking-[0.1em] text-accent mb-4 block">
                05 / SOLUTION
              </span>
              <h2 className="font-heading text-4xl lg:text-[48px] font-semibold leading-[1.15] tracking-[-0.01em] text-primary mb-4">
                Company Registration &amp; Branding
              </h2>
              <p className="text-lg text-on-surface-variant mb-8 leading-relaxed">
                Start off on the right foot. We register your company with CIPC and design your logo, business cards, and letterheads so customers take your business seriously.
              </p>
              <div className="space-y-3">
                {[
                  'LOGO & BRAND DESIGN',
                  'CIPC COMPANY REGISTRATION',
                  'BUSINESS CARDS & LETTERHEADS',
                ].map((label) => (
                  <Link
                    key={label}
                    to="/business-registration"
                    className="border-b border-border-muted py-3.5 flex justify-between items-center group"
                  >
                    <span className="text-xs font-semibold uppercase tracking-[0.1em] text-primary group-hover:text-accent transition-colors">
                      {label}
                    </span>
                    <ArrowRight size={16} className="text-on-surface-variant group-hover:text-accent group-hover:translate-x-1.5 transition-all" />
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* 06 Training */}
        <section className="px-6 lg:px-16 max-w-[1280px] mx-auto scroll-mt-40" id="training">
          <div className="bg-primary p-10 sm:p-16 lg:p-20 text-white flex flex-col md:flex-row gap-12 lg:gap-16 items-center rounded-lg">
            <div className="md:w-1/2">
              <span className="text-xs font-semibold uppercase tracking-[0.1em] text-secondary-fixed mb-4 block">
                06 / SOLUTION
              </span>
              <h2 className="font-heading text-4xl lg:text-[48px] font-semibold leading-[1.15] tracking-[-0.01em] mb-4">
                Staff Training &amp; 1-on-1 Help
              </h2>
              <p className="text-lg text-on-primary-container mb-8 leading-relaxed">
                We don't just build your website or system and disappear. We sit with you and your staff to teach you how everything works in plain, simple English.
              </p>
              <div className="flex flex-wrap gap-3">
                <span className="px-4 py-2 border border-white/20 text-[11px] font-semibold uppercase tracking-[0.1em]">
                  Website Updates
                </span>
                <span className="px-4 py-2 border border-white/20 text-[11px] font-semibold uppercase tracking-[0.1em]">
                  Computer Basics
                </span>
                <span className="px-4 py-2 border border-white/20 text-[11px] font-semibold uppercase tracking-[0.1em]">
                  1-on-1 Coaching
                </span>
              </div>
            </div>

            <div className="md:w-1/2 w-full">
              <Link
                to="/consultation"
                className="aspect-video relative overflow-hidden bg-white/10 group block rounded"
              >
                {failedImages['training'] ? (
                  <div className="w-full h-full bg-primary-container" />
                ) : (
                  <img
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuBlAaGXBT94MTzr1AXagOEt2rQaVGQwaJh56nh3aq6jHB5PC3mxsGcy27qi_QBxuTgrWhBiJhW3cNB_Qn4mctK0bQnQ3VyCzxV6aK-4ywW1AWK2luw8bofEaWTlBFOs04TGzvfqRaXebJNEyb80ZmrwdieYdyvDZrUWM6D8r1uXruRHykgvdZTMbRlHSMSGbD-CSIOTAnAYLhQPff1ziQtSwc5QFH9UPCnlrvfFeqDEo2KaxrHtRpKm7A"
                    alt="Hands-on staff training session"
                    referrerPolicy="no-referrer"
                    onError={() => markFailed('training')}
                    className="w-full h-full object-cover opacity-70 group-hover:scale-105 transition-transform duration-700"
                  />
                )}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-16 h-16 lg:w-20 lg:h-20 bg-accent rounded-full flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform">
                    <Play size={28} className="text-white ml-1" fill="currentColor" />
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </section>

        {/* Consultation CTA */}
        <section className="pt-12 px-6 lg:px-16 max-w-[1280px] mx-auto text-center border-t border-border-muted">
          <h2 className="font-heading text-4xl lg:text-[48px] font-semibold tracking-[-0.01em] text-primary mb-4 text-balance">
            Ready to grow your business online?
          </h2>
          <p className="text-lg text-on-surface-variant mb-10 max-w-xl mx-auto leading-relaxed">
            Book a free 30-minute call with us and we'll help you choose the right setup for your budget and goals.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/consultation">
              <button className="w-full sm:w-auto bg-primary text-white px-10 py-4 text-xs font-semibold uppercase tracking-[0.12em] rounded hover:bg-slate-deep transition-all">
                Book Consultation
              </button>
            </Link>
            <Link to="/pricing">
              <button className="w-full sm:w-auto border border-primary text-primary px-10 py-4 text-xs font-semibold uppercase tracking-[0.12em] rounded hover:bg-primary hover:text-white transition-all">
                View Pricing Packages
              </button>
            </Link>
          </div>
        </section>
      </main>
    </div>
  );
};
