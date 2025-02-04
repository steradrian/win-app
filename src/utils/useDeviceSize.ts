import { useEffect, useState } from "react";

/**
 * Custom hook to get the current window width.
 * @returns {object} An object containing the current window width.
 */
const useDeviceSize = () => {
  const [windowWidth, setWindowWidth] = useState(0);

  const handleWindowResize = () => {
    setWindowWidth(window.innerWidth);
  };

  useEffect(() => {
    // Component is mounted, and window is available
    handleWindowResize();
    window.addEventListener("resize", handleWindowResize);
    // Unsubscribe from the event on component unmount
    return () => window.removeEventListener("resize", handleWindowResize);
  }, []);

  return { windowWidth };
};

export default useDeviceSize;
