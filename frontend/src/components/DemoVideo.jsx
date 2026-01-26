import React, { useEffect, useRef, useState } from 'react';
import { Play } from 'lucide-react';

const DemoVideo = () => {
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

  return (
    <section
      ref={sectionRef}
      className="relative py-20 bg-white overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center mb-12 transition-all duration-700 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <div className="inline-flex items-center gap-2 bg-[#008080]/10 px-4 py-2 rounded-full mb-6">
            <span className="w-2 h-2 bg-[#008080] rounded-full"></span>
            <span className="text-[#008080] text-sm font-semibold">See Us In Action</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-bold text-[#003366] mb-4">
            Watch Our Demo
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Discover how ClaimSphere RCM can transform your healthcare revenue cycle management.
          </p>
        </div>

        {/* Video Container */}
        <div className={`max-w-4xl mx-auto transition-all duration-700 delay-200 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-gradient-to-br from-[#003366] to-[#008080] aspect-video">
            {/* Placeholder for video - Replace with actual video embed */}
            <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
              {/* Play Button */}
              <div className="w-20 h-20 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center mb-6 cursor-pointer hover:bg-white/30 transition-all duration-300 hover:scale-110">
                <Play className="w-10 h-10 text-white fill-white ml-1" />
              </div>
              <p className="text-white/80 text-lg">Demo Video Coming Soon</p>
              <p className="text-white/60 text-sm mt-2">Click to play when available</p>
            </div>

            {/* Decorative Elements */}
            <div className="absolute top-4 left-4 w-3 h-3 rounded-full bg-red-500"></div>
            <div className="absolute top-4 left-10 w-3 h-3 rounded-full bg-yellow-500"></div>
            <div className="absolute top-4 left-16 w-3 h-3 rounded-full bg-green-500"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DemoVideo;
