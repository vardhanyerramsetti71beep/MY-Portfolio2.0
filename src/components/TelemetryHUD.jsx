// src/components/TelemetryHUD.jsx
import React from 'react';

export default function TelemetryHUD() {
  return (
    <div className="hud" aria-hidden="true">
      <div className="hud-chapter">
        <span className="hud-num">01</span>
        <span className="hud-sep">//</span>
        <span className="hud-name">Intro</span>
      </div>
      <div className="hud-bar">
        <i></i>
      </div>
      <div className="hud-read" id="hudTelemetry">
        SCROLL TO EXPLORE
      </div>
    </div>
  );
}
