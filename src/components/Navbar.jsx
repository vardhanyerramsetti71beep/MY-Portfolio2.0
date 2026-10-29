// src/components/Navbar.jsx
import React, { useState } from 'react';
import { Sound } from '../engine/freefallEngine';
import { FileText } from 'lucide-react';

export default function Navbar({ onToggleMenu, onOpenResume }) {
  const [isAudioOn, setIsAudioOn] = useState(false);

  const handleToggleSound = () => {
    const newState = Sound.toggle();
    setIsAudioOn(newState);
  };

  return (
    <header className="nav">
      <button 
        className="nav-menu" 
        id="menuBtn" 
        onClick={onToggleMenu}
        aria-expanded="false" 
        aria-controls="menu" 
        data-cursor="Menu"
      >
        <span className="menu-icon">
          <i></i>
          <i></i>
        </span>
        <span>System Index</span>
      </button>

      <a className="nav-mark" href="#top" data-jump="top" data-cursor="Ascend">
        Vardhan Yerramsetti® <em>systems &amp; full-stack architect</em>
      </a>

      <div className="nav-right">
        <div className="nav-visual-tag" id="visualModeTag" title="Hybrid Engine: Procedural Canvas + 3D Kinetic World">
          <span className="mode-dot"></span>
          <span className="mode-text">HYBRID GENERATIVE 3D</span>
        </div>

        <button 
          className="nav-sound" 
          id="soundBtn" 
          onClick={handleToggleSound}
          aria-pressed={isAudioOn} 
          data-cursor="Audio"
        >
          <i className="bars" aria-hidden="true">
            <b></b><b></b><b></b><b></b>
          </i>
          <span>{isAudioOn ? 'Sound on' : 'Sound off'}</span>
        </button>

        <button
          onClick={() => {
            Sound.chime();
            onOpenResume();
          }}
          className="btn-pill hidden sm:inline-flex items-center gap-1.5 bg-slate-900/60 border border-cyan-500/30 text-cyan-300 hover:bg-cyan-500 hover:text-black transition-all"
          data-cursor="Resume"
        >
          <FileText className="w-3.5 h-3.5" />
          <span>Resume Vault</span>
        </button>

        <a className="nav-talk btn-pill" href="#contact" data-jump="contact" data-cursor="Connect">
          Initiate Uplink
        </a>
      </div>
    </header>
  );
}
