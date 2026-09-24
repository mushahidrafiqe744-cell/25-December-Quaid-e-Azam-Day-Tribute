import React, { useState, useEffect } from 'react';
import { CitizenTributeMessage } from '../../types';
import { INITIAL_CITIZEN_TRIBUTES } from '../../data/tributeData';
import { Sparkles, MessageSquare, Heart, Send, MapPin, Award, Filter, ShieldCheck } from 'lucide-react';
import confetti from 'canvas-confetti';

const STORAGE_KEY = 'quaid_tribute_wall_messages_v2';

export const TributeWallSection: React.FC = () => {
  const [messages, setMessages] = useState<CitizenTributeMessage[]>([]);
  const [name, setName] = useState('');
  const [city, setCity] = useState('Karachi');
  const [messageText, setMessageText] = useState('');
  const [selectedCityFilter, setSelectedCityFilter] = useState('All');
  const [likedMap, setLikedMap] = useState<{ [id: string]: boolean }>({});

  const cities = [
    'All',
    'Karachi',
    'Lahore',
    'Islamabad',
    'Peshawar',
    'Quetta',
    'Rawalpindi',
    'Faisalabad',
    'Overseas Diaspora',
  ];

  useEffect(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored) {
        setMessages(JSON.parse(stored));
      } else {
        setMessages(INITIAL_CITIZEN_TRIBUTES);
        localStorage.setItem(STORAGE_KEY, JSON.stringify(INITIAL_CITIZEN_TRIBUTES));
      }
    } catch {
      setMessages(INITIAL_CITIZEN_TRIBUTES);
    }
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !messageText.trim()) return;

    const newMsg: CitizenTributeMessage = {
      id: 'msg-' + Date.now(),
      name: name.trim(),
      city: city || 'Karachi',
      message: messageText.trim(),
      timestamp: 'Just now',
      likes: 1,
      badge: 'Verified Citizen 🇵🇰',
    };

    const updated = [newMsg, ...messages];
    setMessages(updated);
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
    } catch {}

    setName('');
    setMessageText('');

    confetti({
      particleCount: 60,
      spread: 60,
      origin: { y: 0.7 },
      colors: ['#01411C', '#d4af37', '#ffffff', '#10b981'],
    });
  };

  const handleLike = (id: string) => {
    if (likedMap[id]) return;
    setLikedMap((prev) => ({ ...prev, [id]: true }));

    const updated = messages.map((m) =>
      m.id === id ? { ...m, likes: m.likes + 1 } : m
    );
    setMessages(updated);
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
    } catch {}
  };

  const filteredMessages = messages.filter((m) => {
    if (selectedCityFilter === 'All') return true;
    if (selectedCityFilter === 'Overseas Diaspora') {
      return !['Karachi', 'Lahore', 'Islamabad', 'Peshawar', 'Quetta', 'Rawalpindi', 'Faisalabad'].includes(m.city);
    }
    return m.city.toLowerCase() === selectedCityFilter.toLowerCase();
  });

  return (
    <section className="space-y-10">
      {/* SECTION HEADER */}
      <div className="text-center max-w-3xl mx-auto space-y-3">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-950/80 border border-emerald-500/30 text-amber-300 text-xs font-semibold uppercase tracking-widest">
          <MessageSquare className="w-3.5 h-3.5" />
          <span>Live National Tribute Wall</span>
        </div>
        <h2 className="font-cinzel text-3xl sm:text-4xl font-bold text-white">
          Voices of a Grateful Nation (پیغاماتِ عقیدت)
        </h2>
        <p className="text-xs sm:text-sm text-emerald-200/80">
          Leave your heartfelt message, prayer, or civic pledge for Quaid-e-Azam Muhammad Ali Jinnah.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* LEFT: SUBMIT TRIBUTE FORM */}
        <div className="lg:col-span-5">
          <form
            onSubmit={handleSubmit}
            className="p-6 sm:p-7 rounded-3xl glass-panel-gold border border-amber-400/40 shadow-xl space-y-4"
          >
            <div className="flex items-center gap-2">
              <Award className="w-5 h-5 text-amber-400" />
              <h3 className="font-cinzel text-lg font-bold text-white">
                Pen Your Message to Quaid
              </h3>
            </div>

            <div>
              <label className="block text-xs uppercase tracking-wider text-emerald-300 font-semibold mb-1">
                Your Name *
              </label>
              <input
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="e.g. Daniyal Khan"
                className="w-full px-3.5 py-2.5 rounded-xl bg-black/50 border border-emerald-700/50 text-white placeholder-emerald-600 text-xs focus:outline-none focus:border-amber-400"
              />
            </div>

            <div>
              <label className="block text-xs uppercase tracking-wider text-emerald-300 font-semibold mb-1">
                Your City / Country
              </label>
              <select
                value={city}
                onChange={(e) => setCity(e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-xl bg-black/50 border border-emerald-700/50 text-white text-xs focus:outline-none focus:border-amber-400"
              >
                <option value="Karachi">Karachi</option>
                <option value="Lahore">Lahore</option>
                <option value="Islamabad">Islamabad</option>
                <option value="Peshawar">Peshawar</option>
                <option value="Quetta">Quetta</option>
                <option value="Rawalpindi">Rawalpindi</option>
                <option value="Faisalabad">Faisalabad</option>
                <option value="Multan">Multan</option>
                <option value="Sialkot">Sialkot</option>
                <option value="London, UK">London, UK</option>
                <option value="New York, USA">New York, USA</option>
                <option value="Dubai, UAE">Dubai, UAE</option>
                <option value="Toronto, Canada">Toronto, Canada</option>
              </select>
            </div>

            <div>
              <label className="block text-xs uppercase tracking-wider text-emerald-300 font-semibold mb-1">
                Your Tribute Message (پیغام / دعا) *
              </label>
              <textarea
                required
                rows={3}
                value={messageText}
                onChange={(e) => setMessageText(e.target.value)}
                placeholder="Write your tribute, prayer, or renewal of pledge for Quaid-e-Azam..."
                className="w-full px-3.5 py-2.5 rounded-xl bg-black/50 border border-emerald-700/50 text-white placeholder-emerald-600 text-xs focus:outline-none focus:border-amber-400"
              />
            </div>

            <button
              type="submit"
              className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-gradient-to-r from-amber-300 to-amber-500 text-emerald-950 font-bold text-xs uppercase tracking-wider shadow hover:brightness-105 active:scale-95 transition-all cursor-pointer"
            >
              <Send className="w-4 h-4" />
              <span>Post Tribute to National Wall</span>
            </button>
          </form>
        </div>

        {/* RIGHT: TRIBUTE STREAM WITH CITY FILTER */}
        <div className="lg:col-span-7 space-y-4">
          {/* City Filter Pills */}
          <div className="flex flex-wrap items-center gap-1.5 p-2 bg-[#02120b] rounded-2xl border border-emerald-900/60">
            <Filter className="w-3.5 h-3.5 text-amber-400 ml-2 mr-1" />
            {cities.slice(0, 6).map((c) => (
              <button
                key={c}
                onClick={() => setSelectedCityFilter(c)}
                className={`px-3 py-1 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                  selectedCityFilter === c
                    ? 'bg-amber-400 text-emerald-950 font-bold shadow'
                    : 'text-emerald-300/70 hover:text-white hover:bg-emerald-900/40'
                }`}
              >
                {c}
              </button>
            ))}
          </div>

          {/* Messages Stream */}
          <div className="space-y-3.5 max-h-[500px] overflow-y-auto pr-1">
            {filteredMessages.map((msg) => {
              const isLiked = likedMap[msg.id];
              return (
                <div
                  key={msg.id}
                  className="p-5 rounded-2xl glass-panel border border-emerald-500/20 hover:border-amber-400/40 transition-all space-y-2.5"
                >
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <div className="flex items-center gap-2">
                        <h4 className="font-cinzel text-sm font-bold text-white">
                          {msg.name}
                        </h4>
                        <span className="flex items-center gap-1 text-[11px] text-amber-300/90 font-medium">
                          <MapPin className="w-3 h-3 text-amber-400" />
                          {msg.city}
                        </span>
                      </div>
                      <span className="text-[10px] text-emerald-400/60">{msg.timestamp}</span>
                    </div>

                    <button
                      onClick={() => handleLike(msg.id)}
                      className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold transition-colors cursor-pointer ${
                        isLiked
                          ? 'bg-red-500/20 text-red-400 border border-red-500/40'
                          : 'bg-emerald-950/80 text-emerald-300 hover:text-red-400 border border-emerald-800'
                      }`}
                      title="Show Respect & Love"
                    >
                      <Heart className={`w-3.5 h-3.5 ${isLiked ? 'fill-current text-red-400' : ''}`} />
                      <span>{msg.likes}</span>
                    </button>
                  </div>

                  <p className="text-xs sm:text-sm text-emerald-100/90 leading-relaxed font-sans-ui">
                    “{msg.message}”
                  </p>

                  {msg.badge && (
                    <div className="pt-1 flex items-center gap-1 text-[10px] text-emerald-400/70">
                      <ShieldCheck className="w-3 h-3 text-emerald-400" />
                      <span>{msg.badge}</span>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
