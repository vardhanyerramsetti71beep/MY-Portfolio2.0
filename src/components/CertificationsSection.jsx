// src/components/CertificationsSection.jsx
import React from 'react';
import { soundManager } from '../utils/soundEffects';
import { 
  Award, 
  ShieldCheck, 
  CheckCircle2, 
  ExternalLink, 
  Cloud, 
  Network, 
  Smartphone,
  Sparkles
} from 'lucide-react';
import { CERTIFICATIONS } from '../data/portfolioData';

export default function CertificationsSection() {
  const icons = {
    Cloud: <Cloud className="w-6 h-6 text-amber-400" />,
    ShieldCheck: <ShieldCheck className="w-6 h-6 text-cyan-400" />,
    Smartphone: <Smartphone className="w-6 h-6 text-emerald-400" />,
    Network: <Network className="w-6 h-6 text-blue-400" />
  };

  return (
    <section id="certifications" className="py-24 relative overflow-hidden bg-[#070b18]/60 border-y border-white/5">
      
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-80 h-80 bg-amber-500/10 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Title */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-950/80 border border-amber-400/40 text-amber-300 text-xs font-mono tracking-wider shadow-[0_0_15px_rgba(245,158,11,0.25)]">
            <Award className="w-3.5 h-3.5 text-amber-400" />
            <span>STANDARDIZED CREDENTIALS // INDUSTRY ACCREDITATION</span>
          </div>

          <h2 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight">
            Certified Cloud &amp; <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-yellow-300 to-orange-400">Credentials</span>
          </h2>

          <p className="text-slate-300 text-base sm:text-lg">
            Globally recognized certifications verifying enterprise cloud infrastructure, networking protocols, and modern operating environments.
          </p>
        </div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {CERTIFICATIONS.map((cert) => (
            <div
              key={cert.id}
              className="cinema-glass rounded-3xl p-7 border border-white/10 hover:border-amber-400/40 transition-all duration-300 hover:-translate-y-1 group flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="flex items-start justify-between gap-3">
                  <div className="w-12 h-12 rounded-2xl bg-slate-900 border border-white/10 flex items-center justify-center group-hover:scale-105 transition-transform">
                    {icons[cert.icon]}
                  </div>

                  <div className="flex flex-col items-end">
                    <span className="px-2.5 py-1 rounded-md bg-amber-950/80 border border-amber-500/40 text-amber-300 text-[11px] font-mono font-semibold flex items-center gap-1">
                      <ShieldCheck className="w-3.5 h-3.5" />
                      {cert.status}
                    </span>
                    <span className="text-[11px] font-mono text-slate-400 mt-1">Year: {cert.year}</span>
                  </div>
                </div>

                <div>
                  <h3 className="font-display font-bold text-xl text-white group-hover:text-amber-300 transition-colors">
                    {cert.title}
                  </h3>
                  <div className="text-xs font-semibold text-slate-300 mt-0.5">
                    Issuer: <span className="text-cyan-400">{cert.issuer}</span>
                  </div>
                </div>

                <p className="text-xs text-slate-300 leading-relaxed font-normal">
                  {cert.desc}
                </p>

                {/* Skills verified */}
                <div className="pt-2">
                  <div className="text-[10px] font-mono text-slate-400 uppercase tracking-wider mb-2">
                    Verified Competencies:
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {cert.skills.map((sk) => (
                      <span
                        key={sk}
                        className="px-2 py-0.5 rounded bg-slate-900 border border-slate-700/80 text-[10px] font-mono text-slate-200"
                      >
                        {sk}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="pt-4 mt-4 border-t border-white/5 flex items-center justify-between text-xs text-slate-400 font-mono">
                <span>{cert.badge}</span>
                <span className="text-emerald-400 flex items-center gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5" /> Active Credential
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
