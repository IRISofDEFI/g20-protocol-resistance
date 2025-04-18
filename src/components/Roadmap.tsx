
import React from 'react';

const Roadmap = () => {
  const phases = [
    {
      id: "Q2",
      name: "STEALTH LAUNCH",
      details: "Covert deployment, strategic partnerships, initial community formation."
    },
    {
      id: "Q3",
      name: "MEMETIC EXPANSION",
      details: "Viral marketing campaigns, community growth, market infiltration."
    },
    {
      id: "Q4",
      name: "DEX DOMINATION",
      details: "Increased liquidity, multiple exchange listings, market presence."
    },
    {
      id: "Q1",
      name: "PROTOCOL PROTOCOL PROTOCOL",
      details: "Governance implementation, utility expansion, ecosystem development."
    }
  ];

  return (
    <section id="roadmap" className="relative py-24 bg-g20-black">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-orbitron mb-6 text-white">
            MISSION <span className="text-g20-red">ROADMAP</span>
          </h2>
          <div className="w-24 h-1 bg-g20-red mx-auto mb-8"></div>
          <p className="text-lg text-white/80 max-w-2xl mx-auto">
            Our strategic plan for protocol resistance and market dominance.
          </p>
        </div>
        
        {/* Mobile Roadmap (Vertical) */}
        <div className="md:hidden space-y-8">
          {phases.map((phase, index) => (
            <div key={index} className="relative pl-8">
              <div className="absolute left-0 top-0 w-4 h-4 rounded-full bg-g20-red"></div>
              <div className="absolute left-2 top-4 w-0.5 h-full bg-g20-red/30"></div>
              <div className="bg-g20-charcoal/20 rounded-lg p-6 border border-g20-charcoal/40">
                <div className="flex items-center mb-3">
                  <span className="text-g20-red font-orbitron font-bold mr-3">{phase.id}</span>
                  <h3 className="font-orbitron text-white text-lg">{phase.name}</h3>
                </div>
                <p className="text-white/80">{phase.details}</p>
              </div>
            </div>
          ))}
        </div>
        
        {/* Desktop Roadmap (Horizontal) */}
        <div className="hidden md:block timeline-container">
          <div className="grid grid-cols-4 gap-6">
            {phases.map((phase, index) => (
              <div key={index} className="timeline-point flex flex-col items-center">
                <div className="order-2 bg-g20-charcoal/20 rounded-lg p-6 mt-6 border border-g20-charcoal/40 hover:border-g20-red/40 transition-all duration-300 h-full w-full">
                  <div className="flex items-center mb-3">
                    <span className="text-g20-red font-orbitron font-bold mr-3">{phase.id}</span>
                    <h3 className="font-orbitron text-white text-lg">{phase.name}</h3>
                  </div>
                  <p className="text-white/80">{phase.details}</p>
                </div>
                <div className="order-1 w-6 h-6 rounded-full bg-g20-red flex items-center justify-center">
                  <div className="w-3 h-3 rounded-full bg-white"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      <div className="noise-overlay"></div>
    </section>
  );
};

export default Roadmap;
