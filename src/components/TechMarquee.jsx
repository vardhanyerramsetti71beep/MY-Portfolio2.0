// src/components/TechMarquee.jsx
import React from 'react';

export default function TechMarquee() {
  return (
    <div className="marquee" aria-label="Core Technology Matrix">
      <div className="marquee-row" data-dir="-1">
        <div className="marquee-track">
          <span>Python 3.10+</span>
          <span className="o">FastAPI</span>
          <span>Flask REST APIs</span>
          <span className="o">AWS Certified</span>
          <span>MySQL 3NF</span>
          <span className="o">React.js</span>
          <span>Next.js 14</span>
          <span className="o">Docker</span>
          <span>OpenCV Vision</span>
          <span className="o">Scikit-learn</span>
          <span>TailwindCSS</span>
          <span className="o">Vercel Deployments</span>
        </div>
      </div>
      <div className="marquee-row" data-dir="1">
        <div className="marquee-track">
          <span className="o">-25% Latency Optimization</span>
          <span>Biometric Streaming</span>
          <span className="o">BG/NBD Probability</span>
          <span>Compound B-Tree Indexes</span>
          <span className="o">AWS EC2 &amp; S3</span>
          <span>Web Audio API</span>
          <span className="o">Plotly 3D Manifolds</span>
          <span>Microservices</span>
          <span className="o">JWT Stateless Auth</span>
          <span>8 Live Platforms</span>
        </div>
      </div>
    </div>
  );
}
