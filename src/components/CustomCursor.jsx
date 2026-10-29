// src/components/CustomCursor.jsx
import React from 'react';

export default function CustomCursor() {
  return (
    <>
      <div className="cursor" aria-hidden="true">
        <i className="cursor-dot"></i>
        <i className="cursor-ring">
          <span></span>
        </i>
      </div>
      <div className="grain" aria-hidden="true"></div>
    </>
  );
}
