import React from 'react';
import { 
  Instagram, 
  Linkedin, 
  Building2, 
  Tv, 
  HeartHandshake, 
  Film, 
  Landmark, 
  Sliders, 
  Sparkles,
  MapPin
} from 'lucide-react';
import { STUDIO_INFO, CORE_TEAM } from '../data/portfolioData';

interface AboutPageProps {
  onContactClick?: () => void;
}

export const AboutPage: React.FC<AboutPageProps> = () => {
  return (
    <div id="about-page" className="min-h-screen bg-[#0A0A0A] text-white pt-28 pb-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="border-b border-white/10 pb-12 mb-16">
          <span className="text-xs font-mono text-[#F5A623] tracking-[0.3em] uppercase block mb-3">
            FILM PRODUCTION & VISUAL STORYTELLING
          </span>
          <h1 className="text-5xl sm:text-7xl md:text-8xl font-bebas tracking-wide text-white leading-none">
            INFINITY LIGHT DRAWINGS
          </h1>
          <p className="text-base sm:text-xl text-[#F5A623] font-bebas tracking-wider mt-3">
            WE MAKE STORIES THAT STAY.
          </p>
        </div>

        {/* Company Overview & Ethos */}
        <section className="mb-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#F5A623]/10 border border-[#F5A623]/30 text-[#F5A623] text-xs font-mono tracking-widest uppercase">
                <MapPin className="w-3.5 h-3.5" />
                <span>Rooted in Odisha. Working across India.</span>
              </div>

              <h2 className="text-3xl sm:text-5xl font-bebas tracking-wide text-white leading-tight">
                WE MAKE STORIES THAT STAY.
              </h2>

              <p className="text-base sm:text-lg text-[#E0E0E0] font-light leading-relaxed">
                Infinity Light Drawings is an independent film production and visual storytelling company founded by filmmaker Nishith Sahasransu Ray, together with a passionate team of filmmakers and creative professionals.
              </p>

              <p className="text-sm sm:text-base text-[#A0A0A0] font-light leading-relaxed">
                We create films, documentaries, advertisements, corporate films, government films, NGO stories, branded content, digital campaigns and professional reels.
              </p>

              <div className="p-6 sm:p-8 rounded-2xl bg-[#111111] border border-white/10 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#F5A623]/5 rounded-full blur-2xl" />
                <p className="text-xs text-[#888888] font-mono tracking-wider uppercase mb-2">
                  OUR PHILOSOPHY
                </p>
                <p className="text-sm sm:text-base text-[#CCCCCC] font-light italic mb-2">
                  "But for us, filmmaking never starts with a camera."
                </p>
                <h3 className="font-bebas text-3xl sm:text-4xl text-[#F5A623] tracking-wide mb-3">
                  IT STARTS WITH A STORY.
                </h3>
                <p className="text-sm sm:text-base text-[#D0D0D0] font-light leading-relaxed">
                  We listen. We understand. Then we find the right words, images, light, movement and sound to bring that story to life.
                </p>
              </div>

              <div className="space-y-4 pt-4 text-sm text-[#A0A0A0] font-light leading-relaxed border-t border-white/10">
                <p>
                  Nishith’s filmmaking journey includes feature films, documentaries, advertisements and web series, with work on <strong className="text-white font-medium">Zwigato</strong> with Nandita Das, <strong className="text-white font-medium">Jengaburu: The Curse</strong> with Nila Madhab Panda for Sony LIV, <strong className="text-white font-medium">Baghuni – Dance Like a Tiger</strong>, an NFDC feature directed by Jitendra Mishra, and the Hindi short film <strong className="text-white font-medium">The Diddle</strong>, alongside international filmmaking professionals.
                </p>
                <p className="text-[#E0E0E0] font-medium">
                  These experiences shape the way we work — creative, hands-on and focused on the final frame.
                </p>
              </div>
            </div>

            <div className="lg:col-span-5 space-y-6">
              <div className="bg-[#121212] p-8 rounded-2xl border border-white/10">
                <span className="text-xs font-mono text-[#F5A623] tracking-widest uppercase block mb-3">
                  CAPABILITY SPECTRUM
                </span>
                <h3 className="font-bebas text-2xl text-white mb-4">
                  COMPREHENSIVE CINEMATIC EXECUTION
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs font-mono text-[#CCCCCC]">
                  {[
                    'Feature Films',
                    'Documentaries',
                    'Advertisements & TVCs',
                    'Corporate Films',
                    'Government Films',
                    'NGO Stories',
                    'Branded Content',
                    'Digital Campaigns',
                    'Professional Reels',
                    'Full Post-Production'
                  ].map((cap, i) => (
                    <div key={i} className="flex items-center gap-2 p-2 rounded bg-black/40 border border-white/5">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#F5A623]" />
                      <span>{cap}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-gradient-to-br from-[#1A1A1A] to-[#0E0E0E] p-8 rounded-2xl border border-[#F5A623]/20 relative">
                <Sparkles className="w-6 h-6 text-[#F5A623] mb-4" />
                <h4 className="font-bebas text-2xl text-white mb-2">
                  PAN-INDIA PRODUCTION AGILITY
                </h4>
                <p className="text-xs text-[#A0A0A0] leading-relaxed">
                  Headquartered in Odisha with roots across Eastern India, deploying high-end cinematography, native dialect liaison, and location clearance across all 28 states and territories.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* WHAT WE MAKE */}
        <section className="mb-24">
          <div className="mb-12">
            <span className="text-xs font-mono text-[#F5A623] tracking-[0.3em] uppercase block mb-2">
              SECTOR EXPERTISE
            </span>
            <h2 className="text-4xl sm:text-5xl font-bebas tracking-wide text-white">
              WHAT WE MAKE
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* 1. CORPORATE FILMS */}
            <div className="group bg-[#111111] hover:bg-[#151515] p-8 rounded-2xl border border-white/10 hover:border-[#F5A623]/60 transition-all duration-300 flex flex-col justify-between shadow-xl">
              <div>
                <div className="w-12 h-12 rounded-xl bg-black border border-white/10 text-[#F5A623] flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Building2 className="w-6 h-6" />
                </div>
                <h3 className="font-bebas text-2xl sm:text-3xl text-white group-hover:text-[#F5A623] tracking-wide mb-3 transition-colors">
                  CORPORATE FILMS
                </h3>
                <p className="text-sm font-medium text-[#E0E0E0] mb-2 leading-relaxed">
                  Your organization has a story.
                </p>
                <p className="text-xs sm:text-sm text-[#A0A0A0] font-light leading-relaxed">
                  We make people want to watch it.
                </p>
              </div>
            </div>

            {/* 2. ADVERTISEMENTS */}
            <div className="group bg-[#111111] hover:bg-[#151515] p-8 rounded-2xl border border-white/10 hover:border-[#F5A623]/60 transition-all duration-300 flex flex-col justify-between shadow-xl">
              <div>
                <div className="w-12 h-12 rounded-xl bg-black border border-white/10 text-[#F5A623] flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Tv className="w-6 h-6" />
                </div>
                <h3 className="font-bebas text-2xl sm:text-3xl text-white group-hover:text-[#F5A623] tracking-wide mb-3 transition-colors">
                  ADVERTISEMENTS
                </h3>
                <p className="text-sm font-medium text-[#E0E0E0] mb-2 leading-relaxed">
                  Strong ideas deserve strong images.
                </p>
                <p className="text-xs sm:text-sm text-[#A0A0A0] font-light leading-relaxed">
                  We turn your message into a visual experience.
                </p>
              </div>
            </div>

            {/* 3. NGO & DEVELOPMENT FILMS */}
            <div className="group bg-[#111111] hover:bg-[#151515] p-8 rounded-2xl border border-white/10 hover:border-[#F5A623]/60 transition-all duration-300 flex flex-col justify-between shadow-xl">
              <div>
                <div className="w-12 h-12 rounded-xl bg-black border border-white/10 text-[#F5A623] flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <HeartHandshake className="w-6 h-6" />
                </div>
                <h3 className="font-bebas text-2xl sm:text-3xl text-white group-hover:text-[#F5A623] tracking-wide mb-3 transition-colors">
                  NGO & DEVELOPMENT FILMS
                </h3>
                <p className="text-sm font-medium text-[#E0E0E0] mb-2 leading-relaxed">
                  Real people. Real work. Real impact.
                </p>
                <p className="text-xs sm:text-sm text-[#A0A0A0] font-light leading-relaxed">
                  We tell stories with honesty and human connection.
                </p>
              </div>
            </div>

            {/* 4. DOCUMENTARIES */}
            <div className="group bg-[#111111] hover:bg-[#151515] p-8 rounded-2xl border border-white/10 hover:border-[#F5A623]/60 transition-all duration-300 flex flex-col justify-between shadow-xl">
              <div>
                <div className="w-12 h-12 rounded-xl bg-black border border-white/10 text-[#F5A623] flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Film className="w-6 h-6" />
                </div>
                <h3 className="font-bebas text-2xl sm:text-3xl text-white group-hover:text-[#F5A623] tracking-wide mb-3 transition-colors">
                  DOCUMENTARIES
                </h3>
                <p className="text-sm font-medium text-[#E0E0E0] mb-2 leading-relaxed">
                  We look beyond the obvious.
                </p>
                <p className="text-xs sm:text-sm text-[#A0A0A0] font-light leading-relaxed">
                  Finding the people, places and moments that make a story matter.
                </p>
              </div>
            </div>

            {/* 5. GOVERNMENT & INSTITUTIONAL FILMS */}
            <div className="group bg-[#111111] hover:bg-[#151515] p-8 rounded-2xl border border-white/10 hover:border-[#F5A623]/60 transition-all duration-300 flex flex-col justify-between shadow-xl">
              <div>
                <div className="w-12 h-12 rounded-xl bg-black border border-white/10 text-[#F5A623] flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Landmark className="w-6 h-6" />
                </div>
                <h3 className="font-bebas text-2xl sm:text-3xl text-white group-hover:text-[#F5A623] tracking-wide mb-3 transition-colors">
                  GOVERNMENT & INSTITUTIONAL FILMS
                </h3>
                <p className="text-sm font-medium text-[#E0E0E0] mb-2 leading-relaxed">
                  Clear communication. Strong visuals.
                </p>
                <p className="text-xs sm:text-sm text-[#A0A0A0] font-light leading-relaxed">
                  Films built to inform, engage and create impact.
                </p>
              </div>
            </div>

            {/* 6. POST-PRODUCTION */}
            <div className="group bg-[#111111] hover:bg-[#151515] p-8 rounded-2xl border border-white/10 hover:border-[#F5A623]/60 transition-all duration-300 flex flex-col justify-between shadow-xl">
              <div>
                <div className="w-12 h-12 rounded-xl bg-black border border-white/10 text-[#F5A623] flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Sliders className="w-6 h-6" />
                </div>
                <h3 className="font-bebas text-2xl sm:text-3xl text-white group-hover:text-[#F5A623] tracking-wide mb-3 transition-colors">
                  POST-PRODUCTION
                </h3>
                <p className="text-sm font-medium text-[#E0E0E0] mb-2 leading-relaxed">
                  The shoot is only part of the journey.
                </p>
                <p className="text-xs sm:text-sm text-[#A0A0A0] font-light leading-relaxed">
                  Editing, colour, sound, motion graphics, subtitles and finishing — all brought together under one roof.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* HOW WE WORK */}
        <section className="mb-24">
          <div className="bg-[#111111] border border-white/15 rounded-3xl p-8 sm:p-12 lg:p-16 relative overflow-hidden shadow-2xl">
            <div className="absolute top-0 right-0 w-96 h-96 bg-[#F5A623]/10 rounded-full blur-3xl pointer-events-none" />

            <div className="max-w-4xl">
              <span className="text-xs font-mono text-[#F5A623] tracking-[0.3em] uppercase block mb-3">
                OUR METHODOLOGY
              </span>
              <h2 className="text-4xl sm:text-6xl font-bebas tracking-wide text-white mb-6">
                HOW WE WORK
              </h2>

              <div className="my-8 py-6 px-6 sm:px-8 rounded-2xl bg-black/70 border border-[#F5A623]/40">
                <span className="text-[11px] font-mono text-[#A0A0A0] tracking-widest uppercase block mb-2">
                  THE THREE-PHASE PRINCIPLE
                </span>
                <p className="font-bebas text-3xl sm:text-5xl md:text-6xl text-white tracking-wider font-bold">
                  <strong className="font-bold text-white">LISTEN</strong>
                  <span className="text-[#F5A623] mx-2 sm:mx-3 font-normal">→</span>
                  <strong className="font-bold text-white">UNDERSTAND</strong>
                  <span className="text-[#F5A623] mx-2 sm:mx-3 font-normal">→</span>
                  <strong className="font-bold text-white">CREATE</strong>
                </p>
              </div>

              <p className="text-base sm:text-xl text-[#D0D0D0] font-light leading-relaxed mb-8">
                Every project starts with a conversation. We understand your purpose, find the story and build the film around it — from concept to final frame.
              </p>

              <div className="pt-8 border-t border-white/15">
                <span className="font-bebas text-3xl sm:text-5xl text-[#F5A623] tracking-widest block font-bold">
                  <strong className="font-bold">YOUR STORY. OUR CRAFT.</strong>
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* Founder & Creative Head Introduction */}
        <section className="mb-12">
          <div className="border-b border-white/10 pb-8 flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <span className="text-xs font-mono text-[#F5A623] tracking-[0.3em] uppercase block mb-3">
                CREATIVE LEADERSHIP
              </span>
              <h2 className="text-4xl sm:text-6xl font-bebas tracking-wide text-white leading-none">
                FOUNDER & CREATIVE HEAD
              </h2>
            </div>
            <p className="text-xs sm:text-sm font-mono text-[#A0A0A0] tracking-wider uppercase max-w-sm">
              Directorial Vision &bull; Cinematographic Mastery &bull; Narrative Architecture
            </p>
          </div>
        </section>

        {/* Founder In-Depth Spotlight */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-24 bg-[#111111] p-8 sm:p-12 rounded-2xl border border-white/10">
          <div className="lg:col-span-5">
            <div className="rounded-xl overflow-hidden aspect-[4/5] bg-black relative border border-white/15">
              <img
                src={STUDIO_INFO.founder.image}
                alt={STUDIO_INFO.founder.name}
                className="w-full h-full object-cover grayscale contrast-125"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 text-center">
                <span className="font-bebas text-2xl text-white block">
                  {STUDIO_INFO.founder.name}
                </span>
                <span className="text-[11px] font-mono text-[#F5A623] tracking-widest uppercase">
                  {STUDIO_INFO.founder.title}
                </span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7 space-y-6">
            <span className="text-xs font-mono text-[#F5A623] tracking-widest uppercase block">
              FOUNDER'S STATEMENT
            </span>
            <h2 className="text-2xl sm:text-4xl font-bebas tracking-wide text-white leading-tight">
              “CINEMA HAS BEEN MY FRIEND, MY COMPANION, MY GURU — MY LIFE.”
            </h2>

            <div className="space-y-4 text-sm sm:text-base text-[#CCCCCC] font-light leading-relaxed">
              <p>
                I’m Nishith Sahasransu Ray, a filmmaker and visual storyteller creating films that connect, communicate and stay with the audience.
              </p>
              <p>
                From concept to final frame, we turn ideas into compelling visual stories—crafted with purpose, emotion and cinematic detail.
              </p>
              <p className="pt-2">
                <strong className="text-[#F5A623] font-bebas text-2xl sm:text-3xl tracking-widest block font-bold">
                  YOUR VISION. OUR CRAFT. ONE STORY.
                </strong>
              </p>
            </div>

            <div className="pt-4 border-t border-white/10 flex flex-wrap gap-4 text-xs font-mono">
              <div className="p-3 bg-black/60 rounded border border-white/5">
                <span className="text-[#888] block text-[10px]">ALMA MATER</span>
                <span className="text-[#E0E0E0]">BPFTIO Cinematography Dept.</span>
              </div>
              <div className="p-3 bg-black/60 rounded border border-white/5">
                <span className="text-[#888] block text-[10px]">DIRECTORIAL FOCUS</span>
                <span className="text-[#E0E0E0]">Human Realism & Anamorphic Depth</span>
              </div>
            </div>
          </div>
        </div>

        {/* The Collective Team */}
        <div className="mb-24">
          <div className="mb-12">
            <span className="text-xs font-mono text-[#F5A623] tracking-[0.3em] uppercase block mb-2">
              CREATIVE DEPARTMENTS
            </span>
            <h2 className="text-4xl sm:text-5xl font-bebas tracking-wide text-white">
              THE COLLECTIVE
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {CORE_TEAM.map((member) => (
              <div key={member.id} className="bg-[#111111] p-6 rounded-xl border border-white/10 flex flex-col justify-between">
                <div>
                  <div className="aspect-[4/3] rounded-lg overflow-hidden mb-6 bg-black">
                    <img
                      src={member.image}
                      alt={member.name}
                      style={member.imagePosition ? { objectPosition: member.imagePosition } : undefined}
                      className={`w-full h-full object-cover grayscale contrast-125 ${
                        member.id === 'sourav-mahapatra' ? 'object-top' : ''
                      }`}
                    />
                  </div>
                  <span className="text-[10px] font-mono text-[#F5A623] tracking-widest uppercase block mb-1">
                    {member.roleTag}
                  </span>
                  <h3 className="font-bebas text-2xl text-white mb-2">
                    {member.name}
                  </h3>
                  <div className="text-xs font-mono text-[#CCCCCC] mb-4">
                    {member.title}
                  </div>
                  <p className="text-xs text-[#999999] leading-relaxed font-light whitespace-pre-line">
                    {member.bio}
                  </p>
                </div>

                {/* Social Links */}
                {(member.socials?.instagram || member.socials?.linkedin) && (
                  <div className="pt-4 mt-6 border-t border-white/10 flex items-center gap-2.5">
                    {member.socials.instagram && (
                      <a
                        href={member.socials.instagram}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded bg-white/5 hover:bg-[#F5A623] text-[#A0A0A0] hover:text-black border border-white/10 hover:border-[#F5A623] text-xs font-mono transition-all duration-200"
                        title={`Instagram - ${member.name}`}
                      >
                        <Instagram className="w-3.5 h-3.5" />
                        <span>INSTAGRAM</span>
                      </a>
                    )}
                    {member.socials.linkedin && (
                      <a
                        href={member.socials.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded bg-white/5 hover:bg-[#0077B5] text-[#A0A0A0] hover:text-white border border-white/10 hover:border-[#0077B5] text-xs font-mono transition-all duration-200"
                        title={`LinkedIn - ${member.name}`}
                      >
                        <Linkedin className="w-3.5 h-3.5" />
                        <span>LINKEDIN</span>
                      </a>
                    )}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
