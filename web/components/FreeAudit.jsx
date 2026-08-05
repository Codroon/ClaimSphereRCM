'use client';
import React from 'react';
import Link from 'next/link';
import { ArrowRight, ClipboardCheck, Search, FileBarChart } from 'lucide-react';
import { img } from '../lib/images';
import { useReveal } from '../lib/useReveal';

const AUDIT_POINTS = [
  { icon: Search, text: 'Where claims are stalling and why they are being denied' },
  { icon: ClipboardCheck, text: 'Coding accuracy and compliance exposure in your documentation' },
  { icon: FileBarChart, text: 'How much revenue is sitting uncollected in aging AR' },
];

const FreeAudit = () => {
  const [ref, isVisible] = useReveal(0.1);

  return (
    <section ref={ref} className="relative py-24 lg:py-28 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-[2rem] bg-gradient-to-br from-[#003366] to-[#00294d] overflow-hidden">
          {/* No items-center — the columns must stretch so the photo fills
              the full height of the card. */}
          <div className="grid lg:grid-cols-2">
            {/* ---------- Copy ---------- */}
            <div
              className={`relative z-10 p-9 sm:p-12 lg:p-14 transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
            >
              <div className="inline-flex items-center gap-2 bg-[#50C878]/15 px-4 py-2 rounded-full mb-6">
                <span className="w-2 h-2 bg-[#50C878] rounded-full animate-pulse"></span>
                <span className="text-[#50C878] text-sm font-semibold">Free RCM Audit</span>
              </div>

              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-5 leading-tight">
                Is Your Practice Operating at Its Full Financial Potential?
              </h2>

              <p className="text-white/70 leading-relaxed mb-8">
                We will run a revenue cycle assessment and coding review at no cost, then show you
                exactly what we found — including the revenue opportunities your current process is
                leaving on the table.
              </p>

              <ul className="space-y-3.5 mb-9">
                {AUDIT_POINTS.map((point, index) => (
                  <li
                    key={point.text}
                    className={`flex items-start gap-3 transition-all duration-500 ${
                      isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-6'
                    }`}
                    style={{ transitionDelay: `${200 + index * 110}ms` }}
                  >
                    <span className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center flex-shrink-0">
                      <point.icon className="w-4 h-4 text-[#50C878]" />
                    </span>
                    <span className="text-white/80 text-sm leading-relaxed pt-1.5">{point.text}</span>
                  </li>
                ))}
              </ul>

              <Link
                href="/#contact"
                className="group inline-flex items-center gap-2 bg-[#50C878] hover:bg-[#45b56a] text-white font-semibold px-8 py-4 rounded-full transition-all duration-300 hover:scale-105"
              >
                Get Your Free Audit
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            {/* ---------- Image ---------- */}
            <div className="relative min-h-[280px] hidden lg:block">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={img('photo-1454165804606-c3d57bc86b40', 1000)}
                alt="Reviewing practice financial performance during a revenue cycle audit"
                loading="lazy"
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-[#00294d] via-[#00294d]/40 to-transparent"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FreeAudit;
