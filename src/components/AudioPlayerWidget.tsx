import React, { useState, useEffect, useRef } from 'react';
import { Volume2, VolumeX, Sparkles } from 'lucide-react';

export const AudioPlayerWidget: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const audioCtxRef = useRef<AudioContext | null>(null);
  const oscillatorsRef = useRef<OscillatorNode[]>([]);
  const gainNodeRef = useRef<GainNode | null>(null);

  const startAmbientTone = () => {
    try {
      const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      const ctx = new AudioCtx();
      audioCtxRef.current = ctx;

      const masterGain = ctx.createGain();
      masterGain.gain.setValueAtTime(0.001, ctx.currentTime);
      masterGain.gain.exponentialRampToValueAtTime(0.07, ctx.currentTime + 2.5);
      masterGain.connect(ctx.destination);
      gainNodeRef.current = masterGain;

      // Chord: D minor with noble 9th / majestic intervals (D, F, A, C, E)
      const freqs = [146.83, 220.00, 261.63, 329.63, 440.00];
      const oscs: OscillatorNode[] = [];

      freqs.forEach((freq) => {
        const osc = ctx.createOscillator();
        const panner = ctx.createStereoPanner ? ctx.createStereoPanner() : null;
        const oscGain = ctx.createGain();

        osc.type = 'sine';
        osc.frequency.setValueAtTime(freq, ctx.currentTime);

        // Slow frequency vibrato / warmth
        const lfo = ctx.createOscillator();
        const lfoGain = ctx.createGain();
        lfo.frequency.setValueAtTime(0.2, ctx.currentTime);
        lfoGain.gain.setValueAtTime(1.5, ctx.currentTime);
        lfo.connect(osc.frequency);
        lfo.start();

        oscGain.gain.setValueAtTime(0.3, ctx.currentTime);

        if (panner) {
          panner.pan.setValueAtTime((Math.random() - 0.5) * 0.8, ctx.currentTime);
          osc.connect(panner);
          panner.connect(oscGain);
        } else {
          osc.connect(oscGain);
        }

        oscGain.connect(masterGain);
        osc.start();
        oscs.push(osc);
      });

      oscillatorsRef.current = oscs;
      setIsPlaying(true);
    } catch (err) {
      console.warn('Audio context init prevented by browser policy:', err);
    }
  };

  const stopAmbientTone = () => {
    if (gainNodeRef.current && audioCtxRef.current) {
      gainNodeRef.current.gain.exponentialRampToValueAtTime(0.0001, audioCtxRef.current.currentTime + 1.2);
      setTimeout(() => {
        oscillatorsRef.current.forEach(osc => {
          try { osc.stop(); } catch {}
        });
        oscillatorsRef.current = [];
        audioCtxRef.current?.close();
        audioCtxRef.current = null;
        setIsPlaying(false);
      }, 1200);
    } else {
      setIsPlaying(false);
    }
  };

  const toggleSound = () => {
    if (isPlaying) {
      stopAmbientTone();
    } else {
      startAmbientTone();
    }
  };

  useEffect(() => {
    return () => {
      stopAmbientTone();
    };
  }, []);

  return (
    <button
      onClick={toggleSound}
      title={isPlaying ? "Mute Ambient Tribute Music" : "Play Ambient Tribute Harmony"}
      aria-label={isPlaying ? "Mute Ambient Tribute Music" : "Play Ambient Tribute Harmony"}
      className={`inline-flex items-center gap-2 px-3 py-1.5 text-xs font-medium rounded-full transition-all duration-300 border ${
        isPlaying
          ? 'bg-emerald-950/80 text-emerald-300 border-emerald-500/50 shadow-[0_0_15px_rgba(16,185,129,0.3)]'
          : 'bg-emerald-950/40 text-emerald-100/70 border-emerald-800/40 hover:text-emerald-200 hover:border-emerald-600/50'
      }`}
    >
      {isPlaying ? (
        <>
          <Volume2 className="w-3.5 h-3.5 text-emerald-400 animate-pulse" />
          <span className="hidden sm:inline">Ambient Tribute On</span>
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
          </span>
        </>
      ) : (
        <>
          <VolumeX className="w-3.5 h-3.5 text-emerald-500/70" />
          <span className="hidden sm:inline">Play Tribute Atmosphere</span>
          <Sparkles className="w-3 h-3 text-amber-400/80" />
        </>
      )}
    </button>
  );
};
