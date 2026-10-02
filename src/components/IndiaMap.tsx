import React, { useState } from 'react';
import India from '@svg-maps/india';
import { MapPin, Navigation, Radio, Sparkles } from 'lucide-react';

interface LocationPoint {
  id: string;
  name: string;
  sub: string;
  role: string;
  x: number;
  y: number;
  stateId: string;
  coords: string;
  keyProjects: string[];
  isPrimary: boolean;
}

const LOCATIONS: LocationPoint[] = [
  {
    id: 'mumbai',
    name: 'MUMBAI',
    sub: 'WESTERN COMMERCIAL HUB',
    role: 'Commercial Cinema, OTT Casting, Anamorphic Prep, Dolby Atmos Mixing',
    x: 116,
    y: 418,
    stateId: 'mh',
    coords: '19.18° N, 72.82° E',
    keyProjects: ['Red Horizon', 'Aura of Himalayas Post', 'Brand Commercials'],
    isPrimary: true
  },
  {
    id: 'kataka',
    name: 'KATAKA',
    sub: 'EASTERN BASE (LINK ROAD)',
    role: 'Link Road Hub &bull; Indigenous Line Production, Heritage TVCs, Studio Floor, Script Lab',
    x: 358,
    y: 408,
    stateId: 'or',
    coords: '20.46° N, 85.88° E',
    keyProjects: ['Kaagi', 'Odisha Tourism Campaign', 'Echoes of Silence'],
    isPrimary: true
  },
  {
    id: 'koraput',
    name: 'KORAPUT & DEOMALI',
    sub: 'EXPEDITION & MINING CORRIDOR',
    role: 'Bauxite Mines, High-altitude Ridge Lines, Indigenous Tribal Permits',
    x: 304,
    y: 446,
    stateId: 'or',
    coords: '18.81° N, 82.71° E',
    keyProjects: ['Jengaburu Mine Unit', 'Tribal Documentaries'],
    isPrimary: false
  },
  {
    id: 'delhi',
    name: 'NEW DELHI',
    sub: 'REGULATORY & NFDC LIAISON',
    role: 'National Film Approvals, Archival Licensing, Ministry Permitting',
    x: 186,
    y: 211,
    stateId: 'dl',
    coords: '28.61° N, 77.20° E',
    keyProjects: ['NFDC Heritage Stills', 'Govt Doc Grants'],
    isPrimary: false
  }
];

export const IndiaMap: React.FC = () => {
  const [activeLocation, setActiveLocation] = useState<LocationPoint>(LOCATIONS[0]);
  const [hoveredState, setHoveredState] = useState<string | null>(null);

  return (
    <div className="relative w-full rounded-2xl bg-[#070707] border border-white/10 overflow-hidden p-3.5 sm:p-6 lg:p-8 flex flex-col items-center">
      {/* Subtle Radial Atmosphere & Radar Grid */}
      <div className="absolute inset-0 bg-[radial-gradient(#F5A62312_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none opacity-40" />
      <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-transparent to-black/90 pointer-events-none" />

      {/* Top Controls & Status Bar */}
      <div className="relative z-10 w-full flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4 sm:mb-6 pb-4 border-b border-white/10">
        <div className="flex items-center gap-2.5">
          <span className="relative flex h-2.5 w-2.5 sm:h-3 sm:w-3 shrink-0">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#F5A623] opacity-75" />
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 sm:h-3 sm:w-3 bg-[#F5A623]" />
          </span>
          <div>
            <div className="text-xs font-mono tracking-widest text-[#F5A623] uppercase font-bold flex items-center gap-1.5">
              <Radio className="w-3.5 h-3.5 animate-pulse" /> LIVE PRODUCTION GRID
            </div>
            <div className="text-[10px] font-mono text-[#888888] tracking-wider">
              PAN-INDIA LOGISTICAL REACH &bull; DUAL BASE
            </div>
          </div>
        </div>

        {/* Location selector pills */}
        <div className="flex items-center gap-2 overflow-x-auto pb-1 sm:pb-0">
          {LOCATIONS.filter(l => l.isPrimary).map((loc) => (
            <button
              key={loc.id}
              onClick={() => setActiveLocation(loc)}
              className={`px-3 py-1 rounded text-xs font-mono tracking-wider transition-all cursor-pointer whitespace-nowrap ${
                activeLocation.id === loc.id
                  ? 'bg-[#F5A623] text-black font-bold shadow-[0_0_15px_rgba(245,166,35,0.4)]'
                  : 'bg-white/5 text-[#A0A0A0] hover:text-white border border-white/10'
              }`}
            >
              {loc.name}
            </button>
          ))}
        </div>
      </div>

      {/* Map Display & Interactive Canvas */}
      <div className="relative z-10 w-full max-w-2xl aspect-[612/696] max-h-[520px] flex items-center justify-center my-2">
        <svg
          viewBox={India.viewBox}
          className="w-full h-full filter drop-shadow-[0_0_20px_rgba(0,0,0,0.9)] select-none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            {/* Pulsing Gradient for active corridor */}
            <linearGradient id="corridor-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#F5A623" stopOpacity="0.8" />
              <stop offset="50%" stopColor="#FFFFFF" stopOpacity="0.9" />
              <stop offset="100%" stopColor="#F5A623" stopOpacity="0.8" />
            </linearGradient>

            {/* Glowing filter for markers */}
            <filter id="glow-gold" x="-50%" y="-50%" width="200%" height="200%">
              <feGaussianBlur stdDeviation="3" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>

          {/* India States in Black / Charcoal Silhouette */}
          <g id="india-states">
            {India.locations.map((loc) => {
              const isHubState = loc.id === 'mh' || loc.id === 'or';
              const isSelectedState = activeLocation.stateId === loc.id;
              const isHovered = hoveredState === loc.id;

              return (
                <path
                  key={loc.id}
                  id={`state-${loc.id}`}
                  d={loc.path}
                  onMouseEnter={() => setHoveredState(loc.id)}
                  onMouseLeave={() => setHoveredState(null)}
                  fill={
                    isSelectedState
                      ? '#1A1408'
                      : isHubState
                      ? '#141414'
                      : isHovered
                      ? '#181818'
                      : '#0C0C0C'
                  }
                  stroke={
                    isSelectedState
                      ? '#F5A623'
                      : isHubState
                      ? 'rgba(245, 166, 35, 0.4)'
                      : 'rgba(255, 255, 255, 0.12)'
                  }
                  strokeWidth={isSelectedState ? 1.2 : isHubState ? 0.9 : 0.6}
                  strokeLinejoin="round"
                  className="transition-colors duration-300"
                >
                  <title>{loc.name}</title>
                </path>
              );
            })}
          </g>

          {/* Arched Connecting Corridor between Mumbai (116, 418) and Bhubaneswar (358, 408) */}
          <g id="production-corridor">
            {/* Arched shadow line */}
            <path
              d="M 116 418 Q 237 340 358 408"
              fill="none"
              stroke="#000000"
              strokeWidth="4"
              opacity="0.8"
            />
            {/* Golden dashed transmission path */}
            <path
              d="M 116 418 Q 237 340 358 408"
              fill="none"
              stroke="url(#corridor-gradient)"
              strokeWidth="2"
              strokeDasharray="5 4"
              className="animate-pulse"
            />
            {/* Midpoint Corridor Distance Pill */}
            <g transform="translate(237, 348)">
              <rect
                x="-58"
                y="-11"
                width="116"
                height="22"
                rx="11"
                fill="#000000"
                stroke="#F5A623"
                strokeWidth="1"
                filter="url(#glow-gold)"
              />
              <text
                x="0"
                y="4"
                textAnchor="middle"
                fill="#F5A623"
                fontSize="8"
                fontFamily="monospace"
                fontWeight="bold"
                letterSpacing="0.08em"
              >
                1,650 KM CORRIDOR
              </text>
            </g>
          </g>

          {/* Location Points & Radars */}
          <g id="map-location-pins">
            {LOCATIONS.map((loc) => {
              const isCurrent = activeLocation.id === loc.id;
              return (
                <g
                  key={loc.id}
                  id={`pin-${loc.id}`}
                  transform={`translate(${loc.x}, ${loc.y})`}
                  className="cursor-pointer"
                  onClick={() => setActiveLocation(loc)}
                >
                  {/* Radar Ripple Animation */}
                  <circle
                    r={isCurrent ? '18' : '10'}
                    fill="none"
                    stroke="#F5A623"
                    strokeWidth="1"
                    opacity={isCurrent ? '0.6' : '0.3'}
                    className="animate-ping"
                  />
                  <circle
                    r={isCurrent ? '11' : '6'}
                    fill="#F5A623"
                    fillOpacity="0.25"
                    stroke="#F5A623"
                    strokeWidth="1"
                  />
                  {/* Solid Center Pin */}
                  <circle
                    r={isCurrent ? '5' : '3.5'}
                    fill={isCurrent ? '#F5A623' : '#FFFFFF'}
                    stroke="#000000"
                    strokeWidth="1.5"
                    filter="url(#glow-gold)"
                  />

                  {/* Location Label on Map */}
                  <g transform={`translate(${loc.id === 'mumbai' ? -10 : 10}, ${loc.id === 'koraput' ? 14 : -10})`}>
                    <text
                      textAnchor={loc.id === 'mumbai' ? 'end' : 'start'}
                      fill={isCurrent ? '#F5A623' : '#FFFFFF'}
                      fontSize={loc.isPrimary ? '11' : '9'}
                      fontWeight="bold"
                      fontFamily="Bebas Neue, sans-serif"
                      letterSpacing="0.08em"
                      className="drop-shadow-[0_2px_4px_rgba(0,0,0,0.9)]"
                    >
                      {loc.name}
                    </text>
                    <text
                      y="9"
                      textAnchor={loc.id === 'mumbai' ? 'end' : 'start'}
                      fill="#888888"
                      fontSize="6.5"
                      fontFamily="monospace"
                      letterSpacing="0.05em"
                    >
                      {loc.coords}
                    </text>
                  </g>
                </g>
              );
            })}
          </g>

          {/* Compass Rose at bottom-left */}
          <g transform="translate(48, 640)" opacity="0.6">
            <circle r="16" fill="none" stroke="rgba(255,255,255,0.15)" strokeWidth="0.8" />
            <line x1="0" y1="-14" x2="0" y2="14" stroke="rgba(255,255,255,0.3)" strokeWidth="0.8" />
            <line x1="-14" y1="0" x2="14" y2="0" stroke="rgba(255,255,255,0.3)" strokeWidth="0.8" />
            <polygon points="0,-14 -3,-4 3,-4" fill="#F5A623" />
            <text x="0" y="-17" textAnchor="middle" fill="#F5A623" fontSize="8" fontFamily="monospace" fontWeight="bold">N</text>
          </g>
        </svg>
      </div>

      {/* Detail Card for Selected Location */}
      <div className="relative z-10 w-full mt-4 bg-black/95 rounded-xl border border-white/15 p-3.5 sm:p-5 flex flex-col md:flex-row md:items-center justify-between gap-3 sm:gap-4 shadow-xl">
        <div className="flex items-start gap-3 min-w-0">
          <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg bg-[#F5A623]/10 border border-[#F5A623]/30 flex items-center justify-center text-[#F5A623] shrink-0 mt-0.5">
            <MapPin className="w-4 h-4 sm:w-5 sm:h-5" />
          </div>
          <div className="min-w-0 flex-1">
            <div className="flex flex-wrap items-center gap-1.5 sm:gap-2">
              <h4 className="font-bebas text-xl sm:text-2xl text-white tracking-wide leading-none">
                {activeLocation.name}
              </h4>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#F5A623]/20 text-[#F5A623] border border-[#F5A623]/30 font-bold whitespace-nowrap">
                {activeLocation.coords}
              </span>
            </div>
            <div className="text-[10px] font-mono text-[#F5A623] tracking-wider uppercase mt-1">
              {activeLocation.sub}
            </div>
            <p className="text-xs text-[#CCCCCC] mt-1 font-light leading-relaxed break-words">
              {activeLocation.role}
            </p>
          </div>
        </div>

        <div className="flex flex-col items-start gap-1.5 border-t md:border-t-0 md:border-l border-white/10 pt-2.5 md:pt-0 md:pl-5 shrink-0">
          <span className="text-[9px] font-mono text-[#888888] tracking-widest uppercase block">
            RECENT PRODUCTION FOOTPRINT
          </span>
          <div className="flex flex-wrap gap-1.5">
            {activeLocation.keyProjects.map((proj, i) => (
              <span
                key={i}
                className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/5 border border-white/10 text-white whitespace-nowrap"
              >
                {proj}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
