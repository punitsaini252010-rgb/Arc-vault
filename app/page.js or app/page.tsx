"use client";

import { useState, useEffect, useRef } from 'react';

// --- THE TRW-STYLE ARCHITECTURE DATABASE ---
const arcVaultData = {
  sectors: [
    {
      id: "battlezone",
      name: "Sector 01: Battlezone",
      description: "Mindset Warfare & Deconstructing the Matrix",
      modules: [
        {
          id: "bz-mod-1",
          name: "Module 1: Paradigm Shatter",
          lessons: [
            {
              id: "bz-les-1",
              title: "THE ILLUSION OF SAFETY",
              audioSrc: "/audio/illusion-of-safety.mp3",
              content: "They built a system designed to extract your most finite resource, your time! You trade the absolute best years of your life, for a depreciating currency. You are renting your existence, paying taxes on money you barely even touch. Escaping this is not a fairytale, it is a brutal bloodsport! Nobody is coming to save you. If you make $50,000 a year, inflation and taxes devour half of it before you even see it. You will work 40 hours a week for 40 years, just to retire too tired to enjoy it. But breaking out requires working 80 hours a week for yourself! There are no shortcuts, it will hurt. The traditional path is a rigged game! A salary is just a leash to keep you obedient, like a good little dog. You traded your twenties to be a glorified peasant! Breaking out is going to be hard, but staying a broke motherfucker is harder."
            },
            {
              id: "bz-les-2",
              title: "THE 40-YEAR TRAP",
              audioSrc: "/audio/40-year-trap.mp3",
              content: "Here is the brutal truth. Most people will spend 90,000 hours inside a cubicle. They will ask permission to go on vacation. They will beg for a 3% raise. Your boss does not pay you enough to get rich, they pay you just enough to not quit! If you do not find a way to decouple your time from your income, you will die poor. A 3% raise on a $60,000 salary is $1,800 a year. Inflation destroys 7% of your purchasing power in the exact same year! You are actively getting poorer every single day you stay. Trading hours for dollars is mathematical suicide! Your boss is basically keeping you on financial life support. If you don't detach your income from the clock, you are completely fucked."
            }
          ]
        }
      ]
    },
    {
      id: "oasis-command",
      name: "Sector 02: Oasis Command",
      description: "Technical Infrastructure & Asset Deployment",
      modules: [
        {
          id: "oc-mod-1",
          name: "Module 1: The Core Infrastructure",
          lessons: [
            {
              id: "oc-les-1",
              title: "THE DIGITAL PRODUCT SHIELD",
              audioSrc: "/audio/digital-shield.mp3",
              content: "You need a baseline. Start by selling a digital asset for $47 to $49. Use platforms like Etsy, Gumroad, LemonSqueezy, or Whop. This is not to make you a millionaire, it is to build a list of proven buyers. This baseline revenue covers your software costs and buys you time to hunt. You sell a $49 guide on automating workflows, 100 people buy it, you make $4,900. Your rent and expenses are instantly covered. More importantly, you now have a localized database of 100 highly qualified leads. Weed out the broke freebie-seekers immediately! You need a shield to pay your daily bills. If a guy won't even pull out his credit card for 49 bucks to fix his business, he was never going to buy the five-thousand-dollar software anyway. Keep the buyers! The $4,900 pays your rent so you can hunt the big whales without stressing over groceries."
            }
          ]
        }
      ]
    },
    {
      id: "instant-empire",
      name: "Sector 03: Instant Empire",
      description: "High-Ticket Interception & Scaling Velocity",
      modules: [
        {
          id: "ie-mod-1",
          name: "Module 1: The High-Ticket Intercept",
          lessons: [
            {
              id: "ie-les-1",
              title: "THE CONNECTOR ECONOMY",
              audioSrc: "/audio/connector-economy.mp3",
              content: "You do not need to be a genius coder, or invent the next massive startup. You do not build the road, you assemble the toll booth, brick by brick. You stand directly between a desperate buyer and a perfect software solution. You extract wealth purely by controlling the flow of traffic! Uber does not own a single car, Airbnb does not own a single hotel, they are middlemen. You will be the middleman for enterprise software companies. They spend millions building the technology, you spend zero. You route the buyer and split the profit. Stop trying to be Steve Jobs! Just be the middleman, you don't need to invent anything. Look at Ticketmaster, they don’t sing, they don't play guitars, they just own the link between the fan and the concert, and they rake in billions! You are going to do the exact same thing for high-ticket software. Find the guy bleeding out, hand him the bandage, and take a massive cut."
            },
            {
              id: "ie-les-2",
              title: "THE HIGH-TICKET SPEAR",
              audioSrc: "/audio/high-ticket-spear.mp3",
              content: "Once they trust you from the entry point, you introduce the backend. You route those trusted buyers to a $5,000 software solution. Most of them will not buy it, that is the brutal reality of the math. But the few who do will generate massive, high-margin payouts. Out of the 100 people who bought your $49 guide, 97 of them will ignore your next offer. But 3 of them upgrade to the $5,000 automated CRM you recommend. At a 50% commission, those 3 people just made you an extra $7,500! Use the cheap product to build trust, then hit them with the expensive infrastructure. This is the spear. 97% of people will ignore your high-ticket recommendation, so do not get emotional about it! Because the 3 guys who do upgrade just bought a massive CRM system, and you get fifty percent. That’s seventy-five hundred dollars in your pocket for placing a link inside a document they already bought."
            }
          ]
        }
      ]
    }
  ]
};

export default function ArcVault() {
  const [selectedSector, setSelectedSector] = useState(arcVaultData.sectors[0]);
  const [selectedModule, setSelectedModule] = useState(arcVaultData.sectors[0].modules[0]);
  const [selectedLesson, setSelectedLesson] = useState(arcVaultData.sectors[0].modules[0].lessons[0]);
  
  const [isPlaying, setIsPlaying] = useState(false);
  const [isUnlocked, setIsUnlocked] = useState(false);
  const audioRef = useRef(null);

  // Synchronize state resets when navigating between content
  useEffect(() => {
    setIsUnlocked(false);
    setIsPlaying(false);
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.load();
    }
  }, [selectedLesson]);

  const toggleAudio = () => {
    if (!audioRef.current) return;
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play().catch(err => console.log("Audio play interrupted"));
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <>
      {/* THE OPERATIONAL MATRIX STYLING */}
      <style dangerouslySetInnerHTML={{__html: `
        :root {
          --bg-base: #050505;
          --bg-surface: #0a0a0a;
          --text-primary: #FDF4E3;
        }
        @keyframes subliminalShift {
          0%   { --accent: #00FFFF; --glow: rgba(0, 255, 255, 0.15); } 
          33%  { --accent: #D4AF37; --glow: rgba(212, 175, 55, 0.15); } 
          66%  { --accent: #FF003C; --glow: rgba(255, 0, 60, 0.15); } 
          100% { --accent: #00FFFF; --glow: rgba(0, 255, 255, 0.15); } 
        }
        @keyframes textGlitch {
          0% { text-shadow: 1px 0 var(--accent), -1px 0 #ff003c; }
          50% { text-shadow: -1px 0 var(--accent), 1px 0 #ff003c; }
          100% { text-shadow: 1px 0 var(--accent), -1px 0 #ff003c; }
        }
        .vault-matrix {
          animation: subliminalShift 120s infinite linear;
          background-color: var(--bg-base);
          color: var(--text-primary);
          font-family: 'Courier New', Courier, monospace;
        }
        .dynamic-accent {
          color: var(--accent);
          transition: color 2s ease;
        }
        .dynamic-border {
          border-color: var(--accent);
          transition: border-color 2s ease;
        }
        .glitch-header:hover {
          animation: textGlitch 0.3s infinite;
        }
        .gate-btn {
          border: 1px solid var(--accent);
          color: var(--accent);
          box-shadow: 0 0 15px var(--glow), inset 0 0 5px var(--glow);
          transition: all 0.3s ease-in-out;
        }
        .gate-btn:hover {
          background-color: var(--accent);
          color: var(--bg-base);
          box-shadow: 0 0 30px var(--glow);
        }
        .nav-active {
          background-color: rgba(255, 255, 255, 0.03);
          border-left: 3px solid var(--accent);
          color: var(--accent);
        }
      `}} />

      {/* HIDDEN AUDIO ENGINE ELEMENT */}
      <audio 
        ref={audioRef} 
        src={selectedLesson?.audioSrc} 
        onEnded={() => setIsPlaying(false)}
      />

      <div className="vault-matrix flex h-screen w-screen overflow-hidden select-none">
        
        {/* CAMPUS SELECTOR (TRW STYLE LEFT STRIP) */}
        <div className="w-20 md:w-24 border-r border-gray-900 bg-[#030303] flex flex-col items-center py-6 space-y-6 z-30">
          <div className="text-xl font-black tracking-tighter dynamic-accent mb-4 cursor-default">ARC</div>
          {arcVaultData.sectors.map((sec) => (
            <button
              key={sec.id}
              onClick={() => {
                setSelectedSector(sec);
                setSelectedModule(sec.modules[0]);
                setSelectedLesson(sec.modules[0].lessons[0]);
              }}
              className={`w-12 h-12 md:w-14 md:h-14 rounded border flex items-center justify-center text-xs font-black transition-all ${selectedSector.id === sec.id ? 'dynamic-border dynamic-accent bg-gray-950 scale-105' : 'border-gray-800 text-gray-500 hover:text-gray-300 hover:border-gray-700'}`}
              title={sec.name}
            >
              {sec.id.slice(0, 2).toUpperCase()}
            </button>
          ))}
        </div>

        {/* MODULES & LESSONS SIDEBAR (TRW STYLE SECONDARY PANEL) */}
        <div className="w-64 md:w-72 border-r border-gray-900 bg-[var(--bg-surface)] flex flex-col p-4 z-20 overflow-y-auto">
          <div className="mb-6 pb-4 border-b border-gray-900">
            <div className="text-xs text-gray-500 uppercase tracking-widest mb-1">Current Sector</div>
            <div className="text-sm font-black uppercase tracking-tight text-white">{selectedSector.name}</div>
          </div>

          <div className="space-y-6">
            {selectedSector.modules.map((mod) => (
              <div key={mod.id} className="space-y-2">
                <div className="text-[10px] text-gray-600 uppercase tracking-wider font-bold pl-2">
                  {mod.name}
                </div>
                <ul className="space-y-1">
                  {mod.lessons.map((les) => (
                    <li key={les.id}>
                      <button
                        onClick={() => {
                          setSelectedModule(mod);
                          setSelectedLesson(les);
                        }}
                        className={`w-full text-left px-3 py-2 text-xs font-bold uppercase rounded tracking-wide transition-all ${selectedLesson.id === les.id ? 'nav-active' : 'text-gray-400 hover:text-white hover:bg-gray-900/30'}`}
                      >
                        {les.title}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* MAIN TERMINAL DISPLAY SHEET */}
        <div className="flex-1 flex flex-col h-full bg-[var(--bg-base)] relative z-10">
          
          {/* HEADER LAYER */}
          <div className="h-16 border-b border-gray-900 bg-[var(--bg-surface)] flex items-center justify-between px-6 md:px-10">
            <span className="text-xs text-gray-500 uppercase tracking-widest hidden sm:inline">
              SYSTEM_STATUS: <span className="text-emerald-500">ONLINE</span>
            </span>
            <button 
              onClick={toggleAudio}
              className="text-xs border border-gray-800 text-gray-400 px-4 py-2 uppercase tracking-[0.2em] hover:border-[var(--accent)] hover:text-[var(--accent)] transition-all duration-300"
            >
              {isPlaying ? '[ PAUSE DICTATION ]' : '[ INITIALIZE AUDIO ]'}
            </button>
          </div>

          {/* PERSISTENT SUBLIMINAL AUDIO NOTICE STRIP */}
          <div className="bg-orange-500/5 border-b border-orange-500/10 px-6 md:px-10 py-2 text-[10px] text-orange-400/80 tracking-widest uppercase">
            Notice: Audio track utilizes automated dictation processing for operational efficiency.
          </div>

          {/* CONTENT MODULE FRAME */}
          <div className="flex-1 overflow-y-auto p-8 md:p-16 relative">
            <div className="max-w-3xl mx-auto" key={selectedLesson.id}>
              
              <h1 className="text-3xl md:text-5xl font-black mb-8 uppercase tracking-tighter dynamic-accent glitch-header cursor-default">
                {selectedLesson.title}
              </h1>

              {/* ACTION GATE REVEAL CONTROLLER */}
              {!isUnlocked ? (
                <div className="my-12 p-8 border border-gray-900 bg-gray-950/50 flex flex-col items-center justify-center text-center rounded-sm">
                  <div className="text-xs text-gray-500 uppercase tracking-widest mb-6">Security lock engaged. Verify authorization data stream.</div>
                  <button 
                    onClick={() => setIsUnlocked(true)}
                    className="gate-btn px-8 py-4 font-black uppercase tracking-[0.2em] text-xs md:text-sm"
                  >
                    [ DECRYPT & ACCESS PROTOCOL ]
                  </button>
                </div>
              ) : (
                <div className="space-y-6">
                  <p className="text-base md:text-lg leading-relaxed text-gray-300 whitespace-pre-line select-text selection:bg-cyan-500 selection:text-black">
                    {selectedLesson.content}
                  </p>
                  
                  <div className="pt-8 border-t border-gray-900 text-[10px] text-gray-600 uppercase tracking-widest text-center animate-pulse">
                    // end of data matrix stream. choose next protocol array from sidebar. //
                  </div>
                </div>
              )}

            </div>
          </div>

          {/* BOTTOM BACKGROUND MATRIX GRADIENT BLEND */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full pointer-events-none mix-blend-screen opacity-20" style={{ background: 'radial-gradient(circle, var(--glow) 0%, transparent 70%)' }}></div>

        </div>

      </div>
    </>
  );
    }
            
