// src/components/TechMatrix.jsx
import React, { useState } from 'react';
import { soundManager } from '../utils/soundEffects';
import { 
  Cpu, 
  Cloud, 
  Database, 
  Terminal, 
  Code2, 
  CheckCircle2, 
  Sparkles,
  Server,
  Layers
} from 'lucide-react';
import { SKILL_CATEGORIES } from '../data/portfolioData';

export default function TechMatrix() {
  const [selectedCategory, setSelectedCategory] = useState(0);

  const handleSelect = (idx) => {
    soundManager.playLaserBlip();
    setSelectedCategory(idx);
  };

  const current = SKILL_CATEGORIES[selectedCategory];

  return (
    <section id="skills" className="py-24 relative overflow-hidden bg-[#070b18]/60 border-y border-white/5">
      
      {/* Background Ambient Glow */}
      <div className="absolute top-1/2 left-1/3 -translate-y-1/2 w-96 h-96 bg-cyan-500/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Title */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-950/80 border border-cyan-400/40 text-cyan-300 text-xs font-mono tracking-wider shadow-[0_0_15px_rgba(0,240,255,0.25)]">
            <Cpu className="w-3.5 h-3.5 text-cyan-400" />
            <span>ARCHITECTURAL ARSENAL // PRODUCTION STACK</span>
          </div>

          <h2 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight">
            Full-Spectrum <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-sky-300 to-indigo-400">Technology Radar</span>
          </h2>

          <p className="text-slate-300 text-base sm:text-lg">
            Layer-by-layer architectural competencies engineered for scalability, sub-millisecond execution, and high security.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-10">
          {SKILL_CATEGORIES.map((cat, idx) => (
            <button
              key={cat.name}
              onClick={() => handleSelect(idx)}
              className={`px-5 py-3 rounded-2xl text-xs sm:text-sm font-semibold transition-all flex items-center gap-2.5 ${
                selectedCategory === idx
                  ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-slate-950 font-bold shadow-[0_0_25px_rgba(0,240,255,0.4)] scale-105'
                  : 'bg-slate-900/80 text-slate-400 hover:text-white border border-slate-800 hover:border-slate-700'
              }`}
            >
              <span className="w-2 h-2 rounded-full" style={{ backgroundColor: cat.accent }} />
              <span>{cat.name}</span>
            </button>
          ))}
        </div>

        {/* Selected Layer Showcase Card */}
        <div className="cinema-glass rounded-3xl p-8 lg:p-10 border border-cyan-500/30 shadow-[0_0_40px_rgba(0,240,255,0.1)]">
          <div className="flex items-center justify-between mb-8 pb-4 border-b border-white/10">
            <div>
              <span className="text-xs font-mono uppercase tracking-wider text-cyan-400">
                ACTIVE DOMAIN // LAYER 0{selectedCategory + 1}
              </span>
              <h3 className="font-display font-bold text-2xl text-white mt-1">
                {current.name}
              </h3>
            </div>
            <span className="px-3 py-1 rounded-full bg-cyan-950 text-cyan-300 border border-cyan-500/40 font-mono text-xs">
              {current.skills.length} Core Modules
            </span>
          </div>

          {/* Skills Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {current.skills.map((skill) => (
              <div
                key={skill.name}
                className="p-5 rounded-2xl bg-black/40 border border-white/5 hover:border-cyan-400/40 transition-all group"
              >
                <div className="flex items-center justify-between mb-2">
                  <h4 className="font-display font-bold text-white text-base group-hover:text-cyan-300 transition-colors">
                    {skill.name}
                  </h4>
                  <span className={`text-[10px] font-mono px-2 py-0.5 rounded ${
                    skill.level === 'Expert' 
                      ? 'bg-emerald-950 text-emerald-300 border border-emerald-500/30'
                      : skill.level === 'Advanced'
                      ? 'bg-cyan-950 text-cyan-300 border border-cyan-500/30'
                      : 'bg-purple-950 text-purple-300 border border-purple-500/30'
                  }`}>
                    {skill.level}
                  </span>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed font-normal">
                  {skill.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
