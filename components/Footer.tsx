import React from 'react';
import { Facebook, Instagram, Mail, Phone, MapPin } from 'lucide-react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { Logo } from './ui/Logo';

const XIcon: React.FC<{ size?: number; className?: string }> = ({ size = 18, className = "" }) => (
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

const TikTokIcon: React.FC<{ size?: number; className?: string }> = ({ size = 18, className = "" }) => (
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

const LinkedInIcon: React.FC<{ size?: number; className?: string }> = ({ size = 18, className = "" }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
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
    <footer className="bg-surface-container pt-14 pb-8 lg:pt-16 lg:pb-8 px-6 lg:px-16 border-t border-border-muted text-on-surface">
      <div className="max-w-[1280px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        {/* Brand */}
        <div className="col-span-1">
          <Link to="/" className="flex items-center gap-3.5 mb-6 group" aria-label="Plug Connect Solutions Home">
            <Logo size={38} />
            <span className="font-heading text-2xl font-semibold tracking-tight text-primary">Plug Connect</span>
          </Link>
          <p className="text-on-surface-variant text-sm leading-relaxed mb-6">
            Helping South African SMEs dominate the digital space. Affordable web design, registration, and automation.
          </p>
          <div className="flex flex-wrap gap-3">
            <a
              href="https://www.facebook.com/profile.php?id=61584670473805"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 bg-surface border border-border-muted rounded-full flex items-center justify-center text-on-surface-variant hover:bg-accent hover:text-white hover:border-accent transition-all"
              title="Facebook"
              aria-label="Visit our Facebook"
            >
              <Facebook size={18} />
            </a>
            <a
              href="https://x.com/plugconnectsols"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 bg-surface border border-border-muted rounded-full flex items-center justify-center text-on-surface-variant hover:bg-primary hover:text-white hover:border-primary transition-all"
              title="X (Twitter)"
              aria-label="Visit our X (Twitter)"
            >
              <XIcon size={16} />
            </a>
            <a
              href="https://www.instagram.com/plugconnectsols"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 bg-surface border border-border-muted rounded-full flex items-center justify-center text-on-surface-variant hover:bg-accent hover:text-white hover:border-accent transition-all"
              title="Instagram"
              aria-label="Visit our Instagram"
            >
              <Instagram size={18} />
            </a>
            <a
              href="https://vm.tiktok.com/ZSHwx4Bc7DWnr-HFBha/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 bg-surface border border-border-muted rounded-full flex items-center justify-center text-on-surface-variant hover:bg-primary hover:text-white hover:border-primary transition-all"
              title="TikTok"
              aria-label="Visit our TikTok"
            >
              <TikTokIcon size={16} />
            </a>
            <a
              href="https://www.linkedin.com/company/plug-connect-solutions/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 bg-surface border border-border-muted rounded-full flex items-center justify-center text-on-surface-variant hover:bg-accent hover:text-white hover:border-accent transition-all"
              title="LinkedIn"
              aria-label="Visit our LinkedIn"
            >
              <LinkedInIcon size={16} />
            </a>
          </div>
        </div>

        {/* Company */}
        <div>
          <h5 className="text-xs font-semibold uppercase tracking-[0.1em] text-primary mb-6">Company</h5>
          <ul className="space-y-4 text-sm text-on-surface-variant">
            <li>
              <button onClick={() => handleScrollTo('about')} className="hover:text-accent transition-colors text-left">
                About Our Agency
              </button>
            </li>
            <li>
              <Link to="/pricing" className="hover:text-accent transition-colors">
                Pricing &amp; Packages
              </Link>
            </li>
            <li>
              <button onClick={() => handleScrollTo('testimonials')} className="hover:text-accent transition-colors text-left">
                Customer Success
              </button>
            </li>
            <li>
              <Link to="/consultation" className="hover:text-accent transition-colors">
                Book Consultation
              </Link>
            </li>
          </ul>
        </div>

        {/* Services */}
        <div>
          <h5 className="text-xs font-semibold uppercase tracking-[0.1em] text-primary mb-6">Services</h5>
          <ul className="space-y-4 text-sm text-on-surface-variant">
            <li>
              <Link to="/solutions" className="hover:text-accent transition-colors">
                All Solutions
              </Link>
            </li>
            <li>
              <Link to="/web-design" className="hover:text-accent transition-colors">
                Website Design
              </Link>
            </li>
            <li>
              <Link to="/social-media" className="hover:text-accent transition-colors">
                Social Media Marketing
              </Link>
            </li>
            <li>
              <Link to="/business-registration" className="hover:text-accent transition-colors">
                Company Registration
              </Link>
            </li>
            <li>
              <button onClick={() => handleScrollTo('automation')} className="hover:text-accent transition-colors text-left">
                Workflow Automation
              </button>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h5 className="text-xs font-semibold uppercase tracking-[0.1em] text-primary mb-6">Contact Info</h5>
          <ul className="space-y-4 text-sm text-on-surface-variant">
            <li className="flex items-start gap-3">
              <MapPin size={18} className="text-accent shrink-0 mt-0.5" />
              <span>Operating Nationwide (SA)</span>
            </li>
            <li className="flex items-start gap-3">
              <Phone size={18} className="text-accent shrink-0 mt-0.5" />
              <a href="tel:0763750213" className="hover:text-accent transition-colors tabular-nums">
                076 375 0213
              </a>
            </li>
            <li className="flex items-start gap-3">
              <Mail size={18} className="text-accent shrink-0 mt-0.5" />
              <a href="mailto:plugconnectsolutions@proton.me" className="hover:text-accent transition-colors">
                Email Our Team
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="max-w-[1280px] mx-auto mt-10 pt-6 border-t border-border-muted flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-on-surface-variant">
        <p>&copy; {new Date().getFullYear()} Plug Connect Solutions. All rights reserved.</p>
        <div className="flex gap-6">
          <Link to="/privacy" className="hover:text-primary transition-colors">
            Privacy Policy
          </Link>
          <Link to="/terms" className="hover:text-primary transition-colors">
            Terms of Service
          </Link>
          <a
            href="https://www.linkedin.com/company/plug-connect-solutions/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-primary transition-colors"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
};
