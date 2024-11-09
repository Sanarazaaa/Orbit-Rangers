import React, { useEffect, useRef, useState } from 'react';
import CelestialBody from './CelestialBody';
import Star from './Star';
import Astronaut from './Astronaut';

// Import all images
import sunImage from '../image/estrela_sun.gif';
import mercuryImage from '../image/mercurio.gif';
import venusImage from '../image/venus.gif';
import earthImage from '../image/slow-earth.gif';
import marsImage from '../image/marte.gif';
import jupiterImage from '../image/jupiter.gif';
import saturnImage from '../image/saturno.gif';
import uranusImage from '../image/urano.gif';
import neptuneImage from '../image/netuno.gif';

const PLANETS_DATA = [
  { name: 'Sun', size: 350, distance: 0, imgSrc: sunImage },
  { name: 'Mercury', size: 25, distance: 150, imgSrc: mercuryImage },
  { name: 'Venus', size: 45, distance: 250, imgSrc: venusImage },
  { name: 'Earth', size: 55, distance: 350, imgSrc: earthImage },
  { name: 'Mars', size: 40, distance: 450, imgSrc: marsImage },
  { name: 'Jupiter', size: 100, distance: 550, imgSrc: jupiterImage },
  { name: 'Saturn', size: 220, distance: 700, imgSrc: saturnImage },
  { name: 'Uranus', size: 80, distance: 850, imgSrc: uranusImage },
  { name: 'Neptune', size: 65, distance: 1000, imgSrc: neptuneImage }
];

// Rest of the code remains the same...

function Space() {
  const spaceRef = useRef(null);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
  const [angles, setAngles] = useState(PLANETS_DATA.map(() => 0));

  useEffect(() => {
    const updateDimensions = () => {
      if (spaceRef.current) {
        setDimensions({
          width: spaceRef.current.clientWidth,
          height: spaceRef.current.clientHeight
        });
      }
    };

    updateDimensions();
    window.addEventListener('resize', updateDimensions);

    return () => window.removeEventListener('resize', updateDimensions);
  }, []);

  useEffect(() => {
    let animationFrameId;
    
    const animate = () => {
      setAngles(prevAngles =>
        prevAngles.map((angle, index) => angle + 0.001 * (index + 1))
      );
      animationFrameId = requestAnimationFrame(animate);
    };

    animate();
    return () => cancelAnimationFrame(animationFrameId);
  }, []);

  return (
    <div className="space" ref={spaceRef}>
      {PLANETS_DATA.map((planet, index) => (
        <CelestialBody
          key={planet.name}
          {...planet}
          angle={angles[index]}
          centerX={dimensions.width / 2}
          centerY={dimensions.height / 2}
        />
      ))}
      {[...Array(100)].map((_, i) => (
        <Star key={i} />
      ))}
      <Astronaut />
    </div>
  );
}

export default Space;