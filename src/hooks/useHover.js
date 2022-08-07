import { useState, useRef, useEffect } from "react";
function useHover() {
    const [hovered, setHovered] = useState(false);
    const hoverElem = useRef(null);
    function onEnter() {
        setHovered(true);
    }
    function onLeave() {
        setHovered(false);
    }
    
    useEffect(() => {
        const current = hoverElem.current
    if (current) {
        current.addEventListener('mouseenter',onEnter);
        current.addEventListener('mouseleave',onLeave);
      }
      return () => {
        current.removeEventListener('mouseenter',onEnter);
        current.removeEventListener('mouseleave',onLeave);
      };
  }, []);
  return [hovered, hoverElem];
}

export default useHover;
