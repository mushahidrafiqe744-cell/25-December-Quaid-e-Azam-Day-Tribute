import React, { useState } from 'react';
import { NavPage } from '../../types';
import { HeroCountdown } from '../HeroCountdown';
import {
  PORTRAIT_OPTIONS,
  HISTORICAL_QUOTES,
  WORLD_LEADER_TRIBUTES,
} from '../../data/tributeData';
import {
  ArrowRight,
  Compass,
  Clock,
  Award,
  Sparkles,
  BookOpen,
  Quote,
  ShieldCheck,
  HeartHandshake,
  Film,
  HelpCircle,
  Image as ImageIcon,
} from 'lucide-react';
import { getVerifiedPassStatus } from '../../utils/quizManager';

interface HomeViewProps {
  onNavigate: (page: NavPage) => void;
  onOpenDocModal: () => void;
  onOpenPledgeModal: () => void;
  onOpenWelcomeQuiz: () => void;
}

export const HomeView: React.FC<HomeViewProps> = ({
  onNavigate,
  onOpenDocModal,
  onOpenPledgeModal,
  onOpenWelcomeQuiz,
}) => {
  const [activeQuoteIdx, setActiveQuoteIdx] = useState(0);
  const [selectedPortraitIdx, setSelectedPortraitIdx] = useState(0);
  const [verifiedStatus] = useState(getVerifiedPassStatus());

  const featuredQuote = HISTORICAL_QUOTES[activeQuoteIdx % HISTORICAL_QUOTES.length];
  const activePortrait = PORTRAIT_OPTIONS[selectedPortraitIdx % PORTRAIT_OPTIONS.length];

  return (
    <div className="space-y-24">
      {/* HERO SECTION */}
      <section className="relative min-h-[92vh] flex items-center justify-center pt-24 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
        {/* Ambient Glows */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-emerald-600/15 rounded-full blur-[140px] pointer-events-none" />
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-amber-500/10 rounded-full blur-[120px] pointer-events-none" />

        <div className="max-w-6xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
          {/* Left Column: Typography & CTAs */}
          <div className="lg:col-span-7 space-y-7 text-center lg:text-left">
            {/* National Badge Kicker & 50% Verified Pass Badge */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2">
              <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-emerald-950/80 border border-emerald-500/30 shadow-[0_0_20px_rgba(16,185,129,0.2)]">
                <div className="w-4 h-3 bg-[#01411C] rounded-[2px] flex items-center justify-end px-0.5 border border-white/40">
                  <div className="w-1.5 h-1.5 rounded-full bg-white flex items-center justify-center">
                    <div className="w-1 h-1 rounded-full bg-[#01411C]" />
                  </div>
                </div>
                <span className="text-xs uppercase tracking-widest text-emerald-300 font-semibold font-sans-ui">
                  Father of the Nation Tribute
                </span>
                <Sparkles className="w-3.5 h-3.5 text-amber-400" />
              </div>

              {verifiedStatus.isPassed ? (
                <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-emerald-900/90 border border-emerald-400 text-amber-300 text-xs font-bold shadow-[0_0_15px_rgba(16,185,129,0.3)]">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                  <span>50%+ Verified Patriot Pass</span>
                </div>
              ) : (
                <button
                  onClick={onOpenWelcomeQuiz}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-amber-400/20 hover:bg-amber-400 text-amber-300 hover:text-emerald-950 border border-amber-400/40 text-xs font-bold transition-all cursor-pointer"
                >
                  <HelpCircle className="w-3.5 h-3.5" />
                  <span>Take 50% Entry Challenge</span>
                </button>
              )}
            </div>

            {/* Main Headings */}
            <div className="space-y-2">
              <h1 className="font-cinzel text-5xl sm:text-7xl lg:text-8xl font-extrabold tracking-tight text-white leading-none">
                <span className="gold-text-gradient">25 DECEMBER</span>
              </h1>
              <h2 className="font-cinzel text-2xl sm:text-4xl lg:text-5xl font-bold text-emerald-100 tracking-wide">
                Quaid-e-Azam Muhammad Ali Jinnah
              </h2>
            </div>

            {/* Supporting Text / Core Motto */}
            <div className="p-4 sm:p-5 rounded-2xl glass-panel border border-emerald-500/25 max-w-xl mx-auto lg:mx-0">
              <div className="flex items-center justify-between gap-4 mb-2">
                <span className="text-xs uppercase tracking-widest text-amber-400/90 font-bold">
                  The Eternal Creed
                </span>
                <span className="text-xs text-emerald-400/70 font-mono">1876 – 1948</span>
              </div>
              <p className="font-cinzel text-xl sm:text-2xl font-bold text-white tracking-widest">
                UNITY • FAITH • DISCIPLINE
              </p>
              <p className="font-urdu text-base sm:text-lg text-emerald-300/90 mt-1" dir="rtl">
                اتحاد • ایمان • نظم و ضبط
              </p>
            </div>

            {/* Special 25 December Tribute Message */}
            <div className="p-4 rounded-xl bg-gradient-to-r from-emerald-950/90 via-[#032919] to-emerald-950/90 border border-amber-400/40 shadow-lg text-left">
              <div className="flex items-center gap-2 text-xs font-bold text-amber-300 uppercase tracking-wider mb-1.5">
                <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                <span>25 December Tribute Message</span>
              </div>
              <p className="text-sm font-editorial text-emerald-100 italic leading-relaxed">
                “25 December sirf ek tareekh nahi, balki ek aise leader ko yaad karne ka din hai jiski leadership ne Pakistan ki tareekh ko nayi simt di.”
              </p>
              <p className="text-xs font-urdu text-amber-200/90 mt-1 text-right" dir="rtl">
                ”25 دسمبر صرف ایک تاریخ نہیں، بلکہ ایک ایسے لیڈر کو یاد کرنے کا دن ہے جس کی قیادت نے پاکستان کی تاریخ کو نئی سمت دی۔“
              </p>
            </div>

            {/* Buttons */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3.5 pt-2">
              <button
                onClick={() => onNavigate('tribute')}
                className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl bg-gradient-to-r from-amber-300 via-amber-400 to-amber-500 text-emerald-950 font-bold text-sm tracking-wider uppercase shadow-[0_0_25px_rgba(251,191,36,0.4)] hover:shadow-[0_0_35px_rgba(251,191,36,0.6)] transform hover:-translate-y-0.5 active:scale-95 transition-all cursor-pointer"
              >
                <Compass className="w-4 h-4 text-emerald-950" />
                <span>Explore Tribute & Quiz</span>
              </button>

              <button
                onClick={() => onNavigate('timeline')}
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-emerald-950/70 text-emerald-100 hover:text-white border border-emerald-600/40 hover:border-emerald-400 hover:bg-emerald-900/60 font-semibold text-sm tracking-wider uppercase transition-all transform hover:-translate-y-0.5 active:scale-95 cursor-pointer"
              >
                <Clock className="w-4 h-4 text-amber-400" />
                <span>Quaid-e-Azam Timeline</span>
              </button>

              <button
                onClick={onOpenDocModal}
                className="inline-flex items-center gap-2 px-4 py-3.5 rounded-xl bg-emerald-900/40 text-emerald-300 hover:text-white border border-emerald-700/30 hover:bg-emerald-800/50 text-xs font-semibold uppercase tracking-wider transition-colors cursor-pointer"
                title="Listen to Historical Broadcasts"
              >
                <Film className="w-4 h-4 text-amber-400" />
                <span>Listen Speeches</span>
              </button>
            </div>
          </div>

          {/* Right Column: Quaid Portrait with Portrait Switcher */}
          <div className="lg:col-span-5 flex flex-col items-center justify-center relative">
            <div className="relative group">
              <div className="absolute -inset-2 bg-gradient-to-tr from-emerald-500 via-amber-400 to-emerald-300 rounded-3xl blur-xl opacity-50 group-hover:opacity-80 transition duration-700 animate-pulse" />

              <div className="relative w-72 sm:w-88 aspect-[3/4] rounded-2xl overflow-hidden bg-gradient-to-b from-[#052b1a] to-[#01140c] border-2 border-amber-400/50 shadow-[0_15px_50px_rgba(0,0,0,0.8)]">
                <img
                  src={activePortrait.image}
                  alt={activePortrait.title}
                  className="w-full h-full object-cover object-top filter contrast-105 group-hover:scale-105 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />

                {/* Archival Overlay Card */}
                <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black via-black/75 to-transparent p-4 text-center">
                  <span className="text-[11px] uppercase tracking-widest text-amber-300 font-bold font-sans-ui block mb-0.5">
                    {activePortrait.subtitle}
                  </span>
                  <span className="font-cinzel text-base font-bold text-white block">
                    {activePortrait.title}
                  </span>
                  <div className="flex items-center justify-center gap-2 mt-1 text-[11px] text-emerald-300/80">
                    <span>25 Dec 1876</span>
                    <span>·</span>
                    <span>11 Sep 1948</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Portrait Switcher Selector Tabs */}
            <div className="mt-4 flex items-center gap-1.5 p-1.5 bg-black/60 rounded-xl border border-emerald-800/50 max-w-sm">
              {PORTRAIT_OPTIONS.map((p, idx) => (
                <button
                  key={p.id}
                  onClick={() => setSelectedPortraitIdx(idx)}
                  className={`px-2.5 py-1 rounded-lg text-[11px] font-semibold transition-all cursor-pointer ${
                    selectedPortraitIdx === idx
                      ? 'bg-amber-400 text-emerald-950 font-bold shadow'
                      : 'text-emerald-300/70 hover:text-white'
                  }`}
                  title={p.title}
                >
                  Portrait {idx + 1}
                </button>
              ))}
            </div>

            {/* Quick Tribute Counter Banner */}
            <div className="mt-3 w-full max-w-xs p-3 rounded-xl glass-panel-gold border border-amber-400/30 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Award className="w-4 h-4 text-amber-400" />
                <span className="text-xs font-semibold text-white">150th Milestone Legacy</span>
              </div>
              <button
                onClick={onOpenPledgeModal}
                className="text-[11px] text-amber-300 hover:text-white font-bold underline cursor-pointer"
              >
                Sign Pledge →
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 25 DECEMBER COUNTDOWN COMPONENT */}
      <section className="px-4 sm:px-6 lg:px-8">
        <HeroCountdown />
      </section>

      {/* CORE PILLARS OF QUAID'S PHILOSOPHY */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <span className="text-xs uppercase tracking-widest text-amber-400 font-bold">
            The Three Golden Guiding Lights
          </span>
          <h2 className="font-cinzel text-3xl sm:text-4xl font-bold text-white">
            Foundation of an Indomitable Nation
          </h2>
          <p className="text-xs sm:text-sm text-emerald-200/80 leading-relaxed">
            Quaid-e-Azam gave the emerging nation three unwavering principles that turned an impossible dream into sovereign reality.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Unity */}
          <div className="p-7 rounded-2xl glass-panel border border-emerald-500/20 hover:border-amber-400/40 transition-all duration-300 group hover:-translate-y-1">
            <div className="w-12 h-12 rounded-xl bg-emerald-950/80 border border-emerald-500/30 flex items-center justify-center text-amber-400 mb-5 group-hover:scale-110 transition-transform">
              <HeartHandshake className="w-6 h-6" />
            </div>
            <span className="text-xs uppercase tracking-wider text-emerald-400 font-bold block mb-1">
              Principle 01
            </span>
            <h3 className="font-cinzel text-2xl font-bold text-white mb-1">
              UNITY (اتحاد)
            </h3>
            <p className="text-xs font-semibold text-amber-300 mb-2">
              Qaum ko ittehad ka paigham (قوم کو اتحاد کا پیغام)
            </p>
            <p className="text-xs sm:text-sm text-emerald-100/80 leading-relaxed mb-4">
              Transcending sectarian, linguistic, and regional barriers to forge a singular, cohesive national brotherhood committed to collective progress.
            </p>
            <div className="pt-3 border-t border-emerald-900/40 text-xs text-amber-300/80 italic font-editorial">
              “Think 100 times before you take a decision, but once that decision is taken, stand by it as one man.”
            </div>
          </div>

          {/* Faith */}
          <div className="p-7 rounded-2xl glass-panel-gold border border-amber-400/30 hover:border-amber-400/60 transition-all duration-300 group hover:-translate-y-1 shadow-[0_0_25px_rgba(212,175,55,0.1)]">
            <div className="w-12 h-12 rounded-xl bg-amber-950/80 border border-amber-400/40 flex items-center justify-center text-amber-300 mb-5 group-hover:scale-110 transition-transform">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <span className="text-xs uppercase tracking-wider text-amber-400 font-bold block mb-1">
              Principle 02
            </span>
            <h3 className="font-cinzel text-2xl font-bold text-white mb-1">
              FAITH (ایمان)
            </h3>
            <p className="text-xs font-semibold text-amber-300 mb-2">
              Apne maqsad par yaqeen (اپنے مقصد پر کامل یقین)
            </p>
            <p className="text-xs sm:text-sm text-emerald-100/80 leading-relaxed mb-4">
              Unshakable conviction in the moral righteousness of our destiny, self-belief in our collective potential, and spiritual resilience.
            </p>
            <div className="pt-3 border-t border-amber-400/20 text-xs text-amber-300/90 italic font-editorial">
              “With faith, discipline and selfless devotion to duty, there is nothing worthwhile that you cannot achieve.”
            </div>
          </div>

          {/* Discipline */}
          <div className="p-7 rounded-2xl glass-panel border border-emerald-500/20 hover:border-amber-400/40 transition-all duration-300 group hover:-translate-y-1">
            <div className="w-12 h-12 rounded-xl bg-emerald-950/80 border border-emerald-500/30 flex items-center justify-center text-amber-400 mb-5 group-hover:scale-110 transition-transform">
              <Award className="w-6 h-6" />
            </div>
            <span className="text-xs uppercase tracking-wider text-emerald-400 font-bold block mb-1">
              Principle 03
            </span>
            <h3 className="font-cinzel text-2xl font-bold text-white mb-1">
              DISCIPLINE (نظم و ضبط)
            </h3>
            <p className="text-xs font-semibold text-amber-300 mb-2">
              Qanoon aur discipline ki ahmiyat (قانون اور ڈسپلن کی اہمیت)
            </p>
            <p className="text-xs sm:text-sm text-emerald-100/80 leading-relaxed mb-4">
              Strict constitutional order, unyielding work ethic, rule of law, and institutional integrity in every sphere of national life.
            </p>
            <div className="pt-3 border-t border-emerald-900/40 text-xs text-amber-300/80 italic font-editorial">
              “Work, work and work, and we are bound to succeed.”
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT QUAID & PAKISTAN KE LIYE KIRDAR HIGHLIGHT */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 sm:p-10 rounded-3xl bg-gradient-to-br from-[#021f14] via-[#032d1d] to-[#01140c] border border-amber-400/35 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />
          
          <div className="relative z-10 space-y-8">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-emerald-800/60 pb-6">
              <div>
                <span className="text-xs uppercase tracking-widest text-amber-400 font-bold flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-amber-400" />
                  <span>About Quaid-e-Azam (بانیِ پاکستان)</span>
                </span>
                <h3 className="font-cinzel text-2xl sm:text-3xl font-bold text-white mt-1">
                  Quaid-e-Azam Muhammad Ali Jinnah
                </h3>
              </div>
              <button
                onClick={() => onNavigate('biography')}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-amber-400 hover:bg-amber-300 text-emerald-950 text-xs font-bold uppercase tracking-wider transition-all self-start md:self-auto cursor-pointer"
              >
                <span>Read Full Biography</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* Content description in Roman Urdu & English */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
              <div className="lg:col-span-7 space-y-4">
                <div className="p-5 rounded-2xl bg-black/40 border border-emerald-500/20 space-y-3">
                  <h4 className="text-sm font-bold text-amber-300 uppercase tracking-wider font-cinzel">
                    👤 About Quaid-e-Azam
                  </h4>
                  <p className="text-sm sm:text-base text-emerald-100 leading-relaxed font-sans-ui">
                    <strong className="text-amber-300">Quaid-e-Azam Muhammad Ali Jinnah</strong> Pakistan ke بانی aur Pakistan ke pehle Governor-General thay. Unki paidaish <strong className="text-white">25 December 1876</strong> ko Karachi mein hui. Unhon ne siyasi struggle aur leadership ke zariye Muslims ke liye ek alag watan ke qiyam ki movement mein central role ada kiya.
                  </p>
                  <p className="text-xs sm:text-sm text-emerald-300/80 font-urdu leading-relaxed text-right pt-2 border-t border-emerald-900/40" dir="rtl">
                    قائد اعظم محمد علی جناح بانیِ پاکستان اور پاکستان کے پہلے گورنر جنرل تھے۔ ان کی ولادت 25 دسمبر 1876 کو کراچی میں ہوئی۔ انہوں نے سیاسی جدوجہد اور بے مثال قیادت کے ذریعے مسلمانوں کے لیے ایک الگ وطن کی تحریک میں مرکزی کردار ادا کیا۔
                  </p>
                </div>
              </div>

              <div className="lg:col-span-5 space-y-3">
                <div className="p-5 rounded-2xl bg-[#011a10] border border-amber-400/30 space-y-3 h-full">
                  <h4 className="text-sm font-bold text-amber-400 uppercase tracking-wider font-cinzel flex items-center gap-2">
                    <span>🇵🇰 Pakistan ke liye unka kirdar</span>
                  </h4>
                  <ul className="space-y-2.5 text-xs sm:text-sm text-emerald-100/90">
                    <li className="flex items-start gap-2.5">
                      <div className="w-1.5 h-1.5 rounded-full bg-amber-400 mt-1.5 shrink-0" />
                      <span><strong>Pakistan Movement ki leadership ki</strong> — تمام مسلمانوں کو ایک پرچم تلے متحد کیا۔</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <div className="w-1.5 h-1.5 rounded-full bg-amber-400 mt-1.5 shrink-0" />
                      <span><strong>Muslims ke siyasi huqooq ke liye awaz uthai</strong> — آئینی اور قانونی دلائل کے ساتھ حق منوایا۔</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <div className="w-1.5 h-1.5 rounded-full bg-amber-400 mt-1.5 shrink-0" />
                      <span><strong>14 August 1947</strong> ko Pakistan ke qiyam ke baad pehle Governor-General bane۔</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <div className="w-1.5 h-1.5 rounded-full bg-amber-400 mt-1.5 shrink-0" />
                      <span><strong>Qanoon, discipline aur national unity</strong> par zor diya۔</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* HISTORIC QUOTE SPOTLIGHT */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 sm:p-10 rounded-3xl bg-gradient-to-b from-[#042819] to-[#02160d] border border-emerald-500/30 shadow-2xl relative overflow-hidden">
          <div className="absolute top-4 right-4 text-emerald-800/20 pointer-events-none">
            <Quote className="w-32 h-32" />
          </div>

          <div className="relative z-10 space-y-6">
            <div className="flex items-center justify-between">
              <span className="text-xs uppercase tracking-widest text-amber-400 font-bold flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-amber-400" />
                <span>Featured Quaid-e-Azam Address</span>
              </span>
              <span className="text-xs text-emerald-400/80 font-mono">
                {featuredQuote.year} · {featuredQuote.category}
              </span>
            </div>

            <p className="font-editorial text-xl sm:text-2xl lg:text-3xl text-white italic leading-relaxed">
              “{featuredQuote.quote}”
            </p>

            {featuredQuote.quoteUrdu && (
              <p className="font-urdu text-lg sm:text-xl text-amber-200/90 leading-relaxed" dir="rtl">
                {featuredQuote.quoteUrdu}
              </p>
            )}

            <div className="pt-4 border-t border-emerald-800/40 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <span className="font-cinzel text-sm sm:text-base font-bold text-white block">
                  {featuredQuote.attribution}
                </span>
                <span className="text-xs text-emerald-300/70">
                  {featuredQuote.occasion}
                </span>
              </div>

              <div className="flex items-center gap-3">
                <button
                  onClick={() => setActiveQuoteIdx((prev) => (prev + 1) % HISTORICAL_QUOTES.length)}
                  className="px-4 py-2 rounded-lg bg-emerald-900/60 hover:bg-emerald-800 text-xs font-semibold text-emerald-200 hover:text-white border border-emerald-700/40 transition-colors cursor-pointer"
                >
                  Next Quote Excerpt →
                </button>
                <button
                  onClick={() => onNavigate('quotes')}
                  className="px-4 py-2 rounded-lg bg-gradient-to-r from-amber-300 to-amber-400 text-emerald-950 text-xs font-bold uppercase tracking-wider shadow hover:brightness-105 transition-all cursor-pointer"
                >
                  View All Quotes
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* QUICK EXPLORATION GATEWAYS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="text-xs uppercase tracking-widest text-amber-400 font-bold">
            Curated Memorial Portal
          </span>
          <h2 className="font-cinzel text-3xl font-bold text-white mt-1">
            Explore Quaid’s Living Legacy
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          <div
            onClick={() => onNavigate('biography')}
            className="p-6 rounded-2xl glass-panel border border-emerald-800/40 hover:border-emerald-500/50 transition-all cursor-pointer group"
          >
            <BookOpen className="w-6 h-6 text-amber-400 mb-4 group-hover:scale-110 transition-transform" />
            <h3 className="font-cinzel text-lg font-bold text-white mb-1 group-hover:text-amber-300">
              Biography & Character
            </h3>
            <p className="text-xs text-emerald-200/70 mb-4">
              From Lincoln’s Inn to founding father: the life, leadership, and personal integrity of Jinnah.
            </p>
            <span className="text-xs font-semibold text-emerald-400 flex items-center gap-1 group-hover:translate-x-1 transition-transform">
              Read Biography <ArrowRight className="w-3.5 h-3.5" />
            </span>
          </div>

          <div
            onClick={() => onNavigate('timeline')}
            className="p-6 rounded-2xl glass-panel border border-emerald-800/40 hover:border-emerald-500/50 transition-all cursor-pointer group"
          >
            <Clock className="w-6 h-6 text-amber-400 mb-4 group-hover:scale-110 transition-transform" />
            <h3 className="font-cinzel text-lg font-bold text-white mb-1 group-hover:text-amber-300">
              Historical Timeline
            </h3>
            <p className="text-xs text-emerald-200/70 mb-4">
              1876 to 1948: Navigate the landmark moments that changed the subcontinent’s geography.
            </p>
            <span className="text-xs font-semibold text-emerald-400 flex items-center gap-1 group-hover:translate-x-1 transition-transform">
              Open Timeline <ArrowRight className="w-3.5 h-3.5" />
            </span>
          </div>

          <div
            onClick={() => onNavigate('vision')}
            className="p-6 rounded-2xl glass-panel border border-emerald-800/40 hover:border-emerald-500/50 transition-all cursor-pointer group"
          >
            <ShieldCheck className="w-6 h-6 text-amber-400 mb-4 group-hover:scale-110 transition-transform" />
            <h3 className="font-cinzel text-lg font-bold text-white mb-1 group-hover:text-amber-300">
              Foundational Vision
            </h3>
            <p className="text-xs text-emerald-200/70 mb-4">
              Religious freedoms, rule of law, anti-corruption, and women empowerment.
            </p>
            <span className="text-xs font-semibold text-emerald-400 flex items-center gap-1 group-hover:translate-x-1 transition-transform">
              Discover Vision <ArrowRight className="w-3.5 h-3.5" />
            </span>
          </div>

          <div
            onClick={() => onNavigate('gallery')}
            className="p-6 rounded-2xl glass-panel border border-emerald-800/40 hover:border-emerald-500/50 transition-all cursor-pointer group"
          >
            <Film className="w-6 h-6 text-amber-400 mb-4 group-hover:scale-110 transition-transform" />
            <h3 className="font-cinzel text-lg font-bold text-white mb-1 group-hover:text-amber-300">
              Archival Gallery
            </h3>
            <p className="text-xs text-emerald-200/70 mb-4">
              Rare photographs, state documents, resolutions, and memorial architectural landmarks.
            </p>
            <span className="text-xs font-semibold text-emerald-400 flex items-center gap-1 group-hover:translate-x-1 transition-transform">
              Browse Gallery <ArrowRight className="w-3.5 h-3.5" />
            </span>
          </div>
        </div>
      </section>

      {/* WORLD HISTORIANS QUOTE CAROUSEL */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
        <div className="p-8 rounded-3xl bg-[#021a10] border border-amber-400/25 shadow-xl">
          <div className="flex items-center gap-2 mb-6">
            <Award className="w-5 h-5 text-amber-400" />
            <h3 className="font-cinzel text-xl font-bold text-white">
              Global Accolades on Jinnah’s Stature
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {WORLD_LEADER_TRIBUTES.slice(0, 3).map((trib) => (
              <div
                key={trib.id}
                className="p-5 rounded-xl bg-black/40 border border-emerald-900/60 flex flex-col justify-between"
              >
                <p className="text-xs sm:text-sm text-emerald-100/90 italic font-editorial leading-relaxed mb-4">
                  {trib.tributeText}
                </p>
                <div className="pt-3 border-t border-emerald-900/40">
                  <span className="font-bold text-xs text-amber-300 block">
                    {trib.speaker}
                  </span>
                  <span className="text-[11px] text-emerald-400/70 block">
                    {trib.role} · {trib.nationality}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
