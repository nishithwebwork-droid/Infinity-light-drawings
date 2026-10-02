import React, { useEffect } from 'react';
import { X, Camera, MapPin, User, Sliders } from 'lucide-react';
import { BTSItem } from '../types';

interface BTSLightboxProps {
  item: BTSItem | null;
  onClose: () => void;
}

export const BTSLightbox: React.FC<BTSLightboxProps> = ({ item, onClose }) => {
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [onClose]);

  if (!item) return null;

  return (
    <div
      id="bts-lightbox-backdrop"
      className="fixed inset-0 z-50 bg-black/95 backdrop-blur-xl flex items-center justify-center p-4 sm:p-8"
      onClick={onClose}
    >
      <div
        id="bts-lightbox-dialog"
        className="max-w-4xl w-full bg-[#0E0E0E] border border-white/20 rounded-xl overflow-hidden shadow-2xl relative"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative aspect-[16/10] sm:aspect-[16/9] w-full bg-black flex items-center justify-center">
          <img
            src={item.image}
            alt={item.title}
            className="w-full h-full object-cover"
          />

          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 rounded-full bg-black/70 hover:bg-black text-white border border-white/20 cursor-pointer"
            aria-label="Close Stills Lightbox"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-6 bg-[#111111] text-white">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-white/10 pb-4 mb-4">
            <div>
              <span className="text-[10px] font-mono text-[#F5A623] tracking-widest uppercase">
                PRODUCTION ARCHIVE &bull; {item.category.toUpperCase()}
              </span>
              <h3 className="text-2xl font-bebas tracking-wide text-white">
                {item.title}
              </h3>
            </div>
            <div className="flex items-center gap-4 text-xs font-mono text-[#A0A0A0]">
              <div className="flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-[#F5A623]" />
                <span>{item.location}</span>
              </div>
              <div className="flex items-center gap-1.5">
                <User className="w-3.5 h-3.5 text-[#F5A623]" />
                <span>{item.photographer}</span>
              </div>
            </div>
          </div>

          <p className="text-sm text-[#CCCCCC] font-light mb-4">
            {item.caption}
          </p>

          <div className="p-3 bg-black/60 rounded border border-white/10 flex items-center gap-3 text-xs font-mono text-[#F5A623]">
            <Camera className="w-4 h-4 shrink-0" />
            <span className="text-[#E0E0E0]">
              <strong className="text-[#F5A623]">GEAR SPECS:</strong> {item.gearNotes}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
