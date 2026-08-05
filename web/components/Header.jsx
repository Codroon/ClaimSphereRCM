'use client';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import {
  ChevronDown, Menu, X, Phone, ArrowRight,
  Brain, Home, Activity, Users, Stethoscope, HeartPulse, Heart, Bone,
  Sparkles, Baby, Flower2, BrainCircuit, Ribbon, Droplets, Smile, Pill,
  Syringe, Moon, Package,
  Code, FileText, ShieldCheck, RefreshCw, RotateCcw, BadgeCheck, Search,
  Info, BookOpen, HelpCircle,
} from 'lucide-react';
import { Button } from './ui/button';
import { companyInfo } from '../data/mock';
import { services } from '../data/services';
import { specialties } from '../data/specialties';
import PricingModal from './PricingModal';

const specialtyIcons = {
  Brain, Home, Activity, Users, Stethoscope, HeartPulse, Heart, Bone,
  Sparkles, Baby, Flower2, BrainCircuit, Ribbon, Droplets, Smile, Pill,
  Syringe, Moon, Package,
};

const serviceIcons = { Code, FileText, ShieldCheck, RefreshCw, RotateCcw, BadgeCheck, Search };

const serviceLinks = services.map((s) => ({ label: s.shortTitle, href: `/services/${s.slug}`, Icon: serviceIcons[s.icon] }));
const specialtyLinks = specialties.map((s) => ({ label: s.name, href: `/specialties/${s.slug}`, Icon: specialtyIcons[s.icon] }));
const resourceLinks = [
  { label: 'About Us', href: '/about', Icon: Info },
  { label: 'Blog', href: '/blog', Icon: BookOpen },
  { label: 'FAQs', href: '/#faq', Icon: HelpCircle },
];

// Desktop hover dropdown
const NavDropdown = ({ label, items, isScrolled, cols = 1, footer }) => {
  const [open, setOpen] = useState(false);
  const widthClass = cols >= 3 ? 'w-[46rem]' : 'w-[20rem]';
  const gridClass = cols >= 3 ? 'grid grid-cols-3 gap-0.5' : 'flex flex-col';
  return (
    <div
      className="relative"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <button
        className={`flex items-center gap-1 text-sm font-medium transition-colors duration-300 hover:text-[#008080] ${
          isScrolled ? 'text-[#003366]' : 'text-white'
        }`}
      >
        {label}
        <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${open ? 'rotate-180' : ''}`} />
      </button>

      <div
        className={`absolute left-1/2 -translate-x-1/2 top-full pt-3 transition-all duration-200 ${
          open ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-1'
        }`}
      >
        <div className="relative">
          {/* caret */}
          <div className="absolute -top-1.5 left-1/2 -translate-x-1/2 w-3 h-3 rotate-45 bg-[#00294d]"></div>
          <div className={`relative bg-[#00294d] rounded-2xl shadow-2xl ring-1 ring-white/10 p-2 ${widthClass} ${gridClass}`}>
            {items.map((item) => {
              const Icon = item.Icon;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className="flex items-center gap-2.5 rounded-lg px-3 py-2 text-sm font-medium text-white/80 hover:bg-white/10 hover:text-[#50C878] transition-colors"
                >
                  {Icon && <Icon className="w-4 h-4 text-[#50C878]/70 flex-shrink-0" />}
                  <span className="whitespace-nowrap">{item.label}</span>
                </Link>
              );
            })}
            {footer && (
              <Link
                href={footer.href}
                className="col-span-full mt-1 flex items-center justify-center gap-1 rounded-lg px-3 py-2.5 text-sm font-semibold text-[#50C878] border-t border-white/10 hover:bg-white/10 transition-colors"
              >
                {footer.label} <ArrowRight className="w-4 h-4" />
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

// Mobile expandable section
const MobileSection = ({ label, items, onNavigate }) => {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-gray-100">
      <button
        onClick={() => setOpen((o) => !o)}
        className="w-full flex items-center justify-between py-3 px-4 text-[#003366] font-medium"
      >
        {label}
        <ChevronDown className={`w-4 h-4 transition-transform ${open ? 'rotate-180' : ''}`} />
      </button>
      {open && (
        <div className="pb-2">
          {items.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={onNavigate}
              className="block py-2 pl-8 pr-4 text-sm text-gray-600 hover:text-[#008080]"
            >
              {item.label}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isPricingModalOpen, setIsPricingModalOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMobile = () => setIsMobileMenuOpen(false);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled ? 'bg-white/95 backdrop-blur-xl shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center relative" aria-label="ClaimSphere RCM home">
            <img
              src="https://customer-assets.emergentagent.com/job_669b2369-d3e5-48aa-96b9-c999516fb39b/artifacts/d9nyua1i_Gemini_Generated_Image_bhdz8obhdz8obhdz-removebg-preview.png"
              alt="ClaimSphere RCM"
              className={`h-16 w-auto absolute transition-opacity duration-500 ${isScrolled ? 'opacity-0' : 'opacity-100'}`}
            />
            <img
              src="https://customer-assets.emergentagent.com/job_669b2369-d3e5-48aa-96b9-c999516fb39b/artifacts/9nastmyt_Gemini_Generated_Image_iy0ak9iy0ak9iy0a-removebg-preview.png"
              alt="ClaimSphere RCM"
              className={`h-16 w-auto transition-opacity duration-500 ${isScrolled ? 'opacity-100' : 'opacity-0'}`}
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            <NavDropdown label="Services" items={serviceLinks} isScrolled={isScrolled} />
            <NavDropdown
              label="Specialties"
              items={specialtyLinks}
              isScrolled={isScrolled}
              cols={3}
              footer={{ href: '/specialties', label: 'View all specialties' }}
            />
            <NavDropdown label="Resources" items={resourceLinks} isScrolled={isScrolled} />
            <button
              onClick={() => setIsPricingModalOpen(true)}
              className={`text-sm font-medium transition-colors duration-300 hover:text-[#008080] ${isScrolled ? 'text-[#003366]' : 'text-white'}`}
            >
              Pricing
            </button>
          </nav>

          {/* CTA */}
          <div className="hidden lg:flex items-center gap-4">
            <a
              href={`tel:${companyInfo.phone}`}
              className={`flex items-center gap-2 text-sm font-medium transition-colors ${isScrolled ? 'text-[#003366]' : 'text-white'}`}
            >
              <Phone className="w-4 h-4" />
              {companyInfo.phone}
            </a>
            <Link href="/#contact">
              <Button className="bg-[#50C878] hover:bg-[#45b56a] text-white font-semibold px-6 py-2 rounded-full transition-all duration-300 hover:shadow-lg hover:shadow-[#50C878]/30 hover:scale-105">
                Get a Free Quote
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen((o) => !o)}
            className={`lg:hidden p-2 rounded-lg transition-colors ${isScrolled ? 'text-[#003366]' : 'text-white'}`}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden absolute top-full left-0 right-0 bg-white shadow-lg transition-all duration-300 max-h-[80vh] overflow-y-auto ${
          isMobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
      >
        <nav className="flex flex-col p-2">
          <MobileSection label="Services" items={serviceLinks} onNavigate={closeMobile} />
          <MobileSection label="Specialties" items={specialtyLinks} onNavigate={closeMobile} />
          <MobileSection label="Resources" items={resourceLinks} onNavigate={closeMobile} />
          <button
            onClick={() => {
              setIsPricingModalOpen(true);
              closeMobile();
            }}
            className="py-3 px-4 text-left text-[#003366] font-medium border-b border-gray-100"
          >
            Pricing
          </button>
          <Link href="/#contact" onClick={closeMobile} className="p-4">
            <Button className="w-full bg-[#50C878] hover:bg-[#45b56a] text-white font-semibold rounded-full">
              Get a Free Quote
            </Button>
          </Link>
        </nav>
      </div>

      <PricingModal isOpen={isPricingModalOpen} onClose={() => setIsPricingModalOpen(false)} />
    </header>
  );
};

export default Header;
