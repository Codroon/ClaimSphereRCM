import React, { useEffect, useRef, useState } from 'react';
import { CheckCircle2, Target, Eye, Heart } from 'lucide-react';
import { aboutContent } from '../data/mock';

const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const cards = [
    {
      icon: Target,
      title: 'Our Mission',
      content: aboutContent.mission
    },
    {
      icon: Eye,
      title: 'Our Vision',
      content: aboutContent.vision
    },
    {
      icon: Heart,
      title: 'Our Values',
      content: aboutContent.values
    }
  ];

  return (
    <section
      id="about"
      ref={sectionRef}
      className="relative py-24 lg:py-32 bg-gradient-to-b from-gray-50 to-white overflow-hidden"
    >
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#008080]/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#003366]/5 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Side - Image */}
          <div className={`relative transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'
          }`}>
            <div className="relative">
              {/* Main Image Container */}
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <div className="aspect-[4/3] bg-gradient-to-br from-[#003366] to-[#008080] flex items-center justify-center">
                  {/* Abstract Medical Office Visualization */}
                  <div className="relative w-full h-full p-8">
                    <div className="absolute inset-8 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20"></div>
                    <div className="absolute top-12 left-12 w-24 h-24 bg-white/20 rounded-xl flex items-center justify-center">
                      <div className="w-12 h-12 bg-[#50C878] rounded-lg"></div>
                    </div>
                    <div className="absolute bottom-16 right-12 w-32 h-20 bg-white/15 rounded-xl"></div>
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 rounded-full bg-[#50C878]/30 animate-pulse"></div>
                    
                    {/* Grid Pattern */}
                    <div className="absolute inset-0 opacity-20">
                      {[...Array(5)].map((_, i) => (
                        <div key={i} className="absolute w-full h-px bg-white/30" style={{ top: `${20 + i * 15}%` }}></div>
                      ))}
                      {[...Array(5)].map((_, i) => (
                        <div key={i} className="absolute h-full w-px bg-white/30" style={{ left: `${20 + i * 15}%` }}></div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Stats Card */}
              <div className="absolute -bottom-8 -right-8 bg-white rounded-2xl shadow-xl p-6 border border-gray-100">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-full bg-[#50C878]/10 flex items-center justify-center">
                    <span className="text-2xl font-bold text-[#50C878]">{aboutContent.yearFounded}</span>
                  </div>
                  <div>
                    <div className="text-sm text-gray-500">Established</div>
                    <div className="text-lg font-semibold text-[#003366]">5+ Years Legacy</div>
                  </div>
                </div>
              </div>

              {/* Floating Badge */}
              <div className="absolute -top-4 -left-4 bg-[#003366] text-white rounded-2xl shadow-xl px-6 py-4">
                <div className="text-3xl font-bold">{aboutContent.clientsServed}</div>
                <div className="text-sm text-white/80">Clients Served</div>
              </div>
            </div>
          </div>

          {/* Right Side - Content */}
          <div className={`transition-all duration-1000 delay-300 ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'
          }`}>
            {/* Section Label */}
            <div className="inline-flex items-center gap-2 bg-[#008080]/10 px-4 py-2 rounded-full mb-6">
              <span className="w-2 h-2 bg-[#008080] rounded-full"></span>
              <span className="text-[#008080] text-sm font-semibold">Who We Are</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#003366] mb-6 leading-tight">
              Revolutionizing Healthcare
              <span className="text-[#008080]"> Revenue Management</span>
            </h2>

            <p className="text-gray-600 text-lg mb-10 leading-relaxed">
              For over three decades, ClaimSphere has been at the forefront of healthcare revenue cycle management. 
              We combine deep industry expertise with cutting-edge technology to deliver exceptional results for our partners.
            </p>

            {/* Glass Cards */}
            <div className="space-y-4">
              {cards.map((card, index) => (
                <div
                  key={card.title}
                  className={`group relative bg-white/70 backdrop-blur-lg rounded-2xl p-6 border border-gray-100 shadow-lg hover:shadow-xl transition-all duration-500 hover:-translate-y-1 ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                  }`}
                  style={{ transitionDelay: `${400 + index * 150}ms` }}
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#003366] to-[#008080] flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                      <card.icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-[#003366] mb-2">{card.title}</h3>
                      {Array.isArray(card.content) ? (
                        <ul className="space-y-2">
                          {card.content.map((item, i) => (
                            <li key={i} className="flex items-center gap-2 text-gray-600">
                              <CheckCircle2 className="w-4 h-4 text-[#50C878] flex-shrink-0" />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      ) : (
                        <p className="text-gray-600 leading-relaxed">{card.content}</p>
                      )}
                    </div>
                  </div>
                  
                  {/* Hover Glow Effect */}
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-[#008080]/0 via-[#008080]/5 to-[#50C878]/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
