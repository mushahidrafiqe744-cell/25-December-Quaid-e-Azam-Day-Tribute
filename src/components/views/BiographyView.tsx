import React, { useState } from 'react';
import { NavPage } from '../../types';
import { HERO_IMAGE, WORLD_LEADER_TRIBUTES } from '../../data/tributeData';
import { Sparkles, Award, Scale, BookOpen, Shield, Heart, ArrowRight, CheckCircle2, Star } from 'lucide-react';

interface BiographyViewProps {
  onNavigate: (page: NavPage) => void;
  onOpenDocModal: () => void;
}

export const BiographyView: React.FC<BiographyViewProps> = ({ onNavigate, onOpenDocModal }) => {
  const [selectedPillar, setSelectedPillar] = useState<number>(0);

  const traits = [
    {
      id: 1,
      icon: Scale,
      title: 'Unbending Integrity',
      urdu: 'بے داغ دیانت داری',
      desc: 'Never took a single rupee beyond his stated fee; turned down peerages, knighthoods, and vast bribes. Opponents admitted he was incorruptible.',
      quote: '“You cannot buy him. He has no price.” — British Viceroy Lord Reading',
    },
    {
      id: 2,
      icon: BookOpen,
      title: 'Constitutional Master',
      urdu: 'دستوری اور قانونی بصیرت',
      desc: 'Called to the Bar at Lincoln’s Inn at only 19 years old. A formidable barrister who defeated entire colonial legislative maneuvers purely through constitutional law.',
      quote: '“He was the most brilliant legal mind of his generation in the British Empire.”',
    },
    {
      id: 3,
      icon: Shield,
      title: 'Indomitable Will',
      urdu: 'غیر متزلزل عزم',
      desc: 'Concealed his fatal lung illness from friends and foes alike so that the creation of Pakistan would not be compromised by political delay.',
      quote: '“If Jinnah had died two years earlier, there would have been no Pakistan.”',
    },
    {
      id: 4,
      icon: Star,
      title: 'Sartorial & Oratorical Grace',
      urdu: 'وقار اور سحر انگیز خطابت',
      desc: 'Renowned for his monocle, Savile Row tailored suits, and the Karakuli cap. In court and parliament, his piercing logic held assemblies spellbound.',
      quote: '“His voice was cold, precise, and irresistible in its constitutional clarity.”',
    },
  ];

  const milestones = [
    {
      year: '1876',
      title: 'Karachi mein Paidaish',
      urdu: 'کراچی میں پیدائش (25 دسمبر 1876)',
      detail: 'Born on 25 December 1876 at Wazir Mansion, Karachi to Jinnahbhai Poonja.',
    },
    {
      year: '1892',
      title: 'England mein Law ki Taleem',
      urdu: 'انگلینڈ میں قانون کی تعلیم کے لیے روانگی',
      detail: 'Departed for London, joined Lincoln’s Inn, and became youngest Indian barrister.',
    },
    {
      year: '1900s',
      title: 'Siyasi Zindagi ka Aham Daur',
      urdu: 'سیاسی زندگی کا باقاعدہ آغاز',
      detail: 'Began political struggle for democratic rights, legislative representation, and constitutional safeguards.',
    },
    {
      year: '1940',
      title: 'Lahore Resolution ka Historical Phase',
      urdu: 'قراردادِ لاہور (23 مارچ 1940)',
      detail: 'Chaired the historic Lahore session defining the independent sovereign homeland for Muslims.',
    },
    {
      year: '1947',
      title: 'Pakistan ka Qiyam',
      urdu: 'قیامِ پاکستان (14 اگست 1947)',
      detail: 'Pakistan emerged on the map of the world as an independent sovereign Muslim state.',
    },
    {
      year: '1947',
      title: 'Pehle Governor-General',
      urdu: 'پاکستان کے پہلے گورنر جنرل کا حلف',
      detail: 'Sworn in as 1st Governor-General of Pakistan on 14 August 1947.',
    },
    {
      year: '1948',
      title: '11 September ko Karachi mein Wafat',
      urdu: '11 ستمبر کو کراچی میں وصال',
      detail: 'Died in office in Karachi on 11 September 1948, leaving an everlasting national legacy.',
    },
  ];

  return (
    <div className="pt-24 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-16">
      {/* HEADER HERO */}
      <section className="text-center max-w-4xl mx-auto space-y-4">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-950/80 border border-emerald-500/30 text-amber-300 text-xs font-semibold uppercase tracking-widest">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Biographical Monograph & National Hero</span>
        </div>
        <h1 className="font-cinzel text-4xl sm:text-6xl font-extrabold text-white tracking-wide">
          Quaid-e-Azam Muhammad Ali Jinnah
        </h1>
        <p className="font-editorial text-lg sm:text-xl text-emerald-200/90 italic">
          “Few individuals alter the course of history; fewer still modify the map of the world. Jinnah did all three.”
        </p>

        {/* 25 December Short Message Highlight */}
        <div className="max-w-2xl mx-auto p-4 rounded-2xl bg-gradient-to-r from-emerald-950 via-[#042617] to-emerald-950 border border-amber-400/40 shadow-lg">
          <p className="text-sm sm:text-base font-editorial text-amber-200 italic leading-relaxed">
            “25 December sirf ek tareekh nahi, balki ek aise leader ko yaad karne ka din hai jiski leadership ne Pakistan ki tareekh ko nayi simt di.”
          </p>
          <p className="font-urdu text-xs sm:text-sm text-emerald-300/90 mt-1" dir="rtl">
            ”25 دسمبر صرف ایک تاریخ نہیں، بلکہ ایک ایسے لیڈر کو یاد کرنے کا دن ہے جس کی قیادت نے پاکستان کی تاریخ کو نئی سمت دی۔“
          </p>
        </div>
      </section>

      {/* CORE SUMMARY: ABOUT QUAID & ROLE FOR PAKISTAN */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* 👤 About Quaid-e-Azam */}
        <div className="p-7 rounded-3xl glass-panel-gold border border-amber-400/40 shadow-xl space-y-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-amber-400/20 border border-amber-400/40 flex items-center justify-center text-amber-300 font-bold text-lg">
              👤
            </div>
            <div>
              <h2 className="font-cinzel text-xl sm:text-2xl font-bold text-white">
                About Quaid-e-Azam
              </h2>
              <span className="font-urdu text-xs text-amber-300">سوانحِ حیات و تعارف</span>
            </div>
          </div>

          <p className="text-sm sm:text-base text-emerald-100 leading-relaxed font-sans-ui">
            <strong className="text-amber-300">Quaid-e-Azam Muhammad Ali Jinnah</strong> Pakistan ke بانی aur Pakistan ke pehle Governor-General thay. Unki paidaish <strong className="text-white">25 December 1876</strong> ko Karachi mein hui. Unhon ne siyasi struggle aur leadership ke zariye Muslims ke liye ek alag watan ke qiyam ki movement mein central role ada kiya.
          </p>

          <p className="font-urdu text-xs sm:text-sm text-emerald-300/90 leading-relaxed text-right pt-2 border-t border-emerald-900/50" dir="rtl">
            قائد اعظم محمد علی جناح بانیِ پاکستان اور پاکستان کے پہلے گورنر جنرل تھے۔ ان کی پیدائش 25 دسمبر 1876 کو کراچی میں ہوئی۔ انہوں نے سیاسی جدوجہد اور بے مثال قیادت کے ذریعے مسلمانوں کے لیے ایک الگ وطن کے قیام کی تحریک میں مرکزی کردار ادا کیا۔
          </p>
        </div>

        {/* 🇵🇰 Pakistan ke liye unka kirdar */}
        <div className="p-7 rounded-3xl glass-panel border border-emerald-500/30 shadow-xl space-y-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-emerald-500/20 border border-emerald-400/40 flex items-center justify-center text-emerald-300 font-bold text-lg">
              🇵🇰
            </div>
            <div>
              <h2 className="font-cinzel text-xl sm:text-2xl font-bold text-white">
                Pakistan ke liye unka kirdar
              </h2>
              <span className="font-urdu text-xs text-emerald-300">قیامِ پاکستان میں بنیادی کردار</span>
            </div>
          </div>

          <ul className="space-y-3 text-xs sm:text-sm text-emerald-100/90">
            <li className="flex items-start gap-3 p-2.5 rounded-xl bg-emerald-950/40 border border-emerald-800/30">
              <span className="w-2 h-2 rounded-full bg-amber-400 mt-1.5 shrink-0" />
              <div>
                <strong className="text-amber-300">Pakistan Movement ki leadership ki:</strong>
                <span className="text-emerald-200/80 block">مسلم لیگ کو منظم کر کے کروڑوں مسلمانوں کو ایک نظریے پر متحد کیا۔</span>
              </div>
            </li>
            <li className="flex items-start gap-3 p-2.5 rounded-xl bg-emerald-950/40 border border-emerald-800/30">
              <span className="w-2 h-2 rounded-full bg-amber-400 mt-1.5 shrink-0" />
              <div>
                <strong className="text-amber-300">Muslims ke siyasi huqooq ke liye awaz uthai:</strong>
                <span className="text-emerald-200/80 block">آئینی اور جمہوری راستوں سے مسلمانوں کے بنیادی حقوق کا دفاع کیا۔</span>
              </div>
            </li>
            <li className="flex items-start gap-3 p-2.5 rounded-xl bg-emerald-950/40 border border-emerald-800/30">
              <span className="w-2 h-2 rounded-full bg-amber-400 mt-1.5 shrink-0" />
              <div>
                <strong className="text-amber-300">14 August 1947:</strong>
                <span className="text-emerald-200/80 block">Pakistan ke qiyam ke baad pehle Governor-General bane.</span>
              </div>
            </li>
            <li className="flex items-start gap-3 p-2.5 rounded-xl bg-emerald-950/40 border border-emerald-800/30">
              <span className="w-2 h-2 rounded-full bg-amber-400 mt-1.5 shrink-0" />
              <div>
                <strong className="text-amber-300">Qanoon, discipline aur national unity:</strong>
                <span className="text-emerald-200/80 block">آئین کی بالادستی، دیانت داری اور قومی یگانگت پر زور دیا۔</span>
              </div>
            </li>
          </ul>
        </div>
      </section>

      {/* ⭐ UNKI MASHHOOR QUALITIES */}
      <section className="space-y-6">
        <div className="text-center max-w-3xl mx-auto space-y-2">
          <span className="text-xs uppercase tracking-widest text-amber-400 font-bold flex items-center justify-center gap-1.5">
            <Star className="w-4 h-4 text-amber-400 fill-amber-400" />
            <span>⭐ Unki Mashhoor Qualities</span>
          </span>
          <h2 className="font-cinzel text-3xl font-bold text-white">
            Unity — Faith — Discipline
          </h2>
          <p className="text-xs sm:text-sm text-emerald-200/80">
            قائد اعظم کے وہ تین سنہری اصول جنہوں نے تحریکِ آزادی کو کامیابی سے ہمکنار کیا
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 rounded-2xl glass-panel border border-emerald-500/25 text-center space-y-3">
            <div className="w-12 h-12 rounded-full bg-emerald-950 border border-emerald-400/40 flex items-center justify-center text-amber-300 mx-auto text-lg font-bold">
              🤝
            </div>
            <h3 className="font-cinzel text-xl font-bold text-white">
              Unity (اتحاد)
            </h3>
            <p className="text-sm font-semibold text-amber-300">
              Qaum ko ittehad ka paigham
            </p>
            <p className="text-xs text-emerald-200/80">
              تمام صوبائی، لسانی اور مسلکی اختلافات سے بالاتر ہو کر ایک مضبوط اور متحد قوم بننے کا پیغام۔
            </p>
          </div>

          <div className="p-6 rounded-2xl glass-panel-gold border border-amber-400/40 text-center space-y-3 shadow-lg">
            <div className="w-12 h-12 rounded-full bg-amber-950 border border-amber-400/50 flex items-center justify-center text-amber-300 mx-auto text-lg font-bold">
              🛡️
            </div>
            <h3 className="font-cinzel text-xl font-bold text-white">
              Faith (ایمان)
            </h3>
            <p className="text-sm font-semibold text-amber-300">
              Apne maqsad par yaqeen
            </p>
            <p className="text-xs text-emerald-200/80">
              اپنے مقصد اور نظریے پر غیر متزلزل یقین، محنت اور اللہ تعالی کی ذات پر بھروسہ۔
            </p>
          </div>

          <div className="p-6 rounded-2xl glass-panel border border-emerald-500/25 text-center space-y-3">
            <div className="w-12 h-12 rounded-full bg-emerald-950 border border-emerald-400/40 flex items-center justify-center text-amber-300 mx-auto text-lg font-bold">
              ⚖️
            </div>
            <h3 className="font-cinzel text-xl font-bold text-white">
              Discipline (نظم و ضبط)
            </h3>
            <p className="text-sm font-semibold text-amber-300">
              Qanoon aur discipline ki ahmiyat
            </p>
            <p className="text-xs text-emerald-200/80">
              قانون کی پاسداری، وقت کی قدر، سخت محنت اور اداروں کے نظم و ضبط پر عمل پیرا ہونا۔
            </p>
          </div>
        </div>
      </section>

      {/* BIOGRAPHY HERO GRID */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
        {/* Left Image & Stats */}
        <div className="lg:col-span-5 flex flex-col items-center">
          <div className="relative w-full max-w-md rounded-2xl overflow-hidden bg-[#042819] border-2 border-amber-400/40 shadow-2xl group">
            <img
              src={HERO_IMAGE}
              alt="Quaid-e-Azam Muhammad Ali Jinnah"
              className="w-full aspect-[4/5] object-cover filter contrast-105 group-hover:scale-105 transition-transform duration-700"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
            <div className="absolute bottom-4 inset-x-4 p-4 rounded-xl bg-black/70 backdrop-blur-md border border-emerald-500/30 text-center">
              <span className="font-cinzel text-lg font-bold text-white block">
                Quaid-e-Azam
              </span>
              <span className="font-urdu text-sm text-amber-300 block">
                قائد اعظم محمد علی جناح
              </span>
              <div className="flex items-center justify-center gap-3 text-xs text-emerald-300/90 mt-2 pt-2 border-t border-emerald-800/40">
                <span>Born: 25 Dec 1876</span>
                <span>·</span>
                <span>Died: 11 Sep 1948</span>
              </div>
            </div>
          </div>

          {/* Quick Metrics */}
          <div className="grid grid-cols-3 gap-3 w-full max-w-md mt-4 text-center">
            <div className="p-3 rounded-xl glass-panel border border-emerald-500/20">
              <span className="font-cinzel text-lg font-bold text-amber-400 block">71</span>
              <span className="text-[10px] text-emerald-300/80 uppercase">Years of Life</span>
            </div>
            <div className="p-3 rounded-xl glass-panel border border-emerald-500/20">
              <span className="font-cinzel text-lg font-bold text-amber-400 block">19</span>
              <span className="text-[10px] text-emerald-300/80 uppercase">Age at the Bar</span>
            </div>
            <div className="p-3 rounded-xl glass-panel border border-emerald-500/20">
              <span className="font-cinzel text-lg font-bold text-amber-400 block">1947</span>
              <span className="text-[10px] text-emerald-300/80 uppercase">State Created</span>
            </div>
          </div>
        </div>

        {/* Right Long-Form Narrative */}
        <div className="lg:col-span-7 space-y-6">
          <div className="p-8 rounded-3xl glass-panel border border-emerald-500/25 space-y-5">
            <h2 className="font-cinzel text-2xl sm:text-3xl font-bold text-white">
              The Architect of Modern Destiny
            </h2>

            <p className="text-sm sm:text-base text-emerald-100/90 leading-relaxed font-sans-ui first-letter:text-5xl first-letter:font-cinzel first-letter:font-bold first-letter:float-left first-letter:mr-3 first-letter:text-amber-400">
              Muhammad Ali Jinnah was an extraordinary lawyer, politician, and statesman who transformed the political landscape of South Asia. Born in Karachi on 25 December 1876, his journey took him from the corridors of Lincoln’s Inn in Victorian London to the highest courts of Bombay, before he emerged as the undisputed leader of millions of Muslims in British India.
            </p>

            <p className="text-sm sm:text-base text-emerald-100/90 leading-relaxed font-sans-ui">
              Known for his incorruptible integrity, photographic memory for legal precedents, and unmatched parliamentary oratory, Jinnah initially fought passionately for Hindu-Muslim unity. However, when the majoritarian Congress repeatedly refused constitutional safeguards for minorities, Jinnah realized that the destiny of Muslims required their own sovereign homeland where they could freely practice their faith, culture, and democratic principles.
            </p>

            <p className="text-sm sm:text-base text-emerald-100/90 leading-relaxed font-sans-ui">
              Through purely legal, constitutional, and democratic means — without leading an armed insurrection or firing a single shot — he rallied millions under the green crescent flag, leading to the partition of British India and the birth of Pakistan on 14 August 1947.
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-4 border-t border-emerald-800/40">
              <button
                onClick={() => onNavigate('timeline')}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-amber-300 to-amber-500 text-emerald-950 font-bold text-xs uppercase tracking-wider shadow hover:brightness-105 transition-all cursor-pointer"
              >
                <span>Explore Full Timeline</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={onOpenDocModal}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-emerald-900/60 text-emerald-200 hover:text-white border border-emerald-700/50 text-xs font-semibold uppercase tracking-wider transition-colors cursor-pointer"
              >
                <span>Listen Historical Audio</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* CORE CHARACTER TRAITS */}
      <section className="space-y-8">
        <div className="text-center max-w-3xl mx-auto space-y-2">
          <span className="text-xs uppercase tracking-widest text-amber-400 font-bold">
            Personal Anatomy of Leadership
          </span>
          <h2 className="font-cinzel text-3xl font-bold text-white">
            What Made Quaid-e-Azam Incomparable
          </h2>
          <p className="text-xs sm:text-sm text-emerald-200/80">
            Historians across the globe point to four hallmark characteristics that set Muhammad Ali Jinnah apart from all contemporary leaders.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {traits.map((t, idx) => {
            const Icon = t.icon;
            const isSelected = selectedPillar === idx;
            return (
              <div
                key={t.id}
                onClick={() => setSelectedPillar(idx)}
                className={`p-6 sm:p-7 rounded-2xl border transition-all duration-300 cursor-pointer ${
                  isSelected
                    ? 'glass-panel-gold border-amber-400/60 shadow-[0_0_25px_rgba(212,175,55,0.2)]'
                    : 'glass-panel border-emerald-500/20 hover:border-emerald-500/40'
                }`}
              >
                <div className="flex items-start justify-between gap-4 mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-xl bg-emerald-950/80 border border-emerald-500/30 flex items-center justify-center text-amber-400">
                      <Icon className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="font-cinzel text-xl font-bold text-white">
                        {t.title}
                      </h3>
                      <span className="font-urdu text-sm text-emerald-400">
                        {t.urdu}
                      </span>
                    </div>
                  </div>
                  {isSelected && (
                    <span className="p-1 rounded-full bg-amber-400 text-emerald-950">
                      <CheckCircle2 className="w-4 h-4" />
                    </span>
                  )}
                </div>

                <p className="text-xs sm:text-sm text-emerald-100/85 leading-relaxed mb-4">
                  {t.desc}
                </p>

                <div className="pt-3 border-t border-emerald-900/40 text-xs text-amber-300/90 italic font-editorial">
                  {t.quote}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* QUICK MILESTONES TRAIN */}
      <section className="p-8 sm:p-10 rounded-3xl bg-[#02180e] border border-emerald-500/30 space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <span className="text-xs uppercase tracking-widest text-amber-400 font-bold block">
              Fast Chronicle
            </span>
            <h3 className="font-cinzel text-2xl font-bold text-white">
              Milestones at a Glance
            </h3>
          </div>
          <button
            onClick={() => onNavigate('timeline')}
            className="text-xs text-amber-300 hover:underline flex items-center gap-1 font-bold"
          >
            <span>Detailed Interactive Timeline</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {milestones.map((m) => (
            <div
              key={m.year}
              className="p-4 rounded-xl bg-black/40 border border-emerald-900/60 hover:border-emerald-500/40 transition-colors"
            >
              <span className="font-cinzel text-amber-400 font-bold text-lg block">
                {m.year}
              </span>
              <span className="text-sm font-bold text-white block mb-1">
                {m.title}
              </span>
              <p className="text-xs text-emerald-200/70">
                {m.detail}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* INTERNATIONAL HISTORIAN CITATIONS */}
      <section className="space-y-6">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="text-xs uppercase tracking-widest text-amber-400 font-bold">
            Historical Veracity & Global Consensus
          </span>
          <h2 className="font-cinzel text-2xl sm:text-3xl font-bold text-white">
            World Testimonials on Quaid-e-Azam
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {WORLD_LEADER_TRIBUTES.map((trib) => (
            <div
              key={trib.id}
              className="p-6 rounded-2xl glass-panel border border-emerald-900/50 flex flex-col justify-between"
            >
              <p className="text-xs sm:text-sm text-emerald-100/90 italic font-editorial leading-relaxed mb-4">
                {trib.tributeText}
              </p>
              <div className="pt-3 border-t border-emerald-800/40">
                <span className="font-cinzel text-xs font-bold text-amber-300 block">
                  {trib.speaker}
                </span>
                <span className="text-[11px] text-emerald-400/80 block">
                  {trib.role} ({trib.nationality})
                </span>
                <span className="text-[10px] text-emerald-500/60 italic block mt-0.5">
                  Ref: {trib.source}
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};
