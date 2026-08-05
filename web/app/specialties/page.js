import Link from "next/link";
import {
  Brain, Home, Activity, Users, Stethoscope, HeartPulse, Heart, Bone,
  Sparkles, Baby, Flower2, BrainCircuit, Ribbon, Droplets, Smile, Pill,
  ArrowRight,
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { specialties } from "@/data/specialties";

const iconMap = {
  Brain, Home, Activity, Users, Stethoscope, HeartPulse, Heart, Bone,
  Sparkles, Baby, Flower2, BrainCircuit, Ribbon, Droplets, Smile, Pill,
};

export const metadata = {
  title: "Specialties We Serve — Medical Billing by Specialty",
  description:
    "ClaimSphere RCM delivers specialty-specific medical billing and revenue cycle management — from cardiology and orthopedics to mental health, oncology, and more.",
  alternates: { canonical: "/specialties" },
};

export default function SpecialtiesPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero */}
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-[#003366] via-[#00294d] to-[#001a33] overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
              backgroundSize: "32px 32px",
            }}
          ></div>
        </div>
        <div className="absolute bottom-0 left-10 w-96 h-96 bg-[#50C878]/10 rounded-full blur-3xl"></div>
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
            <span className="w-2 h-2 bg-[#50C878] rounded-full"></span>
            <span className="text-white/90 text-sm font-semibold">Specialties We Serve</span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Customized Billing Solutions
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#50C878] to-[#008080]">
              {" "}by Specialty
            </span>
          </h1>
          <p className="text-white/80 text-lg max-w-2xl mx-auto leading-relaxed">
            Every specialty has its own coding rules, payer hurdles, and revenue risks.
            Our coders bring specialty-specific expertise to protect every dollar you earn.
          </p>
        </div>
      </section>

      {/* Grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {specialties.map((specialty) => {
              const Icon = iconMap[specialty.icon] || Stethoscope;
              return (
                <Link
                  key={specialty.slug}
                  href={`/specialties/${specialty.slug}`}
                  className="group bg-white rounded-2xl border border-gray-100 shadow-lg p-7 hover:shadow-xl hover:-translate-y-1.5 transition-all duration-500"
                >
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#003366] to-[#008080] flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
                    <Icon className="w-7 h-7 text-white" />
                  </div>
                  <h2 className="text-xl font-bold text-[#003366] mb-2 group-hover:text-[#008080] transition-colors">
                    {specialty.name}
                  </h2>
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">{specialty.blurb}</p>
                  <span className="inline-flex items-center gap-1 text-sm font-medium text-[#008080]">
                    Learn more
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
