import React, { useState, useEffect } from 'react';
import { Menu, X, Phone } from 'lucide-react';
import { Button } from './ui/button';
import { companyInfo } from '../data/mock';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Services', href: '#services' },
    { label: 'Why Us', href: '#why-us' },
    { label: 'Testimonials', href: '#testimonials' },
    { label: 'Contact', href: '#contact' }
  ];

  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'bg-white/90 backdrop-blur-xl shadow-lg'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center">
            {/* Logo for dark background (top of page) */}
            <img 
              src="https://customer-assets.emergentagent.com/job_669b2369-d3e5-48aa-96b9-c999516fb39b/artifacts/d9nyua1i_Gemini_Generated_Image_bhdz8obhdz8obhdz-removebg-preview.png"
              alt="ClaimSphere RCM"
              className={`h-16 w-auto absolute transition-opacity duration-500 ${
                isScrolled ? 'opacity-0' : 'opacity-100'
              }`}
            />
            {/* Logo for light background (scrolled) */}
            <img 
              src="https://customer-assets.emergentagent.com/job_669b2369-d3e5-48aa-96b9-c999516fb39b/artifacts/9nastmyt_Gemini_Generated_Image_iy0ak9iy0ak9iy0a-removebg-preview.png"
              alt="ClaimSphere RCM"
              className={`h-16 w-auto transition-opacity duration-500 ${
                isScrolled ? 'opacity-100' : 'opacity-0'
              }`}
            />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <button
                key={link.label}
                onClick={() => scrollToSection(link.href)}
                className={`text-sm font-medium transition-all duration-300 hover:text-[#008080] relative group ${
                  isScrolled ? 'text-[#003366]' : 'text-white'
                }`}
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#008080] transition-all duration-300 group-hover:w-full"></span>
              </button>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center gap-4">
            <a href={`tel:${companyInfo.phone}`} className={`flex items-center gap-2 text-sm font-medium transition-colors ${
              isScrolled ? 'text-[#003366]' : 'text-white'
            }`}>
              <Phone className="w-4 h-4" />
              {companyInfo.phone}
            </a>
            <Button
              onClick={() => scrollToSection('#contact')}
              className="bg-[#50C878] hover:bg-[#45b56a] text-white font-semibold px-6 py-2 rounded-full transition-all duration-300 hover:shadow-lg hover:shadow-[#50C878]/30 hover:scale-105"
            >
              Schedule Consultation
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`lg:hidden p-2 rounded-lg transition-colors ${
              isScrolled ? 'text-[#003366]' : 'text-white'
            }`}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden absolute top-full left-0 right-0 bg-white/95 backdrop-blur-xl shadow-lg transition-all duration-300 ${
          isMobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
      >
        <nav className="flex flex-col p-4">
          {navLinks.map((link) => (
            <button
              key={link.label}
              onClick={() => scrollToSection(link.href)}
              className="text-[#003366] font-medium py-3 px-4 text-left hover:bg-[#008080]/10 rounded-lg transition-colors"
            >
              {link.label}
            </button>
          ))}
          <Button
            onClick={() => scrollToSection('#contact')}
            className="mt-4 bg-[#50C878] hover:bg-[#45b56a] text-white font-semibold rounded-full"
          >
            Schedule Consultation
          </Button>
        </nav>
      </div>
    </header>
  );
};

export default Header;
