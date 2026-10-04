import React, { useState, useMemo } from 'react';
import { 
  Play, 
  Award, 
  ArrowUpRight,
  Film,
  Camera,
  Maximize2,
  FolderArchive,
  ExternalLink,
  HardDrive,
  Link as LinkIcon,
  Check,
  Edit3
} from 'lucide-react';
import { PROJECTS, AD_FILM_ARCHIVES } from '../data/portfolioData';
import { Project, AdFilmDriveArchive } from '../types';

interface WorkPageProps {
  onSelectProject: (project: Project) => void;
  onInitiateFilm: () => void;
}

export const WorkPage: React.FC<WorkPageProps> = ({ onSelectProject, onInitiateFilm }) => {
  // Ad Films & Corporate Archives Drive links state (persisted in localStorage for convenience)
  const [driveLinks, setDriveLinks] = useState<Record<string, string>>(() => {
    try {
      const saved = localStorage.getItem('ild_ad_film_drive_links');
      if (saved) return JSON.parse(saved);
    } catch {
      // fallback
    }
    return {};
  });

  const [editingDriveId, setEditingDriveId] = useState<string | null>(null);
  const [tempDriveUrl, setTempDriveUrl] = useState<string>('');
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const handleSaveDriveLink = (id: string) => {
    const updated = { ...driveLinks, [id]: tempDriveUrl.trim() };
    setDriveLinks(updated);
    try {
      localStorage.setItem('ild_ad_film_drive_links', JSON.stringify(updated));
    } catch {
      // localStorage fallback
    }
    setEditingDriveId(null);
    setTempDriveUrl('');
  };

  const handleStartEditLink = (id: string, currentLink: string) => {
    setEditingDriveId(id);
    setTempDriveUrl(currentLink || driveLinks[id] || '');
  };

  const filteredProjects = useMemo(() => {
    let result = [...PROJECTS];

    // Filmography sequence: Marquee titles (#1-#3), Last Drop (#4), Baghuni (#5), Trapped (#6), Dustbin (#7)
    const MARQUEE_PRIORITY: Record<string, number> = {
      'the-jengaburu-curse': 1,
      'zwigato': 2,
      'nanda-master': 3,
      'gram-vikas-springs': 4,
      'odisha-tourism-tvc': 5,
      'tata-steel-resilience': 6,
      'kaagi-last-drop': 7
    };

    result.sort((a, b) => {
      const pA = MARQUEE_PRIORITY[a.id] || 999;
      const pB = MARQUEE_PRIORITY[b.id] || 999;
      if (pA !== pB) return pA - pB;
      return parseInt(b.year) - parseInt(a.year);
    });

    return result;
  }, []);

  return (
    <div id="work-page" className="min-h-screen bg-[#0A0A0A] text-white pt-28 pb-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Page Header */}
        <div className="border-b border-white/10 pb-12 mb-12">
          <span className="text-xs font-mono text-[#F5A623] tracking-[0.3em] uppercase block mb-3">
            COMPLETE FILMOGRAPHY
          </span>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <h1 className="text-5xl sm:text-7xl font-bebas tracking-wide text-white leading-none">
                OUR WORK.
              </h1>
              <p className="text-sm sm:text-base text-[#A0A0A0] max-w-xl font-light mt-4">
                Explore our catalog of feature narratives, investigative documentaries, broadcast commercials, and social impact films produced across India and global festival circuits.
              </p>
            </div>

            <div className="flex items-center gap-4 text-xs font-mono">
              <div className="px-4 py-2 rounded bg-[#111111] border border-white/10 text-[#E0E0E0]">
                TOTAL REEL: <span className="text-[#F5A623] font-bold">{PROJECTS.length} PRODUCTIONS</span>
              </div>
              <button
                onClick={onInitiateFilm}
                className="px-4 py-2 bg-[#F5A623] hover:bg-[#FFAA1D] text-black font-bold tracking-wider rounded transition-colors cursor-pointer"
              >
                PITCH A FILM
              </button>
            </div>
          </div>
        </div>

        {/* Project Grid */}
        {filteredProjects.length === 0 ? (
          <div className="text-center py-24 bg-[#111] rounded-xl border border-white/10">
            <Film className="w-12 h-12 text-[#444] mx-auto mb-4" />
            <p className="text-lg font-bebas text-white">NO PRODUCTIONS FOUND</p>
            <p className="text-xs font-mono text-[#888] mt-1">
              Try adjusting your category filter or search keyword.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => {
              const isMarquee = project.id === 'the-jengaburu-curse' || project.id === 'zwigato' || project.id === 'nanda-master';
              const imdbRating = project.id === 'the-jengaburu-curse' ? '7.6' : project.id === 'zwigato' ? '6.7' : project.id === 'gram-vikas-springs' ? '9.9' : project.id === 'tata-steel-resilience' ? '9.9' : null;

              return (
                <div
                  key={project.id}
                  id={`project-card-${project.id}`}
                  onClick={() => onSelectProject(project)}
                  className={`group bg-[#121212] rounded-xl overflow-hidden transition-all duration-300 cursor-pointer flex flex-col justify-between shadow-xl ${
                    isMarquee
                      ? 'border border-[#F5A623]/60 hover:border-[#F5A623] shadow-[0_0_35px_rgba(245,166,35,0.12)] hover:shadow-[0_0_45px_rgba(245,166,35,0.25)] ring-1 ring-[#F5A623]/25'
                      : 'border border-white/10 hover:border-[#F5A623]'
                  }`}
                >
                  <div>
                    {/* Thumbnail */}
                    <div className="relative aspect-[16/10] overflow-hidden bg-black flex items-center justify-center">
                      <img
                        src={project.backdropImage || project.posterImage}
                        alt=""
                        aria-hidden="true"
                        className="absolute inset-0 w-full h-full object-cover blur-sm opacity-40 scale-110 pointer-events-none"
                      />
                      <img
                        src={project.backdropImage || project.posterImage}
                        alt={project.title}
                        className="relative max-h-full max-w-full object-contain group-hover:scale-105 transition-transform duration-700 opacity-90 group-hover:opacity-100 z-0"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent pointer-events-none z-0" />

                      {/* Top Badges */}
                      <div className="absolute top-3 left-3 flex items-center gap-2">
                        {isMarquee && (
                          <span className="px-2 py-0.5 text-[9px] font-mono uppercase bg-gradient-to-r from-[#F5A623] to-[#FFBF47] text-black font-extrabold rounded shadow-md flex items-center gap-1">
                            ★ MARQUEE
                          </span>
                        )}
                        <span className={`px-2 py-0.5 text-[9px] font-mono uppercase rounded font-bold ${
                          isMarquee
                            ? 'bg-black/90 text-[#F5A623] border border-[#F5A623]/40'
                            : 'bg-[#F5A623] text-black'
                        }`}>
                          {project.categoryLabel}
                        </span>
                        <span className="px-2 py-0.5 text-[9px] font-mono bg-black/80 text-white rounded border border-white/10">
                          {project.year}
                        </span>
                      </div>

                      <div className="absolute top-3 right-3 flex items-center gap-1.5">
                        {imdbRating && (
                          <span className="text-[9px] font-mono font-bold text-[#F5C518] bg-black/85 px-2 py-0.5 rounded border border-[#F5C518]/40">
                            IMDb {imdbRating}
                          </span>
                        )}
                        {project.id === 'nanda-master' && (
                          <span className="text-[9px] font-mono font-bold text-[#F5A623] bg-black/85 px-2 py-0.5 rounded border border-[#F5A623]/40">
                            AWARD WINNER
                          </span>
                        )}
                        {project.id === 'odisha-tourism-tvc' && (
                          <span className="text-[9px] font-mono font-bold text-[#F5A623] bg-black/85 px-2 py-0.5 rounded border border-[#F5A623]/40">
                            CANNES 2025
                          </span>
                        )}
                        <span className="text-[9px] font-mono text-[#CCCCCC] bg-black/80 px-2 py-0.5 rounded border border-white/10">
                          {project.aspectRatio}
                        </span>
                      </div>

                      {/* Hover / Play Action Button */}
                      <div className={`absolute inset-0 flex flex-col items-center justify-center transition-all duration-300 ${
                        project.trailerYoutubeUrl
                          ? 'bg-black/35 backdrop-blur-[1px] opacity-90 sm:opacity-0 group-hover:opacity-100'
                          : 'opacity-0 group-hover:opacity-100 bg-black/45 backdrop-blur-[2px]'
                      }`}>
                        <button
                          type="button"
                          onClick={(e) => {
                            e.stopPropagation();
                            if (project.trailerYoutubeUrl) {
                              window.open(project.trailerYoutubeUrl, '_blank', 'noopener,noreferrer');
                            } else {
                              onSelectProject(project);
                            }
                          }}
                          className="w-14 h-14 rounded-full bg-[#F5A623] hover:bg-[#FFAA1D] text-black flex items-center justify-center shadow-[0_0_30px_rgba(245,166,35,0.85)] hover:scale-110 active:scale-95 transition-all cursor-pointer group/btn"
                          title={project.trailerYoutubeUrl ? `Play ${project.title} on YouTube` : `View ${project.title} Details`}
                          aria-label={project.trailerYoutubeUrl ? `Play ${project.title} on YouTube` : `View ${project.title} details`}
                        >
                          {project.trailerYoutubeUrl ? (
                            <Play className="w-6 h-6 ml-0.5 fill-black group-hover/btn:scale-110 transition-transform" />
                          ) : (
                            <Maximize2 className="w-6 h-6 text-black group-hover/btn:scale-110 transition-transform" />
                          )}
                        </button>
                        <span className="mt-2 text-[10px] font-mono tracking-wider uppercase text-white/90 bg-black/80 px-2.5 py-0.5 rounded border border-[#F5A623]/30 pointer-events-none shadow-md">
                          {project.trailerYoutubeUrl ? 'PLAY ON YOUTUBE' : 'VIEW CASE / COVER'}
                        </span>
                      </div>
                    </div>

                  {/* Body Content */}
                  <div className="p-6">
                    <div className="text-[11px] font-mono text-[#A0A0A0] mb-1">
                      Dir. <span className="text-white">{project.director}</span> &bull; {project.role}
                    </div>

                    <h3 className="text-2xl sm:text-3xl font-bebas tracking-wide text-white group-hover:text-[#F5A623] transition-colors leading-tight mb-2">
                      {project.title}
                    </h3>

                    <p className="text-xs text-[#A0A0A0] font-light line-clamp-2 leading-relaxed mb-4">
                      {project.logline}
                    </p>

                    <div className="flex items-center gap-2 text-[10px] font-mono text-[#666]">
                      <Camera className="w-3 h-3 text-[#F5A623]" />
                      <span className="truncate text-[#888]">{project.cameraRig}</span>
                    </div>
                  </div>
                </div>

                {/* Card Footer with Award/Action */}
                <div className="px-6 py-4 border-t border-white/5 bg-[#0E0E0E] flex items-center justify-between text-xs font-mono">
                  {project.awards.length > 0 ? (
                    <div className="flex items-center gap-1.5 text-[#F5A623] truncate max-w-[70%]">
                      <Award className="w-3.5 h-3.5 shrink-0" />
                      <span className="truncate text-[10px]">{project.awards[0]}</span>
                    </div>
                  ) : (
                    <span className="text-[10px] text-[#666]">STUDIO RELEASE</span>
                  )}

                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      if (project.trailerYoutubeUrl) {
                        window.open(project.trailerYoutubeUrl, '_blank', 'noopener,noreferrer');
                      } else {
                        onSelectProject(project);
                      }
                    }}
                    className="flex items-center gap-1 text-[#F5A623] hover:text-[#FFAA1D] group-hover:translate-x-1 transition-all cursor-pointer"
                    title={project.trailerYoutubeUrl ? 'Play trailer on YouTube' : 'View production details'}
                  >
                    <span className="text-[11px] font-bold">TRAILER</span>
                    <ArrowUpRight className="w-3 h-3" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
        )}

        {/* Ad Films & TVC Portfolio - Direct Drive Archives (Without Cover Photos) */}
        <div id="ad-films-drive-archives-section" className="mt-24 pt-16 border-t border-white/10">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
            <div>
              <div className="flex items-center gap-2 mb-3">
                <FolderArchive className="w-4 h-4 text-[#F5A623]" />
                <span className="text-xs font-mono text-[#F5A623] tracking-[0.25em] uppercase font-semibold">
                  COMMERCIAL, CORPORATE &amp; CIVIC ARCHIVES
                </span>
              </div>
              <h2 className="text-3xl sm:text-5xl font-bebas tracking-wide text-white leading-tight">
                AD FILMS, TVCs &amp; DOCUMENTATION VAULT
              </h2>
              <p className="text-sm sm:text-base text-[#A0A0A0] max-w-2xl font-light mt-2">
                A dedicated repository for ad films, broadcast campaigns, state developmental documentation, and corporate archives. Connect your Google Drive or cloud folders to view raw rushes, broadcast cuts, and deliverables.
              </p>
            </div>

            <div className="flex items-center gap-3">
              <div className="px-4 py-2 rounded-lg bg-[#141414] border border-white/10 text-xs font-mono text-[#CCCCCC] flex items-center gap-2">
                <HardDrive className="w-3.5 h-3.5 text-[#F5A623]" />
                <span>{AD_FILM_ARCHIVES.length} PRODUCTION SLATES</span>
              </div>
            </div>
          </div>

          {/* Grid of Archive Cards without cover photos */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {AD_FILM_ARCHIVES.map((item) => {
              const currentLink = driveLinks[item.id] || item.driveLink;
              const isEditing = editingDriveId === item.id;

              return (
                <div
                  key={item.id}
                  id={`drive-archive-${item.id}`}
                  className="bg-[#121212] hover:bg-[#161616] border border-white/10 hover:border-[#F5A623]/40 rounded-xl p-6 sm:p-7 flex flex-col justify-between transition-all duration-300 group shadow-lg"
                >
                  <div>
                    {/* Top Header Row */}
                    <div className="flex items-start justify-between gap-4 mb-3">
                      <div className="flex items-center gap-2 flex-wrap">
                        <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-[#F5A623] bg-[#F5A623]/10 border border-[#F5A623]/25 px-2.5 py-1 rounded">
                          {item.categoryLabel}
                        </span>
                        {item.clientOrOrg && (
                          <span className="text-[10px] font-mono text-[#888888] bg-white/5 px-2 py-0.5 rounded border border-white/5">
                            {item.clientOrOrg}
                          </span>
                        )}
                      </div>

                      {item.highlightText && (
                        <span className="text-[9px] font-mono tracking-wider uppercase text-[#E0E0E0] bg-black/60 px-2 py-0.5 rounded border border-white/10 shrink-0">
                          {item.highlightText}
                        </span>
                      )}
                    </div>

                    {/* Title */}
                    <h3 className="text-2xl sm:text-3xl font-bebas tracking-wide text-white group-hover:text-[#F5A623] transition-colors leading-tight mb-2">
                      {item.title}
                    </h3>

                    {/* Description */}
                    <p className="text-xs sm:text-sm text-[#AAAAAA] leading-relaxed mb-5 font-light">
                      {item.description}
                    </p>

                    {/* Tags */}
                    {item.tags && item.tags.length > 0 && (
                      <div className="flex flex-wrap gap-1.5 mb-6">
                        {item.tags.map((tag, idx) => (
                          <span
                            key={idx}
                            className="text-[10px] font-mono text-[#777777] bg-[#0A0A0A] px-2 py-0.5 rounded border border-white/5"
                          >
                            #{tag}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* Drive Link Section / Input Field */}
                  <div className="pt-4 border-t border-white/10">
                    {isEditing ? (
                      <div className="space-y-2">
                        <label className="text-[11px] font-mono text-[#F5A623] block">
                          Enter Google Drive / Cloud Link for {item.title}:
                        </label>
                        <div className="flex items-center gap-2">
                          <input
                            type="url"
                            value={tempDriveUrl}
                            onChange={(e) => setTempDriveUrl(e.target.value)}
                            placeholder="https://drive.google.com/drive/folders/..."
                            className="flex-1 bg-black text-xs font-mono text-white px-3 py-2 rounded-lg border border-[#F5A623]/60 focus:outline-none focus:ring-1 focus:ring-[#F5A623]"
                            autoFocus
                            onKeyDown={(e) => {
                              if (e.key === 'Enter') handleSaveDriveLink(item.id);
                              if (e.key === 'Escape') setEditingDriveId(null);
                            }}
                          />
                          <button
                            onClick={() => handleSaveDriveLink(item.id)}
                            className="px-3 py-2 bg-[#F5A623] hover:bg-[#FFAA1D] text-black text-xs font-mono font-bold rounded-lg transition-colors cursor-pointer"
                          >
                            Save
                          </button>
                          <button
                            onClick={() => setEditingDriveId(null)}
                            className="px-2.5 py-2 bg-white/10 hover:bg-white/15 text-[#CCCCCC] text-xs font-mono rounded-lg transition-colors cursor-pointer"
                          >
                            Cancel
                          </button>
                        </div>
                      </div>
                    ) : (
                      <div className="flex flex-wrap items-center justify-between gap-3">
                        <div className="flex items-center gap-2 min-w-0 max-w-[65%]">
                          <LinkIcon className="w-3.5 h-3.5 text-[#F5A623] shrink-0" />
                          {currentLink ? (
                            <a
                              href={currentLink}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-xs font-mono text-[#F5A623] hover:underline truncate flex items-center gap-1 group/link"
                              title={currentLink}
                            >
                              <span className="truncate">{currentLink}</span>
                              <ExternalLink className="w-3 h-3 shrink-0 opacity-70 group-hover/link:opacity-100" />
                            </a>
                          ) : (
                            <span className="text-xs font-mono text-[#666666] italic truncate">
                              No Drive link added yet
                            </span>
                          )}
                        </div>

                        <div className="flex items-center gap-2">
                          {currentLink ? (
                            <>
                              <a
                                href={currentLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="px-3.5 py-1.5 rounded-lg bg-[#F5A623] hover:bg-[#FFAA1D] text-black text-xs font-mono font-bold tracking-wider uppercase flex items-center gap-1.5 transition-all shadow-md hover:scale-105 active:scale-95 cursor-pointer"
                              >
                                <span>OPEN DRIVE</span>
                                <ExternalLink className="w-3.5 h-3.5" />
                              </a>
                              <button
                                onClick={() => handleStartEditLink(item.id, currentLink)}
                                className="p-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-[#AAAAAA] hover:text-white transition-colors cursor-pointer"
                                title="Edit Drive Link"
                              >
                                <Edit3 className="w-3.5 h-3.5" />
                              </button>
                            </>
                          ) : (
                            <button
                              onClick={() => handleStartEditLink(item.id, currentLink)}
                              className="px-3.5 py-1.5 rounded-lg bg-white/10 hover:bg-[#F5A623] hover:text-black text-[#E0E0E0] text-xs font-mono tracking-wider uppercase flex items-center gap-1.5 border border-white/10 transition-all cursor-pointer"
                            >
                              <HardDrive className="w-3.5 h-3.5" />
                              <span>+ ADD DRIVE LINK</span>
                            </button>
                          )}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
