// src/components/SystemLoader.jsx
import React, { useEffect, useState } from 'react';
import { freefallEngine } from '../engine/freefallEngine';

export default function SystemLoader({ onEnter }) {
  const [progress, setProgress] = useState(0);
  const [statusMsg, setStatusMsg] = useState('INITIALIZING NEURAL RUNTIME');
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    let current = 0;
    const steps = [
      [15, 'INITIALIZING NEURAL RUNTIME'],
      [45, 'ALLOCATING VECTOR BUFFER & MYSQL SCHEMAS'],
      [75, 'CALIBRATING EVENT LOOP & AWS SERVICES'],
      [100, 'SYSTEM NOMINAL // READY'],
    ];

    const timer = setInterval(() => {
      if (current < 100) {
        current += Math.floor(Math.random() * 8) + 6;
        if (current > 100) current = 100;
        setProgress(current);

        for (const [thresh, msg] of steps) {
          if (current >= thresh) setStatusMsg(msg);
        }

        if (current === 100) {
          clearInterval(timer);
          setIsReady(true);
        }
      }
    }, 60);

    return () => clearInterval(timer);
  }, []);

  const handleEnter = (withAudio) => {
    freefallEngine.enterSystem(withAudio);
    if (onEnter) onEnter(withAudio);
  };

  return (
    <div 
      className={`loader ${isReady ? 'is-ready' : ''}`} 
      id="loader" 
      role="dialog" 
      aria-label="System Initializing"
    >
      <div className="loader-shaft">
        <i id="loadFill" style={{ height: `${progress}%` }}></i>
      </div>
      <p className="loader-status">
        <span id="loadPct">{progress}</span>% <span className="loader-sep">//</span> <span id="loadMsg">{statusMsg}</span>
      </p>
      <div className="loader-actions">
        <button 
          className="btn btn--solid" 
          onClick={() => handleEnter(true)}
          data-cursor="Initialize"
        >
          Enter with Audio
        </button>
        <button 
          className="btn" 
          onClick={() => handleEnter(false)}
          data-cursor="Initialize"
        >
          Enter Muted
        </button>
      </div>
    </div>
  );
}
