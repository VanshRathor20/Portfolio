import { motion, useReducedMotion } from "framer-motion";
import Container from "../layout/Container";
import SectionHeading from "../ui/SectionHeading";
import Reveal from "../ui/Reveal";
import { fadeUp, staggerContainer, transition, viewport } from "../../lib/motion";

const STATS = [
  { value: "3+", label: "Years in web development" },
  { value: "12+", label: "Production apps shipped" },
  { value: "8+", label: "Teams collaborated with" },
];

const About = () => {
  const reduceMotion = useReducedMotion();

  return (
    <section id="about" className="section">
      <Container>
        <Reveal>
          <SectionHeading
            label="About"
            title="How I work"
          />
        </Reveal>

        <div className="about-grid">
          <motion.div
            className="about-stats"
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
            variants={reduceMotion ? undefined : staggerContainer}
          >
            {STATS.map((stat, index) => (
              <motion.div
                key={stat.label}
                className="stat-card"
                variants={reduceMotion ? undefined : fadeUp}
                transition={{ ...transition, delay: index * 0.05 }}
              >
                <p className="stat-value">{stat.value}</p>
                <p className="stat-label">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>

          <Reveal delay={0.08} className="about-bio">
            <h3 className="text-subheading">
              Frontend-first, with enough backend context to ship.
            </h3>

            <p className="text-body-lg">
              Most of my week is React — components, hooks, routing, and CSS that
              holds up on real devices. I like pairing with designers early so
              spacing and states are decided before pixels get locked in.
            </p>

            <p className="text-body">
              Before that I picked up the full stack out of necessity on smaller
              teams: REST APIs, auth, deployments. I still do it when the scope
              is small, but UI quality is what I optimize for.
            </p>

            <hr className="section-divider" />
          </Reveal>
        </div>
      </Container>
    </section>
  );
};

export default About;
