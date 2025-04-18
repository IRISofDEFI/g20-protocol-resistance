
import React from 'react';
import { Twitter, Send } from 'lucide-react';

const Community = () => {
  return (
    <section id="community" className="relative py-24 bg-g20-charcoal/10">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-orbitron mb-6 text-white">
            JOIN THE <span className="text-g20-red">RESISTANCE</span>
          </h2>
          <div className="w-24 h-1 bg-g20-red mx-auto mb-12"></div>
          
          <p className="text-xl md:text-2xl font-medium text-white mb-12 leading-relaxed">
            This isn't just a coin. It's a digital diplomatic insurgency. Be a part of it.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center space-y-6 sm:space-y-0 sm:space-x-6">
            <a
              href="https://x.com/g20onsol?s=21&t=bfQCrmhV29cLFss7zh1S5A"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center py-4 px-8 bg-g20-black hover:bg-g20-black/80 border border-g20-red/50 rounded-lg transition-all duration-300 group"
            >
              <Twitter size={24} className="text-g20-red mr-3 group-hover:scale-110 transition-transform duration-300" />
              <span className="font-orbitron text-white">TWITTER</span>
            </a>
            
            <a
              href="https://t.me/G20Coin"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center py-4 px-8 bg-g20-red hover:bg-g20-darkRed rounded-lg transition-all duration-300 group"
            >
              <Send size={24} className="text-white mr-3 group-hover:scale-110 transition-transform duration-300" />
              <span className="font-orbitron text-white">TELEGRAM</span>
            </a>
          </div>
        </div>
      </div>
      
      <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-g20-black to-transparent"></div>
      <div className="noise-overlay"></div>
    </section>
  );
};

export default Community;
