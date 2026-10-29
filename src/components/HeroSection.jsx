// src/components/HeroSection.jsx
import React, { useState, useEffect, useRef } from 'react';
import { soundManager } from '../utils/soundEffects';
import { 
  ShieldCheck, 
  Sparkles, 
  ArrowRight, 
  FileText, 
  MessageSquare, 
  Database, 
  Cloud, 
  Cpu, 
  Zap, 
  ExternalLink,
  Eye,
  CheckCircle2,
  Activity
} from 'lucide-react';

export default function HeroSection({ onOpenResume }) {
  // Mode: 'executive' (Main Image) or 'cinematic' (Cinematic Hologram Avatar)
  const [avatarMode, setAvatarMode] = useState('executive');
  const [typedText, setTypedText] = useState('');
  const [roleIndex, setRoleIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  // Mouse tilt tracking for the 3D card
  const cardRef = useRef(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  const roles = [
    'Python Full Stack Developer',
    'AWS Certified Cloud Practitioner',
    'High-Throughput Microservice Architect',
    'Computer Vision & Real-Time ML Specialist',
    'Relational DB Query Optimizer (-25% Latency)'
  ];

  // Typing effect
  useEffect(() => {
    const currentRole = roles[roleIndex];
    let speed = isDeleting ? 30 : 65;

    if (!isDeleting && typedText === currentRole) {
      speed = 2200; // pause at end
      const timeout = setTimeout(() => setIsDeleting(true), speed);
      return () => clearTimeout(timeout);
    } else if (isDeleting && typedText === '') {
      setIsDeleting(false);
      setRoleIndex((prev) => (prev + 1) % roles.length);
      speed = 400;
    }

    const timer = setTimeout(() => {
      setTypedText(
        isDeleting 
          ? currentRole.substring(0, typedText.length - 1)
          : currentRole.substring(0, typedText.length + 1)
      );
    }, speed);

    return () => clearTimeout(timer);
  }, [typedText, isDeleting, roleIndex]);

  // Card mouse movement tilt effect
  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = ((y - centerY) / centerY) * -10;
    const rotateY = ((x - centerX) / centerX) * 10;
    setTilt({ x: rotateX, y: rotateY });
  };

  const handleMouseLeave = () => {
    setTilt({ x: 0, y: 0 });
  };

  const handleToggleAvatar = (mode) => {
    soundManager.playPowerUp();
    setAvatarMode(mode);
  };

  return (
    <section className="relative min-h-screen pt-28 pb-20 flex items-center justify-center overflow-hidden">
      
      {/* Background Ambient Spotlights & Flares */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-1/3 right-1/4 w-[420px] h-[420px] bg-purple-600/15 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 w-3/4 h-32 bg-sky-500/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Recruiter Hook & High-Impact Copy (7 Cols) */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            
            {/* Live Recruiter Pill */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-cyan-950/60 border border-cyan-400/30 text-cyan-300 text-xs font-mono font-medium tracking-wide shadow-[0_0_15px_rgba(0,240,255,0.2)]">
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
              </span>
              <span>ENTERPRISE FULL-STACK & AWS CLOUD ARCHITECT</span>
              <span className="text-slate-500">•</span>
              <span className="text-amber-400 font-semibold">8 PRODUCTION DEPLOYMENTS</span>
            </div>

            {/* Cinematic Headline */}
            <h1 className="font-display font-extrabold text-4xl sm:text-5xl lg:text-6xl text-white tracking-tight leading-[1.12]">
              Architecting <br className="hidden sm:inline" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-sky-300 to-indigo-400 drop-shadow-[0_0_35px_rgba(0,240,255,0.35)]">
                Digital Dominance
              </span>
              <br />
              <span className="text-slate-200 text-3xl sm:text-4xl lg:text-5xl font-bold">
                Through Precision Engineering.
              </span>
            </h1>

            {/* Dynamic Rotating Role Typewriter */}
            <div className="h-10 sm:h-12 flex items-center justify-center lg:justify-start">
              <div className="font-mono text-lg sm:text-2xl text-cyan-300 font-semibold flex items-center gap-2 bg-slate-900/60 px-4 py-1.5 rounded-xl border border-cyan-500/20 backdrop-blur-md">
                <span className="text-cyan-500 font-bold">&gt;</span>
                <span>{typedText}</span>
                <span className="w-2.5 h-6 bg-cyan-400 inline-block animate-pulse ml-0.5" />
              </div>
            </div>

            {/* Recruiter-Tailored Value Proposition */}
            <p className="text-slate-300 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto lg:mx-0 font-normal">
              I don’t just write code — I build <strong className="text-white font-semibold">high-concurrency Python microservices</strong>, deploy resilient <strong className="text-white font-semibold">AWS cloud infrastructures</strong>, and optimize relational databases for <strong className="text-cyan-400 font-semibold">-25% query latency</strong>. Shipped 8 production platforms end-to-end. Ready to deliver immediate ROI to your engineering team.
            </p>

            {/* Fast-Track Recruiter CTA Bar */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3.5 pt-2">
              {/* Primary Call to Action */}
              <a
                href="#recruiter"
                onClick={() => soundManager.playLaserBlip()}
                className="px-6 py-3.5 rounded-xl bg-gradient-to-r from-cyan-500 via-sky-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-slate-950 font-bold text-sm flex items-center gap-2 shadow-[0_0_25px_rgba(0,240,255,0.45)] transition-all hover:scale-105 active:scale-95 group"
              >
                <span>Why Hire Me in 30 Seconds</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>

              {/* View Projects */}
              <a
                href="#projects"
                onClick={() => soundManager.playLaserBlip()}
                className="px-5 py-3.5 rounded-xl bg-slate-900/80 hover:bg-slate-800/80 text-white font-medium text-sm border border-slate-700/80 hover:border-cyan-400/50 flex items-center gap-2 transition-all hover:shadow-[0_0_15px_rgba(0,240,255,0.2)]"
              >
                <Zap className="w-4 h-4 text-cyan-400" />
                <span>Live Deployments</span>
              </a>

              {/* Resume Trigger */}
              <button
                onClick={() => {
                  soundManager.playChime();
                  onOpenResume();
                }}
                className="px-5 py-3.5 rounded-xl bg-slate-900/80 hover:bg-slate-800/80 text-slate-200 hover:text-white font-medium text-sm border border-slate-700/80 hover:border-purple-400/50 flex items-center gap-2 transition-all hover:shadow-[0_0_15px_rgba(168,85,247,0.2)]"
              >
                <FileText className="w-4 h-4 text-purple-400" />
                <span>Inspect Resume (ATS)</span>
              </button>
            </div>

            {/* Production Telemetry Badges */}
            <div className="pt-6 border-t border-slate-800/80 grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-2xl mx-auto lg:mx-0">
              <div className="p-3 rounded-xl bg-slate-900/40 border border-slate-800/80 hover:border-cyan-500/30 transition-all text-center lg:text-left">
                <div className="font-display font-extrabold text-2xl text-cyan-400">8 Live</div>
                <div className="text-[11px] font-mono text-slate-400 uppercase tracking-wider">Web Apps Shipped</div>
              </div>
              <div className="p-3 rounded-xl bg-slate-900/40 border border-slate-800/80 hover:border-cyan-500/30 transition-all text-center lg:text-left">
                <div className="font-display font-extrabold text-2xl text-emerald-400">-25%</div>
                <div className="text-[11px] font-mono text-slate-400 uppercase tracking-wider">Query Latency Cut</div>
              </div>
              <div className="p-3 rounded-xl bg-slate-900/40 border border-slate-800/80 hover:border-cyan-500/30 transition-all text-center lg:text-left">
                <div className="font-display font-extrabold text-2xl text-indigo-400">&gt;90%</div>
                <div className="text-[11px] font-mono text-slate-400 uppercase tracking-wider">CV Model Accuracy</div>
              </div>
              <div className="p-3 rounded-xl bg-slate-900/40 border border-slate-800/80 hover:border-cyan-500/30 transition-all text-center lg:text-left">
                <div className="font-display font-extrabold text-2xl text-amber-400">AWS</div>
                <div className="text-[11px] font-mono text-slate-400 uppercase tracking-wider">Certified Cloud</div>
              </div>
            </div>

          </div>

          {/* Right Column: DUAL-IMAGE CINEMATIC HOLOGRAPHIC STATION (5 Cols) */}
          <div className="lg:col-span-5 flex flex-col items-center">
            
            {/* Interactive Mode Switcher Pill */}
            <div className="mb-4 inline-flex items-center p-1.5 rounded-2xl bg-slate-900/90 border border-cyan-500/30 backdrop-blur-xl shadow-[0_0_25px_rgba(0,240,255,0.2)]">
              <button
                onClick={() => handleToggleAvatar('executive')}
                className={`px-4 py-2 rounded-xl text-xs font-semibold flex items-center gap-2 transition-all ${
                  avatarMode === 'executive'
                    ? 'bg-gradient-to-r from-blue-600 to-cyan-600 text-white shadow-[0_0_15px_rgba(0,240,255,0.4)]'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                <span>👔 Executive Portrait</span>
                <span className="text-[10px] px-1.5 py-0.2 rounded bg-black/30 font-mono">MAIN</span>
              </button>

              <button
                onClick={() => handleToggleAvatar('cinematic')}
                className={`px-4 py-2 rounded-xl text-xs font-semibold flex items-center gap-2 transition-all ${
                  avatarMode === 'cinematic'
                    ? 'bg-gradient-to-r from-purple-600 to-cyan-500 text-white shadow-[0_0_20px_rgba(168,85,247,0.5)]'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                <Sparkles className="w-3.5 h-3.5 text-cyan-300" />
                <span>⚡ Cinematic Holo-V</span>
                <span className="text-[10px] px-1.5 py-0.2 rounded bg-cyan-950/80 text-cyan-300 font-mono">CINEMA</span>
              </button>
            </div>

            {/* 3D Interactive Card Frame */}
            <div
              ref={cardRef}
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              style={{
                transform: `perspective(1000px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
                transition: tilt.x === 0 ? 'transform 0.5s ease-out' : 'none'
              }}
              className="relative w-full max-w-[370px] aspect-[4/5] rounded-3xl p-2.5 bg-gradient-to-b from-slate-800/80 via-slate-900/90 to-[#070b1a] border border-cyan-400/40 shadow-[0_20px_50px_rgba(0,240,255,0.25)] group"
            >
              {/* Outer Glow Halo */}
              <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-cyan-500/30 via-purple-500/20 to-sky-500/30 blur-xl opacity-75 group-hover:opacity-100 transition duration-500" />

              {/* Inner Picture Container */}
              <div className="relative w-full h-full rounded-2xl overflow-hidden bg-slate-950">
                
                {/* 1. Main Executive Portrait */}
                <img
                  src="/assets/main_profile.jpg"
                  alt="Vardhan Yerramsetti - Professional Executive Portrait"
                  className={`absolute inset-0 w-full h-full object-cover object-top transition-all duration-700 ${
                    avatarMode === 'executive'
                      ? 'opacity-100 scale-100 filter brightness-105 contrast-105'
                      : 'opacity-0 scale-95 pointer-events-none'
                  }`}
                />

                {/* 2. Cinematic Hologram Avatar (Uploaded Image 1 with Glowing 'V') */}
                <div
                  className={`absolute inset-0 w-full h-full transition-all duration-700 ${
                    avatarMode === 'cinematic'
                      ? 'opacity-100 scale-100'
                      : 'opacity-0 scale-105 pointer-events-none'
                  }`}
                >
                  <img
                    src="/assets/cinematic_avatar.jpg"
                    alt="Vardhan Yerramsetti - Cinematic Holographic Particle Avatar"
                    className="w-full h-full object-cover object-center filter brightness-110 contrast-110"
                  />
                  {/* Holographic Scanline Overlay */}
                  <div className="absolute inset-0 hologram-scanlines pointer-events-none opacity-40 mix-blend-screen" />
                  
                  {/* Hologram Badge Pill */}
                  <div className="absolute top-4 left-4 right-4 flex items-center justify-between pointer-events-none">
                    <span className="px-2.5 py-1 rounded-md bg-black/60 border border-cyan-400/60 text-[10px] font-mono text-cyan-300 tracking-wider backdrop-blur-md flex items-center gap-1.5 shadow-[0_0_10px_rgba(0,240,255,0.5)]">
                      <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-ping" />
                      HOLO-V ARCHIVE // ACTIVE
                    </span>
                    <span className="text-[10px] font-mono text-purple-300 bg-purple-950/80 px-2 py-0.5 rounded border border-purple-500/30">
                      PARTICLE FX
                    </span>
                  </div>
                </div>

                {/* Ambient Bottom Gradient Vignette */}
                <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#05070e] via-[#05070e]/60 to-transparent pointer-events-none" />

                {/* Overlaid Badge Details on the Portrait */}
                <div className="absolute bottom-4 left-4 right-4 z-20 space-y-2 pointer-events-auto">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="font-display font-bold text-white text-lg tracking-tight flex items-center gap-1.5">
                        <span>Vardhan Yerramsetti</span>
                        <CheckCircle2 className="w-4 h-4 text-cyan-400" />
                      </h3>
                      <p className="text-xs text-cyan-300/90 font-mono">
                        {avatarMode === 'executive' ? 'Executive Profile // Verified' : 'Cinematic Hologram Avatar // Matrix'}
                      </p>
                    </div>

                    {/* Quick Mode Toggle Icon */}
                    <button
                      onClick={() => handleToggleAvatar(avatarMode === 'executive' ? 'cinematic' : 'executive')}
                      title="Click to toggle image form"
                      className="p-2 rounded-xl bg-slate-900/90 border border-cyan-500/40 text-cyan-300 hover:scale-110 active:scale-95 transition-all shadow-[0_0_15px_rgba(0,240,255,0.3)]"
                    >
                      <Sparkles className="w-4 h-4 animate-spin-slow" />
                    </button>
                  </div>

                  {/* Floating Tags */}
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    <span className="px-2 py-0.5 rounded-md bg-slate-900/80 border border-slate-700 text-[10px] font-medium text-slate-300">
                      AWS Cloud Practitioner
                    </span>
                    <span className="px-2 py-0.5 rounded-md bg-cyan-950/80 border border-cyan-500/40 text-[10px] font-medium text-cyan-300">
                      Python Full Stack
                    </span>
                    <span className="px-2 py-0.5 rounded-md bg-purple-950/80 border border-purple-500/40 text-[10px] font-medium text-purple-300">
                      Computer Vision
                    </span>
                  </div>
                </div>

              </div>
            </div>

            {/* Helper Caption */}
            <p className="mt-3 text-[11px] font-mono text-slate-400 flex items-center gap-1.5">
              <span>Interactive 3D Hologram Station</span>
              <span className="text-slate-600">•</span>
              <span className="text-cyan-400 cursor-pointer hover:underline" onClick={() => handleToggleAvatar(avatarMode === 'executive' ? 'cinematic' : 'executive')}>
                Click to switch between Main Photo &amp; Cinematic Avatar
              </span>
            </p>

          </div>

        </div>
      </div>
    </section>
  );
}
