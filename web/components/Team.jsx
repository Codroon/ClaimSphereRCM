'use client';
import React, { useEffect, useRef, useState } from 'react';
import { Linkedin } from 'lucide-react';
import { team } from '../data/team';

const Team = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="leadership" ref={sectionRef} className="relative py-24 lg:py-28 bg-white overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#008080]/5 rounded-full blur-3xl"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div
          className={`text-center max-w-3xl mx-auto mb-16 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="inline-flex items-center gap-2 bg-[#008080]/10 px-4 py-2 rounded-full mb-6">
            <span className="w-2 h-2 bg-[#008080] rounded-full"></span>
            <span className="text-[#008080] text-sm font-semibold">Leadership</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#003366] mb-6">
            Meet the Team Behind
            <span className="text-[#008080]"> ClaimSphere</span>
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed">
            Experienced revenue cycle and healthcare leaders dedicated to protecting
            every dollar our clients earn.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {team.map((member, index) => (
            <div
              key={member.name}
              className={`group text-center transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="relative mx-auto w-40 h-40 sm:w-48 sm:h-48 mb-5">
                <div className="w-full h-full rounded-2xl overflow-hidden shadow-lg ring-1 ring-gray-100">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={member.image}
                    alt={member.name}
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <a
                  href={member.linkedin}
                  aria-label={`${member.name} on LinkedIn`}
                  className="absolute bottom-3 right-3 w-9 h-9 rounded-full bg-white shadow-md flex items-center justify-center text-[#003366] hover:bg-[#008080] hover:text-white transition-colors"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
              </div>
              <h3 className="text-lg font-bold text-[#003366]">{member.name}</h3>
              <p className="text-sm text-[#008080] font-medium">{member.title}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
