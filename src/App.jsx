// src/App.jsx
// Vardhan Yerramsetti — Freefall 2.0 Cinematic Portfolio
import React, { useState, useEffect } from 'react';
import { freefallEngine, Sound } from './engine/freefallEngine';
import SystemLoader from './components/SystemLoader';
import Navbar from './components/Navbar';
import SystemIndexModal from './components/SystemIndexModal';
import TelemetryHUD from './components/TelemetryHUD';
import CustomCursor from './components/CustomCursor';
import ToastNotification from './components/ToastNotification';
import FreefallStage from './components/FreefallStage';
import ArchitecturesSection from './components/ArchitecturesSection';
import ManifestoSection from './components/ManifestoSection';
import TechMarquee from './components/TechMarquee';
import CapabilitiesSection from './components/CapabilitiesSection';
import ProductionDeploymentsReel from './components/ProductionDeploymentsReel';
import QuantumGatewaySection from './components/QuantumGatewaySection';
import TerminalUplinkSection from './components/TerminalUplinkSection';
import ResumeViewerModal from './components/ResumeViewerModal';
import { FileText, MessageSquare } from 'lucide-react';

export default function App() {
  const [isResumeOpen, setIsResumeOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    freefallEngine.init();

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        setIsMenuOpen(false);
        setIsResumeOpen(false);
      }
      if ((e.key === 'm' || e.key === 'M') && !e.target.closest('input, textarea')) {
        Sound.toggle();
      }
    };
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      freefallEngine.destroy();
    };
  }, []);

  return (
    <div className="relative min-h-screen bg-[#050608] text-slate-100 font-display">
      
      {/* 1. System Boot Loader with Sound Activation */}
      <SystemLoader />

      {/* 2. Top Navigation Chrome */}
      <Navbar 
        onToggleMenu={() => setIsMenuOpen(prev => !prev)}
        onOpenResume={() => setIsResumeOpen(true)}
      />

      {/* 3. Fullscreen System Index Menu */}
      <SystemIndexModal 
        isOpen={isMenuOpen} 
        onClose={() => setIsMenuOpen(false)} 
      />

      {/* 4. Heads-Up Display (Telemetry HUD) */}
      <TelemetryHUD />

      {/* 5. Custom Trailing Cursor & Grain Texture */}
      <CustomCursor />

      {/* 6. Floating Clipboard Toast Notification */}
      <ToastNotification />

      {/* 7. Main Cinematic Narrative Stream */}
      <main id="top">
        {/* Chapter 1: The Descent (Kinetic 3D Typography & Warp Field) */}
        <FreefallStage />

        {/* Chapter 2: Selected Flagship Architectures (Stacking 3D Screens) */}
        <ArchitecturesSection />

        {/* Chapter 3: Engineering Philosophy & Manifesto */}
        <ManifestoSection />

        {/* Core Technology Matrix Infinite Marquee */}
        <TechMarquee />

        {/* Chapter 4: Capabilities & Recruiter Hub */}
        <CapabilitiesSection onOpenResume={() => setIsResumeOpen(true)} />

        {/* Chapter 5: 8 Verified Production Deployments Reel */}
        <ProductionDeploymentsReel />

        {/* Chapter 6: The Quantum Gateway Tunnel */}
        <QuantumGatewaySection />

        {/* Chapter 7: Terminal Uplink & Live Clocks */}
        <TerminalUplinkSection />
      </main>

      {/* Full ATS & PDF Resume Vault Modal */}
      <ResumeViewerModal 
        isOpen={isResumeOpen}
        onClose={() => setIsResumeOpen(false)}
      />

      {/* Persistent Quick Contact Floating Dock */}
      <aside 
        aria-label="Recruiter Quick Dock"
        className="fixed bottom-5 right-5 z-40 hidden sm:flex items-center gap-2.5 p-1.5 rounded-2xl bg-[#090d19]/90 border border-cyan-500/40 backdrop-blur-xl shadow-[0_0_30px_rgba(0,240,255,0.25)]"
      >
        <button
          onClick={() => {
            Sound.chime();
            setIsResumeOpen(true);
          }}
          className="px-3.5 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-mono font-semibold flex items-center gap-1.5 transition-all"
          data-cursor="Resume"
        >
          <FileText className="w-3.5 h-3.5 text-cyan-400" />
          <span>ATS Resume</span>
        </button>

        <a
          href="https://wa.me/917386033417?text=Hi%20Vardhan,%20I%20reviewed%20your%20Freefall%20Cinematic%20Portfolio%20and%20would%20like%20to%20connect!"
          target="_blank"
          rel="noreferrer"
          onClick={() => Sound.tick()}
          className="px-4 py-2 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-400 hover:to-teal-500 text-slate-950 font-mono font-bold text-xs flex items-center gap-1.5 shadow-[0_0_15px_rgba(16,185,129,0.3)] transition-all hover:scale-105 active:scale-95"
          data-cursor="WhatsApp"
        >
          <MessageSquare className="w-3.5 h-3.5" />
          <span>WhatsApp Uplink</span>
        </a>
      </aside>

    </div>
  );
}
