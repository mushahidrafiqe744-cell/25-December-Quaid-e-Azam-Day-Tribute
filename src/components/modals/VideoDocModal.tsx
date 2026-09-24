import React, { useState, useEffect } from 'react';
import { X, Play, Pause, RotateCcw, Volume2, Film, Sparkles, MessageSquare } from 'lucide-react';
import { SPEECH_11_AUGUST_IMAGE, LAHORE_RESOLUTION_IMAGE } from '../../data/tributeData';

interface VideoDocModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const VideoDocModal: React.FC<VideoDocModalProps> = ({ isOpen, onClose }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [selectedSpeech, setSelectedSpeech] = useState<'1947' | '1940'>('1947');
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isPlaying) {
      interval = setInterval(() => {
        setProgress((prev) => {
          if (prev >= 100) {
            setIsPlaying(false);
            return 0;
          }
          return prev + 1;
        });
      }, 300);
    }
    return () => clearInterval(interval);
  }, [isPlaying]);

  if (!isOpen) return null;

  const speeches = {
    '1947': {
      title: 'The 11th August 1947 Presidential Address',
      subtitle: 'Inaugural Address to the Constituent Assembly of Pakistan',
      image: SPEECH_11_AUGUST_IMAGE,
      location: 'Sindh Assembly Hall, Karachi',
      audioDuration: '04:12',
      transcriptSegments: [
        {
          time: '00:15',
          text: '“You are free; you are free to go to your temples, you are free to go to your mosques or to any other place of worship in this State of Pakistan.”',
        },
        {
          time: '01:30',
          text: '“You may belong to any religion or caste or creed — that has nothing to do with the business of the State. We are starting in the days where there is no discrimination, no distinction between one community and another.”',
        },
        {
          time: '02:45',
          text: '“One of the biggest curses from which India is suffering is bribery and corruption. That really is a poison. We must put that down with an iron hand.”',
        },
        {
          time: '03:40',
          text: '“My guiding principle will be justice and complete impartiality, and I am sure that with your support and cooperation, I can look forward to Pakistan becoming one of the greatest nations of the world.”',
        },
      ],
    },
    '1940': {
      title: 'The 1940 Lahore Resolution Address',
      subtitle: 'Proclamation of the Pakistan Nationhood at Minto Park',
      image: LAHORE_RESOLUTION_IMAGE,
      location: 'Iqbal Park, Lahore',
      audioDuration: '03:45',
      transcriptSegments: [
        {
          time: '00:20',
          text: '“Musalmans are not a minority as it is commonly understood. Musalmans are a nation according to any definition of a nation, and they must have their homelands, their territory, and their State.”',
        },
        {
          time: '01:40',
          text: '“We wish to live in peace and harmony with our neighbours as a free and independent people. We wish our people to develop to the fullest our spiritual, cultural, economic, and political life.”',
        },
        {
          time: '02:50',
          text: '“No power on earth can prevent the march of a nation united in purpose and resolute in will.”',
        },
      ],
    },
  };

  const currentSpeech = speeches[selectedSpeech];

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/90 backdrop-blur-xl animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-3xl bg-[#031b11] border border-emerald-500/40 rounded-2xl overflow-hidden shadow-2xl flex flex-col max-h-[92vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="flex items-center justify-between px-5 py-4 border-b border-emerald-800/40 bg-[#02130c]">
          <div className="flex items-center gap-2.5">
            <Film className="w-5 h-5 text-amber-400" />
            <div>
              <h3 className="font-cinzel text-base sm:text-lg font-bold text-white">
                Archival Voice of Quaid-e-Azam
              </h3>
              <span className="text-[11px] text-emerald-400/80">
                Radio Pakistan & Historical Documentation Archive
              </span>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-emerald-300 hover:text-white hover:bg-emerald-900/50 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="overflow-y-auto flex-1 p-5 sm:p-6 space-y-5">
          {/* Switcher Tabs */}
          <div className="flex items-center gap-2 p-1 bg-black/40 rounded-xl border border-emerald-900/60">
            <button
              onClick={() => {
                setSelectedSpeech('1947');
                setIsPlaying(false);
                setProgress(0);
              }}
              className={`flex-1 py-2 px-3 text-xs font-semibold rounded-lg transition-all ${
                selectedSpeech === '1947'
                  ? 'bg-emerald-800/80 text-amber-300 border border-amber-400/30'
                  : 'text-emerald-300/70 hover:text-white'
              }`}
            >
              11 August 1947 Address (Karachi)
            </button>
            <button
              onClick={() => {
                setSelectedSpeech('1940');
                setIsPlaying(false);
                setProgress(0);
              }}
              className={`flex-1 py-2 px-3 text-xs font-semibold rounded-lg transition-all ${
                selectedSpeech === '1940'
                  ? 'bg-emerald-800/80 text-amber-300 border border-amber-400/30'
                  : 'text-emerald-300/70 hover:text-white'
              }`}
            >
              23 March 1940 Resolution (Lahore)
            </button>
          </div>

          {/* Player Screen */}
          <div className="relative rounded-2xl overflow-hidden bg-black/80 border border-emerald-700/40 shadow-inner group">
            <img
              src={currentSpeech.image}
              alt={currentSpeech.title}
              className={`w-full h-56 sm:h-72 object-cover opacity-60 transition-transform duration-700 ${
                isPlaying ? 'scale-105' : 'scale-100'
              }`}
              referrerPolicy="no-referrer"
            />
            {/* Film Grain & Scrim */}
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent flex flex-col justify-between p-5">
              <div className="flex items-center justify-between">
                <span className="text-[11px] uppercase tracking-widest px-2.5 py-1 rounded bg-black/70 text-amber-300 border border-amber-400/20">
                  {currentSpeech.location}
                </span>
                <span className="flex items-center gap-1.5 text-xs text-emerald-300 font-mono">
                  <Volume2 className="w-3.5 h-3.5 text-amber-400" />
                  {currentSpeech.audioDuration}
                </span>
              </div>

              {/* Big Center Play/Pause Button */}
              <div className="flex items-center justify-center">
                <button
                  onClick={() => setIsPlaying(!isPlaying)}
                  className="w-16 h-16 rounded-full bg-gradient-to-br from-amber-300 to-amber-500 text-emerald-950 flex items-center justify-center shadow-[0_0_30px_rgba(251,191,36,0.6)] transform hover:scale-110 active:scale-95 transition-all cursor-pointer"
                  aria-label={isPlaying ? 'Pause' : 'Play'}
                >
                  {isPlaying ? (
                    <Pause className="w-7 h-7 fill-current" />
                  ) : (
                    <Play className="w-7 h-7 fill-current translate-x-0.5" />
                  )}
                </button>
              </div>

              {/* Audio Waveform / Scrubber */}
              <div className="space-y-2">
                <div className="flex items-center justify-between text-[11px] text-emerald-200/80 font-mono">
                  <span>{isPlaying ? 'PLAYING ARCHIVAL AUDIO' : 'READY FOR BROADCAST'}</span>
                  <span>{progress}%</span>
                </div>
                <div className="w-full h-1.5 bg-emerald-950 rounded-full overflow-hidden border border-emerald-800/60">
                  <div
                    className="h-full bg-gradient-to-r from-emerald-400 to-amber-400 transition-all duration-300"
                    style={{ width: `${progress}%` }}
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Transcript Section */}
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <MessageSquare className="w-4 h-4 text-amber-400" />
                <h4 className="text-sm font-bold uppercase tracking-wider text-emerald-200">
                  Speech Key Transcript & Excerpts
                </h4>
              </div>
              <button
                onClick={() => {
                  setProgress(0);
                  setIsPlaying(false);
                }}
                className="text-xs text-emerald-400/80 hover:text-emerald-200 flex items-center gap-1"
              >
                <RotateCcw className="w-3 h-3" />
                <span>Reset</span>
              </button>
            </div>

            <div className="space-y-2.5">
              {currentSpeech.transcriptSegments.map((seg, idx) => (
                <div
                  key={idx}
                  className="p-3.5 rounded-xl bg-[#02140d] border border-emerald-900/50 hover:border-emerald-700/50 transition-colors flex items-start gap-3"
                >
                  <span className="text-[11px] font-mono text-amber-400/90 shrink-0 mt-0.5 px-1.5 py-0.5 rounded bg-emerald-950/80 border border-amber-400/20">
                    {seg.time}
                  </span>
                  <p className="text-xs sm:text-sm text-emerald-100/90 font-editorial italic leading-relaxed">
                    {seg.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
