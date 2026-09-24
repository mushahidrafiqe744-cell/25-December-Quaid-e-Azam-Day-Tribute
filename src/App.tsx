import React, { useState, useEffect } from 'react';
import { NavPage, GalleryItem } from './types';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { ParticleCanvas } from './components/ParticleCanvas';
import { HomeView } from './components/views/HomeView';
import { BiographyView } from './components/views/BiographyView';
import { TimelineView } from './components/views/TimelineView';
import { VisionView } from './components/views/VisionView';
import { QuotesView } from './components/views/QuotesView';
import { GalleryView } from './components/views/GalleryView';
import { TributeView } from './components/views/TributeView';
import { TourView } from './components/views/TourView';
import { StudioView } from './components/views/StudioView';
import { LightboxModal } from './components/modals/LightboxModal';
import { PledgeModal } from './components/modals/PledgeModal';
import { VideoDocModal } from './components/modals/VideoDocModal';
import { WelcomeQuizModal } from './components/modals/WelcomeQuizModal';
import { getVerifiedPassStatus } from './utils/quizManager';
import { ArrowUp, Home } from 'lucide-react';

export default function App() {
  const [currentPage, setCurrentPage] = useState<NavPage>('home');
  const [lightboxItem, setLightboxItem] = useState<GalleryItem | null>(null);
  const [isPledgeModalOpen, setIsPledgeModalOpen] = useState<boolean>(false);
  const [isVideoDocModalOpen, setIsVideoDocModalOpen] = useState<boolean>(false);
  const [isWelcomeQuizOpen, setIsWelcomeQuizOpen] = useState<boolean>(false);
  const [showScrollTop, setShowScrollTop] = useState<boolean>(false);
  const [quizVersion, setQuizVersion] = useState<number>(0);

  // Auto-prompt Welcome Quiz on first visit so user can earn Best Pakistani Honor Card and open website
  useEffect(() => {
    const status = getVerifiedPassStatus();
    const hasSeenWelcome = sessionStorage.getItem('quaid_seen_welcome_challenge');
    if (!status.isPassed && !hasSeenWelcome) {
      setIsWelcomeQuizOpen(true);
      sessionStorage.setItem('quaid_seen_welcome_challenge', 'true');
    }
  }, []);

  // Monitor scroll for back-to-top button
  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavigate = (page: NavPage) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#03130d] text-[#e7f3ec] relative flex flex-col font-sans-ui selection:bg-[#00d084]/30 selection:text-white">
      {/* Background Animated Particle Canvas */}
      <ParticleCanvas />

      {/* Fixed Top Bar Navigation */}
      <Navbar
        currentPage={currentPage}
        onNavigate={handleNavigate}
        onOpenPledgeModal={() => setIsPledgeModalOpen(true)}
        onOpenWelcomeQuiz={() => setIsWelcomeQuizOpen(true)}
      />

      {/* Main Content Area with Smooth Transitions */}
      <main className="flex-1 relative z-10">
        {currentPage === 'home' && (
          <HomeView
            onNavigate={handleNavigate}
            onOpenDocModal={() => setIsVideoDocModalOpen(true)}
            onOpenPledgeModal={() => setIsPledgeModalOpen(true)}
            onOpenWelcomeQuiz={() => setIsWelcomeQuizOpen(true)}
          />
        )}

        {currentPage === 'biography' && (
          <BiographyView
            onNavigate={handleNavigate}
            onOpenDocModal={() => setIsVideoDocModalOpen(true)}
          />
        )}

        {currentPage === 'timeline' && <TimelineView />}

        {currentPage === 'vision' && (
          <VisionView
            onOpenDocModal={() => setIsVideoDocModalOpen(true)}
            onOpenPledgeModal={() => setIsPledgeModalOpen(true)}
          />
        )}

        {currentPage === 'quotes' && <QuotesView />}

        {currentPage === 'gallery' && (
          <GalleryView
            onOpenLightbox={(item) => setLightboxItem(item)}
          />
        )}

        {currentPage === 'tour' && <TourView />}

        {currentPage === 'studio' && <StudioView />}

        {currentPage === 'tribute' && (
          <TributeView
            key={quizVersion}
            onNavigate={handleNavigate}
            onOpenDocModal={() => setIsVideoDocModalOpen(true)}
            onOpenPledgeModal={() => setIsPledgeModalOpen(true)}
          />
        )}
      </main>

      {/* Floating Controls: Back to Home & Scroll to Top */}
      <div className="fixed bottom-5 right-5 z-40 flex flex-col items-center gap-2">
        {currentPage !== 'home' && (
          <button
            onClick={() => handleNavigate('home')}
            className="p-3 rounded-full bg-emerald-950/90 text-amber-300 hover:text-white hover:bg-emerald-900 border border-amber-400/40 shadow-[0_4px_20px_rgba(0,0,0,0.6)] backdrop-blur-md transition-all hover:scale-110 active:scale-95 cursor-pointer"
            title="Return to Home"
            aria-label="Return to Home"
          >
            <Home className="w-4 h-4" />
          </button>
        )}

        {showScrollTop && (
          <button
            onClick={scrollToTop}
            className="p-3 rounded-full bg-emerald-950/90 text-emerald-200 hover:text-white hover:bg-emerald-900 border border-emerald-700/50 shadow-[0_4px_20px_rgba(0,0,0,0.6)] backdrop-blur-md transition-all hover:scale-110 active:scale-95 cursor-pointer"
            title="Scroll to Top"
            aria-label="Scroll to Top"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        )}
      </div>

      {/* Footer */}
      <Footer
        onNavigate={handleNavigate}
        onOpenPledgeModal={() => setIsPledgeModalOpen(true)}
      />

      {/* Lightbox Modal */}
      <LightboxModal
        item={lightboxItem}
        onClose={() => setLightboxItem(null)}
      />

      {/* National Pledge Certificate Modal */}
      <PledgeModal
        isOpen={isPledgeModalOpen}
        onClose={() => setIsPledgeModalOpen(false)}
      />

      {/* Archival Speech & Documentary Video Player Modal */}
      <VideoDocModal
        isOpen={isVideoDocModalOpen}
        onClose={() => setIsVideoDocModalOpen(false)}
      />

      {/* Welcome / 50% Passing Challenge Modal */}
      <WelcomeQuizModal
        isOpen={isWelcomeQuizOpen}
        onClose={() => setIsWelcomeQuizOpen(false)}
        onPassEarned={() => setQuizVersion((v) => v + 1)}
      />
    </div>
  );
}
