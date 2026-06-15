import React, { useState, useEffect } from 'react';
import { Menu, X, Calendar } from 'lucide-react';
import { siteContent } from '../lib/siteContent';

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 60);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  const handleNavClick = (href: string) => {
    setIsMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <header
        className={`sticky top-0 z-50 transition-all duration-300 ${
          isScrolled ? 'bg-white/95 backdrop-blur-md shadow-sm' : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="font-heading text-2xl font-semibold text-primary">
              {siteContent.header.logo}
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-8">
              {siteContent.header.nav.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(link.href);
                  }}
                  className="text-sm font-medium text-text-muted hover:text-primary transition-colors duration-200"
                >
                  {link.label}
                </a>
              ))}
            </nav>

            {/* CTA Button */}
            <a
              href="#book-appointment"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick('#book-appointment');
              }}
              className="hidden md:flex items-center gap-2 bg-accent text-white px-6 py-2.5 rounded-full font-medium text-sm hover:scale-105 transition-transform duration-300"
            >
              <Calendar className="w-4 h-4" />
              {siteContent.header.cta}
            </a>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(true)}
              className="md:hidden text-primary"
              aria-label="Open menu"
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 bg-white z-50 flex flex-col items-center justify-center animate-fade-in">
          <button
            onClick={() => setIsMobileMenuOpen(false)}
            className="absolute top-6 right-6 text-primary"
            aria-label="Close menu"
          >
            <X className="w-6 h-6" />
          </button>

          <nav className="flex flex-col items-center gap-8">
            {siteContent.header.nav.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(link.href);
                }}
                className="text-3xl font-heading font-semibold text-primary hover:text-accent transition-colors"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#book-appointment"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick('#book-appointment');
              }}
              className="mt-4 flex items-center gap-2 bg-accent text-white px-8 py-3 rounded-full font-medium text-lg hover:scale-105 transition-transform duration-300"
            >
              <Calendar className="w-5 h-5" />
              {siteContent.header.cta}
            </a>
          </nav>
        </div>
      )}
    </>
  );
};
