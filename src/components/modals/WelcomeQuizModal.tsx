import React, { useState, useEffect, useRef } from 'react';
import { QuizQuestion } from '../../types';
import { getNonRepeatingQuestionBatch, recordAnsweredQuestionId, saveVerifiedPassStatus, getVerifiedPassStatus } from '../../utils/quizManager';
import {
  Sparkles,
  Award,
  CheckCircle2,
  XCircle,
  ArrowRight,
  ShieldCheck,
  HelpCircle,
  RotateCcw,
  X,
  User,
  BookOpen,
  Printer,
  Copy,
  Check,
  Star,
  MapPin,
  Flame,
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { STAMP_IMAGE } from '../../data/tributeData';

interface WelcomeQuizModalProps {
  isOpen: boolean;
  onClose: () => void;
  onPassEarned: (score: number, total: number) => void;
}

export const WelcomeQuizModal: React.FC<WelcomeQuizModalProps> = ({
  isOpen,
  onClose,
  onPassEarned,
}) => {
  const [userName, setUserName] = useState<string>(() => localStorage.getItem('quaid_candidate_name') || 'Mushahid Rafiq');
  const [userCity, setUserCity] = useState<string>(() => localStorage.getItem('quaid_candidate_city') || 'Pakistan');
  const [hasEnteredName, setHasEnteredName] = useState<boolean>(false);

  const [questions, setQuestions] = useState<QuizQuestion[]>([]);
  const [currentIdx, setCurrentIdx] = useState<number>(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [score, setScore] = useState<number>(0);
  const [isCompleted, setIsCompleted] = useState<boolean>(false);
  const [isCopied, setIsCopied] = useState<boolean>(false);
  const [isAlreadyPassed, setIsAlreadyPassed] = useState<boolean>(false);

  const certificateRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen) {
      const verified = getVerifiedPassStatus();
      if (verified.isPassed) {
        setIsAlreadyPassed(true);
        setHasEnteredName(true);
        setIsCompleted(true);
        setScore(verified.score || 4);
      } else {
        setIsAlreadyPassed(false);
        // Draw 5 non-repeating questions (comprising direct questions + reading summaries) from the 15-question pool
        const batch = getNonRepeatingQuestionBatch(5);
        setQuestions(batch);
        setCurrentIdx(0);
        setSelectedOption(null);
        setScore(0);
        setIsCompleted(false);
        setHasEnteredName(false);
      }
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const currentQ = questions[currentIdx] || questions[0];
  const totalQuestions = questions.length || 5;
  const isPassing = totalQuestions > 0 && (score / totalQuestions) >= 0.5;

  const handleStartQuiz = (e: React.FormEvent) => {
    e.preventDefault();
    if (!userName.trim()) return;
    localStorage.setItem('quaid_candidate_name', userName.trim());
    localStorage.setItem('quaid_candidate_city', userCity.trim() || 'Pakistan');
    setHasEnteredName(true);
  };

  const handleSelectOption = (optIdx: number) => {
    if (selectedOption !== null || !currentQ) return;
    setSelectedOption(optIdx);
    recordAnsweredQuestionId(currentQ.id);

    if (optIdx === currentQ.correctIndex) {
      setScore((prev) => prev + 1);
    }
  };

  const handleNext = () => {
    if (currentIdx < totalQuestions - 1) {
      setCurrentIdx((prev) => prev + 1);
      setSelectedOption(null);
    } else {
      setIsCompleted(true);
      const isPassed = (score / totalQuestions) >= 0.5;
      saveVerifiedPassStatus(score, totalQuestions);
      onPassEarned(score, totalQuestions);

      if (isPassed) {
        confetti({
          particleCount: 130,
          spread: 90,
          origin: { y: 0.5 },
          colors: ['#01411C', '#d4af37', '#ffffff', '#10b981', '#fbbf24'],
        });
      }
    }
  };

  const handleRetry = () => {
    const batch = getNonRepeatingQuestionBatch(5);
    setQuestions(batch);
    setCurrentIdx(0);
    setSelectedOption(null);
    setScore(0);
    setIsCompleted(false);
    setIsAlreadyPassed(false);
  };

  const handleCopyCard = () => {
    const text = `🏆 OFFICIAL BEST PAKISTANI HONOR CERTIFICATE 🇵🇰\nPresented to: ${userName} (${userCity})\nScore: ${score}/${totalQuestions} (Passed Quaid Memorial Challenge)\n"Unity • Faith • Discipline"\n25 December Quaid-e-Azam Day National Memorial`;
    navigator.clipboard.writeText(text);
    setIsCopied(true);
    confetti({
      particleCount: 50,
      spread: 60,
      origin: { y: 0.6 },
    });
    setTimeout(() => setIsCopied(false), 2500);
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/90 backdrop-blur-2xl animate-in fade-in duration-300">
      <div
        className="relative w-full max-w-2xl bg-gradient-to-b from-[#042819] to-[#01140c] border-2 border-amber-400/60 rounded-3xl overflow-hidden shadow-[0_0_60px_rgba(0,0,0,0.9)] flex flex-col max-h-[94vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-emerald-800/50 bg-[#02130c]/90">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-full bg-amber-400/20 border border-amber-400/40 flex items-center justify-center text-amber-300">
              <Award className="w-4 h-4" />
            </div>
            <div>
              <span className="text-[10px] uppercase tracking-widest text-amber-400 font-bold block">
                Quaid-e-Azam Day Entry Challenge
              </span>
              <span className="font-cinzel text-sm sm:text-base font-bold text-white">
                Best Pakistani Honor Card Challenge
              </span>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-emerald-300/80 hover:text-white hover:bg-emerald-900/50 text-xs font-semibold flex items-center gap-1 cursor-pointer"
            title="Enter website"
          >
            <span>Enter Website</span>
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="overflow-y-auto flex-1 p-6 sm:p-8 space-y-6">
          {/* STEP 1: ENTER NAME & CITY */}
          {!hasEnteredName ? (
            <form onSubmit={handleStartQuiz} className="space-y-6 text-center max-w-md mx-auto py-2">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-amber-400 to-amber-600 p-0.5 mx-auto flex items-center justify-center shadow-[0_0_30px_rgba(251,191,36,0.3)]">
                <div className="w-full h-full bg-[#011a10] rounded-full flex items-center justify-center">
                  <Star className="w-8 h-8 text-amber-400 fill-amber-400" />
                </div>
              </div>

              <div className="space-y-1">
                <h3 className="font-cinzel text-xl sm:text-2xl font-bold text-white">
                  Claim Your "Best Pakistani" Honor Card
                </h3>
                <p className="font-urdu text-base text-amber-300">
                  اپنا نام درج کریں اور 50% کوئز پاس کر کے بہترین پاکستانی کارڈ حاصل کریں
                </p>
                <p className="text-xs text-emerald-200/80">
                  Pass 50% of the questions & reading summary passages to unlock your official personalized card with your name and open the national memorial.
                </p>
              </div>

              <div className="space-y-3 text-left">
                <div>
                  <label className="block text-xs uppercase tracking-wider text-emerald-300 font-semibold mb-1">
                    Your Full Name (آپ کا مکمل نام) *
                  </label>
                  <div className="relative">
                    <User className="w-4 h-4 text-emerald-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                    <input
                      type="text"
                      required
                      value={userName}
                      onChange={(e) => setUserName(e.target.value)}
                      placeholder="e.g. Mushahid Rafiq"
                      className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-[#02140d] border border-emerald-600/50 text-white placeholder-emerald-600 text-xs focus:outline-none focus:border-amber-400"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-wider text-emerald-300 font-semibold mb-1">
                    City / Country (شہر / ملک)
                  </label>
                  <div className="relative">
                    <MapPin className="w-4 h-4 text-emerald-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                    <input
                      type="text"
                      value={userCity}
                      onChange={(e) => setUserCity(e.target.value)}
                      placeholder="e.g. Karachi / Islamabad / Lahore"
                      className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-[#02140d] border border-emerald-600/50 text-white placeholder-emerald-600 text-xs focus:outline-none focus:border-amber-400"
                    />
                  </div>
                </div>
              </div>

              <button
                type="submit"
                className="w-full inline-flex items-center justify-center gap-2 py-3 px-6 rounded-xl bg-gradient-to-r from-amber-300 to-amber-500 text-emerald-950 font-bold text-xs uppercase tracking-wider shadow-[0_0_20px_rgba(251,191,36,0.4)] hover:brightness-105 active:scale-95 transition-all cursor-pointer"
              >
                <span>Begin 50% Challenge (شروع کریں)</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </form>
          ) : !isCompleted && currentQ ? (
            /* STEP 2: ACTIVE QUESTIONS & SEPARATE READING SUMMARY BOX */
            <div className="space-y-5">
              {/* Progress & Candidate Info Bar */}
              <div className="flex items-center justify-between text-xs">
                <span className="text-emerald-300 font-mono">
                  Candidate: <strong className="text-white">{userName}</strong> (Q {currentIdx + 1}/{totalQuestions})
                </span>
                <span className="px-2.5 py-0.5 rounded-full bg-emerald-950 border border-emerald-700 text-amber-300 font-semibold text-[11px]">
                  Pass requirement: ≥ 50% ({Math.ceil(totalQuestions / 2)}/{totalQuestions})
                </span>
              </div>

              <div className="w-full h-1.5 bg-emerald-950 rounded-full overflow-hidden border border-emerald-800/60">
                <div
                  className="h-full bg-gradient-to-r from-emerald-400 to-amber-400 transition-all duration-300"
                  style={{ width: `${((currentIdx + 1) / totalQuestions) * 100}%` }}
                />
              </div>

              {/* DEDICATED SEPARATE SUMMARY PASSAGE BOX (خلاصہ پیراگراف) */}
              {currentQ.isSummaryQuestion && currentQ.summaryPassage && (
                <div className="p-4 sm:p-5 rounded-2xl bg-[#011f13] border-2 border-amber-400/40 space-y-2.5 animate-in fade-in shadow-lg">
                  <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-amber-400 font-bold">
                    <BookOpen className="w-4 h-4" />
                    <span>{currentQ.summaryTitle || 'Historical Summary / سمری خلاصہ'}</span>
                  </div>
                  <p className="text-xs sm:text-sm text-emerald-100 italic font-editorial leading-relaxed">
                    “{currentQ.summaryPassage}”
                  </p>
                  {currentQ.summaryPassageUrdu && (
                    <p className="font-urdu text-xs sm:text-sm text-amber-200/90 leading-relaxed border-t border-emerald-800/40 pt-2" dir="rtl">
                      {currentQ.summaryPassageUrdu}
                    </p>
                  )}
                </div>
              )}

              {/* Question Text */}
              <h3 className="font-cinzel text-base sm:text-lg font-bold text-white leading-relaxed">
                {currentQ.question}
              </h3>

              {/* 4 Options with INSTANT BRIGHT GREEN HIGHLIGHT */}
              <div className="space-y-2.5">
                {currentQ.options.map((option, optIdx) => {
                  const isSelected = selectedOption === optIdx;
                  const isCorrect = optIdx === currentQ.correctIndex;
                  const hasAnswered = selectedOption !== null;

                  let style =
                    'bg-[#02140d] border-emerald-900/60 hover:border-emerald-500/50 text-emerald-100 hover:bg-emerald-950/80';

                  if (hasAnswered) {
                    if (isCorrect) {
                      // INSTANT VIBRANT GREEN ON CORRECT ANSWER
                      style =
                        'bg-emerald-600/90 border-emerald-400 text-white font-bold shadow-[0_0_20px_rgba(16,185,129,0.5)] scale-101';
                    } else if (isSelected && !isCorrect) {
                      style = 'bg-red-950/70 border-red-500/70 text-red-200';
                    } else {
                      style = 'bg-black/40 border-emerald-950/50 opacity-40 text-emerald-400/60';
                    }
                  }

                  return (
                    <button
                      key={optIdx}
                      disabled={hasAnswered}
                      onClick={() => handleSelectOption(optIdx)}
                      className={`w-full p-3.5 rounded-xl border text-left text-xs sm:text-sm font-medium transition-all duration-200 flex items-center justify-between gap-3 cursor-pointer ${style}`}
                    >
                      <div className="flex items-center gap-3">
                        <span className="w-6 h-6 rounded-full bg-black/40 border border-current/30 flex items-center justify-center text-[11px] font-mono shrink-0">
                          {String.fromCharCode(65 + optIdx)}
                        </span>
                        <span>{option}</span>
                      </div>

                      {hasAnswered && isCorrect && (
                        <CheckCircle2 className="w-5 h-5 text-white shrink-0 animate-in zoom-in" />
                      )}
                      {hasAnswered && isSelected && !isCorrect && (
                        <XCircle className="w-5 h-5 text-red-400 shrink-0" />
                      )}
                    </button>
                  );
                })}
              </div>

              {/* Feedback Explanation & Next Button */}
              {selectedOption !== null && (
                <div className="p-4 rounded-xl bg-black/60 border border-emerald-700/50 space-y-3 animate-in fade-in">
                  <p className="text-xs text-emerald-200/90 leading-relaxed font-sans-ui">
                    <span className="font-bold text-amber-300">Historical Fact: </span>
                    {currentQ.explanation}
                  </p>
                  <div className="flex justify-end">
                    <button
                      onClick={handleNext}
                      className="px-5 py-2 rounded-xl bg-gradient-to-r from-amber-300 to-amber-500 text-emerald-950 font-bold text-xs uppercase tracking-wider shadow hover:brightness-105 transition-all cursor-pointer"
                    >
                      {currentIdx === totalQuestions - 1 ? 'View Best Pakistani Card & Result →' : 'Next Question →'}
                    </button>
                  </div>
                </div>
              )}
            </div>
          ) : (
            /* STEP 3: "BEST PAKISTANI" HONOR CERTIFICATE CARD (بہترین پاکستانی اعزازی سند) */
            <div className="space-y-6 text-center animate-in zoom-in-95 duration-300">
              {isPassing || isAlreadyPassed ? (
                <>
                  <div className="space-y-1">
                    <span className="text-xs uppercase tracking-widest text-amber-400 font-bold">
                      Quaid-e-Azam Day 2026 Special National Commendation
                    </span>
                    <h3 className="font-cinzel text-2xl sm:text-3xl font-extrabold text-white">
                      Mubarak, {userName}!
                    </h3>
                    <p className="font-urdu text-base text-amber-300">
                      آپ نے قائد اعظم ڈے چیلنج کامیابی سے پاس کر کے بہترین پاکستانی کارڈ حاصل کر لیا ہے
                    </p>
                  </div>

                  {/* EMBOSSED BEST PAKISTANI HONOR CARD */}
                  <div
                    ref={certificateRef}
                    className="p-6 sm:p-7 rounded-3xl bg-gradient-to-b from-[#053220] via-[#022115] to-[#01110a] border-3 border-amber-400/80 shadow-[0_0_40px_rgba(251,191,36,0.3)] relative overflow-hidden text-left space-y-4"
                  >
                    {/* Official Stamp */}
                    <div className="absolute top-4 right-4 w-12 h-12 rounded-lg overflow-hidden border border-amber-400 shadow-md transform rotate-3">
                      <img
                        src={STAMP_IMAGE}
                        alt="National Stamp"
                        className="w-full h-full object-cover"
                        referrerPolicy="no-referrer"
                      />
                    </div>

                    <div className="flex items-center gap-2 text-[10px] uppercase tracking-widest text-amber-400 font-bold">
                      <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                      <span>OFFICIAL NATIONAL HONOR ROLL</span>
                    </div>

                    <div className="border-b border-amber-400/30 pb-3">
                      <h4 className="font-cinzel text-lg sm:text-xl font-extrabold text-white">
                        BEST PAKISTANI HONOR CARD
                      </h4>
                      <span className="font-urdu text-xs text-emerald-300" dir="rtl">
                        بہترین پاکستانی اعزازی سند برائے یومِ قائد اعظم
                      </span>
                    </div>

                    <div className="space-y-1">
                      <span className="text-[11px] text-emerald-300/80 uppercase tracking-wider block">
                        This distinguished honor is proudly awarded to:
                      </span>
                      <div className="font-cinzel text-2xl sm:text-3xl font-extrabold text-amber-300">
                        {userName}
                      </div>
                      <span className="text-xs text-emerald-200 block">{userCity}</span>
                    </div>

                    <p className="text-xs text-emerald-100/90 leading-relaxed font-editorial italic">
                      “For demonstrating exceptional knowledge of the life, constitutional struggle, and sacred principles of Quaid-e-Azam Muhammad Ali Jinnah on 25 December.”
                    </p>

                    <div className="pt-3 border-t border-amber-400/30 flex items-center justify-between text-xs">
                      <div>
                        <span className="text-[10px] text-emerald-400/80 uppercase tracking-wider block">
                          Verified Knowledge Score:
                        </span>
                        <span className="font-mono text-sm font-bold text-amber-300">
                          {score} / {totalQuestions} ({Math.round((score / totalQuestions) * 100)}% Pass)
                        </span>
                      </div>

                      <div className="text-right">
                        <span className="font-cinzel font-bold text-white text-xs block">
                          UNITY • FAITH • DISCIPLINE
                        </span>
                        <span className="text-[10px] text-emerald-400/80">25 December 2026</span>
                      </div>
                    </div>
                  </div>

                  {/* Actions: Copy, Print, Enter Website */}
                  <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
                    <button
                      onClick={handleCopyCard}
                      className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-emerald-900/80 hover:bg-emerald-800 text-emerald-100 text-xs font-semibold cursor-pointer"
                    >
                      {isCopied ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
                      <span>{isCopied ? 'Card Copied!' : 'Copy Card Text'}</span>
                    </button>

                    <button
                      onClick={handlePrint}
                      className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-emerald-900/80 hover:bg-emerald-800 text-emerald-100 text-xs font-semibold cursor-pointer"
                    >
                      <Printer className="w-3.5 h-3.5 text-amber-400" />
                      <span>Print Certificate</span>
                    </button>

                    <button
                      onClick={onClose}
                      className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl bg-gradient-to-r from-amber-300 to-amber-500 text-emerald-950 font-bold text-xs uppercase tracking-wider shadow-[0_0_25px_rgba(251,191,36,0.5)] hover:brightness-105 active:scale-95 transition-all cursor-pointer"
                    >
                      <ShieldCheck className="w-4 h-4" />
                      <span>Enter Memorial Website (اوپن کریں)</span>
                    </button>
                  </div>
                </>
              ) : (
                /* Failed <50% view with retry */
                <div className="space-y-4 py-4">
                  <div className="w-16 h-16 rounded-full bg-red-500/20 border border-red-500 text-red-300 mx-auto flex items-center justify-center">
                    <HelpCircle className="w-8 h-8" />
                  </div>
                  <div>
                    <h3 className="font-cinzel text-xl font-bold text-white">
                      Score: {score}/{totalQuestions} (Needs ≥ 50% to Pass)
                    </h3>
                    <span className="font-urdu text-sm text-amber-300 block mt-1">
                      بہترین پاکستانی کارڈ حاصل کرنے کے لیے 50% سوالات درست ہونا ضروری ہیں
                    </span>
                  </div>
                  <div className="flex items-center justify-center gap-3 pt-2">
                    <button
                      onClick={handleRetry}
                      className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-xl bg-emerald-900 hover:bg-emerald-800 text-emerald-100 text-xs font-semibold cursor-pointer"
                    >
                      <RotateCcw className="w-3.5 h-3.5" />
                      <span>Try Unseen Questions Again</span>
                    </button>
                    <button
                      onClick={onClose}
                      className="px-5 py-2.5 rounded-xl bg-emerald-950 text-emerald-300 border border-emerald-800 text-xs font-semibold cursor-pointer"
                    >
                      Enter Website
                    </button>
                  </div>
                </div>
              )}
            </div>
          )}
        </div>

        {/* Footer info */}
        <div className="px-6 py-3 bg-[#02120b] border-t border-emerald-900/40 flex items-center justify-between text-xs text-emerald-400/70">
          <span>25 December Quaid-e-Azam Day National Memorial</span>
          <button
            onClick={onClose}
            className="text-amber-300/80 hover:text-white underline cursor-pointer text-[11px]"
          >
            Direct Access (براہِ راست داخل ہوں)
          </button>
        </div>
      </div>
    </div>
  );
};
