import React from 'react';
import { NavPage } from '../types';
import { Heart, Sparkles, Award } from 'lucide-react';

interface FooterProps {
  onNavigate: (page: NavPage) => void;
  onOpenPledgeModal: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, onOpenPledgeModal }) => {
  return (
    <footer className="bg-[#011009] border-t border-emerald-900/50 text-emerald-200/80 mt-20 relative overflow-hidden">
      {/* Background Subtle Gradient */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-32 bg-emerald-600/5 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        {/* Main 4-Column Layout */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Col 1: Brand & Motto */}
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-emerald-600 to-[#01411C] p-0.5 border border-amber-400/40 flex items-center justify-center">
                <svg viewBox="0 0 100 100" className="w-6 h-6 text-white fill-current">
                  <circle cx="50" cy="50" r="46" fill="#01411C" />
                  <circle cx="52" cy="50" r="27" fill="#ffffff" />
                  <circle cx="59" cy="46" r="24" fill="#01411C" />
                  <polygon points="62,32 65,41 74,41 67,46 70,55 62,50 54,55 57,46 50,41 59,41" fill="#ffffff" />
                </svg>
              </div>
              <div>
                <span className="font-cinzel text-lg sm:text-xl font-bold text-white block">
                  Quaid-e-Azam Day Tribute
                </span>
                <span className="text-xs text-amber-400/90 tracking-widest uppercase font-sans-ui">
                  25 December 1876 – An Eternal Legacy
                </span>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-emerald-300/80 leading-relaxed max-w-md">
              A cinematic digital tribute commemorating the birth anniversary, supreme statesmanship, and constitutional ideals of Quaid-e-Azam Muhammad Ali Jinnah, Father of the Nation.
            </p>

            <div className="p-3.5 rounded-xl bg-emerald-950/70 border border-amber-400/30 max-w-md space-y-1.5">
              <p className="text-xs font-editorial text-amber-200 italic leading-relaxed">
                “25 December sirf ek tareekh nahi, balki ek aise leader ko yaad karne ka din hai jiski leadership ne Pakistan ki tareekh ko nayi simt di.”
              </p>
              <div className="pt-2 border-t border-emerald-800/40 flex items-center justify-between">
                <span className="font-cinzel font-bold text-white text-xs">
                  UNITY • FAITH • DISCIPLINE
                </span>
                <span className="font-urdu text-xs text-emerald-300" dir="rtl">
                  اتحاد • ایمان • نظم و ضبط
                </span>
              </div>
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div className="space-y-3">
            <span className="text-xs uppercase tracking-widest text-amber-400 font-bold block">
              Memorial Sections
            </span>
            <ul className="space-y-2 text-xs sm:text-sm">
              <li>
                <button
                  onClick={() => {
                    onNavigate('home');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="hover:text-amber-300 transition-colors"
                >
                  Home & 25 Dec Countdown
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    onNavigate('tour');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="hover:text-amber-300 text-amber-300/90 transition-colors"
                >
                  360° Memorial Sanctuary 🌟
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    onNavigate('studio');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="hover:text-amber-300 text-amber-300/90 transition-colors"
                >
                  Poster & Card Studio 🎨
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    onNavigate('biography');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="hover:text-amber-300 transition-colors"
                >
                  Biography & Life Story
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    onNavigate('timeline');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="hover:text-amber-300 transition-colors"
                >
                  Interactive Timeline (1876–1948)
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    onNavigate('vision');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="hover:text-amber-300 transition-colors"
                >
                  Foundational Vision of Pakistan
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    onNavigate('quotes');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="hover:text-amber-300 transition-colors"
                >
                  Golden Quotes & Speeches
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    onNavigate('gallery');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="hover:text-amber-300 transition-colors"
                >
                  Archival Historical Gallery
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    onNavigate('tribute');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="hover:text-amber-300 transition-colors"
                >
                  Tribute, Quiz & National Wall
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Civic Action & Tribute */}
          <div className="space-y-3">
            <span className="text-xs uppercase tracking-widest text-amber-400 font-bold block">
              Civic Devotion
            </span>
            <p className="text-xs text-emerald-300/80 leading-relaxed">
              Join thousands of citizens pledging to uphold integrity, rule of law, and education for Pakistan.
            </p>
            <button
              onClick={onOpenPledgeModal}
              className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-gradient-to-r from-amber-300 to-amber-500 text-emerald-950 font-bold text-xs uppercase tracking-wider shadow-md hover:brightness-105 active:scale-95 transition-all cursor-pointer"
            >
              <Award className="w-3.5 h-3.5" />
              <span>Sign National Pledge</span>
            </button>
            <div className="flex items-center gap-2 text-[11px] text-emerald-400/70 pt-2">
              <Sparkles className="w-3.5 h-3.5 text-amber-400" />
              <span>Pakistan Zindabad · پاکستان پائندہ باد</span>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-emerald-900/40 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-emerald-400/60">
          <div className="flex items-center gap-2">
            <span>Quaid-e-Azam Muhammad Ali Jinnah National Tribute Portal</span>
            <span>·</span>
            <span>25 December</span>
          </div>
          <div className="flex items-center gap-1.5">
            <span>Preserving historical heritage with respect</span>
            <Heart className="w-3 h-3 text-emerald-400 fill-emerald-400 inline" />
            <span>for Pakistan</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
