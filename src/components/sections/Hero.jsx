import { motion, useReducedMotion } from "framer-motion";
import Container from "../layout/Container";
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
    <section id="hero" className="hero">
      <Container>
        <div className="hero-grid">
          <motion.div className="hero-content stack-lg" {...anim}>
            <p className="text-label">Full Stack Developer</p>

            <h1 className="text-display">
              Product UI, built with care.
            </h1>

            <p className="text-body-lg max-w-prose">
              I work in React and TypeScript — layout systems, forms, data
              tables, and the unglamorous states in between. Based in India,
              open to remote roles and selective freelance work.
            </p>

            <div className="hero-actions">
              <Button href="#projects" variant="primary">
                View work
              </Button>
              <Button href="#contact" variant="secondary">
                Contact
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
      </Container>
    </section>
  );
};

export default Hero;
