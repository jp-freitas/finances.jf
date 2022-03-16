import { useEffect, useState } from "react";

export function useWidth() {
  const hasWindow = typeof window != 'undefined';

  function getWindowDimensions() {
    const width = hasWindow ? window.innerWidth : 768;
    return {
      width,
    }
  }

  const [windowWidth, setWindowWidth] = useState(getWindowDimensions());



  useEffect(() => {
    function handleResize() {
      setWindowWidth(getWindowDimensions());
    }

    if (hasWindow) {
      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
    }
  }, [hasWindow]);

  return windowWidth;
}