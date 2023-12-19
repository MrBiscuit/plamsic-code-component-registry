import React, { useState, useEffect } from 'react';

function ScrollPositionTracker({ onScrollChange }) {
  const [scrollY, setScrollY] = useState(window.scrollY);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
      if (onScrollChange) {
        onScrollChange(window.scrollY);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [onScrollChange]);

  // The component does not render anything itself
  return null;
}

export {ScrollPositionTracker};
