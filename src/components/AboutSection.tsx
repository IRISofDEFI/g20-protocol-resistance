
import React from 'react';

const AboutSection = () => {
  return (
    <section id="about" className="relative py-24 overflow-hidden bg-g20-charcoal/10">
      <div className="container mx-auto px-4 md:px-6">
        <div className="relative z-10 flex flex-col md:flex-row items-center">
          <div className="w-full md:w-1/2 mb-12 md:mb-0 pr-0 md:pr-12">
            <div className="relative">
              <img 
                src="/lovable-uploads/27700a7a-7cab-4f6e-a601-e2d18ee74e2f.png" 
                alt="Woman with walkie-talkie" 
                className="w-full h-auto rounded-lg shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-g20-black/60 to-transparent rounded-lg"></div>
            </div>
          </div>
          <div className="w-full md:w-1/2">
            <div className="max-w-lg">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-orbitron mb-6 text-white">
                THE <span className="text-g20-red">MISSION</span>
              </h2>
              <div className="w-20 h-1 bg-g20-red mb-8"></div>
              <p className="text-lg text-white/90 mb-8 leading-relaxed">
                Inspired by the political thriller "G20," our meme coin is a tribute to digital sovereignty, financial disruption, and blockchain power plays. We stand for a new kind of resistance—one that's on-chain.
              </p>
              <p className="text-lg text-white/90 mb-8 leading-relaxed">
                G20 Coin represents the intersection of political power and decentralized finance—where the rules are being rewritten and the establishment challenged.
              </p>
              <div className="flex space-x-4 items-center">
                <div className="w-12 h-1 bg-g20-red"></div>
                <p className="text-g20-red font-orbitron font-bold">PROTOCOL RESISTANCE</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="noise-overlay"></div>
    </section>
  );
};

export default AboutSection;
