
import React from 'react';
import { Facebook, Instagram, Mail, Phone, MapPin } from 'lucide-react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { Logo } from './ui/Logo';

// Custom SVG for X (formerly Twitter) - Official Path
const XIcon: React.FC<{ size?: number; className?: string }> = ({ size = 20, className = "" }) => (
  <svg 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="currentColor" 
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932 6.064-6.932zm-1.292 19.494h2.039L6.486 3.24H4.298l13.311 17.407z" />
  </svg>
);

// Custom SVG for TikTok - Highly accurate official simplified path
const TikTokIcon: React.FC<{ size?: number; className?: string }> = ({ size = 20, className = "" }) => (
  <svg 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="currentColor" 
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1.04-.1z" />
  </svg>
);

export const Footer: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleScrollTo = (sectionId: string) => {
    if (location.pathname === '/') {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      navigate('/', { state: { scrollTo: sectionId } });
    }
  };

  return (
    <footer className="bg-primary text-gray-300 pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          {/* Brand */}
          <div className="space-y-6">
            <Link to="/" className="flex items-center space-x-3 text-white group" aria-label="Plug Connect Solutions Home">
              <div className="shrink-0">
                 <Logo size={42} />
              </div>
              <span className="font-bold text-xl tracking-tight leading-tight">Plug Connect <br className="sm:hidden" /> Solutions</span>
            </Link>
            <p className="text-sm leading-relaxed text-gray-400">
              Helping South African SMEs dominate the digital space. Affordable web design, registration, and automation.
            </p>
            <div className="flex space-x-4 pt-2">
              <a href="https://www.facebook.com/profile.php?id=61584670473805" target="_blank" rel="noopener noreferrer" 
                className="bg-white/5 p-2.5 rounded-lg text-white hover:text-white hover:bg-[#1877F2] transition-all flex items-center justify-center" 
                title="Facebook" aria-label="Visit our Facebook">
                <Facebook size={20} />
              </a>
              <a href="https://x.com/plugconnectsols" target="_blank" rel="noopener noreferrer" 
                className="bg-white/5 p-2.5 rounded-lg text-white hover:bg-black hover:text-white transition-all flex items-center justify-center group/icon" 
                title="X (Twitter)" aria-label="Visit our X (Twitter)">
                <XIcon size={20} className="fill-current" />
              </a>
              <a href="https://www.instagram.com/plugconnectsols" target="_blank" rel="noopener noreferrer" 
                className="bg-white/5 p-2.5 rounded-lg text-white hover:text-white hover:bg-gradient-to-tr hover:from-[#f9ce34] hover:via-[#ee2a7b] hover:to-[#6228d7] transition-all flex items-center justify-center" 
                title="Instagram" aria-label="Visit our Instagram">
                <Instagram size={20} />
              </a>
              <a href="https://vm.tiktok.com/ZSHwx4Bc7DWnr-HFBha/" target="_blank" rel="noopener noreferrer" 
                className="bg-white/5 p-2.5 rounded-lg text-white hover:bg-black hover:text-[#00f2ea] transition-all flex items-center justify-center group/icon" 
                title="TikTok" aria-label="Visit our TikTok">
                <TikTokIcon size={20} className="fill-current" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-6 uppercase tracking-wider text-xs font-heading">Company</h4>
            <ul className="space-y-3 text-sm">
              <li><button onClick={() => handleScrollTo('about')} className="hover:text-accent transition-colors">About Our Agency</button></li>
              <li><Link to="/pricing" className="hover:text-accent transition-colors">Pricing & Packages</Link></li>
              <li><button onClick={() => handleScrollTo('testimonials')} className="hover:text-accent transition-colors">Customer Success</button></li>
              <li><Link to="/consultation" className="hover:text-accent transition-colors">Book Consultation</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-semibold mb-6 uppercase tracking-wider text-xs font-heading">Services</h4>
            <ul className="space-y-3 text-sm">
              <li><Link to="/web-design" className="hover:text-accent transition-colors">Website Design</Link></li>
              <li><Link to="/social-media" className="hover:text-accent transition-colors">Social Media Marketing</Link></li>
              <li><Link to="/business-registration" className="hover:text-accent transition-colors">Company Registration</Link></li>
              <li><button onClick={() => handleScrollTo('automation')} className="hover:text-accent transition-colors">Workflow Automation</button></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold mb-6 uppercase tracking-wider text-xs font-heading">Contact Info</h4>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start space-x-3">
                <MapPin size={18} className="text-accent mt-0.5 shrink-0" />
                <span className="text-gray-400">Operating Nationwide (SA)</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone size={18} className="text-accent shrink-0" />
                <span className="text-gray-400">076 375 0213</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail size={18} className="text-accent shrink-0" />
                <a href="mailto:plugconnectsolutions@proton.me" className="text-gray-400 hover:text-accent transition-colors">Email Our Team</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center text-[10px] uppercase tracking-widest text-gray-500">
          <p>&copy; {new Date().getFullYear()} Plug Connect Solutions. Reg No: 2024/025213/07</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link to="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
