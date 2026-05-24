import { motion, useReducedMotion } from "framer-motion";
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

            <h1 className="text-display">Full-stack apps, shipped fast.</h1>

            <p className="text-body-lg max-w-prose">
              Full stack developer focused on modern web applications,
              interactive interfaces, and performant backend systems. I build
              products that look premium and feel seamless.
            </p>

            <div className="hero-actions">
              <Button href="#projects" variant="primary">
                View My Work
              </Button>
              <Button href="#contact" variant="secondary">
                Let's Talk
              </Button>
            </div>
          </motion.div>

          <motion.div className="hero-visual-wrap" {...visualAnim}>
            <div className="hero-visual" aria-hidden="true">
              <div className="hero-visual-glow hero-visual-glow--one" />
              <div className="hero-visual-glow hero-visual-glow--two" />
              <div className="hero-visual-scene">
                <Robo />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
