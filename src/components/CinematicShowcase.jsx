// src/components/CinematicShowcase.jsx
import React, { useState } from 'react';
import { soundManager } from '../utils/soundEffects';
import { 
  ExternalLink, 
  Github, 
  Activity, 
  Layers, 
  Sparkles, 
  CheckCircle2, 
  Code2, 
  ArrowUpRight,
  Filter
} from 'lucide-react';
import { PROJECTS } from '../data/portfolioData';

export default function CinematicShowcase() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedProject, setSelectedProject] = useState(PROJECTS[0]);

  const categories = ['All', 'Full Stack & Cloud', 'AI & Computer Vision'];

  const filteredProjects = activeCategory === 'All'
    ? PROJECTS
    : PROJECTS.filter(p => p.category === activeCategory);

  const handleCategoryChange = (cat) => {
    soundManager.playLaserBlip();
    setActiveCategory(cat);
  };

  return (
    <section id="projects" className="py-24 relative overflow-hidden">
      
      {/* Background Glows */}
      <div className="absolute top-1/4 right-10 w-96 h-96 bg-cyan-600/10 rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-10 w-96 h-96 bg-purple-600/10 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-950/80 border border-cyan-400/40 text-cyan-300 text-xs font-mono tracking-wider shadow-[0_0_15px_rgba(0,240,255,0.25)]">
            <Layers className="w-3.5 h-3.5 text-cyan-400" />
            <span>CINEMATIC PROJECT REEL // 8 PRODUCTION APPS</span>
          </div>

          <h2 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight">
            Engineered for Scale. <br className="hidden sm:inline" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-sky-300 to-indigo-400">
              Validated in Production.
            </span>
          </h2>

          <p className="text-slate-300 text-base sm:text-lg">
            Every platform is live, backed by public GitHub repositories, and architected to solve measurable business and latency problems.
          </p>

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 pt-4">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => handleCategoryChange(cat)}
                className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all ${
                  activeCategory === cat
                    ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-slate-950 shadow-[0_0_20px_rgba(0,240,255,0.4)] scale-105'
                    : 'bg-slate-900/80 text-slate-400 hover:text-white border border-slate-800'
                }`}
              >
                {cat} {cat === 'All' ? `(${PROJECTS.length})` : ''}
              </button>
            ))}
          </div>
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="cinema-glass rounded-3xl p-7 flex flex-col justify-between border border-white/10 hover:border-cyan-400/50 transition-all duration-300 hover:-translate-y-1 group relative overflow-hidden shadow-[0_10px_35px_rgba(0,0,0,0.4)]"
            >
              {/* Subtle Project Background Glow */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/5 rounded-full blur-3xl pointer-events-none group-hover:bg-cyan-500/10 transition-colors" />

              <div className="space-y-5 relative z-10">
                {/* Header Row: Index & Category Badge */}
                <div className="flex items-center justify-between">
                  <span className="font-mono text-cyan-400 font-bold text-sm tracking-wider">
                    PRJ // {project.index}
                  </span>
                  <span className="px-3 py-1 rounded-full bg-slate-900 border border-slate-700 text-xs font-mono text-cyan-300">
                    {project.badge}
                  </span>
                </div>

                {/* Title & Pitch */}
                <div>
                  <h3 className="font-display font-bold text-xl sm:text-2xl text-white group-hover:text-cyan-300 transition-colors">
                    {project.title}
                  </h3>
                  <p className="mt-2 text-slate-300 text-sm leading-relaxed font-normal">
                    {project.pitch}
                  </p>
                </div>

                {/* Performance Metrics */}
                <div className="grid grid-cols-3 gap-2 py-3 px-3.5 rounded-xl bg-black/40 border border-white/5">
                  {project.metrics.map((m) => (
                    <div key={m.label} className="text-center">
                      <div className="font-display font-bold text-base text-cyan-400">{m.value}</div>
                      <div className="text-[10px] font-mono text-slate-400 uppercase tracking-tight">{m.label}</div>
                    </div>
                  ))}
                </div>

                {/* Architecture Pipeline Flow */}
                <div className="p-3 rounded-xl bg-slate-900/60 border border-slate-800 text-xs font-mono text-slate-300 space-y-1">
                  <div className="text-[10px] text-cyan-400 font-bold uppercase tracking-wider flex items-center gap-1.5">
                    <Activity className="w-3 h-3 text-cyan-400" />
                    <span>Pipeline Architecture</span>
                  </div>
                  <div className="text-[11px] text-slate-300 leading-snug">
                    {project.architecture}
                  </div>
                </div>

                {/* Tech Tags */}
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 rounded-md bg-slate-900/90 border border-slate-700/80 text-[11px] font-mono text-slate-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Buttons: Live App & GitHub */}
              <div className="pt-6 mt-6 border-t border-white/10 flex items-center justify-between relative z-10">
                <a
                  href={project.live}
                  target="_blank"
                  rel="noreferrer"
                  onClick={() => soundManager.playLaserBlip()}
                  className="px-4 py-2.5 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-xs flex items-center gap-1.5 shadow-[0_0_15px_rgba(0,240,255,0.3)] transition-all hover:scale-105 active:scale-95"
                >
                  <span>Launch Live App</span>
                  <ArrowUpRight className="w-4 h-4" />
                </a>

                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  onClick={() => soundManager.playLaserBlip()}
                  className="px-4 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-700 text-slate-200 hover:text-white text-xs font-semibold flex items-center gap-2 transition-all hover:border-slate-500"
                >
                  <Github className="w-4 h-4" />
                  <span>Inspect Code</span>
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
