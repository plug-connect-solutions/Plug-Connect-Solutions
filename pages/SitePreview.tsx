import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { 
  ArrowLeft, ShoppingCart, Menu, Star, CheckCircle2, 
  Plus, MapPin, Phone, X, Globe, Zap, BarChart3, 
  ShieldCheck, Layout, ChevronRight, User
} from 'lucide-react';
import { Button } from '../components/ui/Button';

// --- INTERACTIVE DEMO COMPONENTS ---

const DemoToast: React.FC<{ message: string; show: boolean; onClose: () => void }> = ({ message, show, onClose }) => {
  useEffect(() => {
    if (show) {
      const timer = setTimeout(onClose, 3000);
      return () => clearTimeout(timer);
    }
  }, [show, onClose]);

  if (!show) return null;

  return (
    <div className="fixed bottom-10 left-1/2 -translate-x-1/2 z-[100] animate-in slide-in-from-bottom-5 fade-in duration-300">
      <div className="bg-primary text-white px-6 py-3 rounded-full shadow-2xl border border-white/10 flex items-center gap-3">
        <CheckCircle2 size={18} className="text-green-400" />
        <span className="text-sm font-medium">{message}</span>
      </div>
    </div>
  );
};

// --- MOCK TEMPLATES ---

// 1. KOTA KINGS (Street Food)
const KotaKingsTemplate = ({ onAction }: { onAction: (m: string) => void }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div className="font-sans bg-yellow-50 min-h-screen text-gray-900 pb-20">
      <nav className="bg-red-600 text-white p-4 shadow-lg sticky top-0 z-10">
          <div className="container mx-auto flex justify-between items-center px-4">
              <h1 className="text-xl md:text-2xl font-black uppercase tracking-tighter italic">Kasi Kota Kings 👑</h1>
              <div className="hidden md:flex items-center gap-6 font-bold text-xs">
                  <button onClick={() => onAction("Menu opened")} className="hover:text-yellow-300">MENU</button>
                  <button onClick={() => onAction("Locations viewed")} className="hover:text-yellow-300">LOCATIONS</button>
                  <button onClick={() => onAction("Redirecting to Order Flow...")} className="bg-yellow-400 text-red-700 px-4 py-2 rounded-full uppercase text-xs">Order Now</button>
              </div>
              <button className="md:hidden" onClick={() => setMenuOpen(!menuOpen)}>
                {menuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
          </div>
          {menuOpen && (
            <div className="absolute top-full left-0 right-0 bg-red-700 p-6 flex flex-col gap-4 md:hidden animate-in slide-in-from-top-2">
              <button onClick={() => { setMenuOpen(false); onAction("Menu opened"); }} className="text-left font-bold">OUR MENU</button>
              <button onClick={() => { setMenuOpen(false); onAction("Locations viewed"); }} className="text-left font-bold">LOCATIONS</button>
              <button onClick={() => { setMenuOpen(false); onAction("Order started"); }} className="bg-yellow-400 text-red-700 p-3 rounded font-bold">ORDER NOW</button>
            </div>
          )}
      </nav>

      <header className="relative bg-gray-900 text-white overflow-hidden h-[50vh]">
          <img src="https://images.unsplash.com/photo-1550547660-d9450f859349?q=80&w=1200&auto=format&fit=crop" 
            className="w-full h-full object-cover opacity-70" alt="Hero Kota" loading="eager" />
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-4">
              <h2 className="text-5xl md:text-7xl font-black text-yellow-400 drop-shadow-lg italic mb-2 tracking-tighter uppercase">Boss of Kotas</h2>
              <p className="text-xl font-bold mb-6">Freshly made. Hot. Loaded with Chips.</p>
              <button 
                onClick={() => onAction("Opening WhatsApp...")}
                className="bg-red-600 text-white px-8 py-4 rounded-full font-bold text-lg hover:scale-105 transition-transform shadow-xl border-4 border-yellow-400"
              >
                  ORDER ON WHATSAPP
              </button>
          </div>
      </header>

      <div className="container mx-auto px-4 py-16">
          <h3 className="text-3xl font-black text-center mb-12 text-red-600 uppercase italic">Our Best Sellers</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                  { name: "The Junior Boss", price: "R35", desc: "Polony, Chips, Atchar, Special Sauce", img: "data:image/jpeg;base64,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" },
                  { name: "Full House Special", price: "R65", desc: "Burger Patty, Cheese, Egg, Russian, Chips", img: "https://images.unsplash.com/photo-1606131731446-5568d87113aa?q=80&w=600&auto=format&fit=crop" },
                  { name: "The Dagwood", price: "R80", desc: "Double everything. Big appetite only.", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAZuHyjrfhYBoAgPsIduC81YSVFoteMgYN7Q&s" }
              ].map((item, i) => (
                  <div key={i} className="bg-white rounded-2xl shadow-xl overflow-hidden border-2 border-transparent hover:border-yellow-400 transition-all duration-300 group">
                      <div className="h-56 overflow-hidden bg-gray-200">
                        <img src={item.img} alt={item.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" loading="lazy" />
                      </div>
                      <div className="p-6">
                          <div className="flex justify-between items-start mb-2">
                              <h4 className="font-black text-xl leading-tight">{item.name}</h4>
                              <span className="bg-yellow-400 text-red-800 font-bold px-3 py-1 rounded text-lg shrink-0">{item.price}</span>
                          </div>
                          <p className="text-gray-500 text-sm mb-6 h-10 line-clamp-2">{item.desc}</p>
                          <button 
                            onClick={() => onAction(`${item.name} added to order!`)}
                            className="w-full py-3 bg-red-600 text-white hover:bg-red-700 font-bold rounded-xl transition-colors flex items-center justify-center gap-2"
                          >
                              <Plus size={18} /> Add to Order
                          </button>
                      </div>
                  </div>
              ))}
          </div>
      </div>
    </div>
  );
};

// 2. LAW FIRM (Corporate)
const LawFirmTemplate = ({ onAction }: { onAction: (m: string) => void }) => (
  <div className="font-serif bg-white text-gray-800 min-h-screen">
      <div className="bg-slate-900 text-slate-300 py-2.5 text-[10px] uppercase tracking-widest">
          <div className="container mx-auto px-6 flex justify-between">
              <span className="flex items-center gap-2"><MapPin size={12} /> Sandton, Johannesburg</span>
              <span className="flex items-center gap-2 font-bold"><Phone size={12} /> +27 76 375 0213</span>
          </div>
      </div>
      <nav className="border-b border-gray-100 py-8 bg-white sticky top-0 z-20">
          <div className="container mx-auto px-6 flex justify-between items-center">
              <div className="text-xl md:text-2xl tracking-[0.2em] uppercase font-semibold text-slate-900">
                 M. NDLOVU <span className="text-yellow-700">& ASSOCIATES</span>
              </div>
              <div className="hidden lg:flex items-center space-x-10 text-[11px] uppercase tracking-[0.15em] font-sans font-bold">
                  <button onClick={() => onAction("Navigated to Attorneys")} className="text-slate-900 hover:text-yellow-700">Attorneys</button>
                  <button onClick={() => onAction("Navigated to Practice Areas")} className="text-slate-500 hover:text-slate-900 transition-colors">Practice Areas</button>
                  <button onClick={() => onAction("Opening Consultation Form...")} className="bg-slate-900 text-white px-7 py-3 hover:bg-yellow-700 transition-all">Free Consultation</button>
              </div>
              <button className="lg:hidden" onClick={() => onAction("Mobile Menu Toggled")}>
                <Menu size={24} />
              </button>
          </div>
      </nav>
      <header className="relative h-[600px] bg-slate-100">
          <img src="https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=1400&auto=format&fit=crop" className="w-full h-full object-cover" alt="Law Office" loading="eager" />
          <div className="absolute inset-0 bg-slate-900/60 flex items-center">
              <div className="container mx-auto px-6">
                  <div className="max-w-2xl">
                    <h1 className="text-4xl md:text-6xl text-white mb-6 leading-[1.15] font-bold">Sophisticated Legal Solutions for Your Business.</h1>
                    <p className="text-slate-200 font-sans max-w-lg mb-10 text-base md:text-lg leading-relaxed">Dedicated to providing reliable, expert legal counsel across South Africa with integrity and professionalism.</p>
                    <button 
                      onClick={() => onAction("Callback request submitted!")}
                      className="bg-yellow-700 text-white px-10 py-4 font-sans uppercase tracking-[0.2em] text-xs hover:bg-yellow-800 transition-all shadow-xl"
                    >
                        Request a Callback
                    </button>
                  </div>
              </div>
          </div>
      </header>
  </div>
);

// 3. URBAN CAFE (Minimalist)
const UrbanCafeTemplate = ({ onAction }: { onAction: (m: string) => void }) => (
    <div className="font-sans bg-[#FDFBF7] text-[#1a1a1a] min-h-screen">
        <nav className="p-8 md:p-12 flex justify-between items-center max-w-7xl mx-auto">
            <span className="font-bold tracking-[0.3em] uppercase text-xl md:text-2xl">URBAN.BREW</span>
            <button onClick={() => onAction("Mobile Menu Toggled")} className="hover:scale-110 transition-transform">
              <Menu className="stroke-[1.5]" size={28} />
            </button>
        </nav>
        <div className="container mx-auto px-6 md:px-12 flex flex-col lg:flex-row gap-16 lg:gap-20 items-center py-10 max-w-7xl">
            <div className="flex-1 space-y-10">
                <div className="space-y-4">
                  <span className="text-xs uppercase tracking-[0.4em] text-gray-400 font-bold">Small Batch Roasters</span>
                  <h1 className="text-6xl md:text-8xl font-light leading-[0.9] tracking-tighter">CRAFTED.<br/>MORNINGS.</h1>
                </div>
                <p className="text-gray-500 max-w-sm text-lg leading-relaxed">Ethically sourced beans, roasted daily in Cape Town. Experience coffee as it was meant to be enjoyed.</p>
                <div className="flex flex-wrap gap-6 pt-6">
                    <button 
                      onClick={() => onAction("Opening Menu...")}
                      className="bg-black text-white px-10 py-4 text-xs uppercase tracking-[0.2em] hover:bg-gray-800 transition-all"
                    >
                      Explore Menu
                    </button>
                    <button 
                      onClick={() => onAction("Opening Booking Portal...")}
                      className="border border-black px-10 py-4 text-xs uppercase tracking-[0.2em] hover:bg-black hover:text-white transition-all"
                    >
                      Book a Table
                    </button>
                </div>
            </div>
            <div className="flex-1 w-full bg-gray-200 rounded overflow-hidden shadow-2xl">
                <img src="https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?q=80&w=1200&auto=format&fit=crop" className="w-full aspect-[4/5] object-cover hover:scale-105 transition-transform duration-700" alt="Cafe ambiance" loading="lazy" />
            </div>
        </div>
    </div>
);

// 4. TECH STARTUP (Modern SaaS)
const TechStartupTemplate = ({ onAction }: { onAction: (m: string) => void }) => (
    <div className="font-sans bg-slate-50 min-h-screen text-slate-900 overflow-x-hidden">
        <nav className="px-6 py-6 border-b border-slate-200 bg-white/80 backdrop-blur sticky top-0 z-30">
            <div className="container mx-auto flex justify-between items-center">
                <div className="flex items-center gap-2 font-black text-xl tracking-tight text-blue-600">
                  <Zap size={24} fill="currentColor" /> NEXTSTREAM
                </div>
                <div className="hidden lg:flex items-center gap-10 text-sm font-bold text-slate-500">
                    <button onClick={() => onAction("Product clicked")}>Features</button>
                    <button onClick={() => onAction("Pricing clicked")}>Pricing</button>
                    <button onClick={() => onAction("Docs clicked")}>Documentation</button>
                </div>
                <button 
                  onClick={() => onAction("Started free trial")}
                  className="bg-blue-600 text-white px-6 py-2.5 rounded-lg font-bold text-sm hover:bg-blue-700 shadow-lg shadow-blue-200 transition-all"
                >
                  Start Free Trial
                </button>
            </div>
        </nav>
        
        <header className="container mx-auto px-6 py-24 text-center max-w-4xl">
            <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-1.5 rounded-full text-xs font-bold mb-8">
              <span className="relative flex h-2 w-2"><span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span><span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span></span>
              Now v2.0 is Live
            </div>
            <h1 className="text-5xl md:text-7xl font-black mb-8 leading-[1.05] tracking-tight text-slate-900">Scale Your Data Without <span className="text-blue-600">The Friction.</span></h1>
            <p className="text-lg text-slate-500 mb-12 max-w-2xl mx-auto">The unified analytics platform for modern engineering teams. Get insights in milliseconds, not minutes.</p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
               <button onClick={() => onAction("Demo requested")} className="bg-slate-900 text-white px-10 py-4 rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-slate-800 transition-all shadow-xl"><Layout size={20} /> Request Demo</button>
               <button onClick={() => onAction("Contacted sales")} className="bg-white text-slate-900 px-10 py-4 rounded-xl font-bold border border-slate-200 hover:bg-slate-50 transition-all shadow-sm">Contact Sales</button>
            </div>
        </header>

        <section className="container mx-auto px-6 py-20">
            <div className="bg-white rounded-[2rem] p-4 shadow-2xl border border-slate-100 max-w-5xl mx-auto overflow-hidden">
                <img src="https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=1200&auto=format&fit=crop" className="w-full rounded-[1.5rem] shadow-inner" alt="Dashboard" />
            </div>
        </section>
    </div>
);

// 5. E-COMMERCE (Skincare & Tech)
const EcommerceTemplate = ({ title, category, heroImg, products, onAction }: { title: string, category: string, heroImg: string, products: any[], onAction: (m: string) => void }) => {
    const [cartCount, setCartCount] = useState(0);
    const handleAdd = (name: string) => {
        setCartCount(prev => prev + 1);
        onAction(`${name} added to cart!`);
    };

    return (
        <div className="font-sans bg-white min-h-screen text-slate-900">
            <div className="bg-slate-900 text-white text-[10px] text-center py-2.5 uppercase tracking-[0.2em] font-bold">
                Free Shipping on orders over R750 Nationwide
            </div>
            <nav className="border-b border-gray-100 py-6 px-6 sticky top-0 bg-white/95 backdrop-blur z-20">
                <div className="container mx-auto flex justify-between items-center">
                    <button onClick={() => onAction("Home clicked")} className="text-xl font-black tracking-tighter uppercase">{title}</button>
                    <div className="hidden md:flex gap-10 text-[11px] uppercase tracking-[0.2em] font-bold text-slate-400">
                        <button onClick={() => onAction("Shop clicked")} className="hover:text-black">Shop</button>
                        <button onClick={() => onAction("About clicked")} className="hover:text-black">Our Story</button>
                        <button onClick={() => onAction("Contact clicked")} className="hover:text-black">Help</button>
                    </div>
                    <div className="flex gap-5 items-center">
                        <button onClick={() => onAction("Account clicked")} className="hidden sm:block"><User size={20} /></button>
                        <button onClick={() => onAction("Viewed cart")} className="p-2 relative group">
                            <ShoppingCart size={22} />
                            {cartCount > 0 && (
                                <span className="absolute -top-1 -right-1 bg-accent text-white text-[8px] w-4 h-4 rounded-full flex items-center justify-center font-bold animate-in zoom-in duration-300">
                                    {cartCount}
                                </span>
                            )}
                        </button>
                    </div>
                </div>
            </nav>
            
            <header className="relative h-[450px] overflow-hidden bg-slate-100">
                <img src={heroImg} className="w-full h-full object-cover" alt="Hero" loading="eager" />
                <div className="absolute inset-0 bg-black/10 flex items-center justify-center">
                    <div className="text-center text-white px-6">
                        <h1 className="text-5xl md:text-7xl font-bold mb-8 tracking-tighter drop-shadow-xl uppercase">The Collection</h1>
                        <button 
                          onClick={() => onAction("Redirecting to Collection...")}
                          className="bg-white text-black px-12 py-5 text-xs font-bold uppercase tracking-[0.2em] hover:bg-slate-900 hover:text-white transition-all shadow-2xl"
                        >
                          Shop Now
                        </button>
                    </div>
                </div>
            </header>

            <div className="container mx-auto px-6 py-24">
                <div className="flex justify-between items-end mb-16 border-b border-gray-100 pb-6">
                    <h2 className="text-2xl font-black uppercase tracking-widest">{category}</h2>
                    <button onClick={() => onAction("All products listed")} className="text-xs font-bold text-slate-400 uppercase tracking-widest hover:text-black transition-colors">View All Products</button>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-x-8 gap-y-16">
                    {products.map((p, i) => (
                        <div key={i} className="group cursor-pointer">
                            <div className="relative aspect-[3/4] mb-6 overflow-hidden bg-slate-50">
                                <img src={p.img} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" loading="lazy" />
                                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors"></div>
                                <button 
                                  onClick={(e) => { e.stopPropagation(); handleAdd(p.name); }}
                                  className="absolute bottom-6 left-6 right-6 bg-white text-black py-4 text-[10px] font-bold uppercase tracking-[0.2em] translate-y-20 group-hover:translate-y-0 transition-transform shadow-2xl border border-slate-100"
                                >
                                    Quick Add +
                                </button>
                            </div>
                            <h3 className="font-bold text-sm mb-1 uppercase tracking-wider">{p.name}</h3>
                            <p className="text-slate-500 text-sm font-medium">R {p.price}.00</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

// --- MAIN PREVIEW COMPONENT ---

export const SitePreview: React.FC = () => {
  const { templateId } = useParams<{ templateId: string }>();
  const [toast, setToast] = useState<{ show: boolean, message: string }>({ show: false, message: "" });
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    window.scrollTo(0, 0);
    // Smooth transition simulation
    const timer = setTimeout(() => setIsLoading(false), 500);
    return () => clearTimeout(timer);
  }, [templateId]);

  const handleAction = (message: string) => {
    setToast({ show: true, message: `Demo: ${message}` });
  };

  const renderTemplate = () => {
    if (isLoading) return <div className="min-h-screen bg-slate-50 flex items-center justify-center animate-pulse"><Zap className="text-slate-300" size={48} /></div>;

    switch(templateId) {
        case 'kota-kings': return <KotaKingsTemplate onAction={handleAction} />;
        case 'law-firm': return <LawFirmTemplate onAction={handleAction} />;
        case 'urban-cafe': return <UrbanCafeTemplate onAction={handleAction} />;
        case 'tech-startup': return <TechStartupTemplate onAction={handleAction} />;
        case 'glow-skincare': 
          return <EcommerceTemplate 
            onAction={handleAction}
            title="GLOW.SKIN" 
            category="Curated Essentials"
            heroImg="https://images.unsplash.com/photo-1612817288484-6f916006741a?q=80&w=1400&auto=format&fit=crop"
            products={[
              { name: "Radiance Serum", price: 450, img: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?q=80&w=600&auto=format&fit=crop" },
              { name: "Hydrating Cleanser", price: 290, img: "data:image/jpeg;base64,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" },
              { name: "Retinol Recovery", price: 620, img: "https://images.unsplash.com/photo-1567721913486-6585f069b332?q=80&w=600&auto=format&fit=crop" },
              { name: "Daily SPF 50+", price: 380, img: "data:image/jpeg;base64,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" }
            ]}
          />;
        case 'tech-gear': 
          return <EcommerceTemplate 
            onAction={handleAction}
            title="TECH.CORE" 
            category="Elite Hardware"
            heroImg="https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=1400&auto=format&fit=crop"
            products={[
              { name: "Pro Gaming Mouse", price: 1250, img: "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?q=80&w=600&auto=format&fit=crop" },
              { name: "Mechanical Keys", price: 2400, img: "https://images.unsplash.com/photo-1511467687858-23d96c32e4ae?q=80&w=600&auto=format&fit=crop" },
              { name: "ANC Headset", price: 1800, img: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=600&auto=format&fit=crop" },
              { name: "4K Desktop Hub", price: 4900, img: "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?q=80&w=600&auto=format&fit=crop" }
            ]}
          />;
        default: return (
          <div className="min-h-screen bg-slate-50 flex flex-col items-center justify-center p-12 text-center">
            <Layout className="text-slate-300 mb-6" size={64} />
            <h2 className="text-2xl font-bold text-slate-800 mb-2">Live Demo Not Found</h2>
            <p className="text-slate-500 mb-8 max-w-sm">This template is still in development or has been moved. Please select another design from the portfolio.</p>
            <Link to="/web-design">
              <Button variant="primary" className="rounded-full px-8">Return to Portfolio</Button>
            </Link>
          </div>
        );
    }
  };

  return (
    <div className="min-h-screen bg-black flex flex-col relative overflow-x-hidden">
      {/* Control Bar */}
      <div className="bg-[#0c0c0c] text-white py-3 px-6 flex justify-between items-center sticky top-0 z-[100] shadow-2xl border-b border-white/5">
        <div className="flex items-center gap-4">
            <Link to="/web-design" className="text-gray-400 hover:text-white flex items-center gap-2 text-xs transition-all group">
                <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" /> <span className="hidden sm:inline font-bold uppercase tracking-widest">Back to Portfolio</span>
            </Link>
            <div className="h-4 w-px bg-white/10 mx-2"></div>
            <div className="flex items-center gap-2 text-[10px] uppercase tracking-widest font-black text-accent">
               <div className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse"></div>
               Live Preview
            </div>
        </div>
        
        <div className="flex items-center gap-3">
            <div className="hidden sm:flex items-center gap-2 text-[10px] uppercase font-bold text-gray-500 mr-4">
              <Globe size={12} /> Public Demo
            </div>
            <Link to="/consultation">
                <Button size="sm" variant="accent" className="h-9 text-[10px] px-6 font-black uppercase tracking-[0.15em] rounded-full">
                   Own This Design
                </Button>
            </Link>
        </div>
      </div>

      {/* Main Container */}
      <div className="flex-grow bg-white overflow-hidden relative shadow-inner">
          {renderTemplate()}
      </div>

      <DemoToast 
        show={toast.show} 
        message={toast.message} 
        onClose={() => setToast({ ...toast, show: false })} 
      />
    </div>
  );
};