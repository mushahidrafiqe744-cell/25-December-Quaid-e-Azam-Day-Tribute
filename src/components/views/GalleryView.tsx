import React, { useState } from 'react';
import { GALLERY_ITEMS } from '../../data/tributeData';
import { GalleryItem } from '../../types';
import { Sparkles, ZoomIn, Calendar, MapPin, Search } from 'lucide-react';

interface GalleryViewProps {
  onOpenLightbox: (item: GalleryItem) => void;
}

export const GalleryView: React.FC<GalleryViewProps> = ({ onOpenLightbox }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const categories = [
    'All',
    'Quaid-e-Azam',
    'Pakistan Movement',
    'Independence',
    'Historical Moments',
    'Memorials',
  ];

  const filteredItems = GALLERY_ITEMS.filter((item) => {
    const matchesCat = selectedCategory === 'All' || item.category === selectedCategory;
    const matchesSearch =
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.location.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCat && matchesSearch;
  });

  return (
    <div className="pt-24 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-12">
      {/* HEADER */}
      <section className="text-center max-w-3xl mx-auto space-y-4">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-950/80 border border-emerald-500/30 text-amber-300 text-xs font-semibold uppercase tracking-widest">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Archival Photographic Exhibition</span>
        </div>
        <h1 className="font-cinzel text-4xl sm:text-6xl font-extrabold text-white tracking-wide">
          Historical Visual Gallery
        </h1>
        <p className="text-xs sm:text-sm text-emerald-200/80 max-w-2xl mx-auto">
          High-definition archival photographs, landmark sessions of the Pakistan Movement, and national memorial landmarks honoring the Father of the Nation.
        </p>
      </section>

      {/* FILTER & SEARCH */}
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
            placeholder="Search archival photos..."
            className="w-full pl-9 pr-4 py-2 rounded-xl bg-[#02140d] border border-emerald-700/50 text-white placeholder-emerald-500 text-xs focus:outline-none focus:border-amber-400"
          />
        </div>
      </div>

      {/* GALLERY GRID */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredItems.map((item) => (
          <div
            key={item.id}
            onClick={() => onOpenLightbox(item)}
            className="group rounded-2xl overflow-hidden glass-panel border border-emerald-500/20 hover:border-amber-400/50 transition-all duration-500 cursor-pointer flex flex-col justify-between hover:-translate-y-1 shadow-lg hover:shadow-[0_0_30px_rgba(0,0,0,0.6)]"
          >
            {/* Image Container with Hover Zoom */}
            <div className="relative aspect-[4/3] bg-black/60 overflow-hidden">
              <img
                src={item.imageUrl}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-110 filter contrast-105 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-60 group-hover:opacity-30 transition-opacity" />

              {/* Hover Badge */}
              <div className="absolute top-3 right-3 px-2.5 py-1 rounded-full bg-black/70 backdrop-blur-sm border border-emerald-500/30 text-[11px] text-amber-300 font-semibold flex items-center gap-1">
                <ZoomIn className="w-3.5 h-3.5" />
                <span>View Fullscreen</span>
              </div>

              <div className="absolute bottom-3 left-3 px-2.5 py-0.5 rounded bg-emerald-950/80 text-[11px] text-emerald-300 font-medium">
                {item.category}
              </div>
            </div>

            {/* Caption & Metadata */}
            <div className="p-5 space-y-2">
              <div className="flex items-center justify-between text-xs text-emerald-400/80 font-mono">
                <span className="flex items-center gap-1">
                  <Calendar className="w-3 h-3 text-amber-400" />
                  {item.year}
                </span>
                <span className="flex items-center gap-1">
                  <MapPin className="w-3 h-3 text-emerald-400" />
                  {item.location}
                </span>
              </div>

              <h3 className="font-cinzel text-base sm:text-lg font-bold text-white group-hover:text-amber-300 transition-colors line-clamp-1">
                {item.title}
              </h3>

              <p className="text-xs text-emerald-100/75 line-clamp-2 leading-relaxed font-sans-ui">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
