import React from 'react';
import { Star } from 'lucide-react';
import { CLIENT_PARTNERS, TESTIMONIALS } from '../data/portfolioData';
import { ClientLogo } from '../components/ClientLogo';

export const ClientsPage: React.FC = () => {
  return (
    <div id="clients-page" className="min-h-screen bg-[#0A0A0A] text-white pt-28 pb-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="border-b border-white/10 pb-12 mb-16">
          <span className="text-xs font-mono text-[#F5A623] tracking-[0.3em] uppercase block mb-3">
            COLLABORATORS & INSTITUTIONS
          </span>
          <h1 className="text-5xl sm:text-7xl font-bebas tracking-wide text-white leading-none">
            OUR CLIENTS.
          </h1>
          <p className="text-sm sm:text-base text-[#A0A0A0] max-w-2xl font-light mt-4 leading-relaxed">
            From national film development bodies and premium OTT streaming networks to multinational industrial enterprises and grassroots community foundations, we bring cinematic excellence to every alliance.
          </p>
        </div>

        {/* THE NETWORK - OUR CLIENTS SECTION */}
        <section id="clients-section" className="py-16 sm:py-20 px-4 sm:px-8 bg-white rounded-2xl border border-gray-200 shadow-2xl mb-24 overflow-hidden text-[#111111]">
          <div className="max-w-6xl mx-auto">
            <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-14">
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
                    client.id === 'gramvikas' || client.id === 'nacchhatrapur' ? 'p-2 sm:p-3' : client.id === 'skilledinodisha' ? 'p-3 sm:p-4' : 'p-4 sm:p-6'
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

        {/* Client Verdicts */}
        <div>
          <div className="text-center max-w-xl mx-auto mb-12">
            <span className="text-xs font-mono text-[#F5A623] tracking-[0.3em] uppercase block mb-2">
              CLIENT TESTIMONY
            </span>
            <h2 className="text-4xl font-bebas text-white">
              WHAT OUR PARTNERS SAY
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {TESTIMONIALS.map((t) => (
              <div key={t.id} className="p-6 rounded-xl bg-[#111111] border border-white/10 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-3.5 h-3.5 ${
                          i < t.rating
                            ? 'fill-[#F5A623] text-[#F5A623]'
                            : 'text-white/25'
                        }`}
                      />
                    ))}
                  </div>
                  <p className="text-xs sm:text-sm text-[#CCCCCC] italic font-serif leading-relaxed mb-6">
                    "{t.quote}"
                  </p>
                </div>
                <div className="border-t border-white/5 pt-4">
                  <div className="font-bebas text-lg text-white">{t.clientName}</div>
                  <div className="text-[11px] font-mono text-[#F5A623]">{t.clientTitle}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
