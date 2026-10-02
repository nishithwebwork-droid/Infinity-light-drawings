import React, { useState, useEffect, useRef } from 'react';
import { 
  X, 
  Play, 
  Pause, 
  Volume2, 
  VolumeX, 
  Award, 
  Film, 
  Camera, 
  Clock, 
  Sliders, 
  Calendar, 
  Maximize2,
  ExternalLink
} from 'lucide-react';
import { Project } from '../types';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [activeTab, setActiveTab] = useState<'video' | 'poster' | 'stills' | 'tech' | 'synopsis'>('video');
  const [activeStill, setActiveStill] = useState<string | null>(null);
  const [isFullscreenPoster, setIsFullscreenPoster] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        if (isFullscreenPoster) {
          setIsFullscreenPoster(false);
        } else {
          onClose();
        }
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose, isFullscreenPoster]);

  useEffect(() => {
    // Reset states when opening project
    setIsPlaying(false);
    const hasVideo = Boolean(project?.trailerVideoId || project?.sampleVideoUrl);
    setActiveTab(hasVideo ? 'video' : 'poster');
    setIsFullscreenPoster(false);
    if (project && project.stills && project.stills.length > 0) {
      setActiveStill(project.stills[0]);
    }
  }, [project]);

  if (!project) return null;

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  return (
    <div
      id="project-modal-backdrop"
      className="fixed inset-0 z-50 bg-black/90 backdrop-blur-xl flex items-center justify-center p-3 sm:p-6 overflow-y-auto"
      onClick={onClose}
    >
      <div
        id="project-modal-dialog"
        className="bg-[#0D0D0D] border border-white/15 rounded-xl max-w-5xl w-full overflow-hidden shadow-[0_0_80px_rgba(0,0,0,0.9)] relative text-white my-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header Bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-white/10 bg-[#111111]">
          <div className="flex items-center gap-3">
            <span className="px-2.5 py-1 text-[10px] font-mono uppercase bg-[#F5A623] text-black font-bold rounded">
              {project.categoryLabel}
            </span>
            <span className="text-xs font-mono text-[#A0A0A0] hidden sm:inline">
              RELEASE: {project.year} &bull; ASPECT: {project.aspectRatio}
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              id="close-project-modal-btn"
              onClick={onClose}
              className="p-1.5 rounded-md hover:bg-white/10 text-[#A0A0A0] hover:text-white transition-colors cursor-pointer"
              aria-label="Close Project Details"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Cinematic Media Stage */}
        <div className="relative bg-black min-h-[340px] sm:min-h-[440px] md:min-h-[500px] max-h-[64vh] aspect-video sm:aspect-[16/9] md:aspect-[21/9] w-full overflow-hidden flex items-center justify-center border-b border-white/10">
          {activeTab === 'video' ? (
            <div className="relative w-full h-full flex items-center justify-center bg-black">
              {project.trailerVideoId ? (
                isPlaying ? (
                  <iframe
                    src={`https://www.youtube.com/embed/${project.trailerVideoId}?autoplay=1&rel=0&modestbranding=1`}
                    title={`${project.title} Official Trailer`}
                    className="w-full h-full border-0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                  />
                ) : (
                  <div className="relative w-full h-full flex items-center justify-center overflow-hidden bg-black group/stage">
                    {/* Atmospheric Blurred Background (fills widescreen stage) */}
                    <img
                      src={project.backdropImage || project.posterImage}
                      alt=""
                      aria-hidden="true"
                      referrerPolicy="no-referrer"
                      className="absolute inset-0 w-full h-full object-cover blur-3xl opacity-30 scale-125 pointer-events-none"
                    />
                    
                    {/* Sharp Cover Image Sized to Fit in Placeholder */}
                    <img
                      src={project.backdropImage || project.posterImage}
                      alt={project.title}
                      referrerPolicy="no-referrer"
                      className="relative h-full w-auto max-w-full object-contain py-1 drop-shadow-[0_25px_60px_rgba(0,0,0,0.95)] z-0 transition-transform duration-500 group-hover/stage:scale-[1.01]"
                    />

                    {/* Styled Overlay Container (Matches CSS Selector 1) */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-transparent to-black/25 flex flex-col items-center justify-between p-4 sm:p-6 z-10 pointer-events-none">
                      {/* Top Bar Badges */}
                      <div className="w-full flex items-center justify-between pointer-events-auto">
                        <span className="text-[10px] sm:text-xs font-mono tracking-widest text-[#F5A623] bg-black/85 backdrop-blur-md px-3 py-1 rounded-full border border-[#F5A623]/30 font-bold uppercase shadow-lg">
                          OFFICIAL COVER &bull; {project.year}
                        </span>
                        {project.trailerYoutubeUrl && (
                          <a
                            href={project.trailerYoutubeUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-[11px] font-mono text-white/90 hover:text-[#F5A623] bg-black/80 hover:bg-black px-3 py-1 rounded-full border border-white/15 flex items-center gap-1.5 transition-colors shadow-lg cursor-pointer"
                          >
                            <span>YOUTUBE</span>
                            <ExternalLink className="w-3 h-3" />
                          </a>
                        )}
                      </div>

                      {/* Bottom Control Bar */}
                      <div className="w-full flex flex-wrap items-center justify-center gap-2.5 pointer-events-auto">
                        {project.trailerYoutubeUrl ? (
                          <button
                            onClick={() => window.open(project.trailerYoutubeUrl, '_blank', 'noopener,noreferrer')}
                            className="px-5 py-2 rounded-full bg-[#F5A623] hover:bg-[#FFAA1D] text-black text-xs font-mono font-bold tracking-wider uppercase flex items-center gap-2 shadow-[0_0_25px_rgba(245,166,35,0.7)] transition-transform hover:scale-105 active:scale-95 cursor-pointer"
                          >
                            <Play className="w-4 h-4 fill-black" />
                            <span>WATCH ON YOUTUBE</span>
                          </button>
                        ) : project.trailerVideoId && (
                          <button
                            onClick={() => setIsPlaying(true)}
                            className="px-4 py-1.5 rounded-full bg-[#F5A623] hover:bg-[#FFAA1D] text-black text-xs font-mono font-bold tracking-wider uppercase flex items-center gap-2 shadow-lg transition-transform hover:scale-105 active:scale-95 cursor-pointer"
                          >
                            <Play className="w-3.5 h-3.5 fill-black" />
                            <span>PLAY TRAILER</span>
                          </button>
                        )}
                        <button
                          onClick={() => setActiveTab('poster')}
                          className="px-3.5 py-1.5 rounded-full bg-black/85 hover:bg-black text-white/90 hover:text-white text-xs font-mono tracking-wider uppercase flex items-center gap-1.5 border border-white/20 transition-colors shadow-lg cursor-pointer"
                        >
                          <Maximize2 className="w-3 h-3" />
                          <span>FULL POSTER</span>
                        </button>
                      </div>
                    </div>
                  </div>
                )
              ) : project.sampleVideoUrl ? (
                <>
                  <video
                    ref={videoRef}
                    src={project.sampleVideoUrl}
                    poster={project.backdropImage}
                    className="w-full h-full object-cover"
                    playsInline
                    loop
                    onEnded={() => setIsPlaying(false)}
                  />
                  {/* Cinematic Letterbox Mask Indicator */}
                  <div className="absolute top-0 left-0 right-0 h-4 sm:h-6 bg-black pointer-events-none" />
                  <div className="absolute bottom-0 left-0 right-0 h-4 sm:h-6 bg-black pointer-events-none" />

                  {/* Player Overlay Controls */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 hover:opacity-100 transition-opacity flex flex-col justify-end p-6">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <button
                          id="modal-play-btn"
                          onClick={togglePlay}
                          className="w-12 h-12 rounded-full bg-[#F5A623] text-black flex items-center justify-center shadow-lg hover:bg-[#FFAA1D] transition-transform hover:scale-105 cursor-pointer"
                        >
                          {isPlaying ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5 ml-0.5 fill-black" />}
                        </button>
                        <button
                          id="modal-mute-btn"
                          onClick={toggleMute}
                          className="p-2.5 rounded-full bg-black/60 text-white hover:bg-black/80 transition-colors border border-white/20"
                        >
                          {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
                        </button>
                      </div>

                      <div className="font-mono text-xs text-[#E0E0E0] bg-black/70 px-3 py-1.5 rounded border border-white/10">
                        TC: 01:24:08:14 &bull; {project.duration}
                      </div>
                    </div>
                  </div>
                </>
              ) : (
                <div className="relative w-full h-full flex items-center justify-center overflow-hidden bg-black group/stage">
                  {/* Atmospheric Blurred Background (fills widescreen stage) */}
                  <img
                    src={project.backdropImage || project.posterImage}
                    alt=""
                    aria-hidden="true"
                    referrerPolicy="no-referrer"
                    className="absolute inset-0 w-full h-full object-cover blur-3xl opacity-35 scale-125 pointer-events-none"
                  />
                  
                  {/* Sharp Cover Image Sized to Fit in Placeholder */}
                  <img
                    src={project.backdropImage || project.posterImage}
                    alt={project.title}
                    referrerPolicy="no-referrer"
                    className="relative h-full w-auto max-w-full object-contain py-1 drop-shadow-[0_25px_60px_rgba(0,0,0,0.95)] z-0 transition-transform duration-500 group-hover/stage:scale-[1.01]"
                  />

                  {/* Clean Top & Bottom Badges, NO PLAY BUTTON */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-transparent to-black/25 flex flex-col items-center justify-between p-4 sm:p-6 z-10 pointer-events-none">
                    <div className="w-full flex items-center justify-between pointer-events-auto">
                      <span className="text-[10px] sm:text-xs font-mono tracking-widest text-[#F5A623] bg-black/85 backdrop-blur-md px-3 py-1 rounded-full border border-[#F5A623]/30 font-bold uppercase shadow-lg">
                        OFFICIAL THEATRICAL COVER &bull; {project.year}
                      </span>
                    </div>

                    <div className="w-full flex flex-wrap items-center justify-center gap-2.5 pointer-events-auto">
                      <button
                        onClick={() => setIsFullscreenPoster(true)}
                        className="px-4 py-2 rounded-full bg-[#F5A623] hover:bg-[#FFAA1D] text-black text-xs font-mono font-bold tracking-wider uppercase flex items-center gap-2 shadow-lg transition-transform hover:scale-105 active:scale-95 cursor-pointer"
                      >
                        <Maximize2 className="w-3.5 h-3.5 text-black" />
                        <span>EXPAND FULL POSTER</span>
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </div>
          ) : activeTab === 'poster' ? (
            <div className="w-full h-full relative bg-black flex items-center justify-center p-3">
              <img
                src={project.posterImage || project.backdropImage}
                alt={`${project.title} Official Theatrical Poster`}
                referrerPolicy="no-referrer"
                className="max-h-full max-w-full object-contain drop-shadow-[0_25px_60px_rgba(0,0,0,0.95)] rounded"
              />
              <div className="absolute bottom-4 right-4 z-20 flex items-center gap-2">
                <button
                  onClick={() => setIsFullscreenPoster(true)}
                  className="px-3.5 py-1.5 text-xs font-mono rounded-full bg-black/85 hover:bg-black text-white border border-white/25 flex items-center gap-1.5 transition-colors shadow-xl cursor-pointer"
                >
                  <Maximize2 className="w-3.5 h-3.5 text-[#F5A623]" />
                  <span>EXPAND LIGHTBOX</span>
                </button>
              </div>
            </div>
          ) : (
            <div className="w-full h-full relative bg-black flex items-center justify-center">
              <img
                src={activeStill || project.backdropImage}
                alt="Production Still"
                referrerPolicy="no-referrer"
                className="max-h-full max-w-full object-contain"
              />
            </div>
          )}

          {/* Quick tab switcher bar */}
          <div className="absolute top-4 left-4 z-20 flex items-center gap-2 bg-black/80 backdrop-blur-md p-1 rounded-md border border-white/15 shadow-xl">
            {(project.trailerVideoId || project.sampleVideoUrl) && (
              <button
                onClick={() => { setActiveTab('video'); setIsPlaying(false); }}
                className={`px-3 py-1 text-xs font-mono rounded transition-colors ${
                  activeTab === 'video' ? 'bg-[#F5A623] text-black font-bold' : 'text-[#A0A0A0] hover:text-white'
                }`}
              >
                TRAILER / REEL
              </button>
            )}
            <button
              onClick={() => { setActiveTab('poster'); setIsPlaying(false); }}
              className={`px-3 py-1 text-xs font-mono rounded transition-colors ${
                activeTab === 'poster' ? 'bg-[#F5A623] text-black font-bold' : 'text-[#A0A0A0] hover:text-white'
              }`}
            >
              COVER POSTER
            </button>
            <button
              onClick={() => { setActiveTab('stills'); setIsPlaying(false); }}
              className={`px-3 py-1 text-xs font-mono rounded transition-colors ${
                activeTab === 'stills' ? 'bg-[#F5A623] text-black font-bold' : 'text-[#A0A0A0] hover:text-white'
              }`}
            >
              STILLS ({project.stills.length})
            </button>
          </div>

          {project.trailerYoutubeUrl && (
            <a
              href={project.trailerYoutubeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="absolute top-4 right-4 z-20 px-3 py-1 text-xs font-mono rounded bg-red-600/90 hover:bg-red-600 text-white font-bold flex items-center gap-1.5 transition-colors border border-red-500/40 cursor-pointer shadow-lg"
              title="Watch Trailer on YouTube"
            >
              <Play className="w-3 h-3 fill-white" />
              <span>YOUTUBE</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          )}
        </div>

        {/* Stills thumbnail strip if stills tab is active */}
        {activeTab === 'stills' && project.stills.length > 0 && (
          <div className="px-6 py-3 bg-[#141414] border-b border-white/10 flex items-center gap-3 overflow-x-auto">
            {project.stills.map((still, idx) => (
              <button
                key={idx}
                onClick={() => setActiveStill(still)}
                className={`relative rounded overflow-hidden h-14 w-24 shrink-0 border-2 transition-all ${
                  activeStill === still ? 'border-[#F5A623]' : 'border-transparent opacity-60 hover:opacity-100'
                }`}
              >
                <img src={still} alt="Thumb" className="w-full h-full object-cover" />
              </button>
            ))}
          </div>
        )}

        {/* Project Content & Metadata Breakdown */}
        <div className="p-6 sm:p-8 space-y-8 max-h-[50vh] overflow-y-auto">
          {/* Main Title & Role Subtitle */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-white/10 pb-6">
            <div>
              <div className="text-xs font-mono text-[#F5A623] tracking-[0.25em] uppercase mb-1">
                {project.clientOrStudio || 'FEATURE PRODUCTION'}
              </div>
              <h3 className="text-4xl sm:text-5xl font-bebas tracking-wide text-white leading-none">
                {project.title}
              </h3>
              <p className="text-sm font-mono text-[#A0A0A0] mt-2">
                Directed by <span className="text-white font-medium">{project.director}</span> &bull; Role:{' '}
                <span className="text-[#F5A623] font-medium">{project.role}</span>
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-2">
              <span className="px-3 py-1 rounded bg-white/5 border border-white/10 text-xs font-mono text-[#A0A0A0]">
                {project.duration}
              </span>
              <span className="px-3 py-1 rounded bg-white/5 border border-white/10 text-xs font-mono text-[#A0A0A0]">
                {project.year}
              </span>
              <span className="px-3 py-1 rounded bg-white/5 border border-white/10 text-xs font-mono text-[#A0A0A0]">
                {project.aspectRatio}
              </span>

              {project.trailerYoutubeUrl && (
                <a
                  href={project.trailerYoutubeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-1 rounded bg-red-600/20 hover:bg-red-600 text-red-300 hover:text-white border border-red-500/40 text-xs font-mono font-bold flex items-center gap-1.5 transition-colors cursor-pointer"
                  title="Play Trailer in YouTube"
                >
                  <Play className="w-3 h-3 fill-current" />
                  <span>TRAILER</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              )}

              {project.imdbUrl && (
                <a
                  href={project.imdbUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-1 rounded bg-[#F5C518]/20 hover:bg-[#F5C518] text-[#F5C518] hover:text-black border border-[#F5C518]/40 text-xs font-mono font-bold flex items-center gap-1.5 transition-colors cursor-pointer"
                  title="View Title on IMDb"
                >
                  <span>IMDb {project.id === 'the-jengaburu-curse' ? '7.6' : project.id === 'zwigato' ? '6.7' : ''}</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              )}
            </div>
          </div>

          {/* Logline Callout */}
          <div className="bg-[#141414] border-l-2 border-[#F5A623] p-4 rounded-r-lg">
            <span className="text-[10px] font-mono uppercase tracking-widest text-[#F5A623] block mb-1">
              LOGLINE
            </span>
            <p className="text-sm sm:text-base text-[#E0E0E0] italic font-serif leading-relaxed">
              "{project.logline}"
            </p>
          </div>

          {/* Synopsis */}
          <div>
            <h4 className="text-xs font-mono text-[#A0A0A0] tracking-widest uppercase mb-3">
              PRODUCTION SYNOPSIS
            </h4>
            <p className="text-sm text-[#CCCCCC] leading-relaxed font-light">
              {project.synopsis}
            </p>
          </div>

          {/* Awards & Official Selections */}
          {project.awards.length > 0 && (
            <div>
              <h4 className="text-xs font-mono text-[#F5A623] tracking-widest uppercase mb-3 flex items-center gap-2">
                <Award className="w-4 h-4" />
                <span>HONORS & FESTIVAL SELECTIONS</span>
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {project.awards.map((award, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-3 p-3 rounded bg-white/[0.03] border border-white/10 text-xs text-[#E0E0E0] font-mono"
                  >
                    <span className="text-[#F5A623]">✦</span>
                    <span>{award}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Camera Rig & Technical Specifications Grid */}
          <div className="bg-[#111111] p-6 rounded-lg border border-white/10">
            <h4 className="text-xs font-mono text-[#A0A0A0] tracking-widest uppercase mb-4 flex items-center gap-2">
              <Camera className="w-4 h-4 text-[#F5A623]" />
              <span>CINEMATOGRAPHY & TECHNICAL ARCHITECTURE</span>
            </h4>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-xs font-mono">
              <div>
                <span className="text-[#666666] block mb-1">CAMERA RIG</span>
                <span className="text-white font-medium">{project.cameraRig}</span>
              </div>
              <div>
                <span className="text-[#666666] block mb-1">COLOR PROFILE</span>
                <span className="text-white font-medium">{project.logFormat}</span>
              </div>
              <div>
                <span className="text-[#666666] block mb-1">ASPECT RATIO</span>
                <span className="text-[#F5A623] font-medium">{project.aspectRatio}</span>
              </div>
              <div>
                <span className="text-[#666666] block mb-1">RUNNING TIME</span>
                <span className="text-white font-medium">{project.duration}</span>
              </div>
            </div>
          </div>

          {/* Key Production Credits */}
          {project.keyCredits && project.keyCredits.length > 0 && (
            <div>
              <h4 className="text-xs font-mono text-[#A0A0A0] tracking-widest uppercase mb-3">
                KEY PRODUCTION CREDITS
              </h4>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {project.keyCredits.map((cred, i) => (
                  <div key={i} className="p-3 bg-white/[0.02] border border-white/5 rounded">
                    <span className="text-[10px] font-mono text-[#888888] block uppercase">
                      {cred.role}
                    </span>
                    <span className="text-xs font-medium text-white block mt-0.5">
                      {cred.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Fullscreen High-Definition Poster Lightbox */}
      {isFullscreenPoster && (
        <div
          className="fixed inset-0 z-[60] bg-black/95 backdrop-blur-2xl flex items-center justify-center p-4 animate-in fade-in duration-200"
          onClick={() => setIsFullscreenPoster(false)}
        >
          <div className="relative max-h-[95vh] max-w-[95vw] flex flex-col items-center justify-center">
            <button
              onClick={() => setIsFullscreenPoster(false)}
              className="absolute -top-12 right-0 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer"
              aria-label="Close Poster Lightbox"
            >
              <X className="w-6 h-6" />
            </button>
            <img
              src={project.posterImage || project.backdropImage}
              alt={`${project.title} High-Resolution Theatrical Poster`}
              referrerPolicy="no-referrer"
              className="max-h-[90vh] max-w-[90vw] object-contain drop-shadow-[0_0_90px_rgba(0,0,0,1)] rounded-lg border border-white/10"
              onClick={(e) => e.stopPropagation()}
            />
            <div className="mt-3 text-center pointer-events-none">
              <span className="text-xs font-mono text-white/70 bg-black/80 px-3 py-1 rounded-full border border-white/10">
                {project.title} &bull; Official Theatrical Poster &bull; Press ESC to exit
              </span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
