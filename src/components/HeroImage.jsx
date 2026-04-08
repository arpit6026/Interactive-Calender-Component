import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

export default function HeroImage({ imageUrl, monthName }) {
  const [animKey, setAnimKey] = useState(0);

  useEffect(() => {
    setAnimKey(prev => prev + 1);
  }, [imageUrl]);

  return (
    <div 
      key={animKey} 
      className="hero-container w-full flex-1 min-h-[280px] lg:min-h-full relative preserve-3d transition-colors duration-500"
      style={{ backgroundColor: 'var(--theme-hero)' }}
    >
      <img 
        src={imageUrl} 
        alt={`${monthName} calendar image`} 
        className="object-cover w-full h-full absolute inset-0"
        loading="lazy"
      />
      {/* Elegant multi-layer gradient overlay */}
      <div className="hero-gradient-overlay"></div>
      {/* Inner shadow for depth */}
      <div className="hero-inner-shadow"></div>
    </div>
  );
}

HeroImage.propTypes = {
  imageUrl: PropTypes.string.isRequired,
  monthName: PropTypes.string.isRequired,
};
