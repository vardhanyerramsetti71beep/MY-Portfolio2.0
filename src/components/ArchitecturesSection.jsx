// src/components/ArchitecturesSection.jsx
import React from 'react';
import { ExternalLink, Github } from 'lucide-react';

export default function ArchitecturesSection() {
  const cases = [
    {
      id: 'task-cloud-portal',
      num: '01',
      type: 'Cloud Architecture & Microservices',
      title: 'Task Cloud Portal',
      marquee: 'Task Cloud Portal  Task Cloud Portal  Task Cloud Portal  ',
      ringText: 'TASK CLOUD PORTAL — HIGH-THROUGHPUT FLASK & MYSQL ARCHITECTURE — -25% QUERY LATENCY — AWS S3 / EC2 — 2026 —',
      ringId: 'ring0',
      img: '/assets/projects/nexus-core.svg',
      desc: 'A multi-tenant cloud asset and task management portal. Engineered stateless Python Flask microservices and normalized 3NF MySQL schemas with compound B-Tree indexing, reducing query latency from 18.4ms to 13.8ms (-25%).',
      stack: 'Python, Flask REST API, React.js, MySQL, AWS EC2/S3, Docker',
      role: 'Cloud Systems & Database Architect',
      metric: '-25% Query Latency (18.4ms → 13.8ms)',
      year: '2026',
      live: 'https://task-cloud-portal.vercel.app/',
      github: 'https://github.com/vardhanyerramsetti71beep/task-cloud-portal',
      color: 'var(--cyan)',
      mark: 'SYS_01 // CLOUD'
    },
    {
      id: 'music-recommender',
      num: '02',
      type: 'Computer Vision & Machine Learning',
      title: 'Music Emotion Recommender',
      marquee: 'Music Emotion Recommender  Music Emotion Recommender  ',
      ringText: 'MUSIC EMOTION RECOMMENDER — OPENCV COMPUTER VISION — SCIKIT-LEARN >90% ACCURACY — LIVE WEBCAM INPUT — 2026 —',
      ringId: 'ring1',
      img: '/assets/projects/prism-ai.svg',
      desc: 'Recommends music from your facial expression. An OpenCV pipeline reads facial landmarks from a live webcam stream, a Scikit-learn model classifies the emotion with >90% accuracy, and a Flask REST API serves a matching playlist.',
      stack: 'Python, OpenCV, Flask REST API, Scikit-learn, Web Audio API',
      role: 'AI & Computer Vision Engineer',
      metric: '>90% Classification Accuracy',
      year: '2026',
      live: 'https://music-recommending.vercel.app/',
      github: 'https://github.com/vardhanyerramsetti71beep/music-recommending',
      color: 'var(--molten)',
      mark: 'SYS_02 // VISION'
    },
    {
      id: 'omnipulse-clv',
      num: '03',
      type: 'Predictive Analytics & Microservices',
      title: 'OmniPulse CLV Engine',
      marquee: 'OmniPulse CLV Engine  OmniPulse CLV Engine  ',
      ringText: 'OMNIPULSE RETENTION ENGINE — BG/NBD & GAMMA-GAMMA MATHEMATICAL MODELS — 12-MONTH FORWARD PREDICTION — 2026 —',
      ringId: 'ring2',
      img: '/assets/projects/synapse-db.svg',
      desc: 'Enterprise customer lifetime value and churn risk forecast engine. Implemented BG/NBD probabilistic purchase transaction models and Gamma-Gamma monetary distribution formulas via FastAPI to project 12-month forward customer equity.',
      stack: 'FastAPI, Scikit-learn, BG/NBD, Gamma-Gamma, Python',
      role: 'Predictive Analytics & Backend Architect',
      metric: 'Sub-15ms Predictions • 12-Month Lifetime Value',
      year: '2026',
      live: 'https://omni-pulse-enterprise-clv-churn-int-teal.vercel.app/',
      github: 'https://github.com/vardhanyerramsetti71beep/OmniPulse-Enterprise-CLV-Churn-Intelligence-Engine',
      color: 'var(--iris)',
      mark: 'SYS_03 // PREDICTIVE'
    },
    {
      id: 'svt-tailors',
      num: '04',
      type: 'Serverless Pipeline & Logistics',
      title: 'S.V.T. Atelier Tracker',
      marquee: 'S.V.T. Atelier Tracker  S.V.T. Atelier Tracker  ',
      ringText: 'S.V.T. BESPOKE ATELIER — SERVERLESS PYTHON & PYMYSQL PIPELINE — 5-STAGE WORKSHOP TRACKER — 2026 —',
      ringId: 'ring3',
      img: '/assets/projects/aether-mesh.svg',
      desc: 'Commercial bespoke atelier management platform and live garment status tracker. Built Python serverless endpoints over a relational MySQL database tracking orders from logged fabric cutting to final delivery.',
      stack: 'Python Serverless, MySQL (PyMySQL), Tailwind CSS, Vercel',
      role: 'Full Stack Lead Engineer',
      metric: '5-Stage Pipeline Tracker • Sub-35ms DB Queries',
      year: '2026',
      live: 'https://svt-tailors.vercel.app/',
      github: 'https://github.com/vardhanyerramsetti71beep/S.V.T.Tailors',
      color: 'var(--emerald)',
      mark: 'SYS_04 // WORKFLOW'
    }
  ];

  return (
    <section className="work" id="work" aria-label="Featured Projects">
      <div className="work-stage">
        {cases.map((c, idx) => (
          <article 
            key={c.id} 
            className="screen" 
            style={{ '--c': c.color }}
          >
            <header className="screen-bar">
              <span>Project {c.num} // {c.type}</span>
              <span>{c.title}</span>
              <span>{idx + 1} of {cases.length}</span>
            </header>

            <div className="screen-title" aria-hidden="true">
              <span>{c.marquee}</span>
            </div>

            <div className="disc">
              <svg className="disc-ring" viewBox="0 0 200 200" aria-hidden="true">
                <defs>
                  <path id={c.ringId} d="M100,100 m-88,0 a88,88 0 1,1 176,0 a88,88 0 1,1 -176,0" />
                </defs>
                <text>
                  <textPath href={`#${c.ringId}`} textLength="548" lengthAdjust="spacing">
                    {c.ringText}
                  </textPath>
                </text>
              </svg>
              <div className="disc-face">
                <img src={c.img} alt={`${c.title} architectural schematic`} />
              </div>
            </div>

            <div className="screen-meta">
              <h3>{c.title}</h3>
              <p>{c.desc}</p>
              <dl>
                <dt>Stack</dt><dd>{c.stack}</dd>
                <dt>Role</dt><dd>{c.role}</dd>
                <dt>Metric</dt><dd>{c.metric}</dd>
                <dt>Year</dt><dd>{c.year}</dd>
              </dl>
            </div>

            <div className="screen-actions">
              <a 
                className="screen-cta magnet" 
                href={c.live} 
                target="_blank" 
                rel="noreferrer"
                data-cursor="Launch"
              >
                <span>Live Demo</span>
                <ExternalLink className="w-3.5 h-3.5 inline ml-1.5" />
              </a>

              <a 
                className="screen-github magnet" 
                href={c.github} 
                target="_blank" 
                rel="noreferrer"
                data-cursor="Source"
              >
                <Github className="w-3.5 h-3.5 inline mr-1.5" />
                <span>Code</span>
              </a>
            </div>

            <span className="screen-mark" aria-hidden="true">{c.mark}</span>
          </article>
        ))}
      </div>
    </section>
  );
}
