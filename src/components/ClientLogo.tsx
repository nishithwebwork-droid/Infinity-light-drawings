import React, { useState } from 'react';

interface ClientLogoProps {
  id: string;
  name: string;
  logoImage?: string;
  className?: string;
  fill?: boolean;
}

export const ClientLogo: React.FC<ClientLogoProps> = ({ id, name, logoImage, className = "h-10 w-auto", fill = false }) => {
  const [imageError, setImageError] = useState(false);

  // If a logoImage path or URL is provided and has not errored, render it directly
  if (logoImage && !imageError) {
    if (fill) {
      return (
        <div className="relative w-full max-w-[200px] h-14 sm:h-16 flex items-center justify-center p-0.5">
          <img
            src={logoImage}
            alt={`${name} Logo`}
            onError={() => setImageError(true)}
            referrerPolicy="no-referrer"
            className="w-auto h-full max-h-14 sm:max-h-16 object-contain group-hover:scale-105 transition-transform duration-300"
            loading="lazy"
          />
        </div>
      );
    }

    const isCircleOrSquare = ['sonyliv', 'nacchhatrapur', 'panchayatiraj', 'gramvikas'].includes(id);

    return (
      <div className={`relative flex items-center justify-center w-full ${id === 'clapperboard' ? 'h-full min-h-[115px] sm:min-h-[135px]' : 'h-28 sm:h-32'} ${className}`}>
        <img
          src={logoImage}
          alt={`${name} Logo`}
          onError={() => setImageError(true)}
          referrerPolicy="no-referrer"
          className={`${
            id === 'applause'
              ? 'h-28 sm:h-32 w-auto max-w-[210px] sm:max-w-[240px] scale-[1.65] sm:scale-[1.75] group-hover:scale-[1.75] sm:group-hover:scale-[1.85] origin-center filter contrast-[1.3] brightness-[0.92] mix-blend-multiply opacity-100'
              : id === 'clapperboard'
              ? 'h-28 sm:h-32 w-full max-w-[210px] sm:max-w-[240px] scale-[1.6] sm:scale-[1.75] group-hover:scale-[1.7] sm:group-hover:scale-[1.85] origin-center filter contrast-[1.35] brightness-[0.92] mix-blend-multiply opacity-100'
              : id === 'gramvikas'
              ? 'h-24 sm:h-28 w-24 sm:w-28 scale-[1.12] sm:scale-[1.2] group-hover:scale-[1.18] sm:group-hover:scale-[1.28] origin-center filter contrast-[1.1] brightness-[0.96] mix-blend-multiply opacity-100'
              : id === 'ormas'
              ? 'h-20 sm:h-24 w-auto max-w-[210px] sm:max-w-[240px] rounded-xl shadow-sm scale-[1.08] sm:scale-[1.18] group-hover:scale-[1.15] sm:group-hover:scale-[1.25] origin-center filter contrast-[1.05] brightness-[0.98] opacity-95 group-hover:opacity-100'
              : id === 'skilledinodisha'
              ? 'h-22 sm:h-26 w-22 sm:w-26 scale-[1.02] sm:scale-[1.08] group-hover:scale-[1.08] sm:group-hover:scale-[1.16] origin-center filter contrast-[1.08] brightness-[0.98] mix-blend-multiply opacity-100'
              : id === 'wcdodisha'
              ? 'h-22 sm:h-26 w-22 sm:w-26 scale-[1.1] sm:scale-[1.18] group-hover:scale-[1.16] sm:group-hover:scale-[1.26] origin-center filter contrast-[1.1] brightness-[0.98] mix-blend-multiply opacity-100'
              : id === 'fisheriesodisha'
              ? 'h-20 sm:h-24 w-auto max-w-[210px] sm:max-w-[240px] scale-[1.14] sm:scale-[1.24] group-hover:scale-[1.2] sm:group-hover:scale-[1.3] origin-center filter contrast-[1.15] brightness-[0.98] mix-blend-multiply opacity-100'
              : id === 'nacchhatrapur'
              ? 'h-24 sm:h-28 w-auto max-w-[210px] sm:max-w-[240px] scale-[1.12] sm:scale-[1.2] group-hover:scale-[1.18] sm:group-hover:scale-[1.26] origin-center filter contrast-[1.1] brightness-[0.98] mix-blend-multiply opacity-100'
              : isCircleOrSquare 
                ? id === 'sonyliv'
                  ? 'h-22 sm:h-26 w-22 sm:w-26 rounded-2xl shadow-sm opacity-95 group-hover:opacity-100 group-hover:scale-105'
                  : 'h-22 sm:h-26 w-22 sm:w-26 opacity-95 group-hover:opacity-100 group-hover:scale-105' 
                : 'max-h-20 sm:max-h-24 w-auto max-w-[220px] sm:max-w-[250px] opacity-95 group-hover:opacity-100 group-hover:scale-105'
          } object-contain transition-all duration-300`}
          loading="lazy"
        />
      </div>
    );
  }

  // Built-in Dummy Vector Logos (Fallback when image isn't loaded)
  switch (id) {
    // 1. NFDC India - Official Cinemas of India Emblem
    case 'nfdc':
      return (
        <div className="flex flex-col items-center justify-center bg-white px-4 py-2 rounded-lg shadow-sm select-none">
          <span className="text-[#1C3F85] font-black text-lg sm:text-xl leading-none tracking-tight font-sans">NFDC</span>
          <div className="w-full h-[2px] bg-black my-0.5" />
          <span className="text-black text-[8px] sm:text-[9.5px] font-mono font-bold tracking-[0.2em] uppercase">cinemas of india</span>
        </div>
      );

    // 2. Applause Entertainment - Clapperboard Starburst
    case 'applause':
      return (
        <div className={`flex items-center gap-3 ${className}`}>
          <svg viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-10 h-10 shrink-0 text-[#111111]">
            <rect x="4" y="8" width="28" height="20" rx="3" stroke="currentColor" strokeWidth="1.6" />
            <path d="M4 14 L32 14" stroke="currentColor" strokeWidth="1.6" />
            <path d="M10 8 L13 14 M18 8 L21 14 M26 8 L29 14" stroke="#F5A623" strokeWidth="1.6" strokeLinecap="round" />
            <polygon points="18,17 19.5,21 24,21 20.5,23.5 21.8,27.5 18,25 14.2,27.5 15.5,23.5 12,21 16.5,21" fill="#F5A623" />
          </svg>
          <div className="flex flex-col text-left">
            <span className="font-mono text-sm font-bold tracking-[0.2em] leading-none uppercase text-[#111111]">APPLAUSE</span>
            <span className="text-[9px] font-mono tracking-widest text-[#666666] uppercase mt-0.5">STUDIOS</span>
          </div>
        </div>
      );

    // 3. Sony LIV - Kinetic Prism Chevron
    case 'sonyliv':
      return (
        <div className={`flex items-center gap-3 ${className}`}>
          <svg viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-10 h-10 shrink-0 text-[#111111]">
            <path d="M6 6 L22 18 L6 30 Z" fill="#F5A623" fillOpacity="0.3" stroke="#F5A623" strokeWidth="1.6" strokeLinejoin="round" />
            <path d="M14 10 L28 18 L14 26 Z" fill="#111111" stroke="#111111" strokeWidth="1.6" strokeLinejoin="round" />
            <circle cx="28" cy="8" r="2.5" fill="#F5A623" />
          </svg>
          <div className="flex flex-col text-left">
            <span className="font-mono text-sm font-bold tracking-[0.25em] leading-none uppercase text-[#111111]">SONY LIV</span>
            <span className="text-[9px] font-mono tracking-widest text-[#666666] uppercase mt-0.5">ORIGINALS</span>
          </div>
        </div>
      );

    // 4. Zee5 - Orbital Double Loop
    case 'zee5':
      return (
        <div className={`flex items-center gap-2.5 ${className}`}>
          <svg viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 shrink-0 text-[#111111]">
            <circle cx="14" cy="18" r="10" stroke="currentColor" strokeWidth="1.6" />
            <circle cx="22" cy="18" r="10" stroke="#F5A623" strokeWidth="1.6" />
            <path d="M12 14 L24 22 M24 14 L12 22" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
          </svg>
          <div className="flex flex-col text-left">
            <span className="font-mono text-xs font-bold tracking-[0.25em] leading-none uppercase text-[#111111]">ZEE 5</span>
            <span className="text-[8px] font-mono tracking-widest text-[#666666] uppercase mt-0.5">NETWORK</span>
          </div>
        </div>
      );

    // 5. Gram Vikas - Sun Rising over Agricultural Terraces
    case 'gramvikas':
      return (
        <div className={`flex items-center gap-2.5 ${className}`}>
          <svg viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 shrink-0 text-[#111111]">
            <circle cx="18" cy="13" r="6" stroke="#F5A623" strokeWidth="1.6" fill="#F5A623" fillOpacity="0.2" />
            <path d="M3 26 Q18 20 33 26" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
            <path d="M5 30 Q18 25 31 30" stroke="#666666" strokeWidth="1.4" strokeLinecap="round" />
            <path d="M18 3 L18 5 M9 6 L10.5 7.5 M27 6 L25.5 7.5" stroke="#F5A623" strokeWidth="1.6" strokeLinecap="round" />
          </svg>
          <div className="flex flex-col text-left">
            <span className="font-mono text-xs font-bold tracking-[0.2em] leading-none uppercase text-[#111111]">GRAM VIKAS</span>
            <span className="text-[8px] font-mono tracking-widest text-[#666666] uppercase mt-0.5">RURAL TRUST</span>
          </div>
        </div>
      );

    // 6. ORMAS - Artisan Geometric Diamond Loom
    case 'ormas':
      return (
        <div className={`flex items-center gap-2.5 ${className}`}>
          <svg viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 shrink-0 text-[#111111]">
            <polygon points="18,4 32,18 18,32 4,18" stroke="currentColor" strokeWidth="1.6" />
            <polygon points="18,10 26,18 18,26 10,18" stroke="#F5A623" strokeWidth="1.6" fill="#F5A623" fillOpacity="0.25" />
            <circle cx="18" cy="18" r="2.5" fill="currentColor" />
          </svg>
          <div className="flex flex-col text-left">
            <span className="font-mono text-xs font-bold tracking-[0.25em] leading-none uppercase text-[#111111]">ORMAS</span>
            <span className="text-[8px] font-mono tracking-widest text-[#666666] uppercase mt-0.5">INDIGENOUS</span>
          </div>
        </div>
      );

    // 7. Mo School Abhiyan - Knowledge Crest & Torch
    case 'moschool':
      return (
        <div className={`flex items-center gap-2.5 ${className}`}>
          <svg viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 shrink-0 text-[#111111]">
            <path d="M18 4 L30 11 L18 18 L6 11 Z" stroke="#F5A623" strokeWidth="1.6" fill="#F5A623" fillOpacity="0.2" strokeLinejoin="round" />
            <path d="M10 14 L10 24 Q18 29 26 24 L26 14" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
            <circle cx="30" cy="18" r="1.5" fill="#F5A623" />
            <line x1="30" y1="18" x2="30" y2="25" stroke="#F5A623" strokeWidth="1.6" strokeLinecap="round" />
          </svg>
          <div className="flex flex-col text-left">
            <span className="font-mono text-xs font-bold tracking-[0.2em] leading-none uppercase text-[#111111]">MO SCHOOL</span>
            <span className="text-[8px] font-mono tracking-widest text-[#666666] uppercase mt-0.5">ACADEMY</span>
          </div>
        </div>
      );

    // 8. Odisha Tourism - Konark Sun Temple Wheel
    case 'odishatourism':
      return (
        <div className={`flex items-center gap-2.5 ${className}`}>
          <svg viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 shrink-0 text-[#111111]">
            <circle cx="18" cy="18" r="14" stroke="currentColor" strokeWidth="1.6" />
            <circle cx="18" cy="18" r="6" stroke="#F5A623" strokeWidth="1.6" fill="#F5A623" fillOpacity="0.25" />
            <line x1="18" y1="4" x2="18" y2="32" stroke="#F5A623" strokeWidth="1.4" />
            <line x1="4" y1="18" x2="32" y2="18" stroke="#F5A623" strokeWidth="1.4" />
            <line x1="8" y1="8" x2="28" y2="28" stroke="currentColor" strokeWidth="1.2" />
            <line x1="8" y1="28" x2="28" y2="8" stroke="currentColor" strokeWidth="1.2" />
          </svg>
          <div className="flex flex-col text-left">
            <span className="font-mono text-xs font-bold tracking-[0.2em] leading-none uppercase text-[#111111]">ODISHA</span>
            <span className="text-[8px] font-mono tracking-widest text-[#666666] uppercase mt-0.5">TOURISM</span>
          </div>
        </div>
      );

    // 9. UNICEF India - Humanitarian Global Olive Wreath
    case 'unicef':
      return (
        <div className={`flex items-center gap-2.5 ${className}`}>
          <svg viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 shrink-0 text-[#111111]">
            <circle cx="18" cy="18" r="13" stroke="currentColor" strokeWidth="1.6" />
            <ellipse cx="18" cy="18" rx="7" ry="13" stroke="#F5A623" strokeWidth="1.4" />
            <line x1="5" y1="18" x2="31" y2="18" stroke="currentColor" strokeWidth="1.2" />
            <circle cx="18" cy="14" r="3" fill="#111111" />
            <path d="M13 24 Q18 20 23 24" stroke="#F5A623" strokeWidth="1.6" strokeLinecap="round" />
          </svg>
          <div className="flex flex-col text-left">
            <span className="font-mono text-xs font-bold tracking-[0.25em] leading-none uppercase text-[#111111]">UNICEF</span>
            <span className="text-[8px] font-mono tracking-widest text-[#666666] uppercase mt-0.5">UN PARTNER</span>
          </div>
        </div>
      );

    // 10. Tata Steel - Industrial Ingot / Steel I-Beam
    case 'tatasteel':
      return (
        <div className={`flex items-center gap-2.5 ${className}`}>
          <svg viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 shrink-0 text-[#111111]">
            <polygon points="18,3 32,11 32,25 18,33 4,25 4,11" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
            <line x1="18" y1="3" x2="18" y2="33" stroke="#F5A623" strokeWidth="1.4" />
            <line x1="4" y1="11" x2="32" y2="25" stroke="#F5A623" strokeWidth="1.2" />
            <line x1="4" y1="25" x2="32" y2="11" stroke="#F5A623" strokeWidth="1.2" />
          </svg>
          <div className="flex flex-col text-left">
            <span className="font-mono text-xs font-bold tracking-[0.2em] leading-none uppercase text-[#111111]">TATA STEEL</span>
            <span className="text-[8px] font-mono tracking-widest text-[#666666] uppercase mt-0.5">INDUSTRIAL</span>
          </div>
        </div>
      );

    // 11. WaterAid India - Concentric Water Ripple & Drop
    case 'wateraid':
      return (
        <div className={`flex items-center gap-2.5 ${className}`}>
          <svg viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 shrink-0 text-[#111111]">
            <path d="M18 4 C18 4 9 16 9 22 C9 27 13 31 18 31 C23 31 27 27 27 22 C27 16 18 4 18 4 Z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" fill="#F5A623" fillOpacity="0.25" />
            <circle cx="18" cy="22" r="3.5" fill="#F5A623" />
          </svg>
          <div className="flex flex-col text-left">
            <span className="font-mono text-xs font-bold tracking-[0.2em] leading-none uppercase text-[#111111]">WATERAID</span>
            <span className="text-[8px] font-mono tracking-widest text-[#666666] uppercase mt-0.5">AQUA GLOBAL</span>
          </div>
        </div>
      );

    // 12. JSPL - Kinetic Energy Apex
    case 'jspl':
      return (
        <div className={`flex items-center gap-2.5 ${className}`}>
          <svg viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 shrink-0 text-[#111111]">
            <polygon points="12,4 26,4 18,17 28,17 10,32 16,19 8,19" fill="#F5A623" stroke="#111111" strokeWidth="1.4" strokeLinejoin="round" />
          </svg>
          <div className="flex flex-col text-left">
            <span className="font-mono text-xs font-bold tracking-[0.25em] leading-none uppercase text-[#111111]">JSPL</span>
            <span className="text-[8px] font-mono tracking-widest text-[#666666] uppercase mt-0.5">ENERGY GROUP</span>
          </div>
        </div>
      );

    // 13. Hotstar - Starburst & Arc
    case 'hotstar':
      return (
        <div className={`flex items-center gap-2.5 ${className}`}>
          <svg viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 shrink-0 text-[#111111]">
            <polygon points="18,3 22,12 32,13 24,20 26,30 18,24 10,30 12,20 4,13 14,12" stroke="currentColor" strokeWidth="1.5" fill="#F5A623" fillOpacity="0.3" />
            <circle cx="18" cy="17" r="3" fill="#F5A623" />
          </svg>
          <div className="flex flex-col text-left">
            <span className="font-mono text-xs font-bold tracking-[0.2em] leading-none uppercase text-[#111111]">HOTSTAR</span>
            <span className="text-[8px] font-mono tracking-widest text-[#666666] uppercase mt-0.5">STREAMING</span>
          </div>
        </div>
      );

    // 14. BBC Media Action - Triple Broadcast Block
    case 'bbcmedia':
      return (
        <div className={`flex items-center gap-2.5 ${className}`}>
          <svg viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 shrink-0 text-[#111111]">
            <rect x="4" y="9" width="8" height="18" rx="1.5" stroke="currentColor" strokeWidth="1.5" fill="#111111" fillOpacity="0.1" />
            <rect x="14" y="9" width="8" height="18" rx="1.5" stroke="currentColor" strokeWidth="1.5" fill="#111111" fillOpacity="0.1" />
            <rect x="24" y="9" width="8" height="18" rx="1.5" stroke="#F5A623" strokeWidth="1.5" fill="#F5A623" fillOpacity="0.4" />
          </svg>
          <div className="flex flex-col text-left">
            <span className="font-mono text-xs font-bold tracking-[0.15em] leading-none uppercase text-[#111111]">BBC MEDIA</span>
            <span className="text-[8px] font-mono tracking-widest text-[#666666] uppercase mt-0.5">ACTION</span>
          </div>
        </div>
      );

    // Fallback default minimalist dummy logo
    default:
      return (
        <div className={`flex items-center gap-2.5 ${className}`}>
          <svg viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 shrink-0 text-[#111111]">
            <rect x="6" y="6" width="24" height="24" rx="6" stroke="currentColor" strokeWidth="1.6" />
            <circle cx="18" cy="18" r="6" fill="#F5A623" fillOpacity="0.3" />
          </svg>
          <div className="flex flex-col text-left">
            <span className="font-mono text-xs font-bold tracking-[0.2em] leading-none uppercase text-[#111111]">{name}</span>
            <span className="text-[8px] font-mono tracking-widest text-[#666666] uppercase mt-0.5">CLIENT</span>
          </div>
        </div>
      );
  }
};
