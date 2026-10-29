// src/engine/freefallEngine.js
// Vardhan Yerramsetti — Cinematic Freefall Hybrid Engine
// Procedural Generative 3D Canvas, Web Audio Synthesizer, 3D Kinetic Perspective World & Lenis.

import Lenis from 'lenis';

// ---------- Helpers & Math ----------
const clamp = (v, a = 0, b = 1) => (v < a ? a : v > b ? b : v);
const lerp = (a, b, t) => a + (b - a) * t;
const norm = (v, a, b) => clamp((v - a) / (b - a));
const sstep = (a, b, v) => { const t = norm(v, a, b); return t * t * (3 - 2 * t); };
const fract = (v) => v - Math.floor(v);
const easeOut = (t) => 1 - Math.pow(1 - t, 3);
const easeInOut = (t) => (t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2);
const bell = (v, a, peak, b) => (v <= a || v >= b ? 0 : v < peak ? sstep(a, peak, v) : 1 - sstep(peak, b, v));
const rng = (seed) => () => {
  seed = (seed + 0x6d2b79f5) | 0;
  let t = Math.imul(seed ^ (seed >>> 15), 1 | seed);
  t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
  return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
};
const f1 = (v) => v.toFixed(1);
const f2 = (v) => v.toFixed(2);

// ---------- Procedural Generative Cyber Engine (Descent) ----------
class GenerativeDescent {
  constructor(canvas) {
    this.c = canvas;
    this.ctx = canvas.getContext('2d');
    this.stars = [];
    this.initStars(450);
  }

  initStars(num) {
    this.stars = [];
    for (let i = 0; i < num; i++) {
      this.stars.push({
        x: (Math.random() - 0.5) * 1600,
        y: (Math.random() - 0.5) * 1600,
        z: Math.random() * 1200 + 10,
        sz: Math.random() * 2 + 0.8,
        hue: Math.random() > 0.4 ? 188 : (Math.random() > 0.5 ? 40 : 260),
      });
    }
  }

  render(p, time, vel, smx, smy) {
    const { c, ctx, stars } = this;
    if (!c || !ctx) return;
    const w = c.width, h = c.height;
    if (!w || !h) return;

    ctx.fillStyle = '#050608';
    ctx.fillRect(0, 0, w, h);

    const cx = w / 2 + smx * 60;
    const cy = h / 2 + smy * 60;

    // Speed increases with scroll and story descent
    const speed = (1.5 + Math.abs(vel) * 25 + (p < 0.47 ? p * 12 : 3));

    // 1. Procedural 3D Warp Field
    ctx.save();
    for (let i = 0; i < stars.length; i++) {
      const s = stars[i];
      s.z -= speed;
      if (s.z <= 2) {
        s.z = 1200;
        s.x = (Math.random() - 0.5) * 1600;
        s.y = (Math.random() - 0.5) * 1600;
      }

      const k = 400 / s.z;
      const px = s.x * k + cx;
      const py = s.y * k + cy;

      if (px >= 0 && px <= w && py >= 0 && py <= h) {
        const size = Math.max(0.6, (1 - s.z / 1200) * s.sz * (1 + Math.abs(vel) * 0.15));
        const alpha = clamp((1 - s.z / 1200) * 1.2, 0.1, 1);
        
        // Motion stretch
        const prevK = 400 / (s.z + speed * 1.8);
        const ppx = s.x * prevK + cx;
        const ppy = s.y * prevK + cy;

        ctx.strokeStyle = `hsla(${s.hue}, 90%, 70%, ${alpha})`;
        ctx.lineWidth = size;
        ctx.beginPath();
        ctx.moveTo(px, py);
        ctx.lineTo(ppx, ppy);
        ctx.stroke();
      }
    }
    ctx.restore();

    // 2. Volumetric Central Energy Shaft (The Descent Corridor)
    if (p < 0.47) {
      const shaftAlpha = (1 - p / 0.47) * 0.85;
      const grad = ctx.createRadialGradient(cx, cy, 20, cx, cy, Math.min(w, h) * 0.55);
      grad.addColorStop(0, `rgba(0, 242, 255, ${0.45 * shaftAlpha})`);
      grad.addColorStop(0.3, `rgba(56, 189, 248, ${0.2 * shaftAlpha})`);
      grad.addColorStop(0.7, `rgba(255, 178, 63, ${0.08 * shaftAlpha})`);
      grad.addColorStop(1, 'rgba(5, 6, 8, 0)');

      ctx.fillStyle = grad;
      ctx.fillRect(0, 0, w, h);

      // Core laser stream down center
      const beamW = Math.max(4, Math.sin(time * 0.005) * 2 + 8);
      const beamGrad = ctx.createLinearGradient(cx - beamW * 3, 0, cx + beamW * 3, 0);
      beamGrad.addColorStop(0, 'rgba(0, 242, 255, 0)');
      beamGrad.addColorStop(0.5, `rgba(255, 255, 255, ${0.7 * shaftAlpha})`);
      beamGrad.addColorStop(1, 'rgba(0, 242, 255, 0)');

      ctx.fillStyle = beamGrad;
      ctx.fillRect(cx - beamW * 4, 0, beamW * 8, h);
    }

    // 3. Convergence / Impact & Shockwave Ring (0.47 to 0.65)
    if (p >= 0.45 && p <= 0.68) {
      const shockP = norm(p, 0.47, 0.65);
      const radius = shockP * Math.max(w, h) * 0.8;
      const ringAlpha = (1 - shockP) * 0.95;

      ctx.save();
      ctx.beginPath();
      ctx.arc(cx, cy, radius, 0, Math.PI * 2);
      ctx.strokeStyle = `rgba(0, 242, 255, ${ringAlpha})`;
      ctx.lineWidth = Math.max(2, (1 - shockP) * 14);
      ctx.shadowColor = '#00f2ff';
      ctx.shadowBlur = 30;
      ctx.stroke();

      // Secondary fire ripple
      ctx.beginPath();
      ctx.arc(cx, cy, Math.max(0, radius - 20), 0, Math.PI * 2);
      ctx.strokeStyle = `rgba(255, 178, 63, ${ringAlpha * 0.7})`;
      ctx.lineWidth = 4;
      ctx.stroke();
      ctx.restore();
    }

    // 4. Digital Noise / Matrix Field (0.47 to 0.62)
    if (p >= 0.47 && p <= 0.62) {
      const noiseAlpha = bell(p, 0.47, 0.54, 0.62) * 0.45;
      ctx.fillStyle = `rgba(113, 126, 143, ${noiseAlpha})`;
      ctx.font = '10px monospace';
      const glyphs = '0123456789//PYTHON//AWS//FASTAPI//MYSQL//OPENCV//DOCKER//LATENCY-25%//';
      for (let j = 0; j < 35; j++) {
        const gx = Math.random() * w;
        const gy = Math.random() * h;
        const text = glyphs.substring(Math.floor(Math.random() * glyphs.length), Math.floor(Math.random() * glyphs.length) + 6);
        ctx.fillText(text, gx, gy);
      }
    }

    // 5. Emergence / Rising Luminous Core (0.65 to 0.90)
    if (p >= 0.65 && p <= 0.92) {
      const synP = norm(p, 0.65, 0.88);
      const coreAlpha = synP * (1 - sstep(0.85, 0.92, p));
      const rot = time * 0.0015;

      ctx.save();
      ctx.translate(cx, cy);
      ctx.rotate(rot);

      // Rotating geometric neural core
      const polyR = Math.min(w, h) * 0.18;
      ctx.strokeStyle = `rgba(0, 242, 255, ${coreAlpha * 0.8})`;
      ctx.lineWidth = 2;
      ctx.shadowColor = '#00f2ff';
      ctx.shadowBlur = 25;

      // Draw nested rotating rings & synapses
      for (let ring = 0; ring < 3; ring++) {
        ctx.beginPath();
        const r = polyR * (0.5 + ring * 0.28);
        for (let step = 0; step < 6; step++) {
          const angle = (step / 6) * Math.PI * 2 + (ring % 2 ? rot * 1.5 : -rot * 1.2);
          const nx = Math.cos(angle) * r;
          const ny = Math.sin(angle) * r;
          if (step === 0) ctx.moveTo(nx, ny);
          else ctx.lineTo(nx, ny);
        }
        ctx.closePath();
        ctx.stroke();
      }

      // Central pulse
      const pulseR = polyR * 0.35 * (1 + Math.sin(time * 0.008) * 0.1);
      const coreGrad = ctx.createRadialGradient(0, 0, 5, 0, 0, pulseR);
      coreGrad.addColorStop(0, `rgba(255, 255, 255, ${coreAlpha})`);
      coreGrad.addColorStop(0.5, `rgba(0, 242, 255, ${coreAlpha * 0.9})`);
      coreGrad.addColorStop(1, 'rgba(0, 242, 255, 0)');
      ctx.fillStyle = coreGrad;
      ctx.beginPath();
      ctx.arc(0, 0, pulseR, 0, Math.PI * 2);
      ctx.fill();

      ctx.restore();
    }
  }
}

// ---------- Procedural Quantum Gateway Tunnel ----------
class GenerativePortal {
  constructor(canvas) {
    this.c = canvas;
    this.ctx = canvas.getContext('2d');
  }

  render(p, time, vel, smx, smy) {
    const { c, ctx } = this;
    if (!c || !ctx) return;
    const w = c.width, h = c.height;
    if (!w || !h) return;

    ctx.fillStyle = '#020304';
    ctx.fillRect(0, 0, w, h);

    const cx = w / 2 + smx * 50;
    const cy = h * 0.44 + smy * 40;

    // Concentric neon perspective arches
    const rings = 14;
    const baseR = Math.min(w, h) * 0.06;
    const speed = (time * 0.001 + p * 3 + Math.abs(vel) * 2) % 1;

    ctx.save();
    for (let i = 0; i < rings; i++) {
      const normDist = (i / rings + speed) % 1;
      const depth = Math.pow(normDist, 2.5);
      const rx = baseR + depth * w * 0.65;
      const ry = (baseR + depth * h * 0.75) * 1.3;
      const alpha = Math.sin(normDist * Math.PI) * 0.85;

      ctx.strokeStyle = i % 2 === 0 ? `rgba(0, 242, 255, ${alpha})` : `rgba(255, 178, 63, ${alpha * 0.7})`;
      ctx.lineWidth = Math.max(1, depth * 4);
      ctx.shadowColor = i % 2 === 0 ? '#00f2ff' : '#ffb23f';
      ctx.shadowBlur = depth * 20;

      ctx.beginPath();
      ctx.ellipse(cx, cy, rx, ry, 0, Math.PI, 0, false);
      ctx.stroke();
    }

    // Event horizon core flare
    const coreR = Math.min(w, h) * 0.22 * (1 + Math.sin(time * 0.006) * 0.08);
    const grad = ctx.createRadialGradient(cx, cy, 10, cx, cy, coreR);
    grad.addColorStop(0, 'rgba(255, 255, 255, 0.95)');
    grad.addColorStop(0.3, 'rgba(0, 242, 255, 0.6)');
    grad.addColorStop(0.7, 'rgba(255, 90, 30, 0.25)');
    grad.addColorStop(1, 'rgba(2, 3, 4, 0)');

    ctx.fillStyle = grad;
    ctx.beginPath();
    ctx.arc(cx, cy, coreR, 0, Math.PI * 2);
    ctx.fill();
    ctx.restore();
  }
}

// ---------- Ambient Glow Canvas ----------
class Ambient {
  constructor(canvas) {
    this.c = canvas;
    this.ctx = canvas ? canvas.getContext('2d') : null;
  }
  resize(w, h) {
    if (!this.c) return;
    this.c.width = 72;
    this.c.height = Math.max(2, Math.round(72 * h / w));
  }
  draw(p) {
    if (!this.ctx || !this.c) return;
    const { ctx, c } = this;
    ctx.filter = 'blur(4px)';
    ctx.fillStyle = '#050608';
    ctx.fillRect(0, 0, c.width, c.height);

    const grad = ctx.createRadialGradient(c.width / 2, c.height / 2, 5, c.width / 2, c.height / 2, c.width / 2);
    if (p < 0.47) {
      grad.addColorStop(0, 'rgba(0, 242, 255, 0.45)');
      grad.addColorStop(1, 'rgba(5, 6, 8, 0)');
    } else if (p < 0.65) {
      grad.addColorStop(0, 'rgba(255, 178, 63, 0.5)');
      grad.addColorStop(1, 'rgba(5, 6, 8, 0)');
    } else {
      grad.addColorStop(0, 'rgba(140, 140, 255, 0.4)');
      grad.addColorStop(1, 'rgba(5, 6, 8, 0)');
    }
    ctx.fillStyle = grad;
    ctx.fillRect(0, 0, c.width, c.height);
    ctx.filter = 'none';
  }
}

// ---------- Procedural Web Audio Engine ----------
export const Sound = {
  ctx: null,
  on: false,
  init() {
    if (typeof window === 'undefined') return false;
    const AC = window.AudioContext || window.webkitAudioContext;
    if (!AC) return false;
    const c = (this.ctx = new AC());
    this.master = c.createGain();
    this.master.gain.value = 0;
    this.master.connect(c.destination);

    // Noise source for wind / velocity rush
    const len = c.sampleRate * 2;
    const buf = c.createBuffer(1, len, c.sampleRate);
    const d = buf.getChannelData(0);
    for (let i = 0; i < len; i++) d[i] = Math.random() * 2 - 1;
    this.noise = buf;

    const src = c.createBufferSource();
    src.buffer = buf;
    src.loop = true;
    this.windF = c.createBiquadFilter();
    this.windF.type = 'bandpass';
    this.windF.frequency.value = 400;
    this.windF.Q.value = 0.8;

    this.windG = c.createGain();
    this.windG.gain.value = 0;
    src.connect(this.windF).connect(this.windG).connect(this.master);
    src.start();

    // Atmospheric drone synth
    this.droneOsc = c.createOscillator();
    this.droneOsc.type = 'sawtooth';
    this.droneOsc.frequency.value = 55; // 55Hz (A1)

    this.droneLP = c.createBiquadFilter();
    this.droneLP.type = 'lowpass';
    this.droneLP.frequency.value = 240;

    this.droneG = c.createGain();
    this.droneG.gain.value = 0.12;
    this.droneOsc.connect(this.droneLP).connect(this.droneG).connect(this.master);
    this.droneOsc.start();

    return true;
  },

  toggle() {
    if (!this.ctx) this.init();
    if (!this.ctx) return false;
    if (this.ctx.state === 'suspended') this.ctx.resume();
    this.on = !this.on;
    const target = this.on ? 0.35 : 0;
    this.master.gain.setTargetAtTime(target, this.ctx.currentTime, 0.15);
    document.body.classList.toggle('sound-on', this.on);
    return this.on;
  },

  enable() {
    if (!this.on) this.toggle();
  },

  updateDescent(p, vel) {
    if (!this.ctx || !this.on) return;
    const t = this.ctx.currentTime;
    const v = Math.min(1, Math.abs(vel) * 0.05);

    // Modulate wind by velocity and descent
    this.windG.gain.setTargetAtTime(0.04 + v * 0.18, t, 0.08);
    this.windF.frequency.setTargetAtTime(280 + v * 900 + p * 300, t, 0.08);

    // Drone frequency shifts with story progression
    this.droneLP.frequency.setTargetAtTime(140 + p * 360, t, 0.1);
  },

  boom() {
    if (!this.ctx || !this.on) return;
    const c = this.ctx, t = c.currentTime;

    // Sub-bass impact drop
    const osc = c.createOscillator();
    const g = c.createGain();
    osc.frequency.setValueAtTime(120, t);
    osc.frequency.exponentialRampToValueAtTime(28, t + 0.8);
    g.gain.setValueAtTime(0.7, t);
    g.gain.exponentialRampToValueAtTime(0.001, t + 1.2);
    osc.connect(g).connect(this.master);
    osc.start(t);
    osc.stop(t + 1.3);

    // Explosive noise burst
    const nSrc = c.createBufferSource();
    nSrc.buffer = this.noise;
    const nFilter = c.createBiquadFilter();
    nFilter.type = 'lowpass';
    nFilter.frequency.setValueAtTime(800, t);
    nFilter.frequency.exponentialRampToValueAtTime(80, t + 0.6);
    const nGain = c.createGain();
    nGain.gain.setValueAtTime(0.4, t);
    nGain.gain.exponentialRampToValueAtTime(0.001, t + 0.7);
    nSrc.connect(nFilter).connect(nGain).connect(this.master);
    nSrc.start(t);
    nSrc.stop(t + 0.8);
  },

  tick() {
    if (!this.ctx || !this.on) return;
    const c = this.ctx, t = c.currentTime;
    const osc = c.createOscillator();
    const g = c.createGain();
    osc.frequency.setValueAtTime(1200, t);
    osc.frequency.exponentialRampToValueAtTime(600, t + 0.04);
    g.gain.setValueAtTime(0.08, t);
    g.gain.exponentialRampToValueAtTime(0.001, t + 0.05);
    osc.connect(g).connect(this.master);
    osc.start(t);
    osc.stop(t + 0.06);
  },

  chime() {
    if (!this.ctx || !this.on) return;
    const c = this.ctx, t = c.currentTime;
    const freqs = [523.25, 659.25, 783.99, 1046.50];
    freqs.forEach((freq, idx) => {
      const osc = c.createOscillator();
      const gain = c.createGain();
      osc.type = 'triangle';
      osc.frequency.setValueAtTime(freq, t + idx * 0.04);
      gain.gain.setValueAtTime(0.06, t + idx * 0.04);
      gain.gain.exponentialRampToValueAtTime(0.0001, t + idx * 0.04 + 0.35);
      osc.connect(gain);
      gain.connect(this.master);
      osc.start(t + idx * 0.04);
      osc.stop(t + idx * 0.04 + 0.35);
    });
  }
};

// ---------- 3D Kinetic Type World Registry ----------
const WORLD = {
  fall: {
    back: [
      ['Python 3.10+', 'xl ghost cyan'],
      ['sub-millisecond p99', 'serif'],
      ['FastAPI Microservices', 'tag'],
      ['AWS Certified Cloud', 'xl'],
      ['-25% Query Latency', 'serif molten'],
      ['OpenCV Computer Vision', 'l ghost molten'],
      ['MySQL 3NF Schemas', 'tag'],
      ['High Throughput', 'xl cyan'],
      ['latency: <1ms', 'serif'],
      ['Docker & Linux', 'tag'],
      ['Vector Memory & BG/NBD', 'l ghost'],
    ],
    front: [
      ['VARDHAN', 'xxl ghost cyan'],
      ['DEEPER', 'xxl ghost'],
    ],
  },
  crowd: {
    back: [
      ['it works on my machine', 'serif ash'],
      ['Legacy Monolith', 'xl ghost ash'],
      ['504 gateway timeout', 'serif ash'],
      ['undefined is not a function', 'serif ash'],
      ['Memory Leak', 'l ash'],
      ['Slow Full-Table Scan', 'serif ash'],
      ['unhandled promise rejection', 'm ash'],
      ['spaghetti architecture', 'serif ash'],
      ['restart the server', 'serif ash'],
      ['technical debt', 'm ash'],
    ],
    front: [
      ['NOISE', 'xxl ghost ash'],
    ],
  },
  rise: {
    back: [
      ['Deterministic', 'xl ghost cyan'],
      ['fault tolerant', 'serif'],
      ['Self-Healing', 'xl molten'],
      ['zero downtime', 'serif molten'],
      ['Autonomous Scale', 'l ghost'],
      ['Sub-85ms Inference', 'serif'],
      ['Production Proven', 'l cyan'],
    ],
    front: [],
  },
};

const LINES = [
  ['Every complex architecture begins with a clean sheet of memory.', 0.035, 0.17, -0.1],
  ['No boilerplate, no guesswork. Just state, logic, and gravity.', 0.13, 0.27, 0.12],
  ['You discover the edge cases on the way down.', 0.24, 0.38, -0.08],
  ['Then the telemetry peaks.', 0.34, 0.47, 0.06],
  ['And you collide with the legacy noise.', 0.485, 0.6, 0],
  ['The noise dissolves. The core architecture remains.', 0.62, 0.74, 0],
  ['True engineering is what endures under peak load.', 0.765, 0.88, 0],
];

const CTAS = [
  ['Explore Flagships', 'work', 'fall', -0.3],
  ['Initiate Uplink', 'contact', 'fall', 0.32],
  ['Explore Flagships', 'work', 'rise', 0.3],
  ['Initiate Uplink', 'contact', 'rise', -0.28],
];

// ---------- Freefall Engine Orchestrator Class ----------
export class FreefallEngine {
  constructor(options = {}) {
    this.options = options;
    this.S = {
      W: typeof window !== 'undefined' ? window.innerWidth : 1200,
      H: typeof window !== 'undefined' ? window.innerHeight : 800,
      y: 0,
      vel: 0,
      mx: 0,
      my: 0,
      smx: 0,
      smy: 0,
      cx: 600,
      cy: 400,
      t: 0,
      entered: false,
      lastP: 0,
    };
    this.layout = {};
    this.items = [];
    this.tiles = [];
    this.words = [];
    this.marquees = [];
    this.arches = [];
    this.lenis = null;
    this.rafId = null;
    this.clockTimer = null;
    this.CUT = 0.47;
    this.SHOCK = 0.585;
    this.P = 900;
  }

  init() {
    if (typeof window === 'undefined') return;

    this.S.cx = this.S.W / 2;
    this.S.cy = this.S.H / 2;

    const html = document.documentElement;
    const fine = window.matchMedia('(hover: hover) and (pointer: fine)').matches;

    // Canvases
    const filmCanvas = document.getElementById('filmCanvas');
    const portalCanvas = document.getElementById('portalCanvas');
    const ambientCanvas = document.getElementById('ambient');

    if (filmCanvas) this.genDescent = new GenerativeDescent(filmCanvas);
    if (portalCanvas) this.genPortal = new GenerativePortal(portalCanvas);
    if (ambientCanvas) this.ambient = new Ambient(ambientCanvas);

    // Initialize Lenis
    try {
      this.lenis = new Lenis({
        duration: 1.15,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        orientation: 'vertical',
        gestureOrientation: 'vertical',
        smoothWheel: true,
        wheelMultiplier: 0.95,
        touchMultiplier: 1.6,
      });
    } catch {
      // Native fallback
    }

    // Build 3D Kinetic World
    this.buildWorld();

    // Setup Arches in Tunnel
    this.setupArches();

    // Setup Manifesto Words
    this.setupManifesto();

    // Setup Marquee Rows
    this.setupMarquee();

    // Setup Tiles
    this.setupTiles();

    // Measure Layout
    this.measure();
    window.addEventListener('resize', this.onResize);

    // Setup Custom Cursor & Magnetic Tracking
    if (fine) {
      this.setupCursor();
      this.setupMagnets();
    }

    // Setup Live Clocks
    this.setupClocks();

    // Setup Global Event Delegation
    this.setupEvents();

    // Start Animation Loop
    this.lastTime = performance.now();
    this.prevScrollY = window.scrollY;
    this.loop = this.loop.bind(this);
    this.rafId = requestAnimationFrame(this.loop);
  }

  onResize = () => {
    this.measure();
  };

  measure() {
    this.S.W = window.innerWidth;
    this.S.H = window.innerHeight;
    this.S.cx = this.S.W / 2;
    this.S.cy = this.S.H / 2;

    for (const id of ['story', 'work', 'about', 'services', 'portal', 'contact']) {
      const el = document.getElementById(id);
      if (el) {
        const r = el.getBoundingClientRect();
        this.layout[id] = { top: r.top + window.scrollY, h: r.height };
      }
    }

    const filmCanvas = document.getElementById('filmCanvas');
    if (filmCanvas) {
      const r = filmCanvas.getBoundingClientRect();
      const d = Math.min(window.devicePixelRatio || 1, 1.75);
      filmCanvas.width = Math.max(2, Math.round(r.width * d));
      filmCanvas.height = Math.max(2, Math.round(r.height * d));
    }

    const portalCanvas = document.getElementById('portalCanvas');
    if (portalCanvas) {
      const r = portalCanvas.getBoundingClientRect();
      const d = Math.min(window.devicePixelRatio || 1, 1.5);
      portalCanvas.width = Math.max(2, Math.round(r.width * d));
      portalCanvas.height = Math.max(2, Math.round(r.height * d));
    }

    if (this.ambient) this.ambient.resize(this.S.W, this.S.H);

    const base = Math.min(this.S.H, this.S.W * 1.25);
    this.tiles.forEach((tl) => {
      const w = tl.s * base;
      tl.el.style.width = f1(w) + 'px';
      tl.el.style.height = f1(w / tl.ar) + 'px';
    });

    const shock = document.querySelector('.shock');
    if (shock) {
      const fw = Math.min(this.S.W, this.S.H * 0.72), fh = this.S.H;
      const sc = Math.max(fw / 720, fh / 1280);
      const dh = 1280 * sc;
      shock.style.top = f1((fh - dh) / 2 + 0.44 * dh) + 'px';
    }

    const tunnelCam = document.querySelector('.tunnel-cam');
    if (tunnelCam) {
      const ps = Math.max(this.S.W / 1600, this.S.H / 900);
      const pdh = 900 * ps;
      tunnelCam.style.top = f1((this.S.H - pdh) * 0.45 + 0.44 * pdh) + 'px';
    }

    this.marquees.forEach((m) => {
      m.half = m.track.scrollWidth / 2;
    });
  }

  buildWorld() {
    const back = document.querySelector('.world--back .cam');
    const front = document.querySelector('.world--front .cam');
    const ui = document.querySelector('.world--ui .cam');
    if (!back || !front || !ui) return;

    back.innerHTML = '';
    front.innerHTML = '';
    ui.innerHTML = '';
    this.items = [];

    const rand = rng(23);

    const makeItem = (cam, text, kind, o) => {
      const el = document.createElement(o.jump ? 'a' : 'div');
      el.className = 'wi ' + kind;
      const span = document.createElement('span');
      span.textContent = text;
      el.appendChild(span);
      if (o.jump) {
        el.href = '#' + o.jump;
        el.dataset.jump = o.jump;
        el.dataset.cursor = 'Explore';
      }
      cam.appendChild(el);
      this.items.push(Object.assign({ el, vis: false, ry: 0 }, o));
    };

    for (const [set, def] of Object.entries(WORLD)) {
      def.back.forEach(([text, kind], i, arr) => {
        const side = i % 2 ? 1 : -1;
        const depth = rand();
        makeItem(back, text, kind, {
          set, loop: true, depth,
          xs: side * (0.16 + rand() * 0.28),
          z: -120 - depth * 1300, zIn: 260, zOut: -700,
          rate: lerp(1.15, 0.6, depth), phase: i / arr.length + rand() * 0.03,
          yBias: (rand() - 0.5) * 0.35, ry: (rand() - 0.5) * 14,
        });
      });
      def.front.forEach(([text, kind], i) => {
        makeItem(front, text, kind, {
          set, loop: false,
          xs: (i % 2 ? 1 : -1) * 0.06,
          z: 320, zIn: 540, zOut: 120,
          rate: 1.6, phase: 0.12 + i * 0.18,
          yBias: 0, ry: 0,
        });
      });
    }

    LINES.forEach(([text, pIn, pOut, x]) => {
      makeItem(front, text, 'line', {
        set: 'line', loop: false, pIn, pOut, xs: x,
        z: 160, zIn: 280, zOut: -100, rate: 0.9, phase: (pIn + pOut) / 2,
        yBias: 0, ry: 0,
      });
    });

    CTAS.forEach(([text, jump, set, x]) => {
      makeItem(ui, text, 'cta', {
        set, loop: false, jump, xs: x,
        z: 80, zIn: 180, zOut: -40, rate: 1,
        phase: set === 'fall' ? 0.32 : 0.82,
        yBias: 0.18, ry: 0,
      });
    });
  }

  setupArches() {
    const tunnelCam = document.querySelector('.tunnel-cam');
    if (!tunnelCam) return;
    tunnelCam.innerHTML = '';
    this.arches = [];
    const words = ['INITIALIZE', '', 'HANDSHAKE', '', 'UPLINK_OK', '', 'ENTER MATRIX', '', 'SYNCHRONIZE', ''];
    words.forEach((w) => {
      const el = document.createElement('div');
      el.className = 'arch';
      if (w) {
        const s = document.createElement('span');
        s.textContent = w;
        el.appendChild(s);
      }
      tunnelCam.appendChild(el);
      this.arches.push({ el });
    });
  }

  setupManifesto() {
    const manifesto = document.getElementById('manifesto');
    if (!manifesto) return;
    const text = manifesto.textContent.trim().split(/\s+/);
    manifesto.textContent = '';
    this.words = [];
    text.forEach((w, i) => {
      const s = document.createElement('span');
      s.className = 'w';
      s.textContent = w;
      manifesto.appendChild(s);
      if (i < text.length - 1) manifesto.appendChild(document.createTextNode(' '));
      this.words.push({ el: s, o: -1 });
    });
  }

  setupMarquee() {
    this.marquees = Array.from(document.querySelectorAll('.marquee-row')).map((row) => {
      const track = row.querySelector('.marquee-track');
      if (track) {
        const clone = track.innerHTML;
        track.insertAdjacentHTML('beforeend', clone);
        Array.from(track.querySelectorAll('span'))
          .slice(track.children.length / 2)
          .forEach((s) => s.setAttribute('aria-hidden', 'true'));
      }
      return { track, dir: +(row.dataset.dir || 1), x: 0, half: 0 };
    });
  }

  setupTiles() {
    const tilesWrap = document.getElementById('tiles');
    if (!tilesWrap) return;
    this.tiles = Array.from(tilesWrap.querySelectorAll('.tile')).map((el) => ({
      el,
      x: +(el.dataset.x || 0),
      y: +(el.dataset.y || 0),
      s: +(el.dataset.s || 0.15),
      ar: +(el.dataset.ar || 1),
      z: +(el.dataset.z || -100),
      d: +(el.dataset.d || 0),
      v: false,
    }));
  }

  setupCursor() {
    const cursor = document.querySelector('.cursor');
    const cursorDot = document.querySelector('.cursor-dot');
    const cursorRing = document.querySelector('.cursor-ring');
    const cursorLabel = document.querySelector('.cursor-ring span');
    if (!cursor || !cursorDot || !cursorRing) return;

    this.cur = { x: this.S.cx, y: this.S.cy, tx: this.S.cx, ty: this.S.cy };

    document.documentElement.classList.add('has-cursor');

    window.addEventListener('pointermove', (e) => {
      this.cur.tx = e.clientX;
      this.cur.ty = e.clientY;
      this.S.mx = (e.clientX - this.S.cx) / this.S.cx;
      this.S.my = (e.clientY - this.S.cy) / this.S.cy;

      const svcPreview = document.querySelector('.svc-preview');
      if (svcPreview && this.pvOn) {
        svcPreview.style.transform = `translate3d(${f1(e.clientX + 30)}px, ${f1(e.clientY - 120)}px, 0)`;
      }
    });

    window.addEventListener('pointerdown', () => cursor.classList.add('is-down'));
    window.addEventListener('pointerup', () => cursor.classList.remove('is-down'));

    document.addEventListener('mouseover', (e) => {
      const target = e.target.closest('[data-cursor]');
      if (target && cursorLabel) {
        cursor.classList.add('is-label');
        cursorLabel.textContent = target.dataset.cursor;
      }
    });

    document.addEventListener('mouseout', (e) => {
      const target = e.target.closest('[data-cursor]');
      if (target && cursorLabel) {
        cursor.classList.remove('is-label');
        cursorLabel.textContent = '';
      }
    });
  }

  setupMagnets() {
    const magnets = document.querySelectorAll('.magnet');
    magnets.forEach((el) => {
      el.addEventListener('mousemove', (e) => {
        const r = el.getBoundingClientRect();
        const dx = e.clientX - (r.left + r.width / 2);
        const dy = e.clientY - (r.top + r.height / 2);
        el.style.transform = `translate3d(${dx * 0.28}px, ${dy * 0.28}px, 0)`;
        el.classList.add('is-pull');
      });
      el.addEventListener('mouseleave', () => {
        el.style.transform = 'translate3d(0, 0, 0)';
        el.classList.remove('is-pull');
      });
    });
  }

  setupClocks() {
    const clockEl = document.getElementById('clock');
    const update = () => {
      if (!clockEl) return;
      const now = new Date();
      // Live Indian Standard Time (IST)
      const ist = now.toLocaleTimeString('en-US', {
        timeZone: 'Asia/Kolkata',
        hour12: false,
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
      });
      clockEl.textContent = `${ist} IST`;
    };
    this.clockTimer = setInterval(update, 1000);
    update();
  }

  setupEvents() {
    // Services preview hover
    const svcPreview = document.querySelector('.svc-preview');
    const svcImg = svcPreview ? svcPreview.querySelector('img') : null;
    const svcs = document.querySelectorAll('.svc');
    svcs.forEach((li) => {
      li.addEventListener('mouseenter', () => {
        if (svcImg && li.dataset.img) svcImg.src = li.dataset.img;
        this.pvOn = true;
        if (svcPreview) svcPreview.classList.add('is-on');
        Sound.tick();
      });
    });
    const svcList = document.querySelector('.svc-list');
    if (svcList) {
      svcList.addEventListener('mouseleave', () => {
        this.pvOn = false;
        if (svcPreview) svcPreview.classList.remove('is-on');
      });
    }

    // Direct Jumps
    document.addEventListener('click', (e) => {
      const jump = e.target.closest('[data-jump]');
      if (jump) {
        e.preventDefault();
        this.scrollToSection(jump.dataset.jump);
        Sound.tick();
      }

      const go = e.target.closest('[data-go]');
      if (go) {
        const idx = go.dataset.go;
        if (idx === 'about' || idx === 'services' || idx === 'briefing') {
          this.scrollToSection(idx);
        } else {
          const screens = document.querySelectorAll('.screen');
          const screen = screens[+idx];
          if (screen) this.scrollToSection(screen);
          else this.scrollToSection('work');
        }
        Sound.tick();
      }
    });
  }

  enterSystem(withSound) {
    if (withSound) Sound.enable();
    document.body.classList.remove('is-locked');
    document.body.classList.add('is-entered');
    const loader = document.getElementById('loader');
    if (loader) loader.classList.add('is-out');
    this.S.entered = true;
    this.measure();
    window.scrollTo(0, 0);
  }

  scrollToSection(target) {
    if (typeof target === 'string' && target.startsWith('story:')) {
      const p = +target.slice(6);
      const dest = (this.layout.story?.top || 0) + p * ((this.layout.story?.h || this.S.H) - this.S.H);
      if (this.lenis) this.lenis.scrollTo(dest);
      else window.scrollTo({ top: dest, behavior: 'smooth' });
      return;
    }

    if (target === 'top') {
      if (this.lenis) this.lenis.scrollTo(0);
      else window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    const el = typeof target === 'string' ? document.getElementById(target) : target;
    if (el) {
      if (this.lenis) this.lenis.scrollTo(el);
      else el.scrollIntoView({ behavior: 'smooth' });
    }
  }

  showToast(msg) {
    const toast = document.getElementById('toast');
    if (!toast) return;
    toast.textContent = msg;
    toast.classList.add('is-show');
    clearTimeout(this.toastTimer);
    this.toastTimer = setTimeout(() => toast.classList.remove('is-show'), 3200);
  }

  // ---------- Update Cycles ----------
  updateStory() {
    const L = this.layout.story;
    if (!L || this.S.y > L.top + L.h) return;
    const p = clamp((this.S.y - L.top) / (L.h - this.S.H));
    const { W, H } = this.S;

    // Render Canvas & Ambient
    if (this.genDescent) this.genDescent.render(p, this.S.t, this.S.vel, this.S.smx, this.S.smy);
    if (this.ambient) this.ambient.draw(p);

    // Camera Perspective Tilt
    const cams = document.querySelectorAll('.cam');
    const camT = `rotateX(${f2(-this.S.smy * 7)}deg) rotateY(${f2(this.S.smx * 10)}deg)`;
    for (const c of cams) c.style.transform = camT;

    // Kinetic Type World Travel
    const travel = (this.S.y - L.top) / H * 0.2 + this.S.t * 0.004;
    const shockT = norm(p, this.SHOCK, 0.64);
    const alpha = {
      fall: sstep(0.02, 0.06, p) * (1 - sstep(this.CUT - 0.03, this.CUT, p)),
      crowd: sstep(this.CUT, this.CUT + 0.03, p) * (1 - sstep(0.66, 0.72, p)),
      rise: sstep(0.67, 0.73, p) * (1 - sstep(0.86, 0.92, p)),
    };

    this.items.forEach((it) => {
      let active = false, prog = 0;
      if (it.loop) {
        active = alpha[it.set] > 0.01;
        prog = fract(it.phase + travel * it.rate);
      } else if (it.set === 'line') {
        active = p >= it.pIn - 0.02 && p <= it.pOut + 0.02;
        prog = norm(p, it.pIn, it.pOut);
      } else {
        active = alpha[it.set] > 0.01;
        prog = norm(p, it.phase - 0.07, it.phase + 0.07);
      }

      if (!active) {
        if (it.vis) { it.el.style.opacity = '0'; it.vis = false; }
        return;
      }

      const z = lerp(it.zIn, it.zOut, prog);
      let op = bell(prog, 0, 0.5, 1);
      if (it.loop) op *= alpha[it.set];

      if (it.set === 'crowd' && shockT > 0) {
        op *= Math.max(0, 1 - shockT * 1.5);
      }

      if (op < 0.01) {
        if (it.vis) { it.el.style.opacity = '0'; it.vis = false; }
        return;
      }

      it.vis = true;
      const x = it.xs * W;
      const y = (it.yBias || 0) * H;
      const scale = clamp(this.P / (this.P - z), 0.1, 4);
      const stretch = 1 + clamp(Math.abs(this.S.vel) * 0.002, 0, 0.4);

      it.el.style.opacity = f2(op);
      it.el.style.transform = `translate3d(${f1(x)}px, ${f1(y)}px, ${f1(z)}px) scale(${f2(scale)}) scaleY(${f2(stretch)}) rotateY(${f1(it.ry)}deg)`;
    });

    // Hero Section Opacity & Fade
    const hero = document.getElementById('hero');
    const heroCue = hero?.querySelector('.hero-cue');
    const heroSkip = hero?.querySelector('.hero-skip');
    const heroP = norm(p, 0, 0.18);
    if (hero) {
      if (heroP < 1) {
        hero.style.opacity = f2(1 - sstep(0.04, 0.18, p));
        hero.style.transform = `translate3d(0, ${f1(-heroP * 120)}px, ${f1(-heroP * 200)}px)`;
        if (heroCue) heroCue.style.pointerEvents = p > 0.06 ? 'none' : 'auto';
        if (heroSkip) heroSkip.style.pointerEvents = p > 0.06 ? 'none' : 'auto';
      } else {
        hero.style.opacity = '0';
      }
    }

    // Impact Flash & Ember
    const flash = document.querySelector('.flash');
    const flashEmber = document.querySelector('.flash--ember');
    const flashP = bell(p, this.CUT - 0.015, this.CUT, this.CUT + 0.04);
    if (flash) {
      flash.style.opacity = f2(flashP);
      if (flashP > 0.01 && flash.firstElementChild) {
        flash.firstElementChild.style.transform = `scale(${f2(lerp(0.85, 1.25, norm(p, this.CUT - 0.015, this.CUT + 0.04)))})`;
      }
    }
    if (flashEmber) flashEmber.style.opacity = f2(bell(p, this.CUT, this.CUT + 0.02, this.CUT + 0.08));

    // Shockwave Ring
    const shock = document.querySelector('.shock');
    if (shock) {
      if (shockT > 0 && shockT < 1) {
        const sc = lerp(0.3, 3.8, easeOut(shockT));
        shock.style.opacity = f2((1 - shockT) * 0.95);
        shock.style.transform = `scale(${f2(sc)})`;
      } else {
        shock.style.opacity = '0';
      }
    }

    // Emergence Letters (VARDHAN)
    const riseLetters = document.querySelectorAll('.rise span');
    const riseP = norm(p, 0.69, 0.86);
    if (riseP > 0 && riseP < 1) {
      riseLetters.forEach((span, i) => {
        const off = i * 0.04;
        const lp = norm(riseP, off, off + 0.45);
        const z = lerp(-600, 0, easeInOut(lp));
        const op = sstep(0, 0.35, lp) * (1 - sstep(0.75, 1, riseP));
        span.style.opacity = f2(op);
        span.style.transform = `translate3d(0, 0, ${f1(z)}px)`;
      });
    } else {
      riseLetters.forEach((s) => (s.style.opacity = '0'));
    }

    // Index Stage Name & Tiles (p > 0.82)
    const indexName = document.querySelector('.index-name');
    if (indexName) indexName.style.opacity = f2(sstep(0.85, 0.93, p) * 0.5);

    // Film Shrinks to Center Tile
    const film = document.getElementById('film');
    if (film) {
      const filmShrink = sstep(0.84, 0.96, p);
      const filmW = lerp(Math.min(W, H * 0.74), Math.min(H, W * 1.25) * 0.22, filmShrink);
      const filmH = lerp(H, filmW * 1.35, filmShrink);
      const filmY = lerp(0, -H * 0.03, filmShrink);
      const baseFeather = W / H < 0.8 ? 0 : 22;
      const filmMask = lerp(baseFeather, 0, filmShrink);

      film.style.width = f1(filmW) + 'px';
      film.style.height = f1(filmH) + 'px';
      film.style.top = f1((H - filmH) / 2 + filmY) + 'px';
      film.style.setProperty('--f', f1(filmMask) + '%');
    }

    // Tiles Assembly
    const tilesWrap = document.getElementById('tiles');
    if (tilesWrap) tilesWrap.classList.toggle('is-live', p > 0.92);
    const idxP = norm(p, 0.84, 0.98);
    this.tiles.forEach((tl) => {
      const tp = norm(idxP, tl.d, tl.d + 0.55);
      const z = lerp(tl.z - 300, tl.z, easeOut(tp));
      const op = sstep(0.1, 0.6, tp);
      tl.el.style.opacity = f2(op);
      tl.el.style.transform = `translate3d(calc(-50% + ${f1(tl.x * W)}px), calc(-50% + ${f1(tl.y * H)}px), ${f1(z)}px)`;
      tl.el.style.pointerEvents = p > 0.92 ? 'auto' : 'none';
    });

    // Audio Modulation
    Sound.updateDescent(p, this.S.vel);

    // Shockwave Boom Trigger Once
    if (this.S.lastP < this.CUT && p >= this.CUT) {
      const stageInner = document.querySelector('.stage-inner');
      if (stageInner) {
        stageInner.classList.remove('is-shake');
        void stageInner.offsetWidth;
        stageInner.classList.add('is-shake');
      }
      Sound.boom();
    }
  }

  updateWork() {
    const L = this.layout.work;
    if (!L) return;
    const p = (this.S.y - L.top) / (L.h - this.S.H);
    if (p < -0.1 || p > 1.1) return;

    const screens = document.querySelectorAll('.screen');
    const N = screens.length;
    screens.forEach((sc, i) => {
      const step = 1 / N;
      const enter = i * step;
      const sp = (p - enter) / step;

      let y = 0, z = 0, rx = 0, dim = 0, op = 1;
      if (sp < 0) {
        y = (1 - (p / enter)) * 100;
        z = -200;
        rx = 8;
        op = 0;
      } else if (sp <= 1) {
        const exitProg = sstep(0.65, 1, sp);
        z = -exitProg * 350;
        rx = exitProg * 6;
        dim = exitProg * 0.7;
        y = -exitProg * 40;
      } else {
        z = -350 - (sp - 1) * 200;
        dim = 0.7;
        op = Math.max(0, 1 - (sp - 1) * 2);
      }

      sc.style.opacity = f2(op);
      sc.style.transform = `translate3d(0, ${f1(y)}px, ${f1(z)}px) rotateX(${f1(rx)}deg)`;
      sc.style.setProperty('--dim', f2(dim));

      // Sliding Marquee Title
      const titleSpan = sc.querySelector('.screen-title span');
      if (titleSpan) titleSpan.style.transform = `translate3d(${f1(-sp * 140)}px, 0, 0)`;

      // Rotating Disc Ring
      const disc = sc.querySelector('.disc-ring');
      if (disc) disc.style.transform = `rotate(${f1(sp * 160)}deg)`;
    });
  }

  updateAbout() {
    const L = this.layout.about;
    if (!L) return;
    const p = (this.S.y - (L.top - this.S.H * 0.4)) / (L.h + this.S.H * 0.2);
    if (p < 0 || p > 1) return;

    const N = this.words.length;
    this.words.forEach((w, i) => {
      const wp = norm(p, i / N, (i + 4) / N);
      const isHot = wp > 0.85;
      if (w.o !== isHot) {
        w.o = isHot;
        w.el.classList.toggle('is-hot', isHot);
      }
    });
  }

  updateMarquee() {
    this.marquees.forEach((m) => {
      m.x += (m.dir * 0.8 + this.S.vel * 0.08);
      if (m.half > 0) {
        if (m.x > 0) m.x -= m.half;
        if (m.x < -m.half) m.x += m.half;
      }
      if (m.track) m.track.style.transform = `translate3d(${f1(m.x)}px, 0, 0)`;
    });
  }

  updatePortal() {
    const L = this.layout.portal;
    if (!L) return;
    const p = clamp((this.S.y - L.top) / (L.h - this.S.H));
    if (p <= 0 || p >= 1) return;

    if (this.genPortal) this.genPortal.render(p, this.S.t, this.S.vel, this.S.smx, this.S.smy);

    this.arches.forEach((a, i) => {
      const ap = fract(p * 2.2 + i / this.arches.length);
      const z = lerp(-600, 400, ap);
      const op = bell(ap, 0, 0.45, 1);
      a.el.style.opacity = f2(op);
      a.el.style.transform = `translate3d(0, 0, ${f1(z)}px)`;
    });

    const portalLines = document.querySelectorAll('.portal-line');
    portalLines.forEach((el) => {
      const [pIn, pOut] = (el.dataset.w || '0,1').split(',').map(Number);
      const lp = norm(p, pIn, pOut);
      const op = bell(lp, 0, 0.5, 1);
      el.style.opacity = f2(op);
      el.style.transform = `translate3d(-50%, ${f1((1 - lp) * 20)}px, 0)`;
    });

    const portalCta = document.querySelector('.portal-cta');
    if (portalCta) {
      const ctaP = sstep(0.76, 0.94, p);
      portalCta.style.opacity = f2(ctaP);
      portalCta.classList.toggle('is-live', ctaP > 0.8);
    }
  }

  updateHUD() {
    const totalH = document.documentElement.scrollHeight - this.S.H;
    const prog = clamp(this.S.y / Math.max(1, totalH));

    const hudBar = document.querySelector('.hud-bar i');
    if (hudBar) hudBar.style.transform = `scaleX(${f2(prog)})`;

    let num = '01', name = 'The Descent', telemetry = 'LATENCY: 0.8ms • DEPTH: 12,400m';

    if (this.S.y < (this.layout.story?.top || 0) + (this.layout.story?.h || 0)) {
      const sp = clamp((this.S.y - (this.layout.story?.top || 0)) / ((this.layout.story?.h || this.S.H) - this.S.H));
      const alt = Math.round(lerp(12400, 0, sp));
      telemetry = `LATENCY: 0.8ms • DEPTH: ${alt.toLocaleString()}m`;
      if (sp < this.CUT) {
        num = '01'; name = 'The Descent';
      } else if (sp < 0.65) {
        num = '02'; name = 'Signal vs Noise';
      } else if (sp < 0.85) {
        num = '03'; name = 'Synapse Emergence';
      } else {
        num = '04'; name = 'Architecture Index';
      }
    } else if (this.S.y < (this.layout.work?.top || 0) + (this.layout.work?.h || 0)) {
      num = '05'; name = 'Flagship Systems';
      telemetry = 'STATUS: DISTRIBUTED RUNTIME • 99.999% SLA';
    } else if (this.S.y < (this.layout.about?.top || 0) + (this.layout.about?.h || 0)) {
      num = '06'; name = 'Philosophy';
      telemetry = 'STATE: DETERMINISTIC SCALE • AWS CERTIFIED';
    } else if (this.S.y < (this.layout.services?.top || 0) + (this.layout.services?.h || 0)) {
      num = '07'; name = 'Capabilities & Recruiter Hub';
      telemetry = 'SPECIALIZATIONS: FULL STACK & APPLIED ML';
    } else if (this.S.y < (this.layout.portal?.top || 0) + (this.layout.portal?.h || 0)) {
      num = '08'; name = 'Quantum Gateway';
      telemetry = 'UPLINK: SYNCHRONIZING WEIGHTS';
    } else {
      num = '09'; name = 'Terminal Uplink';
      telemetry = 'SYSTEM: READY FOR TRANSMISSION';
    }

    const hudNum = document.querySelector('.hud-num');
    const hudName = document.querySelector('.hud-name');
    const hudRead = document.getElementById('hudTelemetry');
    if (hudNum && hudName && hudRead) {
      if (hudNum.textContent !== num) {
        hudNum.textContent = num;
        hudName.textContent = name;
        hudRead.textContent = telemetry;
        const hud = document.querySelector('.hud');
        if (hud) {
          hud.classList.remove('is-pulse');
          void hud.offsetWidth;
          hud.classList.add('is-pulse');
        }
      } else {
        hudRead.textContent = telemetry;
      }
    }
  }

  loop(time) {
    const dt = time - this.lastTime;
    this.lastTime = time;
    this.S.t = time;

    // Smooth pointer smoothing
    this.S.smx += (this.S.mx - this.S.smx) * 0.08;
    this.S.smy += (this.S.my - this.S.smy) * 0.08;

    // Custom Cursor Smoothing
    if (this.cur) {
      this.cur.x += (this.cur.tx - this.cur.x) * 0.22;
      this.cur.y += (this.cur.ty - this.cur.y) * 0.22;
      const cursorDot = document.querySelector('.cursor-dot');
      const cursorRing = document.querySelector('.cursor-ring');
      if (cursorDot) cursorDot.style.transform = `translate3d(${f1(this.cur.tx)}px, ${f1(this.cur.ty)}px, 0)`;
      if (cursorRing) cursorRing.style.transform = `translate3d(${f1(this.cur.x)}px, ${f1(this.cur.y)}px, 0)`;
    }

    // Scroll updates from Lenis or native
    if (this.lenis) {
      this.lenis.raf(time);
      this.S.y = this.lenis.scroll;
      this.S.vel = this.lenis.velocity;
    } else {
      this.S.y = window.scrollY;
      this.S.vel = (this.S.y - this.prevScrollY) / Math.max(1, dt);
      this.prevScrollY = this.S.y;
    }

    if (this.S.entered) {
      this.updateStory();
      this.updateWork();
      this.updateAbout();
      this.updateMarquee();
      this.updatePortal();
      this.updateHUD();
    }

    this.S.lastP = clamp((this.S.y - (this.layout.story?.top || 0)) / Math.max(1, (this.layout.story?.h || this.S.H) - this.S.H));
    this.rafId = requestAnimationFrame(this.loop);
  }

  destroy() {
    if (this.rafId) cancelAnimationFrame(this.rafId);
    if (this.clockTimer) clearInterval(this.clockTimer);
    if (this.lenis) this.lenis.destroy();
    window.removeEventListener('resize', this.onResize);
  }
}

export const freefallEngine = new FreefallEngine();
