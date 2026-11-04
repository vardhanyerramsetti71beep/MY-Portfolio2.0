// src/components/QuantumGatewaySection.jsx
import React from 'react';
import { freefallEngine, Sound } from '../engine/freefallEngine';

export default function QuantumGatewaySection() {
  const handleCopyEmail = () => {
    const email = 'vardhanyerramsetti71@gmail.com';
    navigator.clipboard.writeText(email).then(() => {
      freefallEngine.showToast(`Email copied: ${email}`);
      Sound.tick();
    }).catch(() => {
      freefallEngine.showToast(`Email: ${email}`);
    });
  };

  return (
    <section className="portal" id="portal" aria-label="Get in touch">
      <div className="portal-stage">
        <canvas id="portalCanvas" aria-hidden="true"></canvas>
        <div className="tunnel" aria-hidden="true">
          <div className="tunnel-cam"></div>
        </div>
        <div className="portal-shade" aria-hidden="true"></div>

        <p className="portal-line" data-w=".02,.2">Every project starts as a messy problem.</p>
        <p className="portal-line" data-w=".22,.44">Good engineering turns it into something reliable.</p>
        <p className="portal-line" data-w=".48,.72">Let&apos;s build the next one together.</p>

        <div className="portal-cta">
          <h2>Hiring for a Python or cloud role? Let&apos;s talk.</h2>
          <div className="portal-actions">
            <a 
              className="btn btn--solid magnet" 
              href="mailto:vardhanyerramsetti71@gmail.com?subject=Engineering%20Opportunity" 
              data-cursor="Email"
            >
              Email Me
            </a>
            <button 
              className="btn magnet" 
              id="copyEmail" 
              onClick={handleCopyEmail}
              data-cursor="Copy"
            >
              Copy Email
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
