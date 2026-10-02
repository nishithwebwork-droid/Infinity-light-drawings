import React, { useState } from 'react';
import { 
  Mail, 
  Phone, 
  MapPin, 
  MessageSquare,
  ArrowUpRight,
  Copy,
  Check
} from 'lucide-react';
import { STUDIO_INFO } from '../data/portfolioData';

export const ContactPage: React.FC = () => {
  const [copiedEmail, setCopiedEmail] = useState(false);

  const emailSubject = encodeURIComponent("Film Production Inquiry - Infinity Light Drawings");
  const mailtoUri = `mailto:${STUDIO_INFO.generalEmail}?subject=${emailSubject}`;
  const gmailComposeUri = `https://mail.google.com/mail/?view=cm&fs=1&to=${STUDIO_INFO.generalEmail}&su=${emailSubject}`;

  const handleCopyEmail = (e: React.MouseEvent) => {
    e.preventDefault();
    navigator.clipboard.writeText(STUDIO_INFO.generalEmail);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };
  return (
    <div id="contact-page" className="min-h-screen bg-[#0A0A0A] text-white pt-28 pb-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="border-b border-white/10 pb-12 mb-16 text-center">
          <span className="text-xs font-mono text-[#F5A623] tracking-[0.3em] uppercase block mb-3">
            INITIATE CONVERSATION
          </span>
          <h1 className="text-5xl sm:text-7xl font-bebas tracking-wide text-white leading-none">
            CONTACT THE STUDIO.
          </h1>
          <p className="text-sm sm:text-base text-[#A0A0A0] max-w-2xl mx-auto font-light mt-4 leading-relaxed">
            Have a project in development, need line production across India, or want to schedule a screening call with creative director Nishith Sahasransu Ray? Connect through our official channels below.
          </p>
        </div>

        {/* Direct Studio Hotline - Large Prominent Section */}
        <div className="bg-[#111111] p-8 sm:p-12 rounded-2xl border border-white/10 text-center mb-16 shadow-2xl relative overflow-hidden">
          <div className="relative z-10">
            <span className="text-xs font-mono text-[#F5A623] tracking-[0.3em] uppercase block mb-2">
              IMMEDIATE ACCESS
            </span>
            <h2 className="text-4xl sm:text-6xl md:text-7xl font-bebas text-white tracking-wide mb-4">
              DIRECT STUDIO HOTLINE
            </h2>
            <p className="text-sm sm:text-base font-mono text-[#A0A0A0] max-w-xl mx-auto mb-10">
              Direct desk access with creative director Nishith Sahasransu Ray & production management.
            </p>

            <div className="grid grid-cols-2 gap-3 sm:gap-6 max-w-3xl mx-auto mb-8 text-left">
              {/* Phone Card */}
              <div className="p-4 sm:p-6 rounded-xl bg-black/60 border border-white/10 hover:border-[#F5A623]/50 transition-colors flex flex-col justify-between group">
                <div>
                  <div className="flex items-center justify-between mb-3 sm:mb-4">
                    <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg bg-[#F5A623]/10 border border-[#F5A623]/30 flex items-center justify-center text-[#F5A623]">
                      <Phone className="w-4 h-4 sm:w-5 sm:h-5" />
                    </div>
                    <span className="text-[9px] sm:text-[10px] font-mono text-[#888] tracking-widest uppercase truncate ml-2">DIRECTOR'S DESK</span>
                  </div>
                  <div className="text-white text-base sm:text-xl md:text-2xl font-mono font-medium tracking-tight mb-1 truncate" title={STUDIO_INFO.directPhone}>
                    {STUDIO_INFO.directPhone}
                  </div>
                  <p className="text-[11px] sm:text-xs text-[#888] font-light line-clamp-2">
                    Direct line for urgent film commissions, festival inquiries & line production.
                  </p>
                </div>
                <a
                  href={`tel:${STUDIO_INFO.directPhone}`}
                  className="mt-6 w-full py-3.5 px-3 rounded-lg bg-[#F5A623] hover:bg-[#FFAA1D] active:scale-[0.99] text-black font-mono font-bold text-xs sm:text-sm tracking-wider flex items-center justify-center gap-2 transition-all cursor-pointer shadow-[0_0_20px_rgba(245,166,35,0.25)] whitespace-nowrap"
                >
                  <Phone className="w-3.5 h-3.5 shrink-0" />
                  <span>CALL NOW</span>
                </a>
              </div>

              {/* Email Card */}
              <div className="p-4 sm:p-6 rounded-xl bg-black/60 border border-white/10 hover:border-[#F5A623]/50 transition-colors flex flex-col justify-between group">
                <div>
                  <div className="flex items-center justify-between mb-3 sm:mb-4">
                    <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg bg-[#F5A623]/10 border border-[#F5A623]/30 flex items-center justify-center text-[#F5A623]">
                      <Mail className="w-4 h-4 sm:w-5 sm:h-5" />
                    </div>
                    <div className="flex items-center gap-1.5">
                      <span className="text-[9px] sm:text-[10px] font-mono text-[#888] tracking-widest uppercase truncate">ELECTRONIC MAIL</span>
                      <button
                        type="button"
                        onClick={handleCopyEmail}
                        title="Copy email address"
                        className="p-1 rounded hover:bg-white/10 text-[#777] hover:text-[#F5A623] transition-colors cursor-pointer shrink-0"
                      >
                        {copiedEmail ? <Check className="w-3.5 h-3.5 text-[#25D366]" /> : <Copy className="w-3.5 h-3.5" />}
                      </button>
                    </div>
                  </div>
                  <div className="text-white text-xs sm:text-lg md:text-xl font-mono font-medium tracking-tight mb-1 truncate" title={STUDIO_INFO.generalEmail}>
                    {STUDIO_INFO.generalEmail}
                  </div>
                  <p className="text-[11px] sm:text-xs text-[#888] font-light line-clamp-2">
                    Official inbox for screenplays, treatment lookbooks & commercial briefs.
                  </p>
                </div>

                <a
                  href={gmailComposeUri}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => {
                    // Merged action: opens Gmail web directly to compose to infinitylightdrawings@gmail.com, with mailto fallback
                    try {
                      const win = window.open(gmailComposeUri, '_blank', 'noopener,noreferrer');
                      if (!win || win.closed || typeof win.closed === 'undefined') {
                        window.location.href = mailtoUri;
                      }
                    } catch {
                      window.location.href = mailtoUri;
                    }
                  }}
                  className="mt-6 w-full py-3.5 px-3 rounded-lg bg-[#F5A623] hover:bg-[#FFAA1D] active:scale-[0.99] text-black font-mono font-bold text-xs sm:text-sm tracking-wider flex items-center justify-center gap-1.5 sm:gap-2 transition-all cursor-pointer shadow-[0_0_20px_rgba(245,166,35,0.25)] hover:shadow-[0_0_25px_rgba(245,166,35,0.35)] whitespace-nowrap"
                >
                  <Mail className="w-3.5 h-3.5 shrink-0" />
                  <span>SEND EMAIL NOW</span>
                  <ArrowUpRight className="w-3.5 h-3.5 opacity-70 shrink-0 hidden sm:inline-block" />
                </a>
              </div>
            </div>

            {/* WhatsApp Trigger */}
            <div className="max-w-3xl mx-auto">
              <a
                href={STUDIO_INFO.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => {
                  // Direct navigation fallback ensuring WhatsApp opens reliably across browser & iframe contexts
                  try {
                    window.open(STUDIO_INFO.whatsappLink, '_blank', 'noopener,noreferrer');
                  } catch {
                    // fall back to default href navigation
                  }
                }}
                className="w-full py-4 bg-[#25D366] hover:bg-[#20bd5a] active:scale-[0.99] text-black font-mono font-bold text-xs sm:text-sm tracking-widest rounded-xl flex items-center justify-center gap-2.5 transition-all cursor-pointer shadow-[0_0_25px_rgba(37,211,102,0.25)]"
              >
                <MessageSquare className="w-5 h-5 fill-black" />
                <span>CONNECT VIA WHATSAPP BUSINESS &bull; {STUDIO_INFO.whatsappPhone}</span>
              </a>
            </div>
          </div>
        </div>

        {/* Production Hubs in the Center */}
        <div className="text-center">
          <div className="mb-10">
            <span className="text-xs font-mono text-[#F5A623] tracking-[0.3em] uppercase block mb-2">
              LOCATIONS ACROSS INDIA
            </span>
            <h3 className="text-3xl sm:text-5xl font-bebas tracking-wide text-white">
              OUR PRODUCTION HUBS
            </h3>
            <p className="text-xs sm:text-sm font-mono text-[#888888] mt-2 max-w-md mx-auto">
              Equipped with complete camera packages, editing suites & location logistics.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto text-center">
            {/* Mumbai Studio Card */}
            <div className="bg-[#111111] p-8 sm:p-10 rounded-2xl border border-white/10 hover:border-[#F5A623]/40 transition-all flex flex-col items-center text-center">
              <div className="w-12 h-12 rounded-full bg-[#F5A623]/10 border border-[#F5A623]/30 flex items-center justify-center text-[#F5A623] mb-4">
                <MapPin className="w-5 h-5" />
              </div>
              <span className="text-[10px] font-mono text-[#F5A623] tracking-widest uppercase mb-1">
                WESTERN INDIA HUB
              </span>
              <h4 className="text-3xl font-bebas text-white tracking-wider mb-2">
                MUMBAI STUDIO
              </h4>
              <span className="text-[11px] font-mono text-[#888] bg-black/60 px-3 py-1 rounded-full border border-white/5 mb-4">
                {STUDIO_INFO.locations.mumbai.coordinates}
              </span>
              <p className="text-sm text-[#CCCCCC] font-light max-w-xs mb-6 leading-relaxed">
                {STUDIO_INFO.locations.mumbai.address}
              </p>
              <div className="w-full pt-4 border-t border-white/10 text-xs font-mono text-[#A0A0A0] space-y-2">
                <div className="flex items-center justify-center gap-2">
                  <Phone className="w-3.5 h-3.5 text-[#F5A623]" />
                  <a href={`tel:${STUDIO_INFO.locations.mumbai.phone}`} className="hover:text-white transition-colors">
                    {STUDIO_INFO.locations.mumbai.phone}
                  </a>
                </div>
                <div className="flex items-center justify-center gap-2">
                  <Mail className="w-3.5 h-3.5 text-[#F5A623]" />
                  <a href={`mailto:${STUDIO_INFO.locations.mumbai.email}`} className="hover:text-white transition-colors">
                    {STUDIO_INFO.locations.mumbai.email}
                  </a>
                </div>
              </div>
            </div>

            {/* Odisha Production Hub Card */}
            <div className="bg-[#111111] p-8 sm:p-10 rounded-2xl border border-white/10 hover:border-[#F5A623]/40 transition-all flex flex-col items-center text-center">
              <div className="w-12 h-12 rounded-full bg-[#F5A623]/10 border border-[#F5A623]/30 flex items-center justify-center text-[#F5A623] mb-4">
                <MapPin className="w-5 h-5" />
              </div>
              <span className="text-[10px] font-mono text-[#F5A623] tracking-widest uppercase mb-1">
                EASTERN INDIA HUB
              </span>
              <h4 className="text-3xl font-bebas text-white tracking-wider mb-2">
                ODISHA PRODUCTION HUB
              </h4>
              <span className="text-[11px] font-mono text-[#888] bg-black/60 px-3 py-1 rounded-full border border-white/5 mb-4">
                {STUDIO_INFO.locations.odisha.coordinates}
              </span>
              <p className="text-sm text-[#CCCCCC] font-light max-w-xs mb-6 leading-relaxed">
                {STUDIO_INFO.locations.odisha.address}
              </p>
              <div className="w-full pt-4 border-t border-white/10 text-xs font-mono text-[#A0A0A0] space-y-2">
                <div className="flex items-center justify-center gap-2">
                  <Phone className="w-3.5 h-3.5 text-[#F5A623]" />
                  <a href={`tel:${STUDIO_INFO.locations.odisha.phone}`} className="hover:text-white transition-colors">
                    {STUDIO_INFO.locations.odisha.phone}
                  </a>
                </div>
                <div className="flex items-center justify-center gap-2">
                  <Mail className="w-3.5 h-3.5 text-[#F5A623]" />
                  <a href={`mailto:${STUDIO_INFO.locations.odisha.email}`} className="hover:text-white transition-colors">
                    {STUDIO_INFO.locations.odisha.email}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
