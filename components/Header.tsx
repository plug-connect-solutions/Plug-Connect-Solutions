import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
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

  const isSolutionsActive = location.pathname === '/solutions';
  const isPricingActive = location.pathname === '/pricing';

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b ${
        isScrolled
          ? 'bg-surface/90 backdrop-blur-md border-border-muted/60 shadow-sm'
          : 'bg-surface/80 backdrop-blur-md border-border-muted/30'
      }`}
    >
      <div className="max-w-[1280px] mx-auto px-6 lg:px-16 h-20 flex items-center justify-between gap-8">
        <Link to="/" className="flex items-center gap-3.5 group shrink-0">
          <Logo size={38} />
          <span className="font-heading font-bold text-xl lg:text-2xl tracking-tight text-primary whitespace-nowrap">
            Plug Connect Solutions
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          <Link
            to="/solutions"
            className={`text-xs font-semibold uppercase tracking-[0.1em] transition-colors duration-200 whitespace-nowrap shrink-0 pb-0.5 ${
              isSolutionsActive
                ? 'text-accent border-b-2 border-accent'
                : 'text-on-surface-variant hover:text-accent'
            }`}
          >
            Solutions
          </Link>
          <button
            onClick={() => scrollToSection('process')}
            className="text-xs font-semibold uppercase tracking-[0.1em] text-on-surface-variant hover:text-accent transition-colors duration-200 whitespace-nowrap shrink-0"
          >
            Process
          </button>
          <Link
            to="/pricing"
            className={`text-xs font-semibold uppercase tracking-[0.1em] transition-colors duration-200 whitespace-nowrap shrink-0 pb-0.5 ${
              isPricingActive
                ? 'text-accent border-b-2 border-accent'
                : 'text-on-surface-variant hover:text-accent'
            }`}
          >
            Pricing
          </Link>
          <button
            onClick={() => scrollToSection('about')}
            className="text-xs font-semibold uppercase tracking-[0.1em] text-on-surface-variant hover:text-accent transition-colors duration-200 whitespace-nowrap shrink-0"
          >
            About
          </button>

          <Link to="/consultation" className="shrink-0">
            <button className="bg-primary text-white px-6 py-3 text-xs font-semibold uppercase tracking-[0.1em] rounded-sm hover:bg-accent transition-all duration-200 whitespace-nowrap shrink-0">
              Book Consultation
            </button>
          </Link>
        </nav>

        {/* Mobile Toggle */}
        <button
          className="md:hidden p-2 text-primary hover:bg-surface-container rounded-md transition-colors"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label={isMobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="absolute top-full left-0 right-0 bg-surface border-b border-border-muted shadow-xl md:hidden px-6 py-6 flex flex-col space-y-2">
          <Link to="/" className="text-sm font-semibold uppercase tracking-[0.08em] text-on-surface py-3 border-b border-border-muted/60">
            Home
          </Link>
          <Link to="/solutions" className="text-sm font-semibold uppercase tracking-[0.08em] text-on-surface py-3 border-b border-border-muted/60">
            Solutions
          </Link>
          <button
            onClick={() => scrollToSection('services')}
            className="text-sm font-semibold uppercase tracking-[0.08em] text-on-surface py-3 border-b border-border-muted/60 text-left"
          >
            Services
          </button>
          <button
            onClick={() => scrollToSection('process')}
            className="text-sm font-semibold uppercase tracking-[0.08em] text-on-surface py-3 border-b border-border-muted/60 text-left"
          >
            Process
          </button>
          <Link to="/pricing" className="text-sm font-semibold uppercase tracking-[0.08em] text-on-surface py-3 border-b border-border-muted/60">
            Pricing
          </Link>
          <button
            onClick={() => scrollToSection('about')}
            className="text-sm font-semibold uppercase tracking-[0.08em] text-on-surface py-3 border-b border-border-muted/60 text-left"
          >
            About
          </button>
          <button
            onClick={() => scrollToSection('testimonials')}
            className="text-sm font-semibold uppercase tracking-[0.08em] text-on-surface py-3 border-b border-border-muted/60 text-left"
          >
            Testimonials
          </button>
          <div className="pt-4">
            <Link to="/consultation" className="w-full block">
              <button className="w-full bg-primary text-white py-3.5 text-xs font-semibold uppercase tracking-[0.1em] rounded-sm hover:bg-accent transition-colors">
                Book Consultation
              </button>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};
