import gsap from "gsap";

import { SplitText } from "gsap/SplitText";
import { useEffect, useRef } from "react";

gsap.registerPlugin(SplitText);

function TypeAnimation({ children, className }) {
  const textRef = useRef(null);
  const splitRef = useRef(null);
  const animationRef = useRef(null);

  useEffect(() => {
    // Split the text into characters, words, and lines
    splitRef.current = SplitText.create(textRef.current, {
      type: "chars,words,lines",
    });

    // Animate characters on initial load
    animationRef.current = gsap.from(splitRef.current.chars, {
      x: 150,
      opacity: 0,
      duration: 0.7,
      ease: "power4",
      stagger: 0.04,
      delay: 1,
    });

    // Cleanup on unmount or resize
    const handleResize = () => {
      splitRef.current && splitRef.current.revert();
      animationRef.current && animationRef.current.revert();

      splitRef.current = SplitText.create(textRef.current, {
        type: "chars,words,lines",
      });

      animationRef.current = gsap.from(splitRef.current.chars, {
        x: 150,
        opacity: 0,
        duration: 0.7,
        ease: "power4",
        stagger: 0.04,
        delay: 0.75,
      });
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      splitRef.current && splitRef.current.revert();
      animationRef.current && animationRef.current.revert();
    };
  }, []);

  return (
    <>
      <p ref={textRef} className={`text ${className}`}>
        {children}
      </p>
    </>
  );
}

export default TypeAnimation;
