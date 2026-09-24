import React, { useState } from 'react';
import { X, Award, CheckCircle2, Printer, Sparkles, Copy, Check } from 'lucide-react';
import confetti from 'canvas-confetti';

interface PledgeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const PledgeModal: React.FC<PledgeModalProps> = ({ isOpen, onClose }) => {
  const [citizenName, setCitizenName] = useState('');
  const [selectedPledge, setSelectedPledge] = useState('integrity');
  const [isGenerated, setIsGenerated] = useState(false);
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const pledges = [
    {
      id: 'integrity',
      title: 'Uphold Integrity & Reject Corruption',
      text: 'I solemnly pledge to conduct my personal and professional life with unyielding honesty, upholding the rule of law and actively rejecting all forms of corruption and nepotism.',
    },
    {
      id: 'unity',
      title: 'Foster National Unity & Inclusivity',
      text: 'I solemnly pledge to stand for unity above provincialism, sectarianism, or prejudice, respecting the fundamental rights and freedoms of all fellow citizens regardless of faith or background.',
    },
    {
      id: 'education',
      title: 'Pursue Excellence in Knowledge & Science',
      text: 'I solemnly pledge to dedicate myself to lifelong learning, scientific rigor, and skill mastery to build a self-reliant, prosperous, and enlightened Pakistan.',
    },
    {
      id: 'duty',
      title: 'Selfless Devotion to Duty & Discipline',
      text: 'I solemnly pledge to adhere to Quaid-e-Azam’s golden motto of "Unity, Faith, and Discipline", working tirelessly with perseverance and pride for the betterment of humanity.',
    },
  ];

  const handleGenerate = (e: React.FormEvent) => {
    e.preventDefault();
    if (!citizenName.trim()) return;

    setIsGenerated(true);
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#01411C', '#d4af37', '#ffffff', '#10b981', '#fbbf24'],
    });
  };

  const handleCopy = () => {
    const activePledgeObj = pledges.find((p) => p.id === selectedPledge);
    const text = `🇵🇰 NATIONAL PLEDGE TO QUAID-E-AZAM'S PAKISTAN\n\nI, ${citizenName || 'A Proud Citizen'}, solemnly pledge on 25 December:\n"${activePledgeObj?.text}"\n\nGuiding Motto: Unity • Faith • Discipline\nIssued at Quaid-e-Azam Digital Memorial`;
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handlePrint = () => {
    window.print();
  };

  const currentPledgeObj = pledges.find((p) => p.id === selectedPledge);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-xl animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-2xl bg-[#031d13] border border-amber-400/40 rounded-2xl overflow-hidden shadow-[0_0_50px_rgba(0,0,0,0.8)] flex flex-col max-h-[90vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-emerald-800/40 bg-[#02130c]">
          <div className="flex items-center gap-2.5">
            <div className="p-1.5 rounded-lg bg-amber-400/10 border border-amber-400/30 text-amber-400">
              <Award className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-cinzel text-lg font-bold text-white">
                National Pledge of Integrity
              </h3>
              <span className="text-[11px] text-emerald-400/80 uppercase tracking-wider">
                Commemorating Quaid-e-Azam Day
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

        <div className="p-6 overflow-y-auto flex-1 space-y-6">
          {!isGenerated ? (
            <form onSubmit={handleGenerate} className="space-y-5">
              <p className="text-xs sm:text-sm text-emerald-100/85 leading-relaxed">
                Reaffirm your commitment to the founding principles of Pakistan. Select your primary civic vow and enter your name to generate your personalized National Commemorative Certificate.
              </p>

              <div>
                <label className="block text-xs uppercase tracking-wider text-emerald-300 font-semibold mb-2">
                  Your Full Name / Citizen Name *
                </label>
                <input
                  type="text"
                  required
                  value={citizenName}
                  onChange={(e) => setCitizenName(e.target.value)}
                  placeholder="e.g. Muhammad Farooq or Fatima Tariq"
                  className="w-full px-4 py-3 rounded-xl bg-[#02120b] border border-emerald-700/50 text-white placeholder-emerald-600/60 focus:outline-none focus:border-amber-400 focus:ring-1 focus:ring-amber-400 text-sm"
                />
              </div>

              <div>
                <label className="block text-xs uppercase tracking-wider text-emerald-300 font-semibold mb-2">
                  Select Your Primary Pledge
                </label>
                <div className="space-y-2.5">
                  {pledges.map((p) => (
                    <label
                      key={p.id}
                      className={`flex items-start gap-3 p-3.5 rounded-xl border cursor-pointer transition-all ${
                        selectedPledge === p.id
                          ? 'bg-emerald-950/80 border-amber-400/60 shadow-[0_0_15px_rgba(212,175,55,0.15)]'
                          : 'bg-[#02120b]/60 border-emerald-900/50 hover:border-emerald-700/50'
                      }`}
                    >
                      <input
                        type="radio"
                        name="pledge"
                        checked={selectedPledge === p.id}
                        onChange={() => setSelectedPledge(p.id)}
                        className="mt-1 accent-amber-400"
                      />
                      <div>
                        <span className="font-semibold text-xs sm:text-sm text-white block">
                          {p.title}
                        </span>
                        <span className="text-xs text-emerald-200/70 mt-1 block">
                          {p.text}
                        </span>
                      </div>
                    </label>
                  ))}
                </div>
              </div>

              <button
                type="submit"
                disabled={!citizenName.trim()}
                className="w-full py-3.5 px-6 rounded-xl bg-gradient-to-r from-amber-300 via-amber-400 to-amber-500 text-emerald-950 font-bold text-sm tracking-wider uppercase shadow-lg hover:shadow-amber-400/30 active:scale-98 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 cursor-pointer"
              >
                <Sparkles className="w-4 h-4" />
                <span>Generate Official Commemorative Certificate</span>
              </button>
            </form>
          ) : (
            /* Generated Certificate View */
            <div className="space-y-5 animate-in zoom-in-95 duration-300">
              {/* Certificate Box */}
              <div className="p-6 sm:p-8 rounded-2xl bg-gradient-to-b from-[#063320] to-[#02180e] border-2 border-amber-400/60 shadow-[0_0_35px_rgba(212,175,55,0.25)] relative text-center">
                {/* Corner Ornaments */}
                <div className="absolute top-2 left-2 text-amber-400/60 font-cinzel text-lg">✦</div>
                <div className="absolute top-2 right-2 text-amber-400/60 font-cinzel text-lg">✦</div>
                <div className="absolute bottom-2 left-2 text-amber-400/60 font-cinzel text-lg">✦</div>
                <div className="absolute bottom-2 right-2 text-amber-400/60 font-cinzel text-lg">✦</div>

                <div className="inline-flex items-center justify-center p-2 rounded-full bg-amber-400/20 border border-amber-400/40 text-amber-300 mb-3">
                  <CheckCircle2 className="w-6 h-6" />
                </div>

                <span className="text-[11px] uppercase tracking-widest text-amber-300/90 font-bold block mb-1 font-sans-ui">
                  Certificate of Solemn Civic Pledge
                </span>

                <h4 className="font-cinzel text-xl sm:text-2xl font-bold text-white mb-1">
                  Quaid-e-Azam Day 2026
                </h4>

                <p className="text-xs text-emerald-300/80 mb-4">
                  In commemoration of the birth anniversary of Father of the Nation, Quaid-e-Azam Muhammad Ali Jinnah
                </p>

                <div className="my-4 py-3 px-4 rounded-xl bg-black/40 border border-emerald-800/40">
                  <span className="text-xs text-emerald-400/80 block uppercase tracking-wider mb-1">
                    This is solemnly certified to
                  </span>
                  <span className="font-cinzel text-xl sm:text-2xl font-bold text-amber-300 block">
                    {citizenName}
                  </span>
                </div>

                <p className="text-xs sm:text-sm text-emerald-100/90 italic font-editorial leading-relaxed max-w-lg mx-auto mb-5">
                  “{currentPledgeObj?.text}”
                </p>

                <div className="pt-4 border-t border-amber-400/30 flex items-center justify-between text-[11px] text-emerald-300/70">
                  <div className="text-left">
                    <span className="font-cinzel font-semibold block text-amber-200">UNITY • FAITH • DISCIPLINE</span>
                    <span>اتحاد · یقین · تنظیم</span>
                  </div>
                  <div className="text-right">
                    <span className="block font-semibold text-emerald-200">Quaid-e-Azam Memorial</span>
                    <span>25 December</span>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center justify-between gap-3">
                <button
                  onClick={() => setIsGenerated(false)}
                  className="px-4 py-2 text-xs font-medium text-emerald-300 hover:text-white bg-emerald-950/60 rounded-lg border border-emerald-800/40 transition-colors"
                >
                  Edit Pledge
                </button>
                <div className="flex items-center gap-2">
                  <button
                    onClick={handleCopy}
                    className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-white bg-emerald-900 hover:bg-emerald-800 rounded-lg border border-emerald-700/50 transition-colors cursor-pointer"
                  >
                    {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                    <span>{copied ? 'Copied Pledge' : 'Copy Pledge Text'}</span>
                  </button>
                  <button
                    onClick={handlePrint}
                    className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-bold text-emerald-950 bg-gradient-to-r from-amber-300 to-amber-400 rounded-lg shadow hover:brightness-105 transition-all cursor-pointer"
                  >
                    <Printer className="w-3.5 h-3.5" />
                    <span>Print / Save Certificate</span>
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
