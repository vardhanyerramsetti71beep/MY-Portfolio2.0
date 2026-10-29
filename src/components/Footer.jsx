// src/components/Footer.jsx
import React from 'react';
import { soundManager } from '../utils/soundEffects';
import { ArrowUp, Github, Linkedin, Mail, Heart, Sparkles } from 'lucide-react';
import { PROFILE } from '../data/portfolioData';

export default function Footer({ onOpenResume }) {
  const scrollToTop = () => {
    soundManager.playLaserBlip();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-[#04060c] border-t border-white/5 py-14 overflow-hidden text-slate-400">
      
      {/* Background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-24 bg-cyan-500/5 blur-[80px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 pb-10 border-b border-white/5">
          
          {/* Logo & Tagline */}
          <div className="text-center md:text-left space-y-2">
            <div className="flex items-center justify-center md:justify-start gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-cyan-400/20 to-purple-600/20 border border-cyan-400/30 flex items-center justify-center font-display font-extrabold text-cyan-300">
                V
              </div>
              <span className="font-display font-bold text-white text-lg tracking-tight">
                Vardhan Yerramsetti <span className="text-cyan-400">2.0</span>
              </span>
            </div>
            <p className="text-xs text-slate-400 max-w-sm">
              Engineered for throughput. Certified for AWS cloud. Proven across 8 production applications.
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex flex-wrap items-center justify-center gap-6 text-xs font-mono">
            <a href="#recruiter" className="hover:text-cyan-400 transition-colors">Recruiter Briefing</a>
            <a href="#projects" className="hover:text-cyan-400 transition-colors">8 Live Projects</a>
            <a href="#skills" className="hover:text-cyan-400 transition-colors">Tech Matrix</a>
            <a href="#experience" className="hover:text-cyan-400 transition-colors">Experience</a>
            <button 
              onClick={() => {
                soundManager.playChime();
                onOpenResume();
              }}
              className="text-cyan-400 hover:text-cyan-300 hover:underline"
            >
              Resume PDF
            </button>
          </div>

          {/* Back to Top */}
          <button
            onClick={scrollToTop}
            className="p-3 rounded-2xl bg-slate-900 border border-slate-700/80 hover:border-cyan-400/50 text-slate-300 hover:text-white transition-all hover:scale-110 active:scale-95 shadow-[0_0_15px_rgba(0,240,255,0.15)]"
            title="Scroll to Top"
          >
            <ArrowUp className="w-4 h-4 text-cyan-400" />
          </button>
        </div>

        {/* Bottom Credits */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-slate-500">
          <div>
            &copy; {new Date().getFullYear()} Vardhan Yerramsetti. All rights reserved.
          </div>
          <div className="flex items-center gap-2 text-[11px] text-cyan-400/80">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Built with Vite, React 19, Tailwind CSS &amp; Cinematic Sound FX</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
