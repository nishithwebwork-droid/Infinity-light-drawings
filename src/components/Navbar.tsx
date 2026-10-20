import React, { useState, useEffect } from 'react';
import { Menu, X, Clapperboard } from 'lucide-react';
import { STUDIO_INFO } from '../data/portfolioData';

interface NavbarProps {
  currentRoute: string;
  onRouteChange: (route: string) => void;
  onOpenAstroSpecs?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ currentRoute, onRouteChange, onOpenAstroSpecs }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'WORK', route: '/work' },
    { label: 'COLLABORATION', route: '/collaboration' },
    { label: 'OUR CLIENTS', route: '/clients', id: 'clients' },
    { label: 'NEWS', route: '/news' },
    { label: 'ABOUT', route: '/about' },
    { label: 'CONTACT', route: '/contact' }
  ];

  const handleNavClick = (route: string) => {
    onRouteChange(route);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <header
        id="main-header"
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#0A0A0A]/90 backdrop-blur-md border-b border-white/10 py-3 shadow-2xl'
            : 'bg-gradient-to-b from-[#0A0A0A]/90 via-[#0A0A0A]/40 to-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <button
              id="brand-logo-btn"
              onClick={() => handleNavClick('/')}
              className="flex items-center gap-3 text-left group cursor-pointer focus:outline-none"
            >
              <div className="w-8 h-8 rounded border border-[#F5A623]/40 bg-black/60 flex items-center justify-center text-[#F5A623] group-hover:border-[#F5A623] transition-colors">
                <Clapperboard className="w-4 h-4 text-[#F5A623]" />
              </div>
              <div className="flex flex-col">
                <span className="font-bebas tracking-wider text-xl sm:text-2xl text-white group-hover:text-[#F5A623] transition-colors leading-tight whitespace-nowrap">
                  {STUDIO_INFO.name}
                </span>
              </div>
            </button>

            {/* Desktop Navigation Links */}
            <nav id="desktop-nav" className="hidden md:flex items-center gap-8">
              {navLinks.map((item) => {
                const isActive = currentRoute === item.route;
                return (
                  <button
                    key={item.route}
                    id={`nav-link-${item.id || item.label.toLowerCase().replace(/\s+/g, '-')}`}
                    onClick={() => handleNavClick(item.route)}
                    className={`text-xs font-mono tracking-[0.2em] transition-all relative py-1 focus:outline-none cursor-pointer ${
                      isActive
                        ? 'text-[#F5A623] font-semibold'
                        : 'text-[#A0A0A0] hover:text-white'
                    }`}
                  >
                    {item.label}
                    {isActive && (
                      <span className="absolute bottom-0 left-0 w-full h-[2px] bg-[#F5A623] shadow-[0_0_8px_#F5A623]" />
                    )}
                  </button>
                );
              })}
            </nav>



            {/* Mobile Menu Toggle */}
            <div className="flex items-center gap-2 md:hidden">
              <button
                id="mobile-menu-toggle-btn"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 text-white/80 hover:text-white border border-white/10 rounded bg-white/5 focus:outline-none"
                aria-label="Toggle Menu"
              >
                {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div
          id="mobile-menu-overlay"
          className="fixed inset-0 z-40 bg-[#0A0A0A]/95 backdrop-blur-xl md:hidden pt-24 px-6 flex flex-col justify-between pb-12 animate-fade-in"
        >
          <div className="space-y-6">
            <div className="text-[11px] font-mono text-[#F5A623] tracking-[0.25em] uppercase border-b border-white/10 pb-2">
              STUDIO NAVIGATION
            </div>
            <div className="flex flex-col space-y-4">
              <button
                onClick={() => handleNavClick('/')}
                className={`text-left text-2xl font-bebas tracking-wide transition-colors ${
                  currentRoute === '/' ? 'text-[#F5A623]' : 'text-white hover:text-[#F5A623]'
                }`}
              >
                HOME
              </button>
              {navLinks.map((item) => (
                <button
                  key={item.route}
                  onClick={() => handleNavClick(item.route)}
                  className={`text-left text-2xl font-bebas tracking-wide transition-colors ${
                    currentRoute === item.route
                      ? 'text-[#F5A623]'
                      : 'text-white hover:text-[#F5A623]'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>

          <div className="pt-6 border-t border-white/10">
            <div className="text-center text-[10px] text-[#A0A0A0] font-mono">
              MUMBAI &bull; ODISHA &bull; GLOBAL PRODUCTIONS
            </div>
          </div>
        </div>
      )}
    </>
  );
};
