import React, { useState, useRef } from 'react';
import { 
  Play, 
  ArrowRight, 
  ArrowUpRight, 
  Camera, 
  Film, 
  Sparkles, 
  Award, 
  Calendar, 
  MapPin, 
  ExternalLink, 
  Layers, 
  ChevronRight,
  ChevronLeft,
  Star,
  Compass,
  ArrowDown,
  Maximize2
} from 'lucide-react';
import { 
  STUDIO_INFO, 
  PROJECTS, 
  BTS_ITEMS, 
  CORE_TEAM, 
  CLIENT_PARTNERS, 
  TESTIMONIALS 
} from '../data/portfolioData';
import { Marquee } from '../components/Marquee';
import { IndiaMap } from '../components/IndiaMap';
import { ClientLogo } from '../components/ClientLogo';
import { Project, BTSItem, NewsArticle } from '../types';

interface HomePageProps {
  onRouteChange: (route: string) => void;
  onSelectProject: (project: Project) => void;
  onSelectBTS: (item: BTSItem) => void;
  onSelectNews?: (article: NewsArticle) => void;
}

export const HomePage: React.FC<HomePageProps> = ({
  onRouteChange,
  onSelectProject,
  onSelectBTS,
}) => {
  const featuredProjects = PROJECTS.filter(p => p.featured);
  const sliderRef = useRef<HTMLDivElement>(null);
  const animationFrameRef = useRef<number | null>(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const isDraggingRef = useRef(false);
  const startXRef = useRef(0);
  const scrollLeftRef = useRef(0);
  const hasDraggedRef = useRef(false);

  const handleSliderScroll = () => {
    if (!sliderRef.current) return;
    const { scrollLeft, scrollWidth, clientWidth } = sliderRef.current;
    const maxScroll = scrollWidth - clientWidth;
    if (maxScroll > 0) {
      setScrollProgress(Math.min(100, Math.max(0, (scrollLeft / maxScroll) * 100)));
    }
  };

  const scrollSlider = (direction: 'left' | 'right') => {
    if (!sliderRef.current) return;
    const container = sliderRef.current;

    if (animationFrameRef.current !== null) {
      cancelAnimationFrame(animationFrameRef.current);
    }

    // Determine card stride from first element or fallback width
    const firstCard = container.querySelector<HTMLElement>('[id^="film-slide-"]');
    const stride = firstCard ? firstCard.offsetWidth + 32 : Math.round(container.clientWidth * 0.75);

    const start = container.scrollLeft;
    const maxScroll = container.scrollWidth - container.clientWidth;
    const target = direction === 'left' 
      ? Math.max(0, start - stride) 
      : Math.min(maxScroll, start + stride);

    const startTime = performance.now();
    const duration = 650; // Smooth 650ms cinematic easing

    const easeOutQuint = (x: number): number => 1 - Math.pow(1 - x, 5);

    const step = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = easeOutQuint(progress);

      container.scrollLeft = start + (target - start) * eased;

      if (progress < 1) {
        animationFrameRef.current = requestAnimationFrame(step);
      } else {
        animationFrameRef.current = null;
      }
    };

    animationFrameRef.current = requestAnimationFrame(step);
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    if (!sliderRef.current) return;
    if (animationFrameRef.current !== null) {
      cancelAnimationFrame(animationFrameRef.current);
    }
    isDraggingRef.current = true;
    hasDraggedRef.current = false;
    startXRef.current = e.pageX - sliderRef.current.offsetLeft;
    scrollLeftRef.current = sliderRef.current.scrollLeft;
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDraggingRef.current || !sliderRef.current) return;
    e.preventDefault();
    const x = e.pageX - sliderRef.current.offsetLeft;
    const walk = (x - startXRef.current) * 1.25;
    if (Math.abs(walk) > 5) {
      hasDraggedRef.current = true;
    }
    sliderRef.current.scrollLeft = scrollLeftRef.current - walk;
  };

  const handleMouseUpOrLeave = () => {
    isDraggingRef.current = false;
  };

  return (
    <div id="home-page-container" className="bg-[#0A0A0A] text-white">
      {/* 1. HERO SECTION */}
      <section 
        id="hero-section"
        className="relative min-h-[92vh] flex flex-col justify-between pt-32 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden"
      >
        {/* Cinematic Backdrop with Subtle Vignette & Glow */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-[#F5A623]/10 rounded-full blur-[140px]" />
          <div className="absolute inset-0 bg-[radial-gradient(#ffffff08_1px,transparent_1px)] [background-size:28px_28px] opacity-40" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-transparent to-[#0A0A0A]/80" />
        </div>

        {/* Top Header Tag */}
        <div className="relative z-10 max-w-7xl mx-auto w-full">
          <div className="flex items-center gap-3 mb-6">
            <span className="w-2.5 h-2.5 rounded-full bg-[#F5A623] shadow-[0_0_12px_#F5A623] animate-pulse" />
            <span className="text-xs font-mono tracking-[0.3em] text-[#F5A623] uppercase">
              STUDIO ARCHIVE &bull; MUMBAI &bull; ODISHA
            </span>
          </div>

          {/* Massive Display Brand Headline */}
          <div className="space-y-1">
            <h1 className="font-bebas text-6xl sm:text-8xl md:text-9xl lg:text-[10.5rem] tracking-tight text-white leading-[0.88] select-none">
              INFINITY LIGHT
            </h1>
            <h1 className="font-bebas text-6xl sm:text-8xl md:text-9xl lg:text-[10.5rem] tracking-tight text-[#F5A623] leading-[0.88] select-none drop-shadow-[0_0_50px_rgba(245,166,35,0.2)]">
              DRAWINGS
            </h1>
          </div>
        </div>

        {/* Golden Quote & Scroll Indicator */}
        <div className="relative z-10 max-w-7xl mx-auto w-full mt-12 pt-8 border-t border-white/10 flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div className="max-w-2xl">
            <p className="text-xs font-mono text-[#A0A0A0] tracking-[0.25em] uppercase mb-2">
              THE ARTISTIC MANIFESTO
            </p>
            <blockquote className="text-lg sm:text-xl md:text-2xl font-serif italic text-[#F5A623] leading-relaxed border-l-2 border-[#F5A623] pl-4">
              "{STUDIO_INFO.taglineQuote}"
            </blockquote>
          </div>

          <div className="flex items-center">
            <button
              onClick={() => {
                const target = document.getElementById('intro-section');
                if (target) {
                  target.scrollIntoView({ behavior: 'smooth' });
                } else {
                  window.scrollBy({ top: window.innerHeight * 0.85, behavior: 'smooth' });
                }
              }}
              className="group flex items-center gap-4 px-6 py-3.5 rounded-full border border-white/15 bg-black/50 hover:bg-[#151515] hover:border-[#F5A623]/70 transition-all duration-300 cursor-pointer shadow-xl hover:shadow-[0_0_25px_rgba(245,166,35,0.25)]"
            >
              <div className="flex flex-col text-left">
                <span className="text-xs font-mono font-bold tracking-[0.25em] text-[#CCCCCC] group-hover:text-white uppercase transition-colors">
                  SCROLL TO EXPLORE
                </span>
                <span className="text-[9px] font-mono tracking-widest text-[#777777] group-hover:text-[#F5A623] uppercase transition-colors">
                  DISCOVER THE ARCHIVE
                </span>
              </div>

              {/* Slick animated scroll mouse capsule */}
              <div className="w-5 h-8 rounded-full border border-white/30 group-hover:border-[#F5A623] flex items-start justify-center p-1 transition-colors relative">
                <div className="w-1 h-2 rounded-full bg-[#F5A623] animate-bounce shadow-[0_0_8px_#F5A623]" />
              </div>

              <div className="w-8 h-8 rounded-full bg-white/5 border border-white/10 group-hover:bg-[#F5A623] group-hover:text-black group-hover:border-[#F5A623] text-white flex items-center justify-center transition-all duration-300 transform group-hover:translate-y-0.5">
                <ArrowDown className="w-3.5 h-3.5" />
              </div>
            </button>
          </div>
        </div>
      </section>

      {/* 2. INFINITE GOLD MARQUEE TICKER */}
      <Marquee />

      {/* 3. INTRODUCTION: VISIONARY & FOUNDER STATEMENT */}
      <section id="intro-section" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-b border-white/10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Quote & Identity */}
          <div className="lg:col-span-6 space-y-6">
            <span className="text-xs font-mono text-[#F5A623] tracking-[0.3em] uppercase block">
              THE VISIONARY &bull; {STUDIO_INFO.founder.roleTag}
            </span>
            
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bebas tracking-wide text-white leading-tight">
              "{STUDIO_INFO.founderQuote}"
            </h2>

            <p className="text-base text-[#CCCCCC] leading-relaxed font-light">
              {STUDIO_INFO.founder.bio}
            </p>

            <p className="text-sm text-[#999999] leading-relaxed font-light">
              {STUDIO_INFO.founder.experienceSnippet}
            </p>

            {/* Service Pillars Badges */}
            <div className="pt-4">
              <span className="text-[11px] font-mono text-[#A0A0A0] tracking-widest uppercase block mb-3">
                CORE DISCIPLINES
              </span>
              <div className="flex flex-wrap gap-2">
                {['FEATURE FILMS', 'CORPORATE CINEMA', 'AD FILMS & TVC', 'NGO & SOCIAL', 'SHORT NARRATIVES'].map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1.5 rounded bg-white/5 border border-white/10 text-xs font-mono text-[#E0E0E0]"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Signature Block */}
            <div className="pt-6 flex items-center gap-4">
              <div className="w-12 h-0.5 bg-[#F5A623]" />
              <div>
                <span className="font-bebas text-2xl tracking-widest text-[#F5A623] block leading-none">
                  {STUDIO_INFO.founder.signature}
                </span>
                <span className="text-[10px] font-mono text-[#888888] tracking-widest uppercase">
                  CREATIVE DIRECTOR & FOUNDER
                </span>
              </div>
            </div>
          </div>

          {/* Right Image / Portrait Card with Anamorphic Badge */}
          <div className="lg:col-span-6">
            <div className="relative rounded-2xl overflow-hidden border border-white/15 bg-[#121212] group shadow-2xl">
              <img
                src={STUDIO_INFO.founder.image}
                alt={STUDIO_INFO.founder.name}
                className="w-full aspect-[4/5] object-cover object-center grayscale contrast-125 group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
              
              <div className="absolute bottom-6 left-6 right-6 p-6 rounded-xl bg-black/80 backdrop-blur-md border border-white/10 flex items-center justify-between">
                <div>
                  <div className="text-xs font-mono text-[#F5A623] tracking-widest uppercase">
                    ALUMNUS
                  </div>
                  <div className="text-sm font-medium text-white">
                    {STUDIO_INFO.founder.almaMater}
                  </div>
                </div>
                <button
                  onClick={() => onRouteChange('/about')}
                  className="px-4 py-2 rounded bg-white/10 hover:bg-[#F5A623] hover:text-black text-xs font-mono tracking-wider transition-colors cursor-pointer"
                >
                  FULL BIO &rarr;
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. PORTFOLIO HIGHLIGHTS - HORIZONTAL FILM SLIDER */}
      <section id="portfolio-highlights" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-b border-white/10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <span className="text-xs font-mono text-[#F5A623] tracking-[0.3em] uppercase block mb-2">
              FEATURED PRODUCTIONS
            </span>
            <h2 className="text-5xl sm:text-6xl md:text-7xl font-bebas tracking-wide text-white leading-none">
              RAW FRAMES - OUR PORTFOLIO
            </h2>
          </div>

          {/* Slider Navigation Controls & Link */}
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <button
                id="film-slider-prev-btn"
                onClick={() => scrollSlider('left')}
                aria-label="Previous film"
                className="w-12 h-12 rounded-full border border-white/15 bg-[#121212] hover:bg-[#F5A623] hover:text-black hover:border-[#F5A623] text-white flex items-center justify-center transition-all cursor-pointer shadow-lg active:scale-95"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button
                id="film-slider-next-btn"
                onClick={() => scrollSlider('right')}
                aria-label="Next film"
                className="w-12 h-12 rounded-full border border-white/15 bg-[#121212] hover:bg-[#F5A623] hover:text-black hover:border-[#F5A623] text-white flex items-center justify-center transition-all cursor-pointer shadow-lg active:scale-95"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>

            <button
              onClick={() => onRouteChange('/work')}
              className="hidden sm:flex items-center gap-2 text-xs font-mono text-[#F5A623] hover:text-white tracking-widest transition-colors cursor-pointer ml-3"
            >
              <span>CATALOGUE ({PROJECTS.length} FILMS)</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Film Slider (Large Format Photos & Names Only) */}
        <div
          ref={sliderRef}
          id="film-slider-track"
          onScroll={handleSliderScroll}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUpOrLeave}
          onMouseLeave={handleMouseUpOrLeave}
          className="flex gap-8 sm:gap-10 overflow-x-auto no-scrollbar pb-6 focus:outline-none cursor-grab active:cursor-grabbing select-none"
        >
          {PROJECTS.map((project) => (
            <div
              key={project.id}
              id={`film-slide-${project.id}`}
              onClick={() => {
                if (!hasDraggedRef.current) {
                  onSelectProject(project);
                }
              }}
              className="group shrink-0 w-[320px] sm:w-[480px] md:w-[620px] lg:w-[720px] xl:w-[780px] cursor-pointer"
            >
              {/* Massive Cinematic Film Photo */}
              <div className="relative aspect-[16/9] overflow-hidden rounded-2xl sm:rounded-3xl bg-[#121212] border border-white/10 group-hover:border-[#F5A623]/80 transition-all duration-500 shadow-2xl group-hover:shadow-[0_20px_60px_rgba(245,166,35,0.18)]">
                <img
                  src={project.backdropImage || project.posterImage}
                  alt={project.title}
                  draggable={false}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out opacity-90 group-hover:opacity-100"
                  loading="lazy"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-50 group-hover:opacity-20 transition-opacity duration-500" />

                {/* Subtle Hover Action Cue */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-[#F5A623] text-black flex items-center justify-center shadow-[0_0_40px_rgba(245,166,35,0.8)] transform scale-90 group-hover:scale-100 transition-transform duration-300">
                    {project.trailerVideoId || project.trailerYoutubeUrl ? (
                      <Play className="w-7 h-7 sm:w-8 sm:h-8 ml-1 fill-black" />
                    ) : (
                      <Maximize2 className="w-7 h-7 sm:w-8 sm:h-8 text-black" />
                    )}
                  </div>
                </div>
              </div>

              {/* Only Film Name (No descriptions) */}
              <div className="pt-5">
                <h3 className="font-bebas text-3xl sm:text-4xl md:text-5xl tracking-wide text-white group-hover:text-[#F5A623] transition-colors leading-none truncate">
                  {project.title}
                </h3>
              </div>
            </div>
          ))}
        </div>

        {/* Smooth Gold Indicator Bar */}
        <div className="mt-6 flex items-center gap-4">
          <div className="flex-1 h-1 bg-white/10 rounded-full overflow-hidden">
            <div 
              className="h-full bg-[#F5A623] transition-all duration-150 ease-out rounded-full shadow-[0_0_10px_#F5A623]"
              style={{ width: `${Math.max(12, scrollProgress)}%` }}
            />
          </div>
          <span className="text-[10px] font-mono text-[#888888] tracking-widest uppercase shrink-0">
            DRAG OR CLICK ARROWS TO GLIDE
          </span>
        </div>
      </section>

      {/* 6. IMPACT STATISTICS (QUANTITATIVE REPUTATION) */}
      <section id="impact-stats-section" className="py-20 bg-[#070707] border-b border-white/10 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center divide-y md:divide-y-0 md:divide-x divide-white/10">
            {STUDIO_INFO.stats.map((stat, idx) => (
              <div key={idx} className="pt-6 md:pt-0 px-4">
                <div className="font-bebas text-6xl sm:text-7xl md:text-8xl text-[#F5A623] tracking-tight leading-none mb-2">
                  {stat.value}
                </div>
                <div className="font-bebas text-lg sm:text-xl text-white tracking-wider">
                  {stat.label}
                </div>
                <div className="text-[11px] font-mono text-[#888888] tracking-widest uppercase mt-1">
                  {stat.sub}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. BEHIND THE SCENES: ASYMMETRIC ON-SET PHOTO ARCHIVE */}
      <section id="bts-section" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-b border-white/10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12 sm:mb-16">
          <div>
            <span className="text-xs font-mono text-[#F5A623] tracking-[0.3em] uppercase block mb-2">
              ON-SET ARCHIVE & PRODUCTION STILLS
            </span>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bebas tracking-wide text-white">
              BEHIND THE SCENES
            </h2>
          </div>
          <p className="text-xs sm:text-sm font-mono text-[#A0A0A0] max-w-md">
            Unfiltered captures from location scouts, camera rigs, night sets, and sound stages across India.
          </p>
        </div>

        {/* Asymmetric Dynamic Bento Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-5 sm:gap-6">
          {BTS_ITEMS.map((item, idx) => {
            // Asymmetric sizing configurations for random organic rhythm
            const layoutStyles = [
              "sm:col-span-2 lg:col-span-7 min-h-[320px] sm:min-h-[440px]", // 1. Wide hero landscape
              "sm:col-span-2 lg:col-span-5 min-h-[320px] sm:min-h-[440px]", // 2. Tall portrait lens
              "sm:col-span-1 lg:col-span-4 min-h-[280px] sm:min-h-[340px]", // 3. Medium card
              "sm:col-span-1 lg:col-span-4 min-h-[280px] sm:min-h-[340px]", // 4. Medium card
              "sm:col-span-2 lg:col-span-4 min-h-[280px] sm:min-h-[340px]", // 5. Medium card
              "sm:col-span-2 lg:col-span-12 min-h-[300px] sm:min-h-[380px]" // 6. Grand panoramic banner
            ];

            return (
              <div
                key={item.id}
                id={`bts-item-${item.id}`}
                onClick={() => onSelectBTS(item)}
                className={`group relative rounded-2xl sm:rounded-3xl overflow-hidden bg-[#111111] border border-white/10 hover:border-[#F5A623]/80 cursor-pointer shadow-2xl transition-all duration-500 flex flex-col justify-between p-5 sm:p-7 ${layoutStyles[idx % layoutStyles.length]}`}
              >
                {/* Full-bleed Background Image */}
                <img
                  src={item.image}
                  alt={item.title}
                  className="absolute inset-0 w-full h-full object-cover grayscale contrast-115 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 ease-out"
                  loading="lazy"
                />

                {/* Vignette Gradients */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-black/20 group-hover:via-black/10 transition-all duration-500" />

                {/* Top Metadata Badges */}
                <div className="relative z-10 flex items-center justify-between gap-2">
                  <span className="px-2.5 py-1 rounded-full bg-black/70 backdrop-blur-md border border-white/15 text-[10px] font-mono text-[#F5A623] tracking-widest uppercase font-semibold">
                    {item.location}
                  </span>

                  <div className="w-9 h-9 rounded-full bg-black/60 backdrop-blur-md border border-white/15 text-white group-hover:bg-[#F5A623] group-hover:text-black group-hover:border-[#F5A623] flex items-center justify-center transition-all duration-300 shadow-lg">
                    <Camera className="w-4 h-4" />
                  </div>
                </div>

                {/* Bottom Details (Title & Photographer) */}
                <div className="relative z-10 space-y-1 transform translate-y-1 group-hover:translate-y-0 transition-transform duration-300">
                  <h3 className="font-bebas text-2xl sm:text-3xl text-white group-hover:text-[#F5A623] tracking-wide leading-tight transition-colors">
                    {item.title}
                  </h3>
                  <div className="flex items-center gap-2 text-xs font-mono text-[#A0A0A0]">
                    <span>STILL: {item.photographer}</span>
                    <span>&bull;</span>
                    <span className="text-[#CCCCCC]">{item.gearNotes.split('/')[0]}</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* 10. THE COLLECTIVE - CORE TEAM */}
      <section id="team-section" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-b border-white/10">
        <div className="mb-12 sm:mb-16">
          <span className="text-xs font-mono text-[#F5A623] tracking-[0.3em] uppercase block mb-2">
            TALENT & SENSORS
          </span>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bebas tracking-wide text-white">
            THE COLLECTIVE - OUR CORE TEAM
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 sm:gap-8">
          {CORE_TEAM.map((member) => (
            <div
              key={member.id}
              id={`team-member-${member.id}`}
              className="group flex flex-col"
            >
              {/* Large Format Portrait Image */}
              <div className="relative aspect-[3/4] w-full rounded-2xl sm:rounded-3xl overflow-hidden bg-[#121212] border border-white/10 group-hover:border-[#F5A623]/80 transition-all duration-500 shadow-xl mb-4">
                <img
                  src={member.image}
                  alt={member.name}
                  style={member.imagePosition ? { objectPosition: member.imagePosition } : undefined}
                  className={`w-full h-full object-cover grayscale contrast-115 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 ease-out ${
                    member.id === 'sourav-mahapatra' ? 'object-top' : ''
                  }`}
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              {/* Only Name & Post */}
              <div className="space-y-1">
                <h3 className="font-bebas text-2xl sm:text-3xl text-white group-hover:text-[#F5A623] tracking-wide leading-none transition-colors">
                  {member.name}
                </h3>
                <p className="text-xs sm:text-sm font-mono text-[#F5A623] tracking-wider uppercase font-medium">
                  {member.title}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 11. COVERAGE MAP: DUAL HUB (MUMBAI & ODISHA) */}
      <section id="coverage-map-section" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-b border-white/10">
        <div className="bg-[#0E0E0E] rounded-2xl border border-white/15 p-5 sm:p-8 lg:p-12 relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center relative z-10">
            <div className="lg:col-span-5 space-y-6">
              <span className="text-xs font-mono text-[#F5A623] tracking-[0.3em] uppercase block">
                PRODUCTION MOBILITY
              </span>
              <h2 className="text-4xl sm:text-5xl font-bebas tracking-wide text-white leading-none">
                COVERAGE: MUMBAI & ODISHA
              </h2>
              <p className="text-sm text-[#A0A0A0] leading-relaxed font-light">
                Positioned with rapid access to Mumbai’s premier post-production and casting infrastructure, while maintaining deep local production access, tribal permits, and scenic topography in Eastern India.
              </p>

              <div className="space-y-4 pt-2">
                <div className="p-4 rounded-xl bg-black/60 border border-white/10">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1.5 mb-2">
                    <span className="text-xs font-mono font-bold text-[#F5A623] tracking-wider">
                      MUMBAI STUDIO (WESTERN HUB)
                    </span>
                    <span className="text-[11px] font-mono text-[#CCCCCC] bg-white/5 border border-white/10 px-2 py-0.5 rounded w-fit self-start sm:self-auto">
                      19.18° N, 72.82° E
                    </span>
                  </div>
                  <p className="text-xs text-[#A0A0A0] leading-relaxed">
                    Malad West &bull; Casting &bull; Anamorphic Lens Prep &bull; Theatrical Audio Mastering
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-black/60 border border-white/10">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1.5 mb-2">
                    <span className="text-xs font-mono font-bold text-[#F5A623] tracking-wider">
                      ODISHA PRODUCTION HUB (EASTERN BASE)
                    </span>
                    <span className="text-[11px] font-mono text-[#CCCCCC] bg-white/5 border border-white/10 px-2 py-0.5 rounded w-fit self-start sm:self-auto">
                      20.46° N, 85.88° E
                    </span>
                  </div>
                  <p className="text-xs text-[#A0A0A0] leading-relaxed">
                    Link Road, Kataka &bull; Indigenous Line Production &bull; Mine Scenarios &bull; Heritage TVCs
                  </p>
                </div>
              </div>
            </div>

            {/* Interactive Vector India Map in Black with Locations */}
            <div className="lg:col-span-7">
              <IndiaMap />
            </div>
          </div>
        </div>
      </section>

      {/* 12. CLIENTS & PARTNERS ("THE NETWORK - OUR CLIENTS") */}
      <section id="clients-section" className="py-20 sm:py-24 px-4 sm:px-6 lg:px-8 bg-white border-y border-gray-200">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-14 sm:mb-16">
            <span className="text-xs font-mono text-[#D98200] tracking-[0.3em] uppercase block mb-2 font-semibold">
              COLLABORATIVE TRUST
            </span>
            <h2 className="text-4xl sm:text-5xl font-bebas tracking-wide text-[#111111]">
              THE NETWORK - OUR CLIENTS
            </h2>
            <p className="text-sm font-mono text-[#666666] mt-2">
              Trusted by leading entertainment studios, multinational corporations, and global humanitarian agencies.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-5 sm:gap-6 lg:gap-8 items-center justify-items-center max-w-6xl mx-auto">
            {CLIENT_PARTNERS.map((client, index) => (
              <div
                key={client.id}
                id={`client-slot-${index + 1}`}
                title={`${client.name} — ${client.descriptor}`}
                className={`relative w-full flex items-center justify-center rounded-xl bg-[#FAFAFA] hover:bg-white border border-gray-200/80 hover:border-[#D98200]/50 shadow-[0_2px_8px_rgba(0,0,0,0.02)] hover:shadow-xl hover:shadow-black/[0.06] hover:-translate-y-1.5 group transition-all duration-300 ease-out cursor-pointer min-h-[120px] sm:min-h-[140px] overflow-hidden ${
                  client.id === 'gramvikas' ? 'p-2 sm:p-3' : client.id === 'skilledinodisha' ? 'p-3 sm:p-4' : 'p-4 sm:p-6'
                }`}
              >
                {/* Subtle top indicator highlight that reveals on hover */}
                <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#D98200] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                <ClientLogo 
                  id={client.id} 
                  name={client.name} 
                  logoImage={client.logoImage} 
                  className="w-full"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 13. TESTIMONIALS ("VOICES OF COLLABORATION") */}
      <section id="testimonials-section" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-mono text-[#F5A623] tracking-[0.3em] uppercase block mb-2">
            DIRECTOR & CLIENT ENDORSEMENTS
          </span>
          <h2 className="text-4xl sm:text-5xl font-bebas tracking-wide text-white">
            VOICES OF COLLABORATION
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((test) => (
            <div
              key={test.id}
              className="p-8 rounded-xl bg-[#111111] border border-white/10 flex flex-col justify-between relative"
            >
              <div>
                {/* 5-Star Slot Rating */}
                <div className="flex items-center gap-1 mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-4 h-4 ${
                        i < test.rating
                          ? 'fill-[#F5A623] text-[#F5A623]'
                          : 'text-white/25'
                      }`}
                    />
                  ))}
                </div>

                <blockquote className="text-sm sm:text-base text-[#CCCCCC] font-light leading-relaxed italic mb-6">
                  "{test.quote}"
                </blockquote>
              </div>

              <div className="pt-4 border-t border-white/10">
                <div className="font-bebas text-xl text-white tracking-wide">
                  {test.clientName}
                </div>
                <div className="text-xs font-mono text-[#F5A623]">
                  {test.clientTitle}
                </div>
                <div className="text-[10px] font-mono text-[#888888] uppercase mt-1">
                  {test.projectReference}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};
