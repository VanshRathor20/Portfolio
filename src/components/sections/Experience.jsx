import { motion, useReducedMotion } from "framer-motion";
import Container from "../layout/Container";
import SectionHeading from "../ui/SectionHeading";
import Reveal from "../ui/Reveal";
import { experience } from "../../data/experience";
import { fadeUp, staggerContainer, transition, viewport } from "../../lib/motion";

const Experience = () => {
  const reduceMotion = useReducedMotion();

  return (
    <section id="experience" className="section">
      <Container>
        <Reveal>
          <SectionHeading
            label="Experience"
            title="Work history"
            description="Full-time roles and contract work — focused on product engineering teams."
          />
        </Reveal>

        <motion.div
          className="timeline"
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          variants={reduceMotion ? undefined : staggerContainer}
        >
          {experience.map((item) => (
            <motion.article
              key={item.id}
              className="timeline-item"
              variants={reduceMotion ? undefined : fadeUp}
              transition={transition}
            >
              <span className="timeline-marker" aria-hidden="true" />

              <div className="timeline-content">
                <time className="timeline-period" dateTime={item.period}>
                  {item.period}
                </time>

                <div>
                  <h3 className="timeline-role">{item.role}</h3>
                  <p className="timeline-company">{item.company}</p>
                </div>

                <ul className="timeline-highlights">
                  {item.highlights.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </Container>
    </section>
  );
};

export default Experience;
