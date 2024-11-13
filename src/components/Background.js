// Background.js
import React from 'react';
import './Background.css';

const Background = ({ isHighContrast }) => {
  return (
    <div className={`gradient-bg ${isHighContrast ? 'high-contrast' : ''}`}>
      <div className="g1"></div>
      <div className="g2"></div>
      <div className="g3"></div>
      <div className="interactive"></div>
    </div>
  );
};

export default Background;
