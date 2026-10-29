// src/components/QuantumGatewaySection.jsx
import React from 'react';
import { freefallEngine, Sound } from '../engine/freefallEngine';

export default function QuantumGatewaySection() {
  const handleCopyEmail = () => {
    const email = 'vardhanyerramsetti71@gmail.com';
    navigator.clipboard.writeText(email).then(() => {
      freefallEngine.showToast(`Terminal address copied: ${email}`);
      Sound.tick();
    }).catch(() => {
      freefallEngine.showToast(`Terminal address: ${email}`);
    });
  };

  return (
    <section className="portal" id="portal" aria-label="The Quantum Gateway">
      <div className="portal-stage">
        <canvas id="portalCanvas" aria-label="3D hyperspace warp tunnel accelerating through computational spacetime"></canvas>
        <div className="tunnel" aria-hidden="true">
          <div className="tunnel-cam"></div>
        </div>
        <div className="portal-shade" aria-hidden="true"></div>

        <p className="portal-line" data-w=".02,.2">Every complex challenge begins as raw entropy.</p>
        <p className="portal-line" data-w=".22,.44">The best systems compress chaos into deterministic order.</p>
        <p className="portal-line" data-w=".48,.72">This is where we build high-throughput scale.</p>

        <div className="portal-cta">
          <h2>Let&apos;s architect something that redefines what is possible.</h2>
          <div className="portal-actions">
            <a 
              className="btn btn--solid magnet" 
              href="mailto:vardhanyerramsetti71@gmail.com?subject=Engineering%20Opportunity" 
              data-cursor="Transmit"
            >
              Initiate Uplink
            </a>
            <button 
              className="btn magnet" 
              id="copyEmail" 
              onClick={handleCopyEmail}
              data-cursor="Copy"
            >
              Copy Terminal Address
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
