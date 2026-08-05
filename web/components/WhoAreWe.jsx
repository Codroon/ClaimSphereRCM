'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import { ArrowRight, Check } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { aboutContent } from '../data/mock';
import { submitLead } from '../lib/submitLead';
import { useReveal } from '../lib/useReveal';
import { toast } from 'sonner';

// Pain points the form lets a prospect self-identify. Doubles as qualifying
// data on the lead that lands in the client's inbox.
const PROBLEMS = [
  'Claims and payments that never get followed up on',
  'Accounts receivable aging past 90 or 120 days',
  'Growing patient balances putting pressure on cash flow',
  'No clear reporting or visibility into performance',
  'Collections trending down on the same patient volume',
];

const WhoAreWe = () => {
  const [ref, isVisible] = useReveal(0.1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [selected, setSelected] = useState([]);
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', comments: '' });

  const toggleProblem = (problem) => {
    setSelected((prev) =>
      prev.includes(problem) ? prev.filter((p) => p !== problem) : [...prev, problem]
    );
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      await submitLead('Who Are We — Free Consultation', {
        ...formData,
        problems: selected.length ? selected.join('; ') : 'None selected',
      });
      toast.success('Thank you! We will be in touch within 24 hours.', {
        description: 'An RCM specialist will review your practice and reach out.',
      });
      setFormData({ name: '', email: '', phone: '', comments: '' });
      setSelected([]);
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
    <section id="about" ref={ref} className="relative py-24 lg:py-28 bg-gray-50 overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#008080]/5 rounded-full blur-3xl" aria-hidden="true"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* ---------- Left: who we are ---------- */}
          <div
            className={`transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
            }`}
          >
            <div className="inline-flex items-center gap-2 bg-[#008080]/10 px-4 py-2 rounded-full mb-6">
              <span className="w-2 h-2 bg-[#008080] rounded-full"></span>
              <span className="text-[#008080] text-sm font-semibold">About Us</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#003366] mb-6 leading-tight">
              Who Are We?
            </h2>

            <div className="space-y-4 text-gray-600 leading-relaxed mb-8">
              <p>
                ClaimSphere RCM is a healthcare revenue cycle partner built around medical coding
                and billing for U.S. providers. We manage the full billing operation for practices
                of every size, combining credentialed specialists with technology that keeps claims
                accurate and compliant in a regulatory landscape that rarely sits still.
              </p>
              <p>
                Our work goes beyond pushing claims out the door. We strengthen provider-patient
                billing communication, protect data under HIPAA-compliant handling, and give
                leadership a clear read on where the practice actually stands financially — so your
                team can keep its attention on patient care.
              </p>
            </div>

            {/* Compact credibility stats */}
            {/* NOTE: sourced from data/mock.js — confirm with the client before launch. */}
            <div className="flex flex-wrap gap-8 mb-9">
              <div>
                <div className="text-3xl font-bold text-[#003366]">{aboutContent.clientsServed}</div>
                <div className="text-sm text-gray-500">Clients served</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-[#003366]">{aboutContent.yearFounded}</div>
                <div className="text-sm text-gray-500">Established</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-[#003366]">100%</div>
                <div className="text-sm text-gray-500">HIPAA compliant</div>
              </div>
            </div>

            <Link
              href="/#contact"
              className="group inline-flex items-center gap-2 bg-[#003366] hover:bg-[#00294d] text-white font-semibold px-8 py-4 rounded-full transition-all duration-300 hover:scale-105"
            >
              Contact Us Now
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          {/* ---------- Right: pain-point lead form ---------- */}
          <div
            className={`transition-all duration-700 delay-200 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
            }`}
          >
            <div className="rounded-3xl bg-gradient-to-br from-[#003366] to-[#00294d] shadow-2xl p-7 sm:p-9">
              <h3 className="text-white font-semibold text-lg leading-snug mb-5">
                What billing problems is your practice running into right now?
              </h3>

              <form onSubmit={handleSubmit}>
                {/* Problem checkboxes */}
                <fieldset className="mb-6">
                  <legend className="sr-only">Billing problems</legend>
                  <div className="space-y-2.5">
                    {PROBLEMS.map((problem) => {
                      const checked = selected.includes(problem);
                      return (
                        <label
                          key={problem}
                          className="flex items-start gap-3 cursor-pointer group text-sm"
                        >
                          <input
                            type="checkbox"
                            checked={checked}
                            onChange={() => toggleProblem(problem)}
                            className="sr-only"
                          />
                          <span
                            className={`mt-0.5 w-5 h-5 rounded-md flex items-center justify-center flex-shrink-0 border transition-all duration-200 ${
                              checked
                                ? 'bg-[#50C878] border-[#50C878]'
                                : 'bg-white/10 border-white/30 group-hover:border-white/60'
                            }`}
                          >
                            {checked && <Check className="w-3.5 h-3.5 text-white" strokeWidth={3} />}
                          </span>
                          <span className="text-white/80 group-hover:text-white transition-colors leading-snug">
                            {problem}
                          </span>
                        </label>
                      );
                    })}
                  </div>
                </fieldset>

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

                <Textarea
                  name="comments"
                  value={formData.comments}
                  onChange={handleChange}
                  placeholder="Comments"
                  rows={4}
                  aria-label="Comments"
                  className="w-full rounded-xl bg-white/95 border-transparent text-[#003366] placeholder:text-gray-400 focus:border-[#50C878] focus:ring-[#50C878]/30 resize-none mb-4"
                />

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
                      Get a Free Consultation
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </span>
                  )}
                </Button>

                <p className="text-xs text-white/45 mt-3 leading-relaxed">
                  By submitting you agree to our{' '}
                  <a href="/privacy-policy" className="text-white/70 underline hover:text-white">
                    Privacy Policy
                  </a>
                  . We reply within 24 hours.
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhoAreWe;
