import React from 'react';
import { 
  Handshake, 
  MapPin, 
  Sliders,
  ArrowRight,
  MessageSquare
} from 'lucide-react';
import { WORKFLOW_STEPS } from '../data/portfolioData';

interface CollaborationPageProps {
  onRouteChange?: (route: string) => void;
}

export const CollaborationPage: React.FC<CollaborationPageProps> = ({ onRouteChange }) => {
  return (
    <div id="collaboration-page" className="min-h-screen bg-[#0A0A0A] text-white pt-28 pb-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="border-b border-white/10 pb-12 mb-16">
          <span className="text-xs font-mono text-[#F5A623] tracking-[0.3em] uppercase block mb-3">
            CO-PRODUCTION & LINE PRODUCTION
          </span>
          <h1 className="text-5xl sm:text-7xl font-bebas tracking-wide text-white leading-none">
            COLLABORATION.
          </h1>
          <p className="text-sm sm:text-base text-[#A0A0A0] max-w-2xl font-light mt-4 leading-relaxed">
            Partner with Infinity Light Drawings as your creative co-producer, Indian service production unit, or post-production finishing house. We provide deep regional access, tier-1 camera infrastructure, and seasoned directorial discipline.
          </p>
        </div>

        {/* 3 Co-Production Models */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
          <div className="bg-[#111111] p-8 rounded-xl border border-white/10 flex flex-col justify-between group hover:border-[#F5A623]/50 transition-all">
            <div>
              <div className="w-12 h-12 rounded-lg bg-black/60 border border-white/10 flex items-center justify-center text-[#F5A623] mb-6">
                <Handshake className="w-6 h-6" />
              </div>
              <span className="text-[10px] font-mono text-[#F5A623] tracking-widest uppercase block mb-1">
                MODEL 01
              </span>
              <h3 className="text-2xl font-bebas tracking-wide text-white mb-3">
                EQUITY CO-PRODUCTION
              </h3>
              <p className="text-sm text-[#A0A0A0] leading-relaxed font-light mb-6">
                For independent filmmakers and international auteurs seeking a creative co-producer in India. We co-invest production resources, camera packages, and talent attachments for festival-bound narrative cinema.
              </p>
            </div>
            <ul className="text-xs font-mono text-[#CCCCCC] space-y-2 border-t border-white/5 pt-4">
              <li className="flex items-center gap-2">
                <span className="text-[#F5A623]">&bull;</span> Co-financing & Tax Structuring
              </li>
              <li className="flex items-center gap-2">
                <span className="text-[#F5A623]">&bull;</span> Global Festival Strategy
              </li>
              <li className="flex items-center gap-2">
                <span className="text-[#F5A623]">&bull;</span> A-List Creative Talent
              </li>
            </ul>
          </div>

          <div className="bg-[#111111] p-8 rounded-xl border border-white/10 flex flex-col justify-between group hover:border-[#F5A623]/50 transition-all">
            <div>
              <div className="w-12 h-12 rounded-lg bg-black/60 border border-white/10 flex items-center justify-center text-[#F5A623] mb-6">
                <MapPin className="w-6 h-6" />
              </div>
              <span className="text-[10px] font-mono text-[#F5A623] tracking-widest uppercase block mb-1">
                MODEL 02
              </span>
              <h3 className="text-2xl font-bebas tracking-wide text-white mb-3">
                INDIA SERVICE & LINE PRODUCTION
              </h3>
              <p className="text-sm text-[#A0A0A0] leading-relaxed font-light mb-6">
                Full-service physical production execution for international studios and Mumbai commercial houses shooting across Eastern India. Turnkey location scouting, government filming permits, and tribal community liaisons.
              </p>
            </div>
            <ul className="text-xs font-mono text-[#CCCCCC] space-y-2 border-t border-white/5 pt-4">
              <li className="flex items-center gap-2">
                <span className="text-[#F5A623]">&bull;</span> RED / ARRI Camera Packages
              </li>
              <li className="flex items-center gap-2">
                <span className="text-[#F5A623]">&bull;</span> Bauxite Mines & Forest Permits
              </li>
              <li className="flex items-center gap-2">
                <span className="text-[#F5A623]">&bull;</span> Veteran 1st AD & Grip Crews
              </li>
            </ul>
          </div>

          <div className="bg-[#111111] p-8 rounded-xl border border-white/10 flex flex-col justify-between group hover:border-[#F5A623]/50 transition-all">
            <div>
              <div className="w-12 h-12 rounded-lg bg-black/60 border border-white/10 flex items-center justify-center text-[#F5A623] mb-6">
                <Sliders className="w-6 h-6" />
              </div>
              <span className="text-[10px] font-mono text-[#F5A623] tracking-widest uppercase block mb-1">
                MODEL 03
              </span>
              <h3 className="text-2xl font-bebas tracking-wide text-white mb-3">
                POST-PRODUCTION FINISHING
              </h3>
              <p className="text-sm text-[#A0A0A0] leading-relaxed font-light mb-6">
                State-of-the-art DaVinci Resolve color grading suites and immersive Dolby Atmos audio post. We take raw production footage and forge polished DCP theatrical masters and streaming deliverables.
              </p>
            </div>
            <ul className="text-xs font-mono text-[#CCCCCC] space-y-2 border-t border-white/5 pt-4">
              <li className="flex items-center gap-2">
                <span className="text-[#F5A623]">&bull;</span> ACES Custom Film Emulation
              </li>
              <li className="flex items-center gap-2">
                <span className="text-[#F5A623]">&bull;</span> Theatrical Dolby Atmos Mastering
              </li>
              <li className="flex items-center gap-2">
                <span className="text-[#F5A623]">&bull;</span> Invisible VFX & Cleanup
              </li>
            </ul>
          </div>
        </div>

        {/* 4-Phase Production Workflow Roadmap */}
        <div>
          <div className="mb-12">
            <span className="text-xs font-mono text-[#F5A623] tracking-[0.3em] uppercase block mb-2">
              METHODICAL EXECUTION
            </span>
            <h2 className="text-4xl sm:text-5xl font-bebas tracking-wide text-white">
              OUR PRODUCTION ROADMAP
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {WORKFLOW_STEPS.map((step) => (
              <div
                key={step.step}
                className="bg-[#121212] p-6 rounded-xl border border-white/10 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-bebas text-4xl text-[#F5A623]">
                      {step.step}
                    </span>
                    <span className="text-[10px] font-mono text-[#A0A0A0] bg-white/5 px-2 py-1 rounded border border-white/10">
                      {step.duration}
                    </span>
                  </div>

                  <h3 className="font-bebas text-xl text-white tracking-wide mb-2">
                    {step.phase}
                  </h3>

                  <p className="text-xs text-[#A0A0A0] font-light leading-relaxed mb-6">
                    {step.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-white/5">
                  <span className="text-[10px] font-mono text-[#666] tracking-widest uppercase block mb-2">
                    KEY DELIVERABLES
                  </span>
                  <div className="space-y-1">
                    {step.deliverables.map((deliv, idx) => (
                      <div key={idx} className="text-[11px] font-mono text-[#E0E0E0] flex items-center gap-1.5">
                        <span className="text-[#F5A623] text-xs">&rsaquo;</span>
                        <span>{deliv}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* HAVE A PROJECT IN MIND? SECTION */}
        <section className="mt-28 pt-20 border-t border-white/10 relative overflow-hidden">
          {/* Ambient golden glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-[#F5A623]/5 blur-[120px] pointer-events-none rounded-full" />

          <div className="relative max-w-4xl mx-auto text-center px-4">
            <span className="text-xs font-mono text-[#F5A623] tracking-[0.35em] uppercase block mb-4">
              NEW COLLABORATION
            </span>

            <h2 className="text-5xl sm:text-6xl md:text-7xl font-bebas tracking-wide text-white mb-6 leading-tight">
              HAVE A PROJECT IN MIND?
            </h2>

            <div className="max-w-2xl mx-auto space-y-3 mb-10 text-[#CCCCCC] text-base sm:text-lg font-light leading-relaxed">
              <p className="font-medium text-white/95 text-lg sm:text-xl">
                Tell us what you're looking to create.
              </p>
              <p className="text-[#A0A0A0] text-sm sm:text-base leading-relaxed">
                Whether you have a complete brief, a rough idea or just the beginning of a story, let's talk. We'll help shape it into a film that connects with your audience.
              </p>
            </div>

            <div className="mb-16">
              <button
                type="button"
                onClick={() => {
                  if (onRouteChange) {
                    onRouteChange('/contact');
                  } else {
                    window.history.pushState({}, '', '/contact');
                    window.dispatchEvent(new PopStateEvent('popstate'));
                  }
                }}
                className="group inline-flex items-center gap-3 px-8 py-4 rounded-xl bg-[#F5A623] hover:bg-[#ffb338] text-black font-bebas text-xl sm:text-2xl tracking-wider transition-all duration-300 shadow-[0_0_30px_rgba(245,166,35,0.25)] hover:shadow-[0_0_40px_rgba(245,166,35,0.45)] hover:-translate-y-0.5 cursor-pointer"
              >
                <span>START A CONVERSATION</span>
                <span className="group-hover:translate-x-1.5 transition-transform duration-300">&rarr;</span>
              </button>
            </div>

            <div className="pt-12 border-t border-white/10 space-y-4">
              <p className="font-bebas text-2xl sm:text-3xl md:text-4xl text-white tracking-widest uppercase">
                LET'S CREATE SOMETHING WORTH REMEMBERING.
              </p>
              <div className="pt-2">
                <div className="text-xs sm:text-sm font-mono text-[#F5A623] tracking-[0.3em] uppercase font-semibold">
                  INFINITY LIGHT DRAWINGS
                </div>
                <div className="text-xs sm:text-sm text-[#A0A0A0] italic font-serif mt-1 tracking-wide">
                  Giving Emotion to Motion.
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};
