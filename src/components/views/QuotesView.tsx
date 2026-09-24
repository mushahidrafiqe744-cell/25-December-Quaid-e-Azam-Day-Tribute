import React, { useState } from 'react';
import { HISTORICAL_QUOTES } from '../../data/tributeData';
import { QuoteItem } from '../../types';
import { Sparkles, Copy, Check, Search, Quote, Share2, Award, Heart } from 'lucide-react';
import confetti from 'canvas-confetti';

export const QuotesView: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [sharedQuote, setSharedQuote] = useState<QuoteItem | null>(null);

  const categories = [
    'All',
    'Unity & Discipline',
    'Youth & Education',
    'Minorities & Democracy',
    'Women Empowerment',
    'Faith & Nation',
    'Integrity & Law',
  ];

  const filteredQuotes = HISTORICAL_QUOTES.filter((q) => {
    const matchesCat = selectedCategory === 'All' || q.category === selectedCategory;
    const matchesSearch =
      q.quote.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (q.quoteUrdu && q.quoteUrdu.includes(searchQuery)) ||
      q.occasion.toLowerCase().includes(searchQuery.toLowerCase()) ||
      q.year.includes(searchQuery);
    return matchesCat && matchesSearch;
  });

  const handleCopyQuote = (q: QuoteItem) => {
    const textToCopy = `“${q.quote}”\n\n— ${q.attribution} (${q.occasion}, ${q.year})\n25 December Quaid-e-Azam Day Tribute`;
    navigator.clipboard.writeText(textToCopy);
    setCopiedId(q.id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const handleShareQuote = (q: QuoteItem) => {
    setSharedQuote(q);
    confetti({
      particleCount: 50,
      spread: 60,
      origin: { y: 0.6 },
      colors: ['#01411C', '#d4af37', '#ffffff', '#10b981'],
    });
  };

  return (
    <div className="pt-24 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-12">
      {/* HEADER */}
      <section className="text-center max-w-3xl mx-auto space-y-4">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-950/80 border border-emerald-500/30 text-amber-300 text-xs font-semibold uppercase tracking-widest">
          <Sparkles className="w-3.5 h-3.5" />
          <span>The Sovereign Words</span>
        </div>
        <h1 className="font-cinzel text-4xl sm:text-6xl font-extrabold text-white tracking-wide">
          Quotations of Quaid-e-Azam
        </h1>
        <p className="text-xs sm:text-sm text-emerald-200/80 max-w-2xl mx-auto">
          Explore the timeless words of wisdom, constitutional philosophy, and moral guidance delivered by Muhammad Ali Jinnah to the nation and the world.
        </p>
      </section>

      {/* SEARCH AND CATEGORY BAR */}
      <div className="p-5 rounded-2xl glass-panel border border-emerald-500/25 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex flex-wrap items-center gap-1.5 w-full md:w-auto">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-all cursor-pointer ${
                selectedCategory === cat
                  ? 'bg-amber-400 text-emerald-950 shadow-md font-bold'
                  : 'bg-emerald-950/60 text-emerald-200/80 hover:text-white hover:bg-emerald-900/60'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="relative w-full md:w-72">
          <Search className="w-4 h-4 text-emerald-400 absolute left-3 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search quotations or keywords..."
            className="w-full pl-9 pr-4 py-2 rounded-xl bg-[#02140d] border border-emerald-700/50 text-white placeholder-emerald-500 text-xs focus:outline-none focus:border-amber-400"
          />
        </div>
      </div>

      {/* QUOTES GRID */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {filteredQuotes.map((q) => {
          const isCopied = copiedId === q.id;
          return (
            <div
              key={q.id}
              className="p-7 rounded-2xl glass-panel border border-emerald-500/20 hover:border-amber-400/50 transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1 relative overflow-hidden"
            >
              <div className="absolute top-4 right-4 text-emerald-700/20 group-hover:text-amber-400/20 transition-colors pointer-events-none">
                <Quote className="w-12 h-12" />
              </div>

              <div className="space-y-4 relative z-10">
                <div className="flex items-center justify-between text-xs">
                  <span className="text-amber-400 font-bold uppercase tracking-wider">
                    {q.category}
                  </span>
                  <span className="text-emerald-400/70 font-mono">{q.year}</span>
                </div>

                <p className="font-editorial text-base sm:text-lg text-white italic leading-relaxed">
                  “{q.quote}”
                </p>

                {q.quoteUrdu && (
                  <p className="font-urdu text-base text-amber-200/90 leading-relaxed pt-2 border-t border-emerald-900/40" dir="rtl">
                    {q.quoteUrdu}
                  </p>
                )}
              </div>

              {/* Attribution and Actions */}
              <div className="pt-5 mt-4 border-t border-emerald-900/40 flex items-center justify-between gap-3 relative z-10">
                <div>
                  <span className="font-cinzel text-xs sm:text-sm font-bold text-white block">
                    {q.attribution}
                  </span>
                  <span className="text-[11px] text-emerald-300/70 block">
                    {q.occasion}
                  </span>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={() => handleCopyQuote(q)}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-emerald-950/80 hover:bg-emerald-900 text-emerald-200 hover:text-white border border-emerald-700/40 text-xs transition-colors cursor-pointer"
                    title="Copy quote text"
                  >
                    {isCopied ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-emerald-400" />
                        <span className="text-emerald-400 font-bold">Copied!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5" />
                        <span>Copy</span>
                      </>
                    )}
                  </button>

                  <button
                    onClick={() => handleShareQuote(q)}
                    className="p-1.5 rounded-lg bg-amber-400/20 hover:bg-amber-400 text-amber-300 hover:text-emerald-950 border border-amber-400/30 transition-colors cursor-pointer"
                    title="Share Quote Card"
                  >
                    <Share2 className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* SHARE QUOTE CARD MODAL */}
      {sharedQuote && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-xl animate-in fade-in duration-200"
          onClick={() => setSharedQuote(null)}
        >
          <div
            className="relative w-full max-w-lg bg-[#042416] border-2 border-amber-400/50 rounded-2xl p-7 text-center shadow-2xl space-y-5"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-400/20 text-amber-300 text-xs font-bold uppercase tracking-wider">
              <Award className="w-3.5 h-3.5" />
              <span>Quaid-e-Azam Day 2026</span>
            </div>

            <Quote className="w-10 h-10 text-amber-400 mx-auto opacity-75" />

            <p className="font-editorial text-lg sm:text-xl text-white italic leading-relaxed">
              “{sharedQuote.quote}”
            </p>

            {sharedQuote.quoteUrdu && (
              <p className="font-urdu text-base text-amber-200" dir="rtl">
                {sharedQuote.quoteUrdu}
              </p>
            )}

            <div className="pt-4 border-t border-amber-400/30 text-xs text-emerald-300">
              <span className="font-cinzel text-sm font-bold text-white block">
                {sharedQuote.attribution}
              </span>
              <span>{sharedQuote.occasion} ({sharedQuote.year})</span>
            </div>

            <div className="flex items-center justify-center gap-3 pt-2">
              <button
                onClick={() => {
                  handleCopyQuote(sharedQuote);
                  setSharedQuote(null);
                }}
                className="px-5 py-2 rounded-xl bg-gradient-to-r from-amber-300 to-amber-500 text-emerald-950 font-bold text-xs uppercase tracking-wider cursor-pointer"
              >
                Copy to Clipboard & Share
              </button>
              <button
                onClick={() => setSharedQuote(null)}
                className="px-4 py-2 rounded-xl bg-emerald-900/80 hover:bg-emerald-800 text-white text-xs font-semibold cursor-pointer"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
