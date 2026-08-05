'use client';
import React from 'react';
import { Target, Eye, TrendingUp } from 'lucide-react';
import { useReveal } from '../lib/useReveal';

// Deliberately compact — on the reference this is a light touch between two
// heavier sections, not a full card grid.
const VALUES = [
  { icon: Target, title: 'Precision', description: 'Certified coders and layered claim validation.' },
  { icon: Eye, title: 'Transparency', description: 'You see the same numbers we do, always.' },
  { icon: TrendingUp, title: 'Results', description: 'Every process measured against collections.' },
];

const OurValues = () => {
  const [ref, isVisible] = useReveal(0.2);

  return (
    <section ref={ref} className="relative py-16 lg:py-20 overflow-hidden bg-gradient-to-br from-[#003366] via-[#00294d] to-[#001a33]">
      <div className="absolute inset-0 opacity-10" aria-hidden="true">
        <div
          className="absolute inset-0"
          style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '32px 32px' }}
        ></div>
      </div>
      <div className="absolute top-0 right-1/4 w-80 h-80 bg-[#008080]/20 rounded-full blur-3xl" aria-hidden="true"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`flex flex-col lg:flex-row lg:items-center gap-8 lg:gap-12 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
        >
          {/* Lead-in */}
          <div className="lg:w-1/3">
            <div className="text-[#50C878] text-sm font-semibold mb-2">Why ClaimSphere</div>
            <p className="text-white text-xl font-bold leading-snug">
              Accuracy, accountability, and trust — the whole engagement rests on these three.
            </p>
          </div>

          {/* Values */}
          <div className="lg:w-2/3 grid sm:grid-cols-3 gap-6">
            {VALUES.map((value, index) => (
              <div
                key={value.title}
                className={`flex items-start gap-3 transition-all duration-500 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
                }`}
                style={{ transitionDelay: `${150 + index * 110}ms` }}
              >
                <span className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#008080] to-[#50C878] flex items-center justify-center flex-shrink-0">
                  <value.icon className="w-5 h-5 text-white" />
                </span>
                <div>
                  <h3 className="font-bold text-white mb-0.5">{value.title}</h3>
                  <p className="text-white/65 text-sm leading-snug">{value.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurValues;
