import { motion, useReducedMotion } from "framer-motion";
import Container from "../layout/Container";
import SectionHeading from "../ui/SectionHeading";
import Button from "../ui/Button";
import Reveal from "../ui/Reveal";
import { projects } from "../../data/projects";
import { fadeUp, staggerContainer, transition, viewport } from "../../lib/motion";

const linkProps = {
  target: "_blank",
  rel: "noopener noreferrer",
};

const Projects = () => {
  const reduceMotion = useReducedMotion();

  return (
    <section id="projects" className="section">
      <Container>
        <Reveal>
          <SectionHeading
            label="Projects"
            title="Recent work"
            description="Case studies and repos I can share publicly. Details available on request for NDA work."
          />
        </Reveal>

        <motion.div
          className="projects-grid"
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          variants={reduceMotion ? undefined : staggerContainer}
        >
          {projects.map((project) => (
            <motion.article
              key={project.id}
              className="project-card"
              variants={reduceMotion ? undefined : fadeUp}
              transition={transition}
            >
              <div className="project-card-image" aria-hidden="true">
                <span className="project-card-image-label">{project.title}</span>
              </div>

              <div className="project-card-body">
                <h3 className="project-card-title">{project.title}</h3>
                <p className="project-card-desc">{project.description}</p>

                <ul
                  className="project-card-stack"
                  aria-label={`${project.title} tech stack`}
                >
                  {project.stack.map((tech) => (
                    <li key={tech}>
                      <span className="project-tech-tag">{tech}</span>
                    </li>
                  ))}
                </ul>

                <div className="project-card-actions">
                  <Button
                    href={project.live}
                    variant="primary"
                    className="btn-sm"
                    {...linkProps}
                  >
                    Live
                  </Button>
                  <Button
                    href={project.github}
                    variant="secondary"
                    className="btn-sm"
                    {...linkProps}
                  >
                    Code
                  </Button>
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </Container>
    </section>
  );
};

export default Projects;
