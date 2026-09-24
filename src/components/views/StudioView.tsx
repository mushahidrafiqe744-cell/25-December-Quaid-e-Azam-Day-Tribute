import React, { useState, useRef } from 'react';
import { PORTRAIT_OPTIONS, HISTORICAL_QUOTES, STAMP_IMAGE } from '../../data/tributeData';
import { Sparkles, Download, Copy, Check, Share2, Printer, Palette, Type, Award, Heart } from 'lucide-react';
import confetti from 'canvas-confetti';

export const StudioView: React.FC = () => {
  const [name, setName] = useState('Mushahid Rafiq');
  const [city, setCity] = useState('Karachi, Pakistan');
  const [selectedPortraitIdx, setSelectedPortraitIdx] = useState(0);
  const [selectedQuoteIdx, setSelectedQuoteIdx] = useState(0);
  const [customMsg, setCustomMsg] = useState('');
  const [frameTheme, setFrameTheme] = useState<'gold' | 'emerald' | 'vintage'>('gold');
  const [isCopied, setIsCopied] = useState(false);

  const cardRef = useRef<HTMLDivElement>(null);

  const activePortrait = PORTRAIT_OPTIONS[selectedPortraitIdx % PORTRAIT_OPTIONS.length];
  const activeQuote = HISTORICAL_QUOTES[selectedQuoteIdx % HISTORICAL_QUOTES.length];

  const handleShare = () => {
    const textToShare = `“${activeQuote.quote}”\n— Quaid-e-Azam Muhammad Ali Jinnah\n\nCommemorated by ${name} (${city}) on 25 December Quaid-e-Azam Day Tribute 🇵🇰`;
    navigator.clipboard.writeText(textToShare);
    setIsCopied(true);
    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#01411C', '#d4af37', '#ffffff', '#10b981'],
    });
    setTimeout(() => setIsCopied(false), 2500);
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="pt-24 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-12">
      {/* HEADER */}
      <section className="text-center max-w-3xl mx-auto space-y-4">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-950/80 border border-emerald-500/30 text-amber-300 text-xs font-semibold uppercase tracking-widest">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Interactive Poster & Postcard Studio</span>
        </div>
        <h1 className="font-cinzel text-4xl sm:text-6xl font-extrabold text-white tracking-wide">
          Quaid Tribute Poster Studio
        </h1>
        <p className="text-xs sm:text-sm text-emerald-200/80 max-w-2xl mx-auto">
          Craft your personalized 25 December Quaid-e-Azam Day commemorative tribute card with authentic historical portraits, quotes, and philatelic seals.
        </p>
      </section>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* LEFT: CONTROLS & CUSTOMIZATION */}
        <div className="lg:col-span-6 space-y-6">
          <div className="p-6 sm:p-7 rounded-3xl glass-panel border border-emerald-500/25 space-y-5">
            <h3 className="font-cinzel text-xl font-bold text-white flex items-center gap-2">
              <Palette className="w-5 h-5 text-amber-400" />
              <span>Customize Your Tribute Card</span>
            </h3>

            {/* Name & City */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs uppercase tracking-wider text-emerald-300 font-semibold mb-1">
                  Your Full Name *
                </label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="e.g. Daniyal Khan"
                  className="w-full px-3.5 py-2 rounded-xl bg-[#02140d] border border-emerald-700/50 text-white placeholder-emerald-600 text-xs focus:outline-none focus:border-amber-400"
                />
              </div>

              <div>
                <label className="block text-xs uppercase tracking-wider text-emerald-300 font-semibold mb-1">
                  City / Location
                </label>
                <input
                  type="text"
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                  placeholder="e.g. Lahore / London"
                  className="w-full px-3.5 py-2 rounded-xl bg-[#02140d] border border-emerald-700/50 text-white placeholder-emerald-600 text-xs focus:outline-none focus:border-amber-400"
                />
              </div>
            </div>

            {/* Choose Portrait */}
            <div>
              <label className="block text-xs uppercase tracking-wider text-emerald-300 font-semibold mb-2">
                Select Historic Portrait of Quaid-e-Azam
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                {PORTRAIT_OPTIONS.map((p, idx) => (
                  <button
                    key={p.id}
                    onClick={() => setSelectedPortraitIdx(idx)}
                    className={`p-1.5 rounded-xl border flex flex-col items-center gap-1.5 transition-all cursor-pointer ${
                      selectedPortraitIdx === idx
                        ? 'bg-emerald-900/80 border-amber-400 ring-2 ring-amber-400/40'
                        : 'bg-black/40 border-emerald-900/60 opacity-60 hover:opacity-100'
                    }`}
                  >
                    <img
                      src={p.image}
                      alt={p.title}
                      className="w-full h-16 object-cover rounded-lg"
                      referrerPolicy="no-referrer"
                    />
                    <span className="text-[10px] text-white font-medium truncate w-full text-center">
                      Portrait {idx + 1}
                    </span>
                  </button>
                ))}
              </div>
            </div>

            {/* Choose Quote */}
            <div>
              <label className="block text-xs uppercase tracking-wider text-emerald-300 font-semibold mb-1">
                Select Featured Quaid-e-Azam Quote
              </label>
              <select
                value={selectedQuoteIdx}
                onChange={(e) => setSelectedQuoteIdx(Number(e.target.value))}
                className="w-full px-3.5 py-2.5 rounded-xl bg-[#02140d] border border-emerald-700/50 text-white text-xs focus:outline-none focus:border-amber-400"
              >
                {HISTORICAL_QUOTES.map((q, idx) => (
                  <option key={q.id} value={idx}>
                    {q.category}: “{q.quote.slice(0, 60)}...”
                  </option>
                ))}
              </select>
            </div>

            {/* Optional Personal Note */}
            <div>
              <label className="block text-xs uppercase tracking-wider text-emerald-300 font-semibold mb-1">
                Personal Devotion Message (Optional)
              </label>
              <input
                type="text"
                value={customMsg}
                onChange={(e) => setCustomMsg(e.target.value)}
                placeholder="e.g. May our homeland forever prosper in peace and unity."
                className="w-full px-3.5 py-2 rounded-xl bg-[#02140d] border border-emerald-700/50 text-white placeholder-emerald-600 text-xs focus:outline-none focus:border-amber-400"
              />
            </div>

            {/* Frame Style */}
            <div>
              <label className="block text-xs uppercase tracking-wider text-emerald-300 font-semibold mb-2">
                Card Frame & Aesthetic
              </label>
              <div className="flex items-center gap-2">
                {[
                  { id: 'gold', label: 'Gold Filigree' },
                  { id: 'emerald', label: 'Imperial Emerald' },
                  { id: 'vintage', label: 'Archival Philately' },
                ].map((f) => (
                  <button
                    key={f.id}
                    onClick={() => setFrameTheme(f.id as any)}
                    className={`flex-1 py-2 px-3 rounded-xl text-xs font-semibold border transition-all cursor-pointer ${
                      frameTheme === f.id
                        ? 'bg-amber-400 text-emerald-950 font-bold border-amber-400 shadow'
                        : 'bg-emerald-950/60 text-emerald-200 border-emerald-800 hover:bg-emerald-900'
                    }`}
                  >
                    {f.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-3 border-t border-emerald-900/50">
              <button
                onClick={handleShare}
                className="flex-1 inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-gradient-to-r from-amber-300 to-amber-500 text-emerald-950 font-bold text-xs uppercase tracking-wider shadow-lg hover:brightness-105 active:scale-95 transition-all cursor-pointer"
              >
                {isCopied ? <Check className="w-4 h-4 text-emerald-950" /> : <Copy className="w-4 h-4" />}
                <span>{isCopied ? 'Tribute Copied!' : 'Copy Tribute & Share'}</span>
              </button>

              <button
                onClick={handlePrint}
                className="inline-flex items-center gap-2 py-3 px-4 rounded-xl bg-emerald-900/70 hover:bg-emerald-800 text-emerald-100 border border-emerald-700/50 text-xs font-semibold cursor-pointer"
              >
                <Printer className="w-4 h-4 text-amber-400" />
                <span>Print Poster</span>
              </button>
            </div>
          </div>
        </div>

        {/* RIGHT: LIVE CARD PREVIEW (HIGH-END EDITORIAL POSTER) */}
        <div className="lg:col-span-6 flex flex-col items-center justify-center">
          <div
            ref={cardRef}
            className={`w-full max-w-md rounded-3xl p-7 relative overflow-hidden transition-all duration-300 shadow-[0_20px_60px_rgba(0,0,0,0.8)] ${
              frameTheme === 'gold'
                ? 'bg-gradient-to-b from-[#052b1b] to-[#01140c] border-2 border-amber-400/60 shadow-[0_0_40px_rgba(212,175,55,0.2)]'
                : frameTheme === 'emerald'
                ? 'bg-gradient-to-b from-[#02331f] to-[#01190f] border-2 border-emerald-400/60 shadow-[0_0_40px_rgba(16,185,129,0.2)]'
                : 'bg-gradient-to-b from-[#072418] to-[#011009] border-2 border-amber-200/50'
            }`}
          >
            {/* Stamp Badge in Top Corner */}
            <div className="absolute top-5 right-5 w-14 h-14 rounded-lg overflow-hidden border border-amber-400/50 shadow-md transform rotate-3">
              <img
                src={STAMP_IMAGE}
                alt="Commemorative Postage Stamp"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>

            {/* Poster Header */}
            <div className="space-y-1 mb-5">
              <span className="text-[10px] uppercase tracking-widest text-amber-400 font-bold block font-sans-ui">
                25 December · National Commemoration
              </span>
              <h2 className="font-cinzel text-xl sm:text-2xl font-extrabold text-white tracking-wide">
                Quaid-e-Azam Tribute
              </h2>
              <span className="font-urdu text-xs text-emerald-300 block" dir="rtl">
                اتحاد • ایمان • نظم و ضبط
              </span>
            </div>

            {/* Portrait Image in Poster Frame */}
            <div className="relative rounded-2xl overflow-hidden aspect-[4/3] bg-black/60 border border-amber-400/40 mb-5 shadow-inner">
              <img
                src={activePortrait.image}
                alt={activePortrait.title}
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black via-black/60 to-transparent p-3 text-center">
                <span className="font-cinzel text-xs font-bold text-white block">
                  Muhammad Ali Jinnah (1876 – 1948)
                </span>
                <span className="text-[10px] text-amber-300">Father of the Nation</span>
              </div>
            </div>

            {/* Quote Block */}
            <div className="p-4 rounded-xl bg-black/50 border border-emerald-800/60 space-y-2 mb-5">
              <p className="font-editorial text-xs sm:text-sm text-white italic leading-relaxed">
                “{activeQuote.quote}”
              </p>
              {activeQuote.quoteUrdu && (
                <p className="font-urdu text-xs text-amber-200/90 leading-relaxed" dir="rtl">
                  {activeQuote.quoteUrdu}
                </p>
              )}
            </div>

            {/* Custom Message if any */}
            {customMsg && (
              <p className="text-xs text-amber-300 italic text-center mb-4">
                “{customMsg}”
              </p>
            )}

            {/* Commemorator Sign-Off */}
            <div className="pt-4 border-t border-emerald-800/60 flex items-center justify-between text-xs">
              <div>
                <span className="text-[10px] text-emerald-400/80 uppercase tracking-wider block">
                  Presented With Devotion By:
                </span>
                <span className="font-cinzel font-bold text-white text-sm block">
                  {name || 'A Proud Pakistani'}
                </span>
                <span className="text-[11px] text-emerald-300/80">{city}</span>
              </div>

              <div className="text-right">
                <div className="flex items-center gap-1 text-amber-400 text-xs font-bold">
                  <Award className="w-3.5 h-3.5" />
                  <span>25 Dec 2026</span>
                </div>
                <span className="text-[10px] text-emerald-400/70 block">Official Memorial Card</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
