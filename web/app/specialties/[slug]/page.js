import Link from "next/link";
import { notFound } from "next/navigation";
import {
  Brain, Home, Activity, Users, Stethoscope, HeartPulse, Heart, Bone,
  Sparkles, Baby, Flower2, BrainCircuit, Ribbon, Droplets, Smile, Pill,
  Syringe, Moon, Package, ArrowLeft, ArrowRight,
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { MetricsBand, SplitSection, OfferGrid, CheckList, FaqList, CtaBand } from "@/components/detail/Sections";
import { specialties } from "@/data/specialties";
import { specialtyContent } from "@/data/specialty-content";
import { pickImage } from "@/lib/images";
import { SITE_URL } from "@/lib/site";

const iconMap = {
  Brain, Home, Activity, Users, Stethoscope, HeartPulse, Heart, Bone,
  Sparkles, Baby, Flower2, BrainCircuit, Ribbon, Droplets, Smile, Pill,
  Syringe, Moon, Package,
};

export function generateStaticParams() {
  return specialties.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const specialty = specialties.find((s) => s.slug === slug);
  if (!specialty) return { title: "Specialty Not Found" };
  const content = specialtyContent[slug] || {};
  return {
    title: `${specialty.name} Medical Billing & RCM`,
    description: content.heroSubtitle || specialty.intro,
    alternates: { canonical: `/specialties/${specialty.slug}` },
    openGraph: {
      title: `${specialty.name} Medical Billing & RCM | ClaimSphere RCM`,
      description: content.heroSubtitle || specialty.intro,
      url: `/specialties/${specialty.slug}`,
    },
  };
}

export default async function Page({ params }) {
  const { slug } = await params;
  const specialty = specialties.find((s) => s.slug === slug);
  if (!specialty) notFound();
  const content = specialtyContent[slug] || {};
  const Icon = iconMap[specialty.icon] || Stethoscope;
  const others = specialties.filter((s) => s.slug !== specialty.slug).slice(0, 6);

  const bizSchema = {
    "@context": "https://schema.org",
    "@type": "MedicalBusiness",
    name: `ClaimSphere RCM — ${specialty.name} Billing`,
    description: content.heroSubtitle || specialty.intro,
    url: `${SITE_URL}/specialties/${specialty.slug}`,
    areaServed: "US",
  };
  const faqSchema = content.faqs?.length && {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: content.faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  return (
    <div className="min-h-screen bg-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(bizSchema) }} />
      {faqSchema && <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />}
      <Header />

      {/* Hero */}
      <section className="relative pt-32 pb-16 lg:pb-20 bg-gradient-to-br from-[#003366] via-[#00294d] to-[#001a33] overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{ backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`, backgroundSize: "32px 32px" }}></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link href="/specialties" className="inline-flex items-center gap-2 text-white/80 hover:text-white mb-8 transition-colors">
            <ArrowLeft className="w-5 h-5" /> All Specialties
          </Link>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-14 h-14 rounded-2xl bg-white/10 backdrop-blur-sm flex items-center justify-center">
                  <Icon className="w-7 h-7 text-[#50C878]" />
                </div>
                <span className="text-white/70 font-medium">Specialty Billing</span>
              </div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight mb-5">
                {specialty.name} Medical Billing &amp; RCM
              </h1>
              <p className="text-white/80 text-lg leading-relaxed mb-8">{content.heroSubtitle || specialty.intro}</p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/#contact" className="inline-flex items-center justify-center gap-2 bg-[#50C878] hover:bg-[#45b56a] text-white font-semibold px-8 py-4 rounded-full transition-all duration-300 hover:scale-105">
                  Get a Free Assessment <ArrowRight className="w-5 h-5" />
                </Link>
                <Link href="/specialties" className="inline-flex items-center justify-center gap-2 bg-transparent border-2 border-white/30 text-white hover:bg-white/10 font-semibold px-8 py-4 rounded-full transition-all duration-300">
                  All Specialties
                </Link>
              </div>
            </div>
            <div className="relative hidden lg:block">
              <div className="rounded-3xl overflow-hidden shadow-2xl aspect-[4/3]">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={pickImage(slug, 0)} alt={`${specialty.name} billing services`} className="w-full h-full object-cover" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <MetricsBand metrics={content.metrics} />

      {content.intro && (
        <SplitSection
          eyebrow="Overview"
          heading={`Revenue cycle management for ${specialty.name.toLowerCase()}`}
          paragraphs={content.intro}
          image={pickImage(slug, 1)}
          imageAlt={`${specialty.name} billing overview`}
        />
      )}

      <OfferGrid
        eyebrow="What We Handle"
        heading={`${specialty.name} billing, done right`}
        items={content.offers}
      />

      <CheckList
        eyebrow="Why ClaimSphere"
        heading={`Why ${specialty.name.toLowerCase()} practices choose us`}
        items={content.whyChoose}
        image={pickImage(slug, 2)}
        imageAlt="ClaimSphere RCM specialists"
      />

      <FaqList faqs={content.faqs} />

      <CtaBand
        title={`Specialized billing for ${specialty.name.toLowerCase()} practices`}
        text="Get a free assessment of your revenue cycle from coders who know your specialty inside out."
      />

      {/* Related specialties */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-[#003366] mb-8">Other Specialties We Serve</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {others.map((other) => {
              const OtherIcon = iconMap[other.icon] || Stethoscope;
              return (
                <Link key={other.slug} href={`/specialties/${other.slug}`} className="group flex items-center gap-3 bg-white rounded-2xl border border-gray-100 shadow-sm p-5 hover:shadow-lg hover:border-[#008080]/30 transition-all duration-300">
                  <div className="w-10 h-10 rounded-lg bg-[#008080]/10 flex items-center justify-center flex-shrink-0">
                    <OtherIcon className="w-5 h-5 text-[#008080]" />
                  </div>
                  <span className="font-semibold text-[#003366] group-hover:text-[#008080] transition-colors">{other.name}</span>
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
