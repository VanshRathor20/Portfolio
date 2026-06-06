import { useEffect, useRef, useState } from "react";

const SIZE = 30;
const HALF = SIZE / 2;
const LERP = 0.12;

const lerp = (start, end, factor) => start + (end - start) * factor;

const CursorTrail = () => {
  const [active, setActive] = useState(false);
  const trailRef = useRef(null);
  const target = useRef({ x: 0, y: 0 });
  const current = useRef({ x: 0, y: 0 });
  const rafId = useRef(null);
  const hasMoved = useRef(false);

  useEffect(() => {
    const touchQuery = window.matchMedia("(hover: none)");
    if (touchQuery.matches) return;

    setActive(true);

    const onMove = (event) => {
      target.current = { x: event.clientX, y: event.clientY };

      if (!hasMoved.current) {
        current.current = { x: event.clientX, y: event.clientY };
        hasMoved.current = true;
      }
    };

    const animate = () => {
      current.current.x = lerp(current.current.x, target.current.x, LERP);
      current.current.y = lerp(current.current.y, target.current.y, LERP);

      if (trailRef.current) {
        trailRef.current.style.transform = `translate3d(${current.current.x - HALF}px, ${current.current.y - HALF}px, 0)`;
      }

      rafId.current = requestAnimationFrame(animate);
    };

    window.addEventListener("mousemove", onMove, { passive: true });
    rafId.current = requestAnimationFrame(animate);

    const onTouchChange = (event) => {
      if (event.matches) {
        setActive(false);
        window.removeEventListener("mousemove", onMove);
        if (rafId.current) cancelAnimationFrame(rafId.current);
      }
    };

    touchQuery.addEventListener("change", onTouchChange);

    return () => {
      window.removeEventListener("mousemove", onMove);
      touchQuery.removeEventListener("change", onTouchChange);
      if (rafId.current) cancelAnimationFrame(rafId.current);
    };
  }, []);

  if (!active) return null;

  return (
    <div
      ref={trailRef}
      aria-hidden="true"
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: SIZE,
        height: SIZE,
        borderRadius: "50%",
        pointerEvents: "none",
        zIndex: 99999,
        opacity: 0.65,
        willChange: "transform",
        background:
          "radial-gradient(circle, #B3CFE5 0%, rgba(179, 207, 229, 0.4) 35%, transparent 70%)",
      }}
    />
  );
};

export default CursorTrail;
