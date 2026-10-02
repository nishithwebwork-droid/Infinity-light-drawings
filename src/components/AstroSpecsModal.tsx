import React, { useState } from 'react';
import { X, Copy, Check, FileCode, FolderTree, Terminal } from 'lucide-react';

interface AstroSpecsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const AstroSpecsModal: React.FC<AstroSpecsModalProps> = ({ isOpen, onClose }) => {
  const [copiedTab, setCopiedTab] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState<'structure' | 'astro_config' | 'tailwind_config' | 'page_code'>('structure');

  if (!isOpen) return null;

  const handleCopy = (text: string, tabKey: string) => {
    navigator.clipboard.writeText(text);
    setCopiedTab(tabKey);
    setTimeout(() => setCopiedTab(null), 2000);
  };

  const directoryStructure = `infinity-drawings-astro/
├── astro.config.mjs
├── tailwind.config.cjs
├── package.json
├── tsconfig.json
├── public/
│   ├── favicon.svg
│   └── fonts/
├── src/
│   ├── layouts/
│   │   └── Layout.astro           # Global HTML wrapper, meta tags, fonts, noise
│   ├── components/
│   │   ├── Navbar.astro           # Responsive cinematic nav bar
│   │   ├── Footer.astro           # Studio locations, inquiry triggers
│   │   ├── Marquee.astro          # Infinite gold ticker
│   │   ├── ProjectCard.astro      # High-contrast hover card with aspect ratio
│   │   ├── ImpactStats.astro      # Quantitative metric counters
│   │   ├── BTSGallery.astro       # Masonry grid with category filters
│   │   ├── TeamCard.astro         # Collective bios & equipment specialty
│   │   └── CoverageMap.astro      # Mumbai & Odisha dual-hub matrix
│   ├── pages/
│   │   ├── index.astro            # Master Home page (14 core sections)
│   │   ├── work.astro             # Full portfolio & filterable filmography
│   │   ├── collaboration.astro    # Co-production models, roadmaps & pitch
│   │   ├── clients.astro          # Partner grid & in-depth case studies
│   │   ├── news.astro             # Press releases & festival selections
│   │   ├── about.astro            # Studio manifesto, Nishith S. Ray bio, tech
│   │   └── contact.astro          # Studio dossiers, Mumbai & Odisha lines
│   ├── styles/
│   │   └── global.css             # Theme variables, custom typography, grain
│   └── data/
│       └── portfolioData.ts       # Type-safe project catalogue & credits`;

  const astroConfigMjs = `// astro.config.mjs
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://infinitydrawings.com',
  integrations: [
    tailwind({
      applyBaseStyles: false,
    }),
  ],
  output: 'static',
  build: {
    inlineStylesheets: 'auto',
  },
  vite: {
    ssr: {
      noExternal: ['motion'],
    },
  },
});`;

  const tailwindConfigCjs = `// tailwind.config.cjs
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        cinematic: {
          bg: '#0A0A0A',
          surface: '#121212',
          surfaceHover: '#181818',
          gold: '#F5A623',
          goldBright: '#FFAA1D',
          goldMuted: 'rgba(245, 166, 35, 0.15)',
          muted: '#8E8E93',
          border: 'rgba(255, 255, 255, 0.1)',
        }
      },
      fontFamily: {
        bebas: ['"Bebas Neue"', 'sans-serif'],
        oswald: ['"Oswald"', 'sans-serif'],
        syne: ['"Syne"', 'sans-serif'],
        sans: ['"Inter"', 'sans-serif'],
        mono: ['"Space Grotesk"', 'monospace'],
      },
      animation: {
        'marquee': 'marquee 25s linear infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        }
      }
    },
  },
  plugins: [],
};`;

  const sampleAstroPage = `---
// src/pages/index.astro
import Layout from '../layouts/Layout.astro';
import Navbar from '../components/Navbar.astro';
import Footer from '../components/Footer.astro';
import Marquee from '../components/Marquee.astro';
import ProjectCard from '../components/ProjectCard.astro';
import { PROJECTS, STUDIO_INFO, STUDIO_PHILOSOPHIES } from '../data/portfolioData';

const featuredProjects = PROJECTS.filter(p => p.featured);
---

<Layout title="Infinity Light Drawings - Filmmaking Studio">
  <Navbar currentRoute="/" />

  <!-- HERO SECTION -->
  <section class="min-h-screen bg-[#0A0A0A] flex flex-col justify-center relative px-6 pt-24">
    <div class="max-w-7xl mx-auto w-full">
      <p class="font-mono text-xs tracking-[0.3em] text-[#F5A623] uppercase mb-4">
        DIRECTED BY NISHITH SAHASRANSU RAY
      </p>
      <h1 class="font-bebas text-7xl sm:text-9xl text-white tracking-tight leading-none">
        INFINITY LIGHT DRAWINGS
      </h1>
      <blockquote class="mt-8 text-xl font-serif italic text-[#F5A623] max-w-2xl border-l-2 border-[#F5A623] pl-4">
        "{STUDIO_INFO.taglineQuote}"
      </blockquote>
    </div>
  </section>

  <!-- INFINITE GOLD MARQUEE TICKER -->
  <Marquee />

  <!-- PORTFOLIO HIGHLIGHTS -->
  <section class="py-24 max-w-7xl mx-auto px-6">
    <h2 class="font-bebas text-5xl text-white mb-12">RAW FRAMES - OUR PORTFOLIO</h2>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
      {featuredProjects.map(project => (
        <ProjectCard project={project} />
      ))}
    </div>
  </section>

  <Footer />
</Layout>`;

  return (
    <div
      id="astro-specs-overlay"
      className="fixed inset-0 z-50 bg-black/90 backdrop-blur-xl flex items-center justify-center p-4 sm:p-6 overflow-y-auto"
      onClick={onClose}
    >
      <div
        className="bg-[#0F0F0F] border border-[#F5A623]/30 rounded-xl max-w-4xl w-full overflow-hidden shadow-[0_0_80px_rgba(245,166,35,0.15)] relative text-white my-auto flex flex-col max-h-[88vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-white/10 bg-[#141414]">
          <div className="flex items-center gap-3">
            <div className="p-1.5 rounded bg-[#F5A623]/20 text-[#F5A623]">
              <FileCode className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-bebas text-xl text-white tracking-wider">
                ASTRO + TAILWIND ARCHITECTURE SPECIFICATION
              </h3>
              <p className="text-[11px] font-mono text-[#A0A0A0]">
                Clean static-site structure, configuration, and components
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded hover:bg-white/10 text-[#A0A0A0] hover:text-white"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tab Selection */}
        <div className="flex items-center gap-2 px-6 py-2 bg-[#181818] border-b border-white/10 overflow-x-auto text-xs font-mono">
          <button
            onClick={() => setActiveTab('structure')}
            className={`px-3 py-1.5 rounded flex items-center gap-1.5 transition-colors ${
              activeTab === 'structure' ? 'bg-[#F5A623] text-black font-bold' : 'text-[#A0A0A0] hover:text-white'
            }`}
          >
            <FolderTree className="w-3.5 h-3.5" />
            <span>Directory Tree</span>
          </button>
          <button
            onClick={() => setActiveTab('astro_config')}
            className={`px-3 py-1.5 rounded flex items-center gap-1.5 transition-colors ${
              activeTab === 'astro_config' ? 'bg-[#F5A623] text-black font-bold' : 'text-[#A0A0A0] hover:text-white'
            }`}
          >
            <Terminal className="w-3.5 h-3.5" />
            <span>astro.config.mjs</span>
          </button>
          <button
            onClick={() => setActiveTab('tailwind_config')}
            className={`px-3 py-1.5 rounded flex items-center gap-1.5 transition-colors ${
              activeTab === 'tailwind_config' ? 'bg-[#F5A623] text-black font-bold' : 'text-[#A0A0A0] hover:text-white'
            }`}
          >
            <FileCode className="w-3.5 h-3.5" />
            <span>tailwind.config.cjs</span>
          </button>
          <button
            onClick={() => setActiveTab('page_code')}
            className={`px-3 py-1.5 rounded flex items-center gap-1.5 transition-colors ${
              activeTab === 'page_code' ? 'bg-[#F5A623] text-black font-bold' : 'text-[#A0A0A0] hover:text-white'
            }`}
          >
            <FileCode className="w-3.5 h-3.5" />
            <span>index.astro Template</span>
          </button>
        </div>

        {/* Content Box */}
        <div className="p-6 overflow-y-auto font-mono text-xs text-[#CCCCCC] bg-[#0A0A0A] flex-1 relative">
          {activeTab === 'structure' && (
            <div>
              <div className="flex justify-between items-center mb-3">
                <span className="text-[#F5A623] font-semibold">// ASTRO 4.x DIRECTORY TOPOLOGY</span>
                <button
                  onClick={() => handleCopy(directoryStructure, 'structure')}
                  className="flex items-center gap-1 px-2.5 py-1 bg-white/10 hover:bg-white/20 rounded text-[11px] text-white"
                >
                  {copiedTab === 'structure' ? <Check className="w-3 h-3 text-green-400" /> : <Copy className="w-3 h-3" />}
                  <span>{copiedTab === 'structure' ? 'Copied' : 'Copy'}</span>
                </button>
              </div>
              <pre className="p-4 rounded bg-[#111111] border border-white/10 overflow-x-auto text-[#E0E0E0] leading-relaxed">
                {directoryStructure}
              </pre>
            </div>
          )}

          {activeTab === 'astro_config' && (
            <div>
              <div className="flex justify-between items-center mb-3">
                <span className="text-[#F5A623] font-semibold">// ASTRO INTEGRATION CONFIGURATION</span>
                <button
                  onClick={() => handleCopy(astroConfigMjs, 'astro_config')}
                  className="flex items-center gap-1 px-2.5 py-1 bg-white/10 hover:bg-white/20 rounded text-[11px] text-white"
                >
                  {copiedTab === 'astro_config' ? <Check className="w-3 h-3 text-green-400" /> : <Copy className="w-3 h-3" />}
                  <span>{copiedTab === 'astro_config' ? 'Copied' : 'Copy'}</span>
                </button>
              </div>
              <pre className="p-4 rounded bg-[#111111] border border-white/10 overflow-x-auto text-[#E0E0E0] leading-relaxed">
                {astroConfigMjs}
              </pre>
            </div>
          )}

          {activeTab === 'tailwind_config' && (
            <div>
              <div className="flex justify-between items-center mb-3">
                <span className="text-[#F5A623] font-semibold">// TAILWIND COLOR & TYPOGRAPHY SYSTEM</span>
                <button
                  onClick={() => handleCopy(tailwindConfigCjs, 'tailwind_config')}
                  className="flex items-center gap-1 px-2.5 py-1 bg-white/10 hover:bg-white/20 rounded text-[11px] text-white"
                >
                  {copiedTab === 'tailwind_config' ? <Check className="w-3 h-3 text-green-400" /> : <Copy className="w-3 h-3" />}
                  <span>{copiedTab === 'tailwind_config' ? 'Copied' : 'Copy'}</span>
                </button>
              </div>
              <pre className="p-4 rounded bg-[#111111] border border-white/10 overflow-x-auto text-[#E0E0E0] leading-relaxed">
                {tailwindConfigCjs}
              </pre>
            </div>
          )}

          {activeTab === 'page_code' && (
            <div>
              <div className="flex justify-between items-center mb-3">
                <span className="text-[#F5A623] font-semibold">// SAMPLE ASTRO COMPONENT TEMPLATE</span>
                <button
                  onClick={() => handleCopy(sampleAstroPage, 'page_code')}
                  className="flex items-center gap-1 px-2.5 py-1 bg-white/10 hover:bg-white/20 rounded text-[11px] text-white"
                >
                  {copiedTab === 'page_code' ? <Check className="w-3 h-3 text-green-400" /> : <Copy className="w-3 h-3" />}
                  <span>{copiedTab === 'page_code' ? 'Copied' : 'Copy'}</span>
                </button>
              </div>
              <pre className="p-4 rounded bg-[#111111] border border-white/10 overflow-x-auto text-[#E0E0E0] leading-relaxed">
                {sampleAstroPage}
              </pre>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="px-6 py-3 bg-[#141414] border-t border-white/10 flex items-center justify-between text-xs font-mono text-[#A0A0A0]">
          <span>Full Astro export files generated in <code className="text-[#F5A623]">/astro-project/</code></span>
          <button
            onClick={onClose}
            className="px-4 py-1.5 bg-[#F5A623] text-black font-bold rounded hover:bg-[#FFAA1D]"
          >
            RETURN TO LIVE PREVIEW
          </button>
        </div>
      </div>
    </div>
  );
};
