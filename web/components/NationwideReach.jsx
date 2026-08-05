'use client';
import React from 'react';
import Link from 'next/link';
import { MapPin, ArrowRight } from 'lucide-react';
import { useReveal } from '../lib/useReveal';

// NOTE: service-area claim. Confirm with the client that they genuinely support
// providers in all 50 states before launch, and adjust this list to the states
// where they actually hold active clients.
const STATES = [
  'Florida', 'California', 'New York', 'Texas',
  'Illinois', 'Pennsylvania', 'Ohio', 'Georgia',
  'North Carolina', 'Arizona', 'New Jersey', 'Wyoming',
];

const NationwideReach = () => {
  const [ref, isVisible] = useReveal(0.1);

  return (
    <section ref={ref} className="relative py-24 lg:py-28 bg-white overflow-hidden">
      {/* Dot-grid stands in for a map texture without shipping a heavy image */}
      <div className="absolute inset-0 opacity-[0.05]" aria-hidden="true">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: 'radial-gradient(circle at 2px 2px, #003366 1.5px, transparent 0)',
            backgroundSize: '28px 28px',
          }}
        ></div>
      </div>
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#008080]/5 rounded-full blur-3xl" aria-hidden="true"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`max-w-3xl mx-auto text-center mb-12 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="inline-flex items-center gap-2 bg-[#008080]/10 px-4 py-2 rounded-full mb-6">
            <span className="w-2 h-2 bg-[#008080] rounded-full"></span>
            <span className="text-[#008080] text-sm font-semibold">Reach</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#003366] mb-5 leading-tight">
            Nationwide Reach
          </h2>

          <p className="text-gray-600 text-lg leading-relaxed">
            Billing is remote work done well, so where your practice sits does not limit who can
            support it. We work with providers across the country and stay current on the payer
            rules and state regulations that apply where you practice.
          </p>
        </div>

        <div
          className={`flex flex-wrap justify-center gap-3 mb-12 transition-all duration-700 delay-200 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
        >
          {STATES.map((state) => (
            <span
              key={state}
              className="inline-flex items-center gap-2 bg-gray-50 border border-gray-200 rounded-full px-5 py-2.5 text-[#003366] text-sm font-medium"
            >
              <MapPin className="w-4 h-4 text-[#008080]" />
              {state}
            </span>
          ))}
          <span className="inline-flex items-center bg-[#50C878]/15 border border-[#50C878]/30 rounded-full px-5 py-2.5 text-[#2e8b57] text-sm font-semibold">
            + all 50 states
          </span>
        </div>

        <div
          className={`text-center transition-all duration-700 delay-300 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
        >
          <Link
            href="/#contact"
            className="group inline-flex items-center gap-2 bg-[#50C878] hover:bg-[#45b56a] text-white font-semibold px-8 py-4 rounded-full transition-all duration-300 hover:scale-105"
          >
            Get Your Custom Pricing Quote
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default NationwideReach;
