import React, { useState } from 'react';
import { HISTORICAL_TIMELINE } from '../../data/tributeData';
import { TimelineItem } from '../../types';
import { Sparkles, Calendar, MapPin, Search, ArrowRight, Quote, Filter, ChevronRight, X } from 'lucide-react';

export const TimelineView: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [activeItem, setActiveItem] = useState<TimelineItem | null>(null);

  const categories = ['All', 'Early Life', 'Legal Career', 'Politics', 'Pakistan Movement', 'Independence'];

  const filteredItems = HISTORICAL_TIMELINE.filter((item) => {
    const matchesCat = selectedCategory === 'All' || item.category === selectedCategory;
    const matchesSearch =
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.year.toString().includes(searchQuery);
    return matchesCat && matchesSearch;
  });

  return (
    <div className="pt-24 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-12">
      {/* HEADER */}
      <section className="text-center max-w-3xl mx-auto space-y-4">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-950/80 border border-emerald-500/30 text-amber-300 text-xs font-semibold uppercase tracking-widest">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Interactive Digital Museum Archive</span>
        </div>
        <h1 className="font-cinzel text-4xl sm:text-6xl font-extrabold text-white tracking-wide">
          Historical Timeline (1876 – 1948)
        </h1>
        <p className="text-xs sm:text-sm text-emerald-200/80 max-w-2xl mx-auto">
          Chronicle the monumental epochs of Muhammad Ali Jinnah’s life, from his birth in Karachi to the independence and foundation of Pakistan.
        </p>
      </section>

      {/* 🕰️ IMPORTANT TIMELINE SUMMARY */}
      <section className="p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-[#021c11] via-[#042819] to-[#021c11] border border-amber-400/35 shadow-xl space-y-5">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-emerald-800/50 pb-4">
          <div className="flex items-center gap-2.5">
            <span className="text-2xl">🕰️</span>
            <div>
              <h2 className="font-cinzel text-xl sm:text-2xl font-bold text-white">
                Important Timeline (اہم تاریخی ادوار)
              </h2>
              <span className="text-xs text-amber-300/90 font-medium">
                Quaid-e-Azam’s Essential Journey at a Glance
              </span>
            </div>
          </div>
          <span className="text-xs px-3 py-1 rounded-full bg-emerald-900/60 border border-emerald-500/40 text-emerald-300 font-mono self-start sm:self-auto">
            1876 – 1948
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5">
          <div className="p-4 rounded-xl bg-black/40 border border-emerald-500/20 hover:border-amber-400/40 transition-colors">
            <span className="font-cinzel text-lg font-bold text-amber-400 block">1876</span>
            <span className="text-xs font-bold text-white block">Karachi mein paidaish</span>
            <span className="text-[11px] text-emerald-300/80 font-urdu block mt-1">25 دسمبر 1876 کو کراچی میں ولادت</span>
          </div>

          <div className="p-4 rounded-xl bg-black/40 border border-emerald-500/20 hover:border-amber-400/40 transition-colors">
            <span className="font-cinzel text-lg font-bold text-amber-400 block">1892</span>
            <span className="text-xs font-bold text-white block">England mein law ki taleem</span>
            <span className="text-[11px] text-emerald-300/80 font-urdu block mt-1">لنکنز اِن میں قانون کی اعلیٰ تعلیم</span>
          </div>

          <div className="p-4 rounded-xl bg-black/40 border border-emerald-500/20 hover:border-amber-400/40 transition-colors">
            <span className="font-cinzel text-lg font-bold text-amber-400 block">1900s</span>
            <span className="text-xs font-bold text-white block">Siyasi zindagi ka aham daur</span>
            <span className="text-[11px] text-emerald-300/80 font-urdu block mt-1">آئینی اور سیاسی جدوجہد کا آغاز</span>
          </div>

          <div className="p-4 rounded-xl bg-black/40 border border-emerald-500/20 hover:border-amber-400/40 transition-colors">
            <span className="font-cinzel text-lg font-bold text-amber-400 block">1940</span>
            <span className="text-xs font-bold text-white block">Lahore Resolution</span>
            <span className="text-[11px] text-emerald-300/80 font-urdu block mt-1">تاریخی قراردادِ پاکستان کی صدارت</span>
          </div>

          <div className="p-4 rounded-xl bg-black/40 border border-emerald-500/20 hover:border-amber-400/40 transition-colors">
            <span className="font-cinzel text-lg font-bold text-amber-400 block">1947</span>
            <span className="text-xs font-bold text-white block">Pakistan ka qiyam</span>
            <span className="text-[11px] text-emerald-300/80 font-urdu block mt-1">14 اگست 1947 کو آزاد وطن کا ظہور</span>
          </div>

          <div className="p-4 rounded-xl bg-black/40 border border-emerald-500/20 hover:border-amber-400/40 transition-colors">
            <span className="font-cinzel text-lg font-bold text-amber-400 block">1947</span>
            <span className="text-xs font-bold text-white block">Pehle Governor-General</span>
            <span className="text-[11px] text-emerald-300/80 font-urdu block mt-1">پہلے گورنر جنرل کا منصب سنبھالا</span>
          </div>

          <div className="p-4 rounded-xl bg-black/40 border border-emerald-500/20 hover:border-amber-400/40 transition-colors sm:col-span-2 lg:col-span-2">
            <span className="font-cinzel text-lg font-bold text-amber-400 block">1948</span>
            <span className="text-xs font-bold text-white block">11 September ko Karachi mein wafat</span>
            <span className="text-[11px] text-emerald-300/80 font-urdu block mt-1">11 ستمبر 1948 کو کراچی میں رحلت فرمائی اور مزارِ قائد میں آسودۂ خاک ہوئے</span>
          </div>
        </div>
      </section>

      {/* SEARCH AND FILTER BAR */}
      <div className="p-4 sm:p-5 rounded-2xl glass-panel border border-emerald-500/25 flex flex-col md:flex-row items-center justify-between gap-4">
        {/* Category Filters */}
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

        {/* Search Input */}
        <div className="relative w-full md:w-72">
          <Search className="w-4 h-4 text-emerald-400 absolute left-3 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search year or event..."
            className="w-full pl-9 pr-4 py-2 rounded-xl bg-[#02140d] border border-emerald-700/50 text-white placeholder-emerald-500 text-xs focus:outline-none focus:border-amber-400"
          />
        </div>
      </div>

      {/* TIMELINE LIST */}
      <div className="relative border-l-2 border-emerald-800/60 ml-4 sm:ml-32 md:ml-40 pl-6 sm:pl-10 space-y-12">
        {filteredItems.map((item, idx) => (
          <div key={item.id} className="relative group">
            {/* Year Badge on Left of Timeline Rule */}
            <div className="absolute -left-[31px] sm:-left-[156px] md:-left-[196px] top-1 flex items-center">
              {/* Year Label */}
              <span className="hidden sm:inline-block w-24 md:w-32 text-right font-cinzel text-xl md:text-2xl font-bold text-amber-400 tabular-nums mr-5">
                {item.year}
              </span>
              {/* Node Bullet */}
              <div className="w-5 h-5 rounded-full bg-[#031d13] border-2 border-amber-400 group-hover:bg-amber-400 group-hover:scale-125 transition-all duration-300 shadow-[0_0_12px_rgba(212,175,55,0.6)] flex items-center justify-center">
                <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 group-hover:bg-emerald-950" />
              </div>
            </div>

            {/* Content Card */}
            <div
              onClick={() => setActiveItem(item)}
              className="p-6 sm:p-7 rounded-2xl glass-panel border border-emerald-500/20 hover:border-amber-400/50 transition-all duration-300 cursor-pointer shadow-lg hover:shadow-[0_0_30px_rgba(0,0,0,0.5)] group-hover:-translate-y-1"
            >
              {/* Mobile Year Badge */}
              <div className="sm:hidden inline-block px-2.5 py-0.5 rounded bg-amber-400/20 text-amber-300 text-xs font-cinzel font-bold mb-2">
                {item.year} · {item.exactDate}
              </div>

              <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 mb-3">
                <div>
                  <div className="flex items-center gap-2 text-xs text-emerald-400 font-semibold mb-1">
                    <span>{item.category}</span>
                    <span>·</span>
                    <span className="flex items-center gap-1">
                      <MapPin className="w-3 h-3 text-amber-400" />
                      {item.location}
                    </span>
                  </div>
                  <h3 className="font-cinzel text-xl sm:text-2xl font-bold text-white group-hover:text-amber-300 transition-colors">
                    {item.title}
                  </h3>
                  <span className="text-xs text-emerald-300/80 italic font-editorial block mt-0.5">
                    {item.subtitle}
                  </span>
                </div>

                <div className="flex items-center gap-2 self-start lg:self-center">
                  <span className="text-xs font-semibold text-emerald-300 group-hover:text-amber-300 flex items-center gap-1">
                    View Archival Record <ChevronRight className="w-4 h-4" />
                  </span>
                </div>
              </div>

              <p className="text-xs sm:text-sm text-emerald-100/85 leading-relaxed mb-4">
                {item.description}
              </p>

              {item.quoteExcerpt && (
                <div className="p-3 rounded-xl bg-black/40 border-l-2 border-amber-400 text-xs text-amber-200/90 italic font-editorial">
                  “{item.quoteExcerpt}”
                </div>
              )}
            </div>
          </div>
        ))}

        {filteredItems.length === 0 && (
          <div className="p-8 text-center rounded-2xl glass-panel text-emerald-300">
            No events match your search. Try resetting filters.
          </div>
        )}
      </div>

      {/* DETAIL MODAL */}
      {activeItem && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-xl animate-in fade-in duration-200"
          onClick={() => setActiveItem(null)}
        >
          <div
            className="relative w-full max-w-2xl bg-[#031d13] border border-amber-400/40 rounded-2xl overflow-hidden shadow-2xl flex flex-col max-h-[90vh]"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between px-6 py-4 border-b border-emerald-800/40 bg-[#02130c]">
              <div className="flex items-center gap-2">
                <span className="text-xs uppercase tracking-widest text-amber-400 font-bold">
                  {activeItem.year} · {activeItem.category}
                </span>
              </div>
              <button
                onClick={() => setActiveItem(null)}
                className="p-1.5 rounded-lg text-emerald-300 hover:text-white hover:bg-emerald-900/50"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="p-6 overflow-y-auto space-y-5">
              <div className="rounded-xl overflow-hidden max-h-60 bg-black/50 border border-emerald-900/60">
                <img
                  src={activeItem.image}
                  alt={activeItem.title}
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>

              <div>
                <h3 className="font-cinzel text-2xl font-bold text-white mb-1">
                  {activeItem.title}
                </h3>
                <div className="flex items-center gap-4 text-xs text-emerald-300/80 py-1 mb-3">
                  <span>Exact Date: {activeItem.exactDate}</span>
                  <span>·</span>
                  <span>Location: {activeItem.location}</span>
                </div>
                <p className="text-sm text-emerald-100/90 leading-relaxed font-sans-ui">
                  {activeItem.detailedText}
                </p>
              </div>

              {activeItem.quoteExcerpt && (
                <div className="p-4 rounded-xl bg-black/60 border border-amber-400/30 text-xs sm:text-sm text-amber-200 italic font-editorial">
                  “{activeItem.quoteExcerpt}”
                </div>
              )}
            </div>

            <div className="px-6 py-3.5 bg-[#02120b] border-t border-emerald-900/40 flex items-center justify-end">
              <button
                onClick={() => setActiveItem(null)}
                className="px-4 py-1.5 text-xs font-semibold text-emerald-100 bg-emerald-900/60 hover:bg-emerald-800 rounded-lg"
              >
                Close Chronicle
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
