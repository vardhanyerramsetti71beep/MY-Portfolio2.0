// src/components/SystemIndexModal.jsx
import React, { useState } from 'react';
import { Sound } from '../engine/freefallEngine';

export default function SystemIndexModal({ isOpen, onClose }) {
  const [previewImg, setPreviewImg] = useState('/assets/projects/nexus-core.svg');

  const menuItems = [
    { label: 'Intro', jump: 'story:0', img: '/assets/tiles/tile-1.svg' },
    { label: 'Featured Projects', jump: 'work', img: '/assets/projects/nexus-core.svg' },
    { label: 'About', jump: 'about', img: '/assets/tiles/tile-4.svg' },
    { label: 'Skills & Why Hire Me', jump: 'services', img: '/assets/projects/synapse-db.svg' },
    { label: 'All 8 Projects', jump: 'deployments', img: '/assets/projects/prism-ai.svg' },
    { label: 'Contact', jump: 'contact', img: '/assets/tiles/tile-7.svg' },
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
