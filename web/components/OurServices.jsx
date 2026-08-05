'use client';
import React from 'react';
import Link from 'next/link';
import {
  RefreshCw,
  FileText,
  Search,
  ShieldCheck,
  RotateCcw,
  BadgeCheck,
  Code,
  ArrowRight,
} from 'lucide-react';
import { services } from '../data/services';
import { useReveal } from '../lib/useReveal';

const iconMap = { RefreshCw, FileText, Search, ShieldCheck, RotateCcw, BadgeCheck, Code };

// The landing page features the four headline services; the rest are reachable
// from the nav dropdown, the footer, and the /services index.
const FEATURED = [
  'revenue-cycle-management',
  'medical-billing-services',
  'medical-billing-audit',
  'eligibility-verification',
];

const OurServices = () => {
  const [ref, isVisible] = useReveal();
  const featured = FEATURED.map((slug) => services.find((s) => s.slug === slug)).filter(Boolean);

  return (
    <section id="services" ref={ref} className="relative py-24 lg:py-28 bg-gray-50 overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#008080]/5 rounded-full blur-3xl" aria-hidden="true"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div
          className={`max-w-3xl transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="inline-flex items-center gap-2 bg-[#008080]/10 px-4 py-2 rounded-full mb-6">
            <span className="w-2 h-2 bg-[#008080] rounded-full"></span>
            <span className="text-[#008080] text-sm font-semibold">Our Services</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#003366] mb-5 leading-tight">
            Billing Solutions Built Around
            <span className="text-[#008080]"> How Your Practice Works</span>
          </h2>

          <p className="text-gray-600 text-lg leading-relaxed mb-12">
            No two practices bill the same way, so we do not force one into a template. Our
            specialists shape each engagement around your payers, your software, and the targets
            you are trying to hit — whether that is tightening operations, cutting denials, or
            freeing up cash flow.
          </p>
        </div>

        {/* Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {featured.map((service, index) => {
            const Icon = iconMap[service.icon] || FileText;
            return (
              <Link
                key={service.slug}
                href={`/services/${service.slug}`}
                className={`group flex flex-col bg-white rounded-2xl border border-gray-100 shadow-sm p-7 hover:shadow-xl hover:-translate-y-1 hover:border-[#008080]/25 transition-all duration-500 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${150 + index * 110}ms` }}
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#003366] to-[#008080] flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
                  <Icon className="w-6 h-6 text-white" />
                </div>

                <h3 className="text-lg font-bold text-[#003366] mb-3 leading-snug group-hover:text-[#008080] transition-colors">
                  {service.shortTitle}
                </h3>

                <p className="text-gray-600 text-sm leading-relaxed mb-6 flex-1">
                  {service.description}
                </p>

                <span className="inline-flex items-center gap-1.5 text-[#008080] text-sm font-semibold">
                  Explore More
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>
            );
          })}
        </div>

        {/* CTAs */}
        <div
          className={`flex flex-col sm:flex-row gap-4 transition-all duration-700 delay-500 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
        >
          <Link
            href="/services"
            className="inline-flex items-center justify-center gap-2 bg-[#003366] hover:bg-[#00294d] text-white font-semibold px-8 py-4 rounded-full transition-all duration-300 hover:scale-105"
          >
            Explore All Services
            <ArrowRight className="w-5 h-5" />
          </Link>
          <Link
            href="/#contact"
            className="inline-flex items-center justify-center gap-2 bg-transparent border-2 border-[#003366]/20 text-[#003366] hover:border-[#008080] hover:text-[#008080] font-semibold px-8 py-4 rounded-full transition-all duration-300"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </section>
  );
};

export default OurServices;
