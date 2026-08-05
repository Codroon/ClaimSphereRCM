import Link from "next/link";
import { CheckCircle2, ArrowRight, Plus } from "lucide-react";

// Shared, server-rendered section building blocks for service & specialty
// detail pages. No client JS required.

export function MetricsBand({ metrics }) {
  if (!metrics?.length) return null;
  return (
    <section className="bg-white py-12 border-b border-gray-100">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-3 gap-4 sm:gap-6">
          {metrics.map((m) => (
            <div key={m.label} className="text-center rounded-2xl border border-gray-100 bg-gray-50/70 py-7 px-3">
              <div className="text-2xl sm:text-4xl font-bold text-[#003366] mb-1">{m.value}</div>
              <div className="text-gray-500 text-xs sm:text-sm">{m.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function SplitSection({ eyebrow, heading, paragraphs, image, imageAlt, reverse }) {
  return (
    <section className="py-16 lg:py-20 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`grid lg:grid-cols-2 gap-10 lg:gap-16 items-center ${reverse ? "lg:[&>*:first-child]:order-2" : ""}`}>
          <div>
            {eyebrow && (
              <div className="inline-flex items-center gap-2 bg-[#008080]/10 px-4 py-2 rounded-full mb-5">
                <span className="w-2 h-2 bg-[#008080] rounded-full"></span>
                <span className="text-[#008080] text-sm font-semibold">{eyebrow}</span>
              </div>
            )}
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#003366] mb-5 leading-tight">{heading}</h2>
            <div className="space-y-4">
              {paragraphs?.map((p, i) => (
                <p key={i} className="text-gray-600 leading-relaxed">{p}</p>
              ))}
            </div>
          </div>
          <div className="relative">
            <div className="rounded-3xl overflow-hidden shadow-xl aspect-[4/3]">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={image} alt={imageAlt} loading="lazy" className="w-full h-full object-cover" />
            </div>
            <div className="absolute -z-10 -bottom-5 -right-5 w-2/3 h-2/3 bg-[#50C878]/10 rounded-3xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function OfferGrid({ eyebrow, heading, subheading, items }) {
  if (!items?.length) return null;
  return (
    <section className="py-16 lg:py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-12">
          {eyebrow && (
            <div className="inline-flex items-center gap-2 bg-[#008080]/10 px-4 py-2 rounded-full mb-5">
              <span className="w-2 h-2 bg-[#008080] rounded-full"></span>
              <span className="text-[#008080] text-sm font-semibold">{eyebrow}</span>
            </div>
          )}
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#003366] mb-3">{heading}</h2>
          {subheading && <p className="text-gray-600 text-lg">{subheading}</p>}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((item) => (
            <div key={item.title} className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 hover:shadow-lg transition-shadow duration-300">
              <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-[#003366] to-[#008080] flex items-center justify-center mb-4">
                <CheckCircle2 className="w-5 h-5 text-white" />
              </div>
              <h3 className="text-lg font-bold text-[#003366] mb-2">{item.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function CheckList({ eyebrow, heading, items, image, imageAlt }) {
  if (!items?.length) return null;
  return (
    <section className="py-16 lg:py-20 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          <div className="relative order-2 lg:order-1">
            <div className="rounded-3xl overflow-hidden shadow-xl aspect-[4/3]">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={image} alt={imageAlt} loading="lazy" className="w-full h-full object-cover" />
            </div>
            <div className="absolute -z-10 -top-5 -left-5 w-2/3 h-2/3 bg-[#008080]/10 rounded-3xl"></div>
          </div>
          <div className="order-1 lg:order-2">
            {eyebrow && (
              <div className="inline-flex items-center gap-2 bg-[#50C878]/10 px-4 py-2 rounded-full mb-5">
                <span className="w-2 h-2 bg-[#50C878] rounded-full"></span>
                <span className="text-[#2e8b57] text-sm font-semibold">{eyebrow}</span>
              </div>
            )}
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#003366] mb-6">{heading}</h2>
            <ul className="space-y-4">
              {items.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#50C878] flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export function FaqList({ faqs }) {
  if (!faqs?.length) return null;
  return (
    <section className="py-16 lg:py-20 bg-gray-50">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#003366] mb-10 text-center">
          Frequently Asked Questions
        </h2>
        <div className="space-y-4">
          {faqs.map((f, i) => (
            <details key={i} className="group bg-white rounded-2xl border border-gray-100 shadow-sm px-6 py-1 [&_summary::-webkit-details-marker]:hidden">
              <summary className="flex items-center justify-between gap-4 cursor-pointer py-5 text-lg font-semibold text-[#003366]">
                {f.q}
                <Plus className="w-5 h-5 text-[#008080] flex-shrink-0 transition-transform duration-300 group-open:rotate-45" />
              </summary>
              <p className="text-gray-600 leading-relaxed pb-5">{f.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

export function CtaBand({ title, text, href = "/#contact", label = "Schedule a Consultation" }) {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-gradient-to-br from-[#003366] to-[#00294d] p-8 md:p-12 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3">{title}</h2>
          <p className="text-white/70 mb-7 max-w-xl mx-auto">{text}</p>
          <Link
            href={href}
            className="inline-flex items-center gap-2 bg-[#50C878] hover:bg-[#45b56a] text-white font-semibold px-8 py-4 rounded-full transition-all duration-300 hover:scale-105"
          >
            {label}
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </section>
  );
}
