import { motion, useReducedMotion } from "framer-motion";
import { useState, useEffect } from "react";
import Button from "../ui/Button";
import { easeOut, transition } from "../../lib/motion";
import Robo from "../ui/Robo";
import Container from "../layout/Container";

const Hero = () => {
  const reduceMotion = useReducedMotion();

  const [isMobile, setIsMobile] = useState(
    typeof window !== "undefined" ? window.innerWidth < 768 : false,
  );

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const anim = reduceMotion
    ? {}
    : {
        initial: { opacity: 0, y: 12 },
        animate: { opacity: 1, y: 0 },
        transition: { ...transition, delay: 0.05 },
      };

  const visualAnim = reduceMotion
    ? {}
    : {
        initial: { opacity: 0, y: 12 },
        animate: { opacity: 1, y: 0 },
        transition: { ...transition, delay: 0.15, ease: easeOut },
      };

  // Robo is lazy-loaded inside its component (Suspense fallback is transparent)

  return (
    <section
      id="home"
      className="hero"
      style={{ paddingTop: isMobile ? "60px" : "80px" }}
    >
      <Container>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr",
            gap: "2.5rem",
            alignItems: "center",
            minHeight: isMobile ? "auto" : "calc(100vh - 160px)",
          }}
        >
          <motion.div className="hero-content stack-lg" {...anim}>
            <p className="text-label">FULL-STACK DEVELOPER</p>

            <h1 className="text-display">
              Fast. Clean. Modern web experiences.
            </h1>

            <p className="text-body-lg max-w-prose">
              Full Stack Developer building scalable and visually polished
              applications with modern frontend and backend technologies.
            </p>

            <div
              className="hero-actions"
              style={{
                display: "flex",
                gap: "1rem",
                flexDirection: isMobile ? "column" : "row",
              }}
            >
              <Button
                href="#projects"
                variant="primary"
                className="btn-lg"
                style={isMobile ? { width: "100%" } : {}}
              >
                View Projects
              </Button>

              <Button
                href="#contact"
                variant="secondary"
                className="btn-lg"
                style={isMobile ? { width: "100%" } : {}}
              >
                Let's Connect
              </Button>
            </div>
          </motion.div>
          <motion.div className="hero-visual-wrap" {...visualAnim}>
            <div
              className="hero-visual"
              aria-hidden="true"
              style={{ paddingBottom: isMobile ? "90px" : undefined }}
            >
              <div className="hero-visual-glow hero-visual-glow--one" />
              <div className="hero-visual-glow hero-visual-glow--two" />
              <div
                style={{ position: "relative", width: "100%", height: "100%" }}
              >
                <Robo />
              </div>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
};

export default Hero;
