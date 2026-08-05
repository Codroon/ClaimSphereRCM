import Header from "@/components/Header";
import Hero from "@/components/Hero";
import TrustBar from "@/components/TrustBar";
import OurServices from "@/components/OurServices";
import HowItWorks from "@/components/HowItWorks";
import MetricCards from "@/components/MetricCards";
import TrustBadges from "@/components/TrustBadges";
import OurValues from "@/components/OurValues";
import WhoAreWe from "@/components/WhoAreWe";
import SpecialtiesGrid from "@/components/SpecialtiesGrid";
import WhyChooseUs from "@/components/WhyChooseUs";
import ReviewRating from "@/components/ReviewRating";
import Testimonials from "@/components/Testimonials";
import NationwideReach from "@/components/NationwideReach";
import Comparison from "@/components/Comparison";
import FreeAudit from "@/components/FreeAudit";
import Team from "@/components/Team";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
import FinalCta from "@/components/FinalCta";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { testimonials } from "@/data/mock";
import { faqs } from "@/data/faqs";
import { SITE_URL } from "@/lib/site";

export const metadata = {
  alternates: { canonical: "/" },
};

// Review + AggregateRating JSON-LD.
//
// NOTE: this is built from the placeholder testimonials in data/mock.js, which
// means the aggregateRating below is not backed by real reviews. Structured
// review markup is held to Google's review snippet policy and is a public
// factual claim — replace these with real, attributable reviews before launch,
// or drop the aggregateRating block until they exist. See data/reviews.js for
// the same decision applied to the on-page rating band.
const reviewSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "ClaimSphere RCM",
  url: SITE_URL,
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "5",
    reviewCount: String(testimonials.length),
  },
  review: testimonials.map((t) => ({
    "@type": "Review",
    reviewRating: { "@type": "Rating", ratingValue: String(t.rating), bestRating: "5" },
    author: { "@type": "Person", name: t.name },
    reviewBody: t.quote,
  })),
};

// FAQPage JSON-LD for rich results.
const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({
    "@type": "Question",
    name: f.question,
    acceptedAnswer: { "@type": "Answer", text: f.answer },
  })),
};

export default function HomePage() {
  return (
    <div className="relative">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(reviewSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <Header />
      <main>
        {/* Section order mirrors the reference site the client supplied,
            rendered in ClaimSphere's own theme with original copy. */}
        <Hero />
        <TrustBar />
        <OurServices />
        <HowItWorks />
        <MetricCards />
        <TrustBadges />
        <OurValues />
        <WhoAreWe />
        <SpecialtiesGrid />
        <WhyChooseUs />
        <ReviewRating />
        <Testimonials />
        <NationwideReach />
        <Comparison />
        <FreeAudit />
        {/* Leadership (Team) is hidden for now — re-add before FAQs when the
            real team photos/bios are ready. Component + data still in place. */}
        {/* <Team /> */}
        <FAQ />
        <Contact />
        <FinalCta />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
