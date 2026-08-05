'use client';
import React from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { howItWorks } from '../data/services';
import { img } from '../lib/images';
import { useReveal } from '../lib/useReveal';

const HowItWorks = () => {
  const [ref, isVisible] = useReveal(0.1);

  return (
    <section ref={ref} className="relative bg-[#00294d] overflow-hidden">
      <div className="grid lg:grid-cols-2">
        {/* ---------- Left: copy + steps ---------- */}
        <div className="relative px-4 sm:px-6 lg:pl-12 xl:pl-16 lg:pr-14 py-20 lg:py-28">
          {/* Right-aligned within its half so the copy lands near the site's
              7xl container edge on wide screens. */}
          <div className="max-w-xl ml-auto w-full">
            <div
              className={`transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
            >
              <div className="inline-flex items-center gap-2 bg-[#50C878]/15 px-4 py-2 rounded-full mb-6">
                <span className="w-2 h-2 bg-[#50C878] rounded-full"></span>
                <span className="text-[#50C878] text-sm font-semibold">Solutions</span>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-5 leading-tight">
                How It Works
              </h2>

              <p className="text-white/70 leading-relaxed mb-10">
                Working with ClaimSphere RCM is not a vendor handoff. Our U.S.-facing billing
                specialists operate as an extension of your practice, and the engagement is built
                to lift financial performance from the first month forward.
              </p>
            </div>

            {/* Steps */}
            <ol className="space-y-8 mb-10">
              {howItWorks.map((item, index) => (
                <li
                  key={item.step}
                  className={`flex gap-5 transition-all duration-700 ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                  }`}
                  style={{ transitionDelay: `${200 + index * 150}ms` }}
                >
                  <div className="flex flex-col items-center flex-shrink-0">
                    <span className="w-11 h-11 rounded-full bg-gradient-to-br from-[#50C878] to-[#008080] flex items-center justify-center text-white font-bold">
                      {item.step}
                    </span>
                    {index < howItWorks.length - 1 && (
                      <span className="w-px flex-1 mt-2 bg-gradient-to-b from-[#50C878]/40 to-transparent"></span>
                    )}
                  </div>
                  <div className="pb-1">
                    <h3 className="text-lg font-bold text-white mb-2">{item.title}</h3>
                    <p className="text-white/65 text-sm leading-relaxed">{item.description}</p>
                  </div>
                </li>
              ))}
            </ol>

            <div
              className={`transition-all duration-700 delay-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
              }`}
            >
              <Link
                href="/#contact"
                className="group inline-flex items-center gap-2 bg-[#50C878] hover:bg-[#45b56a] text-white font-semibold px-8 py-4 rounded-full transition-all duration-300 hover:scale-105"
              >
                Book a Free Discovery Call
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>

        {/* ---------- Right: full-bleed image ---------- */}
        <div className="relative min-h-[320px] lg:min-h-full">
          {/* Deliberately a neutral office/consultation photo — avoid imagery
              carrying another organization's branding or signage. */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={img('photo-1521737604893-d14cc237f11d', 1200)}
            alt="ClaimSphere RCM specialists working with a healthcare practice team"
            className="absolute inset-0 w-full h-full object-cover"
          />
          {/* Blend the photo's left edge into the navy panel */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#00294d] via-[#00294d]/25 to-transparent lg:w-1/3"></div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
