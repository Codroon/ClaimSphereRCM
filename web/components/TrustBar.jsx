'use client';
import React from 'react';
import { ShieldCheck, Award, BadgeCheck } from 'lucide-react';
import { certifications } from '../data/mock';

// NOTE: certification badges are placeholder text marks. Before launch, replace
// with official partner badge images for associations the company is a verified
// member of (e.g. AAPC, HBMA, MGMA) and the official HIPAA/HHS seal.
const iconForCert = (logo) => {
  if (logo === 'HIPAA') return ShieldCheck;
  if (logo === 'AAPC') return Award;
  return BadgeCheck;
};

const TrustBar = () => {
  return (
    <section className="relative bg-gray-50 py-10 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-center text-sm font-semibold uppercase tracking-wider text-gray-400 mb-6">
          Compliant &amp; Certified
        </p>
        <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6">
          {/* HIPAA shield badge */}
          <div className="inline-flex items-center gap-2 rounded-full bg-[#50C878]/10 border border-[#50C878]/30 px-5 py-3">
            <ShieldCheck className="w-5 h-5 text-[#50C878]" />
            <span className="text-sm font-semibold text-[#003366]">HIPAA Compliant</span>
          </div>

          {certifications.map((cert) => {
            const Icon = iconForCert(cert.logo);
            return (
              <div
                key={cert.id}
                className="inline-flex items-center gap-2 rounded-full bg-white border border-gray-200 px-5 py-3 shadow-sm"
              >
                <Icon className="w-5 h-5 text-[#008080]" />
                <span className="text-sm font-semibold text-[#003366]">{cert.name}</span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default TrustBar;
