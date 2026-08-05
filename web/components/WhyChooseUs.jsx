'use client';
import React from 'react';
import Link from 'next/link';
import { CheckCircle2, ArrowRight } from 'lucide-react';
import { img } from '../lib/images';
import { useReveal } from '../lib/useReveal';

// NOTE: these are positioning claims, not verified facts. Before launch confirm
// with the client that each is accurate — particularly the tenure figure and
// the all-50-states coverage claim.
const REASONS = [
  '5+ years managing revenue cycles for U.S. providers',
  'HIPAA-compliant billing workflows end to end',
  'Certified and credentialed billing and coding staff',
  'Real-time reporting with full financial transparency',
  'Coverage for practices across all 50 states',
  'A dedicated account manager who knows your practice',
];

const WhyChooseUs = () => {
  const [ref, isVisible] = useReveal(0.1);

  return (
    <section id="why-us" ref={ref} className="relative py-24 lg:py-28 bg-white overflow-hidden">
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-[#008080]/5 rounded-full blur-3xl" aria-hidden="true"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* ---------- Left: copy + reasons ---------- */}
          <div
            className={`transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
            }`}
          >
            <div className="inline-flex items-center gap-2 bg-[#50C878]/10 px-4 py-2 rounded-full mb-6">
              <span className="w-2 h-2 bg-[#50C878] rounded-full"></span>
              <span className="text-[#2e8b57] text-sm font-semibold">Advantage</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#003366] mb-6 leading-tight">
              Why Choose
              <span className="text-[#008080]"> ClaimSphere RCM</span>
            </h2>

            <p className="text-gray-600 text-lg leading-relaxed mb-9">
              Healthcare finance rewards the details, and details are where most billing operations
              quietly lose money. We watch both sides of the equation — clinical documentation and
              financial outcome — and we run the whole thing on trust, transparency, and compliance,
              because that is what a practice needs to actually grow.
            </p>

            <ul className="space-y-4 mb-10">
              {REASONS.map((reason, index) => (
                <li
                  key={reason}
                  className={`flex items-start gap-3 transition-all duration-500 ${
                    isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-6'
                  }`}
                  style={{ transitionDelay: `${200 + index * 90}ms` }}
                >
                  <CheckCircle2 className="w-5 h-5 text-[#50C878] flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">{reason}</span>
                </li>
              ))}
            </ul>

            <Link
              href="/#contact"
              className="group inline-flex items-center gap-2 bg-[#50C878] hover:bg-[#45b56a] text-white font-semibold px-8 py-4 rounded-full transition-all duration-300 hover:scale-105"
            >
              Talk to an RCM Expert
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          {/* ---------- Right: image + stat overlay ---------- */}
          <div
            className={`relative transition-all duration-700 delay-200 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
            }`}
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl aspect-[4/5] max-w-md mx-auto lg:ml-auto lg:mr-0">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={img('photo-1594824476967-48c8b964273f', 900)}
                alt="Smiling healthcare provider partnered with ClaimSphere RCM"
                loading="lazy"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#003366]/70 via-transparent to-transparent"></div>

              {/* NOTE: placeholder figures — replace with verified numbers. */}
              <div className="absolute bottom-5 left-5 right-5 grid grid-cols-2 gap-3">
                <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-4">
                  <div className="text-2xl font-bold text-[#003366]">99%</div>
                  <div className="text-xs text-gray-500 leading-tight">First-pass claim acceptance</div>
                </div>
                <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-4">
                  <div className="text-2xl font-bold text-[#003366]">7</div>
                  <div className="text-xs text-gray-500 leading-tight">Average days in AR</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
