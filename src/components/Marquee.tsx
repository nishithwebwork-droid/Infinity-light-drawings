import React from 'react';
import { Sparkles } from 'lucide-react';

interface MarqueeProps {
  items?: string[];
  secondaryRow?: boolean;
}

export const Marquee: React.FC<MarqueeProps> = ({ 
  items = [
    'FEATURE FILMS',
    'DOCUMENTARIES',
    'COMMERCIALS',
    'AD FILMS',
    'CINEMATIC DEPTH',
    'AWARD WINNING'
  ],
  secondaryRow = true
}) => {
  const repeatedItems = [...items, ...items, ...items, ...items];
  const secondaryItems = [
    'ARRI ALEXA LF',
    'RED MONSTRO 8K',
    'COOKE ANAMORPHIC',
    'DOLBY ATMOS',
    'DAVINCI RESOLVE ACES',
    'TIFF & BUSAN SELECTIONS'
  ];
  const repeatedSecondary = [...secondaryItems, ...secondaryItems, ...secondaryItems, ...secondaryItems];

  return (
    <div className="relative overflow-hidden bg-[#F5A623] py-12 sm:py-14 md:py-16 lg:py-20 select-none border-y-4 border-black/15 shadow-[0_0_70px_rgba(245,166,35,0.35)]">
      {/* Primary Amber Row */}
      <div className="flex whitespace-nowrap animate-marquee" style={{ animationDuration: '60s' }}>
        {repeatedItems.map((text, idx) => (
          <div key={`primary-${idx}`} className="flex items-center mx-10 sm:mx-16">
            <span className="font-bebas text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl text-black tracking-widest font-black uppercase drop-shadow-sm leading-none">
              {text}
            </span>
            <span className="ml-12 sm:ml-16 text-black text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-serif">✦</span>
          </div>
        ))}
      </div>

      {secondaryRow && (
        <div className="mt-6 sm:mt-8 flex whitespace-nowrap opacity-85 font-mono text-sm sm:text-base md:text-lg tracking-[0.4em] text-black font-bold uppercase">
          <div className="flex animate-marquee" style={{ animationDirection: 'reverse', animationDuration: '70s' }}>
            {repeatedSecondary.map((text, idx) => (
              <div key={`secondary-${idx}`} className="flex items-center mx-12 sm:mx-16">
                <span>{text}</span>
                <span className="ml-12 sm:ml-16 opacity-60 text-lg sm:text-xl">&bull;</span>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
