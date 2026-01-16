import React, { useEffect, useRef, useState } from 'react';
import { FileText, Code, TrendingUp, Users, Award, ArrowRight } from 'lucide-react';
import { services } from '../data/mock';

const iconMap = {
  FileText,
  Code,
  TrendingUp,
  Users,
  Award
};

const ServiceCard = ({ service, index, isVisible }) => {
  const [isFlipped, setIsFlipped] = useState(false);
  const Icon = iconMap[service.icon];

  return (
    <div
      className={`group perspective-1000 h-80 transition-all duration-700 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
      }`}
      style={{ transitionDelay: `${index * 100}ms` }}
      onMouseEnter={() => setIsFlipped(true)}
      onMouseLeave={() => setIsFlipped(false)}
    >
      <div
        className={`relative w-full h-full transition-transform duration-700 transform-style-preserve-3d ${
          isFlipped ? 'rotate-y-180' : ''
        }`}
      >
        {/* Front Face */}
        <div className="absolute inset-0 backface-hidden">
          <div className="h-full bg-white rounded-2xl shadow-lg border border-gray-100 p-6 flex flex-col items-center justify-center text-center hover:shadow-xl transition-shadow duration-300">
            {/* Animated Icon Container */}
            <div className="relative mb-6">
              <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-[#003366] to-[#008080] flex items-center justify-center transform group-hover:scale-110 transition-transform duration-500">
                <Icon className="w-10 h-10 text-white" />
              </div>
              {/* Pulse Ring */}
              <div className="absolute inset-0 rounded-2xl bg-[#008080]/20 animate-ping opacity-0 group-hover:opacity-75" style={{ animationDuration: '2s' }}></div>
            </div>

            <h3 className="text-xl font-bold text-[#003366] mb-3">{service.title}</h3>
            
            <div className="flex items-center gap-2 text-[#008080] font-medium text-sm">
              <span>Hover to learn more</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </div>
          </div>
        </div>

        {/* Back Face */}
        <div className="absolute inset-0 backface-hidden rotate-y-180">
          <div className="h-full bg-gradient-to-br from-[#003366] to-[#008080] rounded-2xl shadow-xl p-6 flex flex-col text-white">
            <h3 className="text-xl font-bold mb-4">{service.title}</h3>
            <p className="text-white/90 text-sm leading-relaxed mb-4 flex-grow">
              {service.description}
            </p>
            
            <div className="space-y-2 mb-4">
              {service.features.map((feature, i) => (
                <div key={i} className="flex items-center gap-2 text-sm">
                  <div className="w-1.5 h-1.5 bg-[#50C878] rounded-full"></div>
                  <span className="text-white/90">{feature}</span>
                </div>
              ))}
            </div>

            <button className="w-full py-3 bg-[#50C878] hover:bg-[#45b56a] rounded-xl font-semibold text-white transition-colors duration-300 flex items-center justify-center gap-2">
              Learn More
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

const Services = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="services"
      ref={sectionRef}
      className="relative py-24 lg:py-32 bg-gray-50 overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-0 left-0 w-full h-full" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, #008080 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }}></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className={`text-center max-w-3xl mx-auto mb-16 transition-all duration-700 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <div className="inline-flex items-center gap-2 bg-[#008080]/10 px-4 py-2 rounded-full mb-6">
            <span className="w-2 h-2 bg-[#008080] rounded-full"></span>
            <span className="text-[#008080] text-sm font-semibold">Our Services</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#003366] mb-6">
            Comprehensive RCM
            <span className="text-[#008080]"> Solutions</span>
          </h2>

          <p className="text-gray-600 text-lg leading-relaxed">
            From medical billing to credentialing, we offer end-to-end revenue cycle management 
            services designed to maximize your healthcare organization's financial performance.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {services.map((service, index) => (
            <ServiceCard
              key={service.id}
              service={service}
              index={index}
              isVisible={isVisible}
            />
          ))}
        </div>

        {/* Bottom CTA */}
        <div className={`text-center mt-16 transition-all duration-700 delay-500 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <p className="text-gray-600 mb-4">Need a custom solution?</p>
          <button
            onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="inline-flex items-center gap-2 bg-[#50C878] hover:bg-[#45b56a] text-white font-semibold px-8 py-4 rounded-full transition-all duration-300 hover:shadow-lg hover:shadow-[#50C878]/30 hover:scale-105"
          >
            Schedule a Consultation
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Services;
