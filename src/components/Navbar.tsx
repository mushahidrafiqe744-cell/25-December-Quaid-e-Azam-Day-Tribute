import React, { useState } from 'react';
import { NavPage } from '../types';
import { AudioPlayerWidget } from './AudioPlayerWidget';
import { Menu, X, Award, Sparkles, HelpCircle, ShieldCheck } from 'lucide-react';
import { getVerifiedPassStatus } from '../utils/quizManager';

interface NavbarProps {
  currentPage: NavPage;
  onNavigate: (page: NavPage) => void;
  onOpenPledgeModal: () => void;
  onOpenWelcomeQuiz: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentPage,
  onNavigate,
  onOpenPledgeModal,
  onOpenWelcomeQuiz,
}) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const verifiedStatus = getVerifiedPassStatus();

  const navItems: { id: NavPage; label: string; badge?: string }[] = [
    { id: 'home', label: 'Home' },
    { id: 'biography', label: 'Quaid-e-Azam' },
    { id: 'timeline', label: 'Timeline' },
    { id: 'vision', label: 'Vision' },
    { id: 'quotes', label: 'Quotes' },
    { id: 'gallery', label: 'Gallery' },
    { id: 'tour', label: '360° Memorial' },
    { id: 'studio', label: 'Poster Studio' },
    { id: 'tribute', label: 'Tribute & Quiz' },
  ];

  const handleNavClick = (id: NavPage) => {
    onNavigate(id);
    setIsMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#03130d]/95 backdrop-blur-md border-b border-emerald-900/40">
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 h-18 flex items-center justify-between gap-2">
        {/* Zone 1: Wordmark */}
        <button
          onClick={() => handleNavClick('home')}
          className="flex items-center gap-2 sm:gap-3 text-left group focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400 rounded-lg p-1 shrink-0"
        >
          <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-gradient-to-br from-emerald-600 to-[#01411C] p-0.5 border border-amber-400/40 shadow-[0_0_12px_rgba(16,185,129,0.3)] flex items-center justify-center shrink-0">
            {/* Pakistan Crescent & Star icon */}
            <svg viewBox="0 0 100 100" className="w-5 h-5 sm:w-6 sm:h-6 text-white fill-current shrink-0">
              <circle cx="50" cy="50" r="46" fill="#01411C" />
              <circle cx="52" cy="50" r="27" fill="#ffffff" />
              <circle cx="59" cy="46" r="24" fill="#01411C" />
              <polygon points="62,32 65,41 74,41 67,46 70,55 62,50 54,55 57,46 50,41 59,41" fill="#ffffff" />
            </svg>
          </div>
          <div className="flex flex-col whitespace-nowrap">
            <span className="font-cinzel text-xs sm:text-base lg:text-lg font-bold tracking-wider text-emerald-100 group-hover:text-amber-300 transition-colors whitespace-nowrap">
              Quaid-e-Azam Day
            </span>
            <span className="text-[9px] sm:text-[10px] uppercase tracking-widest text-emerald-400/70 font-sans-ui -mt-0.5 whitespace-nowrap hidden xs:inline">
              25 December · Father of the Nation
            </span>
          </div>
        </button>

        {/* Zone 2: Navigation Links */}
        <nav className="hidden xl:flex items-center gap-1">
          {navItems.map((item) => {
            const isActive = currentPage === item.id;
            return (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`relative px-2.5 py-1.5 text-xs font-medium transition-all duration-200 rounded-lg whitespace-nowrap ${
                  isActive
                    ? 'text-amber-300 font-semibold bg-emerald-950/80 shadow-[inset_0_1px_0_rgba(212,175,55,0.2)]'
                    : 'text-emerald-100/80 hover:text-white hover:bg-emerald-900/30'
                }`}
              >
                {item.label}
                {isActive && (
                  <span className="absolute bottom-0 left-2 right-2 h-0.5 bg-gradient-to-r from-transparent via-amber-400 to-transparent shadow-[0_0_8px_#fbbf24]" />
                )}
              </button>
            );
          })}
        </nav>

        {/* Zone 3: Actions */}
        <div className="flex items-center gap-1.5 sm:gap-2 shrink-0">
          {/* Audio Player Widget */}
          <AudioPlayerWidget />

          {/* 50% Pass Challenge / Best Pakistani Honor Card Button */}
          {verifiedStatus.isPassed ? (
            <button
              onClick={onOpenWelcomeQuiz}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-bold text-emerald-300 bg-emerald-950 border border-emerald-500/50 rounded-full cursor-pointer hover:bg-emerald-900 shadow-[0_0_12px_rgba(16,185,129,0.2)] whitespace-nowrap"
              title="View your Best Pakistani Honor Card"
            >
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
              <span>Best Pakistani Card ✓</span>
            </button>
          ) : (
            <button
              onClick={onOpenWelcomeQuiz}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-amber-300 bg-emerald-950/80 hover:bg-emerald-900 border border-amber-400/30 rounded-full cursor-pointer whitespace-nowrap"
              title="Take Entry Challenge"
            >
              <HelpCircle className="w-3.5 h-3.5 text-amber-400" />
              <span>50% Challenge</span>
            </button>
          )}

          {/* National Pledge CTA */}
          <button
            onClick={onOpenPledgeModal}
            className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-emerald-950 bg-gradient-to-r from-amber-200 via-amber-300 to-amber-400 rounded-full hover:shadow-[0_0_20px_rgba(251,191,36,0.5)] transition-all duration-300 transform active:scale-95 whitespace-nowrap cursor-pointer"
          >
            <Award className="w-3.5 h-3.5 text-emerald-950" />
            <span>Pledge</span>
          </button>

          {/* Mobile Menu Toggle Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="xl:hidden p-2 text-emerald-200 hover:text-white hover:bg-emerald-900/40 rounded-lg border border-emerald-800/40 transition-colors shrink-0"
            aria-label="Toggle navigation menu"
          >
            {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {isMobileMenuOpen && (
        <div className="xl:hidden bg-[#02100a]/98 backdrop-blur-xl border-b border-emerald-800/50 px-4 pt-3 pb-6 animate-in slide-in-from-top-4 duration-200 space-y-3 max-h-[85vh] overflow-y-auto">
          <div className="grid grid-cols-2 gap-2">
            {navItems.map((item) => {
              const isActive = currentPage === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`flex items-center justify-between px-3.5 py-2.5 rounded-xl text-xs font-medium text-left transition-all ${
                    isActive
                      ? 'bg-emerald-900/80 text-amber-300 border border-amber-400/40'
                      : 'bg-emerald-950/40 text-emerald-100 hover:bg-emerald-900/30'
                  }`}
                >
                  <span>{item.label}</span>
                  {isActive && <Sparkles className="w-3 h-3 text-amber-400" />}
                </button>
              );
            })}
          </div>

          <div className="pt-2 border-t border-emerald-900/50">
            <button
              onClick={() => {
                setIsMobileMenuOpen(false);
                onOpenWelcomeQuiz();
              }}
              className="w-full flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl bg-emerald-900/60 text-emerald-200 border border-emerald-700/50 text-xs font-bold"
            >
              <HelpCircle className="w-4 h-4 text-amber-400" />
              <span>{verifiedStatus.isPassed ? 'View Best Pakistani Card ✓' : 'Take 50% Challenge (Best Pakistani Card)'}</span>
            </button>
          </div>

          <button
            onClick={() => {
              setIsMobileMenuOpen(false);
              onOpenPledgeModal();
            }}
            className="w-full flex items-center justify-center gap-2 py-2.5 px-4 text-xs font-bold text-emerald-950 bg-gradient-to-r from-amber-200 to-amber-400 rounded-xl shadow-md uppercase tracking-wider"
          >
            <Award className="w-4 h-4 text-emerald-950" />
            <span>Sign Quaid-e-Azam National Pledge</span>
          </button>
        </div>
      )}
    </header>
  );
};
