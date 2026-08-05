import React from 'react';
import { Star } from 'lucide-react';
import { reviewStats } from '../data/reviews';

// "powered by Google" social-proof band (mirrors the reference band after the
// Advantage section). Renders nothing until data/reviews.js has a rating.

const GoogleWordmark = () => {
  const letters = [
    ['G', '#4285F4'], ['o', '#EA4335'], ['o', '#FBBC05'],
    ['g', '#4285F4'], ['l', '#34A853'], ['e', '#EA4335'],
  ];
  return (
    <span className="font-semibold text-2xl tracking-tight" aria-label="Google">
      {letters.map(([ch, color], i) => (
        <span key={i} style={{ color }}>{ch}</span>
      ))}
    </span>
  );
};

const ReviewRating = () => {
  if (!reviewStats) return null;

  const { rating, count, platform, url } = reviewStats;
  const full = Math.floor(rating);
  const hasHalf = rating - full >= 0.5;
  const isGoogle = (platform || '').toLowerCase() === 'google';

  const body = (
    <div className="inline-flex flex-col sm:flex-row items-center gap-5 sm:gap-8 bg-white rounded-2xl border border-gray-100 shadow-sm px-8 sm:px-12 py-7">
      <div className="flex items-center gap-4">
        <span className="text-4xl font-bold text-[#003366]">{rating.toFixed(1)}</span>
        <div>
          <div className="flex items-center gap-1" aria-hidden="true">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star
                key={i}
                className={`w-6 h-6 ${
                  i < full || (i === full && hasHalf)
                    ? 'text-[#F5B72F] fill-[#F5B72F]'
                    : 'text-gray-300 fill-gray-200'
                }`}
              />
            ))}
          </div>
          <p className="text-gray-500 text-sm mt-1">
            Based on {count} {isGoogle ? '' : `${platform} `}review{count === 1 ? '' : 's'}
          </p>
        </div>
      </div>

      {isGoogle && (
        <div className="flex items-center gap-2 sm:border-l sm:border-gray-200 sm:pl-8">
          <span className="text-gray-400 text-lg">powered by</span>
          <GoogleWordmark />
        </div>
      )}
    </div>
  );

  return (
    <section className="py-14 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p className="sr-only">
          Average rating {rating} out of 5 based on {count} {platform} reviews.
        </p>
        {url ? (
          <a href={url} target="_blank" rel="noopener noreferrer" className="inline-block hover:opacity-90 transition-opacity">
            {body}
          </a>
        ) : (
          body
        )}
      </div>
    </section>
  );
};

export default ReviewRating;
