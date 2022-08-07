import { useState, useRef, useEffect } from "react";
function useHover() {
  const hoverElem = useRef(null);
  const [hovered, setHovered] = useState(false);
  function onEnter() {
    setHovered(true);
  }
  function onLeave() {
    setHovered(false);
  }

  useEffect(() => {
    hoverElem.current.addEventListener("mouseenter", onEnter);
    hoverElem.current.addEventListener("mouseleave", onLeave);

    return () => {
      hoverElem.current.removeEventListener("mouseenter", onEnter);
      hoverElem.current.removeEventListener("mouseleave", onLeave);
    };
  }, []);
  return [hovered, hoverElem];
}

export default useHover;
