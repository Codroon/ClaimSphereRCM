'use client';
import React, { useEffect, useRef, useState } from 'react';
import { stats } from '../data/mock';
import { useReveal } from '../lib/useReveal';

// Split a stat string like "99%", "5+" or "48hr" into a numeric target and suffix.
const parseStat = (value) => {
  const match = String(value).match(/^([\d.]+)(.*)$/);
  if (!match) return { target: 0, suffix: String(value) };
  return { target: parseFloat(match[1]), suffix: match[2] };
};

const CountUp = ({ target, suffix, active, duration = 1500 }) => {
  const [display, setDisplay] = useState(0);
  const rafRef = useRef(null);

  useEffect(() => {
    if (!active) return undefined;
    let startTime = null;
    const isInt = Number.isInteger(target);

    const tick = (timestamp) => {
      if (startTime === null) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3); // easeOutCubic
      const current = target * eased;
      setDisplay(isInt ? Math.round(current) : Math.round(current * 10) / 10);
      if (progress < 1) rafRef.current = requestAnimationFrame(tick);
    };

    rafRef.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafRef.current);
  }, [active, target, duration]);

  return (
    <span>
      {display}
      {suffix}
    </span>
  );
};

// Staggered tile layout: four columns, tiles of mixed height and tone, with
// alternating columns nudged down so the grid reads as masonry rather than a
// uniform row of boxes.
const COLUMNS = [
  { offset: false, tiles: [{ stat: 0, tone: 'light', tall: true }] },
  { offset: true, tiles: [{ stat: 1, tone: 'dark' }, { stat: 4, tone: 'light' }] },
  { offset: false, tiles: [{ stat: 2, tone: 'light', tall: true }] },
  { offset: true, tiles: [{ stat: 3, tone: 'light' }, { stat: 5, tone: 'dark' }] },
];

const Tile = ({ stat, tone, tall, active, delay }) => {
  const { target, suffix } = parseStat(stat.value);
  const dark = tone === 'dark';

  return (
    <div
      className={`rounded-2xl px-5 transition-all duration-500 hover:-translate-y-1 hover:shadow-lg ${
        tall ? 'py-16 lg:py-24' : 'py-10'
      } ${
        dark
          ? 'bg-gradient-to-br from-[#003366] to-[#00294d] text-white shadow-lg'
          : 'bg-gray-50 border border-gray-100 text-[#003366]'
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className={`text-3xl sm:text-4xl lg:text-5xl font-bold mb-2 ${dark ? 'text-white' : 'text-[#003366]'}`}>
        <CountUp target={target} suffix={suffix} active={active} />
      </div>
      <div className={`text-sm font-medium ${dark ? 'text-white/70' : 'text-gray-500'}`}>
        {stat.label}
      </div>
    </div>
  );
};

const MetricCards = () => {
  const [ref, isVisible] = useReveal(0.15);

  return (
    <section ref={ref} className="relative bg-white py-24 lg:py-28 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div
          className={`max-w-3xl mx-auto text-center mb-14 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="inline-flex items-center gap-2 bg-[#50C878]/10 px-4 py-2 rounded-full mb-6">
            <span className="w-2 h-2 bg-[#50C878] rounded-full"></span>
            <span className="text-[#2e8b57] text-sm font-semibold">Start Now</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#003366] mb-5 leading-tight">
            A Medical Billing Partner
            <span className="text-[#008080]"> Practices Rely On</span>
          </h2>

          <p className="text-gray-600 text-lg leading-relaxed">
            ClaimSphere RCM supports independent practitioners and growing healthcare organizations
            with billing built on current coding standards and disciplined patient billing. The
            result is compliance you can defend and revenue you can count on.
          </p>
        </div>

        {/* Staggered stat tiles */}
        {/* NOTE: figures come from data/mock.js and are placeholders pending
            the client's verified numbers. */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 items-start">
          {COLUMNS.map((column, ci) => (
            <div
              key={ci}
              className={`flex flex-col gap-4 sm:gap-5 transition-all duration-700 ${
                column.offset ? 'lg:mt-12' : ''
              } ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
              style={{ transitionDelay: `${120 + ci * 110}ms` }}
            >
              {column.tiles.map((tile) => (
                <Tile
                  key={tile.stat}
                  stat={stats[tile.stat]}
                  tone={tile.tone}
                  tall={tile.tall}
                  active={isVisible}
                  delay={120 + ci * 110}
                />
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MetricCards;
