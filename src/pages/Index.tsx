
import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import AboutSection from '../components/AboutSection';
import Gallery from '../components/Gallery';
import Tokenomics from '../components/Tokenomics';
import Roadmap from '../components/Roadmap';
import Community from '../components/Community';
import Footer from '../components/Footer';

const Index = () => {
  useEffect(() => {
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        if (!targetId) return;
        
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
          window.scrollTo({
            top: targetElement.getBoundingClientRect().top + window.scrollY - 80,
            behavior: 'smooth'
          });
        }
      });
    });
    
    // Add scroll reveal animation
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1
    };
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-up');
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);
    
    document.querySelectorAll('section > div').forEach(section => {
      section.classList.add('opacity-0');
      observer.observe(section);
    });
    
    return () => {
      observer.disconnect();
    };
  }, []);
  
  return (
    <div className="bg-g20-black min-h-screen">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <Gallery />
      <Tokenomics />
      <Roadmap />
      <Community />
      <Footer />
    </div>
  );
};

export default Index;
