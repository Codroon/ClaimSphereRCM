import React, { useEffect, useRef, useState } from 'react';
import { Shield, Target, Clock, Cpu, DollarSign, BarChart3, ChevronDown } from 'lucide-react';
import { whyChooseUs } from '../data/mock';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from './ui/accordion';

const iconMap = {
  Shield,
  Target,
  Clock,
  Cpu,
  DollarSign,
  BarChart3
};

const WhyChooseUs = () => {
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
      id="why-us"
      ref={sectionRef}
      className="relative py-24 lg:py-32 bg-white overflow-hidden"
    >
      {/* Background Decorations */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-[#008080]/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-[#003366]/5 rounded-full blur-3xl"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left Content */}
          <div className={`transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'
          }`}>
            <div className="inline-flex items-center gap-2 bg-[#50C878]/10 px-4 py-2 rounded-full mb-6">
              <span className="w-2 h-2 bg-[#50C878] rounded-full"></span>
              <span className="text-[#50C878] text-sm font-semibold">Why Choose Us</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#003366] mb-6 leading-tight">
              Industry-Leading 
              <span className="text-[#008080]"> Excellence</span>
            </h2>

            <p className="text-gray-600 text-lg leading-relaxed mb-8">
              ClaimSphere stands apart with our unwavering commitment to accuracy, compliance, 
              and client success. Here is what makes us the preferred choice for healthcare providers nationwide.
            </p>

            {/* Key Highlights */}
            <div className="grid grid-cols-2 gap-6 mb-8">
              <div className="bg-gradient-to-br from-[#003366] to-[#00294d] rounded-2xl p-6 text-white">
                <div className="text-4xl font-bold text-[#50C878] mb-2">99%</div>
                <div className="text-white/80">First-Pass Claim Acceptance Rate</div>
              </div>
              <div className="bg-gradient-to-br from-[#008080] to-[#006666] rounded-2xl p-6 text-white">
                <div className="text-4xl font-bold text-white mb-2">7</div>
                <div className="text-white/80">Days Average in AR</div>
              </div>
            </div>
          </div>

          {/* Right - Accordion */}
          <div className={`transition-all duration-700 delay-300 ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'
          }`}>
            <Accordion type="single" collapsible className="space-y-4">
              {whyChooseUs.map((item, index) => {
                const Icon = iconMap[item.icon];
                return (
                  <AccordionItem
                    key={item.id}
                    value={`item-${item.id}`}
                    className={`group bg-white/70 backdrop-blur-lg rounded-2xl border border-gray-100 shadow-md hover:shadow-lg transition-all duration-500 overflow-hidden ${
                      isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                    }`}
                    style={{ transitionDelay: `${300 + index * 100}ms` }}
                  >
                    <AccordionTrigger className="px-6 py-5 hover:no-underline [&[data-state=open]>div>.icon-container]:bg-[#50C878] [&[data-state=open]>div>.icon-container]:scale-110">
                      <div className="flex items-center gap-4">
                        <div className="icon-container w-12 h-12 rounded-xl bg-gradient-to-br from-[#003366] to-[#008080] flex items-center justify-center transition-all duration-300">
                          <Icon className="w-6 h-6 text-white" />
                        </div>
                        <span className="text-lg font-semibold text-[#003366] text-left">{item.title}</span>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="px-6 pb-5">
                      <div className="pl-16 text-gray-600 leading-relaxed">
                        {item.description}
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                );
              })}
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
