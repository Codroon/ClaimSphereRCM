import React from 'react';
import { Phone, Mail, MapPin, Linkedin, Twitter, Facebook } from 'lucide-react';
import { companyInfo } from '../data/mock';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    services: [
      { label: 'Medical Billing', href: '#services' },
      { label: 'Medical Coding', href: '#services' },
      { label: 'RCM Solutions', href: '#services' },
      { label: 'Consulting', href: '#services' },
      { label: 'Credentialing', href: '#services' }
    ],
    company: [
      { label: 'About Us', href: '#about' },
      { label: 'Why Choose Us', href: '#why-us' },
      { label: 'Testimonials', href: '#testimonials' },
      { label: 'Careers', href: '#testimonials' },
      { label: 'Contact', href: '#contact' }
    ],
    resources: [
      { label: 'Blog', href: '#' },
      { label: 'Case Studies', href: '#' },
      { label: 'FAQs', href: '#' },
      { label: 'Webinars', href: '#' },
      { label: 'News', href: '#' }
    ],
    legal: [
      { label: 'Privacy Policy', href: '#' },
      { label: 'Terms of Service', href: '#' },
      { label: 'HIPAA Compliance', href: '#' },
      { label: 'Security', href: '#' }
    ]
  };

  const socialLinks = [
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Facebook, href: '#', label: 'Facebook' }
  ];

  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="relative bg-[#003366] text-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
          backgroundSize: '32px 32px'
        }}></div>
      </div>

      {/* Main Footer Content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 lg:gap-12">
          {/* Brand Column */}
          <div className="col-span-2 md:col-span-3 lg:col-span-2">
            {/* Logo */}
            <div className="flex items-center mb-6">
              <img 
                src="https://customer-assets.emergentagent.com/job_669b2369-d3e5-48aa-96b9-c999516fb39b/artifacts/6u2d3tef_Gemini_Generated_Image_iy0ak9iy0ak9iy0a.png"
                alt="ClaimSphere RCM"
                className="h-14 w-auto"
              />
            </div>

            <p className="text-white/70 mb-6 leading-relaxed max-w-sm">
              Empowering healthcare providers with innovative revenue cycle solutions 
              for over 30 years.
            </p>

            {/* Contact Info */}
            <div className="space-y-3">
              <a href={`tel:${companyInfo.phone}`} className="flex items-center gap-3 text-white/70 hover:text-[#50C878] transition-colors">
                <Phone className="w-4 h-4" />
                <span>{companyInfo.phone}</span>
              </a>
              <a href={`mailto:${companyInfo.email}`} className="flex items-center gap-3 text-white/70 hover:text-[#50C878] transition-colors">
                <Mail className="w-4 h-4" />
                <span>{companyInfo.email}</span>
              </a>
              <div className="flex items-start gap-3 text-white/70">
                <MapPin className="w-4 h-4 mt-1 flex-shrink-0" />
                <span>{companyInfo.address}</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-3 mt-6">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#50C878] transition-colors duration-300"
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Services</h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link, index) => (
                <li key={index}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-white/70 hover:text-[#50C878] transition-colors text-left"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link, index) => (
                <li key={index}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-white/70 hover:text-[#50C878] transition-colors text-left"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Resources</h4>
            <ul className="space-y-3">
              {footerLinks.resources.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-white/70 hover:text-[#50C878] transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Legal</h4>
            <ul className="space-y-3">
              {footerLinks.legal.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-white/70 hover:text-[#50C878] transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="relative border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-white/60 text-sm text-center sm:text-left">
              © {currentYear} {companyInfo.name}. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-2 text-sm text-white/60">
                <div className="w-6 h-6 rounded bg-white/10 flex items-center justify-center text-xs font-bold text-[#50C878]">
                  H
                </div>
                <span>HIPAA Compliant</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-white/60">
                <div className="w-6 h-6 rounded bg-white/10 flex items-center justify-center text-xs font-bold text-[#50C878]">
                  S
                </div>
                <span>SOC 2 Certified</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Sticky CTA (for mobile) */}
      <div className="fixed bottom-0 left-0 right-0 lg:hidden bg-[#003366]/95 backdrop-blur-lg border-t border-white/10 p-4 z-40">
        <button
          onClick={() => scrollToSection('#contact')}
          className="w-full py-4 bg-[#50C878] hover:bg-[#45b56a] text-white font-semibold rounded-xl transition-all duration-300"
        >
          Schedule Consultation
        </button>
      </div>
    </footer>
  );
};

export default Footer;
