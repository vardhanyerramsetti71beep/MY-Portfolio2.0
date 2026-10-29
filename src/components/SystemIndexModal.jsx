// src/components/SystemIndexModal.jsx
import React, { useState } from 'react';
import { Sound } from '../engine/freefallEngine';

export default function SystemIndexModal({ isOpen, onClose }) {
  const [previewImg, setPreviewImg] = useState('/assets/projects/nexus-core.svg');

  const menuItems = [
    { label: 'The Descent', jump: 'story:0', img: '/assets/tiles/tile-1.svg' },
    { label: 'Signal vs Noise', jump: 'story:0.53', img: '/assets/tiles/tile-2.svg' },
    { label: 'Synapse Emergence', jump: 'story:0.77', img: '/assets/tiles/tile-5.svg' },
    { label: 'Flagship Architectures', jump: 'work', img: '/assets/projects/nexus-core.svg' },
    { label: 'Engineering Philosophy', jump: 'about', img: '/assets/tiles/tile-4.svg' },
    { label: 'Capabilities & Recruiter Hub', jump: 'services', img: '/assets/projects/synapse-db.svg' },
    { label: '8 Production Deployments', jump: 'deployments', img: '/assets/projects/prism-ai.svg' },
    { label: 'The Quantum Gateway', jump: 'portal', img: '/assets/projects/aether-mesh.svg' },
    { label: 'Terminal Uplink', jump: 'contact', img: '/assets/tiles/tile-7.svg' },
  ];

  const handleMouseEnter = (img) => {
    setPreviewImg(img);
    Sound.tick();
  };

  return (
    <nav 
      className={`menu ${isOpen ? 'menu-open' : ''}`} 
      id="menu" 
      aria-hidden={!isOpen}
    >
      <ol className="menu-list">
        {menuItems.map((item, idx) => (
          <li key={idx}>
            <a 
              href={`#${item.jump}`}
              data-jump={item.jump} 
              onMouseEnter={() => handleMouseEnter(item.img)}
              onClick={onClose}
              data-cursor="Inspect"
            >
              <span>{item.label}</span>
            </a>
          </li>
        ))}
      </ol>

      <div className="menu-preview" aria-hidden="true">
        <img alt="System Architecture Preview" src={previewImg} id="menuImg" />
        <div className="menu-preview-overlay"></div>
      </div>

      <p className="menu-foot">Press [ESC] to close system index</p>
    </nav>
  );
}
