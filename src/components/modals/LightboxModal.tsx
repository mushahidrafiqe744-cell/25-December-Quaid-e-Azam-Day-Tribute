import React from 'react';
import { GalleryItem } from '../../types';
import { X, Calendar, MapPin, Bookmark, ZoomIn } from 'lucide-react';

interface LightboxModalProps {
  item: GalleryItem | null;
  onClose: () => void;
}

export const LightboxModal: React.FC<LightboxModalProps> = ({ item, onClose }) => {
  if (!item) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-xl animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-4xl bg-[#031c12] border border-emerald-500/30 rounded-2xl overflow-hidden shadow-2xl flex flex-col max-h-[90vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Header Bar */}
        <div className="flex items-center justify-between px-5 py-4 border-b border-emerald-800/40 bg-[#02140d]/90">
          <div className="flex items-center gap-2">
            <span className="text-xs uppercase tracking-widest text-amber-400 font-bold font-sans-ui">
              {item.category}
            </span>
            <span className="text-emerald-600 text-xs">·</span>
            <span className="text-xs text-emerald-300/80">{item.year}</span>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-emerald-300 hover:text-white hover:bg-emerald-900/50 transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Body */}
        <div className="overflow-y-auto flex-1 p-5 sm:p-6 space-y-5">
          {/* Image Canvas Container */}
          <div className="relative w-full rounded-xl overflow-hidden bg-black/60 border border-emerald-900/50 flex items-center justify-center group min-h-[260px] sm:min-h-[380px]">
            <img
              src={item.imageUrl}
              alt={item.title}
              className="w-full max-h-[55vh] object-contain transition-transform duration-300"
              referrerPolicy="no-referrer"
            />
            <div className="absolute bottom-3 right-3 px-2.5 py-1 rounded bg-black/60 backdrop-blur-sm text-[11px] text-emerald-200/90 flex items-center gap-1.5 pointer-events-none">
              <ZoomIn className="w-3.5 h-3.5 text-amber-400" />
              <span>Archival Resolution</span>
            </div>
          </div>

          {/* Details */}
          <div className="space-y-3">
            <h3 className="font-cinzel text-xl sm:text-2xl font-bold text-white">
              {item.title}
            </h3>

            <div className="flex flex-wrap items-center gap-4 text-xs text-emerald-300/80 py-2 border-y border-emerald-900/30">
              <div className="flex items-center gap-1.5">
                <Calendar className="w-3.5 h-3.5 text-amber-400" />
                <span>{item.year}</span>
              </div>
              <div className="flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-emerald-400" />
                <span>{item.location}</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Bookmark className="w-3.5 h-3.5 text-amber-400/80" />
                <span>Source: {item.archivalSource}</span>
              </div>
            </div>

            <p className="text-sm text-emerald-100/90 leading-relaxed font-sans-ui">
              {item.description}
            </p>
          </div>
        </div>

        {/* Footer */}
        <div className="px-5 py-3.5 bg-[#02120b] border-t border-emerald-900/40 flex items-center justify-between">
          <span className="text-xs text-emerald-400/60">
            Quaid-e-Azam National Historical Archives
          </span>
          <button
            onClick={onClose}
            className="px-4 py-1.5 text-xs font-semibold text-emerald-100 bg-emerald-900/60 hover:bg-emerald-800/80 rounded-lg border border-emerald-700/40 transition-colors"
          >
            Close Viewer
          </button>
        </div>
      </div>
    </div>
  );
};
