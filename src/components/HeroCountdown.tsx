import React, { useState, useEffect } from 'react';
import { Calendar, Clock, Sparkles } from 'lucide-react';
import confetti from 'canvas-confetti';

export const HeroCountdown: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState<{
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
    isToday: boolean;
    targetYear: number;
  }>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
    isToday: false,
    targetYear: new Date().getFullYear(),
  });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const now = new Date();
      const currentYear = now.getFullYear();
      
      // Target: Dec 25 00:00:00 of current year
      let targetDate = new Date(currentYear, 11, 25, 0, 0, 0); // month is 0-indexed (11 = Dec)
      const nextDay = new Date(currentYear, 11, 26, 0, 0, 0);

      let isToday = false;
      let targetYear = currentYear;

      // If today is December 25th
      if (now >= targetDate && now < nextDay) {
        isToday = true;
      } else if (now >= nextDay) {
        // Passed this year's Dec 25, calculate for next year
        targetDate = new Date(currentYear + 1, 11, 25, 0, 0, 0);
        targetYear = currentYear + 1;
      }

      const difference = targetDate.getTime() - now.getTime();

      if (isToday) {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0, isToday: true, targetYear });
        return;
      }

      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((difference / 1000 / 60) % 60);
      const seconds = Math.floor((difference / 1000) % 60);

      setTimeLeft({
        days: Math.max(0, days),
        hours: Math.max(0, hours),
        minutes: Math.max(0, minutes),
        seconds: Math.max(0, seconds),
        isToday: false,
        targetYear,
      });
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, []);

  const triggerCelebration = () => {
    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#01411C', '#d4af37', '#ffffff', '#10b981', '#fbbf24'],
    });
  };

  if (timeLeft.isToday) {
    return (
      <div className="w-full max-w-2xl mx-auto p-6 rounded-2xl glass-panel-gold glow-gold text-center relative overflow-hidden border border-amber-400/40">
        <div className="absolute top-0 right-0 transform translate-x-4 -translate-y-4 w-28 h-28 bg-amber-400/10 rounded-full blur-2xl" />
        <div className="flex items-center justify-center gap-2 mb-2 text-amber-300">
          <Sparkles className="w-5 h-5 animate-spin text-amber-400" />
          <span className="text-xs uppercase tracking-widest font-bold">25 December Special Commemoration</span>
          <Sparkles className="w-5 h-5 animate-spin text-amber-400" />
        </div>
        <h3 className="font-cinzel text-2xl sm:text-3xl font-bold text-white mb-2">
          Today We Remember Quaid-e-Azam
        </h3>
        <p className="text-emerald-100/90 text-sm max-w-lg mx-auto mb-4">
          Happy Quaid-e-Azam Day! Celebrating the 150th+ birth anniversary of our founding father with renewed unity, faith, and discipline.
        </p>
        <button
          onClick={triggerCelebration}
          className="inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-amber-300 to-amber-500 text-emerald-950 font-bold rounded-full text-xs shadow-lg hover:brightness-110 active:scale-95 transition-all cursor-pointer"
        >
          <Sparkles className="w-4 h-4" />
          <span>Celebrate Quaid Day</span>
        </button>
      </div>
    );
  }

  const timeUnits = [
    { label: 'DAYS', value: timeLeft.days },
    { label: 'HOURS', value: timeLeft.hours },
    { label: 'MINUTES', value: timeLeft.minutes },
    { label: 'SECONDS', value: timeLeft.seconds },
  ];

  return (
    <div className="w-full max-w-2xl mx-auto">
      <div className="glass-panel p-5 sm:p-6 rounded-2xl border border-emerald-500/20 shadow-[0_8px_32px_rgba(0,0,0,0.4)] relative overflow-hidden">
        {/* Ambient Top Flare */}
        <div className="absolute -top-12 left-1/2 -translate-x-1/2 w-64 h-16 bg-emerald-400/15 blur-2xl rounded-full pointer-events-none" />

        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 mb-4 pb-3 border-b border-emerald-800/30">
          <div className="flex items-center gap-2.5">
            <div className="p-1.5 rounded-lg bg-emerald-950/80 border border-emerald-500/30 text-amber-300">
              <Calendar className="w-4 h-4" />
            </div>
            <div>
              <span className="text-xs font-semibold text-emerald-100 uppercase tracking-wider block">
                25 December Countdown
              </span>
              <span className="text-[11px] text-emerald-400/80">
                Quaid-e-Azam Muhammad Ali Jinnah Birth Anniversary
              </span>
            </div>
          </div>
          <div className="flex items-center gap-1.5 text-xs text-amber-300/90 bg-emerald-950/60 px-3 py-1 rounded-full border border-amber-400/20">
            <Clock className="w-3.5 h-3.5" />
            <span className="tabular-nums font-mono font-medium">Dec 25, {timeLeft.targetYear}</span>
          </div>
        </div>

        {/* 4 Clock Blocks */}
        <div className="grid grid-cols-4 gap-2 sm:gap-4">
          {timeUnits.map((unit) => (
            <div
              key={unit.label}
              className="flex flex-col items-center justify-center p-2.5 sm:p-3.5 rounded-xl bg-gradient-to-b from-[#052818]/80 to-[#02180e]/90 border border-emerald-500/25 shadow-[inset_0_1px_0_rgba(255,255,255,0.06)] group hover:border-amber-400/40 transition-colors"
            >
              <span className="font-cinzel text-xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight tabular-nums drop-shadow-[0_2px_8px_rgba(0,0,0,0.5)]">
                {String(unit.value).padStart(2, '0')}
              </span>
              <span className="text-[9px] sm:text-[11px] font-semibold text-amber-400/90 tracking-widest mt-1 uppercase font-sans-ui">
                {unit.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
