
import React from 'react';
import { Twitter, Send } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-g20-black text-white">
      <div className="container mx-auto px-4 md:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-2xl font-orbitron mb-4 text-g20-red">G20 COIN</h3>
            <p className="text-white/70 mb-4">
              20 Nations. 19 Captives. 1 Hope. 1 Coin.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://x.com/g20onsol?s=21&t=bfQCrmhV29cLFss7zh1S5A" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-g20-charcoal/30 flex items-center justify-center hover:bg-g20-red transition-colors duration-300"
              >
                <Twitter size={18} />
              </a>
              <a 
                href="https://t.me/G20Coin" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-g20-charcoal/30 flex items-center justify-center hover:bg-g20-red transition-colors duration-300"
              >
                <Send size={18} />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="font-orbitron mb-4 text-white">QUICK LINKS</h4>
            <ul className="space-y-2">
              <li>
                <a href="#about" className="text-white/70 hover:text-g20-red transition-colors">About</a>
              </li>
              <li>
                <a href="#visual-story" className="text-white/70 hover:text-g20-red transition-colors">Visuals</a>
              </li>
              <li>
                <a href="#tokenomics" className="text-white/70 hover:text-g20-red transition-colors">Tokenomics</a>
              </li>
              <li>
                <a href="#roadmap" className="text-white/70 hover:text-g20-red transition-colors">Roadmap</a>
              </li>
              <li>
                <a href="#community" className="text-white/70 hover:text-g20-red transition-colors">Community</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-orbitron mb-4 text-white">LEGAL</h4>
            <p className="text-white/70 text-sm">
              This project is a parody/meme coin inspired by a fictional universe. Not affiliated with the official film or entities.
            </p>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-g20-charcoal/40 text-center text-white/60 text-sm">
          <p>© 2025 G20 Coin. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
