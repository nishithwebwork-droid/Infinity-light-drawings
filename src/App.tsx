import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { HomePage } from './pages/HomePage';
import { WorkPage } from './pages/WorkPage';
import { CollaborationPage } from './pages/CollaborationPage';
import { ClientsPage } from './pages/ClientsPage';
import { NewsPage } from './pages/NewsPage';
import { AboutPage } from './pages/AboutPage';
import { ContactPage } from './pages/ContactPage';
import { ProjectModal } from './components/ProjectModal';
import { BTSLightbox } from './components/BTSLightbox';
import { NewsModal } from './components/NewsModal';
import { AstroSpecsModal } from './components/AstroSpecsModal';
import { Project, BTSItem, NewsArticle } from './types';

export function App() {
  const [currentRoute, setCurrentRoute] = useState<string>('/');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [selectedBTS, setSelectedBTS] = useState<BTSItem | null>(null);
  const [selectedNews, setSelectedNews] = useState<NewsArticle | null>(null);
  const [isAstroSpecsOpen, setIsAstroSpecsOpen] = useState<boolean>(false);

  // Sync route with browser URL history
  useEffect(() => {
    const handlePopState = () => {
      const path = window.location.pathname || '/';
      setCurrentRoute(path);
    };

    window.addEventListener('popstate', handlePopState);
    // Initial check
    if (window.location.pathname && window.location.pathname !== '/') {
      setCurrentRoute(window.location.pathname);
    }

    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const handleRouteChange = (route: string) => {
    setCurrentRoute(route);
    window.history.pushState({}, '', route);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#0A0A0A] text-[#E2E8F0] selection:bg-[#F5A623] selection:text-black relative flex flex-col font-sans">
      {/* Global Navigation Header */}
      <Navbar
        currentRoute={currentRoute}
        onRouteChange={handleRouteChange}
        onOpenAstroSpecs={() => setIsAstroSpecsOpen(true)}
      />

      {/* Main Multi-Page Route Render */}
      <main className="flex-grow">
        {currentRoute === '/' && (
          <HomePage
            onRouteChange={handleRouteChange}
            onSelectProject={setSelectedProject}
            onSelectBTS={setSelectedBTS}
            onSelectNews={setSelectedNews}
          />
        )}

        {currentRoute === '/work' && (
          <WorkPage
            onSelectProject={setSelectedProject}
            onInitiateFilm={() => handleRouteChange('/contact')}
          />
        )}

        {currentRoute === '/collaboration' && (
          <CollaborationPage onRouteChange={handleRouteChange} />
        )}

        {currentRoute === '/clients' && (
          <ClientsPage />
        )}

        {currentRoute === '/news' && (
          <NewsPage
            onSelectNews={setSelectedNews}
          />
        )}

        {currentRoute === '/about' && (
          <AboutPage
            onContactClick={() => handleRouteChange('/contact')}
          />
        )}

        {currentRoute === '/contact' && (
          <ContactPage />
        )}
      </main>

      {/* Global Footer with Studio Details and Locations */}
      <Footer onRouteChange={handleRouteChange} />

      {/* Interactive Cinematic Modals */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />

      <BTSLightbox
        item={selectedBTS}
        onClose={() => setSelectedBTS(null)}
      />

      <NewsModal
        article={selectedNews}
        onClose={() => setSelectedNews(null)}
      />

      <AstroSpecsModal
        isOpen={isAstroSpecsOpen}
        onClose={() => setIsAstroSpecsOpen(false)}
      />
    </div>
  );
}

export default App;
