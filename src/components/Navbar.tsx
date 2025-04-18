
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-g20-black/95 backdrop-blur-md py-2 shadow-lg' 
          : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center">
          <h1 className="text-xl md:text-2xl font-bold font-orbitron text-g20-red tracking-wider">G20 COIN</h1>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8">
          <a href="#about" className="font-orbitron text-sm tracking-wider hover:text-g20-red transition-colors">ABOUT</a>
          <a href="#visual-story" className="font-orbitron text-sm tracking-wider hover:text-g20-red transition-colors">VISUALS</a>
          <a href="#tokenomics" className="font-orbitron text-sm tracking-wider hover:text-g20-red transition-colors">TOKENOMICS</a>
          <a href="#roadmap" className="font-orbitron text-sm tracking-wider hover:text-g20-red transition-colors">ROADMAP</a>
          <a href="#community" className="font-orbitron text-sm tracking-wider hover:text-g20-red transition-colors">COMMUNITY</a>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-white focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-g20-black/95 backdrop-blur-md px-4 py-4">
          <div className="flex flex-col space-y-4">
            <a 
              href="#about" 
              className="font-orbitron text-sm tracking-wider hover:text-g20-red transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              ABOUT
            </a>
            <a 
              href="#visual-story" 
              className="font-orbitron text-sm tracking-wider hover:text-g20-red transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              VISUALS
            </a>
            <a 
              href="#tokenomics" 
              className="font-orbitron text-sm tracking-wider hover:text-g20-red transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              TOKENOMICS
            </a>
            <a 
              href="#roadmap" 
              className="font-orbitron text-sm tracking-wider hover:text-g20-red transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              ROADMAP
            </a>
            <a 
              href="#community" 
              className="font-orbitron text-sm tracking-wider hover:text-g20-red transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              COMMUNITY
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
