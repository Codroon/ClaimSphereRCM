'use client';
import React, { useEffect, useState } from 'react';
import { ArrowRight, TrendingDown, Activity } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { img } from '../lib/images';
import { submitLead } from '../lib/submitLead';
import { toast } from 'sonner';

// Rotating tail for the headline. Kept short so the h1 never reflows mid-cycle.
const ROTATING = ['Certified Experts', 'Cleaner Claims', 'Faster Payments'];

function useTypewriter(words, typeMs = 90, deleteMs = 45, holdMs = 1800) {
  const [text, setText] = useState('');
  const [wordIndex, setWordIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const word = words[wordIndex % words.length];

    if (!deleting && text === word) {
      const t = setTimeout(() => setDeleting(true), holdMs);
      return () => clearTimeout(t);
    }
    if (deleting && text === '') {
      setDeleting(false);
      setWordIndex((i) => (i + 1) % words.length);
      return undefined;
    }

    const t = setTimeout(
      () => {
        setText((prev) => (deleting ? word.slice(0, prev.length - 1) : word.slice(0, prev.length + 1)));
      },
      deleting ? deleteMs : typeMs
    );
    return () => clearTimeout(t);
  }, [text, deleting, wordIndex, words, typeMs, deleteMs, holdMs]);

  return text;
}

const Hero = () => {
  const typed = useTypewriter(ROTATING);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', phone: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      await submitLead('Hero — Book Free Consultation', formData);
      toast.success('Thank you! We will be in touch within 24 hours.', {
        description: 'An RCM specialist will reach out shortly.',
      });
      setFormData({ name: '', email: '', phone: '' });
    } catch {
      toast.error('Something went wrong. Please try again.', {
        description: 'If the issue persists, please call us directly.',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const fieldClass =
    'w-full h-12 rounded-xl bg-white/95 border-transparent text-[#003366] placeholder:text-gray-400 focus:border-[#50C878] focus:ring-[#50C878]/30';

  return (
    <section
      id="home"
      className="relative flex items-center overflow-hidden bg-gradient-to-br from-[#003366] via-[#00294d] to-[#001a33]"
    >
      {/* Subtle dot pattern */}
      <div className="absolute inset-0 opacity-10" aria-hidden="true">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
            backgroundSize: '32px 32px',
          }}
        ></div>
      </div>

      {/* Glow accents */}
      <div className="absolute top-1/4 right-1/3 w-96 h-96 bg-[#008080]/20 rounded-full blur-3xl" aria-hidden="true"></div>
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-[#50C878]/10 rounded-full blur-3xl" aria-hidden="true"></div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-16 lg:pt-36 lg:pb-24">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* ---------- Left: copy + lead form ---------- */}
          <div>
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
              <span className="w-2 h-2 bg-[#50C878] rounded-full animate-pulse"></span>
              <span className="text-white/90 text-sm font-medium">Medical Billing &amp; RCM Company</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-[3.25rem] font-bold text-white leading-[1.14] mb-5">
              Expert Medical Billing Services Driven by{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#50C878] to-[#008080]">
                {typed}
              </span>
              <span className="text-[#50C878] font-light animate-pulse" aria-hidden="true">
                |
              </span>
            </h1>

            <p className="text-base sm:text-lg text-white/75 mb-8 leading-relaxed max-w-xl">
              Improve practice efficiency, reduce claim denials, and shorten payment cycles with
              ClaimSphere RCM — where certified coders and technology-driven accuracy protect every
              dollar your practice earns.
            </p>

            {/* Lead form */}
            <form onSubmit={handleSubmit} className="max-w-xl">
              <div className="grid sm:grid-cols-3 gap-3 mb-3">
                <Input
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Name"
                  required
                  aria-label="Name"
                  className={fieldClass}
                />
                <Input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Email"
                  required
                  aria-label="Email"
                  className={fieldClass}
                />
                <Input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Phone"
                  required
                  aria-label="Phone"
                  className={fieldClass}
                />
              </div>

              <Button
                type="submit"
                disabled={isSubmitting}
                className="group w-full h-14 bg-[#50C878] hover:bg-[#45b56a] text-white font-semibold text-base rounded-xl transition-all duration-300 hover:shadow-xl hover:shadow-[#50C878]/25 disabled:opacity-70"
              >
                {isSubmitting ? (
                  <span className="flex items-center gap-2">
                    <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                    </svg>
                    Submitting...
                  </span>
                ) : (
                  <span className="flex items-center gap-2">
                    Book Free Consultation
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </span>
                )}
              </Button>

              <p className="text-xs text-white/45 mt-3 leading-relaxed">
                No obligation. We reply within 24 hours. By submitting you agree to our{' '}
                <a href="/privacy-policy" className="text-white/70 underline hover:text-white">
                  Privacy Policy
                </a>
                .
              </p>
            </form>
          </div>

          {/* ---------- Right: image + floating metric cards ---------- */}
          {/* NOTE: placeholder performance figures — replace with the client's
              verified numbers before launch. */}
          <div className="hidden lg:block">
            {/* Cards anchor to this wrapper (image width), not the full column,
                so the negative offsets overlap the photo edge. */}
            <div className="relative max-w-md ml-auto mr-4 xl:mr-10">
              <div className="relative rounded-[2rem] overflow-hidden shadow-2xl aspect-[4/5]">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={img('photo-1622253692010-333f2da6031d', 900)}
                  alt="Healthcare provider supported by ClaimSphere RCM billing services"
                  className="w-full h-full object-cover"
                />
                {/* Navy blend so the photo sits inside the theme rather than on top of it */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#001a33]/70 via-[#003366]/10 to-transparent"></div>
              </div>

              <div className="absolute top-12 -left-12 bg-white rounded-2xl shadow-2xl p-4 w-44">
                <div className="flex items-center gap-2 mb-1.5">
                  <span className="w-7 h-7 rounded-lg bg-[#008080]/10 flex items-center justify-center">
                    <Activity className="w-4 h-4 text-[#008080]" />
                  </span>
                  <span className="text-[11px] text-gray-500 font-medium">Clean Claim Rate</span>
                </div>
                <div className="text-2xl font-bold text-[#003366]">99%</div>
                <div className="mt-2 h-1.5 rounded-full bg-gray-100 overflow-hidden">
                  <div className="h-full w-[99%] rounded-full bg-gradient-to-r from-[#008080] to-[#50C878]"></div>
                </div>
              </div>

              <div className="absolute bottom-28 -left-16 bg-white rounded-2xl shadow-2xl p-4 w-44">
                <div className="flex items-center gap-2 mb-1.5">
                  <span className="w-7 h-7 rounded-lg bg-[#50C878]/10 flex items-center justify-center">
                    <TrendingDown className="w-4 h-4 text-[#50C878]" />
                  </span>
                  <span className="text-[11px] text-gray-500 font-medium">Claim Denials</span>
                </div>
                <div className="flex items-baseline gap-1.5">
                  <span className="text-2xl font-bold text-[#003366]">32%</span>
                  <span className="text-xs font-semibold text-[#50C878]">reduced</span>
                </div>
              </div>

              <div className="absolute -bottom-5 -right-8 bg-white rounded-2xl shadow-2xl p-4 w-40">
                <div className="text-[11px] text-gray-500 font-medium mb-1">Avg. Days in AR</div>
                <div className="flex items-baseline gap-1.5">
                  <span className="text-2xl font-bold text-[#003366]">7</span>
                  <span className="text-xs text-gray-400">days</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
