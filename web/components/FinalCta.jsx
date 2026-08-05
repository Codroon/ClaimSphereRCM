import React from 'react';
import Link from 'next/link';
import { ArrowRight, Phone } from 'lucide-react';
import { companyInfo } from '../data/mock';

// Closing conversion band. Deliberately a contained navy card on a light
// section — a full-bleed dark section here would run straight into the dark
// footer with no visual separation.
const FinalCta = () => (
  <section className="py-20 lg:py-24 bg-white">
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="relative rounded-[2rem] bg-[#003366] overflow-hidden px-8 py-14 sm:px-12 sm:py-16 text-center">
        <div className="absolute inset-0 opacity-10" aria-hidden="true">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
              backgroundSize: '32px 32px',
            }}
          ></div>
        </div>
        <div className="absolute -top-16 right-1/4 w-72 h-72 bg-[#50C878]/10 rounded-full blur-3xl" aria-hidden="true"></div>

        <div className="relative">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4 leading-tight">
            Take the Stress Out of Medical Billing
          </h2>
          <p className="text-white/70 leading-relaxed mb-8 max-w-xl mx-auto">
            Partner with ClaimSphere RCM to lift collections, cut denials, and get your
            administrative workload back under control.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/#contact"
              className="group inline-flex items-center justify-center gap-2 bg-[#50C878] hover:bg-[#45b56a] text-white font-semibold px-8 py-4 rounded-full transition-all duration-300 hover:scale-105"
            >
              Schedule a Free Audit
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <a
              href={`tel:${companyInfo.phone}`}
              className="inline-flex items-center justify-center gap-2 bg-transparent border-2 border-white/30 text-white hover:bg-white/10 hover:border-white/50 font-semibold px-8 py-4 rounded-full transition-all duration-300"
            >
              <Phone className="w-5 h-5" />
              {companyInfo.phone}
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default FinalCta;
