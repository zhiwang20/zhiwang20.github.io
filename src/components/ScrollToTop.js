import { useEffect } from "react";
import { useLocation } from "react-router-dom";

//Whenever the URL changes, scroll to the top. Otherwise the new page won't start from the top
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

export default ScrollToTop;
