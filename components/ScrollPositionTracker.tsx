import React, { useEffect, useState } from 'react';

function ScrollPositionTracker({ setScrollY }) {
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [setScrollY]);

  // This component doesn't render anything
  return null;
}

export { ScrollPositionTracker};
