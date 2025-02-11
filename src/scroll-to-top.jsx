import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0 }); // Smooth scroll to top
  }, [pathname]); // Runs on route change

  return null; // Doesn't render anything
};

export default ScrollToTop;
