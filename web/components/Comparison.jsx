'use client';
import React from 'react';
import Link from 'next/link';
import { Building2, Star, Check, X, ArrowRight } from 'lucide-react';
import { useReveal } from '../lib/useReveal';

// NOTE: comparison claims (setup cost, pricing model, turnaround) are marketing
// placeholders — confirm/adjust with the client before launch. The in-house
// column is deliberately framed in generic cost categories rather than a
// specific dollar figure, since that number would have to be defensible.
const inHouse = [
  'Salary, benefits and training overhead',
  'Recruiting and covering staff turnover',
  'Billing software and clearinghouse fees',
  '48-72 hour claim submission',
  'Basic denial management',
  'Manual compliance updates',
  'Limited scalability and reporting',
];

const claimsphere = [
  'No recruiting, training or turnover cost',
  'Software and clearinghouse included',
  'Percentage-based pricing only',
  '24-hour claim submission',
  'Advanced AR and denial recovery',
  'Always-current compliance',
  'Real-time reporting dashboard',
];

const Comparison = () => {
  const [ref, isVisible] = useReveal(0.1);

  return (
    <section ref={ref} className="relative py-24 lg:py-28 overflow-hidden bg-gradient-to-br from-[#003366] via-[#00294d] to-[#001a33]">
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#008080]/15 rounded-full blur-3xl" aria-hidden="true"></div>
      <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-[#50C878]/10 rounded-full blur-3xl" aria-hidden="true"></div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div
          className={`text-center max-w-3xl mx-auto mb-14 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
            <span className="w-2 h-2 bg-[#50C878] rounded-full"></span>
            <span className="text-white/90 text-sm font-semibold tracking-wide">Compare</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-5">
            In-House vs{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#50C878] to-[#008080]">
              ClaimSphere RCM
            </span>
          </h2>
          <p className="text-white/70 text-lg">
            A side-by-side look at the real costs, capabilities, and outcomes.
          </p>
        </div>

        {/* Cards */}
        <div
          className={`relative grid md:grid-cols-2 gap-6 lg:gap-10 transition-all duration-700 delay-200 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          {/* VS badge */}
          <div className="hidden md:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20 w-14 h-14 rounded-full bg-[#001a33] border border-white/20 items-center justify-center shadow-xl">
            <span className="text-white/80 font-bold text-sm">VS</span>
          </div>

          {/* In-House card */}
          <div className="bg-white/5 backdrop-blur-sm rounded-3xl border border-white/10 p-8">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center">
                <Building2 className="w-6 h-6 text-white/70" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">In-House Billing</h3>
                <p className="text-white/50 text-sm">High overhead, limited expertise</p>
              </div>
            </div>
            <ul>
              {inHouse.map((item) => (
                <li key={item} className="flex items-center gap-3 py-3.5 border-t border-white/5">
                  <span className="w-6 h-6 rounded-full bg-red-500/15 flex items-center justify-center flex-shrink-0">
                    <X className="w-3.5 h-3.5 text-red-400" />
                  </span>
                  <span className="text-white/70">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* ClaimSphere card (highlighted) */}
          <div className="relative bg-white/10 backdrop-blur-sm rounded-3xl border-2 border-[#50C878]/40 p-8 shadow-2xl shadow-[#50C878]/10">
            <span className="absolute top-6 right-6 inline-flex items-center rounded-full bg-[#50C878] px-3 py-1 text-xs font-semibold text-white">
              RECOMMENDED
            </span>
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 rounded-xl bg-[#50C878]/15 flex items-center justify-center">
                <Star className="w-6 h-6 text-[#50C878]" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">ClaimSphere RCM</h3>
                <p className="text-white/60 text-sm">Predictable cost, specialist team</p>
              </div>
            </div>
            <ul className="mb-8">
              {claimsphere.map((item) => (
                <li key={item} className="flex items-center gap-3 py-3.5 border-t border-white/5">
                  <span className="w-6 h-6 rounded-full bg-[#50C878]/15 flex items-center justify-center flex-shrink-0">
                    <Check className="w-3.5 h-3.5 text-[#50C878]" />
                  </span>
                  <span className="text-white font-medium">{item}</span>
                </li>
              ))}
            </ul>
            <Link
              href="/#contact"
              className="group flex items-center justify-center gap-2 w-full bg-[#50C878] hover:bg-[#45b56a] text-white font-semibold py-4 rounded-full transition-all duration-300 hover:shadow-lg hover:shadow-[#50C878]/30"
            >
              Get Your Custom Quote
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Comparison;
