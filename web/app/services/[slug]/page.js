import Link from "next/link";
import { notFound } from "next/navigation";
import {
  Code, FileText, ShieldCheck, RefreshCw, RotateCcw, BadgeCheck, Search,
  ArrowLeft, ArrowRight,
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { MetricsBand, SplitSection, OfferGrid, CheckList, FaqList, CtaBand } from "@/components/detail/Sections";
import { services } from "@/data/services";
import { serviceContent } from "@/data/service-content";
import { pickImage } from "@/lib/images";
import { SITE_URL } from "@/lib/site";

const iconMap = { Code, FileText, ShieldCheck, RefreshCw, RotateCcw, BadgeCheck, Search };

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);
  if (!service) return { title: "Service Not Found" };
  const content = serviceContent[slug] || {};
  return {
    title: `${service.title} — Healthcare RCM Services`,
    description: content.heroSubtitle || service.description,
    alternates: { canonical: `/services/${service.slug}` },
    openGraph: {
      title: `${service.title} | ClaimSphere RCM`,
      description: content.heroSubtitle || service.description,
      url: `/services/${service.slug}`,
    },
  };
}

export default async function Page({ params }) {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);
  if (!service) notFound();
  const content = serviceContent[slug] || {};
  const Icon = iconMap[service.icon] || FileText;
  const others = services.filter((s) => s.slug !== service.slug).slice(0, 3);

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.title,
    description: content.heroSubtitle || service.longDescription,
    serviceType: service.title,
    provider: { "@type": "Organization", name: "ClaimSphere RCM", url: SITE_URL },
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
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      {faqSchema && <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />}
      <Header />

      {/* Hero */}
      <section className="relative pt-32 pb-16 lg:pb-20 bg-gradient-to-br from-[#003366] via-[#00294d] to-[#001a33] overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{ backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`, backgroundSize: "32px 32px" }}></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link href="/services" className="inline-flex items-center gap-2 text-white/80 hover:text-white mb-8 transition-colors">
            <ArrowLeft className="w-5 h-5" /> All Services
          </Link>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-14 h-14 rounded-2xl bg-white/10 backdrop-blur-sm flex items-center justify-center">
                  <Icon className="w-7 h-7 text-[#50C878]" />
                </div>
                <span className="text-white/70 font-medium">Our Services</span>
              </div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight mb-5">{service.title}</h1>
              <p className="text-white/80 text-lg leading-relaxed mb-8">{content.heroSubtitle || service.description}</p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/#contact" className="inline-flex items-center justify-center gap-2 bg-[#50C878] hover:bg-[#45b56a] text-white font-semibold px-8 py-4 rounded-full transition-all duration-300 hover:scale-105">
                  Talk to an RCM Expert <ArrowRight className="w-5 h-5" />
                </Link>
                <Link href="/services" className="inline-flex items-center justify-center gap-2 bg-transparent border-2 border-white/30 text-white hover:bg-white/10 font-semibold px-8 py-4 rounded-full transition-all duration-300">
                  Explore All Services
                </Link>
              </div>
            </div>
            <div className="relative hidden lg:block">
              <div className="rounded-3xl overflow-hidden shadow-2xl aspect-[4/3]">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={pickImage(slug, 0)} alt={`${service.title} services`} className="w-full h-full object-cover" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <MetricsBand metrics={content.metrics} />

      {content.intro && (
        <SplitSection
          eyebrow="Overview"
          heading={service.title}
          paragraphs={content.intro}
          image={pickImage(slug, 1)}
          imageAlt={`${service.title} overview`}
        />
      )}

      <OfferGrid
        eyebrow="What We Deliver"
        heading={`What our ${service.title.toLowerCase()} service includes`}
        items={content.offers}
      />

      <CheckList
        eyebrow="Why ClaimSphere"
        heading="Why providers choose ClaimSphere"
        items={content.whyChoose}
        image={pickImage(slug, 2)}
        imageAlt="ClaimSphere RCM team"
      />

      <FaqList faqs={content.faqs} />

      <CtaBand
        title={`Ready to strengthen your ${service.title.toLowerCase()}?`}
        text="Get a free, no-obligation assessment of your revenue cycle from our RCM specialists."
      />

      {/* Related */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-[#003366] mb-8">Explore More Services</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {others.map((other) => (
              <Link key={other.slug} href={`/services/${other.slug}`} className="group bg-white rounded-2xl shadow-lg border border-gray-100 p-6 hover:shadow-xl transition-all duration-300">
                <h3 className="text-lg font-bold text-[#003366] mb-2 group-hover:text-[#008080] transition-colors">{other.shortTitle}</h3>
                <p className="text-gray-600 text-sm line-clamp-2">{other.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
