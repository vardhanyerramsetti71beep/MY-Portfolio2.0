// src/components/FreefallStage.jsx
import React from 'react';

export default function FreefallStage() {
  const letters = ['V', 'A', 'R', 'D', 'H', 'A', 'N'];
  const heroNameChars = [
    { char: 'V' }, { char: 'A' }, { char: 'R' }, { char: 'D' }, { char: 'H' }, { char: 'A' }, { char: 'N' },
    { char: ' ', sp: true },
    { char: 'Y' }, { char: 'E' }, { char: 'R' }, { char: 'R' }, { char: 'A' }, { char: 'M' }, { char: 'S' }, { char: 'E' }, { char: 'T' }, { char: 'T' }, { char: 'I' },
  ];

  return (
    <section className="story" id="story" aria-label="System Initialization Journey">
      <div className="stage">
        <div className="stage-inner">
          <canvas className="ambient" id="ambient" aria-hidden="true"></canvas>

          {/* 3D Background World */}
          <div className="world world--back" aria-hidden="true">
            <div className="cam"></div>
          </div>

          <div className="index-name" aria-hidden="true">VARDHAN YERRAMSETTI</div>

          {/* Center Descent Canvas */}
          <div className="film" id="film">
            <canvas id="filmCanvas" aria-label="3D neural particle stream descending through deep computational space"></canvas>
          </div>
          <div className="vignette" aria-hidden="true"></div>

          {/* 3D Floating Index Tiles */}
          <div className="index-tiles" id="tiles">
            <button className="tile" data-go="0" data-cursor="Inspect" data-x="-.30" data-y="-.25" data-s=".24" data-ar="1.2" data-z="-120" data-d="0">
              <img src="/assets/tiles/tile-1.svg" alt="Task Cloud Portal Architecture" />
              <span className="tile-cap">Task Cloud // -25% Latency</span>
            </button>
            <button className="tile" data-go="1" data-cursor="Inspect" data-x=".30" data-y="-.26" data-s=".18" data-ar=".82" data-z="-60" data-d=".08">
              <img src="/assets/tiles/tile-2.svg" alt="Music Emotion Computer Vision" />
              <span className="tile-cap">Music OpenCV // &lt;85ms Stream</span>
            </button>
            <button className="tile" data-go="2" data-cursor="Inspect" data-x="-.33" data-y=".18" data-s=".12" data-ar="1" data-z="40" data-d=".18">
              <img src="/assets/tiles/tile-3.svg" alt="OmniPulse CLV Engine" />
              <span className="tile-cap">OmniPulse // CLV Retention</span>
            </button>
            <button className="tile" data-go="3" data-cursor="Inspect" data-x=".31" data-y=".19" data-s=".19" data-ar="1" data-z="-20" data-d=".12">
              <img src="/assets/tiles/tile-4.svg" alt="S.V.T. Atelier Tracker" />
              <span className="tile-cap">S.V.T. Tailors // 5-Stage Tracker</span>
            </button>
            <button className="tile tile--gen gen-sun" data-go="about" data-cursor="Inspect" data-x="-.07" data-y="-.43" data-s=".11" data-ar="1.3" data-z="-260" data-d=".26">
              <span className="tile-cap">Philosophy // Deterministic Scale</span>
            </button>
            <button className="tile" data-go="0" data-cursor="Inspect" data-x=".06" data-y=".43" data-s=".13" data-ar="1" data-z="-200" data-d=".3">
              <img src="/assets/tiles/tile-5.svg" alt="AWS Cloud Infrastructure" />
              <span className="tile-cap">AWS Cloud // Certified EC2 &amp; S3</span>
            </button>
            <button className="tile is-mono" data-go="1" data-cursor="Inspect" data-x="-.46" data-y="-.02" data-s=".15" data-ar=".75" data-z="-320" data-d=".22">
              <img src="/assets/tiles/tile-6.svg" alt="MySQL Schema Optimization" />
              <span className="tile-cap">MySQL // 3NF B-Tree Index</span>
            </button>
            <button className="tile" data-go="2" data-cursor="Inspect" data-x=".47" data-y="-.03" data-s=".13" data-ar=".7" data-z="-280" data-d=".34">
              <img src="/assets/tiles/tile-7.svg" alt="FastAPI Microservices" />
              <span className="tile-cap">FastAPI // Sub-5ms Endpoints</span>
            </button>
            <button className="tile tile--gen gen-type" data-go="services" data-cursor="Inspect" data-x="-.20" data-y=".41" data-s=".10" data-ar=".8" data-z="-160" data-d=".38">
              <b>AI//CLOUD</b><span className="tile-cap">Recruiter Hub</span>
            </button>
            <button className="tile is-iris" data-go="deployments" data-cursor="Inspect" data-x=".19" data-y="-.42" data-s=".10" data-ar="1" data-z="-220" data-d=".42">
              <img src="/assets/tiles/tile-8.svg" alt="8 Production Deployments" />
              <span className="tile-cap">8 Deployments // Verified Live</span>
            </button>
          </div>

          {/* 3D Foreground & UI */}
          <div className="world world--front" aria-hidden="true"><div className="cam"></div></div>
          <div className="world world--ui"><div className="cam"></div></div>

          {/* Emergence Typography */}
          <div className="rise" aria-hidden="true">
            {letters.map((l, i) => (
              <span key={i}>{l}</span>
            ))}
          </div>

          {/* Shockwave Flare */}
          <div className="shock" aria-hidden="true"></div>

          {/* Hero Section */}
          <div className="hero" id="hero">
            <p className="hero-intro">
              Python Full Stack Developer &amp; AWS Certified Cloud Practitioner.<br />
              Architecting high-throughput microservices, MySQL query speedups (-25% latency), and real-time biometric vision. Shipped 8 production platforms.
            </p>
            <h1 className="hero-name" aria-label="Vardhan Yerramsetti">
              {heroNameChars.map((item, idx) => (
                <span 
                  key={idx} 
                  className={`hn ${item.sp ? 'sp' : ''}`}
                  style={{ transitionDelay: `${0.1 + idx * 0.03}s` }}
                >
                  {item.char}
                </span>
              ))}
            </h1>
            <div className="hero-foot">
              <button className="hero-cue" data-jump="story:.2" data-cursor="Descend">
                <span>Scroll to initiate descent</span>
                <i></i>
              </button>
              <div className="hero-badge">
                <span className="badge-dot"></span>
                <span>KERNEL: 2026.4 &bull; AWS_CERT: ONLINE</span>
              </div>
              <button className="hero-skip" data-jump="work" data-cursor="Jump">
                Skip to architectures &rarr;
              </button>
            </div>
          </div>

          {/* Cut Flashes */}
          <div className="flash" aria-hidden="true"><b>CONVERGENCE</b></div>
          <div className="flash flash--ember" aria-hidden="true"></div>
        </div>
      </div>
    </section>
  );
}
