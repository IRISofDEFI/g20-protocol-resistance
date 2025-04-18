
import React, { useState } from 'react';
import ImageModal from './ImageModal';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<{
    url: string;
    caption: string;
  } | null>(null);
  
  const images = [
    {
      url: "/lovable-uploads/30d829cf-e25c-494c-99fe-ff712ae5a7ec.png",
      caption: "Leadership isn't just diplomacy. It's defense.",
    },
    {
      url: "/lovable-uploads/a6b4805f-f813-4ca4-8868-a3536979e90b.png",
      caption: "When everything breaks down, protocol steps up.",
    },
    {
      url: "/lovable-uploads/27700a7a-7cab-4f6e-a601-e2d18ee74e2f.png",
      caption: "This isn't just a meme. It's a movement.",
    },
  ];
  
  return (
    <section id="visual-story" className="relative py-24 bg-g20-black">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-orbitron mb-6 text-white">
            VISUAL <span className="text-g20-red">STORY</span>
          </h2>
          <div className="w-24 h-1 bg-g20-red mx-auto mb-8"></div>
          <p className="text-lg text-white/80 max-w-2xl mx-auto">
            The images that define our mission. A story of resistance, protocol, and power.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {images.map((image, index) => (
            <div 
              key={index}
              className="image-container bg-g20-charcoal/20 rounded-lg overflow-hidden cursor-pointer shadow-lg hover:shadow-2xl transition-all duration-300 border border-g20-charcoal/40"
              onClick={() => setSelectedImage(image)}
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <img 
                  src={image.url} 
                  alt={image.caption} 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-g20-black/70 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                  <span className="text-white font-medium">View Larger</span>
                </div>
              </div>
              <div className="p-6">
                <p className="text-white/90 text-base md:text-lg font-medium">{image.caption}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      <ImageModal 
        imageUrl={selectedImage?.url || ''} 
        caption={selectedImage?.caption || ''} 
        isOpen={!!selectedImage} 
        onClose={() => setSelectedImage(null)} 
      />
      
      <div className="noise-overlay"></div>
    </section>
  );
};

export default Gallery;
