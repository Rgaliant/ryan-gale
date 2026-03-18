"use client";

import { useEffect } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function CustomCursor() {
  const mouseX = useMotionValue(-200);
  const mouseY = useMotionValue(-200);

  const ringX = useSpring(mouseX, { stiffness: 420, damping: 28 });
  const ringY = useSpring(mouseY, { stiffness: 420, damping: 28 });
  const dotX = useSpring(mouseX, { stiffness: 800, damping: 40 });
  const dotY = useSpring(mouseY, { stiffness: 800, damping: 40 });

  useEffect(() => {
    const move = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, [mouseX, mouseY]);

  return (
    <>
      {/* Outer ring */}
      <motion.div
        style={{
          position: "fixed",
          left: ringX,
          top: ringY,
          x: "-50%",
          y: "-50%",
          width: 28,
          height: 28,
          border: "1px solid var(--green)",
          borderRadius: "50%",
          pointerEvents: "none",
          zIndex: 99998,
          opacity: 0.7,
          boxShadow: "0 0 8px var(--green-glow)",
          mixBlendMode: "screen",
        }}
      />
      {/* Inner dot */}
      <motion.div
        style={{
          position: "fixed",
          left: dotX,
          top: dotY,
          x: "-50%",
          y: "-50%",
          width: 5,
          height: 5,
          background: "var(--green)",
          borderRadius: "50%",
          pointerEvents: "none",
          zIndex: 99999,
          boxShadow: "0 0 6px var(--green), 0 0 12px var(--green-glow)",
        }}
      />
    </>
  );
}
