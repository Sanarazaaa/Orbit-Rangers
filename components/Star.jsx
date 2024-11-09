import React from 'react';

function Star() {
  const style = {
    left: `${Math.random() * 100}vw`,
    top: `${Math.random() * 100}vh`,
    animationDelay: `${Math.random() * 2}s`
  };

  return <div className="star" style={style} />;
}

export default Star;