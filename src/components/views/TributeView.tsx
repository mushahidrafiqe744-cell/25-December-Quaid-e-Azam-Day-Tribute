import React, { useState, useEffect } from 'react';
import { NavPage, QuizQuestion } from '../../types';
import { MAZAR_IMAGE } from '../../data/tributeData';
import {
  getNonRepeatingQuestionBatch,
  recordAnsweredQuestionId,
  saveVerifiedPassStatus,
  getVerifiedPassStatus,
} from '../../utils/quizManager';
import {
  Sparkles,
  Play,
  Flame,
  Flower2,
  Award,
  Heart,
  HelpCircle,
  CheckCircle2,
  XCircle,
  RotateCcw,
  ShieldCheck,
  RefreshCw,
  BookOpen,
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { TributeWallSection } from './TributeWallSection';

interface TributeViewProps {
  onNavigate: (page: NavPage) => void;
  onOpenDocModal: () => void;
  onOpenPledgeModal: () => void;
}

export const TributeView: React.FC<TributeViewProps> = ({
  onNavigate,
  onOpenDocModal,
  onOpenPledgeModal,
}) => {
  // Live tribute counter
  const [tributeCount, setTributeCount] = useState<number>(147250);
  const [hasOffered, setHasOffered] = useState<boolean>(false);

  // Quiz state with non-repeating questions
  const [quizQuestions, setQuizQuestions] = useState<QuizQuestion[]>([]);
  const [currentQuizIdx, setCurrentQuizIdx] = useState<number>(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [quizScore, setQuizScore] = useState<number>(0);
  const [quizFinished, setQuizFinished] = useState<boolean>(false);
  const [verifiedStatus, setVerifiedStatus] = useState(getVerifiedPassStatus());

  const loadFreshQuizBatch = () => {
    const batch = getNonRepeatingQuestionBatch(5);
    setQuizQuestions(batch);
    setCurrentQuizIdx(0);
    setSelectedOption(null);
    setQuizScore(0);
    setQuizFinished(false);
  };

  useEffect(() => {
    loadFreshQuizBatch();
  }, []);

  const handleOfferTribute = (type: 'flower' | 'candle') => {
    if (!hasOffered) {
      setTributeCount((prev) => prev + 1);
      setHasOffered(true);
    }
    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#01411C', '#d4af37', '#ffffff', '#10b981', '#fbbf24'],
    });
  };

  const handleSelectQuizOption = (optIdx: number) => {
    if (selectedOption !== null || !quizQuestions[currentQuizIdx]) return;
    const currentQ = quizQuestions[currentQuizIdx];

    setSelectedOption(optIdx);
    recordAnsweredQuestionId(currentQ.id);

    if (optIdx === currentQ.correctIndex) {
      setQuizScore((prev) => prev + 1);
    }
  };

  const handleNextQuestion = () => {
    if (currentQuizIdx < quizQuestions.length - 1) {
      setCurrentQuizIdx((prev) => prev + 1);
      setSelectedOption(null);
    } else {
      setQuizFinished(true);
      const total = quizQuestions.length;
      saveVerifiedPassStatus(quizScore, total);
      setVerifiedStatus(getVerifiedPassStatus());

      if ((quizScore / total) >= 0.5) {
        confetti({
          particleCount: 100,
          spread: 80,
          origin: { y: 0.5 },
          colors: ['#01411C', '#d4af37', '#ffffff', '#10b981', '#fbbf24'],
        });
      }
    }
  };

  const currentQ = quizQuestions[currentQuizIdx];

  return (
    <div className="pt-24 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-20">
      {/* CINEMATIC TRIBUTE HERO */}
      <section className="relative rounded-3xl overflow-hidden bg-gradient-to-b from-[#042416] to-[#01140c] border-2 border-amber-400/40 shadow-2xl">
        <div className="relative min-h-[480px] sm:min-h-[540px] flex items-center justify-center p-6 sm:p-12 text-center">
          <img
            src={MAZAR_IMAGE}
            alt="Mazar-e-Quaid Karachi"
            className="absolute inset-0 w-full h-full object-cover filter brightness-40 contrast-110"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#02130d] via-[#02130d]/60 to-transparent" />

          {/* Foreground Tribute Content */}
          <div className="relative z-10 max-w-3xl mx-auto space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-950/80 border border-amber-400/40 text-amber-300 text-xs font-bold uppercase tracking-widest">
              <Sparkles className="w-3.5 h-3.5" />
              <span>National Ceremonial Remembrance</span>
            </div>

            <h1 className="font-cinzel text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight">
              Remembering the Father of the Nation
            </h1>

            <p className="font-editorial text-base sm:text-xl text-emerald-100 italic leading-relaxed max-w-2xl mx-auto">
              “On 25 December, the entire nation bows in deepest reverence to the immortal architect of Pakistan, whose unyielding character and constitutional will gifted 70 million souls a sovereign destiny.”
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
              <button
                onClick={onOpenDocModal}
                className="inline-flex items-center gap-3 px-6 py-3.5 rounded-xl bg-gradient-to-r from-amber-300 via-amber-400 to-amber-500 text-emerald-950 font-bold text-xs uppercase tracking-wider shadow-[0_0_30px_rgba(251,191,36,0.6)] hover:brightness-110 active:scale-95 transition-all cursor-pointer"
              >
                <Play className="w-4 h-4 fill-current" />
                <span>Play Archival Documentary Broadcast</span>
              </button>

              <button
                onClick={onOpenPledgeModal}
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-emerald-950/80 text-emerald-100 hover:text-white border border-emerald-500/40 text-xs font-semibold uppercase tracking-wider transition-colors cursor-pointer"
              >
                <Award className="w-4 h-4 text-amber-400" />
                <span>Sign National Pledge</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* VIRTUAL FLORAL & CANDLE OFFERING AT MAZAR-E-QUAID */}
      <section className="p-8 sm:p-10 rounded-3xl glass-panel-gold border border-amber-400/40 shadow-xl text-center space-y-6">
        <div className="max-w-2xl mx-auto space-y-2">
          <span className="text-xs uppercase tracking-widest text-amber-400 font-bold">
            Interactive Homage to Baba-e-Qaum
          </span>
          <h2 className="font-cinzel text-3xl font-bold text-white">
            Virtual Floral & Eternal Candle Offering
          </h2>
          <p className="text-xs sm:text-sm text-emerald-200/80">
            Pay respect at Mazar-e-Quaid from wherever you are in the world. Join over {tributeCount.toLocaleString()} citizens who have offered their tribute.
          </p>
        </div>

        {/* Live Counter Display */}
        <div className="inline-flex items-center gap-3 px-6 py-3 rounded-2xl bg-black/50 border border-emerald-500/40">
          <Heart className="w-5 h-5 text-emerald-400 fill-emerald-400 animate-pulse" />
          <div>
            <span className="font-cinzel text-2xl sm:text-3xl font-bold text-amber-300 tabular-nums">
              {tributeCount.toLocaleString()}
            </span>
            <span className="text-[11px] text-emerald-300/80 uppercase tracking-wider block">
              Tributes Offered Nationwide
            </span>
          </div>
        </div>

        {/* Offering Action Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
          <button
            onClick={() => handleOfferTribute('flower')}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-emerald-900/80 hover:bg-emerald-800 text-emerald-100 hover:text-white border border-emerald-600/40 text-xs font-bold uppercase tracking-wider shadow-lg hover:shadow-emerald-500/20 active:scale-95 transition-all cursor-pointer"
          >
            <Flower2 className="w-4 h-4 text-emerald-300" />
            <span>Lay Virtual Jasmine Wreath</span>
          </button>

          <button
            onClick={() => handleOfferTribute('candle')}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-amber-400 to-amber-500 text-emerald-950 font-bold text-xs uppercase tracking-wider shadow-lg hover:shadow-amber-400/30 active:scale-95 transition-all cursor-pointer"
          >
            <Flame className="w-4 h-4 text-emerald-950 fill-current" />
            <span>Light Memorial Flame</span>
          </button>
        </div>

        {hasOffered && (
          <p className="text-xs text-amber-300/90 font-medium animate-in fade-in">
            ✓ Your tribute has been placed at Mazar-e-Quaid memorial roll with solemn respect.
          </p>
        )}
      </section>

      {/* INTERACTIVE QUIZ: 15-QUESTION POOL (INCLUDING 5 SUMMARY COMPREHENSION PASSAGES) */}
      <section className="p-8 sm:p-10 rounded-3xl glass-panel border border-emerald-500/30 space-y-8">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-emerald-800/40">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-amber-400/20 text-amber-300 border border-amber-400/30">
              <HelpCircle className="w-6 h-6" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="font-cinzel text-xl sm:text-2xl font-bold text-white">
                  Quaid Knowledge Challenge (15 Questions Pool)
                </h3>
                {verifiedStatus.isPassed && (
                  <span className="px-2 py-0.5 rounded-full bg-emerald-600 text-white text-[10px] font-bold uppercase tracking-wider flex items-center gap-1">
                    <ShieldCheck className="w-3 h-3" /> Best Pakistani Card Earned
                  </span>
                )}
              </div>
              <span className="text-xs text-emerald-300/80">
                10 direct historical questions + 5 reading summary passages · Instant green highlight on correct answers
              </span>
            </div>
          </div>

          {/* Action Bar */}
          <div className="flex flex-wrap items-center gap-2">
            <button
              onClick={loadFreshQuizBatch}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-emerald-950 text-emerald-300 hover:text-white border border-emerald-800 text-xs transition-colors cursor-pointer"
              title="Draw new unrepeated questions"
            >
              <RefreshCw className="w-3.5 h-3.5" />
              <span>Draw Unseen Questions</span>
            </button>

            <span className="text-xs font-mono text-amber-300 bg-emerald-950/80 px-3 py-1.5 rounded-lg border border-emerald-700/50">
              Score: {quizScore} / {quizQuestions.length}
            </span>
          </div>
        </div>

        {/* Active Quiz Question */}
        {!quizFinished && currentQ ? (
          <div className="space-y-6 max-w-3xl mx-auto">
            <div className="flex items-center justify-between text-xs text-emerald-400 font-mono">
              <span>Question {currentQuizIdx + 1} of {quizQuestions.length}</span>
              <span>
                {Math.round(((currentQuizIdx + 1) / quizQuestions.length) * 100)}% Progress
              </span>
            </div>

            {/* IF SUMMARY QUESTION: DISPLAY READING SUMMARY PASSAGE IN DISTINCT CARD */}
            {currentQ.isSummaryQuestion && currentQ.summaryPassage && (
              <div className="p-5 rounded-2xl bg-[#011f13] border-2 border-amber-400/40 space-y-2.5 animate-in fade-in shadow-lg">
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

            {/* Question Heading */}
            <h4 className="font-cinzel text-lg sm:text-xl font-bold text-white leading-relaxed">
              {currentQ.question}
            </h4>

            {/* Options with GREEN correct highlight */}
            <div className="space-y-3">
              {currentQ.options.map((option, optIdx) => {
                const isSelected = selectedOption === optIdx;
                const isCorrect = optIdx === currentQ.correctIndex;
                const showResults = selectedOption !== null;

                let cardStyle =
                  'bg-[#02140d] border-emerald-900/60 hover:border-emerald-500/50 text-emerald-100 hover:bg-emerald-950/80';

                if (showResults) {
                  if (isCorrect) {
                    // INSTANT BRIGHT GREEN ON CORRECT ANSWER
                    cardStyle =
                      'bg-emerald-600/90 border-emerald-400 text-white font-bold shadow-[0_0_25px_rgba(16,185,129,0.5)] scale-101';
                  } else if (isSelected && !isCorrect) {
                    // RED ON USER WRONG PICK
                    cardStyle = 'bg-red-950/70 border-red-500/70 text-red-200';
                  } else {
                    cardStyle = 'bg-black/40 border-emerald-950/50 opacity-40 text-emerald-400/60';
                  }
                }

                return (
                  <button
                    key={optIdx}
                    disabled={showResults}
                    onClick={() => handleSelectQuizOption(optIdx)}
                    className={`w-full p-4 rounded-xl border text-left text-xs sm:text-sm font-medium transition-all duration-200 flex items-center justify-between gap-3 cursor-pointer ${cardStyle}`}
                  >
                    <div className="flex items-center gap-3">
                      <span className="w-6 h-6 rounded-full bg-black/40 border border-current/30 flex items-center justify-center text-[11px] font-mono shrink-0">
                        {String.fromCharCode(65 + optIdx)}
                      </span>
                      <span>{option}</span>
                    </div>

                    {showResults && isCorrect && (
                      <CheckCircle2 className="w-5 h-5 text-white shrink-0 animate-in zoom-in" />
                    )}
                    {showResults && isSelected && !isCorrect && (
                      <XCircle className="w-5 h-5 text-red-400 shrink-0" />
                    )}
                  </button>
                );
              })}
            </div>

            {/* Explanation & Next */}
            {selectedOption !== null && (
              <div className="p-4 rounded-xl bg-black/50 border border-emerald-700/40 space-y-3 animate-in fade-in">
                <p className="text-xs text-emerald-200/90 leading-relaxed font-sans-ui">
                  <span className="font-bold text-amber-300">Historical Fact: </span>
                  {currentQ.explanation}
                </p>
                <div className="flex justify-end">
                  <button
                    onClick={handleNextQuestion}
                    className="px-5 py-2 rounded-xl bg-gradient-to-r from-amber-300 to-amber-500 text-emerald-950 font-bold text-xs uppercase tracking-wider shadow hover:brightness-105 transition-all cursor-pointer"
                  >
                    {currentQuizIdx === quizQuestions.length - 1 ? 'Finish Challenge' : 'Next Question →'}
                  </button>
                </div>
              </div>
            )}
          </div>
        ) : (
          /* Quiz Results View */
          <div className="p-8 rounded-2xl bg-gradient-to-b from-[#052d1b] to-[#02180e] border border-amber-400/40 text-center space-y-5 max-w-xl mx-auto">
            <div className="w-16 h-16 rounded-full bg-amber-400/20 border border-amber-400/50 flex items-center justify-center text-amber-300 mx-auto">
              <Award className="w-8 h-8" />
            </div>

            <h4 className="font-cinzel text-2xl font-bold text-white">
              {(quizScore / (quizQuestions.length || 1)) >= 0.5 ? '50%+ Achieved: Best Pakistani Honor Earned!' : 'Challenge Completed'}
            </h4>

            <p className="text-sm text-emerald-100">
              You scored <span className="font-bold text-amber-300 text-xl">{quizScore}</span> out of {quizQuestions.length} ({Math.round((quizScore / (quizQuestions.length || 1)) * 100)}%)
            </p>

            <p className="text-xs text-emerald-300/80 italic font-editorial max-w-md mx-auto">
              {(quizScore / (quizQuestions.length || 1)) >= 0.5
                ? 'Outstanding! You have proven a deep understanding of Quaid-e-Azam Muhammad Ali Jinnah and Pakistani history.'
                : 'Good effort! Try another set of unrepeated questions or explore our timeline to sharpen your knowledge.'}
            </p>

            <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
              <button
                onClick={loadFreshQuizBatch}
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-emerald-900/70 hover:bg-emerald-800 text-emerald-100 text-xs font-semibold cursor-pointer"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span>Next Unseen Question Batch</span>
              </button>

              <button
                onClick={onOpenPledgeModal}
                className="px-5 py-2 rounded-lg bg-gradient-to-r from-amber-300 to-amber-500 text-emerald-950 font-bold text-xs uppercase tracking-wider cursor-pointer"
              >
                Sign National Pledge
              </button>
            </div>
          </div>
        )}
      </section>

      {/* LIVE NATIONAL TRIBUTE WALL (MESSAGES FROM CITIZENS) */}
      <TributeWallSection />
    </div>
  );
};
