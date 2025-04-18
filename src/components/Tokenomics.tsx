
import React from 'react';
import { Lock } from 'lucide-react';

const Tokenomics = () => {
  return (
    <section id="tokenomics" className="relative py-24 bg-g20-charcoal/10 clip-path-slant">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-orbitron mb-6 text-white">
            TOKENOMICS: <span className="text-g20-red">COMING SOON</span>
          </h2>
          <div className="w-24 h-1 bg-g20-red mx-auto mb-8"></div>
          <p className="text-lg text-white/80 max-w-2xl mx-auto">
            The economic structure of resistance is in development. Stay tuned for details on supply, distribution, and utility.
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto">
          <div className="p-8 bg-g20-black/60 backdrop-blur-sm rounded-lg border border-g20-charcoal/40 shadow-xl">
            <h3 className="text-xl font-orbitron mb-6 text-white text-center">CONTRACT ADDRESS</h3>
            
            <div className="relative">
              <div className="flex items-center justify-between p-4 bg-g20-charcoal/30 rounded-lg border border-g20-charcoal/60">
                <div className="flex items-center space-x-2">
                  <Lock size={20} className="text-g20-red" />
                  <span className="text-white/60 font-mono">CA: COMING SOON</span>
                </div>
                <button className="px-4 py-2 bg-g20-charcoal/60 rounded font-orbitron text-white/60 text-sm cursor-not-allowed">
                  COPY
                </button>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
              <div className="p-4 bg-g20-charcoal/20 rounded-lg border border-g20-charcoal/40">
                <h4 className="font-orbitron text-white mb-2">TOTAL SUPPLY</h4>
                <p className="text-white/60">Classified</p>
              </div>
              <div className="p-4 bg-g20-charcoal/20 rounded-lg border border-g20-charcoal/40">
                <h4 className="font-orbitron text-white mb-2">LIQUIDITY</h4>
                <p className="text-white/60">Secured</p>
              </div>
              <div className="p-4 bg-g20-charcoal/20 rounded-lg border border-g20-charcoal/40">
                <h4 className="font-orbitron text-white mb-2">TAX</h4>
                <p className="text-white/60">Minimal</p>
              </div>
              <div className="p-4 bg-g20-charcoal/20 rounded-lg border border-g20-charcoal/40">
                <h4 className="font-orbitron text-white mb-2">LAUNCH</h4>
                <p className="text-white/60">Imminent</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="noise-overlay"></div>
    </section>
  );
};

export default Tokenomics;
