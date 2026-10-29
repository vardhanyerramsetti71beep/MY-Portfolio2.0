// src/components/ExperienceSection.jsx
import React from 'react';
import { 
  Briefcase, 
  GraduationCap, 
  Calendar, 
  MapPin, 
  CheckCircle2, 
  TrendingUp, 
  Award,
  ChevronRight
} from 'lucide-react';
import { EXPERIENCE, EDUCATION } from '../data/portfolioData';

export default function ExperienceSection() {
  return (
    <section id="experience" className="py-24 relative overflow-hidden">
      
      {/* Background Glow */}
      <div className="absolute top-1/3 right-1/4 w-80 h-80 bg-blue-600/10 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Title */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-950/80 border border-cyan-400/40 text-cyan-300 text-xs font-mono tracking-wider shadow-[0_0_15px_rgba(0,240,255,0.25)]">
            <Briefcase className="w-3.5 h-3.5 text-cyan-400" />
            <span>OPERATIONAL TELEMETRY // CAREER MILESTONES</span>
          </div>

          <h2 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight">
            Work Experience &amp; <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-sky-300 to-indigo-400">Education</span>
          </h2>

          <p className="text-slate-300 text-base sm:text-lg">
            Track record of high-stakes operational execution, computer science mentorship, and structured academic foundations.
          </p>
        </div>

        {/* Experience Timeline */}
        <div className="space-y-8 max-w-4xl mx-auto mb-16">
          {EXPERIENCE.map((exp, idx) => (
            <div
              key={exp.id}
              className="cinema-glass rounded-3xl p-7 sm:p-8 border border-white/10 hover:border-cyan-400/40 transition-all duration-300 shadow-[0_10px_35px_rgba(0,0,0,0.4)]"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4 pb-4 border-b border-white/5">
                <div>
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-cyan-400 font-bold text-xs">0{idx + 1} //</span>
                    <h3 className="font-display font-bold text-xl text-white">
                      {exp.role}
                    </h3>
                  </div>
                  <div className="text-sm text-cyan-300 font-semibold mt-0.5">
                    {exp.company} <span className="text-slate-400 font-normal">({exp.division})</span>
                  </div>
                </div>

                <div className="flex flex-wrap items-center gap-3 text-xs font-mono text-slate-400">
                  <span className="flex items-center gap-1 bg-slate-900 px-3 py-1 rounded-full border border-slate-700">
                    <Calendar className="w-3.5 h-3.5 text-cyan-400" />
                    {exp.period}
                  </span>
                  <span className="flex items-center gap-1 bg-slate-900 px-3 py-1 rounded-full border border-slate-700">
                    <MapPin className="w-3.5 h-3.5 text-slate-400" />
                    {exp.location}
                  </span>
                </div>
              </div>

              {/* Metrics Row */}
              <div className="grid grid-cols-3 gap-3 mb-5 p-3 rounded-xl bg-black/40 border border-white/5">
                {exp.stats.map((st) => (
                  <div key={st.label} className="text-center">
                    <div className="font-display font-bold text-lg text-cyan-400">{st.value}</div>
                    <div className="text-[10px] font-mono text-slate-400 uppercase tracking-tight">{st.label}</div>
                  </div>
                ))}
              </div>

              {/* Bullets */}
              <ul className="space-y-2.5 text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
                {exp.highlights.map((item, i) => (
                  <li key={i} className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Education Card */}
        <div className="max-w-4xl mx-auto">
          <div className="cinema-glass rounded-3xl p-8 border border-purple-500/30 relative overflow-hidden shadow-[0_0_35px_rgba(168,85,247,0.15)]">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 pb-4 border-b border-white/10">
              <div className="flex items-center gap-3.5">
                <div className="w-12 h-12 rounded-xl bg-purple-950/80 border border-purple-400/40 flex items-center justify-center text-purple-300">
                  <GraduationCap className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-display font-bold text-xl text-white">
                    {EDUCATION.degree} in {EDUCATION.major}
                  </h3>
                  <div className="text-sm text-purple-300">
                    {EDUCATION.institution}
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-3 text-xs font-mono text-slate-400">
                <span className="bg-slate-900 px-3 py-1.5 rounded-full border border-slate-700">
                  {EDUCATION.period}
                </span>
                <span className="bg-purple-950 text-purple-300 px-3 py-1.5 rounded-full border border-purple-500/40 font-bold">
                  CGPA: {EDUCATION.cgpa}
                </span>
              </div>
            </div>

            <div>
              <div className="text-xs font-mono text-slate-400 uppercase tracking-wider mb-2.5">
                Core Computer Science Rigor &amp; Coursework:
              </div>
              <div className="flex flex-wrap gap-2">
                {EDUCATION.coursework.map((course) => (
                  <span
                    key={course}
                    className="px-3 py-1 rounded-lg bg-slate-900/90 border border-slate-700 text-xs text-slate-200"
                  >
                    {course}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
