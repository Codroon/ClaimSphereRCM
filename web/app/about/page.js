import Link from "next/link";
import { Target, Eye, Heart, ArrowRight, CheckCircle2 } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { aboutContent } from "@/data/mock";

export const metadata = {
  title: "About Us — Healthcare RCM Experts",
  description:
    "Learn about ClaimSphere RCM — our mission, vision, and values, and how we help U.S. healthcare providers optimize revenue cycle performance.",
  alternates: { canonical: "/about" },
};

const stats = [
  { value: aboutContent.yearFounded, label: "Founded" },
  { value: aboutContent.employeeCount, label: "Team Members" },
  { value: aboutContent.clientsServed, label: "Clients Served" },
];

export default function AboutPage() {
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
        <div className="absolute top-10 right-10 w-72 h-72 bg-[#008080]/20 rounded-full blur-3xl"></div>
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
            <span className="w-2 h-2 bg-[#50C878] rounded-full"></span>
            <span className="text-white/90 text-sm font-semibold">Who We Are</span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Revolutionizing Healthcare
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#50C878] to-[#008080]">
              {" "}Revenue Management
            </span>
          </h1>
          <p className="text-white/80 text-lg max-w-2xl mx-auto leading-relaxed">
            For over half a decade, ClaimSphere has combined deep RCM expertise with
            modern technology to deliver measurable financial results for healthcare
            providers across the United States.
          </p>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-white py-14 border-b border-gray-100">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-3 gap-6">
            {stats.map((s) => (
              <div key={s.label} className="text-center">
                <div className="text-3xl sm:text-4xl font-bold text-[#003366] mb-1">{s.value}</div>
                <div className="text-gray-500 text-sm">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission / Vision / Values */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-3 gap-6">
          <div className="bg-white rounded-2xl border border-gray-100 shadow-lg p-8">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#003366] to-[#008080] flex items-center justify-center mb-5">
              <Target className="w-6 h-6 text-white" />
            </div>
            <h2 className="text-xl font-bold text-[#003366] mb-3">Our Mission</h2>
            <p className="text-gray-600 leading-relaxed">{aboutContent.mission}</p>
          </div>
          <div className="bg-white rounded-2xl border border-gray-100 shadow-lg p-8">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#003366] to-[#008080] flex items-center justify-center mb-5">
              <Eye className="w-6 h-6 text-white" />
            </div>
            <h2 className="text-xl font-bold text-[#003366] mb-3">Our Vision</h2>
            <p className="text-gray-600 leading-relaxed">{aboutContent.vision}</p>
          </div>
          <div className="bg-white rounded-2xl border border-gray-100 shadow-lg p-8">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#003366] to-[#008080] flex items-center justify-center mb-5">
              <Heart className="w-6 h-6 text-white" />
            </div>
            <h2 className="text-xl font-bold text-[#003366] mb-3">Our Values</h2>
            <ul className="space-y-2">
              {aboutContent.values.map((value) => (
                <li key={value} className="flex items-center gap-2 text-gray-600">
                  <CheckCircle2 className="w-4 h-4 text-[#50C878] flex-shrink-0" />
                  <span>{value}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-[#003366] mb-4">Ready to work with us?</h2>
          <p className="text-gray-600 text-lg mb-8">
            See how ClaimSphere can strengthen your revenue cycle with a free,
            no-obligation assessment.
          </p>
          <Link
            href="/#contact"
            className="inline-flex items-center gap-2 bg-[#50C878] hover:bg-[#45b56a] text-white font-semibold px-8 py-4 rounded-full transition-all duration-300 hover:scale-105"
          >
            Schedule a Consultation
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
