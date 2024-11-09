import React from 'react';

function CelestialBody({ name, size, distance, imgSrc, angle, centerX, centerY }) {
  const style = {
    width: `${size}px`,
    height: `${size}px`,
    left: `${centerX + Math.cos(angle) * distance - size / 2}px`,
    top: `${centerY + Math.sin(angle) * distance - size / 2}px`
  };

  return <img src={imgSrc} alt={name} style={style} />;
}

export default CelestialBody;