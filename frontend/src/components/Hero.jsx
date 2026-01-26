import React, { useEffect, useRef } from 'react';
import { ArrowRight, Play } from 'lucide-react';
import { Button } from './ui/button';
import { companyInfo, stats, certifications } from '../data/mock';

const Hero = () => {
  const canvasRef = useRef(null);

  // Network constellation background effect
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let animationFrameId;
    let mouseX = 0;
    let mouseY = 0;
    let particles = [];

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const createParticles = () => {
      particles = [];
      const particleCount = Math.floor((canvas.width * canvas.height) / 15000);
      for (let i = 0; i < particleCount; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * 0.3,
          vy: (Math.random() - 0.5) * 0.3,
          radius: Math.random() * 2 + 1
        });
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach((particle, i) => {
        // Mouse influence
        const dx = mouseX - particle.x;
        const dy = mouseY - particle.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 150) {
          particle.x -= dx * 0.01;
          particle.y -= dy * 0.01;
        }

        particle.x += particle.vx;
        particle.y += particle.vy;

        if (particle.x < 0 || particle.x > canvas.width) particle.vx *= -1;
        if (particle.y < 0 || particle.y > canvas.height) particle.vy *= -1;

        // Draw particle
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(0, 128, 128, 0.4)';
        ctx.fill();

        // Draw connections
        particles.slice(i + 1).forEach((particle2) => {
          const dx = particle.x - particle2.x;
          const dy = particle.y - particle2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 120) {
            ctx.beginPath();
            ctx.moveTo(particle.x, particle.y);
            ctx.lineTo(particle2.x, particle2.y);
            ctx.strokeStyle = `rgba(0, 128, 128, ${0.15 * (1 - dist / 120)})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        });
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    const handleMouseMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    resize();
    createParticles();
    animate();

    window.addEventListener('resize', () => {
      resize();
      createParticles();
    });
    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', resize);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const scrollToContact = () => {
    document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#003366] via-[#00294d] to-[#001a33]"></div>
      
      {/* Network Canvas */}
      <canvas ref={canvasRef} className="absolute inset-0 pointer-events-none" />

      {/* Animated Circles */}
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-[#008080]/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-[#50C878]/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>

      {/* 3D Infinite Revenue Loop Animation */}
      <div className="absolute right-10 top-1/2 -translate-y-1/2 hidden xl:block">
        <div className="relative w-80 h-80">
          <div className="absolute inset-0 rounded-full border-4 border-[#008080]/30 animate-spin" style={{ animationDuration: '20s' }}></div>
          <div className="absolute inset-4 rounded-full border-4 border-[#50C878]/30 animate-spin" style={{ animationDuration: '15s', animationDirection: 'reverse' }}></div>
          <div className="absolute inset-8 rounded-full border-4 border-white/20 animate-spin" style={{ animationDuration: '10s' }}></div>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-32 h-32 rounded-full bg-gradient-to-br from-[#008080] to-[#50C878] flex items-center justify-center shadow-2xl shadow-[#008080]/50 animate-pulse">
              <div className="w-24 h-24 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                <span className="text-white font-bold text-sm text-center leading-tight">ClaimSphere<br/>RCM</span>
              </div>
            </div>
          </div>
          {/* Orbiting dots */}
          <div className="absolute inset-0 animate-spin" style={{ animationDuration: '8s' }}>
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-4 h-4 bg-[#50C878] rounded-full shadow-lg shadow-[#50C878]/50"></div>
          </div>
          <div className="absolute inset-0 animate-spin" style={{ animationDuration: '12s', animationDirection: 'reverse' }}>
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3 h-3 bg-[#008080] rounded-full shadow-lg shadow-[#008080]/50"></div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <div className="max-w-3xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-8 animate-fade-in-up">
            <span className="w-2 h-2 bg-[#50C878] rounded-full animate-pulse"></span>
            <span className="text-white/90 text-sm font-medium">Trusted by 10+ Healthcare Providers</span>
          </div>

          {/* Headline */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            Trusted Healthcare Revenue Cycle Solutions For Healthcare Providers
          </h1>

          {/* Subheadline */}
          <p className="text-lg sm:text-xl text-white/80 mb-8 leading-relaxed animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
            {companyInfo.description}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mb-12 animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
            <Button
              onClick={scrollToContact}
              className="group bg-[#50C878] hover:bg-[#45b56a] text-white font-semibold px-8 py-6 rounded-full text-lg transition-all duration-300 hover:shadow-xl hover:shadow-[#50C878]/30 hover:scale-105"
            >
              Schedule Consultation
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button
              variant="outline"
              className="group bg-transparent border-2 border-white/30 text-white hover:bg-white/10 hover:border-white/50 font-semibold px-8 py-6 rounded-full text-lg transition-all duration-300"
            >
              <Play className="mr-2 w-5 h-5" />
              Watch Demo
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 animate-fade-in-up" style={{ animationDelay: '0.8s' }}>
            {stats.map((stat, index) => (
              <div key={stat.id} className="text-center sm:text-left" style={{ animationDelay: `${0.8 + index * 0.1}s` }}>
                <div className="text-3xl sm:text-4xl font-bold text-[#50C878] mb-1">{stat.value}</div>
                <div className="text-white/70 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Trust Bar */}
      <div className="absolute bottom-0 left-0 right-0 bg-white/5 backdrop-blur-sm border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between overflow-hidden">
            <span className="text-white/60 text-sm font-medium hidden sm:block mr-8">Certifications:</span>
            <div className="flex items-center gap-8 animate-marquee">
              {[...certifications, ...certifications].map((cert, index) => (
                <div
                  key={`${cert.id}-${index}`}
                  className="flex items-center gap-2 text-white/70 whitespace-nowrap"
                >
                  <div className="w-10 h-10 rounded-lg bg-white/10 backdrop-blur-sm flex items-center justify-center text-xs font-bold text-[#008080]">
                    {cert.logo}
                  </div>
                  <span className="text-sm hidden md:inline">{cert.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
