import { motion, useReducedMotion } from "framer-motion";
import { useState, useEffect } from "react";
import Button from "../ui/Button";
import { easeOut, transition } from "../../lib/motion";
import Robo from "../ui/Robo";

const Hero = () => {
  const reduceMotion = useReducedMotion();

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

  const [roboLoaded, setRoboLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setRoboLoaded(true);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section id="home" className="hero">
      <div
        style={{
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          paddingTop: "0",
          paddingLeft: "48px",
          paddingRight: "48px",
          paddingBottom: "0",
          maxWidth: "1100px",
          margin: "0 auto",
          width: "100%",
        }}
      >
        <div className="hero-grid">
          <motion.div className="hero-content stack-lg" {...anim}>
            <p className="text-label">FULL-STACK DEVELOPER</p>

            <h1 className="text-display">
              Fast. Clean. Modern web experiences.
            </h1>

            <p className="text-body-lg max-w-prose">
              Full Stack Developer building scalable and visually polished
              applications with modern frontend and backend technologies.
            </p>

            <div className="hero-actions">
              <Button href="#projects" variant="primary">
                View Projects
              </Button>

              <Button href="#contact" variant="secondary">
                Let’s Connect
              </Button>
            </div>
          </motion.div>

          <motion.div className="hero-visual-wrap" {...visualAnim}>
            <div className="hero-visual" aria-hidden="true">
              <div className="hero-visual-glow hero-visual-glow--one" />
              <div className="hero-visual-glow hero-visual-glow--two" />
              <div
                style={{ position: "relative", width: "100%", height: "100%" }}
              >
                {/* SKELETON — shows while loading */}
                {!roboLoaded && (
                  <div
                    style={{
                      width: "500px",
                      height: "500px",
                      borderRadius: "50%",
                      background:
                        "linear-gradient(135deg, #111 0%, #1a1a1a 50%, #111 100%)",
                      backgroundSize: "200% 200%",
                      animation: "shimmer 1.5s infinite",
                      margin: "0 auto",
                    }}
                  />
                )}

                {/* ACTUAL ROBOT */}
                <div
                  style={{
                    opacity: roboLoaded ? 1 : 0,
                    transition: "opacity 0.8s ease",
                    position: "absolute",
                    top: 0,
                    left: 0,
                  }}
                >
                  <Robo onLoad={() => setRoboLoaded(true)} />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
