// src/components/TerminalUplinkSection.jsx
import React from 'react';
import { freefallEngine } from '../engine/freefallEngine';

export default function TerminalUplinkSection() {
  return (
    <footer className="contact" id="contact">
      <p className="contact-kicker">
        Accepting high-impact Python full-stack engineering roles, AWS cloud architecture, and microservice partnerships.
      </p>

      <a 
        className="contact-mail magnet" 
        href="mailto:vardhanyerramsetti71@gmail.com" 
        data-cursor="Transmit"
      >
        vardhanyerramsetti71@gmail.com
      </a>

      <div className="contact-grid">
        <ul className="contact-social">
          <li>
            <a 
              href="https://github.com/vardhanyerramsetti71beep" 
              target="_blank" 
              rel="noopener noreferrer" 
              data-cursor="Open"
            >
              GitHub
            </a>
          </li>
          <li>
            <a 
              href="https://www.linkedin.com/in/vardhan-yerramsetti/" 
              target="_blank" 
              rel="noopener noreferrer" 
              data-cursor="Open"
            >
              LinkedIn
            </a>
          </li>
          <li>
            <a 
              href="https://wa.me/917386033417?text=Hi%20Vardhan,%20I%20reviewed%20your%20Freefall%20Cinematic%20Portfolio%20and%20would%20like%20to%20connect!" 
              target="_blank" 
              rel="noopener noreferrer" 
              data-cursor="Open"
            >
              WhatsApp (+91 7386033417)
            </a>
          </li>
          <li>
            <a 
              href="https://my-portfolio-vardhan-yerramsetti.vercel.app/" 
              target="_blank" 
              rel="noopener noreferrer" 
              data-cursor="Open"
            >
              Verified Deployments
            </a>
          </li>
        </ul>

        <p className="contact-time">
          Andhra Pradesh, India &bull; <span id="clock">--:--:-- IST</span><br />
          <span className="status-indicator">&bull;</span> Response window: &lt;12 hours
        </p>

        <button 
          className="contact-again magnet" 
          onClick={() => freefallEngine.scrollToSection('top')}
          data-cursor="Ascend"
        >
          Ascend Again &uarr;
        </button>
      </div>

      <div className="contact-bottom">
        <p className="contact-legal">
          &copy; 2026 Vardhan Yerramsetti. Engineered with gravity &amp; autonomous cloud compute.
        </p>
        <div className="contact-telemetry">
          <span>RUNTIME: STABLE</span>
          <span className="sep">&bull;</span>
          <span>AWS_CERT_ID: VALIDATED</span>
          <span className="sep">&bull;</span>
          <span>LATENCY: -25% OPTIMIZED</span>
          <span className="sep">&bull;</span>
          <span>SYS_HASH: #0x8E3A</span>
        </div>
      </div>
    </footer>
  );
}
