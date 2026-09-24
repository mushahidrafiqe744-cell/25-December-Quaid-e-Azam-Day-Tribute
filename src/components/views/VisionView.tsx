import React, { useState } from 'react';
import { VISION_PILLARS, SPEECH_11_AUGUST_IMAGE, YOUTH_IMAGE } from '../../data/tributeData';
import { VisionPillar } from '../../types';
import { Sparkles, Scale, ShieldCheck, Users, GraduationCap, Award, Coins, CheckCircle, Quote, ArrowRight, BookOpen } from 'lucide-react';

interface VisionViewProps {
  onOpenDocModal: () => void;
  onOpenPledgeModal: () => void;
}

export const VisionView: React.FC<VisionViewProps> = ({ onOpenDocModal, onOpenPledgeModal }) => {
  const [selectedPillarId, setSelectedPillarId] = useState<string>(VISION_PILLARS[0].id);

  const getIcon = (name: string) => {
    switch (name) {
      case 'Scale': return Scale;
      case 'ShieldCheck': return ShieldCheck;
      case 'Users': return Users;
      case 'GraduationCap': return GraduationCap;
      case 'Award': return Award;
      case 'Coins': return Coins;
      default: return Sparkles;
    }
  };

  const activePillar = VISION_PILLARS.find((p) => p.id === selectedPillarId) || VISION_PILLARS[0];
  const ActiveIcon = getIcon(activePillar.iconName);

  return (
    <div className="pt-24 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-20">
      {/* HEADER */}
      <section className="text-center max-w-3xl mx-auto space-y-4">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-950/80 border border-emerald-500/30 text-amber-300 text-xs font-semibold uppercase tracking-widest">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Foundational Ideals</span>
        </div>
        <h1 className="font-cinzel text-4xl sm:text-6xl font-extrabold text-white tracking-wide">
          The Vision for Pakistan
        </h1>
        <p className="text-xs sm:text-sm text-emerald-200/80 max-w-2xl mx-auto">
          Quaid-e-Azam did not envision a theocracy or an autocracy, but an enlightened, democratic, and welfare-oriented nation founded on justice, religious liberty, and merit.
        </p>
      </section>

      {/* FEATURED: THE 11TH AUGUST 1947 MAGNA CARTA */}
      <section className="p-8 sm:p-12 rounded-3xl bg-gradient-to-b from-[#052c1a] to-[#01170d] border-2 border-amber-400/40 shadow-2xl relative overflow-hidden">
        <div className="absolute top-0 right-0 w-80 h-80 bg-amber-400/10 rounded-full blur-3xl pointer-events-none" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7 space-y-5">
            <div className="flex items-center gap-2">
              <span className="text-xs uppercase tracking-widest text-amber-400 font-bold font-sans-ui">
                The Constitutional Magna Carta
              </span>
              <span className="text-emerald-500">·</span>
              <span className="text-xs text-emerald-300">11 August 1947 Address</span>
            </div>

            <h2 className="font-cinzel text-2xl sm:text-3xl font-bold text-white">
              “You are free to go to your temples...”
            </h2>

            <div className="p-5 rounded-2xl bg-black/50 border border-emerald-500/30 space-y-3">
              <p className="font-editorial text-base sm:text-lg text-emerald-100 italic leading-relaxed">
                “You are free; you are free to go to your temples, you are free to go to your mosques or to any other place of worship in this State of Pakistan. You may belong to any religion or caste or creed — that has nothing to do with the business of the State.”
              </p>
              <p className="font-urdu text-base sm:text-lg text-amber-300/90 leading-relaxed" dir="rtl">
                “آپ آزاد ہیں؛ آپ اپنے مندروں میں جانے کے لیے آزاد ہیں، آپ اپنی مسجدوں یا پاکستان کی اس ریاست میں کسی بھی دوسری عبادت گاہ میں جانے کے لیے آزاد ہیں...”
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3 pt-2">
              <button
                onClick={onOpenDocModal}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-amber-300 to-amber-500 text-emerald-950 font-bold text-xs uppercase tracking-wider shadow hover:brightness-105 transition-all cursor-pointer"
              >
                <span>Listen to 11 August Address</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <button
                onClick={onOpenPledgeModal}
                className="px-5 py-2.5 rounded-xl bg-emerald-900/60 hover:bg-emerald-800 text-xs font-semibold text-emerald-100 border border-emerald-700/40 transition-colors"
              >
                Pledge Civic Equality
              </button>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="relative rounded-2xl overflow-hidden bg-black/60 border border-emerald-500/40 shadow-xl">
              <img
                src={SPEECH_11_AUGUST_IMAGE}
                alt="11 August 1947 Speech"
                className="w-full aspect-[4/3] object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="p-3 bg-[#02130b] border-t border-emerald-900/50 text-center">
                <span className="text-xs text-emerald-300/80 font-medium">
                  Karachi Constituent Assembly · First Session
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6 INTERACTIVE VISION PILLARS */}
      <section className="space-y-8">
        <div className="text-center max-w-2xl mx-auto">
          <span className="text-xs uppercase tracking-widest text-amber-400 font-bold">
            Interactive Doctrine
          </span>
          <h2 className="font-cinzel text-3xl font-bold text-white mt-1">
            Six Pillars of Quaid’s Pakistan
          </h2>
          <p className="text-xs sm:text-sm text-emerald-200/70 mt-1">
            Click any pillar to explore the constitutional blueprint, historic addresses, and core principles.
          </p>
        </div>

        {/* Pillar Tabs */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
          {VISION_PILLARS.map((p) => {
            const Icon = getIcon(p.iconName);
            const isSelected = selectedPillarId === p.id;
            return (
              <button
                key={p.id}
                onClick={() => setSelectedPillarId(p.id)}
                className={`p-4 rounded-xl border flex flex-col items-center text-center transition-all duration-300 cursor-pointer ${
                  isSelected
                    ? 'bg-emerald-900/80 border-amber-400 text-amber-300 shadow-[0_0_20px_rgba(212,175,55,0.3)] scale-102'
                    : 'bg-emerald-950/40 border-emerald-800/40 text-emerald-200 hover:bg-emerald-900/40 hover:border-emerald-700/50'
                }`}
              >
                <Icon className="w-6 h-6 mb-2" />
                <span className="text-xs font-semibold line-clamp-2">
                  {p.title.split('&')[0]}
                </span>
              </button>
            );
          })}
        </div>

        {/* Active Pillar Full Details */}
        <div className="p-8 sm:p-10 rounded-3xl glass-panel-gold border border-amber-400/40 shadow-2xl space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-amber-400/30">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-amber-400/20 border border-amber-400/40 text-amber-300 flex items-center justify-center">
                <ActiveIcon className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-cinzel text-2xl font-bold text-white">
                  {activePillar.title}
                </h3>
                <span className="font-urdu text-sm text-emerald-300">
                  {activePillar.titleUrdu}
                </span>
              </div>
            </div>
            <div className="text-left sm:text-right">
              <span className="text-[11px] uppercase tracking-widest text-amber-300 font-bold block">
                Historical Context
              </span>
              <span className="text-xs text-emerald-300/80">
                {activePillar.speechDate}
              </span>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="space-y-4">
              <div>
                <span className="text-xs uppercase tracking-wider text-amber-400 font-bold block mb-1">
                  Core Principle
                </span>
                <p className="text-sm sm:text-base text-white font-medium">
                  {activePillar.corePrinciple}
                </p>
              </div>

              <div>
                <span className="text-xs uppercase tracking-wider text-emerald-400 font-bold block mb-1">
                  Detailed Analysis
                </span>
                <p className="text-xs sm:text-sm text-emerald-100/90 leading-relaxed">
                  {activePillar.description}
                </p>
              </div>

              <div className="p-4 rounded-xl bg-black/40 border border-amber-400/30 text-xs sm:text-sm text-amber-200 italic font-editorial">
                {activePillar.historicReference}
              </div>
            </div>

            <div className="space-y-3">
              <span className="text-xs uppercase tracking-wider text-emerald-400 font-bold block">
                Constitutional Mandates & Action Points
              </span>
              <div className="space-y-2.5">
                {activePillar.keyPoints.map((kp, idx) => (
                  <div
                    key={idx}
                    className="p-3.5 rounded-xl bg-black/40 border border-emerald-900/60 flex items-start gap-3"
                  >
                    <CheckCircle className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                    <span className="text-xs sm:text-sm text-emerald-100/90 font-sans-ui">
                      {kp}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* YOUTH & WOMEN FOCUS SPOTLIGHT */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="p-7 rounded-3xl glass-panel border border-emerald-500/25 space-y-4">
          <div className="flex items-center gap-2 text-amber-400 text-xs uppercase font-bold tracking-wider">
            <Users className="w-4 h-4" />
            <span>Madar-e-Millat & Women of Pakistan</span>
          </div>
          <h3 className="font-cinzel text-xl sm:text-2xl font-bold text-white">
            “Side by Side with You”
          </h3>
          <p className="text-xs sm:text-sm text-emerald-100/80 leading-relaxed">
            Quaid-e-Azam was decades ahead of his time in championing women’s leadership. His sister Fatima Jinnah was his closest confidante, demonstrating that Pakistani women must lead in politics, education, medicine, and social development.
          </p>
          <div className="p-3.5 rounded-xl bg-black/40 text-xs text-amber-300 italic font-editorial">
            “No nation can rise to the height of glory unless your women are side by side with you.”
          </div>
        </div>

        <div className="p-7 rounded-3xl glass-panel border border-emerald-500/25 space-y-4">
          <div className="flex items-center gap-2 text-amber-400 text-xs uppercase font-bold tracking-wider">
            <GraduationCap className="w-4 h-4" />
            <span>The Youth as Nation Builders</span>
          </div>
          <h3 className="font-cinzel text-xl sm:text-2xl font-bold text-white">
            “The Real Makers of Pakistan”
          </h3>
          <p className="text-xs sm:text-sm text-emerald-100/80 leading-relaxed">
            Jinnah frequently addressed university students in Aligarh, Lahore, Peshawar, and Dacca, urging them to steer clear of political exploitation and channel their energies into mastering modern science, technology, and economic self-sufficiency.
          </p>
          <div className="p-3.5 rounded-xl bg-black/40 text-xs text-amber-300 italic font-editorial">
            “Education is a matter of life and death for Pakistan.”
          </div>
        </div>
      </section>
    </div>
  );
};
