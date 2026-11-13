import React from 'react';
import { CreditCard, Map, Database, Mail, MessageSquare, Calendar, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';

const integrations = [
  { name: "Yoco / PayFast", icon: CreditCard },
  { name: "Google Maps", icon: Map },
  { name: "Cloud Storage", icon: Database },
  { name: "Email Marketing", icon: Mail },
  { name: "WhatsApp / Slack", icon: MessageSquare },
  { name: "Bookings", icon: Calendar },
];

export const Automation: React.FC = () => {
  return (
    <section className="py-14 lg:py-20 px-6 lg:px-16 bg-primary-container text-white overflow-hidden relative" id="automation">
      <div className="max-w-[1280px] mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          <div className="lg:col-span-6">
            <span className="text-xs font-semibold uppercase tracking-[0.1em] text-secondary-fixed block mb-3">
              Save Time Every Day
            </span>
            <h2 className="font-heading text-4xl lg:text-[48px] font-semibold leading-[1.15] tracking-[-0.01em] mb-6">
              Connect Your Entire <span className="text-secondary-fixed">Business</span>
            </h2>
            <p className="text-on-primary-container text-lg mb-8 leading-relaxed">
              Stop wasting time on manual admin work. We connect your favorite tools so you can get paid, take bookings, and reply to customers automatically.
            </p>
            <div className="mb-8">
              <div className="flex items-center gap-4 p-4 bg-white/5 rounded border border-white/10 backdrop-blur-md">
                <div className="p-2 rounded-full bg-accent text-white shrink-0">
                  <Zap size={16} fill="currentColor" />
                </div>
                <span className="font-mono text-xs sm:text-sm text-white/90">
                  New Order &rarr; Send Invoice &rarr; Notify You on WhatsApp
                </span>
              </div>
            </div>
            <Link to="/consultation">
              <button className="bg-accent text-white px-8 py-4 text-xs font-semibold uppercase tracking-[0.1em] rounded hover:bg-secondary-container transition-all duration-200">
                See How It Works
              </button>
            </Link>
          </div>

          <div className="lg:col-span-6 grid grid-cols-2 sm:grid-cols-3 gap-4">
            {integrations.map((item, idx) => (
              <div
                key={idx}
                className="p-6 bg-white/5 border border-white/10 hover:bg-white/10 hover:border-secondary-fixed/40 transition-all duration-300 backdrop-blur-md flex flex-col items-center justify-center aspect-square rounded group"
              >
                <div className="mb-4 p-3 rounded-full bg-white/10 text-secondary-fixed group-hover:scale-110 transition-transform">
                  <item.icon size={24} strokeWidth={1.75} />
                </div>
                <span className="text-xs font-semibold uppercase tracking-[0.06em] text-center text-white/85 group-hover:text-white">
                  {item.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
