
import React, { useEffect, useRef } from 'react';

const HeroSection = () => {
  const particlesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!particlesRef.current) return;
    
    const container = particlesRef.current;
    const particleCount = 25;
    
    // Clear any existing particles
    container.innerHTML = '';
    
    for (let i = 0; i < particleCount; i++) {
      const particle = document.createElement('div');
      particle.classList.add('particle');
      
      // Randomize position, size and animation duration
      particle.style.left = `${Math.random() * 100}%`;
      particle.style.top = `${Math.random() * 100}%`;
      particle.style.width = `${Math.random() * 3 + 1}px`;
      particle.style.height = particle.style.width;
      particle.style.animationDuration = `${Math.random() * 3 + 2}s`;
      particle.style.animationDelay = `${Math.random() * 2}s`;
      
      container.appendChild(particle);
    }
  }, []);

  return (
    <section className="relative w-full h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 bg-g20-black">
        <img 
          src="/lovable-uploads/30d829cf-e25c-494c-99fe-ff712ae5a7ec.png" 
          alt="Woman in red dress with weapon" 
          className="w-full h-full object-cover object-center opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-g20-black/40 to-g20-black"></div>
        <div className="noise-overlay"></div>
      </div>

      {/* Animated particles */}
      <div ref={particlesRef} className="particles"></div>

      {/* Content */}
      <div className="container mx-auto px-4 md:px-6 relative z-10 text-center md:text-left">
        <div className="max-w-3xl fade-in-stagger">
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold font-orbitron mb-4 tracking-wider text-white">
            G20 <span className="text-g20-red">COIN</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-white/90 font-medium">
            The world's most secure meme coin. Power. Politics. Protocols.
          </p>
          <p className="text-lg text-white/80 mb-12 font-medium">
            20 Nations. 19 Captives. 1 Hope. 1 Coin.
          </p>
          <a
            href="#community"
            className="inline-block font-orbitron bg-g20-red hover:bg-g20-darkRed text-white py-3 px-8 text-lg font-bold tracking-wide transition-all duration-300 animate-pulse-red"
          >
            JOIN THE RESISTANCE
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-float">
        <div className="w-8 h-12 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1.5 h-3 bg-g20-red rounded-full mt-2 animate-float"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
