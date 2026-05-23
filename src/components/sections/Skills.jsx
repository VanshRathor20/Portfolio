import { motion, useReducedMotion } from "framer-motion";
import Container from "../layout/Container";
import SectionHeading from "../ui/SectionHeading";
import Reveal from "../ui/Reveal";
import { skills } from "../../data/skills";
import { fadeUp, staggerContainer, transition, viewport } from "../../lib/motion";

const Skills = () => {
  const reduceMotion = useReducedMotion();

  return (
    <section id="skills" className="section">
      <Container>
        <Reveal>
          <SectionHeading
            label="Skills"
            title="Toolbox"
            description="What I reach for on a typical sprint — not a laundry list of every logo I've touched once."
          />
        </Reveal>

        <motion.div
          className="skills-grid"
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          variants={reduceMotion ? undefined : staggerContainer}
        >
          {skills.map((category, index) => (
            <motion.article
              key={category.id}
              className="skill-category"
              variants={reduceMotion ? undefined : fadeUp}
              transition={{ ...transition, delay: index * 0.04 }}
            >
              <div className="skill-category-header">
                <h3 className="skill-category-title">{category.title}</h3>
                <p className="skill-category-desc">{category.description}</p>
              </div>

              <ul
                className="skill-badges"
                aria-label={`${category.title} technologies`}
              >
                {category.items.map((item) => (
                  <li key={item}>
                    <span className="skill-badge">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.article>
          ))}
        </motion.div>
      </Container>
    </section>
  );
};

export default Skills;
