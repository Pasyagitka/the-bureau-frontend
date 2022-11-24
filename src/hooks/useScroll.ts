import { useState, useEffect } from "react";

const useScroll = () => {
  const [scrollDimensions, setScrollDimensions] = useState({ scrollY: 0, scrollX: 0 });

  const setScrollLocation = () => {
    const { scrollY, scrollX } = window;
    setScrollDimensions({ scrollY, scrollX });
  };

  useEffect(() => {
    setScrollLocation();
    window.addEventListener("scroll", setScrollLocation);

    return () => {
      window.removeEventListener("scroll", setScrollLocation);
    };
  }, []);

  return [scrollDimensions];
};

export default useScroll;
