import React from 'react';
import { Button } from '../components/ui/Button';
import { Card, CardContent } from '../components/ui/Card';
import { ArrowRight, ShoppingCart, Layout, Smartphone, Check, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';

const webProjects = [
  {
    id: "law-firm",
    title: "M. Ndlovu Attorneys",
    category: "Corporate Website",
    image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=800&auto=format&fit=crop",
    description: "A professional, trustworthy design for legal professionals with booking integration."
  },
  {
    id: "kota-kings",
    title: "Kasi Kota Kings",
    category: "Street Food & Takeaway",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRroc5YeVUixMSDfL54lewMYQvVCOBHBHxlhA&s", 
    description: "Vibrant mobile menu with one-click WhatsApp ordering for a local Kota business."
  },
  {
    id: "urban-cafe",
    title: "The Urban Brew",
    category: "Hospitality",
    image: "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?q=80&w=800&auto=format&fit=crop",
    description: "Menu showcase and table reservation system for a trendy coffee shop."
  },
  {
    id: "tech-startup",
    title: "NextStream Analytics",
    category: "SaaS / Landing Page",
    image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=800&auto=format&fit=crop",
    description: "High-conversion landing page with modern animations and clear pricing."
  }
];

const storeProjects = [
  {
    id: "glow-skincare",
    title: "Glow Skincare",
    category: "Beauty E-commerce",
    image: "https://images.unsplash.com/photo-1612817288484-6f916006741a?q=80&w=800&auto=format&fit=crop",
    description: "Shopify-style store with inventory management and PayFast integration."
  },
  {
    id: "tech-gear",
    title: "Tech Gear SA",
    category: "Electronics Store",
    image: "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?q=80&w=800&auto=format&fit=crop",
    description: "Large catalog support with advanced filtering and search."
  }
];

const BrowserFrame: React.FC<{ children: React.ReactNode; link: string }> = ({ children, link }) => (
  <div className="rounded-xl overflow-hidden shadow-2xl border border-gray-200 bg-white group h-full flex flex-col">
    <div className="bg-gray-100 px-4 py-3 flex items-center gap-2 border-b border-gray-200 shrink-0">
      <div className="w-2.5 h-2.5 rounded-full bg-red-400"></div>
      <div className="w-2.5 h-2.5 rounded-full bg-yellow-400"></div>
      <div className="w-2.5 h-2.5 rounded-full bg-green-400"></div>
      <div className="ml-4 flex-1 bg-white h-5 rounded-md shadow-sm border border-gray-200 flex items-center px-2">
         <span className="text-[9px] text-gray-400 truncate tracking-tight font-medium">https://{link}.co.za</span>
      </div>
    </div>
    <div className="relative flex-grow overflow-hidden bg-gray-50">
      {children}
      <div className="absolute inset-0 bg-primary/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-[2px]">
        <Link to={`/preview/${link}`}>
            <Button variant="accent" className="rounded-full gap-2 text-xs py-2 h-auto shadow-2xl">
                <ExternalLink size={14} /> View Live Demo
            </Button>
        </Link>
      </div>
    </div>
  </div>
);

export const WebDesign: React.FC = () => {
  return (
    <div className="min-h-screen bg-white pt-20">
      
      {/* Hero */}
      <section className="bg-primary text-white py-24 md:py-32 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-accent/10 rounded-full blur-[120px] translate-x-1/3 -translate-y-1/3"></div>
        <div className="container relative z-10 text-center">
          <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 px-5 py-2 rounded-full text-xs font-bold uppercase tracking-widest mb-8 backdrop-blur-md text-accent">
            <Layout size={14} />
            <span className="text-white opacity-90">Web Design Portfolio</span>
          </div>
          <h1 className="font-heading text-5xl md:text-7xl font-bold mb-8 leading-[1.1] tracking-tight">Modern Websites <br/> <span className="text-accent">Built for Growth</span></h1>
          <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-12 leading-relaxed">
            From professional brochures to high-converting online stores. We create digital experiences that perform flawlessly on every device.
          </p>
          <Link to="/consultation">
            <Button size="lg" variant="accent" className="rounded-full px-12 font-bold shadow-2xl shadow-accent/20">Start Your Project</Button>
          </Link>
        </div>
      </section>

      {/* Standard Web Design */}
      <section className="py-24 bg-white">
        <div className="container">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-4">
            <div>
              <h2 className="text-3xl font-bold font-heading text-primary mb-3">Service Solutions</h2>
              <p className="text-gray-500">Optimized for professionals and service providers.</p>
            </div>
            <div className="hidden md:block h-[1px] flex-1 bg-gray-100 ml-12 mb-5"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-14">
            {webProjects.map((project, idx) => (
              <div key={idx} className="flex flex-col space-y-5 animate-in fade-in slide-in-from-bottom-4 duration-700 fill-mode-both" style={{ animationDelay: `${idx * 150}ms` }}>
                <div className="h-72 lg:h-80">
                  <BrowserFrame link={project.id}>
                    <img 
                      src={project.image} 
                      alt={project.title} 
                      className="w-full h-full object-cover object-top transition-transform duration-1000 group-hover:scale-105" 
                      loading="lazy"
                    />
                  </BrowserFrame>
                </div>
                <div>
                  <div className="text-accent text-[10px] font-black uppercase tracking-[0.2em] mb-2">{project.category}</div>
                  <h3 className="text-xl font-bold text-primary group-hover:text-accent transition-colors">{project.title}</h3>
                  <p className="text-gray-500 text-sm mt-3 leading-relaxed line-clamp-2">{project.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* E-Commerce Section */}
      <section className="py-24 bg-secondary/30 relative">
        <div className="container">
          <div className="flex flex-col lg:flex-row items-center gap-20">
            <div className="flex-1 max-w-xl">
              <div className="w-16 h-16 bg-white text-accent rounded-3xl flex items-center justify-center mb-8 shadow-xl border border-gray-100">
                <ShoppingCart size={32} strokeWidth={2.5} />
              </div>
              <h2 className="text-4xl md:text-5xl font-bold font-heading text-primary mb-8 leading-[1.1] tracking-tight">Sell Your Products <br/> Around the Clock</h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                We build powerful online stores integrated with South Africa's leading payment gateways. Secure, mobile-responsive, and incredibly easy to manage.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
                {['Secure Payments', 'Mobile Checkout', 'Inventory Tools', 'Sales Analytics'].map((item, i) => (
                   <div key={i} className="flex items-center space-x-3 text-primary font-bold text-sm bg-white p-4 rounded-xl shadow-sm border border-gray-50">
                     <div className="bg-accent text-white p-1 rounded-full"><Check size={12} strokeWidth={4} /></div>
                     <span>{item}</span>
                   </div>
                ))}
              </div>
              <Link to="/consultation">
                <Button variant="primary" size="lg" className="rounded-full px-10">Launch My Store</Button>
              </Link>
            </div>
            
            <div className="flex-1 w-full grid grid-cols-1 sm:grid-cols-2 gap-8 lg:gap-12">
               {storeProjects.map((project, idx) => (
                <div key={idx} className={`${idx % 2 !== 0 ? 'sm:translate-y-16' : ''} group`}>
                  <div className="h-80 lg:h-96">
                    <BrowserFrame link={project.id}>
                      <img 
                        src={project.image} 
                        alt={project.title} 
                        className="w-full h-full object-cover object-center grayscale group-hover:grayscale-0 transition-all duration-700" 
                        loading="lazy"
                      />
                    </BrowserFrame>
                  </div>
                  <div className="mt-6">
                    <h3 className="font-bold text-primary text-lg">{project.title}</h3>
                    <p className="text-xs text-gray-400 uppercase tracking-widest mt-1 font-black">{project.category}</p>
                  </div>
                </div>
               ))}
            </div>
          </div>
        </div>
      </section>

      {/* Global CTA */}
      <section className="py-24 bg-primary text-white text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-hero-glow opacity-5"></div>
        <div className="container relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 font-heading tracking-tight">Ready to upgrade your <br/> digital presence?</h2>
          <p className="text-gray-400 mb-12 max-w-xl mx-auto leading-relaxed">Contact us today for a free evaluation of your current website or a custom quote for a new digital identity.</p>
          <Link to="/consultation">
             <Button variant="accent" size="lg" className="rounded-full px-12 py-5 font-bold shadow-2xl shadow-accent/20">Get Started Now</Button>
          </Link>
        </div>
      </section>

    </div>
  );
};