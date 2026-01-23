
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from './ui/Button';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Logo } from './ui/Logo';

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  const scrollToSection = (sectionId: string) => {
    if (location.pathname === '/') {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      navigate('/', { state: { scrollTo: sectionId } });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out ${
        isScrolled ? 'glass py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="container flex items-center justify-between">
        <Link to="/" className="flex items-center space-x-3 group">
          <div className="flex items-center justify-center shrink-0">
            <Logo size={42} />
          </div>
          <span className="font-heading font-bold text-xl tracking-tight text-primary">Plug Connect</span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-10 text-sm font-medium text-gray-600">
          <Link to="/" className="hover:text-primary transition-colors">Home</Link>
          <button onClick={() => scrollToSection('services')} className="hover:text-primary transition-colors">Services</button>
          <button onClick={() => scrollToSection('about')} className="hover:text-primary transition-colors">About</button>
          <Link to="/pricing" className="hover:text-primary transition-colors">Pricing</Link>
          <button onClick={() => scrollToSection('testimonials')} className="hover:text-primary transition-colors">Testimonials</button>
          
          <Link to="/consultation">
             <Button variant="primary" size="sm" className="rounded-full px-6">
               Book Consultation
             </Button>
          </Link>
        </nav>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden p-2 text-primary hover:bg-gray-100 rounded-lg transition-colors"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="absolute top-full left-0 right-0 bg-white border-b shadow-2xl md:hidden p-6 flex flex-col space-y-4 animate-in slide-in-from-top-2 duration-300">
           <Link to="/" className="text-lg font-medium text-gray-800 py-3 border-b border-gray-50">Home</Link>
           <button onClick={() => scrollToSection('services')} className="text-lg font-medium text-gray-800 py-3 border-b border-gray-50 text-left">Services</button>
           <button onClick={() => scrollToSection('about')} className="text-lg font-medium text-gray-800 py-3 border-b border-gray-50 text-left">About</button>
           <Link to="/pricing" className="text-lg font-medium text-gray-800 py-3 border-b border-gray-50">Pricing</Link>
           <button onClick={() => scrollToSection('testimonials')} className="text-lg font-medium text-gray-800 py-3 border-b border-gray-50 text-left">Testimonials</button>
           <div className="pt-4">
             <Link to="/consultation" className="w-full block">
               <Button variant="primary" className="w-full">Book Consultation</Button>
             </Link>
           </div>
        </div>
      )}
    </header>
  );
};
