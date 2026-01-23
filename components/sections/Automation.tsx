
import React from 'react';
import { CreditCard, Map, Database, Mail, MessageSquare, Calendar } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Card, CardContent } from '../ui/Card';
import { Button } from '../ui/Button';

const integrations = [
  { name: "Yoco / PayFast", icon: CreditCard, color: "text-blue-400" },
  { name: "Google Maps", icon: Map, color: "text-green-400" },
  { name: "Cloud Storage", icon: Database, color: "text-orange-400" },
  { name: "Email Marketing", icon: Mail, color: "text-purple-400" },
  { name: "WhatsApp / Slack", icon: MessageSquare, color: "text-pink-400" },
  { name: "Bookings", icon: Calendar, color: "text-teal-400" },
];

export const Automation: React.FC = () => {
  return (
    <section className="py-24 bg-[#0A0A0A] text-white overflow-hidden relative" id="automation">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/10 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="container relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="lg:w-1/2">
            <h2 className="font-heading text-3xl md:text-5xl font-bold mb-6 leading-tight">
              Connect Your Entire <br/> 
              <span className="text-accent">Business</span>
            </h2>
            <p className="text-gray-400 text-lg mb-8 leading-relaxed">
              Stop wasting time on manual admin work. We connect your favorite tools so you can get paid, take bookings, and reply to customers automatically.
            </p>
            <div className="space-y-4 mb-8">
              <div className="flex items-center gap-4 p-4 bg-white/5 rounded-xl border border-white/10 backdrop-blur-sm">
                <div className="h-2 w-2 rounded-full bg-green-500 shadow-[0_0_10px_#22c55e]"></div>
                <span className="font-mono text-sm">New Order -> Send Invoice -> Notify You on WhatsApp</span>
              </div>
            </div>
            <Link to="/consultation">
              <Button variant="accent">See How It Works</Button>
            </Link>
          </div>

          <div className="lg:w-1/2 grid grid-cols-2 sm:grid-cols-3 gap-4">
            {integrations.map((item, idx) => (
              <Card key={idx} className="bg-white/5 border-white/10 hover:bg-white/10 hover:border-accent/50 text-white transition-all duration-300 backdrop-blur-sm group">
                <CardContent className="p-6 flex flex-col items-center justify-center aspect-square">
                  <div className={`mb-4 p-3 rounded-full bg-white/5 group-hover:scale-110 transition-transform ${item.color}`}>
                    <item.icon size={28} />
                  </div>
                  <span className="text-sm font-medium text-center text-gray-300 group-hover:text-white">{item.name}</span>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
