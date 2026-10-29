// src/components/RecruiterBriefing.jsx
import React, { useState } from 'react';
import { soundManager } from '../utils/soundEffects';
import { 
  Rocket, 
  Cloud, 
  Zap, 
  Brain, 
  CheckCircle, 
  Copy, 
  Check, 
  FileText, 
  MessageSquare, 
  Search,
  ExternalLink,
  Award,
  Terminal,
  Clock,
  Sparkles
} from 'lucide-react';
import { PROFILE, RECRUITER_PILLARS } from '../data/portfolioData';

export default function RecruiterBriefing({ onOpenResume }) {
  const [copiedPitch, setCopiedPitch] = useState(false);
  const [skillSearch, setSkillSearch] = useState('');

  const quickSkills = [
    { name: 'Python (Flask / FastAPI)', tag: 'Backend' },
    { name: 'AWS (EC2, S3, Lambda, IAM)', tag: 'Cloud' },
    { name: 'MySQL & Query Tuning (-25%)', tag: 'Database' },
    { name: 'React.js 19 & Next.js 14', tag: 'Frontend' },
    { name: 'OpenCV & Computer Vision', tag: 'AI/ML' },
    { name: 'Docker & Git CI/CD', tag: 'DevOps' }
  ];

  const filteredSkills = skillSearch.trim() === '' 
    ? quickSkills 
    : quickSkills.filter(s => s.name.toLowerCase().includes(skillSearch.toLowerCase()) || s.tag.toLowerCase().includes(skillSearch.toLowerCase()));

  const pitchText = `Hi! I found Vardhan Yerramsetti — a Python Full Stack Developer & AWS Certified Cloud Practitioner. He has built and deployed 8 live production web apps, optimized MySQL query latency by 25%, and engineered computer vision pipelines with >90% accuracy. Resume & live deployments: https://my-portfolio-vardhan-yerramsetti.vercel.app/`;

  const handleCopyPitch = () => {
    soundManager.playLaserBlip();
    navigator.clipboard.writeText(pitchText);
    setCopiedPitch(true);
    setTimeout(() => setCopiedPitch(false), 2500);
  };

  return (
    <section id="recruiter" className="py-24 relative overflow-hidden bg-[#070b18]/60 border-y border-white/5">
      
      {/* Background Decorative Rings */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-72 h-72 bg-cyan-500/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-80 h-80 bg-purple-500/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header with Recruiter Badge */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-950/80 border border-cyan-400/40 text-cyan-300 text-xs font-mono tracking-wider shadow-[0_0_15px_rgba(0,240,255,0.25)]">
            <Clock className="w-3.5 h-3.5 text-cyan-400" />
            <span>EXECUTIVE TALENT EVALUATION // 30-SECOND READ</span>
          </div>

          <h2 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight">
            Why Hire <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-sky-300 to-indigo-400">Vardhan Yerramsetti</span>?
          </h2>

          <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
            Zero speculation. Every claim backed by verified production URLs, measurable latency benchmarks, and verified cloud credentials.
          </p>
        </div>

        {/* 4 Pillars of Engineering Value */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {RECRUITER_PILLARS.map((pillar, idx) => {
            const icons = {
              Rocket: <Rocket className="w-6 h-6 text-cyan-400" />,
              Cloud: <Cloud className="w-6 h-6 text-amber-400" />,
              Zap: <Zap className="w-6 h-6 text-emerald-400" />,
              Brain: <Brain className="w-6 h-6 text-purple-400" />
            };

            return (
              <div
                key={pillar.title}
                className="cinema-glass rounded-2xl p-6 relative group transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="w-12 h-12 rounded-xl bg-slate-900 border border-white/10 flex items-center justify-center shadow-[0_0_15px_rgba(0,240,255,0.15)] group-hover:scale-110 group-hover:border-cyan-400/50 transition-all">
                    {icons[pillar.icon]}
                  </div>

                  <h3 className="font-display font-bold text-white text-lg tracking-tight group-hover:text-cyan-300 transition-colors">
                    {pillar.title}
                  </h3>

                  <p className="text-slate-300 text-xs leading-relaxed font-normal">
                    {pillar.desc}
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-white/5 flex items-center justify-between text-[11px] font-mono text-slate-400">
                  <span>PILLAR 0{idx + 1}</span>
                  <span className="text-cyan-400 flex items-center gap-1">
                    <CheckCircle className="w-3.5 h-3.5" /> Verified
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Recruiter Action Control Console (Card) */}
        <div className="cinema-glass rounded-3xl p-8 lg:p-10 border border-cyan-500/30 relative overflow-hidden shadow-[0_0_40px_rgba(0,240,255,0.12)]">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Box: 1-Click Hiring Manager Pitch Note */}
            <div className="lg:col-span-7 space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono uppercase tracking-wider text-cyan-300 flex items-center gap-2">
                  <Terminal className="w-4 h-4 text-cyan-400" />
                  1-Click Pitch for Hiring Managers / Slack
                </span>
                <span className="text-[11px] font-mono text-slate-400">Instant Snippet</span>
              </div>

              <div className="p-4 rounded-xl bg-black/60 border border-slate-700/80 font-mono text-xs text-slate-300 leading-relaxed relative">
                <p>
                  &quot;Hi team, I found <span className="text-cyan-300 font-semibold">Vardhan Yerramsetti</span> — Python Full Stack &amp; AWS Certified Cloud Architect. He built <span className="text-amber-300 font-semibold">8 live production platforms</span>, cut relational DB query latency by <span className="text-emerald-300 font-semibold">25%</span>, and built OpenCV biometric ML models with <span className="text-purple-300 font-semibold">&gt;90% accuracy</span>.&quot;
                </p>

                <button
                  onClick={handleCopyPitch}
                  className="mt-3 px-3.5 py-1.5 rounded-lg bg-cyan-950 border border-cyan-400/50 hover:bg-cyan-900 text-cyan-300 text-xs font-semibold flex items-center gap-2 transition-all hover:scale-105 active:scale-95"
                >
                  {copiedPitch ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                      <span className="text-emerald-300">Copied to Clipboard!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5 text-cyan-400" />
                      <span>Copy Candidate Blurb</span>
                    </>
                  )}
                </button>
              </div>

              {/* Live Skill Quick Filter */}
              <div className="space-y-2 pt-2">
                <div className="flex items-center gap-2 text-xs font-mono text-slate-400">
                  <Search className="w-3.5 h-3.5 text-cyan-400" />
                  <span>Verify Skill Competency:</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {filteredSkills.map((sk) => (
                    <span 
                      key={sk.name}
                      className="px-2.5 py-1 rounded-lg bg-slate-900 border border-slate-700 text-xs text-slate-200 flex items-center gap-1.5"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                      <strong className="font-semibold text-white">{sk.name}</strong>
                      <span className="text-[10px] text-cyan-400 font-mono">({sk.tag})</span>
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Box: Recruiter Direct Connection Center */}
            <div className="lg:col-span-5 bg-gradient-to-br from-slate-900 to-[#0c142c] p-6 rounded-2xl border border-white/10 space-y-4">
              <h4 className="font-display font-bold text-white text-lg flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-amber-400" />
                <span>Fast-Track Interview Process</span>
              </h4>
              <p className="text-xs text-slate-300 leading-relaxed">
                Skip lengthy cold reachouts. Connect directly with Vardhan via WhatsApp or email to request an interview or code walkthrough.
              </p>

              <div className="space-y-2.5 pt-2">
                <a
                  href="https://wa.me/917386033417?text=Hi%20Vardhan,%20I%20reviewed%20your%20Cinematic%20Portfolio%202.0%20and%20would%20like%20to%20schedule%20an%20interview!"
                  target="_blank"
                  rel="noreferrer"
                  onClick={() => soundManager.playLaserBlip()}
                  className="w-full py-3 px-4 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-400 hover:to-teal-500 text-slate-950 font-bold text-xs flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(16,185,129,0.3)] transition-all hover:scale-[1.02] active:scale-[0.98]"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Direct WhatsApp: +91 7386033417</span>
                </a>

                <button
                  onClick={() => {
                    soundManager.playChime();
                    onOpenResume();
                  }}
                  className="w-full py-3 px-4 rounded-xl bg-slate-800 hover:bg-slate-700 border border-slate-600 text-white font-semibold text-xs flex items-center justify-center gap-2 transition-all hover:border-cyan-400/50"
                >
                  <FileText className="w-4 h-4 text-cyan-400" />
                  <span>Inspect ATS Resume PDF</span>
                </button>
              </div>

              <div className="pt-2 text-center">
                <span className="text-[11px] font-mono text-emerald-400 flex items-center justify-center gap-1">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  Notice Period: Immediate / Ready to Join
                </span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
