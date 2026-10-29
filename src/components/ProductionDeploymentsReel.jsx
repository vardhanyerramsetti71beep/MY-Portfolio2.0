// src/components/ProductionDeploymentsReel.jsx
import React, { useState } from 'react';
import { ExternalLink, Github, Layers, ArrowUpRight } from 'lucide-react';
import { Sound } from '../engine/freefallEngine';
import { PROJECTS } from '../data/portfolioData';

export default function ProductionDeploymentsReel() {
  const [activeCategory, setActiveCategory] = useState('All');

  const categories = ['All', 'Full Stack & Cloud', 'AI & Computer Vision'];

  const filteredProjects = activeCategory === 'All'
    ? PROJECTS
    : PROJECTS.filter(p => p.category === activeCategory);

  const handleCategoryChange = (cat) => {
    Sound.tick();
    setActiveCategory(cat);
  };

  return (
    <section id="deployments" className="py-24 relative overflow-hidden" aria-label="8 Verified Production Deployments">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-950/80 border border-cyan-400/40 text-cyan-300 text-xs font-mono tracking-wider shadow-[0_0_15px_rgba(0,240,255,0.25)]">
            <Layers className="w-3.5 h-3.5 text-cyan-400" />
            <span>AUTHENTIC PRODUCTION REEL // 8 VERIFIED APPS</span>
          </div>

          <h2 className="font-display font-black text-3xl sm:text-5xl text-white tracking-tight uppercase">
            Engineered for Scale. <br className="hidden sm:inline" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-sky-300 to-indigo-400">
              Validated in Production.
            </span>
          </h2>

          <p className="text-slate-300 text-base sm:text-lg">
            Every platform is live on Vercel and AWS, backed by authentic GitHub repositories, and architected to solve measurable latency and business problems.
          </p>

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 pt-4">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => handleCategoryChange(cat)}
                className={`px-4 py-2 rounded-xl text-xs font-mono font-semibold transition-all ${
                  activeCategory === cat
                    ? 'bg-cyan-500 text-black shadow-[0_0_20px_rgba(0,242,255,0.4)] scale-105'
                    : 'bg-slate-900/80 text-slate-400 hover:text-white border border-slate-800'
                }`}
                data-cursor="Filter"
              >
                {cat} {cat === 'All' ? `(${PROJECTS.length})` : ''}
              </button>
            ))}
          </div>
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProjects.map((project) => (
            <article 
              key={project.id}
              className="group p-7 rounded-2xl bg-[#080d19]/90 border border-slate-800/90 hover:border-cyan-500/50 transition-all duration-300 hover:shadow-[0_20px_60px_rgba(0,242,255,0.12)] flex flex-col justify-between"
            >
              <div>
                <div className="flex items-start justify-between gap-4 mb-4">
                  <div className="flex items-center gap-2.5">
                    <span className="font-mono text-cyan-400 text-sm font-bold tracking-wider">
                      {project.index} //
                    </span>
                    <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono uppercase tracking-wider bg-slate-800/80 text-slate-300 border border-slate-700/60">
                      {project.badge}
                    </span>
                  </div>

                  <div className="flex items-center gap-2">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      className="p-2 rounded-lg bg-slate-800/60 text-slate-400 hover:text-white hover:bg-slate-700 transition-all"
                      title="View GitHub Repository"
                      data-cursor="Source"
                    >
                      <Github className="w-4 h-4" />
                    </a>
                    {project.live && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noreferrer"
                        className="p-2 rounded-lg bg-cyan-500/10 text-cyan-400 hover:bg-cyan-500 hover:text-black transition-all"
                        title="Launch Live Application"
                        data-cursor="Launch"
                      >
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    )}
                  </div>
                </div>

                <h3 className="font-display font-extrabold text-xl text-white group-hover:text-cyan-300 transition-colors mb-3">
                  {project.title}
                </h3>

                <p className="text-slate-300 text-sm leading-relaxed mb-6">
                  {project.solution}
                </p>

                {/* Metrics */}
                {project.metrics && (
                  <div className="grid grid-cols-3 gap-2 p-3 rounded-xl bg-slate-950/60 border border-slate-800/60 mb-6">
                    {project.metrics.map((m, mIdx) => (
                      <div key={mIdx} className="text-center">
                        <div className="font-mono font-black text-cyan-400 text-sm">
                          {m.value}
                        </div>
                        <div className="font-mono text-[9px] uppercase tracking-wider text-slate-400 mt-0.5">
                          {m.label}
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              <div>
                {/* Tech Stack Tags */}
                <div className="flex flex-wrap gap-1.5 pt-4 border-t border-slate-800/80">
                  {project.tags.map((tag, tIdx) => (
                    <span 
                      key={tIdx}
                      className="px-2 py-0.5 rounded text-[10px] font-mono bg-slate-900 text-slate-300 border border-slate-800"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
}
