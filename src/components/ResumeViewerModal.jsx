// src/components/ResumeViewerModal.jsx
import React, { useState, useEffect } from 'react';
import { Sound } from '../engine/freefallEngine';
import { 
  X, 
  Download, 
  Printer, 
  FileText, 
  ExternalLink, 
  CheckCircle2, 
  Sparkles,
  Eye,
  Layers
} from 'lucide-react';
import { PROFILE, EXPERIENCE, PROJECTS, EDUCATION, CERTIFICATIONS } from '../data/portfolioData';

export default function ResumeViewerModal({ isOpen, onClose }) {
  const [viewMode, setViewMode] = useState('ats'); // 'ats' or 'pdf'

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/80 backdrop-blur-xl animate-fadeIn">
      <div className="relative w-full max-w-5xl h-[92vh] rounded-3xl bg-[#090e1f] border border-cyan-400/40 shadow-[0_0_50px_rgba(0,240,255,0.25)] flex flex-col overflow-hidden">
        
        {/* Modal Top Bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-white/10 bg-slate-900/90 backdrop-blur-md">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-xl bg-cyan-950 border border-cyan-400/40 text-cyan-300">
              <FileText className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-display font-bold text-lg text-white">
                Vardhan Yerramsetti — Verified ATS Resume
              </h3>
              <p className="text-xs text-slate-400 font-mono">
                Python Full Stack • AWS Certified Cloud Practitioner • Data Science
              </p>
            </div>
          </div>

          {/* Action Tools */}
          <div className="flex items-center gap-2">
            {/* View Switcher */}
            <div className="hidden sm:flex items-center bg-black/60 p-1 rounded-xl border border-white/10">
              <button
                onClick={() => setViewMode('ats')}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                  viewMode === 'ats' 
                    ? 'bg-cyan-500 text-slate-950 shadow-[0_0_10px_rgba(0,240,255,0.4)]' 
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                ATS Clean View
              </button>
              <button
                onClick={() => setViewMode('pdf')}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                  viewMode === 'pdf' 
                    ? 'bg-cyan-500 text-slate-950 shadow-[0_0_10px_rgba(0,240,255,0.4)]' 
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                PDF View
              </button>
            </div>

            {/* Direct Download Button */}
            <a
              href="/Vardhan_Yerramsetti_Resume.pdf"
              download="Vardhan_Yerramsetti_Resume.pdf"
              onClick={() => Sound.tick()}
              className="px-3.5 py-2 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-xs flex items-center gap-1.5 shadow-[0_0_15px_rgba(0,240,255,0.3)] transition-all"
            >
              <Download className="w-4 h-4" />
              <span className="hidden sm:inline">Download PDF</span>
            </a>

            {/* Close Button */}
            <button
              onClick={() => {
                Sound.tick();
                onClose();
              }}
              className="p-2 rounded-xl bg-slate-800 text-slate-300 hover:text-white hover:bg-slate-700 transition-all ml-1"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Modal Body */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-8 bg-slate-950/70">
          {viewMode === 'pdf' ? (
            <div className="w-full h-full min-h-[600px] rounded-2xl overflow-hidden border border-white/10 bg-black">
              <iframe
                src="/Vardhan_Yerramsetti_Resume.pdf#toolbar=1"
                className="w-full h-full min-h-[700px]"
                title="Vardhan Yerramsetti Resume PDF"
              />
            </div>
          ) : (
            <div className="max-w-4xl mx-auto bg-[#0a0f24] p-6 sm:p-10 rounded-2xl border border-white/10 shadow-2xl space-y-8 text-slate-200">
              
              {/* Resume Header */}
              <div className="border-b border-cyan-500/30 pb-6 text-center space-y-2">
                <h1 className="font-display font-black text-2xl sm:text-3xl text-white tracking-wide uppercase">
                  Vardhan Yerramsetti
                </h1>
                <div className="text-cyan-400 font-semibold text-xs sm:text-sm">
                  Python Full Stack Developer • AWS Certified Cloud Practitioner • Data Science
                </div>
                <div className="flex flex-wrap items-center justify-center gap-3 text-xs font-mono text-slate-300 pt-1">
                  <span>📞 +91 7386033417</span>
                  <span>•</span>
                  <span>✉️ vardhanyerramsetti71@gmail.com</span>
                  <span>•</span>
                  <span>📍 Andhra Pradesh, India</span>
                  <span>•</span>
                  <a href="https://github.com/vardhanyerramsetti71beep" target="_blank" rel="noreferrer" className="text-cyan-400 hover:underline">
                    github.com/vardhanyerramsetti71beep
                  </a>
                  <span>•</span>
                  <a href="https://www.linkedin.com/in/vardhan-yerramsetti/" target="_blank" rel="noreferrer" className="text-cyan-400 hover:underline">
                    linkedin.com/in/vardhan-yerramsetti
                  </a>
                </div>
              </div>

              {/* Summary */}
              <div className="space-y-2">
                <h2 className="text-xs font-mono font-bold uppercase tracking-wider text-cyan-300 border-b border-slate-800 pb-1">
                  Professional Summary
                </h2>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  Results-driven <strong>Python Full Stack Developer</strong> and <strong>AWS Certified Cloud Practitioner</strong> with foundational expertise in Data Science, Machine Learning, and cloud microservices. Proficient in architecting high-performance backend APIs using Flask and FastAPI, implementing mathematical and machine learning models (BG/NBD, Gamma-Gamma, OpenCV), engineering normalized relational database schemas with <strong>-25% query latency optimizations</strong>, and crafting reactive frontend applications in React.js and Next.js. Backed by 8 production deployments across AWS and Vercel.
                </p>
              </div>

              {/* Technical Skills */}
              <div className="space-y-2">
                <h2 className="text-xs font-mono font-bold uppercase tracking-wider text-cyan-300 border-b border-slate-800 pb-1">
                  Technical Core Competencies
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-300">
                  <div><strong>Languages:</strong> Python, JavaScript (ES6+), SQL, C++, HTML5, CSS3</div>
                  <div><strong>Cloud &amp; DevOps:</strong> AWS (EC2, S3, RDS, Lambda, IAM), Vercel, Docker, Git/GitHub</div>
                  <div><strong>Backend &amp; APIs:</strong> Flask, FastAPI, Django, RESTful APIs, Serverless, JWT Auth</div>
                  <div><strong>Databases:</strong> MySQL, PyMySQL, Relational 3NF, Compound B-Tree Indexing (-25%)</div>
                  <div><strong>Data Science &amp; ML:</strong> OpenCV, Scikit-learn, BG/NBD, Gamma-Gamma, Plotly 3D WebGL</div>
                  <div><strong>Frontend:</strong> React.js 19, Next.js 14, Tailwind CSS, DOM Manipulation, SPAs</div>
                </div>
              </div>

              {/* Featured Projects */}
              <div className="space-y-4">
                <h2 className="text-xs font-mono font-bold uppercase tracking-wider text-cyan-300 border-b border-slate-800 pb-1">
                  Key Technical Projects (Verified Deployments)
                </h2>

                {PROJECTS.slice(0, 4).map((p) => (
                  <div key={p.id} className="p-4 rounded-xl bg-slate-900/60 border border-slate-800 space-y-2">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                      <span className="font-bold text-white text-sm">{p.title}</span>
                      <span className="text-[11px] font-mono text-cyan-400">{p.tags.join(', ')}</span>
                    </div>
                    <div className="text-xs text-slate-400 font-mono">
                      Live App: <a href={p.live} target="_blank" rel="noreferrer" className="text-cyan-300 hover:underline">{p.live}</a> • 
                      GitHub: <a href={p.github} target="_blank" rel="noreferrer" className="text-cyan-300 hover:underline">{p.github}</a>
                    </div>
                    <p className="text-xs text-slate-300 leading-relaxed">
                      {p.solution}
                    </p>
                  </div>
                ))}
              </div>

              {/* Professional Experience */}
              <div className="space-y-4">
                <h2 className="text-xs font-mono font-bold uppercase tracking-wider text-cyan-300 border-b border-slate-800 pb-1">
                  Professional Experience
                </h2>

                {EXPERIENCE.map((exp) => (
                  <div key={exp.id} className="p-4 rounded-xl bg-slate-900/60 border border-slate-800 space-y-1.5">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                      <span className="font-bold text-white text-sm">{exp.role} — {exp.company}</span>
                      <span className="text-[11px] font-mono text-slate-400">{exp.period}</span>
                    </div>
                    <ul className="list-disc list-inside text-xs text-slate-300 space-y-1">
                      {exp.highlights.map((h, i) => (
                        <li key={i}>{h}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>

              {/* Education & Certifications */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-2">
                <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800 space-y-1">
                  <h3 className="font-bold text-white text-sm">Education</h3>
                  <div className="text-xs text-cyan-300 font-semibold">{EDUCATION.degree} in {EDUCATION.major}</div>
                  <div className="text-xs text-slate-300">{EDUCATION.institution}</div>
                  <div className="text-xs text-slate-400 font-mono">Period: {EDUCATION.period} | CGPA: {EDUCATION.cgpa}</div>
                </div>

                <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800 space-y-1">
                  <h3 className="font-bold text-white text-sm">Key Certifications</h3>
                  <ul className="text-xs text-slate-300 space-y-1">
                    {CERTIFICATIONS.map(c => (
                      <li key={c.id} className="flex items-center gap-1.5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                        <span><strong>{c.title}</strong> — {c.issuer} ({c.year})</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

            </div>
          )}
        </div>

      </div>
    </div>
  );
}
