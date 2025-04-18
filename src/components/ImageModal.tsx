
import React, { useEffect, useRef } from 'react';
import { X } from 'lucide-react';

interface ImageModalProps {
  imageUrl: string;
  caption: string;
  isOpen: boolean;
  onClose: () => void;
}

const ImageModal: React.FC<ImageModalProps> = ({ imageUrl, caption, isOpen, onClose }) => {
  const modalRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    
    const handleClickOutside = (e: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
        onClose();
      }
    };
    
    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      document.addEventListener('mousedown', handleClickOutside);
      document.body.style.overflow = 'hidden';
    }
    
    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.removeEventListener('mousedown', handleClickOutside);
      document.body.style.overflow = 'auto';
    };
  }, [isOpen, onClose]);
  
  if (!isOpen) return null;
  
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-g20-black/90 backdrop-blur-sm p-4">
      <div 
        ref={modalRef}
        className="relative max-w-4xl w-full bg-g20-black border border-g20-charcoal rounded-lg overflow-hidden"
      >
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 bg-g20-black/80 p-2 rounded-full text-white hover:text-g20-red transition-colors z-10"
        >
          <X size={24} />
        </button>
        
        <div className="flex flex-col">
          <div className="w-full h-full">
            <img 
              src={imageUrl} 
              alt={caption} 
              className="w-full h-auto object-contain"
            />
          </div>
          
          <div className="p-6">
            <p className="text-white/90 text-lg font-orbitron">{caption}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageModal;
