import Link from "next/link";
import {
  Code, FileText, ShieldCheck, RefreshCw, RotateCcw, BadgeCheck, Search, ArrowRight,
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { CtaBand } from "@/components/detail/Sections";
import { services } from "@/data/services";
import { serviceContent } from "@/data/service-content";
import { SITE_URL } from "@/lib/site";

const iconMap = { Code, FileText, ShieldCheck, RefreshCw, RotateCcw, BadgeCheck, Search };

export const metadata = {
  title: "Medical Billing & RCM Services",
  description:
    "Explore ClaimSphere RCM's medical billing and revenue cycle services — end-to-end RCM, billing, audits, eligibility verification, denial management, credentialing, and coding.",
  alternates: { canonical: "/services" },
  openGraph: {
    title: "Medical Billing & RCM Services | ClaimSphere RCM",
    description:
      "End-to-end revenue cycle management for U.S. healthcare providers — billing, audits, eligibility, denials, credentialing, and coding.",
    url: "/services",
  },
};

// ItemList schema so the services index is machine-readable for search engines.
const listSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  itemListElement: services.map((s, i) => ({
    "@type": "ListItem",
    position: i + 1,
    name: s.title,
    url: `${SITE_URL}/services/${s.slug}`,
  })),
};

export default function ServicesIndexPage() {
  return (
    <div className="min-h-screen bg-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(listSchema) }} />
      <Header />

      {/* Hero */}
      <section className="relative pt-32 pb-16 lg:pb-20 bg-gradient-to-br from-[#003366] via-[#00294d] to-[#001a33] overflow-hidden">
        <div className="absolute inset-0 opacity-10" aria-hidden="true">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: "radial-gradient(circle at 2px 2px, white 1px, transparent 0)",
              backgroundSize: "32px 32px",
            }}
          ></div>
        </div>
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
            <span className="w-2 h-2 bg-[#50C878] rounded-full"></span>
            <span className="text-white/90 text-sm font-medium">Our Services</span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight mb-5">
            Medical Billing &amp; Revenue Cycle Services
          </h1>
          <p className="text-white/75 text-lg leading-relaxed">
            Take one piece of your revenue cycle or hand us the whole thing. Every engagement is
            staffed by certified specialists and built around how your practice already works.
          </p>
        </div>
      </section>

      {/* Service grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => {
              const Icon = iconMap[service.icon] || FileText;
              const content = serviceContent[service.slug] || {};
              return (
                <Link
                  key={service.slug}
                  href={`/services/${service.slug}`}
                  className="group flex flex-col bg-white rounded-2xl border border-gray-100 shadow-sm p-7 hover:shadow-xl hover:-translate-y-1 hover:border-[#008080]/25 transition-all duration-300"
                >
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#003366] to-[#008080] flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h2 className="text-lg font-bold text-[#003366] mb-3 leading-snug group-hover:text-[#008080] transition-colors">
                    {service.shortTitle}
                  </h2>
                  <p className="text-gray-600 text-sm leading-relaxed mb-6 flex-1">
                    {content.heroSubtitle || service.description}
                  </p>
                  <span className="inline-flex items-center gap-1.5 text-[#008080] text-sm font-semibold">
                    Explore More
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <CtaBand
        title="Not sure which service you need?"
        text="Start with a free revenue cycle assessment. We will show you where your practice is losing revenue and which service closes the gap."
      />

      <Footer />
    </div>
  );
}
