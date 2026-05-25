import { motion, useReducedMotion } from "framer-motion";
import Container from "../layout/Container";
import SectionHeading from "../ui/SectionHeading";
import Reveal from "../ui/Reveal";
import {
  FaReact,
  FaNodeJs,
  FaGitAlt,
  // FaDocker,
  FaHtml5,
} from "react-icons/fa";
import {
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiExpress,
  SiGraphql,
  SiSocketdotio,
  SiPostgresql,
  SiMongodb,
  SiMysql,
  SiRedis,
  SiVercel,
  SiFigma,
  SiPostman,
} from "react-icons/si";
import { TbApi } from "react-icons/tb";

const GROUPS = [
  {
    label: "Frontend",
    badges: [
      { name: "React", Icon: FaReact, color: "#61DAFB" },
      { name: "Next.js", Icon: SiNextdotjs, color: "#ffffff" },
      { name: "TypeScript", Icon: SiTypescript, color: "#3178C6" },
      { name: "Tailwind CSS", Icon: SiTailwindcss, color: "#38BDF8" },
      { name: "HTML & CSS", Icon: FaHtml5, color: "#E34F26" },
    ],
  },
  {
    label: "Backend",
    badges: [
      { name: "Node.js", Icon: FaNodeJs, color: "#68A063" },
      { name: "Express", Icon: SiExpress, color: "#ffffff" },
      { name: "REST", Icon: TbApi, color: "#7C3AED" },
      // { name: "GraphQL", Icon: SiGraphql, color: "#E10098" },
      // { name: "Socket.io", Icon: SiSocketdotio, color: "#ffffff" },
    ],
  },
  {
    label: "Database",
    badges: [
      // { name: "PostgreSQL", Icon: SiPostgresql, color: "#336791" },
      { name: "MongoDB", Icon: SiMongodb, color: "#47A248" },
      { name: "MySQL", Icon: SiMysql, color: "#4479A1" },
      // { name: "Redis", Icon: SiRedis, color: "#FF4438" },
    ],
  },
  {
    label: "Workflow",
    badges: [
      { name: "Git", Icon: FaGitAlt, color: "#F05032" },
      // { name: "Docker", Icon: FaDocker, color: "#2496ED" },
      { name: "Vercel", Icon: SiVercel, color: "#ffffff" },
      { name: "Figma", Icon: SiFigma, color: "#F24E1E" },
      { name: "Postman", Icon: SiPostman, color: "#FF6C37" },
    ],
  },
];

const Skills = () => {
  const reduceMotion = useReducedMotion();

  return (
    <section
      id="skills"
      style={{
        paddingTop: "6rem",
        paddingBottom: "6rem",
        paddingLeft: "2rem",
        paddingRight: "2rem",
        maxWidth: "1100px",
        margin: "0 auto",
      }}
    >
      <Container>
        <Reveal>
          <SectionHeading label="SKILLS" title="Toolbox" />
        </Reveal>

        <div style={{ marginTop: "24px" }}>
          {GROUPS.map((group, gIndex) => (
            <div
              key={group.label}
              style={{
                marginBottom: gIndex === GROUPS.length - 1 ? "0" : "40px",
              }}
            >
              <div
                style={{
                  fontFamily: "JetBrains Mono, monospace",
                  fontSize: "10px",
                  color: "#7C3AED",
                  letterSpacing: "0.2em",
                  textTransform: "uppercase",
                  marginBottom: "16px",
                  paddingLeft: "4px",
                }}
              >
                {group.label}
              </div>

              <div
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  gap: "10px",
                  paddingBottom: "0",
                }}
              >
                {group.badges.map((badge, bIndex) => (
                  <motion.span
                    key={badge.name}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.4,
                      delay: (gIndex * 10 + bIndex) * 0.03,
                    }}
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "8px",
                      background: "#0f0f0f",
                      border: "1px solid #1e1e1e",
                      borderRadius: "10px",
                      padding: "10px 16px",
                      marginRight: "10px",
                      marginBottom: "10px",
                      cursor: "default",
                      transition: "all 0.2s",
                      whiteSpace: "nowrap",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.borderColor = "#7C3AED";
                      e.currentTarget.style.background =
                        "rgba(124,58,237,0.06)";
                      e.currentTarget.style.transform = "translateY(-2px)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.borderColor = "#1e1e1e";
                      e.currentTarget.style.background = "#0f0f0f";
                      e.currentTarget.style.transform = "translateY(0)";
                    }}
                  >
                    <badge.Icon size={16} color={badge.color} aria-hidden />
                    <span
                      style={{
                        fontFamily: "JetBrains Mono, monospace",
                        fontSize: "12px",
                        color: "#A1A1AA",
                      }}
                    >
                      {badge.name}
                    </span>
                  </motion.span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Skills;
