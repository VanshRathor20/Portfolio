import { useEffect } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

const CursorGlow = () => {
  const cursorX = useMotionValue(-200);
  const cursorY = useMotionValue(-200);

  const springConfig = { damping: 25, stiffness: 150 };
  const x = useSpring(cursorX, springConfig);
  const y = useSpring(cursorY, springConfig);

  useEffect(() => {
    const moveCursor = (e) => {
      cursorX.set(e.clientX - 150);
      cursorY.set(e.clientY - 150);
    };

    window.addEventListener("mousemove", moveCursor);
    return () => window.removeEventListener("mousemove", moveCursor);
  }, [cursorX, cursorY]);

  return (
    <motion.div
      className="fixed top-0 left-0 w-[300px] h-[300px] rounded-full pointer-events-none z-0 hidden md:block"
      style={{
        x,
        y,
        background: "radial-gradient(circle, #22d3ee 0%, transparent 70%)",
        filter: "blur(80px)",
        opacity: 0.08,
      }}
    />
  );
};

export default CursorGlow;
