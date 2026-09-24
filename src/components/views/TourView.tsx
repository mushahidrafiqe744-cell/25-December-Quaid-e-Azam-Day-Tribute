import React, { useState } from 'react';
import { LANDMARK_TOURS, TourHotspot, LandmarkTourItem } from '../../data/tributeData';
import {
  Sparkles,
  Compass,
  MapPin,
  Info,
  Maximize2,
  ZoomIn,
  ZoomOut,
  RotateCcw,
  Shield,
  Volume2,
  X,
  CheckCircle,
  Eye,
} from 'lucide-react';
import confetti from 'canvas-confetti';

export const TourView: React.FC = () => {
  const [selectedTourId, setSelectedTourId] = useState<string>(LANDMARK_TOURS[0].id);
  const [activeHotspot, setActiveHotspot] = useState<TourHotspot | null>(null);
  const [zoomLevel, setZoomLevel] = useState<number>(1);
  const [isSaluting, setIsSaluting] = useState<boolean>(false);

  const activeTour: LandmarkTourItem =
    LANDMARK_TOURS.find((t) => t.id === selectedTourId) || LANDMARK_TOURS[0];

  const handleTriggerSalute = () => {
    setIsSaluting(true);
    confetti({
      particleCount: 70,
      spread: 60,
      origin: { y: 0.7 },
      colors: ['#01411C', '#d4af37', '#ffffff', '#10b981'],
    });
    setTimeout(() => setIsSaluting(false), 3500);
  };

  return (
    <div className="pt-24 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-12">
      {/* HEADER */}
      <section className="text-center max-w-3xl mx-auto space-y-4">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-950/80 border border-emerald-500/30 text-amber-300 text-xs font-semibold uppercase tracking-widest">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Interactive 360° Memorial & Landmarks</span>
        </div>
        <h1 className="font-cinzel text-4xl sm:text-6xl font-extrabold text-white tracking-wide">
          Virtual Memorial Sanctuary
        </h1>
        <p className="text-xs sm:text-sm text-emerald-200/80 max-w-2xl mx-auto">
          Explore the sacred inner sanctum of Mazar-e-Quaid and historic national landmarks with interactive architectural hotspots and ceremonial tributes.
        </p>
      </section>

      {/* LANDMARK SELECTOR TABS */}
      <div className="flex flex-wrap items-center justify-center gap-3">
        {LANDMARK_TOURS.map((tour) => {
          const isSelected = tour.id === selectedTourId;
          return (
            <button
              key={tour.id}
              onClick={() => {
                setSelectedTourId(tour.id);
                setActiveHotspot(null);
                setZoomLevel(1);
              }}
              className={`px-5 py-3 rounded-2xl border transition-all duration-300 flex items-center gap-3 cursor-pointer ${
                isSelected
                  ? 'bg-gradient-to-r from-emerald-900 to-[#022a1a] border-amber-400 text-white shadow-[0_0_20px_rgba(212,175,55,0.3)]'
                  : 'bg-[#02140d] border-emerald-900/60 text-emerald-200/80 hover:bg-emerald-950 hover:text-white'
              }`}
            >
              <MapPin className={`w-4 h-4 ${isSelected ? 'text-amber-400' : 'text-emerald-500'}`} />
              <div className="text-left">
                <span className="text-xs font-bold block">{tour.name}</span>
                <span className="text-[11px] text-emerald-400/70 block">{tour.city}</span>
              </div>
            </button>
          );
        })}
      </div>

      {/* 360-STYLE INTERACTIVE STAGE */}
      <div className="relative rounded-3xl overflow-hidden bg-black border-2 border-amber-400/40 shadow-2xl group">
        {/* Landmark Image with Zoom */}
        <div className="relative aspect-[16/9] sm:aspect-[21/9] min-h-[380px] sm:min-h-[500px] overflow-hidden">
          <img
            src={activeTour.image}
            alt={activeTour.name}
            className="w-full h-full object-cover transition-transform duration-500"
            style={{ transform: `scale(${zoomLevel})` }}
            referrerPolicy="no-referrer"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/30 pointer-events-none" />

          {/* Interactive Hotspot Markers */}
          {activeTour.hotspots.map((hs) => {
            const isActive = activeHotspot?.id === hs.id;
            return (
              <div
                key={hs.id}
                style={{ left: `${hs.x}%`, top: `${hs.y}%` }}
                className="absolute -translate-x-1/2 -translate-y-1/2 z-20"
              >
                <button
                  onClick={() => setActiveHotspot(hs)}
                  className={`relative group/pin p-2 rounded-full transition-all duration-300 transform hover:scale-125 cursor-pointer ${
                    isActive
                      ? 'bg-amber-400 text-emerald-950 scale-125 shadow-[0_0_25px_#fbbf24]'
                      : 'bg-emerald-950/90 text-amber-300 border border-amber-400/60 hover:bg-amber-400 hover:text-emerald-950 shadow-[0_0_15px_rgba(16,185,129,0.6)]'
                  }`}
                  aria-label={hs.title}
                >
                  <span className="absolute -inset-1 rounded-full bg-amber-400/30 animate-ping" />
                  <Info className="w-4 h-4 relative z-10" />

                  {/* Hover Tag */}
                  <span className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2.5 py-1 rounded-md bg-black/90 backdrop-blur-md text-[11px] font-bold text-amber-300 border border-amber-400/30 whitespace-nowrap opacity-0 group-hover/pin:opacity-100 transition-opacity pointer-events-none shadow-lg">
                    {hs.title}
                  </span>
                </button>
              </div>
            );
          })}

          {/* Controls Bar at Top Right */}
          <div className="absolute top-4 right-4 z-30 flex items-center gap-1.5 p-1.5 rounded-xl bg-black/70 backdrop-blur-md border border-emerald-500/30">
            <button
              onClick={() => setZoomLevel((z) => Math.min(z + 0.2, 1.8))}
              className="p-1.5 text-emerald-200 hover:text-amber-300 hover:bg-emerald-900/50 rounded-lg transition-colors"
              title="Zoom In"
            >
              <ZoomIn className="w-4 h-4" />
            </button>
            <button
              onClick={() => setZoomLevel((z) => Math.max(z - 0.2, 1))}
              className="p-1.5 text-emerald-200 hover:text-amber-300 hover:bg-emerald-900/50 rounded-lg transition-colors"
              title="Zoom Out"
            >
              <ZoomOut className="w-4 h-4" />
            </button>
            <button
              onClick={() => setZoomLevel(1)}
              className="p-1.5 text-emerald-200 hover:text-amber-300 hover:bg-emerald-900/50 rounded-lg transition-colors"
              title="Reset View"
            >
              <RotateCcw className="w-4 h-4" />
            </button>
          </div>

          {/* Bottom Bar Details & Ceremonial Salute Action */}
          <div className="absolute bottom-0 inset-x-0 p-5 sm:p-6 bg-gradient-to-t from-black via-black/80 to-transparent flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div>
              <span className="text-xs uppercase tracking-widest text-amber-400 font-bold block mb-1">
                {activeTour.city} · National Heritage Monument
              </span>
              <h3 className="font-cinzel text-xl sm:text-2xl font-bold text-white">
                {activeTour.name}
              </h3>
              <span className="font-urdu text-sm text-emerald-300 block">
                {activeTour.nameUrdu}
              </span>
            </div>

            <div className="flex items-center gap-3">
              <button
                onClick={handleTriggerSalute}
                className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-bold text-xs uppercase tracking-wider transition-all shadow-lg cursor-pointer ${
                  isSaluting
                    ? 'bg-emerald-500 text-white scale-105 shadow-[0_0_25px_rgba(16,185,129,0.8)]'
                    : 'bg-gradient-to-r from-amber-300 to-amber-500 text-emerald-950 hover:brightness-105 active:scale-95 shadow-[0_0_20px_rgba(251,191,36,0.4)]'
                }`}
              >
                <Shield className="w-4 h-4" />
                <span>{isSaluting ? 'Ceremonial Salute Presented! 🫡' : 'Present Guard Salute (سلامی پیش کریں)'}</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* ACTIVE HOTSPOT DETAIL DRAWER / CARD */}
      {activeHotspot && (
        <div className="p-6 sm:p-8 rounded-3xl glass-panel-gold border border-amber-400/50 shadow-2xl animate-in slide-in-from-bottom-3 duration-300 relative space-y-4">
          <button
            onClick={() => setActiveHotspot(null)}
            className="absolute top-5 right-5 p-1.5 rounded-lg text-emerald-300 hover:text-white hover:bg-emerald-900/50"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-amber-400 font-bold">
            <Eye className="w-4 h-4" />
            <span>Interactive Architectural Archive</span>
          </div>

          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
            <h3 className="font-cinzel text-2xl font-bold text-white">
              {activeHotspot.title}
            </h3>
            <span className="font-urdu text-base text-amber-300">
              {activeHotspot.titleUrdu}
            </span>
          </div>

          <p className="text-sm sm:text-base text-emerald-100/90 leading-relaxed font-sans-ui">
            {activeHotspot.description}
          </p>

          <div className="p-4 rounded-xl bg-black/50 border border-emerald-500/30 flex items-start gap-3">
            <Sparkles className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
            <p className="text-xs sm:text-sm text-amber-200/90 italic font-editorial leading-relaxed">
              <span className="font-bold font-sans-ui not-italic">Historical & Engineering Record: </span>
              {activeHotspot.historicalFact}
            </p>
          </div>
        </div>
      )}

      {/* QUICK INFORMATIVE GRID */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="p-6 rounded-2xl glass-panel border border-emerald-800/40 space-y-2">
          <span className="text-xs uppercase tracking-widest text-amber-400 font-bold">
            Mazar Architecture
          </span>
          <h4 className="font-cinzel text-lg font-bold text-white">
            Yahya Merchant’s Design
          </h4>
          <p className="text-xs text-emerald-200/80 leading-relaxed">
            Constructed between 1960 and 1970 using pure white marble from Swat and Lasbela, designed with modern Islamic cuboid arches.
          </p>
        </div>

        <div className="p-6 rounded-2xl glass-panel border border-emerald-800/40 space-y-2">
          <span className="text-xs uppercase tracking-widest text-amber-400 font-bold">
            Subterranean Vault
          </span>
          <h4 className="font-cinzel text-lg font-bold text-white">
            Lower Burial Chamber
          </h4>
          <p className="text-xs text-emerald-200/80 leading-relaxed">
            Quaid-e-Azam, along with Madar-e-Millat Fatima Jinnah and Prime Minister Liaquat Ali Khan, rests in the lower crypt.
          </p>
        </div>

        <div className="p-6 rounded-2xl glass-panel border border-emerald-800/40 space-y-2">
          <span className="text-xs uppercase tracking-widest text-amber-400 font-bold">
            25 December Tradition
          </span>
          <h4 className="font-cinzel text-lg font-bold text-white">
            Changing of the Guards
          </h4>
          <p className="text-xs text-emerald-200/80 leading-relaxed">
            Cadets from the Pakistan Military Academy Kakul assume ceremonial guard duties on every 25 December with a national 21-gun salute.
          </p>
        </div>
      </div>
    </div>
  );
};
