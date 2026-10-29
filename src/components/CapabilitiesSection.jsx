// src/components/CapabilitiesSection.jsx
import React from 'react';
import { Award, Zap, Cloud, Brain, CheckCircle2, FileText, ArrowUpRight } from 'lucide-react';
import { Sound } from '../engine/freefallEngine';

export default function CapabilitiesSection({ onOpenResume }) {
  const capabilities = [
    {
      name: 'High-Throughput Python Microservices',
      desc: 'Stateless Flask and FastAPI asynchronous architectures, resilient error boundaries, and Docker containerized services.',
      img: '/assets/tiles/tile-1.svg',
    },
    {
      name: 'AWS Cloud Architecture & Security',
      desc: 'Officially certified AWS Cloud Practitioner. Secure EC2 compute provisioning, S3 asset lakes, and IAM least-privilege security perimeters.',
      img: '/assets/tiles/tile-5.svg',
    },
    {
      name: 'Relational Database Optimization (-25% Latency)',
      desc: 'Normalized MySQL 3NF schema architecture, compound B-Tree indexing, execution plan profiling, cutting query times by 25%.',
      img: '/assets/tiles/tile-6.svg',
    },
    {
      name: 'Applied Machine Learning & Computer Vision',
      desc: 'Real-time OpenCV facial landmark feature extraction, Scikit-learn >90% classification, and BG/NBD customer retention models under 85ms.',
      img: '/assets/tiles/tile-2.svg',
    },
    {
      name: 'High-Fidelity Full-Stack & Web Audio',
      desc: 'React.js, Next.js 14, Tailwind CSS design systems, Web Audio synthesizers, and buttery-smooth 60/120 FPS kinetic typography.',
      img: '/assets/tiles/tile-4.svg',
    },
  ];

  return (
    <section className="services" id="services" aria-label="Capabilities and Recruiter Hub">
      <h2 className="services-head">Core Architectural Capabilities // Specializations</h2>

      <ul className="svc-list">
        {capabilities.map((svc, idx) => (
          <li 
            key={idx} 
            className="svc" 
            data-img={svc.img} 
            data-cursor="Explore"
          >
            <a href="#contact" data-jump="contact">
              <span className="svc-name">{svc.name}</span>
              <span className="svc-desc">{svc.desc}</span>
            </a>
          </li>
        ))}
      </ul>

      {/* Floating preview image following the cursor */}
      <div className="svc-preview" aria-hidden="true">
        <img alt="Specialization Schematic" src="/assets/tiles/tile-1.svg" />
      </div>

      {/* Recruiter Decision Matrix Card */}
      <div className="mt-20 p-8 sm:p-12 rounded-2xl bg-[#080d1a] border border-cyan-500/20 shadow-[0_20px_80px_rgba(0,242,255,0.08)] relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-500/5 rounded-full blur-[100px] pointer-events-none" />

        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8 mb-8 pb-8 border-b border-slate-800">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/60 border border-cyan-400/40 text-cyan-300 text-xs font-mono tracking-wider mb-3">
              <Award className="w-3.5 h-3.5" />
              <span>RECRUITER BRIEFING // IMMEDIATE PRODUCTIVITY</span>
            </div>
            <h3 className="font-display font-black text-2xl sm:text-3xl text-white">
              Why Hire Vardhan on Day 1?
            </h3>
            <p className="text-slate-400 text-sm sm:text-base mt-1 max-w-xl">
              Zero ramp-up friction. Backed by 8 production deployments, an official AWS certification, and proven query performance enhancements.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-4">
            <button
              onClick={() => {
                Sound.chime();
                onOpenResume();
              }}
              className="btn btn--solid"
              data-cursor="Resume"
            >
              <FileText className="w-4 h-4 mr-2" />
              <span>Open ATS Resume Vault</span>
            </button>
            <a
              href="https://wa.me/917386033417?text=Hi%20Vardhan,%20I%20reviewed%20your%20Freefall%20Cinematic%20Portfolio%20and%20would%20love%20to%20discuss%20an%20engineering%20role!"
              target="_blank"
              rel="noreferrer"
              className="btn"
              data-cursor="WhatsApp"
            >
              <span>Instant WhatsApp</span>
              <ArrowUpRight className="w-4 h-4 ml-1" />
            </a>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="p-5 rounded-xl bg-slate-900/50 border border-slate-800/80">
            <div className="w-8 h-8 rounded-lg bg-cyan-500/10 flex items-center justify-center text-cyan-400 mb-3">
              <Zap className="w-4 h-4" />
            </div>
            <h4 className="font-mono text-xs font-bold text-slate-200 uppercase tracking-wider mb-1">
              8 Shipped Platforms
            </h4>
            <p className="text-slate-400 text-xs leading-relaxed">
              Full-stack architectures live on Vercel and AWS with public GitHub repositories and clean Git histories.
            </p>
          </div>

          <div className="p-5 rounded-xl bg-slate-900/50 border border-slate-800/80">
            <div className="w-8 h-8 rounded-lg bg-amber-500/10 flex items-center justify-center text-amber-400 mb-3">
              <Cloud className="w-4 h-4" />
            </div>
            <h4 className="font-mono text-xs font-bold text-slate-200 uppercase tracking-wider mb-1">
              AWS Certified
            </h4>
            <p className="text-slate-400 text-xs leading-relaxed">
              Validated AWS Cloud Practitioner with solid grounding in EC2, S3, IAM security, and serverless architectures.
            </p>
          </div>

          <div className="p-5 rounded-xl bg-slate-900/50 border border-slate-800/80">
            <div className="w-8 h-8 rounded-lg bg-emerald-500/10 flex items-center justify-center text-emerald-400 mb-3">
              <CheckCircle2 className="w-4 h-4" />
            </div>
            <h4 className="font-mono text-xs font-bold text-slate-200 uppercase tracking-wider mb-1">
              -25% Query Latency
            </h4>
            <p className="text-slate-400 text-xs leading-relaxed">
              Restructured normalized 3NF schemas with compound B-Tree indexes, dropping query latency from 18.4ms to 13.8ms.
            </p>
          </div>

          <div className="p-5 rounded-xl bg-slate-900/50 border border-slate-800/80">
            <div className="w-8 h-8 rounded-lg bg-indigo-500/10 flex items-center justify-center text-indigo-400 mb-3">
              <Brain className="w-4 h-4" />
            </div>
            <h4 className="font-mono text-xs font-bold text-slate-200 uppercase tracking-wider mb-1">
              Applied Machine Learning
            </h4>
            <p className="text-slate-400 text-xs leading-relaxed">
              OpenCV biometric facial classification (&gt;90% accuracy) and BG/NBD probabilistic churn models streaming under 85ms.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
