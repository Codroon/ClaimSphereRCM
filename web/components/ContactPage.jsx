'use client';
import React, { useState } from 'react';
import { Phone, Mail, MapPin, Send } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { companyInfo } from '../data/mock';
import { submitLead } from '../lib/submitLead';
import Header from './Header';
import Footer from './Footer';
import { toast } from 'sonner';

// Keyless Google Maps embed for the office address. Renders in real browsers;
// note headless automation often refuses to paint Google's map iframe.
const MAP_SRC = `https://www.google.com/maps?q=${encodeURIComponent(
  companyInfo.address
)}&t=&z=14&ie=UTF8&iwloc=&output=embed`;

const ContactPage = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    monthlyCollection: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      await submitLead('Contact Page', formData);
      toast.success('Thank you! We will be in touch within 24 hours.', {
        description: 'A member of our team will reach out shortly.',
      });
      setFormData({ name: '', email: '', phone: '', monthlyCollection: '', message: '' });
    } catch {
      toast.error('Something went wrong. Please try again.', {
        description: 'If the issue persists, please contact us directly.',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    { icon: Phone, label: 'Call Us', value: companyInfo.phone, href: `tel:${companyInfo.phone}` },
    { icon: Mail, label: 'Email Us', value: companyInfo.email, href: `mailto:${companyInfo.email}` },
    { icon: MapPin, label: 'Visit Us', value: companyInfo.address, href: null },
  ];

  const fieldClass =
    'w-full h-12 rounded-xl border-gray-200 focus:border-[#008080] focus:ring-[#008080]/20';

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero */}
      <section className="relative pt-32 pb-20 lg:pb-24 overflow-hidden bg-gradient-to-br from-[#003366] via-[#00294d] to-[#001a33]">
        <div className="absolute inset-0 opacity-10" aria-hidden="true">
          <div
            className="absolute inset-0"
            style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '32px 32px' }}
          ></div>
        </div>
        <div className="absolute top-1/3 right-10 w-80 h-80 bg-[#008080]/20 rounded-full blur-3xl" aria-hidden="true"></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-5">
            Contact Us
          </h1>
          <p className="text-white/75 text-lg max-w-2xl">
            Have questions or interested in our services? Tell us what your practice needs and we
            will connect you with the right specialist.
          </p>
        </div>
      </section>

      {/* Info + form */}
      <section className="py-20 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            {/* Left: info */}
            <div>
              <div className="inline-flex items-center gap-2 bg-[#008080]/10 px-4 py-2 rounded-full mb-6">
                <span className="w-2 h-2 bg-[#008080] rounded-full"></span>
                <span className="text-[#008080] text-sm font-semibold">Get in Touch</span>
              </div>

              <h2 className="text-3xl sm:text-4xl font-bold text-[#003366] mb-5 leading-tight">
                Feel Free to Contact Us
              </h2>

              <p className="text-gray-600 text-lg leading-relaxed mb-10">
                With a commitment to accuracy and tailored support, we let healthcare providers
                focus on patient care while we handle the complexities of revenue management.
                Partner with us to strengthen your financial performance and gain peace of mind.
              </p>

              <div className="space-y-4">
                {contactInfo.map((item) => {
                  const inner = (
                    <>
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#003366] to-[#008080] flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                        <item.icon className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <div className="text-sm text-gray-500">{item.label}</div>
                        <div className="font-semibold text-[#003366] group-hover:text-[#008080] transition-colors">
                          {item.value}
                        </div>
                      </div>
                    </>
                  );
                  const cls =
                    'group flex items-center gap-4 p-4 bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md hover:border-[#008080]/30 transition-all duration-300';
                  return item.href ? (
                    <a key={item.label} href={item.href} className={cls}>{inner}</a>
                  ) : (
                    <div key={item.label} className={cls}>{inner}</div>
                  );
                })}
              </div>
            </div>

            {/* Right: form */}
            <div className="bg-white rounded-3xl shadow-xl border border-gray-100 p-8 md:p-10">
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Full Name *</label>
                    <Input name="name" value={formData.name} onChange={handleChange} placeholder="John Smith" required className={fieldClass} />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Email *</label>
                    <Input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="john@practice.com" required className={fieldClass} />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Phone</label>
                    <Input type="tel" name="phone" value={formData.phone} onChange={handleChange} placeholder="(555) 000-0000" className={fieldClass} />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Avg. Monthly Collection</label>
                    <Input name="monthlyCollection" value={formData.monthlyCollection} onChange={handleChange} placeholder="e.g. $50,000" className={fieldClass} />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                  <Textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us about your practice and how we can help..."
                    rows={5}
                    className="w-full rounded-xl border-gray-200 focus:border-[#008080] focus:ring-[#008080]/20 resize-none"
                  />
                </div>

                {/* SMS Consent */}
                <p className="text-xs text-gray-500 leading-relaxed">
                  By providing your phone number and clicking submit, you agree to receive SMS
                  messages from ClaimSphere RCM LLC. Message and data rates may apply. Message
                  frequency varies. Reply <strong>STOP</strong> to opt out, <strong>HELP</strong>{' '}
                  for help. View our{' '}
                  <a href="/privacy-policy" className="text-[#008080] hover:underline">Privacy Policy</a>{' '}
                  for details.
                </p>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full h-14 bg-[#50C878] hover:bg-[#45b56a] text-white font-semibold text-lg rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-[#50C878]/30 disabled:opacity-70"
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
                      Send Message
                      <Send className="w-5 h-5" />
                    </span>
                  )}
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Map */}
      <section aria-label="Our location">
        <iframe
          title={`Map to ${companyInfo.name}`}
          src={MAP_SRC}
          className="w-full h-[360px] lg:h-[420px] border-0 block"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </section>

      <Footer />
    </div>
  );
};

export default ContactPage;
