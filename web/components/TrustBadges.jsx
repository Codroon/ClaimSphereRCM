import React from 'react';
import { Star } from 'lucide-react';
import { trustBadges } from '../data/trustBadges';

// Rating strip shown above the "Why ClaimSphere" section.
// Renders nothing until data/trustBadges.js has entries.
// NOTE: the values there are placeholders — see that file before launch.

const Stars = ({ rating, outOf = 5 }) => (
  <div className="flex items-center gap-0.5" aria-hidden="true">
    {Array.from({ length: outOf }).map((_, i) => (
      <Star
        key={i}
        className={`w-3.5 h-3.5 ${
          i < Math.round(rating) ? 'text-[#F5B72F] fill-[#F5B72F]' : 'text-gray-300 fill-gray-200'
        }`}
      />
    ))}
  </div>
);

// Lightweight brand marks (approximations — no official logo assets bundled).
const BrandMark = ({ brand }) => {
  if (brand === 'google') {
    const letters = [
      ['G', '#4285F4'], ['o', '#EA4335'], ['o', '#FBBC05'],
      ['g', '#4285F4'], ['l', '#34A853'], ['e', '#EA4335'],
    ];
    return (
      <span className="font-semibold text-lg tracking-tight" aria-label="Google">
        {letters.map(([ch, color], i) => (
          <span key={i} style={{ color }}>{ch}</span>
        ))}
      </span>
    );
  }
  if (brand === 'trustpilot') {
    return (
      <span className="inline-flex items-center gap-1.5" aria-label="Trustpilot">
        <Star className="w-4 h-4 text-[#00B67A] fill-[#00B67A]" />
        <span className="font-semibold text-lg text-[#003366] tracking-tight">Trustpilot</span>
      </span>
    );
  }
  // Serchen and any other platform
  return (
    <span className="font-semibold text-lg text-[#003366] tracking-tight" aria-label={brand}>
      {brand.charAt(0).toUpperCase() + brand.slice(1)}
    </span>
  );
};

const TrustBadges = () => {
  if (!trustBadges.length) return null;

  return (
    <section className="py-10 bg-gray-50 border-y border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-6 sm:gap-x-16">
          {trustBadges.map((badge) => (
            <div key={badge.name} className="flex items-center gap-3">
              <div className="flex flex-col gap-1">
                <BrandMark brand={badge.brand || badge.name.toLowerCase()} />
                <Stars rating={badge.rating} outOf={badge.outOf} />
              </div>
              <span className="text-3xl font-bold text-[#F5B72F] leading-none">
                {badge.rating.toFixed(1)}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustBadges;
