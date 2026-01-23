import React from 'react';
import { Button } from '../components/ui/Button';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/Card';
import { FileCheck, ShieldCheck, Briefcase, CheckCircle, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export const BusinessRegistration: React.FC = () => {
  return (
    <div className="min-h-screen bg-white pt-20">
      
      {/* Hero */}
      <section className="bg-secondary py-20 relative">
        <div className="container relative z-10 flex flex-col md:flex-row items-center gap-12">
           <div className="flex-1">
             <div className="inline-flex items-center gap-2 bg-blue-100 text-primary px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wide mb-6">
                <ShieldCheck size={14} />
                <span>Official CIPC Services</span>
             </div>
             <h1 className="font-heading text-4xl md:text-5xl font-bold text-primary mb-6">Make Your Business Official</h1>
             <p className="text-xl text-gray-600 mb-8 leading-relaxed">
               We handle the paperwork so you can focus on the work. Get your company registered, tax compliant, and ready to trade in as little as 48 hours.
             </p>
             <Link to="/consultation">
                <Button size="lg" variant="primary" className="rounded-full shadow-lg shadow-primary/20">Register Now</Button>
             </Link>
           </div>
           <div className="flex-1 w-full max-w-md">
              <div className="bg-white p-8 rounded-2xl shadow-xl border border-gray-100 relative">
                 <div className="absolute -top-4 -right-4 w-20 h-20 bg-accent/10 rounded-full blur-xl"></div>
                 <div className="space-y-6">
                    <div className="flex items-center gap-4">
                        <div className="bg-green-100 p-3 rounded-full text-green-600"><FileCheck size={24} /></div>
                        <div>
                            <h3 className="font-bold text-primary">Company Cert. (Cor14.3)</h3>
                            <p className="text-xs text-gray-500">Proof of ownership</p>
                        </div>
                    </div>
                    <div className="h-px bg-gray-100 w-full"></div>
                    <div className="flex items-center gap-4">
                        <div className="bg-blue-100 p-3 rounded-full text-blue-600"><ShieldCheck size={24} /></div>
                        <div>
                            <h3 className="font-bold text-primary">Tax Number</h3>
                            <p className="text-xs text-gray-500">SARS Compliance</p>
                        </div>
                    </div>
                    <div className="h-px bg-gray-100 w-full"></div>
                    <div className="flex items-center gap-4">
                        <div className="bg-purple-100 p-3 rounded-full text-purple-600"><Briefcase size={24} /></div>
                        <div>
                            <h3 className="font-bold text-primary">Share Certificate</h3>
                            <p className="text-xs text-gray-500">Official shareholder document</p>
                        </div>
                    </div>
                 </div>
              </div>
           </div>
        </div>
      </section>

      {/* Steps */}
      <section className="py-20 bg-white">
          <div className="container">
              <div className="text-center mb-16">
                  <h2 className="text-3xl font-bold font-heading text-primary">How It Works</h2>
                  <p className="text-muted-foreground mt-2">Simple, fast, and 100% online.</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                  {[
                      { step: "01", title: "Apply Online", desc: "Fill out our simple form with your preferred company names." },
                      { step: "02", title: "Name Reservation", desc: "We reserve your name with CIPC immediately." },
                      { step: "03", title: "Registration", desc: "We lodge your documents. You just sign digitally." },
                      { step: "04", title: "Delivery", desc: "Receive your official company documents via email." }
                  ].map((item, idx) => (
                      <div key={idx} className="relative">
                          <span className="text-6xl font-bold text-gray-100 absolute -top-8 left-0 z-0">{item.step}</span>
                          <div className="relative z-10 pt-4">
                              <h3 className="font-bold text-xl text-primary mb-2">{item.title}</h3>
                              <p className="text-sm text-gray-500">{item.desc}</p>
                          </div>
                      </div>
                  ))}
              </div>
          </div>
      </section>

      {/* Pricing/Packages */}
      <section className="py-20 bg-gray-50">
        <div className="container max-w-5xl">
             <div className="text-center mb-12">
                 <h2 className="text-3xl font-bold font-heading text-primary">Registration Packages</h2>
             </div>

             <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                 {/* Basic Package */}
                 <Card className="border-gray-200 hover:border-accent transition-colors">
                     <CardHeader>
                         <CardTitle>Basic Registration</CardTitle>
                         <div className="mt-4 mb-2">
                             <span className="text-4xl font-bold text-primary">R950</span>
                             <span className="text-sm text-gray-500 ml-2">once-off</span>
                         </div>
                         <p className="text-sm text-gray-500">Everything you need to start trading.</p>
                     </CardHeader>
                     <CardContent>
                         <ul className="space-y-3 mb-8">
                             <li className="flex items-center gap-2 text-sm"><CheckCircle size={16} className="text-green-500" /> Name Reservation</li>
                             <li className="flex items-center gap-2 text-sm"><CheckCircle size={16} className="text-green-500" /> CIPC Company Registration</li>
                             <li className="flex items-center gap-2 text-sm"><CheckCircle size={16} className="text-green-500" /> Income Tax Number</li>
                             <li className="flex items-center gap-2 text-sm"><CheckCircle size={16} className="text-green-500" /> Share Certificate</li>
                         </ul>
                         <Link to="/consultation">
                            <Button variant="outline" className="w-full">Select Basic</Button>
                         </Link>
                     </CardContent>
                 </Card>

                 {/* Pro Package */}
                 <Card className="border-accent ring-1 ring-accent/10 shadow-lg">
                     <CardHeader>
                         <div className="flex justify-between items-start">
                             <CardTitle>Brand Starter</CardTitle>
                             <span className="bg-accent text-white text-xs px-2 py-1 rounded font-bold uppercase">Popular</span>
                         </div>
                         <div className="mt-4 mb-2">
                             <span className="text-4xl font-bold text-primary">R1,850</span>
                             <span className="text-sm text-gray-500 ml-2">once-off</span>
                         </div>
                         <p className="text-sm text-gray-500">Registration plus branding essentials.</p>
                     </CardHeader>
                     <CardContent>
                         <ul className="space-y-3 mb-8">
                             <li className="flex items-center gap-2 text-sm font-semibold"><CheckCircle size={16} className="text-accent" /> Everything in Basic</li>
                             <li className="flex items-center gap-2 text-sm"><CheckCircle size={16} className="text-green-500" /> Professional Logo Design</li>
                             <li className="flex items-center gap-2 text-sm"><CheckCircle size={16} className="text-green-500" /> Business Card Design</li>
                             <li className="flex items-center gap-2 text-sm"><CheckCircle size={16} className="text-green-500" /> Letterhead Template</li>
                             <li className="flex items-center gap-2 text-sm"><CheckCircle size={16} className="text-green-500" /> Domain Name Registration (.co.za)</li>
                         </ul>
                         <Link to="/consultation">
                            <Button variant="accent" className="w-full">Select Brand Starter</Button>
                         </Link>
                     </CardContent>
                 </Card>
             </div>
        </div>
      </section>

      <section className="bg-primary text-white py-16 text-center">
          <div className="container">
              <h2 className="text-2xl font-bold mb-4">Not sure what you need?</h2>
              <p className="text-gray-300 mb-8">We can advise you on the best structure for your business.</p>
              <Link to="/consultation">
                <Button variant="outline" className="bg-transparent text-white border-white hover:bg-white hover:text-primary">Contact Us</Button>
              </Link>
          </div>
      </section>

    </div>
  );
};