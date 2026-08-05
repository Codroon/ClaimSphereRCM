'use client';
import React from 'react';
import Link from 'next/link';
import {
  Brain, Home, Activity, Users, Stethoscope, HeartPulse, Heart, Bone,
  Sparkles, Baby, Flower2, BrainCircuit, Ribbon, Droplets, Smile, Pill,
  Syringe, Moon, Package, ArrowRight,
} from 'lucide-react';
import { specialties } from '../data/specialties';
import { useReveal } from '../lib/useReveal';

const iconMap = {
  Brain, Home, Activity, Users, Stethoscope, HeartPulse, Heart, Bone,
  Sparkles, Baby, Flower2, BrainCircuit, Ribbon, Droplets, Smile, Pill,
  Syringe, Moon, Package,
};

const SpecialtiesGrid = () => {
  const [ref, isVisible] = useReveal(0.05);

  return (
    <section id="specialties" ref={ref} className="relative py-24 lg:py-28 bg-gray-50 overflow-hidden">
      <div className="absolute top-1/3 left-0 w-96 h-96 bg-[#003366]/5 rounded-full blur-3xl" aria-hidden="true"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`max-w-3xl mx-auto text-center mb-14 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="inline-flex items-center gap-2 bg-[#008080]/10 px-4 py-2 rounded-full mb-6">
            <span className="w-2 h-2 bg-[#008080] rounded-full"></span>
            <span className="text-[#008080] text-sm font-semibold">Specialties</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#003366] mb-5 leading-tight">
            Specialties We Serve
          </h2>

          <p className="text-gray-600 text-lg leading-relaxed">
            Billing rules shift from one specialty to the next. Our coders work inside the payer
            policies, modifiers, and documentation standards that govern yours.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 sm:gap-6">
          {specialties.map((specialty, index) => {
            const Icon = iconMap[specialty.icon] || Stethoscope;
            return (
              <Link
                key={specialty.slug}
                href={`/specialties/${specialty.slug}`}
                className={`group flex flex-col items-start bg-white rounded-2xl border border-gray-100 shadow-sm p-6 sm:p-7 hover:shadow-xl hover:-translate-y-1 hover:border-[#008080]/25 transition-all duration-300 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
                }`}
                style={{ transitionDelay: `${Math.min(index * 45, 500)}ms` }}
              >
                <span className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#003366] to-[#008080] flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
                  <Icon className="w-7 h-7 text-white" />
                </span>
                <h3 className="text-base sm:text-lg font-bold text-[#003366] leading-snug mb-2 group-hover:text-[#008080] transition-colors">
                  {specialty.name}
                </h3>
                <p className="text-gray-500 text-sm leading-snug">Billing Services</p>
              </Link>
            );
          })}
        </div>

        <div
          className={`mt-12 text-center transition-all duration-700 delay-300 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
        >
          <Link
            href="/specialties"
            className="group inline-flex items-center gap-2 bg-[#003366] hover:bg-[#00294d] text-white font-semibold px-8 py-4 rounded-full transition-all duration-300 hover:scale-105"
          >
            View All Specialties
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default SpecialtiesGrid;
