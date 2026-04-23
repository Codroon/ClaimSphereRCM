import React from 'react';
import { Link } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';

const Section = ({ number, title, children }) => (
  <div className="mb-10">
    <h2 className="text-xl font-bold text-[#003366] mb-3">
      {number}. {title}
    </h2>
    <div className="text-gray-700 leading-relaxed space-y-3">{children}</div>
  </div>
);

const PrivacyPolicy = () => {
  return (
    <div className="relative">
      <Header />

      {/* Hero Banner */}
      <div className="bg-gradient-to-br from-[#003366] via-[#00294d] to-[#001a33] pt-32 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Privacy Policy &amp; SMS Terms
          </h1>
          <p className="text-white/70 text-lg">
            Effective Date: April 22, 2026
          </p>
        </div>
      </div>

      {/* Content */}
      <main className="bg-gray-50 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-3xl shadow-lg border border-gray-100 p-8 md:p-12">

            <p className="text-gray-700 leading-relaxed mb-10">
              At <strong>ClaimSphere RCM LLC</strong>, we respect your privacy. This policy explains
              how we collect and use your information.
            </p>

            <Section number="1" title="Information We Collect">
              <p>
                We collect information you provide directly to us, such as your name, email address,
                and phone number when you fill out our contact form or request medical billing services.
              </p>
            </Section>

            <Section number="2" title="How We Use Your Information">
              <p>
                We use your information to provide our services, respond to inquiries, and send
                account-related notifications.
              </p>
            </Section>

            <Section number="3" title="SMS Disclosure & Consent (Carrier Requirement)">
              <p>
                Mobile information will not be shared with third parties/affiliates for
                marketing/promotional purposes. All the above categories exclude text messaging
                originator opt-in data and consent; this information will not be shared with any
                third parties.
              </p>
            </Section>

            <Section number="4" title="SMS Terms & Conditions">
              <p>
                By providing your phone number, you consent to receive SMS messages from
                ClaimSphere RCM LLC for service updates and notifications.
              </p>
              <ul className="list-disc list-inside space-y-2 mt-3">
                <li>Message frequency varies.</li>
                <li>Message and data rates may apply.</li>
                <li><strong>Help:</strong> Reply <span className="font-mono bg-gray-100 px-1 rounded">HELP</span> for assistance.</li>
                <li><strong>Opt-Out:</strong> Reply <span className="font-mono bg-gray-100 px-1 rounded">STOP</span> to cancel at any time.</li>
                <li>Carriers are not liable for delayed or undelivered messages.</li>
              </ul>
            </Section>

            {/* Divider */}
            <div className="border-t border-gray-100 my-10" />

            <p className="text-sm text-gray-500 text-center">
              Questions about this policy?{' '}
              <a
                href="mailto:info@claimspherercm.com"
                className="text-[#008080] hover:underline font-medium"
              >
                info@claimspherercm.com
              </a>
            </p>

            <div className="mt-8 text-center">
              <Link
                to="/"
                className="inline-flex items-center gap-2 bg-[#003366] hover:bg-[#002244] text-white font-semibold px-8 py-3 rounded-full transition-all duration-300"
              >
                ← Back to Home
              </Link>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
