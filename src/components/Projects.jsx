import { motion } from "framer-motion";
import { FiExternalLink } from "react-icons/fi";
import { FaGithub, FaReact, FaNodeJs } from "react-icons/fa";
import {
  SiMongodb,
  SiSocketdotio,
  SiRedis,
  SiNextdotjs,
  SiPostgresql,
  SiGraphql,
  SiDocker,
} from "react-icons/si";
import {
  staggerContainer,
  fadeSlideUp,
  projectCardHover,
  buttonHoverTap,
  viewportOnce,
} from "../motionVariants";

const SectionHeading = ({ title }) => (
  <div className="mb-12">
    <h2 className="text-4xl font-bold">{title}</h2>
    <div className="w-16 h-1 bg-accent mt-2" />
  </div>
);

const PROJECTS = [
  {
    title: "E-Commerce Platform",
    description:
      "Full-stack e-commerce with auth, cart, payments, and admin dashboard.",
    stack: ["React", "Node.js", "MongoDB", "Stripe"],
    icons: [
      { Icon: FaReact, className: "text-[#61DAFB]" },
      { Icon: FaNodeJs, className: "text-[#339933]" },
      { Icon: SiMongodb, className: "text-[#47A248]" },
    ],
  },
  {
    title: "Real-Time Chat App",
    description:
      "Scalable real-time messaging with rooms, typing indicators, and message history.",
    stack: ["React", "Socket.io", "Express", "Redis"],
    icons: [
      { Icon: FaReact, className: "text-[#61DAFB]" },
      { Icon: SiSocketdotio, className: "text-accent" },
      { Icon: SiRedis, className: "text-[#DC382D]" },
    ],
  },
  {
    title: "Task Management SaaS",
    description:
      "Multi-tenant SaaS with role-based access, boards, and analytics dashboard.",
    stack: ["Next.js", "PostgreSQL", "GraphQL", "Docker"],
    icons: [
      { Icon: SiNextdotjs, className: "text-white" },
      { Icon: SiPostgresql, className: "text-[#4169E1]" },
      { Icon: SiGraphql, className: "text-[#E10098]" },
      { Icon: SiDocker, className: "text-[#2496ED]" },
    ],
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-24 max-w-6xl mx-auto px-6">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={viewportOnce}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <SectionHeading title="What I've Built" />

        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={viewportOnce}
        >
          {PROJECTS.map((project) => (
            <motion.article
              key={project.title}
              variants={fadeSlideUp}
              {...projectCardHover}
              className="bg-card border border-border rounded-2xl p-6 flex flex-col"
            >
              <div className="flex-1">
                <h3 className="text-xl font-bold text-white mb-3">
                  {project.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.stack.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs font-mono text-accent/80 bg-accent/10 px-2 py-1 rounded"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex gap-3 mb-6">
                {project.icons.map(({ Icon, className }, i) => (
                  <Icon key={i} className={`text-2xl ${className}`} />
                ))}
              </div>

              <div className="flex gap-3 mt-auto">
                <motion.a
                  href="#"
                  {...buttonHoverTap}
                  className="flex-1 flex items-center justify-center gap-2 py-2 rounded-lg bg-accent/10 text-accent text-sm font-medium border border-accent/30 hover:bg-accent/20 transition-colors"
                >
                  <FiExternalLink />
                  Live Demo
                </motion.a>
                <motion.a
                  href="#"
                  {...buttonHoverTap}
                  className="flex-1 flex items-center justify-center gap-2 py-2 rounded-lg border border-border text-gray-300 text-sm font-medium hover:border-accent/50 hover:text-accent transition-colors"
                >
                  <FaGithub />
                  GitHub
                </motion.a>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Projects;
