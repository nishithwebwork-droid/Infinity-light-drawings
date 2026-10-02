import React from 'react';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Film, 
  Instagram, 
  Linkedin, 
  Youtube, 
  Video 
} from 'lucide-react';
import { STUDIO_INFO } from '../data/portfolioData';

interface FooterProps {
  onRouteChange: (route: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onRouteChange }) => {
  const handleNav = (route: string) => {
    onRouteChange(route);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="studio-footer" className="bg-[#070707] text-white border-t border-white/10 pt-20 pb-12 relative overflow-hidden">
      {/* Background Watermark */}
      <div className="absolute right-0 bottom-0 pointer-events-none select-none opacity-[0.03] text-white font-bebas text-[18vw] leading-none whitespace-nowrap">
        CONNECTIVITY
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Top Call to Action Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 pb-16 border-b border-white/10">
          <div className="lg:col-span-7">
            <span className="text-xs font-mono text-[#F5A623] tracking-[0.25em] uppercase block mb-3">
              INITIATE COLLABORATION
            </span>
            <h2 className="text-5xl sm:text-6xl md:text-7xl font-bebas tracking-wide text-white mb-6 leading-none">
              WORK WITH US.
            </h2>
            <p className="text-sm sm:text-base text-[#A0A0A0] max-w-xl font-light leading-relaxed">
              Whether you are developing a theatrical feature, climate documentary, high-impact commercial TVC, or seeking an experienced co-production unit in India, our lens is ready.
            </p>
          </div>

          {/* Quick Direct Contacts */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
            <div className="bg-[#101010] p-6 rounded-lg border border-white/10">
              <div className="flex items-center gap-2 text-xs font-mono text-[#F5A623] tracking-widest uppercase mb-4">
                <MapPin className="w-3.5 h-3.5" />
                <span>MUMBAI STUDIO</span>
              </div>
              <p className="text-sm text-white font-medium mb-1">
                {STUDIO_INFO.locations.mumbai.address}
              </p>
              <div className="text-xs text-[#A0A0A0] font-mono mt-3 space-y-1">
                <div className="flex items-center gap-2">
                  <Phone className="w-3 h-3 text-[#F5A623]" />
                  <span>{STUDIO_INFO.locations.mumbai.phone}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="w-3 h-3 text-[#F5A623]" />
                  <span>{STUDIO_INFO.locations.mumbai.email}</span>
                </div>
              </div>
            </div>

            <div className="bg-[#101010] p-6 rounded-lg border border-white/10">
              <div className="flex items-center gap-2 text-xs font-mono text-[#F5A623] tracking-widest uppercase mb-4">
                <MapPin className="w-3.5 h-3.5" />
                <span>ODISHA PRODUCTION HUB</span>
              </div>
              <p className="text-sm text-white font-medium mb-1">
                {STUDIO_INFO.locations.odisha.address}
              </p>
              <div className="text-xs text-[#A0A0A0] font-mono mt-3 space-y-1">
                <div className="flex items-center gap-2">
                  <Phone className="w-3 h-3 text-[#F5A623]" />
                  <span>{STUDIO_INFO.locations.odisha.phone}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="w-3 h-3 text-[#F5A623]" />
                  <span>{STUDIO_INFO.locations.odisha.email}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Nav Links & Socials */}
        <div className="pt-10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex flex-wrap items-center gap-6 text-xs font-mono tracking-widest">
            <button onClick={() => handleNav('/')} className="text-[#A0A0A0] hover:text-white transition-colors cursor-pointer">
              HOME
            </button>
            <button onClick={() => handleNav('/work')} className="text-[#A0A0A0] hover:text-white transition-colors cursor-pointer">
              WORK
            </button>
            <button onClick={() => handleNav('/collaboration')} className="text-[#A0A0A0] hover:text-white transition-colors cursor-pointer">
              COLLABORATION
            </button>
            <button onClick={() => handleNav('/clients')} className="text-[#A0A0A0] hover:text-white transition-colors cursor-pointer">
              OUR CLIENTS
            </button>
            <button onClick={() => handleNav('/news')} className="text-[#A0A0A0] hover:text-white transition-colors cursor-pointer">
              NEWS
            </button>
            <button onClick={() => handleNav('/about')} className="text-[#A0A0A0] hover:text-white transition-colors cursor-pointer">
              ABOUT
            </button>
            <button onClick={() => handleNav('/contact')} className="text-[#A0A0A0] hover:text-white transition-colors cursor-pointer">
              CONTACT
            </button>
          </div>

          {/* Social Icons */}
          <div className="flex items-center gap-4">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 rounded border border-white/10 bg-white/5 flex items-center justify-center text-[#A0A0A0] hover:text-[#F5A623] hover:border-[#F5A623]/50 transition-colors"
              aria-label="Instagram"
            >
              <Instagram className="w-4 h-4" />
            </a>
            <a
              href="https://vimeo.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 rounded border border-white/10 bg-white/5 flex items-center justify-center text-[#A0A0A0] hover:text-[#F5A623] hover:border-[#F5A623]/50 transition-colors"
              aria-label="Vimeo"
            >
              <Video className="w-4 h-4" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 rounded border border-white/10 bg-white/5 flex items-center justify-center text-[#A0A0A0] hover:text-[#F5A623] hover:border-[#F5A623]/50 transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <a
              href="https://youtube.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 rounded border border-white/10 bg-white/5 flex items-center justify-center text-[#A0A0A0] hover:text-[#F5A623] hover:border-[#F5A623]/50 transition-colors"
              aria-label="YouTube"
            >
              <Youtube className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Legal & Attribution */}
        <div className="mt-10 pt-6 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between text-[11px] font-mono text-[#666] gap-4">
          <div>
            &copy; {new Date().getFullYear()} {STUDIO_INFO.name}. All Rights Reserved. Directed by {STUDIO_INFO.founder.name}.
          </div>
          <div className="flex items-center gap-4">
            <span>ARRI RAW &bull; REDCODE 8K &bull; ACES CC</span>
            <span className="text-[#F5A623]">MUMBAI &bull; BHUBANESWAR</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
