import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  useMotionValue,
  useVelocity,
  useAnimationFrame,
} from "framer-motion";
import { useRef, useEffect, useState } from "react";

export default function ParallaxScrollText({ children, baseVelocity = 100 }) {
  const baseX = useMotionValue(0);
  const containerRef = useRef(null);
  const contentRef = useRef(null);
  const [contentWidth, setContentWidth] = useState(0);

  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);
  const smoothVelocity = useSpring(scrollVelocity, {
    damping: 50,
    stiffness: 400,
  });

  const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 5], {
    clamp: false,
  });

  const directionFactor = useRef(1);

  // Measure content width
  useEffect(() => {
    const updateWidth = () => {
      if (contentRef.current) {
        setContentWidth(contentRef.current.offsetWidth);
      }
    };
    updateWidth();
    window.addEventListener("resize", updateWidth);
    return () => window.removeEventListener("resize", updateWidth);
  }, []);

  useAnimationFrame((_, delta) => {
    if (!contentWidth) return;

    let moveBy = directionFactor.current * baseVelocity * (delta / 1000);
    const velocityBoost = velocityFactor.get();

    if (velocityBoost < 0) {
      directionFactor.current = -1;
    } else if (velocityBoost > 0) {
      directionFactor.current = 1;
    }

    moveBy += directionFactor.current * moveBy * velocityBoost;

    const currentX = baseX.get();
    let nextX = currentX + moveBy;

    // Reset when completely off-screen
    if (Math.abs(nextX) >= contentWidth) {
      nextX = 0;
    }

    baseX.set(nextX);
  });

  const x = useTransform(baseX, (v) => {
    if (contentWidth === 0) return 0;
    const mod = ((v % contentWidth) + contentWidth) % contentWidth;
    return -mod;
  });

  return (
    <div
      ref={containerRef}
      className="overflow-hidden whitespace-nowrap w-full"
    >
      <motion.div
        className="flex gap-10 text-3xl font-bold"
        style={{ x }}
        ref={contentRef}
      >
        {[...Array(3)].map((_, i) => (
          <div key={i} className="flex items-center gap-10">
            {children}
          </div>
        ))}
      </motion.div>
    </div>
  );
}
